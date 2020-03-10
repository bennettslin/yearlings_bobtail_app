import isFinite from 'lodash/isfinite'
import keys from 'lodash/keys'
import albumScenes from '../../../scenes'

import { ACTOR } from 'constants/scene'

const
    // The time spent thus far per drawing.
    BASELINE_TIME = 6.04,
    NOSE_TIME = 0.06,
    MOUTH_TIME = 0.05,
    LIPS_TIME = 0.05,
    EYES_TIME = 0.1,
    PUPILS_TIME = 0.05,
    HEAD_INSPECTION_TIME = 0.05,
    HEAD_PLACEMENT_TIME = 0.1,
    FINAL_SVG_TIME = 0.15,

    // This works out to 6.4 hours per drawing.
    TOTAL_TIME =
        BASELINE_TIME +
        NOSE_TIME +
        MOUTH_TIME +
        LIPS_TIME +
        EYES_TIME +
        PUPILS_TIME +
        HEAD_INSPECTION_TIME +
        HEAD_PLACEMENT_TIME +
        FINAL_SVG_TIME

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
                    nose,
                    mouth,
                    lips,
                    eyes,
                    pupils,
                    headInspection,
                    headPlacement,
                    finalSvg,
                    instance
                } = instanceName

            drawings[ACTOR][actor].push({
                songIndex,
                sceneIndex,
                character,
                nose,
                mouth,
                lips,
                eyes,
                pupils,
                headInspection,
                headPlacement,
                finalSvg,
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
                nose,
                mouth,
                lips,
                eyes,
                pupils,
                headInspection,
                headPlacement,
                finalSvg,
                instance,
                character
            } = role

            /**
             * The baseline figure that reflects work that has already been
             * done, including body, clothes, and head drawings.
             */
            let workedHours = BASELINE_TIME

            if (!nose) {
                workedHours += NOSE_TIME
            }
            if (!mouth) {
                workedHours += MOUTH_TIME
            }
            if (!lips) {
                workedHours += LIPS_TIME
            }
            if (!eyes) {
                workedHours += EYES_TIME
            }
            if (!pupils) {
                workedHours += PUPILS_TIME
            }
            if (!headInspection) {
                workedHours += HEAD_INSPECTION_TIME
            }
            if (!headPlacement) {
                workedHours += HEAD_PLACEMENT_TIME
            }
            if (!finalSvg) {
                workedHours += FINAL_SVG_TIME
            }

            /**
             * TODO: Keep modifying this conditional so that it reflects the
             * latest task.
             */
            const doneForNow = !nose && !mouth,
                halfDoneForNow = !nose

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
