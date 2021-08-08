import {
    CUTOUT,
    FLAT,
} from '../../../../../src/constants/scene/things'
import {
    UCLA_TREE__LEFT,
    UCLA_TREE__RIGHT,
} from '../../../../../src/constants/scene/things/cutouts'
import { ROYCE_HALL } from '../../../../../src/constants/scene/things/flats'

export default {
    [CUTOUT]: {
        [UCLA_TREE__LEFT]: {
            yIndex: 1,
            xPosition: 1,
            flipHorizontal: true,
        },
        [UCLA_TREE__RIGHT]: {
            yIndex: 1,
            xPosition: 10,
        },
    },
    [FLAT]: {
        [ROYCE_HALL]: {
            yIndex: 2,
        },
    },
}
