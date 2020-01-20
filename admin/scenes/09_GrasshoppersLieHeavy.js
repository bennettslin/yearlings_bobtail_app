import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    LIZ,
    NESTOR
} from 'constants/scene/actors'
import {
    DISHROOM_READING,
    MOP_SOPPED,
    WAITING_ROOM_ASLEEP
} from 'constants/scene/actors/bennett'
import {
    JOGGER
} from 'constants/scene/actors/nestor'
import {
    DISHROOM_LANCET,
    GATE_CODE,
    RUMPLED_LINENS
} from 'constants/scene/actors/songs'
import {
    GINGERBREAD_PRISON,
    CHEEK_UNVEILED,
    HARD_ON,
    MISSIONARY,
    AFTERGLOW,
    HARD_ON_REFLECTION,
    MISSIONARY_REFLECTION,
    AFTERGLOW_REFLECTION
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
                    instance: DISHROOM_READING
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
                    instance: DISHROOM_LANCET
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
                        instance: DISHROOM_LANCET
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
                    instance: MOP_SOPPED
                },
                [NESTOR]: {
                    jogger: {
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
                        instance: JOGGER
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
                    instance: GATE_CODE
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
                        instance: GATE_CODE
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
                    instance: GINGERBREAD_PRISON
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
                        instance: GINGERBREAD_PRISON
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
                    instance: RUMPLED_LINENS
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
                        instance: RUMPLED_LINENS
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
                    instance: WAITING_ROOM_ASLEEP
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
                    instance: CHEEK_UNVEILED
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
                        instance: CHEEK_UNVEILED
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
                    instance: HARD_ON
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
                        instance: HARD_ON
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    reflection: {
                        colourLayers: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: HARD_ON_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
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
                        instance: HARD_ON_REFLECTION
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
                    instance: MISSIONARY
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
                        instance: MISSIONARY
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    reflection: {
                        colourLayers: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: MISSIONARY_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
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
                        instance: MISSIONARY_REFLECTION
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
                    instance: AFTERGLOW
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
                        instance: AFTERGLOW
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    reflection: {
                        colourLayers: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: AFTERGLOW_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
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
                        instance: AFTERGLOW_REFLECTION
                    }
                }
            }
        }
    }
]
