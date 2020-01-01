import {
    CUTOUT,
    FIXTURE
} from '../../../constants/scene/things'
import { STEAM_PIPES } from '../../../constants/scene/things/cutouts'
import { PUSH_BROOM__TUNNEL } from '../../../constants/scene/things/fixtures'

export default {
    [CUTOUT]: {
        [STEAM_PIPES]: {
            yIndex: 1,
            xPosition: 5.5,
            zOffset: 1,
            scaleFactor: 0.425
        }
    },
    [FIXTURE]: {
        [PUSH_BROOM__TUNNEL]: {
            yIndex: 2,
            xPosition: 4
        }
    }
}
