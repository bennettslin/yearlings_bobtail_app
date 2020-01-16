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
                    composite: true,
                    instance: ABBEY_ROAD
                },
                [ANA]: {
                    composite: true,
                    instance: ABBEY_ROAD
                },
                [HOWIE]: {
                    composite: true,
                    instance: ABBEY_ROAD
                },
                [TOMER]: {
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
                    composite: true,
                    instance: WALGREENS
                },
                [ANA]: {
                    composite: true,
                    instance: WALGREENS
                },
                [HOWIE]: {
                    composite: true,
                    instance: WALGREENS
                },
                [TOMER]: {
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
                    composite: true,
                    instance: STEAM_TUNNEL
                },
                [ANA]: {
                    composite: true,
                    instance: STEAM_TUNNEL
                },
                [HOWIE]: {
                    composite: true,
                    instance: STEAM_TUNNEL
                },
                [TOMER]: {
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
                    composite: true,
                    instance: CEMETERY
                },
                [ANA]: {
                    composite: true,
                    instance: CEMETERY
                },
                [HOWIE]: {
                    composite: true,
                    instance: CEMETERY
                },
                [TOMER]: {
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
                    composite: true,
                    instance: STATION_WAGON
                },
                [ANA]: {
                    composite: true,
                    instance: STATION_WAGON
                },
                [HOWIE]: {
                    composite: true,
                    instance: STATION_WAGON
                },
                [TOMER]: {
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
                    composite: true,
                    instance: ATTIC
                },
                [HOWIE]: {
                    composite: true,
                    instance: ATTIC
                }
            }
        }
    }
]
