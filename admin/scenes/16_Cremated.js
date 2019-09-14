import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    MIRIAM
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
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
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
                [MIRIAM]: {
                    todo: true,
                    workedHours: 3.25,
                    instance: COWGIRL
                },
                [BENNETT]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: COWGIRL
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [MIRIAM]: {
                    todo: true,
                    workedHours: 3.25,
                    instance: BLOWJOB
                },
                [BENNETT]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
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
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: INFIRM
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
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
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
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
