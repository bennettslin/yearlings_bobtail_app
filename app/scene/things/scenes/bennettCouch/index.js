import {
    BACKDROPS,
    CARDBOARDS,
    FIXTURES,
    PANELS
} from 'constants/scene'
import { BENNETT_COUCH_THOUGHT_BACKDROP } from '../../keys/backdrops'
import {
    POLICE_ALBUM,
    NIRVANA_POSTER,
    LEONARD_COHEN_POSTER,
    TELEVISION_ALBUM,
    PROGRESS_CHART_EARLY,
    PROGRESS_CHART_LATE
} from '../../keys/cardboards'
import {
    BENNETT_RECORD_PLAYER,
    BENNETT_COUCH_LAMP,
    KEYBOARD
} from '../../keys/fixtures'
import {
    BENNETT_COUCH,
    BENNETT_LEFT_ARMREST,
    BENNETT_RIGHT_ARMREST
} from '../../keys/panels'

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
    [CARDBOARDS]: {
        [POLICE_ALBUM]: {
            yIndex: 2,
            arrangement: {
                xPosition: 9,
                xWidth: 2,
                zHeight: 2
            }
        },
        [NIRVANA_POSTER]: {
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

export const THINGS_BENNETT_COUCH_PONDERING = {
    [CARDBOARDS]: {
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
    [CARDBOARDS]: {
        [TELEVISION_ALBUM]: {
            yIndex: 2,
            arrangement: {
                xPosition: 9,
                xWidth: 2,
                zHeight: 2
            }
        },
        [PROGRESS_CHART_EARLY]: {
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

export const THINGS_BENNETT_COUCH_READING = {
    [CARDBOARDS]: {
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
