import {
    BACKDROPS,
    FLATS
} from 'constants/scene'
import { PAMPAS_BACKDROP } from '../../keys/backdrops'
import { PAMPAS_FAR } from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [PAMPAS_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [FLATS]: {
        [PAMPAS_FAR]: {
            yIndex: 2,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
