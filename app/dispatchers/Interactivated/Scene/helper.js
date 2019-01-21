import { getSongScenesCount } from 'album/api/scenes'

export const getInteractivatedSceneForDirection = ({
    selectedSongIndex,
    selectedSceneIndex,
    currentSceneIndex,
    direction
}) => {
    const songScenesCount = getSongScenesCount(selectedSongIndex)

    let interactivatedSceneIndex = currentSceneIndex

    // Ensure modulo.
    if (direction === -1) {
        direction = songScenesCount - 1
    }

    // We are turning on interactivation, so start from selected scene.
    if (interactivatedSceneIndex === -1) {
        interactivatedSceneIndex =
            (selectedSceneIndex + direction) % songScenesCount

    // We already have an interactivated scene.
    } else {
        interactivatedSceneIndex =
            (interactivatedSceneIndex + direction) % songScenesCount
    }

    // If we're returning to the selected scene, turn off interactivation.
    if (interactivatedSceneIndex === selectedSceneIndex) {
        interactivatedSceneIndex = -1
    }

    return interactivatedSceneIndex
}
