import {
    MIRIAM,
    MIRIAM_BENNETT,
    MIRIAM_STEPHANIE,
    MIRIAM_TRISTAN
} from 'constants/scene/actors'
import {
    INFANT_CURIOUS,
    INFANT_NURSING,
    PERFUMING,
    TENNIS,
    REVERSING
} from 'constants/scene/actors/miriam'
import {
    ASLEEP_FEARFUL,
    FENDING_OFF,
    COWGIRL,
    BLOWJOB
} from 'constants/scene/actors/miriamBennett'
import { MISCHIEVOUS_BANJO } from 'constants/scene/actors/miriamStephanie'
import { NOOGIE } from 'constants/scene/actors/miriamTristan'

const INSTANCES = [
    {
        actor: MIRIAM,
        instance: INFANT_CURIOUS
    },
    {
        actor: MIRIAM,
        instance: INFANT_NURSING
    },
    {
        actor: MIRIAM_TRISTAN,
        instance: NOOGIE
    },
    {
        actor: MIRIAM_BENNETT,
        instance: ASLEEP_FEARFUL
    },
    {
        actor: MIRIAM_STEPHANIE,
        instance: MISCHIEVOUS_BANJO
    },
    {
        actor: MIRIAM_BENNETT,
        instance: FENDING_OFF
    },
    {
        actor: MIRIAM,
        instance: PERFUMING
    },
    {
        actor: MIRIAM_BENNETT,
        instance: COWGIRL
    },
    {
        actor: MIRIAM_BENNETT,
        instance: BLOWJOB
    },
    {
        actor: MIRIAM,
        instance: TENNIS
    },
    {
        actor: MIRIAM,
        instance: REVERSING
    }
]

export default INSTANCES
