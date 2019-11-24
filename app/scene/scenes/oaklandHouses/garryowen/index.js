import {
    BENNETT,
    ANA,
    TRISTAN,
    NESTOR
} from 'constants/scene/actors'
import { CHUCKLING } from 'constants/scene/actors/instances/ana'
import { DROPPING_MEATS } from 'constants/scene/actors/instances/bennett'
import { INJURED } from 'constants/scene/actors/instances/nestor'
import { PUNCHING } from 'constants/scene/actors/instances/tristan'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [DROPPING_MEATS]: {
            yIndex: 5,
            xPosition: 2
        }
    },
    [ANA]: {
        [CHUCKLING]: {
            yIndex: 5,
            xPosition: 4
        }
    },
    [TRISTAN]: {
        [PUNCHING]: {
            yIndex: 5,
            xPosition: 7
        }
    },
    [NESTOR]: {
        [INJURED]: {
            yIndex: 5,
            xPosition: 9
        }
    }
}

export default ARRANGEMENTS_ACTORS
