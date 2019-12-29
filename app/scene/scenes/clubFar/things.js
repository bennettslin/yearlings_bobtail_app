import {
    PANEL,
    PUPPET
} from '../../../constants/scene/things'
import { CROWD_BACK } from '../../../constants/scene/things/panels'
import { GHOST_ODIN_CLUB } from '../../../constants/scene/things/puppets'
import { SHADOW__SHARED } from '../../sharedStyles/props'

const ARRANGEMENTS_THINGS = {
    [PANEL]: {
        [CROWD_BACK]: {
            yIndex: 3,
            xPosition: 5.5,
            scaleFactor: 0.325,
            sharedStyle: SHADOW__SHARED
        }
    },
    [PUPPET]: {
        [GHOST_ODIN_CLUB]: {
            yIndex: 5,
            xPosition: 5,
            scaleFactor: 0.2
        }
    }
}

export default ARRANGEMENTS_THINGS
