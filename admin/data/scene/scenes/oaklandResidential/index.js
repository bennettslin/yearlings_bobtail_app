import {
    BENNETT,
    STEPHANIE
} from '../../../../../app/constants/scene/actors'
import { CORD_REAR } from '../../../../../app/constants/scene/actors/bennett'
import { BENNETT_DEFIANT } from '../../../../../app/constants/scene/actors/stephanie'

export default {
    [BENNETT]: {
        [CORD_REAR]: {
            yIndex: 5,
            xPosition: 4.5,
            zOffset: -0.02
        }
    },
    [STEPHANIE]: {
        [BENNETT_DEFIANT]: {
            yIndex: 3,
            xPosition: 7.7,
            zOffset: -0.07
        }
    }
}
