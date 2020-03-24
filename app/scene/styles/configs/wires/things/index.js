import { convertPresenceKeyToClassName } from 'helpers/format'
import {
    BUBBLE,
    PUPPET
} from '../../../../../constants/scene/things'
import {
    BUBBLE_LARGE,
    BUBBLE_MEDIUM,
    BUBBLE_SMALL,
    CINEMA_THOUGHT_BUYING,
    CINEMA_THOUGHT_RECORDING,
    ESTHER_SPEECH,
    GO_KART_THOUGHT,
    KHARI_ATTACK_SPEECH,
    LIZ_DEFENCE_SPEECH,
    LIZ_THOUGHT,
    PHARMACY_CEL,
    SKETCHBOOK,
    THOUGHT_LARGE,
    THOUGHT_MEDIUM,
    THOUGHT_SMALL,
    WAITING_THOUGHT_SINGING,
    WAITING_THOUGHT_STUDYING,
    WAITING_THOUGHT_WALKING
} from '../../../../../constants/scene/things/bubbles'
import {
    GHOST_ODIN_ALLEY,
    GHOST_ODIN_CAMPUS,
    GHOST_ODIN_CLUB,
    GHOST_ODIN_DEMONSTRATION,
    OPAL_COUCH,
    OPAL_GAZING,
    PEACOCK,
    PEAHEN,
    PUPPET_ANITA_BEGIN,
    PUPPET_ANITA_END,
    PUPPET_ANITA_MIDDLE,
    PUPPET_BENNETT_BEGIN,
    PUPPET_BENNETT_END,
    PUPPET_BENNETT_MIDDLE,
    PUPPET_CHRISTOPHER_BEGIN,
    PUPPET_CHRISTOPHER_END,
    PUPPET_CHRISTOPHER_MIDDLE,
    PUPPET_FATHER_BEGIN,
    PUPPET_FATHER_END,
    PUPPET_FATHER_MIDDLE,
    PUPPET_KHARI_LIZ,
    PUPPET_MOTHER_BEGIN,
    PUPPET_MOTHER_END,
    PUPPET_MOTHER_MIDDLE,
    PUPPET_REATTA
} from '../../../../../constants/scene/things/puppets'

const BUBBLE_DEFAULT = {
    wires: [
        { x: 0.25, y: 0.5 },
        { x: 0.75, y: 0.5 }
    ]
}

const WIRES_MAP = {
    [BUBBLE]: {
        [ESTHER_SPEECH]: BUBBLE_DEFAULT,
        [SKETCHBOOK]: BUBBLE_DEFAULT,
        [BUBBLE_LARGE]: {},
        [BUBBLE_MEDIUM]: {},
        [BUBBLE_SMALL]: {},
        [CINEMA_THOUGHT_BUYING]: BUBBLE_DEFAULT,
        [CINEMA_THOUGHT_RECORDING]: BUBBLE_DEFAULT,
        [GO_KART_THOUGHT]: BUBBLE_DEFAULT,
        [WAITING_THOUGHT_SINGING]: BUBBLE_DEFAULT,
        [WAITING_THOUGHT_STUDYING]: BUBBLE_DEFAULT,
        [WAITING_THOUGHT_WALKING]: BUBBLE_DEFAULT,
        [PHARMACY_CEL]: BUBBLE_DEFAULT,
        [KHARI_ATTACK_SPEECH]: BUBBLE_DEFAULT,
        [LIZ_DEFENCE_SPEECH]: BUBBLE_DEFAULT,
        [LIZ_THOUGHT]: BUBBLE_DEFAULT,
        [THOUGHT_LARGE]: BUBBLE_DEFAULT,
        [THOUGHT_MEDIUM]: BUBBLE_DEFAULT,
        [THOUGHT_SMALL]: BUBBLE_DEFAULT
    },
    [PUPPET]: {
        [PUPPET_ANITA_BEGIN]: { x: 0.55 },
        [PUPPET_BENNETT_BEGIN]: { x: 0.4 },
        [PUPPET_CHRISTOPHER_BEGIN]: {},
        [PUPPET_FATHER_BEGIN]: { x: 0.4 },
        [PUPPET_MOTHER_BEGIN]: { x: 0.7 },
        [PUPPET_ANITA_MIDDLE]: { x: 0.45 },
        [PUPPET_BENNETT_MIDDLE]: { x: 0.55 },
        [PUPPET_CHRISTOPHER_MIDDLE]: { x: 0.55 },
        [PUPPET_FATHER_MIDDLE]: { x: 0.45 },
        [PUPPET_MOTHER_MIDDLE]: {},
        [PUPPET_ANITA_END]: {},
        [PUPPET_BENNETT_END]: {},
        [PUPPET_CHRISTOPHER_END]: {},
        [PUPPET_FATHER_END]: {},
        [PUPPET_MOTHER_END]: { x: 0.4 },
        [OPAL_COUCH]: {
            wires: [
                { x: 0.37, y: 0.18 },
                { x: 0.62, y: 0.45 }
            ],
            placedFront: true
        },
        [OPAL_GAZING]: {
            wires: [
                { x: 0.27, y: 0.47 },
                { x: 0.65, y: 0.1 }
            ],
            placedFront: true
        },
        [PEACOCK]: {
            wires: [
                { x: 0.38, y: 0.35 },
                { x: 0.44, y: 0.48 }
            ],
            placedFront: true
        },
        [PEAHEN]: {
            wires: [
                { x: 0.58, y: 0.4 },
                { x: 0.85 }
            ]
        },
        [PUPPET_REATTA]: {
            wires: [
                { x: 0.2, y: 0.25 },
                { x: 0.8, y: 0.45 }
            ],
            placedFront: true
        },
        [GHOST_ODIN_CAMPUS]: {
            wires: [
                { x: 0.54, y: 0.37 },
                { x: 0.85, y: 0.12 }
            ],
            placedFront: true
        },
        [GHOST_ODIN_CLUB]: {
            wires: [
                { x: 0.38, y: 0.55 },
                { x: 0.53, y: 0.09 }
            ],
            placedFront: true
        },
        [GHOST_ODIN_ALLEY]: {
            wires: [
                { x: 0.42, y: 0.08 },
                { x: 0.68, y: 0.46 }
            ],
            placedFront: true
        },
        [GHOST_ODIN_DEMONSTRATION]: {
            wires: [
                { x: 0.54, y: 0.33 },
                { x: 0.84, y: 0.11 }
            ],
            placedFront: true
        },
        [PUPPET_KHARI_LIZ]: {
            wires: [
                { x: 0.3, y: 0.25 },
                { x: 0.8 }
            ]
        }
    }
}

export const getWireForThing = ({
    presenceType,
    presenceKey
}) => (
    WIRES_MAP[presenceType] || {}
)[convertPresenceKeyToClassName(presenceKey)]
