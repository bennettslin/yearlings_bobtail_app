import isFinite from 'lodash/isfinite'
import keys from 'lodash/keys'
import albumScenes from '../scenes'

import { ACTOR } from 'constants/scene'

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

                instance =
                    isAlternate ?
                        characterObject[character] :
                        characterObject,

                {
                    todo,
                    workedHours,
                    neededHours,
                    description,
                    compound,
                    duplicate
                } = instance

            // Don't count duplicate instances.
            if (!duplicate) {

                drawings[ACTOR][actor].push({
                    songIndex,
                    sceneIndex,
                    character,
                    todo,
                    workedHours,
                    neededHours,
                    description,
                    compound,
                    duplicate
                })
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

    keys(drawings[ACTOR]).forEach(actor => {
        const roles = drawings[ACTOR][actor],
            rolesTotalCount = roles.length,
            characters = {}

        let rolesTodoCount = 0

        roles.forEach(role => {

            const {
                    songIndex,
                    sceneIndex,
                    todo,
                    workedHours,
                    neededHours,
                    description,
                    compound,
                    character
                } = role,

                doneForNow = todo && workedHours >= 4.25

            /**
             * FIXME: Keep modifying this conditional so that it reflects
             * the latest task. Currently it's faces, assumed to take 45
             * minutes. Leave another hour for svg prep.
             */
            if (!doneForNow) {
                rolesTodoCount++
            }

            // Initialise array for each character.
            if (!characters[character]) {
                characters[character] = []
            }

            characters[character].push({
                songIndex,
                sceneIndex,
                todo,
                workedHours,
                description,
                doneForNow
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

            if (todo) {
                // Multiply for compound instances.
                const compoundValue = compound || 1

                drawings.songTasks[songIndex].actorsTodoCount++

                drawings.songTasks[songIndex].actorsWorkedHours += (
                    workedHours || 0
                ) * compoundValue

                // Assume 6.5 hours per drawing.
                drawings.songTasks[songIndex].actorsNeededHours += (
                    neededHours || 6.5
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

    drawings[ACTOR] = actors
    drawings.actorsTodoCount = actorsTodoCount
    drawings.actorsTotalCount = actorsTotalCount
}
