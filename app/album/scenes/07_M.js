import {
    ACTORS,
    BACKDROPS,
    BUBBLES,
    CARDBOARDS,
    CUTOUTS,
    FIXTURES,
    FLATS,
    PANELS
} from 'constants/scene'

import {
    BENNETT_COUCH_KEY,
    CLUB_FRONT_KEY,
    BASEMENT_KEY,
    CINEMA_KEY,
    CINEMA_STREET_KEY
} from '../../scene/scenes/keys'

import {
    TIME_ANYTIME,
    SEASON_SUMMER
} from '../../scene/sky/keys'

import {
    BENNETT,
    MARA,
    JACOB,
    JACOB_MARA,
    ANA,
    HOWIE,
    TOMER,
    MIRIAM,
    STEPHANIE
} from '../../scene/actors/keys'

import {
    SQUATTING
} from '../../scene/actors/keys/instances/ana'

import {
    PONDERING,
    COUCH_READING,
    RUBIKS_CUBE,
    DISTRACTED,
    HOPELESSLY_CRUSHED,
    WONDERING_BABY,
    MERRILY_DERANGED
} from '../../scene/actors/keys/instances/bennett'

import {
    USHER_WAITING,
    USHER_LOOKING
} from '../../scene/actors/keys/instances/howie'

import {
    INFANT_CURIOUS,
    INFANT_NURSING
} from '../../scene/actors/keys/instances/miriam'

import { BENNETT_KEYBOARD } from '../../scene/actors/keys/instances/stephanie'

import { SHANE_BUYING } from '../../scene/actors/keys/instances/tomer'

import {
    FLIRTING,
    EATING
} from '../../scene/actors/keys/instances/songs'

import {
    OAKLAND_FRONT_BACKDROP,
    WEST_BERKELEY_BACKDROP
} from '../../scene/things/keys/backdrops'

import { CINEMA_THOUGHTS } from '../../scene/things/keys/bubbles'

import {
    TELEVISION_ALBUM,
    LEONARD_COHEN_POSTER,
    PROGRESS_CHART_EARLY,
    PROGRESS_CHART_LATE,
    CINEMA_POSTER_LEFT,
    CINEMA_POSTER_RIGHT,
    CINEMA_POSTER_RIGHT_NORMAL
} from '../../scene/things/keys/cardboards'

import {
    MONITOR_SPEAKER_LEFT,
    MONITOR_SPEAKER_RIGHT,
    WALL_SPEAKER_LEFT,
    WALL_SPEAKER_RIGHT
} from '../../scene/things/keys/cutouts'

import {
    BENNETT_RECORD_PLAYER,
    BENNETT_COUCH_LAMP,
    KEYBOARD,
    CASH_BOX,
    GUITAR,
    DRUMKIT,
    DRUMS_STACKED_BASEMENT,
    BASS_CASE_UPRIGHT,
    GUITAR_CASE_UPRIGHT,
    BASEMENT_BEER_CASE,
    BASEMENT_BEER_MARA,
    BASEMENT_BEER_BENNETT
} from '../../scene/things/keys/fixtures'

import {
    COMMERCIAL_CENTRE,
    COMMERCIAL_FAR_RIGHT,
    COMMERCIAL_MIDDLE_RIGHT,
    COMMERCIAL_NEAR_RIGHT
} from '../../scene/things/keys/flats'

