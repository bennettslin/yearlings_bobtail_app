import { SCHOOLBUS_KEY } from '../../cubesKeys'

import {
    STREET_HSLA,
    CROSSWALK_HSLA,
    PLATFORM_HSLA,
    SEAT_HSLA
} from '../../hslaKeys'

const
    T = STREET_HSLA,
    X = CROSSWALK_HSLA,
    P = PLATFORM_HSLA,
    S = SEAT_HSLA,

    SCHOOLBUS_CUBES = {
        /** https://www.the-blueprints.com/blueprints/buses/international-buses/56427/view/international_school_bus_%281992%29/
         */
        floor: {
            hslaColours: [
                [T],
                [T],
                [T, P, S, P, P, S, P, P, P, P, P, T],
                [T, P, S, P, P, S, P, P, P, P, P, T],
                [T],
                [X]
            ],
            zIndices: [
                [0],
                [0],
                [0, 4, 6, 4, 4, 6, 4, 4, 4, 4, 4, 0],
                [0, 4, 6, 4, 4, 6, 4, 4, 4, 4, 4, 0],
                [0]
            ]
        }
    },

    CUBES = {
        [SCHOOLBUS_KEY]: SCHOOLBUS_CUBES
    }

export default CUBES
