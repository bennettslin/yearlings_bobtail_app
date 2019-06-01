import {
    BENNETT,
    MIRIAM_TRISTAN,
    NESTOR
} from '../../keys'
import { SHOW_ANNOYED } from '../../keys/instances/bennett'
import { GREETING } from '../../keys/instances/songs'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [SHOW_ANNOYED]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MIRIAM_TRISTAN]: {
        [GREETING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 7,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [NESTOR]: {
        [GREETING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
