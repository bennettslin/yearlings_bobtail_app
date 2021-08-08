import { ACTOR } from '../../../../../../../src/constants/scene'
import {
    BENNETT,
    ANA,
    HOWIE,
    TOMER,
} from '../../../../../../../src/constants/scene/actors'
import {
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    ATTIC,
} from '../../../../../../../src/constants/scene/actors/songs'

export default [
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: ABBEY_ROAD,
                },
                [ANA]: {
                    instance: ABBEY_ROAD,
                },
                [HOWIE]: {
                    instance: ABBEY_ROAD,
                },
                [TOMER]: {
                    instance: ABBEY_ROAD,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: WALGREENS,
                },
                [ANA]: {
                    instance: WALGREENS,
                },
                [HOWIE]: {
                    instance: WALGREENS,
                },
                [TOMER]: {
                    instance: WALGREENS,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: STEAM_TUNNEL,
                },
                [ANA]: {
                    instance: STEAM_TUNNEL,
                },
                [HOWIE]: {
                    instance: STEAM_TUNNEL,
                },
                [TOMER]: {
                    instance: STEAM_TUNNEL,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: CEMETERY,
                },
                [ANA]: {
                    instance: CEMETERY,
                },
                [HOWIE]: {
                    instance: CEMETERY,
                },
                [TOMER]: {
                    instance: CEMETERY,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: STATION_WAGON,
                },
                [ANA]: {
                    instance: STATION_WAGON,
                },
                [HOWIE]: {
                    instance: STATION_WAGON,
                },
                [TOMER]: {
                    instance: STATION_WAGON,
                },
            },
        },
    },
    {
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    instance: ATTIC,
                },
                [HOWIE]: {
                    instance: ATTIC,
                },
            },
        },
    },
]
