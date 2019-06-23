import {
    ACTOR,
    BACKDROP,
    FIXTURE,
    FLAT,
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

import { WEST_BERKELEY_BACKDROP } from '../../constants/scene/things/backdrops'

import {
    TETHERBALL_POLE,
    RECORDING_MIC,
    RECORDING_CONSOLE,
    RECORDING_BEERS,
    CRACKED_PICTURE
} from '../../constants/scene/things/fixtures'

import {
    ROAD_PAST,
    ROAD_PRESENT,
    ROAD_FUTURE
} from '../../constants/scene/things/flats'

import {
    SNOWGLOBE_TETHERBALL,
    SNOWGLOBE_LIZ_ALONE,
    SNOWGLOBE_BENNETT_MIRIAM,
    SNOWGLOBE_LIZ_KHARI,
    SNOWGLOBE_BENNETT_ALONE,
    BENNETT_BED,
    LIZ_COUCH,
    BENNETT_COUCH_BUBBLE,
    BENNETT_LEFT_ARMREST_BUBBLE,
    BENNETT_RIGHT_ARMREST_BUBBLE
} from '../../constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett is sleeping in bed with Miriam.`,
        presences: {
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    todo: true,
                    workedHours: 3.5,
                    compound: 2,
                    description: 'side, asleep',
                    instance: ASLEEP
                }
            },
            [BACKDROP]: {
                [WEST_BERKELEY_BACKDROP]: true
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
                    compound: 2,
                    duplicate: true,
                    description: 'side, asleep',
                    instance: ASLEEP_FEARFUL
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'side, accusatory',
                    instance: ACCUSATORY
                },
                [ESTHER_MOTHER]: {
                    youngSita: {
                        todo: true,
                        workedHours: 3.75,
                        compound: 2,
                        description: 'side angle, sobbing',
                        instance: HURT_CONSOLING
                    }
                }
            },
            [BACKDROP]: {
                [WEST_BERKELEY_BACKDROP]: true
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
                    todo: true,
                    workedHours: 4.25,
                    description: 'front angle, wincing',
                    instance: PAST
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'side angle, gesturing to scene below',
                    instance: PAST
                },
                [SASHA_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    description: 'sitting, hurt, lashing out in anger',
                    instance: COMFORTING_HUMILIATED
                }
            },
            [FIXTURE]: {
                [TETHERBALL_POLE]: true
            },
            [FLAT]: {
                [ROAD_PAST]: true
            },
            [PANEL]: {
                [SNOWGLOBE_TETHERBALL]: true
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
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    description: 'front, dismissive, not feeling bad',
                    instance: PRESENT
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'side angle, gesturing with empathy',
                    instance: PRESENT
                },
                [LIZ]: {
                    sita: {
                        duplicate: true,
                        description: 'side, seated, pensive',
                        instance: PETTING_SEATED
                    }
                },
                [MIRIAM_STEPHANIE]: {
                    todo: true,
                    workedHours: 3.5,
                    compound: 2,
                    description: 'side, jumping on Bennett, grabbing his banjo',
                    instance: MISCHIEVOUS_BANJO
                }
            },
            [FLAT]: {
                [ROAD_PRESENT]: true
            },
            [PANEL]: {
                [SNOWGLOBE_LIZ_ALONE]: true,
                [SNOWGLOBE_BENNETT_MIRIAM]: true,
                [BENNETT_COUCH_BUBBLE]: true,
                [BENNETT_LEFT_ARMREST_BUBBLE]: true,
                [BENNETT_RIGHT_ARMREST_BUBBLE]: true
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
                    todo: true,
                    workedHours: 4.25,
                    description: 'concerned',
                    instance: FUTURE
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 4.25,
                        description: 'back, squatting, recording, dejected',
                        instance: BENNETT_RECORDING
                    }
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'front angle, wanting to console Bennett',
                    instance: FUTURE
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'front angle, arms crossed, righteous',
                    instance: FUTURE
                },
                [KHARI_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    description: 'side angle, cheerful, making a point',
                    instance: JOKING_LAUGHING
                }
            },
            [FIXTURE]: {
                [RECORDING_MIC]: true,
                [RECORDING_CONSOLE]: true,
                [RECORDING_BEERS]: true
            },
            [FLAT]: {
                [ROAD_FUTURE]: true
            },
            [PANEL]: {
                [LIZ_COUCH]: true
            },
            [PANEL]: {
                [SNOWGLOBE_LIZ_KHARI]: true,
                [SNOWGLOBE_BENNETT_ALONE]: true
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
                    todo: true,
                    workedHours: 3.5,
                    compound: 2,
                    description: 'side sitting, vindictive, magical gesture',
                    instance: FENDING_OFF
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'side angle, knocked over',
                    instance: REELING
                },
                [ESTHER_MOTHER]: {
                    youngSita: {
                        todo: true,
                        workedHours: 3.75,
                        compound: 2,
                        description: 'side angle, sobbing uncontrollably',
                        instance: SOBBING_SHIELDING
                    }
                }
            },
            [BACKDROP]: {
                [WEST_BERKELEY_BACKDROP]: true
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
