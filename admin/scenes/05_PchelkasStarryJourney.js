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
} from 'constants/scene/actors/andrew'
import {
    GESTURING,
    SNACKING
} from 'constants/scene/actors/brad'
import {
    STARING
} from 'constants/scene/actors/christopher'
import {
    BLISSFUL_GUILTY
} from 'constants/scene/actors/christopherBennett'
import { ARGUING } from 'constants/scene/actors/mother'
import {
    FEIGNING_SICK,
    SHAKEN,
    STOIC,
    WISTFUL,
    SHEEPISH
} from 'constants/scene/actors/preteenBennett'
import { POPULAR_GIRL } from 'constants/scene/actors/sasha'
import { ASLEEP } from 'constants/scene/actors/songs'
import { PRINCIPAL } from 'constants/scene/actors/tristan'

export default [
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: BLISSFUL_GUILTY
                },
                [CHRISTOPHER]: {
                    hands: true,
                    eyebrow: true,
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
                    face: true,
                    composite: true,
                    instance: STOIC
                },
                [BRAD]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: GESTURING
                },
                [ANDREW]: {
                    hands: true,
                    eyebrow: true,
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
                    face: true,
                    composite: true,
                    instance: WISTFUL
                },
                [BRAD]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: SNACKING
                },
                [ANDREW]: {
                    hands: true,
                    eyebrow: true,
                    face: true,
                    composite: true,
                    instance: NOODLING
                },
                [SASHA]: {
                    popularGirl: {
                        hands: true,
                        eyebrow: true,
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
                    face: true,
                    composite: true,
                    instance: SHEEPISH
                },
                [CHRISTOPHER]: {
                    hands: true,
                    eyebrow: true,
                    face: true,
                    composite: true,
                    instance: STARING
                },
                [MOTHER]: {
                    hands: true,
                    face: true,
                    composite: true,
                    instance: ARGUING
                },
                [TRISTAN]: {
                    principal: {
                        hands: true,
                        face: true,
                        composite: true,
                        instance: PRINCIPAL
                    }
                }
            }
        }
    }
]
