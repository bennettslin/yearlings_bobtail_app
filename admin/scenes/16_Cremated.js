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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: REMOVING_PANTS
                },
                [MIRIAM]: {
                    hair: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PERFUMING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [MIRIAM]: {
                    hair: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: COWGIRL
                },
                [BENNETT]: {
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
                    hair: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: BLOWJOB
                },
                [BENNETT]: {
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
                    hair: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: TENNIS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: DISPOSING_CONDOM
                },
                [MIRIAM]: {
                    hair: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: REVERSING
                }
            }
        }
    }
]
