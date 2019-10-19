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
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CAMPUS_ASHAMED
                },
                [KHARI]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PROTECTIVE_CONCERNED
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        legs: true,
                        trunk: true,
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
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SHOW_ANNOYED
                },
                [MIRIAM]: {
                    hair: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: GREETING
                },
                [TRISTAN]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: GREETING
                },
                [NESTOR]: {
                    faceRevision: true,
                    trunk: true,
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
                    trunk: true,
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
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: BROKEN_HEARTED
                },
                [KHARI]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CARESS
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        legs: true,
                        trunk: true,
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
                        trunk: true,
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
                        trunk: true,
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
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: DEMONSTRATION
                },
                [AMY]: {
                    demonstrator: {
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: PROTESTER
                    }
                },
                [STEPHANIE]: {
                    demonstrator: {
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: PROTESTER
                    }
                },
                [WADE]: {
                    demonstrator: {
                        trunk: true,
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
