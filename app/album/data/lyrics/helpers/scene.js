import albumScenes from '../../scenes'

const _addDurationsToSceneConfigs = (sceneConfigs, { totalTime }) => {
    // This is a duplicate of the same method for verse configs.

    sceneConfigs.forEach((sceneConfig, sceneIndex) => {
        const { sceneStartTime } = sceneConfig
        let nextTime

        // It is followed by another scene.
        if (sceneIndex < sceneConfigs.length - 1) {
            nextTime = sceneConfigs[sceneIndex + 1].sceneStartTime

        // It is the last scene.
        } else {
            nextTime = totalTime
        }

        sceneConfig.sceneDuration = nextTime - sceneStartTime
    })
}

export const addSceneConfigs = (song) => {
    const {
        songIndex,
        lyricUnits,
        songVerseConfigs
    } = song

    if (lyricUnits) {
        const
            scenes = albumScenes[songIndex],
            sceneConfigs = []

        scenes.forEach(scene => {
            const {
                unitIndex,
                verseIndex
            } = scene

            // Scene either has a unit index or a verse index.
            if (Number.isFinite(unitIndex)) {
                const
                    unit = lyricUnits[unitIndex],
                    { mainVerses } = unit

                sceneConfigs.push({
                    firstVerseIndex: mainVerses[0].verseIndex,
                    sceneStartTime: mainVerses[0].time
                })

            } else {
                sceneConfigs.push({
                    firstVerseIndex: verseIndex,
                    sceneStartTime:
                        songVerseConfigs[verseIndex].verseStartTime
                })
            }
        })

        _addDurationsToSceneConfigs(sceneConfigs, song)
        song.songSceneConfigs = sceneConfigs
    }
}

export const addSceneIndicesToVerseConfigs = (song) => {

    const {
        songSceneConfigs,
        songVerseConfigs,
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
                    currentVerseIndex < songVerseConfigs.length :

                    /**
                     * Otherwise, keep going until we've reached the first
                     * verse index of the next scene.
                     */
                    currentVerseIndex <
                    songSceneConfigs[sceneIndex + 1].firstVerseIndex
            ) {

                songVerseConfigs[currentVerseIndex].sceneIndex = sceneIndex
                currentVerseIndex++
            }
        })
    }
}
