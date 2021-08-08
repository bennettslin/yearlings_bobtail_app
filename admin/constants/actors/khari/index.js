import {
    KHARI,
    KHARI_LIZ,
    KHARI_LIZ_REFLECTION,
} from '../../../../src/constants/scene/actors'
import {
    DOUBLE_ALBERT,
    ARRIVED,
    JUDGMENTAL,
    CONCERNED,
} from '../../../../src/constants/scene/actors/khari'
import {
    JOKING_LAUGHING,
    PROTECTIVE_CONCERNED,
    CARESS,
    CARESS_REFLECTION,
} from '../../../../src/constants/scene/actors/khariLiz'
import { EPILOGUE } from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: KHARI,
        instance: DOUBLE_ALBERT,
    },
    {
        type: KHARI,
        instance: ARRIVED,
    },
    {
        type: KHARI,
        instance: JUDGMENTAL,
    },
    {
        type: KHARI,
        instance: CONCERNED,
    },
    {
        type: KHARI_LIZ,
        instance: JOKING_LAUGHING,
    },
    {
        type: KHARI_LIZ,
        instance: PROTECTIVE_CONCERNED,
    },
    {
        type: KHARI_LIZ,
        instance: CARESS,
    },
    {
        type: KHARI_LIZ_REFLECTION,
        instance: CARESS_REFLECTION,
    },
    {
        type: KHARI,
        instance: EPILOGUE,
    },
]
