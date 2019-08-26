import {
    BUBBLE,
    DOOR,
    FIXTURE,
    PANEL,
    PUPPET
} from '../../../constants/scene'
import {
    KHARI_ATTACK_SPEECH,
    LIZ_DEFENCE_SPEECH,
    BUBBLE_SMALL__LIZ,
    BUBBLE_MEDIUM__LIZ,
    BUBBLE_LARGE__LIZ,
    LIZ_THOUGHT
} from '../../../constants/scene/things/bubbles'
import {
    BLINDS_INSIDE__LIZ,
    BLINDS_INSIDE_OPEN__LIZ,
    LIZ_DOOR,
    LIZ_DOOR_OPEN
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
    BUBBLE__SHARED,
    DOOR__SHARED,
    PEAFOWL__SHARED,
    WINDOW__SHARED
} from '../../shared'
import {
    BANJO__SHARED,
    GUITAR__SHARED,
    MICROPHONE__SHARED
} from '../../shared/instruments'
import {
    ALL_PEOPLE__SHARED,
    BENNETT__SHARED,
    LIZ__SHARED,
    OPAL__SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [DOOR]: {
        [BLINDS_INSIDE__LIZ]: {
            yIndex: 2,
            xPosition: 6,
            scaleFactor: 0.575,
            zOffset: 2.5,
            sharedStyle: WINDOW__SHARED
        },
        [BLINDS_INSIDE_OPEN__LIZ]: {
            yIndex: 2,
            xPosition: 6,
            scaleFactor: 0.575,
            zOffset: 2.5,
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
        }
    },
    [PANEL]: {
        [LIZ_COUCH]: {
            yIndex: 5,
            xPosition: 2,
            scaleFactor: 0.27
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
                BENNETT__SHARED,
                LIZ__SHARED,
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
                GUITAR__SHARED,
                MICROPHONE__SHARED,
                BENNETT__SHARED,
                LIZ__SHARED,
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
            scaleFactor: 0.4,
            sharedStyle: BUBBLE__SHARED
        },
        [BUBBLE_MEDIUM__LIZ]: {
            yIndex: 5,
            xPosition: 3.75,
            zOffset: 2.5,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE__SHARED
        },
        [BUBBLE_LARGE__LIZ]: {
            yIndex: 5,
            xPosition: 4.5,
            zOffset: 2.5,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE__SHARED
        },
        [LIZ_THOUGHT]: {
            yIndex: 5,
            xPosition: 7,
            zOffset: 0.5,
            scaleFactor: 0.45,
            sharedStyle: [
                BENNETT__SHARED,
                LIZ__SHARED,
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
