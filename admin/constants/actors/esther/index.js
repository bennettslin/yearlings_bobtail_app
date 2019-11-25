import {
    ESTHER,
    ESTHER_MOTHER
} from 'constants/scene/actors'
import {
    CURIOUS,
    SNICKERING
} from 'constants/scene/actors/esther'
import {
    HURT_CONSOLING,
    SOBBING_SHIELDING
} from 'constants/scene/actors/estherMother'
import {
    YOUNG_CHILD,
    EPILOGUE
} from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        actor: ESTHER,
        instance: CURIOUS
    },
    {
        actor: ESTHER,
        instance: SNICKERING
    },
    {
        actor: ESTHER,
        instance: EPILOGUE
    },
    {
        actor: ESTHER,
        instance: YOUNG_CHILD
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
