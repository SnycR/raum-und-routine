#!/usr/bin/env node
// Pinned development tools only. Nothing here is imported by the application.
import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const [command, ...args] = process.argv.slice(2);
const env = { ...process.env, DO_NOT_TRACK: '1', IMPECCABLE_LIVE_COPY_AGENT: 'off' };
function run(bin, argv, options = {}) {
  const result = spawnSync(bin, argv, { cwd: root, env, stdio: 'inherit', ...options });
  if (result.error) throw result.error;
  return result.status ?? 1;
}
try {
  if (command === 'design') {
    process.exitCode = run('npm', ['exec', '--yes', '--package=impeccable@4.10.0', '--', 'impeccable', 'detect', '--json', ...(args.length ? args : ['.'])]);
  } else if (command === 'review' || command === 'rules') {
    process.exitCode = run('npm', ['exec', '--yes', '--package=@alibaba-group/open-code-review@1.14.2', '--', 'ocr', 'delegate', command === 'review' ? 'preview' : 'rule', '--format', 'json', ...args]);
  } else if (command === 'research-preflight') {
    const commit = '331025e662756ca51e86dfddcf59969f6dba25a0';
    const cache = join(homedir(), '.cache', 'syncit-project-tools');
    const checkout = join(cache, `last30days-${commit}`);
    mkdirSync(cache, { recursive: true });
    if (!existsSync(join(checkout, '.git'))) {
      if (run('git', ['clone', '--no-checkout', 'https://github.com/mvanhorn/last30days-skill.git', checkout])) process.exit(1);
      if (run('git', ['-C', checkout, 'checkout', '--detach', commit])) process.exit(1);
    }
    const head = spawnSync('git', ['-C', checkout, 'rev-parse', 'HEAD'], { encoding: 'utf8' });
    if (head.status !== 0 || head.stdout.trim() !== commit) throw Error('Research checkout does not match the pinned commit.');
    const python = process.env.LAST30DAYS_PYTHON || 'python3';
    if (run(python, ['-I', '-c', 'import sys; raise SystemExit(0 if sys.version_info >= (3,12) else 1)'])) {
      throw Error('last30days requires Python 3.12+; set LAST30DAYS_PYTHON to that interpreter.');
    }
    process.exitCode = run(python, [join(checkout, 'skills/last30days/scripts/last30days.py'), '--preflight', '--no-browser-cookies'], {
      env: { ...env, LAST30DAYS_MEMORY_DIR: '' },
    });
  } else {
    console.error('Usage: node scripts/project-tools.mjs design [paths...] | review [range flags...] | rules <paths...> | research-preflight');
    process.exitCode = 1;
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
