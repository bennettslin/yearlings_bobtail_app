import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    SONGCRAFT
} from '../../../../app/constants/dots'

import {
    VERSES,
    CHORUS,
    INTRO,
    RESPONSE,
    OUTRO,
    IS_UNIT_DOT
} from '../../../../app/constants/lyrics'

export default {
    path: 'm',
    title: 'M',
    duration: 215,
    overview: `After the breakup with Catherine, I vowed to spend the next five years shaping myself into the ideal romantic prospect. I started attending local shows, and by year five, I had cobbled together my own band, the Yearlings. I kept running into a fellow scenester named Mara, and I soon grew infatuated. But Mara ended up going out with my drummer Jacob, which made band practice awkward.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `To avoid mentioning Mara by name, I entitled this song "M," which I planned to explain by packing the lyrics with words that start with the letter M. Deep down, I probably knew I wasn't fooling anyone.`,
                    dotKeys: {
                        [BACKSTORY]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: INTRO,
                subVerseType: RESPONSE
            },
            mainVerses: [
                {
                    time: 0,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Mara's theme)`
                    }
                }
            ],
            subVerse: [
                {
                    time: 33,
                    lyricCentre: {
                        anchor: `Maravijaya…`,
                        properNoun: true,
                        card: {
                            description: [
                                {
                                    isItalic: true,
                                    lyric: {
                                        anchor: `Maravijaya,`,
                                        wiki: `Maravijaya_attitude`
                                    }
                                },
                                `or "victory over Mara" in`,
                                {
                                    anchor: `Sanskrit,`,
                                    wiki: `Sanskrit`
                                },
                                `is the seated posture of the`,
                                {
                                    anchor: `Buddha`,
                                    wiki: `Gautama_Buddha`
                                },
                                `as he fended off temptation from the demon`,
                                {
                                    anchor: `Mara,`,
                                    wiki: `Mara_(demon)`
                                },
                                `who personifies fear and death. Like the Buddha, I had to summon otherworldly reserves of self-denial to get through band practice after Jacob and Mara started dating.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `This song is one of two on this album that was originally performed by the Yearlings. At the time, I kept its meaning a secret by disguising Mara's name in various puns. In this recording, of course, I exaggerated my enunciations to make the puns obvious.`,
                    dotKeys: {
                        [BACKSTORY]: true,
                        [SONGCRAFT]: true
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
                    time: 35,
                    lyric: [
                        `I was a lad bent on`,
                        {
                            anchor: `learning the talents`,
                            card: {
                                description: `It's not that I'd done anything wrong to cause the breakup with Catherine. I just didn't have all that much to offer. So it seemed illogical to keep trying the same approach, as if one day I should see a dramatically different result. To secure my future chances with women, what I needed was to take time off and build up a surplus of attractive traits. So I started with the ones that Catherine valued most.`,
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
                                description: `I'd spent my formative years as a child channeling my misery into various art projects, so this was all familiar terrain for me. Building yourself up into a desirable person, after all, is really just the ultimate art project.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 47,
                    lyric: `with practice each day, then`
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
                formType: VERSES,
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
                        `to mold me into a`,
                        {
                            anchor: `mystery mensch.`,
                            card: {
                                description: `There was an obvious lesson to draw from the smattering of women I had somehow managed to attract up to this point in my life. All of them had been taken in by my appearance as an artsy loner, only to be turned off after finding that nothing of greater substance lay beneath. So my mission was to take this mistaken assumption that already existed and simply turn it into a correct one.`,
                                dotKeys: {
                                    [BACKSTORY]: true
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
                                    anchor: `Rubik's Cube.`,
                                    wiki: `Rubik's_Cube`
                                }
                            ],
                            dotKeys: {
                                [BACKSTORY]: true
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
                                description: `I'd always detected a whiff of disdain from the Berkeley record store clerks who rang up my purchases. With my quest for self-betterment, I overcame my feelings of intimidation and began to ask them for recommended listening.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `with`,
                        {
                            anchor: `mindful manners`,
                            card: {
                                description: `I also decided to stop using swear words. I figured it would be a definite win with any woman who didn't curse, while all others would find its quaintness charming.`,
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
                                description: `In other words, upon completion of my metamorphosis, it would then be the case that once I "met a Mara, for" certain I was to impress her.`,
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        },
                        `certain I'd impress.`
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `I quickly abandoned my original plan to pack the lyrics with M words after this stanza proved how unfeasible an entire song written in this manner would be.`,
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
                                    `Toward the end of my five-year plan, the Yearlings were regularly playing local shows. I was thrilled when I first spotted Mara in the audience, thinking that all my hard work putting this band together was about to pay off. But it was Jacob who caught her eye. I felt like the`,
                                    {
                                        anchor: `bottled genie`,
                                        wiki: `Jinn`
                                    },
                                    `of Arabian folklore, with good fortunes to bestow upon others but only freedom from self-imposed isolation to grant myself.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                                description: `So Jacob got together with Mara without any effort, while romance for me felt no less elusive than ever. I had to come to terms with the reality that my five-year plan was a total washout.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 82,
                    lyric: `these words unsaid.`
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Back when I first started to play the banjo, I would strum the motions of Earl Scruggs's`,
                        {
                            anchor: `three-finger roll`,
                            wiki: `Scruggs_style`
                        },
                        `on my kneecap day and night. From there, it naturally crossed over to my guitar fingerpicking technique, as can be heard on the Spanish guitar here.`
                    ],
                    dotKeys: {
                        [BACKSTORY]: true,
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
                                description: `Back when emails were still treated like personal letters, I would sign off with "love Bennett," absent a comma after the valediction out of laziness. Catherine once joked that it sounded like a command spoken in desperation.`,
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
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `As the Yearlings, we would perform this song at breakneck speed, but in this recording I moderated the tempo to make the lyrics intelligible. Even so, my drumming skills were still not up to par, so I recorded the drum tracks at a lower tape speed, which brought them to the proper tempo upon normal playback.`,
                    dotKeys: {
                        [SONGCRAFT]: true
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
                    time: 94,
                    lyric: [
                        {
                            anchor: `Morphined,`,
                            card: {
                                description: `Or I would be a "Mara fiend," which is a slightly different kind of addict.`,
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        },
                        `I'll probably`,
                        {
                            anchor: `die pushing forty,`,
                            card: {
                                description: `Like the Soviets, I needed to take in stride the failures of my first five-year plan. Having banked on rapid character growth, I couldn't cut my losses now. I had nothing to my name other than what the next five-year plan might gain for me. Or failing that, the next one after. Yet five years is a huge chunk of lifetime to mete out all at once, and I only had so many decades remaining. The occasion became ripe to reflect on my mortality.`,
                                dotKeys: {
                                    [BACKSTORY]: true
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
                                description: `To compound the failures of my first five-year plan, it was clear that in the interim I had missed out on some crucial personal development that Jacob and others had naturally come by. And there was no guarantee another five-year plan wouldn't blindside me in the same manner. I feared a future as a stunted man-child, forever chasing ambitions at once both infantile and futile, like building castles out of sand.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                formType: VERSES,
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
                                        anchor: `Unification Church`,
                                        wiki: `Unification_Church`
                                    },
                                    `founded by`,
                                    {
                                        anchor: `Sun Myung Moon`,
                                        wiki: `Sun_Myung_Moon`
                                    },
                                    `is widely seen as a cult due to its aggressive`,
                                    {
                                        anchor: `proselytism.`,
                                        wiki: `Proselytism`
                                    },
                                    `It is perhaps best known for its`,
                                    {
                                        anchor: `mass weddings`,
                                        wiki: `Blessing_ceremony_of_the_Unification_Church`
                                    },
                                    `in which thousands of congregants, informally known as Moonies, are paired off with perfect strangers. I found the thought humorously enticing that I could simply accept a campus Moonie's pamphlet, and my long, hard struggle to find a romantic partner would be over in an instant.`
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
                            card: {
                                description: `To promote cross-cultural harmony, the pairings in these mass weddings are often international by design. So my Moonie bride might possibly be a foreigner, one who was foolish enough to choose this venture solely for the chance to raise a family of native-born American children. Of course, I would be just as foolish to believe that my "maiden Mara co-signs" the marriage license in good faith.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
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
                                    `is a vessel of contemporary objects that will be seen as historical artifacts once rediscovered by a later era. In a way, it allows past generations to speak to future ones. Similarly, in my dejected state, I could only envision my next five-year plan as a forum to air my grievances to a captive future audience.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                            card: {
                                description: [
                                    `There was a comfort in having all my priorities settled in advance by the five-year plan. Since I always knew with certainty the right course of action, I could undertake it with conviction. I was like a`,
                                    {
                                        anchor: `marionette`,
                                        wiki: `Marionette`
                                    },
                                    `being made to posture by the hidden hand of my naive younger self. Of course, I eagerly donned these strings only because I believed my younger self's lies, namely that "Mara you'll net" by doing so.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `in this`,
                        {
                            anchor: `heap of twisted twine.`,
                            card: {
                                description: `With no results to show after five years of diligent effort, I was paralyzed by doubt. There were no more actions I could confidently prescribe to better my circumstances. And so the puppet of my future self could only lie there motionless.`,
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
                formType: CHORUS
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
                                description: `After Mara started dating Jacob, she continued to interact with me in the same flirtatious manner, which made me realize that I had misread her intentions all along.`,
                                dotKeys: {
                                    [BACKSTORY]: true
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
                                description: `Or else, my life in "Mara." I thought I had chosen to leave out this particular pun, but the exaggerated pronunciation is distinctly there in the recording…`,
                                dotKeys: {
                                    [SONGCRAFT]: true,
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
                                    `was a piece of furniture for storing the assorted dishware and linens gathered by a young woman in preparation for married life. By keeping my feelings of hopelessness close to my literal chest, I was also sealing this figurative chest of mine.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
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
                                        `will bring good luck to a bride. But in the`,
                                        {
                                            anchor: `Victorian era,`,
                                            wiki: `Victorian_era`
                                        },
                                        `the children who cleared soot from chimneys were neglected orphans. Whatever fortunes they imparted to others, only a lifetime of ill health awaited for themselves. Likewise, having introduced Mara to Jacob, it was now on me to get on with my lonely life.`
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
                                    `at a young age. But given that I might have to spend countless years in servitude to my five-year plans before I could be my own person again, I was effectively "in dentures" already, and thus unable to speak.`
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
                        `Whispered`,
                        {
                            isItalic: true,
                            lyric: `"adieu,"`
                        },
                        `I bade them`,
                        {
                            anchor: `to fare well,`,
                            card: {
                                description: `Jacob was my friend, of course, and I was happy that he had found Mara. But I also wasn't eager to stick around. So as I imagined them exchanging their vows of "I do," I silently offered a vow of my own to bid them "two farewell."`,
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 153,
                    lyric: [
                        `But then I saw the`,
                        {
                            anchor: `world's a naked baby,`,
                            card: {
                                description: `At some point, I realized that the world does what it does simply because it is what it is. Nothing is hidden from view, and any situation can be understood by reading it closely, no differently than learning from a textbook.`,
                                dotKeys: {
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
                            description: `Or to have a "Mara, you'll" laugh. After all, if the world is as guileless as a newborn, then it makes no sense to get upset when it unwittingly makes a mess of things.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    }
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
                                description: `And if a woman's list of ideal traits in a man includes what kind of father he'll be to her child, then she's likely to judge him by how he interacts with the world at large.`,
                                dotKeys: {
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
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 173,
                    lyric: [
                        {
                            anchor: `Moral is`,
                            card: {
                                description: `Or else, while I'm "Mara-less."`,
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        },
                        `it's up to me to`,
                        {
                            anchor: `be alert;`,
                            card: {
                                description: `In short, it was no mystery why the situation with Mara had transpired the way it had. I found this thought to be empowering, because it meant that the Maras of the world might still be attainable. It was just on me to figure out what they wanted. And once I knew, I could build myself up to be exactly that.`,
                                dotKeys: {
                                    [OBSERVATION]: true
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
                            description: `But I couldn't rely on my friends for the truth. As dear as they all were to me, they each had their own agenda.`,
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    }
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
                                    `Recognizing that what I wanted was Mara or someone like Mara, and taking stock of where I needed to be to fulfill this wish, I decided to return to what I do best. I would hole up in emotional seclusion, this time to work on an ambitious magnum opus. My next five-year plan would have me score all the parts and play all the instruments on`,
                                    {
                                        isItalic: true,
                                        lyric: `Bobtail,`
                                    },
                                    `now conceived as the`,
                                    {
                                        isItalic: true,
                                        lyric: `Ulysses`
                                    },
                                    `of rock albums.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
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
                formType: OUTRO
            },
            mainVerses: [
                {
                    time: 192,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(glockenspiel)`
                    }
                }
            ]
        }
    ]
}
