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
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: COLLECTING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [WILLY]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: DUCKING
                },
                [MOTHER]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: STOOPING
                },
                [CHRISTOPHER]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: TANTRUM
                },
                [PRETEEN_BENNETT]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: CAUTIOUS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [FATHER]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: ROARING
                },
                [CHRISTOPHER]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: SOBBING
                },
                [PRETEEN_BENNETT]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
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
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: GANGBANGER
                    }
                },
                [WILLY]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: GANGBANGER
                },
                [TOMER]: {
                    gangbanger: {
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
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
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: COMFORTING
                },
                [PRETEEN_BENNETT]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: FEARFUL
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [CHRISTOPHER]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: REASSURING_ENCHANTED
                },
                [PRETEEN_BENNETT]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: REASSURING_ENCHANTED
                },
                [WILLY]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: REASSURING_ENCHANTED
                }
            }
        }
    }
]
