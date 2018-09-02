import {
    PROLOGUE,
    EPILOGUE
} from 'scene/actors/songs'

const ARRANGEMENTS_MAP = {
    [PROLOGUE]: {
        yIndex: 3,
        arrangement: {
            xFloat: 5.5,
            xWidth: 1,
            zHeight: 5
        }
    },
    [EPILOGUE]: {
        yIndex: -1,
        arrangement: {
            xFloat: 0,
            xWidth: 0,
            zHeight: 0
        }
    }
}

export default ARRANGEMENTS_MAP
