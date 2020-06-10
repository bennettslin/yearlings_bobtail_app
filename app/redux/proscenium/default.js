import { getProsceniumDimensionCoordinates } from '../../helpers/resize/proscenium'
import { INITIAL_STAGE_DIMENSION_COORDINATES } from '../stage/default'

export const INITIAL_PROSCENIUM_DIMENSION_COORDINATES =
    getProsceniumDimensionCoordinates(INITIAL_STAGE_DIMENSION_COORDINATES)

export const PROSCENIUM_DEFAULTS = {
    prosceniumDimensionCoordinates: INITIAL_PROSCENIUM_DIMENSION_COORDINATES
}
