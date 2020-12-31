import {
    getDurationForSong,
    getStartTimeForScene,
    getDurationForScene,
} from '../api/album/time'

export const getSceneDimensionCoordinate = (
    songIndex,
    sceneIndex

) => {
    const
        songDuration = getDurationForSong(songIndex),
        sceneStartTime = getStartTimeForScene(
            songIndex,
            sceneIndex
        ),
        sceneDuration = getDurationForScene(
            songIndex,
            sceneIndex
        ),
        left = sceneStartTime / songDuration * 100,
        width = sceneDuration / songDuration * 100

    return JSON.stringify({
        sceneLeft: Number(left.toFixed(2)),
        sceneWidth: Number(width.toFixed(2)),
    })
}
