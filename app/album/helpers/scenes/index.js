// Parse scene data for build.

import keys from 'lodash.keys'

import { addPresenceToSceneLayerByType } from './helper'

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

        const
            { presences } = scene,
            layers = {}

        // Iterate through actors, cutouts, fixtures.
        keys(presences).forEach(presenceType => {

            // Iterate through presences for each presenceType.
            keys(presences[presenceType]).forEach(presenceName => {

                addPresenceToSceneLayerByType({
                    presences,
                    presenceType,
                    presenceName,
                    layers,
                    album
                })
            })
        })

        scene.layers = layers

        // Scene no longer needs the presences object.
        // delete scene.presences
    })
}
