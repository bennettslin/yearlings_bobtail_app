import {
    ESTHER,
    ESTHER_MOTHER,
} from '../../../../src/constants/scene/actors'
import {
    CURIOUS,
    SNICKERING,
} from '../../../../src/constants/scene/actors/esther'
import {
    HURT_CONSOLING,
    SOBBING_SHIELDING,
} from '../../../../src/constants/scene/actors/estherMother'
import {
    YOUNG_CHILD,
    EPILOGUE,
} from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: ESTHER,
        instance: CURIOUS,
    },
    {
        type: ESTHER,
        instance: SNICKERING,
    },
    {
        type: ESTHER,
        instance: EPILOGUE,
    },
    {
        type: ESTHER,
        instance: YOUNG_CHILD,
    },
    {
        type: ESTHER_MOTHER,
        instance: HURT_CONSOLING,
    },
    {
        type: ESTHER_MOTHER,
        instance: SOBBING_SHIELDING,
    },
]
