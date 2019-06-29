import {
    FIXTURE,
    PANEL,
    PUPPET
} from 'constants/scene'
import { STAGE_MIC_FAR } from 'constants/scene/things/fixtures'
import {
    CROWD_FAR__BACK,
    CROWD_NEAR__BACK
} from 'constants/scene/things/panels'
import { GHOST_ODIN_CLUB } from 'constants/scene/things/puppets'

const ARRANGEMENTS_THINGS = {
    [FIXTURE]: {
        [STAGE_MIC_FAR]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5,
                xWidth: 0.5,
                zHeight: 4
            }
        }
    },
    [PANEL]: {
        [CROWD_FAR__BACK]: {
            yIndex: 3,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 4
            }
        },
        [CROWD_NEAR__BACK]: {
            yIndex: 4,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 4
            }
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
