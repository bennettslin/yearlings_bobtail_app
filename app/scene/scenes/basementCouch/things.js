import { CARDBOARD } from 'constants/scene'
import {
    NAS_ALBUM,
    ELLIOTT_SMITH_POSTER
} from 'constants/scene/things/cardboards'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [NAS_ALBUM]: {
            yIndex: 3,
            xPosition: 9.5,
            scaleFactor: 0.15
        },
        [ELLIOTT_SMITH_POSTER]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 2,
                zHeight: 3,
                zOffset: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
