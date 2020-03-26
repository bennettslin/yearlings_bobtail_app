import { ACTOR } from '../../constants/scene'
import {
    BACKDROP,
    CARDBOARD,
    DOOR,
    FIXTURE,
    FURNITURE,
    PANEL,
    PUPPET
} from '../../constants/scene/things'
import {
    BASEMENT_BED_DARK_KEY,
    BASEMENT_BED_MAGIC_KEY,
    SNOWGLOBES_PAST_KEY,
    SNOWGLOBES_PRESENT_KEY,
    SNOWGLOBES_FUTURE_KEY
} from '../../constants/scene/scenes'
import {
    TIME_NIGHT,
    SEASON_AUTUMN,
    SEASON_NIGHT_MAGIC,
    SEASON_PAST,
    SEASON_PRESENT,
    SEASON_FUTURE
} from '../../scene/sky/keys'
import {
    BENNETT,
    BENNETT_FATHER,
    ESTHER_MOTHER,
    MOTHER,
    FATHER,
    SASHA_BENNETT,
    LIZ,
    KHARI_LIZ,
    MIRIAM_BENNETT,
    MIRIAM_STEPHANIE,
    STEPHANIE
} from '../../constants/scene/actors'
import {
    HURT_CONSOLING,
    SOBBING_SHIELDING
} from '../../constants/scene/actors/estherMother'
import {
    ACCUSATORY,
    REELING
} from '../../constants/scene/actors/father'
import { JOKING_LAUGHING } from '../../constants/scene/actors/khariLiz'
import { PETTING_SEATED_PRESENT } from '../../constants/scene/actors/liz'
import {
    ASLEEP_FEARFUL,
    FENDING_OFF
} from '../../constants/scene/actors/miriamBennett'
import { MISCHIEVOUS_BANJO } from '../../constants/scene/actors/miriamStephanie'
import { COMFORTING_HUMILIATED } from '../../constants/scene/actors/sashaBennett'
import { BENNETT_RECORDING } from '../../constants/scene/actors/stephanie'
import {
    ASLEEP,
    PAST,
    PRESENT,
    FUTURE
} from '../../constants/scene/actors/songs'
import {
    OAKLAND_SIDE,
    ROAD_PAST,
    ROAD_PRESENT,
    ROAD_FUTURE
} from '../../constants/scene/things/backdrops'
import {
    SNOWGLOBE_SMALL__PAST,
    SNOWGLOBE_PAST,
    SNOWGLOBE_SMALL__PRESENT,
    SNOWGLOBE_PRESENT,
    SNOWGLOBE_SMALL__FUTURE,
    SNOWGLOBE_FUTURE_CORD,
    SNOWGLOBE_FUTURE_REATTA
} from '../../constants/scene/things/cardboards'
import { BASEMENT_DOOR } from '../../constants/scene/things/doors'
import {
    TETHERBALL_POLE,
    RECORDING_MIC,
    RECORDING_BEERS,
    CRACKED_PICTURE
} from '../../constants/scene/things/fixtures'
import { BENNETT_PILLOW } from '../../constants/scene/things/furnitures'
import {
    BASEMENT_FENCE,
    SNOWGLOBE__TETHERBALL,
    SNOWGLOBE__LIZ_ALONE,
    SNOWGLOBE__BENNETT_MIRIAM,
    SNOWGLOBE__LIZ_KHARI,
    SNOWGLOBE__BENNETT_ALONE,
    BENNETT_BED,
    LIZ_COUCH,
    WIDE_COUCH_MIRIAM,
    WIDE_ARMREST_MIRIAM__LEFT,
    WIDE_ARMREST_MIRIAM__RIGHT
} from '../../constants/scene/things/panels'
import { OPAL_COUCH_FUTURE } from '../../constants/scene/things/puppets'

