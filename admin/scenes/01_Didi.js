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
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: CURIOUS
                },
                [ANITA]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: EXASPERATED
                },
                [YOUNG_BENNETT]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: PANICKED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [ANITA]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: CONCERNED
                },
                [ESTHER]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: SNICKERING
                },
                [YOUNG_BENNETT]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: FLUSTERED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [YOUNG_BENNETT]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: BATHING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [ANITA]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: CHEERING
                },
                [YOUNG_BENNETT]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: SINGING
                }
            }
        }
    }
]
