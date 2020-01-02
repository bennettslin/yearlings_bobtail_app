import {
    DOOR,
    FIXTURE,
    PANEL
} from '../../../constants/scene/things'
import { BASEMENT_DOOR_OPEN } from '../../../constants/scene/things/doors'
import {
    BASS_CASE_UPRIGHT,
    GUITAR_CASE_UPRIGHT,
    DRUMS_STACKED__BASEMENT,
    BASEMENT_BEER_CASE,
    BASEMENT_BEER_MARA,
    BASEMENT_BEER_BENNETT
} from '../../../constants/scene/things/fixtures'
import { BASEMENT_FENCE } from '../../../constants/scene/things/panels'

export default {
    [DOOR]: {
        [BASEMENT_DOOR_OPEN]: {
            yIndex: 2,
            xPosition: 2.275,
            scaleFactor: 0.6,
            zOffset: -0.05
        }
    },
    [FIXTURE]: {
        [BASS_CASE_UPRIGHT]: {
            yIndex: 2,
            xPosition: 7.5
        },
        [GUITAR_CASE_UPRIGHT]: {
            yIndex: 2,
            xPosition: 9.5
        },
        [DRUMS_STACKED__BASEMENT]: {
            yIndex: 2,
            xPosition: 5,
            zOffset: -0.1
        },
        [BASEMENT_BEER_CASE]: {
            yIndex: 5,
            xPosition: 1.5
        },
        [BASEMENT_BEER_MARA]: {
            yIndex: 5,
            xPosition: 5
        },
        [BASEMENT_BEER_BENNETT]: {
            yIndex: 5,
            xPosition: 8
        }
    },
    [PANEL]: {
        [BASEMENT_FENCE]: {
            scaleFactor: 0.5
        }
    }
}
