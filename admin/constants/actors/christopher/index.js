import {
    CHRISTOPHER,
    CHRISTOPHER_BENNETT,
    CHRISTOPHER_BENNETT_WILLY,
    BENNETTS_CHRISTOPHER_LIZ,
} from '../../../../app/constants/scene/actors'
import {
    TANTRUM,
    SOBBING,
    STARING,
} from '../../../../app/constants/scene/actors/christopher'
import { BLISSFUL_GUILTY } from '../../../../app/constants/scene/actors/christopherBennett'
import { REASSURING_ENCHANTED } from '../../../../app/constants/scene/actors/christopherBennettWilly'
import { EPILOGUE } from '../../../../app/constants/scene/actors/songs'

export default [
    {
        type: CHRISTOPHER,
        instance: TANTRUM,
    },
    {
        type: CHRISTOPHER,
        instance: SOBBING,
    },
    {
        type: CHRISTOPHER_BENNETT_WILLY,
        instance: REASSURING_ENCHANTED,
    },
    {
        type: CHRISTOPHER_BENNETT,
        instance: BLISSFUL_GUILTY,
    },
    {
        type: CHRISTOPHER,
        instance: STARING,
    },
    {
        type: BENNETTS_CHRISTOPHER_LIZ,
        instance: EPILOGUE,
    },
]
