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

const _addPresenceToSceneLayer = ({
    arrangementObject,
    layers,
    presenceType,
    presenceName,
    value

}) => {
    const { yIndex } = arrangementObject

    // Initialise this layer if necessary.
    if (!layers[yIndex]) {
        layers[yIndex] = {}
    }

    // Initialise presenceType for this layer if necessary.
    if (!layers[yIndex][presenceType]) {
        layers[yIndex][presenceType] = {}
    }

    // Just add if this instance doesn't already exist.
    if (!layers[yIndex][presenceType][presenceName]) {
        layers[yIndex][presenceType][presenceName] = value

    /**
     * If another instance of this presence for this layer already exists, then
     * make it an object of instances instead. This only happens with go-karts
     * right now, of which there are only two in the same layer, so it's fine.
     * If there were more, this wouldn't work.
     */
    } else {
        layers[yIndex][presenceType][presenceName] = {
            [layers[yIndex][presenceType][presenceName]]: true
        }

        layers[yIndex][presenceType][presenceName][value] = true
    }
}

export const finalRegisterPresenceYIndices = (
    album,
    songIndex

) => {
    const scenes = album.scenes[songIndex]

    scenes.forEach(scene => {

        const
            { presences } = scene,
            layers = {}

        // Create the presenceYIndices object for each scene.
        // TODO: Eventually get rid of this one.
        scene.presenceYIndices = {}

        // Iterate through actors, cutouts, fixtures.
        keys(presences).forEach(presenceType => {

            // Iterate through presences for each presenceType.
            keys(presences[presenceType]).forEach(presenceName => {

                const
                    presenceValue = presences[presenceType][presenceName],
                    arrangementObjects = []

                let { instance } = presenceValue

                // Actor.
                if (presenceType === ACTORS) {
                    /**
                     * If this is an alternate character, the instance is
                     * nested within the character object.
                     */
                    if (!instance) {
                        const characterName = keys(presenceValue)[0],
                            characterPresence = presenceValue[characterName]

                        instance = characterPresence.instance
                    }

                    const arrangementObject =
                        ARRANGEMENTS_ACTORS[presenceName][instance]

                    arrangementObjects.push(
                        // An object with yIndex and arrangement matrix.
                        arrangementObject
                    )

                    // Can be deleted.
                    album.tempInstanceCount++

                    _addPresenceToSceneLayer({
                        arrangementObject,
                        layers,
                        presenceType,
                        presenceName,
                        value: instance
                    })

                // Cutout, fixture, flat, furniture.
                } else {
                    let arrangementObject

                    // This presence has only one arrangement.
                    if (presenceValue === true) {
                        arrangementObject =
                            ARRANGEMENTS_THINGS[presenceType][presenceName]
                        arrangementObjects.push(
                            arrangementObject
                        )

                        _addPresenceToSceneLayer({
                            arrangementObject,
                            layers,
                            presenceType,
                            presenceName,
                            value: presenceValue
                        })

                    /**
                     * This presence has multiple arrangements in a single
                     * layer. (Go-karts, twin streetlamps, and snowglobes.)
                     */
                    } else if (Array.isArray(presenceValue)) {

                        presenceValue.forEach(arrangement => {
                            arrangementObject =
                                ARRANGEMENTS_THINGS[presenceType][presenceName][arrangement]
                            arrangementObjects.push(
                                arrangementObject
                            )

                            _addPresenceToSceneLayer({
                                arrangementObject,
                                layers,
                                presenceType,
                                presenceName,
                                value: arrangement
                            })
                        })

                    /**
                     * This presence has multiple arrangements, but only one
                     * per scene.
                     */
                    } else {
                        arrangementObject =
                            ARRANGEMENTS_THINGS[presenceType][presenceName][presenceValue]

                        arrangementObjects.push(
                            arrangementObject
                        )

                        _addPresenceToSceneLayer({
                            arrangementObject,
                            layers,
                            presenceType,
                            presenceName,
                            value: presenceValue
                        })
                    }
                }

                arrangementObjects.forEach(arrangementObject => {
                    const {
                        /**
                         * Determine the yIndex of each presence.
                         */
                        yIndex,
                        arrangement
                    } = arrangementObject

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
                })
            })
        })

        scene.layers = layers

        // Scene no longer needs the presences object.
        delete scene.presences
    })
}
