# SPQR Website

## Einmaliges Setup pro Rechner
* Node.js installieren
* Globale Installation von Grunt `npm install -g grunt-cli`
* Lokale Pakete installieren `npm install`

## Änderungen
* Für das Template an sich `index.html` editieren
* Für die Unterseiten `pages/*.html` editieren
* Für Änderung des "slug" `js/app.js` editieren
* __Unbedingt__ die Version in `cache.manifest` erhöhen!!!
* `grunt` ausführen
* Die aktuelle Version befindet sich in `target`, also einfach im
  Browser öffnen

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
