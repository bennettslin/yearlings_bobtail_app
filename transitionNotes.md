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

* Breakdown:
    * Theatre animates out.

* Timeout:
    * Wait for window to finish resizing.

* Mount:
    * Theatre updates to next data.

* Setup:
    * Theatre animates in.

# Scene change

* Breakdown:
    * If slider was touched, lyric and slider animate to default state.
    * Lyric scrolls, verse bars determined.

* Timeout:
    * If necessary, wait for scenes to finish selecting..

* Setup:
    * Only after lyric finishes scrolling, previous presences animate out.
    * Only after presences animate away, cubes shift.
    * Next presences animate in.

# Song change

* Breakdown:
    * Curtains close. Carousel, lyric, and slider animate out.

* Timeout:
    * Wait for songs to finish selecting.

* Mount:
    * Carousel, lyric, slider update to next data.
    * Cubes update to blank state. They do not animate.
    * Presences unmount. They do not animate.

* Setup:
    * Curtains part. Carousel, lyric, and slider animate in.
    * Only after, cubes shift.
    * Presences animate in.