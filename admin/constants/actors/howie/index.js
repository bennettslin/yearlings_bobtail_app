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
        actor: HOWIE_WILLY,
        instance: GANGBANGER
    },
    {
        actor: HOWIE,
        instance: USHER_WAITING
    },
    {
        actor: HOWIE,
        instance: USHER_LOOKING
    },
    {
        actor: HOWIE,
        instance: ABBEY_ROAD
    },
    {
        actor: HOWIE,
        instance: WALGREENS
    },
    {
        actor: HOWIE,
        instance: STEAM_TUNNEL
    },
    {
        actor: ANA_HOWIE,
        instance: CEMETERY
    },
    {
        actor: HOWIE,
        instance: STATION_WAGON
    },
    {
        actor: HOWIE,
        instance: ATTIC
    },
    {
        actor: HOWIE,
        instance: EPILOGUE
    }
]

export default INSTANCES
