import {
    BUBBLE,
    FLAT,
    PANEL,
    PUPPET
} from '../../../constants/scene/things'
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
import {
    TAIWAN_BRIDGE,
    TAIWAN_HAZE__CLOUD,
    TAIWAN_HAZE__FOG
} from '../../../constants/scene/things/panels'
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

export default {
    [FLAT]: {
        [TAIWAN_MOUNTAINS_BRIDGED]: {
            yIndex: 3,
            xPosition: 5.5,
            scaleFactor: 0.575
        },
        [TAIWAN_MOUNTAIN_LEFT]: {
            yIndex: 5,
            xPosition: -0.5,
            scaleFactor: 0.4,
            alignLeft: true
        },
        [TAIWAN_MOUNTAIN_RIGHT]: {
            yIndex: 5,
            xPosition: 11.5,
            scaleFactor: 0.4,
            alignRight: true
        }
    },
    [PANEL]: {
        [TAIWAN_BRIDGE]: {
            yIndex: 4,
            xPosition: 5.5,
            zOffset: 3.3,
            scaleFactor: 0.48
        },
        [TAIWAN_HAZE__CLOUD]: {
            yIndex: 2,
            xPosition: 5.5,
            scaleFactor: 0.5,
            trimBottom: 0.3
        },
        [TAIWAN_HAZE__FOG]: {
            yIndex: 4,
            xPosition: 5.5,
            scaleFactor: 0.5,
            trimBottom: 0.6,
            flipHorizontal: true
        }
    }
}

export const THINGS_PUPPET_SHOW_BEGIN = {
    [PUPPET]: {
        [PUPPET_BENNETT_BEGIN]: {
            yIndex: 3,
            xPosition: 1.4,
            zOffset: 3.48,
            scaleFactor: 0.25
        },
        [PUPPET_CHRISTOPHER_BEGIN]: {
            yIndex: 3,
            xPosition: 1.68,
            zOffset: 3.455,
            scaleFactor: 0.25
        },
        [PUPPET_MOTHER_BEGIN]: {
            yIndex: 3,
            xPosition: 1.925,
            zOffset: 3.43,
            scaleFactor: 0.25
        },
        [PUPPET_ANITA_BEGIN]: {
            yIndex: 3,
            xPosition: 2.175,
            zOffset: 3.4275,
            scaleFactor: 0.25
        },
        [PUPPET_FATHER_BEGIN]: {
            yIndex: 3,
            xPosition: 2.55,
            zOffset: 3.425,
            scaleFactor: 0.25
        }
    }
}

export const THINGS_PUPPET_SHOW_MIDDLE = {
    [BUBBLE]: {
        [TOGETHER_SKETCH]: {
            yIndex: 5,
            xPosition: 8.25,
            zOffset: 2.375,
            noShadow: true,
            scaleFactor: 0.35
        },
        [SKETCHBOOK__TOGETHER]: {
            yIndex: 5,
            xPosition: 8.25,
            zOffset: 1.5,
            rotate: 270,
            scaleFactor: 0.25
        }
    },
    [PUPPET]: {
        [PUPPET_BENNETT_MIDDLE]: {
            yIndex: 3,
            xPosition: 3,
            zOffset: 3.435,
            scaleFactor: 0.25
        },
        [PUPPET_MOTHER_MIDDLE]: {
            yIndex: 3,
            xPosition: 3.8,
            zOffset: 3.345,
            scaleFactor: 0.25
        },
        [PUPPET_CHRISTOPHER_MIDDLE]: {
            yIndex: 3,
            xPosition: 4.1,
            zOffset: 3.335,
            scaleFactor: 0.25
        },
        [PUPPET_FATHER_MIDDLE]: {
            yIndex: 3,
            xPosition: 4.5,
            zOffset: 3.315,
            scaleFactor: 0.25
        },
        [PUPPET_ANITA_MIDDLE]: {
            yIndex: 3,
            xPosition: 5,
            zOffset: 3.295,
            scaleFactor: 0.25
        }
    }
}

export const THINGS_PUPPET_SHOW_END = {
    [BUBBLE]: {
        [APART_SKETCH]: {
            yIndex: 5,
            xPosition: 2.75,
            zOffset: 2.5,
            noShadow: true,
            scaleFactor: 0.4
        },
        [SKETCHBOOK__APART]: {
            yIndex: 5,
            xPosition: 2.75,
            zOffset: 1.5,
            rotate: 270,
            scaleFactor: 0.25
        }
    },
    [PUPPET]: {
        [PUPPET_BENNETT_END]: {
            yIndex: 3,
            xPosition: 6,
            zOffset: 3.3,
            scaleFactor: 0.25
        },
        [PUPPET_FATHER_END]: {
            yIndex: 3,
            xPosition: 8,
            zOffset: 3.425,
            scaleFactor: 0.25
        },
        [PUPPET_ANITA_END]: {
            yIndex: 3,
            xPosition: 8.48,
            zOffset: 3.425,
            scaleFactor: 0.25
        },
        [PUPPET_CHRISTOPHER_END]: {
            yIndex: 3,
            xPosition: 8.67,
            zOffset: 3.4225,
            scaleFactor: 0.25
        },
        [PUPPET_MOTHER_END]: {
            yIndex: 3,
            xPosition: 8.9,
            zOffset: 3.42,
            scaleFactor: 0.25
        }
    }
}
