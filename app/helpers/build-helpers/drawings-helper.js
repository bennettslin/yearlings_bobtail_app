// Parse drawing data for build.
// FIXME: These are a mess, but they're only for admin purposes so whatever.

export const adminGatherDrawings = (album, songObject, songIndex) => {
    const drawingTypes = ['actors', 'backdrops', 'stageProps'],
        { scenes } = songObject

    album._drawings = album._drawings || {}

    songObject.tempSceneUnitIndices = []

    scenes.forEach((scene, sceneIndex) => {

        songObject.tempSceneUnitIndices.push(scene.unitIndex)

        drawingTypes.forEach(drawingType => {

            // Initialise object for actors, backdrops, stageProps.
            if (!album._drawings[drawingType]) {
                album._drawings[drawingType] = {}
            }

            for (const key in scene[drawingType]) {

                const keyObject = {
                    songIndex,
                    sceneIndex: sceneIndex + 1
                }

                // Initialise array for each actor, backdrop, stageProp.
                if (!album._drawings[drawingType][key]) {
                    album._drawings[drawingType][key] = []
                }

                if (drawingType === 'actors') {

                    /**
                     * If actor and character are the same, the entry will be a
                     * string. If not, the entry will be an object.
                     */
                    const characterEntity = scene[drawingType][key],
                        entityIsObject = typeof characterEntity === 'object' && !characterEntity.description,
                        character = entityIsObject ? Object.keys(characterEntity)[0] : key,
                        descriptionEntity = entityIsObject ? characterEntity[character] : characterEntity

                    // This is for props logged in epilogue.
                    if (characterEntity.subtasks) {
                        keyObject.subtasks = characterEntity.subtasks
                    }

                    keyObject.character = character
                    keyObject.descriptionEntity = descriptionEntity

                } else {
                    keyObject.descriptionEntity = scene[drawingType][key]
                }

                album._drawings[drawingType][key].push(keyObject)
            }
        })
    })
}

export const adminFinaliseDrawings = (album) => {

    // Turn actors object into array for easier frontend parsing.
    const { _drawings } = album,
            actors = []
    let actorsTotalCount = 0,
        actorsTodoCount = 0

    Object.keys(_drawings.actors).forEach(actor => {
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
                 * the latest task. Currently it's pants,
                 * assumed to take 30 minutes.
                 */
                if (roleObject.todo) {
                    if (descriptionEntity.workedHours < 1.75) {
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

                // Assume four hours per drawing.
                album.songs[songIndex].actorsNeededHours += (descriptionEntity.neededHours || 4)

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

    album.drawings = _drawings

    delete album._drawings
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
