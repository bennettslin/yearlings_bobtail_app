import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    ESTHER,
    MOTHER,
    FATHER,
    SASHA,
    PRETEEN_BENNETT,
    KHARI,
    LIZ,
    MIRIAM,
    STEPHANIE
} from 'constants/scene/actors'
import {
    HURT_CONSOLING,
    SOBBING_SHIELDING
} from 'constants/scene/actors/estherMother'
import {
    ACCUSATORY,
    REELING
} from 'constants/scene/actors/father'
import { JOKING_LAUGHING } from 'constants/scene/actors/khariLiz'
import {
    ASLEEP_FEARFUL,
    FENDING_OFF
} from 'constants/scene/actors/miriamBennett'
import { MISCHIEVOUS_BANJO } from 'constants/scene/actors/miriamStephanie'
import { COMFORTING_HUMILIATED } from 'constants/scene/actors/sashaBennett'
import { BENNETT_RECORDING } from 'constants/scene/actors/stephanie'
import {
    PAST,
    PRESENT,
    FUTURE
} from 'constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [MIRIAM]: {
                    hairIllustration: true,
                    head: true,
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: ASLEEP_FEARFUL
                },
                [BENNETT]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: ASLEEP_FEARFUL
                },
                [FATHER]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: ACCUSATORY
                },
                [ESTHER]: {
                    youngSita: {
                        colourLayers: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: HURT_CONSOLING
                    }
                },
                [MOTHER]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: HURT_CONSOLING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: PAST
                },
                [FATHER]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: PAST
                },
                [SASHA]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: COMFORTING_HUMILIATED
                },
                [PRETEEN_BENNETT]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: COMFORTING_HUMILIATED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: PRESENT
                },
                [FATHER]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: PRESENT
                },
                [MOTHER]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: PRESENT
                },
                [MIRIAM]: {
                    hairIllustration: true,
                    head: true,
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: MISCHIEVOUS_BANJO
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        colourLayers: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: MISCHIEVOUS_BANJO
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: FUTURE
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        colourLayers: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: BENNETT_RECORDING
                    }
                },
                [MOTHER]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: FUTURE
                },
                [FATHER]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: FUTURE
                },
                [KHARI]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: JOKING_LAUGHING
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        head: true,
                        eyebrow: true,
                        nose: true,
                        mouth: true,
                        lips: true,
                        eyes: true,
                        pupils: true,
                        colourLayers: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: JOKING_LAUGHING
                    }
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
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: FENDING_OFF
                },
                [BENNETT]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: FENDING_OFF
                },
                [FATHER]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: REELING
                },
                [ESTHER]: {
                    youngSita: {
                        colourLayers: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: SOBBING_SHIELDING
                    }
                },
                [MOTHER]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: SOBBING_SHIELDING
                }
            }
        }
    }
]
