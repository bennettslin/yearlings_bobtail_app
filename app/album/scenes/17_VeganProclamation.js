import {
    ACTOR,
    BACKDROP,
    CUTOUT,
    FIXTURE,
    FLAT,
    FURNITURE,
    PANEL,
    PUPPET
} from 'constants/scene'
import {
    CLUB_FAR_KEY,
    LIZ_BED_OPEN_PHONE_KEY,
    ALLEY_KEY,
    BERKELEY_BANCROFT_KEY,
    BERKELEY_CAMPANILE_KEY
} from '../../constants/scene/scenes'
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
} from '../../constants/scene/actors'
import {
    CAMPUS_ASHAMED,
    SHOW_ANNOYED,
    ALLEY,
    BROKEN_HEARTED,
    DEMONSTRATION
} from '../../constants/scene/actors/instances/bennett'
import {
    PROTECTIVE_CONCERNED,
    CARESS,
    CARESS_REFLECTION
} from '../../constants/scene/actors/instances/khariLiz'
import {
    GREETING,
    PROTESTER
} from '../../constants/scene/actors/instances/songs'
import { OAKLAND_SIDE_BACKDROP } from '../../constants/scene/things/backdrops'
import {
    SIGNPOST,
    BANCROFT_SHRUB,
    CAMPUS_TREE_SINGLE__BANCROFT,
    CAMPUS_TREE_SINGLE__CAMPANILE,
    CAMPUS_TREE_DOUBLE__CAMPANILE,
    WALL_SPEAKER_FRONT__LEFT,
    WALL_SPEAKER_FRONT__RIGHT,
    DUMPSTER
} from '../../constants/scene/things/cutouts'
import {
    ASH_CAN,
    BURGER_WRAPPER,
    LIZ_PHONE_BASE,
    LIZ_PHONE_BASE_REFLECTION
} from '../../constants/scene/things/fixtures'
import { CAMPANILE } from '../../constants/scene/things/flats'
import {
    LIZ_BLANKET_PILE,
    LIZ_BLANKET_PILE_REFLECTION
} from '../../constants/scene/things/furniture'
import {
    CROWD_BACK,
    LIZ_BED,
    PHONE_CALL_PANEL
} from '../../constants/scene/things/panels'
import {
    GHOST_ODIN_CAMPUS,
    GHOST_ODIN_CLUB,
    GHOST_ODIN_ALLEY,
    GHOST_ODIN_DEMONSTRATION
} from '../../constants/scene/things/puppets'

export default [
    {
        unitIndex: 1,
        description: `Bennett is walking with the ghost of Odin in a park. He passes Sita, who is holding hands with her friend. Bennett looks down, her friend looks up, while Sita looks concerned.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, slumped over, despondent',
                    instance: CAMPUS_ASHAMED
                },
                [KHARI_LIZ]: {
                    description: 'side, protective, judgmental',
                    instance: PROTECTIVE_CONCERNED
                }
            },
            [BACKDROP]: {
                [OAKLAND_SIDE_BACKDROP]: true
            },
            [CUTOUT]: {
                [BANCROFT_SHRUB]: true,
                [SIGNPOST]: true,
                [CAMPUS_TREE_SINGLE__CAMPANILE]: true,
                [CAMPUS_TREE_DOUBLE__CAMPANILE]: true
            },
            [FLAT]: {
                [CAMPANILE]: true
            },
            [PUPPET]: {
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
            [ACTOR]: {
                [BENNETT]: {
                    description: 'back, looking to side, annoyed',
                    instance: SHOW_ANNOYED
                },
                [MIRIAM_TRISTAN]: {
                    description: 'side, flirting',
                    instance: GREETING
                },
                [NESTOR]: {
                    description: 'side, eager',
                    instance: GREETING
                }
            },
            [CUTOUT]: {
                [WALL_SPEAKER_FRONT__LEFT]: true,
                [WALL_SPEAKER_FRONT__RIGHT]: true
            },
            [PANEL]: {
                [CROWD_BACK]: true
            },
            [PUPPET]: {
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
            [ACTOR]: {
                [BENNETT]: {
                    description: 'walking through alley',
                    instance: ALLEY
                }
            },
            [CUTOUT]: {
                [DUMPSTER]: true
            },
            [FIXTURE]: {
                [BURGER_WRAPPER]: true
            },
            [PUPPET]: {
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
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, on phone, hunched over, sobbing',
                    instance: BROKEN_HEARTED
                },
                [KHARI_LIZ]: {
                    description: 'lying in bed, caressing Sita',
                    instance: CARESS
                },
                [KHARI_LIZ_REFLECTION]: {
                    reflection: {
                        description: 'reflection',
                        instance: CARESS_REFLECTION
                    }
                }
            },
            [FIXTURE]: {
                [LIZ_PHONE_BASE]: true,
                [LIZ_PHONE_BASE_REFLECTION]: true
            },
            [FURNITURE]: {
                [LIZ_BLANKET_PILE]: true,
                [LIZ_BLANKET_PILE_REFLECTION]: true
            },
            [PANEL]: {
                [LIZ_BED]: true,
                [PHONE_CALL_PANEL]: true
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
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, desperately hopeful',
                    instance: DEMONSTRATION
                },
                [AMY]: {
                    demonstrator: {
                        description: 'back, passing out flyers',
                        instance: PROTESTER
                    }
                },
                [STEPHANIE]: {
                    demonstrator: {
                        description: 'standing, demonstrating',
                        instance: PROTESTER
                    }
                },
                [WADE]: {
                    demonstrator: {
                        description: 'standing, demonstrating',
                        instance: PROTESTER
                    }
                }
            },
            [BACKDROP]: {
                [OAKLAND_SIDE_BACKDROP]: true
            },
            [CUTOUT]: {
                [CAMPUS_TREE_SINGLE__BANCROFT]: true
            },
            [FIXTURE]: {
                [ASH_CAN]: true
            },
            [PUPPET]: {
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
