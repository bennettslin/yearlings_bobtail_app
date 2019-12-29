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
import { DOOR__SHARED } from '../../sharedStyles/home'
import {
    BASS_CASE__SHARED,
    DRUMS__SHARED,
    DRUM_STAND__SHARED,
    DRUM_THRONE__SHARED,
    GUITAR_CASE__SHARED
} from '../../sharedStyles/instruments'

const ARRANGEMENTS_THINGS = {
    [DOOR]: {
        [BASEMENT_DOOR_OPEN]: {
            yIndex: 2,
            xPosition: 2.275,
            scaleFactor: 0.6,
            zOffset: -0.05,
            sharedStyle: DOOR__SHARED
        }
    },
    [FIXTURE]: {
        [BASS_CASE_UPRIGHT]: {
            yIndex: 2,
            xPosition: 7.5,
            sharedStyle: BASS_CASE__SHARED
        },
        [GUITAR_CASE_UPRIGHT]: {
            yIndex: 2,
            xPosition: 9.5,
            sharedStyle: GUITAR_CASE__SHARED
        },
        [DRUMS_STACKED__BASEMENT]: {
            yIndex: 2,
            xPosition: 5,
            zOffset: -0.1,
            sharedStyle: [
                DRUMS__SHARED,
                DRUM_STAND__SHARED,
                DRUM_THRONE__SHARED
            ]
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
    }
}

export default ARRANGEMENTS_THINGS
