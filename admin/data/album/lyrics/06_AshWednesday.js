import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGWRITING
} from '../../../../app/constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    IS_UNIT_DOT
} from '../../../../app/constants/lyrics'

export default {
    title: 'Ash Wednesday',
    duration: 163,
    overview: `In college, I met my first girlfriend. Catherine was a nice Catholic girl and former valedictorian, who didn't think much of my nonexistent reading habit and broke up with me right before Ash Wednesday. So I decided to ash my forehead and bump into her that day, thinking that if she could picture me as a good Catholic boy, I might get another chance. It didn't happen, but I did grow into a faithful reader, and I have Catherine to thank for that.`,
    lyricUnits: [
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            {
                                anchor: `Ash Wednesday`,
                                wiki: `Ash_Wednesday`
                            },
                            `is the first day of Lent, a period of fasting observed by Christians to memorialise the forty days that Jesus spent fasting in the desert.`
                        ]
                    }
                }
            }
        },
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `For a song about two people who couldn't be any more different, I juxtaposed`,
                            {
                                anchor: `Arabic maqam`,
                                wiki: `Arabic_maqam`
                            },
                            `in the song's first half with`,
                            {
                                anchor: `Renaissance polyphony`,
                                wiki: `Polyphony`
                            },
                            `in the second half.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 0,
                    lyric: [
                        {
                            anchor: `O Catherine! My Catherine!`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `Walt Whitman wrote his elegy`,
                                    {
                                        anchor: `"O Captain! My Captain!"`,
                                        wiki: `O_Captain!_My_Captain!`
                                    },
                                    `upon hearing of Abraham Lincoln's assassination.`
                                ],
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        },
                        `our`,
                        {
                            anchor: `futile trip`,
                            todo: true,
                            card: {
                                description: [
                                    `I headed for the`,
                                    {
                                        anchor: `San Francisco Bay Area`,
                                        wiki: `San_Francisco_Bay_Area`
                                    },
                                    `to attend college, where I met Catherine in a class on Western folklore.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `is done`
                    ]
                },
                {
                    time: 6,
                    lyric: [
                        {
                            anchor: `where it commenced:`,
                            todo: true,
                            card: {
                                description: `My relationship with Catherine began much in the same way as my friendship with Sasha had a decade earlier. That is, I latched onto the first cute person to show me any small kindness in a new environment, then tried to make myself indispensable in countless small ways.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `in my`,
                        {
                            anchor: `bookless room,`,
                            todo: true,
                            card: {
                                description: `Glancing around my room one night, Catherine remarked that she didn't see any books. "I don't read," I said, only partly in jest.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 10,
                    lyric: [
                        {
                            anchor: `Ulysses' tomb,`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `A reference to the classic "Who's buried in`,
                                    {
                                        anchor: `Grant's tomb"`,
                                        wiki: `Grant%27s_Tomb`
                                    },
                                    `riddle, of course, but also to James Joyce's masterpiece novel`,
                                    {
                                        isItalic: true,
                                        lyric: `Ulysses,`
                                    },
                                    `which Catherine was reading at the time. In hindsight, that night was probably the beginning of the end, as Catherine surmised that a boyfriend who didn't read for pleasure would be the death of her.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `surely buried she'd be!`
                    ]
                }
            ]
        },
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `The shrieking whistles, which remind me of`,
                            {
                                anchor: `BART`,
                                wiki: `Bay_Area_Rapid_Transit`
                            },
                            `trains braking in a subway tunnel underneath the sidewalk, were made by squeaking recorders, one soprano and one tenor.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: VERSES,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 16,
                    lyric: [
                        `First we`,
                        {
                            anchor: `laid Tourette's,`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Like those with`,
                                        {
                                            anchor: `Tourette syndrome`,
                                            wiki: `Tourette_syndrome`
                                        },
                                        `who suffer from uncontrollable tics, we said some things on impulse during the breakup. Also, Jesus was "laid to rest" on the day of his crucifixion.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    wormhole: `laid_tourettes`
                                }
                            ]
                        },
                        `next regrets,`
                    ]
                },
                {
                    time: 18,
                    lyric: [
                        `the`,
                        {
                            anchor: `last day she rose`,
                            todo: true,
                            card: {
                                description: `Jesus rose as well on the third day.`,
                                dotKeys: {
                                    [REFERENCE]: true
                                }
                            }
                        },
                        `up and left, hers the`,
                        {
                            anchor: `sole assent…`,
                            todo: true,
                            card: {
                                description: `Catherine wanted to break up; I didn't. And as the one believer between us, only she was to feel an "ascent."`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 23,
                    lyric: `But saving herself strictly for marriage, or really from me?`
                }
            ]
        },
        {
            unitMap: {
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 30,
                    // Note: I'm spelling out Saint, from St.
                    lyric: `Oh and for Catherine, Saint Catherine of God,`
                },
                {
                    time: 34,
                    lyric: [
                        `I purge, with a`,
                        {
                            anchor: `dirge she'd deride,`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `A`,
                                        {
                                            anchor: `dirge`,
                                            wiki: `Dirge`
                                        },
                                        `is a song of lament.`
                                    ]
                                },
                                {
                                    description: `Up to that point, I had only devoted serious thought to writing melodies and chord progressions. It never occurred to me that anyone could listen to music any differently. But Catherine appreciated music for its lyrics, and as such, she wasn't impressed by my songwriting skills.`,
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 38,
                    lyric: `with sadness, sad for what I am not:`
                },
                {
                    time: 42,
                    lyric: `a soul to share in her eternal life.`
                }
            ]
        },
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `The parts with quartertones were recorded in two takes, the second time with the instrument detuned a quarter step. An interesting thing about quartertones is that a note can sit exactly halfway between a minor third interval, creating the impression of a squished major third. I loved the confusion this caused my ears, and possibly went overboard in scoring such three-note runs for the`,
                            {
                                anchor: `Dobro.`,
                                wiki: `Dobro`
                            }
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 46,
                    lyric: [
                        `Oh Catherine,`,
                        {
                            anchor: `pressed for an opinion,`,
                            todo: true,
                            card: {
                                description: `After committing to be a better lyricist, I would often ask Catherine for an honest critique. In this imagined scenario that's perfectly telling of our relationship, she puts down the James Joyce novel that she's reading to compliment my attempt at writing a clever verse.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `sighed,`
                    ]
                },
                {
                    time: 50,
                    lyric: [
                        {
                            anchor: `"My, what wit, man,"`,
                            todo: true,
                            card: {
                                description: `Her compliment is insincere, however, as she secretly amuses herself by drolly observing, "My, Walt Whitman."`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `putting down her Joyce,`,
                            todo: true,
                            card: {
                                description: `After all, referencing a poet typically studied by middle schoolers is hardly an artistic feat. And so Catherine is also figuratively "putting me down," for naively daring to become the James Joyce of lyricists.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 54,
                    lyric: [
                        `with`,
                        {
                            anchor: `"Joyce" oblivious`,
                            todo: true,
                            card: {
                                description: [
                                    `Of course, not knowing that I couldn't be the next Joyce is precisely why I dared to try. The idea began to congeal in my head that I could do for rock music what`,
                                    {
                                        isItalic: true,
                                        lyric: `Ulysses`
                                    },
                                    `did for English literature.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `to the trump she just played.`
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: VERSES,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 62,
                    lyric: `Couldn't heaven, her heaven,`
                },
                {
                    time: 65,
                    lyric: `brimming over with smart boys, fit just one art boy`
                },
                {
                    time: 69,
                    lyric: [
                        `who tried but failed to win her heart`,
                        {
                            anchor: `poised with brains?`,
                            todo: true,
                            card: {
                                description: `Catherine didn't value the artistic strengths that I had always counted on to cover up my other weaknesses. Which made me realise that if I wanted to keep dating those so very unlike me, then I couldn't have any real weaknesses.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 76,
                    lyric: [
                        `And as I pace, stranded here`,
                        {
                            anchor: `outside her Shelta,`,
                            todo: true,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `Irish Travellers`,
                                        wiki: `Irish_Travellers`
                                    },
                                    `are a predominantly Catholic ethnic group. They speak a cryptic language known as`,
                                    {
                                        anchor: `Shelta`,
                                        wiki: `Shelta`
                                    },
                                    `that is intended to exclude outsiders from comprehension. Catherine was part Irish, but not a Traveller. Either way, I was stuck "outside her shelter."`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 80,
                    lyric: [
                        `in`,
                        {
                            anchor: `famous raincoat`,
                            todo: true,
                            card: {
                                description: [
                                    `Catherine introduced me to the music of Leonard Cohen. It was her impassioned reading of his song`,
                                    {
                                        anchor: `"Famous Blue Raincoat"`,
                                        wiki: `Famous_Blue_Raincoat`
                                    },
                                    `that helped me to understand the heights that great lyrics can reach.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        {
                            anchor: `unknown to roam,`,
                            todo: true,
                            cards: [
                                {
                                    description: `If Catherine is a figurative Traveller, then I am unwelcome to follow her itinerant community that is well-known to roam.`,
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    description: `"Raincoat" is a euphemism for condoms, which are famously unknown to "Rome" due to the Catholic Church's stance against birth control. Catherine and I never went all the way due to her vow not to engage in premarital sex, though I always held out the hope.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true,
                                        [REFERENCE]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 84,
                    lyric: [
                        `my`,
                        {
                            anchor: `girl in glasses`,
                            todo: true,
                            card: {
                                description: [
                                    `The critic`,
                                    {
                                        anchor: `Dorothy Parker,`,
                                        wiki: `Dorothy_Parker`
                                    },
                                    `whose wit Catherine admired, famously quipped that "men seldom make passes at girls who wear glasses."`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        {
                            anchor: `went clear—`,
                            todo: true,
                            card: {
                                description: [
                                    `Having decided to win Catherine back by reading more books, I began with those we'd discussed. Catherine had mentioned that "Famous Blue Raincoat" echoes a similar theme of purification through betrayal found in Cohen's earlier novel`,
                                    {
                                        isItalic: true,
                                        lyric: `Beautiful Losers,`
                                    },
                                    `particularly in its line, "Did you ever go clear?"`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [REFERENCE]: true
                                }
                            }
                        },
                        {
                            anchor: `my Tekakwitha—`,
                            todo: true,
                            card: {
                                description: [
                                    `The story of`,
                                    {
                                        anchor: `Kateri Tekakwitha,`,
                                        wiki: `Kateri_Tekakwitha`
                                    },
                                    `the Catholic Church's first Native American saint who was baptised as Saint Catherine, figures prominently in`,
                                    {
                                        isItalic: true,
                                        lyric: `Beautiful Losers.`
                                    },
                                    `I always assumed that "going clear" was a reference to the legend that her smallpox scars miraculously vanished upon her death.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }

                    ]
                },
                {
                    time: 88,
                    lyric: [
                        `for I lack the wit to spare a`,
                        {
                            anchor: `safe Algonquin abode.`,
                            todo: true,
                            card: {
                                description: [
                                    `Kateri Tekakwitha was born to a Mohawk chief and an Algonquin woman whom he had captured after a raid upon her village. Dorothy Parker was a member of the`,
                                    {
                                        anchor: `Algonquin Round Table,`,
                                        wiki: `Algonquin_Round_Table`
                                    },
                                    `a social circle of New York City writers known for their clever wordplay and wit.`
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: `I wanted the rainstick, rustling papers, and tambourine to fill in the gaps between the lead parts without being obvious about it, and experimented with a few versions before settling on this one.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: BRIDGE
            },
            mainVerses: [
                {
                    time: 95,
                    lyric: [
                        `Well yes, I`,
                        {
                            anchor: `faked this "X,"`,
                            todo: true,
                            cards: [
                                {
                                    description: `On Ash Wednesday, the priest smears ash in the shape of a cross on each parishioner's forehead. I ashed myself without the benefit of a mirror, so my cross was slanted like the letter X.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [REFERENCE]: true
                                    }
                                },
                                {
                                    description: `Since Catherine insisted on going no further than heavy petting, I would "fake the sex" for myself by masturbating afterwards.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `I should confess,`
                    ]
                },
                {
                    time: 99,
                    lyric: `using some old used cigarette.`
                },
                {
                    time: 104,
                    lyric: `"So you'd cheat your way into heaven," she might protest.`
                },
                {
                    time: 111,
                    lyric: [
                        `Well no, I know it's wrong, but I did`,
                        {
                            anchor: `burn my palms,`,
                            todo: true,
                            card: {
                                description: [
                                    `The ash used comes from burning the palm branches that were blessed on the previous year's`,
                                    {
                                        anchor: `Palm Sunday.`,
                                        wiki: `Palm_Sunday`
                                    },
                                    `Since I got the ash from an outdoor ashtray, the palms I burned were my hands.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 115,
                    lyric: `I guess that butt was still fresh.`
                },
                {
                    time: 119,
                    lyric: [
                        {
                            isItalic: true,
                            lyric: [
                                `Et`,
                                {
                                    anchor: `Catherine vaut bien une messe…`,
                                    properNoun: true,
                                    todo: true,
                                    card: {
                                        description: [
                                            {
                                                anchor: `Henry IV`,
                                                wiki: `Henry_IV_of_France`
                                            },
                                            `was born a Protestant but converted to Catholicism to gain the French royal crown. He is reputed to have remarked, "Paris est vaut bien une messe," meaning "Paris is well worth a Mass," implying that spiritual allegiances can be dictated by earthly wants. Similarly, I would have happily become Catholic if that could get Catherine to stay.`
                                        ],
                                        dotKeys: {
                                            [OBSERVATION]: true
                                        }
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `Not knowing much about orchestration at the time, I wrote a three-part counterpoint for mandolins and banjo that I didn't realise would crowd out the vocals until after I recorded it. I solved the problem by pitch shifting some tracks up an octave, giving them a metallic sheen that I think better suits the ambience of a rainy`,
                            {
                                anchor: `Oakland`,
                                wiki: `Oakland,_California`
                            },
                            `night.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 123,
                    lyric: `On this sad day to mourn`
                },
                {
                    time: 125,
                    lyric: [
                        `us wretched souls`,
                        {
                            anchor: `cursed to be born,`,
                            todo: true,
                            card: {
                                description: `It always confused me why the Catholic Church should extend its pro-life stance to the unborn of other faiths, since this means trading an aborted fetus's certainty of going to heaven for a living child's likelihood of going to hell.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 128,
                    lyric: [
                        `a`,
                        {
                            anchor: `spark zips through my head`,
                            todo: true,
                            card: {
                                wormhole: `spark_zips`
                            }
                        },
                        `to be`
                    ]
                },
                {
                    time: 130,
                    lyric: `mistaken for Catholic with some smeared ash;`
                },
                {
                    time: 136,
                    lyric: [
                        `to wear it like a`,
                        {
                            anchor: `tragic mask.`,
                            todo: true,
                            card: {
                                description: `At some point, I learned to see comedy and tragedy as two sides of the same coin. After all, any misfortune can be turned into a song, writing a song calls for the broader view, and taking the broader view exposes the comedic underbelly of every misfortune. So I always preferred a negative outcome to no outcome at all, which then made it hard to deny that everything I did was just a stage act.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `While fleshing out the lyrics in this chorus, I noticed that a handful of words in the first stanza were`,
                            {
                                anchor: `homophones`,
                                wiki: `Homophone`
                            },
                            `of their counterparts in the second, so I made a game of matching the two stanzas as closely as possible. This later gave me the idea for doublespeaker rhyme.`],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: CHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 138,
                    lyric: `On this Ash Wednesday morn,`
                },
                {
                    time: 140,
                    lyric: [
                        `in`,
                        {
                            anchor: `spreading mole`,
                            todo: true,
                            cards: [
                                {
                                    description: `By day's end, the ash was pretty smudged.`,
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: `A spreading mole is a sign of cancer, which is fitting since I wasn't sure how sick it is to fake being Catholic.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [REFERENCE]: true
                                    }
                                }
                            ]
                        },
                        `my sickness borne`
                    ]
                },
                {
                    time: 143,
                    lyric: `upon this head for all to see.`
                },
                {
                    time: 146,
                    lyric: `And maybe if Catherine sees, she'll ask,`
                },
                {
                    time: 151,
                    lyric: `"So where'd you attend Mass?"`
                }
            ]
        }
    ]
}