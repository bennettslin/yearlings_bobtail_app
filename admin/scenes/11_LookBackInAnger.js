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
                    headPlacement: true,
                    finalSvg: true,
                    instance: PERFORMING
                },
                [ANA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: PERFORMING
                },
                [TOMER]: {
                    shane: {
                        headPlacement: true,
                        finalSvg: true,
                        instance: SHANE_SPILLING
                    }
                },
                [WADE]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: WATCHING
                },
                [AMY]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: SQUEEZING
                },
                [STEPHANIE]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: SQUEEZING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: FLIRTING
                },
                [AMY]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: FLIRTING
                },
                [JACOB]: {
                    headPlacement: true,
                    finalSvg: true,
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
                    headPlacement: true,
                    finalSvg: true,
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
                    headPlacement: true,
                    finalSvg: true,
                    instance: MINGLING
                },
                [WADE]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: MINGLING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
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
                        headPlacement: true,
                        finalSvg: true,
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
