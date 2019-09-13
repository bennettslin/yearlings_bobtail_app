import { ACTOR } from 'constants/scene'
import {
    PRETEEN_BENNETT,
    MOTHER,
    CHRISTOPHER,
    SASHA,
    BRAD,
    ANDREW,
    TRISTAN
} from 'constants/scene/actors'
import {
    THROWING,
    NOODLING
} from 'constants/scene/actors/instances/andrew'
import {
    GESTURING,
    SNACKING
} from 'constants/scene/actors/instances/brad'
import {
    STARING
} from 'constants/scene/actors/instances/christopher'
import {
    BLISSFUL_GUILTY
} from 'constants/scene/actors/instances/christopherBennett'
import { ARGUING } from 'constants/scene/actors/instances/mother'
import {
    FEIGNING_SICK,
    SHAKEN,
    STOIC,
    WISTFUL,
    SHEEPISH
} from 'constants/scene/actors/instances/preteenBennett'
import { POPULAR_GIRL } from 'constants/scene/actors/instances/sasha'
import { ASLEEP } from 'constants/scene/actors/instances/songs'
import { PRINCIPAL } from 'constants/scene/actors/instances/tristan'

export default [
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: BLISSFUL_GUILTY
                },
                [CHRISTOPHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: BLISSFUL_GUILTY
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: FEIGNING_SICK
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: ASLEEP
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: SHAKEN
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: STOIC
                },
                [BRAD]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: GESTURING
                },
                [ANDREW]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: THROWING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: WISTFUL
                },
                [BRAD]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: SNACKING
                },
                [ANDREW]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: NOODLING
                },
                [SASHA]: {
                    popularGirl: {
                        todo: true,
                        workedHours: 4.25,
                        instance: POPULAR_GIRL
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: SHEEPISH
                },
                [CHRISTOPHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: STARING
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: ARGUING
                },
                [TRISTAN]: {
                    principal: {
                        todo: true,
                        workedHours: 4.25,
                        instance: PRINCIPAL
                    }
                }
            }
        }
    }
]
