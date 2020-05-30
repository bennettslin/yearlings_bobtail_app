import { getSceneCountForSong } from '../../../album/api/scenes'

export const getActivatedSceneForDirection = ({
    selectedSongIndex,
    selectedSceneIndex,
    activatedSceneIndex,
    direction
}) => {
    const songScenesCount = getSceneCountForSong(selectedSongIndex)

    let nextSceneIndex = activatedSceneIndex

    // Ensure modulo.
    if (direction === -1) {
        direction = songScenesCount - 1
    }

    // We are turning on interactivation, so start from selected scene.
    if (nextSceneIndex === -1) {
        nextSceneIndex =
            (selectedSceneIndex + direction) % songScenesCount

    // We already have an activated scene.
    } else {
        nextSceneIndex =
            (nextSceneIndex + direction) % songScenesCount
    }

    // If we're returning to the selected scene, turn off interactivation.
    if (nextSceneIndex === selectedSceneIndex) {
        nextSceneIndex = -1
    }

    return nextSceneIndex
}
