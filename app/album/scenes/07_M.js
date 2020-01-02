import { ACTOR } from '../../constants/scene'
import {
    BACKDROP,
    BUBBLE,
    CARDBOARD,
    CUTOUT,
    DOOR,
    FIXTURE,
    FLAT,
    PANEL
} from '../../constants/scene/things'
import {
    BENNETT_COUCH_KEY,
    CLUB_FRONT_KEY,
    BASEMENT_KEY,
    CINEMA_KEY,
    CINEMA_STREET_KEY
} from '../../constants/scene/scenes'
import {
    TIME_NOON,
    TIME_AFTERNOON,
    TIME_EVENING,
    TIME_NIGHT,
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
} from '../../constants/scene/actors'
import { SQUATTING } from '../../constants/scene/actors/ana'
import {
    PONDERING,
    RUBIKS_CUBE,
    COUCH_READING,
    DISTRACTED,
    HOPELESSLY_CRUSHED,
    WONDERING_BABY,
    MERRILY_DERANGED
} from '../../constants/scene/actors/bennett'
import {
    USHER_WAITING,
    USHER_LOOKING
} from '../../constants/scene/actors/howie'
import {
    INFANT_CURIOUS,
    INFANT_NURSING
} from '../../constants/scene/actors/miriam'
import { BENNETT_KEYBOARD } from '../../constants/scene/actors/stephanie'
import { SHANE_BUYING } from '../../constants/scene/actors/tomer'
import {
    FLIRTING,
    EATING
} from '../../constants/scene/actors/songs'
import {
    OAKLAND_FRONT__HIGH,
    OAKLAND_SIDE
} from '../../constants/scene/things/backdrops'
import {
    BUBBLE_SMALL__CINEMA,
    BUBBLE_MEDIUM__CINEMA,
    BUBBLE_LARGE__CINEMA,
    CINEMA_THOUGHT_RECORDING,
    CINEMA_THOUGHT_BUYING
} from '../../constants/scene/things/bubbles'
import {
    TELEVISION_ALBUM,
    LEONARD_COHEN_POSTER,
    PROGRESS_CHART_EARLY,
    PROGRESS_CHART_LATE,
    MARA_MEMENTO_POSTER,
    MARQUEE_FRAME__MARA_MEMENTO,
    MARA_GLADIATOR_POSTER,
    MARQUEE_FRAME__MARA_GLADIATOR,
    GLADIATOR_POSTER,
    MARQUEE_FRAME__GLADIATOR
} from '../../constants/scene/things/cardboards'
import {
    MONITOR_FRONT__LEFT,
    MONITOR_FRONT__RIGHT,
    WALL_SPEAKER_FRONT__LEFT,
    WALL_SPEAKER_FRONT__RIGHT
} from '../../constants/scene/things/cutouts'
import {
    BASEMENT_DOOR_OPEN,
    CINEMA_DOORS
} from '../../constants/scene/things/doors'
import {
    BENNETT_RECORD_PLAYER,
    BENNETT_COUCH_LAMP,
    KEYBOARD,
    CASH_BOX,
    ELECTRIC_GUITAR,
    DRUMKIT,
    DRUMS_STACKED__BASEMENT,
    BASS_CASE_UPRIGHT,
    GUITAR_CASE_UPRIGHT,
    BASEMENT_BEER_CASE,
    BASEMENT_BEER_MARA,
    BASEMENT_BEER_BENNETT
} from '../../constants/scene/things/fixtures'
import {
    COMMERCIAL_CENTRE,
    COMMERCIAL_FAR_RIGHT,
    COMMERCIAL_MIDDLE_RIGHT,
    COMMERCIAL_NEAR_RIGHT
} from '../../constants/scene/things/flats'
import {
    BASEMENT_FENCE,
    WIDE_COUCH__BENNETT,
    WIDE_ARMREST__BENNETT_LEFT,
    WIDE_ARMREST__BENNETT_RIGHT
} from '../../constants/scene/things/panels'

