import {
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
} from '../../../../../src/constants/scene/things'
import {
    SKETCH_DOGS_ROCKET,
    SKETCHBOOK__DOGS_ROCKET,
} from '../../../../../src/constants/scene/things/bubbles'
import {
    DOGS_ROCKET,
    DOGS_SPACE_STATION,
    EARTH__ROCKET,
    EARTH__STATION,
    POSTER_BLOOM_COUNTY,
    POSTER_TINTIN,
} from '../../../../../src/constants/scene/things/cardboards'
import {
    LEMON_TREE__BEDROOM,
    ROSEBUSH_SLANTED_DOUBLE,
    ROSEBUSH_SLANTED_SINGLE,
} from '../../../../../src/constants/scene/things/cutouts'
import {
    BEDROOM_BLINDS,
    BEDROOM_BLINDS_OPEN,
    BEDROOM_FENCE,
} from '../../../../../src/constants/scene/things/doors'
import {
    BEDROOM_LAMP__BED,
    BEDROOM_LAMP__DESK,
    BEETHOVEN_BUST__BEDROOM,
    BENNETT_LETTERS,
    BEYONDER_ENVELOPE,
    CHRISTOPHER_LETTERS,
    FLOWER_BULBS,
    LETTER_SCRAPS__BENNETT,
    LETTER_SCRAPS__CHRISTOPHER,
    RED_ENVELOPE_MONEY,
    TORN_MAGAZINES__BENNETT,
    TORN_MAGAZINES__CHRISTOPHER,
} from '../../../../../src/constants/scene/things/fixtures'
import {
    BEDROOM_SIREN,
    BEDROOM_BUS,
} from '../../../../../src/constants/scene/things/flats'
import { CAPTAIN_BED_PILLOW } from '../../../../../src/constants/scene/things/furnitures'
import {
    BEDROOM_DESK,
    BEDROOM_STOOL,
    CAPTAIN_BED,
} from '../../../../../src/constants/scene/things/panels'
import { SKETCH_CONFIG } from '../../sharedConfigs'

export default {
    [CARDBOARD]: {
        [POSTER_TINTIN]: {
            yIndex: 5,
            xPosition: 10,
            zOffset: 3.5,
            perspective: 140,
            rotate: -15,
            rotateY: 300,
            skewX: -15,
            skewY: 9,
        },
        [POSTER_BLOOM_COUNTY]: {
            yIndex: 5,
            xPosition: 10,
            zOffset: 3.5,
            perspective: 140,
            rotate: -15,
            rotateY: 300,
            skewX: -15,
            skewY: 9,
        },
    },
    [CUTOUT]: {
        [LEMON_TREE__BEDROOM]: {
            xPosition: 6.9,
            zOffset: -0.5,
        },
        [ROSEBUSH_SLANTED_DOUBLE]: {
            xPosition: 1.75,
            zOffset: -0.5,
        },
        [ROSEBUSH_SLANTED_SINGLE]: {
            xPosition: 10.75,
            zOffset: -0.5,
        },
    },
    [DOOR]: {
        [BEDROOM_FENCE]: {
            zOffset: -0.5,
        },
        [BEDROOM_BLINDS]: {
            yIndex: 3,
            xPosition: 2.8,
            zOffset: 0.125,
            counterpart: BEDROOM_BLINDS_OPEN,
        },
        [BEDROOM_BLINDS_OPEN]: {
            yIndex: 3,
            xPosition: 2.8,
            zOffset: 0.125,
            counterpart: BEDROOM_BLINDS,
        },
    },
    [FIXTURE]: {
        [BEETHOVEN_BUST__BEDROOM]: {
            yIndex: 3,
            xPosition: 1.9,
            zOffset: -0.04,
            scaleFactor: 0.33,
        },
        [BEDROOM_LAMP__DESK]: {
            yIndex: 2,
            xPosition: 3.6,
            zOffset: -0.04,
            layerYIndex: 3,
        },
        [FLOWER_BULBS]: {
            yIndex: 3,
            xPosition: 2.9,
            zOffset: -0.01,
        },
    },
    [FURNITURE]: {
        [CAPTAIN_BED_PILLOW]: {
            yIndex: 2,
            xPosition: 7,
        },
    },
    [PANEL]: {
        [BEDROOM_DESK]: {
            yIndex: 4,
            xPosition: 3.15,
            zOffset: 0.01,
            layerYIndex: 3,
        },
        [BEDROOM_STOOL]: {
            yIndex: 5,
            xPosition: 4.6,
        },
        [CAPTAIN_BED]: {
            yIndex: 5,
            xPosition: 7.5,
        },
    },
}

