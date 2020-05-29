export const PLAYERS_BIT_NUMBER_SELECTOR = (
    { playersStore: { playersBitNumber } }
) => playersBitNumber

export const NEXT_PLAYER_TO_RENDER_SELECTOR = (
    { playersStore: { nextPlayerToRender } }
) => nextPlayerToRender

// import {
//     LYRIC_SONG_INDEX_SELECTOR,
//     LYRIC_VERSE_INDEX_SELECTOR,
//     LYRIC_ANNOTATION_INDEX_SELECTOR,
//     IS_LYRIC_LOGUE_SELECTOR
// } from '../../../redux/players/selectors'

// lyricSongIndex = LYRIC_SONG_INDEX_SELECTOR(state),
// lyricVerseIndex = LYRIC_VERSE_INDEX_SELECTOR(state),
// lyricAnnotationIndex = LYRIC_ANNOTATION_INDEX_SELECTOR(state),
// isLyricLogue = IS_LYRIC_LOGUE_SELECTOR(state)