export default [
    {
        unitIndex: 1,
        description: `Bennett is sleeping in bed with Miriam.`,
        presences: {
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    description: 'side, asleep',
                    instance: ASLEEP
                }
            },
            [BACKDROP]: {
                [OAKLAND_SIDE]: true
            },
            [DOOR]: {
                [BASEMENT_DOOR]: true
            },
            [FURNITURE]: {
                [BENNETT_PILLOW]: true
            },
            [PANEL]: {
                [BASEMENT_FENCE]: true,
                [BENNETT_BED]: true
            }
        },
        cubes: BASEMENT_BED_DARK_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 2,
        description: `Bennett's parents are ghosts, visiting him as he lies in bed with Miriam. They are dressed in traditional Chinese garb. His father is stern and disapproving, while his mother consoles a weeping Sita.`,
        presences: {
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    description: 'side, asleep',
                    instance: ASLEEP_FEARFUL
                },
                [FATHER]: {
                    description: 'side, accusatory',
                    instance: ACCUSATORY
                },
                [ESTHER_MOTHER]: {
                    youngSita: {
                        description: 'side angle, sobbing',
                        instance: HURT_CONSOLING
                    }
                }
            },
            [BACKDROP]: {
                [OAKLAND_SIDE]: true
            },
            [FURNITURE]: {
                [BENNETT_PILLOW]: true
            },
            [PANEL]: {
                [BASEMENT_FENCE]: true,
                [BENNETT_BED]: true
            }
        },
        cubes: BASEMENT_BED_MAGIC_KEY,
        sky: { season: SEASON_NIGHT_MAGIC }
    },
    {
        unitIndex: 4,
        description: `Bennett's father takes him to visit his childhood past. They watch as young Bennett, having just been bullied, lashes out in anger, to no one in particular. Sasha is with him, and is understanding but clearly keeping her distance. Bennett winces.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'front angle, wincing',
                    instance: PAST
                },
                [FATHER]: {
                    description: 'side angle, gesturing to scene below',
                    instance: PAST
                },
                [SASHA_BENNETT]: {
                    description: 'sitting, hurt, lashing out in anger',
                    instance: COMFORTING_HUMILIATED
                }
            },
            [BACKDROP]: {
                [ROAD_PAST]: true
            },
            [CARDBOARD]: {
                [SNOWGLOBE_SMALL__PAST]: true,
                [SNOWGLOBE_PAST]: true
            },
            [FIXTURE]: {
                [TETHERBALL_POLE]: true
            },
            [PANEL]: {
                [SNOWGLOBE__TETHERBALL]: true
            }
        },
        cubes: SNOWGLOBES_PAST_KEY,
        sky: { season: SEASON_PAST }
    },
    {
        unitIndex: 8,
        description: `Bennett's mother is back. They next take him to visit the present. Sita is at home crying, as in the first scene of Kyon, while Bennett is playing guitar next to Miriam on her bed.`,
        presences: {
            [ACTOR]: {
                [BENNETT_FATHER]: {
                    description: 'front, dismissive, not feeling bad',
                    instance: PRESENT
                },
                [MOTHER]: {
                    description: 'side angle, gesturing with empathy',
                    instance: PRESENT
                },
                [LIZ]: {
                    sita: {
                        description: 'side, seated, pensive',
                        instance: PETTING_SEATED_PRESENT
                    }
                },
                [MIRIAM_STEPHANIE]: {
                    description: 'side, jumping on Bennett, grabbing his banjo',
                    instance: MISCHIEVOUS_BANJO
                }
            },
            [BACKDROP]: {
                [ROAD_PRESENT]: true
            },
            [CARDBOARD]: {
                [SNOWGLOBE_SMALL__PRESENT]: true,
                [SNOWGLOBE_PRESENT]: true
            },
            [PANEL]: {
                [SNOWGLOBE__LIZ_ALONE]: true,
                [SNOWGLOBE__BENNETT_MIRIAM]: true,
                [WIDE_COUCH_MIRIAM]: true,
                [WIDE_ARMREST_MIRIAM__LEFT]: true,
                [WIDE_ARMREST_MIRIAM__RIGHT]: true
            }
        },
        cubes: SNOWGLOBES_PRESENT_KEY,
        sky: { season: SEASON_PRESENT }
    },
    {
        unitIndex: 11,
        description: `Finally, they take him to visit the future. Unknowingly, they cross paths with Sita who is laughing with her friend in a park. Meanwhile, Bennett is at home alone, recording and depressed.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'concerned',
                    instance: FUTURE
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        description: 'back, squatting, recording, dejected',
                        instance: BENNETT_RECORDING
                    }
                },
                [MOTHER]: {
                    description: 'front angle, wanting to console Bennett',
                    instance: FUTURE
                },
                [FATHER]: {
                    description: 'front angle, arms crossed, righteous',
                    instance: FUTURE
                },
                [KHARI_LIZ]: {
                    description: 'side angle, cheerful, making a point',
                    instance: JOKING_LAUGHING
                }
            },
            [BACKDROP]: {
                [ROAD_FUTURE]: true
            },
            [CARDBOARD]: {
                [SNOWGLOBE_SMALL__FUTURE]: true,
                [SNOWGLOBE_FUTURE_CORD]: true,
                [SNOWGLOBE_FUTURE_REATTA]: true
            },
            [FIXTURE]: {
                [RECORDING_MIC]: true,
                [RECORDING_BEERS]: true
            },
            [PANEL]: {
                [LIZ_COUCH]: true
            },
            [PANEL]: {
                [SNOWGLOBE__LIZ_KHARI]: true,
                [SNOWGLOBE__BENNETT_ALONE]: true
            },
            [PUPPET]: {
                [OPAL_COUCH_FUTURE]: true
            }
        },
        cubes: SNOWGLOBES_FUTURE_KEY,
        sky: { season: SEASON_FUTURE }
    },
    {
        unitIndex: 14,
        description: `Bringing him back, Bennett unrepentantly crawls into Miriam's arms, who is casting an imaginary spell to release him from their grasp. His father flinches, while his mother shields Sita from the view.`,
        presences: {
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    description: 'side sitting, vindictive, magical gesture',
                    instance: FENDING_OFF
                },
                [FATHER]: {
                    description: 'side angle, knocked over',
                    instance: REELING
                },
                [ESTHER_MOTHER]: {
                    youngSita: {
                        description: 'side angle, sobbing uncontrollably',
                        instance: SOBBING_SHIELDING
                    }
                }
            },
            [BACKDROP]: {
                [OAKLAND_SIDE]: true
            },
            [FIXTURE]: {
                [CRACKED_PICTURE]: true
            },
            [FURNITURE]: {
                [BENNETT_PILLOW]: true
            },
            [PANEL]: {
                [BASEMENT_FENCE]: true,
                [BENNETT_BED]: true
            }
        },
        cubes: BASEMENT_BED_MAGIC_KEY,
        sky: { season: SEASON_NIGHT_MAGIC }
    }
]
