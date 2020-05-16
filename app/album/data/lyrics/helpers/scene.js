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

export const _addVerseSceneIndices = ({
    sceneVerseIndices,
    verseStartTimes,
    finalSong

}) => {
    const verseSceneIndices = []

    // Then, allow each verse to know its scene index.
    sceneVerseIndices.forEach((sceneVerseIndex, sceneIndex) => {
        let currentVerseIndex = sceneVerseIndex

        /**
         * Tell this verse config, and each subsequent one, this scene
         * index, up until the next scene index.
         */
        while (
            sceneIndex === sceneVerseIndices.length - 1 ?

                /**
                 * If this is the last scene, iterate through the
                 * remaining verse indices.
                 */
                currentVerseIndex < verseStartTimes.length :

                /**
                 * Otherwise, keep going until we've reached the first
                 * verse index of the next scene.
                 */
                currentVerseIndex <
                sceneVerseIndices[sceneIndex + 1]
        ) {

            verseSceneIndices.push(sceneIndex)
            currentVerseIndex++
        }
    })

    finalSong.verseSceneIndices = verseSceneIndices
}

export const addSceneMetadata = ({
    song,
    totalTime,
    verseStartTimes,
    unitVerseIndicesList,
    finalSong
}) => {
    const { songIndex } = song

    const
        scenes = albumScenes[songIndex],
        sceneVerseIndices = [],
        sceneStartTimes = []

    scenes.forEach(scene => {
        const
            { unitIndex } = scene,
            unitVerseIndices = unitVerseIndicesList[unitIndex],
            firstVerseIndex = unitVerseIndices[0]

        sceneVerseIndices.push(firstVerseIndex)
        sceneStartTimes.push(verseStartTimes[firstVerseIndex])
    })

    finalSong.sceneVerseIndices = sceneVerseIndices
    finalSong.sceneStartTimes = sceneStartTimes

    _addDurationsToSceneConfigs({
        totalTime,
        sceneStartTimes,
        finalSong
    })

    _addVerseSceneIndices({
        sceneVerseIndices,
        verseStartTimes,
        finalSong
    })
}

