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
    BUBBLE_SHARED,
    DOOR_SHARED,
    PEAFOWL_SHARED,
    WINDOW_SHARED
} from '../../shared'
import {
    PEOPLE_ALL_SHARED,
    PEOPLE_BENNETT_SHARED,
    PEOPLE_INSTRUMENT_SHARED,
    PEOPLE_LIZ_SHARED,
    PEOPLE_OPAL_SHARED
} from '../../shared/people'

const ARRANGEMENTS_THINGS = {
    [DOOR]: {
        [BLINDS_INSIDE__LIZ]: {
            yIndex: 2,
            xPosition: 6,
            scaleFactor: 0.575,
            zOffset: 2.5,
            sharedStyle: WINDOW_SHARED
        },
        [BLINDS_INSIDE_OPEN__LIZ]: {
            yIndex: 2,
            xPosition: 6,
            scaleFactor: 0.575,
            zOffset: 2.5,
            sharedStyle: WINDOW_SHARED
        },
        [LIZ_DOOR]: {
            yIndex: 5,
            xPosition: 10.16,
            sharedStyle: DOOR_SHARED
        },
        [LIZ_DOOR_OPEN]: {
            yIndex: 5,
            xPosition: 8.875,
            sharedStyle: DOOR_SHARED
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
            sharedStyle: PEOPLE_OPAL_SHARED
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
                PEOPLE_BENNETT_SHARED,
                PEOPLE_LIZ_SHARED,
                PEOPLE_ALL_SHARED
            ]
        },
        [LIZ_DEFENCE_SPEECH]: {
            yIndex: 5,
            xPosition: 5,
            zOffset: 0.5,
            scaleFactor: 0.45,
            sharedStyle: [
                PEOPLE_BENNETT_SHARED,
                PEOPLE_INSTRUMENT_SHARED,
                PEOPLE_LIZ_SHARED,
                PEOPLE_ALL_SHARED
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
            sharedStyle: BUBBLE_SHARED
        },
        [BUBBLE_MEDIUM__LIZ]: {
            yIndex: 5,
            xPosition: 3.75,
            zOffset: 2.5,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [BUBBLE_LARGE__LIZ]: {
            yIndex: 5,
            xPosition: 4.5,
            zOffset: 2.5,
            scaleFactor: 0.4,
            sharedStyle: BUBBLE_SHARED
        },
        [LIZ_THOUGHT]: {
            yIndex: 5,
            xPosition: 7,
            zOffset: 0.5,
            scaleFactor: 0.45,
            sharedStyle: [
                PEOPLE_BENNETT_SHARED,
                PEOPLE_LIZ_SHARED,
                PEOPLE_ALL_SHARED
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
            sharedStyle: PEOPLE_OPAL_SHARED
        }
    }
}

export const THINGS_LIZ_COUCH_PEAFOWL = {
    [PUPPET]: {
        [PEACOCK]: {
            yIndex: 5,
            xPosition: 7.5,
            scaleFactor: 0.25,
            sharedStyle: PEAFOWL_SHARED
        },
        [PEAHEN]: {
            yIndex: 5,
            xPosition: 5,
            scaleFactor: 0.25,
            sharedStyle: PEAFOWL_SHARED
        }
    }
}

export default ARRANGEMENTS_THINGS
