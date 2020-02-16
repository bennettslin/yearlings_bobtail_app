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
                    instance: CORD_SIDE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
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
                    instance: CORD_REAR
                },
                [STEPHANIE]: {
                    [BENNETT]: {
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
                    instance: HORSING
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        instance: HORSING
                    }
                },
                [AMY]: {
                    officer: {
                        instance: OFFICER
                    }
                },
                [NESTOR]: {
                    officer: {
                        instance: OFFICER
                    }
                },
                [TOMER]: {
                    officer: {
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
                    instance: DRYING_TEARS
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        instance: DRYING_TEARS
                    }
                },
                [ESTHER]: {
                    youngGirl: {
                        instance: YOUNG_CHILD
                    }
                },
                [ANITA]: {
                    youngGirl: {
                        headPlacement: true,
                        finalSvg: true,
                        instance: YOUNG_CHILD
                    }
                },
                [YOUNG_BENNETT]: {
                    youngBoy: {
                        headPlacement: true,
                        finalSvg: true,
                        instance: YOUNG_CHILD
                    }
                },
                [WILLY]: {
                    crossingGuard: {
                        instance: CROSSING_GUARD
                    }
                }
            }
        }
    }
]
