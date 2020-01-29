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
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: CURIOUS
                },
                [ANITA]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: EXASPERATED
                },
                [YOUNG_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
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
                    sizeAdjustment: true,
                    instance: CONCERNED
                },
                [ESTHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: SNICKERING
                },
                [YOUNG_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
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
                    sizeAdjustment: true,
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
                    sizeAdjustment: true,
                    instance: CHEERING
                },
                [YOUNG_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: SINGING
                }
            }
        }
    }
]
