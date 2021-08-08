import {
    YOUNG_BENNETT,
    ANITA_BENNETT,
} from '../../../../src/constants/scene/actors'
import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING,
} from '../../../../src/constants/scene/actors/youngBennett'
import {
    YOUNG_CHILD,
    EPILOGUE,
} from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: YOUNG_BENNETT,
        instance: PANICKED,
    },
    {
        type: YOUNG_BENNETT,
        instance: FLUSTERED,
    },
    {
        type: YOUNG_BENNETT,
        instance: BATHING,
    },
    {
        type: YOUNG_BENNETT,
        instance: SINGING,
    },
    {
        type: ANITA_BENNETT,
        instance: EPILOGUE,
    },
    {
        type: YOUNG_BENNETT,
        instance: YOUNG_CHILD,
    },
]
