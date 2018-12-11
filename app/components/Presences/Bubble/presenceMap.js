import PropTypes from 'prop-types'

import TogetherSketchbook from './Bubbles/TogetherSketchbook'
import ApartSketchbook from './Bubbles/ApartSketchbook'
import DogsSketchbook from './Bubbles/DogsSketchbook'
import EscapePodSketchbook from './Bubbles/EscapePodSketchbook'
import CinemaThoughts from './Bubbles/CinemaThoughts'
import GoKartThought from './Bubbles/GoKartThought'
import WaitingRoomThoughts from './Bubbles/WaitingRoomThoughts'
import TarpitThought from './Bubbles/TarpitThought'
import SiblingThought from './Bubbles/SiblingThought'
import KhariAttackSpeech from './Bubbles/KhariAttackSpeech'
import LizDefenceSpeech from './Bubbles/LizDefenceSpeech'
import LizThought from './Bubbles/LizThought'

import {
    TOGETHER_SKETCHBOOK,
    APART_SKETCHBOOK,
    DOGS_SKETCHBOOK,
    ESCAPE_POD_SKETCHBOOK,
    CINEMA_THOUGHTS,
    GO_KART_THOUGHT,
    WAITING_ROOM_THOUGHTS,
    TARPIT_THOUGHT,
    SIBLING_THOUGHT,
    KHARI_ATTACK_SPEECH,
    LIZ_DEFENCE_SPEECH,
    LIZ_THOUGHT
} from 'scene/bubbleKeys'

const propTypes = {
    [TOGETHER_SKETCHBOOK]: PropTypes.bool,
    [APART_SKETCHBOOK]: PropTypes.bool,
    [DOGS_SKETCHBOOK]: PropTypes.bool,
    [ESCAPE_POD_SKETCHBOOK]: PropTypes.bool,
    [CINEMA_THOUGHTS]: PropTypes.bool,
    [GO_KART_THOUGHT]: PropTypes.bool,
    [WAITING_ROOM_THOUGHTS]: PropTypes.bool,
    [TARPIT_THOUGHT]: PropTypes.bool,
    [SIBLING_THOUGHT]: PropTypes.bool,
    [KHARI_ATTACK_SPEECH]: PropTypes.bool,
    [LIZ_DEFENCE_SPEECH]: PropTypes.bool,
    [LIZ_THOUGHT]: PropTypes.bool
}

export { propTypes }

export default {
    [TOGETHER_SKETCHBOOK]: TogetherSketchbook,
    [APART_SKETCHBOOK]: ApartSketchbook,
    [DOGS_SKETCHBOOK]: DogsSketchbook,
    [ESCAPE_POD_SKETCHBOOK]: EscapePodSketchbook,
    [CINEMA_THOUGHTS]: CinemaThoughts,
    [GO_KART_THOUGHT]: GoKartThought,
    [WAITING_ROOM_THOUGHTS]: WaitingRoomThoughts,
    [TARPIT_THOUGHT]: TarpitThought,
    [SIBLING_THOUGHT]: SiblingThought,
    [KHARI_ATTACK_SPEECH]: KhariAttackSpeech,
    [LIZ_DEFENCE_SPEECH]: LizDefenceSpeech,
    [LIZ_THOUGHT]: LizThought
}
