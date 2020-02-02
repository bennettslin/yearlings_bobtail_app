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
                    headPlacement: true,
                    finalSvg: true,
                    instance: REMOVING_PANTS
                },
                [MIRIAM]: {
                    hairIllustration: true,
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
                    hairIllustration: true,
                    head: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    instance: COWGIRL
                },
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: COWGIRL
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [MIRIAM]: {
                    hairIllustration: true,
                    head: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    instance: BLOWJOB
                },
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: BLOWJOB
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: INFIRM
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [MIRIAM]: {
                    hairIllustration: true,
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
                    headPlacement: true,
                    finalSvg: true,
                    instance: DISPOSING_CONDOM
                },
                [MIRIAM]: {
                    hairIllustration: true,
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
