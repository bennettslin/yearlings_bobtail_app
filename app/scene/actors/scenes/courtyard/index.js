import {
    BENNETT,
    CATHERINE
} from 'constants/scene/actors'
import { BREAKUP_DEJECTED } from 'constants/scene/actors/instances/bennett'
import { WEEPING } from 'constants/scene/actors/instances/catherine'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [BREAKUP_DEJECTED]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [CATHERINE]: {
        [WEEPING]: {
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
