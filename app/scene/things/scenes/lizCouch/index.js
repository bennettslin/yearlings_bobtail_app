import {
    BACKDROPS,
    BUBBLES,
    FIXTURES,
    FURNITURES,
    PUPPETS
} from 'constants/scene'
import { LIZ_COUCH_THOUGHT_BACKDROP } from '../../keys/backdrops'
import {
    KHARI_ATTACK_SPEECH,
    LIZ_DEFENCE_SPEECH,
    LIZ_THOUGHT
} from '../../keys/bubbles'
import { TCHOTCHKES } from '../../keys/fixtures'
import {
    LIZ_CUSHIONS,
    LIZ_CUSHIONS_THOUGHT
} from '../../keys/furniture'
import {
    OPAL_COUCH,
    OPAL_GAZING,
    PEAHEN,
    PEACOCK
} from '../../keys/puppets'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [LIZ_COUCH_THOUGHT_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 10,
                zHeight: 4
            }
        }
    },
    [BUBBLES]: {
        [KHARI_ATTACK_SPEECH]: {
            yIndex: 5,
            arrangement: {
                xFloat: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        },
        [LIZ_DEFENCE_SPEECH]: {
            yIndex: 5,
            arrangement: {
                xFloat: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        },
        [LIZ_THOUGHT]: {
            yIndex: 5,
            arrangement: {
                xFloat: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        }
    },
    [FIXTURES]: {
        [TCHOTCHKES]: {
            yIndex: 5,
            arrangement: {
                xFloat: 6.5,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [FURNITURES]: {
        [LIZ_CUSHIONS]: {
            yIndex: 4,
            arrangement: {
                xFloat: 2.5,
                xWidth: 2,
                zHeight: 0.5
            }
        },
        [LIZ_CUSHIONS_THOUGHT]: {
            yIndex: 3,
            arrangement: {
                xFloat: 2.5,
                xWidth: 2,
                zHeight: 0.5
            }
        }
    },
    [PUPPETS]: {
        [OPAL_COUCH]: {
            yIndex: 4,
            arrangement: {
                xFloat: 1,
                xWidth: 1,
                zHeight: 0.5
            }
        },
        [OPAL_GAZING]: {
            yIndex: 1,
            arrangement: {
                xFloat: 6,
                xWidth: 1,
                zHeight: 0.5
            }
        },
        [PEAHEN]: {
            yIndex: 4,
            arrangement: {
                xFloat: 6,
                xWidth: 1,
                zHeight: 2
            }
        },
        [PEACOCK]: {
            yIndex: 4,
            arrangement: {
                xFloat: 7,
                xWidth: 1,
                zHeight: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
