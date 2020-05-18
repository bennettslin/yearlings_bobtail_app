import { ACTOR } from '../../../app/constants/scene'
import { LOGUE_KEY } from '../../../app/constants/scene/scenes'
import { SEASON_STAGE } from '../../../app/scene/sky/keys'
import {
    BENNETTS_CHRISTOPHER_LIZ,
    ANITA_BENNETT,
    ESTHER,
    WILLY,
    MOTHER,
    FATHER,
    SASHA_BENNETT,
    BRAD,
    ANDREW,
    CATHERINE,
    MARA,
    JACOB,
    ANA,
    HOWIE,
    TOMER,
    KHARI,
    MIRIAM,
    TRISTAN,
    NESTOR,
    AMY,
    STEPHANIE,
    WADE
} from '../../../app/constants/scene/actors'
import { EPILOGUE } from '../../../app/constants/scene/actors/songs'

export default [
    {
        description: `Everyone is standing at the end of the play. We are all really just actors.`,
        presences: {
            [ACTOR]: {
                [BENNETTS_CHRISTOPHER_LIZ]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [ANITA_BENNETT]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [ESTHER]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [WILLY]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [MOTHER]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [FATHER]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [HOWIE]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [TOMER]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [SASHA_BENNETT]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [BRAD]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [ANDREW]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [TRISTAN]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [CATHERINE]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [WADE]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [AMY]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [STEPHANIE]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [JACOB]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [MARA]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [ANA]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [MIRIAM]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [KHARI]: {
                    description: 'standing',
                    instance: EPILOGUE
                },
                [NESTOR]: {
                    description: 'standing',
                    instance: EPILOGUE
                }
            }
        },
        cubes: LOGUE_KEY,
        sky: { season: SEASON_STAGE }
    }
]
