import {
    BACKDROPS,
    BUBBLES,
    FLATS,
    PUPPETS
} from 'constants/scene'
import { TAIWAN_MOUNTAINS_BACKDROP } from '../../keys/backdrops'
import {
    TOGETHER_SKETCHBOOK,
    APART_SKETCHBOOK
} from '../../keys/bubbles'
import {
    TAIWAN_CLOUDS,
    TAIWAN_FOG,
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAIN_LEFT,
    TAIWAN_MOUNTAIN_RIGHT
} from '../../keys/flats'
import {
    PUPPET_BENNETT_BEGIN,
    PUPPET_FAMILY_BEGIN,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_FAMILY_MIDDLE,
    PUPPET_BENNETT_END,
    PUPPET_FAMILY_END
} from '../../keys/puppets'

const ARRANGEMENTS_THINGS = {
    [BACKDROPS]: {
        [TAIWAN_MOUNTAINS_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 8
            }
        }
    },
    [FLATS]: {
        [TAIWAN_CLOUDS]: {
            yIndex: 1,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 3,
                zOffset: 5
            }
        },
        [TAIWAN_FOG]: {
            yIndex: 1,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        },
        [TAIWAN_MOUNTAINS_BRIDGED]: {
            yIndex: 3,
            arrangement: {
                xFloat: 5.5,
                xWidth: 12,
                zHeight: 6
            }
        },
        [TAIWAN_MOUNTAIN_LEFT]: {
            yIndex: 4,
            arrangement: {
                xFloat: 2,
                xWidth: 5,
                zHeight: 3
            }
        },
        [TAIWAN_MOUNTAIN_RIGHT]: {
            yIndex: 4,
            arrangement: {
                xFloat: 9,
                xWidth: 5,
                zHeight: 3
            }
        }
    }
}

export const THINGS_PUPPET_SHOW_BEGIN = {
    [PUPPETS]: {
        [PUPPET_BENNETT_BEGIN]: {
            yIndex: 2,
            arrangement: {
                xFloat: 2,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_FAMILY_BEGIN]: {
            yIndex: 2,
            arrangement: {
                xFloat: 3,
                xWidth: 0.5,
                zHeight: 1
            }
        }
    }
}

export const THINGS_PUPPET_SHOW_MIDDLE = {
    [BUBBLES]: {
        [TOGETHER_SKETCHBOOK]: {
            yIndex: 5,
            arrangement: {
                xFloat: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4.5
            }
        }
    },
    [PUPPETS]: {
        [PUPPET_BENNETT_MIDDLE]: {
            yIndex: 2,
            arrangement: {
                xFloat: 2.5,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_FAMILY_MIDDLE]: {
            yIndex: 2,
            arrangement: {
                xFloat: 4,
                xWidth: 0.5,
                zHeight: 1
            }
        }
    }
}

export const THINGS_PUPPET_SHOW_END = {
    [BUBBLES]: {
        [APART_SKETCHBOOK]: {
            yIndex: 5,
            arrangement: {
                xFloat: 2.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4.5
            }
        }
    },
    [PUPPETS]: {
        [PUPPET_BENNETT_END]: {
            yIndex: 2,
            arrangement: {
                xFloat: 6.5,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_FAMILY_END]: {
            yIndex: 2,
            arrangement: {
                xFloat: 10,
                xWidth: 0.5,
                zHeight: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
