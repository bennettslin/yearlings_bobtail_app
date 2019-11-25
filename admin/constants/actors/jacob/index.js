import {
    JACOB,
    JACOB_MARA
} from 'constants/scene/actors'
import {
    FLIRTING,
    EATING,
    CARRYING,
    EPILOGUE
} from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        actor: JACOB,
        instance: FLIRTING
    },
    {
        actor: JACOB_MARA,
        instance: EATING
    },
    {
        actor: JACOB,
        instance: CARRYING
    },
    {
        actor: JACOB,
        instance: EPILOGUE
    }
]

export default INSTANCES
