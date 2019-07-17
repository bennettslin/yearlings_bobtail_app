import {
    CUTOUT,
    FIXTURE,
    PUPPET
} from 'constants/scene'
import { DUMPSTER } from 'constants/scene/things/cutouts'
import { BURGER_WRAPPER } from 'constants/scene/things/fixtures'
import { GHOST_ODIN_ALLEY } from 'constants/scene/things/puppets'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [DUMPSTER]: {
            yIndex: 2,
            xPosition: 9,
            scaleFactor: 0.3
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
            yIndex: 4,
            arrangement: {
                xPosition: 7.5,
                xWidth: 1,
                zHeight: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
