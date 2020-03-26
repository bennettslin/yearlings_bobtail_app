import {
    TRISTAN,
    MIRIAM_TRISTAN
} from '../../../../app/constants/scene/actors'
import {
    PRINCIPAL,
    PUNCHING
} from '../../../../app/constants/scene/actors/tristan'
import { NOOGIE } from '../../../../app/constants/scene/actors/miriamTristan'
import {
    GREETING,
    EPILOGUE
} from '../../../../app/constants/scene/actors/songs'

const INSTANCES = [
    {
        type: TRISTAN,
        instance: PUNCHING
    },
    {
        type: MIRIAM_TRISTAN,
        instance: NOOGIE
    },
    {
        type: MIRIAM_TRISTAN,
        instance: GREETING
    },
    {
        type: TRISTAN,
        instance: EPILOGUE
    },
    {
        type: TRISTAN,
        instance: PRINCIPAL
    }
]

export default INSTANCES
