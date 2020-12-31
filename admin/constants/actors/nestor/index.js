import { NESTOR, AMY_NESTOR_TOMER } from '../../../../app/constants/scene/actors'
import { JOGGER, INJURED } from '../../../../app/constants/scene/actors/nestor'
import { OFFICER } from '../../../../app/constants/scene/actors/amyNestorTomer'
import { GREETING, EPILOGUE } from '../../../../app/constants/scene/actors/songs'

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
