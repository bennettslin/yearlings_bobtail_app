import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    LIZ,
    NESTOR
} from 'constants/scene/actors'
import {
    DISHROOM_READING,
    MOP_SOPPED,
    WAITING_ROOM_ASLEEP
} from 'constants/scene/actors/instances/bennett'
import {
    JOGGER
} from 'constants/scene/actors/instances/nestor'
import {
    DISHROOM_LANCET,
    GATE_CODE,
    RUMPLED_LINENS
} from 'constants/scene/actors/instances/songs'
import {
    GINGERBREAD_PRISON,
    CHEEK_UNVEILED,
    HARD_ON,
    MISSIONARY,
    AFTERGLOW,
    HARD_ON_REFLECTION,
    MISSIONARY_REFLECTION,
    AFTERGLOW_REFLECTION
} from 'constants/scene/actors/instances/bennettLiz'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: DISHROOM_READING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: DISHROOM_LANCET
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: DISHROOM_LANCET
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
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: MOP_SOPPED
                },
                [NESTOR]: {
                    jogger: {
                        todo: true,
                        faceRevision: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: JOGGER
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
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: GATE_CODE
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: GATE_CODE
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
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: GINGERBREAD_PRISON
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: GINGERBREAD_PRISON
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
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: RUMPLED_LINENS
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: RUMPLED_LINENS
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
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WAITING_ROOM_ASLEEP
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CHEEK_UNVEILED
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: CHEEK_UNVEILED
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
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: HARD_ON
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: HARD_ON
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    reflection: {
                        todo: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: HARD_ON_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: HARD_ON_REFLECTION
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
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: MISSIONARY
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: MISSIONARY
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    reflection: {
                        todo: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: MISSIONARY_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: MISSIONARY_REFLECTION
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
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: AFTERGLOW
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: AFTERGLOW
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    reflection: {
                        todo: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: AFTERGLOW_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: AFTERGLOW_REFLECTION
                    }
                }
            }
        }
    }
]
