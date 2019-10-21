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
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PERFORMING
                },
                [ANA]: {
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
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: SHANE_SPILLING
                    }
                },
                [WADE]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WATCHING
                },
                [AMY]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SQUEEZING
                },
                [STEPHANIE]: {
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
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FLIRTING
                },
                [AMY]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FLIRTING
                },
                [JACOB]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CARRYING
                },
                [MARA]: {
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
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SIDELONG_HESITANCE
                },
                [ANA]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WAITING
                },
                [MARA]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WAITING
                },
                [AMY]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: MINGLING
                },
                [STEPHANIE]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: MINGLING
                },
                [WADE]: {
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
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: REMOVING_SHOES
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
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
                        faceRevision: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: REACHING_REFLECTION
                    }
                }
            }
        }
    }
]
