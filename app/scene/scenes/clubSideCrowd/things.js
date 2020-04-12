import {
    CUTOUT,
    FIXTURE,
    PANEL
} from '../../../constants/scene/things'
import { MONITOR_SIDE__CROWD } from '../../../constants/scene/things/cutouts'
import { STAGE_MIC__CROWD } from '../../../constants/scene/things/fixtures'
import { CROWD_SIDE } from '../../../constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [MONITOR_SIDE__CROWD]: {
            yIndex: 4,
            xPosition: 3,
            scaleFactor: 0.3
        }
    },
    [FIXTURE]: {
        [STAGE_MIC__CROWD]: {
            yIndex: 3,
            xPosition: 2.65
        }
    },
    [PANEL]: {
        [CROWD_SIDE]: {
            yIndex: 2,
            xPosition: 7,
            scaleFactor: 0.325
        }
    }
}
