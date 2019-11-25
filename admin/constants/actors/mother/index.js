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
        actor: ESTHER_MOTHER,
        instance: SOBBING_SHIELDING
    }
]

export default INSTANCES
