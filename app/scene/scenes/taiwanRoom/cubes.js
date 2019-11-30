import { TAIWAN_ROOM_KEY } from '../../../constants/scene/scenes'

import {
    DARK_FLOOR_COLOUR as F,
    DARK_WALL_COLOUR as W,
    FURNITURE_COLOUR as R
} from '../../cubes/colours'

// eslint-disable-next-line object-curly-newline
import { e, f, g } from '../../cubes/zIndices'

const CUBES = {
    [TAIWAN_ROOM_KEY]: {
        ceiling: {
            hslaColours: [
                [W]
            ],
            zIndices: [
                [0],
                [0, g, g, g, g, g, g, g, g, g, g, 5],
                [0, g, g, g, g, g, g, g, g, g, g, 5],
                [e, g, g, 5, 5, 5, 5, 5, f, f, 5, 5],
                [e, g, g, 5, g, g, g, g, g, g, g, 5],
                [0, g, g, 5, g, g, g, g, g, g, g, 5]
            ]
        },
        floor: {
            hslaColours: [
                [F],
                [F],
                [F],
                [W, F],
                [W, F, F, F, F, R, R, F],
                [F]
            ],
            zIndices: [
                [g],
                [g, 5],
                [g, 4, 4, 5],
                [5, 3, 3, 5],
                [5, 2, 2, 5, 5, 8, 8, 5],
                [g, 1, 1, 5]
            ]
        }
    }
}

export default CUBES
