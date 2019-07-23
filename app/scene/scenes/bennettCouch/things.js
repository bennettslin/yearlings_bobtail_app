import {
    BACKDROP,
    CARDBOARD,
    FIXTURE,
    PANEL
} from 'constants/scene'
import { BENNETT_COUCH_THOUGHT_BACKDROP } from 'constants/scene/things/backdrops'
import {
    POLICE_ALBUM,
    NIRVANA_POSTER,
    LEONARD_COHEN_POSTER,
    TELEVISION_ALBUM,
    PROGRESS_CHART_EARLY,
    PROGRESS_CHART_LATE
} from 'constants/scene/things/cardboards'
import {
    BENNETT_RECORD_PLAYER,
    BENNETT_COUCH_LAMP,
    KEYBOARD
} from 'constants/scene/things/fixtures'
import {
    WIDE_COUCH__BENNETT,
    WIDE_ARMREST__BENNETT_LEFT,
    WIDE_ARMREST__BENNETT_RIGHT
} from 'constants/scene/things/panels'
import { PROGRESS_CHART_SHARED } from '../../shared'

const ARRANGEMENTS_THINGS = {
    [FIXTURE]: {
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
    [PANEL]: {
        [WIDE_COUCH__BENNETT]: {
            yIndex: 3,
            xPosition: 4.5,
            scaleFactor: 0.3
        },
        [WIDE_ARMREST__BENNETT_LEFT]: {
            yIndex: 4,
            xPosition: 1,
            scaleFactor: 0.3
        },
        [WIDE_ARMREST__BENNETT_RIGHT]: {
            yIndex: 4,
            xPosition: 8,
            scaleFactor: 0.3,
            flipHorizontal: true
        }
    }
}

export const THINGS_BENNETT_COUCH_OPINION = {
    [BACKDROP]: {
        [BENNETT_COUCH_THOUGHT_BACKDROP]: {
            yIndex: 0,
            arrangement: {
                xPosition: 5.5,
                xWidth: 10,
                zHeight: 8
            }
        }
    },
    [CARDBOARD]: {
        [POLICE_ALBUM]: {
            yIndex: 2,
            xPosition: 9,
            scaleFactor: 0.15
        },
        [NIRVANA_POSTER]: {
            yIndex: 1,
            xPosition: 9,
            zOffset: 2,
            scaleFactor: 0.25
        }
    }
}

export const THINGS_BENNETT_COUCH_PONDERING = {
    [CARDBOARD]: {
        [LEONARD_COHEN_POSTER]: {
            yIndex: 1,
            xPosition: 9,
            zOffset: 2,
            scaleFactor: 0.25
        }
    }
}

export const THINGS_BENNETT_COUCH_RUBIKS = {
    [CARDBOARD]: {
        [TELEVISION_ALBUM]: {
            yIndex: 2,
            xPosition: 9,
            scaleFactor: 0.15
        },
        [PROGRESS_CHART_EARLY]: {
            yIndex: 1,
            xPosition: 9,
            zOffset: 1,
            scaleFactor: 0.25,
            sharedStyle: PROGRESS_CHART_SHARED
        }
    }
}

export const THINGS_BENNETT_COUCH_READING = {
    [CARDBOARD]: {
        [PROGRESS_CHART_LATE]: {
            yIndex: 1,
            xPosition: 9,
            zOffset: 1,
            scaleFactor: 0.25,
            sharedStyle: PROGRESS_CHART_SHARED
        }
    },
    [FIXTURE]: {
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
