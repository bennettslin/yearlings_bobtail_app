
const CONTINUE = 'continue',
      REPEAT = 'repeat',
      PAUSE_AT_END = 'pause at end',
      SHOWN = 'shown',
      HIDDEN = 'hidden',
      DISABLED = 'disabled'

module.exports = {

    // CLOSE_POPUP_BUTTON: 'close',
    // PREVIOUS_POPUP_BUTTON: 'side-position previous',
    // NEXT_POPUP_BUTTON: 'side-position next',

    CONTINUE,
    REPEAT,
    PAUSE_AT_END,

    AUDIO_OPTIONS: [
        CONTINUE,
        REPEAT,
        PAUSE_AT_END
    ],

    SHOWN,
    HIDDEN,
    DISABLED,

    // Order matters!
    OVERVIEW_OPTIONS: [
        SHOWN,
        DISABLED,
        HIDDEN
    ],

    TIPS_OPTIONS: [
        SHOWN,
        DISABLED,
        HIDDEN
    ]
}
