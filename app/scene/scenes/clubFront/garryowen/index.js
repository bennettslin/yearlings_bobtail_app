import {
    BENNETT,
    ANA,
    MIRIAM_TRISTAN
} from 'constants/scene/actors'
import { GREETING } from 'constants/scene/actors/instances/songs'
import { SMIRKING } from 'constants/scene/actors/instances/ana'
import { NOOGIE } from 'constants/scene/actors/instances/miriamTristan'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [GREETING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [ANA]: {
        [SMIRKING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [MIRIAM_TRISTAN]: {
        [NOOGIE]: {
            yIndex: 5,
            xPosition: 7
        }
    }
}

export default ARRANGEMENTS_ACTORS
