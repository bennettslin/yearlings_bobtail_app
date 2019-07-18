import { ACTOR } from 'constants/scene'
import {
    PRETEEN_BENNETT,
    SASHA_BENNETT
} from 'constants/scene/actors'
import {
    MAT,
    STAIRS,
    GATE,
    RICKSHAW,
    SHORE,
    BUOY,
    OCEAN_FLOOR
} from 'constants/scene/actors/instances/preteenBennett'
import { MERMAID } from 'constants/scene/actors/instances/sashaBennett'

export default [
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: MAT
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: STAIRS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: GATE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: RICKSHAW
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: SHORE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: BUOY
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [SASHA_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    instance: MERMAID
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: OCEAN_FLOOR
                }
            }
        }
    }
]
