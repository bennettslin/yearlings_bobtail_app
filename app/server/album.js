import { parseAlbumData } from './buildHelpers/albumHelper'

import { HYPHENATED_SONG_PATHS } from '../constants/paths'
import { getTwoDigitStringForNumber } from '../helpers/formatHelper'
import { getArrayOfLength } from '../helpers/generalHelper'

const rawAlbum = {
        title: `Yearling's Bobtail`,
        bookStartingIndices: [1, 10],
        tips: require('../album/tips/tips'),
        mp3s: getArrayOfLength(18, 1).map(index => (
            require(`../assets/mp3s/${
                getTwoDigitStringForNumber(index)
            }_${
                HYPHENATED_SONG_PATHS[index]
            }.mp3`)
        )),
        scores: getArrayOfLength(18, 1).map(index => (
            require(`../assets/scores/${
                getTwoDigitStringForNumber(index)
            }_${
                HYPHENATED_SONG_PATHS[index]
            }.pdf`)
        )),
        scenes: getArrayOfLength(20).map(index => (
            require(`../album/scenes/${
                getTwoDigitStringForNumber(index)
            }_${
                HYPHENATED_SONG_PATHS[index]
            }`)
        )),
        songs: getArrayOfLength(20).map(index => (
            require(`../album/songs/${
                getTwoDigitStringForNumber(index)
            }_${
                HYPHENATED_SONG_PATHS[index]
            }`)
        )),
        remainingTasks: require('../album/tasks/remainingTasks')
            .concat(require('../album/tasks/detailedDrawingTasks'))
            .concat(require('../album/tasks/illustratorDrawingTasks'))
            .concat(require('../album/tasks/remainingDrawingTasks'))
            .concat(require('../album/tasks/realisticDrawingTasks'))
            .concat(require('../album/tasks/sceneTasks'))
            .concat(require('../album/tasks/svgDrawingTasks')),

        completedTasks: require('../album/tasks/completedTasks')
            .concat(require('../album/tasks/completedDrawingTasks'))
    },

    // Restructure raw data to be usable by app.
    album = parseAlbumData(rawAlbum)

export default album
