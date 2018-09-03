import { SCHOOLBUS_KEY } from 'scene/cubesKeys'

import {
    g
} from 'scene/cubesConstants'

const
    SCHOOLBUS_CUBES = {
        // Assume height of 9'.
        /** https://www.the-blueprints.com/blueprints/buses/international-buses/56427/view/international_school_bus_%281992%29/
         */
        floor: {
            zIndices: [
                [0],
                [0, g, 9, 9, 9, 9, 9, 9, g, g, 9, 0],
                [0, g, 6, 6, 3, 6, 6, 3, g, g, 9, 0],
                [0, g, 6, 6, 3, 6, 6, 3, g, g, 9, 0],
                [0, g, 3, 3, 3, 3, 3, 3, g, g, 9, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [SCHOOLBUS_KEY]: SCHOOLBUS_CUBES
    }

export default CUBES
