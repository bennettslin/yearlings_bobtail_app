import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    CATHERINE,
    MARA,
    LIZ,
    MIRIAM,
    AMY
} from 'constants/scene/actors'
import { DOCTOR } from 'constants/scene/actors/amy'
import {
    EL_TORITO,
    GOPI
} from 'constants/scene/actors/songs'
import {
    PAMPAS,
    GETTING_DARK,
    CLIFF,
    FINAL_DREAM
} from 'constants/scene/actors/bennettLiz'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: EL_TORITO
                },
                [LIZ]: {
                    sita: {
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
                    instance: PAMPAS
                },
                [LIZ]: {
                    sita: {
                        instance: PAMPAS
                    }
                },
                [CATHERINE]: {
                    gopi: {
                        instance: GOPI
                    }
                },
                [MARA]: {
                    gopi: {
                        instance: GOPI
                    }
                },
                [MIRIAM]: {
                    gopi: {
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
                    instance: GETTING_DARK
                },
                [LIZ]: {
                    sita: {
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
                    instance: CLIFF
                },
                [LIZ]: {
                    sita: {
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
                    instance: FINAL_DREAM
                },
                [LIZ]: {
                    sita: {
                        instance: FINAL_DREAM
                    }
                },
                [AMY]: {
                    doctor: {
                        instance: DOCTOR
                    }
                }
            }
        }
    }
]
