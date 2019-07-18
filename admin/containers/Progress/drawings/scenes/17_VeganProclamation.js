import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    KHARI_LIZ,
    MIRIAM_TRISTAN,
    NESTOR,
    AMY,
    STEPHANIE,
    WADE,
    KHARI_LIZ_REFLECTION
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
                    todo: true,
                    workedHours: 4.25,
                    instance: CAMPUS_ASHAMED
                },
                [KHARI_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    instance: PROTECTIVE_CONCERNED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: SHOW_ANNOYED
                },
                [MIRIAM_TRISTAN]: {
                    todo: true,
                    workedHours: 3.5,
                    compound: 2,
                    instance: GREETING
                },
                [NESTOR]: {
                    todo: true,
                    workedHours: 3.75,
                    instance: GREETING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: ALLEY
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: BROKEN_HEARTED
                },
                [KHARI_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    instance: CARESS
                },
                [KHARI_LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 4,
                        compound: 2,
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
                    todo: true,
                    workedHours: 4.25,
                    instance: DEMONSTRATION
                },
                [AMY]: {
                    demonstrator: {
                        todo: true,
                        workedHours: 4.25,
                        instance: PROTESTER
                    }
                },
                [STEPHANIE]: {
                    demonstrator: {
                        todo: true,
                        workedHours: 4.25,
                        instance: PROTESTER
                    }
                },
                [WADE]: {
                    demonstrator: {
                        todo: true,
                        workedHours: 4.25,
                        instance: PROTESTER
                    }
                }
            }
        }
    }
]
