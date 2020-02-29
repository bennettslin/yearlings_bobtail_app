import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    MIRIAM
} from 'constants/scene/actors'
import {
    REMOVING_PANTS,
    INFIRM,
    DISPOSING_CONDOM
} from 'constants/scene/actors/bennett'
import {
    PERFUMING,
    TENNIS,
    REVERSING
} from 'constants/scene/actors/miriam'
import {
    COWGIRL,
    BLOWJOB
} from 'constants/scene/actors/miriamBennett'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: REMOVING_PANTS
                },
                [MIRIAM]: {
                    instance: PERFUMING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [MIRIAM]: {
                    instance: COWGIRL
                },
                [BENNETT]: {
                    instance: COWGIRL
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [MIRIAM]: {
                    instance: BLOWJOB
                },
                [BENNETT]: {
                    instance: BLOWJOB
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: INFIRM
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [MIRIAM]: {
                    instance: TENNIS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: DISPOSING_CONDOM
                },
                [MIRIAM]: {
                    instance: REVERSING
                }
            }
        }
    }
]
