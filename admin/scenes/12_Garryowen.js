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
} from 'constants/scene/actors/instances/ana'
import { DROPPING_MEATS } from 'constants/scene/actors/instances/bennett'
import {
    BRUSH_OFF,
    CELIBATE_FREEZING
} from 'constants/scene/actors/instances/bennettLiz'
import { NOOGIE } from 'constants/scene/actors/instances/miriamTristan'
import { INJURED } from 'constants/scene/actors/instances/nestor'
import { PUNCHING } from 'constants/scene/actors/instances/tristan'
import {
    GREETING,
    LEAVING_CRUMBLED
} from 'constants/scene/actors/instances/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: BRUSH_OFF
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
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
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: DROPPING_MEATS
                },
                [TRISTAN]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PUNCHING
                },
                [ANA]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CHUCKLING
                },
                [NESTOR]: {
                    faceRevision: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
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
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CELIBATE_FREEZING
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
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
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: GREETING
                },
                [MIRIAM]: {
                    hair: true,
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: NOOGIE
                },
                [TRISTAN]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: NOOGIE
                },
                [ANA]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
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
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: LEAVING_CRUMBLED
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: LEAVING_CRUMBLED
                    }
                }
            }
        }
    }
]
