import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    LIZ,
    KHARI,
    STEPHANIE
} from 'constants/scene/actors'
import { DOUBLE_ALBERT } from 'constants/scene/actors/instances/khari'
import { FLAPPER } from 'constants/scene/actors/instances/stephanie'
import {
    DATE_ENDING,
    MUSEUM,
    BACKSTAGE,
    GO_KARTS,
    DATE_ENDED
} from 'constants/scene/actors/instances/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: DATE_ENDING
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
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
                    todo: true,
                    workedHours: 4.25,
                    instance: MUSEUM
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: MUSEUM
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
                    instance: BACKSTAGE
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: BACKSTAGE
                    }
                },
                [KHARI]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: DOUBLE_ALBERT
                },
                [STEPHANIE]: {
                    actor: {
                        todo: true,
                        workedHours: 4.25,
                        instance: FLAPPER
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
                    instance: GO_KARTS
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: GO_KARTS
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
                    instance: DATE_ENDED
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        instance: DATE_ENDED
                    }
                }
            }
        }
    }
]
