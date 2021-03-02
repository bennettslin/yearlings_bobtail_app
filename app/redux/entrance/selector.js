import { createSelector } from 'reselect'
import { IS_USER_AGENT_DESKTOP } from '../../constants/device'
import { ENTRANCE_STORE } from '../../constants/store'

export const mapIsWindowResizeDone = (
    { [ENTRANCE_STORE]: { isWindowResizeDone } },
) => isWindowResizeDone

export const mapDidStageReset = (
    { [ENTRANCE_STORE]: { didStageReset } },
) => didStageReset

export const mapIsSongSelectComplete = (
    { [ENTRANCE_STORE]: { isSongSelectComplete } },
) => isSongSelectComplete

export const mapIsSongChangeDone = (
    { [ENTRANCE_STORE]: { isSongChangeDone } },
) => isSongChangeDone

export const mapCanTransitionAfterSongChange = (
    { [ENTRANCE_STORE]: { canTransitionAfterSongChange } },
) => canTransitionAfterSongChange

export const mapIsSceneChangeDone = (
    { [ENTRANCE_STORE]: { isSceneChangeDone } },
) => isSceneChangeDone

export const mapCanTransitionAfterSceneChange = (
    { [ENTRANCE_STORE]: { canTransitionAfterSceneChange } },
) => canTransitionAfterSceneChange

export const mapCanTransitionForSceneExit = createSelector(
    mapIsSongChangeDone,
    mapCanTransitionAfterSceneChange,
    (
        isSongChangeDone,
        canTransitionAfterSceneChange,
    ) => (
        IS_USER_AGENT_DESKTOP &&
        isSongChangeDone &&
        !canTransitionAfterSceneChange
    ),
)

export const mapCanTransitionForSceneEnter = createSelector(
    mapIsSongChangeDone,
    mapCanTransitionAfterSceneChange,
    (
        isSongChangeDone,
        canTransitionAfterSceneChange,
    ) => (
        IS_USER_AGENT_DESKTOP &&
        isSongChangeDone &&
        canTransitionAfterSceneChange
    ),
)
