import {
    BENNETT_BASEMENT_KEY,
    SNOW_GLOBES_1_KEY,
    SNOW_GLOBES_2_KEY,
    SNOW_GLOBES_3_KEY
} from 'constants/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from 'constants/sky'

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
} from 'constants/actorKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is sleeping in bed with Miriam.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'lying sitting up, arm around Miriam, scared, guilty'
            },
            [MIRIAM]: {
                todo: true,
                workedHours: 2.5,
                description: 'side, asleep'
            }
        },
        cubes: BENNETT_BASEMENT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 2,
        description: `Bennett's parents are ghosts, visiting him as he lies in bed with Miriam. They are dressed in traditional Chinese garb. His father is stern and disapproving, while his mother consoles a weeping Sita.`,
        actors: {
            [MOTHER]: {
                todo: true,
                workedHours: 3,
                description: 'front, consoling Sita'
            },
            [FATHER]: {
                todo: true,
                workedHours: 3,
                description: 'side, accusatory'
            },
            [ESTHER]: {
                youngSita: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, sobbing'
                }
            }
        },
        cubes: BENNETT_BASEMENT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 4,
        description: `Bennett's father takes him to visit his childhood past. They watch as young Bennett, having just been bullied, lashes out in anger, to no one in particular. Sasha is with him, and is understanding but clearly keeping her distance. Bennett winces.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'front angle, wincing'
            },
            [FATHER]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, gesturing to scene below'
            },
            [PRETEEN_BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'sitting, hurt, lashing out in anger'
            },
            [SASHA]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, consoling, cautious'
            }
        },
        cubes: SNOW_GLOBES_1_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 8,
        description: `Bennett's mother is back. They next take him to visit the present. Sita is at home crying, as in the first scene of Kyon, while Bennett is playing guitar next to Miriam on her bed.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'front, dismissive, not feeling bad'
            },
            [MOTHER]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, gesturing with empathy'
            },
            [FATHER]: {
                todo: true,
                workedHours: 3,
                description: 'front angle, gesturing with blame'
            },
            [MIRIAM]: {
                todo: true,
                workedHours: 2.5,
                description: 'side, jumping on Bennett, grabbing his banjo'
            },
            [STEPHANIE]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'making out with Miriam'
                }
            }
        },
        cubes: SNOW_GLOBES_2_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 11,
        description: `Finally, they take him to visit the future. Unknowingly, they cross paths with Sita who is laughing with her friend in a park. Meanwhile, Bennett is at home alone, recording and depressed.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'concerned'
            },
            [STEPHANIE]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back, squatting, recording, dejected'
                }
            },
            [MOTHER]: {
                todo: true,
                workedHours: 3,
                description: 'front angle, wanting to console Bennett'
            },
            [FATHER]: {
                todo: true,
                workedHours: 3,
                description: 'front angle, arms crossed, righteous'
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, amused by conversation'
                }
            },
            [KHARI]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, cheerful, making a point'
            }
        },
        cubes: SNOW_GLOBES_3_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 14,
        description: `Bringing him back, Bennett unrepentantly crawls into Miriam's arms, who is casting an imaginary spell to release him from their grasp. His father flinches, while his mother shields Sita from the view.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, seeking protection'
            },
            [MIRIAM]: {
                todo: true,
                workedHours: 2.5,
                description: 'side sitting, vindictive, magical gesture'
            },
            [MOTHER]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, protecting Sita'
            },
            [FATHER]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, knocked over'
            },
            [ESTHER]: {
                youngSita: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, sobbing uncontrollably'
                }
            }
        },
        cubes: BENNETT_BASEMENT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
