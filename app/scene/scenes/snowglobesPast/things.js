import {
    BACKDROP,
    PANEL
} from 'constants/scene'
import { ROAD_PAST } from 'constants/scene/things/backdrops'
import { SNOWGLOBE__TETHERBALL } from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
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
        [SNOWGLOBE__TETHERBALL]: {
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
