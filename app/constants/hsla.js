import {
    _SP,
    _ST,
    _TS
} from './hslaKeys'

const
    SPL = {
        h: 3,
        s: 13,
        l: 34,
        a: 0.8
    },
    STG = {
        h: 29,
        s: 65,
        l: 20,
        a: 0.8
    },
    TST = {
        h: 0,
        s: 0,
        l: 90,
        a: 0.8
    },

    HSLA_MAP = {
        [_SP]: SPL,
        [_ST]: STG,
        [_TS]: TST,
    }

export {
    HSLA_MAP
}
