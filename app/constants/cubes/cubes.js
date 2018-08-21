import { CUBES_STAGE } from './cubesStage'
import { CUBES_NOHO } from './cubesNoho'

import { CUBES_INDOOR } from './cubesIndoor'
import { CUBES_OUTDOOR } from './cubesOutdoor'
import { CUBES_OTHER } from './cubesOther'

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
