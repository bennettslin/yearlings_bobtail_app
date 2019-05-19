import {
    PRETEEN_BENNETT,
    BRAD_SASHA
} from '../../keys'
import { CHARMED_SCHOOLBUS } from '../../keys/instances/bradSasha'
import { PANICKED } from '../../keys/instances/preteenBennett'

const ARRANGEMENTS_ACTORS = {
    [PRETEEN_BENNETT]: {
        [PANICKED]: {
            yIndex: 5,
            arrangement: {
                xFloat: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [BRAD_SASHA]: {
        [CHARMED_SCHOOLBUS]: {
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
