import {
    HOWIE,
    HOWIE_WILLY,
    ANA_HOWIE
} from 'constants/scene/actors'
import {
    USHER_WAITING,
    USHER_LOOKING
} from 'constants/scene/actors/howie'
import {
    GANGBANGER,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    ATTIC,
    EPILOGUE
} from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        type: HOWIE,
        instance: ABBEY_ROAD
    },
    {
        type: HOWIE,
        instance: WALGREENS
    },
    {
        type: HOWIE,
        instance: STEAM_TUNNEL
    },
    {
        type: ANA_HOWIE,
        instance: CEMETERY
    },
    {
        type: HOWIE,
        instance: STATION_WAGON
    },
    {
        type: HOWIE,
        instance: ATTIC
    },
    {
        type: HOWIE,
        instance: EPILOGUE
    },
    {
        type: HOWIE_WILLY,
        instance: GANGBANGER
    },
    {
        type: HOWIE,
        instance: USHER_WAITING
    },
    {
        type: HOWIE,
        instance: USHER_LOOKING
    }
]

export default INSTANCES
