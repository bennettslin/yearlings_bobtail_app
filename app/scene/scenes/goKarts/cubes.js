import { GO_KARTS_KEY } from 'scene/cubesKeys'

const
    GO_KARTS_CUBES = {
        floor: {
            zIndices: [
                [0],
                [0],
                [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
                [0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [GO_KARTS_KEY]: GO_KARTS_CUBES
    }

export default CUBES
