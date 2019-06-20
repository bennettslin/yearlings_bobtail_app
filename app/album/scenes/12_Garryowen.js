import {
    ACTORS,
    BACKDROPS,
    CARDBOARDS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    PANELS
} from 'constants/scene'

import {
    LIZ_COUCH_KEY,
    BASEMENT_COUCH_KEY,
    CLUB_FRONT_KEY,
    OAKLAND_VOLKSWAGEN_KEY
} from '../../scene/scenes/keys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from '../../scene/sky/keys'

import {
    BENNETT,
    BENNETT_LIZ,
    ANA,
    LIZ,
    MIRIAM_TRISTAN,
    TRISTAN,
    NESTOR
} from '../../scene/actors/keys'

import {
    CHUCKLING,
    SMIRKING
} from '../../scene/actors/keys/instances/ana'

import {
    DROPPING_MEATS
} from '../../scene/actors/keys/instances/bennett'

import {
    BRUSH_OFF,
    CELIBATE_FREEZING
} from '../../scene/actors/keys/instances/bennettLiz'

import { NOOGIE } from '../../scene/actors/keys/instances/miriamTristan'
import { INJURED } from '../../scene/actors/keys/instances/nestor'
import { PUNCHING } from '../../scene/actors/keys/instances/tristan'

import {
    GREETING,
    LEAVING_CRUMBLED
} from '../../scene/actors/keys/instances/songs'

import {
    OAKLAND_SIDE_BACKDROP
} from '../../scene/things/keys/backdrops'

import { ELLIOTT_SMITH_POSTER } from '../../scene/things/keys/cardboards'

import {
    MONITOR_SPEAKER_LEFT,
    MONITOR_SPEAKER_RIGHT,
    WALL_SPEAKER_LEFT,
    WALL_SPEAKER_RIGHT
} from '../../scene/things/keys/cutouts'

import {
    GUITAR,
    DRUMKIT,
    BENNETT_COUCH_LAMP,
    BENNETT_RECORD_PLAYER,
    NAS_ALBUM
} from '../../scene/things/keys/fixtures'

import {
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT
} from '../../scene/things/keys/flats'

import {
    VOLKSWAGEN,
    BENNETT_COUCH,
    BENNETT_LEFT_ARMREST,
    BENNETT_RIGHT_ARMREST,
    LIZ_COUCH
} from '../../scene/things/keys/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett is putting on his jacket to leave Sita's house. Sita is in her nightgown, begging him to stay.`,
        presences: {
            [ACTORS]: {
                [BENNETT_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    description: 'front, putting on jacket, cold, distant',
                    instance: BRUSH_OFF
                }
            },
            [PANELS]: {
                [LIZ_COUCH]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 4,
        description: `Tristan and another crust punk are smashing a car window. Ana is laughing at them. Bennett is sorting through the meat packages in his jacket.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'front, tripping as meats fall out of pockets',
                    instance: DROPPING_MEATS
                },
                [TRISTAN]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side angle, eagerly aggressive, about to punch car',
                    instance: PUNCHING
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'side, holding paper bottle, laughing',
                    instance: CHUCKLING
                },
                [NESTOR]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'front, clutching at fist, laughing through pain',
                    instance: INJURED
                }
            },
            [BACKDROPS]: {
                [OAKLAND_SIDE_BACKDROP]: true
            },
            [FLATS]: {
                [OAKLAND_HOUSE_LEFT]: true,
                [OAKLAND_HOUSE_RIGHT]: true
            },
            [PANELS]: {
                [VOLKSWAGEN]: true
            }
        },
        cubes: OAKLAND_VOLKSWAGEN_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 7,
        description: `Bennett and Sita are on the couch. Bennett is drunk, with a guitar in his lap, writing a song. Sita is naked and has taken his right hand and placed it on her breast, but he is unresponsive`,
        presences: {
            [ACTORS]: {
                [BENNETT_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    description: 'on couch, ignoring Sita, drunk',
                    instance: CELIBATE_FREEZING
                }
            },
            [CARDBOARDS]: {
                [ELLIOTT_SMITH_POSTER]: true
            },
            [FIXTURES]: {
                [BENNETT_COUCH_LAMP]: true,
                [BENNETT_RECORD_PLAYER]: true,
                [NAS_ALBUM]: true
            },
            [PANELS]: {
                [BENNETT_COUCH]: true,
                [BENNETT_LEFT_ARMREST]: true,
                [BENNETT_RIGHT_ARMREST]: true
            }
        },
        cubes: BASEMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 10,
        description: `Bennett has just finished playing a show. Tristan introduces his kid sister Miriam, who is dressed more preppie, while giving her a noogie. Ana is removing her bass, rolling her eyes, as Bennett is clearly smitten.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side angle, sweaty, giddy',
                    instance: GREETING
                },
                [MIRIAM_TRISTAN]: {
                    todo: true,
                    workedHours: 3.25,
                    compound: 2,
                    description: 'side, greeting Bennett',
                    instance: NOOGIE
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3.75,
                    description: 'front, removing bass, rolling eyes',
                    instance: SMIRKING
                }
            },
            [CUTOUTS]: {
                [MONITOR_SPEAKER_LEFT]: true,
                [MONITOR_SPEAKER_RIGHT]: true,
                [WALL_SPEAKER_LEFT]: true,
                [WALL_SPEAKER_RIGHT]: true
            },
            [FIXTURES]: {
                [GUITAR]: true,
                [DRUMKIT]: true
            }
        },
        cubes: CLUB_FRONT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 14,
        description: `Bennett is leaving Sita. She is crumbled on the floor, desperately begging him to stay.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'standing, cold, looking away',
                    instance: LEAVING_CRUMBLED
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3.75,
                        description: 'crumbled on floor, begging, sobbing',
                        instance: LEAVING_CRUMBLED
                    }
                }
            },
            [PANELS]: {
                [LIZ_COUCH]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
