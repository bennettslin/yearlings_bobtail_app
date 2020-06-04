import {
    BENNETT_LIZ,
    CATHERINE,
    MARA,
    MIRIAM
} from '../../../../../app/constants/scene/actors'
import { PAMPAS } from '../../../../../app/constants/scene/actors/bennettLiz'
import { GOPI } from '../../../../../app/constants/scene/actors/songs'

export default {
    [BENNETT_LIZ]: {
        [PAMPAS]: {
            yIndex: 5,
            xPosition: 3.5
        }
    },
    [MARA]: {
        [GOPI]: {
            yIndex: 3,
            xPosition: 6.5,
            zOffset: -0.05
        }
    },
    [MIRIAM]: {
        [GOPI]: {
            yIndex: 3,
            xPosition: 8.5,
            zOffset: -0.05
        }
    },
    [CATHERINE]: {
        [GOPI]: {
            yIndex: 3,
            xPosition: 10,
            zOffset: -0.05
        }
    }
}
