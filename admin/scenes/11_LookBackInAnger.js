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
import { SQUEEZING } from 'constants/scene/actors/amyStephanie'
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
                    instance: PERFORMING
                },
                [ANA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: PERFORMING
                },
                [TOMER]: {
                    shane: {
                        instance: SHANE_SPILLING
                    }
                },
                [WADE]: {
                    instance: WATCHING
                },
                [AMY]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: SQUEEZING
                },
                [STEPHANIE]: {
                    instance: SQUEEZING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: FLIRTING
                },
                [AMY]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: FLIRTING
                },
                [JACOB]: {
                    instance: CARRYING
                },
                [MARA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: CARRYING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: SIDELONG_HESITANCE
                },
                [ANA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: WAITING
                },
                [MARA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: WAITING
                },
                [AMY]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: MINGLING
                },
                [STEPHANIE]: {
                    instance: MINGLING
                },
                [WADE]: {
                    instance: MINGLING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: REMOVING_SHOES
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        head: true,
                        eyebrow: true,
                        nose: true,
                        mouth: true,
                        lips: true,
                        eyes: true,
                        pupils: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                        instance: SHOES_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
                        faceRevision: true,
                        head: true,
                        eyebrow: true,
                        nose: true,
                        mouth: true,
                        lips: true,
                        eyes: true,
                        pupils: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        instance: REACHING_REFLECTION
                    }
                }
            }
        }
    }
]
