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
                    hands: true,
                    eyes: true,
                    pupils: true,
                    composite: true,
                    instance: PERFORMING
                },
                [ANA]: {
                    hands: true,
                    eyes: true,
                    pupils: true,
                    composite: true,
                    instance: PERFORMING
                },
                [TOMER]: {
                    shane: {
                        hands: true,
                        eyes: true,
                        pupils: true,
                        composite: true,
                        instance: SHANE_SPILLING
                    }
                },
                [WADE]: {
                    hands: true,
                    pupils: true,
                    composite: true,
                    instance: WATCHING
                },
                [AMY]: {
                    hands: true,
                    eyes: true,
                    pupils: true,
                    composite: true,
                    instance: SQUEEZING
                },
                [STEPHANIE]: {
                    hands: true,
                    eyes: true,
                    pupils: true,
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
                    eyes: true,
                    pupils: true,
                    composite: true,
                    instance: FLIRTING
                },
                [AMY]: {
                    hands: true,
                    eyes: true,
                    pupils: true,
                    composite: true,
                    instance: FLIRTING
                },
                [JACOB]: {
                    hands: true,
                    eyes: true,
                    pupils: true,
                    composite: true,
                    instance: CARRYING
                },
                [MARA]: {
                    hands: true,
                    eyes: true,
                    pupils: true,
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
                    eyes: true,
                    pupils: true,
                    composite: true,
                    instance: SIDELONG_HESITANCE
                },
                [ANA]: {
                    hands: true,
                    eyes: true,
                    pupils: true,
                    composite: true,
                    instance: WAITING
                },
                [MARA]: {
                    hands: true,
                    eyes: true,
                    pupils: true,
                    composite: true,
                    instance: WAITING
                },
                [AMY]: {
                    hands: true,
                    eyes: true,
                    pupils: true,
                    composite: true,
                    instance: MINGLING
                },
                [STEPHANIE]: {
                    hands: true,
                    eyes: true,
                    pupils: true,
                    composite: true,
                    instance: MINGLING
                },
                [WADE]: {
                    hands: true,
                    pupils: true,
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
                    eyes: true,
                    pupils: true,
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
                        hands: true,
                        eyes: true,
                        pupils: true,
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
