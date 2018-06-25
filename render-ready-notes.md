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

* Changing scenes
* Rest of players
* Immediate scrolling
* Persist cube's base coordinates, as they will always be the same
* Resizing in theatre
* Mounting different from updating
* Move relevant actions and reducers
* Prioritise order of carousel and lyrics if not shown

### Old notes

Selecting a new song sets a timeout. 0.2s.
During this timeout, elements fade out. 0.15s.
If new song is selected, timeout is cleared and resetted.

Manual scroll isn't so sensitive?

