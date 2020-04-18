import {
    BENNETT,
    LIZ,
    KHARI,
    STEPHANIE
} from '../../../constants/scene/actors'
import { BACKSTAGE } from '../../../constants/scene/actors/songs'
import { DOUBLE_ALBERT } from '../../../constants/scene/actors/khari'
import { FLAPPER } from '../../../constants/scene/actors/stephanie'

export default {
    [STEPHANIE]: {
        [FLAPPER]: {
            yIndex: 2,
            xPosition: 1.7
        }
    },
    [BENNETT]: {
        [BACKSTAGE]: {
            yIndex: 4,
            xPosition: 4.5
        }
    },
    [LIZ]: {
        [BACKSTAGE]: {
            yIndex: 4,
            xPosition: 6
        }
    },
    [KHARI]: {
        [DOUBLE_ALBERT]: {
            yIndex: 4,
            xPosition: 8
        }
    }
}
