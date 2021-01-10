import {
    CUTOUT,
    FIXTURE,
} from '../../../../../app/constants/scene/things'
import { STEAM_PIPES } from '../../../../../app/constants/scene/things/cutouts'
import { PUSH_BROOM__TUNNEL } from '../../../../../app/constants/scene/things/fixtures'

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
}
