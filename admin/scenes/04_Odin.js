import { ACTOR } from 'constants/scene'
import {
    PRETEEN_BENNETT,
    SASHA
} from 'constants/scene/actors'
import {
    MAT,
    STAIRS,
    GATE,
    RICKSHAW,
    SHORE,
    BUOY,
    OCEAN_FLOOR
} from 'constants/scene/actors/preteenBennett'
import { MERMAID } from 'constants/scene/actors/sashaBennett'

export default [
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    composite: true,
                    instance: MAT
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    composite: true,
                    instance: STAIRS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    composite: true,
                    instance: GATE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    composite: true,
                    instance: RICKSHAW
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    composite: true,
                    instance: SHORE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    composite: true,
                    instance: BUOY
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [SASHA]: {
                    mermaid: {
                        hands: true,
                        composite: true,
                        instance: MERMAID
                    }
                },
                [PRETEEN_BENNETT]: {
                    composite: true,
                    instance: MERMAID
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    composite: true,
                    instance: OCEAN_FLOOR
                }
            }
        }
    }
]
