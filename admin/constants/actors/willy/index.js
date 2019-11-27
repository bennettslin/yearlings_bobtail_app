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
        type: WILLY,
        instance: COLLECTING
    },
    {
        type: WILLY,
        instance: DUCKING
    },
    {
        type: HOWIE_WILLY,
        instance: GANGBANGER
    },
    {
        type: CHRISTOPHER_BENNETT_WILLY,
        instance: REASSURING_ENCHANTED
    },
    {
        type: WILLY,
        instance: EPILOGUE
    },
    {
        type: WILLY,
        instance: CROSSING_GUARD
    }
]

export default INSTANCES
