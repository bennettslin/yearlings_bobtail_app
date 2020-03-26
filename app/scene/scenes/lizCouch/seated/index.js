import { LIZ } from '../../../../constants/scene/actors'
import {
    PETTING_SEATED,
    PETTING_SEATED_PRESENT
} from '../../../../constants/scene/actors/liz'

const PETTING_SEATED_CONFIG = {
    yIndex: 4,
    xPosition: 3,
    zOffset: -1
}

export default {
    [LIZ]: {
        [PETTING_SEATED]: PETTING_SEATED_CONFIG,
        [PETTING_SEATED_PRESENT]: PETTING_SEATED_CONFIG
    }
}
