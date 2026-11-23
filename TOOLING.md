# Projektwerkzeuge

Stand: 23.11.2026. Die Werkzeuge laufen nur auf dem Entwicklungsrechner oder in CI, nicht im Produkt.

## Wiederholbare Prüfungen

Node.js 22+, npm und Git verwenden. Die CLI-Versionen sind in `scripts/project-tools.mjs` festgehalten.

```sh
node scripts/project-tools.mjs design
node scripts/project-tools.mjs review
node scripts/project-tools.mjs rules pfad/zur/geaenderten/datei
node scripts/project-tools.mjs research-preflight
```

- **Impeccable 4.10.0:** mechanische Designprüfung. Exit 2 bedeutet Befunde, Exit 1 einen Prüffehler. Schrift- und Musterwarnungen einzeln beurteilen; sie beweisen keinen Fehler. Ein Quellscan misst keine gerenderten Kontraste und ersetzt keinen Browser-/Tastaturtest.
- **Open Code Review 1.14.2, Delegation:** die CLI wählt Änderungen und Regeln aus. Der aktuelle Coding-Agent liest anschließend alle Diffs und prüft sie. Preview und Regeln allein sind kein KI-Review. Dieser Modus benötigt keinen separaten Modellanbieter und versendet keinen Code an einen zusätzlichen Modellanbieter.
- **last30days:** der Preflight lädt den auf Commit `331025e662756ca51e86dfddcf59969f6dba25a0` fixierten Quellcode in den lokalen Cache und prüft Python 3.12+, Quellen und geplante Schreibzugriffe. Er recherchiert nicht, liest keine Browser-Cookies und legt keine neuen Schlüssel an. Für eine echte Recherche die originale `skills/last30days/SKILL.md` im Cache lesen und deren Ablauf verwenden.

Die Pull-Request-Prüfung führt die vorhandenen Tests/Typprüfungen bzw. JavaScript-Syntaxprüfungen sowie den Designscan aus. Designbefunde sind Hinweise; fehlgeschlagene Scans bleiben Fehler. Keine Modell-API-Schlüssel sind in CI erforderlich. Ein npm-Download und gegebenenfalls der Download des Design-Prüfprogramms sind beim ersten Lauf erforderlich.

## Anwendung der weiteren Empfehlungen

- **Astryx:** möglicher Baustein für eine neu geplante React-Oberfläche. Die vorhandene Oberfläche wird nicht ohne Funktionsbedarf auf ein anderes Komponentensystem umgebaut. Dadurch bleiben bestehende Abläufe und Design erhalten.
- **Univer:** sinnvoll, wenn ein Auftrag ausdrücklich eine editierbare Kalkulation/Tabelle im Browser braucht. Kein Ersatz für Rechnungsnummern, Buchungslogik oder Datenbankberechtigungen. Noch keine Runtime-Integration; vor Excel-Import/-Export und kommerziellen Modulen deren Lizenz und Kosten prüfen.
- **Sure:** separate private Finanzanwendung, AGPLv3. Keine Kundendaten oder Rechnungen in Sure übertragen; keine bestehende Buchhaltung ersetzen. Nicht als Abhängigkeit dieses Projekts installiert.

## Recherche für SyncIT

Vor Kundengesprächen aktuelle öffentliche Unternehmensquellen, technische Fundstellen und Community-Beobachtungen getrennt erfassen. Für jede Aussage Original-URL, Abrufdatum, Beleg und Unsicherheit notieren. Eine Social-Media-Meinung ist kein nachgewiesener Websitefehler; ein Trend ist keine Umsatzprognose. Keine Kontaktaufnahme und kein automatischer Versand durch diese Werkzeuge.
