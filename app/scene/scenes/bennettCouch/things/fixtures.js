import {
    POLICE_ALBUM,
    BENNETT_RECORD_PLAYER,
    ARRANGEMENT_BENNETT_RECORD_PLAYER_COUCH,
    ARRANGEMENT_BENNETT_RECORD_PLAYER_BASEMENT,
    BENNETT_COUCH_LAMP,
    TELEVISION_ALBUM,
    KEYBOARD
} from '../../../fixtureKeys'

const ARRANGEMENTS_MAP = {
    [POLICE_ALBUM]: {
        yIndex: 2,
        arrangement: {
            xFloat: 9,
            xWidth: 2,
            zHeight: 2
        }
    },
    [BENNETT_RECORD_PLAYER]: {
        [ARRANGEMENT_BENNETT_RECORD_PLAYER_COUCH]: {
            yIndex: 1,
            arrangement: {
                xFloat: 8.5,
                xWidth: 2,
                zHeight: 2
            }
        },
        [ARRANGEMENT_BENNETT_RECORD_PLAYER_BASEMENT]: {
            yIndex: 3,
            arrangement: {
                xFloat: 3.5,
                xWidth: 2,
                zHeight: 2
            }
        }
    },
    [BENNETT_COUCH_LAMP]: {
        yIndex: 2,
        arrangement: {
            xFloat: 2,
            xWidth: 0.5,
            zHeight: 1
        }
    },
    [TELEVISION_ALBUM]: {
        yIndex: 2,
        arrangement: {
            xFloat: 9,
            xWidth: 2,
            zHeight: 2
        }
    },
    [KEYBOARD]: {
        yIndex: 2,
        arrangement: {
            xFloat: 2,
            xWidth: 0.5,
            zHeight: 1
        }
    }
}

export default ARRANGEMENTS_MAP
