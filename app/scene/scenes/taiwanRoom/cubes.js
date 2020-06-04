import { TAIWAN_ROOM_KEY } from '../../../constants/scene/scenes'

import { NIGHT_COLOUR as Y } from '../../../constants/scene/cubes/colours'

import { e, g } from '../../cubes/zIndices'

export default {
    [TAIWAN_ROOM_KEY]: {
        ceiling: {
            hslaColours: [
                [Y]
            ],
            zIndices: [
                [0],
                [0, g, g, g, g, g, g, g, g, g, g, 5],
                [0, g, g, g, g, g, g, g, g, g, g, 5],
                [e, g, g, 5, 5, 5, 5, 5, e, e, 5, 5],
                [e, g, g, g, g, g, g, g, g, g, g, 5],
                [0, g, g, g, g, g, g, g, g, g, g, 5]
            ]
        },
        floor: {
            hslaColours: [
                [Y]
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
