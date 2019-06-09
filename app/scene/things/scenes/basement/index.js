import { FIXTURES } from 'constants/scene'
import {
    BASS_CASE_UPRIGHT,
    GUITAR_CASE_UPRIGHT,
    DRUMS_STACKED_BASEMENT,
    BASEMENT_BEER_CASE,
    BASEMENT_BEER_MARA,
    BASEMENT_BEER_BENNETT
} from '../../keys/fixtures'

const ARRANGEMENTS_THINGS = {
    [FIXTURES]: {
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
        [DRUMS_STACKED_BASEMENT]: {
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
            arrangement: {
                xPosition: 9.5,
                xWidth: 1,
                zHeight: 4
            }
        },
        [BASEMENT_BEER_BENNETT]: {
            yIndex: 3,
            arrangement: {
                xPosition: 9.5,
                xWidth: 1,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
