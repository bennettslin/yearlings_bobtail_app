// Parse drawing data for build.
// FIXME: These are a mess, but they're only for admin purposes so whatever.

export const adminGatherDrawings = (album, scenes, songIndex) => {
    const drawingTypes = ['actors', 'backdrops', 'stageProps']

    album._drawings = album._drawings || {}

    scenes.forEach((scene, sceneIndex) => {
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
                        descriptionEntity = entityIsObject ? scene[drawingType][key][character] : characterEntity

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
        // backdrops = []
    let actorsTotalCount = 0,
        actorsTodoCount = 0
    //     backdropsTotalCount = 0,
    //     backdropsTodoCount = 0
    // //
    // Object.keys(_drawings.backdrops).forEach(backdrop => {
    //
    // })

    Object.keys(_drawings.actors).forEach(actor => {
        const roles = _drawings.actors[actor],
            rolesTotalCount = roles.length,
            characters = {}

        let rolesTodoCount = 0

        roles.forEach(role => {

            const { songIndex,
                    sceneIndex,
                    descriptionEntity } = role,
                roleObject = { songIndex,
                               sceneIndex }

            // This will eventually always be an object.
            if (typeof descriptionEntity === 'object') {
                roleObject.todo = descriptionEntity.todo
                roleObject.description = descriptionEntity.description

                if (roleObject.todo) {
                    rolesTodoCount++
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
            if (roleObject.todo) {
                album.songs[songIndex].actorsTodoCount++
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

    // Assume two hours per rough drawing.
    const hoursPerRoughDrawing = 2,
        drawingActorsHoursWorked = (song.actorsTotalCount - song.actorsTodoCount) * hoursPerRoughDrawing,
        drawingActorsHoursTotal = song.actorsTotalCount * hoursPerRoughDrawing

    if (!song.tasks) {
        song.tasks = []
    }

    delete song.actorsTodoCount
    delete song.actorsTotalCount

    song.tasks.push({
        taskName: 'rough drawings of actors',
        workedHours: drawingActorsHoursWorked,
        neededHours: drawingActorsHoursTotal
    })
}
