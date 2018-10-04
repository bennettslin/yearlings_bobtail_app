import { OAKLAND_PUBLIC_KEY } from 'scene/cubesKeys'

const
    OAKLAND_PUBLIC_CUBES = {
        floor: {
            zIndices: [
                [1, 1, 1, 0, 0, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
                [0]
            ]
        }
    },

    CUBES = {
        [OAKLAND_PUBLIC_KEY]: OAKLAND_PUBLIC_CUBES
    }

export default CUBES
