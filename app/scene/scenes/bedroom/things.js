import {
    BUBBLE,
    CARDBOARD,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL
} from '../../../constants/scene'
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
    BEETHOVEN_BUST,
    CHRISTOPHER_LETTERS,
    CAPTAIN_BED_LAMP,
    BENNETT_LETTERS,
    RED_ENVELOPE_MONEY,
    BEYONDER_ENVELOPE
} from '../../../constants/scene/things/fixtures'
import {
    BEDROOM_SIREN,
    BEDROOM_BUS
} from '../../../constants/scene/things/flats'
import {
    CAPTAIN_BED_PILLOW,
    CAPTAIN_BED_BLANKET
} from '../../../constants/scene/things/furniture'
import {
    BEDROOM_DESK,
    CAPTAIN_BED,
    BEDROOM_FENCE
} from '../../../constants/scene/things/panels'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [TINTIN_POSTER]: {
            yIndex: 3,
            xPosition: 9,
            zOffset: 0,
            scaleFactor: 0.36
        },
        [BLOOM_COUNTY_POSTER]: {
            yIndex: 3,
            xPosition: 9,
            zOffset: 0,
            scaleFactor: 0.36
        }
    },
    [FIXTURE]: {
        [BEETHOVEN_BUST]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [FURNITURE]: {
        [CAPTAIN_BED_PILLOW]: {
            yIndex: 4,
            arrangement: {
                xPosition: 8,
                xWidth: 4,
                zHeight: 1
            }
        },
        [CAPTAIN_BED_BLANKET]: {
            yIndex: 4,
            arrangement: {
                xPosition: 8,
                xWidth: 4,
                zHeight: 1
            }
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
            xPosition: 7.2,
            scaleFactor: 0.2
        },
        [BEDROOM_FENCE]: {
            yIndex: -1,
            xPosition: 2.5,
            zOffset: 2,
            scaleFactor: 0.5
        }
    }
}

export const THINGS_BEDROOM_ENRAGED = {
    [FIXTURE]: {
        [CHRISTOPHER_LETTERS]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 1
            }
        }
    }
}

export const THINGS_BEDROOM_FEARFUL = {
    [FLAT]: {
        [BEDROOM_SIREN]: {
            yIndex: -1,
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
            yIndex: 5,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 1
            }
        },
        [BENNETT_LETTERS]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 1
            }
        }
    }
}

export const THINGS_BEDROOM_FEIGNING = {
    [FIXTURE]: {
        [RED_ENVELOPE_MONEY]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [FLAT]: {
        [BEDROOM_BUS]: {
            yIndex: -1,
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
            yIndex: 5,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 1
            }
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
