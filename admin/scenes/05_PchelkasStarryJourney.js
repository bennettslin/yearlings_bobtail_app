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
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: BLISSFUL_GUILTY
                },
                [CHRISTOPHER]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: BLISSFUL_GUILTY
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: FEIGNING_SICK
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: ASLEEP
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: SHAKEN
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: STOIC
                },
                [BRAD]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: GESTURING
                },
                [ANDREW]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: THROWING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [PRETEEN_BENNETT]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: WISTFUL
                },
                [BRAD]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: SNACKING
                },
                [ANDREW]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: NOODLING
                },
                [SASHA]: {
                    popularGirl: {
                        layers: true,
                        colours: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
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
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: SHEEPISH
                },
                [CHRISTOPHER]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: STARING
                },
                [MOTHER]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: ARGUING
                },
                [TRISTAN]: {
                    principal: {
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: PRINCIPAL
                    }
                }
            }
        }
    }
]
