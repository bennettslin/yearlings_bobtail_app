import { CLIFF_KEY } from '../../../constants/scene/scenes'

import {
    GROUND_COLOUR as G,
    HILL_COLOUR as H,
    HILL_DARKER_COLOUR as I
} from '../../cubes/colours'

import { RIGHT } from '../../cubes/zIndices'

const CUBES = {
    [CLIFF_KEY]: {
        slantDirection: RIGHT,
        floor: {
            hslaColours: [
                [G],
                [H, I, I, H, H, I, I, G],
                [I, H, H, I, I, H, H, I, G],
                [H, I, I, H, H, I, I, H, G],
                [H, H, I, I, H, H, I, G],
                [I, I, H, H, I, I, G]
            ],
            zIndices: [
                [0],
                [3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 3, 0],
                [3, 3, 3, 3, 3, 3, 0]
            ]
        }
    }
}

export default CUBES
