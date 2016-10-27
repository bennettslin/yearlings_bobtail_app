import { VERSES, PRECHORUS, CHORUS, BRIDGE } from 'helpers/constants'

module.exports = {
    title: {
        anchor: `Ash Wednesday`,
        annotation: {
            description: `Ash Wednesday is the first day of Lent, a period of fasting observed by Christians to memorialise the forty days that Jesus spent fasting in the desert.`
        }
    },
    totalTime: 163,
    overviews: {
        narrative: `In college, I dated a nice Catholic girl named Catherine, who didn't think much of my lack of reading habit and broke up with me right before Ash Wednesday, the first day of Lent. So I decided to ash my own forehead and bump into her, thinking that if she could picture me as a good Catholic boy, I might get another chance. It didn't happen, but I did grow into a faithful reader, and I probably have Catherine to thank for that.`,
        music: `For a song about two people who couldn't be more different, I juxtaposed Arabic maqam and Renaissance polyphony. The quartertones were recorded by playing each instrument in two takes, the second time tuned a quarter step flat. The shrieking whistles, which remind me of trains braking in a subway tunnel, were made by overblowing into recorders.`
    },
    lyrics: [
        [
            {
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
                    annotation: {
                        description: ``,
                        dotKeys: {
                            music: true
                        }
                    }
                }
            }
        ],
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
                                `after hearing of Abraham Lincoln's assassination. I don't remember why I chose to reference it. I was probably whimpering "Oh Catherine" under my breath a lot right after the breakup.`
                            ],
                            dotKeys: {
                                pun: true,
                                backstory: true,
                                narrative: true,
                            },
                        }
                    },
                    `our futile trip is done`
                ]
            },
            {
                time: 6,
                lyric: [
                    `where it commenced: in my`,
                    {
                        anchor: `bookless room,`,
                        annotation: [
                            {
                                description: `Glancing around my room one night, Catherine remarked that she didn't see any books. "I don't read," I said, only partly in jest. In hindsight, that was probably the beginning of the end.`,
                                dotKeys: {
                                    foreshadow: true,
                                    music: true
                                }
                            },
                            {
                                description: `testing testing testing`,
                                dotKeys: {
                                    pulpit: true
                                }
                            }
                        ]
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
                                `riddle, of course, but also to James Joyce's masterpiece novel. It was Catherine's admiration for Joyce that later motivated me to create "the`,
                                {
                                    italic: `Ulysses`
                                },
                                `of rock albums."`
                            ]
                        }
                    },
                    `surely buried she'd be!`
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
                    annotation: {
                        description: ``,
                        dotKeys: {
                            music: true
                        }
                    }
                },
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 16,
                lyric: [
                    `First we`,
                    {
                        anchor: `laid Tourette's,`,
                        annotation: {
                            description: [
                                `Like those with`,
                                {
                                    anchor: `Tourette syndrome`,
                                    wiki: `Tourette_syndrome`
                                },
                                `who suffer from uncontrollable tics, we said and did things on impulse during the breakup. Also, Jesus was "laid to rest" on the first day…`
                            ]
                        }
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
                            description: `… Jesus then rose on the third day.`
                        }
                    },
                    `up and left, hers the`,
                    {
                        anchor: `sole assent…`,
                        annotation: {
                            description: `Catherine wanted to break up; I didn't. But hers was also to be the "sole ascent."`
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
                sectionClass: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 30,
                lyric: `Oh and for Catherine, St. Catherine of God,`
            },
            {
                time: 34,
                lyric: [
                    `I purge, with a`,
                    {
                        anchor: `dirge she'd deride,`,
                        annotation: {
                            description: `A dirge is a song of lament. Up to that point, I had only devoted serious thought to writing melodies and chord progressions. It never occurred to me that anyone could listen to music any differently. But Catherine appreciated music for its lyrics, and as such, she wasn't impressed by my songwriting skills.`
                        }
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
                sectionClass: PRECHORUS
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
                            description: `After committing to become a better lyricist, I would ask Catherine for her honest critique. In this imagined scenario that's perfectly telling of our actual relationship, she puts down the James Joyce novel that she's reading to compliment my attempt at writing a clever verse.`
                        }
                    },
                    `sighed,`
                ]
            },
            {
                time: 50,
                lyric: `"My, what wit, man," putting down her Joyce,`
            },
            {
                time: 54,
                lyric: [
                    {
                        anchor: `with "Joyce" oblivious`,
                        annotation: {
                            description: `Her compliment is insincere, however, as she secretly amuses herself by drolly observing, "My, Walt Whitman." After all, referencing a poet typically studied by middle schoolers is hardly a signifier of expressive ability. And so she's also figuratively putting me down, for my naive hope of becoming the James Joyce of lyricists.`
                        }
                    },
                    `to the trump she just played.`
                ]
            },
            {
                unitMap: true,
                sectionClass: VERSES
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
                            description: `Catherine didn't value the artistic strengths that I had always counted on to cover up my other weaknesses. Which made me realise that if I wanted to keep dating those so very unlike me, then I couldn't have any real weaknesses.`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: VERSES,
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
                                `The Irish Travellers, a predominantly Catholic ethnic group, speak a cryptic language known as`,
                                {
                                    anchor: `Shelta`,
                                    wiki: `Shelta`
                                },
                                `that is intended to exclude outsiders from comprehension. Catherine was of Irish descent, though not a Traveller. Either way, I was stuck "outside her shelter."`
                            ]
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
                                `that finally helped me to understand the heights that great lyrics can reach.`
                            ]
                        }
                    },
                    {
                        anchor: `unknown to roam,`,
                        annotation: {
                            description: `As an itinerant community, the Irish Travellers are certainly known to roam. Also, raincoats are a slang term for condoms, which are infamously "unknown to Rome" due to the Catholic Church's opposition to birth control. Catherine had vowed not to engage in premarital sex; otherwise, I would have eagerly gone all the way.`
                        }
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
                            ]
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
                            reference: `https://en.wikipedia.org/wiki/Beautiful_Losers`
                        }
                    },
                    {
                        anchor: `my Tekakwitha—`,
                        annotation: {
                            description: [
                                `The story of Kateri Tekakwitha, the Catholic Church's first Native American saint, figures prominently in`,
                                {
                                    italic: `Beautiful Losers.`
                                },
                                `I always assumed that "going clear" was a reference to the legend that Tekakwitha's smallpox scars miraculously vanished upon her death.`
                            ],
                            reference: `https://en.wikipedia.org/wiki/Kateri_Tekakwitha`
                        }
                    }

                ]
            },
            {
                time: '?',
                lyric: [
                    `for I lack the wit to spare a`,
                    {
                        anchor: `safe Algonquin abode.`,
                        annotation: {
                            description: `Kateri Tekakwitha was born to a Mohawk chief and an Algonquin woman whom he had captured through tribal warfare. Dorothy Parker was a member of the Algonquin Round Table, a social circle of New York City writers known for their clever wordplay and wit.`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS
            }
        ],
        [
            {
                time: 95,
                lyric: [
                    `Well yes, I`,
                    {
                        anchor: `faked this "X,"`,
                        annotation: {
                            description: `On Ash Wednesday, the priest smears ash in the shape of a cross on each parishioner's forehead. I ashed myself without the benefit of a mirror, so my cross was slanted like the letter X. Also, since Catherine insisted on going no further than kissing and petting, I would "fake the sex" for myself by masturbating afterwards.`,
                            reference: `https://en.wikipedia.org/wiki/Ash_Wednesday`
                        }
                    },
                    `I should confess,`
                ]
            },
            {
                time: 99,
                lyric: [
                    `using some old`,
                    {
                        anchor: `used cigarette.`,
                        annotation: {
                            description: `I got the ash from an outdoor ashtray.`
                        }
                    }
                ]
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
                            description: `The ash used comes from burning the palm branches that were blessed on the previous year's Palm Sunday.`,
                            reference: `https://en.wikipedia.org/wiki/Palm_Sunday`
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
                                    description: `Henry IV was born a Protestant but converted to Catholicism to gain the French royal crown. He is reputed to have remarked, "Paris est vaut bien une messe," meaning "Paris is well worth a Mass," implying that spiritual allegiances can be decided by earthly wants. Similarly, I would have happily become Catholic if that could get Catherine to stay.`,
                                    reference: `https://en.wikipedia.org/wiki/Henry_IV_of_France`
                                }
                            }
                        ],
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
                            description: `One admittedly juvenile argument against the Catholic Church's pro-life stance is that it makes no sense for unbelievers to be born at all, since it means trading the certainty of going to heaven for the likelihood of going to hell.`
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
                            description: `At some point, I learned to see comedy and tragedy as two sides of the same coin. After all, any misfortune can be turned into a song, writing a song calls for the broader view, and taking the broader view exposes the comedic underbelly of every misfortune. So I always preferred a negative outcome to no outcome, which then made it hard to deny that everything I did was just a stage act.`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: CHORUS
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
                        annotation: {
                            description: `By day's end, the ash was pretty smudged. Also, a spreading mole is a sign of cancer, which is fitting since I wasn't sure how sick it is to fake being Catholic.`
                        }
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
                        description: ``,
                        dotKeys: {
                            music: true
                        }
                    }
                }
            }
        ]
    ],
    tasks: [
        {
            taskName: `post-album annotations`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `music annotations`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `include references`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `sort out past and present tense`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `separate annotations into dot categories`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `annotations`,
            workedHours: 40,
            neededHours: 40
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
