import {
    ACTORS,
    // CUTOUTS,
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
    SEASON_AUTUMN
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
    OAKLAND_BACKDROP,
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT,
    RESIDENCE_BACKDROP,
    RESIDENTIAL_LEFT,
    RESIDENTIAL_RIGHT,
    COMMERCIAL_BACKDROP,
    COMMERCIAL_LEFT,
    COMMERCIAL_RIGHT,
    PUBLIC_BACKDROP,
    PUBLIC_LEFT,
    PUBLIC_RIGHT
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
            [FLATS]: {
                [OAKLAND_BACKDROP]: true,
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
            [FURNITURES]: {
                [LIZ_CUSHIONS]: true
            }
        },
        cubes: LIZ_COUCH_THOUGHT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
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
            [FLATS]: {
                [RESIDENCE_BACKDROP]: true,
                [RESIDENTIAL_LEFT]: true,
                [RESIDENTIAL_RIGHT]: true
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
                [COMMERCIAL_BACKDROP]: true,
                [COMMERCIAL_LEFT]: true,
                [COMMERCIAL_RIGHT]: true
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
            [FLATS]: {
                [PUBLIC_BACKDROP]: true,
                [PUBLIC_LEFT]: true,
                [PUBLIC_RIGHT]: true
            }
        },
        cubes: OAKLAND_PUBLIC_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
