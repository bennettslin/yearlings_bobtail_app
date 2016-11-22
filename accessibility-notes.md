# Accessibility

* To turn on and off:
    * Any key but "Esc" turns access on.
    * "Esc" key turns access off, except from annotation or wiki section.
    * Any click turns access off.

* When access is turned on:
    * Accessed section becomes highlighted.

* When access is on:
    * Accessed section shows all possible keys to press.
    * Next section shows "Space" key, which goes to next section.
    * Stage section shows "Esc" key, unless annotation or wiki section is accessed.
    * Keys can be clicked, which performs the action and then turns access off.

* When audio section is accessed:
    * "Enter" and arrow keys are shown. ("p" to play is a universal key.)
    * When "Enter" is pressed:
        * Toggle through audio options.
    * When Left or Right arrows are pressed:
        * Select previous or next song.
    * When Up or Down arrows are pressed:
        * Select previous or next time.

* When songs section is accessed:
    * Up and Down arrows and "Enter" are shown.
    * When section is first accessed:
        * Accessed song is selected song.

    * When Up and Down arrows are pressed:
        * or song is previous or next song.

    * When "Enter" is pressed:
        * Select the accessed song.

* When overview section is accessed:
    * "Enter" is shown.
    * When "Enter" is pressed:
        * Overview text toggles on and off.
    * (Automatically toggles on when new song is selected.)
    * (Automatically toggles off when annotation or wiki is selected.)

* When dot section is accessed:
    * Left and Right arrows and "Enter" are shown.
    * When section is first accessed:
        * Accessed dot is first dot, or else previously accessed dot.
    * When Left or Right arrows are pressed:
        * Accessed dot is previous or next dot.
    * When "Enter" is pressed.
        * Toggle the accessed dot.

* When lyric section is accessed:
    * Arrow keys and "Enter" are shown.
    * If accessed element is verse, accessed verse is selected verse. ✓
    * If accessed element is annotation, accessed annotation is closest to selected verse. ✓
        * However, if we've just deselected an annotation, accessed element is annotation, and access that annotation. ✓

    * When up and down arrows are pressed:
        * If there is an accessed annotation:
            * Accessed verse closest to last accessed element is highlighted.
            * Accessed annotation, if any, is unhighlighted.
        * If there is an accessed verse:
            * Highlight previous or next accessed verse.

    * When left and right arrows are pressed:
        * If there is an accessed verse:
            * Accessed annotation closest to last accessed element is highlighted.
            * Accessed verse, if any, is unhighlighted.
        * If there is an accessed annotation:
            * Highlight previous or next accessed annotation.

    * When 'e' or 'r' is pressed:
        * Accessed element will switch to verse.

    * When "Enter" is pressed:
        * If there is an accessed annotation, select its annotation.
        * If there is an accessed verse, select it.
        * Annotation section becomes accessed section and is highlighted.

* When annotation section is accessed:
    * Arrow keys and "Enter" are shown.
    * "Esc" key is shown on close button.
    * "Space" key is shown on lyric section.
    * Accessed element is wiki anchor, if any.

    * When left and right arrows are pressed:
        * Select previous or next annotation.

    * When up and down arrows are pressed:
        * Highlight previous or next wiki anchor.

    * When "Enter" is pressed:
        * Wiki section becomes accessed section and is highlighted.

    * When "Space" is pressed:
        * Annotation section is closed, and lyric section becomes accessed section.

* When wiki url is accessed:
    * "Esc" key is shown on close button.
    * "Space" key is shown on annotation section.

    * When "Space" is pressed:
        * Wiki section is closed, and annotation section becomes accessed section.

* These keys will always fire, even if access is off:
    * "w" to access audio section
    * "j" to access dots section
    * "l" to access lyrics section
    * "s" to access songs section
    * "p" to toggle "isPlaying"
    * "o" to toggle "audioOptionIndex"
    * "z" to toggle "selectedOverviewIndex"
    * "m" to toggle admin field. This won't be possible live, of course.
    * "Escape" to close a popup
