import { ACTOR } from 'constants/scene'
import {
    YOUNG_BENNETT,
    BENNETT,
    BENNETT_LIZ,
    BENNETT_STEPHANIE,
    ANITA,
    ESTHER,
    WILLY,
    AMY_NESTOR_TOMER,
    STEPHANIE
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
                    todo: true,
                    workedHours: 4.25,
                    instance: CORD_SIDE
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    instance: AWKWARD_CONSOLATION
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: CORD_REAR
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 4.25,
                        instance: BENNETT_DEFIANT
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT_STEPHANIE]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    instance: HORSING
                },
                [AMY_NESTOR_TOMER]: {
                    officer: {
                        todo: true,
                        workedHours: 4.25,
                        instance: OFFICER
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT_STEPHANIE]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    instance: DRYING_TEARS
                },
                [ESTHER]: {
                    youngGirl: {
                        todo: true,
                        workedHours: 4.25,
                        instance: YOUNG_CHILD
                    }
                },
                [ANITA]: {
                    youngGirl: {
                        todo: true,
                        workedHours: 4.25,
                        instance: YOUNG_CHILD
                    }
                },
                [YOUNG_BENNETT]: {
                    youngBoy: {
                        todo: true,
                        workedHours: 4.25,
                        instance: YOUNG_CHILD
                    }
                },
                [WILLY]: {
                    crossingGuard: {
                        todo: true,
                        workedHours: 4.25,
                        instance: CROSSING_GUARD
                    }
                }
            }
        }
    }
]
