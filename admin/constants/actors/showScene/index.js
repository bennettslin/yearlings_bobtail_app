import {
    ANA,
    BENNETT,
    MIRIAM_TRISTAN,
} from '../../../../src/constants/scene/actors'
import { SMIRKING } from '../../../../src/constants/scene/actors/ana'
import { NOOGIE } from '../../../../src/constants/scene/actors/miriamTristan'
import { GREETING } from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: ANA,
        instance: SMIRKING,
    },
    {
        type: BENNETT,
        instance: GREETING,
    },
    {
        type: MIRIAM_TRISTAN,
        instance: NOOGIE,
    },
]
