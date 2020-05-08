import { ACTOR } from '../../app/constants/scene'
import {
    PRETEEN_BENNETT,
    MOTHER,
    CHRISTOPHER,
    SASHA,
    BRAD,
    ANDREW,
    TRISTAN
} from '../../app/constants/scene/actors'
import {
    THROWING,
    NOODLING
} from '../../app/constants/scene/actors/andrew'
import {
    GESTURING,
    SNACKING
} from '../../app/constants/scene/actors/brad'
import { STARING } from '../../app/constants/scene/actors/christopher'
import { BLISSFUL_GUILTY } from '../../app/constants/scene/actors/christopherBennett'
import { ARGUING } from '../../app/constants/scene/actors/mother'
import {
    FEIGNING_SICK,
    SHAKEN,
    STOIC,
    WISTFUL,
    SHEEPISH
} from '../../app/constants/scene/actors/preteenBennett'
import { POPULAR_GIRL } from '../../app/constants/scene/actors/sasha'
import { ASLEEP } from '../../app/constants/scene/actors/songs'
import { PRINCIPAL } from '../../app/constants/scene/actors/tristan'

export default [
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: BLISSFUL_GUILTY
                },
                [CHRISTOPHER]: {
                    instance: BLISSFUL_GUILTY
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: FEIGNING_SICK
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: ASLEEP
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: SHAKEN
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: STOIC
                },
                [BRAD]: {
                    instance: GESTURING
                },
                [ANDREW]: {
                    instance: THROWING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    instance: WISTFUL
                },
                [BRAD]: {
                    instance: SNACKING
                },
                [ANDREW]: {
                    instance: NOODLING
                },
                [SASHA]: {
                    popularGirl: {
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
                    instance: SHEEPISH
                },
                [CHRISTOPHER]: {
                    instance: STARING
                },
                [MOTHER]: {
                    instance: ARGUING
                },
                [TRISTAN]: {
                    principal: {
                        instance: PRINCIPAL
                    }
                }
            }
        }
    }
]
