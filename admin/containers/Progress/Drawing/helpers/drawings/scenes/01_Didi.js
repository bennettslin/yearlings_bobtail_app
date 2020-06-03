import { ACTOR } from '../../../../../../../app/constants/scene'
import {
    YOUNG_BENNETT,
    ANITA,
    ESTHER
} from '../../../../../../../app/constants/scene/actors'
import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING
} from '../../../../../../../app/constants/scene/actors/youngBennett'
import {
    EXASPERATED,
    CONCERNED,
    CHEERING
} from '../../../../../../../app/constants/scene/actors/anita'
import {
    CURIOUS,
    SNICKERING
} from '../../../../../../../app/constants/scene/actors/esther'

export default [
    {
        presences: {
            [ACTOR]: {
                [ESTHER]: {
                    instance: CURIOUS
                },
                [ANITA]: {
                    instance: EXASPERATED
                },
                [YOUNG_BENNETT]: {
                    instance: PANICKED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [ANITA]: {
                    instance: CONCERNED
                },
                [ESTHER]: {
                    instance: SNICKERING
                },
                [YOUNG_BENNETT]: {
                    instance: FLUSTERED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [YOUNG_BENNETT]: {
                    instance: BATHING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [ANITA]: {
                    instance: CHEERING
                },
                [YOUNG_BENNETT]: {
                    instance: SINGING
                }
            }
        }
    }
]
