# Umsetzung: Umsatz vor Infrastruktur

## Aktueller Stand
- Statische Vercel-Verkaufsseite mit Stripe-Payment-Link für Social Starter 49 EUR.
- Homepage verlinkt auf das Angebot.
- Öffentliches Marketing nur nach Prüfung der Pflichtangaben und des Bestellprozesses.
- Keine bestätigten Besuche, Anfragen oder Umsätze.

## GitHub-Projekte
1. Postiz: https://github.com/gitroomhq/postiz-app – Social-Media-Scheduling, API und n8n-Integration; self-hosting braucht Infrastruktur und autorisierte Konten.
2. OpenPost: https://github.com/getopenpost/openpost – selbst hostbare Social-Planung, Workflows und Content-Editor.
3. n8n: https://github.com/n8n-io/n8n – Automatisierung von Auftragseingang, Briefing und Status, sobald sichere Zugänge und Einwilligungen geklärt sind.

## Umsatzfokus
1. Rechtliche Pflichtangaben und steuerliche Checkout-Konfiguration prüfen.
2. 3 Beispielposts und Angebot als öffentliche organische Beiträge auf einem **Geschäftskanal** veröffentlichen.
3. Gezielt auf freiwillige Anfragen reagieren, keine unerlaubten Werbe-DMs oder Werbe-E-Mails.
4. Erst nach der ersten Bestellung Auftragsbearbeitung automatisieren.
5. Keine bezahlte Domain, Anzeigen oder Software vor bestätigtem Umsatz.

## Technische Automatisierung später
Stripe Event -> authentifizierter Webhook -> sichere Auftragsablage -> Bestellbestätigung -> Briefing -> Produktions-Checkliste -> Lieferung -> Rechnung.
Nicht ohne Verifikation und Webhook-Signatur aktivieren.

## Offene Freigaben
- Die im Impressum angegebene Geschäftsanschrift muss durch den Inhaber bestätigt werden.
- Datenschutzhinweise auf Vercel und Stripe anpassen.
- Angaben zu Leistungsbeginn, Widerruf und Rechnungsstellung juristisch prüfen.
- TikTok clean_spartacus ist ein persönlicher Kanal und bleibt unangetastet.
