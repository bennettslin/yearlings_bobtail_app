import {
    FIXTURE,
    FLAT,
    PUPPET
} from 'constants/scene'
import { STAGE_MIC_FAR } from '../../keys/fixtures'
import {
    CROWD_FAR_BACK,
    CROWD_NEAR_BACK
} from '../../keys/flats'
import { GHOST_ODIN_CLUB } from '../../keys/puppets'

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
    [FLAT]: {
        [CROWD_FAR_BACK]: {
            yIndex: 3,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 4
            }
        },
        [CROWD_NEAR_BACK]: {
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
