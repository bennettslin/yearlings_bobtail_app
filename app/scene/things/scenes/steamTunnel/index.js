import {
    FIXTURE,
    FLAT
} from 'constants/scene'
import { PUSH_BROOM_TUNNEL } from '../../keys/fixtures'
import { STEAM_PIPES } from '../../keys/flats'

const ARRANGEMENTS_THINGS = {
    [FIXTURE]: {
        [PUSH_BROOM_TUNNEL]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 1,
                zHeight: 3
            }
        }
    },
    [FLAT]: {
        [STEAM_PIPES]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 8,
                zHeight: 6
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
