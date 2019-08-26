import {
    CUTOUT,
    CARDBOARD,
    FIXTURE
} from '../../../constants/scene'
import {
    BENNETT_TAIWAN_STAIRS,
    ODIN_TAIWAN_STAIRS
} from '../../../constants/scene/things/cardboards'
import {
    BUDDHA_SHRINE,
    TAIWAN_FRIDGE
} from '../../../constants/scene/things/cutouts'
import { FRIDGE_DRAWINGS } from '../../../constants/scene/things/fixtures'
import { BUDDHA_SHRINE__SHARED } from '../../shared'
import {
    ALL_PEOPLE__SHARED,
    BENNETT__SHARED,
    ODIN__SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [BENNETT_TAIWAN_STAIRS]: {
            yIndex: 2,
            xPosition: 7.75,
            scaleFactor: 0.2,
            sharedStyle: [
                ALL_PEOPLE__SHARED,
                BENNETT__SHARED
            ]
        },
        [ODIN_TAIWAN_STAIRS]: {
            yIndex: 2,
            xPosition: 1.5,
            scaleFactor: 0.2,
            sharedStyle: ODIN__SHARED
        }
    },
    [CUTOUT]: {
        [BUDDHA_SHRINE]: {
            yIndex: 4,
            xPosition: 5.5,
            scaleFactor: 0.15,
            sharedStyle: BUDDHA_SHRINE__SHARED
        },
        [TAIWAN_FRIDGE]: {
            yIndex: 1,
            xPosition: 9,
            scaleFactor: 0.3
        }
    },
    [FIXTURE]: {
        [FRIDGE_DRAWINGS]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9.5,
                xWidth: 1,
                zHeight: 0.5,
                zOffset: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
