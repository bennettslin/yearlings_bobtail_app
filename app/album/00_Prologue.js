import { LOGUE_CUBES } from '../constants/cubes/cubes'
import {
    CUTOUT,
    FIXTURE,
    ACTOR,
    SKY_ANYTIME,
    SKY_INDOOR
} from '../constants/scene'

module.exports = {
    logue: true,
    title: 'prologue',
    scenes: [
        {
            unitIndex: 1,
            description: `Old Bennett is standing onstage, addressing the audience.`,
            actors: {
                oldBennett: {
                    todo: true,
                    workedHours: 3,
                    description: 'standing, facing forward, welcoming'
                }
            },
            cubes: LOGUE_CUBES,
            sky: {
                time: SKY_ANYTIME,
                season: SKY_INDOOR
            },
            presences: {
                1: {
                    [ACTOR]: [
                        {
                            name: 'sample actor 1',
                            xIndex: 4,
                            width: 5,
                            height: 25
                        },
                        {
                            name: 'sample actor 2',
                            xIndex: 8,
                            width: 15,
                            height: 15
                        }
                    ],
                    [CUTOUT]: [
                        {
                            name: 'sample cutout 1',
                            xIndex: 2,
                            width: 5,
                            height: 25
                        },
                        {
                            name: 'sample cutout 2',
                            xIndex: 10,
                            width: 15,
                            height: 15
                        }
                    ],
                    [FIXTURE]: {
                        name: 'sample fixture 1',
                        xIndex: 6,
                        width: 5,
                        height: 25
                    }
                },
                4: {
                    [FIXTURE]: [
                        {
                            name: 'sample fixture 4',
                            xIndex: 3,
                            width: 10,
                            height: 20
                        },
                        {
                            name: 'sample fixture 4',
                            xIndex: 7,
                            width: 20,
                            height: 10
                        },
                        {
                            name: 'sample fixture 4',
                            xOffset: -10,
                            yOffset: -40,
                            xIndex: 11,
                            width: 10,
                            height: 10
                        },
                    ]
                }
            }
        }
    ],
    overview: `Hi, I'm Bennett. In 2001, I went through a messy breakup. So I decided to create a double album examining all that had led up to my life at that point, from growing up with an autistic brother to joining a mail-order cult in middle school. I then spent the next five years writing all the songs and performing all the parts for what I was sure would be hailed as both a musical and literary masterpiece. Upon its release in 2006, however, the album was treated as a mere hobby project and thus ignored by the indie labels and press. In the many years since, I've tried to figure out how to bring this dense and difficult work to the public, given that I remain a complete unknown. I'm hoping this website does the trick!`,
    tasks: [
        {
            taskName: `overview`,
            workedHours: 3,
            neededHours: 3
        }
    ]
}
