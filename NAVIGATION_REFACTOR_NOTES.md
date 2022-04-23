# Navigation refactor notes
* Make title of pitch the helmet title
* Helmet should get promo page in album
* Make Pareto first pitch in list?
* Add date to onesheet and pitch
* Permanent logs for navigation
* Fix navigation replace upon every single state change!
* Fix font heading underline issue
* Navigation between logue and song causes audio to play.

# Tech notes
* Need helper to get state from window's pop state
    * See if this can be consolidated with validator methods
    * Also get verse and annotation from search

# Acceptance criteria
* Don't navigate upon app load (/)

* These are pushed to history:
    * Album song changes (/)
    * Opening promo popup from album (/)
    * Promo path and pitch page changes (/)
    * Closing promo popup (/)
* These are replaced in history:
    * Verse and annotation changes within same song (/)

* Back button changes state for:
    * Album song changes
    * Promo path and pitch page changes
    * Toggling between album and promo
        * Going from promo popup to album closes popup
        * Going from album to promo opens popup

* Clean up console logs