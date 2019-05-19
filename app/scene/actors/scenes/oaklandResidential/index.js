import {
    BENNETT,
    STEPHANIE
} from '../../keys'
import { CORD_REAR } from '../../keys/instances/bennett'
import { BENNETT_DEFIANT } from '../../keys/instances/stephanie'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [CORD_REAR]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [STEPHANIE]: {
        [BENNETT_DEFIANT]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
