import {
    ODIN_SCENE_1_KEY,
    ODIN_SCENE_2_KEY,
    ODIN_SCENE_3_KEY,
    ODIN_SCENE_4_KEY,
    ODIN_SCENE_5_KEY,
    ODIN_SCENE_6_KEY,
    ODIN_SCENE_7_KEY,
    ODIN_SCENE_8_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from 'scene/sky'

import {
    PRETEEN_BENNETT,
    SASHA
} from 'scene/actorKeys'

import {
    MAT,
    STAIRS,
    GATE,
    RICKSHAW,
    SHORE,
    BUOY,
    SINKING,
    OCEAN_FLOOR
} from 'scene/actors/preteenBennett'

import { MERMAID } from 'scene/actors/sasha'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is lying on a mat on the floor. In the distance, he sees himself creeping out of the house in pitch darkness. Papers are strewn where he walked.`,
        presences: {
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, lying on floor, propped up',
                    instance: MAT
                }
            }
        },
        cubes: ODIN_SCENE_1_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 4,
        description: `From top of stairs, Bennett sees himself opening the gate and peering out.`,
        presences: {
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, looking down stairs',
                    instance: STAIRS
                }
            }
        },
        cubes: ODIN_SCENE_2_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 6,
        description: `Bennett is stepping through the front gate. He sees himself in a rickshaw, driving away. The rickshaw leaves a trail.`,
        presences: {
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, peeking out from gate',
                    instance: GATE
                }
            }
        },
        cubes: ODIN_SCENE_3_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 9,
        description: ``,
        presences: {
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'getting off rickshaw bike',
                    instance: RICKSHAW
                }
            }
        },
        cubes: ODIN_SCENE_4_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 11,
        description: `Bennett is standing on the shore. He sees himself in the water, on a buoy. Footprints lead into the water.`,
        presences: {
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side back, looking out to ocean',
                    instance: SHORE
                }
            }
        },
        cubes: ODIN_SCENE_5_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 14,
        description: `Sea serpents are surrounding Bennett in the ocean.`,
        presences: {
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'peering down from buoy',
                    instance: BUOY
                }
            }
        },
        cubes: ODIN_SCENE_6_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 18,
        description: `Sasha is a mermaid, rescuing Bennett. She points down to Bennett on the ocean floor.`,
        presences: {
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'hugging self',
                    instance: SINKING
                },
                [SASHA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'mermaid',
                    instance: MERMAID
                }
            }
        },
        cubes: ODIN_SCENE_7_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 20,
        description: `Bennett sits on the shore gazing at the ocean. Further ahead, another Bennett is making his bed on the beach. Footprints lead up to him.`,
        presences: {
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, crouched in sand, looking back',
                    instance: OCEAN_FLOOR
                }
            }
        },
        cubes: ODIN_SCENE_8_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
