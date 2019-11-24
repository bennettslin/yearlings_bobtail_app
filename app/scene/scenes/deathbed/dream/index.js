import {
    BENNETT_LIZ,
    AMY
} from 'constants/scene/actors'
import { DOCTOR } from 'constants/scene/actors/instances/amy'
import { FINAL_DREAM } from 'constants/scene/actors/instances/bennettLiz'

const ARRANGEMENTS_ACTORS = {
    [BENNETT_LIZ]: {
        [FINAL_DREAM]: {
            yIndex: 3,
            xPosition: 11
        }
    },
    [AMY]: {
        [DOCTOR]: {
            yIndex: 5,
            xPosition: 3
        }
    }
}

export default ARRANGEMENTS_ACTORS
