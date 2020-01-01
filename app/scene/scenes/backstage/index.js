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
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [LIZ]: {
        [BACKSTAGE]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [KHARI]: {
        [DOUBLE_ALBERT]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [STEPHANIE]: {
        [FLAPPER]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}
