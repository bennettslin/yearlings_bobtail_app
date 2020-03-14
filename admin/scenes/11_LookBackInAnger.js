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
                    instance: FLIRTING
                },
                [JACOB]: {
                    instance: CARRYING
                },
                [MARA]: {
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
                    instance: WAITING
                },
                [MARA]: {
                    instance: WAITING
                },
                [AMY]: {
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
                        mouth: true,
                        lips: true,
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
                        mouth: true,
                        lips: true,
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
