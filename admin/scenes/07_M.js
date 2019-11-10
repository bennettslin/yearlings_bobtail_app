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
} from 'constants/scene/actors/instances/ana'
import {
    PONDERING,
    COUCH_READING,
    RUBIKS_CUBE,
    DISTRACTED,
    HOPELESSLY_CRUSHED,
    WONDERING_BABY,
    MERRILY_DERANGED
} from 'constants/scene/actors/instances/bennett'
import {
    USHER_WAITING,
    USHER_LOOKING
} from 'constants/scene/actors/instances/howie'
import {
    INFANT_CURIOUS,
    INFANT_NURSING
} from 'constants/scene/actors/instances/miriam'
import { BENNETT_KEYBOARD } from 'constants/scene/actors/instances/stephanie'
import { SHANE_BUYING } from 'constants/scene/actors/instances/tomer'
import {
    FLIRTING,
    EATING
} from 'constants/scene/actors/instances/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
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
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
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
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: COUCH_READING
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
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
                    head: true,
                    face: true,
                    composite: true,
                    instance: DISTRACTED
                },
                [JACOB]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FLIRTING
                },
                [MARA]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FLIRTING
                },
                [ANA]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SQUATTING
                },
                [TOMER]: {
                    shane: {
                        hands: true,
                        head: true,
                        face: true,
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
                    head: true,
                    face: true,
                    composite: true,
                    instance: EATING
                },
                [JACOB]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: EATING
                },
                [MARA]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: EATING
                },
                [ANA]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
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
                    head: true,
                    face: true,
                    composite: true,
                    instance: HOPELESSLY_CRUSHED
                },
                [MIRIAM]: {
                    maskedWoman: {
                        faceRevision: true,
                        hair: true,
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
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
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WONDERING_BABY
                },
                [MIRIAM]: {
                    maskedWoman: {
                        faceRevision: true,
                        hair: true,
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: INFANT_NURSING
                    }
                },
                [HOWIE]: {
                    maskedUsher: {
                        faceRevision: true,
                        hands: true,
                        head: true,
                        face: true,
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
                    head: true,
                    face: true,
                    composite: true,
                    instance: MERRILY_DERANGED
                },
                [HOWIE]: {
                    maskedUsher: {
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: USHER_LOOKING
                    }
                }
            }
        }
    }
]
