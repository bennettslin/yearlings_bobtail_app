import { ACTOR } from '../../../../src/constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CUTOUT,
    DOOR,
    FLAT,
    PANEL,
} from '../../../../src/constants/scene/things'
import {
    OAKLAND_COUCH_THOUGHT_KEY,
    OAKLAND_HOUSES_KEY,
    OAKLAND_RESIDENTIAL_KEY,
    OAKLAND_COMMERCIAL_KEY,
    OAKLAND_PUBLIC_KEY,
} from '../../../../src/constants/scene/scenes'
import {
    SEASON_AUTUMN,
    SEASON_THOUGHT,
    TIME_DAWN,
    TIME_NIGHT,
    TIME_TWILIGHT,
} from '../../../../src/constants/scene/sky'
import {
    YOUNG_BENNETT,
    BENNETT,
    BENNETT_LIZ,
    BENNETT_STEPHANIE,
    ANITA,
    ESTHER,
    WILLY,
    AMY_NESTOR_TOMER,
    STEPHANIE,
} from '../../../../src/constants/scene/actors'
import { OFFICER } from '../../../../src/constants/scene/actors/amyNestorTomer'
import {
    CORD_SIDE,
    CORD_REAR,
} from '../../../../src/constants/scene/actors/bennett'
import { AWKWARD_CONSOLATION } from '../../../../src/constants/scene/actors/bennettLiz'
import {
    HORSING,
    DRYING_TEARS,
} from '../../../../src/constants/scene/actors/bennettStephanie'
import { BENNETT_DEFIANT } from '../../../../src/constants/scene/actors/stephanie'
import { CROSSING_GUARD } from '../../../../src/constants/scene/actors/willy'
import { YOUNG_CHILD } from '../../../../src/constants/scene/actors/songs'
import {
    OAKLAND_SIDE__LEVEL,
    OAKLAND_FRONT__HIGH,
    OAKLAND_FRONT__LOW,
    THOUGHT_LARGE__LEFT,
} from '../../../../src/constants/scene/things/backdrops'
import {
    BUBBLE_SMALL__GOLDEN,
    BUBBLE_MEDIUM__GOLDEN,
    BUBBLE_LARGE__GOLDEN,
} from '../../../../src/constants/scene/things/bubbles'
import {
    CAT_FOOD_DISHES,
    CAT_LITTER_BOX,
    HINDU_SHRINE,
    TWIN_STREETLAMP__FAR,
    TWIN_STREETLAMP__MIDDLE,
    TWIN_STREETLAMP__NEAR,
} from '../../../../src/constants/scene/things/cutouts'
import {
    COMMERCIAL_CENTRE,
    COMMERCIAL_FAR_LEFT,
    COMMERCIAL_FAR_RIGHT,
    COMMERCIAL_MIDDLE_LEFT,
    COMMERCIAL_MIDDLE_RIGHT,
    COMMERCIAL_NEAR_LEFT,
    COMMERCIAL_NEAR_RIGHT,
    DISTANT_BUILDINGS,
    DISTANT_HOUSES,
    OAKLAND_FLAG,
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT,
    OAKLAND_SCHOOL,
    PUBLIC_FAR__GOLDEN_CORD,
    PUBLIC_NEAR__GOLDEN_CORD,
    RESIDENTIAL_FAR_LEFT,
    RESIDENTIAL_FAR_RIGHT,
    RESIDENTIAL_MIDDLE_LEFT,
    RESIDENTIAL_MIDDLE_RIGHT,
    RESIDENTIAL_NEAR_LEFT,
    RESIDENTIAL_NEAR_RIGHT,
} from '../../../../src/constants/scene/things/flats'
import { LIZ_COUCH__ROOM } from '../../../../src/constants/scene/things/panels'
import { LIZ_BLINDS_INSIDE } from '../../../../src/constants/scene/things/doors'

