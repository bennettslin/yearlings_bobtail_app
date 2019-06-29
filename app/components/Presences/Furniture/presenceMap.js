import CaptainBedPillow from './Furnitures/CaptainBedPillow'
import CaptainBedBlanket from './Furnitures/CaptainBedBlanket'
import BennettPillow from './Furnitures/BennettPillow'
import BennettBlanket from './Furnitures/BennettBlanket'
import LizPillowsPile from './Furnitures/LizPillowsPile'
import LizPillowsPileReflection from './Furnitures/LizPillowsPileReflection'
import LizBlanketPile from './Furnitures/LizBlanketPile'
import LizBlanketPileReflection from './Furnitures/LizBlanketPileReflection'

import {
    CAPTAIN_BED_PILLOW,
    CAPTAIN_BED_BLANKET,
    BENNETT_PILLOW,
    BENNETT_BLANKET,
    LIZ_PILLOWS_PILE,
    LIZ_PILLOWS_PILE_REFLECTION,
    LIZ_BLANKET_PILE,
    LIZ_BLANKET_PILE_REFLECTION
} from 'constants/scene/things/furniture'

export default {
    [CAPTAIN_BED_PILLOW]: CaptainBedPillow,
    [CAPTAIN_BED_BLANKET]: CaptainBedBlanket,
    [BENNETT_PILLOW]: BennettPillow,
    [BENNETT_BLANKET]: BennettBlanket,
    [LIZ_PILLOWS_PILE]: LizPillowsPile,
    [LIZ_PILLOWS_PILE_REFLECTION]: LizPillowsPileReflection,
    [LIZ_BLANKET_PILE]: LizBlanketPile,
    [LIZ_BLANKET_PILE_REFLECTION]: LizBlanketPileReflection
}
