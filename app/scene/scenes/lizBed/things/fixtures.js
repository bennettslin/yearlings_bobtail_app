import {
    LIZ_PHONE,
    LIZ_PHONE_BASE,
    LIZ_PHONE_REFLECTION,
    LIZ_PHONE_BASE_REFLECTION
} from 'scene/fixtureKeys'


const ARRANGEMENTS_MAP = {
    [LIZ_PHONE]: {
        yIndex: 4,
        arrangement: {
            xFloat: 2,
            xWidth: 1,
            zHeight: 1
        }
    },
    [LIZ_PHONE_BASE]: {
        yIndex: 4,
        arrangement: {
            xFloat: 2,
            xWidth: 1,
            zHeight: 1
        }
    },
    [LIZ_PHONE_REFLECTION]: {
        yIndex: 2,
        arrangement: {
            xFloat: 2,
            xWidth: 1,
            zHeight: 1,
            zOffset: 6.5
        }
    },
    [LIZ_PHONE_BASE_REFLECTION]: {
        yIndex: 2,
        arrangement: {
            xFloat: 2,
            xWidth: 1,
            zHeight: 1,
            zOffset: 6.5
        }
    }
}

export default ARRANGEMENTS_MAP
