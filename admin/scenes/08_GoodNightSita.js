import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    LIZ,
    KHARI,
    STEPHANIE
} from 'constants/scene/actors'
import { DOUBLE_ALBERT } from 'constants/scene/actors/khari'
import { FLAPPER } from 'constants/scene/actors/stephanie'
import {
    DATE_ENDING,
    MUSEUM,
    BACKSTAGE,
    GO_KARTS,
    DATE_ENDED
} from 'constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: DATE_ENDING
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
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: DATE_ENDING
                    }
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
                    sizeAdjustment: true,
                    instance: MUSEUM
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
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: MUSEUM
                    }
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
                    sizeAdjustment: true,
                    instance: BACKSTAGE
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
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: BACKSTAGE
                    }
                },
                [KHARI]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: DOUBLE_ALBERT
                },
                [STEPHANIE]: {
                    actor: {
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: FLAPPER
                    }
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
                    sizeAdjustment: true,
                    instance: GO_KARTS
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
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: GO_KARTS
                    }
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
                    sizeAdjustment: true,
                    instance: DATE_ENDED
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
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: DATE_ENDED
                    }
                }
            }
        }
    }
]
