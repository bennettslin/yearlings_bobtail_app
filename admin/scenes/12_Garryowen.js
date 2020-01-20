import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    ANA,
    LIZ,
    MIRIAM,
    TRISTAN,
    NESTOR
} from 'constants/scene/actors'
import {
    CHUCKLING,
    SMIRKING
} from 'constants/scene/actors/ana'
import { DROPPING_MEATS } from 'constants/scene/actors/bennett'
import {
    BRUSH_OFF,
    CELIBATE_FREEZING
} from 'constants/scene/actors/bennettLiz'
import { NOOGIE } from 'constants/scene/actors/miriamTristan'
import { INJURED } from 'constants/scene/actors/nestor'
import { PUNCHING } from 'constants/scene/actors/tristan'
import {
    GREETING,
    LEAVING_CRUMBLED
} from 'constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: BRUSH_OFF
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
                        instance: BRUSH_OFF
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
                    instance: DROPPING_MEATS
                },
                [TRISTAN]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: PUNCHING
                },
                [ANA]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: CHUCKLING
                },
                [NESTOR]: {
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
                    instance: INJURED
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
                    instance: CELIBATE_FREEZING
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
                        instance: CELIBATE_FREEZING
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
                    instance: GREETING
                },
                [MIRIAM]: {
                    hairIllustration: true,
                    head: true,
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: NOOGIE
                },
                [TRISTAN]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: NOOGIE
                },
                [ANA]: {
                    colourLayers: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: SMIRKING
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
                    instance: LEAVING_CRUMBLED
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
                        instance: LEAVING_CRUMBLED
                    }
                }
            }
        }
    }
]
