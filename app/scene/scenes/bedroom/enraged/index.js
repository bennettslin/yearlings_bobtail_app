import {
    PRETEEN_BENNETT,
    FATHER,
    CHRISTOPHER
} from 'constants/scene/actors'
import { SOBBING } from 'constants/scene/actors/christopher'
import { ROARING } from 'constants/scene/actors/father'
import { ENRAGED } from 'constants/scene/actors/preteenBennett'

const ARRANGEMENTS_ACTORS = {
    [PRETEEN_BENNETT]: {
        [ENRAGED]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [FATHER]: {
        [ROARING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [CHRISTOPHER]: {
        [SOBBING]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
