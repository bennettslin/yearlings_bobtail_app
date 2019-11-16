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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: BLISSFUL_GUILTY
                },
                [CHRISTOPHER]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: BLISSFUL_GUILTY
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: FEIGNING_SICK
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ASLEEP
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SHAKEN
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: STOIC
                },
                [BRAD]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: GESTURING
                },
                [ANDREW]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: THROWING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WISTFUL
                },
                [BRAD]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SNACKING
                },
                [ANDREW]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: NOODLING
                },
                [SASHA]: {
                    popularGirl: {
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: SHEEPISH
                },
                [CHRISTOPHER]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: STARING
                },
                [MOTHER]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ARGUING
                },
                [TRISTAN]: {
                    principal: {
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: PRINCIPAL
                    }
                }
            }
        }
    }
]
