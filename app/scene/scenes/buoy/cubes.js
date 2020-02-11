import { BUOY_KEY } from '../../../constants/scene/scenes'

import { OCEAN_COLOUR as V } from '../../cubes/colours'

import { RIGHT } from '../../cubes/zIndices'

const CUBES = {
    [BUOY_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [V]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

export default CUBES
