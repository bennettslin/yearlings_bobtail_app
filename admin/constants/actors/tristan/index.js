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
        actor: TRISTAN,
        instance: PRINCIPAL
    },
    {
        actor: TRISTAN,
        instance: PUNCHING
    },
    {
        actor: MIRIAM_TRISTAN,
        instance: NOOGIE
    },
    {
        actor: MIRIAM_TRISTAN,
        instance: GREETING
    },
    {
        actor: TRISTAN,
        instance: EPILOGUE
    }
]

export default INSTANCES
