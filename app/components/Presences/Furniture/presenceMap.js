import PropTypes from 'prop-types'

import CaptainBedPillowBlanket from './Furnitures/CaptainBedPillowBlanket'
import BennettCushions from './Furnitures/BennettCushions'
import BennettPillowsBlanket from './Furnitures/BennettPillowsBlanket'
import LizPillowsPile from './Furnitures/LizPillowsPile'
import LizPillowsPileReflection from './Furnitures/LizPillowsPileReflection'
import LizBlanketPile from './Furnitures/LizBlanketPile'
import LizBlanketPileReflection from './Furnitures/LizBlanketPileReflection'
import AtticCushions from './Furnitures/AtticCushions'
import LizCushions from './Furnitures/LizCushions'
import MiriamCushions from './Furnitures/MiriamCushions'
import HospitalPillow from './Furnitures/HospitalPillow'
import HospitalPillowLowered from './Furnitures/HospitalPillowLowered'

import {
    CAPTAIN_BED_PILLOW_BLANKET,
    BENNETT_CUSHIONS,
    BENNETT_PILLOWS_BLANKET,
    LIZ_PILLOWS_PILE,
    LIZ_PILLOWS_PILE_REFLECTION,
    LIZ_BLANKET_PILE,
    LIZ_BLANKET_PILE_REFLECTION,
    ATTIC_CUSHIONS,
    LIZ_CUSHIONS,
    LIZ_CUSHIONS_THOUGHT,
    MIRIAM_CUSHIONS,
    HOSPITAL_PILLOW,
    HOSPITAL_PILLOW_LOWERED
} from 'scene/things/keys/furniture'

export const propTypes = {
    [CAPTAIN_BED_PILLOW_BLANKET]: PropTypes.bool,
    [BENNETT_CUSHIONS]: PropTypes.bool,
    [BENNETT_PILLOWS_BLANKET]: PropTypes.bool,
    [LIZ_PILLOWS_PILE]: PropTypes.bool,
    [LIZ_PILLOWS_PILE_REFLECTION]: PropTypes.bool,
    [LIZ_BLANKET_PILE]: PropTypes.bool,
    [LIZ_BLANKET_PILE_REFLECTION]: PropTypes.bool,
    [ATTIC_CUSHIONS]: PropTypes.bool,
    [LIZ_CUSHIONS]: PropTypes.bool,
    [LIZ_CUSHIONS_THOUGHT]: PropTypes.bool,
    [MIRIAM_CUSHIONS]: PropTypes.bool,
    [HOSPITAL_PILLOW]: PropTypes.bool,
    [HOSPITAL_PILLOW_LOWERED]: PropTypes.bool
}

export default {
    [CAPTAIN_BED_PILLOW_BLANKET]: CaptainBedPillowBlanket,
    [BENNETT_CUSHIONS]: BennettCushions,
    [BENNETT_PILLOWS_BLANKET]: BennettPillowsBlanket,
    [LIZ_PILLOWS_PILE]: LizPillowsPile,
    [LIZ_PILLOWS_PILE_REFLECTION]: LizPillowsPileReflection,
    [LIZ_BLANKET_PILE]: LizBlanketPile,
    [LIZ_BLANKET_PILE_REFLECTION]: LizBlanketPileReflection,
    [ATTIC_CUSHIONS]: AtticCushions,
    [LIZ_CUSHIONS]: LizCushions,
    [LIZ_CUSHIONS_THOUGHT]: LizCushions,
    [MIRIAM_CUSHIONS]: MiriamCushions,
    [HOSPITAL_PILLOW]: HospitalPillow,
    [HOSPITAL_PILLOW_LOWERED]: HospitalPillowLowered
}
