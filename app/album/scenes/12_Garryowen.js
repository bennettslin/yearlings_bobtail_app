import {
    ACTOR,
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    FIXTURE,
    FLAT,
    PANEL
} from 'constants/scene'

import {
    LIZ_COUCH_KEY,
    BASEMENT_COUCH_KEY,
    CLUB_FRONT_KEY,
    OAKLAND_VOLKSWAGEN_KEY
} from '../../constants/scene/scenes'

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
} from '../../constants/scene/actors'

import {
    CHUCKLING,
    SMIRKING
} from '../../constants/scene/actors/instances/ana'

import {
    DROPPING_MEATS
} from '../../constants/scene/actors/instances/bennett'

import {
    BRUSH_OFF,
    CELIBATE_FREEZING
} from '../../constants/scene/actors/instances/bennettLiz'

import { NOOGIE } from '../../constants/scene/actors/instances/miriamTristan'
import { INJURED } from '../../constants/scene/actors/instances/nestor'
import { PUNCHING } from '../../constants/scene/actors/instances/tristan'

import {
    GREETING,
    LEAVING_CRUMBLED
} from '../../constants/scene/actors/instances/songs'

import {
    OAKLAND_SIDE_BACKDROP
} from '../../constants/scene/things/backdrops'

import {
    NAS_ALBUM,
    ELLIOTT_SMITH_POSTER
} from '../../constants/scene/things/cardboards'

import {
    MONITOR_FRONT__LEFT,
    MONITOR_FRONT__RIGHT,
    WALL_SPEAKER_FRONT__LEFT,
    WALL_SPEAKER_FRONT__RIGHT
} from '../../constants/scene/things/cutouts'

import {
    GUITAR,
    DRUMKIT,
    BENNETT_COUCH_LAMP,
    BENNETT_RECORD_PLAYER
} from '../../constants/scene/things/fixtures'

import {
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT
} from '../../constants/scene/things/flats'

import {
    VOLKSWAGEN,
    WIDE_COUCH__BENNETT,
    WIDE_LEFT_ARMREST__BENNETT,
    WIDE_RIGHT_ARMREST__BENNETT,
    LIZ_COUCH
} from '../../constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett is putting on his jacket to leave Sita's house. Sita is in her nightgown, begging him to stay.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    description: 'front, putting on jacket, cold, distant',
                    instance: BRUSH_OFF
                }
            },
            [PANEL]: {
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
            [ACTOR]: {
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
                    workedHours: 4.25,
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
            [BACKDROP]: {
                [OAKLAND_SIDE_BACKDROP]: true
            },
            [FLAT]: {
                [OAKLAND_HOUSE_LEFT]: true,
                [OAKLAND_HOUSE_RIGHT]: true
            },
            [PANEL]: {
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
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    todo: true,
                    workedHours: 4,
                    compound: 2,
                    description: 'on couch, ignoring Sita, drunk',
                    instance: CELIBATE_FREEZING
                }
            },
            [CARDBOARD]: {
                [NAS_ALBUM]: true,
                [ELLIOTT_SMITH_POSTER]: true
            },
            [FIXTURE]: {
                [BENNETT_COUCH_LAMP]: true,
                [BENNETT_RECORD_PLAYER]: true
            },
            [PANEL]: {
                [WIDE_COUCH__BENNETT]: true,
                [WIDE_LEFT_ARMREST__BENNETT]: true,
                [WIDE_RIGHT_ARMREST__BENNETT]: true
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
            [ACTOR]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'side angle, sweaty, giddy',
                    instance: GREETING
                },
                [MIRIAM_TRISTAN]: {
                    todo: true,
                    workedHours: 3.5,
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
            [CUTOUT]: {
                [MONITOR_FRONT__LEFT]: true,
                [MONITOR_FRONT__RIGHT]: true,
                [WALL_SPEAKER_FRONT__LEFT]: true,
                [WALL_SPEAKER_FRONT__RIGHT]: true
            },
            [FIXTURE]: {
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
            [ACTOR]: {
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
            [PANEL]: {
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
