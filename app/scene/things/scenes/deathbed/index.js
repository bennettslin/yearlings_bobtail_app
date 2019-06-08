import {
    CUTOUTS,
    FIXTURES,
    FURNITURES,
    PANELS
} from 'constants/scene'
import { IV_DRIP } from '../../keys/cutouts'
import { HOSPITAL_RECORD_PLAYER } from '../../keys/fixtures'
import {
    HOSPITAL_PILLOW,
    HOSPITAL_PILLOW_LOWERED
} from '../../keys/furniture'
import {
    DEATHBED_THOUGHT_PANEL,
    TENNIS_THOUGHT_PANEL,
    INVERSE_THOUGHT_PANEL,
    HOSPITAL_BED
} from '../../keys/panels'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: {
        [IV_DRIP]: {
            yIndex: 1,
            arrangement: {
                xPosition: 2,
                xWidth: 1,
                zHeight: 4
            }
        }
    },
    [FIXTURES]: {
        [HOSPITAL_RECORD_PLAYER]: {
            yIndex: 3,
            arrangement: {
                xPosition: 1,
                xWidth: 1.5,
                zHeight: 0.5
            }
        }
    },
    [PANELS]: {
        [HOSPITAL_BED]: {
            yIndex: 5,
            arrangement: {
                xPosition: 9,
                xWidth: 1,
                zHeight: 0.5
            }
        }
    }
}

export const THINGS_DEATHBED_CREMATED = {
    [FURNITURES]: {
        [HOSPITAL_PILLOW]: {
            yIndex: 3,
            arrangement: {
                xPosition: 2.5,
                xWidth: 4,
                zHeight: 1
            }
        }
    },
    [PANELS]: {
        [DEATHBED_THOUGHT_PANEL]: {
            yIndex: 0,
            arrangement: {
                xPosition: 4,
                xWidth: 8,
                zHeight: 6
            }
        },
        [TENNIS_THOUGHT_PANEL]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 5,
                zHeight: 4
            }
        }
    }
}

export const THINGS_DEATHBED_DREAM = {
    [FURNITURES]: {
        [HOSPITAL_PILLOW_LOWERED]: {
            yIndex: 3,
            arrangement: {
                xPosition: 2.5,
                xWidth: 4,
                zHeight: 1
            }
        }
    },
    [PANELS]: {
        [INVERSE_THOUGHT_PANEL]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
