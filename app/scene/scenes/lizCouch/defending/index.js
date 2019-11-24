import {
    LIZ,
    KHARI
} from 'constants/scene/actors'
import { JUDGMENTAL } from 'constants/scene/actors/instances/khari'
import { DEFENDING } from 'constants/scene/actors/instances/liz'

const ARRANGEMENTS_ACTORS = {
    [LIZ]: {
        [DEFENDING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [KHARI]: {
        [JUDGMENTAL]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
