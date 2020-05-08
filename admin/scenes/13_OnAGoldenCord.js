import { ACTOR } from '../../app/constants/scene'
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
} from '../../app/constants/scene/actors'
import { OFFICER } from '../../app/constants/scene/actors/amyNestorTomer'
import {
    CORD_SIDE,
    CORD_REAR
} from '../../app/constants/scene/actors/bennett'
import { AWKWARD_CONSOLATION } from '../../app/constants/scene/actors/bennettLiz'
import {
    HORSING,
    DRYING_TEARS
} from '../../app/constants/scene/actors/bennettStephanie'
import { BENNETT_DEFIANT } from '../../app/constants/scene/actors/stephanie'
import { CROSSING_GUARD } from '../../app/constants/scene/actors/willy'
import { YOUNG_CHILD } from '../../app/constants/scene/actors/songs'

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
                        instance: YOUNG_CHILD
                    }
                },
                [YOUNG_BENNETT]: {
                    youngBoy: {
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
