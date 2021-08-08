import {
    WADE,
} from '../../../../src/constants/scene/actors'
import {
    CATHOLIC_GUY,
    WATCHING,
} from '../../../../src/constants/scene/actors/wade'
import {
    MINGLING,
    EPILOGUE,
    PROTESTER,
} from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: WADE,
        instance: WATCHING,
    },
    {
        type: WADE,
        instance: MINGLING,
    },
    {
        type: WADE,
        instance: EPILOGUE,
    },
    {
        type: WADE,
        instance: CATHOLIC_GUY,
    },
    {
        type: WADE,
        instance: PROTESTER,
    },
]
