import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    LIZ,
    KHARI,
    STEPHANIE
} from 'constants/scene/actors'
import { DOUBLE_ALBERT } from 'constants/scene/actors/khari'
import { FLAPPER } from 'constants/scene/actors/stephanie'
import {
    DATE_ENDING,
    MUSEUM,
    BACKSTAGE,
    GO_KARTS,
    DATE_ENDED
} from 'constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: DATE_ENDING
                },
                [LIZ]: {
                    sita: {
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
                    instance: MUSEUM
                },
                [LIZ]: {
                    sita: {
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
                    instance: BACKSTAGE
                },
                [LIZ]: {
                    sita: {
                        instance: BACKSTAGE
                    }
                },
                [KHARI]: {
                    instance: DOUBLE_ALBERT
                },
                [STEPHANIE]: {
                    actor: {
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
                    instance: GO_KARTS
                },
                [LIZ]: {
                    sita: {
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
                    instance: DATE_ENDED
                },
                [LIZ]: {
                    sita: {
                        instance: DATE_ENDED
                    }
                }
            }
        }
    }
]
