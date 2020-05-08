import isFinite from '../../../../app/utils/lodash/isfinite'
import keys from '../../../../app/utils/lodash/keys'
import albumScenes from '../../../scenes'

import { ACTOR } from '../../../../app/constants/scene'

const
    // The time spent thus far per drawing.
    BASELINE_TIME = 6.65,

    TOTAL_TIME =
        BASELINE_TIME

export const initialiseDrawings = (drawings, songIndex) => {

    albumScenes[songIndex].forEach((scene, sceneIndex) => {

        // Initialise object for each presence type.
        if (!drawings[ACTOR]) {
            drawings[ACTOR] = {}
        }

        const actorPresences = scene.presences[ACTOR]

        for (const actor in actorPresences) {
            // Initialise array for each actor.
            if (!drawings[ACTOR][actor]) {
                drawings[ACTOR][actor] = []
            }

            const characterObject = actorPresences[actor],

                /**
                 * The nesting is different if the actor is playing
                 * an alternate character in this scene, rather than
                 * themselves.
                 */
                isAlternate =
                    keys(characterObject).length === 1 &&
                    !characterObject.instance,

                character =
                    isAlternate ?
                        keys(characterObject)[0] :
                        actor,

                instanceName =
                    isAlternate ?
                        characterObject[character] :
                        characterObject,

                {
                    instance
                } = instanceName

            drawings[ACTOR][actor].push({
                songIndex,
                sceneIndex,
                character,
                instance
            })
        }

        // No longer needed.
        delete scene.presences
    })
}

export const addActorTasksToSongDrawingTasks = (drawings) => {

    // Turn actors object into array for easier frontend parsing.
    const actors = []
    let actorsTotalCount = 0,
        actorsTodoCount = 0,
        actorsHalfTodoCount = 0

    keys(drawings[ACTOR]).forEach(actor => {
        const roles = drawings[ACTOR][actor],
            rolesTotalCount = roles.length,
            characters = {}

        let rolesTodoCount = 0,
            halfRolesTodoCount = 0

        roles.forEach(role => {

            const {
                songIndex,
                sceneIndex,
                instance,
                character
            } = role

            /**
             * The baseline figure that reflects work that has already been
             * done, including body, clothes, and head drawings.
             */
            let workedHours = BASELINE_TIME

            const doneForNow = true,
                halfDoneForNow = true

            if (!doneForNow) {
                rolesTodoCount++
            }
            if (!halfDoneForNow) {
                halfRolesTodoCount++
            }

            // Initialise array for each character.
            if (!characters[character]) {
                characters[character] = []
            }

            characters[character].push({
                songIndex,
                sceneIndex,
                workedHours,
                instance,
                doneForNow,
                halfDoneForNow
            })

            if (!drawings.songTasks) {
                drawings.songTasks = {}
            }
            if (!drawings.songTasks[songIndex]) {
                drawings.songTasks[songIndex] = {}
            }

            // Let song know its individual todos.
            if (!isFinite(drawings.songTasks[songIndex].actorsTodoCount)) {
                drawings.songTasks[songIndex].actorsTodoCount = 0
                drawings.songTasks[songIndex].actorsTotalCount = 0
            }
            if (!isFinite(drawings.songTasks[songIndex].actorsWorkedHours)) {
                drawings.songTasks[songIndex].actorsWorkedHours = 0
            }
            if (!isFinite(drawings.songTasks[songIndex].actorsNeededHours)) {
                drawings.songTasks[songIndex].actorsNeededHours = 0
            }

            drawings.songTasks[songIndex].actorsTodoCount++

            drawings.songTasks[songIndex].actorsWorkedHours += (
                workedHours || 0
            )

            drawings.songTasks[songIndex].actorsNeededHours += TOTAL_TIME
            drawings.songTasks[songIndex].actorsTotalCount++
        })

        actorsTodoCount += rolesTodoCount
        actorsHalfTodoCount += halfRolesTodoCount
        actorsTotalCount += rolesTotalCount

        actors.push({
            actor,
            characters,
            rolesTodoCount,
            halfRolesTodoCount,
            rolesTotalCount
        })
    })

    drawings[ACTOR] = actors
    drawings.actorsTodoCount = actorsTodoCount
    drawings.actorsHalfTodoCount = actorsHalfTodoCount
    drawings.actorsTotalCount = actorsTotalCount
}