export default [
    {
        unitIndex: 1,
        description: `Bennett is walking down street.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side angle, cradling bracelet, blank',
                    instance: CORD_SIDE,
                },
            },
            [BACKDROP]: {
                [OAKLAND_SIDE__LEVEL]: true,
            },
            [FLAT]: {
                [DISTANT_HOUSES]: true,
                [OAKLAND_HOUSE_LEFT]: true,
                [OAKLAND_HOUSE_RIGHT]: true,
            },
        },
        cubes: OAKLAND_HOUSES_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 3,
        description: `Bennett and Sita are at her apartment, breaking up. Sita is a wreck, turning away from Bennett as she returns the gold bracelet to him. He is trying to console her, but in a mechanical way.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'side angle, disingenuously consoling',
                    instance: AWKWARD_CONSOLATION,
                },
            },
            [BACKDROP]: {
                [THOUGHT_LARGE__LEFT]: true,
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__GOLDEN]: true,
                [BUBBLE_MEDIUM__GOLDEN]: true,
                [BUBBLE_LARGE__GOLDEN]: true,
            },
            [CUTOUT]: {
                [CAT_FOOD_DISHES]: true,
                [CAT_LITTER_BOX]: true,
                [HINDU_SHRINE]: true,
            },
            [DOOR]: {
                [LIZ_BLINDS_INSIDE]: true,
            },
            [PANEL]: {
                [LIZ_COUCH__ROOM]: true,
            },
        },
        cubes: OAKLAND_COUCH_THOUGHT_KEY,
        sky: { season: SEASON_THOUGHT },
    },
    {
        unitIndex: 4,
        description: `Bennett and Garry are walking along down the street. (Garry is the one wearing the jacket.) Garry is shaking his fist at the twin streetlights. Bennett turns around to face the audience, a look of uncertainty on his face. He is caressing the gold bracelet in his hand.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'back, cradling bracelet, blank',
                    instance: CORD_REAR,
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        description: 'back, shaking fist at sky',
                        instance: BENNETT_DEFIANT,
                    },
                },
            },
            [BACKDROP]: {
                [OAKLAND_FRONT__HIGH]: true,
            },
            [CUTOUT]: {
                [TWIN_STREETLAMP__FAR]: true,
                [TWIN_STREETLAMP__MIDDLE]: true,
                [TWIN_STREETLAMP__NEAR]: true,
            },
            [FLAT]: {
                [DISTANT_HOUSES]: true,
                [RESIDENTIAL_FAR_LEFT]: true,
                [RESIDENTIAL_FAR_RIGHT]: true,
                [RESIDENTIAL_MIDDLE_LEFT]: true,
                [RESIDENTIAL_MIDDLE_RIGHT]: true,
                [RESIDENTIAL_NEAR_LEFT]: true,
                [RESIDENTIAL_NEAR_RIGHT]: true,
            },
        },
        cubes: OAKLAND_RESIDENTIAL_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 7,
        description: `Bennett and Garry are yucking it up, in a panicked and delirious kind of way. Bennett is yodelling, Garry is playing the banjo, saluting a female cop on a horse. The cop waves back.`,
        presences: {
            [ACTOR]: {
                [BENNETT_STEPHANIE]: {
                    description: 'side angle, playful, waving',
                    instance: HORSING,
                },
                [AMY_NESTOR_TOMER]: {
                    officer: {
                        description: 'back, facing back, waving',
                        instance: OFFICER,
                    },
                },
            },
            [BACKDROP]: {
                [OAKLAND_FRONT__HIGH]: true,
            },
            [FLAT]: {
                [DISTANT_BUILDINGS]: true,
                [COMMERCIAL_CENTRE]: true,
                [COMMERCIAL_FAR_LEFT]: true,
                [COMMERCIAL_FAR_RIGHT]: true,
                [COMMERCIAL_MIDDLE_LEFT]: true,
                [COMMERCIAL_MIDDLE_RIGHT]: true,
                [COMMERCIAL_NEAR_LEFT]: true,
                [COMMERCIAL_NEAR_RIGHT]: true,
            },
        },
        cubes: OAKLAND_COMMERCIAL_KEY,
        sky: { time: TIME_TWILIGHT, season: SEASON_AUTUMN },
    },
    {
        unitIndex: 10,
        description: `Garry is now facing the audience, his hand over his face, crying, and holding the gold bracelet over a group of kids crossing the street with a crossing guard. Bennett is trying to console him, as he faces forward.`,
        presences: {
            [ACTOR]: {
                [BENNETT_STEPHANIE]: {
                    description: 'back, consoling',
                    instance: DRYING_TEARS,
                },
                [ESTHER]: {
                    youngGirl: {
                        description: 'side, walking',
                        instance: YOUNG_CHILD,
                    },
                },
                [ANITA]: {
                    youngGirl: {
                        description: 'side, walking',
                        instance: YOUNG_CHILD,
                    },
                },
                [YOUNG_BENNETT]: {
                    youngBoy: {
                        description: 'side, turned, looking at Bennetts',
                        instance: YOUNG_CHILD,
                    },
                },
                [WILLY]: {
                    crossingGuard: {
                        description: 'front, holding up stop sign',
                        instance: CROSSING_GUARD,
                    },
                },
            },
            [BACKDROP]: {
                [OAKLAND_FRONT__LOW]: true,
            },
            [FLAT]: {
                [PUBLIC_FAR__GOLDEN_CORD]: true,
                [OAKLAND_SCHOOL]: true,
                [PUBLIC_NEAR__GOLDEN_CORD]: true,
                [OAKLAND_FLAG]: true,
            },
        },
        cubes: OAKLAND_PUBLIC_KEY,
        sky: { time: TIME_DAWN, season: SEASON_AUTUMN },
    },
]
