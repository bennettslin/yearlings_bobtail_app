import {
    BENNETT,
    MIRIAM_TRISTAN,
    NESTOR,
} from '../../../../../app/constants/scene/actors'
import { SHOW_ANNOYED } from '../../../../../app/constants/scene/actors/bennett'
import { GREETING } from '../../../../../app/constants/scene/actors/songs'

export default {
    [BENNETT]: {
        [SHOW_ANNOYED]: {
            yIndex: 5,
            xPosition: 2,
        },
    },
    [MIRIAM_TRISTAN]: {
        [GREETING]: {
            yIndex: 5,
            xPosition: 7,
        },
    },
    [NESTOR]: {
        [GREETING]: {
            yIndex: 5,
            xPosition: 8.9,
        },
    },
}
