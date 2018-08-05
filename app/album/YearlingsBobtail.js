import { HYPHENATED_SONG_PATHS } from '../constants/paths'
import { getTwoDigitStringForNumber } from '../helpers/formatHelper'
import { getArrayOfLength } from '../helpers/generalHelper'

module.exports = {
    title: `Yearling's Bobtail`,
    bookStartingIndices: [1, 10],
    tips: require('./tips/tips'),
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
    songs: getArrayOfLength(20).map(index => (
        require(`./songs/${
            getTwoDigitStringForNumber(index)
        }_${
            HYPHENATED_SONG_PATHS[index]
        }`)
    )),
    remainingTasks: require('./tasks/remainingTasks')
        .concat(require('./tasks/detailedDrawingTasks'))
        .concat(require('./tasks/illustratorDrawingTasks'))
        .concat(require('./tasks/remainingDrawingTasks'))
        .concat(require('./tasks/realisticDrawingTasks'))
        .concat(require('./tasks/sceneTasks'))
        .concat(require('./tasks/svgDrawingTasks')),

    completedTasks: require('./tasks/completedTasks')
        .concat(require('./tasks/completedDrawingTasks'))
}
