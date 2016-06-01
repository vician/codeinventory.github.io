---
layout: post
title:  "Zamrznutí Acer Iconia Tab 8 A1-840"
date:   2015-06-20 20:57:00 +0100
categories: android
---

Nedávno jsem se vyskytl u zajímavého problému s tabletem Acer Iconia Tab 8 A1-840.

Tablet měl černou obrazovku, nereagoval na žádná tlačítka ani na připojení k nabíječce. Když jsem jej připojil k počítači a přes [fastboot devices](https://code.google.com/p/adb-fastboot-install/) zjišťoval, zda je připojený, opět nereagoval.
Delší ponechání tabletu v nabíječce nepomohlo.

![Acer Iconia Tab 8 A1-840](http://ecx.images-amazon.com/images/I/81YcxoVzKfL._SL1500_.jpg)

Vyzkoušel jsem i hard reset, kdy se má mačkat tlačítko zapnutí spolu s tlačítky hlasitostí (žádná kombinace nepomohla).

Nezbylo mi nic jiného než více "googlit". Tím jsem zjistil, že tento problém není ojedinělý a nakonec jsem našel i návod, který pomohl.

Je potřeba podržet tlačítko zapnutí (zámku) asi třicet vteřin a poté zkusit tablet normálně zapnout.

Zní to kuriózně, ale skutečně to pomohlo.

To pravděpodobně znamená, že tablet zůstává zaseknutý se zamknutou obrazovkou a nereaguje na impulsy od tlačítek. Pokud by se tablet v tomto stavu úplně vybil, je pravděpodobné, že by šel normálně nabít a uživatel by nic nezaznamenal.

Co jsem se ptal, chyba se v průměru vyskytuje maximálně jednou za dva měsíce. To by mne samotného asi nemotivovalo k reklamaci tabletu, která může být vzhledem k povaze chyby komplikovaná.

Je možné, že chyba je softwarového charakteru a že ji ACER opraví v následující aktualizaci tabletu (jestli je ještě vydává).

_Zdroj obrázku: <http://ecx.images-amazon.com/images/I/81YcxoVzKfL._SL1500_.jpg>_
