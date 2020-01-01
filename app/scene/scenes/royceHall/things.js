import {
    CUTOUT,
    FLAT
} from '../../../constants/scene/things'
import {
    UCLA_TREE__LEFT,
    UCLA_TREE__RIGHT
} from '../../../constants/scene/things/cutouts'
import { ROYCE_HALL } from '../../../constants/scene/things/flats'

export default {
    [CUTOUT]: {
        [UCLA_TREE__LEFT]: {
            yIndex: 1,
            xPosition: 1,
            scaleFactor: 0.5,
            flipHorizontal: true
        },
        [UCLA_TREE__RIGHT]: {
            yIndex: 1,
            xPosition: 10,
            scaleFactor: 0.5
        }
    },
    [FLAT]: {
        [ROYCE_HALL]: {
            yIndex: 2,
            xPosition: 5.5,
            scaleFactor: 0.535
        }
    }
}
