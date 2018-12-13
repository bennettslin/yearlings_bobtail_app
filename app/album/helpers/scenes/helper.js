import keys from 'lodash.keys'

import ARRANGEMENTS_ACTORS from 'scene/actors'
import ARRANGEMENTS_THINGS from 'scene/things'

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

    // Just add if this instance doesn't already exist.
    if (!layers[layerKey][presenceType][presenceName]) {
        layers[layerKey][presenceType][presenceName] = value

    /**
     * If another instance of this presence for this layer already exists, then
     * make it an object of instances instead. This only happens with go-karts
     * right now, of which there are only two in the same layer, so it's fine.
     * If there were more, this wouldn't work.
     */
    } else {
        layers[layerKey][presenceType][presenceName] = {
            [layers[layerKey][presenceType][presenceName]]: true
        }

        layers[layerKey][presenceType][presenceName][value] = true
    }
}

const addPresenceToSceneLayerByType = ({
    presences,
    presenceType,
    presenceName,
    layers,
    album
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

        arrangementObject = ARRANGEMENTS_ACTORS[presenceName][instance]
        value = instance

        // Can be deleted.
        album.tempInstanceCount++

    } else {
        arrangementObject = ARRANGEMENTS_THINGS[presenceType][presenceName]
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
