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
} from 'constants/scene/actors/instances/preteenBennett'
import { MERMAID } from 'constants/scene/actors/instances/sashaBennett'

export default [
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    feet: false,
                    legs: false,
                    trunk: false,
                    hands: false,
                    head: false,
                    face: false,
                    composite: false,
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
                    feet: false,
                    legs: false,
                    trunk: false,
                    hands: false,
                    head: false,
                    face: false,
                    composite: false,
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
                    feet: false,
                    legs: false,
                    trunk: false,
                    hands: false,
                    head: false,
                    face: false,
                    composite: false,
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
                    feet: false,
                    legs: false,
                    trunk: false,
                    hands: false,
                    head: false,
                    face: false,
                    composite: false,
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
                    feet: false,
                    legs: false,
                    trunk: false,
                    hands: false,
                    head: false,
                    face: false,
                    composite: false,
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
                    feet: false,
                    legs: false,
                    trunk: false,
                    hands: false,
                    head: false,
                    face: false,
                    composite: false,
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
                        todo: true,
                        workedHours: 4.25,
                        feet: false,
                        legs: false,
                        trunk: false,
                        hands: false,
                        head: false,
                        face: false,
                        composite: false,
                        instance: MERMAID
                    }
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    feet: false,
                    legs: false,
                    trunk: false,
                    hands: false,
                    head: false,
                    face: false,
                    composite: false,
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
                    feet: false,
                    legs: false,
                    trunk: false,
                    hands: false,
                    head: false,
                    face: false,
                    composite: false,
                    instance: OCEAN_FLOOR
                }
            }
        }
    }
]
