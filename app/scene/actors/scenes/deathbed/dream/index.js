import {
    BENNETT_LIZ,
    AMY
} from '../../../keys'
import { DOCTOR } from '../../../keys/instances/amy'
import { FINAL_DREAM } from '../../../keys/instances/bennettLiz'

const ARRANGEMENTS_ACTORS = {
    [BENNETT_LIZ]: {
        [FINAL_DREAM]: {
            yIndex: 3,
            arrangement: {
                xPosition: 11,
                xWidth: 1,
                zHeight: 3
            }
        }
    },
    [AMY]: {
        [DOCTOR]: {
            yIndex: 5,
            arrangement: {
                xPosition: 3,
                xWidth: 1,
                zHeight: 5
            }
        }
    }
}

export default ARRANGEMENTS_ACTORS
