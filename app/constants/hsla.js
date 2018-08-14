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
        l: 34
    },
    STAGE_FLOOR = {
        h: 29,
        s: 65,
        l: 20
    },
    TEST = {
        h: 0,
        s: 0,
        l: 90
    },
    LAWN = {
        h: 120,
        s: 80,
        l: 75
    },
    PAVEMENT = {
        h: 0,
        s: 0,
        l: 75
    },
    BLACKTOP = {
        h: 0,
        s: 0,
        l: 25
    },
    SCHOOLHOUSE_FLOOR = {
        h: 330,
        s: 25,
        l: 50
    },
    SCHOOLHOUSE_BENCH = {
        h: 30,
        s: 50,
        l: 75
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
