import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    ANA,
    LIZ,
    MIRIAM,
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
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: BRUSH_OFF
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: BRUSH_OFF
                    }
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
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: CELIBATE_FREEZING
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: CELIBATE_FREEZING
                    }
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
                [MIRIAM]: {
                    todo: true,
                    workedHours: 3.25,
                    instance: NOOGIE
                },
                [TRISTAN]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: NOOGIE
                },
                [ANA]: {
                    todo: true,
                    workedHours: 4.25,
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
