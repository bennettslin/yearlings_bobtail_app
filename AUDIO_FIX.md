# Audio fix
* Figure out best GA.
    * Clarify logPlayer and logState labels?

* TODO
    * dispatchPlay checks for player canPlayThrough. Does this account for logue?
    * Confirm that quickly navigating through songs is not a problem. (Seems fine so far, other than AbortError message.)
    * Weird time flash when selecting verse from song banner.

* FIXME
    * Safari thinks time is out of sync upon loaded?!

* Player
    * Updates selected player time directly.
    * Should know its own end time, and handle its own repeat play.
        * Only when handling next song does it need to concern audio manager.

* Is single mp3 needed to solve these potential problems?
    * Can audio repeat?
    * Can audio automatically play next song?