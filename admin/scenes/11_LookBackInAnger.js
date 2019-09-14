import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    MARA,
    JACOB,
    ANA,
    TOMER,
    LIZ,
    AMY,
    STEPHANIE,
    WADE
} from 'constants/scene/actors'
import {
    SIDELONG_HESITANCE,
    REMOVING_SHOES,
    SHOES_REFLECTION
} from 'constants/scene/actors/instances/bennett'
import {
    ASLEEP_REACHING,
    REACHING_REFLECTION
} from 'constants/scene/actors/instances/liz'
import { SHANE_SPILLING } from 'constants/scene/actors/instances/tomer'
import { WATCHING } from 'constants/scene/actors/instances/wade'
import {
    SQUEEZING
} from 'constants/scene/actors/instances/amyStephanie'
import {
    PERFORMING,
    FLIRTING,
    CARRYING,
    MINGLING,
    WAITING
} from 'constants/scene/actors/instances/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PERFORMING
                },
                [ANA]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PERFORMING
                },
                [TOMER]: {
                    shane: {
                        todo: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: SHANE_SPILLING
                    }
                },
                [WADE]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WATCHING
                },
                [AMY]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SQUEEZING
                },
                [STEPHANIE]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SQUEEZING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FLIRTING
                },
                [AMY]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FLIRTING
                },
                [JACOB]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CARRYING
                },
                [MARA]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CARRYING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SIDELONG_HESITANCE
                },
                [ANA]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WAITING
                },
                [MARA]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WAITING
                },
                [AMY]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: MINGLING
                },
                [STEPHANIE]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: MINGLING
                },
                [WADE]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: MINGLING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: REMOVING_SHOES
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: ASLEEP_REACHING
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    reflection: {
                        todo: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: SHOES_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
                        todo: true,
                        workedHours: 3.75,
                        instance: REACHING_REFLECTION
                    }
                }
            }
        }
    }
]
