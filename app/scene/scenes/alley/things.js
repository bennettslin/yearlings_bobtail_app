import {
    CUTOUT,
    DOOR,
    FIXTURE,
    PUPPET
} from '../../../constants/scene'
import { DUMPSTER } from '../../../constants/scene/things/cutouts'
import { LOADING_DOCK_DOOR } from '../../../constants/scene/things/doors'
import { BURGER_WRAPPER } from '../../../constants/scene/things/fixtures'
import { GHOST_ODIN_ALLEY } from '../../../constants/scene/things/puppets'
import { PEOPLE_ODIN_GHOST_SHARED } from '../../shared/people'

const ARRANGEMENTS_THINGS = {
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
        [BURGER_WRAPPER]: {
            yIndex: 4,
            arrangement: {
                xPosition: 6,
                xWidth: 0.5,
                zHeight: 0.5,
                zOffset: 1.5
            }
        }
    },
    [PUPPET]: {
        [GHOST_ODIN_ALLEY]: {
            yIndex: 5,
            xPosition: 5,
            scaleFactor: 0.2,
            sharedStyle: PEOPLE_ODIN_GHOST_SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
