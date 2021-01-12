import {
    CUTOUT,
    FLAT,
} from '../../../../../app/constants/scene/things'
import {
    UCLA_TREE__LEFT,
    UCLA_TREE__RIGHT,
} from '../../../../../app/constants/scene/things/cutouts'
import { ROYCE_HALL } from '../../../../../app/constants/scene/things/flats'

export default {
    [CUTOUT]: {
        [UCLA_TREE__LEFT]: {
            yIndex: 1,
            xPosition: 1,
            scaleFactor: 0.5,
            flipHorizontal: true,
        },
        [UCLA_TREE__RIGHT]: {
            yIndex: 1,
            xPosition: 10,
            scaleFactor: 0.5,
        },
    },
    [FLAT]: {
        [ROYCE_HALL]: {
            yIndex: 2,
        },
    },
}
