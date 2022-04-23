# Navigation refactor notes
* Make title of pitch the helmet title
* Helmet should get promo page in album
* Add date to onesheet and pitch

* Have single promo action with bypass navigation flag

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
    * Album song changes (/)
    * Promo path (/)
    * Pitch page changes (/)
    * Toggling between album and promo
        * Going from promo popup to album closes popup (/)
        * Going from album to promo opens popup

* When album song, verse, or annotation is changed during promo
    * It is *not* recorded in history
    * It *is* pushed to history only after promo is closed

* All works for promo session as well

* Clean up console logs