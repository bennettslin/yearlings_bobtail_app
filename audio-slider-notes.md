# Audio slider notes

* Should show remaining time.

* When slider is moving:

    * There is no moving slider. Just slider verse bars changing colour.
    * Displays work as usual, with light text on dark background, and vice versa.
        * Decide whether remain or spent should be dark or light.

# New notes

* Calculate to accommodate outer borders for SliderStanzas.

* Refactor directories. (/)

* Reconsider ways to allow audio slider to be longer. (/)
    * Allow title to go to min width before shrinking audio.

* Allow Verse and sliderVerse to not care about sliderTouched.

* Allow slider verse to highlight upon hover?
    * Interactivated verse needs to change z-index based on access on.
    * Times needs to change z-index based on slider touch.
    * Touch bar needs to be changed somehow.

* Have slider also render only after renderReady.

* Times mask doesn't always work?

* Have audio banner in main treatment be the same as title in audio.

* Rename stanzaTimes to indicate that only slider uses it.