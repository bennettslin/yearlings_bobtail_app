import {
    ACTORS,
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    FURNITURES,
    PANELS,
    PUPPETS
} from 'constants/scene'

import {
    CLUB_FAR_KEY,
    LIZ_BED_OPEN_PHONE_KEY,
    ALLEY_KEY,
    BERKELEY_BANCROFT_KEY,
    BERKELEY_CAMPANILE_KEY
} from '../../scene/scenes/keys'

import {
    TIME_ANYTIME,
    SEASON_WINTER,
    SEASON_LOVE
} from '../../scene/sky/keys'

import {
    BENNETT,
    KHARI_LIZ,
    MIRIAM_TRISTAN,
    NESTOR,
    AMY,
    STEPHANIE,
    WADE,
    KHARI_LIZ_REFLECTION
} from '../../scene/actors/keys'

import {
    CAMPUS_ASHAMED,
    SHOW_ANNOYED,
    ALLEY,
    BROKEN_HEARTED,
    DEMONSTRATION
} from '../../scene/actors/keys/instances/bennett'

import {
    PROTECTIVE_CONCERNED,
    CARESS,
    CARESS_REFLECTION
} from '../../scene/actors/keys/instances/khariLiz'

import {
    GREETING,
    PROTESTER
} from '../../scene/actors/keys/instances/songs'

import {
    UC_BERKELEY_BACKDROP
} from '../../scene/things/keys/backdrops'

import {
    SIGNPOST,
    BANCROFT_SHRUBS,
    UC_BERKELEY_TREE_LEFT,
    UC_BERKELEY_TREE_RIGHT,
    WALL_SPEAKER_LEFT,
    WALL_SPEAKER_RIGHT,
    DUMPSTER
} from '../../scene/things/keys/cutouts'

import {
    ASH_CAN,
    STAGE_MIC_FAR,
    BURGER_WRAPPER,
    LIZ_PHONE_BASE,
    LIZ_PHONE_BASE_REFLECTION
} from '../../scene/things/keys/fixtures'

import {
    CAMPANILE,
    CROWD_NEAR_BACK,
    CROWD_FAR_BACK
} from '../../scene/things/keys/flats'

import {
    LIZ_BLANKET_PILE,
    LIZ_BLANKET_PILE_REFLECTION
} from '../../scene/things/keys/furniture'

import {
    LIZ_BED,
    PHONE_CALL_PANEL
} from '../../scene/things/keys/panels'

import {
    GHOST_ODIN_CAMPUS,
    GHOST_ODIN_CLUB,
    GHOST_ODIN_ALLEY,
    GHOST_ODIN_DEMONSTRATION
} from '../../scene/things/keys/puppets'

export default [
    {
        unitIndex: 1,
        description: `Bennett is walking with the ghost of Odin in a park. He passes Sita, who is holding hands with her friend. Bennett looks down, her friend looks up, while Sita looks concerned.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'side, slumped over, despondent',
                    instance: CAMPUS_ASHAMED
                },
                [KHARI_LIZ]: {
                    todo: true,
                    workedHours: 4,
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
                [UC_BERKELEY_TREE_RIGHT]: true
            },
            [FLATS]: {
                [CAMPANILE]: true
            },
            [PUPPETS]: {
                [GHOST_ODIN_CAMPUS]: true
            }
        },
        cubes: BERKELEY_CAMPANILE_KEY,
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
                    workedHours: 3.75,
                    description: 'back, looking to side, annoyed',
                    instance: SHOW_ANNOYED
                },
                [MIRIAM_TRISTAN]: {
                    todo: true,
                    workedHours: 3.5,
                    compound: 2,
                    description: 'side, flirting',
                    instance: GREETING
                },
                [NESTOR]: {
                    todo: true,
                    workedHours: 3.75,
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
                [CROWD_FAR_BACK]: true,
                [CROWD_NEAR_BACK]: true
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
                    workedHours: 3.75,
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
                    workedHours: 3.75,
                    description: 'side, on phone, hunched over, sobbing',
                    instance: BROKEN_HEARTED
                },
                [KHARI_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    description: 'lying in bed, caressing Sita',
                    instance: CARESS
                },
                [KHARI_LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 4,
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
                [LIZ_BLANKET_PILE]: true,
                [LIZ_BLANKET_PILE_REFLECTION]: true
            },
            [PANELS]: {
                [LIZ_BED]: true
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
                    workedHours: 3.75,
                    description: 'side, desperately hopeful',
                    instance: DEMONSTRATION
                },
                [AMY]: {
                    demonstrator: {
                        todo: true,
                        workedHours: 4.25,
                        description: 'back, passing out flyers',
                        instance: PROTESTER
                    }
                },
                [STEPHANIE]: {
                    demonstrator: {
                        todo: true,
                        workedHours: 4.25,
                        description: 'standing, demonstrating',
                        instance: PROTESTER
                    }
                },
                [WADE]: {
                    demonstrator: {
                        todo: true,
                        workedHours: 4.25,
                        description: 'standing, demonstrating',
                        instance: PROTESTER
                    }
                }
            },
            [BACKDROPS]: {
                [UC_BERKELEY_BACKDROP]: true
            },
            [CUTOUTS]: {
                [UC_BERKELEY_TREE_LEFT]: true
            },
            [FIXTURES]: {
                [ASH_CAN]: true
            },
            [PUPPETS]: {
                [GHOST_ODIN_DEMONSTRATION]: true
            }
        },
        cubes: BERKELEY_BANCROFT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    }
]
