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
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: ASLEEP_FEARFUL
                },
                [BENNETT]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: ASLEEP_FEARFUL
                },
                [FATHER]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: ACCUSATORY
                },
                [ESTHER]: {
                    youngSita: {
                        hair: true,
                        head: true,
                        hands: true,
                        face: true,
                        composite: true,
                        instance: HURT_CONSOLING
                    }
                },
                [MOTHER]: {
                    hair: true,
                    head: true,
                    hands: true,
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
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: PAST
                },
                [FATHER]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: PAST
                },
                [SASHA]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: COMFORTING_HUMILIATED
                },
                [PRETEEN_BENNETT]: {
                    hair: true,
                    head: true,
                    hands: true,
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
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: PRESENT
                },
                [FATHER]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: PRESENT
                },
                [MOTHER]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: PRESENT
                },
                [MIRIAM]: {
                    hairIllustration: true,
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: MISCHIEVOUS_BANJO
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        hair: true,
                        head: true,
                        hands: true,
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
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: FUTURE
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        hair: true,
                        head: true,
                        hands: true,
                        face: true,
                        composite: true,
                        instance: BENNETT_RECORDING
                    }
                },
                [MOTHER]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: FUTURE
                },
                [FATHER]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: FUTURE
                },
                [KHARI]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: JOKING_LAUGHING
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        hair: true,
                        head: true,
                        hands: true,
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
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: FENDING_OFF
                },
                [BENNETT]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: FENDING_OFF
                },
                [FATHER]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: REELING
                },
                [ESTHER]: {
                    youngSita: {
                        hair: true,
                        head: true,
                        hands: true,
                        face: true,
                        composite: true,
                        instance: SOBBING_SHIELDING
                    }
                },
                [MOTHER]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: SOBBING_SHIELDING
                }
            }
        }
    }
]
