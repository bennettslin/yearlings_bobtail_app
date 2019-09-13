import { ACTOR } from 'constants/scene'
import {
    YOUNG_BENNETT,
    BENNETT,
    LIZ,
    ANITA,
    ESTHER,
    WILLY,
    AMY,
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
                    feet: false,
                    legs: false,
                    trunk: false,
                    hands: false,
                    head: false,
                    face: false,
                    composite: false,
                    instance: CORD_SIDE
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
                    feet: false,
                    legs: false,
                    trunk: false,
                    hands: false,
                    head: false,
                    face: false,
                    composite: false,
                    instance: AWKWARD_CONSOLATION
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
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
                    todo: true,
                    workedHours: 4.25,
                    feet: false,
                    legs: false,
                    trunk: false,
                    hands: false,
                    head: false,
                    face: false,
                    composite: false,
                    instance: CORD_REAR
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 4.25,
                        feet: false,
                        legs: false,
                        trunk: false,
                        hands: false,
                        head: false,
                        face: false,
                        composite: false,
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
                    todo: true,
                    workedHours: 4.25,
                    feet: false,
                    legs: false,
                    trunk: false,
                    hands: false,
                    head: false,
                    face: false,
                    composite: false,
                    instance: HORSING
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 4.25,
                        feet: false,
                        legs: false,
                        trunk: false,
                        hands: false,
                        head: false,
                        face: false,
                        composite: false,
                        instance: HORSING
                    }
                },
                [AMY]: {
                    officer: {
                        todo: true,
                        workedHours: 4.25,
                        feet: false,
                        legs: false,
                        trunk: false,
                        hands: false,
                        head: false,
                        face: false,
                        composite: false,
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
                    todo: true,
                    workedHours: 4.25,
                    feet: false,
                    legs: false,
                    trunk: false,
                    hands: false,
                    head: false,
                    face: false,
                    composite: false,
                    instance: DRYING_TEARS
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 4.25,
                        feet: false,
                        legs: false,
                        trunk: false,
                        hands: false,
                        head: false,
                        face: false,
                        composite: false,
                        instance: DRYING_TEARS
                    }
                },
                [ESTHER]: {
                    youngGirl: {
                        todo: true,
                        workedHours: 4.25,
                        feet: false,
                        legs: false,
                        trunk: false,
                        hands: false,
                        head: false,
                        face: false,
                        composite: false,
                        instance: YOUNG_CHILD
                    }
                },
                [ANITA]: {
                    youngGirl: {
                        todo: true,
                        workedHours: 4.25,
                        feet: false,
                        legs: false,
                        trunk: false,
                        hands: false,
                        head: false,
                        face: false,
                        composite: false,
                        instance: YOUNG_CHILD
                    }
                },
                [YOUNG_BENNETT]: {
                    youngBoy: {
                        todo: true,
                        workedHours: 4.25,
                        feet: false,
                        legs: false,
                        trunk: false,
                        hands: false,
                        head: false,
                        face: false,
                        composite: false,
                        instance: YOUNG_CHILD
                    }
                },
                [WILLY]: {
                    crossingGuard: {
                        todo: true,
                        workedHours: 4.25,
                        feet: false,
                        legs: false,
                        trunk: false,
                        hands: false,
                        head: false,
                        face: false,
                        composite: false,
                        instance: CROSSING_GUARD
                    }
                }
            }
        }
    }
]
