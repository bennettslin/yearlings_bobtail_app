import {
    BUBBLE,
    CARDBOARD,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET
} from 'constants/scene'
import {
    DOGS_SKETCH,
    SKETCHBOOK__DOGS
} from 'constants/scene/things/bubbles'
import {
    TINTIN_POSTER,
    BLOOM_COUNTY_POSTER
} from 'constants/scene/things/cardboards'
import {
    BEETHOVEN_BUST,
    CHRISTOPHER_LETTERS,
    CAPTAIN_BED_LAMP,
    BENNETT_LETTERS,
    RED_ENVELOPE_MONEY,
    BEYONDER_ENVELOPE
} from 'constants/scene/things/fixtures'
import {
    BEDROOM_SIREN,
    BEDROOM_BUS
} from 'constants/scene/things/flats'
import {
    CAPTAIN_BED_PILLOW,
    CAPTAIN_BED_BLANKET
} from 'constants/scene/things/furniture'
import {
    BEDROOM_DESK,
    CAPTAIN_BED,
    BEDROOM_FENCE
} from 'constants/scene/things/panels'
import {
    PCHELKA_MUSHKA_ROCKET,
    EARTH,
    SPACE_COLONY
} from 'constants/scene/things/puppets'

const ARRANGEMENTS_THINGS = {
    [CARDBOARD]: {
        [TINTIN_POSTER]: {
            yIndex: 3,
            xPosition: 9,
            zOffset: 0,
            scaleFactor: 0.36
        },
        [BLOOM_COUNTY_POSTER]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 2,
                zHeight: 3,
                zOffset: 2
            }
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
            arrangement: {
                xPosition: 8,
                xWidth: 4,
                zHeight: 1
            }
        },
        [CAPTAIN_BED]: {
            yIndex: 4,
            arrangement: {
                xPosition: 6,
                xWidth: 3,
                zHeight: 2.5
            }
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
            yIndex: 0,
            arrangement: {
                xPosition: 3,
                xWidth: 6,
                zHeight: 8
            }
        }
    }
}

export const THINGS_BEDROOM_GUILTY = {
    [BUBBLE]: {
        [DOGS_SKETCH]: {
            yIndex: 4,
            arrangement: {
                xPosition: 6,
                xWidth: 3,
                zHeight: 4
            }
        },
        [SKETCHBOOK__DOGS]: {
            yIndex: 4,
            arrangement: {
                xPosition: 6,
                xWidth: 3,
                zHeight: 4
            }
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
            yIndex: 0,
            arrangement: {
                xPosition: 3,
                xWidth: 6,
                zHeight: 8
            }
        }
    }
}

export const THINGS_BEDROOM_ASLEEP = {
    [PUPPET]: {
        [PCHELKA_MUSHKA_ROCKET]: {
            yIndex: 1,
            arrangement: {
                xPosition: 5,
                xWidth: 5,
                zHeight: 3
            }
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
    [PUPPET]: {
        [EARTH]: {
            yIndex: 4,
            arrangement: {
                xPosition: 5,
                xWidth: 4,
                zHeight: 1
            }
        },
        [SPACE_COLONY]: {
            yIndex: 4,
            arrangement: {
                xPosition: 5,
                xWidth: 4,
                zHeight: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
