import {
    PUSH_BROOM_BACKSTAGE,
    PUSH_BROOM_TUNNEL,
    STEPLADDER,
    MANNEQUIN
} from '../../../fixtureKeys'

const ARRANGEMENTS_MAP = {
    [PUSH_BROOM_BACKSTAGE]: {
        yIndex: 2,
        arrangement: {
            xFloat: 6.5,
            xWidth: 1,
            zHeight: 3
        }
    },
    [PUSH_BROOM_TUNNEL]: {
        yIndex: 2,
        arrangement: {
            xFloat: 4,
            xWidth: 1,
            zHeight: 3
        }
    },
    [STEPLADDER]: {
        yIndex: 2,
        arrangement: {
            xFloat: 8,
            xWidth: 1,
            zHeight: 3
        }
    },
    [MANNEQUIN]: {
        yIndex: 2,
        arrangement: {
            xFloat: 9.5,
            xWidth: 1,
            zHeight: 4
        }
    }
}

export default ARRANGEMENTS_MAP
