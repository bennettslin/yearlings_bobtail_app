import {
    BENNETT,
    HOWIE,
    MIRIAM
} from 'constants/scene/actors'
import { WONDERING_BABY } from 'constants/scene/actors/bennett'
import { USHER_WAITING } from 'constants/scene/actors/howie'
import { INFANT_NURSING } from 'constants/scene/actors/miriam'

export default {
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
