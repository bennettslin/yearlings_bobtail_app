import {
    AFTERWORD,
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    REFERENCE,
    SONGWRITING
} from '../../../../app/constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    RESPONSE,
    INTRO,
    OUTRO,
    REFRAIN,
    FLASHBACK_TO_WORMHOLE_PREFIX,
    IS_UNIT_DOT
} from '../../../../app/constants/lyrics'

export default {
    title: 'Didi (弟弟)',
    duration: 177,
    overview: `As a child, I depended on my older sister to do most everything for me, like zipping up my jacket. One day when she wasn't around to help, I pooped my pants and had to be sent home from school.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `In the Chinese language,`,
                        {
                            isItalic: true,
                            lyric: `didi`
                        },
                        `means "little brother." My parents immigrated to the United States from`,
                        {
                            anchor: `Taiwan,`,
                            wiki: `Taiwan`
                        },
                        `a Pacific island that was taken over by the Chinese in 1949. The`,
                        {
                            anchor: `Taiwanese`,
                            wiki: `Taiwanese_Hokkien`
                        },
                        `we spoke at home thus included a healthy sprinkle of Chinese words.`
                    ],
                    dotKeys: {
                        [BACKSTORY]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: INTRO
            },
            mainVerses: [
                {
                    time: 0,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Bennett's theme)`
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Toy instruments abound in this song sung from the perspective of my sister as a child. Here, autoharp and glockenspiel lead into an intro that recalls the first few measures of`,
                        {
                            anchor: `"Wouldn't It Be Nice,"`,
                            wiki: `Wouldn't_It_Be_Nice`
                        },
                        `the opening song of the 1966`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Beach Boys`,
                                wiki: `The_Beach_Boys`
                            }
                        },
                        `album`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Pet Sounds.`,
                                wiki: `Pet_Sounds`
                            }
                        }
                    ],
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: REFRAIN
            },
            mainVerses: [
                {
                    time: 11,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(whistles)`
                    }
                }
            ]
        },
        {
            unitMap: {
                formType: VERSES
            },
            mainVerses: [
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
                            cards: [
                                {
                                    description: [
                                        `In preschool, we were taught to tie our shoes by making the`,
                                        {
                                            anchor: `bunny criss-cross the tree.`,
                                            wiki: `Shoelace_knot`
                                        },
                                        `Being left-handed, however, I was never clear on which hand should hold the bunny. My shoelaces always came undone as a result.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `shoelaces`,
                                        wormholePrefix: FLASHBACK_TO_WORMHOLE_PREFIX
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
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `My ambition for this album was to do for rock music what`,
                        {
                            anchor: `James Joyce`,
                            wiki: `James_Joyce`
                        },
                        `had done for modern literature. Since his semi-autobiographical first novel,`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `A Portrait of the Artist as a Young Man,`,
                                wiki: `A_Portrait_of_the_Artist_as_a_Young_Man`
                            }
                        },
                        `begins in the simple prose of a child, I decided to do the same with this opening song.`
                    ],
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 40,
                    lyric: [
                        `Didi, you've been following, I`,
                        {
                            anchor: `didn't want you here.`,
                            card: {
                                description: `I often tagged along with my sister, who was fiercely protective of me. But there were times when she and her friends would go off to do girl stuff by themselves. This always left me in a panic, since I had few playmates of my own.`,
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
                }
            ]
        },
        {
            unitMap: {
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 52,
                    lyric: [
                        `Cause I get sick of hearing,`,
                        {
                            anchor: `"Zeizei,`,
                            card: {
                                description: [
                                    {
                                        isItalic: true,
                                        lyric: `Zeizei`
                                    },
                                    `means "big sister" in Chinese. When speaking for me, my mother would address her as I would.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `I wanted the music here to evoke the flurry of activity and transience of emotion that a child experiences from one day to the next. And so the rhythm lurches to and from a`,
                        {
                            anchor: `half-time beat,`,
                            wiki: `Half-time_(music)`
                        },
                        `while the harmonic progression tirelessly modulates between the`,
                        {
                            anchor: `distantly related keys`,
                            wiki: `Closely_related_key`
                        },
                        `of A, C, and E\u2011flat major.`
                    ],
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 63,
                    lyric: [
                        `Didi`,
                        {
                            anchor: `made an "accident"`,
                            todo: true,
                            card: {
                                description: `Upon pooping my pants, I kept quiet at my desk. I think someone finally noticed the stink and alerted the teacher, who then brought me to the nurse's office.`,
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
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Safeway`,
                                            wiki: `Safeway_Inc.`
                                        },
                                        `was a supermarket chain in my area when I was growing up.`
                                    ]
                                },
                                {
                                    wormhole: `safeway_paper_bag`
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 80,
                    lyric: [
                        {
                            anchor: `decked in overalls`,
                            todo: true,
                            card: {
                                description: `Since I was the smallest child in my grade, the only item of clothing that fit me was an abandoned pair of girls' overalls. After helping me dress, the nurse placed my soiled pants in a shopping bag for me to take home.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `from the lost and found.`
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: PRECHORUS,
                subVerseType: RESPONSE
            },
            mainVerses: [
                {
                    time: 85,
                    lyric: [
                        `Didi, you've`,
                        {
                            anchor: `been in the bath`,
                            todo: true,
                            card: {
                                description: `After my mother came to pick me up and drop me off at home, I spent a good long while trying to bathe myself. Since I didn't know how to take showers and was too afraid to try, I had to just keep draining and refilling the bathtub until I was clean.`,
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
                }
            ],
            subVerse: [
                {
                    time: 97,
                    lyric: {
                        isItalic: true,
                        lyric: `Don't little raisin fingers need to dry?`
                    }
                }
            ]
        },
        {
            unitMap: {
                formType: BRIDGE
            },
            mainVerses: [
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
                            card: {
                                description: ``,
                                wormhole: `crooked_thieves`
                            }
                        },
                        `with your`,
                        {
                            anchor: `sheriff's badge and gun…`,
                            todo: true,
                            card: {
                                description: `Though the Taiwanese teenagers of my mother's generation prized all things American, their only exposure to American culture was through a bootleg industry that mostly recycled the relics of its past. And so my sister and I grew up listening to my mother's old country records and sharing her fondness for old Westerns.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `"Wouldn't It Be Nice" is once again evoked here, this time by modulating down a minor third to segue into the bridge.`
                    ],
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: BRIDGE,
                subsequent: true
            },
            mainVerses: [
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
                            card: {
                                description: `My sister used to cut out pictures of pop stars from teenybopper magazines and tape them to our bathroom mirror.`,
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
                            card: {
                                wormhole: `finally_become_someone`
                            }
                        }
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `To mimic the subdued twangs of music boxes and thumb pianos that characterize children's music, I dampened the lead guitar strings by wrapping strips of tissue around them near the bridge.`,
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: REFRAIN
            },
            mainVerses: [
                {
                    time: 123,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(whistles)`
                    }
                }
            ]
        },
        {
            unitMap: {
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 129,
                    lyric: `Didi dear, I'm sorry that I yelled at you that way.`
                },
                {
                    time: 135,
                    lyric: `Didi dear, I know today just wasn't your day.`
                }
            ]
        },
        {
            unitMap: {
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 141,
                    lyric: `And now I think all I want is my Didi well by tomorrow,`
                },
                {
                    time: 146,
                    lyric: `and there are things I hope my Didi will never know.`
                }
            ]
        },
        {
            unitMap: {
                formType: CHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 152,
                    lyric: `Yes, and now I think all I want is my Didi well by tomorrow,`
                },
                {
                    time: 158,
                    lyric: `and there are things I hope Didi will never have to know.`
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `A, C, and E\u2011flat, the three distantly related major keys heard thus far, also comprise three of the four triads of an`,
                        {
                            anchor: `octatonic collection.`,
                            wiki: `Octatonic_scale`
                        },
                        `The song now ends on G\u2011flat, the fourth and final triad of the collection, to suggest the excitement of undiscovered vistas that await a young child.`
                    ],
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: OUTRO
            },
            mainVerses: [
                {
                    time: 163,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(fade out)`
                    }
                }
            ]
        },
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    // . In its time,`,
                    //     {
                    //         isItalic: true,
                    //         lyric: `Pet Sounds`
                    //     },
                    //     `was a pioneering work in the field of sound recording, and with the increasing affordability of home studios in the early 2000s, I sensed that the next wave of advancement was afoot. My hope was to be part of this wave by pointing to new artistic directions that were only now made possible with the latest tools, much like Beach Boys leader Brian Wilson had done with his magnum opus. And so I wanted this homage to be anything but subtle
                    description: [
                        `Since`,
                        {
                            isItalic: true,
                            lyric: `Pet Sounds`
                        },
                        `was never performed live in its own time, I had faith that feasibility of live performance could once again be an afterthought, as masses of new artists pushed the limits of sound recording to new heights. Instead, indie rock stuck to its guns, insisting as always that new artists could hope to gain exposure only by playing live shows. The excitement lay in seeing how the latest technology might be used to navigate this familiar path. But no new paths were to be forged. And so upon its release,`,
                        {
                            isItalic: true,
                            lyric: `Yearling's Bobtail`
                        },
                        `quickly fell by the wayside. There was no part for it to play in the narrative of our times that was being written.`
                    ],
                    dotKeys: {
                        [AFTERWORD]: true,
                        [OBSERVATION]: true
                    }
                }
            }
        }
    ]
}
