import {
    CUTOUT,
    FLAT
} from 'constants/scene'
import {
    UCLA_TREE__LEFT,
    UCLA_TREE__RIGHT
} from 'constants/scene/things/cutouts'
import { ROYCE_HALL } from 'constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [UCLA_TREE__LEFT]: {
            yIndex: 1,
            xPosition: 1,
            scaleFactor: 0.45
        },
        [UCLA_TREE__RIGHT]: {
            yIndex: 1,
            xPosition: 10,
            scaleFactor: 0.45,
            flipHorizontal: true
        }
    },
    [FLAT]: {
        [ROYCE_HALL]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
