import albumScenes from 'album/scenes'

export const addSceneConfigsToSongs = (albumSongs) => {

    albumSongs.forEach(song => {
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
                if (!isNaN(unitIndex)) {
                    const
                        unit = lyricUnits[unitIndex],
                        { lyricUnit } = unit

                    sceneConfigs.push({
                        firstVerseIndex: lyricUnit[0].verseIndex,
                        sceneStartTime: lyricUnit[0].time
                    })

                } else {
                    sceneConfigs.push({
                        firstVerseIndex: verseIndex,
                        sceneStartTime:
                            songVerseConfigs[verseIndex].verseStartTime
                    })
                }
            })

            song.songSceneConfigs = sceneConfigs
        }
    })
}

export const addSceneIndicesToVerseConfigs = (albumSongs) => {

    albumSongs.forEach(song => {
        const {
            songSceneConfigs,
            songVerseConfigs,
            logue
        } = song

        if (!logue) {
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
    })
}
