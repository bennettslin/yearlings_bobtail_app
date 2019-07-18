import { ACTOR } from 'constants/scene'
import {
    PRETEEN_BENNETT,
    WILLY,
    MOTHER,
    FATHER,
    CHRISTOPHER,
    CHRISTOPHER_BENNETT_WILLY,
    HOWIE_WILLY,
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
                    todo: true,
                    workedHours: 4.25,
                    instance: COLLECTING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [WILLY]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: DUCKING
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: STOOPING
                },
                [CHRISTOPHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: TANTRUM
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: CAUTIOUS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [FATHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: ROARING
                },
                [CHRISTOPHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: SOBBING
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: ENRAGED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [HOWIE_WILLY]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    instance: GANGBANGER
                },
                [TOMER]: {
                    gangbanger: {
                        todo: true,
                        workedHours: 4.25,
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
                    todo: true,
                    workedHours: 4.25,
                    instance: COMFORTING
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: FEARFUL
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [CHRISTOPHER_BENNETT_WILLY]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    instance: REASSURING_ENCHANTED
                }
            }
        }
    }
]
