import {
    FIXTURES,
    FLATS,
    PUPPETS
} from 'constants/scene'
import { STAGE_MIC_FAR } from '../../keys/fixtures'
import {
    CROWD_FAR_BACK,
    CROWD_NEAR_BACK
} from '../../keys/flats'
import { GHOST_ODIN_CLUB } from '../../keys/puppets'

const ARRANGEMENTS_THINGS = {
    [FIXTURES]: {
        [STAGE_MIC_FAR]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5,
                xWidth: 0.5,
                zHeight: 4
            }
        }
    },
    [FLATS]: {
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
    [PUPPETS]: {
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
