import Bathtub from './Bathtub'
import MirroredSink from './MirroredSink'
import TowelRack from './TowelRack'

import {
    BATHTUB,
    MIRRORED_SINK,
    TOWEL_RACK
} from 'scene/cutoutKeys'

const CUTOUTS_NOHO_BATHROOM = {
    [BATHTUB]: Bathtub,
    [MIRRORED_SINK]: MirroredSink,
    [TOWEL_RACK]: TowelRack
}

export {
    CUTOUTS_NOHO_BATHROOM
}
