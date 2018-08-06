import {
    BENNETT_APARTMENT_COUCH_KEY,
    SHOW_STAGE_FRONT_KEY,
    REHEARSAL_SPACE_KEY,
    MOVIE_THEATRE_1_KEY,
    MOVIE_THEATRE_2_KEY
} from 'constants/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SUMMER
} from 'constants/sky'

import {
    BENNETT,
    MARA,
    JACOB,
    ANA,
    HOWIE,
    TOMER,
    MIRIAM,
    STEPHANIE
} from 'constants/actorKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett's room`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'looking at Leonard Cohen poster'
            }
        },
        cubes: BENNETT_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 2,
        description: `Bennett is in his room, trying to figure out a Rubik's Cube.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'sitting on couch, figuring out Rubiks Cube'
            }
        },
        cubes: BENNETT_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 4,
        description: `Bennett is in his room, doing many things, such that there are many copies of him. One is playing a keyboard and writing stuff down on a notepad, another is reading a book.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'sitting on couch, reading a book'
            },
            [STEPHANIE]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting on floor, back turned, playing keyboard'
                }
            }
        },
        cubes: BENNETT_APARTMENT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 5,
        description: `It's after a show, and the Yearlings are breaking down their set. Jacob is flirting with Mara. Bennett is selling a CD to a hipster, but is distracted by the sight of Mara.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'chatting with hipster, paying attention to Mara'
            },
            [JACOB]: {
                todo: true,
                workedHours: 3,
                description: 'wiping sweat, chatting with Mara, laughing'
            },
            [MARA]: {
                todo: true,
                workedHours: 3,
                description: 'flirting with Jacob'
            },
            [ANA]: {
                todo: true,
                workedHours: 3,
                description: 'squatting, back turned, putting bass back in case'
            },
            [TOMER]: {
                shane: {
                    todo: true,
                    workedHours: 3,
                    description: 'chatting with Bennett, gushing about music'
                }
            }
        },
        cubes: SHOW_STAGE_FRONT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 7,
        description: `The Yearlings are taking a break from band practise, eating burgers around a table. Mara is with them, cuddling with Jacob. Bennett is visibly agitated.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'sitting, silently eating burger, uncomfortable'
            },
            [JACOB]: {
                todo: true,
                workedHours: 3,
                description: 'sitting, eating burger, holding Mara\'s hand'
            },
            [MARA]: {
                todo: true,
                workedHours: 3,
                description: 'sitting, chatting'
            },
            [ANA]: {
                todo: true,
                workedHours: 3,
                description: 'sitting, eating fries, laughing'
            }
        },
        cubes: REHEARSAL_SPACE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 9,
        description: `Bennett is walking along outside. He sees Mara's face everywhere he looks: in clouds, on the sides of buildings, and so forth.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, walking, sulking with head down'
            },
            [MIRIAM]: {
                maskedWoman: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, holding baby, looking back at Bennett'
                },
            }
        },
        cubes: MOVIE_THEATRE_1_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 11,
        description: 'Bennett is looking at the woman holding a baby who just passed by.',
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, looking back at baby'
            },
            [MIRIAM]: {
                maskedWoman: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking away'
                },
            },
            [HOWIE]: {
                maskedUsher: {
                    todo: true,
                    workedHours: 3,
                    description: 'checking watch'
                }
            }
        },
        cubes: MOVIE_THEATRE_1_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 14,
        description: `Bennett suddenly has an epiphany. In sketches in his head, he imagines himself recording all the instruments in a band. Finally, he imagines Mara finding his album in a record store.`,
        actors: {
            [BENNETT]: {
                todo: true,
                workedHours: 3,
                description: 'side, inspired by sudden thought'
            },
            [HOWIE]: {
                maskedUsher: {
                    todo: true,
                    workedHours: 3,
                    description: 'looking at Bennett'
                }
            }
        },
        cubes: MOVIE_THEATRE_2_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    }
]
