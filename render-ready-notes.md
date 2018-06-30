# Render ready notes

### Updated notes

When loading page:

* Order of priorities
    * theatre
    * main elements
    * all the song stuff

When selecting a song:

* Order of priorities
    * slider
    * overview if to be shown
    * tips if to be shown
    * lyrics, don't scroll
    * carousel, if shown, don't scroll
    * scene
    * score

TODO:
* theatre
* lyric
* carousel
* scene
* score

* Have transitions dependent on isRendered class that is dependent on canRender in Redux state and parent hasRendered in component state. Doesn't seem to work during initial attempt with Slider, maybe because there are two sliders?

    * Parent transitions
    * Child transitions

TODO now:
* Carousel annotation ref in logue bug. Also verse ref.
* Bug when loading with selected carousel annotation, then clicking body.
* Make sure to bypass keys intended to be bypassed

* Deal with weirdness related to having two Sliders.
* Are the onTransitionEnd things still needed?
* Still problem with carousel children showing animations before parent is shown. (switch between Grasshoppers and Constellations) ? (Extending timeout of waitForShowBeforeRender seems to help.)
* Need to clear timeouts for waitForShowBeforeRender as well?

* Changing scenes
* Rest of players
* Immediate scrolling (Lyric scrolling upon mount is currently broken)
* Persist cube's base coordinates, as they will always be the same
* Window resizing
* Resizing in theatre
* Mounting different from updating
* Move relevant actions and reducers
* Prioritise order of carousel and lyrics if not shown

### Old notes

Selecting a new song sets a timeout. 0.2s.
During this timeout, elements fade out. 0.15s.
If new song is selected, timeout is cleared and resetted.

Manual scroll isn't so sensitive?

