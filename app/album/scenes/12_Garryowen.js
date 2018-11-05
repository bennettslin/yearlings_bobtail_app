import {
    ACTORS,
    BACKDROPS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    DOORS,
    FURNITURES,
    PANELS
} from 'constants/scene'

import {
    LIZ_COUCH_KEY,
    BASEMENT_BED_KEY,
    CLUB_FRONT_KEY,
    OAKLAND_VOLKSWAGEN_KEY
} from '../../scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from '../../scene/sky'

import {
    BENNETT,
    ANA,
    LIZ,
    MIRIAM,
    TRISTAN,
    NESTOR
} from '../../scene/actorKeys'

import {
    CHUCKLING,
    SMIRKING
} from '../../scene/instanceKeys/ana'

import {
    BRUSHING_OFF,
    DROPPING_MEATS,
    DRUNK_CELIBATE
} from '../../scene/instanceKeys/bennett'

import {
    BRUSHED_OFF,
    FREEZING_NAKED
} from '../../scene/instanceKeys/liz'

import { INJURED } from '../../scene/instanceKeys/nestor'

import { PUNCHING } from '../../scene/instanceKeys/tristan'

import {
    GREETING,
    LEAVING_CRUMBLED,
    NOOGIE
} from '../../scene/instanceKeys/songs'

import {
    OAKLAND_SIDE_BACKDROP
} from '../../scene/backdropKeys'

import {
    ELLIOTT_SMITH_POSTER,
    MONITOR_SPEAKER_LEFT,
    MONITOR_SPEAKER_RIGHT,
    WALL_SPEAKER_LEFT,
    WALL_SPEAKER_RIGHT
} from '../../scene/cutoutKeys'

import {
    GUITAR,
    DRUMKIT,
    BENNETT_RECORD_PLAYER,
    ARRANGEMENT_BENNETT_RECORD_PLAYER_BASEMENT,
    NAS_ALBUM
} from '../../scene/fixtureKeys'

import {
    OAKLAND_HOUSE_LEFT,
    OAKLAND_HOUSE_RIGHT
} from '../../scene/flatKeys'

import {
    LIZ_BLINDS,
    ARRANGEMENT_LIZ_BLINDS,
    LIZ_DOOR,
    LIZ_GATE_INSIDE,
    BASEMENT_DOOR
} from '../../scene/doorKeys'

import {
    LIZ_CUSHIONS,
    ARRANGEMENT_LIZ_CUSHIONS,
    BENNETT_MATTRESS,
    BENNETT_PILLOWS
} from '../../scene/furnitureKeys'

import {
    VOLKSWAGEN
} from '../../scene/panelKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is putting on his jacket to leave Sita's house. Sita is in her nightgown, begging him to stay.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, putting on jacket, cold, distant',
                    instance: BRUSHING_OFF
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, shivering, pleading',
                        instance: BRUSHED_OFF
                    }
                }
            },
            [DOORS]: {
                [LIZ_BLINDS]: ARRANGEMENT_LIZ_BLINDS,
                [LIZ_GATE_INSIDE]: true,
                [LIZ_DOOR]: true
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: ARRANGEMENT_LIZ_CUSHIONS
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
                    workedHours: 3,
                    description: 'front, tripping as meats fall out of pockets',
                    instance: DROPPING_MEATS
                },
                [TRISTAN]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, eagerly aggressive, about to punch car',
                    instance: PUNCHING
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, holding paper bottle, laughing',
                    instance: CHUCKLING
                },
                [NESTOR]: {
                    todo: true,
                    workedHours: 3,
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
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'on couch, ignoring Sita, drunk',
                    instance: DRUNK_CELIBATE
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, naked, making Bennett touch her breast',
                        instance: FREEZING_NAKED
                    }
                }
            },
            [CUTOUTS]: {
                [ELLIOTT_SMITH_POSTER]: true,
            },
            [DOORS]: {
                [BASEMENT_DOOR]: true
            },
            [FIXTURES]: {
                [BENNETT_RECORD_PLAYER]: ARRANGEMENT_BENNETT_RECORD_PLAYER_BASEMENT,
                [NAS_ALBUM]: true
            },
            [FURNITURES]: {
                [BENNETT_MATTRESS]: true,
                [BENNETT_PILLOWS]: true
            }
        },
        cubes: BASEMENT_BED_KEY,
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
                    workedHours: 3,
                    description: 'side angle, sweaty, giddy',
                    instance: GREETING
                },
                [MIRIAM]: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, greeting Bennett',
                    instance: NOOGIE
                },
                [TRISTAN]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, playfully giving Miriam a noogie',
                    instance: NOOGIE
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
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
                    workedHours: 3,
                    description: 'standing, cold, looking away',
                    instance: LEAVING_CRUMBLED
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'crumbled on floor, begging, sobbing',
                        instance: LEAVING_CRUMBLED
                    }
                }
            },
            [DOORS]: {
                [LIZ_BLINDS]: ARRANGEMENT_LIZ_BLINDS,
                [LIZ_GATE_INSIDE]: true,
                [LIZ_DOOR]: true
            },
            [FURNITURES]: {
                [LIZ_CUSHIONS]: ARRANGEMENT_LIZ_CUSHIONS
            }
        },
        cubes: LIZ_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
