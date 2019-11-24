import {
    BENNETT,
    AMY,
    WADE
} from 'constants/scene/actors'
import { SMOKER } from 'constants/scene/actors/instances/amy'
import { CATHOLIC_IDEA } from 'constants/scene/actors/instances/bennett'
import { CATHOLIC_GUY } from 'constants/scene/actors/instances/wade'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [CATHOLIC_IDEA]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [AMY]: {
        [SMOKER]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [WADE]: {
        [CATHOLIC_GUY]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
