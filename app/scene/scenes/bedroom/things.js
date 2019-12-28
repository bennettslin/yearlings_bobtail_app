import {
    BUBBLE,
    CARDBOARD,
    DOOR,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL
} from '../../../constants/scene/things'
import {
    DOGS_SKETCH,
    SKETCHBOOK__DOGS
} from '../../../constants/scene/things/bubbles'
import {
    TINTIN_POSTER,
    BLOOM_COUNTY_POSTER,
    PCHELKA_MUSHKA_ROCKET,
    EARTH,
    SPACE_COLONY
} from '../../../constants/scene/things/cardboards'
import {
    BEDROOM_BLINDS,
    BEDROOM_BLINDS_OPEN
} from '../../../constants/scene/things/doors'
import {
    LETTER_SCRAPS__CHRISTOPHER,
    CHRISTOPHER_LETTERS,
    CAPTAIN_BED_LAMP,
    LETTER_SCRAPS__BENNETT,
    BENNETT_LETTERS,
    RED_ENVELOPE_MONEY,
    BEYONDER_ENVELOPE
} from '../../../constants/scene/things/fixtures'
import {
    BEDROOM_SIREN,
    BEDROOM_BUS
} from '../../../constants/scene/things/flats'
import { CAPTAIN_BED_PILLOW } from '../../../constants/scene/things/furnitures'
import {
    BEDROOM_DESK,
    CAPTAIN_BED,
    BEDROOM_FENCE
} from '../../../constants/scene/things/panels'
import { PILLOW_PRETEEN_BENNETT__SHARED } from '../../shared/furniture'
import { WINDOW__SHARED } from '../../shared/home'
import { SCISSORS__SHARED } from '../../shared/household'
import {
    BOOK__SHARED,
    LETTER__SHARED,
    MAGAZINE__SHARED,
    SKETCHBOOK__SHARED
} from '../../shared/paper'
import { ALL_PEOPLE__SHARED } from '../../shared/people'
import { DOLLAR__SHARED } from '../../shared/print'
import { SKETCH_DOGS__SHARED } from '../../shared/sketch'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [TINTIN_POSTER]: {
            yIndex: 5,
            xPosition: 10,
            zOffset: 3.5,
            scaleFactor: 0.225,
            perspective: 70,
            rotate: -15,
            rotateY: 300,
            skewX: -15,
            skewY: 10,
            sharedStyle: ALL_PEOPLE__SHARED
        },
        [BLOOM_COUNTY_POSTER]: {
            yIndex: 5,
            xPosition: 10,
            zOffset: 3.5,
            scaleFactor: 0.225,
            perspective: 70,
            rotate: -15,
            rotateY: 300,
            skewX: -15,
            skewY: 10,
            sharedStyle: ALL_PEOPLE__SHARED
        }
    },
    [DOOR]: {
        [BEDROOM_BLINDS]: {
            yIndex: 3,
            xPosition: 2.8,
            zOffset: 0.125,
            scaleFactor: 0.65,
            sharedStyle: WINDOW__SHARED
        },
        [BEDROOM_BLINDS_OPEN]: {
            yIndex: 3,
            xPosition: 2.8,
            zOffset: 0.125,
            scaleFactor: 0.65,
            sharedStyle: WINDOW__SHARED
        }
    },
    [FURNITURE]: {
        [CAPTAIN_BED_PILLOW]: {
            yIndex: 2,
            xPosition: 7,
            sharedStyle: PILLOW_PRETEEN_BENNETT__SHARED
        }
    },
    [PANEL]: {
        [BEDROOM_DESK]: {
            yIndex: 4,
            xPosition: 3,
            scaleFactor: 0.225
        },
        [CAPTAIN_BED]: {
            yIndex: 5,
            xPosition: 7.5,
            zOffset: -0.25,
            scaleFactor: 0.2
        },
        [BEDROOM_FENCE]: {
            xPosition: 2.5,
            zOffset: 2,
            scaleFactor: 0.5
        }
    }
}

export const THINGS_BEDROOM_ENRAGED = {
    [FIXTURE]: {
        [LETTER_SCRAPS__CHRISTOPHER]: {
            yIndex: 5,
            xPosition: 4,
            sharedStyle: MAGAZINE__SHARED
        },
        [CHRISTOPHER_LETTERS]: {
            yIndex: 5,
            xPosition: 5,
            sharedStyle: [
                MAGAZINE__SHARED,
                SCISSORS__SHARED
            ]
        }
    }
}

export const THINGS_BEDROOM_FEARFUL = {
    [FLAT]: {
        [BEDROOM_SIREN]: {
            xPosition: 2,
            zOffset: 2.75,
            scaleFactor: 0.425
        }
    }
}

export const THINGS_BEDROOM_GUILTY = {
    [BUBBLE]: {
        [DOGS_SKETCH]: {
            yIndex: 5,
            xPosition: 2.85,
            zOffset: 2.15,
            noShadow: true,
            scaleFactor: 0.4,
            sharedStyle: SKETCH_DOGS__SHARED
        },
        [SKETCHBOOK__DOGS]: {
            yIndex: 5,
            xPosition: 3,
            zOffset: 1.5,
            scaleFactor: 0.25,
            sharedStyle: [
                BOOK__SHARED,
                SKETCHBOOK__SHARED
            ]
        }
    },
    [FIXTURE]: {
        [CAPTAIN_BED_LAMP]: {
            yIndex: 4,
            xPosition: 9
        },
        [LETTER_SCRAPS__BENNETT]: {
            yIndex: 5,
            xPosition: 8,
            sharedStyle: MAGAZINE__SHARED
        },
        [BENNETT_LETTERS]: {
            yIndex: 5,
            xPosition: 8,
            sharedStyle: MAGAZINE__SHARED
        }
    }
}

export const THINGS_BEDROOM_FEIGNING = {
    [FIXTURE]: {
        [RED_ENVELOPE_MONEY]: {
            yIndex: 3,
            xPosition: 9,
            sharedStyle: [
                DOLLAR__SHARED,
                LETTER__SHARED
            ]
        }
    },
    [FLAT]: {
        [BEDROOM_BUS]: {
            xPosition: 2,
            zOffset: 3.25,
            scaleFactor: 0.5
        }
    }
}

export const THINGS_BEDROOM_ASLEEP = {
    [CARDBOARD]: {
        [PCHELKA_MUSHKA_ROCKET]: {
            yIndex: 4,
            xPosition: 2.5,
            zOffset: 1.5,
            scaleFactor: 0.3
        }
    }
}

export const THINGS_BEDROOM_SHAKEN = {
    [FIXTURE]: {
        [BEYONDER_ENVELOPE]: {
            yIndex: 3,
            xPosition: 2,
            zOffset: 0.1,
            sharedStyle: LETTER__SHARED
        }
    },
    [CARDBOARD]: {
        [EARTH]: {
            yIndex: 4,
            xPosition: 7.5,
            zOffset: 5,
            scaleFactor: 0.4
        },
        [SPACE_COLONY]: {
            yIndex: 4,
            xPosition: 8.5,
            zOffset: 1.5,
            scaleFactor: 0.3
        }
    }
}

export default ARRANGEMENTS_THINGS
