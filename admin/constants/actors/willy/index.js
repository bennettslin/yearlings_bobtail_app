import {
    WILLY,
    CHRISTOPHER_BENNETT_WILLY
} from 'constants/scene/actors'
import {
    COLLECTING,
    DUCKING,
    CROSSING_GUARD
} from 'constants/scene/actors/willy'
import { REASSURING_ENCHANTED } from 'constants/scene/actors/christopherBennettWilly'

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
        actor: CHRISTOPHER_BENNETT_WILLY,
        instance: REASSURING_ENCHANTED
    },
    {
        actor: WILLY,
        instance: CROSSING_GUARD
    }
]

export default INSTANCES
