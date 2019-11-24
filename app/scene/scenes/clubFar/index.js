import {
    BENNETT,
    MIRIAM_TRISTAN,
    NESTOR
} from '../../../constants/scene/actors'
import { SHOW_ANNOYED } from '../../../constants/scene/actors/instances/bennett'
import { GREETING } from '../../../constants/scene/actors/instances/songs'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [SHOW_ANNOYED]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [MIRIAM_TRISTAN]: {
        [GREETING]: {
            yIndex: 5,
            xPosition: 7
        }
    },
    [NESTOR]: {
        [GREETING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
