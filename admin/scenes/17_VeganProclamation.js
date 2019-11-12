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
} from 'constants/scene/actors/instances/bennett'
import {
    PROTECTIVE_CONCERNED,
    CARESS,
    CARESS_REFLECTION
} from 'constants/scene/actors/instances/khariLiz'
import {
    GREETING,
    PROTESTER
} from 'constants/scene/actors/instances/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CAMPUS_ASHAMED
                },
                [KHARI]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PROTECTIVE_CONCERNED
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
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SHOW_ANNOYED
                },
                [MIRIAM]: {
                    hair: true,
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: GREETING
                },
                [TRISTAN]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: GREETING
                },
                [NESTOR]: {
                    faceRevision: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: GREETING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ALLEY
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
                    instance: BROKEN_HEARTED
                },
                [KHARI]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CARESS
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
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: CARESS_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
                        faceRevision: true,
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
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
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: DEMONSTRATION
                },
                [AMY]: {
                    protester: {
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: PROTESTER
                    }
                },
                [STEPHANIE]: {
                    protester: {
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: PROTESTER
                    }
                },
                [WADE]: {
                    protester: {
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: PROTESTER
                    }
                }
            }
        }
    }
]
