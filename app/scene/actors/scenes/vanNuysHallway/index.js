import {
    PRETEEN_BENNETT,
    MOTHER,
    CHRISTOPHER,
    TRISTAN
} from 'constants/scene/actors'
import { STARING } from 'constants/scene/actors/instances/christopher'
import { ARGUING } from 'constants/scene/actors/instances/mother'
import { SHEEPISH } from 'constants/scene/actors/instances/preteenBennett'
import { PRINCIPAL } from 'constants/scene/actors/instances/tristan'

const ARRANGEMENTS_ACTORS = {
    [PRETEEN_BENNETT]: {
        [SHEEPISH]: {
            yIndex: 4,
            arrangement: {
                xPosition: 8,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [CHRISTOPHER]: {
        [STARING]: {
            yIndex: 4,
            arrangement: {
                xPosition: 6,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MOTHER]: {
        [ARGUING]: {
            yIndex: 2,
            arrangement: {
                xPosition: 2.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [TRISTAN]: {
        [PRINCIPAL]: {
            yIndex: 2,
            arrangement: {
                xPosition: 3.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
