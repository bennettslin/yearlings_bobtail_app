import {
    BENNETT_LIZ,
    CATHERINE,
    MARA,
    MIRIAM,
} from '../../../../../src/constants/scene/actors'
import { PAMPAS } from '../../../../../src/constants/scene/actors/bennettLiz'
import { GOPI } from '../../../../../src/constants/scene/actors/songs'

export default {
    [BENNETT_LIZ]: {
        [PAMPAS]: {
            yIndex: 5,
            xPosition: 3.2,
            zOffset: -0.1,
        },
    },
    [MARA]: {
        [GOPI]: {
            yIndex: 3,
            xPosition: 6.2,
            zOffset: -0.05,
        },
    },
    [MIRIAM]: {
        [GOPI]: {
            yIndex: 3,
            xPosition: 8.2,
            zOffset: -0.05,
        },
    },
    [CATHERINE]: {
        [GOPI]: {
            yIndex: 3,
            xPosition: 9.7,
            zOffset: -0.05,
        },
    },
}
