import { ACTOR } from '../../constants/scene'
import {
    BACKDROP,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    PANEL
} from '../../constants/scene/things'
import {
    LIZ_COUCH_KEY,
    BASEMENT_COUCH_KEY,
    CLUB_FRONT_KEY,
    OAKLAND_VOLKSWAGEN_KEY
} from '../../constants/scene/scenes'
import {
    TIME_NIGHT,
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
} from '../../constants/scene/actors/ana'
import { DROPPING_MEATS } from '../../constants/scene/actors/bennett'
import {
    BRUSH_OFF,
    CELIBATE_FREEZING
} from '../../constants/scene/actors/bennettLiz'
import { NOOGIE } from '../../constants/scene/actors/miriamTristan'
import { INJURED } from '../../constants/scene/actors/nestor'
import { PUNCHING } from '../../constants/scene/actors/tristan'
import {
    GREETING,
    LEAVING_CRUMBLED
} from '../../constants/scene/actors/songs'
import {
    OAKLAND_SIDE,
    DISTANT_HOUSES_BACKDROP
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
    LIZ_BLINDS_INSIDE,
    LIZ_DOOR,
    LIZ_DOOR_OPEN,
    BASEMENT_DOOR_SIDE,
    LIZ_GATE_INSIDE
} from '../../constants/scene/things/doors'
import {
    ELECTRIC_GUITAR,
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
    WIDE_COUCH_BENNETT,
    WIDE_ARMREST_BENNETT__LEFT,
    WIDE_ARMREST_BENNETT__RIGHT,
    LIZ_COUCH__ROOM
} from '../../constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett is putting on his jacket to leave Sita's house. Sita is in her nightgown, begging him to stay.`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'front, putting on jacket, cold, distant',
                    instance: BRUSH_OFF
                }
            },
            [BACKDROP]: {
                [DISTANT_HOUSES_BACKDROP]: true,
                [OAKLAND_SIDE]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_INSIDE]: true,
                [LIZ_DOOR]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH__ROOM]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 4,
        description: `Tristan and another crust punk are smashing a car window. Ana is laughing at them. Bennett is sorting through the meat packages in his jacket.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'front, tripping as meats fall out of pockets',
                    instance: DROPPING_MEATS
                },
                [TRISTAN]: {
                    description: 'side angle, eagerly aggressive, about to punch car',
                    instance: PUNCHING
                },
                [ANA]: {
                    description: 'side, holding paper bottle, laughing',
                    instance: CHUCKLING
                },
                [NESTOR]: {
                    description: 'front, clutching at fist, laughing through pain',
                    instance: INJURED
                }
            },
            [BACKDROP]: {
                [DISTANT_HOUSES_BACKDROP]: true,
                [OAKLAND_SIDE]: true
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
        sky: { time: TIME_NIGHT, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 7,
        description: `Bennett and Sita are on the couch. Bennett is drunk, with a guitar in his lap, writing a song. Sita is naked and has taken his right hand and placed it on her breast, but he is unresponsive`,
        presences: {
            [ACTOR]: {
                [BENNETT_LIZ]: {
                    description: 'on couch, ignoring Sita, drunk',
                    instance: CELIBATE_FREEZING
                }
            },
            [CARDBOARD]: {
                [NAS_ALBUM]: true,
                [ELLIOTT_SMITH_POSTER]: true
            },
            [DOOR]: {
                [BASEMENT_DOOR_SIDE]: true
            },
            [FIXTURE]: {
                [BENNETT_COUCH_LAMP]: true,
                [BENNETT_RECORD_PLAYER]: true
            },
            [PANEL]: {
                [WIDE_COUCH_BENNETT]: true,
                [WIDE_ARMREST_BENNETT__LEFT]: true,
                [WIDE_ARMREST_BENNETT__RIGHT]: true
            }
        },
        cubes: BASEMENT_COUCH_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 10,
        description: `Bennett has just finished playing a show. Tristan introduces his kid sister Miriam, who is dressed more preppie, while giving her a noogie. Ana is removing her bass, rolling her eyes, as Bennett is clearly smitten.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side angle, sweaty, giddy',
                    instance: GREETING
                },
                [MIRIAM_TRISTAN]: {
                    description: 'side, greeting Bennett',
                    instance: NOOGIE
                },
                [ANA]: {
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
                [ELECTRIC_GUITAR]: true,
                [DRUMKIT]: true
            }
        },
        cubes: CLUB_FRONT_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_AUTUMN }
    },
    {
        unitIndex: 14,
        description: `Bennett is leaving Sita. She is crumbled on the floor, desperately begging him to stay.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'standing, cold, looking away',
                    instance: LEAVING_CRUMBLED
                },
                [LIZ]: {
                    sita: {
                        description: 'crumbled on floor, begging, sobbing',
                        instance: LEAVING_CRUMBLED
                    }
                }
            },
            [BACKDROP]: {
                [DISTANT_HOUSES_BACKDROP]: true,
                [OAKLAND_SIDE]: true
            },
            [DOOR]: {
                [LIZ_BLINDS_INSIDE]: true,
                [LIZ_DOOR_OPEN]: true,
                [LIZ_GATE_INSIDE]: true
            },
            [PANEL]: {
                [LIZ_COUCH__ROOM]: true
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_AUTUMN }
    }
]
