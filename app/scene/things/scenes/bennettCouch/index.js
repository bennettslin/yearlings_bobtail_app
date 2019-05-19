import {
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FURNITURES
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
    BENNETT_RECORD_PLAYER_COUCH,
    BENNETT_COUCH_LAMP,
    TELEVISION_ALBUM,
    KEYBOARD
} from '../../keys/fixtures'
import { BENNETT_CUSHIONS } from '../../keys/furniture'

const ARRANGEMENTS_THINGS = {
    [FIXTURES]: {
        [BENNETT_RECORD_PLAYER_COUCH]: {
            yIndex: 1,
            arrangement: {
                xFloat: 8.5,
                xWidth: 2,
                zHeight: 2
            }
        },
        [BENNETT_COUCH_LAMP]: {
            yIndex: 2,
            arrangement: {
                xFloat: 2,
                xWidth: 0.5,
                zHeight: 1
            }
        }
    },
    [FURNITURES]: {
        [BENNETT_CUSHIONS]: {
            yIndex: 3,
            arrangement: {
                xFloat: 5,
                xWidth: 5,
                zHeight: 0.5
            }
        }
    }
}

export const THINGS_BENETT_COUCH_OPINION = {
    [BACKDROPS]: {
        [BENNETT_COUCH_THOUGHT_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xFloat: 5.5,
                xWidth: 10,
                zHeight: 8
            }
        }
    },
    [CUTOUTS]: {
        [NIRVANA_POSTER]: {
            yIndex: 1,
            arrangement: {
                xFloat: 9,
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
                xFloat: 9,
                xWidth: 2,
                zHeight: 2
            }
        }
    }
}

export const THINGS_BENETT_COUCH_PONDERING = {
    [CUTOUTS]: {
        [LEONARD_COHEN_POSTER]: {
            yIndex: 1,
            arrangement: {
                xFloat: 9,
                xWidth: 2,
                zHeight: 3,
                zOffset: 2
            }
        }
    }
}

export const THINGS_BENETT_COUCH_RUBIKS = {
    [CUTOUTS]: {
        [PROGRESS_CHART_EARLY]: {
            yIndex: 1,
            arrangement: {
                xFloat: 9,
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
                xFloat: 9,
                xWidth: 2,
                zHeight: 2
            }
        }
    }
}

export const THINGS_BENETT_COUCH_READING = {
    [CUTOUTS]: {
        [PROGRESS_CHART_LATE]: {
            yIndex: 1,
            arrangement: {
                xFloat: 9,
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
                xFloat: 2,
                xWidth: 0.5,
                zHeight: 1
            }
        }
    }
}

export default ARRANGEMENTS_THINGS
