import {
    NESTOR,
    AMY_NESTOR_TOMER
} from 'constants/scene/actors'
import {
    JOGGER,
    INJURED
} from 'constants/scene/actors/nestor'
import { OFFICER } from 'constants/scene/actors/amyNestorTomer'
import {
    GREETING,
    EPILOGUE
} from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        actor: NESTOR,
        instance: JOGGER
    },
    {
        actor: NESTOR,
        instance: INJURED
    },
    {
        actor: NESTOR,
        instance: GREETING
    },
    {
        actor: NESTOR,
        instance: EPILOGUE
    },
    {
        actor: AMY_NESTOR_TOMER,
        instance: OFFICER
    }
]

export default INSTANCES
