import {
    TRISTAN,
    MIRIAM_TRISTAN
} from 'constants/scene/actors'
import {
    PRINCIPAL,
    PUNCHING
} from 'constants/scene/actors/tristan'
import { NOOGIE } from 'constants/scene/actors/miriamTristan'
import {
    GREETING,
    EPILOGUE
} from 'constants/scene/actors/songs'

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
