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
        type: ESTHER,
        instance: CURIOUS
    },
    {
        type: ESTHER,
        instance: SNICKERING
    },
    {
        type: ESTHER,
        instance: EPILOGUE
    },
    {
        type: ESTHER,
        instance: YOUNG_CHILD
    },
    {
        type: ESTHER_MOTHER,
        instance: HURT_CONSOLING
    },
    {
        type: ESTHER_MOTHER,
        instance: SOBBING_SHIELDING
    }
]

export default INSTANCES
