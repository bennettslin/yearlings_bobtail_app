import isFinite from 'lodash/isfinite'
import keys from 'lodash/keys'
import albumScenes from '../../../scenes'

import { ACTOR } from 'constants/scene'

const
    // The time spent thus far per drawing.
    BASELINE_TIME = 4.35,
    FACE_REVISION_TIME = 0.75,
    HAIR_ILLUSTRATION_TIME = 0.5,
    HEAD_TIME = 0.25,
    EYEBROW_TIME = 0.04,
    NOSE_TIME = 0.06,
    MOUTH_TIME = 0.05,
    LIPS_TIME = 0.05,
    EYES_TIME = 0.1,
    PUPILS_TIME = 0.05,
    COLOUR_LAYERS_TIME = 0.15,
    HEAD_INSPECTION_TIME = 0.05,
    HEAD_PLACEMENT_TIME = 0.1,
    FINAL_SVG_TIME = 0.05,
    SIZE_ADJUSTMENT_TIME = 0.05,

    // This works out to 6.35 hours per drawing.
    TOTAL_TIME =
        BASELINE_TIME +
        FACE_REVISION_TIME +
        HAIR_ILLUSTRATION_TIME +
        HEAD_TIME +
        EYEBROW_TIME +
        NOSE_TIME +
        MOUTH_TIME +
        LIPS_TIME +
        EYES_TIME +
        PUPILS_TIME +
        COLOUR_LAYERS_TIME +
        HEAD_INSPECTION_TIME +
        HEAD_PLACEMENT_TIME +
        FINAL_SVG_TIME +
        SIZE_ADJUSTMENT_TIME

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
                isAlternate = keys(characterObject).length === 1,

                character =
                    isAlternate ?
                        keys(characterObject)[0] :
                        actor,

                instanceName =
                    isAlternate ?
                        characterObject[character] :
                        characterObject,

                {
                    faceRevision,
                    hairIllustration,
                    head,
                    eyebrow,
                    nose,
                    mouth,
                    lips,
                    eyes,
                    pupils,
                    colourLayers,
                    headInspection,
                    headPlacement,
                    finalSvg,
                    sizeAdjustment,
                    instance
                } = instanceName

            drawings[ACTOR][actor].push({
                songIndex,
                sceneIndex,
                character,
                faceRevision,
                hairIllustration,
                head,
                eyebrow,
                nose,
                mouth,
                lips,
                eyes,
                pupils,
                colourLayers,
                headInspection,
                headPlacement,
                finalSvg,
                sizeAdjustment,
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
                faceRevision,
                hairIllustration,
                head,
                eyebrow,
                nose,
                mouth,
                lips,
                eyes,
                pupils,
                colourLayers,
                headInspection,
                headPlacement,
                finalSvg,
                sizeAdjustment,
                instance,
                character
            } = role

            /**
             * The baseline figure that reflects work that has already been
             * done, including body, clothes, and head drawings.
             */
            let workedHours = BASELINE_TIME

            if (!faceRevision) {
                workedHours += FACE_REVISION_TIME
            }
            if (!hairIllustration) {
                workedHours += HAIR_ILLUSTRATION_TIME
            }
            if (!head) {
                workedHours += HEAD_TIME
            }
            if (!eyebrow) {
                workedHours += EYEBROW_TIME
            }
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
            if (!colourLayers) {
                workedHours += COLOUR_LAYERS_TIME
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
            if (!sizeAdjustment) {
                workedHours += SIZE_ADJUSTMENT_TIME
            }

            /**
             * TODO: Keep modifying this conditional so that it reflects the
             * latest task.
             */
            const doneForNow = !colourLayers && !headInspection,
                halfDoneForNow = !colourLayers

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
