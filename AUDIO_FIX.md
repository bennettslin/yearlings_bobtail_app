# Audio fix
* Figure out best GA.
    * Clarify logPlayer and logState labels?

* Audio manager API
    * Each player forwards ref to audio manager for pausing and playing.
    * Audio manager makes handlers available through context.
    * Audio manager knows isPlaying and selectedSongIndex.
    * When handler to toggle play is called:
        * If isPlaying:
            * Pause selected song. Set isPlaying false.
        * If not isPlaying:
            * Play selected song. If successful, set isPlaying true.
    * When handler to select song and verse is called:
        * If isPlaying and song changed:
            * Pause old selected song.
            * Play new selected song. If not successful, set isPlaying false.
        * If isPlaying and only verse changed:
            * Change player time.

* Dispatches get handlers from context.
    * dispatchPlay
        * Call audio manager's toggle play handler.
        * If from logue, also dispatch song.
    * dispatchSong
        * Call audio manager's select song and verse handler.
    * dispatchVerse
        * Call audio manager's select song and verse handler.

* Player should know its own end time, and handle its own repeat play.
    * Only when handling next song does it need to concern audio manager.

* Is single mp3 needed to solve these potential problems?
    * Can audio repeat?
    * Can audio automatically play next song?