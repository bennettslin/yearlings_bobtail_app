import {
    getIsPresenceShownInScene,
    getCounterpartForPresence,
} from '../endpoint/scene/presences'

export const getIsPresenceShown = ({
    canTransitionAfterSceneChange,
    selectedSongIndex,
    selectedSceneIndex,
    sceneSongIndex,
    sceneSceneIndex,
    yIndex,
    presenceType,
    actorKey,
    presenceKey,

}) => {
    const
        isShownInCurrentScene = getIsPresenceShownInScene({
            songIndex: sceneSongIndex,
            sceneIndex: sceneSceneIndex,
            yIndex,
            presenceType,
            actorKey,
            presenceKey,
        }),
        isShownInNextScene = getIsPresenceShownInScene({
            songIndex: selectedSongIndex,
            sceneIndex: selectedSceneIndex,
            yIndex,
            presenceType,
            actorKey,
            presenceKey,
        }),
        isCounterpartShownInNextScene = getIsPresenceShownInScene({
            songIndex: selectedSongIndex,
            sceneIndex: selectedSceneIndex,
            yIndex,
            presenceType,
            actorKey,
            presenceKey: getCounterpartForPresence({
                presenceType,
                actorKey,
                presenceKey,
            }),
        })

    return (
        // Show presence if it's in the current scene and...
        isShownInCurrentScene && (
            // ... the scene change is complete or...
            canTransitionAfterSceneChange || (
                (
                    /**
                     * ... it is also shown in the next scene, so there is no
                     * point in removing it during the scene change, or...
                     */
                    isShownInNextScene ||

                    /**
                     * ... its counterpart is shown in the next scene, so it
                     * should remain during the scene change for a smoother
                     * transition.
                     */
                    isCounterpartShownInNextScene
                )
            )
        )
    )
}
