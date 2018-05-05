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

* Allow slider verse to highlight upon hover? (/)
    * Interactivated verse needs to change z-index based on access on. (/)
    * Times needs to change z-index based on slider touch. (/)
    * Touch bar needs to be changed somehow. (/)
    * Calculate slider rect based on ref, not e.target. (/)

* Verse bar handler is broken. (/)

* Render slider verses in slider stanzas. (/)

* Calculate to accommodate outer borders for SliderStanzas. (/)
    * Have stanzas overlap. (/)

* When two row menu, flatten slider stanzas when lyric is expanded. (/)

* Show played time within onCursor for both slider and lyric verses. (/)
    * Verse always has a cursor. (/)
    * Cursor animation always starts at 0 and ends at 1. (/)
    * Verse bar does not animate from 1 back to 0. (/)
    * Choose temporary colours for before and after cursor when slider is not moving. (/)

* Have audio banner in main treatment be the same as title in audio.
    * Rename to two-row menu. (/)
    * Do for mini. (/)
    * Do for laptop.
    * Overall styling

* Have slider also render only after renderReady.

* Revisit stanzas that are too short to be their own stanzas.

* Rendering performance
    * Verse shouldn't have to care if child changes.

# Save for final styling

* Make cursor edge a gradient?
* Figure out colouring for interactivated, before cursor, after cursor, on cursor, selected vs. slider, odd vs. even.

# Won't do

* Calibrate touch to be in sync with hover. (tolerable for now.)
    * This may need to get touch start from verse, then touch move from slider.

* Allow verse to be the times mask. (won't do for now.)