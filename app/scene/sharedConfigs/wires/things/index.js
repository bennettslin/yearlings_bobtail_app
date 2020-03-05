import { convertPresenceKeyToClassName } from 'helpers/format'

import {
    BUBBLE,
    PUPPET
} from '../../../../constants/scene/things'

import {
    APART_SKETCH,
    BUBBLE_LARGE,
    BUBBLE_MEDIUM,
    BUBBLE_SMALL,
    CINEMA_THOUGHT_BUYING,
    CINEMA_THOUGHT_RECORDING,
    DOGS_SKETCH,
    ESCAPE_POD_SKETCH,
    ESTHER_SPEECH,
    GO_KART_THOUGHT,
    KHARI_ATTACK_SPEECH,
    LIZ_DEFENCE_SPEECH,
    LIZ_THOUGHT,
    PHARMACY_CEL,
    SIBLING_CONSTELLATION,
    SKETCHBOOK,
    TARPIT_CONSTELLATION,
    THOUGHT_LARGE,
    THOUGHT_MEDIUM,
    THOUGHT_SMALL,
    TOGETHER_SKETCH,
    WAITING_THOUGHT_SINGING,
    WAITING_THOUGHT_STUDYING,
    WAITING_THOUGHT_WALKING
} from '../../../../constants/scene/things/bubbles'

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
} from '../../../../constants/scene/things/puppets'

const WIRES_MAP = {
    [BUBBLE]: {
        [APART_SKETCH]: {},
        [BUBBLE_LARGE]: {},
        [BUBBLE_MEDIUM]: {},
        [BUBBLE_SMALL]: {},
        [CINEMA_THOUGHT_BUYING]: {},
        [CINEMA_THOUGHT_RECORDING]: {},
        [DOGS_SKETCH]: {},
        [ESCAPE_POD_SKETCH]: {},
        [ESTHER_SPEECH]: {},
        [GO_KART_THOUGHT]: {},
        [KHARI_ATTACK_SPEECH]: {},
        [LIZ_DEFENCE_SPEECH]: {},
        [LIZ_THOUGHT]: {},
        [PHARMACY_CEL]: {},
        [SIBLING_CONSTELLATION]: {},
        [SKETCHBOOK]: {},
        [TARPIT_CONSTELLATION]: {},
        [THOUGHT_LARGE]: {},
        [THOUGHT_MEDIUM]: {},
        [THOUGHT_SMALL]: {},
        [TOGETHER_SKETCH]: {},
        [WAITING_THOUGHT_SINGING]: {},
        [WAITING_THOUGHT_STUDYING]: {},
        [WAITING_THOUGHT_WALKING]: {}
    },
    [PUPPET]: {
        [GHOST_ODIN_ALLEY]: {},
        [GHOST_ODIN_CAMPUS]: {},
        [GHOST_ODIN_CLUB]: {},
        [GHOST_ODIN_DEMONSTRATION]: {},
        [OPAL_COUCH]: {},
        [OPAL_GAZING]: {},
        [PEACOCK]: {},
        [PEAHEN]: {},
        [PUPPET_ANITA_BEGIN]: { x: 0.55 },
        [PUPPET_ANITA_END]: {},
        [PUPPET_ANITA_MIDDLE]: { x: 0.45 },
        [PUPPET_BENNETT_BEGIN]: { x: 0.4 },
        [PUPPET_BENNETT_END]: {},
        [PUPPET_BENNETT_MIDDLE]: { x: 0.55 },
        [PUPPET_CHRISTOPHER_BEGIN]: {},
        [PUPPET_CHRISTOPHER_END]: {},
        [PUPPET_CHRISTOPHER_MIDDLE]: { x: 0.55 },
        [PUPPET_FATHER_BEGIN]: { x: 0.4 },
        [PUPPET_FATHER_END]: {},
        [PUPPET_FATHER_MIDDLE]: { x: 0.45 },
        [PUPPET_KHARI_LIZ]: {},
        [PUPPET_MOTHER_BEGIN]: { x: 0.7 },
        [PUPPET_MOTHER_END]: { x: 0.4 },
        [PUPPET_MOTHER_MIDDLE]: {},
        [PUPPET_REATTA]: [{ x: 0.2, y: 0.8 }, { x: 0.7, y: 0.6 }] // TODO
    }
}

export const getWireForThing = ({
    presenceType,
    presenceKey
}) => (
    WIRES_MAP[presenceType] || {}
)[convertPresenceKeyToClassName(presenceKey)]
