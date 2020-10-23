import {
    BUBBLE,
    DOOR,
    FIXTURE,
    PANEL,
    PUPPET
} from '../../../../../app/constants/scene/things'
import {
    BUBBLE_SMALL__TCHOTCHKES,
    BUBBLE_MEDIUM__TCHOTCHKES,
    BUBBLE_LARGE__TCHOTCHKES,
    LIZ_THOUGHT_DINING,
    LIZ_THOUGHT_BUSING,
    BUBBLE_SMALL__DISHROOM,
    BUBBLE_MEDIUM__DISHROOM,
    BUBBLE_LARGE__DISHROOM,
    LIZ_THOUGHT_DISHROOM,
    KHARI_SPEECH_ATTACK,
    LIZ_SPEECH_DEFENCE,
    BUBBLE_SMALL__REUNION,
    BUBBLE_MEDIUM__REUNION,
    BUBBLE_LARGE__REUNION,
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
import {
    BUBBLE_LARGE_CONFIG,
    BUBBLE_MEDIUM_CONFIG,
    BUBBLE_SMALL_CONFIG
} from '../../sharedConfigs'

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
            yIndex: 0,
            xPosition: 6,
            scaleFactor: 0.78
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
    [BUBBLE]: {
        [BUBBLE_LARGE__TCHOTCHKES]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 3.45,
            zOffset: 2.53
        },
        [BUBBLE_MEDIUM__TCHOTCHKES]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 4.1,
            zOffset: 2.26
        },
        [BUBBLE_SMALL__TCHOTCHKES]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 4.55,
            zOffset: 2.3
        },
        [LIZ_THOUGHT_DINING]: {
            yIndex: 5,
            xPosition: 3.3,
            zOffset: 3.5
        },
        [LIZ_THOUGHT_BUSING]: {
            yIndex: 5,
            xPosition: 7.7,
            zOffset: 2.7
        }
    },
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

export const THINGS_LIZ_COUCH_OPENING = {
    [BUBBLE]: {
        [BUBBLE_LARGE__DISHROOM]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 4.95,
            zOffset: 5.55
        },
        [BUBBLE_MEDIUM__DISHROOM]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 5.62,
            zOffset: 5.3
        },
        [BUBBLE_SMALL__DISHROOM]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 5.75,
            zOffset: 5
        },
        [LIZ_THOUGHT_DISHROOM]: {
            yIndex: 5,
            xPosition: 2.8,
            zOffset: 3.1
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
            xPosition: 6.1,
            zOffset: 3.4
        }
    }
}

export const THINGS_LIZ_COUCH_NOT_HUNGRY = {
    [BUBBLE]: {
        [BUBBLE_LARGE__REUNION]: {
            ...BUBBLE_LARGE_CONFIG,
            xPosition: 5.1,
            zOffset: 2.1
        },
        [BUBBLE_MEDIUM__REUNION]: {
            ...BUBBLE_MEDIUM_CONFIG,
            xPosition: 4.45,
            zOffset: 1.8
        },
        [BUBBLE_SMALL__REUNION]: {
            ...BUBBLE_SMALL_CONFIG,
            xPosition: 4,
            zOffset: 1.8
        },
        [LIZ_THOUGHT_REUNION]: {
            yIndex: 5,
            xPosition: 4.5,
            zOffset: 3,
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
