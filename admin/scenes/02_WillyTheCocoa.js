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
} from 'constants/scene/actors/preteenBennett'
import {
    COLLECTING,
    DUCKING
} from 'constants/scene/actors/willy'
import {
    STOOPING,
    COMFORTING
} from 'constants/scene/actors/mother'
import { ROARING } from 'constants/scene/actors/father'
import {
    TANTRUM,
    SOBBING
} from 'constants/scene/actors/christopher'
import { REASSURING_ENCHANTED } from 'constants/scene/actors/christopherBennettWilly'
import { GANGBANGER } from 'constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [WILLY]: {
                    hair: true,
                    head: true,
                    hands: true,
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
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: DUCKING
                },
                [MOTHER]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: STOOPING
                },
                [CHRISTOPHER]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: TANTRUM
                },
                [PRETEEN_BENNETT]: {
                    hair: true,
                    head: true,
                    hands: true,
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
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: ROARING
                },
                [CHRISTOPHER]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: SOBBING
                },
                [PRETEEN_BENNETT]: {
                    hair: true,
                    head: true,
                    hands: true,
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
                        hands: true,
                        face: true,
                        composite: true,
                        instance: GANGBANGER
                    }
                },
                [WILLY]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: GANGBANGER
                },
                [TOMER]: {
                    gangbanger: {
                        hands: true,
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
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: COMFORTING
                },
                [PRETEEN_BENNETT]: {
                    hair: true,
                    head: true,
                    hands: true,
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
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: REASSURING_ENCHANTED
                },
                [PRETEEN_BENNETT]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: REASSURING_ENCHANTED
                },
                [WILLY]: {
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: REASSURING_ENCHANTED
                }
            }
        }
    }
]
