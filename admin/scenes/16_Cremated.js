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
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: REMOVING_PANTS
                },
                [MIRIAM]: {
                    hairIllustration: true,
                    head: true,
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
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
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: COWGIRL
                },
                [BENNETT]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
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
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: BLOWJOB
                },
                [BENNETT]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: BLOWJOB
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
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
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: TENNIS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: DISPOSING_CONDOM
                },
                [MIRIAM]: {
                    hairIllustration: true,
                    head: true,
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: REVERSING
                }
            }
        }
    }
]
