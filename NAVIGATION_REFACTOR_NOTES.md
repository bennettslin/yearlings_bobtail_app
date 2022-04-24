# Navigation refactor notes
* Make title of pitch the helmet title
* Helmet should get promo page in album
* Add date to onesheet and pitch
* Dev test
* Change logAdmin to logGeneral

# Acceptance criteria
* Don't navigate upon app load (/)

* These are pushed to history: (/)
    * Album song changes (/)
    * Opening promo popup from album (/)
    * Promo path and pitch page changes (/)
    * Closing promo popup (/)
* These are replaced in history:
    * Verse and annotation changes within same song (/)

* Back button changes state for: (/)
    * Album song changes (/)
    * Promo path (/)
    * Pitch page changes (/)
    * Going from promo to album closes popup (/)
    * When possible, going from album to promo opens popup (/)

* When album song or verse is changed during promo (/)
    * It is *not* recorded in history (/)
    * Song, annotation, and verse *is* pushed to history once promo is closed (/)

* Confirm that playing still works

* All works for promo session as well