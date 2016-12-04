import { RIGHT, OVERLAP, VERSES, PRECHORUS, CHORUS, BRIDGE, RESPONSE } from 'helpers/constants'

module.exports = {
    title: {
        anchor: 'Didi (弟弟)',
        annotation: {
            description: [
                `In Chinese,`,
                {
                    italic: `didi`
                },
                `means "little brother." While my family is from`,
                {
                    anchor: `Taiwan,`,
                    wiki: `Taiwan`
                },
                `the Chinese took over the island in 1949 and imposed their language. The Taiwanese we speak at home thus includes a healthy sprinkle of Chinese words.`
            ]
        }
    },
    scenes: [
        {
            time: 0,
            description: 'placeholder description'
        },
        {
            time: 0,
            description: 'placeholder description'
        },
        {
            time: 0,
            description: 'placeholder description'
        }
    ],
    tip: {
        description: 'placeholder tip'
    },
    totalTime: 177,
    overview: `As a child, I depended on my older sister to do most everything for me, like zipping my jacket. One day when she wasn't around to help, I pooped in my pants and had to be sent home from school.`,
    lyrics: [
        [
            {
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
                    annotation: {
                        description: [
                            `James Joyce's novel`,
                            {
                                italic: {
                                    anchor: `A Portrait of the Artist as a Young Man`,
                                    wiki: `A_Portrait_of_the_Artist_as_a_Young_Man`
                                }
                            },
                            `begins in the simple prose of a child, so I did the same for this first song of the album, which is sung from my sister's perspective. Toy instruments abound, including an autoharp and glockenspiel that evoke the intro to The Beach Boys'`,
                            {
                                italic: {
                                    anchor: `Pet Sounds.`,
                                    wiki: `Pet_Sounds`
                                }
                            }
                        ],
                        dotKeys: {
                            music: true
                        }
                    }
                }
            }
        ],
        [
            {
                time: 17,
                lyric: `Didi left the house this morning`
            },
            {
                time: 22,
                lyric: `wondering to himself, who would tie his shoes?`
            },
            {
                time: 28,
                lyric: `And he left alone because he`
            },
            {
                time: 34,
                lyric: `had to finish up all his orange juice.`
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 40,
                lyric: [
                    `Didi, you've been following, I`,
                    {
                        anchor: `didn't want you here.`,
                        annotation: {
                            description: `My sister was fiercely protective of me, but she was also outgoing and independent. While I was welcome to tag along with her and her friends, there were times when they preferred to do girl stuff by themselves. I remember the panic I felt when this happened.`,
                            dotKeys: {
                                afterword: true
                            }
                        }
                    }
                ]
            },
            {
                time: 46,
                lyric: `Didi, couldn't you find another sister to be near?`
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS
            }
        ],
        [
            {
                time: 52,
                lyric: [
                    `Cause I get sick of hearing,`,
                    {
                        anchor: `"Zeizei,`,
                        annotation: {
                            description: [
                                {
                                    italic: `Zeizei`
                                },
                                `means "big sister" in Chinese.`
                            ],
                            dotKeys: {
                                afterword: true
                            }
                        }
                    },
                    `let Didi play with you…"`
                ]
            },
            {
                time: 57,
                lyric: `And I tire of saying, "My Didi wants to come too."`
            },
            {
                unitMap: true,
                sectionClass: CHORUS
            }
        ],
        [
            {
                // TODO: Say more?
                time: 63,
                lyric: `Didi made an "accident" in class,`
            },
            {
                time: 68,
                lyric: `so the nurse sent him home, snickered the recess crowd.`
            },
            {
                time: 74,
                lyric: [
                    `They saw him crying beside a`,
                    {
                        anchor: `Safeway paper bag,`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `Since my pants were soiled, the nurse gave me a shopping bag to carry them in.`,
                                {
                                    anchor: `Safeway`,
                                    wiki: `Safeway_Inc.`
                                },
                                `is a supermarket chain located in the western and central United States.`
                            ],
                            portal: `safeway_paper_bag`
                        }
                    }
                ]
            },
            {
                time: 80,
                lyric: `decked in overalls from the lost and found.`
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                // TODO: Say more?
                time: 85,
                lyric: `Didi, you've been in the bath all this time.`
            },
            {
                time: 91,
                lyric: `Didi, come out, you can't soak there all night.`
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS,
                subsectionClass: RESPONSE,
                subStanza: [
                    {
                        time: 97,
                        lyric: {
                            italic: `Don't little raisin fingers need to dry?`
                        }
                    }
                ]
            }
        ],
        [
            {
                time: 100,
                lyric: `Didi, someday you will be a hero`
            },
            {
                time: 103,
                lyric: `in the movies, fighting those`
            },
            {
                time: 106,
                lyric: [
                    `crooked thieves with your`,
                    {
                        anchor: `sheriff's badge and gun…`,
                        annotation: {
                            description: `After China stripped Taiwan of international recognition in 1971, a bootleg industry emerged to serve a generation of teenagers like my mother who valued all things American, though few knew exactly what the label entailed. My mother's tastes were thus a random hodgepodge, which my sister and I absorbed as we grew up listening to her country records and watching old Westerns.`,
                            dotKeys: {
                                afterword: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: BRIDGE
            }
        ],
        [
            {
                time: 112,
                lyric: `Didi, one day you will be a picture`
            },
            {
                time: 115,
                lyric: [
                    `taped to all the`,
                    {
                        anchor: `girls' mirrors.`,
                        annotation: {
                            description: `My sister would cut out pictures of pop stars from teenybopper magazines and tape them to her mirror.`,
                            dotKeys: {
                                afterword: true
                            }
                        }
                    }
                ]
            },
            {
                time: 117,
                lyric: `They'll say, who now could have ever figured`
            },
            {
                time: 120,
                lyric: [
                    `you'd`,
                    {
                        anchor: `finally become someone?`,
                        annotation: {
                            portal: `finally_become_someone`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: BRIDGE,
                subsequent: true
            }
        ],
        [
            {
                time: 129,
                lyric: `Didi dear, I'm sorry that I yelled at you that way.`
            },
            {
                time: 135,
                lyric: `Didi dear, I know today just wasn't your day.`
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS
            }
        ],
        [
            {
                time: 141,
                lyric: `And now I think all I want is my Didi well by tomorrow,`
            },
            {
                time: 146,
                lyric: `and there are things I hope my Didi will never know.`
            },
            {
                unitMap: true,
                sectionClass: CHORUS
            }
        ],
        [
            {
                time: 152,
                lyric: `Yes, and now I think all I want is my Didi well by tomorrow,`
            },
            {
                time: 158,
                lyric: `and there are things I hope Didi will never have to know.`
            },
            {
                unitMap: true,
                sectionClass: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
                    annotation: {
                        description: [
                            `As I made this album, indie rock was congealing around the belief that recordings merely serve to showcase live shows. So my homage to`,
                            {
                                italic: `Pet Sounds`
                            },
                            `was also meant as a gentle reminder that Brian Wilson's masterpiece was never performed live in its own time, precisely because it was paving the way for what had yet to be achieved onstage. And far from being dismissed as a hobby project, it now tops most lists of rock's greatest albums. But`,
                            {
                                italic: `Yearling's Bobtail`
                            },
                            `was dead upon arrival, proving my fears well-founded. So this Didi did have to know some things after all…`
                        ],
                        dotKeys: {
                            afterword: true
                        }
                    }
                }
            }
        ]
    ],
    tasks: [
        {
            taskName: `music annotations`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `separate annotations into dot categories`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `illustrations`,
            workedHours: 0,
            neededHours: 0,
            subtasks: [

            ]
        },
        {
            taskName: `annotations`,
            workedHours: 40,
            neededHours: 40
        },
        {
            taskName: `afterword annotations`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `include wiki urls`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `sort out past and present tense`,
            workedHours: 1,
            neededHours: 1
        }
    ]
}
