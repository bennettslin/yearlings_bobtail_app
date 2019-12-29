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
    OPAL_GAZING,
    PEACOCK,
    PEAHEN
} from '../../../constants/scene/things/puppets'
import {
    OPAL__SHARED,
    PEAFOWL__SHARED
} from '../../sharedStyles/animals'
import {
    DOOR__SHARED,
    WINDOW__SHARED,
    LIZ_GATE__SHARED
} from '../../sharedStyles/home'
import {
    BANJO__SHARED,
    ACOUSTIC_GUITAR__SHARED,
    MICROPHONE__SHARED,
    MONITOR__SHARED
} from '../../sharedStyles/instruments'
import {
    AMY,
    BENNETT,
    LIZ
} from '../../../constants/scene/actors'
import { ALL_PEOPLE__SHARED } from '../../sharedStyles/people'
import {
    SHADOW__SHARED
} from '../../sharedStyles/props'

const ARRANGEMENTS_THINGS = {
    [DOOR]: {
        [LIZ_BLINDS_INSIDE]: {
            yIndex: 2,
            xPosition: 6,
            zOffset: 2.25,
            sharedStyle: WINDOW__SHARED
        },
        [LIZ_BLINDS_INSIDE_OPEN]: {
            yIndex: 2,
            xPosition: 6,
            zOffset: 2.25,
            sharedStyle: WINDOW__SHARED
        },
        [LIZ_DOOR]: {
            yIndex: 5,
            xPosition: 10.16,
            sharedStyle: DOOR__SHARED
        },
        [LIZ_DOOR_OPEN]: {
            yIndex: 5,
            xPosition: 8.875,
            sharedStyle: DOOR__SHARED
        },
        [LIZ_GATE_INSIDE]: {
            yIndex: 1,
            xPosition: 6,
            zOffset: -2,
            sharedStyle: LIZ_GATE__SHARED
        }
    },
    [PANEL]: {
        [LIZ_COUCH]: {
            yIndex: 5,
            xPosition: 2,
            scaleFactor: 0.27,
            sharedStyle: SHADOW__SHARED
        }
    }
}

export const THINGS_LIZ_COUCH_TCHOTCHKES = {
    [FIXTURE]: {
        [TCHOTCHKES]: {
            yIndex: 5,
            xPosition: 6.5
        }
    },
    [PUPPET]: {
        [OPAL_COUCH]: {
            yIndex: 4,
            xPosition: 1,
            scaleFactor: 0.2,
            sharedStyle: OPAL__SHARED
        }
    }
}

export const THINGS_LIZ_COUCH_DEFENDING = {
    [BUBBLE]: {
        [KHARI_ATTACK_SPEECH]: {
            yIndex: 5,
            xPosition: 7,
            zOffset: 3,
            scaleFactor: 0.45,
            sharedStyle: [
                BENNETT,
                LIZ,
                ALL_PEOPLE__SHARED
            ]
        },
        [LIZ_DEFENCE_SPEECH]: {
            yIndex: 5,
            xPosition: 5,
            zOffset: 0.5,
            scaleFactor: 0.45,
            sharedStyle: [
                BANJO__SHARED,
                ACOUSTIC_GUITAR__SHARED,
                MICROPHONE__SHARED,
                MONITOR__SHARED,
                AMY,
                BENNETT,
                LIZ,
                ALL_PEOPLE__SHARED
            ]
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
            xPosition: 7,
            zOffset: 0.5,
            scaleFactor: 0.45,
            sharedStyle: [
                BENNETT,
                LIZ,
                ALL_PEOPLE__SHARED
            ]
        }
    }
}

export const THINGS_LIZ_COUCH_ASLEEP = {
    [PUPPET]: {
        [OPAL_GAZING]: {
            yIndex: 1,
            xPosition: 6,
            scaleFactor: 0.2,
            sharedStyle: OPAL__SHARED
        }
    }
}

export const THINGS_LIZ_COUCH_PEAFOWL = {
    [PUPPET]: {
        [PEACOCK]: {
            yIndex: 5,
            xPosition: 7.5,
            scaleFactor: 0.25,
            sharedStyle: PEAFOWL__SHARED
        },
        [PEAHEN]: {
            yIndex: 5,
            xPosition: 5,
            scaleFactor: 0.25,
            sharedStyle: PEAFOWL__SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
