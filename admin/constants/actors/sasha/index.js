import {
    SASHA,
    BRAD_SASHA,
    SASHA_BENNETT
} from 'constants/scene/actors'
import {
    INDIGNANT,
    POPULAR_GIRL
} from 'constants/scene/actors/sasha'
import { CHARMED_SCHOOLBUS } from 'constants/scene/actors/bradSasha'
import {
    MERMAID,
    COMFORTING_HUMILIATED
} from 'constants/scene/actors/sashaBennett'
import { EPILOGUE } from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        type: BRAD_SASHA,
        instance: CHARMED_SCHOOLBUS
    },
    {
        type: SASHA,
        instance: INDIGNANT
    },
    {
        type: SASHA_BENNETT,
        instance: MERMAID
    },
    {
        type: SASHA,
        instance: POPULAR_GIRL
    },
    {
        type: SASHA_BENNETT,
        instance: COMFORTING_HUMILIATED
    },
    {
        type: SASHA_BENNETT,
        instance: EPILOGUE
    }
]

export default INSTANCES
