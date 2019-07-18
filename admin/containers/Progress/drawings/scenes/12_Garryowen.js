import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    BENNETT_LIZ,
    ANA,
    LIZ,
    MIRIAM_TRISTAN,
    TRISTAN,
    NESTOR
} from 'constants/scene/actors'
import {
    CHUCKLING,
    SMIRKING
} from 'constants/scene/actors/instances/ana'
import { DROPPING_MEATS } from 'constants/scene/actors/instances/bennett'
import {
    BRUSH_OFF,
    CELIBATE_FREEZING
} from 'constants/scene/actors/instances/bennettLiz'
import { NOOGIE } from 'constants/scene/actors/instances/miriamTristan'
import { INJURED } from 'constants/scene/actors/instances/nestor'
import { PUNCHING } from 'constants/scene/actors/instances/tristan'
import {
    GREETING,
    LEAVING_CRUMBLED
} from 'constants/scene/actors/instances/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    instance: BRUSH_OFF
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
                    instance: DROPPING_MEATS
                },
                [TRISTAN]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: PUNCHING
                },
                [ANA]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: CHUCKLING
                },
                [NESTOR]: {
                    todo: true,
                    workedHours: 3.75,
                    instance: INJURED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    instance: CELIBATE_FREEZING
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
                    instance: GREETING
                },
                [MIRIAM_TRISTAN]: {
                    todo: true,
                    workedHours: 3.5,
                    compound: 2,
                    instance: NOOGIE
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3.75,
                    instance: SMIRKING
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
                    instance: LEAVING_CRUMBLED
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: LEAVING_CRUMBLED
                    }
                }
            }
        }
    }
]
