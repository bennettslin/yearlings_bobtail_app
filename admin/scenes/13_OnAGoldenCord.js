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
                    hair: true,
                    head: true,
                    hands: true,
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
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: AWKWARD_CONSOLATION
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        hair: true,
                        head: true,
                        hands: true,
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
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: CORD_REAR
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        hair: true,
                        head: true,
                        hands: true,
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
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: HORSING
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        hair: true,
                        head: true,
                        hands: true,
                        face: true,
                        composite: true,
                        instance: HORSING
                    }
                },
                [AMY]: {
                    officer: {
                        hair: true,
                        head: true,
                        hands: true,
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
                    hair: true,
                    head: true,
                    hands: true,
                    face: true,
                    composite: true,
                    instance: DRYING_TEARS
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        hair: true,
                        head: true,
                        hands: true,
                        face: true,
                        composite: true,
                        instance: DRYING_TEARS
                    }
                },
                [ESTHER]: {
                    youngGirl: {
                        hair: true,
                        head: true,
                        hands: true,
                        face: true,
                        composite: true,
                        instance: YOUNG_CHILD
                    }
                },
                [ANITA]: {
                    youngGirl: {
                        hair: true,
                        head: true,
                        hands: true,
                        face: true,
                        composite: true,
                        instance: YOUNG_CHILD
                    }
                },
                [YOUNG_BENNETT]: {
                    youngBoy: {
                        hair: true,
                        head: true,
                        hands: true,
                        face: true,
                        composite: true,
                        instance: YOUNG_CHILD
                    }
                },
                [WILLY]: {
                    crossingGuard: {
                        hair: true,
                        head: true,
                        hands: true,
                        face: true,
                        composite: true,
                        instance: CROSSING_GUARD
                    }
                }
            }
        }
    }
]
