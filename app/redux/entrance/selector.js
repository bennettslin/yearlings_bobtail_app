import { ENTRANCE_STORE } from '../../constants/store'

export const mapIsWindowResizeDone = (
    { [ENTRANCE_STORE]: { isWindowResizeDone } }
) => isWindowResizeDone

export const mapDidCurtainsClose = (
    { [ENTRANCE_STORE]: { didCurtainsClose } }
) => didCurtainsClose

export const mapDidStageReset = (
    { [ENTRANCE_STORE]: { didStageReset } }
) => didStageReset

export const mapIsSongSelectComplete = (
    { [ENTRANCE_STORE]: { isSongSelectComplete } }
) => isSongSelectComplete

export const mapIsSongChangeDone = (
    { [ENTRANCE_STORE]: { isSongChangeDone } }
) => isSongChangeDone

export const mapCanTransitionAfterSongChange = (
    { [ENTRANCE_STORE]: { canTransitionAfterSongChange } }
) => canTransitionAfterSongChange

export const mapIsSceneChangeDone = (
    { [ENTRANCE_STORE]: { isSceneChangeDone } }
) => isSceneChangeDone
