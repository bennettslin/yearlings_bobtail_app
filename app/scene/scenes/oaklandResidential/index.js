import {
    BENNETT,
    STEPHANIE
} from '../../../constants/scene/actors'
import { CORD_REAR } from '../../../constants/scene/actors/bennett'
import { BENNETT_DEFIANT } from '../../../constants/scene/actors/stephanie'

export default {
    [BENNETT]: {
        [CORD_REAR]: {
            yIndex: 5,
            xPosition: 4.5
        }
    },
    [STEPHANIE]: {
        [BENNETT_DEFIANT]: {
            yIndex: 3,
            xPosition: 7
        }
    }
}
