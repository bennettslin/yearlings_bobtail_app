import {
    BACKDROP,
    BUBBLE,
    FIXTURE,
    PANEL,
    PUPPET
} from 'constants/scene'
import { LIZ_COUCH_THOUGHT_BACKDROP } from 'constants/scene/things/backdrops'
import {
    KHARI_ATTACK_SPEECH,
    LIZ_DEFENCE_SPEECH,
    BUBBLE_SMALL__LIZ,
    BUBBLE_MEDIUM__LIZ,
    BUBBLE_LARGE__LIZ,
    LIZ_THOUGHT
} from 'constants/scene/things/bubbles'
import { TCHOTCHKES } from 'constants/scene/things/fixtures'
import { LIZ_COUCH } from 'constants/scene/things/panels'
import {
    OPAL_COUCH,
    OPAL_GAZING,
    PEAHEN,
    PEACOCK
} from 'constants/scene/things/puppets'

const ARRANGEMENTS_THINGS = {
    [PANEL]: {
        [LIZ_COUCH]: {
            yIndex: 5,
            xPosition: 2,
            scaleFactor: 0.27
        }
    }
}

export const THINGS_LIZ_COUCH_GOLDEN = {
    [BACKDROP]: {
        [LIZ_COUCH_THOUGHT_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 4
            }
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
            arrangement: {
                xPosition: 1,
                xWidth: 1,
                zHeight: 0.5
            }
        }
    }
}

export const THINGS_LIZ_COUCH_DEFENDING = {
    [BUBBLE]: {
        [KHARI_ATTACK_SPEECH]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        },
        [LIZ_DEFENCE_SPEECH]: {
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
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4
            }
        }
    },
    [PUPPET]: {
        [OPAL_GAZING]: {
            yIndex: 1,
            arrangement: {
                xPosition: 6,
                xWidth: 1,
                zHeight: 0.5
            }
        }
    }
}

export const THINGS_LIZ_COUCH_PEAFOWL = {
    [PUPPET]: {
        [PEAHEN]: {
            yIndex: 4,
            arrangement: {
                xPosition: 6,
                xWidth: 1,
                zHeight: 2
            }
        },
        [PEACOCK]: {
            yIndex: 4,
            arrangement: {
                xPosition: 7,
                xWidth: 1,
                zHeight: 2
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
