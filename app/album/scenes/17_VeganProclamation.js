import {
    ACTORS,
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    DOORS,
    FURNITURES,
    PANELS,
    PUPPETS
} from 'constants/scene'

import {
    CLUB_FAR_KEY,
    LIZ_BED_OPEN_PHONE_KEY,
    ALLEY_KEY,
    BANCROFT_LIBRARY_KEY,
    CAMPANILE_KEY
} from '../../scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_WINTER,
    SEASON_LOVE
} from '../../scene/sky'

import {
    BENNETT,
    KHARI_LIZ,
    MIRIAM_TRISTAN,
    NESTOR,
    AMY,
    STEPHANIE,
    WADE,
    KHARI_LIZ_REFLECTION
} from '../../scene/actorKeys'

import {
    CAMPUS_ASHAMED,
    SHOW_ANNOYED,
    ALLEY,
    BROKEN_HEARTED,
    DEMONSTRATION
} from '../../scene/instanceKeys/bennett'

import {
    PROTECTIVE_CONCERNED,
    CARESS,
    CARESS_REFLECTION
} from '../../scene/instanceKeys/khariLiz'

import {
    GREETING,
    PROTESTER
} from '../../scene/instanceKeys/songs'

import {
    UC_BERKELEY_BACKDROP
} from '../../scene/backdropKeys'

import {
    SIGNPOST,
    BANCROFT_SHRUBS,
    UC_BERKELEY_TREE,
    ARRANGEMENT_UC_BERKELEY_TREE_LEFT,
    ARRANGEMENT_UC_BERKELEY_TREE_RIGHT,
    WALL_SPEAKER_LEFT,
    WALL_SPEAKER_RIGHT,
    DUMPSTER
} from '../../scene/cutoutKeys'

import {
    ASH_CAN,
    STAGE_MIC_FAR,
    BURGER_WRAPPER,
    LIZ_PHONE_BASE,
    LIZ_PHONE_BASE_REFLECTION
} from '../../scene/fixtureKeys'

import {
    CAMPANILE,
    CROWD_BACK_NEAR,
    CROWD_BACK_FAR
} from '../../scene/flatKeys'

import {
    BANCROFT_DOOR,
    LOADING_DOCK_DOOR
} from '../../scene/doorKeys'

import {
    LIZ_MATTRESS,
    LIZ_PILLOWS,
    LIZ_MATTRESS_REFLECTION,
    LIZ_PILLOWS_REFLECTION
} from '../../scene/furnitureKeys'

import {
    PHONE_CALL_PANEL
} from '../../scene/panelKeys'

