import {
    FIXTURES,
    FURNITURES
} from 'constants/scene'
import {
    NUDE_DRAWINGS,
    VASELINE
} from '../../keys/fixtures'
import { BENNETT_PILLOWS_BLANKET } from '../../keys/furniture'

const ARRANGEMENTS_THINGS = {
    [FIXTURES]: {
        [NUDE_DRAWINGS]: {
            yIndex: 5,
            arrangement: {
                xPosition: 7,
                xWidth: 0.5,
                zHeight: 0.5
            }
        },
        [VASELINE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8,
                xWidth: 0.5,
                zHeight: 0.5
            }
        }
    },
    [FURNITURES]: {
        [BENNETT_PILLOWS_BLANKET]: {
            yIndex: 5,
            arrangement: {
                xPosition: 9,
                xWidth: 1,
                zHeight: 0.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