import {
    BENNETT_COUCH,
    BENNETT_LEFT_ARMREST,
    BENNETT_RIGHT_ARMREST
} from '../../scene/things/keys/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett's room`,
        presences: {
            [ACTORS]: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'looking at Leonard Cohen poster',
                    instance: PONDERING
                }
            },
            [CARDBOARDS]: {
                [LEONARD_COHEN_POSTER]: true
            },
            [FIXTURES]: {
                [BENNETT_RECORD_PLAYER]: true,
                [BENNETT_COUCH_LAMP]: true
            },
            [PANELS]: {
                [BENNETT_COUCH]: true,
                [BENNETT_LEFT_ARMREST]: true,
                [BENNETT_RIGHT_ARMREST]: true
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
                    workedHours: 4.25,
                    description: 'sitting on couch, figuring out Rubiks Cube',
                    instance: RUBIKS_CUBE
                }
            },
            [CARDBOARDS]: {
                [TELEVISION_ALBUM]: true,
                [PROGRESS_CHART_EARLY]: true
            },
            [FIXTURES]: {
                [BENNETT_RECORD_PLAYER]: true,
                [BENNETT_COUCH_LAMP]: true
            },
            [PANELS]: {
                [BENNETT_COUCH]: true,
                [BENNETT_LEFT_ARMREST]: true,
                [BENNETT_RIGHT_ARMREST]: true
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
                    workedHours: 4.25,
                    description: 'sitting on couch, reading a book',
                    instance: COUCH_READING
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        todo: true,
                        workedHours: 4.25,
                        description: 'sitting on floor, back turned, playing keyboard',
                        instance: BENNETT_KEYBOARD
                    }
                }
            },
            [CARDBOARDS]: {
                [PROGRESS_CHART_LATE]: true
            },
            [FIXTURES]: {
                [BENNETT_RECORD_PLAYER]: true,
                [BENNETT_COUCH_LAMP]: true,
                [KEYBOARD]: true
            },
            [PANELS]: {
                [BENNETT_COUCH]: true,
                [BENNETT_LEFT_ARMREST]: true,
                [BENNETT_RIGHT_ARMREST]: true
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
                    workedHours: 4.25,
                    description: 'chatting with hipster, paying attention to Mara',
                    instance: DISTRACTED
                },
                [JACOB]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'wiping sweat, chatting with Mara, laughing',
                    instance: FLIRTING
                },
                [MARA]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'flirting with Jacob',
                    instance: FLIRTING
                },
                [ANA]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'squatting, back turned, putting bass back in case',
                    instance: SQUATTING
                },
                [TOMER]: {
                    shane: {
                        todo: true,
                        workedHours: 4.25,
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
            },
            [FIXTURES]: {
                [CASH_BOX]: true,
                [GUITAR]: true,
                [DRUMKIT]: true
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
                    workedHours: 4.25,
                    description: 'sitting, silently eating burger, uncomfortable',
                    instance: EATING
                },
                [JACOB_MARA]: {
                    todo: true,
                    workedHours: 4.25,
                    compound: 2,
                    description: 'sitting, eating burger, holding Mara\'s hand',
                    instance: EATING
                },
                [ANA]: {
                    todo: true,
                    workedHours: 4.25,
                    description: 'sitting, eating fries, laughing',
                    instance: EATING
                }
            },
            [BACKDROPS]: {
                [WEST_BERKELEY_BACKDROP]: true
            },
            [FIXTURES]: {
                [BASS_CASE_UPRIGHT]: true,
                [GUITAR_CASE_UPRIGHT]: true,
                [DRUMS_STACKED_BASEMENT]: true,
                [BASEMENT_BEER_CASE]: true,
                [BASEMENT_BEER_MARA]: true,
                [BASEMENT_BEER_BENNETT]: true
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
                    workedHours: 4.25,
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
            [CARDBOARDS]: {
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
                    workedHours: 4.25,
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
            [CARDBOARDS]: {
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
                    workedHours: 4.25,
                    description: 'side, inspired by sudden thought',
                    instance: MERRILY_DERANGED
                },
                [HOWIE]: {
                    maskedUsher: {
                        todo: true,
                        workedHours: 4.25,
                        description: 'looking at Bennett',
                        instance: USHER_LOOKING
                    }
                }
            },
            [BACKDROPS]: {
                [OAKLAND_FRONT_BACKDROP]: true
            },
            [BUBBLES]: {
                [CINEMA_THOUGHTS]: true
            },
            [CARDBOARDS]: {
                [CINEMA_POSTER_RIGHT_NORMAL]: true
            },
            [FLATS]: {
                [COMMERCIAL_CENTRE]: true,
                [COMMERCIAL_FAR_RIGHT]: true,
                [COMMERCIAL_MIDDLE_RIGHT]: true,
                [COMMERCIAL_NEAR_RIGHT]: true
            }
        },
        cubes: CINEMA_STREET_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    }
]
