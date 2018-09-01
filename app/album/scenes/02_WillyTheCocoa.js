import {
    PRETEEN_BENNETT_ROOM_KEY,
    FREEWAY_KEY,
    PORCH_KEY,
    NOHO_HOUSES_KEY,
    CHANGELING_CAVE_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SUMMER
} from 'scene/sky'

import {
    PRETEEN_BENNETT,
    WILLY,
    MOTHER,
    FATHER,
    CHRISTOPHER,
    HOWIE,
    TOMER
} from 'scene/actorKeys'

import {
    CAUTIOUS,
    ENRAGED,
    FEARFUL,
    ENCHANTED
} from 'scene/actors/preteenBennett'

import {
    COLLECTING,
    DUCKING,
    FIGHTING,
    GREETING
} from 'scene/actors/willy'

import {
    STOOPING,
    COMFORTING
} from 'scene/actors/mother'

import {
    ROARING
} from 'scene/actors/father'

import {
    TANTRUM,
    SOBBING,
    REASSURING
} from 'scene/actors/christopher'

import {
    GANGBANGER
} from 'scene/actors/songs'

module.exports = [
    {
        unitIndex: 1,
        description: ``,
        cubes: FREEWAY_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 2,
        description: `Willy stands beside a shopping cart filled with recyclables. He holds a soda bottle up high as he pours its remaining content onto the ground.`,
        presences: {
            actors: {
                [WILLY]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, holding up a bottle, squinting',
                    instance: COLLECTING
                }
            }
        },
        cubes: FREEWAY_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 5,
        description: `Outside next to the porch, Bennett's mother had been cutting Christopher's hair a moment ago. Christopher has just leapt out of his chair in panic. The cloth that had been draped around him has been tossed in the air. Looking exasperated, Bennett tries to catch him. Having just arrived, Willy is ducked behind the porch, a kind chuckle on his face.`,
        presences: {
            actors: {
                [WILLY]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, ducking behind post, chuckling',
                    instance: DUCKING
                },
                [MOTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'squatting, righting chair, exasperated, concerned',
                    instance: STOOPING
                },
                [CHRISTOPHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'off balance, having a tantrum',
                    instance: TANTRUM
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'stepping off porch, cautious, trying to calm Christopher',
                    instance: CAUTIOUS
                }
            }
        },
        cubes: PORCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 7,
        description: `Inside the house, holding his X-ray specs, Bennett is kicking Christopher, who rolls on the ground, in tears and clenching his stomach. Tattered comics and cut-out letters are on the ground. Bennett's father is rushing in, angry and determined to stop the fight.`,
        presences: {
            actors: {
                [FATHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, running, angry',
                    instance: ROARING
                },
                [CHRISTOPHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'lying on side, in pain, clenching stomach',
                    instance: SOBBING
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, aggressive stance, angry',
                    instance: ENRAGED
                }
            }
        },
        cubes: PRETEEN_BENNETT_ROOM_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 9,
        description: `Willy is in a fight with two gangbangers. One is angry about his drenched pants, while the other is smashing Willy's head with a soda bottle.`,
        presences: {
            actors: {
                [WILLY]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, defending himself, fearful',
                    instance: FIGHTING
                },
                [HOWIE]: {
                    gangbanger: {
                        todo: true,
                        workedHours: 3,
                        description: 'side angle, pointing at shoe, pushing Willy',
                        instance: GANGBANGER
                    }
                },
                [TOMER]: {
                    gangbanger: {
                        todo: true,
                        workedHours: 3,
                        description: 'pulling bottle from cart, about to strike, threatening',
                        instance: GANGBANGER
                    }
                }
            }
        },
        cubes: NOHO_HOUSES_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 12,
        description: `Inside the house, Bennett is in bed, with his mother beside him giving comfort. Outside, the window shows a scene with police hovering over a dead body. Mother is getting up to close the window.`,
        presences: {
            actors: {
                [MOTHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'getting up to close curtain, trying to be reassuring',
                    instance: COMFORTING
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'lying in bed, worried, scared',
                    instance: FEARFUL
                }
            }
        },
        cubes: PRETEEN_BENNETT_ROOM_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 14,
        description: `Bennett is now dreaming. It's night, and he and Willy are holding Christopher's hand, one on each side. Christopher gazes up at Bennett with a knowing, comforting smile. Willy's and Christopher's shadows both reveal them to be trolls. Together, they are leading Bennett to a circle of trolls.`,
        presences: {
            actors: {
                [WILLY]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, merrily greeting trolls',
                    instance: GREETING
                },
                [CHRISTOPHER]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, looking up at Bennett, reassuring',
                    instance: REASSURING
                },
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side angle, wide-eyed, needing reassurance',
                    instance: ENCHANTED
                }
            }
        },
        cubes: CHANGELING_CAVE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    }
]
