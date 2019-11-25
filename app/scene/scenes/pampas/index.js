import {
    BENNETT_LIZ,
    CATHERINE,
    MARA,
    MIRIAM
} from '../../../constants/scene/actors'
import { PAMPAS } from '../../../constants/scene/actors/bennettLiz'
import { GOPI } from '../../../constants/scene/actors/songs'

const ARRANGEMENTS_ACTORS = {
    [BENNETT_LIZ]: {
        [PAMPAS]: {
            yIndex: 5,
            xPosition: 4
        }
    },
    [CATHERINE]: {
        [GOPI]: {
            yIndex: 3,
            xPosition: 9
        }
    },
    [MARA]: {
        [GOPI]: {
            yIndex: 3,
            xPosition: 7
        }
    },
    [MIRIAM]: {
        [GOPI]: {
            yIndex: 3,
            xPosition: 8
        }
    }
}

export default ARRANGEMENTS_ACTORS
