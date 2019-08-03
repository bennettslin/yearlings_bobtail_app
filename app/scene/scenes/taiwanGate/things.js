import {
    CARDBOARD,
    FLAT
} from 'constants/scene'
import { BENNETT_ODIN_RICKSHAW } from 'constants/scene/things/cardboards'
import {
    TAIWAN_HOUSES_CENTRE,
    TAIWAN_HOUSE_FAR,
    TAIWAN_HOUSE_NEAR
} from 'constants/scene/things/flats'
import { BENNETT_ODIN_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [BENNETT_ODIN_RICKSHAW]: {
            yIndex: 2,
            xPosition: 7,
            scaleFactor: 0.2,
            sharedStyle: BENNETT_ODIN_SHARED
        }
    },
    [FLAT]: {
        [TAIWAN_HOUSES_CENTRE]: {
            yIndex: 1,
            arrangement: {
                xPosition: 7,
                xWidth: 9,
                zHeight: 4
            }
        },
        [TAIWAN_HOUSE_FAR]: {
            yIndex: 1,
            xPosition: 10.25,
            scaleFactor: 0.4
        },
        [TAIWAN_HOUSE_NEAR]: {
            yIndex: 2,
            xPosition: 11.25,
            scaleFactor: 0.5
        }
    }
}

export default ARRANGEMENTS_THINGS