export default [
    {
        unitIndex: 1,
        description: `Bennett's room`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'looking at Leonard Cohen poster',
                    instance: PONDERING
                }
            },
            [CARDBOARD]: {
                [LEONARD_COHEN_POSTER]: true
            },
            [FIXTURE]: {
                [BENNETT_RECORD_PLAYER]: true,
                [BENNETT_COUCH_LAMP]: true
            },
            [PANEL]: {
                [WIDE_COUCH__BENNETT]: true,
                [WIDE_ARMREST__BENNETT_LEFT]: true,
                [WIDE_ARMREST__BENNETT_RIGHT]: true
            }
        },
        cubes: BENNETT_COUCH_KEY,
        sky: { time: TIME_EVENING, season: SEASON_SUMMER }
    },
    {
        unitIndex: 2,
        description: `Bennett is in his room, trying to figure out a Rubik's Cube.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'sitting on couch, figuring out Rubiks Cube',
                    instance: RUBIKS_CUBE
                }
            },
            [CARDBOARD]: {
                [TELEVISION_ALBUM]: true,
                [PROGRESS_CHART_EARLY]: true
            },
            [FIXTURE]: {
                [BENNETT_RECORD_PLAYER]: true,
                [BENNETT_COUCH_LAMP]: true
            },
            [PANEL]: {
                [WIDE_COUCH__BENNETT]: true,
                [WIDE_ARMREST__BENNETT_LEFT]: true,
                [WIDE_ARMREST__BENNETT_RIGHT]: true
            }
        },
        cubes: BENNETT_COUCH_KEY,
        sky: { time: TIME_EVENING, season: SEASON_SUMMER }
    },
    {
        unitIndex: 4,
        description: `Bennett is in his room, doing many things, such that there are many copies of him. One is playing a keyboard and writing stuff down on a notepad, another is reading a book.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'sitting on couch, reading a book',
                    instance: COUCH_READING
                },
                [STEPHANIE]: {
                    [BENNETT]: {
                        description: 'sitting on floor, back turned, playing keyboard',
                        instance: BENNETT_KEYBOARD
                    }
                }
            },
            [CARDBOARD]: {
                [PROGRESS_CHART_LATE]: true
            },
            [FIXTURE]: {
                [BENNETT_RECORD_PLAYER]: true,
                [BENNETT_COUCH_LAMP]: true,
                [KEYBOARD]: true
            },
            [PANEL]: {
                [WIDE_COUCH__BENNETT]: true,
                [WIDE_ARMREST__BENNETT_LEFT]: true,
                [WIDE_ARMREST__BENNETT_RIGHT]: true
            }
        },
        cubes: BENNETT_COUCH_KEY,
        sky: { time: TIME_EVENING, season: SEASON_SUMMER }
    },
    {
        unitIndex: 5,
        description: `It's after a show, and the Yearlings are breaking down their set. Jacob is flirting with Mara. Bennett is selling a CD to a hipster, but is distracted by the sight of Mara.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'chatting with hipster, paying attention to Mara',
                    instance: DISTRACTED
                },
                [JACOB]: {
                    description: 'wiping sweat, chatting with Mara, laughing',
                    instance: FLIRTING
                },
                [MARA]: {
                    description: 'flirting with Jacob',
                    instance: FLIRTING
                },
                [ANA]: {
                    description: 'squatting, back turned, putting bass back in case',
                    instance: SQUATTING
                },
                [TOMER]: {
                    shane: {
                        description: 'chatting with Bennett, gushing about music',
                        instance: SHANE_BUYING
                    }
                }
            },
            [CUTOUT]: {
                [MONITOR_FRONT__LEFT]: true,
                [MONITOR_FRONT__RIGHT]: true,
                [WALL_SPEAKER_FRONT__LEFT]: true,
                [WALL_SPEAKER_FRONT__RIGHT]: true
            },
            [FIXTURE]: {
                [CASH_BOX]: true,
                [ELECTRIC_GUITAR]: true,
                [DRUMKIT]: true
            }
        },
        cubes: CLUB_FRONT_KEY,
        sky: { time: TIME_NIGHT, season: SEASON_SUMMER }
    },
    {
        unitIndex: 7,
        description: `The Yearlings are taking a break from band practise, eating burgers around a table. Mara is with them, cuddling with Jacob. Bennett is visibly agitated.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'sitting, silently eating burger, uncomfortable',
                    instance: EATING
                },
                [JACOB_MARA]: {
                    description: 'sitting, eating burger, holding Mara\'s hand',
                    instance: EATING
                },
                [ANA]: {
                    description: 'sitting, eating fries, laughing',
                    instance: EATING
                }
            },
            [BACKDROP]: {
                [OAKLAND_SIDE]: true
            },
            [DOOR]: {
                [BASEMENT_DOOR_OPEN]: true
            },
            [FIXTURE]: {
                [BASS_CASE_UPRIGHT]: true,
                [GUITAR_CASE_UPRIGHT]: true,
                [DRUMS_STACKED__BASEMENT]: true,
                [BASEMENT_BEER_CASE]: true,
                [BASEMENT_BEER_MARA]: true,
                [BASEMENT_BEER_BENNETT]: true
            },
            [PANEL]: {
                [BASEMENT_FENCE]: true
            }
        },
        cubes: BASEMENT_KEY,
        sky: { time: TIME_NOON, season: SEASON_SUMMER }
    },
    {
        unitIndex: 9,
        description: `Bennett is walking along outside. He sees Mara's face everywhere he looks: in clouds, on the sides of buildings, and so forth.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, walking, sulking with head down',
                    instance: HOPELESSLY_CRUSHED
                },
                [MIRIAM]: {
                    maskedWoman: {
                        description: 'side, holding baby, looking back at Bennett',
                        instance: INFANT_CURIOUS
                    }
                }
            },
            [CARDBOARD]: {
                [MARA_MEMENTO_POSTER]: true,
                [MARQUEE_FRAME__MARA_MEMENTO]: true,
                [MARA_GLADIATOR_POSTER]: true,
                [MARQUEE_FRAME__MARA_GLADIATOR]: true
            },
            [DOOR]: {
                [CINEMA_DOORS]: true
            }
        },
        cubes: CINEMA_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_SUMMER }
    },
    {
        unitIndex: 11,
        description: `Bennett is looking at the woman holding a baby who just passed by.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, looking back at baby',
                    instance: WONDERING_BABY
                },
                [MIRIAM]: {
                    maskedWoman: {
                        description: 'side, walking away',
                        instance: INFANT_NURSING
                    }
                },
                [HOWIE]: {
                    maskedUsher: {
                        description: 'checking watch',
                        instance: USHER_WAITING
                    }
                }
            },
            [CARDBOARD]: {
                [MARA_MEMENTO_POSTER]: true,
                [MARQUEE_FRAME__MARA_MEMENTO]: true,
                [MARA_GLADIATOR_POSTER]: true,
                [MARQUEE_FRAME__MARA_GLADIATOR]: true
            },
            [DOOR]: {
                [CINEMA_DOORS]: true
            }
        },
        cubes: CINEMA_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_SUMMER }
    },
    {
        unitIndex: 14,
        description: `Bennett suddenly has an epiphany. In sketches in his head, he imagines himself recording all the instruments in a band. Finally, he imagines Mara finding his album in a record store.`,
        presences: {
            [ACTOR]: {
                [BENNETT]: {
                    description: 'side, inspired by sudden thought',
                    instance: MERRILY_DERANGED
                },
                [HOWIE]: {
                    maskedUsher: {
                        description: 'looking at Bennett',
                        instance: USHER_LOOKING
                    }
                }
            },
            [BACKDROP]: {
                [OAKLAND_FRONT__HIGH]: true
            },
            [BUBBLE]: {
                [BUBBLE_SMALL__CINEMA]: true,
                [BUBBLE_MEDIUM__CINEMA]: true,
                [BUBBLE_LARGE__CINEMA]: true,
                [CINEMA_THOUGHT_RECORDING]: true,
                [CINEMA_THOUGHT_BUYING]: true
            },
            [CARDBOARD]: {
                [GLADIATOR_POSTER]: true,
                [MARQUEE_FRAME__GLADIATOR]: true
            },
            [FLAT]: {
                [COMMERCIAL_CENTRE]: true,
                [COMMERCIAL_FAR_RIGHT]: true,
                [COMMERCIAL_MIDDLE_RIGHT]: true,
                [COMMERCIAL_NEAR_RIGHT]: true
            }
        },
        cubes: CINEMA_STREET_KEY,
        sky: { time: TIME_AFTERNOON, season: SEASON_SUMMER }
    }
]
