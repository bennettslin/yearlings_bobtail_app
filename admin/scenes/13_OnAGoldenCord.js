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
import { OFFICER } from 'constants/scene/actors/instances/amyNestorTomer'
import {
    CORD_SIDE,
    CORD_REAR
} from 'constants/scene/actors/instances/bennett'
import { AWKWARD_CONSOLATION } from 'constants/scene/actors/instances/bennettLiz'
import {
    HORSING,
    DRYING_TEARS
} from 'constants/scene/actors/instances/bennettStephanie'
import { BENNETT_DEFIANT } from 'constants/scene/actors/instances/stephanie'
import { CROSSING_GUARD } from 'constants/scene/actors/instances/willy'
import { YOUNG_CHILD } from 'constants/scene/actors/instances/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CORD_SIDE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: AWKWARD_CONSOLATION
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
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
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CORD_REAR
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
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
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: HORSING
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: HORSING
                    }
                },
                [AMY]: {
                    officer: {
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: OFFICER
                    }
                },
                [NESTOR]: {
                    instance: OFFICER
                },
                [TOMER]: {
                    instance: OFFICER
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: DRYING_TEARS
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: DRYING_TEARS
                    }
                },
                [ESTHER]: {
                    youngGirl: {
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: YOUNG_CHILD
                    }
                },
                [ANITA]: {
                    youngGirl: {
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: YOUNG_CHILD
                    }
                },
                [YOUNG_BENNETT]: {
                    youngBoy: {
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: YOUNG_CHILD
                    }
                },
                [WILLY]: {
                    crossingGuard: {
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: CROSSING_GUARD
                    }
                }
            }
        }
    }
]
