import {
    BENNETT,
    LIZ,
    KHARI,
    STEPHANIE,
} from '../../../../../src/constants/scene/actors'
import { BACKSTAGE } from '../../../../../src/constants/scene/actors/songs'
import { DOUBLE_ALBERT } from '../../../../../src/constants/scene/actors/khari'
import { FLAPPER } from '../../../../../src/constants/scene/actors/stephanie'

export default {
    [STEPHANIE]: {
        [FLAPPER]: {
            yIndex: 3,
            xPosition: 2.1,
        },
    },
    [BENNETT]: {
        [BACKSTAGE]: {
            yIndex: 4,
            xPosition: 4.4,
        },
    },
    [LIZ]: {
        [BACKSTAGE]: {
            yIndex: 4,
            xPosition: 6.2,
        },
    },
    [KHARI]: {
        [DOUBLE_ALBERT]: {
            yIndex: 4,
            xPosition: 8.2,
        },
    },
}
