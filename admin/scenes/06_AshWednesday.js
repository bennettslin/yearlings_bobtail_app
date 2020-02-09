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
                    instance: BREAKUP_DEJECTED
                },
                [CATHERINE]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: WEEPING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: SOLICITING_OPINION
                },
                [CATHERINE]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: QUIPPING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: CATHOLIC_PENSIVE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: CATHOLIC_IDEA
                },
                [WADE]: {
                    catholic: {
                        instance: CATHOLIC_GUY
                    }
                },
                [AMY]: {
                    smoker: {
                        headPlacement: true,
                        finalSvg: true,
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
                    instance: PIOUS
                },
                [CATHERINE]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: PUZZLED
                }
            }
        }
    }
]
