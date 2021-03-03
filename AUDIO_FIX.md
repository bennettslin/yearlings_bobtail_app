# Audio fix
* Figure out best GA.
    * Clarify logPlayer and logState labels?

* TODO
    * dispatchPlay checks for player canPlayThrough. Does this account for logue?
    * Confirm that quickly navigating through songs is not a problem. (Seems fine so far, other than AbortError message.)
    * Weird time flash in song banner when selecting verse while song is playing.
    * Filmstrip transition is weird when selecting verse while song is playing.
    * Figure out exact division between player manager and element.
    * Use "current" nomenclature.
        * For selectedPlayerTime

* Is single mp3 needed to solve these potential problems?
    * Can audio repeat?
    * Can audio automatically play next song?