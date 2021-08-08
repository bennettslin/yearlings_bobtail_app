import {
    JACOB,
    JACOB_MARA,
} from '../../../../src/constants/scene/actors'
import {
    FLIRTING,
    EATING,
    CARRYING,
    EPILOGUE,
} from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: JACOB,
        instance: FLIRTING,
    },
    {
        type: JACOB_MARA,
        instance: EATING,
    },
    {
        type: JACOB,
        instance: CARRYING,
    },
    {
        type: JACOB,
        instance: EPILOGUE,
    },
]
