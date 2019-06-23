import {
    FLAT,
    PANEL
} from 'constants/scene'
import { ROAD_PAST } from 'constants/scene/things/flats'
import { SNOWGLOBE_TETHERBALL } from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [FLAT]: {
        [ROAD_PAST]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [PANEL]: {
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
