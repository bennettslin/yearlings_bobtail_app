import {
    HOWIE,
    HOWIE_WILLY,
    ANA_HOWIE,
} from '../../../../src/constants/scene/actors'
import {
    USHER_WAITING,
    USHER_LOOKING,
} from '../../../../src/constants/scene/actors/howie'
import {
    GANGBANGER,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    ATTIC,
    EPILOGUE,
} from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: HOWIE,
        instance: ABBEY_ROAD,
    },
    {
        type: HOWIE,
        instance: WALGREENS,
    },
    {
        type: HOWIE,
        instance: STEAM_TUNNEL,
    },
    {
        type: ANA_HOWIE,
        instance: CEMETERY,
    },
    {
        type: HOWIE,
        instance: STATION_WAGON,
    },
    {
        type: HOWIE,
        instance: ATTIC,
    },
    {
        type: HOWIE,
        instance: EPILOGUE,
    },
    {
        type: HOWIE_WILLY,
        instance: GANGBANGER,
    },
    {
        type: HOWIE,
        instance: USHER_WAITING,
    },
    {
        type: HOWIE,
        instance: USHER_LOOKING,
    },
]
