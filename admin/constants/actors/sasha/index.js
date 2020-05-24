import {
    SASHA,
    BRAD_SASHA,
    SASHA_BENNETT
} from '../../../../app/constants/scene/actors'
import {
    INDIGNANT,
    POPULAR_GIRL
} from '../../../../app/constants/scene/actors/sasha'
import { CHARMED_SCHOOLBUS } from '../../../../app/constants/scene/actors/bradSasha'
import {
    MERMAID,
    COMFORTING_HUMILIATED
} from '../../../../app/constants/scene/actors/sashaBennett'
import { EPILOGUE } from '../../../../app/constants/scene/actors/songs'

export default [
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
        instance: COMFORTING_HUMILIATED
    },
    {
        type: SASHA_BENNETT,
        instance: EPILOGUE
    },
    {
        type: SASHA_BENNETT,
        instance: MERMAID
    },
    {
        type: SASHA,
        instance: POPULAR_GIRL
    }
]
