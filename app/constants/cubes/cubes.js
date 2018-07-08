import { CUBES_INDOOR } from './cubesIndoor'
import { CUBES_OUTDOOR } from './cubesOutdoor'
import { CUBES_OTHER } from './cubesOther'

const CUBES = {
    ...CUBES_INDOOR,
    ...CUBES_OUTDOOR,
    ...CUBES_OTHER
}

export {
    CUBES
}
