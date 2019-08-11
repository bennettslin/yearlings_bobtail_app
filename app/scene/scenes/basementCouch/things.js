import { CARDBOARD } from '../../../constants/scene'
import {
    NAS_ALBUM,
    ELLIOTT_SMITH_POSTER
} from '../../../constants/scene/things/cardboards'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [NAS_ALBUM]: {
            yIndex: 3,
            xPosition: 9.5,
            scaleFactor: 0.15
        },
        [ELLIOTT_SMITH_POSTER]: {
            yIndex: 1,
            xPosition: 9,
            zOffset: 2,
            scaleFactor: 0.25
        }
    }
}

export default ARRANGEMENTS_THINGS
