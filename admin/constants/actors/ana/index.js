import {
    ANA,
    ANA_HOWIE
} from 'constants/scene/actors'
import {
    SQUATTING,
    CHUCKLING,
    SMIRKING
} from 'constants/scene/actors/ana'
import {
    EATING,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    PERFORMING,
    WAITING,
    EPILOGUE
} from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        type: ANA,
        instance: SQUATTING
    },
    {
        type: ANA,
        instance: EATING
    },
    {
        type: ANA,
        instance: ABBEY_ROAD
    },
    {
        type: ANA,
        instance: WALGREENS
    },
    {
        type: ANA,
        instance: STEAM_TUNNEL
    },
    {
        type: ANA_HOWIE,
        instance: CEMETERY
    },
    {
        type: ANA,
        instance: STATION_WAGON
    },
    {
        type: ANA,
        instance: PERFORMING
    },
    {
        type: ANA,
        instance: WAITING
    },
    {
        type: ANA,
        instance: CHUCKLING
    },
    {
        type: ANA,
        instance: SMIRKING
    },
    {
        type: ANA,
        instance: EPILOGUE
    }
]

export default INSTANCES
