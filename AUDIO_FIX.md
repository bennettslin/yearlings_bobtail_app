# Audio fix
* Figure out best GA.
    * Clarify logPlayer and logState labels?

* Things to check:
    * How does Spotify handle navigating through songs while playing?

* Audio manager API
    * Each player passes ref to audio manager for pausing and playing.
    * Expose handlers.
    * Audio manager knows isPlaying and selectedSongIndex.
    * When handler to toggle play is called:
        * If isPlaying:
            * Pause selected song. Set isPlaying false.
        * If not isPlaying:
            * Play selected song. If successful, set isPlaying true.
    * When handler to select song is called:
        * If isPlaying:
            * Pause old selected song.
            * Play new selected song. If not successful, set isPlaying false.

* Audio manager provides context to toggle play.
    * From audio menu button.
    * From access key.
    * When selecting song while isPlaying.

* dispatchPlay
    * Call audio manager's toggle play handler.
    * If from logue, also dispatch song.
* dispatchSong
    * Call audio manager's select song handler.

* Is single mp3 needed to solve these potential problems?
    * Can audio repeat?
    * Can audio automatically play next song?