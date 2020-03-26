import {
    JACOB,
    JACOB_MARA
} from '../../../../app/constants/scene/actors'
import {
    FLIRTING,
    EATING,
    CARRYING,
    EPILOGUE
} from '../../../../app/constants/scene/actors/songs'

const INSTANCES = [
    {
        type: JACOB,
        instance: FLIRTING
    },
    {
        type: JACOB_MARA,
        instance: EATING
    },
    {
        type: JACOB,
        instance: CARRYING
    },
    {
        type: JACOB,
        instance: EPILOGUE
    }
]

export default INSTANCES
