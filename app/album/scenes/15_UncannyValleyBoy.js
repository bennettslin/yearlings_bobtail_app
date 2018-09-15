import {
    ACTORS,
    // CUTOUTS,
    FIXTURES,
    FLATS,
    FURNITURES
} from 'constants/scene'

import {
    BASEMENT_BED_KEY,
    BASEMENT_MAGIC_KEY,
    SNOWGLOBES_PAST_KEY,
    SNOWGLOBES_PRESENT_KEY,
    SNOWGLOBES_FUTURE_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN,
    SEASON_MAGIC,
    SEASON_PAST,
    SEASON_PRESENT,
    SEASON_FUTURE
} from 'scene/sky'

import {
    PRETEEN_BENNETT,
    BENNETT,
    ESTHER,
    MOTHER,
    FATHER,
    SASHA,
    LIZ,
    KHARI,
    MIRIAM,
    STEPHANIE
} from 'scene/actorKeys'

import {
    WAKENED_FEARFUL,
    SEEKING_PROTECTION
} from 'scene/instanceKeys/bennett'

import {
    SITA_HURT,
    SITA_SOBBING
} from 'scene/instanceKeys/esther'

import {
    ACCUSATORY,
    REELING
} from 'scene/instanceKeys/father'

import { JOKING } from 'scene/instanceKeys/khari'

import {
    SIFTING_TCHOTCHKES,
    LAUGHING
} from 'scene/instanceKeys/liz'

import {
    ASLEEP,
    MISCHIEVOUS,
    FENDING
} from 'scene/instanceKeys/miriam'

import {
    CONSOLING,
    SHIELDING
} from 'scene/instanceKeys/mother'

import { HUMILIATED } from 'scene/instanceKeys/preteenBennett'

import { COMFORTING } from 'scene/instanceKeys/sasha'

import {
    BENNETT_BANJO,
    BENNETT_RECORDING
} from 'scene/instanceKeys/stephanie'

import {
    PAST,
    PRESENT,
    FUTURE
} from 'scene/instanceKeys/songs'

import {
    RECORDING_CONSOLE,
    RECORDING_MIC,
    RECORDING_BEERS
} from 'scene/fixtureKeys'

import {
    SNOWGLOBES_PAST,
    SNOWGLOBE_TETHERBALL,
    SNOWGLOBES_PRESENT,
    SNOWGLOBE_LIZ_ALONE,
    SNOWGLOBE_BENNETT_MIRIAM,
    SNOWGLOBES_FUTURE,
    SNOWGLOBE_LIZ_KHARI,
    SNOWGLOBE_BENNETT_ALONE
} from 'scene/flatKeys'

import {
    BASEMENT_DOOR,
    BENNETT_MATTRESS,
    BENNETT_PILLOWS,
    LIZ_CUSHIONS,
    MIRIAM_CUSHIONS
} from 'scene/furnitureKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is sleeping in bed with Miriam.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'lying sitting up, arm around Miriam, scared, guilty',
                    instance: WAKENED_FEARFUL
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, asleep',
                    instance: ASLEEP
                }
            },
            [FURNITURES]: {
                [BASEMENT_DOOR]: true,
                [BENNETT_MATTRESS]: true,
                [BENNETT_PILLOWS]: true
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
            [ACTORS]: {
                [MOTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, consoling Sita',
                    instance: CONSOLING
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, accusatory',
                    instance: ACCUSATORY
                },
                [ESTHER]: {
                    youngSita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side angle, sobbing',
                        instance: SITA_HURT
                    }
                }
            },
            [FURNITURES]: {
                [BENNETT_MATTRESS]: true,
                [BENNETT_PILLOWS]: true
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
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front angle, wincing',
                    instance: PAST
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, gesturing to scene below',
                    instance: PAST
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, hurt, lashing out in anger',
                    instance: HUMILIATED
                },
                [SASHA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, consoling, cautious',
                    instance: COMFORTING
                }
            },
            [FLATS]: {
                [SNOWGLOBES_PAST]: true,
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
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, dismissive, not feeling bad',
                    instance: PRESENT
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, gesturing with empathy',
                    instance: PRESENT
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front angle, gesturing with blame',
                    instance: PRESENT
                },
                [LIZ]: {
                    sita: {
                        description: 'side, seated, pensive',
                        instance: SIFTING_TCHOTCHKES
                    }
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, jumping on Bennett, grabbing his banjo',
                    instance: MISCHIEVOUS
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 3,
                        description: 'making out with Miriam',
                        instance: BENNETT_BANJO
                    }
                }
            },
            [FLATS]: {
                [SNOWGLOBES_PRESENT]: true,
                [SNOWGLOBE_LIZ_ALONE]: true,
                [SNOWGLOBE_BENNETT_MIRIAM]: true
            },
            [FURNITURES]: {
                [MIRIAM_CUSHIONS]: true
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
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'concerned',
                    instance: FUTURE
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 3,
                        description: 'back, squatting, recording, dejected',
                        instance: BENNETT_RECORDING
                    }
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front angle, wanting to console Bennett',
                    instance: FUTURE
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front angle, arms crossed, righteous',
                    instance: FUTURE
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, amused by conversation',
                        instance: LAUGHING
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, cheerful, making a point',
                    instance: JOKING
                }
            },
            [FIXTURES]: {
                [RECORDING_CONSOLE]: true,
                [RECORDING_MIC]: true,
                [RECORDING_BEERS]: true
            },
            [FLATS]: {
                [SNOWGLOBES_FUTURE]: true,
                [SNOWGLOBE_LIZ_KHARI]: true,
                [SNOWGLOBE_BENNETT_ALONE]: true
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
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
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, seeking protection',
                    instance: SEEKING_PROTECTION
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side sitting, vindictive, magical gesture',
                    instance: FENDING
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, protecting Sita',
                    instance: SHIELDING
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, knocked over',
                    instance: REELING
                },
                [ESTHER]: {
                    youngSita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side angle, sobbing uncontrollably',
                        instance: SITA_SOBBING
                    }
                }
            },
            [FURNITURES]: {
                [BENNETT_MATTRESS]: true,
                [BENNETT_PILLOWS]: true
            }
        },
        cubes: BASEMENT_MAGIC_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_MAGIC
        }
    }
]
