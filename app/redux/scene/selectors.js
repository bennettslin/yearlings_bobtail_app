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
//     mapLyricSongIndex,
//     mapLyricVerseIndex,
//     mapLyricAnnotationIndex,
//     mapIsLyricLogue
// } from '../../../redux/scene/selectors'

// lyricSongIndex = mapLyricSongIndex(state),
// lyricVerseIndex = mapLyricVerseIndex(state),
// lyricAnnotationIndex = mapLyricAnnotationIndex(state),
// isLyricLogue = mapIsLyricLogue(state)
