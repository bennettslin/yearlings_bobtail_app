import {
    FIXTURE,
    FURNITURE,
    PANEL
} from 'constants/scene'
import {
    NUDE_DRAWINGS,
    VASELINE
} from 'constants/scene/things/fixtures'
import {
    BENNETT_PILLOW,
    BENNETT_BLANKET
} from 'constants/scene/things/furniture'
import { BENNETT_BED } from 'constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [FIXTURE]: {
        [NUDE_DRAWINGS]: {
            yIndex: 3,
            arrangement: {
                xPosition: 7,
                xWidth: 0.5,
                zHeight: 0.5
            }
        },
        [VASELINE]: {
            yIndex: 3,
            arrangement: {
                xPosition: 8,
                xWidth: 0.5,
                zHeight: 0.5
            }
        }
    },
    [FURNITURE]: {
        [BENNETT_PILLOW]: {
            yIndex: 4,
            arrangement: {
                xPosition: 9,
                xWidth: 1,
                zHeight: 0.5
            }
        },
        [BENNETT_BLANKET]: {
            yIndex: 4,
            arrangement: {
                xPosition: 9,
                xWidth: 1,
                zHeight: 0.5
            }
        }
    },
    [PANEL]: {
        [BENNETT_BED]: {
            yIndex: 5,
            xPosition: 7.5,
            scaleFactor: 0.25
        }
    }
}

export default ARRANGEMENTS_THINGS
