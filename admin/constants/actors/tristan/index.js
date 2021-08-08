import {
    TRISTAN,
    MIRIAM_TRISTAN,
} from '../../../../src/constants/scene/actors'
import {
    PRINCIPAL,
    PUNCHING,
} from '../../../../src/constants/scene/actors/tristan'
import { NOOGIE } from '../../../../src/constants/scene/actors/miriamTristan'
import {
    GREETING,
    EPILOGUE,
} from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: TRISTAN,
        instance: PUNCHING,
    },
    {
        type: MIRIAM_TRISTAN,
        instance: NOOGIE,
    },
    {
        type: MIRIAM_TRISTAN,
        instance: GREETING,
    },
    {
        type: TRISTAN,
        instance: EPILOGUE,
    },
    {
        type: TRISTAN,
        instance: PRINCIPAL,
    },
]
