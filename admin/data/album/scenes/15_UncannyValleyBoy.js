import { ACTOR } from '../../../../app/constants/scene'
import {
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FURNITURE,
    PANEL,
    PUPPET,
} from '../../../../app/constants/scene/things'
import {
    BASEMENT_BED_DARK_KEY,
    BASEMENT_BED_MAGIC_KEY,
    SNOWGLOBES_PAST_KEY,
    SNOWGLOBES_PRESENT_KEY,
    SNOWGLOBES_FUTURE_KEY,
} from '../../../../app/constants/scene/scenes'
import {
    TIME_NIGHT,
    SEASON_AUTUMN,
    SEASON_NIGHT_MAGIC,
    SEASON_PAST,
    SEASON_PRESENT,
    SEASON_FUTURE,
} from '../../../../app/constants/scene/sky'
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
    STEPHANIE,
} from '../../../../app/constants/scene/actors'
import {
    HURT_CONSOLING,
    SOBBING_SHIELDING,
} from '../../../../app/constants/scene/actors/estherMother'
import {
    ACCUSATORY,
    REELING,
} from '../../../../app/constants/scene/actors/father'
import { JOKING_LAUGHING } from '../../../../app/constants/scene/actors/khariLiz'
import { PETTING_SEATED_PRESENT } from '../../../../app/constants/scene/actors/liz'
import {
    ASLEEP_FEARFUL,
    FENDING_OFF,
} from '../../../../app/constants/scene/actors/miriamBennett'
import { MISCHIEVOUS_BANJO } from '../../../../app/constants/scene/actors/miriamStephanie'
import { COMFORTING_HUMILIATED } from '../../../../app/constants/scene/actors/sashaBennett'
import { BENNETT_RECORDING } from '../../../../app/constants/scene/actors/stephanie'
import {
    ASLEEP,
    PAST,
    PRESENT,
    FUTURE,
} from '../../../../app/constants/scene/actors/songs'
import {
    OAKLAND_SIDE__LEVEL,
    ROAD_PAST,
    ROAD_PRESENT,
    ROAD_FUTURE,
} from '../../../../app/constants/scene/things/backdrops'
import {
    SNOWGLOBE_SMALL__PAST,
    SNOWGLOBE_PAST,
    SNOWGLOBE_SMALL__PRESENT,
    SNOWGLOBE_PRESENT,
    SNOWGLOBE_SMALL__FUTURE,
    SNOWGLOBE_FUTURE_CORD,
    SNOWGLOBE_FUTURE_REATTA,
} from '../../../../app/constants/scene/things/cardboards'
import {
    PEACH_TREE,
    ROSEBUSH_DOUBLE_BASEMENT,
    ROSEBUSH_SINGLE_BASEMENT,
} from '../../../../app/constants/scene/things/cutouts'
import {
    BASEMENT_DOOR,
    DEFAULT_FENCE_BASEMENT,
} from '../../../../app/constants/scene/things/doors'
import {
    TETHERBALL_POLE,
    RECORDING_MIC,
    RECORDING_BEERS,
    CRACKED_PICTURE,
    GHOST_SHACKLES,
} from '../../../../app/constants/scene/things/fixtures'
import { BASEMENT_PILLOW } from '../../../../app/constants/scene/things/furnitures'
import {
    SNOWGLOBE__TETHERBALL,
    SNOWGLOBE__LIZ_ALONE,
    SNOWGLOBE__BENNETT_MIRIAM,
    SNOWGLOBE__LIZ_KHARI,
    SNOWGLOBE__BENNETT_ALONE,
    BENNETT_BED,
    LIZ_COUCH__PRESENT,
    LIZ_COUCH__FUTURE,
    WIDE_COUCH_MIRIAM,
    WIDE_ARMREST_MIRIAM__LEFT,
    WIDE_ARMREST_MIRIAM__RIGHT,
} from '../../../../app/constants/scene/things/panels'
import { OPAL_COUCH__FUTURE } from '../../../../app/constants/scene/things/puppets'

