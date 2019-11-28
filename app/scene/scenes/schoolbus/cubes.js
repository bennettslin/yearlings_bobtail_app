import { SCHOOLBUS_KEY } from '../../../constants/scene/scenes'

import {
    STREET_COLOUR,
    CROSSWALK_COLOUR,
    PLATFORM_COLOUR,
    SEAT_COLOUR
} from '../../cubes/keys/hsla'

const
    T = STREET_COLOUR,
    X = CROSSWALK_COLOUR,
    P = PLATFORM_COLOUR,
    S = SEAT_COLOUR,

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
