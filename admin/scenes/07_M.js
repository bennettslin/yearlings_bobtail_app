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
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
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
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
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
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: COUCH_READING
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        feet: true,
                        legs: true,
                        trunk: true,
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
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: DISTRACTED
                },
                [JACOB]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FLIRTING
                },
                [MARA]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FLIRTING
                },
                [ANA]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SQUATTING
                },
                [TOMER]: {
                    shane: {
                        todo: true,
                        feet: true,
                        legs: true,
                        trunk: true,
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
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: EATING
                },
                [JACOB]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: EATING
                },
                [MARA]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: EATING
                },
                [ANA]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
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
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: HOPELESSLY_CRUSHED
                },
                [MIRIAM]: {
                    maskedWoman: {
                        todo: true,
                        workedHours: 3,
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
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WONDERING_BABY
                },
                [MIRIAM]: {
                    maskedWoman: {
                        todo: true,
                        workedHours: 3,
                        instance: INFANT_NURSING
                    }
                },
                [HOWIE]: {
                    maskedUsher: {
                        todo: true,
                        workedHours: 3,
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
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: MERRILY_DERANGED
                },
                [HOWIE]: {
                    maskedUsher: {
                        todo: true,
                        feet: true,
                        legs: true,
                        trunk: true,
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
