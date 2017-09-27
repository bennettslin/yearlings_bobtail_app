import { BACKSTORY,
         NARRATIVE,
         OBSERVATION,
         PUN,
         REFERENCE,
         SONGWRITING } from '../constants/dots'
import { VERSES,
         PRECHORUS,
         CHORUS,
         BRIDGE,
         IS_DOT_STANZA } from '../constants/lyrics'

module.exports = {
    scenes: [
        {
            unitIndex: 1,
            description: `Bennett is standing outside his doorway at night, drenched in rain. Catherine is getting into a taxicab.`,
            actors: {
                bennett: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'standing forward, disappointed, defeated'
                },
                catherine: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'walking away, in a bad mood'
                }
            }
        },
        {
            unitIndex: 3,
            description: `In Bennett's thoughts, he and Catherine are together on the couch. She is putting down the book she is reading, while he is playing the guitar, a pencil and notepad in hand, implying that he is writing a song, looking at her inquisitively.`,
            actors: {
                bennett: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'sitting slouched, showing lyrics to Catherine'
                },
                catherine: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'sitting upright, droll smile'
                }
            }
        },
        {
            unitIndex: 5,
            description: `Bennett is standing in the rain at night, staring at a Catholic church across the street.`,
            actors: {
                bennett: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'standing, back forward, hands in pocket'
                }
            }
        },
        {
            unitIndex: 7,
            description: `Bennett is staring at an outdoor ashtray. Someone with a cross on their forehead is walking behind him in the other direction, while someone who has just put out a cigarette in the ashtray is walking in front of him, exhaling the smoke. Bennett looks back at the person behind him.`,
            actors: {
                bennett: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'side angle, noticing Catholic'
                },
                wade: {
                    catholic: {
                        todo: true,
                        workedHours: 1.25,
                        description: 'side angle, walking, looking pious'
                    }
                },
                amy: {
                    smoker: {
                        todo: true,
                        workedHours: 1.16,
                        description: 'walking up stairs, back forward, exhaling smoke'
                    }
                }
            }
        },
        {
            unitIndex: 8,
            description: `Bennett now has an ashed cross on his forehead, eyes closed and head held high, looking both pious and pompous. Catherine walks towards him from the other side of the stage.`,
            actors: {
                bennett: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'side, walking, looking pious'
                },
                catherine: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'walking forward, confused and curious at Bennett'
                }
            }
        }
    ],
    totalTime: 163,
    overview: `In college, I met my first girlfriend. Catherine was a nice Catholic girl and former valedictorian, who didn't think much of my nonexistent reading habit and broke up with me right before Ash Wednesday. So I decided to ash my forehead and bump into her that day, thinking that if she could picture me as a good Catholic boy, I might get another chance. It didn't happen, but I did grow into a faithful reader, and I have Catherine to thank for that.`,
    title: {
        anchor: `Ash Wednesday`,
        annotation: {
            description: [
                {
                    anchor: `Ash Wednesday`,
                    wiki: `Ash_Wednesday`
                },
                `is the first day of Lent, a period of fasting observed by Christians to memorialise the forty days that Jesus spent fasting in the desert.`
            ]
        }
    },
    lyrics: [
        [
            {
                time: 0,
                lyric: [
                    {
                        anchor: `O Catherine! My Catherine!`,
                        properNoun: true,
                        annotation: {
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
                            },
                        }
                    },
                    `our`,
                    {
                        anchor: `futile trip`,
                        annotation: {
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
                        },
                        todo: true
                    },
                    `is done`
                ]
            },
            {
                time: 6,
                lyric: [
                    {
                        anchor: `where it commenced:`,
                        annotation: {
                            description: `My relationship with Catherine began much in the same way as my friendship with Sasha had a decade earlier. That is, I latched onto the first cute person to show me any small kindness in a new environment, then tried to make myself indispensable in countless small ways.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        },
                        todo: true
                    },
                    `in my`,
                    {
                        anchor: `bookless room,`,
                        annotation: {
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
                        annotation: {
                            description: [
                                `A reference to the classic "Who's buried in`,
                                {
                                    anchor: `Grant's tomb"`,
                                    wiki: `Grant%27s_Tomb`
                                },
                                `riddle, of course, but also to James Joyce's masterpiece novel`,
                                {
                                    italic: `Ulysses,`
                                },
                                `which Catherine was reading at the time. In hindsight, that night was probably the beginning of the end, as Catherine surmised that a boyfriend who doesn't read would be the death of her.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `surely buried she'd be!`
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: [
                            `For a song about two people who couldn't be any more different, I juxtaposed`,
                            {
                                anchor: `Arabic maqam`,
                                wiki: `Arabic_maqam`
                            },
                            `in the first half with`,
                            {
                                anchor: `Renaissance polyphony`,
                                wiki: `Polyphony`
                            },
                            `in the second.`
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
                time: 16,
                lyric: [
                    `First we`,
                    {
                        anchor: `laid Tourette's,`,
                        annotation: [
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
                                portal: `laid_tourettes`
                            }
                        ]
                    },
                    `next regrets,`,
                ]
            },
            {
                time: 18,
                lyric: [
                    `the`,
                    {
                        anchor: `last day she rose`,
                        annotation: {
                            description: `Jesus rose as well on the third day.`,
                            dotKeys: {
                                [REFERENCE]: true
                            }
                        }
                    },
                    `up and left, hers the`,
                    {
                        anchor: `sole assent…`,
                        annotation: {
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
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
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
                stanzaType: VERSES,
                subsequent: true
            }
        ],
        [
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
                        annotation: [
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
            },
            {
                unitMap: true,
                stanzaType: PRECHORUS
            }
        ],
        [
            {
                time: 46,
                lyric: [
                    `Oh Catherine,`,
                    {
                        anchor: `pressed for an opinion,`,
                        annotation: {
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
                        annotation: {
                            description: `Her compliment is insincere, however, as she secretly amuses herself by drolly observing, "My, Walt Whitman."`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        },
                    },
                    {
                        anchor: `putting down her Joyce,`,
                        annotation: {
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
                        annotation: {
                            description: [
                                `Of course, not knowing that I couldn't be the next Joyce is precisely why I dared to try. The idea began to congeal in my head that I could do for rock music what`,
                                {
                                    italic: `Ulysses`
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
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
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
                stanzaType: VERSES
            }
        ],
        [
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
                        annotation: {
                            description: `Catherine didn't value the artistic strengths that I had always counted on to cover up my other weaknesses. Which made me realise that if I wanted to keep dating those so very unlike me, then I couldn't have any real weaknesses.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                stanzaType: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 76,
                lyric: [
                    `And as I pace, stranded here`,
                    {
                        anchor: `outside her Shelta,`,
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `Irish Travellers,`,
                                    wiki: `Irish_Travellers`
                                },
                                `a predominantly Catholic ethnic group, speak a cryptic language known as`,
                                {
                                    anchor: `Shelta`,
                                    wiki: `Shelta`
                                },
                                `that is intended to exclude outsiders from comprehension. Catherine was of Irish descent, but not a Traveller. Either way, I was stuck "outside her shelter."`
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
                        annotation: {
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
                        annotation: [
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
                        annotation: {
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
                        annotation: {
                            description: [
                                `Having decided to win Catherine back by reading more books, I began with those we'd discussed. Catherine had mentioned that "Famous Blue Raincoat" echoes a similar theme of purification through betrayal found in Cohen's earlier novel`,
                                {
                                    italic: `Beautiful Losers,`
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
                        annotation: {
                            description: [
                                `The story of`,
                                {
                                    anchor: `Kateri Tekakwitha,`,
                                    wiki: `Kateri_Tekakwitha`
                                },
                                `the Catholic Church's first Native American saint who was baptised as Saint Catherine, figures prominently in`,
                                {
                                    italic: `Beautiful Losers.`
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
                        annotation: {
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
            },
            {
                unitMap: true,
                stanzaType: PRECHORUS
            }
        ],
        [
            {
                time: 95,
                lyric: [
                    `Well yes, I`,
                    {
                        anchor: `faked this "X,"`,
                        annotation: [
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
                        annotation: {
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
                        italic: [
                            `Et`,
                            {
                                anchor: `Catherine vaut bien une messe…`,
                                properNoun: true,
                                annotation: {
                                    description: [
                                        {
                                            anchor: `Henry IV`,
                                            wiki: `Henry_IV_of_France`
                                        },
                                        `was born a Protestant but converted to Catholicism to gain the French royal crown. He is reputed to have remarked, "Paris est vaut bien une messe," meaning "Paris is well worth a Mass," implying that spiritual allegiances can be decided by earthly wants. Similarly, I would have happily become Catholic if that could get Catherine to stay.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                }
                            }
                        ],
                    }
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: `I wanted the rainstick, rustling papers, and tambourine to fill in the gaps between the lead parts without being obvious about it, and experimented with a few versions before settling on this one.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: BRIDGE
            }
        ],
        [
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
                        annotation: {
                            description: `I found it weird that the faithful should want unbelievers to be born at all, since it means trading the unborn child's certainty of going to heaven for their likelihood of going to hell.`,
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
                        annotation: {
                            portal: `spark_zips`
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
                        annotation: {
                            description: `At some point, I learned to see comedy and tragedy as two sides of the same coin. After all, any misfortune can be turned into a song, writing a song calls for the broader view, and taking the broader view exposes the comedic underbelly of every misfortune. So I always preferred a negative outcome to no outcome at all, which then made it hard to deny that everything I did was just a stage act.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
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
                stanzaType: CHORUS
            }
        ],
        [
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
                        annotation: [
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
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: [
                            `While fleshing out the lyrics in this chorus, I noticed that a handful of words in the first stanza corresponded with their`,
                            {
                                anchor: `homophones`,
                                wiki: `Homophone`
                            },
                            `in the second, so I made a game of matching the two stanzas as closely as possible. This later gave me the idea for doublespeaker rhyme.`],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS,
                subsequent: true
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
            taskName: `categorisation`,
            workedHours: 5,
            neededHours: 5
        },
        {
            taskName: `annotations`,
            workedHours: 40,
            neededHours: 40
        },
        {
            taskName: `include wiki urls`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `rough illustration synopses`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `separate annotations into dot categories`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `music annotations`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `review synopses and rough illustrations`,
            workedHours: 3,
            neededHours: 3,
        }
    ]
}
