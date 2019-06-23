import { getSongScenesCount } from 'album/api/scenes'

export const getActivatedSceneForDirection = ({
    selectedSongIndex,
    selectedSceneIndex,
    currentSceneIndex,
    direction
}) => {
    const songScenesCount = getSongScenesCount(selectedSongIndex)

    let activatedSceneIndex = currentSceneIndex

    // Ensure modulo.
    if (direction === -1) {
        direction = songScenesCount - 1
    }

    // We are turning on interactivation, so start from selected scene.
    if (activatedSceneIndex === -1) {
        activatedSceneIndex =
            (selectedSceneIndex + direction) % songScenesCount

    // We already have an activated scene.
    } else {
        activatedSceneIndex =
            (activatedSceneIndex + direction) % songScenesCount
    }

    // If we're returning to the selected scene, turn off interactivation.
    if (activatedSceneIndex === selectedSceneIndex) {
        activatedSceneIndex = -1
    }

    return activatedSceneIndex
}
