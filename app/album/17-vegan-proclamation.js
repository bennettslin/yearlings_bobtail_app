import { REFRAIN, VERSES, PRECHORUS, CHORUS } from 'helpers/constants'

module.exports = {
    title: {
        anchor: `Vegan Proclamation`,
        annotation: {
            description: ``
        },
        todo: true
    },
    totalTime: 241,
    overviews: {
        narrative: `Having doubled down on writing and recording all the songs myself, I'd been burning bridges with my bandmates for some time. Since we stopped playing shows as a result, I had no new opportunities to meet women after Miriam left. Most heartbreaking of all, Sita had fallen in love with someone else. I wasn't to win her back, ever again. All I had was myself now, and I hated myself. But slowly, I began the long, arduous process of remaking myself into a good person. My first small victory was to go vegan.`,
        music: `As a child, I sat with my mother as she watched a movie set in WWII. After the final battle, the camera panned across a motionless scene of dead bodies and devastated houses, as a lone gramophone, preserved amidst the wreckage, played a sappy Italian parlour song. This ironic contrast left an impact on me, and I thought it would work well here. Especially since the last song ended with me listening to my records as I faded away.`
    },
    lyrics: [
        [
            {
                time: 0,
                lyric: [
                    {
                        italic: `"If you're just starting out, you need to decide right now: Either you stick with quality vinyl, or you buy only the bargain bin LPs. You can't have both. Because a scratched record will chip a good needle… and a chipped needle will scratch a good record…"`
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: REFRAIN
            }
        ],
        [
            {
                time: 15,
                lyric: `So shall we, Odin, lightly tread`
            },
            {
                time: 19,
                lyric: `past the rape racks where our furor led,`
            },
            {
                time: 23,
                lyric: `to a soiled girl fouled on the false rib from our chest?`
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 30,
                lyric: `We baulked at our lives born unfair,`
            },
            {
                time: 35,
                lyric: `set to rock this pout from horse to chair,`
            },
            {
                time: 39,
                lyric: `as a tempered hammer cooled by striking the smouldering air…`
            },
            {
                unitMap: true,
                sectionClass: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 46,
                lyric: `Well, first pets always bear the worst,`
            },
            {
                time: 50,
                lyric: `mere primers on how not to hurt,`
            },
            {
                time: 55,
                lyric: `and now I know why the battered kitten purrs…`
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS
            }
        ],
        [
            {
                time: 60,
                lyric: [
                    {
                        italic: `"No, I'll smile because I believe in the big crunch. And meanwhile, the universe is a cyanided box. Because if we can't ever be known to be dead, we just might always be alive… to God…`
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: REFRAIN
            }
        ],
        [
            {
                time: 74,
                lyric: `Torn straps unsalvaged sows have chewed,`
            },
            {
                time: 78,
                lyric: `form a trail which leads to a bloody broom,`
            },
            {
                time: 82,
                lyric: `its bristles scrape discharge encrusted on leather boots.`
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 90,
                lyric: `Through an alley strewn with burger shrouds,`
            },
            {
                time: 94,
                lyric: `a lone rallied youth strikes himself from his cloud,`
            },
            {
                time: 98,
                lyric: `reversing his stomach and his swastikas inside out…`
            },
            {
                unitMap: true,
                sectionClass: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 106,
                lyric: `Well, if first cuts are the worst ones bled…`
            },
            {
                time: 110,
                lyric: `then none by us now, to any flesh!`
            },
            {
                time: 114,
                lyric: `This shipwrecked world is large enough for us to make amends…`
            },
            {
                time: 120,
                lyric: `and to be good again…`
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS
            }
        ],
        [
            {
                time: 138,
                lyric: `"So all your leads have left and now you're sad, too?`
            },
            {
                time: 146,
                lyric: `Someday you'll breathe again; for one, you have to…`
            },
            {
                time: 154,
                lyric: `I don't know how where once I cowered I now could fly.`
            },
            {
                time: 161,
                // Nirvana Sappy
                lyric: `I still love you for the airholes, dear; and now, good night."`
            },
            {
                unitMap: true,
                sectionClass: CHORUS
            }
        ],
        [
            {
                time: 186,
                lyric: `The stardust marks us, Odin, sparks zip through our heads…`
            },
            {
                time: 194,
                lyric: `And can we start as children? Would we want to then?`
            },
            {
                time: 201,
                lyric: `The diapered white dwarf, gurgling, curls up for his sleep…`
            },
            {
                time: 209,
                // Odin reference
                lyric: `Our ashed heads bow from chivalry to our Siva's feet…`
            },
            {
                unitMap: true,
                sectionClass: CHORUS,
                subsequent: true
            }
            // Talk about flirting with conservative politics. These days, I'd say I'm vegan maybe 90% of the time, the naysaying judgment of hardcore vegans notwithstanding.
        ]
    ],
    tasks: [
        {
            taskName: `annotations`,
            workedHours: 10,
            neededHours: 35,
            subtasks: [
                {
                    taskName: `split into dots`,
                    workedHours: 0,
                    neededHours: 3
                }
            ]
        },
        {
            taskName: `illustrations`,
            workedHours: 0,
            neededHours: 0,
            subtasks: [

            ]
        }
    ]
}
