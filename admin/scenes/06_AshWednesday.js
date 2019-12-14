import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    CATHERINE,
    AMY,
    WADE
} from 'constants/scene/actors'
import { SMOKER } from 'constants/scene/actors/amy'
import {
    BREAKUP_DEJECTED,
    SOLICITING_OPINION,
    CATHOLIC_PENSIVE,
    CATHOLIC_IDEA,
    PIOUS
} from 'constants/scene/actors/bennett'
import {
    WEEPING,
    QUIPPING,
    PUZZLED
} from 'constants/scene/actors/catherine'
import { CATHOLIC_GUY } from 'constants/scene/actors/wade'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: BREAKUP_DEJECTED
                },
                [CATHERINE]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: WEEPING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: SOLICITING_OPINION
                },
                [CATHERINE]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: QUIPPING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: CATHOLIC_PENSIVE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: CATHOLIC_IDEA
                },
                [WADE]: {
                    catholic: {
                        hands: true,
                        face: true,
                        composite: true,
                        instance: CATHOLIC_GUY
                    }
                },
                [AMY]: {
                    smoker: {
                        hands: true,
                        face: true,
                        composite: true,
                        instance: SMOKER
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: PIOUS
                },
                [CATHERINE]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: PUZZLED
                }
            }
        }
    }
]
