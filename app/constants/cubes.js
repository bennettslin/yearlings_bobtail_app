import { CUBES_STAGE } from './cubes/cubesStage'
import { CUBES_NOHO } from './cubes/cubesNoho'

import { CUBES_INDOOR } from './cubes/cubesIndoor'
import { CUBES_OUTDOOR } from './cubes/cubesOutdoor'
import { CUBES_OTHER } from './cubes/cubesOther'

const CUBES = {
    ...CUBES_STAGE,
    ...CUBES_NOHO,

    // FIXME: Eventually these will be gone.
    ...CUBES_INDOOR,
    ...CUBES_OUTDOOR,
    ...CUBES_OTHER
}

export {
    CUBES
}
