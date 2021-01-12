import {
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
} from '../../../../../app/constants/scene/things'
import {
    SKETCH_DOGS_ROCKET,
    SKETCHBOOK__DOGS_ROCKET,
} from '../../../../../app/constants/scene/things/bubbles'
import {
    TINTIN_POSTER,
    BLOOM_COUNTY_POSTER,
    EARTH__ROCKET,
    DOGS_ROCKET,
    EARTH__STATION,
    SPACE_STATION,
} from '../../../../../app/constants/scene/things/cardboards'
import {
    LEMON_TREE__BEDROOM,
    ROSEBUSH_SLANTED_DOUBLE,
    ROSEBUSH_SLANTED_SINGLE,
} from '../../../../../app/constants/scene/things/cutouts'
import {
    BEDROOM_BLINDS,
    BEDROOM_BLINDS_OPEN,
    BEDROOM_FENCE,
} from '../../../../../app/constants/scene/things/doors'
import {
    LETTER_SCRAPS__CHRISTOPHER,
    TORN_MAGAZINES__CHRISTOPHER,
    CHRISTOPHER_LETTERS,
    BEDROOM_LAMP__BED,
    BEDROOM_LAMP__DESK,
    LETTER_SCRAPS__BENNETT,
    TORN_MAGAZINES__BENNETT,
    BENNETT_LETTERS,
    RED_ENVELOPE_MONEY,
    BEYONDER_ENVELOPE,
} from '../../../../../app/constants/scene/things/fixtures'
import {
    BEDROOM_SIREN,
    BEDROOM_BUS,
} from '../../../../../app/constants/scene/things/flats'
import { CAPTAIN_BED_PILLOW } from '../../../../../app/constants/scene/things/furnitures'
import {
    BEDROOM_DESK,
    BEDROOM_STOOL,
    CAPTAIN_BED,
} from '../../../../../app/constants/scene/things/panels'
import { SKETCH_CONFIG } from '../../sharedConfigs'

export default {
    [CARDBOARD]: {
        [TINTIN_POSTER]: {
            yIndex: 5,
            xPosition: 10,
            zOffset: 3.5,
            scaleFactor: 0.225,
            perspective: 140,
            rotate: -15,
            rotateY: 300,
            skewX: -15,
            skewY: 9,
        },
        [BLOOM_COUNTY_POSTER]: {
            yIndex: 5,
            xPosition: 10,
            zOffset: 3.5,
            scaleFactor: 0.225,
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
            scaleFactor: 0.7,
        },
        [ROSEBUSH_SLANTED_DOUBLE]: {
            xPosition: 1.75,
            zOffset: -0.5,
            scaleFactor: 0.3,
        },
        [ROSEBUSH_SLANTED_SINGLE]: {
            xPosition: 10.75,
            zOffset: -0.5,
            scaleFactor: 0.3,
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
        },
        [BEDROOM_BLINDS_OPEN]: {
            yIndex: 3,
            xPosition: 2.8,
            zOffset: 0.125,
        },
    },
    [FIXTURE]: {
        [BEDROOM_LAMP__DESK]: {
            yIndex: 2,
            xPosition: 3.6,
            zOffset: -0.04,
            layerYIndex: 3,
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
            xPosition: 2,
            zOffset: 2.25,
        },
    },
}

export const THINGS_BEDROOM_ASLEEP = {
    [CARDBOARD]: {
        [EARTH__ROCKET]: {
            yIndex: 4,
            xPosition: 1.9,
            zOffset: 1.7,
            scaleFactor: 0.6,
            rotate: 180,
        },
        [DOGS_ROCKET]: {
            yIndex: 4,
            xPosition: 2.5,
            zOffset: 2.9,
            scaleFactor: 0.25,
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
            scaleFactor: 0.2,
        },
        [SPACE_STATION]: {
            yIndex: 4,
            xPosition: 8,
            zOffset: 1.5,
            scaleFactor: 0.35,
        },
    },
}
