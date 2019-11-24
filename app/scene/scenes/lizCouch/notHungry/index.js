import {
    LIZ,
    KHARI
} from 'constants/scene/actors'
import { CONCERNED } from 'constants/scene/actors/instances/khari'
import { NOT_HUNGRY } from 'constants/scene/actors/instances/liz'

const ARRANGEMENTS_ACTORS = {
    [LIZ]: {
        [NOT_HUNGRY]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [KHARI]: {
        [CONCERNED]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
