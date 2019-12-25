import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    MARA,
    JACOB,
    ANA,
    HOWIE,
    TOMER,
    MIRIAM,
    STEPHANIE
} from 'constants/scene/actors'
import {
    SQUATTING
} from 'constants/scene/actors/ana'
import {
    PONDERING,
    RUBIKS_CUBE,
    COUCH_READING,
    DISTRACTED,
    HOPELESSLY_CRUSHED,
    WONDERING_BABY,
    MERRILY_DERANGED
} from 'constants/scene/actors/bennett'
import {
    USHER_WAITING,
    USHER_LOOKING
} from 'constants/scene/actors/howie'
import {
    INFANT_CURIOUS,
    INFANT_NURSING
} from 'constants/scene/actors/miriam'
import { BENNETT_KEYBOARD } from 'constants/scene/actors/stephanie'
import { SHANE_BUYING } from 'constants/scene/actors/tomer'
import {
    FLIRTING,
    EATING
} from 'constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    hands: true,
                    pupils: true,
                    composite: true,
                    instance: PONDERING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    hands: true,
                    pupils: true,
                    composite: true,
                    instance: RUBIKS_CUBE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    hands: true,
                    pupils: true,
                    composite: true,
                    instance: COUCH_READING
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        hands: true,
                        pupils: true,
                        composite: true,
                        instance: BENNETT_KEYBOARD
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
                    pupils: true,
                    composite: true,
                    instance: DISTRACTED
                },
                [JACOB]: {
                    hands: true,
                    pupils: true,
                    composite: true,
                    instance: FLIRTING
                },
                [MARA]: {
                    hands: true,
                    pupils: true,
                    composite: true,
                    instance: FLIRTING
                },
                [ANA]: {
                    hands: true,
                    pupils: true,
                    composite: true,
                    instance: SQUATTING
                },
                [TOMER]: {
                    shane: {
                        hands: true,
                        pupils: true,
                        composite: true,
                        instance: SHANE_BUYING
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
                    pupils: true,
                    composite: true,
                    instance: EATING
                },
                [JACOB]: {
                    hands: true,
                    pupils: true,
                    composite: true,
                    instance: EATING
                },
                [MARA]: {
                    hands: true,
                    pupils: true,
                    composite: true,
                    instance: EATING
                },
                [ANA]: {
                    hands: true,
                    pupils: true,
                    composite: true,
                    instance: EATING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    hands: true,
                    pupils: true,
                    composite: true,
                    instance: HOPELESSLY_CRUSHED
                },
                [MIRIAM]: {
                    maskedWoman: {
                        faceRevision: true,
                        hairIllustration: true,
                        head: true,
                        hands: true,
                        eyes: true,
                        pupils: true,
                        composite: true,
                        instance: INFANT_CURIOUS
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
                    pupils: true,
                    composite: true,
                    instance: WONDERING_BABY
                },
                [MIRIAM]: {
                    maskedWoman: {
                        faceRevision: true,
                        hairIllustration: true,
                        head: true,
                        hands: true,
                        eyes: true,
                        pupils: true,
                        composite: true,
                        instance: INFANT_NURSING
                    }
                },
                [HOWIE]: {
                    maskedUsher: {
                        faceRevision: true,
                        hands: true,
                        pupils: true,
                        composite: true,
                        instance: USHER_WAITING
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
                    pupils: true,
                    composite: true,
                    instance: MERRILY_DERANGED
                },
                [HOWIE]: {
                    maskedUsher: {
                        hands: true,
                        pupils: true,
                        composite: true,
                        instance: USHER_LOOKING
                    }
                }
            }
        }
    }
]
