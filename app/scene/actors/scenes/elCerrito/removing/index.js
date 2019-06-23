import {
    BENNETT,
    MIRIAM
} from 'constants/scene/actors'
import { REMOVING_PANTS } from 'constants/scene/actors/instances/bennett'
import { PERFUMING } from 'constants/scene/actors/instances/miriam'

const ARRANGEMENTS_ACTORS = {
    [BENNETT]: {
        [REMOVING_PANTS]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 1,
                zHeight: 5
            }
        }
    },
    [MIRIAM]: {
        [PERFUMING]: {
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
