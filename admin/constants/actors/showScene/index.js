import {
    ANA,
    BENNETT,
    MIRIAM_TRISTAN
} from '../../../../app/constants/scene/actors'
import { SMIRKING } from '../../../../app/constants/scene/actors/ana'
import { NOOGIE } from '../../../../app/constants/scene/actors/miriamTristan'
import { GREETING } from '../../../../app/constants/scene/actors/songs'

export default [
    {
        type: ANA,
        instance: SMIRKING
    },
    {
        type: BENNETT,
        instance: GREETING
    },
    {
        type: MIRIAM_TRISTAN,
        instance: NOOGIE
    }
]
