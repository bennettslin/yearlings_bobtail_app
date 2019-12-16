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
                    hands: true,
                    mouth: true,
                    eyes: true,
                    composite: true,
                    instance: BRUSH_OFF
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        head: true,
                        hands: true,
                        eyebrow: true,
                        nose: true,
                        mouth: true,
                        eyes: true,
                        composite: true,
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
                    hands: true,
                    mouth: true,
                    eyes: true,
                    composite: true,
                    instance: DROPPING_MEATS
                },
                [TRISTAN]: {
                    hands: true,
                    mouth: true,
                    eyes: true,
                    composite: true,
                    instance: PUNCHING
                },
                [ANA]: {
                    hands: true,
                    mouth: true,
                    eyes: true,
                    composite: true,
                    instance: CHUCKLING
                },
                [NESTOR]: {
                    faceRevision: true,
                    head: true,
                    eyebrow: true,
                    nose: true,
                    mouth: true,
                    eyes: true,
                    composite: true,
                    instance: INJURED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    hands: true,
                    mouth: true,
                    eyes: true,
                    composite: true,
                    instance: CELIBATE_FREEZING
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        head: true,
                        hands: true,
                        eyebrow: true,
                        nose: true,
                        mouth: true,
                        eyes: true,
                        composite: true,
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
                    hands: true,
                    mouth: true,
                    eyes: true,
                    composite: true,
                    instance: GREETING
                },
                [MIRIAM]: {
                    hairIllustration: true,
                    head: true,
                    hands: true,
                    mouth: true,
                    eyes: true,
                    composite: true,
                    instance: NOOGIE
                },
                [TRISTAN]: {
                    hands: true,
                    mouth: true,
                    eyes: true,
                    composite: true,
                    instance: NOOGIE
                },
                [ANA]: {
                    hands: true,
                    mouth: true,
                    eyes: true,
                    composite: true,
                    instance: SMIRKING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    hands: true,
                    mouth: true,
                    eyes: true,
                    composite: true,
                    instance: LEAVING_CRUMBLED
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        head: true,
                        hands: true,
                        eyebrow: true,
                        nose: true,
                        mouth: true,
                        eyes: true,
                        composite: true,
                        instance: LEAVING_CRUMBLED
                    }
                }
            }
        }
    }
]
