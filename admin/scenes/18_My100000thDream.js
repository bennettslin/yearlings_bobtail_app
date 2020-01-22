import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    CATHERINE,
    MARA,
    LIZ,
    MIRIAM,
    AMY
} from 'constants/scene/actors'
import {
    DOCTOR
} from 'constants/scene/actors/amy'
import {
    EL_TORITO,
    GOPI
} from 'constants/scene/actors/songs'
import {
    PAMPAS,
    GETTING_DARK,
    CLIFF,
    FINAL_DREAM
} from 'constants/scene/actors/bennettLiz'

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
                    instance: EL_TORITO
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
                        instance: EL_TORITO
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
                    instance: PAMPAS
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
                        instance: PAMPAS
                    }
                },
                [CATHERINE]: {
                    gopi: {
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: GOPI
                    }
                },
                [MARA]: {
                    gopi: {
                        colourLayers: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: GOPI
                    }
                },
                [MIRIAM]: {
                    gopi: {
                        hairIllustration: true,
                        head: true,
                        colourLayers: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: GOPI
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
                    instance: GETTING_DARK
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
                        instance: GETTING_DARK
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
                    instance: CLIFF
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
                        instance: CLIFF
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
                    instance: FINAL_DREAM
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
                        instance: FINAL_DREAM
                    }
                },
                [AMY]: {
                    doctor: {
                        colourLayers: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: DOCTOR
                    }
                }
            }
        }
    }
]
