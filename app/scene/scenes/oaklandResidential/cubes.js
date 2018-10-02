import { OAKLAND_RESIDENTIAL_KEY } from 'scene/cubesKeys'

const
    OAKLAND_RESIDENTIAL_CUBES = {
        floor: {
            zIndices: [
                [0],
                [1],
                [1, 1, 1, 1, 1, 1, 1, 1],
                [1, 1, 1, 1, 0, 1, 1, 0, 1],
                [1, 1, 1, 0, 0, 1, 1, 0, 0, 1],
                [0]
            ]
        }
    },

    CUBES = {
        [OAKLAND_RESIDENTIAL_KEY]: OAKLAND_RESIDENTIAL_CUBES
    }

export default CUBES
