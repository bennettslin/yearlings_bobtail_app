// Separating other cubes purely for purpose of keeping file smaller.

import {
    TEST_PATTERN_BITMAP
} from './bitmaps'

const
    // a = 10,
    b = 11,
    // c = 12,
    d = 13,
    // e = 14,
    // f = 15,
    // g = 16,
    // h = 17,
    // i = 18,
    // j = 19,
    k = 20,
    n = 40,

    DEFAULT_STAGE_TILES = {
        ceiling: {
            zIndices: [
                [k]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        },
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    LOGUE_TILES = {
        ceiling: {
            zIndices: [
                [n]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        },
        floor: {
            zIndices: [
                [0],
                [0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 0],
                [0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0],
                [0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0],
                [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    TAIWAN_PUPPET_SHOW_TILES = {
        // Just panels.
        floor: {
            zIndices: [
                [1]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    ODIN_SCENE_1_TILES = {
        // Indoor wall is 7.5'. Floor of 2' to imply second story.
        floor: {
            zIndices: [
                [5],
                [5],
                [5],
                [k, k, k, k, k, k, 5, 5, 5, k],
                [5],
                [5]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    ODIN_SCENE_2_TILES = {
        // Windowsill height of 3'.
        floor: {
            zIndices: [
                [k, k, k, b, b, b, b, b, b, k],
                [k, 5, 5, 4, 3, 2, 1, 0],
                [k, 5, 5, 4, 3, 2, 1, 0],
                [k, 5, 5, 4, 3, 2, 1, 0],
                [k, 5, 5]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    ODIN_SCENE_3_TILES = {
        // House wall is 6'.
        floor: {
            zIndices: [
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, d, 1, 1, 1, 0],
                [1, 1, 1, 1, 1, 1, 0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    ODIN_SCENE_4_TILES = {
        // TODO: Make more natural.
        // Sand.
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    ODIN_SCENE_5_TILES = {
        // TODO: Make more natural.
        // Sand.
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    ODIN_SCENE_6_TILES = {
        // TODO: Make more natural.
        // Ocean wave.
        floor: {
            zIndices: [
                [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
                [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
                [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    ODIN_SCENE_7_TILES = {
        // TODO: Make more natural.
        // Ocean floor.
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    ODIN_SCENE_8_TILES = {
        // TODO: Make more natural.
        // Ocean floor.
        floor: {
            zIndices: [
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    SNOW_GLOBES_1_TILES = {
        floor: {
            zIndices: [
                [k],
                [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
                [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
                [0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0],
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    SNOW_GLOBES_2_TILES = {
        floor: {
            zIndices: [
                [k],
                [k, 9, 5, 5, 3, 2, 0, 0, 0, 0, 0, 0],
                [k, 9, 5, 5, 3, 2, 8, 8, 8, 8, 8, 2],
                [k, 9, 5, 5, 3, 2, 4, 4, 4, 4, 4, 2],
                [k, 3, 3, 3, 3, 2, 4, 4, 4, 4, 4, 2],
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    },
    SNOW_GLOBES_3_TILES = {
        floor: {
            zIndices: [
                [k],
                [k, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0],
                [k, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
                [k, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
                [k, 8, 4, 4, 2, 2, 5, 5, 5, 5, 5, 0],
                [0]
            ],
            bitmapKeys: [
                [TEST_PATTERN_BITMAP]
            ]
        }
    }

module.exports = {
    DEFAULT_STAGE_TILES,
    LOGUE_TILES,
    TAIWAN_PUPPET_SHOW_TILES,
    ODIN_SCENE_1_TILES,
    ODIN_SCENE_2_TILES,
    ODIN_SCENE_3_TILES,
    ODIN_SCENE_4_TILES,
    ODIN_SCENE_5_TILES,
    ODIN_SCENE_6_TILES,
    ODIN_SCENE_7_TILES,
    ODIN_SCENE_8_TILES,
    SNOW_GLOBES_1_TILES,
    SNOW_GLOBES_2_TILES,
    SNOW_GLOBES_3_TILES
}
