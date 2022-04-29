import {
    BUBBLE,
    CUTOUT,
    DOOR,
    FIXTURE,
    PANEL,
    PUPPET,
} from '../../../../../src/constants/scene/things'
import {
    BUBBLE_LARGE__DISHROOM,
    BUBBLE_LARGE__REUNION,
    BUBBLE_LARGE__TCHOTCHKES,
    BUBBLE_MEDIUM__DISHROOM,
    BUBBLE_MEDIUM__REUNION,
    BUBBLE_MEDIUM__TCHOTCHKES,
    BUBBLE_SMALL__DISHROOM,
    BUBBLE_SMALL__REUNION,
    BUBBLE_SMALL__TCHOTCHKES,
    KHARI_SPEECH_ATTACK,
    LIZ_SPEECH_DEFENCE,
    LIZ_THOUGHT_BUSING,
    LIZ_THOUGHT_DINING,
    LIZ_THOUGHT_DISHROOM,
    LIZ_THOUGHT_REUNION,
} from '../../../../../src/constants/scene/things/bubbles'
import {
    CAT_FOOD_DISHES,
    CAT_LITTER_BOX,
    CYPRESS_DOUBLE__LIZ_COUCH,
    CYPRESS_SINGLE__LIZ_COUCH,
    HINDU_SHRINE,
    TRAFFIC_LIGHT_REAR,
} from '../../../../../src/constants/scene/things/cutouts'
import {
    LIZ_BLINDS_INSIDE,
    LIZ_BLINDS_INSIDE_OPEN,
    LIZ_DOOR,
    LIZ_DOOR_OPEN,
    LIZ_GATE_INSIDE,
} from '../../../../../src/constants/scene/things/doors'
import { TCHOTCHKES } from '../../../../../src/constants/scene/things/fixtures'
import {
    LIZ_COUCH__ROOM,
    LIZ_OTTOMAN,
} from '../../../../../src/constants/scene/things/panels'
import {
    OPAL_COUCH__ROOM,
    OPAL_GAZING,
    PEACOCK,
    PEAHEN,
} from '../../../../../src/constants/scene/things/puppets'
import {
    BUBBLE_LARGE_CONFIG,
    BUBBLE_MEDIUM_CONFIG,
    BUBBLE_SMALL_CONFIG,
} from '../../sharedConfigs'

export default {
    [CUTOUT]: {
        [CAT_FOOD_DISHES]: {
            yIndex: 2,
            xPosition: 6.5,
        },
        [CAT_LITTER_BOX]: {
            yIndex: 2,
            xPosition: 8.25,
        },
        [CYPRESS_DOUBLE__LIZ_COUCH]: {
            yIndex: 1,
            xPosition: 10.5,
            flipHorizontal: true,
        },
        [CYPRESS_SINGLE__LIZ_COUCH]: {
            yIndex: 1,
            xPosition: 0.5,
            flipHorizontal: true,
        },
        // TODO: Need to account for position in thought scene.
        [HINDU_SHRINE]: {
            yIndex: 2,
            xPosition: 2,
            zOffset: 4.5,
        },
        [TRAFFIC_LIGHT_REAR]: {
            xPosition: 1.5,
            zOffset: -3,
        },
    },
    [DOOR]: {
        [LIZ_BLINDS_INSIDE]: {
            yIndex: 2,
            xPosition: 6,
            zOffset: 1.75,
        },
        [LIZ_BLINDS_INSIDE_OPEN]: {
            yIndex: 2,
            xPosition: 6,
            zOffset: 1.75,
        },
        [LIZ_DOOR]: {
            yIndex: 5,
            xPosition: 10.16,
            counterpart: LIZ_DOOR_OPEN,
        },
        [LIZ_DOOR_OPEN]: {
            yIndex: 5,
            xPosition: 8.875,
            counterpart: LIZ_DOOR,
        },
        [LIZ_GATE_INSIDE]: {
            yIndex: 0,
            xPosition: 6,
            zOffset: -0.08,
        },
    },
    [PANEL]: {
        [LIZ_COUCH__ROOM]: {
            yIndex: 5,
            xPosition: 2.075,
        },
        [LIZ_OTTOMAN]: {
            yIndex: 5,
            xPosition: 8.5,
        },
    },
}

export const THINGS_LIZ_COUCH_TCHOTCHKES = {
    [BUBBLE]: {
        [BUBBLE_LARGE__TCHOTCHKES]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 3.45,
            zOffset: 2.53,
        },
        [BUBBLE_MEDIUM__TCHOTCHKES]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 4.07,
            zOffset: 2.23,
        },
        [BUBBLE_SMALL__TCHOTCHKES]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 4.55,
            zOffset: 2.3,
        },
        [LIZ_THOUGHT_DINING]: {
            yIndex: 5,
            xPosition: 3.3,
            zOffset: 3.5,
        },
        [LIZ_THOUGHT_BUSING]: {
            yIndex: 5,
            xPosition: 7.7,
            zOffset: 2.7,
        },
    },
    [FIXTURE]: {
        [TCHOTCHKES]: {
            yIndex: 4,
            xPosition: 6.6,
            zOffset: -0.2,
            layerYIndex: 5,
        },
    },
    [PUPPET]: {
        [OPAL_COUCH__ROOM]: {
            yIndex: 3,
            xPosition: 1,
        },
    },
}

export const THINGS_LIZ_COUCH_OPENING = {
    [BUBBLE]: {
        [BUBBLE_LARGE__DISHROOM]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 4.95,
            zOffset: 5.52,
        },
        [BUBBLE_MEDIUM__DISHROOM]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 5.62,
            zOffset: 5.27,
        },
        [BUBBLE_SMALL__DISHROOM]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 5.75,
            zOffset: 4.97,
        },
        [LIZ_THOUGHT_DISHROOM]: {
            yIndex: 5,
            xPosition: 2.82,
            zOffset: 3.08,
        },
    },
}

export const THINGS_LIZ_COUCH_DEFENDING = {
    [BUBBLE]: {
        [KHARI_SPEECH_ATTACK]: {
            yIndex: 5,
            xPosition: 5.9,
            zOffset: 3.05,
            layerYIndex: 4,
        },
        [LIZ_SPEECH_DEFENCE]: {
            yIndex: 5,
            xPosition: 5,
            zOffset: 2.9,
            layerYIndex: 4,
        },
    },
}

export const THINGS_LIZ_COUCH_NOT_HUNGRY = {
    [BUBBLE]: {
        [BUBBLE_LARGE__REUNION]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 5,
            zOffset: 2.1,
        },
        [BUBBLE_MEDIUM__REUNION]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 4.38,
            zOffset: 1.78,
        },
        [BUBBLE_SMALL__REUNION]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 3.93,
            zOffset: 1.8,
        },
        [LIZ_THOUGHT_REUNION]: {
            yIndex: 5,
            xPosition: 4.28,
            zOffset: 2.9,
            layerYIndex: 4,
        },
    },
}

export const THINGS_LIZ_COUCH_ASLEEP = {
    [PUPPET]: {
        [OPAL_GAZING]: {
            yIndex: 2,
            xPosition: 7.75,
            zOffset: 2.05,
        },
    },
}

export const THINGS_LIZ_COUCH_PEAFOWL = {
    [PUPPET]: {
        [PEACOCK]: {
            yIndex: 4,
            xPosition: 8,
        },
        [PEAHEN]: {
            yIndex: 4,
            xPosition: 6,
        },
    },
}
