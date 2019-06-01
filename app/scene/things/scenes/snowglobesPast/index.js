import {
    FLATS,
    PANELS
} from 'constants/scene'
import { ROAD_PAST } from '../../keys/flats'
import { SNOWGLOBE_TETHERBALL } from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [FLATS]: {
        [ROAD_PAST]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [PANELS]: {
        [SNOWGLOBE_TETHERBALL]: {
            yIndex: 4,
            arrangement: {
                xPosition: 7,
                xWidth: 6,
                zHeight: 5.5
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
