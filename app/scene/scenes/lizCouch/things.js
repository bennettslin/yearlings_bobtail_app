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
    DOOR_SHARED,
    PEAFOWL_SHARED
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
        [LIZ_DOOR]: {
            yIndex: 5,
            xPosition: 10.16,
            scaleFactor: 0.7,
            sharedStyle: DOOR_SHARED
        },
        [LIZ_DOOR_OPEN]: {
            yIndex: 5,
            xPosition: 8.875,
            scaleFactor: 0.7,
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
            arrangement: {
                xPosition: 6.5,
                xWidth: 1,
                zHeight: 1
            }
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
        [LIZ_THOUGHT]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        }
    }
}

export const THINGS_LIZ_COUCH_ASLEEP = {
    [BUBBLE]: {
        [BUBBLE_SMALL__LIZ]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        },
        [BUBBLE_MEDIUM__LIZ]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        },
        [BUBBLE_LARGE__LIZ]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        },
        [LIZ_THOUGHT]: {
            yIndex: 5,
            xPosition: 7,
            zOffset: 1,
            scaleFactor: 0.45,
            sharedStyle: [
                PEOPLE_BENNETT_SHARED,
                PEOPLE_LIZ_SHARED,
                PEOPLE_ALL_SHARED
            ]
        }
    },
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
