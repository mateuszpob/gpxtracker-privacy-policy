# Strona GPX Tracks — kontekst

Weryfikacja: 2026-09-19.

## Korekta stylu poradnika waypointów — 2026-09-19

- Poradniki EN/PL mają klasę guide-page i dedykowane reguły CSS: jasne panele pod krokami, mniejsze odstępy, poprawione proporcje kolumn, nagłówek z wewnętrznym marginesem i układ jednokolumnowy na telefonie. Zrzuty zachowane w całości, bez kadrowania.
- Style ograniczone do guide-page. Odnośnik CSS poradników ma wersję v=20260919-guide, aby odświeżyć cache po publikacji.
- Sprawdzono render Firefox PL 1440×1800 i EN 390×1800; tekst i zdjęcia mieszczą się, tło nie utrudnia czytania. git diff --check bez błędów. Bez publikacji.

## Kontrola przed publikacją 1.2.6 — 2026-09-19

- Google Play API potwierdza produkcję 1.2.6 (30), completed. Polska lokalizacja aplikacji pozostaje na osobnym branchu, poradnik nadal używa angielskich nazw przycisków.
- W 9 HTML nie ma OpenTopoData ani API wysokości; wysokość pochodzi z GPS i jest liczona lokalnie. Usunięto hipotetyczne wzmianki o włączonych mapach offline z polityk, zachowując informację o żądaniach map i opcjonalnym Analytics.
- Uporządkowano pierwsze komunikaty stron głównych: bez konta → GPX → nagrywanie → miejsca. Usunięto marketingowe dopiski o wymaganym internecie. Zachowano styl i grafiki.
- Sprawdzono 9 plików HTML: odnośniki lokalne, kotwice i istnienie wszystkich 18 użytych grafik; brak błędów, git diff --check poprawny. Nie wykonywano nowego renderu przeglądarki.
- Materiały są lokalne; użytkownik publikuje stronę sam. Bez commita/pusha.

## Teksty wysokości — 2026-09-16

- Przejrzano treści wszystkich 9 stron i materiały `mapka/marketing/premiera_waypointow`. W FAQ i politykach PL/EN usunięto odniesienia do nieistniejącego API/usługi wysokościowej, również zdania o braku wysyłania do niej danych. Pozostał opis lokalnych pomiarów GPS i obliczeń. Daty polityk: 16 września 2026. Informacje o mapach online i Firebase pozostają.

## Paralaksa — 2026-09-16

- Wszystkie 9 stron ładuje lokalny `parallax.js` z `defer`. Tło przesuwa się w górę maksymalnie o 12% przewinięcia, łącznie do 320 px, proporcjonalnie do postępu całej strony. CSS zapewnia zapas grafiki.
- Pasywny scroll i requestAnimationFrame aktualizują transform; ResizeObserver uwzględnia obrazy i rozwijanie FAQ. prefers-reduced-motion wyłącza ruch i zapas grafiki; bez JS pozostaje nieruchome tło.

## Tło mapowe — 2026-09-16

- `assets/map-tracks-background.png` to wygenerowana przez image_gen fikcyjna mapa z trzema trasami (turkus, pomarańcz, fiolet), bez nazw i danych użytkownika. Jest tłem całej strony pod treścią; jasna warstwa CSS zmniejsza kontrast, mocniej na telefonie.
- Zachowano krajobraz nagłówków, układ, wszystkie teksty i dotychczasowe grafiki. Zmiana wspólnego CSS obejmuje EN i PL.
- Sprawdzono odnośniki, zasoby i `git diff --check`; rendery Firefoksa: strona główna PL 1440×1250, FAQ PL 390×1500, polityka EN 1440×1000.

## Pogodniejsza oprawa — 2026-09-15

- Wspólny motyw EN/PL rozjaśniono: kremowe tło, ciemnozielony tekst, limonkowe przyciski oraz pastelowe karty z akcentami turkusu i moreli.
- `assets/sunny-trail.png` to słoneczny krajobraz wygenerowany image_gen na podstawie motywu miniaturowego terenu i czerwonej trasy z wcześniejszej grafiki w `gpx-tracker/super/`. Jedna ilustracja bez napisów służy jako tło nagłówków w obu językach. Karty funkcji dostały trzy dekoracyjne ikony SVG; pozostałe grafiki zachowano.
- Automatycznie porównano tekst wszystkich dziewięciu stron przed i po zmianie: treść zachowana. Sprawdzono zasoby, odnośniki, kotwice i `git diff --check`. Obejrzano rendery Firefoksa EN/PL na komputerze oraz PL na szerokości 390 px (start, poradnik, FAQ i polityka w odpowiednich widokach).

## Stan

- To ogólna strona aplikacji, z oddzielną polityką prywatności. Wersja EN: `index.html` i zgodny starszy adres `index-en.html`; samouczek: `waypoints-en.html`; pomoc: `faq-en.html`.
- Wersja PL jest kompletna: `index-pl.html`, `waypoints-pl.html`, `faq.html` i `privacy.html`. Strona główna, poradnik i FAQ odpowiadają układowi EN; korzystają z właściwych grafik `assets/pl/`. Nazwy przycisków aplikacji w poradniku pozostają po angielsku z polskim objaśnieniem. Przełączniki EN/PL prowadzą do odpowiadających podstron; dodano odnośniki hreflang. Domyślny `index.html` nadal jest angielski.
- `privacy-en.html` i `privacy.html` pozostają bezpośrednimi, samodzielnymi dokumentami. Oprawa i nawigacja są wspólne ze stroną; 2026-09-16 uproszczono opis wysokości i zaktualizowano datę polityki.
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
