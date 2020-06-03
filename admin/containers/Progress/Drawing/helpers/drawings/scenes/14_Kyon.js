import { ACTOR } from '../../../../../../../app/constants/scene'
import {
    LIZ,
    KHARI
} from '../../../../../../../app/constants/scene/actors'
import {
    ARRIVED,
    JUDGMENTAL,
    CONCERNED
} from '../../../../../../../app/constants/scene/actors/khari'
import {
    PETTING_SEATED,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH
} from '../../../../../../../app/constants/scene/actors/liz'

export default [
    {
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        instance: PETTING_SEATED
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        instance: PETTING_STANDING
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        instance: SIFTING_TCHOTCHKES
                    }
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        instance: OPENING_DOOR
                    }
                },
                [KHARI]: {
                    instance: ARRIVED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        instance: DEFENDING
                    }
                },
                [KHARI]: {
                    instance: JUDGMENTAL
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        instance: NOT_HUNGRY
                    }
                },
                [KHARI]: {
                    instance: CONCERNED
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        instance: ASLEEP_COUCH
                    }
                }
            }
        }
    }
]
