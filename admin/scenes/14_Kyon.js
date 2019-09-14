import { ACTOR } from 'constants/scene'
import {
    LIZ,
    KHARI
} from 'constants/scene/actors'
import {
    ARRIVED,
    JUDGMENTAL,
    CONCERNED
} from 'constants/scene/actors/instances/khari'
import {
    PETTING_SEATED,
    PETTING_STANDING,
    SIFTING_TCHOTCHKES,
    OPENING_DOOR,
    DEFENDING,
    NOT_HUNGRY,
    ASLEEP_COUCH
} from 'constants/scene/actors/instances/liz'

export default [
    {
        presences: {
            [ACTOR]: {
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
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
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
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
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
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: OPENING_DOOR
                    }
                },
                [KHARI]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
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
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: DEFENDING
                    }
                },
                [KHARI]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
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
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: NOT_HUNGRY
                    }
                },
                [KHARI]: {
                    todo: true,
                    feet: true,
                    legs: true,
                    trunk: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
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
                        todo: true,
                        faceRevision: true,
                        feet: true,
                        legs: true,
                        trunk: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: ASLEEP_COUCH
                    }
                }
            }
        }
    }
]
