import {
    BACKDROP,
    FIXTURE,
    FLAT
} from 'constants/scene'
import { CEMETERY_BACKDROP } from '../../keys/backdrops'
import { GRAVESTONE } from '../../keys/fixtures'
import { CEMETERY_HILLS_NEAR } from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [CEMETERY_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [FIXTURE]: {
        [GRAVESTONE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5.5,
                xWidth: 3,
                zHeight: 2
            }
        }
    },
    [FLAT]: {
        [CEMETERY_HILLS_NEAR]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
