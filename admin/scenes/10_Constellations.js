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
                    headPlacement: true,
                    finalSvg: true,
                    instance: ABBEY_ROAD
                },
                [ANA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: ABBEY_ROAD
                },
                [HOWIE]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: ABBEY_ROAD
                },
                [TOMER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: ABBEY_ROAD
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: WALGREENS
                },
                [ANA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: WALGREENS
                },
                [HOWIE]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: WALGREENS
                },
                [TOMER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: WALGREENS
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: STEAM_TUNNEL
                },
                [ANA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: STEAM_TUNNEL
                },
                [HOWIE]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: STEAM_TUNNEL
                },
                [TOMER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: STEAM_TUNNEL
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: CEMETERY
                },
                [ANA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: CEMETERY
                },
                [HOWIE]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: CEMETERY
                },
                [TOMER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: CEMETERY
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: STATION_WAGON
                },
                [ANA]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: STATION_WAGON
                },
                [HOWIE]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: STATION_WAGON
                },
                [TOMER]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: STATION_WAGON
                }
            }
        }
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: ATTIC
                },
                [HOWIE]: {
                    headPlacement: true,
                    finalSvg: true,
                    instance: ATTIC
                }
            }
        }
    }
]
