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
import {
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
import { TAIWAN_HOUSE_SHARED } from '../../shared'
import {
    PEOPLE_ALL_SHARED,
    PEOPLE_ANITA_SHARED,
    PEOPLE_BENNETT_SHARED,
    PEOPLE_CHRISTOPHER_SHARED,
    PEOPLE_FATHER_SHARED,
    PEOPLE_MOTHER_SHARED
} from '../../shared/people'
import { SKETCH_TAIWAN_SHARED } from '../../shared/sketch'

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
            scaleFactor: 0.575,
            sharedStyle: TAIWAN_HOUSE_SHARED
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
            xPosition: 3,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_BENNETT_SHARED
            ]
        },
        [PUPPET_ANITA_BEGIN]: {
            yIndex: 3,
            xPosition: 3,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_ANITA_SHARED
            ]
        },
        [PUPPET_CHRISTOPHER_BEGIN]: {
            yIndex: 3,
            xPosition: 3,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_CHRISTOPHER_SHARED
            ]
        },
        [PUPPET_FATHER_BEGIN]: {
            yIndex: 3,
            xPosition: 3,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_FATHER_SHARED
            ]
        },
        [PUPPET_MOTHER_BEGIN]: {
            yIndex: 3,
            xPosition: 3,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_MOTHER_SHARED
            ]
        }
    }
}

export const THINGS_PUPPET_SHOW_MIDDLE = {
    [BUBBLE]: {
        [TOGETHER_SKETCH]: {
            yIndex: 5,
            xPosition: 8.5,
            zOffset: 3.5,
            noShadow: true,
            scaleFactor: 0.3,
            sharedStyle: SKETCH_TAIWAN_SHARED
        },
        [SKETCHBOOK__TOGETHER]: {
            yIndex: 5,
            xPosition: 8.5,
            zOffset: 2.5,
            rotate: 270,
            scaleFactor: 0.25,
            flipHorizontal: true
        }
    },
    [PUPPET]: {
        [PUPPET_BENNETT_MIDDLE]: {
            yIndex: 3,
            xPosition: 3,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_BENNETT_SHARED
            ]
        },
        [PUPPET_ANITA_MIDDLE]: {
            yIndex: 3,
            xPosition: 3,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_ANITA_SHARED
            ]
        },
        [PUPPET_CHRISTOPHER_MIDDLE]: {
            yIndex: 3,
            xPosition: 3,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_CHRISTOPHER_SHARED
            ]
        },
        [PUPPET_FATHER_MIDDLE]: {
            yIndex: 3,
            xPosition: 3,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_FATHER_SHARED
            ]
        },
        [PUPPET_MOTHER_MIDDLE]: {
            yIndex: 3,
            xPosition: 3,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_MOTHER_SHARED
            ]
        }
    }
}

export const THINGS_PUPPET_SHOW_END = {
    [BUBBLE]: {
        [APART_SKETCH]: {
            yIndex: 5,
            xPosition: 2.5,
            zOffset: 3.5,
            noShadow: true,
            scaleFactor: 0.3,
            sharedStyle: SKETCH_TAIWAN_SHARED
        },
        [SKETCHBOOK__APART]: {
            yIndex: 5,
            xPosition: 2.5,
            zOffset: 2.5,
            rotate: 270,
            scaleFactor: 0.25,
            flipHorizontal: true
        }
    },
    [PUPPET]: {
        [PUPPET_BENNETT_END]: {
            yIndex: 3,
            xPosition: 9,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_BENNETT_SHARED
            ]
        },
        [PUPPET_ANITA_END]: {
            yIndex: 3,
            xPosition: 9,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_ANITA_SHARED
            ]
        },
        [PUPPET_CHRISTOPHER_END]: {
            yIndex: 3,
            xPosition: 9,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_CHRISTOPHER_SHARED
            ]
        },
        [PUPPET_FATHER_END]: {
            yIndex: 3,
            xPosition: 9,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_FATHER_SHARED
            ]
        },
        [PUPPET_MOTHER_END]: {
            yIndex: 3,
            xPosition: 9,
            zOffset: 3,
            scaleFactor: 0.25,
            sharedStyle: [
                PEOPLE_ALL_SHARED,
                PEOPLE_MOTHER_SHARED
            ]
        }
    }
}

export default ARRANGEMENTS_THINGS
