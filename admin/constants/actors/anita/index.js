import {
    ANITA,
    ANITA_BENNETT
} from '../../../../app/constants/scene/actors'
import {
    EXASPERATED,
    CONCERNED,
    CHEERING
} from '../../../../app/constants/scene/actors/anita'
import {
    YOUNG_CHILD,
    EPILOGUE
} from '../../../../app/constants/scene/actors/songs'

export default [
    {
        type: ANITA,
        instance: EXASPERATED
    },
    {
        type: ANITA,
        instance: CONCERNED
    },
    {
        type: ANITA,
        instance: CHEERING
    },
    {
        type: ANITA_BENNETT,
        instance: EPILOGUE
    },
    {
        type: ANITA,
        instance: YOUNG_CHILD
    }
]
