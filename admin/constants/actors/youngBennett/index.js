import {
    YOUNG_BENNETT,
    ANITA_BENNETT
} from 'constants/scene/actors'
import {
    PANICKED,
    FLUSTERED,
    BATHING,
    SINGING
} from 'constants/scene/actors/youngBennett'
import {
    YOUNG_CHILD,
    EPILOGUE
} from 'constants/scene/actors/songs'

const INSTANCES = [
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

export default INSTANCES
