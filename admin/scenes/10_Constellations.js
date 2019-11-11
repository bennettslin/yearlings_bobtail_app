import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    ANA,
    HOWIE,
    TOMER
} from 'constants/scene/actors'
import {
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    ATTIC
} from 'constants/scene/actors/instances/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ABBEY_ROAD
                },
                [ANA]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ABBEY_ROAD
                },
                [HOWIE]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ABBEY_ROAD
                },
                [TOMER]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ABBEY_ROAD
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WALGREENS
                },
                [ANA]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WALGREENS
                },
                [HOWIE]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WALGREENS
                },
                [TOMER]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: WALGREENS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: STEAM_TUNNEL
                },
                [ANA]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: STEAM_TUNNEL
                },
                [HOWIE]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: STEAM_TUNNEL
                },
                [TOMER]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: STEAM_TUNNEL
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CEMETERY
                },
                [ANA]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CEMETERY
                },
                [HOWIE]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CEMETERY
                },
                [TOMER]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: CEMETERY
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: STATION_WAGON
                },
                [ANA]: {
                    trunkShape: true,
                    trunkLine: true,
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: STATION_WAGON
                },
                [HOWIE]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: STATION_WAGON
                },
                [TOMER]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: STATION_WAGON
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
                    instance: ATTIC
                },
                [HOWIE]: {
                    hands: true,
                    head: true,
                    face: true,
                    composite: true,
                    instance: ATTIC
                }
            }
        }
    }
]
