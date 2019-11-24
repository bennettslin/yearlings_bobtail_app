import {
    BENNETT_STEPHANIE,
    AMY_NESTOR_TOMER
} from '../../../constants/scene/actors'
import { OFFICER } from '../../../constants/scene/actors/instances/amyNestorTomer'
import { HORSING } from '../../../constants/scene/actors/instances/bennettStephanie'

const ARRANGEMENTS_ACTORS = {
    [BENNETT_STEPHANIE]: {
        [HORSING]: {
            yIndex: 5,
            xPosition: 5
        }
    },
    [AMY_NESTOR_TOMER]: {
        [OFFICER]: {
            yIndex: 4,
            xPosition: 7.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
