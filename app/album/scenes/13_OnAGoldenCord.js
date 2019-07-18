import {
    ACTOR,
    BACKDROP,
    CUTOUT,
    FLAT
} from 'constants/scene'

import {
    LIZ_COUCH_THOUGHT_KEY,
    OAKLAND_HOUSES_KEY,
    OAKLAND_RESIDENTIAL_KEY,
    OAKLAND_COMMERCIAL_KEY,
    OAKLAND_PUBLIC_KEY
} from '../../constants/scene/scenes'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN,
    SEASON_THOUGHT
} from '../../scene/sky/keys'

import {
    YOUNG_BENNETT,
    BENNETT,
    BENNETT_LIZ,
    BENNETT_STEPHANIE,
    ANITA,
    ESTHER,
    WILLY,
    AMY_NESTOR_TOMER,
    STEPHANIE
} from '../../constants/scene/actors'

import { OFFICER } from '../../constants/scene/actors/instances/amyNestorTomer'

import {
    CORD_SIDE,
    CORD_REAR
} from '../../constants/scene/actors/instances/bennett'

import {
    AWKWARD_CONSOLATION
} from '../../constants/scene/actors/instances/bennettLiz'

import {
    HORSING,
    DRYING_TEARS
} from '../../constants/scene/actors/instances/bennettStephanie'

import {
    BENNETT_DEFIANT
} from '../../constants/scene/actors/instances/stephanie'

import { CROSSING_GUARD } from '../../constants/scene/actors/instances/willy'

import { YOUNG_CHILD } from '../../constants/scene/actors/instances/songs'

import {
    OAKLAND_SIDE_BACKDROP,
    LIZ_COUCH_THOUGHT_BACKDROP,
    OAKLAND_FRONT_BACKDROP
} from '../../constants/scene/things/backdrops'

import {
    TWIN_STREETLAMP__FAR,
    TWIN_STREETLAMP__MIDDLE,
    TWIN_STREETLAMP__NEAR
} from '../../constants/scene/things/cutouts'

import {
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT,
    RESIDENTIAL_FAR_LEFT,
    RESIDENTIAL_MIDDLE_LEFT,
    RESIDENTIAL_NEAR_LEFT,
    RESIDENTIAL_FAR_RIGHT,
    RESIDENTIAL_MIDDLE_RIGHT,
    RESIDENTIAL_NEAR_RIGHT,
    COMMERCIAL_CENTRE,
    COMMERCIAL_FAR_LEFT,
    COMMERCIAL_MIDDLE_LEFT,
    COMMERCIAL_NEAR_LEFT,
    COMMERCIAL_FAR_RIGHT,
    COMMERCIAL_MIDDLE_RIGHT,
    COMMERCIAL_NEAR_RIGHT,
    PUBLIC_FAR_LEFT,
    PUBLIC_NEAR_LEFT,
    PUBLIC_FAR_RIGHT,
    PUBLIC_NEAR_RIGHT
} from '../../constants/scene/things/flats'

export default [
    {
        unitIndex: 1,
        description: `Bennett is walking down street.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side angle, cradling bracelet, blank',
                    instance: CORD_SIDE
                }
            },
            [BACKDROP]: {
                [OAKLAND_SIDE_BACKDROP]: true
            },
            [FLAT]: {
                [OAKLAND_HOUSE_LEFT]: true,
                [OAKLAND_HOUSE_RIGHT]: true
            }
        },
        cubes: OAKLAND_HOUSES_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 3,
        description: `Bennett and Sita are at her apartment, breaking up. Sita is a wreck, turning away from Bennett as she returns the gold bracelet to him. He is trying to console her, but in a mechanical way.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'side angle, disingenuously consoling',
                    instance: AWKWARD_CONSOLATION
                }
            },
            [BACKDROP]: {
                [LIZ_COUCH_THOUGHT_BACKDROP]: true
            }
        },
        cubes: LIZ_COUCH_THOUGHT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_THOUGHT
        }
    },
    {
        unitIndex: 4,
        description: `Bennett and Garry are walking along down the street. (Garry is the one wearing the jacket.) Garry is shaking his fist at the twin streetlights. Bennett turns around to face the audience, a look of uncertainty on his face. He is caressing the gold bracelet in his hand.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'back, cradling bracelet, blank',
                    instance: CORD_REAR
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        description: 'back, shaking fist at sky',
                        instance: BENNETT_DEFIANT
                    }
                }
            },
            [BACKDROP]: {
                [OAKLAND_FRONT_BACKDROP]: true
            },
            [CUTOUT]: {
                [TWIN_STREETLAMP__FAR]: true,
                [TWIN_STREETLAMP__MIDDLE]: true,
                [TWIN_STREETLAMP__NEAR]: true
            },
            [FLAT]: {
                [RESIDENTIAL_FAR_LEFT]: true,
                [RESIDENTIAL_FAR_RIGHT]: true,
                [RESIDENTIAL_MIDDLE_LEFT]: true,
                [RESIDENTIAL_MIDDLE_RIGHT]: true,
                [RESIDENTIAL_NEAR_LEFT]: true,
                [RESIDENTIAL_NEAR_RIGHT]: true
            }
        },
        cubes: OAKLAND_RESIDENTIAL_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 7,
        description: `Bennett and Garry are yucking it up, in a panicked and delirious kind of way. Bennett is yodelling, Garry is playing the banjo, saluting a female cop on a horse. The cop waves back.`,
        presences: {
            [ACTOR]: {
                [BENNETT_STEPHANIE]: {
                    description: 'side angle, playful, waving',
                    instance: HORSING
                },
                [AMY_NESTOR_TOMER]: {
                    officer: {
                        description: 'back, facing back, waving',
                        instance: OFFICER
                    }
                }
            },
            [BACKDROP]: {
                [OAKLAND_FRONT_BACKDROP]: true
            },
            [FLAT]: {
                [COMMERCIAL_CENTRE]: true,
                [COMMERCIAL_FAR_LEFT]: true,
                [COMMERCIAL_FAR_RIGHT]: true,
                [COMMERCIAL_MIDDLE_LEFT]: true,
                [COMMERCIAL_MIDDLE_RIGHT]: true,
                [COMMERCIAL_NEAR_LEFT]: true,
                [COMMERCIAL_NEAR_RIGHT]: true
            }
        },
        cubes: OAKLAND_COMMERCIAL_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 10,
        description: `Garry is now facing the audience, his hand over his face, crying, and holding the gold bracelet over a group of kids crossing the street with a crossing guard. Bennett is trying to console him, as he faces forward.`,
        presences: {
            [ACTOR]: {
                [BENNETT_STEPHANIE]: {
                    description: 'back, consoling',
                    instance: DRYING_TEARS
                },
                [ESTHER]: {
                    youngGirl: {
                        description: 'side, walking',
                        instance: YOUNG_CHILD
                    }
                },
                [ANITA]: {
                    youngGirl: {
                        description: 'side, walking',
                        instance: YOUNG_CHILD
                    }
                },
                [YOUNG_BENNETT]: {
                    youngBoy: {
                        description: 'side, turned, looking at Bennetts',
                        instance: YOUNG_CHILD
                    }
                },
                [WILLY]: {
                    crossingGuard: {
                        description: 'front, holding up stop sign',
                        instance: CROSSING_GUARD
                    }
                }
            },
            [FLAT]: {
                [PUBLIC_FAR_LEFT]: true,
                [PUBLIC_FAR_RIGHT]: true,
                [PUBLIC_NEAR_LEFT]: true,
                [PUBLIC_NEAR_RIGHT]: true
            }
        },
        cubes: OAKLAND_PUBLIC_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
