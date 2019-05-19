import {
    BENNETT_LIZ,
    CATHERINE,
    MARA,
    MIRIAM
} from '../../keys'
import { PAMPAS } from '../../keys/instances/bennettLiz'
import { GOPI } from '../../keys/instances/songs'

const ARRANGEMENTS_ACTORS = {
    [BENNETT_LIZ]: {
        [PAMPAS]: {
            yIndex: 5,
            arrangement: {
                xFloat: 4,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [CATHERINE]: {
        [GOPI]: {
            yIndex: 3,
            arrangement: {
                xFloat: 9,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MARA]: {
        [GOPI]: {
            yIndex: 3,
            arrangement: {
                xFloat: 7,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MIRIAM]: {
        [GOPI]: {
            yIndex: 3,
            arrangement: {
                xFloat: 8,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
