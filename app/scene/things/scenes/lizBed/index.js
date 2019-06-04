import {
    FIXTURES,
    FURNITURES,
    PANELS
} from 'constants/scene'
import {
    LIZ_PHONE,
    LIZ_PHONE_REFLECTION,
    BLOODY_TOWEL,
    BLOODY_TOWEL_REFLECTION,
    BENNETT_SHOE,
    BENNETT_SHOE_REFLECTION,
    LIZ_PHONE_BASE,
    LIZ_PHONE_BASE_REFLECTION
} from '../../keys/fixtures'
import {
    LIZ_PILLOWS,
    LIZ_PILLOWS_REFLECTION
} from '../../keys/furniture'
import {
    PHONE_CALL_PANEL,
    LIZ_BED_PANEL
} from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [FIXTURES]: {
        [LIZ_PHONE]: {
            yIndex: 4,
            arrangement: {
                xPosition: 2,
                xWidth: 1,
                zHeight: 1
            }
        },
        [LIZ_PHONE_REFLECTION]: {
            yIndex: 2,
            arrangement: {
                xPosition: 2,
                xWidth: 1,
                zHeight: 1,
                zOffset: 6.5
            }
        }
    },
    [FURNITURES]: {
        [LIZ_PILLOWS]: {
            yIndex: 4,
            arrangement: {
                xPosition: 5,
                xWidth: 5,
                zHeight: 0.5
            }
        },
        [LIZ_PILLOWS_REFLECTION]: {
            yIndex: 2,
            arrangement: {
                xPosition: 5,
                xWidth: 5,
                zHeight: 1,
                zOffset: 5.5
            }
        }
    },
    [PANELS]: {
        [LIZ_BED_PANEL]: {
            yIndex: 5,
            arrangement: {
                xPosition: 9,
                xWidth: 1,
                zHeight: 0.5
            }
        }
    }
}

export const THINGS_LIZ_BED_AFTERGLOW = {
    [FIXTURES]: {
        [BLOODY_TOWEL]: {
            yIndex: 4,
            arrangement: {
                xPosition: 2,
                xWidth: 1,
                zHeight: 1
            }
        },
        [BLOODY_TOWEL_REFLECTION]: {
            yIndex: 4,
            arrangement: {
                xPosition: 2,
                xWidth: 1,
                zHeight: 1
            }
        }
    }
}

export const THINGS_LIZ_BED_LOOK_BACK = {
    [FIXTURES]: {
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
    [FIXTURES]: {
        [LIZ_PHONE_BASE]: {
            yIndex: 4,
            arrangement: {
                xPosition: 2,
                xWidth: 1,
                zHeight: 1
            }
        },
        [LIZ_PHONE_BASE_REFLECTION]: {
            yIndex: 2,
            arrangement: {
                xPosition: 2,
                xWidth: 1,
                zHeight: 1,
                zOffset: 6.5
            }
        }
    },
    [PANELS]: {
        [PHONE_CALL_PANEL]: {
            yIndex: 3,
            arrangement: {
                xPosition: 9,
                xWidth: 3,
                zHeight: 3
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
