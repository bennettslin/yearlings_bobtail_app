import {
    BENNETT,
    CATHERINE
} from 'constants/scene/actors'
import { PIOUS } from 'constants/scene/actors/instances/bennett'
import { PUZZLED } from 'constants/scene/actors/instances/catherine'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [PIOUS]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [CATHERINE]: {
        [PUZZLED]: {
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
