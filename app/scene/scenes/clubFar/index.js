import {
    BENNETT,
    MIRIAM_TRISTAN,
    NESTOR
} from '../../../constants/scene/actors'
import { SHOW_ANNOYED } from '../../../constants/scene/actors/bennett'
import { GREETING } from '../../../constants/scene/actors/songs'

export default {
    [BENNETT]: {
        [SHOW_ANNOYED]: {
            yIndex: 5,
            xPosition: 2
        }
    },
    [MIRIAM_TRISTAN]: {
        [GREETING]: {
            yIndex: 5,
            xPosition: 6.5
        }
    },
    [NESTOR]: {
        [GREETING]: {
            yIndex: 5,
            xPosition: 9
        }
    }
}
