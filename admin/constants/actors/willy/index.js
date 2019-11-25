import {
    WILLY,
    CHRISTOPHER_BENNETT_WILLY,
    HOWIE_WILLY
} from 'constants/scene/actors'
import {
    COLLECTING,
    DUCKING,
    CROSSING_GUARD
} from 'constants/scene/actors/willy'
import { REASSURING_ENCHANTED } from 'constants/scene/actors/christopherBennettWilly'
import {
    GANGBANGER,
    EPILOGUE
} from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        actor: WILLY,
        instance: COLLECTING
    },
    {
        actor: WILLY,
        instance: DUCKING
    },
    {
        actor: HOWIE_WILLY,
        instance: GANGBANGER
    },
    {
        actor: CHRISTOPHER_BENNETT_WILLY,
        instance: REASSURING_ENCHANTED
    },
    {
        actor: WILLY,
        instance: EPILOGUE
    },
    {
        actor: WILLY,
        instance: CROSSING_GUARD
    }
]

export default INSTANCES
