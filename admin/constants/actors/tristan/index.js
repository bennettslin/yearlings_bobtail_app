import {
    TRISTAN,
    MIRIAM_TRISTAN
} from 'constants/scene/actors'
import {
    PRINCIPAL,
    PUNCHING
} from 'constants/scene/actors/tristan'
import { NOOGIE } from 'constants/scene/actors/miriamTristan'

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
    }
]

export default INSTANCES
