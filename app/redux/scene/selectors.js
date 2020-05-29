export const SCENE_CUBES_KEY_SELECTOR = (
    { sceneStore: { sceneCubesKey } }
) => sceneCubesKey

export const SCENE_SKY_TIME_SELECTOR = (
    { sceneStore: { sceneSkyTime } }
) => sceneSkyTime

export const SCENE_SKY_SEASON_SELECTOR = (
    { sceneStore: { sceneSkySeason } }
) => sceneSkySeason

export const SCENE_SONG_INDEX_SELECTOR = (
    { sceneStore: { sceneSongIndex } }
) => sceneSongIndex

export const SCENE_SCENE_INDEX_SELECTOR = (
    { sceneStore: { sceneSceneIndex } }
) => sceneSceneIndex

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
