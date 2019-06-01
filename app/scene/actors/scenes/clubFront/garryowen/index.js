import {
    BENNETT,
    ANA,
    MIRIAM_TRISTAN
} from '../../../keys'
import { GREETING } from '../../../keys/instances/songs'
import { SMIRKING } from '../../../keys/instances/ana'
import { NOOGIE } from '../../../keys/instances/miriamTristan'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [GREETING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [ANA]: {
        [SMIRKING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MIRIAM_TRISTAN]: {
        [NOOGIE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 7,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
