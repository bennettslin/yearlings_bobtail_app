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
} from 'constants/scene/actors/bennett'
import { JOGGER } from 'constants/scene/actors/nestor'
import {
    DISHROOM_LANCET,
    GATE_CODE,
    RUMPLED_LINENS
} from 'constants/scene/actors/songs'
import {
    GINGERBREAD_PRISON,
    CHEEK_UNVEILED,
    HARD_ON,
    MISSIONARY,
    AFTERGLOW,
    HARD_ON_REFLECTION,
    MISSIONARY_REFLECTION,
    AFTERGLOW_REFLECTION
} from 'constants/scene/actors/bennettLiz'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: DISHROOM_READING
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: DISHROOM_LANCET
                },
                [LIZ]: {
                    sita: {
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
                    instance: MOP_SOPPED
                },
                [NESTOR]: {
                    jogger: {
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
                    instance: GATE_CODE
                },
                [LIZ]: {
                    sita: {
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
                    instance: GINGERBREAD_PRISON
                },
                [LIZ]: {
                    sita: {
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
                    instance: RUMPLED_LINENS
                },
                [LIZ]: {
                    sita: {
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
                    instance: WAITING_ROOM_ASLEEP
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: CHEEK_UNVEILED
                },
                [LIZ]: {
                    sita: {
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
                    instance: HARD_ON
                },
                [LIZ]: {
                    sita: {
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
                        instance: HARD_ON_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
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
                    instance: MISSIONARY
                },
                [LIZ]: {
                    sita: {
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
                        instance: MISSIONARY_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
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
                    instance: AFTERGLOW
                },
                [LIZ]: {
                    sita: {
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
                        instance: AFTERGLOW_REFLECTION
                    }
                },
                [LIZ]: {
                    reflection: {
                        instance: AFTERGLOW_REFLECTION
                    }
                }
            }
        }
    }
]
