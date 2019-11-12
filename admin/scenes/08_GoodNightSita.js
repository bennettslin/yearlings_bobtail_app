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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: DATE_ENDING
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
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
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: MUSEUM
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: BACKSTAGE
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: BACKSTAGE
                    }
                },
                [KHARI]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: DOUBLE_ALBERT
                },
                [STEPHANIE]: {
                    actor: {
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: GO_KARTS
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
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
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: DATE_ENDED
                },
                [LIZ]: {
                    sita: {
                        faceRevision: true,
                        trunkShape: true,
                        trunkLine: true,
                        hands: true,
                        head: true,
                        face: true,
                        composite: true,
                        instance: DATE_ENDED
                    }
                }
            }
        }
    }
]
