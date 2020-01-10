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
    },
    [STEPHANIE]: {
        [FLAPPER]: {
            yIndex: 5,
            xPosition: 3
        }
    }
}
