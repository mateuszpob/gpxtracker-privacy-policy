# Strona GPX Tracks — kontekst

Weryfikacja: 2026-09-15.

## Stan

- To ogólna strona aplikacji, z oddzielną polityką prywatności. Wersja EN: `index.html` i zgodny starszy adres `index-en.html`; samouczek: `waypoints-en.html`; pomoc: `faq-en.html`.
- Dotychczasową stronę PL zachowano jako `index-pl.html`. Nowy poradnik i rozbudowa treści PL pozostają na późniejszy etap zgodnie z prośbą użytkownika. Polskie FAQ i polityka zachowują swoje adresy.
- `privacy-en.html` i `privacy.html` pozostają bezpośrednimi, samodzielnymi dokumentami. Zmieniono oprawę i nawigację; nie przepisywano treści polityki ani daty jej aktualizacji.
- Wszystkie grafiki znajdują się w repozytorium. `assets/en/` i `assets/pl/`: po 9 PNG (7 ekranów z dostarczonego katalogu oraz 2 starsze materiały promocyjne). Mapa bez widocznych nazw użytkownika została skopiowana bez zmian. Pozostałe ekrany mają przykładowe nazwy i opisy; UI pozostaje po angielsku, zgodnie z aplikacją.
- Edycje wykonano wbudowanym image_gen. Prompty: `assets/IMAGE-PROMPTS.md`. To ilustracje na podstawie prawdziwych zrzutów, po edycji generatywnej, a nie zrzuty wykonane ponownie na urządzeniu. Strona informuje o przykładowych nazwach; poradnik rozróżnia edycję istniejącego punktu od dodawania nowego.
- Starsze grafiki pochodzą z `/home/mp/work/gpx-tracker/super/`; nowe ekrany z `/home/mp/work/gpx-tracker/screenshots-waypointy/`. Oryginały nie zostały nadpisane.
- W banerze zastąpiono absolutne hasło prywatności informacją o lokalnym przechowywaniu tras i waypointów. Zachowano informację o opcjonalnym Firebase Analytics i żądaniach do map online.
- Bez nowych zewnętrznych skryptów, fontów, trackerów ani zależności. FAQ używa natywnego details/summary; powiększanie grafik przez odnośnik do pliku działa bez JS.

## Sprawdzenie funkcji

Poradnik zweryfikowano z `mapka/app/src/main/java/pl/smolisoft/mapka/core/ui/WaypointDialog.kt`, `WaypointListDialog.kt`, `MenuContent.kt` i `core/map/MapViewContent.kt`: długie naciśnięcie otwiera formularz, menu udostępnia listę, szczegóły umożliwiają edycję i Show on map. Powiązanie z nagraniem jest opcjonalne, nie jest nawigacją zakręt po zakręcie. Map offline nie promujemy jako funkcji produkcyjnej.

## Publikacja

Nie wykonano commita ani pusha. Repozytorium miało już zmiany w indeksie przed tą sesją; zachowano je. Przy publikacji link do polityki w Google powinien wskazywać sam `privacy-en.html` lub `privacy.html` na hostowanej stronie, nie stronę główną. Nie zmieniano Play Console ani konfiguracji hostingu.

## Weryfikacja

- Kontrola 8 stron HTML: wszystkie lokalne pliki, odnośniki, kotwice i obrazy istnieją; każda strona ma jeden H1, a obrazy tekst alternatywny. `git diff --check` bez błędów.
- Ręczny przegląd wygenerowanych obrazów oraz renderów Firefoksa: strona główna 1440×1050 i 390×1500, poradnik 1440×1600, polityka 390×1400. Brak zauważonych problemów w tych widokach. Nie przeprowadzono pełnych testów interakcji na fizycznym telefonie.
- Kompilacja Androida nie dotyczy zadania; kod aplikacji nie został zmieniony.
