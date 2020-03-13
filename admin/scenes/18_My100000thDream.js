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
                        mouth: true,
                        lips: true,
                        eyes: true,
                        pupils: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                        mouth: true,
                        lips: true,
                        eyes: true,
                        pupils: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                        mouth: true,
                        lips: true,
                        eyes: true,
                        pupils: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                        mouth: true,
                        lips: true,
                        eyes: true,
                        pupils: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                        mouth: true,
                        lips: true,
                        eyes: true,
                        pupils: true,
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
