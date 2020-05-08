import { ACTOR } from '../../app/constants/scene'
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
} from '../../app/constants/scene/actors'
import {
    CAMPUS_ASHAMED,
    SHOW_ANNOYED,
    ALLEY,
    BROKEN_HEARTED,
    DEMONSTRATION
} from '../../app/constants/scene/actors/bennett'
import {
    PROTECTIVE_CONCERNED,
    CARESS,
    CARESS_REFLECTION
} from '../../app/constants/scene/actors/khariLiz'
import {
    GREETING,
    PROTESTER
} from '../../app/constants/scene/actors/songs'

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
                    instance: CARESS
                },
                [LIZ]: {
                    sita: {
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
                        instance: CARESS_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
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
