import {
    DOOR,
    FIXTURE
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
import { BUDWEISER__SHARED } from '../../shared/food'
import { DOOR__SHARED } from '../../shared/home'
import {
    BASS_CASE__SHARED,
    DRUMS__SHARED,
    DRUM_STAND__SHARED,
    DRUM_THRONE__SHARED,
    GUITAR_CASE__SHARED
} from '../../shared/instruments'

const ARRANGEMENTS_THINGS = {
    [DOOR]: {
        [BASEMENT_DOOR_OPEN]: {
            yIndex: 2,
            xPosition: 3,
            sharedStyle: DOOR__SHARED
        }
    },
    [FIXTURE]: {
        [BASS_CASE_UPRIGHT]: {
            yIndex: 3,
            xPosition: 6.5,
            sharedStyle: BASS_CASE__SHARED
        },
        [GUITAR_CASE_UPRIGHT]: {
            yIndex: 3,
            xPosition: 9.5,
            sharedStyle: GUITAR_CASE__SHARED
        },
        [DRUMS_STACKED__BASEMENT]: {
            yIndex: 4,
            xPosition: 1.5,
            zOffset: -0.1,
            sharedStyle: [
                DRUMS__SHARED,
                DRUM_STAND__SHARED,
                DRUM_THRONE__SHARED
            ]
        },
        [BASEMENT_BEER_CASE]: {
            yIndex: 5,
            xPosition: 6.5,
            sharedStyle: BUDWEISER__SHARED
        },
        [BASEMENT_BEER_MARA]: {
            yIndex: 3,
            xPosition: 2.5,
            sharedStyle: BUDWEISER__SHARED
        },
        [BASEMENT_BEER_BENNETT]: {
            yIndex: 5,
            xPosition: 8,
            sharedStyle: BUDWEISER__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
