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
                    head: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    instance: PERFUMING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [MIRIAM]: {
                    head: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
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
                    head: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
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
                    head: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
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
                    head: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    instance: REVERSING
                }
            }
        }
    }
]
