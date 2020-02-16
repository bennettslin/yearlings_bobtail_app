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
} from 'constants/scene/actors/youngBennett'
import {
    EXASPERATED,
    CONCERNED,
    CHEERING
} from 'constants/scene/actors/anita'
import {
    CURIOUS,
    SNICKERING
} from 'constants/scene/actors/esther'

export default [
    {
        presences: {
            [ACTOR]: {
                [ESTHER]: {
                    instance: CURIOUS
                },
                [ANITA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: EXASPERATED
                },
                [YOUNG_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: PANICKED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [ANITA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: CONCERNED
                },
                [ESTHER]: {
                    instance: SNICKERING
                },
                [YOUNG_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: FLUSTERED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [YOUNG_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: BATHING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [ANITA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: CHEERING
                },
                [YOUNG_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: SINGING
                }
            }
        }
    }
]
