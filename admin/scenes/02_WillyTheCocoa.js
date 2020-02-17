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
                    instance: COLLECTING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [WILLY]: {
                    instance: DUCKING
                },
                [MOTHER]: {
                    instance: STOOPING
                },
                [CHRISTOPHER]: {
                    instance: TANTRUM
                },
                [PRETEEN_BENNETT]: {
                    instance: CAUTIOUS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [FATHER]: {
                    instance: ROARING
                },
                [CHRISTOPHER]: {
                    instance: SOBBING
                },
                [PRETEEN_BENNETT]: {
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
                        instance: GANGBANGER
                    }
                },
                [WILLY]: {
                    instance: GANGBANGER
                },
                [TOMER]: {
                    gangbanger: {
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
                    instance: COMFORTING
                },
                [PRETEEN_BENNETT]: {
                    instance: FEARFUL
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [CHRISTOPHER]: {
                    instance: REASSURING_ENCHANTED
                },
                [PRETEEN_BENNETT]: {
                    instance: REASSURING_ENCHANTED
                },
                [WILLY]: {
                    instance: REASSURING_ENCHANTED
                }
            }
        }
    }
]
