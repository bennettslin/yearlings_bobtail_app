### Player refactor.

* Selected song and verse share single action and reducer. (/)

<!-- * Create new TimeManager. (/)

* Time manager sets or resets interval when:
    * Playing is toggled on.
    * Song is selected while playing.
    * Verse is user selected while playing.

* Time manager clears interval when:
    * Playing is toggled off.

* When time manager advances time:
    * Automatically select new verse.

* Displayed audio timer sets or resets interval when:
    * Playing is toggled on.
    * Song is selected while playing.
    * Verse is user selected while playing.

* Displayed audio timer resets to time of selected verse when:
    * Playing is toggled off. -->

* Player gets selected song, verse, and isPlaying from store.

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

<!-- * Time is no longer stored in state.

* Decide whether TimeVerseManager can be split between TimeManager and VerseManager, and removed.

* Remove time from store, and components that use it. -->
