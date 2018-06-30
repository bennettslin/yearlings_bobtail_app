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
        * sky
        * cubes by row
            * row by column?
        * actions
    * score

TODO:
* theatre
* scene
* score

* Have transitions dependent on isRendered class that is dependent on canRender in Redux state and parent hasRendered in component state.
    * Parent transitions
    * Child transitions

TODO later:
* Changing scenes
* Rest of players
* Immediate scrolling (Lyric scrolling upon mount is currently broken)
* Persist cube's base coordinates, as they will always be the same
* Window resizing in theatre
* Mounting different from updating
* Move relevant actions and reducers

* Reprioritise order of carousel and lyrics if not shown