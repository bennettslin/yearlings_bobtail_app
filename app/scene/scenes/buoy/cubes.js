import { BUOY_KEY } from '../../../constants/scene/scenes'

import {
    DEFAULT_COLOUR as D,
    OCEAN_COLOUR as O
} from '../../cubes/colours'

import { RIGHT } from '../../cubes/zIndices'

const CUBES = {
    [BUOY_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [D],
                [O],
                [O],
                [O],
                [O],
                [D]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

export default CUBES
