# Audio slider notes

* Should show remaining time.

* When slider is moving:

    * There is no moving slider. Just slider verse bars changing colour.
    * Displays work as usual, with light text on dark background, and vice versa.
        * Decide whether remain or spent should be dark or light.

# New notes
* Have LyricStanzaCard and SliderVerses pass their respective child components into VerseController.

* Have VerseController pass necessary flags to child, so that child will then render class names.

* Can VerseController just take care of class names itself?

* Have surplus verses, in the same way that there are currently surplus stanzas.

* Calculate to accommodate outer borders for SliderStanzas.

* Get rid of extra stuff added to verse times. Should only need to have a time value.

* Refactor directories.

* Reconsider ways to allow audio slider to be longer.