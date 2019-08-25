import { FIXTURE } from '../../../constants/scene'
import {
    BASS_CASE_UPRIGHT,
    GUITAR_CASE_UPRIGHT,
    DRUMS_STACKED__BASEMENT,
    BASEMENT_BEER_CASE,
    BASEMENT_BEER_MARA,
    BASEMENT_BEER_BENNETT
} from '../../../constants/scene/things/fixtures'
import { BUDWEISER_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [FIXTURE]: {
        [BASS_CASE_UPRIGHT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 6.5,
                xWidth: 1,
                zHeight: 4
            }
        },
        [GUITAR_CASE_UPRIGHT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 9.5,
                xWidth: 1,
                zHeight: 4
            }
        },
        [DRUMS_STACKED__BASEMENT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 3.5,
                xWidth: 1.5,
                zHeight: 5
            }
        },
        [BASEMENT_BEER_CASE]: {
            yIndex: 3,
            arrangement: {
                xPosition: 9.5,
                xWidth: 1,
                zHeight: 4
            }
        },
        [BASEMENT_BEER_MARA]: {
            yIndex: 3,
            xPosition: 2.5,
            sharedStyle: BUDWEISER_SHARED
        },
        [BASEMENT_BEER_BENNETT]: {
            yIndex: 5,
            xPosition: 8,
            sharedStyle: BUDWEISER_SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
