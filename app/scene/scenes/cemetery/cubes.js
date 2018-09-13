import { CEMETERY_KEY } from 'scene/cubesKeys'

const
    CEMETERY_CUBES = {
        // TODO: Make more natural.
        // Hill.
        floor: {
            zIndices: [
                [0],
                [2]
            ]
        }
    },

    CUBES = {
        [CEMETERY_KEY]: CEMETERY_CUBES
    }

export default CUBES
