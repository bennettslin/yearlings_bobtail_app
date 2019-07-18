import { ACTOR } from 'constants/scene'
import {
    BENNETT,
    ANA,
    ANA_HOWIE,
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
                    todo: true,
                    workedHours: 4.25,
                    instance: ABBEY_ROAD
                },
                [ANA]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: ABBEY_ROAD
                },
                [HOWIE]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: ABBEY_ROAD
                },
                [TOMER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: ABBEY_ROAD
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
                    instance: WALGREENS
                },
                [ANA]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: WALGREENS
                },
                [HOWIE]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: WALGREENS
                },
                [TOMER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: WALGREENS
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
                    instance: STEAM_TUNNEL
                },
                [ANA]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: STEAM_TUNNEL
                },
                [HOWIE]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: STEAM_TUNNEL
                },
                [TOMER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: STEAM_TUNNEL
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
                    instance: CEMETERY
                },
                [ANA_HOWIE]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    instance: CEMETERY
                },
                [TOMER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: CEMETERY
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
                    instance: STATION_WAGON
                },
                [ANA]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: STATION_WAGON
                },
                [HOWIE]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: STATION_WAGON
                },
                [TOMER]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: STATION_WAGON
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
                    instance: ATTIC
                },
                [HOWIE]: {
                    todo: true,
                    workedHours: 4.25,
                    instance: ATTIC
                }
            }
        }
    }
]
