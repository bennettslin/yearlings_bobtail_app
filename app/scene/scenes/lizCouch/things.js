import {
    BUBBLE,
    DOOR,
    FIXTURE,
    PANEL,
    PUPPET
} from '../../../constants/scene/things'
import {
    KHARI_ATTACK_SPEECH,
    LIZ_DEFENCE_SPEECH,
    BUBBLE_SMALL__LIZ,
    BUBBLE_MEDIUM__LIZ,
    BUBBLE_LARGE__LIZ,
    LIZ_THOUGHT
} from '../../../constants/scene/things/bubbles'
import {
    LIZ_BLINDS_INSIDE,
    LIZ_BLINDS_INSIDE_OPEN,
    LIZ_DOOR,
    LIZ_DOOR_OPEN,
    LIZ_GATE_INSIDE
} from '../../../constants/scene/things/doors'
import { TCHOTCHKES } from '../../../constants/scene/things/fixtures'
import { LIZ_COUCH } from '../../../constants/scene/things/panels'
import {
    OPAL_COUCH,
    OPAL_COUCH_FUTURE,
    OPAL_GAZING,
    PEACOCK,
    PEAHEN
} from '../../../constants/scene/things/puppets'

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
        [LIZ_COUCH]: {
            yIndex: 5,
            xPosition: 2.075,
            scaleFactor: 0.23
        }
    }
}

const OPAL_COUCH_CONFIG = {
    yIndex: 3,
    xPosition: 1,
    scaleFactor: 0.2
}

export const THINGS_LIZ_COUCH_TCHOTCHKES = {
    [FIXTURE]: {
        [TCHOTCHKES]: {
            yIndex: 5,
            xPosition: 6.5
        }
    },
    [PUPPET]: {
        [OPAL_COUCH]: OPAL_COUCH_CONFIG,
        [OPAL_COUCH_FUTURE]: OPAL_COUCH_CONFIG
    }
}

export const THINGS_LIZ_COUCH_DEFENDING = {
    [BUBBLE]: {
        [KHARI_ATTACK_SPEECH]: {
            yIndex: 5,
            xPosition: 5.5,
            zOffset: 3.5,
            scaleFactor: 0.4
        },
        [LIZ_DEFENCE_SPEECH]: {
            yIndex: 5,
            xPosition: 5.5,
            zOffset: 3.5,
            scaleFactor: 0.4
        }
    }
}

export const THINGS_LIZ_COUCH_NOT_HUNGRY = {
    [BUBBLE]: {
        [BUBBLE_SMALL__LIZ]: {
            yIndex: 5,
            xPosition: 3.4,
            zOffset: 2.4,
            scaleFactor: 0.4
        },
        [BUBBLE_MEDIUM__LIZ]: {
            yIndex: 5,
            xPosition: 3.75,
            zOffset: 2.5,
            scaleFactor: 0.4
        },
        [BUBBLE_LARGE__LIZ]: {
            yIndex: 5,
            xPosition: 4.5,
            zOffset: 2.5,
            scaleFactor: 0.4
        },
        [LIZ_THOUGHT]: {
            yIndex: 5,
            xPosition: 6.75,
            zOffset: 0.5,
            scaleFactor: 0.4
        }
    }
}

export const THINGS_LIZ_COUCH_ASLEEP = {
    [PUPPET]: {
        [OPAL_GAZING]: {
            yIndex: 2,
            xPosition: 7,
            zOffset: 2.5,
            scaleFactor: 0.2
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
