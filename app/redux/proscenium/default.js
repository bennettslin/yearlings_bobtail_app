import { getProsceniumDimensionCoordinates } from '../../helpers/resize/proscenium'
import { INITIAL_STAGE_DIMENSION_COORDINATES } from '../stage/default'

export const {
    prosceniumTop: INITIAL_PROSCENIUM_TOP,
    prosceniumLeft,
    prosceniumWidth,
    prosceniumHeight: INITIAL_PROSCENIUM_HEIGHT

} = getProsceniumDimensionCoordinates(INITIAL_STAGE_DIMENSION_COORDINATES)

export const PROSCENIUM_DEFAULTS = {
    prosceniumTop: INITIAL_PROSCENIUM_TOP,
    prosceniumLeft,
    prosceniumWidth,
    prosceniumHeight: INITIAL_PROSCENIUM_HEIGHT
}
