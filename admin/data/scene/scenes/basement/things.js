import {
    DOOR,
    FIXTURE,
    PANEL,
} from '../../../../../src/constants/scene/things'
import {
    BASEMENT_DOOR_OPEN,
    DEFAULT_FENCE_BASEMENT,
} from '../../../../../src/constants/scene/things/doors'
import {
    BASEMENT_BEER_BENNETT,
    BASEMENT_BEER_CASE,
    BASEMENT_BEER_MARA,
    BASS_CASE_UPRIGHT,
    DRUMS_STACKED__BASEMENT,
    GUITAR_CASE_UPRIGHT,
} from '../../../../../src/constants/scene/things/fixtures'
import {
    MILK_CRATE__ANA,
    MILK_CRATE__BENNETT,
    MILK_CRATE__JACOB,
    MILK_CRATE__MARA,
} from '../../../../../src/constants/scene/things/panels'

export default {
    [DOOR]: {
        [BASEMENT_DOOR_OPEN]: {
            yIndex: 2,
            xPosition: 2.275,
            zOffset: 0.45,
        },
        [DEFAULT_FENCE_BASEMENT]: {},
    },
    [FIXTURE]: {
        [BASS_CASE_UPRIGHT]: {
            yIndex: 2,
            xPosition: 7.65,
        },
        [GUITAR_CASE_UPRIGHT]: {
            yIndex: 2,
            xPosition: 9.35,
        },
        [DRUMS_STACKED__BASEMENT]: {
            yIndex: 2,
            xPosition: 5.25,
            zOffset: -0.1,
        },
        [BASEMENT_BEER_CASE]: {
            yIndex: 5,
            xPosition: 1.5,
        },
        [BASEMENT_BEER_MARA]: {
            yIndex: 5,
            xPosition: 4.1,
        },
        [BASEMENT_BEER_BENNETT]: {
            yIndex: 5,
            xPosition: 7.1,
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
