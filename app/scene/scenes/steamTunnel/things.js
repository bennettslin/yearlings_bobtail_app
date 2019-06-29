import {
    FIXTURE,
    FLAT
} from 'constants/scene'
import { PUSH_BROOM__TUNNEL } from 'constants/scene/things/fixtures'
import { STEAM_PIPES } from 'constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [FIXTURE]: {
        [PUSH_BROOM__TUNNEL]: {
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
