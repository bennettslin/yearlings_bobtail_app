import {
    TAIWAN_PUPPET_SHOW_KEY,
    SCHOOLBUS_KEY,
    TETHERBALL_SCENE_KEY
} from 'scene/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_SUMMER
} from 'scene/sky'

import {
    PRETEEN_BENNETT,
    SASHA,
    BRAD,
    ANDREW
} from 'scene/actorKeys'

module.exports = [
    {
        unitIndex: 1,
        description: `Puppets of Bennett and family are crossing a rope bridge that spans several mountains in Taiwan.`,
        cubes: TAIWAN_PUPPET_SHOW_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 4,
        description: `Bennett has drawn a picture of himself holding hands with Sasha, together exploring the mountains of Taiwan.`,
        actors: {
        },
        cubes: TAIWAN_PUPPET_SHOW_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 6,
        description: `In Bennett's thought bubble, he recollects sitting one bus seat behind Sasha on the bus. She is chatting flirtatiously with a boy seated next to her who is wearing a yarmulke.`,
        presences: {
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side seated, pretending to read, panicked',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [SASHA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side seated, laughing, braids trailing',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [BRAD]: {
                    jewishBoy: {
                        todo: true,
                        workedHours: 3,
                        description: 'side seated, turned away, pointing to window',
                        instance: null,
                        yIndex: -1,
                        arrangement: {
                            xFloat: 0,
                            xWidth: 0,
                            zHeight: 0
                        }
                    }
                }
            }
        },
        cubes: SCHOOLBUS_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 9,
        description: `In Bennett's thought bubble, he is being tied to a tetherball pole by two bullies. Sasha is yelling at them, telling them to untie Bennett and to leave him alone. Bennett looks physically roughed up, and emotionally mortified.`,
        presences: {
            actors: {
                [PRETEEN_BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'tied up, greeting Sasha with nervous laughter',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [SASHA]: {
                    todo: true,
                    workedHours: 3,
                    description: 'indignant, yelling at bullies',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [ANDREW]: {
                    todo: true,
                    workedHours: 3,
                    description: 'laughing, feigning fear of Sasha',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                },
                [BRAD]: {
                    todo: true,
                    workedHours: 3,
                    description: 'laughing, tying up Bennett',
                    instance: null,
                    yIndex: -1,
                    arrangement: {
                        xFloat: 0,
                        xWidth: 0,
                        zHeight: 0
                    }
                }
            }
        },
        cubes: TETHERBALL_SCENE_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    },
    {
        unitIndex: 12,
        description: `In Bennett's sketch, there is a drawing of Bennett by himself on the island of Taiwan, and Sasha and a Jewish boy on North America, with an ocean separating them.`,
        actors: {},
        cubes: TAIWAN_PUPPET_SHOW_KEY,
        sky: {
            time: TIME_ANYTIME,
            season: SEASON_SUMMER
        }
    }
]
