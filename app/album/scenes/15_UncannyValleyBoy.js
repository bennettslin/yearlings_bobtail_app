import {
    ACTOR,
    BACKDROP,
    CARDBOARD,
    FIXTURE,
    PANEL
} from 'constants/scene'
import {
    BASEMENT_BED_KEY,
    BASEMENT_MAGIC_KEY,
    SNOWGLOBES_PAST_KEY,
    SNOWGLOBES_PRESENT_KEY,
    SNOWGLOBES_FUTURE_KEY
} from '../../constants/scene/scenes'
import {
    TIME_ANYTIME,
    SEASON_AUTUMN,
    SEASON_MAGIC,
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
} from '../../constants/scene/actors/instances/estherMother'
import {
    ACCUSATORY,
    REELING
} from '../../constants/scene/actors/instances/father'
import { JOKING_LAUGHING } from '../../constants/scene/actors/instances/khariLiz'
import { PETTING_SEATED } from '../../constants/scene/actors/instances/liz'
import {
    ASLEEP_FEARFUL,
    FENDING_OFF
} from '../../constants/scene/actors/instances/miriamBennett'
import { MISCHIEVOUS_BANJO } from '../../constants/scene/actors/instances/miriamStephanie'
import { COMFORTING_HUMILIATED } from '../../constants/scene/actors/instances/sashaBennett'
import { BENNETT_RECORDING } from '../../constants/scene/actors/instances/stephanie'
import {
    ASLEEP,
    PAST,
    PRESENT,
    FUTURE
} from '../../constants/scene/actors/instances/songs'
import {
    ROAD_PAST,
    ROAD_PRESENT,
    ROAD_FUTURE,
    FOLIAGE_BACKDROP
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
import {
    TETHERBALL_POLE,
    RECORDING_MIC,
    RECORDING_CONSOLE,
    RECORDING_BEERS,
    CRACKED_PICTURE
} from '../../constants/scene/things/fixtures'
import {
    SNOWGLOBE__TETHERBALL,
    SNOWGLOBE__LIZ_ALONE,
    SNOWGLOBE__BENNETT_MIRIAM,
    SNOWGLOBE__LIZ_KHARI,
    SNOWGLOBE__BENNETT_ALONE,
    BENNETT_BED,
    LIZ_COUCH,
    WIDE_COUCH__MIRIAM,
    WIDE_ARMREST__MIRIAM_LEFT,
    WIDE_ARMREST__MIRIAM_RIGHT
} from '../../constants/scene/things/panels'

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
                [FOLIAGE_BACKDROP]: true
            },
            [PANEL]: {
                [BENNETT_BED]: true
            }
        },
        cubes: BASEMENT_BED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
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
                [FOLIAGE_BACKDROP]: true
            },
            [PANEL]: {
                [BENNETT_BED]: true
            }
        },
        cubes: BASEMENT_MAGIC_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_MAGIC
        }
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
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_PAST
        }
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
                        instance: PETTING_SEATED
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
                [WIDE_COUCH__MIRIAM]: true,
                [WIDE_ARMREST__MIRIAM_LEFT]: true,
                [WIDE_ARMREST__MIRIAM_RIGHT]: true
            }
        },
        cubes: SNOWGLOBES_PRESENT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_PRESENT
        }
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
                [RECORDING_CONSOLE]: true,
                [RECORDING_BEERS]: true
            },
            [PANEL]: {
                [LIZ_COUCH]: true
            },
            [PANEL]: {
                [SNOWGLOBE__LIZ_KHARI]: true,
                [SNOWGLOBE__BENNETT_ALONE]: true
            }
        },
        cubes: SNOWGLOBES_FUTURE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_FUTURE
        }
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
                [FOLIAGE_BACKDROP]: true
            },
            [FIXTURE]: {
                [CRACKED_PICTURE]: true
            },
            [PANEL]: {
                [BENNETT_BED]: true
            }
        },
        cubes: BASEMENT_MAGIC_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_MAGIC
        }
    }
]
