# Strona GPX Tracks — kontekst

Weryfikacja: 2026-09-15.

## Pogodniejsza oprawa — 2026-09-15

- Wspólny motyw EN/PL rozjaśniono: kremowe tło, ciemnozielony tekst, limonkowe przyciski oraz pastelowe karty z akcentami turkusu i moreli.
- `assets/sunny-trail.png` to słoneczny krajobraz wygenerowany image_gen na podstawie motywu miniaturowego terenu i czerwonej trasy z wcześniejszej grafiki w `gpx-tracker/super/`. Jedna ilustracja bez napisów służy jako tło nagłówków w obu językach. Karty funkcji dostały trzy dekoracyjne ikony SVG; pozostałe grafiki zachowano.
- Automatycznie porównano tekst wszystkich dziewięciu stron przed i po zmianie: treść zachowana. Sprawdzono zasoby, odnośniki, kotwice i `git diff --check`. Obejrzano rendery Firefoksa EN/PL na komputerze oraz PL na szerokości 390 px (start, poradnik, FAQ i polityka w odpowiednich widokach).

## Stan

- To ogólna strona aplikacji, z oddzielną polityką prywatności. Wersja EN: `index.html` i zgodny starszy adres `index-en.html`; samouczek: `waypoints-en.html`; pomoc: `faq-en.html`.
- Wersja PL jest kompletna: `index-pl.html`, `waypoints-pl.html`, `faq.html` i `privacy.html`. Strona główna, poradnik i FAQ odpowiadają układowi EN; korzystają z właściwych grafik `assets/pl/`. Nazwy przycisków aplikacji w poradniku pozostają po angielsku z polskim objaśnieniem. Przełączniki EN/PL prowadzą do odpowiadających podstron; dodano odnośniki hreflang. Domyślny `index.html` nadal jest angielski.
- `privacy-en.html` i `privacy.html` pozostają bezpośrednimi, samodzielnymi dokumentami. Zmieniono oprawę i nawigację; nie przepisywano treści polityki ani daty jej aktualizacji.
- Wszystkie grafiki znajdują się w repozytorium. `assets/en/` i `assets/pl/`: po 9 PNG (7 ekranów z dostarczonego katalogu oraz 2 starsze materiały promocyjne). Mapa bez widocznych nazw użytkownika została skopiowana bez zmian. Pozostałe ekrany mają przykładowe nazwy i opisy; UI pozostaje po angielsku, zgodnie z aplikacją.
- Edycje wykonano wbudowanym image_gen. Prompty: `assets/IMAGE-PROMPTS.md`. To ilustracje na podstawie prawdziwych zrzutów, po edycji generatywnej, a nie zrzuty wykonane ponownie na urządzeniu. Strona informuje o przykładowych nazwach; poradnik rozróżnia edycję istniejącego punktu od dodawania nowego.
- Starsze grafiki pochodzą z `/home/mp/work/gpx-tracker/super/`; nowe ekrany z `/home/mp/work/gpx-tracker/screenshots-waypointy/`. Oryginały nie zostały nadpisane.
- W banerze zastąpiono absolutne hasło prywatności informacją o lokalnym przechowywaniu tras i waypointów. Zachowano informację o opcjonalnym Firebase Analytics i żądaniach do map online.
- Bez nowych zewnętrznych skryptów, fontów, trackerów ani zależności. FAQ używa natywnego details/summary; powiększanie grafik przez odnośnik do pliku działa bez JS.

## Sprawdzenie funkcji

Poradnik zweryfikowano z `mapka/app/src/main/java/pl/smolisoft/mapka/core/ui/WaypointDialog.kt`, `WaypointListDialog.kt`, `MenuContent.kt` i `core/map/MapViewContent.kt`: długie naciśnięcie otwiera formularz, menu udostępnia listę, szczegóły umożliwiają edycję i Show on map. Powiązanie z nagraniem jest opcjonalne, nie jest nawigacją zakręt po zakręcie. Map offline nie promujemy jako funkcji produkcyjnej.

## Publikacja

Agent nie wykonał commita ani pusha. Przed rozbudową PL katalog roboczy repozytorium strony był czysty; wcześniejsze prace EN były już zapisane w Git. Przy publikacji link do polityki w Google powinien wskazywać sam `privacy-en.html` lub `privacy.html` na hostowanej stronie, nie stronę główną. Nie zmieniano Play Console ani konfiguracji hostingu.

## Weryfikacja

- Po rozbudowie PL: kontrola 9 stron HTML: wszystkie lokalne pliki, odnośniki, kotwice i obrazy istnieją; każda strona ma jeden H1, a obrazy tekst alternatywny. `git diff --check` bez błędów.
- Ręczny przegląd wygenerowanych obrazów oraz renderów Firefoksa: strona główna 1440×1050 i 390×1500, poradnik 1440×1600, polityka 390×1400. Brak zauważonych problemów w tych widokach. Nie przeprowadzono pełnych testów interakcji na fizycznym telefonie.
- Wersja PL: rendery Firefoksa dla strony głównej 1440×1050 i 390×1500, poradnika 390×1800, FAQ 1440×1500 i polityki 390×1400. Bez zauważonych problemów w tych widokach. Sprawdzono zgodność układu sekcji z EN, komplet 9 właściwych grafik PL, wzajemne przełączniki języka i niezmienioną treść polskiej polityki.
- Kompilacja Androida nie dotyczy zadania; kod aplikacji nie został zmieniony.
