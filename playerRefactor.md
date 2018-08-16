### Player refactor. (/)

* Don't store time. Just get it from verse. (/)
* Selected time is part of selected store. (/)
* Player start function needs to return true before isPlaying can be set in store. (/)
* Selecting song when toggling play on from logue still works? (/)
* Separate method to determine time relative to verse. (/)

* Have player manager determine that current time has selected next verse. (/)
* Ensure that updated time is compatible with verse. Time can only be in selected verse or next verse. (/)

* Have player manager determine that current time has selected new song. Must check that player successfully played before passing to store. Strip out logic where player was doing that.
* Have player manager determine that current time returned from player interval is completely invalid. Handle by clearing player.

* Is there still bugginess when switching songs fast while playing? Yes.

* Timeout between song selection and player start.
* Fix verse tracker width not resetting, both in currently selected song and when switching songs.
* Audio options work at all?

* Player failure modal.