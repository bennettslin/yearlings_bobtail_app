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

const INSTANCES = [
    {
        actor: BRAD_SASHA,
        instance: CHARMED_SCHOOLBUS
    },
    {
        actor: SASHA,
        instance: INDIGNANT
    },
    {
        actor: SASHA_BENNETT,
        instance: MERMAID
    },
    {
        actor: SASHA,
        instance: POPULAR_GIRL
    },
    {
        actor: SASHA_BENNETT,
        instance: COMFORTING_HUMILIATED
    }
]

export default INSTANCES
