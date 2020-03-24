import {
    LIZ,
    BENNETT,
    BENNETT_FATHER,
    ESTHER_MOTHER,
    FATHER,
    MOTHER
} from '../../../../../constants/scene/actors'

import {
    HURT_CONSOLING,
    SOBBING_SHIELDING
} from '../../../../../constants/scene/actors/estherMother'

import {
    ACCUSATORY,
    REELING
} from '../../../../../constants/scene/actors/father'

import {
    PETTING_SEATED,
    PETTING_STANDING
} from '../../../../../constants/scene/actors/liz'

import {
    PAST,
    PRESENT,
    FUTURE
} from '../../../../../constants/scene/actors/songs'

const WIRES_MAP = {
    [LIZ]: {
        [PETTING_SEATED]: {
            wires: [

            ]
        },
        [PETTING_STANDING]: {
            wires: [

            ]
        }
    },
    [BENNETT]: {
        [PAST]: {
            wires: [
                { x: 0.25, y: 0.2 },
                { x: 0.4, y: 0.4 }
            ]
        },
        [FUTURE]: {
            wires: [
                { x: 0.55, y: 0.2 },
                { x: 0.6, y: 0.5 }
            ]
        }
    },
    [BENNETT_FATHER]: {
        [PRESENT]: {
            wires: [
                { x: 0.29, y: 0.2 },
                { x: 0.61, y: 0.4 },
                { x: 0.69, y: 0.2 }
            ]
        }
    },
    [ESTHER_MOTHER]: {
        [HURT_CONSOLING]: {
            wires: [
                { x: 0.2, y: 0.5 },
                { x: 0.3, y: 0.3 },
                { x: 0.55, y: 0.4 }
            ]
        },
        [SOBBING_SHIELDING]: {
            wires: [
                { x: 0.48, y: 0.5 },
                { x: 0.55, y: 0.3 },
                { x: 0.6, y: 0.5 }
            ]
        }
    },
    [FATHER]: {
        [ACCUSATORY]: {
            wires: [
                { x: 0.25, y: 0.4 },
                { x: 0.45, y: 0.2 }
            ]
        },
        [PAST]: {
            wires: [
                { x: 0.35, y: 0.4 },
                { x: 0.4, y: 0.3 }
            ]
        },
        [FUTURE]: {
            wires: [
                { x: 0.4, y: 0.5 },
                { x: 0.45, y: 0.3 }
            ]
        },
        [REELING]: {
            wires: [
                { x: 0.22, y: 0.5 },
                { x: 0.24, y: 0.3 }
            ]
        }
    },
    [MOTHER]: {
        [PRESENT]: {
            wires: [
                { x: 0.5, y: 0.3 },
                { x: 0.65, y: 0.5 }
            ]
        },
        [FUTURE]: {
            wires: [
                { x: 0.3, y: 0.5 },
                { x: 0.5, y: 0.4 }
            ]
        }
    }
}

export const getWireForActor = ({
    actorKey,
    presenceKey
}) => (
    WIRES_MAP[actorKey] || {}
)[presenceKey]
