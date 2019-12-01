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
    LIZ_PHONE_BASE_REFLECTION
} from '../../../constants/scene/things/fixtures'
import {
    LIZ_PILLOWS_PILE,
    LIZ_PILLOWS_PILE_REFLECTION
} from '../../../constants/scene/things/furnitures'
import {
    PHONE_CALL_PANEL,
    LIZ_BED
} from '../../../constants/scene/things/panels'
import { LIZ_PHONE__SHARED } from '../../shared/household'
import {
    PILLOW_BOYFRIEND__SHARED,
    PILLOW_LIZ__SHARED
} from '../../shared/furniture'
import { SHADOW__SHARED } from '../../shared/props'
import { BENNETT } from '../../../constants/scene/actors'

const ARRANGEMENTS_THINGS = {
    [FIXTURE]: {
        [LIZ_PHONE]: {
            yIndex: 4,
            xPosition: 2,
            sharedStyle: LIZ_PHONE__SHARED
        },
        [LIZ_PHONE_REFLECTION]: {
            yIndex: 2,
            xPosition: 2,
            zOffset: 6.5,
            sharedStyle: LIZ_PHONE__SHARED
        }
    },
    [FURNITURE]: {
        [LIZ_PILLOWS_PILE]: {
            yIndex: 5,
            xPosition: 9,
            sharedStyle: [
                PILLOW_BOYFRIEND__SHARED,
                PILLOW_LIZ__SHARED
            ]
        },
        [LIZ_PILLOWS_PILE_REFLECTION]: {
            yIndex: 2,
            xPosition: 9,
            zOffset: 5.5,
            sharedStyle: [
                PILLOW_BOYFRIEND__SHARED,
                PILLOW_LIZ__SHARED
            ]
        }
    },
    [PANEL]: {
        [LIZ_BED]: {
            yIndex: 5,
            xPosition: 5,
            scaleFactor: 0.25,
            sharedStyle: SHADOW__SHARED
        }
    }
}

export const THINGS_LIZ_BED_LOOK_BACK = {
    [FIXTURE]: {
        [BENNETT_SHOE]: {
            yIndex: 4,
            xPosition: 9,
            sharedStyle: BENNETT
        },
        [BENNETT_SHOE_REFLECTION]: {
            yIndex: 2,
            xPosition: 9,
            zOffset: 5.5,
            rotate: 345,
            sharedStyle: BENNETT
        }
    }
}

export const THINGS_LIZ_BED_VEGAN = {
    [FIXTURE]: {
        [LIZ_PHONE_BASE]: {
            yIndex: 4,
            xPosition: 2,
            sharedStyle: LIZ_PHONE__SHARED
        },
        [LIZ_PHONE_BASE_REFLECTION]: {
            yIndex: 2,
            xPosition: 2,
            zOffset: 6.5,
            sharedStyle: LIZ_PHONE__SHARED
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

export default ARRANGEMENTS_THINGS
