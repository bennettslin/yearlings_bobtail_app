// Parse drawing data for build.
import album from 'album'
import keys from 'lodash.keys'

import {
    ACTORS,
    PRESENCE_TYPES
} from 'constants/scene'

/**
 * FIXME: These are a mess, but this is only for admin. Will be deleted at some
 * point.
 */

export const adminGatherDrawings = (drawings, songIndex) => {

    const
        drawingTypes = PRESENCE_TYPES,
        scenes = album.scenes[songIndex]

    scenes.forEach((scene, sceneIndex) => {

        if (scene.presences) {

            drawingTypes.forEach(drawingType => {

                // Initialise object for each presence type.
                if (!drawings[drawingType]) {
                    drawings[drawingType] = {}
                }

                const typePresences = scene.presences[drawingType]

                for (const name in typePresences) {

                    const presenceObject = {
                        songIndex,
                        sceneIndex
                    }

                    // Initialise array for each actor, cutout, fixture.
                    if (!drawings[drawingType][name]) {
                        drawings[drawingType][name] = []
                    }

                    if (drawingType === ACTORS) {

                        /**
                         * The nesting is different if the actor is playing
                         * an alternate character in this scene, rather than
                         * themselves.
                         */
                        const
                            characterEntity = typePresences[name],

                            isAlternate =
                                keys(characterEntity).length === 1,

                            characterName =
                                isAlternate ?
                                    keys(characterEntity)[0] :
                                    name,

                            descriptionEntity =
                                isAlternate ?
                                    characterEntity[characterName] :
                                    characterEntity

                        presenceObject.character = characterName
                        presenceObject.descriptionEntity = descriptionEntity

                        // Don't count duplicate instances.
                        if (!descriptionEntity.duplicate) {
                            drawings[drawingType][name].push(presenceObject)
                        }

                    } else {
                        presenceObject.descriptionEntity = typePresences[name]
                        drawings[drawingType][name].push(presenceObject)
                    }
                }
            })
        }

        // No longer needed.
        delete scene.presences
    })
}

export const _adminFinaliseActors = (drawings) => {

    // Turn actors object into array for easier frontend parsing.
    const actors = []
    let actorsTotalCount = 0,
        actorsTodoCount = 0

    keys(drawings.actors).forEach(actor => {
        const roles = drawings.actors[actor],
            rolesTotalCount = roles.length,
            characters = {}

        let rolesTodoCount = 0

        roles.forEach(role => {

            const {
                    songIndex,
                    sceneIndex,
                    descriptionEntity,
                    subtasks
                } = role,

                roleObject = {
                    songIndex,
                    sceneIndex,
                    workedHours: descriptionEntity.workedHours,
                    subtasks
                }

            // This will eventually always be an object.
            if (typeof descriptionEntity === 'object') {
                roleObject.todo = descriptionEntity.todo
                roleObject.description = descriptionEntity.description

                /**
                 * FIXME: Keep modifying this conditional so that it reflects
                 * the latest task. Currently it's hair, assumed to take 30
                 * minutes...
                 */
                if (roleObject.todo) {
                    if (descriptionEntity.workedHours < 3) {
                        rolesTodoCount++

                    } else {
                        roleObject.doneForNow = true
                    }
                }
            }

            // Initialise array for each character.
            if (!characters[role.character]) {
                characters[role.character] = []
            }

            characters[role.character].push(roleObject)

            if (!drawings.songs) {
                drawings.songs = {}
            }
            if (!drawings.songs[songIndex]) {
                drawings.songs[songIndex] = {}
            }

            // Let song know its individual todos.
            if (isNaN(drawings.songs[songIndex].actorsTodoCount)) {
                drawings.songs[songIndex].actorsTodoCount = 0
                drawings.songs[songIndex].actorsTotalCount = 0
            }
            if (isNaN(drawings.songs[songIndex].actorsWorkedHours)) {
                drawings.songs[songIndex].actorsWorkedHours = 0
            }
            if (isNaN(drawings.songs[songIndex].actorsNeededHours)) {
                drawings.songs[songIndex].actorsNeededHours = 0
            }

            if (roleObject.todo) {
                const { subtasks } = roleObject,

                    // For compound instances, measure twice. (Or however many.)
                    compoundValue = descriptionEntity.compound || 1

                if (subtasks && subtasks.length) {
                    subtasks.forEach(subtask => {
                        drawings.songs[songIndex].actorsWorkedHours += subtask.workedHours

                        drawings.songs[songIndex].actorsNeededHours += subtask.neededHours
                    })
                }

                drawings.songs[songIndex].actorsTodoCount++

                drawings.songs[songIndex].actorsWorkedHours += (
                    descriptionEntity.workedHours || 0
                ) * compoundValue

                // Assume 5 hours per drawing.
                drawings.songs[songIndex].actorsNeededHours += (
                    descriptionEntity.neededHours || 5
                ) * compoundValue

            }
            drawings.songs[songIndex].actorsTotalCount++
        })

        actorsTodoCount += rolesTodoCount
        actorsTotalCount += rolesTotalCount

        actors.push({
            actor,
            characters,
            rolesTodoCount,
            rolesTotalCount
        })
    })

    drawings.actors = actors
    drawings.actorsTodoCount = actorsTodoCount
    drawings.actorsTotalCount = actorsTotalCount
}
