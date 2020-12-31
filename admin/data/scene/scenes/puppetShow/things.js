import {
    BUBBLE,
    FLAT,
    PANEL,
    PUPPET,
} from '../../../../../app/constants/scene/things'
import {
    SKETCH_TOGETHER,
    SKETCHBOOK__TOGETHER,
    SKETCH_APART,
    SKETCHBOOK__APART,
} from '../../../../../app/constants/scene/things/bubbles'
import {
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAIN_LEFT,
    TAIWAN_MOUNTAIN_RIGHT,
} from '../../../../../app/constants/scene/things/flats'
import {
    TAIWAN_BRIDGE,
    TAIWAN_HAZE__CLOUD,
    TAIWAN_HAZE__FOG,
} from '../../../../../app/constants/scene/things/panels'
import {
    PUPPET_BENNETT_BEGIN,
    PUPPET_ANITA_BEGIN,
    PUPPET_CHRISTOPHER_BEGIN,
    PUPPET_FATHER_BEGIN,
    PUPPET_MOTHER_BEGIN,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_ANITA_MIDDLE,
    PUPPET_CHRISTOPHER_MIDDLE,
    PUPPET_FATHER_MIDDLE,
    PUPPET_MOTHER_MIDDLE,
    PUPPET_BENNETT_END,
    PUPPET_ANITA_END,
    PUPPET_CHRISTOPHER_END,
    PUPPET_FATHER_END,
    PUPPET_MOTHER_END,
} from '../../../../../app/constants/scene/things/puppets'
import { PUPPET_FAMILY_CONFIG, SKETCH_CONFIG } from '../../sharedConfigs'

export default {
    [FLAT]: {
        [TAIWAN_MOUNTAINS_BRIDGED]: {
            yIndex: 3,
            xPosition: 5.5,
            scaleFactor: 0.575,
        },
        [TAIWAN_MOUNTAIN_LEFT]: {
            yIndex: 5,
            xPosition: 1.3,
            scaleFactor: 0.4,
        },
        [TAIWAN_MOUNTAIN_RIGHT]: {
            yIndex: 5,
            xPosition: 9.2,
            scaleFactor: 0.4,
        },
    },
    [PANEL]: {
        [TAIWAN_BRIDGE]: {
            yIndex: 4,
            xPosition: 5.5,
            zOffset: 3.3,
            scaleFactor: 0.48,
        },
        [TAIWAN_HAZE__CLOUD]: {
            yIndex: 2,
            xPosition: 5.5,
            scaleFactor: 0.5,
            trimBottom: 0.3,
        },
        [TAIWAN_HAZE__FOG]: {
            yIndex: 4,
            xPosition: 5.5,
            scaleFactor: 0.5,
            trimBottom: 0.6,
            flipHorizontal: true,
        },
    },
}

export const THINGS_PUPPET_SHOW_BEGIN = {
    [PUPPET]: {
        [PUPPET_BENNETT_BEGIN]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 1.4,
            zOffset: 3.48,
        },
        [PUPPET_CHRISTOPHER_BEGIN]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 1.68,
            zOffset: 3.455,
        },
        [PUPPET_MOTHER_BEGIN]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 1.925,
            zOffset: 3.43,
        },
        [PUPPET_ANITA_BEGIN]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 2.175,
            zOffset: 3.4275,
        },
        [PUPPET_FATHER_BEGIN]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 2.55,
            zOffset: 3.425,
        },
    },
}

export const THINGS_PUPPET_SHOW_MIDDLE = {
    [BUBBLE]: {
        [SKETCHBOOK__TOGETHER]: {
            yIndex: 5,
            xPosition: 8.25,
            zOffset: 1.5,
            rotate: 270,
            scaleFactor: 0.25,
        },
        [SKETCH_TOGETHER]: {
            ...SKETCH_CONFIG,
            xPosition: 8.25,
            zOffset: 2.375,
            scaleFactor: 0.35,
        },
    },
    [PUPPET]: {
        [PUPPET_BENNETT_MIDDLE]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 3,
            zOffset: 3.435,
        },
        [PUPPET_MOTHER_MIDDLE]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 3.8,
            zOffset: 3.345,
        },
        [PUPPET_CHRISTOPHER_MIDDLE]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 4.1,
            zOffset: 3.335,
        },
        [PUPPET_FATHER_MIDDLE]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 4.5,
            zOffset: 3.315,
        },
        [PUPPET_ANITA_MIDDLE]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 5,
            zOffset: 3.295,
        },
    },
}

export const THINGS_PUPPET_SHOW_END = {
    [BUBBLE]: {
        [SKETCHBOOK__APART]: {
            yIndex: 5,
            xPosition: 2.75,
            zOffset: 1.5,
            rotate: 270,
            scaleFactor: 0.25,
        },
        [SKETCH_APART]: {
            ...SKETCH_CONFIG,
            xPosition: 2.75,
            zOffset: 2.5,
            scaleFactor: 0.4,
        },
    },
    [PUPPET]: {
        [PUPPET_BENNETT_END]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 6,
            zOffset: 3.3,
        },
        [PUPPET_FATHER_END]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 8,
            zOffset: 3.425,
        },
        [PUPPET_ANITA_END]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 8.48,
            zOffset: 3.425,
        },
        [PUPPET_CHRISTOPHER_END]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 8.67,
            zOffset: 3.4225,
        },
        [PUPPET_MOTHER_END]: {
            ...PUPPET_FAMILY_CONFIG,
            xPosition: 8.9,
            zOffset: 3.42,
        },
    },
}
