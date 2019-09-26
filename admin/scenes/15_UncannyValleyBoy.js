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
                    hair: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ASLEEP_FEARFUL
                },
                [BENNETT]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ASLEEP_FEARFUL
                },
                [FATHER]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ACCUSATORY
                },
                [ESTHER]: {
                    youngSita: {
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: HURT_CONSOLING
                    }
                },
                [MOTHER]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: HURT_CONSOLING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PAST
                },
                [FATHER]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PAST
                },
                [SASHA]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: COMFORTING_HUMILIATED
                },
                [PRETEEN_BENNETT]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: COMFORTING_HUMILIATED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PRESENT
                },
                [FATHER]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PRESENT
                },
                [MOTHER]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PRESENT
                },
                [MIRIAM]: {
                    hair: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: MISCHIEVOUS_BANJO
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
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
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FUTURE
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: BENNETT_RECORDING
                    }
                },
                [MOTHER]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FUTURE
                },
                [FATHER]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FUTURE
                },
                [KHARI]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: JOKING_LAUGHING
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
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
                    hair: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FENDING_OFF
                },
                [BENNETT]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FENDING_OFF
                },
                [FATHER]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: REELING
                },
                [ESTHER]: {
                    youngSita: {
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: SOBBING_SHIELDING
                    }
                },
                [MOTHER]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SOBBING_SHIELDING
                }
            }
        }
    }
]
