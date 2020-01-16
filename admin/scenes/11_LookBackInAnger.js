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
} from 'constants/scene/actors/bennett'
import {
    ASLEEP_REACHING,
    REACHING_REFLECTION
} from 'constants/scene/actors/liz'
import { SHANE_SPILLING } from 'constants/scene/actors/tomer'
import { WATCHING } from 'constants/scene/actors/wade'
import {
    SQUEEZING
} from 'constants/scene/actors/amyStephanie'
import {
    PERFORMING,
    FLIRTING,
    CARRYING,
    MINGLING,
    WAITING
} from 'constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    composite: true,
                    instance: PERFORMING
                },
                [ANA]: {
                    hands: true,
                    composite: true,
                    instance: PERFORMING
                },
                [TOMER]: {
                    shane: {
                        composite: true,
                        instance: SHANE_SPILLING
                    }
                },
                [WADE]: {
                    composite: true,
                    instance: WATCHING
                },
                [AMY]: {
                    composite: true,
                    instance: SQUEEZING
                },
                [STEPHANIE]: {
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
                    composite: true,
                    instance: FLIRTING
                },
                [AMY]: {
                    composite: true,
                    instance: FLIRTING
                },
                [JACOB]: {
                    composite: true,
                    instance: CARRYING
                },
                [MARA]: {
                    hands: true,
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
                    composite: true,
                    instance: SIDELONG_HESITANCE
                },
                [ANA]: {
                    hands: true,
                    composite: true,
                    instance: WAITING
                },
                [MARA]: {
                    hands: true,
                    composite: true,
                    instance: WAITING
                },
                [AMY]: {
                    composite: true,
                    instance: MINGLING
                },
                [STEPHANIE]: {
                    composite: true,
                    instance: MINGLING
                },
                [WADE]: {
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
                    composite: true,
                    instance: REMOVING_SHOES
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        head: true,
                        hands: true,
                        eyebrow: true,
                        nose: true,
                        mouth: true,
                        lips: true,
                        eyes: true,
                        pupils: true,
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
                        composite: true,
                        instance: SHOES_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
                        faceRevision: true,
                        head: true,
                        hands: true,
                        eyebrow: true,
                        nose: true,
                        mouth: true,
                        lips: true,
                        eyes: true,
                        pupils: true,
                        composite: true,
                        instance: REACHING_REFLECTION
                    }
                }
            }
        }
    }
]
