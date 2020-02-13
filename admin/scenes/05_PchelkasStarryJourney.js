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
import { STARING } from 'constants/scene/actors/christopher'
import { BLISSFUL_GUILTY } from 'constants/scene/actors/christopherBennett'
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
                    headPlacement: true,
                    finalSvg: true,
                    instance: BLISSFUL_GUILTY
                },
                [CHRISTOPHER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: BLISSFUL_GUILTY
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: FEIGNING_SICK
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: ASLEEP
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: SHAKEN
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: STOIC
                },
                [BRAD]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: GESTURING
                },
                [ANDREW]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: THROWING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: WISTFUL
                },
                [BRAD]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: SNACKING
                },
                [ANDREW]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: NOODLING
                },
                [SASHA]: {
                    popularGirl: {
                        headPlacement: true,
                        finalSvg: true,
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
                    headPlacement: true,
                    finalSvg: true,
                    instance: SHEEPISH
                },
                [CHRISTOPHER]: {
                    headPlacement: true,
                    finalSvg: true,
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
