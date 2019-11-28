import { DEFAULT_STAGE_KEY } from '../../../constants/scene/scenes'

import { DEFAULT_COLOUR as D } from '../../cubes/colours'

import { k } from '../../cubes/zIndices'

const CUBES = {
    [DEFAULT_STAGE_KEY]: {
        ceiling: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [k]
            ]
        },
        floor: {
            hslaColours: [
                [D]
            ],
            zIndices: [
                [0]
            ]
        }
    }
}

export default CUBES
