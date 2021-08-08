import {
    BENNETT,
    ANA,
    MIRIAM_TRISTAN,
} from '../../../../../../src/constants/scene/actors'
import { GREETING } from '../../../../../../src/constants/scene/actors/songs'
import { SMIRKING } from '../../../../../../src/constants/scene/actors/ana'
import { NOOGIE } from '../../../../../../src/constants/scene/actors/miriamTristan'

export default {
    [ANA]: {
        [SMIRKING]: {
            yIndex: 3,
            xPosition: 3.5,
            zOffset: -0.04,
        },
    },
    [BENNETT]: {
        [GREETING]: {
            yIndex: 5,
            xPosition: 4.5,
            zOffset: -0.06,
        },
    },
    [MIRIAM_TRISTAN]: {
        [NOOGIE]: {
            yIndex: 5,
            xPosition: 7.5,
            zOffset: -0.08,
        },
    },
}
