import { parseAlbumData } from './buildHelpers/albumHelper'

import { HYPHENATED_SONG_PATHS } from 'constants/paths'
import { getTwoDigitStringForNumber } from 'helpers/format'
import { getArrayOfLength } from 'helpers/general'

const rawAlbum = {
        title: `Yearling's Bobtail`,
        bookStartingIndices: [1, 10],
        tips: require('album/tips/tips'),
        mp3s: getArrayOfLength(18, 1).map(index => (
            require(`assets/mp3s/${
                getTwoDigitStringForNumber(index)
            }_${
                HYPHENATED_SONG_PATHS[index]
            }.mp3`)
        )),
        scores: getArrayOfLength(18, 1).map(index => (
            require(`assets/scores/${
                getTwoDigitStringForNumber(index)
            }_${
                HYPHENATED_SONG_PATHS[index]
            }.pdf`)
        )),
        scenes: getArrayOfLength(20).map(index => (
            require(`album/scenes/${
                getTwoDigitStringForNumber(index)
            }_${
                HYPHENATED_SONG_PATHS[index]
            }`)
        )),
        songs: getArrayOfLength(20).map(index => (
            require(`album/songs/${
                getTwoDigitStringForNumber(index)
            }_${
                HYPHENATED_SONG_PATHS[index]
            }`)
        )),
        remainingTasks:
            require('album/tasks/remainingTasks')

            // Presences.
                .concat(require('album/tasks/bubbleDrawingTasks')) // 12 days.
                .concat(require('album/tasks/cutoutDrawingTasks')) // 9 days.
                .concat(require('album/tasks/doorDrawingTasks')) // 12 days.
                .concat(require('album/tasks/furnitureDrawingTasks')) // 8 days.

            // Additional work on presences.
                .concat(require('album/tasks/fabricDrawingTasks')) // 2 days.

                .concat(require('album/tasks/illustratorDrawingTasks')) // 27 days.
                .concat(require('album/tasks/sceneTasks')) // 12 days.
                .concat(require('album/tasks/svgDrawingTasks')), // 14 days.

        completedTasks:
            require('album/tasks/completed/completedTasks')
                .concat(require('album/tasks/completed/completedDrawingTasks'))
                .concat(require('album/tasks/completed/completedSceneTasks'))
    },

    // Restructure raw data to be usable by app.
    album = parseAlbumData(rawAlbum)

export default album
