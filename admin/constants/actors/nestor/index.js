import { NESTOR, AMY_NESTOR_TOMER } from '../../../../src/constants/scene/actors'
import { JOGGER, INJURED } from '../../../../src/constants/scene/actors/nestor'
import { OFFICER } from '../../../../src/constants/scene/actors/amyNestorTomer'
import { GREETING, EPILOGUE } from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: NESTOR,
        instance: INJURED,
    },
    {
        type: NESTOR,
        instance: GREETING,
    },
    {
        type: NESTOR,
        instance: EPILOGUE,
    },
    {
        type: NESTOR,
        instance: JOGGER,
    },
    {
        type: AMY_NESTOR_TOMER,
        instance: OFFICER,
    },
]
