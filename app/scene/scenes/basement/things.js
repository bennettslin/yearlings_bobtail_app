import { FIXTURE } from '../../../constants/scene'
import {
    BASS_CASE_UPRIGHT,
    GUITAR_CASE_UPRIGHT,
    DRUMS_STACKED__BASEMENT,
    BASEMENT_BEER_CASE,
    BASEMENT_BEER_MARA,
    BASEMENT_BEER_BENNETT
} from '../../../constants/scene/things/fixtures'
import { BUDWEISER__SHARED } from '../../shared'
import {
    BASS_CASE__SHARED,
    DRUMS__SHARED,
    DRUM_STAND__SHARED,
    GUITAR_CASE__SHARED
} from '../../shared/instruments'

const ARRANGEMENTS_THINGS = {
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
                DRUM_STAND__SHARED
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
