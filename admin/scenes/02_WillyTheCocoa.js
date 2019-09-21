import { ACTOR } from 'constants/scene'
import {
    PRETEEN_BENNETT,
    WILLY,
    MOTHER,
    FATHER,
    CHRISTOPHER,
    HOWIE,
    TOMER
} from 'constants/scene/actors'
import {
    CAUTIOUS,
    ENRAGED,
    FEARFUL
} from 'constants/scene/actors/instances/preteenBennett'
import {
    COLLECTING,
    DUCKING
} from 'constants/scene/actors/instances/willy'
import {
    STOOPING,
    COMFORTING
} from 'constants/scene/actors/instances/mother'
import { ROARING } from 'constants/scene/actors/instances/father'
import {
    TANTRUM,
    SOBBING
} from 'constants/scene/actors/instances/christopher'
import { REASSURING_ENCHANTED } from 'constants/scene/actors/instances/christopherBennettWilly'
import { GANGBANGER } from 'constants/scene/actors/instances/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [WILLY]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: COLLECTING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [WILLY]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: DUCKING
                },
                [MOTHER]: {
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: STOOPING
                },
                [CHRISTOPHER]: {
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: TANTRUM
                },
                [PRETEEN_BENNETT]: {
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CAUTIOUS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [FATHER]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ROARING
                },
                [CHRISTOPHER]: {
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SOBBING
                },
                [PRETEEN_BENNETT]: {
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ENRAGED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [HOWIE]: {
                    gangbanger: {
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: GANGBANGER
                    }
                },
                [WILLY]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: GANGBANGER
                },
                [TOMER]: {
                    gangbanger: {
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: GANGBANGER
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [MOTHER]: {
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: COMFORTING
                },
                [PRETEEN_BENNETT]: {
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FEARFUL
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [CHRISTOPHER]: {
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: REASSURING_ENCHANTED
                },
                [PRETEEN_BENNETT]: {
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: REASSURING_ENCHANTED
                },
                [WILLY]: {
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: REASSURING_ENCHANTED
                }
            }
        }
    }
]
