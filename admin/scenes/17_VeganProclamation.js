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
                    hands: true,
                    face: true,
                    composite: true,
                    instance: CAMPUS_ASHAMED
                },
                [KHARI]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: PROTECTIVE_CONCERNED
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        head: true,
                        hands: true,
                        eyebrow: true,
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
                    hands: true,
                    face: true,
                    composite: true,
                    instance: SHOW_ANNOYED
                },
                [MIRIAM]: {
                    hairIllustration: true,
                    head: true,
                    hands: true,
                    eyebrow: true,
                    face: true,
                    composite: true,
                    instance: GREETING
                },
                [TRISTAN]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: GREETING
                },
                [NESTOR]: {
                    faceRevision: true,
                    head: true,
                    eyebrow: true,
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
                    hands: true,
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
                    hands: true,
                    face: true,
                    composite: true,
                    instance: BROKEN_HEARTED
                },
                [KHARI]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: CARESS
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        head: true,
                        hands: true,
                        eyebrow: true,
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
                        hands: true,
                        face: true,
                        composite: true,
                        instance: CARESS_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
                        faceRevision: true,
                        head: true,
                        hands: true,
                        eyebrow: true,
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
                    hands: true,
                    face: true,
                    composite: true,
                    instance: DEMONSTRATION
                },
                [AMY]: {
                    protester: {
                        hands: true,
                        eyebrow: true,
                        face: true,
                        composite: true,
                        instance: PROTESTER
                    }
                },
                [STEPHANIE]: {
                    protester: {
                        hands: true,
                        eyebrow: true,
                        face: true,
                        composite: true,
                        instance: PROTESTER
                    }
                },
                [WADE]: {
                    protester: {
                        hands: true,
                        face: true,
                        composite: true,
                        instance: PROTESTER
                    }
                }
            }
        }
    }
]