export default [
    {
        unitIndex: 1,
        description: `Bennett is sleeping in bed with Miriam.`,
        presences: {
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    description: 'side, asleep',
                    instance: ASLEEP,
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [DOOR]: {
                [DEFAULT_FENCE_BASEMENT]: true,
                [BASEMENT_DOOR]: true,
            },
            [FURNITURE]: {
                [BASEMENT_PILLOW]: true,
            },
            [PANEL]: {
                [BENNETT_BED]: true,
            },
        },
        cubes: BASEMENT_BED_DARK_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 2,
        description: `Bennett's parents are ghosts, visiting him as he lies in bed with Miriam. They are dressed in traditional Chinese garb. His father is stern and disapproving, while his mother consoles a weeping Sita.`,
        presences: {
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    description: 'side, asleep',
                    instance: ASLEEP_FEARFUL,
                },
                [FATHER]: {
                    description: 'side, accusatory',
                    instance: ACCUSATORY,
                },
                [ESTHER_MOTHER]: {
                    youngSita: {
                        description: 'side angle, sobbing',
                        instance: HURT_CONSOLING,
                    },
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [CUTOUT]: {
                [PEACH_TREE]: true,
                [ROSEBUSH_DOUBLE_BASEMENT]: true,
                [ROSEBUSH_SINGLE_BASEMENT]: true,
            },
            [DOOR]: {
                [DEFAULT_FENCE_BASEMENT]: true,
            },
            [FURNITURE]: {
                [BASEMENT_PILLOW]: true,
            },
            [PANEL]: {
                [BENNETT_BED]: true,
            },
        },
        cubes: BASEMENT_BED_MAGIC_KEY,
        sky: { season: SEASON_NIGHT_MAGIC },
    },
    {
        unitIndex: 5,
        description: `Bennett's father takes him to visit his childhood past. They watch as young Bennett, having just been bullied, lashes out in anger, to no one in particular. Sasha is with him, and is understanding but clearly keeping her distance. Bennett winces.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'front angle, wincing',
                    instance: PAST,
                },
                [FATHER]: {
                    description: 'side angle, gesturing to scene below',
                    instance: PAST,
                },
                [SASHA_BENNETT]: {
                    description: 'sitting, hurt, lashing out in anger',
                    instance: COMFORTING_HUMILIATED,
                },
            },
            [BACKDROP]: {
                [ROAD_PAST]: true,
            },
            [CARDBOARD]: {
                [SNOWGLOBE_SMALL__PAST]: true,
                [SNOWGLOBE_PAST]: true,
            },
            [FIXTURE]: {
                [TETHERBALL_POLE]: true,
            },
            [PANEL]: {
                [SNOWGLOBE__TETHERBALL]: true,
            },
        },
        cubes: SNOWGLOBES_PAST_KEY,
        sky: { season: SEASON_PAST },
    },
    {
        unitIndex: 8,
        description: `Bennett's mother is back. They next take him to visit the present. Sita is at home crying, as in the first scene of Kyon, while Bennett is playing guitar next to Miriam on her bed.`,
        presences: {
            [ACTOR]: {
                [BENNETT_FATHER]: {
                    description: 'front, dismissive, not feeling bad',
                    instance: PRESENT,
                },
                [MOTHER]: {
                    description: 'side angle, gesturing with empathy',
                    instance: PRESENT,
                },
                [LIZ]: {
                    sita: {
                        description: 'side, seated, pensive',
                        instance: PETTING_SEATED_PRESENT,
                    },
                },
                [MIRIAM_STEPHANIE]: {
                    description: 'side, jumping on Bennett, grabbing his banjo',
                    instance: MISCHIEVOUS_BANJO,
                },
            },
            [BACKDROP]: {
                [ROAD_PRESENT]: true,
            },
            [CARDBOARD]: {
                [SNOWGLOBE_SMALL__PRESENT]: true,
                [SNOWGLOBE_PRESENT]: true,
            },
            [PANEL]: {
                [SNOWGLOBE__LIZ_ALONE]: true,
                [SNOWGLOBE__BENNETT_MIRIAM]: true,
                [LIZ_COUCH__PRESENT]: true,
                [WIDE_COUCH_MIRIAM]: true,
                [WIDE_ARMREST_MIRIAM__LEFT]: true,
                [WIDE_ARMREST_MIRIAM__RIGHT]: true,
            },
        },
        cubes: SNOWGLOBES_PRESENT_KEY,
        sky: { season: SEASON_PRESENT },
    },
    {
        unitIndex: 11,
        description: `Finally, they take him to visit the future. Unknowingly, they cross paths with Sita who is laughing with her friend in a park. Meanwhile, Bennett is at home alone, recording and depressed.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'concerned',
                    instance: FUTURE,
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        description: 'back, squatting, recording, dejected',
                        instance: BENNETT_RECORDING,
                    },
                },
                [MOTHER]: {
                    description: 'front angle, wanting to console Bennett',
                    instance: FUTURE,
                },
                [FATHER]: {
                    description: 'front angle, arms crossed, righteous',
                    instance: FUTURE,
                },
                [KHARI_LIZ]: {
                    description: 'side angle, cheerful, making a point',
                    instance: JOKING_LAUGHING,
                },
            },
            [BACKDROP]: {
                [ROAD_FUTURE]: true,
            },
            [CARDBOARD]: {
                [SNOWGLOBE_SMALL__FUTURE]: true,
                [SNOWGLOBE_FUTURE_CORD]: true,
                [SNOWGLOBE_FUTURE_REATTA]: true,
            },
            [FIXTURE]: {
                [RECORDING_MIC]: true,
                [RECORDING_BEERS]: true,
            },
            [PANEL]: {
                [SNOWGLOBE__LIZ_KHARI]: true,
                [SNOWGLOBE__BENNETT_ALONE]: true,
                [LIZ_COUCH__FUTURE]: true,
            },
            [PUPPET]: {
                [OPAL_COUCH__FUTURE]: true,
            },
        },
        cubes: SNOWGLOBES_FUTURE_KEY,
        sky: { season: SEASON_FUTURE },
    },
    {
        unitIndex: 15,
        description: `Bringing him back, Bennett unrepentantly crawls into Miriam's arms, who is casting an imaginary spell to release him from their grasp. His father flinches, while his mother shields Sita from the view.`,
        presences: {
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    description: 'side sitting, vindictive, magical gesture',
                    instance: FENDING_OFF,
                },
                [FATHER]: {
                    description: 'side angle, knocked over',
                    instance: REELING,
                },
                [ESTHER_MOTHER]: {
                    youngSita: {
                        description: 'side angle, sobbing uncontrollably',
                        instance: SOBBING_SHIELDING,
                    },
                },
            },
            [CUTOUT]: {
                [PEACH_TREE]: true,
                [ROSEBUSH_DOUBLE_BASEMENT]: true,
                [ROSEBUSH_SINGLE_BASEMENT]: true,
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [DOOR]: {
                [DEFAULT_FENCE_BASEMENT]: true,
            },
            [FIXTURE]: {
                [CRACKED_PICTURE]: true,
                [GHOST_SHACKLES]: true,
            },
            [FURNITURE]: {
                [BASEMENT_PILLOW]: true,
            },
            [PANEL]: {
                [BENNETT_BED]: true,
            },
        },
        cubes: BASEMENT_BED_MAGIC_KEY,
        sky: { season: SEASON_NIGHT_MAGIC },
    },
]
