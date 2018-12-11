import keys from 'lodash.keys'

import ARRANGEMENTS_ACTORS from 'scene/actors'
import ARRANGEMENTS_THINGS from 'scene/things'

import { ACTORS } from 'constants/scene'

const _addPresenceToSceneLayer = ({
    arrangementObjects,
    arrangementObject,
    layers,
    presenceType,
    presenceName,
    value

}) => {

    // TODO: Eventually delete this code.
    arrangementObjects.push(
        arrangementObject
    )

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
    arrangementObjects,
    presences,
    presenceType,
    presenceName,
    layers,
    album
}) => {
    const presenceValue = presences[presenceType][presenceName]

    /**
     * This presence is an actor.
     */
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

        const arrangementObject =
            ARRANGEMENTS_ACTORS[presenceName][instance]

        _addPresenceToSceneLayer({
            arrangementObjects,
            arrangementObject,
            layers,
            presenceType,
            presenceName,
            value: instance
        })

        // Can be deleted.
        album.tempInstanceCount++

    /**
     * This presence has multiple arrangements in a single layer. (Twin
     * streetlamps, and snowglobes.)
     */
    } else if (Array.isArray(presenceValue)) {
        presenceValue.forEach(arrangementKey => {
            const arrangementObject =
                ARRANGEMENTS_THINGS[presenceType][presenceName][arrangementKey]

            _addPresenceToSceneLayer({
                arrangementObjects,
                arrangementObject,
                layers,
                presenceType,
                presenceName,
                value: arrangementKey
            })
        })

    } else {
        const arrangementObject = presenceValue === true ?

            // This presence has only one arrangement.
            ARRANGEMENTS_THINGS[presenceType][presenceName] :

            // This presence has multiple arrangements, but only one per scene.
            ARRANGEMENTS_THINGS[presenceType][presenceName][presenceValue]

        _addPresenceToSceneLayer({
            arrangementObjects,
            arrangementObject,
            layers,
            presenceType,
            presenceName,
            value: presenceValue
        })
    }
}

export {
    addPresenceToSceneLayerByType
}
