import {
    BENNETT,
    HOWIE
} from '../../../constants/scene/actors'
import { MERRILY_DERANGED } from '../../../constants/scene/actors/instances/bennett'
import { USHER_LOOKING } from '../../../constants/scene/actors/instances/howie'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [MERRILY_DERANGED]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [HOWIE]: {
        [USHER_LOOKING]: {
            yIndex: 5,
            arrangement: {
                xPosition: 1,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
