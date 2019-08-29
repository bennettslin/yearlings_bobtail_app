import {
    FIXTURE,
    FURNITURE,
    PANEL
} from '../../../constants/scene'
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
} from '../../../constants/scene/things/furniture'
import {
    PHONE_CALL_PANEL,
    LIZ_BED
} from '../../../constants/scene/things/panels'
import { LIZ_PHONE__SHARED } from '../../shared'

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
            xPosition: 9
        },
        [LIZ_PILLOWS_PILE_REFLECTION]: {
            yIndex: 2,
            xPosition: 9,
            zOffset: 5.5
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
            arrangement: {
                xPosition: 2,
                xWidth: 1,
                zHeight: 1
            }
        },
        [BENNETT_SHOE_REFLECTION]: {
            yIndex: 4,
            arrangement: {
                xPosition: 2,
                xWidth: 1,
                zHeight: 1
            }
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
