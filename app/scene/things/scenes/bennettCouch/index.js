import {
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FURNITURES,
    PANELS
} from 'constants/scene'
import { BENNETT_COUCH_THOUGHT_BACKDROP } from '../../keys/backdrops'
import {
    NIRVANA_POSTER,
    LEONARD_COHEN_POSTER,
    PROGRESS_CHART_EARLY,
    PROGRESS_CHART_LATE
} from '../../keys/cutouts'
import {
    POLICE_ALBUM,
    BENNETT_RECORD_PLAYER,
    BENNETT_COUCH_LAMP,
    TELEVISION_ALBUM,
    KEYBOARD
} from '../../keys/fixtures'
import {
    BENNETT_COUCH,
    BENNETT_LEFT_ARMREST,
    BENNETT_RIGHT_ARMREST
} from '../../keys/panels'
import { BENNETT_CUSHIONS } from '../../keys/furniture'

const ARRANGEMENTS_THINGS = {
    [FIXTURES]: {
        [BENNETT_RECORD_PLAYER]: {
            yIndex: 1,
            arrangement: {
                xPosition: 8.5,
                xWidth: 2,
                zHeight: 2
            }
        },
        [BENNETT_COUCH_LAMP]: {
            yIndex: 2,
            arrangement: {
                xPosition: 1,
                xWidth: 1,
                zHeight: 2
            }
        }
    },
    [FURNITURES]: {
        [BENNETT_CUSHIONS]: {
            yIndex: 3,
            arrangement: {
                xPosition: 5,
                xWidth: 5,
                zHeight: 0.5
            }
        }
    },
    [PANELS]: {
        [BENNETT_COUCH]: {
            yIndex: 3,
            arrangement: {
                xPosition: 5,
                xWidth: 5,
                zHeight: 0.5
            }
        },
        [BENNETT_LEFT_ARMREST]: {
            yIndex: 3,
            arrangement: {
                xPosition: 5,
                xWidth: 5,
                zHeight: 0.5
            }
        },
        [BENNETT_RIGHT_ARMREST]: {
            yIndex: 3,
            arrangement: {
                xPosition: 5,
                xWidth: 5,
                zHeight: 0.5
            }
        }
    }
}

export const THINGS_BENNETT_COUCH_OPINION = {
    [BACKDROPS]: {
        [BENNETT_COUCH_THOUGHT_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 8
            }
        }
    },
    [CUTOUTS]: {
        [NIRVANA_POSTER]: {
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
        [POLICE_ALBUM]: {
            yIndex: 2,
            arrangement: {
                xPosition: 9,
                xWidth: 2,
                zHeight: 2
            }
        }
    }
}

export const THINGS_BENNETT_COUCH_PONDERING = {
    [CUTOUTS]: {
        [LEONARD_COHEN_POSTER]: {
            yIndex: 1,
            arrangement: {
                xPosition: 9,
                xWidth: 2,
                zHeight: 3,
                zOffset: 2
            }
        }
    }
}

export const THINGS_BENNETT_COUCH_RUBIKS = {
    [CUTOUTS]: {
        [PROGRESS_CHART_EARLY]: {
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
        [TELEVISION_ALBUM]: {
            yIndex: 2,
            arrangement: {
                xPosition: 9,
                xWidth: 2,
                zHeight: 2
            }
        }
    }
}

export const THINGS_BENNETT_COUCH_READING = {
    [CUTOUTS]: {
        [PROGRESS_CHART_LATE]: {
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
        [KEYBOARD]: {
            yIndex: 2,
            arrangement: {
                xPosition: 2,
                xWidth: 0.5,
                zHeight: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
