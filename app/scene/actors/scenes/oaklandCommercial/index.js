import {
    BENNETT_STEPHANIE,
    AMY_NESTOR_TOMER
} from '../../keys'
import { OFFICER } from '../../keys/instances/amyNestorTomer'
import { HORSING } from '../../keys/instances/bennettStephanie'

const ARRANGEMENTS_ACTORS = {
    [BENNETT_STEPHANIE]: {
        [HORSING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [AMY_NESTOR_TOMER]: {
        [OFFICER]: {
            yIndex: 4,
            arrangement: {
                xPosition: 7.5,
                xWidth: 2,
                zHeight: 6
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
