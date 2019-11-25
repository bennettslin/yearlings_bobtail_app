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
        actor: YOUNG_BENNETT,
        instance: PANICKED
    },
    {
        actor: YOUNG_BENNETT,
        instance: FLUSTERED
    },
    {
        actor: YOUNG_BENNETT,
        instance: BATHING
    },
    {
        actor: YOUNG_BENNETT,
        instance: SINGING
    },
    {
        actor: ANITA_BENNETT,
        instance: EPILOGUE
    },
    {
        actor: YOUNG_BENNETT,
        instance: YOUNG_CHILD
    }
]

export default INSTANCES
