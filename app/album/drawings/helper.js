import isNumber from 'lodash.isnumber'
import keys from 'lodash.keys'
import albumScenes from 'album/scenes'

import { ACTORS } from 'constants/scene'

export const initialiseDrawings = (drawings, songIndex) => {

    const scenes = albumScenes[songIndex]

    scenes.forEach((scene, sceneIndex) => {

        if (scene.presences) {

            // Initialise object for each presence type.
            if (!drawings[ACTORS]) {
                drawings[ACTORS] = {}
            }

            const typePresences = scene.presences[ACTORS]

            for (const name in typePresences) {

                const presenceObject = {
                    songIndex,
                    sceneIndex
                }

                // Initialise array for each actor, cutout, fixture.
                if (!drawings[ACTORS][name]) {
                    drawings[ACTORS][name] = []
                }

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
                    drawings[ACTORS][name].push(presenceObject)
                }
            }
        }

        // No longer needed.
        delete scene.presences
    })
}

export const addActorTasksToSongDrawingTasks = (drawings) => {

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
                 * the latest task. Currently it's faces, assumed to take 45
                 * minutes. Leave 15 minutes for consistency and touchup of
                 * faces, then an hour for svg prep.
                 */
                if (roleObject.todo) {
                    if (descriptionEntity.workedHours < 3.75) {
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

            if (!drawings.songTasks) {
                drawings.songTasks = {}
            }
            if (!drawings.songTasks[songIndex]) {
                drawings.songTasks[songIndex] = {}
            }

            // Let song know its individual todos.
            if (!isNumber(drawings.songTasks[songIndex].actorsTodoCount)) {
                drawings.songTasks[songIndex].actorsTodoCount = 0
                drawings.songTasks[songIndex].actorsTotalCount = 0
            }
            if (!isNumber(drawings.songTasks[songIndex].actorsWorkedHours)) {
                drawings.songTasks[songIndex].actorsWorkedHours = 0
            }
            if (!isNumber(drawings.songTasks[songIndex].actorsNeededHours)) {
                drawings.songTasks[songIndex].actorsNeededHours = 0
            }

            if (roleObject.todo) {
                const { subtasks } = roleObject,

                    // For compound instances, measure twice. (Or however many.)
                    compoundValue = descriptionEntity.compound || 1

                if (subtasks && subtasks.length) {
                    subtasks.forEach(subtask => {
                        drawings.songTasks[songIndex].actorsWorkedHours += subtask.workedHours

                        drawings.songTasks[songIndex].actorsNeededHours += subtask.neededHours
                    })
                }

                drawings.songTasks[songIndex].actorsTodoCount++

                drawings.songTasks[songIndex].actorsWorkedHours += (
                    descriptionEntity.workedHours || 0
                ) * compoundValue

                // Assume 5 hours per drawing.
                drawings.songTasks[songIndex].actorsNeededHours += (
                    descriptionEntity.neededHours || 5
                ) * compoundValue

            }
            drawings.songTasks[songIndex].actorsTotalCount++
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
