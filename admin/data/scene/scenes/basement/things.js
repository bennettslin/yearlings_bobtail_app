import {
    DOOR,
    FIXTURE,
    PANEL
} from '../../../../../app/constants/scene/things'
import { BASEMENT_DOOR_OPEN } from '../../../../../app/constants/scene/things/doors'
import {
    BASS_CASE_UPRIGHT,
    GUITAR_CASE_UPRIGHT,
    DRUMS_STACKED__BASEMENT,
    BASEMENT_BEER_CASE,
    BASEMENT_BEER_MARA,
    BASEMENT_BEER_BENNETT
} from '../../../../../app/constants/scene/things/fixtures'
import { DEFAULT_FENCE_BASEMENT } from '../../../../../app/constants/scene/things/panels'
import { ACTOR_DEFAULT_SCALE_FACTOR } from '../../../../../app/constants/scene'

export default {
    [DOOR]: {
        [BASEMENT_DOOR_OPEN]: {
            yIndex: 2,
            xPosition: 2.275,
            scaleFactor: 0.6,
            zOffset: 0.45
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
            xPosition: 1.5,
            scaleFactor: ACTOR_DEFAULT_SCALE_FACTOR
        },
        [BASEMENT_BEER_MARA]: {
            yIndex: 5,
            xPosition: 4.1,
            scaleFactor: ACTOR_DEFAULT_SCALE_FACTOR
        },
        [BASEMENT_BEER_BENNETT]: {
            yIndex: 5,
            xPosition: 7.1,
            scaleFactor: ACTOR_DEFAULT_SCALE_FACTOR
        }
    },
    [PANEL]: {
        [DEFAULT_FENCE_BASEMENT]: {
            yIndex: 0,
            scaleFactor: 0.5
        }
    }
}
