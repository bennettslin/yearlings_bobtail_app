import { NESTOR, AMY_NESTOR_TOMER } from 'constants/scene/actors'
import { JOGGER, INJURED } from 'constants/scene/actors/nestor'
import { OFFICER } from 'constants/scene/actors/amyNestorTomer'
import { GREETING, EPILOGUE } from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        type: NESTOR,
        instance: INJURED
    },
    {
        type: NESTOR,
        instance: GREETING
    },
    {
        type: NESTOR,
        instance: EPILOGUE
    },
    {
        type: NESTOR,
        instance: JOGGER
    },
    {
        type: AMY_NESTOR_TOMER,
        instance: OFFICER
    }
]

export default INSTANCES
