import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    KHARI,
    LIZ,
    MIRIAM,
    TRISTAN,
    NESTOR,
    AMY,
    STEPHANIE,
    WADE
} from 'constants/scene/actors'
import {
    CAMPUS_ASHAMED,
    SHOW_ANNOYED,
    ALLEY,
    BROKEN_HEARTED,
    DEMONSTRATION
} from 'constants/scene/actors/bennett'
import {
    PROTECTIVE_CONCERNED,
    CARESS,
    CARESS_REFLECTION
} from 'constants/scene/actors/khariLiz'
import {
    GREETING,
    PROTESTER
} from 'constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: CAMPUS_ASHAMED
                },
                [KHARI]: {
                    instance: PROTECTIVE_CONCERNED
                },
                [LIZ]: {
                    sita: {
                        eyebrow: true,
                        nose: true,
                        mouth: true,
                        lips: true,
                        eyes: true,
                        pupils: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        instance: PROTECTIVE_CONCERNED
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: SHOW_ANNOYED
                },
                [MIRIAM]: {
                    instance: GREETING
                },
                [TRISTAN]: {
                    instance: GREETING
                },
                [NESTOR]: {
                    eyebrow: true,
                    nose: true,
                    mouth: true,
                    lips: true,
                    eyes: true,
                    pupils: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    instance: GREETING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: ALLEY
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: BROKEN_HEARTED
                },
                [KHARI]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: CARESS
                },
                [LIZ]: {
                    sita: {
                        eyebrow: true,
                        nose: true,
                        mouth: true,
                        lips: true,
                        eyes: true,
                        pupils: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        instance: CARESS
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [KHARI]: {
                    reflection: {
                        headPlacement: true,
                        finalSvg: true,
                        instance: CARESS_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
                        eyebrow: true,
                        nose: true,
                        mouth: true,
                        lips: true,
                        eyes: true,
                        pupils: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        instance: CARESS_REFLECTION
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: DEMONSTRATION
                },
                [AMY]: {
                    protester: {
                        instance: PROTESTER
                    }
                },
                [STEPHANIE]: {
                    protester: {
                        instance: PROTESTER
                    }
                },
                [WADE]: {
                    protester: {
                        instance: PROTESTER
                    }
                }
            }
        }
    }
]
