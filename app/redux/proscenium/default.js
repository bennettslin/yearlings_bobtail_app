import { getProsceniumDimensionCoordinates } from '../../helpers/resize/proscenium'
import {
    INITIAL_STAGE_TOP,
    INITIAL_STAGE_LEFT,
    INITIAL_STAGE_WIDTH,
    INITIAL_STAGE_HEIGHT
} from '../stage/default'

export const {
    prosceniumTop: INITIAL_PROSCENIUM_TOP,
    prosceniumLeft,
    prosceniumWidth,
    prosceniumHeight: INITIAL_PROSCENIUM_HEIGHT

} = getProsceniumDimensionCoordinates({
    stageTop: INITIAL_STAGE_TOP,
    stageLeft: INITIAL_STAGE_LEFT,
    stageWidth: INITIAL_STAGE_WIDTH,
    stageHeight: INITIAL_STAGE_HEIGHT
})

export const PROSCENIUM_DEFAULTS = {
    prosceniumTop: INITIAL_PROSCENIUM_TOP,
    prosceniumLeft,
    prosceniumWidth,
    prosceniumHeight: INITIAL_PROSCENIUM_HEIGHT
}
