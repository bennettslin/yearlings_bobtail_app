export const CAN_THEATRE_ENTER_SELECTOR = (
    { entranceStore: { canTheatreEnter } }
) => canTheatreEnter

export const DID_THEATRE_ENTER_SELECTOR = (
    { entranceStore: { didTheatreEnter } }
) => didTheatreEnter

export const DID_SCENE_SCROLL_EXIT_SELECTOR = (
    { entranceStore: { didSceneScrollExit } }
) => didSceneScrollExit

export const CAN_SCENE_UPDATE_SELECTOR = (
    { entranceStore: { canSceneUpdate } }
) => canSceneUpdate

export const DID_SCENE_UPDATE_SELECTOR = (
    { entranceStore: { didSceneUpdate } }
) => didSceneUpdate

export const CAN_SCENE_ENTER_SELECTOR = (
    { entranceStore: { canSceneEnter } }
) => canSceneEnter

export const DID_SCENE_ENTER_SELECTOR = (
    { entranceStore: { didSceneEnter } }
) => didSceneEnter

export const DID_CAROUSEL_EXIT_SELECTOR = (
    { entranceStore: { didCarouselExit } }
) => didCarouselExit

export const DID_LYRIC_EXIT_SELECTOR = (
    { entranceStore: { didLyricExit } }
) => didLyricExit

export const DID_CURTAIN_EXIT_SELECTOR = (
    { entranceStore: { didCurtainExit } }
) => didCurtainExit

export const CAN_LYRIC_CAROUSEL_UPDATE_SELECTOR = (
    { entranceStore: { canLyricCarouselUpdate } }
) => canLyricCarouselUpdate

export const DID_LYRIC_UPDATE_SELECTOR = (
    { entranceStore: { didLyricUpdate } }
) => didLyricUpdate

export const DID_CAROUSEL_UPDATE_SELECTOR = (
    { entranceStore: { didCarouselUpdate } }
) => didCarouselUpdate

export const CAN_LYRIC_CAROUSEL_ENTER_SELECTOR = (
    { entranceStore: { canLyricCarouselEnter } }
) => canLyricCarouselEnter

export const DID_LYRIC_ENTER_SELECTOR = (
    { entranceStore: { didLyricEnter } }
) => didLyricEnter

export const DID_CAROUSEL_ENTER_SELECTOR = (
    { entranceStore: { didCarouselEnter } }
) => didCarouselEnter

export const DID_CURTAIN_ENTER_SELECTOR = (
    { entranceStore: { didCurtainEnter } }
) => didCurtainEnter

export const IS_SONG_SELECT_IN_FLUX_SELECTOR = (
    { entranceStore: { isSongSelectInFlux } }
) => isSongSelectInFlux

// import {
//     IS_PLAYING_SELECTOR,
//     QUEUED_PLAY_FROM_LOGUE_SELECTOR,
//     QUEUED_PLAY_SONG_INDEX_SELECTOR,
//     QUEUED_PLAY_VERSE_INDEX_SELECTOR,
//     QUEUED_TOGGLE_PLAY_SELECTOR,
// } from '../../../redux/entrance/selectors'

// isPlaying = IS_PLAYING_SELECTOR(state),
// queuedPlayFromLogue = QUEUED_PLAY_FROM_LOGUE_SELECTOR(state),
// queuedPlaySongIndex = QUEUED_PLAY_SONG_INDEX_SELECTOR(state),
// queuedPlayVerseIndex = QUEUED_PLAY_VERSE_INDEX_SELECTOR(state),
// queuedTogglePlay = QUEUED_TOGGLE_PLAY_SELECTOR(state)
