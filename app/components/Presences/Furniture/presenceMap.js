import PropTypes from 'prop-types'

import CaptainBedPillowBlanket from './Furnitures/CaptainBedPillowBlanket'
import BennettPillowsBlanket from './Furnitures/BennettPillowsBlanket'
import LizPillowsPile from './Furnitures/LizPillowsPile'
import LizPillowsPileReflection from './Furnitures/LizPillowsPileReflection'
import LizBlanketPile from './Furnitures/LizBlanketPile'
import LizBlanketPileReflection from './Furnitures/LizBlanketPileReflection'

import {
    CAPTAIN_BED_PILLOW_BLANKET,
    BENNETT_PILLOWS_BLANKET,
    LIZ_PILLOWS_PILE,
    LIZ_PILLOWS_PILE_REFLECTION,
    LIZ_BLANKET_PILE,
    LIZ_BLANKET_PILE_REFLECTION
} from 'scene/things/keys/furniture'

export const propTypes = {
    [CAPTAIN_BED_PILLOW_BLANKET]: PropTypes.bool,
    [BENNETT_PILLOWS_BLANKET]: PropTypes.bool,
    [LIZ_PILLOWS_PILE]: PropTypes.bool,
    [LIZ_PILLOWS_PILE_REFLECTION]: PropTypes.bool,
    [LIZ_BLANKET_PILE]: PropTypes.bool,
    [LIZ_BLANKET_PILE_REFLECTION]: PropTypes.bool
}

export default {
    [CAPTAIN_BED_PILLOW_BLANKET]: CaptainBedPillowBlanket,
    [BENNETT_PILLOWS_BLANKET]: BennettPillowsBlanket,
    [LIZ_PILLOWS_PILE]: LizPillowsPile,
    [LIZ_PILLOWS_PILE_REFLECTION]: LizPillowsPileReflection,
    [LIZ_BLANKET_PILE]: LizBlanketPile,
    [LIZ_BLANKET_PILE_REFLECTION]: LizBlanketPileReflection
}
