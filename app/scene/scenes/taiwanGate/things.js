import {
    CARDBOARD,
    CUTOUT,
    FLAT
} from '../../../constants/scene'
import { BENNETT_ODIN_RICKSHAW } from '../../../constants/scene/things/cardboards'
import { TAIWAN_TREE } from '../../../constants/scene/things/cutouts'
import {
    TAIWAN_HOUSES_CENTRE,
    TAIWAN_HOUSE_FAR,
    TAIWAN_HOUSE_NEAR
} from '../../../constants/scene/things/flats'
import { TAIWAN_HOUSE__SHARED } from '../../shared'
import {
    PEOPLE_ALL__SHARED,
    PEOPLE_BENNETT__SHARED,
    PEOPLE_ODIN__SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [BENNETT_ODIN_RICKSHAW]: {
            yIndex: 2,
            xPosition: 7,
            scaleFactor: 0.2,
            sharedStyle: [
                PEOPLE_ALL__SHARED,
                PEOPLE_BENNETT__SHARED,
                PEOPLE_ODIN__SHARED
            ]
        }
    },
    [CUTOUT]: {
        [TAIWAN_TREE]: {
            yIndex: 1,
            xPosition: 4,
            scaleFactor: 0.6
        }
    },
    [FLAT]: {
        [TAIWAN_HOUSES_CENTRE]: {
            yIndex: 1,
            xPosition: 7,
            scaleFactor: 0.45,
            sharedStyle: TAIWAN_HOUSE__SHARED
        },
        [TAIWAN_HOUSE_FAR]: {
            yIndex: 1,
            xPosition: 10.25,
            scaleFactor: 0.45,
            sharedStyle: TAIWAN_HOUSE__SHARED
        },
        [TAIWAN_HOUSE_NEAR]: {
            yIndex: 2,
            xPosition: 11.25,
            scaleFactor: 0.5,
            sharedStyle: TAIWAN_HOUSE__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
