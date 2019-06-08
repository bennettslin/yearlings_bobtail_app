import {
    BUBBLES,
    CUTOUTS,
    FIXTURES,
    FLATS,
    FURNITURES,
    PANELS,
    PUPPETS
} from 'constants/scene'
import { DOGS_SKETCHBOOK } from '../../keys/bubbles'
import {
    TINTIN_POSTER,
    BLOOM_COUNTY_POSTER
} from '../../keys/cutouts'
import {
    BEETHOVEN_BUST,
    CHRISTOPHER_LETTERS,
    CAPTAIN_BED_LAMP,
    BENNETT_LETTERS,
    RED_ENVELOPE_MONEY,
    BEYONDER_ENVELOPE
} from '../../keys/fixtures'
import {
    BEDROOM_SIREN,
    BEDROOM_BUS
} from '../../keys/flats'
import {
    CAPTAIN_BED_PILLOW_BLANKET
} from '../../keys/furniture'
import {
    BEDROOM_DESK,
    CAPTAIN_BED,
    BEDROOM_FENCE
} from '../../keys/panels'
import {
    PCHELKA_MUSHKA_ROCKET,
    EARTH,
    SPACE_COLONY
} from '../../keys/puppets'

const ARRANGEMENTS_THINGS = {
    [CUTOUTS]: {
        [TINTIN_POSTER]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 2,
                zHeight: 3,
                zOffset: 2
            }
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
    [FIXTURES]: {
        [BEETHOVEN_BUST]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [FURNITURES]: {
        [CAPTAIN_BED_PILLOW_BLANKET]: {
            yIndex: 4,
            arrangement: {
                xPosition: 8,
                xWidth: 4,
                zHeight: 1
            }
        }
    },
    [PANELS]: {
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
            yIndex: 0,
            arrangement: {
                xPosition: 3,
                xWidth: 6,
                zHeight: 8
            }
        }
    }
}

export const THINGS_BEDROOM_ENRAGED = {
    [FIXTURES]: {
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
    [FLATS]: {
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
    [BUBBLES]: {
        [DOGS_SKETCHBOOK]: {
            yIndex: 4,
            arrangement: {
                xPosition: 6,
                xWidth: 3,
                zHeight: 4
            }
        }
    },
    [FIXTURES]: {
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
    [FIXTURES]: {
        [RED_ENVELOPE_MONEY]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [FLATS]: {
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
    [PUPPETS]: {
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
    [FIXTURES]: {
        [BEYONDER_ENVELOPE]: {
            yIndex: 5,
            arrangement: {
                xPosition: 5,
                xWidth: 1,
                zHeight: 1
            }
        }
    },
    [PUPPETS]: {
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
