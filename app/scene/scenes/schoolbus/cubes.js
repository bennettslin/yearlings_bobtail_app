import { SCHOOLBUS_KEY } from 'scene/cubesKeys'

const
    SCHOOLBUS_CUBES = {
        /** https://www.the-blueprints.com/blueprints/buses/international-buses/56427/view/international_school_bus_%281992%29/
         */
        floor: {
            zIndices: [
                [0],
                [0],
                [0, 3, 6, 6, 3, 6, 6, 3, 3, 3, 3, 0],
                [0, 3, 6, 6, 3, 6, 6, 3, 3, 3, 3, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [SCHOOLBUS_KEY]: SCHOOLBUS_CUBES
    }

export default CUBES
