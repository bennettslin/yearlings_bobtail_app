import { BACKSTORY,
         NARRATIVE,
         OBSERVATION,
         PUN,
         SONGWRITING } from '../constants/dots'
import { VERSES,
         CHORUS,
         INTRO,
         REFRAIN,
         OUTRO,
         IS_DOT_STANZA } from '../constants/lyrics'

module.exports = {
    scenes: [
        {
            unitIndex: 1,
            description: `Bennett's room`,
            actors: {
                bennett: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'looking at Leonard Cohen poster'
                }
            }
        },
        {
            unitIndex: 2,
            description: `Bennett is in his room, trying to figure out a Rubik's Cube.`,
            actors: {
                bennett: {
                    todo: true,
                    workedHours: 1,
                    description: 'sitting on couch, figuring out Rubiks Cube'
                }
            }
        },
        {
            unitIndex: 4,
            description: `Bennett is in his room, doing many things, such that there are many copies of him. One is playing a keyboard and writing stuff down on a notepad, another is reading a book.`,
            actors: {
                bennett: {
                    todo: true,
                    workedHours: 1,
                    description: 'sitting on couch, reading a book'
                },
                stephanie: {
                    bennett: {
                        todo: true,
                        workedHours: 1.16,
                        description: 'sitting on floor, back turned, playing keyboard'
                    }
                }
            }
        },
        {
            unitIndex: 5,
            description: `It's after a show, and the Yearlings are breaking down their set. Jacob is flirting with Mara. Bennett is selling a CD to a hipster, but is distracted by the sight of Mara.`,
            actors: {
                bennett: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'chatting with hipster, paying attention to Mara'
                },
                jacob: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'wiping sweat, chatting with Mara, laughing'
                },
                mara: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'flirting with Jacob'
                },
                ana: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'squatting, back turned, putting bass back in case'
                },
                tomer: {
                    shane: {
                        todo: true,
                        workedHours: 1.16,
                        description: 'chatting with Bennett, gushing about music'
                    }
                }
            }
        },
        {
            unitIndex: 7,
            description: `The Yearlings are taking a break from band practise, eating burgers around a table. Mara is with them, cuddling with Jacob. Bennett is visibly agitated.`,
            actors: {
                bennett: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'sitting, silently eating burger, uncomfortable'
                },
                jacob: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'sitting, eating burger, holding Mara\'s hand'
                },
                mara: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'sitting, chatting'
                },
                ana: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'sitting, eating fries, laughing'
                }
            }
        },
        {
            unitIndex: 9,
            description: `Bennett is walking along outside. He sees Mara's face everywhere he looks: in clouds, on the sides of buildings, and so forth.`,
            actors: {
                bennett: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'side, walking, sulking with head down'
                },
                miriam: {
                    maskedWoman: {
                        todo: true,
                        workedHours: 1.16,
                        description: 'side, holding baby, looking back at Bennett'
                    },
                }
            }
        },
        {
            unitIndex: 11,
            description: 'Bennett is looking at the woman holding a baby who just passed by.',
            actors: {
                bennett: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'side, looking back at baby'
                },
                miriam: {
                    maskedWoman: {
                        todo: true,
                        workedHours: 1.16,
                        description: 'side, walking away'
                    },
                },
                howie: {
                    maskedMan: {
                        todo: true,
                        workedHours: 1.16,
                        description: 'checking watch'
                    }
                }
            }
        },
        {
            unitIndex: 14,
            description: `Bennett suddenly has an epiphany. In sketches in his head, he imagines himself recording all the instruments in a band. Finally, he imagines Mara finding his album in a record store.`,
            actors: {
                bennett: {
                    todo: true,
                    workedHours: 1.16,
                    description: 'side, inspired by sudden thought'
                },
                howie: {
                    maskedMan: {
                        todo: true,
                        workedHours: 1.16,
                        description: 'looking at Bennett'
                    }
                }
            }
        }
    ],
    totalTime: 215,
    overview: `After the breakup with Catherine, I vowed to spend the next five years shaping myself into the ideal romantic prospect. By the end, I was regularly attending local shows while cobbling together my own band. I kept running into a fellow scenester named Mara, and soon I grew infatuated. But Mara ended up going out with my drummer Jacob, which made band practise awkward.`,
    title: {
        anchor: 'M',
        annotation: {
            description: `To avoid mentioning Mara by name, I entitled this song "M," which I planned to explain by packing the lyrics with words that start with the letter M. Deep down, I probably knew that I wasn't fooling anyone.`,
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
                    italic: `(Mara's theme)`
                }
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: `This song is a carryover from back when the band was still just The Yearlings. At the time, I kept its meaning a secret by disguising Mara's name in various puns. In this recording, of course, I exaggerated my enunciation to make the puns obvious.`,
                        dotKeys: {
                            [BACKSTORY]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: INTRO
            }
        ],
        [
            {
                time: 33,
                centre: {
                    anchor: `Maravijaya…`,
                    properNoun: true,
                    annotation: {
                        description: [
                            {
                                italic: `Maravijaya,`
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
            },
            {
                unitMap: true,
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 35,
                lyric: [
                    `I was a lad bent on`,
                    {
                        anchor: `learning the talents`,
                        annotation: {
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
                        annotation: {
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
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `five-year plans`,
                                    wiki: `Five-year_plans_for_the_national_economy_of_the_Soviet_Union`
                                },
                                `of the Soviet Union were centrally planned mandates for rapid economic growth. The first few were particularly brutal, as the disruptive shock of industrialising an agrarian society led to widespread famine and death. Similarly, given how much lost ground I needed to recover, in hindsight it may have been naive to think that my own five-year plan for rapid intellectual growth could be free of unintended negative effects.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `I'd be one to keep.`
                ]
            },
            {
                unitMap: true,
                stanzaType: VERSES
            }
        ],
        [
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
                        annotation: {
                            description: `Up to this point, I'd managed to attract a smattering of women, all of whom were drawn to my brooding, cynical personality. And all of them were eventually turned off in the same way, upon concluding that nothing of greater substance lay beneath. It made perfect sense, then, to start by legitimately becoming what they mistakenly assumed me to be.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        },
                    }
                ]
            },
            {
                time: 64,
                lyric: {
                    anchor: `No minutiae left unmastered,`,
                    annotation: {
                        description: `Though my ultimate goal was to be versed in all general subjects, the most rewarding moments came when I could demonstrate some random skill with seeming nonchalance. So I made sure to set aside time for purely fanciful pursuits, like memorising the periodic table.`,
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
                        annotation: [
                            {
                                description: `During this time, I consulted friends and record store clerks to expand my musical palette. Interestingly, while the offerings they suggested for classical and world music still enrich me to this day, those from the indie rock subgenre have paled into insignificance.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            },
                            {
                                description: [
                                    `Honestly, I wasted a`,
                                    {
                                        emphasis: `lot`
                                    },
                                    `of time on indie rock and its countercultural pretenses, and it remains one of my deepest regrets. But I won't be fooled again.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        ]
                    },
                    `with`,
                    {
                        anchor: `mindful manners`,
                        annotation: {
                            description: `I also quit cursing during this time. I figured it would be a turn-on for any woman who didn't curse, while those who did would still find its quaintness charming.`,
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
                    `Once I`,
                    {
                        anchor: `metamorphose, certain`,
                        annotation: {
                            description: `Or else, once I "met a Mara, for certain" I'd impress.`,
                            dotKeys: {
                                [PUN]: true
                            }
                        }
                    },
                    `I'd impress.`
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: [
                            `I quickly abandoned my original plan to pack the lyrics with M words after this stanza proved how unfeasible an entire song written in this fashion would be.`
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
                time: 75,
                lyric: `Year five, and now the one who dug me up`
            },
            {
                time: 77,
                lyric: [
                    `spent her`,
                    {
                        anchor: `wishes on a friend,`,
                        annotation: {
                            description: `As my five-year plan neared its end, I conducted a review of all that my diligent effort had brought me. Seeing how easily Jacob got together with Mara after one of our shows, while noting that such ease in my own pursuits felt no less elusive than ever, I could only conclude that my plan was a total washout. I was like a genie freed from a lamp, with good fortunes to bestow on all others but myself.`,
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
                lyric: `while forever I'll hold in peace`
            },
            {
                time: 82,
                lyric: `these words unsaid.`
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: [
                            `I learned to play banjo by reading`,
                            {
                                anchor: `Earl Scruggs's`,
                                wiki: `Earl_Scruggs`
                            },
                            `instruction book. His uptempo bluegrass licks weren't easy to tailor to a slower rock beat, so I never made that leap with the banjo. But his three-finger roll became a staple guitar technique of mine, which I use here.`
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 84,
                lyric: [
                    `Hopes wrapped in`,
                    {
                        anchor: `marinaded confections,`,
                        annotation: {
                            description: `Or else, "Mara-needed confessions."`,
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
                        annotation: {
                            description: `Or else, "before, to Mara," never sent.`,
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
                        annotation: {
                            description: `Back when emails were treated more like personal letters, I used to end them with "Love Bennett," absent a comma out of laziness. A friend joked that it sounded like a command spoken in desperation.`,
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
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: `Obviously, Jacob was a far better drummer than I am. To match his tempo, I had to record at a lower tape speed.`,
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
                time: 94,
                lyric: [
                    {
                        anchor: `Morphined,`,
                        annotation: {
                            description: `Or else, "Mara-fiend."`,
                            dotKeys: {
                                [PUN]: true
                            }
                        }
                    },
                    `I'll probably`,
                    {
                        anchor: `die pushing forty,`,
                        annotation: {
                            description: `The conclusion of my five-year plan was occasion to reflect on my mortality. I had banked on rapid growth, and I couldn't cut my losses now. I had nothing to my name other than what another five-year plan might gain for me, or failing that, another one. Yet five years is such a huge chunk of lifetime to mete out all at once, and I had only so much lifetime remaining.`,
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
                        annotation: {
                            description: `Not only did my five-year plan fail to realise its objective, it was clear that I had missed out on some crucial growth in the interim. And there was no guarantee that the next one wouldn't blindside me in the same manner. I feared a future as an emotionally stunted man-child, forever pursuing ambitions at once both infantile and futile.`,
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
                        annotation: {
                            description: `Or else, "a Mara-nursed child."`,
                            dotKeys: {
                                [PUN]: true
                            }
                        }
                    },
                    `who hanged from this tie.`
                ]
            },
            {
                unitMap: true,
                stanzaType: VERSES
            }
        ],
        [
            {
                time: 114,
                lyric: [
                    `Panoramic prints pending my soon-to-be`,
                    {
                        anchor: `Moonie wedding,`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `Unification Church`,
                                    wiki: `Unification_Church`
                                },
                                `led by Sun Myung Moon is widely seen as a cult due to its aggressive proselytism. It is perhaps best known for its mass weddings in which thousands of congregants, often referred to as Moonies, are paired into couples and married en masse. To avoid the long, hard slog of finding a mate, I humoured myself with the enticing thought of resorting to such measures.`
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
                        annotation: [
                            {
                                description: `The pairings in these mass weddings are often international by design. Were I to participate in one, I might very well be matched with a foreigner who was solely interested in getting a green card and raising a family in America.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            },
                            {
                                description: `Or else, fools expecting their "maiden Mara cosigns."`,
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
                        annotation: {
                            description: [
                                `A`,
                                {
                                    anchor: `time capsule`,
                                    wiki: `Time_capsule`
                                },
                                `is a vessel of contemporary objects that will become historical artifacts once rediscovered at a later age. In a way, it allows a past generation to communicate with the future. Similarly, in my dejected state, it was hard to envision my next five-year plan being anything more than a forum for me to air my present grievances to a captive future audience.`
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
                        annotation: {
                            description: [
                                `I was like a`,
                                {
                                    anchor: `marionette`,
                                    wiki: `Marionette`
                                },
                                `ensnared in his wires after Mara tired of controlling him from above. Of course, it was my own fault for believing in such "lies that Mara you'll net."`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `in this heap of twisted twine.`
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
                time: 133,
                lyric: `All I know is that whoever finds me`
            },
            {
                time: 136,
                lyric: [
                    `keeps me`,
                    {
                        anchor: `solely for a pet.`,
                        annotation: {
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
                        annotation: {
                            description: `Or else, my life in "Mara." I thought I had chosen to forego this one, but the exaggerated pronunciation is distinctly there in the recording…`,
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
                        annotation: {
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
            },
            {
                unitMap: true,
                stanzaType: CHORUS
            }
        ],
        [
            {
                /**
                 * TODO: link to urchin in Odin?
                 */
                time: 143,
                lyric: [
                    `Her lispy kiss unlucky for this`,
                    {
                        anchor: `chimney sweep,`,
                        annotation: [
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
                                portal: `chimney_sweep`
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
                        annotation: {
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
                        annotation: {
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
            },
            {
                unitMap: true,
                stanzaType: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 153,
                lyric: [
                    `But then I saw the`,
                    {
                        anchor: `world's a naked baby,`,
                        annotation: {
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
                    annotation: {
                        description: `Or else, to "have a Mara you'll laugh."`,
                        dotKeys: {
                            [PUN]: true
                        }
                    }
                }
            },
            {
                unitMap: true,
                stanzaType: CHORUS
            }
        ],
        [
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
                        annotation: {
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
            },
            {
                unitMap: true,
                stanzaType: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 173,
                lyric: [
                    {
                        anchor: `Moral is`,
                        annotation: {
                            description: `Or else, "Mara-less."`,
                            dotKeys: {
                                [PUN]: true
                            }
                        }
                    },
                    `it's up to me to`,
                    {
                        anchor: `be alert;`,
                        annotation: {
                            description: [
                                `It was no mystery why the situation with Mara transpired as it had. It's never a mystery how`,
                                {
                                    emphasis: `anything`
                                },
                                `plays out the way it does. I found this thought empowering, because I didn't need to know everything all at once. I just needed to know that things are knowable when I`,
                                {
                                    emphasis: `do`
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
                    annotation: {
                        description: `After middle school, I didn't have close friends again until college, so there were plenty of truths about friendship that I was still learning for the first time.`,
                        dotKeys: {
                            [BACKSTORY]: true
                        }
                    }
                }
            },
            {
                unitMap: true,
                stanzaType: CHORUS
            }
        ],
        [
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
                                italic: `Bobtail`
                            },
                            `'s words—`
                        ],
                        properNoun: true,
                        annotation: {
                            description: [
                                `Recognising that what I wanted was Mara or someone like Mara, and having taken stock of where I needed to be to get what I wanted, I decided to return to what I do best: holing up in emotional seclusion and relying solely on my own resourcefulness. My next five-year plan would see me score all the parts and play all the instruments on`,
                                {
                                    italic: `Bobtail,`
                                },
                                `my ambitious magnum opus, now conceived as the`,
                                {
                                    italic: `Ulysses`
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
            },
            {
                unitMap: true,
                stanzaType: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 192,
                centre: {
                    italic: `(glockenspiel)`
                }
            },
            {
                unitMap: true,
                stanzaType: OUTRO
            }
        ]
    ],
    tasks: [
        {
            taskName: `tenses and categorisation`,
            workedHours: 6,
            neededHours: 6
        },
        {
            taskName: `work out narrative order`,
            workedHours: 2,
            neededHours: 2,
        },
        {
            taskName: `annotations`,
            workedHours: 33,
            neededHours: 33
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
            taskName: `review synopses and rough illustrations`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `music annotations`,
            workedHours: 3,
            neededHours: 3
        }
    ]
}
