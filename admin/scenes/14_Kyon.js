import { ACTOR } from 'constants/scene'
import {
    LIZ,
    KHARI
} from 'constants/scene/actors'
import {
    ARRIVED,
    JUDGMENTAL,
    CONCERNED
} from 'constants/scene/actors/khari'
import {
    PETTING_SEATED,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH
} from 'constants/scene/actors/liz'

export default [
    {
        presences: {
            [ACTOR]: {
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
                        instance: PETTING_SEATED
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
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
                        instance: PETTING_STANDING
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
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
                        instance: SIFTING_TCHOTCHKES
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
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
                        instance: OPENING_DOOR
                    }
                },
                [KHARI]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: ARRIVED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
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
                        instance: DEFENDING
                    }
                },
                [KHARI]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: JUDGMENTAL
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
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
                        instance: NOT_HUNGRY
                    }
                },
                [KHARI]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: CONCERNED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
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
                        instance: ASLEEP_COUCH
                    }
                }
            }
        }
    }
]
