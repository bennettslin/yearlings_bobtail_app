import {
    YOUNG_BENNETT,
    ANITA_BENNETT
} from '../../../../app/constants/scene/actors'
import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING
} from '../../../../app/constants/scene/actors/youngBennett'
import {
    YOUNG_CHILD,
    EPILOGUE
} from '../../../../app/constants/scene/actors/songs'

export default [
    {
        type: YOUNG_BENNETT,
        instance: PANICKED
    },
    {
        type: YOUNG_BENNETT,
        instance: FLUSTERED
    },
    {
        type: YOUNG_BENNETT,
        instance: BATHING
    },
    {
        type: YOUNG_BENNETT,
        instance: SINGING
    },
    {
        type: ANITA_BENNETT,
        instance: EPILOGUE
    },
    {
        type: YOUNG_BENNETT,
        instance: YOUNG_CHILD
    }
]
