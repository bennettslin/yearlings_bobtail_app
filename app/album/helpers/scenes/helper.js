import keys from 'lodash.keys'

import ALL_ARRANGEMENTS_ACTORS from 'scene/actors'
import ALL_ARRANGEMENTS_THINGS from 'scene/things'

import { ACTORS } from 'constants/scene'

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

const addPresenceToSceneLayerByType = ({
    presences,
    presenceType,
    presenceName,
    layers
}) => {
    const presenceValue = presences[presenceType][presenceName]

    let arrangementObject,
        value

    if (presenceType === ACTORS) {
        let { instance } = presenceValue

        /**
         * If this is an alternate character, the instance is nested within the
         * character object.
         */
        if (!instance) {
            const characterName = keys(presenceValue)[0]
            instance = presenceValue[characterName].instance
        }

        arrangementObject = ALL_ARRANGEMENTS_ACTORS[presenceName][instance]
        value = instance

    } else {
        arrangementObject = ALL_ARRANGEMENTS_THINGS[presenceType][presenceName]
        value = presenceValue
    }

    _addPresenceToSceneLayer({
        arrangementObject,
        layers,
        presenceType,
        presenceName,
        value
    })
}

export {
    addPresenceToSceneLayerByType
}
