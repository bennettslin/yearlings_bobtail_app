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
} from 'constants/scene/actors/estherMother'
import {
    ACCUSATORY,
    REELING
} from 'constants/scene/actors/father'
import { JOKING_LAUGHING } from 'constants/scene/actors/khariLiz'
import {
    ASLEEP_FEARFUL,
    FENDING_OFF
} from 'constants/scene/actors/miriamBennett'
import { MISCHIEVOUS_BANJO } from 'constants/scene/actors/miriamStephanie'
import { COMFORTING_HUMILIATED } from 'constants/scene/actors/sashaBennett'
import { BENNETT_RECORDING } from 'constants/scene/actors/stephanie'
import {
    PAST,
    PRESENT,
    FUTURE
} from 'constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [MIRIAM]: {
                    hairIllustration: true,
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ASLEEP_FEARFUL
                },
                [BENNETT]: {
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ASLEEP_FEARFUL
                },
                [FATHER]: {
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ACCUSATORY
                },
                [ESTHER]: {
                    youngSita: {
                        hands: true,
                        hair: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: HURT_CONSOLING
                    }
                },
                [MOTHER]: {
                    hands: true,
                    hair: true,
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
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PAST
                },
                [FATHER]: {
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PAST
                },
                [SASHA]: {
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: COMFORTING_HUMILIATED
                },
                [PRETEEN_BENNETT]: {
                    hands: true,
                    hair: true,
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
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PRESENT
                },
                [FATHER]: {
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PRESENT
                },
                [MOTHER]: {
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: PRESENT
                },
                [MIRIAM]: {
                    hairIllustration: true,
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: MISCHIEVOUS_BANJO
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        hands: true,
                        hair: true,
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
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FUTURE
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        hands: true,
                        hair: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: BENNETT_RECORDING
                    }
                },
                [MOTHER]: {
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FUTURE
                },
                [FATHER]: {
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FUTURE
                },
                [KHARI]: {
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: JOKING_LAUGHING
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        hands: true,
                        hair: true,
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
                    hairIllustration: true,
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FENDING_OFF
                },
                [BENNETT]: {
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FENDING_OFF
                },
                [FATHER]: {
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: REELING
                },
                [ESTHER]: {
                    youngSita: {
                        hands: true,
                        hair: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: SOBBING_SHIELDING
                    }
                },
                [MOTHER]: {
                    hands: true,
                    hair: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SOBBING_SHIELDING
                }
            }
        }
    }
]
