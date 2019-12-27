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
} from 'constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    hands: true,
                    composite: true,
                    instance: ABBEY_ROAD
                },
                [ANA]: {
                    hands: true,
                    composite: true,
                    instance: ABBEY_ROAD
                },
                [HOWIE]: {
                    hands: true,
                    composite: true,
                    instance: ABBEY_ROAD
                },
                [TOMER]: {
                    hands: true,
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
                    hands: true,
                    composite: true,
                    instance: WALGREENS
                },
                [ANA]: {
                    hands: true,
                    composite: true,
                    instance: WALGREENS
                },
                [HOWIE]: {
                    hands: true,
                    composite: true,
                    instance: WALGREENS
                },
                [TOMER]: {
                    hands: true,
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
                    hands: true,
                    composite: true,
                    instance: STEAM_TUNNEL
                },
                [ANA]: {
                    hands: true,
                    composite: true,
                    instance: STEAM_TUNNEL
                },
                [HOWIE]: {
                    hands: true,
                    composite: true,
                    instance: STEAM_TUNNEL
                },
                [TOMER]: {
                    hands: true,
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
                    hands: true,
                    composite: true,
                    instance: CEMETERY
                },
                [ANA]: {
                    hands: true,
                    composite: true,
                    instance: CEMETERY
                },
                [HOWIE]: {
                    hands: true,
                    composite: true,
                    instance: CEMETERY
                },
                [TOMER]: {
                    hands: true,
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
                    hands: true,
                    composite: true,
                    instance: STATION_WAGON
                },
                [ANA]: {
                    hands: true,
                    composite: true,
                    instance: STATION_WAGON
                },
                [HOWIE]: {
                    hands: true,
                    composite: true,
                    instance: STATION_WAGON
                },
                [TOMER]: {
                    hands: true,
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
                    composite: true,
                    instance: ATTIC
                },
                [HOWIE]: {
                    hands: true,
                    composite: true,
                    instance: ATTIC
                }
            }
        }
    }
]
