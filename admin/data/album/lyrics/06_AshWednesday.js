import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGCRAFT
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
    overview: `In college, I met my first girlfriend. Catherine was a nice Catholic girl and former valedictorian, who didn't think much of my nonexistent reading habit and broke up with me right before Ash Wednesday. So I ashed my forehead and tried to bump into her that day, thinking if she could picture me as a good Catholic boy, then I might get another chance. It didn't work, but I did grow into a faithful reader, and I have Catherine to thank for that.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        {
                            anchor: `Ash Wednesday`,
                            wiki: `Ash_Wednesday`
                        },
                        `is the first day of`,
                        {
                            anchor: `Lent,`,
                            wiki: `Lent`
                        },
                        `a period of fasting observed by Christians to memorialize the forty days that`,
                        {
                            anchor: `Jesus`,
                            wiki: `Jesus`
                        },
                        `spent fasting in the desert.`
                    ]
                }
            }
        },
        {
            unitMap: {
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 0,
                    lyric: [
                        {
                            anchor: `O Catherine! My Catherine!`,
                            properNoun: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Walt Whitman`,
                                        wiki: `Walt_Whitman`
                                    },
                                    `wrote his elegy`,
                                    {
                                        anchor: `"O Captain! My Captain!"`,
                                        wiki: `O_Captain!_My_Captain!`
                                    },
                                    `upon hearing of`,
                                    {
                                        anchor: `Abraham Lincoln's`,
                                        wiki: `Abraham_Lincoln`
                                    },
                                    `assassination.`
                                ],
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        },
                        `our`,
                        {
                            anchor: `futile trip`,
                            card: {
                                description: [
                                    `I headed for the`,
                                    {
                                        anchor: `San Francisco Bay Area`,
                                        wiki: `San_Francisco_Bay_Area`
                                    },
                                    `to attend college. There I met Catherine, a fellow freshman, in a class on European folklore.`
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
                            card: {
                                description: `My relationship with Catherine began the same way my friendship with Sasha had a decade earlier. Which is to say, I latched onto the first cute person to show me any small kindness in a new environment, and then I tried to make myself indispensable in small ways.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `in my`,
                        {
                            anchor: `bookless room,`,
                            card: {
                                description: `Glancing around my room one night, Catherine remarked that she didn't see any books. "I don't read," I explained, only partly in jest.`,
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
                            card: {
                                description: [
                                    `A reference to the classic`,
                                    {
                                        anchor: `"Who's buried in Grant's tomb?"`,
                                        wiki: `Grant's_Tomb`
                                    },
                                    `riddle, of course, but also to James Joyce's masterpiece novel`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Ulysses,`,
                                            wiki: `Ulysses_(novel)`
                                        }
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
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `For a song about two people who couldn't be more different, I juxtaposed`,
                        {
                            anchor: `Arabic maqam`,
                            wiki: `Arabic_maqam`
                        },
                        `in the verses with`,
                        {
                            anchor: `Renaissance polyphony`,
                            wiki: `Polyphony`
                        },
                        `in the final chorus.`
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true
                    }
                }
            }
        },
        {
            unitMap: {
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
                            cards: [
                                {
                                    description: [
                                        `Like those with`,
                                        {
                                            anchor: `Tourette syndrome`,
                                            wiki: `Tourette_syndrome`
                                        },
                                        `who suffer from involuntary tics, Catherine and I might have said some things on impulse during the breakup. Also, Jesus was laid "to rest" on the day of his crucifixion.`
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
                            card: {
                                description: `Catherine wanted to break up; I didn't. But she was leaving me behind in another sense, given that hers was the only "soul" awaiting "ascent."`,
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
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `The shrieking recorders mimic the sound of`,
                        {
                            anchor: `BART`,
                            wiki: `Bay_Area_Rapid_Transit`
                        },
                        `trains braking in a subway tunnel beneath the sidewalk. They were made by overblowing individual pitches that were then spliced together to form descending arpeggios— triplets for the soprano recorder, quadruplets for the tenor.`
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true
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
                                    description: `Up to that point, I had only devoted serious thought to writing melodies and chord progressions. It had never occurred to me that anyone could listen to music differently. But Catherine appreciated music for its lyrics, and because mine were of the nonsensical variety, she wasn't impressed by the kind of songs I wrote.`,
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
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 46,
                    lyric: [
                        `Oh Catherine,`,
                        {
                            anchor: `pressed for an opinion,`,
                            cards: [
                                {
                                    description: `Wanting to write the kind of song that could tug on Catherine's heartstrings, I would sometimes ask her for honest feedback.`,
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: `In this imagined scenario, I picture myself asking Catherine for a critique of the lyrics in this very song.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                }
                            ]
                        },
                        `sighed,`
                    ]
                },
                {
                    time: 50,
                    lyric: [
                        {
                            anchor: `"My, what wit, man,"`,
                            card: {
                                description: `I imagine Catherine responding, in typical droll fashion, with a pun that both salutes my attempts at being witty and also compliments my effort to channel "Walt Whitman."`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `putting down her Joyce,`,
                            card: {
                                description: [
                                    `Her compliment is less than sincere, however, since referencing a poet studied by middle schoolers is hardly an artistic feat. And so, having being made to put down the Joyce novel she was reading, Catherine amuses herself by figuratively putting`,
                                    {
                                        isItalic: true,
                                        lyric: `me`
                                    },
                                    `down, for naively thinking that I can be the James Joyce of song lyricists.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                            card: {
                                description: [
                                    `Of course, not knowing that I couldn't be the next Joyce is precisely why I dared to try. And so the idea began to congeal in my head that I could do for rock music what`,
                                    {
                                        isItalic: true,
                                        lyric: `Ulysses`
                                    },
                                    `had done for English literature.`
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
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Maqam is distinguished by its use of`,
                        {
                            anchor: `quarter tones,`,
                            wiki: `Quarter_tone`
                        },
                        `which are absent in the Western`,
                        {
                            anchor: `chromatic scale.`,
                            wiki: `Chromatic_scale`
                        },
                        `Since I didn't own any Arabic instruments, I sounded the quarter tones by detuning each instrument and then`,
                        {
                            anchor: `overdubbed`,
                            wiki: `Overdubbing`
                        },
                        `them in as a separate take.`
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true
                    }
                }
            }
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
                            card: {
                                description: `Catherine didn't value the artistic strengths I had always counted on to cover up my weaknesses. Which made me realize that if I hoped to be good at keeping someone, then I simply couldn't have any weaknesses.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
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
                        `In Western music, a minor third can only be divided into unequal steps, whole and half, while a major third can be divided into equal whole steps. But a quarter tone placed exactly halfway across a minor third allows it to be traversed in two equal steps. This creates the confusing sensation of a squished major third, which fascinated my ears. As a result, I possibly went overboard with all the rapid-fire minor third runs played here on the`,
                        {
                            anchor: `Dobro.`,
                            wiki: `Dobro`
                        }
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true
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
                    time: 76,
                    lyric: [
                        `And as I pace, stranded here`,
                        {
                            anchor: `outside her Shelta,`,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `Irish Travellers`,
                                        wiki: `Irish_Travellers`
                                    },
                                    `are a predominantly`,
                                    {
                                        anchor: `Catholic`,
                                        wiki: `Catholic_Church`
                                    },
                                    `ethnic group. They speak a cryptic language known as`,
                                    {
                                        anchor: `Shelta`,
                                        wiki: `Shelta`
                                    },
                                    `that is intended to exclude outsiders from comprehension. Catherine wasn't actually a Traveller, but either way, I was stuck outside her "shelter."`
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
                            card: {
                                description: [
                                    `Catherine was the one who introduced me to the music of Leonard Cohen. It was her impassioned reading of his song`,
                                    {
                                        anchor: `"Famous Blue Raincoat"`,
                                        wiki: `Famous_Blue_Raincoat`
                                    },
                                    `that helped me understand the heights that great lyrics can reach.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        {
                            anchor: `unknown to roam,`,
                            cards: [
                                {
                                    description: `If Catherine is a figurative Traveller, then I am unwelcome to follow her itinerant community that is well-known to roam.`,
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    description: [
                                        `"Raincoat" is a euphemism for`,
                                        {
                                            anchor: `condoms,`,
                                            wiki: `Condom`
                                        },
                                        `which are famously unknown to`,
                                        {
                                            anchor: `"Rome"`,
                                            wiki: `Rome`
                                        },
                                        `due to the Catholic Church's stance against`,
                                        {
                                            anchor: `birth control.`,
                                            wiki: `Birth_control`
                                        },
                                        `Catherine and I never went all the way due to her vow not to engage in`,
                                        {
                                            anchor: `premarital sex,`,
                                            wiki: `Premarital_sex`
                                        },
                                        `though I always held out the hope.`
                                    ],
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
                            card: {
                                description: [
                                    `Having decided to win Catherine back by reading more books, I began with those we'd discussed. Catherine had mentioned that "Famous Blue Raincoat" echoes a similar theme of purification through betrayal found in Cohen's novel`,
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
                            card: {
                                description: [
                                    {
                                        anchor: `Kateri Tekakwitha,`,
                                        wiki: `Kateri_Tekakwitha`
                                    },
                                    `baptized as Saint Catherine, was the Catholic Church's first`,
                                    {
                                        anchor: `Native American`,
                                        wiki: `Native_Americans_in_the_United_States`
                                    },
                                    `saint. Her story figures prominently in`,
                                    {
                                        isItalic: true,
                                        lyric: `Beautiful Losers,`
                                    },
                                    `and so I always assumed that "going clear" was a reference to the legend that her`,
                                    {
                                        anchor: `smallpox`,
                                        wiki: `Smallpox`
                                    },
                                    `scars miraculously vanished upon her death.`
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
                            card: {
                                description: [
                                    `Kateri Tekakwitha was born to a`,
                                    {
                                        anchor: `Mohawk`,
                                        wiki: `Mohawk_people`
                                    },
                                    `chief and an`,
                                    {
                                        anchor: `Algonquin`,
                                        wiki: `Algonquin_people`
                                    },
                                    `woman he had captured in a raid upon her village. Dorothy Parker belonged to the`,
                                    {
                                        anchor: `Algonquin Round Table,`,
                                        wiki: `Algonquin_Round_Table`
                                    },
                                    `a social circle of New York City writers known for their clever wordplay and wit. To answer why Catherine left me, then, this metaphor humorously suggests it was out of fear I would take her away from her friends, being too dim-witted as I was to socialize with them.`
                                ],
                                dotKeys: {
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
                formType: BRIDGE
            },
            mainVerses: [
                {
                    time: 95,
                    lyric: [
                        `Well yes, I`,
                        {
                            anchor: `faked this X,`,
                            cards: [
                                {
                                    description: `On Ash Wednesday, the priest smears ash in the shape of a cross on each parishioner's forehead. But I had ashed myself without the benefit of a mirror, so my cross was slanted like the letter X.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [REFERENCE]: true
                                    }
                                },
                                {
                                    description: `Since Catherine insisted on going no further than heavy petting, I would fake "the sex" for myself by masturbating afterward.`,
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
                            card: {
                                description: [
                                    `The ash used on Ash Wednesday comes from burning the palm branches that were blessed on the previous year's`,
                                    {
                                        anchor: `Palm Sunday.`,
                                        wiki: `Palm_Sunday`
                                    },
                                    `But mine had come from a cigarette butt that had been recently put out in an outdoor ashtray, so the palms I speak of here are actually my hands.`
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
                                    card: {
                                        description: [
                                            {
                                                anchor: `Henry IV`,
                                                wiki: `Henry_IV_of_France`
                                            },
                                            `of France was born a`,
                                            {
                                                anchor: `Protestant`,
                                                wiki: `Protestantism`
                                            },
                                            `but converted to Catholicism to gain the French royal crown. He is reputed to have remarked,`,
                                            {
                                                isItalic: true,
                                                lyric: `"Paris vaut bien une messe,"`
                                            },
                                            `or "Paris is well worth a Mass," implying that spiritual allegiances are superseded by earthly ambitions. Similarly, I would have happily turned Catholic if that could get Catherine to stay.`
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
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `The rainstick, rustling papers, and tambourine create the setting of a wet and windy`,
                        {
                            anchor: `Oakland`,
                            wiki: `Oakland,_California`
                        },
                        `street.`
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true
                    }
                }
            }
        },
        {
            unitMap: {
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
                            card: {
                                description: [
                                    `It always confused me why the Catholic Church extends its`,
                                    {
                                        anchor: `pro-life stance`,
                                        wiki: `Catholic_Church_and_abortion`
                                    },
                                    `to the unborn of other faiths. After all, this just ends up trading the certainty of an`,
                                    {
                                        anchor: `aborted fetus`,
                                        wiki: `Abortion`
                                    },
                                    `going to heaven for the living child's likelihood of going to hell.`
                                ],
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
                            card: {
                                description: [
                                    `At some point, I learned to see`,
                                    {
                                        anchor: `comedy`,
                                        wiki: `Comedy`
                                    },
                                    `and`,
                                    {
                                        anchor: `tragedy`,
                                        wiki: `Tragedy`
                                    },
                                    `as two sides of the same coin. After all, any misfortune can be made into song, writing a song calls for taking the broader view, and looking broadly enough will expose the comic underbelly of every misfortune. So I always preferred a negative outcome to none at all, making everything I did feel like a stage act.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
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
                        `When I wrote this three-part counterpoint for mandolins and banjo, I wasn't aware that they would drown out the vocals by occupying the same register. I solved the problem by`,
                        {
                            anchor: `pitch shifting`,
                            wiki: `Pitch_shift`
                        },
                        `some tracks up an octave, giving them a metallic sheen that suits the ambience of a rainy evening.`
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true
                    }
                }
            }
        },
        {
            unitMap: {
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
                            card: {
                                description: [
                                    `My ash was smudged by day's end, resembling the kind of large, amorphous mole that can develop into`,
                                    {
                                        anchor: `melanoma.`,
                                        wiki: `Melanoma`
                                    },
                                    `Which is fitting, since it was probably sick of me to fake being Catholic.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
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
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `While fleshing out the lyrics in this chorus, I noticed that a handful of words in the first stanza are`,
                        {
                            anchor: `homophones`,
                            wiki: `Homophone`
                        },
                        `of their counterparts in the second, like "mourn" with "morn," and "born" with "borne." So I challenged myself to make the two stanzas match phonetically wherever possible. This later gave me the idea for doublespeaker rhyme.`
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true
                    }
                }
            }
        }
    ]
}
