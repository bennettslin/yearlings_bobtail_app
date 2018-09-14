import { PUPPET_SHOW_KEY } from 'scene/cubesKeys'

const
    PUPPET_SHOW_CUBES = {
        floor: {
            zIndices: [
                [0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [PUPPET_SHOW_KEY]: PUPPET_SHOW_CUBES
    }

export default CUBES
