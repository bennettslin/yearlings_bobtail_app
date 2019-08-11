import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    SONGWRITING
} from '../../constants/dots'

import {
    VERSES,
    CHORUS,
    INTRO,
    RESPONSE,
    OUTRO,
    IS_UNIT_DOT
} from '../../constants/lyrics'

export default {
    title: 'M',
    totalTime: 215,
    overview: `After the breakup with Catherine, I vowed to spend the next five years shaping myself into the ideal romantic prospect. By the end, I was regularly attending local shows while cobbling together my own band. I kept running into a fellow scenester named Mara, and soon I grew infatuated. But Mara ended up going out with my drummer Jacob, which made band practice awkward.`,
    lyricUnits: [
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    card: {
                        description: `To avoid mentioning Mara by name, I entitled this song "M," which I planned to explain by packing the lyrics with words that start with the letter M. Deep down, I probably knew that I wasn't fooling anyone.`,
                        dotKeys: {
                            [BACKSTORY]: true
                        }
                    }
                }
            }
        },
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    card: {
                        description: `This song is a carryover from back when the band was still just The Yearlings. At the time, I kept its meaning a secret by disguising Mara's name in various puns. In this recording, of course, I exaggerated my enunciation to make the puns obvious.`,
                        dotKeys: {
                            [BACKSTORY]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                subVerse: [
                    {
                        time: 33,
                        isCentre: true,
                        lyric: {
                            anchor: `Maravijaya…`,
                            properNoun: true,
                            card: {
                                description: [
                                    {
                                        isItalic: true,
                                        lyric: `Maravijaya,`
                                    },
                                    `which translates to "victory over Mara" in Sanskrit, is the seated posture of the Buddha as he fended off temptations from`,
                                    {
                                        anchor: `Mara,`,
                                        wiki: `Mara_(demon)`
                                    },
                                    `the demon who personifies fear and death in Buddhism. In the same way, I had to summon otherworldly reserves of self-denial to get through band practise after Jacob and Mara started dating.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    }
                ],
                stanzaType: INTRO,
                subCardType: RESPONSE
            },
            mainVerses: [
                {
                    time: 0,
                    isCentre: true,
                    lyric: {
                        isItalic: true,
                        lyric: `(Mara's theme)`
                    }
                }
            ]
        },
        {
            unitMap: {
                stanzaType: VERSES
            },
            mainVerses: [
                {
                    time: 35,
                    lyric: [
                        `I was a lad bent on`,
                        {
                            anchor: `learning the talents`,
                            card: {
                                description: `The breakup with Catherine was uneventful. I'd done nothing wrong, per se; I just didn't have much to offer. So it seemed illogical to keep trying the same approach, as if one day would yield a dramatically different result. To secure my future chances with women, what I needed was to take time off and build up a surplus of attractive traits, starting with the ones that Catherine valued most.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 40,
                    lyric: `that all clever girls need to see.`
                },
                {
                    time: 44,
                    lyric: [
                        `Bit my`,
                        {
                            anchor: `sadness with patience,`,
                            card: {
                                description: `I had spent my formative years as a child channeling my misery into various art projects, so this was all familiar terrain for me. Building yourself up into a desirable person, after all, is really just the ultimate art project.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 47,
                    lyric: `with practise each day, then`
                },
                {
                    time: 50,
                    lyric: [
                        `in`,
                        {
                            anchor: `five years`,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `five-year plans`,
                                        wiki: `Five-year_plans_for_the_national_economy_of_the_Soviet_Union`
                                    },
                                    `of the Soviet Union were centrally organized mandates for rapid economic development. Five years thus seemed like the optimal time frame for my own plan for rapid character growth.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `I'd be one to keep.`
                    ]
                }
            ]
        },
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    card: {
                        description: [
                            `I quickly abandoned my original plan to pack the lyrics with M words after this stanza proved how unfeasible an entire song written in this manner would be.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: VERSES,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 54,
                    lyric: `This moron marooned, a method mapped in my cocoon`
                },
                {
                    time: 59,
                    lyric: [
                        `to mould me into a`,
                        {
                            anchor: `mystery mensch.`,
                            card: {
                                description: `There was an obvious lesson to draw from the smattering of women I had somehow managed to attract up to this point in my life. All had been taken in by my standing as a weird, artsy loner, only then to be turned off upon seeing that nothing of greater substance lay beneath. The crux of my mission, then, was to take this mistaken assumption that already existed, and simply turn it into a correct one.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 64,
                    lyric: {
                        anchor: `No minutiae left unmastered,`,
                        card: {
                            description: [
                                `Though the main goal was to be well versed in all the important subjects, I derived the most satisfaction from being able to display some random skill with seeming nonchalance. So I made sure to set aside time for purely fanciful pursuits, like learning to solve the`,
                                {
                                    anchor: `Rubik's cube.`,
                                    wiki: `Rubik%27s_Cube`
                                }
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    }
                },
                {
                    time: 67,
                    lyric: [
                        {
                            anchor: `music cred`,
                            card: {
                                description: `I could always detect a whiff of disdain from the Berkeley record store clerks as they rang up my purchases. This mysterious league of enlightened insiders clearly knew something that I didn't. With my quest for self-betterment, I finally overcame my feelings of intimidation and began to ask them for recommended listening.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `with`,
                        {
                            anchor: `mindful manners`,
                            card: {
                                description: `During this time, I also decided to stop using swear words. I figured it would be a definite win with any woman who didn't curse, while all others would find its quaintness charming.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `merge.`
                    ]
                },
                {
                    time: 69,
                    lyric: [
                        {
                            anchor: `Once I metamorphose,`,
                            card: {
                                description: `In other words, upon completion of my metamorphosis, it would then be the case that "once I met a Mara," I was "for certain" to impress her.`,
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        },
                        `certain I'd impress.`
                    ]
                }
            ]
        },
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    card: {
                        description: [
                            `Back when I was learning to play the banjo, I would practice Earl Scruggs's`,
                            {
                                anchor: `three-finger roll`,
                                wiki: `Scruggs_style`
                            },
                            `by strumming the motions on my jeans throughout the day. From there, it easily crossed over into my guitar technique, as can be heard on the Spanish guitar here.`
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS
            },
            mainVerses: [
                {
                    time: 75,
                    lyric: [
                        {
                            anchor: `Year five,`,
                            card: {
                                description: [
                                    `The Soviet Union's`,
                                    {
                                        anchor: `first five-year plan`,
                                        wiki: `First_five-year_plan`
                                    },
                                    `was also its most brutal, as the disruptive shock of forcibly industrializing an agrarian society led to widespread famine and death. Similarly, given how far behind I was starting out and how much ground I needed to cover, it was naive to think that my own five-year plan for accelerated growth could be free of unintended effects.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `and now the one who dug me up`
                    ]
                },
                {
                    time: 77,
                    lyric: [
                        `spent her`,
                        {
                            anchor: `wishes on a friend,`,
                            card: {
                                description: [
                                    `Towards the end of my five-year plan, the Yearlings were regularly playing local shows. I was thrilled when I first spotted Mara in the audience, thinking that all my hard work putting this band together was about to pay off. But it was Jacob who caught her eye. I felt like the`,
                                    {
                                        anchor: `bottled genie`,
                                        wiki: `Jinn`
                                    },
                                    `of Arabian folklore, with good fortunes to bestow upon others but only freedom from self-imposed isolation to grant myself.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 80,
                    lyric: [
                        `while forever I'll`,
                        {
                            anchor: `hold in peace`,
                            card: {
                                description: `While Jacob got together with Mara without any effort, romantic fulfillment for me felt no less elusive than ever. I had to come to terms with the reality that my five-year plan was a total washout.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 82,
                    lyric: `these words unsaid.`
                }
            ]
        },
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    card: {
                        description: `As the Yearlings, we would perform this song at breakneck speed. I moderated the tempo in this recording to make the lyrics intelligible. But even then, my own drumming skills were not up to par. So I recorded the drum tracks at a lower tape speed, which brought them to the proper tempo upon playback.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 84,
                    lyric: [
                        `Hopes wrapped in`,
                        {
                            anchor: `marinaded confections,`,
                            card: {
                                description: `Or they were wrapped in my "Mara-needed confessions."`,
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        },
                        `but`
                    ]
                },
                {
                    time: 87,
                    lyric: [
                        `before`,
                        {
                            anchor: `tomorrow never sent.`,
                            card: {
                                description: `Or else, these hopes were never before sent "to Mara."`,
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 89,
                    lyric: [
                        {
                            anchor: `Signed off "love me"`,
                            card: {
                                description: `Back when emails were still treated like personal letters, I would sign off with "love Bennett," absent a comma out of laziness. Catherine joked that it sounded like a command spoken in desperation.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `is how`
                    ]
                },
                {
                    time: 91,
                    lyric: `my life and letters end.`
                }
            ]
        },
        {
            unitMap: {
                stanzaType: VERSES
            },
            mainVerses: [
                {
                    time: 94,
                    lyric: [
                        {
                            anchor: `Morphined,`,
                            card: {
                                description: `Or I would be a "Mara fiend," a slightly different kind of addict.`,
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        },
                        `I'll probably`,
                        {
                            anchor: `die pushing forty,`,
                            card: {
                                description: `
                                Like the Soviet Union, I had to take the failures of my first five-year plan in stride.   I had banked on rapid character growth, and I couldn't cut my losses now. I had nothing to my name other than what another five-year plan might gain for me. Or failing that, another one. Yet five years is such a huge chunk of lifetime to mete out all at once, and I had only so much lifetime remaining. The occasion was inevitable to reflect on my mortality.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `exiled`
                    ]
                },
                {
                    time: 99,
                    lyric: [
                        `to a`,
                        {
                            anchor: `sand castle built by low tide.`,
                            card: {
                                description: `To compound the failures of my first five-year plan, it was clear that I had missed out in the interim on some crucial maturity that others like Jacob had naturally come by. And there was no guarantee that the next five-year plan would not blindside me in the same manner. I feared a future as a stunted man-child, forever chasing an ambition at once both infantile and futile, like shaping castles out of sand.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    /**
                     * 33 perfect age.
                     */
                    time: 103,
                    lyric: `Far too old to be martyred,`
                },
                {
                    time: 106,
                    lyric: `too young to grow smarter,`
                },
                {
                    /**
                     * Mara nursed child. Job, tie
                     */
                    time: 109,
                    lyric: [
                        `a`,
                        {
                            anchor: `mariner's child`,
                            card: {
                                description: `Or else, I would die as a "Mara-nursed" child.`,
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        },
                        `who hanged from this tie.`
                    ]
                }
            ]
        },
        {
            unitMap: {
                stanzaType: VERSES,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 114,
                    lyric: [
                        `Panoramic prints pending my soon-to-be`,
                        {
                            anchor: `Moonie wedding,`,
                            properNoun: true,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `Unification Church,`,
                                        wiki: `Unification_Church`
                                    },
                                    `founded by Sun Myung Moon, is widely seen as a cult due to its aggressive proselytism. It is perhaps best known for its mass weddings in which thousands of congregants, informally known as Moonies, are paired off with perfect strangers. I found the thought humorously enticing that if I simply accepted one of their pamphlets, then my long, hard struggle to find a romantic partner would be over in an instant.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 118,
                    lyric: [
                        `fools once expecting their`,
                        {
                            anchor: `"Made in America" signs.`,
                            properNoun: true,
                            cards: [
                                {
                                    description: `To promote cross-cultural harmony, the pairings in these mass weddings are often international by design. So my Moonie bride might possibly be a foreigner, one who was foolish enough to choose this venture solely for the chance to raise a family of native-born American children.`,
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    description: `Of course, I would be just as foolish to believe that my "maiden Mara co-signs" the marriage license in good faith.`,
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 123,
                    lyric: [
                        `In a`,
                        {
                            anchor: `time capsule`,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `time capsule`,
                                        wiki: `Time_capsule`
                                    },
                                    `is a vessel of contemporary objects that will be treated as historical artifacts once rediscovered in a later era. In a way, it allows a past generation to speak to a future one. Similarly, in my dejected state, I could only envision my next five-year plan as a forum to air my grievances to a captive future audience.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `sealed`
                    ]
                },
                {
                    time: 125,
                    lyric: `with pages of defeated spiels`
                },
                {
                    time: 128,
                    lyric: [
                        {
                            anchor: `lies that marionette`,
                            cards: [
                                {
                                    description: [
                                        `There was a comfort in having all my priorities settled in advance by the five-year plan. Since I always knew with certainty the right course of action, I could undertake it with conviction. I was like a`,
                                        {
                                            anchor: `marionette,`,
                                            wiki: `Marionette`
                                        },
                                        `being made to posture by the hidden hand of my naive younger self.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    description: `But also, I eagerly donned these marionette strings only because I believed the lies that some "Mara you'll net" by doing so.`,
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `in this`,
                        {
                            anchor: `heap of twisted twine.`,
                            card: {
                                description: `With no results to show after five years of diligent effort, I was suddenly paralyzed by uncertainty. I could no longer prescribe any future actions with confidence, and so my future self was left to lie like a motionless puppet in my mind.`,
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
                stanzaType: CHORUS
            },
            mainVerses: [
                {
                    time: 133,
                    lyric: `All I know is that whoever finds me`
                },
                {
                    time: 136,
                    lyric: [
                        `keeps me`,
                        {
                            anchor: `solely for a pet.`,
                            card: {
                                description: `After Mara started dating Jacob, she continued to interact with me in the same flirtatious manner, which made me realise that I had misread her intentions all along.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 138,
                    lyric: [
                        `With her "I do,"`,
                        {
                            anchor: `my life in marriage`,
                            card: {
                                description: `Or else, my life in "Mara." I thought I had chosen to forego this particular pun, but the exaggerated pronunciation is distinctly there in the recording…`,
                                dotKeys: {
                                    [SONGWRITING]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 140,
                    lyric: [
                        `is choked down my`,
                        {
                            anchor: `no-hope chest.`,
                            card: {
                                description: [
                                    `Traditionally, a`,
                                    {
                                        anchor: `hope chest`,
                                        wiki: `Hope_chest`
                                    },
                                    `was a piece of furniture that contained the various linens stored by a young woman in preparation for married life. By keeping my feelings of hopelessness close to my literal chest, I was also sealing my figurative hope chest.`
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
                stanzaType: CHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    /**
                     * TODO: link to urchin in Odin?
                     */
                    time: 143,
                    lyric: [
                        `Her lispy kiss unlucky for this`,
                        {
                            anchor: `chimney sweep,`,
                            cards: [
                                {
                                    description: [
                                        `British tradition holds that a kiss from a`,
                                        {
                                            anchor: `chimney sweep`,
                                            wiki: `Chimney_sweep`
                                        },
                                        `will bring good luck to a bride. But in the Victorian era, the children who cleared soot from chimneys were neglected orphans. Whatever fortunes they imparted to others, for themselves only a lifetime of ill health awaited. Similarly, any kiss blown from Mara on her wedding day would only highlight my misfortune of not being with her.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    wormhole: `chimney_sweep`
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 146,
                    lyric: [
                        {
                            anchor: `indentures dumbed`,
                            card: {
                                description: [
                                    `Chimney sweep apprentices were typically employed as`,
                                    {
                                        anchor: `indentured servants`,
                                        wiki: `Indentured_servant`
                                    },
                                    `at a young age. Similarly, given the years that had to pass in servitude to my five-year plans before I could be my own person again, I was effectively "in dentures" already, and thus unable to speak.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `as a boy.`
                    ]
                },
                {
                    time: 148,
                    lyric: [
                        `Whispered "adieu," I`,
                        {
                            anchor: `bade them to fare well,`,
                            card: {
                                description: `Jacob was my friend, of course, and I was happy that he had found Mara. But I also wasn't happy about sticking around. So as they exchanged their vows, I silently offered one of my own, and bade them "two farewell."`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 150,
                    lyric: `then turned to hug the void.`
                }
            ]
        },
        {
            unitMap: {
                stanzaType: CHORUS
            },
            mainVerses: [
                {
                    time: 153,
                    lyric: [
                        `But then I saw the`,
                        {
                            anchor: `world's a naked baby,`,
                            card: {
                                description: `At some point, I realised that the world simply does what it does because it is what it is. Nothing is hidden from view, and situations can be understood by reading them closely, no differently than bodies of knowledge can be absorbed through study.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 156,
                    lyric: `cradled safely in my lap.`
                },
                {
                    time: 158,
                    lyric: `It dropped a poop, but somehow I knew`
                },
                {
                    time: 160,
                    lyric: {
                        anchor: `to have a merry ol' laugh.`,
                        card: {
                            description: `Or else, to "have a Mara you'll laugh."`,
                            dotKeys: {
                                [PUN]: true
                            }
                        }
                    }
                }
            ]
        },
        {
            unitMap: {
                stanzaType: CHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 163,
                    lyric: `And now I wonder if the answer might be`
                },
                {
                    time: 166,
                    lyric: `to know: the rule for a girl`
                },
                {
                    time: 168,
                    lyric: [
                        `is that the`,
                        {
                            anchor: `boy who's to love her baby`,
                            card: {
                                description: `It then occurred to me that if the world is as guileless as a newborn baby, then it makes no more sense to get mad at the world than to be upset with an infant. And if a woman's list of ideal traits in a mate includes what kind of father he'll be to her child, then it makes sense that she'll judge him by how he treats the world.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 170,
                    lyric: `should first love the world.`
                }
            ]
        },
        {
            unitMap: {
                stanzaType: CHORUS
            },
            mainVerses: [
                {
                    time: 173,
                    lyric: [
                        {
                            anchor: `Moral is`,
                            card: {
                                description: `Or else, "Mara-less."`,
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        },
                        `it's up to me to`,
                        {
                            anchor: `be alert;`,
                            card: {
                                description: [
                                    `It was no mystery why the situation with Mara transpired as it had. It's never a mystery how`,
                                    {
                                        isEmphasis: true,
                                        lyric: `anything`
                                    },
                                    `plays out the way it does. I found this thought empowering, because I didn't need to know everything all at once. I just needed to know that things are knowable when I`,
                                    {
                                        isEmphasis: true,
                                        lyric: `do`
                                    },
                                    `want to know them. And with this knowledge, I was now free to choose where to go next.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 176,
                    lyric: `nothing comes a pure surprise.`
                },
                {
                    time: 178,
                    lyric: `Sometimes if it's all to work`
                },
                {
                    time: 180,
                    lyric: {
                        anchor: `friends have to lie.`,
                        card: {
                            description: `After middle school, I didn't have close friends again until college, so there were plenty of truths about friendship that I was still learning for the first time.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                }
            ]
        },
        {
            unitMap: {
                stanzaType: CHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 183,
                    lyric: `And sometimes situations seem the worst,`
                },
                {
                    time: 185,
                    lyric: `but in a year, they're never bad.`
                },
                {
                    time: 188,
                    lyric: [
                        `Five more, she'll dig up`,
                        {
                            anchor: [
                                {
                                    isItalic: true,
                                    lyric: `Bobtail`
                                },
                                `'s words—`
                            ],
                            properNoun: true,
                            card: {
                                description: [
                                    `Recognising that what I wanted was Mara or someone like Mara, and having taken stock of where I needed to be to get what I wanted, I decided to return to what I do best: holing up in emotional seclusion and relying solely on my own resourcefulness. My next five-year plan would see me score all the parts and play all the instruments on`,
                                    {
                                        isItalic: true,
                                        lyric: `Bobtail,`
                                    },
                                    `my ambitious magnum opus, now conceived as the`,
                                    {
                                        isItalic: true,
                                        lyric: `Ulysses`
                                    },
                                    `of rock albums.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 190,
                    lyric: `I'm not sad!`
                }
            ]
        },
        {
            unitMap: {
                stanzaType: OUTRO
            },
            mainVerses: [
                {
                    time: 192,
                    isCentre: true,
                    lyric: {
                        isItalic: true,
                        lyric: `(glockenspiel)`
                    }
                }
            ]
        }
    ]
}
