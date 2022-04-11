import {
    CUTOUT,
    FIXTURE,
    PANEL,
} from '../../../../../src/constants/scene/things'
import { STEAM_PIPES } from '../../../../../src/constants/scene/things/cutouts'
import { PUSH_BROOM__TUNNEL } from '../../../../../src/constants/scene/things/fixtures'
import {
    SHADOW_MONGOL,
    SHADOW_VIKING_FAR,
    SHADOW_VIKING_NEAR,
} from '../../../../../src/constants/scene/things/panels'

export default {
    [CUTOUT]: {
        [STEAM_PIPES]: {
            yIndex: 1,
            zOffset: 1,
        },
    },
    [FIXTURE]: {
        [PUSH_BROOM__TUNNEL]: {
            yIndex: 1,
            xPosition: 4,
        },
    },
    [PANEL]: {
        [SHADOW_MONGOL]: {
            yIndex: 5,
            xPosition: 9,
        },
        [SHADOW_VIKING_FAR]: {
            yIndex: 4,
            xPosition: 2.3,
        },
        [SHADOW_VIKING_NEAR]: {
            yIndex: 5,
            xPosition: 1.3,
        },
    },
}
