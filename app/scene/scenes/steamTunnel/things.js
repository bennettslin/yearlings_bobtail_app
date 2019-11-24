import {
    CUTOUT,
    FIXTURE
} from '../../../constants/scene/things'
import { STEAM_PIPES } from '../../../constants/scene/things/cutouts'
import { PUSH_BROOM__TUNNEL } from '../../../constants/scene/things/fixtures'

const ARRANGEMENTS_THINGS = {
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

export default ARRANGEMENTS_THINGS
