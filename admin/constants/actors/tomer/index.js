import {
    TOMER,
    AMY_NESTOR_TOMER
} from 'constants/scene/actors'
import {
    SHANE_BUYING,
    SHANE_SPILLING
} from 'constants/scene/actors/tomer'
import { OFFICER } from 'constants/scene/actors/amyNestorTomer'
import {
    GANGBANGER,
    ABBEY_ROAD,
    WALGREENS,
    STEAM_TUNNEL,
    CEMETERY,
    STATION_WAGON,
    EPILOGUE
} from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        actor: TOMER,
        instance: GANGBANGER
    },
    {
        actor: TOMER,
        instance: SHANE_BUYING
    },
    {
        actor: TOMER,
        instance: SHANE_SPILLING
    },
    {
        actor: TOMER,
        instance: ABBEY_ROAD
    },
    {
        actor: TOMER,
        instance: WALGREENS
    },
    {
        actor: TOMER,
        instance: STEAM_TUNNEL
    },
    {
        actor: TOMER,
        instance: CEMETERY
    },
    {
        actor: TOMER,
        instance: STATION_WAGON
    },
    {
        actor: TOMER,
        instance: EPILOGUE
    },
    {
        actor: AMY_NESTOR_TOMER,
        instance: OFFICER
    }
]

export default INSTANCES
