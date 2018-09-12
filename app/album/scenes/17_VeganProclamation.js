import {
    CLUB_FAR_KEY,
    LIZ_BED_KEY,
    ALLEY_KEY,
    BANCROFT_LIBRARY_KEY,
    CAMPANILE_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_WINTER
} from 'scene/sky'

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
} from 'scene/actorKeys'

import {
    CAMPUS_ASHAMED,
    SHOW_ANNOYED,
    ALLEY,
    BROKEN_HEARTED,
    DEMONSTRATION
} from 'scene/instanceKeys/bennett'

import {
    PROTECTIVE,
    CARESSING,
    CARESSING_REFLECTION
} from 'scene/instanceKeys/khari'

import {
    SELFLESS_CONCERN,
    CARESSED,
    CARESSED_REFLECTION
} from 'scene/instanceKeys/liz'

import { INTRODUCING } from 'scene/instanceKeys/tristan'

import {
    GREETING,
    PROTESTER
} from 'scene/instanceKeys/songs'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is walking with the ghost of Odin in a park. He passes Sita, who is holding hands with her friend. Bennett looks down, her friend looks up, while Sita looks concerned.`,
        presences: {
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, slumped over, despondent',
                    instance: CAMPUS_ASHAMED
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side angle, looking back, concerned',
                        instance: SELFLESS_CONCERN
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, protective, judgmental',
                    instance: PROTECTIVE
                }
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
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back, looking to side, annoyed',
                    instance: SHOW_ANNOYED
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, flirting',
                    instance: GREETING
                },
                [TRISTAN]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, introducing miriam',
                    instance: INTRODUCING
                },
                [NESTOR]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, eager',
                    instance: GREETING
                }
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
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'walking through alley',
                    instance: ALLEY
                }
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
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, on phone, hunched over, sobbing',
                    instance: BROKEN_HEARTED
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'Lying in bed, on phone with Bennett',
                        instance: CARESSED
                    }
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: CARESSED_REFLECTION
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 3,
                    description: 'lying in bed, caressing Sita',
                    instance: CARESSING
                },
                [KHARI_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection',
                        instance: CARESSING_REFLECTION
                    }
                }
            }
        },
        cubes: LIZ_BED_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    },
    {
        unitIndex: 12,
        description: `Bennett is with Odin, and happens upon a Peta demonstration. One of the demonstrators is petting Odin.`,
        presences: {
            actors: {
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
            }
        },
        cubes: BANCROFT_LIBRARY_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_WINTER
        }
    }
]
