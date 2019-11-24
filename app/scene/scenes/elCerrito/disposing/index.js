import {
    BENNETT,
    MIRIAM
} from 'constants/scene/actors'
import { DISPOSING_CONDOM } from 'constants/scene/actors/instances/bennett'
import { REVERSING } from 'constants/scene/actors/instances/miriam'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [DISPOSING_CONDOM]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [MIRIAM]: {
        [REVERSING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
