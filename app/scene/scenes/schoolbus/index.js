import {
    PRETEEN_BENNETT,
    BRAD_SASHA
} from '../../../constants/scene/actors'
import { CHARMED_SCHOOLBUS } from '../../../constants/scene/actors/instances/bradSasha'
import { PANICKED } from '../../../constants/scene/actors/instances/preteenBennett'

const ARRANGEMENTS_ACTORS = {
    [PRETEEN_BENNETT]: {
        [PANICKED]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [BRAD_SASHA]: {
        [CHARMED_SCHOOLBUS]: {
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
