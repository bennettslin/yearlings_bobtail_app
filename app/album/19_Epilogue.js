import { LOGUE_TILES } from '../constants/stageTiles'
import { SKY_NO_TIME,
         SKY_NO_SEASON } from '../constants/stageValues'
module.exports = {
    logue: true,
    title: 'epilogue',
    scenes: [
        {
            verseIndex: 0,
            description: 'Everyone is standing at the end of the play. We are all really just actors.',
            actors: {
                oldBennett: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `5'4"`,
                    description: 'standing'
                },
                anita: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `3'9"`,
                    description: 'standing'
                },
                youngBennett: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `3'6"`,
                    description: 'standing'
                },
                esther: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `3'10"`,
                    description: 'standing'
                },
                willy: {
                    todo: true,
                    workedHours: 2.75,
                    realHeight: `5'3"`,
                    description: 'standing'
                },
                mother: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `5'0"`,
                    description: 'standing'
                },
                christopher: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `3'5"`,
                    description: 'standing'
                },
                preteenBennett: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `4'2"`,
                    description: 'standing'
                },
                father: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `5'4"`,
                    description: 'standing'
                },
                howie: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `6'0"`,
                    description: 'standing'
                },
                tomer: {
                    todo: true,
                    workedHours: 2.75,
                    realHeight: `5'6"`,
                    description: 'standing'
                },
                sasha: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `4'1"`,
                    description: 'standing'
                },
                brad: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `4'6"`,
                    description: 'standing'
                },
                andrew: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `4'7"`,
                    description: 'standing'
                },
                tristan: {
                    todo: true,
                    workedHours: 2.75,
                    realHeight: `5'8"`,
                    description: 'standing'
                },
                bennett: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `5'4"`,
                    description: 'standing',
                    subtasks: [
                        {
                            taskName: `food tray`,
                            workedHours: 0,
                            neededHours: 1
                        },
                        {
                            taskName: `lancet pen`,
                            workedHours: 0,
                            neededHours: 1
                        }
                    ]
                },
                catherine: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `4'11"`,
                    description: 'standing'
                },
                wade: {
                    todo: true,
                    workedHours: 2.75,
                    realHeight: `5'10"`,
                    description: 'standing'
                },
                amy: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `5'6"`,
                    description: 'standing'
                },
                stephanie: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `5'4"`,
                    description: 'standing',
                    subtasks: [
                        {
                            // INSTRUMENT
                            taskName: `recording microphone`,
                            workedHours: 0,
                            neededHours: 1
                        }
                    ]
                },
                jacob: {
                    todo: true,
                    workedHours: 2.75,
                    realHeight: `5'11"`,
                    description: 'standing'
                },
                mara: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `5'0"`,
                    description: 'standing'
                },
                ana: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `5'8"`,
                    description: 'standing'
                },
                miriam: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `5'1"`,
                    description: 'standing'
                },
                liz: {
                    todo: true,
                    workedHours: 2.5,
                    realHeight: `4'9"`,
                    description: 'standing'
                },
                khari: {
                    todo: true,
                    workedHours: 2.75,
                    realHeight: `5'9"`,
                    description: 'standing'
                },
                nestor: {
                    todo: true,
                    workedHours: 2.75,
                    realHeight: `5'7"`,
                    description: 'standing'
                }
            },
            tiles: LOGUE_TILES,
            sky: {
                time: SKY_NO_TIME,
                season: SKY_NO_SEASON
            }
        }
    ],
    overview: `Thanks for listening! It really means a lot. So what do I hope to gain by putting up this website, thirteen years after the album's original release? In short, I'm looking for help. The truth is, I never stopped wanting it, whether in the form of a straightforward record deal, or through some modern arrangement devised by forward-thinking Millennials. In 2006, so many indie labels rejected me, fearing that, while I seemed fully determined to create this century's best rock albums, I wouldn't lift a finger to promote myself if left on my own. Their fears were correct, and now in 2019, I'm doubling down on my convictions. Interdependence was the reason for rock music's great past. Why wouldn't it hold the key to a better future?`,
    tasks: [
        {
            taskName: `overview`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `rough illustration synopsis`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `review rough illustrations, including consolidating characters`,
            workedHours: 2,
            neededHours: 2
        },
    ]
}
