import {
    CUTOUT,
    FIXTURE
} from 'constants/scene'
import {
    SANDBAGS,
    STAGE_LIGHTS
} from 'constants/scene/things/cutouts'
import {
    PUSH_BROOM_BACKSTAGE,
    STEPLADDER,
    MANNEQUIN
} from 'constants/scene/things/fixtures'

const ARRANGEMENTS_THINGS = {
    [CUTOUT]: {
        [SANDBAGS]: {
            yIndex: 4,
            arrangement: {
                xPosition: 3,
                xWidth: 3,
                zHeight: 2,
                zOffset: 4
            }
        },
        [STAGE_LIGHTS]: {
            yIndex: 4,
            arrangement: {
                xPosition: 3,
                xWidth: 4,
                zHeight: 3
            }
        }
    },
    [FIXTURE]: {
        [PUSH_BROOM_BACKSTAGE]: {
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
