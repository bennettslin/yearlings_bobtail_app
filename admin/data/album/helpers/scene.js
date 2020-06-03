import albumScenes from '../scenes'

import { TIME_STAGE } from '../../../../app/constants/scene/sky'

const _addDurationsToSceneConfigs = ({
    songDuration,
    sceneStartTimes,
    song

}) => {
    const sceneDurations = []

    sceneStartTimes.forEach((sceneStartTime, sceneIndex) => {
        let nextTime

        // It is followed by another scene.
        if (sceneIndex < sceneStartTimes.length - 1) {
            nextTime = sceneStartTimes[sceneIndex + 1]

        // It is the last scene.
        } else {
            nextTime = songDuration
        }

        sceneDurations.push(nextTime - sceneStartTime)
    })

    song.sceneDurations = sceneDurations
}

export const _addVerseSceneIndices = ({
    sceneVerseIndices,
    verseStartTimes,
    song

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

    song.verseSceneIndices = verseSceneIndices
}

export const addScenes = (songIndex, song) => {
    const
        scenes = albumScenes[songIndex],
        sceneCubesKeys = [],
        sceneLayersList = [],
        sceneSkyTimes = [],
        sceneSkySeasons = []

    scenes.forEach(scene => {
        sceneCubesKeys.push(scene.cubes)
        sceneLayersList.push(scene.layers)
        sceneSkyTimes.push(scene.sky.time || TIME_STAGE)
        sceneSkySeasons.push(scene.sky.season)
    })

    song.sceneCubesKeys = sceneCubesKeys
    song.sceneLayersList = sceneLayersList
    song.sceneSkyTimes = sceneSkyTimes
    song.sceneSkySeasons = sceneSkySeasons
}

export const addSceneMetadata = ({
    songIndex,
    songDuration,
    unitVerseIndicesList,
    verseStartTimes,
    song

}) => {
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

    song.sceneVerseIndices = sceneVerseIndices
    song.sceneStartTimes = sceneStartTimes

    _addDurationsToSceneConfigs({
        songDuration,
        sceneStartTimes,
        song
    })

    _addVerseSceneIndices({
        sceneVerseIndices,
        verseStartTimes,
        song
    })
}
