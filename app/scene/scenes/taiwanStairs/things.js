import {
    BACKDROP,
    CARDBOARD
} from 'constants/scene'
import { TAIWAN_STAIRS_BACKDROP } from 'constants/scene/things/backdrops'
import {
    BENNETT_TAIWAN_GATE,
    ODIN_TAIWAN_GATE
} from 'constants/scene/things/cardboards'
import { BENNETT_ODIN } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [TAIWAN_STAIRS_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CARDBOARD]: {
        [BENNETT_TAIWAN_GATE]: {
            yIndex: 2,
            xPosition: 5,
            scaleFactor: 0.2,
            zOffset: 1,
            style: BENNETT_ODIN
        },
        [ODIN_TAIWAN_GATE]: {
            yIndex: 1,
            xPosition: 6,
            scaleFactor: 0.2,
            style: BENNETT_ODIN
        }
    }
}

export default ARRANGEMENTS_THINGS
