import Bathtub from './Bathtub'
import MirroredSink from './MirroredSink'
import TowelRack from './TowelRack'

import {
    BATHTUB,
    MIRRORED_SINK,
    TOWEL_RACK
} from 'scene/cutoutKeys'

const CUTOUTS_FAMILY_BATHROOM = {
    [BATHTUB]: Bathtub,
    [MIRRORED_SINK]: MirroredSink,
    [TOWEL_RACK]: TowelRack
}

export {
    CUTOUTS_FAMILY_BATHROOM
}
