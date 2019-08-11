import {
    PANEL,
    PUPPET
} from '../../../constants/scene'
import { CROWD_BACK } from '../../../constants/scene/things/panels'
import { GHOST_ODIN_CLUB } from '../../../constants/scene/things/puppets'
import { SHADOW_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [PANEL]: {
        [CROWD_BACK]: {
            yIndex: 3,
            xPosition: 5.5,
            scaleFactor: 0.325,
            sharedStyle: SHADOW_SHARED
        }
    },
    [PUPPET]: {
        [GHOST_ODIN_CLUB]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5,
                xWidth: 5,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