import {
    GHOST_ODIN_CAMPUS,
    GHOST_ODIN_CLUB,
    GHOST_ODIN_ALLEY,
    GHOST_ODIN_DEMONSTRATION
} from '../../scene/puppetKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is walking with the ghost of Odin in a park. He passes Sita, who is holding hands with her friend. Bennett looks down, her friend looks up, while Sita looks concerned.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, slumped over, despondent',
                    instance: CAMPUS_ASHAMED
                },
                [KHARI_LIZ]: {
                    todo: true,
                    workedHours: 3,
                    compound: 2,
                    description: 'side, protective, judgmental',
                    instance: PROTECTIVE_CONCERNED
                }
            },
            [BACKDROPS]: {
                [UC_BERKELEY_BACKDROP]: true
            },
            [CUTOUTS]: {
                [BANCROFT_SHRUBS]: true,
                [SIGNPOST]: true,
                [UC_BERKELEY_TREE]: ARRANGEMENT_UC_BERKELEY_TREE_RIGHT
            },
            [FLATS]: {
                [CAMPANILE]: true
            },
            [PUPPETS]: {
                [GHOST_ODIN_CAMPUS]: true
            }
        },
        cubes: CAMPANILE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 4,
        description: `Bennett is by himself with Odin at a show, looking agitated and bored. Miriam is on the other side of the crowd, being introduced by Tristan to her future boyfriend.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back, looking to side, annoyed',
                    instance: SHOW_ANNOYED
                },
                [MIRIAM_TRISTAN]: {
                    todo: true,
                    workedHours: 2.5,
                    compound: 2,
                    description: 'side, flirting',
                    instance: GREETING
                },
                [NESTOR]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, eager',
                    instance: GREETING
                }
            },
            [CUTOUTS]: {
                [WALL_SPEAKER_LEFT]: true,
                [WALL_SPEAKER_RIGHT]: true
            },
            [FIXTURES]: {
                [STAGE_MIC_FAR]: true
            },
            [FLATS]: {
                [CROWD_BACK_FAR]: true,
                [CROWD_BACK_NEAR]: true
            },
            [PUPPETS]: {
                [GHOST_ODIN_CLUB]: true
            }
        },
        cubes: CLUB_FAR_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 7,
        description: `Bennett is walking through an alley.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'walking through alley',
                    instance: ALLEY
                }
            },
            [CUTOUTS]: {
                [DUMPSTER]: true
            },
            [FIXTURES]: {
                [BURGER_WRAPPER]: true
            },
            [DOORS]: {
                [LOADING_DOCK_DOOR]: true
            },
            [PUPPETS]: {
                [GHOST_ODIN_ALLEY]: true
            }
        },
        cubes: ALLEY_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 10,
        description: `Bennett is in his apartment, in tears on the phone with Sita, who is in bed snuggling with her friend.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, on phone, hunched over, sobbing',
                    instance: BROKEN_HEARTED
                },
                [KHARI_LIZ]: {
                    todo: true,
                    workedHours: 3,
                    compound: 2,
                    description: 'lying in bed, caressing Sita',
                    instance: CARESS
                },
                [KHARI_LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        compound: 2,
                        description: 'reflection',
                        instance: CARESS_REFLECTION
                    }
                }
            },
            [FIXTURES]: {
                [LIZ_PHONE_BASE]: true,
                [LIZ_PHONE_BASE_REFLECTION]: true
            },
            [PANELS]: {
                [PHONE_CALL_PANEL]: true
            },
            [FURNITURES]: {
                [LIZ_MATTRESS]: true,
                [LIZ_PILLOWS]: true,
                [LIZ_MATTRESS_REFLECTION]: true,
                [LIZ_PILLOWS_REFLECTION]: true,
            },
            [PUPPETS]: {
            }
        },
        cubes: LIZ_BED_OPEN_PHONE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_LOVE
        }
    },
    {
        unitIndex: 12,
        description: `Bennett is with Odin, and happens upon a Peta demonstration. One of the demonstrators is petting Odin.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, desperately hopeful',
                    instance: DEMONSTRATION
                },
                [AMY]: {
                    demonstrator: {
                        todo: true,
                        workedHours: 3,
                        description: 'back, passing out flyers',
                        instance: PROTESTER
                    }
                },
                [STEPHANIE]: {
                    demonstrator: {
                        todo: true,
                        workedHours: 3,
                        description: 'standing, demonstrating',
                        instance: PROTESTER
                    }
                },
                [WADE]: {
                    demonstrator: {
                        todo: true,
                        workedHours: 3,
                        description: 'standing, demonstrating',
                        instance: PROTESTER
                    }
                }
            },
            [BACKDROPS]: {
                [UC_BERKELEY_BACKDROP]: true
            },
            [CUTOUTS]: {
                [UC_BERKELEY_TREE]: ARRANGEMENT_UC_BERKELEY_TREE_LEFT
            },
            [FIXTURES]: {
                [ASH_CAN]: true
            },
            [DOORS]: {
                [BANCROFT_DOOR]: true
            },
            [PUPPETS]: {
                [GHOST_ODIN_DEMONSTRATION]: true
            }
        },
        cubes: BANCROFT_LIBRARY_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    }
]
