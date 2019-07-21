import {
    BACKDROP,
    CUTOUT,
    FLAT
} from 'constants/scene'
import { UCLA_BACKDROP } from 'constants/scene/things/backdrops'
import {
    UCLA_TREE__LEFT,
    UCLA_TREE__RIGHT
} from 'constants/scene/things/cutouts'
import { ROYCE_HALL } from 'constants/scene/things/flats'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [UCLA_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    },
    [CUTOUT]: {
        [UCLA_TREE__LEFT]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        },
        [UCLA_TREE__RIGHT]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
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
