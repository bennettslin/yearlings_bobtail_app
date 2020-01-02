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

export default {
    [CARDBOARD]: {
        [TINTIN_POSTER]: {
            yIndex: 5,
            xPosition: 10,
            zOffset: 3.5,
            scaleFactor: 0.225,
            perspective: 140,
            rotate: -15,
            rotateY: 300,
            skewX: -15,
            skewY: 9
        },
        [BLOOM_COUNTY_POSTER]: {
            yIndex: 5,
            xPosition: 10,
            zOffset: 3.5,
            scaleFactor: 0.225,
            perspective: 140,
            rotate: -15,
            rotateY: 300,
            skewX: -15,
            skewY: 9
        }
    },
    [DOOR]: {
        [BEDROOM_BLINDS]: {
            yIndex: 3,
            xPosition: 2.8,
            zOffset: 0.125,
            scaleFactor: 0.65
        },
        [BEDROOM_BLINDS_OPEN]: {
            yIndex: 3,
            xPosition: 2.8,
            zOffset: 0.125,
            scaleFactor: 0.65
        }
    },
    [FURNITURE]: {
        [CAPTAIN_BED_PILLOW]: {
            yIndex: 2,
            xPosition: 7
        }
    },
    [PANEL]: {
        [BEDROOM_DESK]: {
            yIndex: 4,
            xPosition: 3.15,
            scaleFactor: 0.225
        },
        [CAPTAIN_BED]: {
            yIndex: 5,
            xPosition: 7.5,
            zOffset: 0,
            scaleFactor: 0.2
        },
        [BEDROOM_FENCE]: {
            scaleFactor: 0.5
        }
    }
}

export const THINGS_BEDROOM_ENRAGED = {
    [FIXTURE]: {
        [LETTER_SCRAPS__CHRISTOPHER]: {
            yIndex: 5,
            xPosition: 4
        },
        [CHRISTOPHER_LETTERS]: {
            yIndex: 5,
            xPosition: 5
        }
    }
}

export const THINGS_BEDROOM_FEARFUL = {
    [FLAT]: {
        [BEDROOM_SIREN]: {
            xPosition: 2,
            zOffset: 2.25,
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
            scaleFactor: 0.4
        },
        [SKETCHBOOK__DOGS]: {
            yIndex: 5,
            xPosition: 3,
            zOffset: 1.5,
            scaleFactor: 0.25
        }
    },
    [FIXTURE]: {
        [CAPTAIN_BED_LAMP]: {
            yIndex: 4,
            xPosition: 9
        },
        [LETTER_SCRAPS__BENNETT]: {
            yIndex: 5,
            xPosition: 8
        },
        [BENNETT_LETTERS]: {
            yIndex: 5,
            xPosition: 8
        }
    }
}

export const THINGS_BEDROOM_FEIGNING = {
    [FIXTURE]: {
        [RED_ENVELOPE_MONEY]: {
            yIndex: 3,
            xPosition: 9
        }
    },
    [FLAT]: {
        [BEDROOM_BUS]: {
            xPosition: 2,
            zOffset: 2.25,
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
            zOffset: 0.1
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
