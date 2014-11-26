# SPQR Website

## Einmaliges Setup pro Rechner
* Node.js installieren
* Globale Installation von Grunt `npm install -g grunt-cli`
* Lokale Pakete installieren `npm install`

## Änderungen
* Für das Template an sich `index.html` editieren
* Für die Unterseiten `pages/*.html` editieren
* Für Änderung des "slug" `js/app.js` editieren
* `grunt` ausführen
* Die aktuelle Version befindet sich in `target`, also einfach im
  Browser öffnen (bei Problemen in Chrome Same Origin Policy [beachten](http://stackoverflow.com/questions/8449716/cross-origin-requests-are-only-supported-for-http-but-its-not-cross-domain))

## Optionales Äufräumen
* `grunt clean`

## Optionaler Test mit Vagrant
* Vagrant einmalig [installieren](https://www.vagrantup.com)
* `vagrant up`
* Hinterher vollständig aufräumen (optional)
    * `vagrant halt`
    * `vagrant destroy`

## Deployment
* `grunt`
* Upload des Verzeichnisses `target` -> `spqr-info` per ftp.

EOF
