import { SNOWGLOBES_PRESENT_KEY } from 'scene/cubesKeys'

// import {
//     g
// } from 'scene/cubesConstants'

const
    SNOWGLOBES_PRESENT_CUBES = {
        floor: {
            zIndices: [
                [0],
                [0, 9, 5, 5, 3, 2, 0, 0, 0, 0, 0, 0],
                [0, 9, 5, 5, 3, 2, 8, 8, 8, 8, 8, 2],
                [0, 9, 5, 5, 3, 2, 4, 4, 4, 4, 4, 2],
                [0, 3, 3, 3, 3, 2, 4, 4, 4, 4, 4, 2],
                [0]
            ]
        }
    },

    CUBES = {
        [SNOWGLOBES_PRESENT_KEY]: SNOWGLOBES_PRESENT_CUBES
    }

export default CUBES
