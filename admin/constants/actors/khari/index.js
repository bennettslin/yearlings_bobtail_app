import {
    KHARI,
    KHARI_LIZ
} from 'constants/scene/actors'
import {
    DOUBLE_ALBERT,
    ARRIVED,
    JUDGMENTAL,
    CONCERNED
} from 'constants/scene/actors/khari'
import {
    JOKING_LAUGHING,
    PROTECTIVE_CONCERNED,
    CARESS,
    CARESS_REFLECTION
} from 'constants/scene/actors/khariLiz'

const INSTANCES = [
    {
        actor: KHARI,
        instance: DOUBLE_ALBERT
    },
    {
        actor: KHARI,
        instance: ARRIVED
    },
    {
        actor: KHARI,
        instance: JUDGMENTAL
    },
    {
        actor: KHARI,
        instance: CONCERNED
    },
    {
        actor: KHARI_LIZ,
        instance: JOKING_LAUGHING
    },
    {
        actor: KHARI_LIZ,
        instance: PROTECTIVE_CONCERNED
    },
    {
        actor: KHARI_LIZ,
        instance: CARESS
    },
    {
        actor: KHARI_LIZ,
        instance: CARESS_REFLECTION
    }
]

export default INSTANCES
