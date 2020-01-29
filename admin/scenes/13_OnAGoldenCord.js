import { ACTOR } from 'constants/scene'
import {
    YOUNG_BENNETT,
    BENNETT,
    LIZ,
    ANITA,
    ESTHER,
    WILLY,
    AMY,
    STEPHANIE,
    NESTOR,
    TOMER
} from 'constants/scene/actors'
import { OFFICER } from 'constants/scene/actors/amyNestorTomer'
import {
    CORD_SIDE,
    CORD_REAR
} from 'constants/scene/actors/bennett'
import { AWKWARD_CONSOLATION } from 'constants/scene/actors/bennettLiz'
import {
    HORSING,
    DRYING_TEARS
} from 'constants/scene/actors/bennettStephanie'
import { BENNETT_DEFIANT } from 'constants/scene/actors/stephanie'
import { CROSSING_GUARD } from 'constants/scene/actors/willy'
import { YOUNG_CHILD } from 'constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: CORD_SIDE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: AWKWARD_CONSOLATION
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        head: true,
                        eyebrow: true,
                        nose: true,
                        mouth: true,
                        lips: true,
                        eyes: true,
                        pupils: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: AWKWARD_CONSOLATION
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: CORD_REAR
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: BENNETT_DEFIANT
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: HORSING
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: HORSING
                    }
                },
                [AMY]: {
                    officer: {
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: OFFICER
                    }
                },
                [NESTOR]: {
                    officer: {
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: OFFICER
                    }
                },
                [TOMER]: {
                    officer: {
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: OFFICER
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    sizeAdjustment: true,
                    instance: DRYING_TEARS
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: DRYING_TEARS
                    }
                },
                [ESTHER]: {
                    youngGirl: {
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: YOUNG_CHILD
                    }
                },
                [ANITA]: {
                    youngGirl: {
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: YOUNG_CHILD
                    }
                },
                [YOUNG_BENNETT]: {
                    youngBoy: {
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: YOUNG_CHILD
                    }
                },
                [WILLY]: {
                    crossingGuard: {
                        headPlacement: true,
                        finalSvg: true,
                        sizeAdjustment: true,
                        instance: CROSSING_GUARD
                    }
                }
            }
        }
    }
]
