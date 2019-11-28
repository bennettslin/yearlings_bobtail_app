import { OCEAN_DEPTHS_KEY } from '../../../constants/scene/scenes'

import { SAND_COLOUR as N } from '../../cubes/colours'

import { RIGHT } from '../../cubes/zIndices'

const CUBES = {
    [OCEAN_DEPTHS_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [N]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

export default CUBES
