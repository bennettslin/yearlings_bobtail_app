import {
    MIRIAM,
    MIRIAM_BENNETT,
    MIRIAM_STEPHANIE,
    MIRIAM_TRISTAN,
} from '../../../../src/constants/scene/actors'
import {
    INFANT_CURIOUS,
    INFANT_NURSING,
    PERFUMING,
    TENNIS,
    REVERSING,
} from '../../../../src/constants/scene/actors/miriam'
import {
    ASLEEP_FEARFUL,
    FENDING_OFF,
    COWGIRL,
    BLOWJOB,
} from '../../../../src/constants/scene/actors/miriamBennett'
import { MISCHIEVOUS_BANJO } from '../../../../src/constants/scene/actors/miriamStephanie'
import { NOOGIE } from '../../../../src/constants/scene/actors/miriamTristan'
import {
    GREETING,
    EPILOGUE,
    GOPI,
} from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: MIRIAM,
        instance: INFANT_CURIOUS,
    },
    {
        type: MIRIAM,
        instance: INFANT_NURSING,
    },
    {
        type: MIRIAM_TRISTAN,
        instance: NOOGIE,
    },
    {
        type: MIRIAM_BENNETT,
        instance: ASLEEP_FEARFUL,
    },
    {
        type: MIRIAM_STEPHANIE,
        instance: MISCHIEVOUS_BANJO,
    },
    {
        type: MIRIAM_BENNETT,
        instance: FENDING_OFF,
    },
    {
        type: MIRIAM,
        instance: PERFUMING,
    },
    {
        type: MIRIAM_BENNETT,
        instance: COWGIRL,
    },
    {
        type: MIRIAM_BENNETT,
        instance: BLOWJOB,
    },
    {
        type: MIRIAM,
        instance: TENNIS,
    },
    {
        type: MIRIAM,
        instance: REVERSING,
    },
    {
        type: MIRIAM_TRISTAN,
        instance: GREETING,
    },
    {
        type: MIRIAM,
        instance: EPILOGUE,
    },
    {
        type: MIRIAM,
        instance: GOPI,
    },
]
