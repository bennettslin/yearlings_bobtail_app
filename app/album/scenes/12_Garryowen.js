import {
    SITA_APARTMENT_COUCH_KEY,
    BENNETT_BASEMENT_KEY,
    SHOW_STAGE_FRONT_KEY,
    VOLKSWAGEN_KEY
} from 'constants/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN
} from 'constants/sky'

import {
    BENNETT,
    ANA,
    LIZ,
    MIRIAM,
    TRISTAN,
    NESTOR
} from 'constants/actorKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett is putting on his jacket to leave Sita's house. Sita is in her nightgown, begging him to stay.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'front, putting on jacket, cold, distant'
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, shivering, pleading'
                }
            }
        },
        cubes: SITA_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 4,
        description: `Tristan and another crust punk are smashing a car window. Ana is laughing at them. Bennett is sorting through the meat packages in his jacket.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'front, tripping as meats fall out of pockets'
            },
            [TRISTAN]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, eagerly aggressive, about to punch car'
            },
            [ANA]: {
                todo: true,
                workedHours: 3,
                description: 'side, holding paper bottle, laughing'
            },
            [NESTOR]: {
                todo: true,
                workedHours: 3,
                description: 'front, clutching at fist, laughing through pain'
            }
        },
        cubes: VOLKSWAGEN_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 7,
        description: `Bennett and Sita are on the couch. Bennett is drunk, with a guitar in his lap, writing a song. Sita is naked and has taken his right hand and placed it on her breast, but he is unresponsive`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'on couch, ignoring Sita, drunk'
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, naked, making Bennett touch her breast'
                }
            }
        },
        cubes: BENNETT_BASEMENT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 10,
        description: `Bennett has just finished playing a show. Tristan introduces his kid sister Miriam, who is dressed more preppie, while giving her a noogie. Ana is removing her bass, rolling her eyes, as Bennett is clearly smitten.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side angle, sweaty, giddy'
            },
            [MIRIAM]: {
                todo: true,
                workedHours: 2.5,
                description: 'side, greeting Bennett'
            },
            [TRISTAN]: {
                todo: true,
                workedHours: 3,
                description: 'front, playfully giving Miriam a noogie'
            },
            [ANA]: {
                todo: true,
                workedHours: 3,
                description: 'front, removing bass, rolling eyes'
            }
        },
        cubes: SHOW_STAGE_FRONT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    },
    {
        unitIndex: 14,
        description: `Bennett is leaving Sita. She is crumbled on the floor, desperately begging him to stay.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'standing, cold, looking away'
            },
            [LIZ]: {
                sita: {
                    todo: true,
                    workedHours: 3,
                    description: 'crumbled on floor, begging, sobbing'
                }
            }
        },
        cubes: SITA_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_AUTUMN
        }
    }
]
