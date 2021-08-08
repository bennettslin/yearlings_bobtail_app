import {
    MOTHER,
    ESTHER_MOTHER,
} from '../../../../src/constants/scene/actors'
import {
    STOOPING,
    COMFORTING,
    ARGUING,
} from '../../../../src/constants/scene/actors/mother'
import {
    HURT_CONSOLING,
    SOBBING_SHIELDING,
} from '../../../../src/constants/scene/actors/estherMother'
import {
    PRESENT,
    FUTURE,
    EPILOGUE,
} from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: MOTHER,
        instance: STOOPING,
    },
    {
        type: MOTHER,
        instance: COMFORTING,
    },
    {
        type: MOTHER,
        instance: ARGUING,
    },
    {
        type: ESTHER_MOTHER,
        instance: HURT_CONSOLING,
    },
    {
        type: MOTHER,
        instance: PRESENT,
    },
    {
        type: MOTHER,
        instance: FUTURE,
    },
    {
        type: ESTHER_MOTHER,
        instance: SOBBING_SHIELDING,
    },
    {
        type: MOTHER,
        instance: EPILOGUE,
    },
]
