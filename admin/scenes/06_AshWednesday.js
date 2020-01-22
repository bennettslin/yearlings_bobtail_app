import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    CATHERINE,
    AMY,
    WADE
} from 'constants/scene/actors'
import { SMOKER } from 'constants/scene/actors/amy'
import {
    BREAKUP_DEJECTED,
    SOLICITING_OPINION,
    CATHOLIC_PENSIVE,
    CATHOLIC_IDEA,
    PIOUS
} from 'constants/scene/actors/bennett'
import {
    WEEPING,
    QUIPPING,
    PUZZLED
} from 'constants/scene/actors/catherine'
import { CATHOLIC_GUY } from 'constants/scene/actors/wade'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: BREAKUP_DEJECTED
                },
                [CATHERINE]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: WEEPING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: SOLICITING_OPINION
                },
                [CATHERINE]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: QUIPPING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: CATHOLIC_PENSIVE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: CATHOLIC_IDEA
                },
                [WADE]: {
                    catholic: {
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: CATHOLIC_GUY
                    }
                },
                [AMY]: {
                    smoker: {
                        layers: true,
                        colours: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: SMOKER
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    layers: true,
                    colours: true,
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: PIOUS
                },
                [CATHERINE]: {
                    headInspection: true,
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: PUZZLED
                }
            }
        }
    }
]
