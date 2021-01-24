import {
    TRANSITION_DURATION_CURTAINS,
} from '../scss/exports/style'

const convertToMilliseconds = seconds => (
    parseFloat(seconds) * 1000
)

const ALL_ENTERED_AFTER_SONG_CHANGE_DONE_BUFFER = 25
const CONVERTED_CURTAINS_TRANSITION_DURATION =
    convertToMilliseconds(TRANSITION_DURATION_CURTAINS)

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

// Lyrics and carousel also enter as curtains part.
export const CAROUSEL_LYRICS_ENTERED_AFTER_SONG_CHANGE_DONE_DURATION =
    CONVERTED_CURTAINS_TRANSITION_DURATION

export const CURTAINS_ENTERED_AFTER_SONG_CHANGE_DONE_DURATION =
    // Accommodate time for CSS transition of curtains.
    CONVERTED_CURTAINS_TRANSITION_DURATION +
    // Add buffer time to ensure all transitions are complete.
    ALL_ENTERED_AFTER_SONG_CHANGE_DONE_BUFFER
