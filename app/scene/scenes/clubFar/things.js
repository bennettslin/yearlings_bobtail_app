import {
    PANEL,
    PUPPET
} from '../../../constants/scene'
import { CROWD_BACK } from '../../../constants/scene/things/panels'
import { GHOST_ODIN_CLUB } from '../../../constants/scene/things/puppets'
import { SHADOW_SHARED } from '../../shared'
import { PEOPLE_ODIN_GHOST_SHARED } from '../../shared/people'

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
            yIndex: 5,
            xPosition: 5,
            scaleFactor: 0.2,
            sharedStyle: PEOPLE_ODIN_GHOST_SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
