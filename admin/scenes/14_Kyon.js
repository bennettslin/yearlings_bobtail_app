import { ACTOR } from 'constants/scene'
import {
    LIZ,
    KHARI
} from 'constants/scene/actors'
import {
    ARRIVED,
    JUDGMENTAL,
    CONCERNED
} from 'constants/scene/actors/khari'
import {
    PETTING_SEATED,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH
} from 'constants/scene/actors/liz'

export default [
    {
        presences: {
            [ACTOR]: {
                [LIZ]: {
                    sita: {
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
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
                        headInspection: true,
                        headPlacement: true,
                        finalSvg: true,
                        instance: ASLEEP_COUCH
                    }
                }
            }
        }
    }
]
