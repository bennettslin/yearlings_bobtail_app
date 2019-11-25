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
        actor: CHRISTOPHER,
        instance: TANTRUM
    },
    {
        actor: CHRISTOPHER,
        instance: SOBBING
    },
    {
        actor: CHRISTOPHER_BENNETT_WILLY,
        instance: REASSURING_ENCHANTED
    },
    {
        actor: CHRISTOPHER_BENNETT,
        instance: BLISSFUL_GUILTY
    },
    {
        actor: CHRISTOPHER,
        instance: STARING
    },
    {
        actor: BENNETTS_CHRISTOPHER_LIZ,
        instance: EPILOGUE
    }
]

export default INSTANCES
