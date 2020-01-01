import {
    CUTOUT,
    DOOR,
    FIXTURE,
    PUPPET
} from '../../../constants/scene/things'
import { DUMPSTER } from '../../../constants/scene/things/cutouts'
import { LOADING_DOCK_DOOR } from '../../../constants/scene/things/doors'
import { BALLED_FOIL__ALLEY } from '../../../constants/scene/things/fixtures'
import { GHOST_ODIN_ALLEY } from '../../../constants/scene/things/puppets'

export default {
    [CUTOUT]: {
        [DUMPSTER]: {
            yIndex: 2,
            xPosition: 9,
            scaleFactor: 0.3
        }
    },
    [DOOR]: {
        [LOADING_DOCK_DOOR]: {
            yIndex: 2,
            xPosition: 3
        }
    },
    [FIXTURE]: {
        [BALLED_FOIL__ALLEY]: {
            yIndex: 4,
            xPosition: 5.5,
            zOffset: 2.5
        }
    },
    [PUPPET]: {
        [GHOST_ODIN_ALLEY]: {
            yIndex: 5,
            xPosition: 8,
            scaleFactor: 0.2
        }
    }
}
