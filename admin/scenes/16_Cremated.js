import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    MIRIAM,
    MIRIAM_BENNETT
} from 'constants/scene/actors'
import {
    REMOVING_PANTS,
    INFIRM,
    DISPOSING_CONDOM
} from 'constants/scene/actors/instances/bennett'
import {
    PERFUMING,
    TENNIS,
    REVERSING
} from 'constants/scene/actors/instances/miriam'
import {
    COWGIRL,
    BLOWJOB
} from 'constants/scene/actors/instances/miriamBennett'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: REMOVING_PANTS
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 3.75,
                    instance: PERFUMING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    todo: true,
                    workedHours: 3.75,
                    compound: 2,
                    instance: COWGIRL
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    todo: true,
                    workedHours: 3.75,
                    compound: 2,
                    instance: BLOWJOB
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
                    instance: INFIRM
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    duplicate: true,
                    instance: INFIRM
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 3.75,
                    instance: TENNIS
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
                    instance: DISPOSING_CONDOM
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 3.75,
                    instance: REVERSING
                }
            }
        }
    }
]
