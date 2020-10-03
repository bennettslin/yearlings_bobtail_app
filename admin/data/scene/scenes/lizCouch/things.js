import {
    BUBBLE,
    DOOR,
    FIXTURE,
    PANEL,
    PUPPET
} from '../../../../../app/constants/scene/things'
import {
    KHARI_SPEECH_ATTACK,
    LIZ_SPEECH_DEFENCE,
    BUBBLE_SMALL__LIZ,
    BUBBLE_MEDIUM__LIZ,
    BUBBLE_LARGE__LIZ,
    LIZ_THOUGHT_REUNION
} from '../../../../../app/constants/scene/things/bubbles'
import {
    LIZ_BLINDS_INSIDE,
    LIZ_BLINDS_INSIDE_OPEN,
    LIZ_DOOR,
    LIZ_DOOR_OPEN,
    LIZ_GATE_INSIDE
} from '../../../../../app/constants/scene/things/doors'
import { TCHOTCHKES } from '../../../../../app/constants/scene/things/fixtures'
import { LIZ_COUCH__ROOM } from '../../../../../app/constants/scene/things/panels'
import {
    OPAL_COUCH__ROOM,
    OPAL_GAZING,
    PEACOCK,
    PEAHEN
} from '../../../../../app/constants/scene/things/puppets'

export default {
    [DOOR]: {
        [LIZ_BLINDS_INSIDE]: {
            yIndex: 2,
            xPosition: 6,
            zOffset: 2.25
        },
        [LIZ_BLINDS_INSIDE_OPEN]: {
            yIndex: 2,
            xPosition: 6,
            zOffset: 2.25
        },
        [LIZ_DOOR]: {
            yIndex: 5,
            xPosition: 10.16
        },
        [LIZ_DOOR_OPEN]: {
            yIndex: 5,
            xPosition: 8.875
        },
        [LIZ_GATE_INSIDE]: {
            yIndex: -1,
            xPosition: 6,
            zOffset: 0.7
        }
    },
    [PANEL]: {
        [LIZ_COUCH__ROOM]: {
            yIndex: 5,
            xPosition: 2.075,
            scaleFactor: 0.23
        }
    }
}

export const THINGS_LIZ_COUCH_TCHOTCHKES = {
    [FIXTURE]: {
        [TCHOTCHKES]: {
            yIndex: 4,
            xPosition: 6.6,
            zOffset: -0.2,
            layerYIndex: 5
        }
    },
    [PUPPET]: {
        [OPAL_COUCH__ROOM]: {
            yIndex: 3,
            xPosition: 1,
            scaleFactor: 0.2
        }
    }
}

export const THINGS_LIZ_COUCH_DEFENDING = {
    [BUBBLE]: {
        [KHARI_SPEECH_ATTACK]: {
            yIndex: 5,
            xPosition: 5.6,
            zOffset: 3.25
        },
        [LIZ_SPEECH_DEFENCE]: {
            yIndex: 5,
            xPosition: 6.2,
            zOffset: 3.4
        }
    }
}

export const THINGS_LIZ_COUCH_NOT_HUNGRY = {
    [BUBBLE]: {
        [BUBBLE_LARGE__LIZ]: {
            yIndex: 5,
            xPosition: 5.1,
            zOffset: 3.5,
            scaleFactor: 0.3,
            layerYIndex: 4
        },
        [BUBBLE_MEDIUM__LIZ]: {
            yIndex: 5,
            xPosition: 4.9,
            zOffset: 2.95,
            scaleFactor: 0.3,
            layerYIndex: 4
        },
        [BUBBLE_SMALL__LIZ]: {
            yIndex: 5,
            xPosition: 4.46,
            zOffset: 3,
            scaleFactor: 0.3,
            layerYIndex: 4
        },
        [LIZ_THOUGHT_REUNION]: {
            yIndex: 5,
            xPosition: 2.8,
            zOffset: 3.5,
            layerYIndex: 4
        }
    }
}

export const THINGS_LIZ_COUCH_ASLEEP = {
    [PUPPET]: {
        [OPAL_GAZING]: {
            yIndex: 2,
            xPosition: 7.85,
            zOffset: 2.5,
            scaleFactor: 0.2,
            flipHorizontal: true
        }
    }
}

export const THINGS_LIZ_COUCH_PEAFOWL = {
    [PUPPET]: {
        [PEACOCK]: {
            yIndex: 3,
            xPosition: 8,
            scaleFactor: 0.25
        },
        [PEAHEN]: {
            yIndex: 3,
            xPosition: 6,
            scaleFactor: 0.25
        }
    }
}
