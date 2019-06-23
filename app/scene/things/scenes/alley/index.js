import {
    CUTOUT,
    FIXTURE,
    PUPPET
} from 'constants/scene'
import { DUMPSTER } from '../../keys/cutouts'
import { BURGER_WRAPPER } from '../../keys/fixtures'
import { GHOST_ODIN_ALLEY } from '../../keys/puppets'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [DUMPSTER]: {
            yIndex: 2,
            arrangement: {
                xPosition: 9,
                xWidth: 4.5,
                zHeight: 3
            }
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
