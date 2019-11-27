import {
    CHRISTOPHER,
    CHRISTOPHER_BENNETT,
    CHRISTOPHER_BENNETT_WILLY,
    BENNETTS_CHRISTOPHER_LIZ
} from 'constants/scene/actors'
import {
    TANTRUM,
    SOBBING,
    STARING
} from 'constants/scene/actors/christopher'
import { BLISSFUL_GUILTY } from 'constants/scene/actors/christopherBennett'
import { REASSURING_ENCHANTED } from 'constants/scene/actors/christopherBennettWilly'
import { EPILOGUE } from 'constants/scene/actors/songs'

const INSTANCES = [
    {
        type: CHRISTOPHER,
        instance: TANTRUM
    },
    {
        type: CHRISTOPHER,
        instance: SOBBING
    },
    {
        type: CHRISTOPHER_BENNETT_WILLY,
        instance: REASSURING_ENCHANTED
    },
    {
        type: CHRISTOPHER_BENNETT,
        instance: BLISSFUL_GUILTY
    },
    {
        type: CHRISTOPHER,
        instance: STARING
    },
    {
        type: BENNETTS_CHRISTOPHER_LIZ,
        instance: EPILOGUE
    }
]

export default INSTANCES
