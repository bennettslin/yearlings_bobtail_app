import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    BENNETT_LIZ,
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
                [BENNETT_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    instance: PAMPAS
                },
                [CATHERINE]: {
                    gopi: {
                        todo: true,
                        workedHours: 4.25,
                        instance: GOPI
                    }
                },
                [MARA]: {
                    gopi: {
                        todo: true,
                        workedHours: 4.25,
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
                [BENNETT_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    instance: GETTING_DARK
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
                    instance: CLIFF
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
                    instance: FINAL_DREAM
                },
                [AMY]: {
                    doctor: {
                        todo: true,
                        workedHours: 4.25,
                        instance: DOCTOR
                    }
                }
            }
        }
    }
]
