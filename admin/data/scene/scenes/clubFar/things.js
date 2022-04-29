import {
    CUTOUT,
    PANEL,
    PUPPET,
} from '../../../../../src/constants/scene/things'
import { WALL_SPEAKER__FAR_LEFT, WALL_SPEAKER__FAR_RIGHT } from '../../../../../src/constants/scene/things/cutouts'
import { CROWD_BACK } from '../../../../../src/constants/scene/things/panels'
import { GHOST_ODIN_CLUB } from '../../../../../src/constants/scene/things/puppets'

export default {
    [CUTOUT]: {
        [WALL_SPEAKER__FAR_LEFT]: {
            yIndex: 1,
            xPosition: 1.25,
            zOffset: 4.5,
        },
        [WALL_SPEAKER__FAR_RIGHT]: {
            yIndex: 1,
            xPosition: 9.75,
            zOffset: 4.5,
            flipHorizontal: true,
        },
    },
    [PANEL]: {
        [CROWD_BACK]: {
            yIndex: 3,
        },
    },
    [PUPPET]: {
        [GHOST_ODIN_CLUB]: {
            yIndex: 5,
            xPosition: 3.3,
        },
    },
}
