import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    CATHERINE,
    AMY,
    WADE
} from 'constants/scene/actors'
import { SMOKER } from 'constants/scene/actors/instances/amy'
import {
    BREAKUP_DEJECTED,
    SOLICITING_OPINION,
    CATHOLIC_PENSIVE,
    CATHOLIC_IDEA,
    PIOUS
} from 'constants/scene/actors/instances/bennett'
import {
    WEEPING,
    QUIPPING,
    PUZZLED
} from 'constants/scene/actors/instances/catherine'
import { CATHOLIC_GUY } from 'constants/scene/actors/instances/wade'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: BREAKUP_DEJECTED
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: WEEPING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: SOLICITING_OPINION
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: QUIPPING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: CATHOLIC_PENSIVE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: CATHOLIC_IDEA
                },
                [WADE]: {
                    catholic: {
                        todo: true,
                        workedHours: 4.25,
                        instance: CATHOLIC_GUY
                    }
                },
                [AMY]: {
                    smoker: {
                        todo: true,
                        workedHours: 4.25,
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
                    todo: true,
                    workedHours: 4.25,
                    instance: PIOUS
                },
                [CATHERINE]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: PUZZLED
                }
            }
        }
    }
]
