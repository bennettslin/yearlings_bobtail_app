import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    MARA,
    JACOB,
    ANA,
    TOMER,
    LIZ,
    AMY,
    AMY_STEPHANIE,
    STEPHANIE,
    WADE,
    BENNETT_REFLECTION,
    LIZ_REFLECTION
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
                    workedHours: 4.25,
                    instance: PERFORMING
                },
                [ANA]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: PERFORMING
                },
                [TOMER]: {
                    shane: {
                        todo: true,
                        workedHours: 4.25,
                        instance: SHANE_SPILLING
                    }
                },
                [WADE]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: WATCHING
                },
                [AMY_STEPHANIE]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
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
                    workedHours: 4.25,
                    instance: FLIRTING
                },
                [AMY]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: FLIRTING
                },
                [JACOB]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: CARRYING
                },
                [MARA]: {
                    todo: true,
                    workedHours: 4.25,
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
                    workedHours: 4.25,
                    instance: SIDELONG_HESITANCE
                },
                [ANA]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: WAITING
                },
                [MARA]: {
                    todo: true,
                    workedHours: 3.75,
                    instance: WAITING
                },
                [AMY]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: MINGLING
                },
                [STEPHANIE]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: MINGLING
                },
                [WADE]: {
                    todo: true,
                    workedHours: 4.25,
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
                    workedHours: 4.25,
                    instance: REMOVING_SHOES
                },
                [BENNETT_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 4.25,
                        instance: SHOES_REFLECTION
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: ASLEEP_REACHING
                    }
                },
                [LIZ_REFLECTION]: {
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
