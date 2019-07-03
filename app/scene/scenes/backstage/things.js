import {
    CUTOUT,
    FIXTURE
} from 'constants/scene'
import {
    SANDBAGS,
    STAGE_LIGHTS
} from 'constants/scene/things/cutouts'
import {
    PUSH_BROOM__BACKSTAGE,
    STEPLADDER,
    MANNEQUIN
} from 'constants/scene/things/fixtures'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [SANDBAGS]: {
            yIndex: 1,
            xPosition: 3,
            scaleFactor: 0.3
        },
        [STAGE_LIGHTS]: {
            yIndex: 1,
            xPosition: 3,
            scaleFactor: 0.25,
            zOffset: 4
        }
    },
    [FIXTURE]: {
        [PUSH_BROOM__BACKSTAGE]: {
            yIndex: 2,
            arrangement: {
                xPosition: 6.5,
                xWidth: 1,
                zHeight: 3
            }
        },
        [STEPLADDER]: {
            yIndex: 2,
            arrangement: {
                xPosition: 8,
                xWidth: 1,
                zHeight: 3
            }
        },
        [MANNEQUIN]: {
            yIndex: 2,
            arrangement: {
                xPosition: 9.5,
                xWidth: 1,
                zHeight: 4
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
