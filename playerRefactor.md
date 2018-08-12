### Player refactor. (/)

* Selected song and verse share single action and reducer.

* Player manager gets selected song, verse, and isPlaying from store.

* When song is selected:
    * Previously selected player is unselected.
    * New player is selected.
    * Selected player sets its current time from selected verse.
    * It starts playing right away if playing is already on.

* When verse is user selected:
    * Selected player sets its current time from selected verse.

* When playing is toggled on:
    * Selected player starts playing.

* When playing is toggled off:
    * Selected player pauses.
    * Selected player resets current time to start of selected verse.

* Helper to get start time from verse uses verse config.
* Confirm there is no need for a helper to get verse from time.