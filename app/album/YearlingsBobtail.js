import { HYPHENATED_SONG_PATHS } from '../constants/paths'
import { getTwoDigitStringForNumber } from '../helpers/formatHelper'
import { getArrayOfLength } from '../helpers/generalHelper'

module.exports = {
    title: `Yearling's Bobtail`,
    bookStartingIndices: [1, 10],
    tips: {
        1: {
            description: `Didi Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        2: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        3: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        4: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        5: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        6: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        7: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        8: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        9: {
            description: `Grasshoppers Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        10: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        11: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        12: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        13: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        14: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        15: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        16: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        17: {
            description: `Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
        18: {
            description: `Dream Lorem ipsum dolor sit amet, ne eros libris vim. Ignota suscipit vim an, te mundi indoctum sit. Doctus epicuri sed an. Quodsi fabulas quo an, amet patrioque in est, nam eu aliquid deterruisset.`
        },
    },
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
