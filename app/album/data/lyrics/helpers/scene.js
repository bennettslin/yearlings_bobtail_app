import albumScenes from '../../scenes'

const _addDurationsToSceneConfigs = ({
    totalTime,
    sceneStartTimes,
    finalSong

}) => {
    const sceneDurations = []

    sceneStartTimes.forEach((sceneStartTime, sceneIndex) => {
        let nextTime

        // It is followed by another scene.
        if (sceneIndex < sceneStartTimes.length - 1) {
            nextTime = sceneStartTimes[sceneIndex + 1]

        // It is the last scene.
        } else {
            nextTime = totalTime
        }

        sceneDurations.push(nextTime - sceneStartTime)
    })

    finalSong.sceneDurations = sceneDurations
}

export const addSceneIndicesToVerseConfigs = (song) => {

    const {
        songSceneConfigs,
        verseConfigs,
        isLogue
    } = song

    if (!isLogue) {
        // Then, allow each verse to know its scene index.
        songSceneConfigs.forEach((sceneConfig, sceneIndex) => {
            const { firstVerseIndex } = sceneConfig

            let currentVerseIndex = firstVerseIndex

            /**
             * Tell this verse config, and each subsequent one, this scene
             * index, up until the next scene index.
             */
            while (
                sceneIndex === songSceneConfigs.length - 1 ?

                    /**
                     * If this is the last scene, iterate through the
                     * remaining verse indices.
                     */
                    currentVerseIndex < verseConfigs.length :

                    /**
                     * Otherwise, keep going until we've reached the first
                     * verse index of the next scene.
                     */
                    currentVerseIndex <
                    songSceneConfigs[sceneIndex + 1].firstVerseIndex
            ) {

                verseConfigs[currentVerseIndex].sceneIndex = sceneIndex
                currentVerseIndex++
            }
        })
    }
}

export const addSceneMetadata = ({
    song,
    totalTime,
    verseStartTimes,
    unitVerseIndicesList,
    finalSong
}) => {
    const {
        songIndex,
        lyricUnits
    } = song

    const
        scenes = albumScenes[songIndex],
        sceneConfigs = [],
        sceneVerseIndices = [],
        sceneStartTimes = []

    scenes.forEach(scene => {
        const { unitIndex } = scene

        const
            unit = lyricUnits[unitIndex],
            { mainVerses } = unit

        const unitVerseIndices = unitVerseIndicesList[unitIndex],
            firstVerseIndex = unitVerseIndices[0]

        sceneConfigs.push({
            firstVerseIndex: mainVerses[0].verseIndex,
            sceneStartTime: mainVerses[0].time
        })

        sceneVerseIndices.push(firstVerseIndex)
        sceneStartTimes.push(verseStartTimes[firstVerseIndex])
    })

    song.songSceneConfigs = sceneConfigs
    finalSong.sceneVerseIndices = sceneVerseIndices
    finalSong.sceneStartTimes = sceneStartTimes

    _addDurationsToSceneConfigs({
        totalTime,
        sceneStartTimes,
        finalSong
    })
}

