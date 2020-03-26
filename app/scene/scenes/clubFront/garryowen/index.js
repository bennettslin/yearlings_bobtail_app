import {
    BENNETT,
    ANA,
    MIRIAM_TRISTAN
} from '../../../../constants/scene/actors'
import { GREETING } from '../../../../constants/scene/actors/songs'
import { SMIRKING } from '../../../../constants/scene/actors/ana'
import { NOOGIE } from '../../../../constants/scene/actors/miriamTristan'

export default {
    [BENNETT]: {
        [GREETING]: {
            yIndex: 5,
            xPosition: 4.5
        }
    },
    [ANA]: {
        [SMIRKING]: {
            yIndex: 3,
            xPosition: 3.5
        }
    },
    [MIRIAM_TRISTAN]: {
        [NOOGIE]: {
            yIndex: 5,
            xPosition: 7.5
        }
    }
}
