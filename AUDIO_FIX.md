# Audio fix
* Figure out best GA.
    * Clarify logPlayer and logState labels?

* TODO
    * dispatchPlay checks for player canPlayThrough. Does this account for logue?

* Problems
    * Calling from verse dispatcher.
    * Scene doesn't update.

* Audio manager API
    <!-- * Each player forwards ref to audio manager for pausing and playing. -->
    <!-- * Audio manager makes handlers available through context. -->
    <!-- * Audio manager knows isPlaying and selectedSongIndex. -->
    * When handler to toggle play is called:
        * If not isPlaying:
            * Play selected song. If successful, set isPlaying true.
    * When handler to select song and verse is called:
        * If isPlaying and song changed:
            * Play new selected song. If not successful, set isPlaying false.
        * If isPlaying and only verse changed:
            * Change player time.

* Player
    <!-- * Knows when to pause itself. -->
    <!-- * Turns on/off isPlaying. -->
    * Should know its own end time, and handle its own repeat play.
        * Only when handling next song does it need to concern audio manager.

* Is single mp3 needed to solve these potential problems?
    * Can audio repeat?
    * Can audio automatically play next song?