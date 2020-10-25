import ACTOR_ARRANGEMENTS from '../../../scene/scenes/actors'
import THING_ARRANGEMENTS from '../../../scene/scenes/things'
import {
    getNearestXIndex,
    getValueInAbridgedMatrix
} from '../../../../../app/helpers/cubeIndices'
import { getCharStringForNumber } from '../../../../../app/helpers/format'
import { ACTOR } from '../../../../../app/constants/scene'
import cubes from '../../../scene/scenes/cubes'

const _recurseForCleanup = object => {
    Object.keys(object).forEach(key => {
        if (key === 'layerYIndex') {
            delete object[key]
        }

        /**
         * Keep zIndices array only if there are multiple zIndices. Otherwise,
         * replace with a single zIndex value.
         */
        if (key === 'zIndices') {
            const cubesKeys = Object.keys(object[key])
            if (
                /**
                 * If zIndex for every scene is the same, we don't need an
                 * array. Obviously, this is trivially true if there is only
                 * one entry in the array.
                 */
                cubesKeys.every(cubesKey => (
                    object.zIndices[cubesKey] ===
                        object.zIndices[cubesKeys[0]]
                ))
            ) {
                object.zIndex = object.zIndices[cubesKeys[0]]
                delete object.zIndices
            }
        }

        if (typeof object[key] === 'object') {
            _recurseForCleanup(object[key])
        }
    })
}

const _addPresenceToSceneLayer = ({
    arrangementObject,
    layers,
    presenceType,
    presenceName,
    value,
    layerPresencesList,
    cubesKey

}) => {
    const
        {
            yIndex: arrangedYIndex = -1,
            layerYIndex,
            xPosition
        } = arrangementObject,

        /**
         * If layerYIndex exists, then presence is placed in the layerYIndex
         * layer, which is different from the yIndex used for arrangement and
         * scaling.
         */
        yIndex = Number.isFinite(layerYIndex) ? layerYIndex : arrangedYIndex,
        layerKey = `layer_${getCharStringForNumber(yIndex)}`,
        zIndex = getValueInAbridgedMatrix(
            cubes[cubesKey].floor.zIndices,
            arrangedYIndex,
            getNearestXIndex(xPosition)
        )

    // Allow presence to have different zIndices for different scenes.
    if (!arrangementObject.zIndices) {
        arrangementObject.zIndices = {}
    }
    arrangementObject.zIndices[cubesKey] = zIndex

    // Initialise this layer if necessary.
    if (!layers[layerKey]) {
        layers[layerKey] = {}
    }

    // Initialise presenceType for this layer if necessary.
    if (!layers[layerKey][presenceType]) {
        layers[layerKey][presenceType] = {}
    }

    layers[layerKey][presenceType][presenceName] = value

    // Also add to layer presences.
    if (!layerPresencesList[yIndex]) {
        layerPresencesList[yIndex] = {}
    }
    if (!layerPresencesList[yIndex][presenceType]) {
        layerPresencesList[yIndex][presenceType] = {}
    }

    // It's an actor.
    if (typeof value === 'string') {
        if (!layerPresencesList[yIndex][presenceType][presenceName]) {
            layerPresencesList[yIndex][presenceType][presenceName] = {}
        }
        layerPresencesList[yIndex][presenceType][presenceName][value] = true

    // It's a thing.
    } else {
        layerPresencesList[yIndex][presenceType][presenceName] = true
    }
}

const _addPresenceToSceneLayerByType = ({
    presences,
    presenceType,
    presenceName,
    layers,
    layerPresencesList,
    cubesKey

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
            const characterName = Object.keys(actor)[0]
            instance = actor[characterName].instance
        }

        arrangementObject = ACTOR_ARRANGEMENTS[presenceName][instance]
        value = instance

    } else {
        arrangementObject = THING_ARRANGEMENTS[presenceType][presenceName]
        // This is a boolean.
        value = dynamicValue
    }

    _addPresenceToSceneLayer({
        arrangementObject,
        layers,
        presenceType,
        presenceName,
        value,
        layerPresencesList,
        cubesKey
    })
}

const _getLayeredScenes = (
    albumScenes,
    layerPresencesList

) => {
    albumScenes.forEach(songScenes => {
        songScenes.forEach(scene => {
            const
                {
                    presences,
                    cubes: cubesKey
                } = scene,
                layers = {}

            // Iterate through actors, cutouts, fixtures.
            Object.keys(presences).forEach(presenceType => {

                // Iterate through presences for each presenceType.
                Object.keys(presences[presenceType]).forEach(presenceName => {

                    _addPresenceToSceneLayerByType({
                        presences,
                        presenceType,
                        presenceName,
                        layers,
                        layerPresencesList,
                        cubesKey
                    })
                })
            })

            scene.layers = layers
        })
    })

    return albumScenes
}

export const getSceneData = rawScenes => {
    const
        layerPresencesList = {},
        albumScenes = _getLayeredScenes(rawScenes, layerPresencesList)

    /**
     * Convert final entries into arrays. This makes the final rendering order
     * of presences for the same thing type based on the order of their first
     * appearance in the scenes themselves.
     */
    Object.keys(layerPresencesList).forEach(layerKey => {
        const layer = layerPresencesList[layerKey]

        Object.keys(layer).forEach(presenceKey => {
            if (presenceKey === ACTOR) {
                const actors = layer[presenceKey]
                Object.keys(actors).forEach(actorKey => {
                    actors[actorKey] = Object.keys(actors[actorKey])
                })

            } else {
                layer[presenceKey] = Object.keys(layer[presenceKey])
            }
        })
    })

    // Final cleanup.
    _recurseForCleanup(ACTOR_ARRANGEMENTS)
    _recurseForCleanup(THING_ARRANGEMENTS)

    return {
        albumScenes,
        layerPresencesList
    }
}
