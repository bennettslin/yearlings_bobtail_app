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
import { SQUATTING } from 'constants/scene/actors/ana'
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
                    instance: PONDERING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: RUBIKS_CUBE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: COUCH_READING
                },
                [STEPHANIE]: {
                    [BENNETT]: {
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
                    instance: DISTRACTED
                },
                [JACOB]: {
                    instance: FLIRTING
                },
                [MARA]: {
                    instance: FLIRTING
                },
                [ANA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: SQUATTING
                },
                [TOMER]: {
                    shane: {
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
                    instance: EATING
                },
                [JACOB]: {
                    instance: EATING
                },
                [MARA]: {
                    instance: EATING
                },
                [ANA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: EATING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: HOPELESSLY_CRUSHED
                },
                [MIRIAM]: {
                    maskedWoman: {
                        faceRevision: true,
                        hairIllustration: true,
                        head: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                    instance: WONDERING_BABY
                },
                [MIRIAM]: {
                    maskedWoman: {
                        faceRevision: true,
                        hairIllustration: true,
                        head: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        instance: INFANT_NURSING
                    }
                },
                [HOWIE]: {
                    maskedUsher: {
                        faceRevision: true,
                        headPlacement: true,
                        finalSvg: true,
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
                    instance: MERRILY_DERANGED
                },
                [HOWIE]: {
                    maskedUsher: {
                        instance: USHER_LOOKING
                    }
                }
            }
        }
    }
]
