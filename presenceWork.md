# Presence work

* Have isSceneChangeRenderable in store. (/)
* Change canSliderRender to canVerseRender, and make it before canMainRender. (/)
* Change canSceneRender to canSceneRender, and reset it based on isSceneChangeRenderable. (/)

* Make renderable store. (/)
* Make render store. (/)

# Order upon load
* theatre
* verse
* scene
* main
* lyric
* carousel

# Order upon window resize
* theatre (only thing that changes)

# Order upon song change
* verse (instant)
* scene
* main
* lyric
* carousel

# Order upon scene change within song
* scene (only thing that changes)