// Parse drawing data for build.

import keys from 'lodash.keys'

/**
 * FIXME: These are a mess, but this is only for admin. Will be deleted at some
 * point.
 */

export const adminGatherDrawings = (album, songIndex) => {

    const
        drawingTypes = ['actors', 'cutouts', 'fixtures'],
        scenes = album.scenes[songIndex]

    album._drawings = album._drawings || {}

    scenes.forEach((scene, sceneIndex) => {

        if (scene.presences) {

            drawingTypes.forEach(drawingType => {

                // Initialise object for actors, cutouts, fixtures.
                if (!album._drawings[drawingType]) {
                    album._drawings[drawingType] = {}
                }

                const typePresences = scene.presences[drawingType]

                for (const name in typePresences) {

                    const presenceObject = {
                        songIndex,
                        sceneIndex
                    }

                    // Initialise array for each actor, cutout, fixture.
                    if (!album._drawings[drawingType][name]) {
                        album._drawings[drawingType][name] = []
                    }

                    if (drawingType === 'actors') {

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

                    } else {
                        presenceObject.descriptionEntity = typePresences[name]
                    }

                    album._drawings[drawingType][name].push(presenceObject)
                }
            })
        }
    })
}

export const adminFinaliseDrawings = (album) => {
    _adminFinaliseActors(album)

    album.drawings = album._drawings
    delete album._drawings
}

export const _adminFinaliseActors = (album) => {

    // Turn actors object into array for easier frontend parsing.
    const { _drawings } = album,
            actors = []
    let actorsTotalCount = 0,
        actorsTodoCount = 0

    keys(_drawings.actors).forEach(actor => {
        const roles = _drawings.actors[actor],
            rolesTotalCount = roles.length,
            characters = {}

        let rolesTodoCount = 0

        roles.forEach(role => {

            const { songIndex,
                    sceneIndex,
                    descriptionEntity,
                    subtasks } = role,
                roleObject = { songIndex,
                               sceneIndex,
                               workedHours: descriptionEntity.workedHours,
                               subtasks }

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
                        roleObject.doneForNow = true;
                    }
                }
            }

            // Initialise array for each character.
            if (!characters[role.character]) {
                characters[role.character] = []
            }

            characters[role.character].push(roleObject)

            // Let song know its individual todos.
            if (isNaN(album.songs[songIndex].actorsTodoCount)) {
                album.songs[songIndex].actorsTodoCount = 0
                album.songs[songIndex].actorsTotalCount = 0
            }
            if (isNaN(album.songs[songIndex].actorsWorkedHours)) {
                album.songs[songIndex].actorsWorkedHours = 0
            }
            if (isNaN(album.songs[songIndex].actorsNeededHours)) {
                album.songs[songIndex].actorsNeededHours = 0
            }

            if (roleObject.todo) {
                const { subtasks } = roleObject

                if (subtasks && subtasks.length) {
                    subtasks.forEach(subtask => {
                        album.songs[songIndex].actorsWorkedHours += subtask.workedHours

                        album.songs[songIndex].actorsNeededHours += subtask.neededHours
                    })
                }

                album.songs[songIndex].actorsTodoCount++
                album.songs[songIndex].actorsWorkedHours += (descriptionEntity.workedHours || 0)

                // Assume 4.5 hours per drawing.
                album.songs[songIndex].actorsNeededHours += (descriptionEntity.neededHours || 4.5)

            }
            album.songs[songIndex].actorsTotalCount++
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

    _drawings.actors = actors
    _drawings.actorsTodoCount = actorsTodoCount
    _drawings.actorsTotalCount = actorsTotalCount
}

export const adminRegisterDrawingTasks = (song) => {

    const { actorsWorkedHours,
            actorsNeededHours } = song

    if (!song.tasks) {
        song.tasks = []
    }

    if (actorsNeededHours) {
        song.tasks.push({
            taskName: 'Drawings of actors',
            workedHours: actorsWorkedHours,
            neededHours: actorsNeededHours
        })
    }

    delete song.actorsTodoCount
    delete song.actorsTotalCount
    delete song.actorsWorkedHours
    delete song.actorsNeededHours
}