export const THINGS_BEDROOM_ENRAGED = {
    [FIXTURE]: {
        [LETTER_SCRAPS__CHRISTOPHER]: {
            yIndex: 4,
            xPosition: 5.3,
        },
        [TORN_MAGAZINES__CHRISTOPHER]: {
            yIndex: 5,
            xPosition: 3,
            zOffset: -0.1,
        },
        [CHRISTOPHER_LETTERS]: {
            yIndex: 5,
            xPosition: 5.1,
        },
    },
}

export const THINGS_BEDROOM_FEARFUL = {
    [FLAT]: {
        [BEDROOM_SIREN]: {
            xPosition: 2,
            zOffset: 2.25,
        },
    },
}

export const THINGS_BEDROOM_GUILTY = {
    [BUBBLE]: {
        [SKETCHBOOK__DOGS_ROCKET]: {
            yIndex: 5,
            xPosition: 3,
            zOffset: 1.5,
        },
        [SKETCH_DOGS_ROCKET]: {
            ...SKETCH_CONFIG,
            xPosition: 2.85,
            zOffset: 2.15,
        },
    },
    [FIXTURE]: {
        [BEDROOM_LAMP__BED]: {
            yIndex: 4,
            xPosition: 9.3,
            zOffset: -0.05,
            layerYIndex: 5,
        },
        [LETTER_SCRAPS__BENNETT]: {
            yIndex: 4,
            xPosition: 6,
            zOffset: -0.07,
            layerYIndex: 5,
        },
        [TORN_MAGAZINES__BENNETT]: {
            yIndex: 4,
            xPosition: 5.8,
            layerYIndex: 5,
        },
        [BENNETT_LETTERS]: {
            yIndex: 5,
            xPosition: 7.2,
            zOffset: -0.05,
        },
    },
}

export const THINGS_BEDROOM_FEIGNING = {
    [FIXTURE]: {
        [RED_ENVELOPE_MONEY]: {
            yIndex: 5,
            xPosition: 5.4,
        },
    },
    [FLAT]: {
        [BEDROOM_BUS]: {
            xPosition: 2.3,
            zOffset: 2,
        },
    },
}

export const THINGS_BEDROOM_ASLEEP = {
    [CARDBOARD]: {
        [EARTH__ROCKET]: {
            yIndex: 4,
            xPosition: 1.7,
            zOffset: 1.6,
            rotate: 180,
        },
        [DOGS_ROCKET]: {
            yIndex: 4,
            xPosition: 2.5,
            zOffset: 2.9,
        },
    },
}

export const THINGS_BEDROOM_SHAKEN = {
    [FIXTURE]: {
        [BEYONDER_ENVELOPE]: {
            yIndex: 3,
            xPosition: 2,
            zOffset: -0.1,
        },
    },
    [CARDBOARD]: {
        [EARTH__STATION]: {
            yIndex: 4,
            xPosition: 6.7,
            zOffset: 5.5,
            scaleFactor: 0.33,
        },
        [DOGS_SPACE_STATION]: {
            yIndex: 4,
            xPosition: 8,
            zOffset: 1.5,
        },
    },
}
