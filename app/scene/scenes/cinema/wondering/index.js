import {
    BENNETT,
    HOWIE,
    MIRIAM
} from 'constants/scene/actors'
import { WONDERING_BABY } from 'constants/scene/actors/instances/bennett'
import { USHER_WAITING } from 'constants/scene/actors/instances/howie'
import { INFANT_NURSING } from 'constants/scene/actors/instances/miriam'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [WONDERING_BABY]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [HOWIE]: {
        [USHER_WAITING]: {
            yIndex: 5,
            xPosition: 10
        }
    },
    [MIRIAM]: {
        [INFANT_NURSING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
