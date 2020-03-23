import {
    FIXTURE,
    FURNITURE,
    PANEL
} from '../../../constants/scene/things'
import {
    LIZ_PHONE,
    LIZ_PHONE_REFLECTION,
    BENNETT_SHOE,
    BENNETT_SHOE_REFLECTION,
    LIZ_PHONE_BASE,
    LIZ_PHONE_BASE_REFLECTION,
    CONDOM_WRAPPER_LIZ,
    CONDOM_WRAPPER_REFLECTION,
    USED_CONDOM_LIZ,
    USED_CONDOM_REFLECTION
} from '../../../constants/scene/things/fixtures'
import {
    LIZ_PILLOWS,
    LIZ_PILLOWS_REFLECTION,
    LIZ_PILLOWS_PILE,
    LIZ_PILLOWS_PILE_REFLECTION
} from '../../../constants/scene/things/furnitures'
import {
    PHONE_CALL_PANEL,
    LIZ_BED
} from '../../../constants/scene/things/panels'

export default {
    [FIXTURE]: {
        [LIZ_PHONE]: {
            yIndex: 4,
            xPosition: 2
        },
        [LIZ_PHONE_REFLECTION]: {
            yIndex: 2,
            xPosition: 2,
            zOffset: 6.5
        },
        [CONDOM_WRAPPER_LIZ]: {
            yIndex: 5,
            xPosition: 8.5
        },
        [CONDOM_WRAPPER_REFLECTION]: {
            yIndex: 1,
            xPosition: 8.5,
            zOffset: 6.5
        },
        [USED_CONDOM_LIZ]: {
            yIndex: 3,
            xPosition: 8
        },
        [USED_CONDOM_REFLECTION]: {
            yIndex: 1,
            xPosition: 8,
            zOffset: 3.5
        }
    },
    [FURNITURE]: {
        [LIZ_PILLOWS]: {
            yIndex: 5,
            xPosition: 5,
            zOffset: 1.55
        },
        [LIZ_PILLOWS_REFLECTION]: {
            yIndex: 2,
            xPosition: 5,
            zOffset: 4.65
        },
        [LIZ_PILLOWS_PILE]: {
            yIndex: 4,
            xPosition: 9
        },
        [LIZ_PILLOWS_PILE_REFLECTION]: {
            yIndex: 1,
            xPosition: 9,
            zOffset: 4
        }
    },
    [PANEL]: {
        [LIZ_BED]: {
            yIndex: 5,
            xPosition: 5,
            scaleFactor: 0.25
        }
    }
}

export const THINGS_LIZ_BED_LOOK_BACK = {
    [FIXTURE]: {
        [BENNETT_SHOE]: {
            yIndex: 4,
            xPosition: 9
        },
        [BENNETT_SHOE_REFLECTION]: {
            yIndex: 2,
            xPosition: 9,
            zOffset: 5.5,
            rotate: 345
        }
    }
}

export const THINGS_LIZ_BED_VEGAN = {
    [FIXTURE]: {
        [LIZ_PHONE_BASE]: {
            yIndex: 4,
            xPosition: 2
        },
        [LIZ_PHONE_BASE_REFLECTION]: {
            yIndex: 2,
            xPosition: 2,
            zOffset: 6.5
        }
    },
    [PANEL]: {
        [PHONE_CALL_PANEL]: {
            yIndex: 3,
            xPosition: 9.5,
            scaleFactor: 0.325
        }
    }
}
