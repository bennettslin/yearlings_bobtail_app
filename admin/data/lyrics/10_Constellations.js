/**
 * TODO: References, decide on where to put quotations marks. Balance between
 * not being clear and being too obvious.
 */
import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGWRITING
} from '../../../app/constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    RESPONSE,
    REFRAIN,
    IS_UNIT_DOT
} from '../../../app/constants/lyrics'

export default {
    title: 'Constellations!',
    duration: 180,
    overview: `One night, I went with my bassist Ana and her friends to explore the steam tunnels under UCLA while high on Robitussin. I got us to pretend we were Vikings and Mongols and other waves of human migration throughout history, though in hindsight, they were probably just humoring me. I wound up doing a lot of Robitussin that summer. It took me a while to regain my grip on reality.`,
    lyricUnits: [
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `I first tried Robitussin earlier that summer after reading of its narcotic effects in Jim Carroll's`,
                            {
                                isItalic: true,
                                lyric: {
                                    anchor: `The Basketball Diaries,`,
                                    wiki: `The_Basketball_Diaries_(book)`
                                }
                            },
                            `and was soon hooked. The best part about it is the`,
                            {
                                anchor: `closed-eye hallucinations,`,
                                wiki: `Closed-eye_hallucination`
                            },
                            `which are vivid images that seem to be projected onto the backdrop of your eyelids. If they ever get too intense, you simply open your eyes, and they instantly vanish. At the time, I called them "constellations."`
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                            [OBSERVATION]: true
                        }
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
                    time: 0,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(refrain)`
                    }
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
                            `I never got past the first fifty pages of`,
                            {
                                isItalic: true,
                                lyric: {
                                    anchor: `Finnegans Wake.`,
                                    wiki: `Finnegans_Wake`
                                }
                            },
                            `Still, I was impressed by Joyce's use of literary puns to create multiple layers of meaning within a dreamlike setting. It seemed like the perfect device for conveying a Robitussin trip, in which time seems to stand still, and everything feels at once epic and unreal.`
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 4,
                    lyric: [
                        {
                            anchor: `reverends, paused`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `Finnegans Wake,`,
                                                wiki: `Finnegans_Wake`
                                            }
                                        },
                                        `James Joyce's ambitious final novel, opens with the line "riverrun, past Eve and Adam's," so I figured I would start there as well.`
                                    ],
                                    dotKeys: {
                                        [SONGWRITING]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: [
                                        `Since I am the experienced Robitussin user of the group, the others follow my lead in treating it as a mystical journey, and we tread with "reverence" through the UCLA campus.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `stiff in tandem.`,
                            todo: true,
                            card: {
                                description: `Robitussin in its early stages will make your limbs feel stiff and mechanical. Having taken it an hour prior, we enjoy these effects and deliberately exaggerate them.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 7,
                    lyric: [
                        {
                            anchor: `Heavin' some, Ana`,
                            todo: true,
                            card: {
                                description: `"Heaving some, Ana whispers a low sigh." The others have just learned that when you first down a whole bottle of Robitussin, you'll probably want to retch. Within a moment, though, your lungs will shrivel away, and you'll be peacefully breathing through gills underwater.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `whispures a low sigh, bein'…`,
                            todo: true,
                            card: {
                                description: [
                                    `"Heaven's manna was pure psilocybin." At the time, I was intrigued by the historical role played by psychedelic drugs that textbooks naturally failed to mention. One theory is that`,
                                    {
                                        anchor: `manna`,
                                        wiki: `Manna`
                                    },
                                    `from heaven was a`,
                                    {
                                        anchor: `psilocybin mushroom,`,
                                        wiki: `Psilocybin_mushroom`
                                    },
                                    `based on its description in the Bible.`
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
                    time: 11,
                    lyric: [
                        `of`,
                        {
                            anchor: `de exempt,`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Dextromethorphan,`,
                                            wiki: `Dextromethorphan`
                                        },
                                        `the cough suppressant found in Robitussin, is often abbreviated as "DXM."`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: [
                                        `The Israelites, being of "the exempt," were spared the`,
                                        {
                                            anchor: `plagues`,
                                            wiki: `Plagues_of_Egypt`
                                        },
                                        `that God visited upon Egypt, just as we are now immune to flu symptoms.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `exit us`,
                            todo: true,
                            card: {
                                description: [
                                    `As the Book of`,
                                    {
                                        anchor: `"Exodus"`,
                                        wiki: `Book_of_Exodus`
                                    },
                                    `recounts how the Israelites found manna during their trek out of Egypt, so too do we leave the drugstore with spiritual sustenance in hand.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `the`,
                        {
                            anchor: `Viking den…`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Like the`,
                                        {
                                            anchor: `Vikings,`,
                                            wiki: `Vikings`
                                        },
                                        `Norse seafarers who expanded outward from Scandinavia beginning in the 8th century, we have left the comfort of our dens to explore new vistas.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    description: [
                                        `Ana's friends Howie and Tomer, being seasoned drug users but having never taken Robitussin before, assume its effects are weaker than those of prescribed painkillers like`,
                                        {
                                            anchor: `"Vicodin."`,
                                            wiki: `Hydrocodone/paracetamol`
                                        },
                                        `The night will soon prove them wrong.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
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
                formType: VERSES,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 19,
                    lyric: [
                        {
                            anchor: `Walkyriens:`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Back to earlier that night. We have arrived at a`,
                                        {
                                            anchor: `"Walgreens"`,
                                            wiki: `Walgreens`
                                        },
                                        `pharmacy to procure our Robitussin.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `"Valkyries"`,
                                            wiki: `Valkyrie`
                                        },
                                        `in Norse mythology were noble maidens who escorted fallen warriors from the battlefield.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `to`,
                        {
                            // NOTE: I changed from 'Walhall.'
                            anchor: `Wal-hall o'`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `The Valkyries would bring the dead heroes to`,
                                        {
                                            anchor: `"Valhalla,"`,
                                            wiki: `Valhalla`
                                        },
                                        `a majestic hall ruled by the god Odin.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: [
                                        `The Walgreens aisles might be referred to as "Wal-halls," as they are stocked with generic versions of brand-name drugs, each with the prefix "Wal" in its name: Wal-Dryl, Wal-Phed… and so forth.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `mead-Tussin!`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Mead`,
                                        wiki: `Mead`
                                    },
                                    `was the drink of the Norse gods, just as we look for Wal-Tussin as our "medicine" of choice.`
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
                    time: 22,
                    lyric: [
                        {
                            anchor: `Quouffs uppraissed,`,
                            todo: true,
                            card: {
                                description: `Not all bottles of Robitussin will get you high. The ones to avoid are those that contain guaifenesin, which just reduces congestion. So we "upraise" our "quaffs" to "appraise" them specifically for the medicinal property that keeps "coughs suppressed."`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                    [REFERENCE]: true
                                }
                            }
                        },
                        `this`,
                        {
                            anchor: `boundless Kalevalley ends.`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `Kalevala`,
                                            wiki: `Kalevala`
                                        },
                                        `is the national epic poem of Finland.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: [
                                        `The San Fernando Valley, which I hated in my youth, is`,
                                        {
                                            isEmphasis: true,
                                            lyric: `the`
                                        },
                                        `"Cali valley." The days before I could leave were painfully endless. On this summer break back home, however, my newfound independence combines with the magic of Robitussin to render escape instantaneous.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 26,
                    lyric: [
                        `We ride as`,
                        {
                            anchor: `Finnugreec tongue`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `The Finnish language belongs in the`,
                                        {
                                            anchor: `"Finno-Ugric"`,
                                            wiki: `Finno-Ugric_languages`
                                        },
                                        `family.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: [
                                        `The licorice taste of Robitussin, which lingers on our tongues, is reminiscent of the spice`,
                                        {
                                            anchor: `"fenugreek."`,
                                            wiki: `Fenugreek`
                                        }
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `Lapps are highmen.`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `Lapps`,
                                            wiki: `Sami_people`
                                        },
                                        `are a Finno-Ugric people indigenous to the northern regions of Scandinavia.`
                                    ]
                                },
                                {
                                    description: `We are literally "high men," and since the others are trying it for the first time, the Robitussin also "laps our hymen."`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
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
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `The Police's`,
                            {
                                isItalic: true,
                                lyric: {
                                    anchor: `Ghost in the Machine`,
                                    wiki: `Ghost_in_the_Machine_(album)`
                                }
                            },
                            `was my soundtrack of choice for a Robitussin trip, so I tried to recreate its ambience. The drums on this song are my amateurish imitation of Stewart Copeland's performance in "Secret Journey," in which the kick is left off the downbeat almost throughout. Such a simple idea, but it does wonders for letting the music here breathe before being submerged again in the chorus.`
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 34,
                    lyric: [
                        {
                            anchor: `Makeyars mygrate,`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: `Cut back to the present scene. Howie and Tomer promise to "make yours my grate," as they share their knowledge of the hidden grate that leads down to the steam tunnels.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `"Magyars"`,
                                            wiki: `Hungarians`
                                        },
                                        `are a Finno-Ugric people who "migrated" from the Ural Mountains and established the state of Hungary.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `from`,
                        {
                            anchor: `among ol'`,
                            todo: true,
                            card: {
                                description: [
                                    `The Magyars share genetic ancestry with the`,
                                    {
                                        anchor: `"Mongols,"`,
                                        wiki: `Mongols`
                                    },
                                    `an East Asian nomadic people.`
                                ],
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `psealed off drains.`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Back in the day, the Robitussin we took also contained`,
                                        {
                                            anchor: `"pseudoephedrine,"`,
                                            wiki: `Pseudoephedrine`
                                        },
                                        `a decongestant. Because of its use in the illicit manufacture of methamphetamine, however, this is no longer the case.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: `The entrance to the steam tunnels is hidden "among old, sealed-off drains."`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
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
                    time: 41,
                    lyric: [
                        `Then`,
                        {
                            anchor: `down the steppes`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `As we rush down the earthen "steps" leading into the steam tunnels, I imagine us as 13th-century Mongol horsemen sweeping down from the Asian`,
                                        {
                                            anchor: `steppes`,
                                            wiki: `Steppe`
                                        },
                                        `to begin our conquests.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    wormhole: `down_the_steppes`
                                }
                            ]
                        },
                        `we charged,`
                    ]
                },
                {
                    time: 45,
                    lyric: [
                        {
                            anchor: `Drinkhis Khan, once Toomujin,`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `"Genghis Khan,"`,
                                        wiki: `Genghis_Khan`
                                    },
                                    `whose birth name was "Temujin," was the founder of the Mongol Empire.`
                                ],
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        },
                        `has`,
                        {
                            anchor: `slain the teeto-Tatars!`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Genghis Khan was able to unite the Mongols by defeating the`,
                                        {
                                            anchor: `"Tatars,"`,
                                            wiki: `Tatars`
                                        },
                                        `a rival tribe.`
                                    ]
                                },
                                {
                                    description: [
                                        `I'd just taken Robitussion a few days ago, so earlier tonight I was wavering back and forth like a playground "teeter-totter" on whether to take it again so soon, since each trip really destroys you for a good while. But once the "drink is gone" and I've had "too much in," the familiar sensation kicks in and kills off any lingering protest from my inner "teetotaler."`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 49,
                    lyric: [
                        {
                            anchor: `Tomer-layin' the seed,`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Tamerlane,`,
                                            wiki: `Timur`
                                        },
                                        `who descended from the seed of Genghis Khan, continued the Turko-Mongol expansion into Central Asia.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: `As Tomer jokingly drops crumbs of dirt as if to leave a trail, I observe that it's like he's "laying the seeds" that will sprout into nations.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `Howie led the feat`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: `Oblivious to the lingering stiffness of his limbs, Howie is walking as if his "feet" are made of "lead."`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `Mughals,`,
                                            wiki: `Mughal_Empire`
                                        },
                                        `Muslim descendants of Tamerlane, surely regaled themselves with tales of "how he" led the feat that precipitated their conquest of South Asia and its Hindu populations.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `of`,
                        {
                            anchor: `avatars…`,
                            todo: true,
                            card: {
                                description: [
                                    `In Hinduism, an`,
                                    {
                                        anchor: `avatar`,
                                        wiki: `Avatar`
                                    },
                                    `is the earthbound incarnation of a deity, and some avatars are speculated to be historical figures whose exploits predate written tradition.`
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: REFRAIN
            },
            mainVerses: [
                {
                    time: 52,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(refrain)`
                    }
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
                            `Sita introduced me to`,
                            {
                                anchor: `Bollywood`,
                                wiki: `Bollywood`
                            },
                            `movies, which are a gold mine of musical sounds and ideas. The chords here were shamelessly borrowed from the title track of our favourite,`,
                            {
                                isItalic: true,
                                lyric: {
                                    anchor: `Hum Aapke Hain Koun…!`,
                                    wiki: `Hum_Aapke_Hain_Koun..!`
                                }
                            }
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 56,
                    lyric: [
                        {
                            anchor: `Indus-trail sewerce,`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `As we wind through "industrial sewers" pretending to be Mughal invaders, I explain the problem with the`,
                                    {
                                        anchor: `Aryan Invasion`,
                                        wiki: `Indo-Aryan_migration_theory`
                                    },
                                    `theory. Proposed by 19th-century Western scholars, the theory holds that civilisation in the Indus Valley was brought by invaders from the north, who were the "Indus trail source."`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `questurns Indo Hairapins:`,
                            todo: true,
                            card: {
                                description: [
                                    `Our "quest turns into hairpins" as Howie and Tomer guide us around some rather sharp turns. All the while, I blather on about "questions" surrounding the`,
                                    {
                                        anchor: `"Indo-Harappan" Civilisation`,
                                        wiki: `Indus_Valley_Civilisation`
                                    },
                                    `that may be answered by studying the evolution of the`,
                                    {
                                        anchor: `"Indo-European"`,
                                        wiki: `Indo-European_languages`
                                    },
                                    `language family.`
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
                    time: 60,
                    lyric: [
                        {
                            anchor: `Forsi ahuro`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `In the Iranian language of "Farsi,"`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `ahura`,
                                            wiki: `Ahura`
                                        }
                                    },
                                    `is the word for an Avestan deity. But in the Vedic texts of ancient India,`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `asura`,
                                            wiki: `Asura`
                                        }
                                    },
                                    `refers to a demon. This suggests that a rift occurred amongst the`,
                                    {
                                        anchor: `Indo-Iranian`,
                                        wiki: `Indo-Iranians`
                                    },
                                    `people based on religious differences, and because the`,
                                    {
                                        anchor: `Vedas`,
                                        wiki: `Vedas`
                                    },
                                    `precede the`,
                                    {
                                        anchor: `Avesta,`,
                                        wiki: `Avesta`
                                    },
                                    `it's likely that the apostates left the Indian subcontinent and moved westward to the Iranian basin, rather than the other way around.`
                                ],
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        },
                        `or`,
                        {
                            anchor: `Sensegreat devas'dayshone?`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `Moreover, in "Sanskrit," the ancient Indian language,`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `deva`,
                                            wiki: `Deva_(Hinduism)`
                                        }
                                    },
                                    `is the word for a Vedic deity, while`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `daeva`,
                                            wiki: `Daeva`
                                        }
                                    },
                                    `in the Avesta refers to a demon. Thus, whether one "foresees a hero" or "senses great devastation" as the "deva's day shone" depends on which side of the rift one is aligned with.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 64,
                    lyric: [
                        {
                            anchor: `To soma up,`,
                            todo: true,
                            card: {
                                description: [
                                    `In the Vedas,`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `soma`,
                                            wiki: `Botanical_identity_of_soma%E2%80%93haoma`
                                        }
                                    },
                                    `is a ritual drink prepared from an unidentified botanical substance believed by scholars to have held psychedelic properties. In the Avesta, it is referred to as`,
                                    {
                                        isItalic: true,
                                        lyric: `haoma.`
                                    }
                                ]
                            }
                        },
                        {
                            anchor: `our-youn' invedas`,
                            todo: true,
                            card: {
                                description: [
                                    `Although the`,
                                    {
                                        anchor: `"Aryans"`,
                                        wiki: `Aryan`
                                    },
                                    `spoken of "in the Vedas" and in the Avesta were a noble class based on religious distinction, some 19th-century Western scholars postulated that they were a blonde, light-skinned race who had conquered and civilised the local population. While this theory has been debunked, the origin of the Indo-European people is still a matter of wide debate. And so "to sum up," I must put this "unsolved query" to rest, before the others lose their minds.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `unsolft quarry rest…`,
                            todo: true,
                            card: {
                                description: `"Our young invaders" have now arrived at a clearing where dirt from the ground has been pushed against the walls and shaped into makeshift benches. Pausing for a breather, on this "soft quarry" we rest.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 70,
                    lyric: [
                        {
                            anchor: `Ourevian battles spent,`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Spent from the "Arabian battles" that ended with their conquest by the`,
                                        {
                                            anchor: `Arabs,`,
                                            wiki: `Arabs`
                                        },
                                        `the Persians were then subjugated by the Mongols, the next enemy at their doorstep.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: [
                                        `Robitussin requires you to stay constantly hydrated, and "our`,
                                        {
                                            anchor: `Evian`,
                                            wiki: `Evian`
                                        },
                                        `bottles" that we brought into the steam tunnels are now empty.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `a'duct Uighuress.`,
                            todo: true,
                            card: {
                                description: [
                                    `The Mongols would slaughter the men and seize the women of the populations they conquered. This fate was no doubt met by the`,
                                    {
                                        anchor: `Uighurs,`,
                                        wiki: `Uyghurs`
                                    },
                                    `a Turkic people, whom the Mongols encountered in their early campaigns. And so through "a duct, we egress," or exit, the steam tunnels, but not before I feign to "abduct a Uighuress."`
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
                    time: 75,
                    lyric: [
                        {
                            anchor: `Are Melee tapirs`,
                            todo: true,
                            card: {
                                description: `"Our melee tapers the discourse." Scavenging materials to make swords and shields, we could only brandish them with playful menace within the narrow corridors of the steam tunnels. Now out in the open, we stop chattering and start battling as we make our way back to the car.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `the dusc-horse yet…?`,
                            todo: true,
                            card: {
                                description: [
                                    `"Are Malay tapirs the dusk horse yet?" Through conquests and migrations, exotic new species were discovered. Native to the Malay peninsula, the`,
                                    {
                                        anchor: `Malayan tapir`,
                                        wiki: `Malayan_tapir`
                                    },
                                    `is distantly related to the horse and bears a similarity to the horse's prehistoric ancestor`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Eohippus,`,
                                            wiki: `Eohippus`
                                        }
                                    },
                                    `or "dawn horse." This "dusk horse," then, would be one encountered at the end of history, the brink of which so many throughout history had believed to have been reached.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 79,
                    lyric: [
                        `From the`,
                        {
                            anchor: `Khlmair city Ingcar Wet,`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Angkor Wat,`,
                                            wiki: `Angkor_Wat`
                                        },
                                        `or "Temple City," is a 12th-century Hindu temple built by the`,
                                        {
                                            anchor: `Khmer Empire`,
                                            wiki: `Khmer_Empire`
                                        },
                                        `in what is now present-day Cambodia.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: `Taking in the "calm air," we are "sitting in car wet," as we guzzle the remaining Evian bottles that Howie's dad had bought in bulk and left in the trunk.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `to war:`,
                        {
                            anchor: `scimitary of'fence!`,
                            todo: true,
                            card: {
                                description: [
                                    `Our next plan of attack is to visit the grave of Howie and Tomer's high school buddy Adam. And so, rested and energised, we renew our`,
                                    {
                                        anchor: `"scimitar`,
                                        wiki: `Scimitar`
                                    },
                                    `offence" with a plan to drive through the "cemetery fence."`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `On my solo Robitussin trips, I would mentally search for metaphysical truths while playing video games on my old`,
                            {
                                anchor: `Super NES console.`,
                                wiki: `Super_Nintendo_Entertainment_System`
                            },
                            `16-bit sounds thus came to take on a spiritual significance for me.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: PRECHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 86,
                    lyric: [
                        {
                            anchor: `Pour sod, fourfeit tundr's`,
                            todo: true,
                            card: {
                                description: `In the car, Howie and Tomer swap tales from their high school days, bemoaning the "poor sod" who had sod poured on him from "four feet under."`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `Siburial plains…`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `The Americas were first settled by northeast Asian populations who gladly "forfeited the tundra's`,
                                    {
                                        anchor: `Siberian`,
                                        wiki: `Siberia`
                                    },
                                    `plains," which otherwise would have served as their "burial" grounds.`
                                ],
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 94,
                    lyric: [
                        {
                            anchor: `Upridge o' lawn`,
                            todo: true,
                            cards: [
                                {
                                    description: `We park the car and head up "a ridge of lawn."`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: [
                                        `According to the`,
                                        {
                                            anchor: `Beringia theory,`,
                                            wiki: `Beringia`
                                        },
                                        `the Americas were settled by populations from north Asia who crossed "a bridge of land" connecting the two continents. As glaciers melted, however, the sea level rose, effectively causing the bridge to sink.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `trod on by`,
                        {
                            anchor: `forc'd nations`,
                            todo: true,
                            card: {
                                description: [
                                    `"Forced" to leave their Asian homelands due to scarcity of resources, these groups are now known to Canada as the`,
                                    {
                                        anchor: `"First Nations."`,
                                        wiki: `First_Nations`
                                    }
                                ],
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        },
                        `sank…`
                    ]
                },
                {
                    time: 101,
                    lyric: [
                        `But`,
                        {
                            anchor: `past a cross Bearing Straight,`,
                            todo: true,
                            card: {
                                description: [
                                    `We venture "past a cross, bearing straight," just as those before us had "passed across the`,
                                    {
                                        anchor: `Bering Strait."`,
                                        wiki: `Bering_Strait`
                                    }
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
                    time: 103,
                    lyric: [
                        {
                            anchor: `herows— ourauras left—`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Other indigenous peoples, such as the`,
                                        {
                                            anchor: `Inuits`,
                                            wiki: `Inuit`
                                        },
                                        `of the Arctic regions, may have migrated to the Americas by boat. An Inuit storyteller might narrate the journey of one such seafaring ancestor by describing how "he rows" with the "auroras," or`,
                                        {
                                            anchor: `aurora borealis,`,
                                            wiki: `Aurora`
                                        },
                                        `to his "left."`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: `Wishing to respect the dead, we've "left" "our auras" as history's "heroes" behind in the car.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `to`,
                        {
                            anchor: `Audamn's grave.`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: `We sigh in relief to have quickly spotted "Adam's" grave from amongst a sea of identical headstones, just as the indigenous Americans, upon discovering a more bountiful land, perished their fears of an encroaching "autumn."`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 109,
                    lyric: `And now without a chart,`
                },
                {
                    time: 112,
                    lyric: `just the winds and the constellations known by heart,`
                },
                {
                    time: 116,
                    lyric: [
                        {
                            anchor: `I'll sail this sea,`,
                            todo: true,
                            card: {
                                description: [
                                    `Standing in front of Adam's headstone under the predawn sky, I'm overcome with a profound sense of clarity and purpose, and I renew my determination to finish`,
                                    {
                                        isItalic: true,
                                        lyric: `Bobtail`
                                    },
                                    `guided solely by my artistic instincts.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `there is only me and my northern star!`
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: REFRAIN
            },
            mainVerses: [
                {
                    time: 120,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(refrain)`
                    }
                }
            ]
        },
        {
            unitMap: {
                subVerse: [
                    {
                        time: 128,
                        lyric: {
                            isItalic: true,
                            lyric: {
                                anchor: `sunk in tarpid lies!`,
                                todo: true,
                                cards: [
                                    {
                                        description: [
                                            {
                                                anchor: `Tar pits`,
                                                wiki: `Tar_pit`
                                            },
                                            `occur when natural asphalt leaks to the surface from underground. Preserving wood and bone, they are rich sources of paleontological discovery.`
                                        ]
                                    },
                                    {
                                        description: `My mastodon lies "sunk in a tar pit," just as I have "sunk in torpid lies" with my endless excuses to Sita for why we can't spend more nights together when I'm ever eager to make time for my friends.`,
                                        dotKeys: {
                                            [NARRATIVE]: true,
                                            [PUN]: true
                                        }
                                    },
                                    {
                                        wormhole: `sunken_tirpitz`
                                    }
                                ]
                            }
                        }
                    }
                ],
                formType: BRIDGE,
                subCardType: RESPONSE
            },
            mainVerses: [
                {
                    time: 124,
                    lyric: [
                        `The`,
                        {
                            anchor: `mistodawn,`,
                            todo: true,
                            card: {
                                description: `The "mist of dawn" breaks, and we drive back to Howie's place. My newfound clarity proves short-lived as I lean back and shut my eyes to gaze at constellations.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `ha'nt'd by sobre-trooth tiedgirl`,
                            todo: true,
                            card: {
                                description: [
                                    `Encountering the vision of a`,
                                    {
                                        anchor: `"mastodon"`,
                                        wiki: `Mastodon`
                                    },
                                    `being "hunted by a`,
                                    {
                                        anchor: `sabre-toothed tiger,"`,
                                        wiki: `Smilodon`
                                    },
                                    `I am subconsciously "haunted by the sober truth" that I continue to keep Sita captive in a codependent relationship of which I am beginning to tire.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `cries…`
                    ]
                }
            ]
        },
        {
            unitMap: {
                subVerse: [
                    {
                        time: 135,
                        lyric: {
                            isItalic: true,
                            lyric: [
                                `he sees`,
                                {
                                    anchor: `Lowkey and Freyed!`,
                                    properNoun: true,
                                    todo: true,
                                    card: {
                                        description: [
                                            `As my better self observes me in my "low-key and fried" state, I see a constellation of my brother as`,
                                            {
                                                anchor: `"Loki,"`,
                                                wiki: `Loki`
                                            },
                                            `the Norse trickster god, next to one of my sister as`,
                                            {
                                                anchor: `"Freyja,"`,
                                                wiki: `Freyja`
                                            },
                                            `the Norse goddess on equal footing with Odin.`
                                        ],
                                        dotKeys: {
                                            [PUN]: true
                                        }
                                    }
                                }
                            ]
                        }
                    }
                ],
                formType: BRIDGE,
                subCardType: RESPONSE,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 131,
                    lyric: [
                        `In`,
                        {
                            anchor: `Hollowscene`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `Holocene`,
                                            wiki: `Holocene`
                                        },
                                        `is the current geological epoch, which began with the first human settlements.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: `As Robitussin is a dissociative drug, I start to detach from myself. In doing so, I catch a glimpse of how superficial my aspirations are, and how "hollow" the local "scene" is in which I desire recognition.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `broughtour ancister`,
                            todo: true,
                            card: {
                                description: [
                                    `In the epic vision playing out in my mind, the mastodon becomes a spirit animal of our Inuit tribe, as we have "brought our ancestral`,
                                    {
                                        anchor: `totems`,
                                        wiki: `Totem`
                                    },
                                    `and rites" to our new homeland.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `toughtim rite…`,
                            todo: true,
                            card: {
                                description: [
                                    `Having now achieved a full out-of-body experience, I gaze down upon my drugged-out self. This degrading sight, against the familiar backdrop of Los Angeles, reminds me that in having scuttled off to the Bay Area, I am shirking my responsibility to care for our autistic brother, unlike my sister, who still lives close to our parents. Guilt-ridden, I sarcastically note that "brother and sister taught him right."`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                formType: BRIDGE,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 139,
                    lyric: [
                        {
                            // NOTE: I changed from "Nunavutter."
                            anchor: `Noworse and Nunavetter`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `My friends and I have now followed the Inuit all the way to`,
                                    {
                                        anchor: `Nunavut,`,
                                        wiki: `Nunavut`
                                    },
                                    `the northernmost territory of Canada. Yet with the reappearance of the Norse in my thoughts, I realise that our bounds are not so limitless, as even our imaginations must repeat themselves. There is no new ground left to uncover, both in our fantasy epics and in our everyday lives. And so, just as the "Norse" encounter the "Nunavutter," we end the night as we had begun it, "no worse and none the better."`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `collide…`
                    ]
                },
                {
                    time: 142,
                    lyric: {
                        isItalic: true,
                        lyric: [
                            {
                                anchor: `Leif as the Red's son`,
                                properNoun: true,
                                todo: true,
                                cards: [
                                    {
                                        description: [
                                            `The Norse explorer`,
                                            {
                                                anchor: `Leif Erikson`,
                                                wiki: `Leif_Erikson`
                                            },
                                            `was the son of`,
                                            {
                                                anchor: `Erik the Red,`,
                                                wiki: `Erik_the_Red`
                                            },
                                            `who established Norse settlements in Greenland.`
                                        ]
                                    },
                                    {
                                        description: `The arrival of Europeans into the Americas, which precipitated their rise to global power, also brought disease and ruin to the indigenous populations. Similarly, while the day begins for many, it is over for us, and we "leave as the red sun" arrives.`,
                                        dotKeys: {
                                            [NARRATIVE]: true,
                                            [PUN]: true
                                        }
                                    }
                                ]
                            },
                            `arrives!`
                        ]
                    }
                },
                {
                    time: 147,
                    lyric: [
                        `How old are`,
                        {
                            anchor: `these mummeries`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `A`,
                                        {
                                            anchor: `mummy`,
                                            wiki: `Mummy`
                                        },
                                        `is a preserved corpse, while a`,
                                        {
                                            anchor: `mummer`,
                                            wiki: `Mummers_play`
                                        },
                                        `is a masked mime.`
                                    ]
                                },
                                {
                                    description: `While my eyes remain closed, my thoughts grow further disjointed. Injecting myself into world history, I see all of time collapsing into a singularity, such that everyone who has ever lived is at once dead and not dead, including me. Or is this just an endless series of silent acts that we've all agreed to perform in? "Mummeries," if you will?`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `I have`,
                        {
                            anchor: `left to mine?`,
                            todo: true,
                            card: {
                                description: `At the peak of my dissociation, I "mine" through my "memories," unable to separate the collective memories of the world from those that are "mine" alone.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `For a song about recreational drug use, I naturally sought counsel from the Beatles, whose`,
                            {
                                isItalic: true,
                                lyric: {
                                    anchor: `"Tomorrow Never Knows"`,
                                    wiki: `Tomorrow_Never_Knows`
                                }
                            },
                            `includes a tape loop that imitates a seagull's cry. I tried to recreate this sound by pinching off the air stream coming through a recorder's window, but the result wasn't exactly what I wanted. Kept in the background, however, it contributes nicely to the overall atmosphere.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 154,
                    lyric: [
                        {
                            anchor: `Pullar switch,`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Geomagnetic reversal`,
                                            wiki: `Geomagnetic_reversal`
                                        },
                                        `occurs when the Earth's magnetic poles are interchanged. Such "polar switches" may cause large-scale geological disturbances, according to some hypotheses.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: `Back at Howie's place, I'm crashed on a couch in his attic. An old black-and-white television sits in front of me, and I "pull the switch" to turn it on.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `in-som'umiak`,
                            todo: true,
                            card: {
                                description: [
                                    `Sensing disaster afoot, our brave tribe flees to safety "in some`,
                                    {
                                        anchor: `umiak,"`,
                                        wiki: `Umiak`
                                    },
                                    `an Inuit boat made from whalebone and sealskin, as we skim through icy channels wreaked by a snowy blitz.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `skims through channels`,
                            todo: true,
                            card: {
                                description: `Being an "insomniac," I skim through channels that are "snow-blitzed" due to the television's poor reception.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `snow blitz'd…`
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
                    time: 161,
                    lyric: [
                        `Then pounds`,
                        {
                            anchor: `arrhythmetic heart,`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Arrhythmia,`,
                                        wiki: `Cardiac_arrhythmia`
                                    },
                                    `or an inrregular heartbeat, is one downside of taking Robitussin. As its psychedelic effects wear off, I grow paranoid and perform "arithmetic" in my head, hoping that my pulse becomes more stable with each passing minute.`
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
                    time: 165,
                    lyric: [
                        {
                            anchor: `Enguished buzzereds`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `In the historical narrative still playing in my head, the`,
                                    {
                                        anchor: `"English"`,
                                        wiki: `English_people`
                                    },
                                    `have now arrived to despoil the New World, with the white ruffs around their necks resembling those of "buzzards."`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `come unsated`,
                            todo: true,
                            card: {
                                description: `Howie had opted for a large bottle of Robitussin, thinking the small one I had recommended wouldn't be enough. I now hear him downstairs, in "anguish" over still being "buzzed," as he guzzles cup after cup of water to quench his parched innards.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `find`,
                        {
                            anchor: `Rumspring`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Rumspringa`,
                                        wiki: `Rumspringa`
                                    },
                                    `is a period of adolescence during which the`,
                                    {
                                        anchor: `Amish`,
                                        wiki: `Amish`
                                    },
                                    `are permitted to rebel, such that their decision to remain in the community is not rooted in ignorance of the outside world. Though it means "running around" in Pennsylvania Dutch, I like the image of an actual spring of rum. In any case, the spring of our youth, in both the literal and metaphorical sense, is running dry.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `is parched.`
                    ]
                },
                {
                    time: 169,
                    lyric: [
                        {
                            anchor: `In mouth Deseret,`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Deseret`,
                                        wiki: `Deseret_alphabet`
                                    },
                                    `is an alphabet developed by the early`,
                                    {
                                        anchor: `Mormons,`,
                                        wiki: `Mormons`
                                    },
                                    `also known as Latter-Day Saints. As it once filled their mouths, a "desert" now fills ours.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `black Letter-Day`,
                            todo: true,
                            cards: [
                                {
                                    description: `Holidays on a calendar are marked in red, so by contrast, the "black-letter day" that I sense ahead will be just another ordinary day.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                        [REFERENCE]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `Sensed ahead…`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `"Black Latter-Day Saints to head." While the Mormon Church originally did not allow its`,
                                        {
                                            anchor: `black members`,
                                            wiki: `Black_people_and_Mormonism`
                                        },
                                        `to attain priesthood, this policy was reversed in 1978.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                        [REFERENCE]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `"Rejoyce!" bellow the`,
                            todo: true,
                            cards: [
                                {
                                    description: `"'Rejoice!' bellow the reverends." Stuck with nothing to watch but early-morning televangelists, I observe that every religion's early spirit eventually degrades into orthodoxy and routine, just like each person's does over a lifetime. But in the meantime, we're just halfway through summer, and more nights of Robitussin await…`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: [
                                        `Joyce wrote the last line of`,
                                        {
                                            isItalic: true,
                                            lyric: `Finnegans Wake`
                                        },
                                        `to wrap back onto the first, so I "re-Joyced" by indulging in the same conceit.`
                                    ],
                                    dotKeys: {
                                        [SONGWRITING]: true,
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
                formType: REFRAIN
            },
            mainVerses: [
                {
                    time: 172,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(refrain)`
                    }
                }
            ]
        }
    ]
}