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
                    instance: BRUSH_OFF
                },
                [LIZ]: {
                    sita: {
                        mouth: true,
                        lips: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                    instance: DROPPING_MEATS
                },
                [TRISTAN]: {
                    instance: PUNCHING
                },
                [ANA]: {
                    instance: CHUCKLING
                },
                [NESTOR]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    instance: INJURED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: CELIBATE_FREEZING
                },
                [LIZ]: {
                    sita: {
                        mouth: true,
                        lips: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                    instance: GREETING
                },
                [MIRIAM]: {
                    instance: NOOGIE
                },
                [TRISTAN]: {
                    instance: NOOGIE
                },
                [ANA]: {
                    instance: SMIRKING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: LEAVING_CRUMBLED
                },
                [LIZ]: {
                    sita: {
                        mouth: true,
                        lips: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        instance: LEAVING_CRUMBLED
                    }
                }
            }
        }
    }
]
