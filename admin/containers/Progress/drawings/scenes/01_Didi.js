import { ACTOR } from 'constants/scene'
import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from 'constants/scene/actors'
import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING
} from 'constants/scene/actors/instances/youngBennett'
import {
    EXASPERATED,
    CONCERNED,
    CHEERING
} from 'constants/scene/actors/instances/anita'
import {
    CURIOUS,
    SNICKERING
} from 'constants/scene/actors/instances/esther'

export default [
    {
        presences: {
            [ACTOR]: {
                [ESTHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: CURIOUS
                },
                [ANITA]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: EXASPERATED
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: PANICKED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [ANITA]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: CONCERNED
                },
                [ESTHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: SNICKERING
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: FLUSTERED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: BATHING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [ANITA]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: CHEERING
                },
                [YOUNG_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: SINGING
                }
            }
        }
    }
]
