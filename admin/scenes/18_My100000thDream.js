import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    CATHERINE,
    MARA,
    LIZ,
    MIRIAM,
    AMY
} from 'constants/scene/actors'
import {
    DOCTOR
} from 'constants/scene/actors/instances/amy'
import {
    EL_TORITO,
    GOPI
} from 'constants/scene/actors/instances/songs'
import {
    PAMPAS,
    GETTING_DARK,
    CLIFF,
    FINAL_DREAM
} from 'constants/scene/actors/instances/bennettLiz'

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
                    instance: EL_TORITO
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: EL_TORITO
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
                    instance: PAMPAS
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: PAMPAS
                    }
                },
                [CATHERINE]: {
                    gopi: {
                        todo: true,
                        workedHours: 4.25,
                        feet: false,
                        legs: false,
                        trunk: false,
                        hands: false,
                        head: false,
                        face: false,
                        composite: false,
                        instance: GOPI
                    }
                },
                [MARA]: {
                    gopi: {
                        todo: true,
                        workedHours: 4.25,
                        feet: false,
                        legs: false,
                        trunk: false,
                        hands: false,
                        head: false,
                        face: false,
                        composite: false,
                        instance: GOPI
                    }
                },
                [MIRIAM]: {
                    gopi: {
                        todo: true,
                        workedHours: 3.75,
                        instance: GOPI
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
                    instance: GETTING_DARK
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: GETTING_DARK
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
                    instance: CLIFF
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: CLIFF
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
                    instance: FINAL_DREAM
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: FINAL_DREAM
                    }
                },
                [AMY]: {
                    doctor: {
                        todo: true,
                        workedHours: 4.25,
                        feet: false,
                        legs: false,
                        trunk: false,
                        hands: false,
                        head: false,
                        face: false,
                        composite: false,
                        instance: DOCTOR
                    }
                }
            }
        }
    }
]
