import {
    ACTORS,
    BACKDROPS,
    CUTOUTS,
    // FIXTURES,
    FLATS,
    FURNITURES
} from 'constants/scene'

import {
    LIZ_COUCH_THOUGHT_KEY,
    OAKLAND_HOUSES_KEY,
    OAKLAND_RESIDENTIAL_KEY,
    OAKLAND_COMMERCIAL_KEY,
    OAKLAND_PUBLIC_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN,
    SEASON_PAST
} from 'scene/sky'

import {
    YOUNG_BENNETT,
    BENNETT,
    ANITA,
    ESTHER,
    WILLY,
    LIZ,
    AMY,
    STEPHANIE
} from 'scene/actorKeys'

import { OFFICER } from 'scene/instanceKeys/amy'

import {
    CORD_SIDE,
    AWKWARD_CONSOLATION,
    CORD_REAR,
    HORSING,
    DRYING_TEARS
} from 'scene/instanceKeys/bennett'

import { RETURNING_CORD } from 'scene/instanceKeys/liz'

import {
    BENNETT_DEFIANT,
    BENNETT_HORSING,
    BENNETT_SORROWFUL
} from 'scene/instanceKeys/stephanie'

import { CROSSING_GUARD } from 'scene/instanceKeys/willy'

import { YOUNG_CHILD } from 'scene/instanceKeys/songs'

import {
    OAKLAND_SIDE_BACKDROP,
    LIZ_COUCH_THOUGHT_BACKDROP,
    OAKLAND_FRONT_BACKDROP
} from 'scene/backdropKeys'

import {
    TWIN_STREETLAMP,
    ARRANGEMENT_TWIN_STREETLAMP_FAR,
    ARRANGEMENT_TWIN_STREETLAMP_MIDDLE,
    ARRANGEMENT_TWIN_STREETLAMP_NEAR
} from 'scene/cutoutKeys'

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
    PUBLIC_CENTRE,
    PUBLIC_FAR_LEFT,
    PUBLIC_MIDDLE_LEFT,
    PUBLIC_NEAR_LEFT,
    PUBLIC_FAR_RIGHT,
    PUBLIC_MIDDLE_RIGHT,
    PUBLIC_NEAR_RIGHT
} from 'scene/flatKeys'

import {
    LIZ_CUSHIONS
} from 'scene/furnitureKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is walking down street.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, cradling bracelet, blank',
                    instance: CORD_SIDE
                }
            },
            [BACKDROPS]: {
                [OAKLAND_SIDE_BACKDROP]: true
            },
            [FLATS]: {
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
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, disingenuously consoling',
                    instance: AWKWARD_CONSOLATION
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side angle, returning bracelet, fighting tears',
                        instance: RETURNING_CORD
                    }
                }
            },
            [BACKDROPS]: {
                [LIZ_COUCH_THOUGHT_BACKDROP]: true
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            }
        },
        cubes: LIZ_COUCH_THOUGHT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_PAST
        }
    },
    {
        unitIndex: 4,
        description: `Bennett and Garry are walking along down the street. (Garry is the one wearing the jacket.) Garry is shaking his fist at the twin streetlights. Bennett turns around to face the audience, a look of uncertainty on his face. He is caressing the gold bracelet in his hand.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back, cradling bracelet, blank',
                    instance: CORD_REAR
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 3,
                        description: 'back, shaking fist at sky',
                        instance: BENNETT_DEFIANT
                    }
                }
            },
            [BACKDROPS]: {
                [OAKLAND_FRONT_BACKDROP]: true
            },
            [CUTOUTS]: {
                [TWIN_STREETLAMP]: [
                    ARRANGEMENT_TWIN_STREETLAMP_FAR,
                    ARRANGEMENT_TWIN_STREETLAMP_MIDDLE,
                    ARRANGEMENT_TWIN_STREETLAMP_NEAR
                ]
            },
            [FLATS]: {
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
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, playful, waving',
                    instance: HORSING
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 3,
                        description: 'back, playful',
                        instance: BENNETT_HORSING
                    }
                },
                [AMY]: {
                    officer: {
                        todo: true,
                        workedHours: 3,
                        description: 'back, facing back, waving',
                        instance: OFFICER
                    }
                }
            },
            [FLATS]: {
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
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back, consoling',
                    instance: DRYING_TEARS
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 3,
                        description: 'back, head in hands, holding bracelet',
                        instance: BENNETT_SORROWFUL
                    }
                },
                [ESTHER]: {
                    youngGirl: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, walking',
                        instance: YOUNG_CHILD
                    }
                },
                [ANITA]: {
                    youngGirl: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, walking',
                        instance: YOUNG_CHILD
                    }
                },
                [YOUNG_BENNETT]: {
                    youngBoy: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, turned, looking at Bennetts',
                        instance: YOUNG_CHILD
                    }
                },
                [WILLY]: {
                    crossingGuard: {
                        todo: true,
                        workedHours: 3,
                        description: 'front, holding up stop sign',
                        instance: CROSSING_GUARD
                    }
                }
            },
            [BACKDROPS]: {
                [OAKLAND_FRONT_BACKDROP]: true
            },
            [FLATS]: {
                [PUBLIC_CENTRE]: true,
                [PUBLIC_FAR_LEFT]: true,
                [PUBLIC_FAR_RIGHT]: true,
                [PUBLIC_MIDDLE_LEFT]: true,
                [PUBLIC_MIDDLE_RIGHT]: true,
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
