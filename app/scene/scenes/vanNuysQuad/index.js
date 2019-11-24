import {
    PRETEEN_BENNETT,
    SASHA,
    BRAD,
    ANDREW
} from '../../../constants/scene/actors'
import { NOODLING } from '../../../constants/scene/actors/instances/andrew'
import { SNACKING } from '../../../constants/scene/actors/instances/brad'
import { WISTFUL } from '../../../constants/scene/actors/instances/preteenBennett'
import { POPULAR_GIRL } from '../../../constants/scene/actors/instances/sasha'

const ARRANGEMENTS_ACTORS = {
    [PRETEEN_BENNETT]: {
        [WISTFUL]: {
            yIndex: 2,
            xPosition: 3.5
        }
    },
    [SASHA]: {
        [POPULAR_GIRL]: {
            yIndex: 5,
            xPosition: 7.5
        }
    },
    [BRAD]: {
        [SNACKING]: {
            yIndex: 5,
            xPosition: 9
        }
    },
    [ANDREW]: {
        [NOODLING]: {
            yIndex: 5,
            xPosition: 6
        }
    }
}

export default ARRANGEMENTS_ACTORS
