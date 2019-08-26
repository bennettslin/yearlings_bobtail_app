import {
    BACKDROP,
    CARDBOARD
} from '../../../constants/scene'
import { TAIWAN_STAIRS_BACKDROP } from '../../../constants/scene/things/backdrops'
import {
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE
} from '../../../constants/scene/things/cardboards'
import { TAIWAN_HOUSE__SHARED } from '../../shared'
import { ODIN__SHARED } from '../../shared/animals'
import {
    ALL_PEOPLE__SHARED,
    BENNETT__SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [TAIWAN_STAIRS_BACKDROP]: {
            yIndex: 0,
            xPosition: 4.5,
            zOffset: 2.5,
            scaleFactor: 0.45,
            flipHorizontal: true,
            sharedStyle: TAIWAN_HOUSE__SHARED
        }
    },
    [CARDBOARD]: {
        [BENNETT_TAIWAN_GATE]: {
            yIndex: 2,
            xPosition: 5,
            scaleFactor: 0.2,
            zOffset: 1,
            sharedStyle: [
                ALL_PEOPLE__SHARED,
                BENNETT__SHARED
            ]
        },
        [ODIN_TAIWAN_GATE]: {
            yIndex: 1,
            xPosition: 6,
            scaleFactor: 0.2,
            sharedStyle: ODIN__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
