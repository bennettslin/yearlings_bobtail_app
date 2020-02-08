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
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    instance: ASLEEP_FEARFUL
                },
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: ASLEEP_FEARFUL
                },
                [FATHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: ACCUSATORY
                },
                [ESTHER]: {
                    youngSita: {
                        headPlacement: true,
                        finalSvg: true,
                        instance: HURT_CONSOLING
                    }
                },
                [MOTHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: HURT_CONSOLING
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
                    instance: PAST
                },
                [FATHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: PAST
                },
                [SASHA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: COMFORTING_HUMILIATED
                },
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: COMFORTING_HUMILIATED
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
                    instance: PRESENT
                },
                [FATHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: PRESENT
                },
                [MOTHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: PRESENT
                },
                [MIRIAM]: {
                    hairIllustration: true,
                    head: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    instance: MISCHIEVOUS_BANJO
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        headPlacement: true,
                        finalSvg: true,
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
                    headPlacement: true,
                    finalSvg: true,
                    instance: FUTURE
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        headPlacement: true,
                        finalSvg: true,
                        instance: BENNETT_RECORDING
                    }
                },
                [MOTHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: FUTURE
                },
                [FATHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: FUTURE
                },
                [KHARI]: {
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
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    instance: FENDING_OFF
                },
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: FENDING_OFF
                },
                [FATHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: REELING
                },
                [ESTHER]: {
                    youngSita: {
                        headPlacement: true,
                        finalSvg: true,
                        instance: SOBBING_SHIELDING
                    }
                },
                [MOTHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: SOBBING_SHIELDING
                }
            }
        }
    }
]
