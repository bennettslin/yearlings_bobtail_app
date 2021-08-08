import {
    WILLY,
    CHRISTOPHER_BENNETT_WILLY,
    HOWIE_WILLY,
} from '../../../../src/constants/scene/actors'
import {
    COLLECTING,
    DUCKING,
    CROSSING_GUARD,
} from '../../../../src/constants/scene/actors/willy'
import { REASSURING_ENCHANTED } from '../../../../src/constants/scene/actors/christopherBennettWilly'
import {
    GANGBANGER,
    EPILOGUE,
} from '../../../../src/constants/scene/actors/songs'

export default [
    {
        type: WILLY,
        instance: COLLECTING,
    },
    {
        type: WILLY,
        instance: DUCKING,
    },
    {
        type: HOWIE_WILLY,
        instance: GANGBANGER,
    },
    {
        type: CHRISTOPHER_BENNETT_WILLY,
        instance: REASSURING_ENCHANTED,
    },
    {
        type: WILLY,
        instance: EPILOGUE,
    },
    {
        type: WILLY,
        instance: CROSSING_GUARD,
    },
]
