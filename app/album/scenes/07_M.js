import {
    ACTORS,
    CUTOUTS,
    // FIXTURES,
    // FLATS,
    // FURNITURES
} from 'constants/scene'

import {
    BENNETT_COUCH_KEY,
    CLUB_FRONT_KEY,
    BASEMENT_KEY,
    CINEMA_KEY,
    CINEMA_STREET_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SUMMER
} from 'scene/sky'

import {
    BENNETT,
    MARA,
    JACOB,
    ANA,
    HOWIE,
    TOMER,
    MIRIAM,
    STEPHANIE
} from 'scene/actorKeys'

import {
    SQUATTING
} from 'scene/instanceKeys/ana'

import {
    PONDERING,
    COUCH_READING,
    RUBIKS_CUBE,
    DISTRACTED,
    HOPELESSLY_CRUSHED,
    WONDERING_BABY,
    MERRILY_DERANGED
} from 'scene/instanceKeys/bennett'

import {
    USHER_WAITING,
    USHER_LOOKING
} from 'scene/instanceKeys/howie'

import {
    INFANT_CURIOUS,
    INFANT_NURSING
} from 'scene/instanceKeys/miriam'

import { BENNETT_KEYBOARD } from 'scene/instanceKeys/stephanie'

import { SHANE_BUYING } from 'scene/instanceKeys/tomer'

import {
    FLIRTING,
    EATING
} from 'scene/instanceKeys/songs'

import {
    LEONARD_COHEN_POSTER,
    MONITOR_SPEAKER_LEFT,
    MONITOR_SPEAKER_RIGHT,
    WALL_SPEAKER_LEFT,
    WALL_SPEAKER_RIGHT,
    CINEMA_POSTER_LEFT,
    CINEMA_POSTER_RIGHT
} from 'scene/cutoutKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Bennett's room`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'looking at Leonard Cohen poster',
                    instance: PONDERING
                }
            },
            [CUTOUTS]: {
                [LEONARD_COHEN_POSTER]: true
            }
        },
        cubes: BENNETT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 2,
        description: `Bennett is in his room, trying to figure out a Rubik's Cube.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting on couch, figuring out Rubiks Cube',
                    instance: RUBIKS_CUBE
                }
            },
            [CUTOUTS]: {
                [LEONARD_COHEN_POSTER]: true
            }
        },
        cubes: BENNETT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 4,
        description: `Bennett is in his room, doing many things, such that there are many copies of him. One is playing a keyboard and writing stuff down on a notepad, another is reading a book.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting on couch, reading a book',
                    instance: COUCH_READING
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 3,
                        description: 'sitting on floor, back turned, playing keyboard',
                        instance: BENNETT_KEYBOARD
                    }
                }
            },
            [CUTOUTS]: {
                [LEONARD_COHEN_POSTER]: true
            }
        },
        cubes: BENNETT_COUCH_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 5,
        description: `It's after a show, and the Yearlings are breaking down their set. Jacob is flirting with Mara. Bennett is selling a CD to a hipster, but is distracted by the sight of Mara.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'chatting with hipster, paying attention to Mara',
                    instance: DISTRACTED
                },
                [JACOB]: {
                    todo: true,
                    workedHours: 3,
                    description: 'wiping sweat, chatting with Mara, laughing',
                    instance: FLIRTING
                },
                [MARA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'flirting with Jacob',
                    instance: FLIRTING
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'squatting, back turned, putting bass back in case',
                    instance: SQUATTING
                },
                [TOMER]: {
                    shane: {
                        todo: true,
                        workedHours: 3,
                        description: 'chatting with Bennett, gushing about music',
                        instance: SHANE_BUYING
                    }
                }
            },
            [CUTOUTS]: {
                [MONITOR_SPEAKER_LEFT]: true,
                [MONITOR_SPEAKER_RIGHT]: true,
                [WALL_SPEAKER_LEFT]: true,
                [WALL_SPEAKER_RIGHT]: true
            }
        },
        cubes: CLUB_FRONT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 7,
        description: `The Yearlings are taking a break from band practise, eating burgers around a table. Mara is with them, cuddling with Jacob. Bennett is visibly agitated.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, silently eating burger, uncomfortable',
                    instance: EATING
                },
                [JACOB]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, eating burger, holding Mara\'s hand',
                    instance: EATING
                },
                [MARA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, chatting',
                    instance: EATING
                },
                [ANA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, eating fries, laughing',
                    instance: EATING
                }
            }
        },
        cubes: BASEMENT_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 9,
        description: `Bennett is walking along outside. He sees Mara's face everywhere he looks: in clouds, on the sides of buildings, and so forth.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking, sulking with head down',
                    instance: HOPELESSLY_CRUSHED
                },
                [MIRIAM]: {
                    maskedWoman: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, holding baby, looking back at Bennett',
                        instance: INFANT_CURIOUS
                    }
                }
            },
            [CUTOUTS]: {
                [CINEMA_POSTER_LEFT]: true,
                [CINEMA_POSTER_RIGHT]: true
            }
        },
        cubes: CINEMA_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 11,
        description: `Bennett is looking at the woman holding a baby who just passed by.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, looking back at baby',
                    instance: WONDERING_BABY
                },
                [MIRIAM]: {
                    maskedWoman: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, walking away',
                        instance: INFANT_NURSING
                    }
                },
                [HOWIE]: {
                    maskedUsher: {
                        todo: true,
                        workedHours: 3,
                        description: 'checking watch',
                        instance: USHER_WAITING
                    }
                }
            },
            [CUTOUTS]: {
                [CINEMA_POSTER_LEFT]: true,
                [CINEMA_POSTER_RIGHT]: true
            }
        },
        cubes: CINEMA_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 14,
        description: `Bennett suddenly has an epiphany. In sketches in his head, he imagines himself recording all the instruments in a band. Finally, he imagines Mara finding his album in a record store.`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, inspired by sudden thought',
                    instance: MERRILY_DERANGED
                },
                [HOWIE]: {
                    maskedUsher: {
                        todo: true,
                        workedHours: 3,
                        description: 'looking at Bennett',
                        instance: USHER_LOOKING
                    }
                }
            },
            [CUTOUTS]: {
                [CINEMA_POSTER_RIGHT]: true
            }
        },
        cubes: CINEMA_STREET_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    }
]
