import {
    FATHER,
    BENNETT_FATHER,
} from '../../../../src/constants/scene/actors'
import {
    ROARING,
    ACCUSATORY,
    REELING,
} from '../../../../src/constants/scene/actors/father'
import {
    PAST,
    PRESENT,
    FUTURE,
    EPILOGUE,
} from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: FATHER,
        instance: ROARING,
    },
    {
        type: FATHER,
        instance: ACCUSATORY,
    },
    {
        type: FATHER,
        instance: PAST,
    },
    {
        type: BENNETT_FATHER,
        instance: PRESENT,
    },
    {
        type: FATHER,
        instance: FUTURE,
    },
    {
        type: FATHER,
        instance: REELING,
    },
    {
        type: FATHER,
        instance: EPILOGUE,
    },
]
