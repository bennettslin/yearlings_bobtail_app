import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from 'constants/scene/actors'
import { CONCERNED } from 'constants/scene/actors/instances/anita'
import { SNICKERING } from 'constants/scene/actors/instances/esther'
import { FLUSTERED } from 'constants/scene/actors/instances/youngBennett'

const ARRANGEMENTS_ACTORS = {
    [YOUNG_BENNETT]: {
        [FLUSTERED]: {
            yIndex: 4,
            arrangement: {
                xPosition: 9.5,
                xWidth: 1.5,
                zHeight: 2.5,
                zOffset: -2
            }
        }
    },
    [ANITA]: {
        [CONCERNED]: {
            yIndex: 3,
            arrangement: {
                xPosition: 2,
                xWidth: 1,
                zHeight: 3.75
            }
        }
    },
    [ESTHER]: {
        [SNICKERING]: {
            yIndex: 4,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 3.83
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
