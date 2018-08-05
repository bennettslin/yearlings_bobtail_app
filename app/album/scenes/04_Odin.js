import {
    ODIN_SCENE_1_KEY,
    ODIN_SCENE_2_KEY,
    ODIN_SCENE_3_KEY,
    ODIN_SCENE_4_KEY,
    ODIN_SCENE_5_KEY,
    ODIN_SCENE_6_KEY,
    ODIN_SCENE_7_KEY,
    ODIN_SCENE_8_KEY
} from '../../constants/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from '../../constants/sky'

import {
    PRETEEN_BENNETT,
    SASHA
} from '../../constants/actorKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is lying on a mat on the floor. In the distance, he sees himself creeping out of the house in pitch darkness. Papers are strewn where he walked.`,
        actors: {
            [PRETEEN_BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, lying on floor, propped up'
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
        description: 'From top of stairs, Bennett sees himself opening the gate and peering out.',
        actors: {
            [PRETEEN_BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, looking down stairs'
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
        actors: {
            [PRETEEN_BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, peeking out from gate'
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
        actors: {
            [PRETEEN_BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'getting off rickshaw bike'
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
        actors: {
            [PRETEEN_BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side back, looking out to ocean'
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
        actors: {
            [PRETEEN_BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'peering down from buoy'
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
        actors: {
            [PRETEEN_BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'hugging self'
            },
            [SASHA]: {
                todo: true,
                workedHours: 3,
                description: 'mermaid'
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
        actors: {
            [PRETEEN_BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, crouched in sand, looking back'
            }
        },
        cubes: ODIN_SCENE_8_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
