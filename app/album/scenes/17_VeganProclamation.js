import {
    SHOW_STAGE_FRONT_FAR_KEY,
    SITA_APARTMENT_BED_KEY,
    ALLEY_KEY,
    SPROUL_PLAZA_KEY,
    BERKELEY_WALKWAY_KEY
} from '../../constants/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_WINTER
} from '../../constants/sky'

import {
    BENNETT,
    LIZ,
    KHARI,
    MIRIAM,
    TRISTAN,
    NESTOR,
    AMY,
    STEPHANIE,
    WADE,
    LIZ_REFLECTION,
    KHARI_REFLECTION
} from '../../constants/actorKeys'

module.exports = {
    scenes: [
        {
            unitIndex: 1,
            description: `Bennett is walking with the ghost of Odin in a park. He passes Sita, who is holding hands with her friend. Bennett looks down, her friend looks up, while Sita looks concerned.`,
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, slumped over, despondent'
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side angle, looking back, concerned'
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, protective, judgmental'
                }
            },
            cubes: BERKELEY_WALKWAY_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_WINTER
            }
        },
        {
            unitIndex: 4,
            description: `Bennett is by himself with Odin at a show, looking agitated and bored. Miriam is on the other side of the crowd, being introduced by Tristan to her future boyfriend.`,
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back, looking to side, annoyed'
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, flirting'
                },
                [TRISTAN]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, introducing miriam'
                },
                [NESTOR]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, eager'
                }
            },
            cubes: SHOW_STAGE_FRONT_FAR_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_WINTER
            }
        },
        {
            unitIndex: 7,
            description: 'Bennett is walking through an alley.',
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'walking through alley'
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
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, on phone, hunched over, sobbing'
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'Lying in bed, on phone with Bennett'
                    }
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection'
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 3,
                    description: 'lying in bed, caressing Sita'
                },
                [KHARI_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection'
                    }
                },
            },
            cubes: SITA_APARTMENT_BED_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_WINTER
            }
        },
        {
            unitIndex: 12,
            description: `Bennett is with Odin, and happens upon a Peta demonstration. One of the demonstrators is petting Odin.`,
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, desperately hopeful'
                },
                [AMY]: {
                    demonstrator: {
                        todo: true,
                        workedHours: 3,
                        description: 'back, passing out flyers'
                    }
                },
                [STEPHANIE]: {
                    demonstrator: {
                        todo: true,
                        workedHours: 3,
                        description: 'standing, demonstrating'
                    }
                },
                [WADE]: {
                    demonstrator: {
                        todo: true,
                        workedHours: 3,
                        description: 'standing, demonstrating'
                    }
                }
            },
            cubes: SPROUL_PLAZA_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_WINTER
            }
        }
    ]
}
