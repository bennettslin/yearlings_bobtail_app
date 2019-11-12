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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: AWKWARD_CONSOLATION
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        trunkShape: true,
                        trunkLine: true,
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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CORD_REAR
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        trunkShape: true,
                        trunkLine: true,
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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: HORSING
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: HORSING
                    }
                },
                [AMY]: {
                    officer: {
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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: DRYING_TEARS
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: DRYING_TEARS
                    }
                },
                [ESTHER]: {
                    youngGirl: {
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: YOUNG_CHILD
                    }
                },
                [ANITA]: {
                    youngGirl: {
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: YOUNG_CHILD
                    }
                },
                [YOUNG_BENNETT]: {
                    youngBoy: {
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: YOUNG_CHILD
                    }
                },
                [WILLY]: {
                    crossingGuard: {
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
