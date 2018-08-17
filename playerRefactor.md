### Player refactor. (/)

* Don't store time. Just get it from verse. (/)
* Selected time is part of selected store. (/)
* Player start function needs to return true before isPlaying can be set in store. (/)
* Selecting song when toggling play on from logue still works? (/)
* Separate method to determine time relative to verse. (/)

* Have player manager determine that current time has selected next verse. (/)
* Ensure that updated time is compatible with verse. Time can only be in selected verse or next verse. (/)

* Only player manager or player will end player, not both. This ensures that logic to select new song will only get called once. (/)

* Have player manager determine that current time returned from player interval is completely invalid. Handle by clearing player. (/)

* Fix verse tracker width not resetting, both in currently selected song and when switching songs. (/) (Still doesn't work in verse bar, though.)

* Timeout between song selection and player start. Ensure there is no bugginess when switching songs fast while playing.

* Audio options work at all?

* Player failure modal.