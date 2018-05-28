import { AFTERWORD,
         BACKSTORY,
         NARRATIVE,
         OBSERVATION,
         REFERENCE,
         SONGWRITING } from '../constants/dots'
import { VERSES,
         PRECHORUS,
         CHORUS,
         BRIDGE,
         RESPONSE,
         INTRO,
         OUTRO,
         REFRAIN,
         FLASHBACK_TO_PORTAL_PREFIX,
         IS_DOT_STANZA } from '../constants/lyrics'
import { CHILDHOOD_NEIGHBOURHOOD_TILES,
         PLAYGROUND_TILES,
         CHILDHOOD_BATHROOM_TILES } from '../constants/stageTiles'
import { CUTOUT,
         FIXTURE,
         ACTOR,
         SKY_NO_TIME,
         SKY_SPRING } from '../constants/stageValues'

module.exports = {
    scenes: [
        {
            unitIndex: 1,
            description: `Neighbourhood houses.`,
            actions: {
                actionsRow1: [
                    {
                        name: 'sample cutout 1',
                        type: CUTOUT,
                        x: 25,
                        y: 80,
                        width: 10,
                        height: 10
                    },
                    {
                        name: 'sample fixture 1',
                        type: FIXTURE,
                        x: 50,
                        y: 50,
                        width: 10,
                        height: 10
                    },
                    {
                        name: 'sample actor 1',
                        type: ACTOR,
                        x: 70,
                        y: 20,
                        width: 10,
                        height: 10
                    },
                ]
            },
            tiles: CHILDHOOD_NEIGHBOURHOOD_TILES,
            sky: {
                time: SKY_NO_TIME,
                season: SKY_SPRING
            }
        },
        {
            unitIndex: 3,
            description: `It's a schoolday morning. Young Anita walks with hurried determination out of the house. Young Bennett rushes after her in panic, his jacket half on and clutching a knapsack.`,
            action: [

            ],
            actors: {
                anita: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, rushing, exasperated'
                },
                esther: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, looking at Anita'
                },
                youngBennett: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, running, panicked'
                }
            },
            tiles: CHILDHOOD_NEIGHBOURHOOD_TILES,
            sky: {
                time: SKY_NO_TIME,
                season: SKY_SPRING
            }
        },
        {
            unitIndex: 6,
            description: `Bennett looks sheepish, seated on a bench in the hallway outside the nurse's office, wearing oversized overalls. Beside him is a sealed grocery bag. Outside, a young girl tells the playground about this. Anita overhears and looks upset.`,
            action: [

            ],
            actors: {
                anita: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'front, playing ball, offended'
                },
                youngBennett: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'sitting, flustered'
                },
                esther: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, skipping, pointing back and laughing'
                }
            },
            tiles: PLAYGROUND_TILES,
            sky: {
                time: SKY_NO_TIME,
                season: SKY_SPRING
            }
        },
        {
            unitIndex: 8,
            description: `Bennett is soaking in a bathtub at home, looking downcast. A window shows that it is midday outside.`,
            action: [

            ],
            actors: {
                youngBennett: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, in bathtub, downcast'
                }
            },
            tiles: CHILDHOOD_BATHROOM_TILES,
            sky: {
                time: SKY_NO_TIME,
                season: SKY_SPRING
            }
        },
        {
            unitIndex: 12,
            description: `The same scene. Anita is now crouched beside the bathtub. She has brought a phonograph and placed it on a chair. Bennett is still in the bathtub, now happily singing along, wearing a cowboy hat.`,
            action: [

            ],
            actors: {
                anita: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'back, squatting, smiling'
                },
                youngBennett: {
                    todo: true,
                    workedHours: 2.5,
                    description: 'side, facing front, singing, smiling'
                }
            },
            tiles: CHILDHOOD_BATHROOM_TILES,
            sky: {
                time: SKY_NO_TIME,
                season: SKY_SPRING
            }
        }
    ],
    totalTime: 177,
    overview: `As a child, I depended on my older sister to do most everything for me, like zipping up my jacket. One day when she wasn't around to help, I pooped in my pants and had to be sent home from school.`,
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
                `the Chinese took over the island in 1949 and imposed their language. The Taiwanese we spoke at home thus included a healthy sprinkle of Chinese words.`
            ],
            dotKeys: {
                [BACKSTORY]: true
            }
        }
    },
    lyrics: [
        [
            {
                time: 0,
                centre: {
                    italic: `(Bennett's theme)`
                }
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: [
                            `In this song sung from my sister's perspective when we were children, toy instruments abound, including an autoharp and glockenspiel in the intro that evoke the opening of The Beach Boys'`,
                            {
                                italic: {
                                    anchor: `Pet Sounds.`,
                                    wiki: `Pet_Sounds`
                                }
                            }
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: INTRO
            }
        ],
        [
            {
                time: 11,
                centre: {
                    italic: `(whistles)`
                }
            },
            {
                unitMap: true,
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 17,
                lyric: `Didi left the house this morning`
            },
            {
                time: 22,
                lyric: [
                    `wondering to himself, who would`,
                    {
                        anchor: `tie his shoes?`,
                        annotation: [
                            {
                                description: `Being left-handed as a child, I struggled to learn the manner of tying shoelaces where one bunny goes around the tree. So I came up with my own version that looked like the real thing, but was always coming undone.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            },
                            {
                                portal: {
                                    portalKey: `shoelaces`,
                                    portalPrefix: FLASHBACK_TO_PORTAL_PREFIX
                                }
                            }
                        ]
                    }
                ]
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
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: [
                            {
                                italic: {
                                    anchor: `A Portrait of the Artist as a Young Man,`,
                                    wiki: `A_Portrait_of_the_Artist_as_a_Young_Man`
                                }
                            },
                            `James Joyce's semi-autobiographical novel, begins in the simple prose of a child, so I did the same for this first song of the album.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: VERSES
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
                            description: `My sister was fiercely protective of me, but she was also outgoing and independent. While I was welcome to tag along with her and her friends, there were times when they preferred to do girl stuff by themselves. I always panicked when this happened.`,
                            dotKeys: {
                                [BACKSTORY]: true
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
                stanzaType: PRECHORUS
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
                                [REFERENCE]: true
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
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: [
                            `The nonstop modulations between the`,
                            {
                                anchor: `distantly related`,
                                wiki: `Closely_related_key`
                            },
                            `major keys of A, C, and E\u2011flat evoke the flurry of activity and transience of emotion experienced by a child from one day to the next.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 63,
                lyric: [
                    `Didi`,
                    {
                        anchor: `made an "accident"`,
                        annotation: {
                            description: `After I soil my pants, the nurse places them in a shopping bag for me to carry home, and fits me into an abandoned pair of overalls.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `in class,`
                ]
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
                        annotation: [
                            {
                                description: [
                                    {
                                        anchor: `Safeway`,
                                        wiki: `Safeway_Inc.`
                                    },
                                    `is a supermarket chain located in the western and central United States.`
                                ]
                            },
                            {
                                portal: {
                                    portalKey: `safeway_paper_bag`
                                }
                            }
                        ]
                    }
                ]
            },
            {
                time: 80,
                lyric: `decked in overalls from the lost and found.`
            },
            {
                unitMap: true,
                stanzaType: VERSES
            }
        ],
        [
            {
                time: 85,
                lyric: [
                    `Didi, you've`,
                    {
                        anchor: `been in the bath`,
                        annotation: {
                            description: `After coming home, I soak in the bathtub until well into the evening.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `all this time.`
                ]
            },
            {
                time: 91,
                lyric: `Didi, come out, you can't soak there all night.`
            },
            {
                unitMap: true,
                stanzaType: PRECHORUS,
                substanzaType: RESPONSE,
                substanza: [
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
                    {
                        anchor: `crooked thieves`,
                        annotation: {
                            description: ``,
                            portal: `crooked_thieves`
                        }
                    },
                    `with your`,
                    {
                        anchor: `sheriff's badge and gun…`,
                        annotation: {
                            description: `After China stripped Taiwan of international recognition, a bootleg industry emerged to serve a generation of Taiwanese teenagers like my mother who prized all things deemed American. My sister and I thus grew up listening to her country records and watching old Westerns.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [REFERENCE]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                stanzaType: BRIDGE
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
                                [BACKSTORY]: true
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
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: `I dampened the lead guitar strings by wrapping tissue around them near the bridge.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: BRIDGE,
                subsequent: true
            }
        ],
        [
            {
                time: 123,
                centre: {
                    italic: `(whistles)`
                }
            },
            {
                unitMap: true,
                stanzaType: REFRAIN
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
                stanzaType: PRECHORUS
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
                stanzaType: CHORUS
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
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: [
                            `The song ends in G\u2011flat major, the remaining major triad belonging to the`,
                            {
                                anchor: `octatonic collection`,
                                wiki: `Octatonic_scale`
                            },
                            `shared by the major triads of A, C, and E\u2011flat, to suggest the excitement of undiscovered vistas ahead.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 163,
                centre: {
                    italic: `(fade out)`
                }
            },
            {
                unitMap: true,
                stanzaType: OUTRO
            }
        ],
        [
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: [
                            `As I made this album, indie rock was congealing around the belief that recordings merely serve to showcase live shows. So my homage to`,
                            {
                                italic: `Pet Sounds`
                            },
                            `was also meant as a gentle reminder that`,
                            {
                                anchor: `Brian Wilson's`,
                                wiki: `Brian_Wilson`
                            },
                            `masterpiece was never performed live in its own time, precisely because it was paving the way for what had yet to be achieved onstage. And far from being dismissed as a hobby project, it now tops most lists of rock's greatest albums. But`,
                            {
                                italic: `Yearling's Bobtail`
                            },
                            `was dead upon arrival, proving my fears well-founded. So this Didi did have to know some things after all…`
                        ],
                        dotKeys: {
                            [AFTERWORD]: true,
                            [OBSERVATION]: true
                        }
                    }
                }
            }
        ]
    ],
    tasks: [
        {
            taskName: `review tense and categorisation`,
            workedHours: 0,
            neededHours: 1
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
            taskName: `tenses and categorisation`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `separate annotations into dot categories`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `rough illustration synopses`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `music annotations`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `review synopses and rough illustrations`,
            workedHours: 2,
            neededHours: 2
        }
    ]
}
