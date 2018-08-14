import {
    _SP,
    _ST,
    _TS,
    _LW,
    _PV,
    _BL,
    _SF,
    _SB
} from './hslaKeys'

const
    STAGE_PLATFORM = {
        h: 3,
        s: 13,
        l: 34,
        a: 0.8
    },
    STAGE_FLOOR = {
        h: 29,
        s: 65,
        l: 20,
        a: 0.8
    },
    TEST = {
        h: 0,
        s: 0,
        l: 90,
        a: 0.8
    },
    LAWN = {
        h: 120,
        s: 80,
        l: 75,
        a: 0.8
    },
    PAVEMENT = {
        h: 0,
        s: 0,
        l: 75,
        a: 0.8
    },
    BLACKTOP = {
        h: 0,
        s: 0,
        l: 25,
        a: 0.8
    },
    SCHOOLHOUSE_FLOOR = {
        h: 330,
        s: 25,
        l: 50,
        a: 0.8
    },
    SCHOOLHOUSE_BENCH = {
        h: 30,
        s: 50,
        l: 75,
        a: 0.8
    },

    HSLA_MAP = {
        [_SP]: STAGE_PLATFORM,
        [_ST]: STAGE_FLOOR,
        [_TS]: TEST,
        [_LW]: LAWN,
        [_PV]: PAVEMENT,
        [_BL]: BLACKTOP,
        [_SF]: SCHOOLHOUSE_FLOOR,
        [_SB]: SCHOOLHOUSE_BENCH,
    }

export {
    HSLA_MAP
}
