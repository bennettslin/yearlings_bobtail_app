import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    BENNETT_FATHER,
    ESTHER_MOTHER,
    MOTHER,
    FATHER,
    SASHA_BENNETT,
    LIZ,
    KHARI_LIZ,
    MIRIAM_BENNETT,
    MIRIAM_STEPHANIE,
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
import { PETTING_SEATED } from 'constants/scene/actors/instances/liz'
import {
    ASLEEP_FEARFUL,
    FENDING_OFF
} from 'constants/scene/actors/instances/miriamBennett'
import { MISCHIEVOUS_BANJO } from 'constants/scene/actors/instances/miriamStephanie'
import { COMFORTING_HUMILIATED } from 'constants/scene/actors/instances/sashaBennett'
import { BENNETT_RECORDING } from 'constants/scene/actors/instances/stephanie'
import {
    ASLEEP,
    PAST,
    PRESENT,
    FUTURE
} from 'constants/scene/actors/instances/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    compound: 2,
                    instance: ASLEEP
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    todo: true,
                    workedHours: 3.75,
                    compound: 2,
                    instance: ASLEEP_FEARFUL
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: ACCUSATORY
                },
                [ESTHER_MOTHER]: {
                    youngSita: {
                        todo: true,
                        workedHours: 4.25,
                        compound: 2,
                        instance: HURT_CONSOLING
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
                    instance: PAST
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: PAST
                },
                [SASHA_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    instance: COMFORTING_HUMILIATED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT_FATHER]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    instance: PRESENT
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: PRESENT
                },
                [LIZ]: {
                    sita: {
                        duplicate: true,
                        instance: PETTING_SEATED
                    }
                },
                [MIRIAM_STEPHANIE]: {
                    todo: true,
                    workedHours: 3.75,
                    compound: 2,
                    instance: MISCHIEVOUS_BANJO
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
                [KHARI_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    instance: JOKING_LAUGHING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [MIRIAM_BENNETT]: {
                    todo: true,
                    workedHours: 3.75,
                    compound: 2,
                    instance: FENDING_OFF
                },
                [FATHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: REELING
                },
                [ESTHER_MOTHER]: {
                    youngSita: {
                        todo: true,
                        workedHours: 4.25,
                        compound: 2,
                        instance: SOBBING_SHIELDING
                    }
                }
            }
        }
    }
]
