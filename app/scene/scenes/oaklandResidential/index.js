import {
    BENNETT,
    STEPHANIE
} from '../../../constants/scene/actors'
import { CORD_REAR } from '../../../constants/scene/actors/instances/bennett'
import { BENNETT_DEFIANT } from '../../../constants/scene/actors/instances/stephanie'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [CORD_REAR]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [STEPHANIE]: {
        [BENNETT_DEFIANT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
