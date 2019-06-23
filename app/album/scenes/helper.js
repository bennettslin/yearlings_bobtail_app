import keys from 'lodash.keys'

import ALL_ARRANGEMENTS_ACTORS from 'scene/actors'
import ALL_ARRANGEMENTS_THINGS from 'scene/things'

import { ACTOR } from 'constants/scene'

const _addPresenceToSceneLayer = ({
    arrangementObject,
    layers,
    presenceType,
    presenceName,
    value

}) => {
    const
        { yIndex } = arrangementObject,
        layerKey = `layer${yIndex}`

    // Initialise this layer if necessary.
    if (!layers[layerKey]) {
        layers[layerKey] = {}
    }

    // Initialise presenceType for this layer if necessary.
    if (!layers[layerKey][presenceType]) {
        layers[layerKey][presenceType] = {}
    }

    layers[layerKey][presenceType][presenceName] = value
}

const _addPresenceToSceneLayerByType = ({
    presences,
    presenceType,
    presenceName,
    layers
}) => {
    const dynamicValue = presences[presenceType][presenceName]

    let arrangementObject,
        value

    if (presenceType === ACTOR) {
        // This is an object with an instance key and boolean value.
        const actor = dynamicValue
        let { instance } = actor

        /**
         * If this is an alternate character, the instance is nested within the
         * character object.
         */
        if (!instance) {
            const characterName = keys(actor)[0]
            instance = actor[characterName].instance
        }

        arrangementObject = ALL_ARRANGEMENTS_ACTORS[presenceName][instance]
        value = instance

    } else {
        arrangementObject = ALL_ARRANGEMENTS_THINGS[presenceType][presenceName]
        // This is a boolean.
        value = dynamicValue
    }

    _addPresenceToSceneLayer({
        arrangementObject,
        layers,
        presenceType,
        presenceName,
        value
    })
}

export const addLayersToScenes = (albumScenes) => {
    albumScenes.forEach(songScenes => {
        songScenes.forEach(scene => {
            const
                { presences } = scene,
                layers = {}

            // Iterate through actors, cutouts, fixtures.
            keys(presences).forEach(presenceType => {

                // Iterate through presences for each presenceType.
                keys(presences[presenceType]).forEach(presenceName => {

                    _addPresenceToSceneLayerByType({
                        presences,
                        presenceType,
                        presenceName,
                        layers
                    })
                })
            })

            scene.layers = layers
        })
    })
}

