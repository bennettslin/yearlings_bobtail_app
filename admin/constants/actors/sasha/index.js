import {
    SASHA,
    BRAD_SASHA,
    SASHA_BENNETT,
} from '../../../../src/constants/scene/actors'
import {
    INDIGNANT,
    POPULAR_GIRL,
} from '../../../../src/constants/scene/actors/sasha'
import { CHARMED_SCHOOLBUS } from '../../../../src/constants/scene/actors/bradSasha'
import {
    MERMAID,
    COMFORTING_HUMILIATED,
} from '../../../../src/constants/scene/actors/sashaBennett'
import { EPILOGUE } from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: BRAD_SASHA,
        instance: CHARMED_SCHOOLBUS,
    },
    {
        type: SASHA,
        instance: INDIGNANT,
    },
    {
        type: SASHA_BENNETT,
        instance: COMFORTING_HUMILIATED,
    },
    {
        type: SASHA_BENNETT,
        instance: EPILOGUE,
    },
    {
        type: SASHA_BENNETT,
        instance: MERMAID,
    },
    {
        type: SASHA,
        instance: POPULAR_GIRL,
    },
]
