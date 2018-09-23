// Parse scene data for build.

import keys from 'lodash.keys'

import ARRANGEMENTS_ACTORS from 'scene/actors'
import ARRANGEMENTS_THINGS from 'scene/things'

import { ACTORS } from 'constants/scene'

/**
 * FIXME: These are a mess.
 */

export const initialRegisterScenes = (
    album,
    songObject,
    songIndex
) => {
    const scenes = album.scenes[songIndex]

    songObject.tempSceneRawIndices = []

    scenes.forEach((scene) => {

        const isUnitIndex = !isNaN(scene.unitIndex)

        songObject.tempSceneRawIndices.push({
            isUnitIndex,

            // Scene either has a unit index or a verse index.
            rawIndex:
                isUnitIndex ?
                    scene.unitIndex :
                    scene.verseIndex
        })
    })
}

export const finalRegisterScenes = (songObject) => {

    // Allow easy access to scene metadata.
    songObject.songSceneConfigs = []

    const {
            lyricUnits,
            tempSceneRawIndices,
            songVerseConfigs,
            songSceneConfigs
        } = songObject

    // First, allow each scene to know its first verse index.
    tempSceneRawIndices.forEach((rawIndexObject) => {

        const {
            isUnitIndex,
            rawIndex
        } = rawIndexObject

        // Either scene is identified by a unit index...
        if (isUnitIndex) {
            const unitArray = lyricUnits[rawIndex],
                unitMapObject = unitArray[unitArray.length - 1],
                unitFirstVerseIndex = unitMapObject.tempFirstVerseIndex,
                unitFirstVerseTime = unitArray[0].time

            songSceneConfigs.push({
                firstVerseIndex: unitFirstVerseIndex,
                adminSceneStartTime: unitFirstVerseTime
            })

            delete unitMapObject.tempFirstVerseIndex

        // ... or else scene is identified by a verse index.
        } else {
            songSceneConfigs.push({
                firstVerseIndex: rawIndex,
                adminSceneStartTime:
                    songVerseConfigs[rawIndex].verseStartTime
            })
        }
    })

    // Then, allow each verse to know its scene index.
    songSceneConfigs.forEach((sceneConfig, sceneIndex) => {
        const { firstVerseIndex } = sceneConfig

        let currentVerseIndex = firstVerseIndex

        /**
         * Tell this verse config, and each subsequent one, this scene index,
         * up until the next scene index.
         */
        while (
            sceneIndex === songSceneConfigs.length - 1 ?

                /**
                 * If this is the last scene, iterate through the remaining
                 * verse indices.
                 */
                currentVerseIndex < songVerseConfigs.length :

                /**
                 * Otherwise, keep going until we've reached the first verse
                 * index of the next scene.
                 */
                currentVerseIndex <
                    songSceneConfigs[sceneIndex + 1].firstVerseIndex
        ) {

            songVerseConfigs[currentVerseIndex].sceneIndex = sceneIndex
            currentVerseIndex++
        }
    })
}

export const finalRegisterPresenceYIndices = (
    album,
    songIndex
) => {
    const scenes = album.scenes[songIndex]

    scenes.forEach(scene => {

        const {
            presences
        } = scene

        // Create the presenceYIndices object for each scene.
        scene.presenceYIndices = {}

        // Iterate through actors, cutouts, fixtures.
        keys(presences).forEach(presenceType => {

            // Iterate through presences.
            keys(presences[presenceType]).forEach(presenceName => {

                const presence = presences[presenceType][presenceName]

                let arrangementObject,
                    { instance } = presence

                // Actor.
                if (presenceType === ACTORS) {

                    /**
                     * If this is an alternate character, the instance is
                     * nested within the character object.
                     */
                    if (!instance) {
                        const characterName = keys(presence)[0],
                            characterPresence = presence[characterName]

                        instance = characterPresence.instance
                    }

                    arrangementObject =
                        ARRANGEMENTS_ACTORS[presenceName][instance]

                    // Can be deleted.
                    album.tempInstanceCount++

                // Cutout, fixture, flat, furniture.
                } else {

                    // This presence has only one arrangement.
                    if (presence === true) {
                        arrangementObject =
                            ARRANGEMENTS_THINGS[presenceType][presenceName]

                    /**
                     * This presence has multiple arrangements.
                     */
                    } else {
                        arrangementObject =
                            ARRANGEMENTS_THINGS[presenceType][presenceName][presence]
                    }
                }

                const {
                    /**
                     * Determine the yIndex of each presence.
                     */
                    yIndex,
                    arrangement
                } = arrangementObject

                /**
                 * TODO: Eventually, all presences should have a yIndex. For
                 * now, we will check if they don't. Placeholders have negative
                 * yIndex.
                 */
                if (!isNaN(yIndex) && yIndex > -1) {
                    /**
                     * If this is the first presence for that yIndex,
                     * initialise the yIndex array.
                     */
                    if (!scene.presenceYIndices[yIndex]) {
                        scene.presenceYIndices[yIndex] = []
                    }

                    /**
                     * Add presence to the scene's presenceYIndices object
                     * under that yIndex.
                     */
                    scene.presenceYIndices[yIndex].push({
                        type: presenceType,
                        name: presenceName,
                        instance,
                        arrangement
                    })
                }
            })
        })

        // Scene no longer needs the presences object.
        delete scene.presences
    })
}
