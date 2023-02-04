import { BACKSTAGE_KEY } from '../../../../../src/constants/scene/scenes'
import {
    PLATFORM_COLOUR as P,
    SCHOOL_WALL_COLOUR as W,
    BASEMENT_CEILING_COLOUR as C,
} from '../../../../../src/constants/scene/cubes/colours'
import { e, f, g } from '../../../../../src/constants/scene/cubes/zIndices'

export default {
    [BACKSTAGE_KEY]: {
        ceiling: {
            hslaColours: [
                [W],
                [C, C, C, C, C, C, C, C, C, C, C, C],
                [W, C, W, W, C, W, W, C, W, W, C, W],
                [C, C, C, C, C, C, C, C, C, C, C, C],
                [W, C, W, W, C, W, W, C, W, W, C, W],
                [C, C, C, C, C, C, C, C, C, C, C, C],
            ],
            zIndices: [
                [1],
                [f, e, f, f, e, f, f, e, f, f, e, f],
                [g, e, g, g, e, g, g, e, g, g, e, g],
                [f, e, f, f, e, f, f, e, f, f, e, f],
                [g, e, g, g, e, g, g, e, g, g, e, g],
                [f, e, f, f, e, f, f, e, f, f, e, f],
            ],
        },
        // ceiling: {
        //     hslaColours: [
        //         [W],
        //     ],
        //     zIndices: [
        //         [1],
        //         [1, g, g, g, g, g, g, g, g, g, g, 1],
        //         [e, g, g, g, g, g, g, g, g, g, g, e],
        //         [e, g, g, g, g, g, g, g, g, g, g, e],
        //         [e, g, g, g, g, g, g, g, g, g, g, e],
        //         [1, g, g, g, g, g, g, g, g, g, g, 1],
        //     ],
        // },
        floor: {
            hslaColours: [
                [P],
            ],
            zIndices: [
                [1],
            ],
        },
    },
}
