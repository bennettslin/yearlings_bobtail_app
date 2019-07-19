import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    BENNETT_LIZ,
    LIZ,
    NESTOR,
    BENNETT_LIZ_REFLECTION
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
    DATE_ENDING,
    DATE_ENDED,
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
                    workedHours: 4.25,
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
                    workedHours: 4.25,
                    instance: DISHROOM_LANCET
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
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
                    duplicate: true,
                    instance: DATE_ENDING
                },
                [LIZ]: {
                    sita: {
                        duplicate: true,
                        instance: DATE_ENDING
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    duplicate: true,
                    instance: DATE_ENDED
                },
                [LIZ]: {
                    sita: {
                        duplicate: true,
                        instance: DATE_ENDED
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
                    instance: MOP_SOPPED
                },
                [NESTOR]: {
                    jogger: {
                        todo: true,
                        workedHours: 3.75,
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
                    workedHours: 4.25,
                    instance: GATE_CODE
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: GATE_CODE
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
                    instance: GINGERBREAD_PRISON
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
                    instance: RUMPLED_LINENS
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
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
                    workedHours: 4.25,
                    instance: WAITING_ROOM_ASLEEP
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
                    instance: CHEEK_UNVEILED
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
                    instance: HARD_ON
                },
                [BENNETT_LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 4,
                        compound: 2,
                        instance: HARD_ON_REFLECTION
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
                    instance: MISSIONARY
                },
                [BENNETT_LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 4,
                        compound: 2,
                        instance: MISSIONARY_REFLECTION
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
                    instance: AFTERGLOW
                },
                [BENNETT_LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 4,
                        compound: 2,
                        instance: AFTERGLOW_REFLECTION
                    }
                }
            }
        }
    }
]
