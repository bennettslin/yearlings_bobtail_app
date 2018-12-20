Setup *must* wait for breakdown to finish before starting.

# App mount

* Initial:
* Start with curtains closed.

* Mount:
* Carousel, lyric, and slider mount.
* Cubes and presences mount. They do *not* animate in.

* Setup:
* Curtains part. Carousel, lyric, and slider animate in.

# Window resize
As part of this work, hard-code some seating values.

* Breakdown:
    * Theatre animates out.

* Mount:
    * Theatre updates to next data.

* Setup:
    * Theatre animates in.

# Scene change

* Breakdown:
    * If slider was touched, lyric and slider animate to default state.
    * Lyric scrolls, verse bars determined.

* Setup:
    * Only after lyric finishes scrolling, previous presences animate out.
    * Only after presences animate away, cubes shift.
    * Next presences animate in.

# Song change
As part of this work, make sure that actor instances render.

* Breakdown:
    * Curtains close. Carousel, lyric, and slider animate out.

* Mount:
    * Carousel, lyric, slider update to next data.
    * Cubes and presences update to next data. They do *not* animate in.

* Setup:
    * Curtains part. Carousel, lyric, and slider animate in.