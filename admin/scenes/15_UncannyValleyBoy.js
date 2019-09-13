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
} from 'constants/scene/actors/instances/estherMother'
import {
    ACCUSATORY,
    REELING
} from 'constants/scene/actors/instances/father'
import { JOKING_LAUGHING } from 'constants/scene/actors/instances/khariLiz'
import {
    ASLEEP_FEARFUL,
    FENDING_OFF
} from 'constants/scene/actors/instances/miriamBennett'
import { MISCHIEVOUS_BANJO } from 'constants/scene/actors/instances/miriamStephanie'
import { COMFORTING_HUMILIATED } from 'constants/scene/actors/instances/sashaBennett'
import { BENNETT_RECORDING } from 'constants/scene/actors/instances/stephanie'
import {
    PAST,
    PRESENT,
    FUTURE
} from 'constants/scene/actors/instances/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [MIRIAM]: {
                    todo: true,
                    workedHours: 3.25,
                    instance: ASLEEP_FEARFUL
                },
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: ASLEEP_FEARFUL
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: ACCUSATORY
                },
                [ESTHER]: {
                    youngSita: {
                        todo: true,
                        workedHours: 4.25,
                        instance: HURT_CONSOLING
                    }
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: HURT_CONSOLING
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
                    instance: PAST
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: PAST
                },
                [SASHA]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: COMFORTING_HUMILIATED
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: COMFORTING_HUMILIATED
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
                    instance: PRESENT
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: PRESENT
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: PRESENT
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 3.25,
                    instance: MISCHIEVOUS_BANJO
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 4.25,
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
                    todo: true,
                    workedHours: 4.25,
                    instance: FUTURE
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 4.25,
                        instance: BENNETT_RECORDING
                    }
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: FUTURE
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: FUTURE
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: JOKING_LAUGHING
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
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
                    todo: true,
                    workedHours: 3.25,
                    instance: FENDING_OFF
                },
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: FENDING_OFF
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: REELING
                },
                [ESTHER]: {
                    youngSita: {
                        todo: true,
                        workedHours: 4.25,
                        instance: SOBBING_SHIELDING
                    }
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: SOBBING_SHIELDING
                }
            }
        }
    }
]
