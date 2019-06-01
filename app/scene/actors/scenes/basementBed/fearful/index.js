import {
    ESTHER_MOTHER,
    FATHER,
    MIRIAM_BENNETT
} from '../../../keys'
import { ASLEEP } from '../../../keys/instances/songs'
import { ASLEEP_FEARFUL } from '../../../keys/instances/miriamBennett'
import { HURT_CONSOLING } from '../../../keys/instances/estherMother'
import { ACCUSATORY } from '../../../keys/instances/father'

const ARRANGEMENTS_ACTORS = {
    [ESTHER_MOTHER]: {
        [HURT_CONSOLING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [FATHER]: {
        [ACCUSATORY]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MIRIAM_BENNETT]: {
        [ASLEEP]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        },
        [ASLEEP_FEARFUL]: {
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
