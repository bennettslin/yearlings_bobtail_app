import {
    BACKDROP,
    CARDBOARD,
    DOOR
} from '../../../constants/scene/things'
import { TAIWAN_STAIRS_BACKDROP } from '../../../constants/scene/things/backdrops'
import {
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE
} from '../../../constants/scene/things/cardboards'
import { IRON_GATE_LOW } from '../../../constants/scene/things/doors'
import { TAIWAN_HOUSE__SHARED } from '../../shared/buildings'
import { ODIN__SHARED } from '../../shared/animals'
import { TAIWAN_GATE__SHARED } from '../../shared/home'
import { BENNETT } from '../../../constants/scene/actors'
import { ALL_PEOPLE__SHARED } from '../../shared/people'

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
            zOffset: 0.875,
            sharedStyle: [
                ALL_PEOPLE__SHARED,
                BENNETT
            ]
        },
        [ODIN_TAIWAN_GATE]: {
            yIndex: 1,
            xPosition: 6,
            scaleFactor: 0.2,
            sharedStyle: ODIN__SHARED
        }
    },
    [DOOR]: {
        [IRON_GATE_LOW]: {
            yIndex: 2,
            xPosition: 4,
            trimBottom: 0.5,
            sharedStyle: TAIWAN_GATE__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
