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
                    trunkShape: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CURIOUS
                },
                [ANITA]: {
                    trunkShape: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: EXASPERATED
                },
                [YOUNG_BENNETT]: {
                    trunkShape: true,
                    hands: true,
                    head: true,
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
                    trunkShape: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CONCERNED
                },
                [ESTHER]: {
                    trunkShape: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SNICKERING
                },
                [YOUNG_BENNETT]: {
                    trunkShape: true,
                    hands: true,
                    head: true,
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
                    trunkShape: true,
                    hands: true,
                    head: true,
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
                    trunkShape: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CHEERING
                },
                [YOUNG_BENNETT]: {
                    trunkShape: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SINGING
                }
            }
        }
    }
]
