import {
    MOTHER,
    ESTHER_MOTHER
} from 'constants/scene/actors'
import {
    STOOPING,
    COMFORTING,
    ARGUING
} from 'constants/scene/actors/mother'
import {
    HURT_CONSOLING,
    SOBBING_SHIELDING
} from 'constants/scene/actors/estherMother'
import {
    PRESENT,
    FUTURE,
    EPILOGUE
} from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        type: MOTHER,
        instance: STOOPING
    },
    {
        type: MOTHER,
        instance: COMFORTING
    },
    {
        type: MOTHER,
        instance: ARGUING
    },
    {
        type: ESTHER_MOTHER,
        instance: HURT_CONSOLING
    },
    {
        type: MOTHER,
        instance: PRESENT
    },
    {
        type: MOTHER,
        instance: FUTURE
    },
    {
        type: ESTHER_MOTHER,
        instance: SOBBING_SHIELDING
    },
    {
        type: MOTHER,
        instance: EPILOGUE
    }
]

export default INSTANCES
