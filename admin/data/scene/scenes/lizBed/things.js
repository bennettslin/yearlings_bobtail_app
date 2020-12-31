import {
    BUBBLE,
    FIXTURE,
    FURNITURE,
    PANEL,
} from '../../../../../app/constants/scene/things'
import {
    BUBBLE_SMALL__AMY,
    BUBBLE_MEDIUM__AMY,
    BUBBLE_LARGE__AMY,
    THOUGHT_AMY,
} from '../../../../../app/constants/scene/things/bubbles'
import {
    BENNETT_SHOE,
    BENNETT_SHOE_REFLECTION,
    CONDOM_WRAPPER_LIZ,
    CONDOM_WRAPPER_REFLECTION,
    LIZ_PHONE,
    LIZ_PHONE_BASE,
    LIZ_PHONE_BASE_REFLECTION,
    LIZ_PHONE_REFLECTION,
    USED_CONDOM_LIZ,
    USED_CONDOM_REFLECTION,
} from '../../../../../app/constants/scene/things/fixtures'
import {
    LIZ_PILLOWS,
    LIZ_PILLOWS_PILE,
    LIZ_PILLOWS_PILE_REFLECTION,
    LIZ_PILLOWS_REFLECTION,
} from '../../../../../app/constants/scene/things/furnitures'
import {
    LIZ_BED,
    MILK_CRATE__VEGAN,
    PHONE_CALL_PANEL,
} from '../../../../../app/constants/scene/things/panels'
import {
    BUBBLE_LARGE_CONFIG,
    BUBBLE_MEDIUM_CONFIG,
    BUBBLE_SMALL_CONFIG,
} from '../../sharedConfigs'

export default {
    [FIXTURE]: {
        [LIZ_PHONE]: {
            yIndex: 4,
            xPosition: 2,
        },
        [LIZ_PHONE_REFLECTION]: {
            yIndex: 2,
            xPosition: 2,
            zOffset: 6.5,
        },
        [CONDOM_WRAPPER_LIZ]: {
            yIndex: 5,
            xPosition: 8.5,
            zOffset: 0.05,
        },
        [CONDOM_WRAPPER_REFLECTION]: {
            yIndex: 1,
            xPosition: 8.5,
            zOffset: 6.5,
        },
        [USED_CONDOM_LIZ]: {
            yIndex: 3,
            xPosition: 8,
        },
        [USED_CONDOM_REFLECTION]: {
            yIndex: 1,
            xPosition: 8,
            zOffset: 4,
        },
    },
    [FURNITURE]: {
        [LIZ_PILLOWS]: {
            yIndex: 5,
            xPosition: 5,
            zOffset: 1.55,
        },
        [LIZ_PILLOWS_REFLECTION]: {
            yIndex: 2,
            xPosition: 5,
            zOffset: 4.65,
        },
        [LIZ_PILLOWS_PILE]: {
            yIndex: 3,
            xPosition: 9,
        },
        [LIZ_PILLOWS_PILE_REFLECTION]: {
            yIndex: 1,
            xPosition: 9,
            zOffset: 3,
        },
    },
    [PANEL]: {
        [LIZ_BED]: {
            yIndex: 5,
            xPosition: 5,
            scaleFactor: 0.25,
        },
    },
}

export const THINGS_LIZ_BED_LOOK_BACK = {
    [BUBBLE]: {
        [BUBBLE_LARGE__AMY]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 5.7,
            zOffset: 3.19,
        },
        [BUBBLE_MEDIUM__AMY]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 6.45,
            zOffset: 3.1,
        },
        [BUBBLE_SMALL__AMY]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 6.9,
            zOffset: 3.35,
        },
        [THOUGHT_AMY]: {
            yIndex: 5,
            xPosition: 5,
            zOffset: 4,
        },
    },
    [FIXTURE]: {
        [BENNETT_SHOE]: {
            yIndex: 3,
            xPosition: 9.5,
        },
        [BENNETT_SHOE_REFLECTION]: {
            yIndex: 1,
            xPosition: 9.5,
            zOffset: 4.5,
            rotate: 345,
        },
    },
}

export const THINGS_LIZ_BED_VEGAN = {
    [FIXTURE]: {
        [LIZ_PHONE_BASE]: {
            yIndex: 4,
            xPosition: 2,
        },
        [LIZ_PHONE_BASE_REFLECTION]: {
            yIndex: 2,
            xPosition: 2,
            zOffset: 6.5,
        },
    },
    [PANEL]: {
        [PHONE_CALL_PANEL]: {
            yIndex: 3,
            xPosition: 9.5,
            scaleFactor: 0.325,
        },
        [MILK_CRATE__VEGAN]: {
            yIndex: 4,
            xPosition: 10,
            zOffset: -1.08,
        },
    },
}
