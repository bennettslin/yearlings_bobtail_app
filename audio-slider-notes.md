# Audio slider notes

* Should show remaining time.

* When slider is moving:

    * There is no moving slider. Just slider verse bars changing colour.
    * Displays work as usual, with light text on dark background, and vice versa.
        * Decide whether remain or spent should be dark or light.

# New notes

* Refactor directories. (/)

* Rename sliderStanzas to indicate that only slider uses it. (/)

* Reconsider ways to allow audio slider to be longer. (/)
    * Allow title to go to min width before shrinking audio. (/)

* Allow Verse and sliderVerse to not care about sliderTouched. (/)
    * Just distinguish between beforeCursor, onCursor, and afterCursor. (/)


* Render slider verses in slider stanzas.

* Calculate to accommodate outer borders for SliderStanzas.

* Allow slider verse to highlight upon hover?
    * Interactivated verse needs to change z-index based on access on. (/)
    * Times needs to change z-index based on slider touch. (/)
    * Touch bar needs to be changed somehow. (/)
    * Calculate slider rect based on ref, not e.target. (/)

* Verse bar handler is broken. (/)

* Times mask doesn't always work? (/) Still confirm.

* Have slider also render only after renderReady.

* Have audio banner in main treatment be the same as title in audio.