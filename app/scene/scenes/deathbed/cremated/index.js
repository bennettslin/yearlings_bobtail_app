import {
    BENNETT,
    MIRIAM
} from 'constants/scene/actors'
import { INFIRM } from 'constants/scene/actors/bennett'
import { TENNIS } from 'constants/scene/actors/miriam'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [INFIRM]: {
            yIndex: 3,
            xPosition: 2.5
        }
    },
    [MIRIAM]: {
        [TENNIS]: {
            yIndex: 3,
            xPosition: 10
        }
    }
}

export default ARRANGEMENTS_ACTORS
