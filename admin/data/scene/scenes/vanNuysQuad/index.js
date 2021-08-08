import {
    PRETEEN_BENNETT,
    SASHA,
    BRAD,
    ANDREW,
} from '../../../../../src/constants/scene/actors'
import { NOODLING } from '../../../../../src/constants/scene/actors/andrew'
import { SNACKING } from '../../../../../src/constants/scene/actors/brad'
import { WISTFUL } from '../../../../../src/constants/scene/actors/preteenBennett'
import { POPULAR_GIRL } from '../../../../../src/constants/scene/actors/sasha'

export default {
    [PRETEEN_BENNETT]: {
        [WISTFUL]: {
            yIndex: 2,
            xPosition: 3.6,
        },
    },
    [ANDREW]: {
        [NOODLING]: {
            yIndex: 5,
            xPosition: 6.4,
        },
    },
    [SASHA]: {
        [POPULAR_GIRL]: {
            yIndex: 5,
            xPosition: 7.85,
        },
    },
    [BRAD]: {
        [SNACKING]: {
            yIndex: 5,
            xPosition: 9.6,
        },
    },
}
