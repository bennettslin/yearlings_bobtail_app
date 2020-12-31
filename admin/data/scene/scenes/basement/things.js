import {
    DOOR,
    FIXTURE,
    PANEL,
} from '../../../../../app/constants/scene/things'
import {
    BASEMENT_DOOR_OPEN,
    DEFAULT_FENCE_BASEMENT,
} from '../../../../../app/constants/scene/things/doors'
import {
    BASEMENT_BEER_BENNETT,
    BASEMENT_BEER_CASE,
    BASEMENT_BEER_MARA,
    BASS_CASE_UPRIGHT,
    DRUMS_STACKED__BASEMENT,
    GUITAR_CASE_UPRIGHT,
} from '../../../../../app/constants/scene/things/fixtures'
import { ACTOR_DEFAULT_SCALE_FACTOR } from '../../../../../app/constants/scene'
import {
    MILK_CRATE__ANA,
    MILK_CRATE__BENNETT,
    MILK_CRATE__JACOB,
    MILK_CRATE__MARA,
} from '../../../../../app/constants/scene/things/panels'

export default {
    [DOOR]: {
        [BASEMENT_DOOR_OPEN]: {
            yIndex: 2,
            xPosition: 2.275,
            scaleFactor: 0.6,
            zOffset: 0.45,
        },
        [DEFAULT_FENCE_BASEMENT]: {
            scaleFactor: 0.5,
        },
    },
    [FIXTURE]: {
        [BASS_CASE_UPRIGHT]: {
            yIndex: 2,
            xPosition: 7.5,
        },
        [GUITAR_CASE_UPRIGHT]: {
            yIndex: 2,
            xPosition: 9.5,
        },
        [DRUMS_STACKED__BASEMENT]: {
            yIndex: 2,
            xPosition: 5,
            zOffset: -0.1,
        },
        [BASEMENT_BEER_CASE]: {
            yIndex: 5,
            xPosition: 1.5,
            scaleFactor: ACTOR_DEFAULT_SCALE_FACTOR,
        },
        [BASEMENT_BEER_MARA]: {
            yIndex: 5,
            xPosition: 4.1,
            scaleFactor: ACTOR_DEFAULT_SCALE_FACTOR,
        },
        [BASEMENT_BEER_BENNETT]: {
            yIndex: 5,
            xPosition: 7.1,
            scaleFactor: ACTOR_DEFAULT_SCALE_FACTOR,
        },
    },
    [PANEL]: {
        [MILK_CRATE__ANA]: {
            yIndex: 4,
            xPosition: 7,
            zOffset: -1.07,
        },
        [MILK_CRATE__BENNETT]: {
            yIndex: 5,
            xPosition: 9,
            zOffset: -1.07,
        },
        [MILK_CRATE__JACOB]: {
            yIndex: 4,
            xPosition: 4,
            zOffset: -1.07,
        },
        [MILK_CRATE__MARA]: {
            yIndex: 5,
            xPosition: 3,
            zOffset: -1.07,
        },
    },
}
