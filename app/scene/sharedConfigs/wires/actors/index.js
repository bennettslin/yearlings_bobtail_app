import {
    BENNETT,
    BENNETT_FATHER,
    ESTHER_MOTHER,
    MOTHER,
    FATHER
} from '../../../../constants/scene/actors'

import {
    HURT_CONSOLING,
    SOBBING_SHIELDING
} from '../../../../constants/scene/actors/estherMother'

import {
    ACCUSATORY,
    REELING
} from '../../../../constants/scene/actors/father'

import {
    PAST,
    PRESENT,
    FUTURE
} from '../../../../constants/scene/actors/songs'

const WIRES_MAP = {
    [BENNETT]: {
        [PAST]: {},
        [FUTURE]: {}
    },
    [BENNETT_FATHER]: {
        [PRESENT]: {}
    },
    [ESTHER_MOTHER]: {
        [HURT_CONSOLING]: {},
        [SOBBING_SHIELDING]: {}
    },
    [FATHER]: {
        [ACCUSATORY]: {},
        [PAST]: {},
        [FUTURE]: {},
        [REELING]: {}
    },
    [MOTHER]: {
        [PRESENT]: {},
        [FUTURE]: {}
    }
}

export const getWireForActor = ({
    actorKey,
    presenceKey
}) => (
    WIRES_MAP[actorKey] || {}
)[presenceKey]
