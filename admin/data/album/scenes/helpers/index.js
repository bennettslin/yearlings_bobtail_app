import ACTOR_ARRANGEMENTS from '../../../scene/scenes/actors'
import SCENE_CUBES from '../../../scene/scenes/cubes'
import THING_ARRANGEMENTS from '../../../scene/scenes/things'
import {
    getNearestXIndex,
    getValueInAbridgedMatrix
} from '../../../../../app/helpers/cubeIndices'
import { getCharStringForNumber } from '../../../../../app/helpers/format'
import { ACTOR } from '../../../../../app/constants/scene'

const _addPresenceToSceneLayer = ({
    arrangementObject,
    layers,
    presenceType,
    presenceName,
    value,
    layerPresencesList

}) => {
    const
        {
            yIndex: arrangedYIndex = -1,
            layerYIndex
        } = arrangementObject,

        /**
         * If layerYIndex exists, then presence is placed in the layerYIndex
         * layer, which is different from the yIndex used for arrangement and
         * scaling.
         */
        yIndex = Number.isFinite(layerYIndex) ? layerYIndex : arrangedYIndex,
        layerKey = `layer_${getCharStringForNumber(yIndex)}`

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

    // Clean up.
    delete arrangementObject.layerYIndex
}

const getFloorZIndexForPresence = (
    cubes,
    yIndex,
    xPosition

) => {
    const xIndex = getNearestXIndex(xPosition)
    /**
     * Presence needs to know the floor zIndex for positioning. Slant direction
     * doesn't matter because presence positions as if default.
     */
    return getValueInAbridgedMatrix(
        SCENE_CUBES[cubes].floor.zIndices,
        yIndex,
        xIndex
    )
}

const _addPresenceToSceneLayerByType = ({
    cubes,
    presences,
    presenceType,
    presenceName,
    layers,
    layerPresencesList

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

    // TODO: To delete.
    // Add cubes as string if this is the first one.
    if (!arrangementObject.cubes) {
        arrangementObject.cubes = cubes

    } else if (typeof arrangementObject.cubes === 'string') {
        if (cubes !== arrangementObject.cubes) {

            // Create an array with both cubes keys.
            arrangementObject.cubes = [
                arrangementObject.cubes,
                cubes
            ]
        }

    } else if (Array.isArray(arrangementObject.cubes)) {
        if (!arrangementObject.cubes.includes(cubes)) {

            // Add to the array.
            arrangementObject.cubes.push(cubes)
        }
    }

    const floorZIndex = getFloorZIndexForPresence(
        cubes,
        arrangementObject.yIndex,
        arrangementObject.xPosition
    )

    // TODO: To delete.
    global.notEqual = {}
    if (!Number.isFinite(arrangementObject.floorZIndex)) {
        arrangementObject.floorZIndex = floorZIndex
    } else {
        if (floorZIndex !== arrangementObject.floorZIndex) {
            console.error('not equal', presenceType, presenceName, value, floorZIndex, arrangementObject.floorZIndex, arrangementObject.cubes)

            if (!global.notEqual[presenceType]) {
                global.notEqual[presenceType] = {}
            }

            global.notEqual[presenceType][presenceName] = true
        }
    }

    _addPresenceToSceneLayer({
        arrangementObject,
        layers,
        presenceType,
        presenceName,
        value,
        layerPresencesList
    })
}

const _getLayeredScenes = (
    albumScenes,
    layerPresencesList

) => {
    albumScenes.forEach(songScenes => {
        songScenes.forEach(scene => {
            const
                { cubes, presences } = scene,
                layers = {}

            // Iterate through actors, cutouts, fixtures.
            Object.keys(presences).forEach(presenceType => {

                // Iterate through presences for each presenceType.
                Object.keys(presences[presenceType]).forEach(presenceName => {

                    _addPresenceToSceneLayerByType({
                        cubes,
                        presences,
                        presenceType,
                        presenceName,
                        layers,
                        layerPresencesList
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

    // Convert final entries into arrays.
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

    return {
        albumScenes,
        layerPresencesList
    }
}
