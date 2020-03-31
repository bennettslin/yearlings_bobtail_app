import {
    BENNETT_LIZ,
    CATHERINE,
    MARA,
    MIRIAM
} from '../../../constants/scene/actors'
import { PAMPAS } from '../../../constants/scene/actors/bennettLiz'
import { GOPI } from '../../../constants/scene/actors/songs'

export default {
    [BENNETT_LIZ]: {
        [PAMPAS]: {
            yIndex: 5,
            xPosition: 3.5
        }
    },
    [MARA]: {
        [GOPI]: {
            yIndex: 2,
            xPosition: 6.5
        }
    },
    [MIRIAM]: {
        [GOPI]: {
            yIndex: 2,
            xPosition: 8.5
        }
    },
    [CATHERINE]: {
        [GOPI]: {
            yIndex: 2,
            xPosition: 10
        }
    }
}
