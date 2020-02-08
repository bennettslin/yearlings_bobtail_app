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
                    headPlacement: true,
                    finalSvg: true,
                    instance: COLLECTING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [WILLY]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: DUCKING
                },
                [MOTHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: STOOPING
                },
                [CHRISTOPHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: TANTRUM
                },
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: CAUTIOUS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [FATHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: ROARING
                },
                [CHRISTOPHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: SOBBING
                },
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
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
                    headPlacement: true,
                    finalSvg: true,
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
                    headPlacement: true,
                    finalSvg: true,
                    instance: COMFORTING
                },
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: FEARFUL
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [CHRISTOPHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: REASSURING_ENCHANTED
                },
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: REASSURING_ENCHANTED
                },
                [WILLY]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: REASSURING_ENCHANTED
                }
            }
        }
    }
]
