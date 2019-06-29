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
} from 'constants/scene/things/bubbles'

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
