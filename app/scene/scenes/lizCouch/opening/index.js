import {
    LIZ,
    KHARI
} from 'constants/scene/actors'
import { ARRIVED } from 'constants/scene/actors/instances/khari'
import { OPENING_DOOR } from 'constants/scene/actors/instances/liz'

const ARRANGEMENTS_ACTORS = {
    [LIZ]: {
        [OPENING_DOOR]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [KHARI]: {
        [ARRIVED]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
