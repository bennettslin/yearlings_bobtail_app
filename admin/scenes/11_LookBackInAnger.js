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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PERFORMING
                },
                [ANA]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PERFORMING
                },
                [TOMER]: {
                    shane: {
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: SHANE_SPILLING
                    }
                },
                [WADE]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WATCHING
                },
                [AMY]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SQUEEZING
                },
                [STEPHANIE]: {
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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FLIRTING
                },
                [AMY]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FLIRTING
                },
                [JACOB]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CARRYING
                },
                [MARA]: {
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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SIDELONG_HESITANCE
                },
                [ANA]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WAITING
                },
                [MARA]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WAITING
                },
                [AMY]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: MINGLING
                },
                [STEPHANIE]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: MINGLING
                },
                [WADE]: {
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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: REMOVING_SHOES
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        trunkShape: true,
                        trunkLine: true,
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
                        trunkShape: true,
                        trunkLine: true,
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
