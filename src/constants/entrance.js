import {
    convertToMilliseconds,
    getJsFromSass,
} from '../helpers/format'
import {
    TRANSITION_DURATION_CURTAINS,
    TRANSITION_DURATION_PRESENCE,
} from '../scss/exports/style.module'

const GENERAL_BUFFER = 25

/**
 * This buffer time allows the curtains to close completely, making the
 * transition between songs less janky.
 */
export const CURTAINS_EXITED_AFTER_SONG_CHANGE_BEGAN_BUFFER = 50

/**
 * Even after song change begins, the user might continue to rewind or fast
 * forward to the next song. Wait for this duration to ensure that song
 * selection is finally complete.
 */
export const SONG_SELECT_COMPLETE_DURATION = 200

// TODO: Is this still really the case?
// This seems to be the time needed for presences to unmount.
export const STAGE_RESET_AFTER_STAGE_COULD_RESET_DURATION = 150

const CONVERTED_CURTAINS_TRANSITION_DURATION =
    convertToMilliseconds(TRANSITION_DURATION_CURTAINS)

// Lyrics and carousel also enter as curtains part.
export const CAROUSEL_LYRICS_ENTERED_AFTER_SONG_CHANGE_DONE_DURATION =
    CONVERTED_CURTAINS_TRANSITION_DURATION

export const CURTAINS_ENTERED_AFTER_SONG_CHANGE_DONE_DURATION =
    // Accommodate time for CSS transition of curtains.
    CONVERTED_CURTAINS_TRANSITION_DURATION +
    // Add buffer time to ensure all transitions are complete.
    GENERAL_BUFFER

/**
 * After scene change within song, ensure that lyrics are done scrolling.
 * The actual scroll seems to finish a lot sooner than this given duration,
 * however.
 */
export const SCROLL_DURATION = 750
export const SCROLL_BUFFER = GENERAL_BUFFER

export const LYRICS_SCROLLED_DURATION =
    // Buffer time is applied both before and after scroll.
    (SCROLL_DURATION + SCROLL_BUFFER * 2) / 1000

export const CONVERTED_TRANSITION_DURATION_PRESENCE = getJsFromSass(
    TRANSITION_DURATION_PRESENCE,
)

export const CUBE_TRANSITION_DURATION = 0.4
export const CUBE_TRANSITION_DELAY_MAX = 0.4
export const CUBES_TRANSITIONED_DURATION =
    CUBE_TRANSITION_DURATION +
    // Add max delay for both yIndices and xIndices.
    CUBE_TRANSITION_DELAY_MAX * 2 +
    GENERAL_BUFFER / 1000

