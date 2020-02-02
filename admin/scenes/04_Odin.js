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
                    headPlacement: true,
                    finalSvg: true,
                    instance: MAT
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: STAIRS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: GATE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: RICKSHAW
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: SHORE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
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
                        headPlacement: true,
                        finalSvg: true,
                        instance: MERMAID
                    }
                },
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: MERMAID
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: OCEAN_FLOOR
                }
            }
        }
    }
]
