import {
    BENNETT,
    LIZ,
    KHARI,
    STEPHANIE,
} from '../../../../../app/constants/scene/actors'
import { BACKSTAGE } from '../../../../../app/constants/scene/actors/songs'
import { DOUBLE_ALBERT } from '../../../../../app/constants/scene/actors/khari'
import { FLAPPER } from '../../../../../app/constants/scene/actors/stephanie'

export default {
    [STEPHANIE]: {
        [FLAPPER]: {
            yIndex: 2,
            xPosition: 1.7,
        },
    },
    [BENNETT]: {
        [BACKSTAGE]: {
            yIndex: 4,
            xPosition: 4.2,
        },
    },
    [LIZ]: {
        [BACKSTAGE]: {
            yIndex: 4,
            xPosition: 6,
        },
    },
    [KHARI]: {
        [DOUBLE_ALBERT]: {
            yIndex: 4,
            xPosition: 8,
        },
    },
}
