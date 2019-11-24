import {
    BENNETT,
    AMY,
    STEPHANIE,
    WADE
} from 'constants/scene/actors'
import { PROTESTER } from 'constants/scene/actors/instances/songs'
import { DEMONSTRATION } from 'constants/scene/actors/instances/bennett'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [DEMONSTRATION]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [AMY]: {
        [PROTESTER]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [STEPHANIE]: {
        [PROTESTER]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [WADE]: {
        [PROTESTER]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
