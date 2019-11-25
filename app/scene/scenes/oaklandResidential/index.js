import {
    BENNETT,
    STEPHANIE
} from '../../../constants/scene/actors'
import { CORD_REAR } from '../../../constants/scene/actors/bennett'
import { BENNETT_DEFIANT } from '../../../constants/scene/actors/stephanie'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [CORD_REAR]: {
            yIndex: 5,
            xPosition: 5.5
        }
    },
    [STEPHANIE]: {
        [BENNETT_DEFIANT]: {
            yIndex: 5,
            xPosition: 5.5
        }
    }
}

export default ARRANGEMENTS_ACTORS
