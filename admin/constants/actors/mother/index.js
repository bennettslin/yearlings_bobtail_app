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
        actor: MOTHER,
        instance: STOOPING
    },
    {
        actor: MOTHER,
        instance: COMFORTING
    },
    {
        actor: MOTHER,
        instance: ARGUING
    },
    {
        actor: ESTHER_MOTHER,
        instance: HURT_CONSOLING
    },
    {
        actor: MOTHER,
        instance: PRESENT
    },
    {
        actor: MOTHER,
        instance: FUTURE
    },
    {
        actor: ESTHER_MOTHER,
        instance: SOBBING_SHIELDING
    },
    {
        actor: MOTHER,
        instance: EPILOGUE
    }
]

export default INSTANCES
