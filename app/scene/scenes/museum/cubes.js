import { MUSEUM_KEY } from 'scene/cubesKeys'

const
    MUSEUM_CUBES = {
        floor: {
            zIndices: [
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 3, 3, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 3, 3, 1, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0]
            ]
        }
    },

    CUBES = {
        [MUSEUM_KEY]: MUSEUM_CUBES
    }

export default CUBES
