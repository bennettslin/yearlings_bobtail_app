import {
    CARDBOARD,
    FIXTURE,
    PANEL
} from '../../../constants/scene/things'
import {
    POLICE_ALBUM,
    NIRVANA_POSTER,
    LEONARD_COHEN_POSTER,
    TELEVISION_ALBUM,
    PROGRESS_CHART_EARLY,
    PROGRESS_CHART_LATE
} from '../../../constants/scene/things/cardboards'
import {
    BENNETT_RECORD_PLAYER,
    BENNETT_COUCH_LAMP,
    KEYBOARD
} from '../../../constants/scene/things/fixtures'
import {
    WIDE_COUCH_BENNETT,
    WIDE_ARMREST_BENNETT__LEFT,
    WIDE_ARMREST_BENNETT__RIGHT
} from '../../../constants/scene/things/panels'

export default {
    [FIXTURE]: {
        [BENNETT_RECORD_PLAYER]: {
            yIndex: 1,
            xPosition: 8.5
        },
        [BENNETT_COUCH_LAMP]: {
            yIndex: 2,
            xPosition: 1,
            scaleFactor: 0.3
        }
    },
    [PANEL]: {
        [WIDE_COUCH_BENNETT]: {
            yIndex: 3,
            xPosition: 4,
            scaleFactor: 0.25
        },
        [WIDE_ARMREST_BENNETT__LEFT]: {
            yIndex: 4,
            xPosition: 1.2,
            scaleFactor: 0.3
        },
        [WIDE_ARMREST_BENNETT__RIGHT]: {
            yIndex: 4,
            xPosition: 6.8,
            scaleFactor: 0.3,
            flipHorizontal: true
        }
    }
}

export const THINGS_BENNETT_COUCH_OPINION = {
    [CARDBOARD]: {
        [POLICE_ALBUM]: {
            yIndex: 2,
            xPosition: 9,
            scaleFactor: 0.15
        },
        [NIRVANA_POSTER]: {
            yIndex: 1,
            xPosition: 8.5,
            zOffset: 2,
            scaleFactor: 0.25
        }
    }
}

export const THINGS_BENNETT_COUCH_PONDERING = {
    [CARDBOARD]: {
        [LEONARD_COHEN_POSTER]: {
            yIndex: 1,
            xPosition: 8.5,
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
            xPosition: 8.5,
            zOffset: 1,
            scaleFactor: 0.25
        }
    }
}

export const THINGS_BENNETT_COUCH_READING = {
    [CARDBOARD]: {
        [PROGRESS_CHART_LATE]: {
            yIndex: 1,
            xPosition: 9,
            zOffset: 1,
            scaleFactor: 0.25
        }
    },
    [FIXTURE]: {
        [KEYBOARD]: {
            yIndex: 4,
            xPosition: 8
        }
    }
}
