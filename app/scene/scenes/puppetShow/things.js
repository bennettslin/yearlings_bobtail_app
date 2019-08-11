import {
    BACKDROP,
    BUBBLE,
    FLAT,
    PANEL,
    PUPPET
} from '../../../constants/scene'
import { TAIWAN_MOUNTAINS_BACKDROP } from '../../../constants/scene/things/backdrops'
import {
    TOGETHER_SKETCH,
    SKETCHBOOK__TOGETHER,
    APART_SKETCH,
    SKETCHBOOK__APART
} from '../../../constants/scene/things/bubbles'
import {
    TAIWAN_MOUNTAINS_BRIDGED,
    TAIWAN_MOUNTAIN_LEFT,
    TAIWAN_MOUNTAIN_RIGHT
} from '../../../constants/scene/things/flats'
import { TAIWAN_FOG } from '../../../constants/scene/things/panels'
import {
    PUPPET_BENNETT_BEGIN,
    PUPPET_ANITA_BEGIN,
    PUPPET_CHRISTOPHER_BEGIN,
    PUPPET_FATHER_BEGIN,
    PUPPET_MOTHER_BEGIN,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_ANITA_MIDDLE,
    PUPPET_CHRISTOPHER_MIDDLE,
    PUPPET_FATHER_MIDDLE,
    PUPPET_MOTHER_MIDDLE,
    PUPPET_BENNETT_END,
    PUPPET_ANITA_END,
    PUPPET_CHRISTOPHER_END,
    PUPPET_FATHER_END,
    PUPPET_MOTHER_END
} from '../../../constants/scene/things/puppets'
import { TAIWAN_HOUSE_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [BACKDROP]: {
        [TAIWAN_MOUNTAINS_BACKDROP]: {
            yIndex: 0,
            xPosition: 5.5,
            scaleFactor: 0.6
        }
    },
    [FLAT]: {
        [TAIWAN_MOUNTAINS_BRIDGED]: {
            yIndex: 3,
            xPosition: 5.5,
            scaleFactor: 0.55,
            sharedStyle: TAIWAN_HOUSE_SHARED
        },
        [TAIWAN_MOUNTAIN_LEFT]: {
            yIndex: 4,
            xPosition: -0.5,
            scaleFactor: 0.4,
            alignLeft: true
        },
        [TAIWAN_MOUNTAIN_RIGHT]: {
            yIndex: 4,
            xPosition: 11.5,
            scaleFactor: 0.4,
            alignRight: true
        }
    },
    [PANEL]: {
        [TAIWAN_FOG]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5.5,
                xWidth: 12,
                zHeight: 4
            }
        }
    }
}

export const THINGS_PUPPET_SHOW_BEGIN = {
    [PUPPET]: {
        [PUPPET_BENNETT_BEGIN]: {
            yIndex: 2,
            arrangement: {
                xPosition: 2,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_ANITA_BEGIN]: {
            yIndex: 2,
            arrangement: {
                xPosition: 3,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_CHRISTOPHER_BEGIN]: {
            yIndex: 2,
            arrangement: {
                xPosition: 3,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_FATHER_BEGIN]: {
            yIndex: 2,
            arrangement: {
                xPosition: 3,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_MOTHER_BEGIN]: {
            yIndex: 2,
            arrangement: {
                xPosition: 3,
                xWidth: 0.5,
                zHeight: 1
            }
        }
    }
}

export const THINGS_PUPPET_SHOW_MIDDLE = {
    [BUBBLE]: {
        [TOGETHER_SKETCH]: {
            yIndex: 5,
            arrangement: {
                xPosition: 8.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4.5
            }
        },
        [SKETCHBOOK__TOGETHER]: {
            yIndex: 5,
            xPosition: 8.5,
            scaleFactor: 0.25
        }
    },
    [PUPPET]: {
        [PUPPET_BENNETT_MIDDLE]: {
            yIndex: 2,
            arrangement: {
                xPosition: 2.5,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_ANITA_MIDDLE]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_CHRISTOPHER_MIDDLE]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_FATHER_MIDDLE]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_MOTHER_MIDDLE]: {
            yIndex: 2,
            arrangement: {
                xPosition: 4,
                xWidth: 0.5,
                zHeight: 1
            }
        }
    }
}

export const THINGS_PUPPET_SHOW_END = {
    [BUBBLE]: {
        [APART_SKETCH]: {
            yIndex: 5,
            arrangement: {
                xPosition: 2.5,
                xWidth: 4,
                zHeight: 3,
                zOffset: 4.5
            }
        },
        [SKETCHBOOK__APART]: {
            yIndex: 5,
            xPosition: 2.5,
            scaleFactor: 0.25
        }
    },
    [PUPPET]: {
        [PUPPET_BENNETT_END]: {
            yIndex: 2,
            arrangement: {
                xPosition: 6.5,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_ANITA_END]: {
            yIndex: 2,
            arrangement: {
                xPosition: 10,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_CHRISTOPHER_END]: {
            yIndex: 2,
            arrangement: {
                xPosition: 10,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_FATHER_END]: {
            yIndex: 2,
            arrangement: {
                xPosition: 10,
                xWidth: 0.5,
                zHeight: 1
            }
        },
        [PUPPET_MOTHER_END]: {
            yIndex: 2,
            arrangement: {
                xPosition: 10,
                xWidth: 0.5,
                zHeight: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
