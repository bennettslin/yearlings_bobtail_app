# Presence work

* Have isSceneChangeRenderable in store. (/)
* Change canSliderRender to canVerseRender, and make it before canMainRender. (/)
* Change canSceneRender to canSceneRender, and reset it based on isSceneChangeRenderable. (/)

* Make renderable store. (/)
* Make render store. (/)

* Have class for scene transitions. (/)

* Presences transition based on scene transition class.

# Presence transition order
* Actors fade out
* Cutouts and fixtures slide away
* Cubes shift
* Cutouts and fixtures slide in
* Actors fade in

* Fixtures slide in from left or right, depending on xIndex.
* Presences are behind theatre.
* Cutouts and fixtures that persist across scenes should not transition.

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
* verse
* scene
* main
* lyric
* carousel

# Order upon scene change within song
* scene (only thing that changes)
