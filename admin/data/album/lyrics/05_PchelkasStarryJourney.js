import {
    AFTERWORD,
    BACKSTORY,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGWRITING,
    NARRATIVE
} from '../../../../app/constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    POSTCHORUS,
    BRIDGE,
    RESPONSE,
    INTRO,
    REFRAIN,
    IS_UNIT_DOT
} from '../../../../app/constants/lyrics'

/**
 * NOTE: Ash Wednesday and Pchelka`s Starry Journey have been switched from the
 * song list order on the album.
 */
export default {
    title: `Pchelka's Starry Journey`,
    duration: 211,
    overview: `At the height of my years of getting bullied, a strange letter arrived promising spiritual answers. With each new payment I sent, it was revealed to me that I belonged to a race of interstellar beings, with a mission to shut myself from the world. I did so by being unresponsive like my brother, and felt a psychic bond with him as a result. But as my sanity chipped away, I came to see that I was in a mail-order cult.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `Pchelka and Mushka were dogs sent into orbit under the`,
                        {
                            anchor: `Soviet space program.`,
                            wiki: `Soviet_space_dogs`
                        },
                        `In this allegorical retelling, I imagine myself as Pchelka and my brother as Mushka.`
                    ],
                    dotKeys: {
                        [OBSERVATION]: true
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
                    lyric: {
                        isEmphasis: true,
                        lyric: [
                            `But F., that man is the`,
                            {
                                anchor: `worst nuisance on the beach.`,
                                todo: true,
                                card: {
                                    description: [
                                        `While being in a mail-order cult was a painful experience, there is a comic absurdity to it as well, which this line from`,
                                        {
                                            anchor: `Leonard Cohen's`,
                                            wiki: `Leonard_Cohen`
                                        },
                                        `otherwise tragic`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `Beautiful Losers`,
                                                wiki: `Beautiful_Losers`
                                            }
                                        },
                                        `captures beautifully. In one scene, the character F. tires of getting bullied at the beach. He signs up for the Charles Axis bodybuilding course advertised in a comic book, only to discover that Charles Axis is the one who bullies him.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true
                                    }
                                }
                            }
                        ]
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `I wanted a kid to recite this line, but no one I knew at the time was having kids just yet. So I had my sister do it.`,
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
                    time: 5,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Christopher's theme)`
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `In keeping with the Russian theme of dogs in space, I tried to evoke the sound of the`,
                        {
                            anchor: `balalaika`,
                            wiki: `Balalaika`
                        },
                        `through frenetically plucked mandolins. Since Tuva is a Russian republic, I also added`,
                        {
                            anchor: `Tuvan throat singing,`,
                            wiki: `Tuvan_throat_singing`
                        },
                        `where overtones in a lone voice sound like accompaniment by a second voice. I liked the implied notion that my brother sings along with me in spirit.`
                    ],
                    dotKeys: {
                        [OBSERVATION]: true,
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
                    time: 11,
                    lyric: `Mother, woken from her nap,`
                },
                {
                    time: 13,
                    lyric: `hears a piercing scream and thunders,`
                },
                {
                    time: 15,
                    lyric: [
                        `"Why'd you`,
                        {
                            anchor: `hit your baby brother,`,
                            todo: true,
                            card: {
                                description: `The times that I physically hurt my brother were actually rare. They just cast a long shadow in my memory. Since he could never understand or acknowledge my remorse, I could never truly feel forgiven.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 17,
                    lyric: `when he so looks up to you!`
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
                    time: 19,
                    lyric: `Don't you remember days past,`
                },
                {
                    time: 21,
                    lyric: [
                        `when you wanted to`,
                        {
                            anchor: `buy a fortress`,
                            todo: true,
                            card: {
                                description: `Once upon visiting our well-to-do cousin, we helped him try out his new lifesize wooden castle. It was so much fun that I asked my parents for one as a combined birthday and Christmas gift, which I always had as an option since my birthday is in November. Unfortunately, I learned that some toys are too expensive to count even for two gifts.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 23,
                    lyric: `but your daddy couldn't afford it,`
                },
                {
                    time: 25,
                    lyric: `so you brought him into your room?`
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
                    time: 27,
                    lyric: [
                        `You stowed away`,
                        {
                            anchor: `beneath your captain bed.`,
                            todo: true,
                            card: {
                                description: `I slept in a captain bed that rested atop a dresser on one side, with the other side set flush against the wall. By removing the bottom drawer, I could crawl into the space underneath with my brother and stay hidden.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 30,
                    lyric: [
                        `We`,
                        {
                            anchor: `didn't hear a peep`,
                            card: {
                                description: `My brother would play alongside me for hours without once speaking or interacting. It was a strange closeness we shared.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `throughout the entire weekend!"`
                    ]
                }
            ],
            subVerse: [
                {
                    time: 34,
                    lyric: {
                        isEmphasis: true,
                        lyric: {
                            anchor: `Poor Sam Peabody!`,
                            todo: true,
                            card: {
                                description: [
                                    `When my family visited Canada one late summer, the`,
                                    {
                                        anchor: `white-throated sparrow`,
                                        wiki: `White-throated_sparrow`
                                    },
                                    `was in breeding season, and we heard its song everywhere. I found it haunting and soothing, and longed to hear it again ever afterward. "Poor Sam Peabody, Peabody, Peabody" is a mnemonic used by birdwatchers to mimic its cadence and pitch.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
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
                    time: 38,
                    lyric: [
                        `Oh brother, when all you`,
                        {
                            anchor: `know is bleat,`,
                            todo: true,
                            cards: [
                                {
                                    description: `My instinctive response to being bullied was to rationally protest against its injustice. This was as effective as the bleating of a calf being led to slaughter.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    wormhole: `know_is_bleat`
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 40,
                    lyric: [
                        `they'll catch you by`,
                        {
                            anchor: `your cape`,
                            todo: true,
                            card: {
                                description: `I was well-liked in elementary school for being physically small and ever eager to draw cartoon figures for anyone who asked. But these very traits that once made me a hero suddenly marked me as easy prey in middle school, and I was ill-prepared.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `and beat you,`
                    ]
                },
                {
                    time: 42,
                    lyric: `threatening never to release you`
                },
                {
                    time: 44,
                    lyric: [
                        `till you`,
                        {
                            anchor: `learn to kick it back.`,
                            todo: true,
                            card: {
                                description: `In middle school, the most well-liked kids were the ones least concerned about being liked. This ran counter to my tendency to throw myself whole-heartedly into anything worth pursuing. I never did adjust.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
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
                    time: 46,
                    lyric: [
                        {
                            anchor: `Feigning sick,`,
                            todo: true,
                            card: {
                                description: `As a kid, I was proud of my perfect attendance record. After the bullying began, I would fake being sick in order to skip school. My mother noticed the change, but trusted me enough not to press too deeply on it.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `I chanced to read`
                    ]
                },
                {
                    time: 48,
                    lyric: `these words in a comic to me speaking:`
                },
                {
                    time: 50,
                    lyric: [
                        `"Are you`,
                        {
                            anchor: `tired of being the weakling?"…`,
                            todo: true,
                            card: {
                                description: [
                                    `In a well-known advertisement seen in the back of comic books at the time, a skinny guy builds up his muscles by sending away for`,
                                    {
                                        anchor: `Charles Atlas's`,
                                        wiki: `Charles_Atlas`
                                    },
                                    `free bodybuilding guide, which then allows him to take revenge on a bully.`
                                ]
                            }
                        }
                    ]
                },
                {
                    time: 52,
                    lyric: `I clipped and mailed the ad.`
                }
            ]
        },
        {
            unitMap: {
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 54,
                    lyric: [
                        `Soon`,
                        {
                            anchor: `send-away offers`,
                            todo: true,
                            card: {
                                description: `Since I had few friends, I would amuse myself by sending away for free samples and small mail order purchases. As a result, I got flooded with junk mail advertising even more such offers. It was during this time that I received a letter from RI Research, Special Human Being Laboratory.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `were piling up high,`
                    ]
                },
                {
                    time: 57,
                    lyric: `and then one day one came and made me cry and cry.`
                },
                {
                    time: 61,
                    lyric: [
                        {
                            anchor: `Red pouches unspent`,
                            todo: true,
                            card: {
                                description: [
                                    `In East Asian cultures, adult relatives give monetary gifts to children sealed in`,
                                    {
                                        anchor: `red envelopes.`,
                                        wiki: `Red_envelope`
                                    },
                                    `My parents insisted that we save this money for college. But desperate for answers, I blew my entire savings on my correspondence with RI Research.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `for years, at once counted and sent,`
                    ]
                },
                {
                    time: 64,
                    lyric: `while all the weeks I waited, weighing those words in bold text:`
                }
            ]
        },
        {
            unitMap: {
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 68,
                    lyric: [
                        {
                            anchor: `"Are you a Beyonder`,
                            todo: true,
                            card: {
                                description: `According to RI Research, Beyonders are an ancient race of beings born from the stars, who were scattered across the universe with no memory of their true origin. Those who made it to Earth adopted the likeness of human beings, yet are beset by a nagging disquiet that they do not truly belong.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `sent down to be Earth-fostered?`
                    ]
                },
                {
                    time: 71,
                    lyric: [
                        `Do you often feel like a`,
                        {
                            anchor: `wanderer lost?"`,
                            todo: true,
                            card: {
                                description: `Hitting all the right nerves, the letter from RI Research addressed my yearning to belong while speaking to my frustration that this desired end should so elude me. It then shared its hopeful news: They believed that I might be a Beyonder, and after searching for so long, they had found me.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 76,
                    lyric: [
                        `But`,
                        {
                            anchor: `waiting for Goddard,`,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Robert Goddard`,
                                            wiki: `Robert_H._Goddard`
                                        },
                                        `ushered in the`,
                                        {
                                            anchor: `Space Age`,
                                            wiki: `Space_Age`
                                        },
                                        `by inventing the`,
                                        {
                                            anchor: `liquid-fueled rocket.`,
                                            wiki: `Liquid-propellant_rocket`
                                        },
                                        `Unfortunately in my case, I couldn't wait for a more promising age to arrive on its own. Middle school was brutal and felt endless, and I needed answers right then.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: [
                                        `Or else, for "Godot."`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `Waiting for Godot`,
                                                wiki: `Waiting_for_Godot`
                                            }
                                        },
                                        `is a play by`,
                                        {
                                            anchor: `Samuel Beckett`,
                                            wiki: `Samuel_Beckett`
                                        },
                                        `that explores existential themes.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `our two impatient paupers,`
                    ]
                },
                {
                    time: 79,
                    lyric: [
                        {
                            anchor: `Gogo and his Didi,`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `In Chinese,`,
                                        {
                                            isItalic: true,
                                            lyric: `gogo`
                                        },
                                        `means "big brother." And of course,`,
                                        {
                                            isItalic: true,
                                            lyric: `didi`
                                        },
                                        `in this case now refers to`,
                                        {
                                            isEmphasis: true,
                                            lyric: `my`
                                        },
                                        `little brother.`
                                    ],
                                    dotKeys: {
                                        [REFERENCE]: true
                                    }
                                },
                                {
                                    description: `Didi and Gogo are the respective pet names of Vladimir and Estragon, the two tramps who are still waiting for Godot at the end of Beckett's play.`,
                                    dotKeys: {
                                        [REFERENCE]: true
                                    }
                                }
                            ]
                        },
                        `sauntered off…`
                    ]
                },
                {
                    time: 83,
                    lyric: [
                        `Till`,
                        {
                            anchor: `in hunger they were led`,
                            card: {
                                description: [
                                    `Some of the dogs chosen for the Soviet space program were strays found on the streets of Moscow. This includes`,
                                    {
                                        anchor: `Laika,`,
                                        wiki: `Laika`
                                    },
                                    `the first dog in orbit, whose death was intentional as her spacecraft was not designed to return. I could sympathize with Laika's plight of being thrust into one desperate circumstance that only leads to the next.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `into`,
                        {
                            anchor: `Huntsville`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `Huntsville, Alabama is where the`,
                                    {
                                        anchor: `largest NASA center`,
                                        wiki: `Marshall_Space_Flight_Center`
                                    },
                                    `is located.`
                                ]
                            }
                        },
                        `and fed,`
                    ]
                },
                {
                    time: 86,
                    lyric: [
                        `dragged to sled by`,
                        {
                            anchor: `hunter's belt`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `The constellations Canis Major and Canis Minor, or "greater dog" and "lesser dog," are said to follow that of Orion, named after the`,
                                        {
                                            anchor: `hunter in Greek mythology,`,
                                            wiki: `Orion_(mythology)`
                                        },
                                        `which can be identified by three stars in a row that represent his belt.`
                                    ]
                                },
                                {
                                    description: `Sadly, a belt can be used to instill obedience in wayward animals.`,
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                }
                            ]
                        },
                        `and launched!`
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: POSTCHORUS
            },
            mainVerses: [
                {
                    time: 90,
                    lyric: `"Far from home and shaped like common men,`
                },
                {
                    time: 93,
                    lyric: [
                        `Beyonders bleed the most, their`,
                        {
                            anchor: `roots unknown to them.`,
                            todo: true,
                            card: {
                                description: [
                                    `I didn't know this at the time, but the notion of`,
                                    {
                                        anchor: `"star people"`,
                                        wiki: `Star_people_(New_Age_belief)`
                                    },
                                    `was a popular New Age belief in the 1970s. Like Beyonders, star people have no recollection of their stellar origins. The letters from RI Research undoubtedly drew their material from this body of thought.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 98,
                    lyric: `We've received your fee, and per the tests,`
                },
                {
                    time: 101,
                    lyric: `you are indeed a seed from that nebular nest.`
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `The sound of rocket circuitry in the background was made by banging an electric guitar against the carpet floor while bending its whammy bar. It took countless tries, and I kept having to retune because the tuning would get messed up each time.`
                    ],
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: POSTCHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 105,
                    lyric: [
                        `Is this`,
                        {
                            anchor: `too much at once?`,
                            todo: true,
                            card: {
                                description: `I sobbed when I got the letter confirming that I was a Beyonder. While I was relieved to have an explanation for my torment, the last thing I wanted was the burden of being different from everyone else.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `We're trusting mum's to be the word.`
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
                    time: 112,
                    lyric: `Beyonders pine for a love no mortals give,`
                },
                {
                    time: 116,
                    lyric: [
                        `one they'll find only once we build the`,
                        {
                            anchor: `mothership.`,
                            todo: true,
                            card: {
                                description: `To present the appearance of legitimacy, the letters from RI Research were peppered with pseudo-scientific terms, as they promised to keep me abreast of their ongoing technological developments. This included a spacecraft that would allow us to make contact with extraplanetary kin.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 119,
                    lyric: `Your monthly tithe shall fund good tidings soon to come.`
                },
                {
                    time: 123,
                    lyric: [
                        `But till then, here's`,
                        {
                            anchor: `how you're to live…"`,
                            todo: true,
                            card: {
                                description: `The letters cautioned me to keep myself separate from society. I realised that my brother had been doing this all along, and thus adopted a stoic composure based on his.`,
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
                        `I decided to learn Tuvan throat singing after my first girlfriend Catherine took me to see a documentary called`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Genghis Blues.`,
                                wiki: `Genghis_Blues`
                            }
                        },
                        `Within a week, I was able to sound out the main partials, which impressed her greatly. My life ever since has been all about recapturing the feeling of that moment.`
                    ],
                    dotKeys: {
                        [BACKSTORY]: true,
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
                    time: 128,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Christopher's theme)`
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
                    time: 134,
                    lyric: [
                        `So thus we learned to`,
                        {
                            anchor: `act the dunce`,
                            todo: true,
                            card: {
                                description: `By failing to acknowledge or respond to fellow students, I came across as dimwitted.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 136,
                    lyric: `as spies among the carnal fallen,`
                },
                {
                    time: 138,
                    lyric: [
                        `twin friars`,
                        {
                            anchor: `cast here in pollens`,
                            card: {
                                description: [
                                    `In Greek mythology,`,
                                    {
                                        anchor: `"Castor and Pollux"`,
                                        wiki: `Castor_and_Pollux`
                                    },
                                    `were twin brothers fathered by Zeus. Castor was mortal, so after his death, Pollux pleaded with Zeus to let him share his immortality with his twin. Thus they were transformed into the constellation`,
                                    {
                                        anchor: `Gemini.`,
                                        wiki: `Gemini_(constellation)`
                                    },
                                    `Similarly, it felt as if my brother were sharing his autism with me, along with its spiritual answers.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 140,
                    lyric: `from a star's placenta sac.`
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
                    time: 141,
                    lyric: `Braced for an earth stay unloved,`
                },
                {
                    time: 143,
                    lyric: [
                        `twits daily`,
                        {
                            anchor: `murdered for their virtue.`,
                            todo: true,
                            card: {
                                description: `Like all ordeals, mine became more bearable once I could tie it to a greater purpose.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 145,
                    lyric: `Mirthful, the merciless would hurt you,`
                },
                {
                    time: 147,
                    lyric: [
                        `as`,
                        {
                            anchor: `omerta`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Omerta`,
                                        wiki: `Omertà`
                                    },
                                    `is the Mafia's code of honor that praises silence and refusal to cooperate with authorities. I wasn't the first kid to notice parallels between school life and the criminal world, I'm sure.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `turned their backs.`
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
                    time: 149,
                    lyric: [
                        `Stung by venomous vipers, our`,
                        {
                            anchor: `muted youths lapsed.`,
                            todo: true,
                            card: {
                                description: `While I only spent a year feigning autism, the social repercussions lasted much longer, as I was now and forever "that kid" to others. It's not that I lacked the will to correct their perceptions. I was as baffled as anyone else about what had just happened, and there were no guide books for where to go from there.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 153,
                    lyric: [
                        `We knew the`,
                        {
                            anchor: `shortest cyphers`,
                            todo: true,
                            card: {
                                description: [
                                    `The lengthier the`,
                                    {
                                        anchor: `cryptogram,`,
                                        wiki: `Cryptogram`
                                    },
                                    `the more hints it drops, and thus the easier it gets to solve. Conversely, the less I said, the fewer openings I gave others to get under my skin.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `are the toughest ones to crack.`
                    ]
                },
                {
                    time: 156,
                    lyric: [
                        `But`,
                        {
                            anchor: `every hero has a heel,`,
                            todo: true,
                            card: {
                                description: [
                                    `The Greek hero`,
                                    {
                                        anchor: `Achilles`,
                                        wiki: `Achilles`
                                    },
                                    `was invulnerable everywhere on his body except for his heel. Meanwhile, my weakness was that I genuinely craved acceptance from others.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `we'd realize, blind before the squad.`
                    ]
                },
                {
                    time: 160,
                    lyric: [
                        `The only`,
                        {
                            anchor: `spies who get to feel love`,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `spy's`,
                                        wiki: `Espionage`
                                    },
                                    `success hinges upon keeping themselves hidden. Their exploits will never be appreciated until they're caught and placed before the`,
                                    {
                                        anchor: `firing squad.`,
                                        wiki: `Execution_by_firing_squad`
                                    },
                                    `Similarly, at some point my desire to be part of a friendly squad caused me to open up and thus sabotage my past efforts to be unresponsive. But this only exposed me to greater scrutiny, as I was now forced to explain myself.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `first`,
                        {
                            anchor: `unearth their own plots!`,
                            cards: [
                                {
                                    description: `Figuratively, this refers to revealing one's secret plans. Literally, it means digging one's own grave.`,
                                    dotKeys: {
                                        [PUN]: true
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
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 164,
                    lyric: [
                        {
                            anchor: `Mushing onward,`,
                            todo: true,
                            card: {
                                // TODO: Mention that I imagine Pchelka and Mushka dogsledding.
                                description: [
                                    `Upon their arrival in the New World, the French learned the practice of`,
                                    {
                                        anchor: `dog sledding`,
                                        wiki: `Sled_dog`
                                    },
                                    `from the natives. They commanded their dog teams to move by shouting`,
                                    {
                                        isItalic: true,
                                        lyric: `"marche,"`
                                    },
                                    `meaning "go." After their territory was ceded to the British, this term continued in English as`,
                                    {
                                        anchor: `"mush."`,
                                        wiki: `Mushing`
                                    }
                                ]
                            }
                        },
                        {
                            anchor: `Mushka's`,
                            properNoun: true,
                            card: {
                                description: [
                                    `While Pchelka and Mushka successfully spent a day in orbit aboard`,
                                    {
                                        anchor: `Sputnik 6,`,
                                        wiki: `Korabl-Sputnik_3`
                                    },
                                    `there was an error upon reentry. To prevent the spacecraft from landing in hostile territory, the Soviets made it self-destruct, killing all aboard. But in my retelling, I as Pchelka somehow manage to avoid the sad fate that my brother as Mushka could not.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `dragged by collar`
                    ]
                },
                {
                    time: 167,
                    lyric: [
                        `to`,
                        {
                            anchor: `his slaughter`,
                            todo: true,
                            card: {
                                description: `I wrote this song during the peak of my activism within the animal rights movement, which takes a dim view of sled dog racing. Not only are dogs routinely abandoned or killed when they outlive their usefulness, but the race itself is grueling enough to cause death by overexertion.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `under`,
                        {
                            anchor: `undying dawn.`,
                            card: {
                                description: [
                                    `During summer in the Arctic, the`,
                                    {
                                        anchor: `sun never sets.`,
                                        wiki: `Midnight_sun`
                                    },
                                    `Instead, it always remains visible just above the horizon.`
                                ]
                            }
                        }
                    ]
                },
                {
                    time: 171,
                    lyric: [
                        `Choked, he's soon a goner,`,
                        {
                            anchor: `no one heard his hollers,`,
                            todo: true,
                            card: {
                                description: `I had to wonder whether my brother was screaming on the inside, as I certainly was during this time.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 175,
                    lyric: [
                        `this pack honors only the`,
                        {
                            anchor: `idiot's rod.`,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `"Iditarod"`,
                                        wiki: `Iditarod_Trail_Sled_Dog_Race`
                                    },
                                    `is an annual sled dog race held in`,
                                    {
                                        anchor: `Alaska.`,
                                        wiki: `Alaska`
                                    },
                                    `Some mushers use a whip to keep the pack disciplined.`
                                ],
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 178,
                    lyric: [
                        `Next cabins come equipped with`,
                        {
                            anchor: `pentobarbitone syringe,`,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `pentobarbital`,
                                        wiki: `Pentobarbital`
                                    },
                                    `injection is the most humane means of`,
                                    {
                                        anchor: `euthanasia.`,
                                        wiki: `Euthanasia`
                                    },
                                    `No such kindness was prepared for Laika, whose death by heat exhaustion had been expected all along.`
                                ]
                            }
                        }
                    ]
                },
                {
                    time: 182,
                    lyric: `nothing too rich for glorious cosmonauts!`
                }
            ]
        },
        {
            unitMap: {
                formType: POSTCHORUS
            },
            mainVerses: [
                {
                    time: 186,
                    lyric: [
                        `I'm`,
                        {
                            anchor: `sorry I bailed,`,
                            todo: true,
                            card: {
                                description: `By wanting to rejoin the company of others, I felt like I was betraying my brother somehow. Unlike me, he wasn't a tourist in the land of autism. He wasn't free to come and go as he pleased.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        {
                            anchor: `Xiao Xiang,`,
                            properNoun: true,
                            card: {
                                description: `Mushka means "little fly" in Russian, and by coincidence, my brother's Chinese name, Xiao Xiang, literally means "little fly." (Though in his case, the second word is a verb, not a noun.) Incidentally, Pchelka means "little bee," which maybe also makes sense, given that my name starts with the letter B?`,
                                dotKeys: {
                                    [REFERENCE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `mush on…`
                    ]
                },
                {
                    time: 189,
                    lyric: [
                        `I couldn't ditch my wails, I`,
                        {
                            anchor: `needed the pod.`,
                            card: {
                                description: [
                                    `A group of`,
                                    {
                                        anchor: `whales`,
                                        wiki: `Whale`
                                    },
                                    `is called a pod. Because I wanted to belong to a social group, I couldn't ditch my "whales," and thus I sought out a metaphorical escape pod.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                    [REFERENCE]: true
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
                        {
                            anchor: `David Bowie's`,
                            wiki: `David_Bowie`
                        },
                        {
                            anchor: `"Space Oddity"`,
                            wiki: `Space_Oddity`
                        },
                        `closes with a free-form instrumental outro that evokes the sound of failing radio transmissions. I aimed for a similar effect by scraping the strings of an electric guitar against the pickup, and bouncing a metal rod on a single string near the bridge.`
                    ],
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: POSTCHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 193,
                    lyric: [
                        `"Kids say you're`,
                        {
                            anchor: `hopped on drugs,`,
                            todo: true,
                            card: {
                                description: `Eventually a classmate suspected me of being on drugs, and I was sent to the principal's office. When my mother came to pick me up, she proceeded to chew out the principal for even suspecting that I was capable of such a thing. Since I was generally more responsive around authority figures, he had to agree that the charge didn't make sense, and dropped it.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `son, with Mum we'll need a word."`
                    ]
                },
                {
                    time: 200,
                    lyric: [
                        `Mushka, per their bargain, I`,
                        {
                            anchor: `can't ever return.`,
                            todo: true,
                            card: {
                                description: `I'd grown disillusioned with RI Research at this point anyway, as the letters inexplicably began to take on Christian overtones. It's not that I held Christianity to be conclusively false. It was just incongruous with all the previous talk of extraterrestrial origins.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `My brother currently lives in his own place and receives round-the-clock care through supported living services. He's doing well.`,
                    dotKeys: {
                        [AFTERWORD]: true
                    }
                }
            }
        }
    ]
}
