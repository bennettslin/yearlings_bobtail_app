export const getMaxVerseCount = songs => (
    songs.reduce((maxCount, song) => {
        if (!song.verseLyrics) {
            return maxCount
        }
        return Math.max(maxCount, song.verseLyrics.length)
    }, 0)
)

export const getMaxSceneCount = songs => (
    songs.reduce((maxCount, song) => {
        if (!song.sceneCubesKeys) {
            return maxCount
        }
        return Math.max(maxCount, song.sceneCubesKeys.length)
    }, 0)
)
