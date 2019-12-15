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
} from 'constants/scene/actors/amy'
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
                    hands: true,
                    face: true,
                    composite: true,
                    instance: EL_TORITO
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        head: true,
                        hands: true,
                        eyebrow: true,
                        nose: true,
                        face: true,
                        composite: true,
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
                    hands: true,
                    face: true,
                    composite: true,
                    instance: PAMPAS
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        head: true,
                        hands: true,
                        eyebrow: true,
                        nose: true,
                        face: true,
                        composite: true,
                        instance: PAMPAS
                    }
                },
                [CATHERINE]: {
                    gopi: {
                        hands: true,
                        nose: true,
                        face: true,
                        composite: true,
                        instance: GOPI
                    }
                },
                [MARA]: {
                    gopi: {
                        hands: true,
                        nose: true,
                        face: true,
                        composite: true,
                        instance: GOPI
                    }
                },
                [MIRIAM]: {
                    gopi: {
                        hairIllustration: true,
                        head: true,
                        hands: true,
                        nose: true,
                        face: true,
                        composite: true,
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
                    hands: true,
                    face: true,
                    composite: true,
                    instance: GETTING_DARK
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        head: true,
                        hands: true,
                        eyebrow: true,
                        nose: true,
                        face: true,
                        composite: true,
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
                    hands: true,
                    face: true,
                    composite: true,
                    instance: CLIFF
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        head: true,
                        hands: true,
                        eyebrow: true,
                        nose: true,
                        face: true,
                        composite: true,
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
                    hands: true,
                    face: true,
                    composite: true,
                    instance: FINAL_DREAM
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        head: true,
                        hands: true,
                        eyebrow: true,
                        nose: true,
                        face: true,
                        composite: true,
                        instance: FINAL_DREAM
                    }
                },
                [AMY]: {
                    doctor: {
                        hands: true,
                        face: true,
                        composite: true,
                        instance: DOCTOR
                    }
                }
            }
        }
    }
]
