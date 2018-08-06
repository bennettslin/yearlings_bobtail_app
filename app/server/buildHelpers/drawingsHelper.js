// Parse drawing data for build.

import keys from 'lodash.keys'

/**
 * FIXME: These are a mess.
 */

export const gatherDrawings = (
    album,
    songObject,
    songIndex
) => {
    const scenes = album.scenes[songIndex]

    songObject.tempSceneRawIndices = []

    scenes.forEach((scene) => {

        const isUnitIndex = !isNaN(scene.unitIndex)

        songObject.tempSceneRawIndices.push({
            isUnitIndex,

            // Scene either has a unit index or a verse index.
            rawIndex:
                isUnitIndex ?
                    scene.unitIndex :
                    scene.verseIndex
        })
    })
}

export const adminGatherDrawings = (album, songIndex) => {

    const
        drawingTypes = ['actors'],
        scenes = album.scenes[songIndex]

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
                        character = entityIsObject ? keys(characterEntity)[0] : key,
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

export const finalRegisterScenes = (songObject) => {

    // Allow easy access to scene metadata.
    songObject.songSceneConfigs = []

    const {
            lyricUnits,
            tempSceneRawIndices,
            songVerseConfigs,
            songSceneConfigs
        } = songObject

    // First, allow each scene to know its first verse index.
    tempSceneRawIndices.forEach((rawIndexObject) => {

        const {
            isUnitIndex,
            rawIndex
        } = rawIndexObject

        // Either scene is identified by a unit index...
        if (isUnitIndex) {
            const unitArray = lyricUnits[rawIndex],
                unitMapObject = unitArray[unitArray.length - 1],
                unitFirstVerseIndex = unitMapObject.tempFirstVerseIndex,
                unitFirstVerseTime = unitArray[0].time

            songSceneConfigs.push({
                firstVerseIndex: unitFirstVerseIndex,
                adminSceneStartTime: unitFirstVerseTime
            })

            delete unitMapObject.tempFirstVerseIndex

        // ... or else scene is identified by a verse index.
        } else {
            songSceneConfigs.push({
                firstVerseIndex: rawIndex,
                adminSceneStartTime:
                    songVerseConfigs[rawIndex].verseStartTime
            })
        }
    })

    // Then, allow each verse to know its scene index.
    songSceneConfigs.forEach((sceneConfig, sceneIndex) => {
        const { firstVerseIndex } = sceneConfig

        let currentVerseIndex = firstVerseIndex

        /**
         * Tell this verse config, and each subsequent one, this scene index,
         * up until the next scene index.
         */
        while (
            sceneIndex === songSceneConfigs.length - 1 ?

                /**
                 * If this is the last scene, iterate through the remaining
                 * verse indices.
                 */
                currentVerseIndex < songVerseConfigs.length :

                /**
                 * Otherwise, keep going until we've reached the first verse
                 * index of the next scene.
                 */
                currentVerseIndex <
                    songSceneConfigs[sceneIndex + 1].firstVerseIndex
        ) {

            songVerseConfigs[currentVerseIndex].sceneIndex = sceneIndex
            currentVerseIndex++
        }
    })
}

export const finalRegisterPresenceYIndices = (
    album,
    songIndex
) => {
    const scenes = album.scenes[songIndex]

    scenes.forEach(scene => {

        const {
            presences
        } = scene

        // Create the presenceYIndices object for each scene.
        scene.presenceYIndices = {}

        // Iterate through actors, cutouts, fixtures.
        keys(presences).forEach(presenceType => {

            // Iterate through presences.
            keys(presences[presenceType]).forEach(presenceName => {

                const presence = presences[presenceType][presenceName]

                /**
                 * Determine the yIndex of each presence.
                 */
                const { yIndex } = presence

                /**
                 * TODO: Eventually, all presences should have a yIndex. For
                 * now, we will check if they don't.
                 */
                if (!isNaN(yIndex)) {
                    /**
                     * If this is the first presence for that yIndex,
                     * initialise the yIndex array.
                     */
                    if (!scene.presenceYIndices[yIndex]) {
                        scene.presenceYIndices[yIndex] = []
                    }

                    /**
                     * Add presence to the scene's presenceYIndices object
                     * under that yIndex.
                     */
                    scene.presenceYIndices[yIndex].push({
                        type: presenceType,
                        name: presenceName,
                        instance: presence.instance,
                        arrangement: presence.arrangement
                    })
                }
            })
        })

        // Scene no longer needs the presences object.
        delete scene.presences
    })
}
