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
} from '../../../../app/constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    RESPONSE,
    REFRAIN,
    IS_UNIT_DOT
} from '../../../../app/constants/lyrics'

export default {
    title: 'Constellations!',
    duration: 180,
    overview: `One night I went with my bassist Ana and her friends to explore the steam tunnels under UCLA while high on Robitussin. I got us to pretend we were Vikings and Mongols and other waves of human migration throughout world history. In hindsight, they were probably just humoring me. I wound up doing a lot of Robitussin that summer. It took a while for me to regain my grip on reality.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `I first tried Robitussin earlier that summer after reading of its narcotic effects in`,
                        {
                            anchor: `Jim Carroll's`,
                            wiki: `Jim_Carroll`
                        },
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `The Basketball Diaries.`,
                                wiki: `The_Basketball_Diaries_(book)`
                            }
                        },
                        `It instantly became my drug of choice, since I didn't need to know any dealers. The best thing about a Robitussin trip is the`,
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
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 4,
                    lyric: [
                        {
                            anchor: `reverends, paused`,
                            cards: [
                                {
                                    description: [
                                        `We tread with "reverence" through the UCLA campus. Since I am the experienced Robitussin user of the group, the others follow my lead in treating it as a mystical journey.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: [
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `Finnegans Wake,`,
                                                wiki: `Finnegans_Wake`
                                            }
                                        },
                                        `James Joyce's ambitious final novel, opens with the line, "riverrun, past Eve and Adam's." So I figured this song could start there as well.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                        [SONGWRITING]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `stiff in tandem.`,
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
                            card: {
                                description: `"Heaving some, Ana whispers a low sigh." The others have just learned that when you first down a whole bottle of Robitussin, you'll likely want to retch. Within a moment, though, you'll feel your lungs shrivel away, and it's like you're peacefully breathing through gills underwater.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `whispures a low sigh, bein'…`,
                            card: {
                                description: [
                                    `"Heaven's manna was pure psilocybin." At the time, I was intrigued by the role played by psychedelic drugs in world history. Though textbooks naturally failed to provide this information, it was readily available in the alternative bookstores around Berkeley. One theory is that`,
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
                                        `that God visited upon Egypt. And with stomachs full of Robitussin, we were spared any chance of showing flu symptoms.`
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
                            card: {
                                description: `As the Book of "Exodus" recounts how the Israelites found manna during their trek out of Egypt, so too do we leave the drugstore with spiritual sustenance in hand.`,
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
                            cards: [
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `Vikings`,
                                            wiki: `Vikings`
                                        },
                                        `were Norse seafarers who expanded outward from`,
                                        {
                                            anchor: `Scandinavia`,
                                            wiki: `Scandinavia`
                                        },
                                        `beginning in the 8th century. Like them, we have left the comfort of our dens to explore new vistas.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    description: [
                                        `Ana's friends Howie and Tomer were seasoned drug users but had never taken Robitussin before. Given that it is sold`,
                                        {
                                            anchor: `over the counter,`,
                                            wiki: `Over-the-counter_drug`
                                        },
                                        `they had assumed its effects would be weaker than those of prescribed painkillers like`,
                                        {
                                            anchor: `"Vicodin."`,
                                            wiki: `Hydrocodone/paracetamol`
                                        },
                                        `That night proved them very wrong.`
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
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `To be honest, I never got past the first fifty pages of`,
                        {
                            isItalic: true,
                            lyric: `Finnegans Wake.`
                        },
                        `Still, I took note of how Joyce used literary puns to create multiple layers of meaning within a dreamlike setting. It seemed like the perfect device for conveying a Robitussin trip, in which worlds of meaning build up and then fade within the briefest of moments, and everything feels at once epic and unreal.`
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
                            cards: [
                                {
                                    description: [
                                        `Flashback to earlier that night. We have arrived at a`,
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
                                        `in`,
                                        {
                                            anchor: `Norse mythology`,
                                            wiki: `Norse_mythology`
                                        },
                                        `were noble maidens who escorted fallen warriors from the battlefield.`
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
                            cards: [
                                {
                                    description: [
                                        `The Valkyries would bring their dead heroes to`,
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
                            card: {
                                description: [
                                    `Not all bottles of Robitussin will get you high. The ones to avoid are those that contain`,
                                    {
                                        anchor: `guaifenesin,`,
                                        wiki: `Guaifenesin`
                                    },
                                    `which reduces congestion. So we "upraise" our "quaffs" to "appraise" them, looking specifically for the medicinal property of keeping "coughs suppressed."`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `this`,
                        {
                            anchor: `boundless Kalevalley ends.`,
                            cards: [
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `"Kalevala"`,
                                            wiki: `Kalevala`
                                        },
                                        `is the national epic poem of`,
                                        {
                                            anchor: `Finland.`,
                                            wiki: `Finland`
                                        }
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: `The San Fernando Valley, which I hated in my youth, is the quintessential "Cali valley." The days before I could leave were painfully endless. On this summer break back home, however, my newfound independence combines with the magic of Robitussin to render escape instantaneous.`,
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
                            cards: [
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `Finnish`,
                                            wiki: `Finnish_language`
                                        },
                                        `language belongs to the`,
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
                                    description: `We are literally "high men," and since the others are trying Robitussin for the first time, it also "laps our hymen."`,
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
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 34,
                    lyric: [
                        {
                            anchor: `Makeyars mygrate,`,
                            properNoun: true,
                            cards: [
                                {
                                    description: `Cut back to the present scene. Howie and Tomer promise to "make yours my grate," as they share their knowledge of the hidden grates that lead down to the steam tunnels.`,
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
                                        `are a Finno-Ugric people who "migrated" from the`,
                                        {
                                            anchor: `Ural Mountains`,
                                            wiki: `Ural_Mountains`
                                        },
                                        `and established the state of`,
                                        {
                                            anchor: `Hungary.`,
                                            wiki: `Hungary`
                                        }
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
                            cards: [
                                {
                                    description: [
                                        `Back in the day, the Robitussin we took also contained`,
                                        {
                                            anchor: `"pseudoephedrine,"`,
                                            wiki: `Pseudoephedrine`
                                        },
                                        `a nasal decongestant. Because it is the main ingredient used to make`,
                                        {
                                            anchor: `crystal meth,`,
                                            wiki: `Methamphetamine`
                                        },
                                        `however, pseudoephedrine is no longer available over the counter.`
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
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        {
                            anchor: `The Police's`,
                            wiki: `The_Police`
                        },
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Ghost in the Machine`,
                                wiki: `Ghost_in_the_Machine_(album)`
                            }
                        },
                        `was my soundtrack of choice for a Robitussin trip, so I tried to recreate its ambience. Taking a cue from the song`,
                        {
                            anchor: `"Secret Journey,"`,
                            wiki: `Secret_Journey_(song)`
                        },
                        `for example, I left the drum kick off the downbeat in the prechorus, which does wonders for letting the other instruments breathe before they get submerged again in the chorus.`
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
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 41,
                    lyric: [
                        `Then`,
                        {
                            anchor: `down the steppes`,
                            cards: [
                                {
                                    description: [
                                        `As we rush down the earthen "steps" leading into the steam tunnels, I imagine us as 13th-century Mongol horsemen sweeping down from the Eurasian`,
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
                            cards: [
                                {
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
                                },
                                {
                                    description: `I had just taken Robitussion a day or two ago, and each trip really destroys you for a good while, so earlier tonight I was hesitant to take it again so soon. But now the "drink is gone" and I've had "too much in."`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `has`,
                        {
                            anchor: `slain the teeto-Tatars!`,
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
                                        `With the familiar sensation of Robitussin having kicked in, I am no longer wavering like a playground`,
                                        {
                                            anchor: `"teeter-totter,"`,
                                            wiki: `Seesaw`
                                        },
                                        `and any lingering protest from my inner`,
                                        {
                                            anchor: `"teetotaler"`,
                                            wiki: `Teetotalism`
                                        },
                                        `has been killed off.`
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
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `"Tamerlane"`,
                                            wiki: `Timur`
                                        },
                                        `continued the Turko-Mongol expansion into`,
                                        {
                                            anchor: `Central Asia.`,
                                            wiki: `Central_Asia`
                                        },
                                        `Having not been born from the seed of Genghis Khan, he laid out the case for his legitimacy by tracing lineage to a common ancestor.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: `Tomer jokingly drops crumbs of dirt as if laying a trail of seeds, while I observe that we are laying the seed that will sprout into nations of our descendants in the lands we conquer.`,
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
                            cards: [
                                {
                                    description: `Oblivious to the lingering stiffness of his limbs, Howie walks as if he has "lead feet."`,
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
                                        `Muslim descendants of Tamerlane, must have regaled themselves with tales of "how he" led the feat that precipitated their`,
                                        {
                                            anchor: `conquest of South Asia`,
                                            wiki: `Muslim_conquests_in_the_Indian_subcontinent`
                                        },
                                        `and its`,
                                        {
                                            anchor: `Hindu`,
                                            wiki: `Hinduism`
                                        },
                                        `populations.`
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
                            card: {
                                description: [
                                    `In Hinduism, an`,
                                    {
                                        anchor: `avatar`,
                                        wiki: `Avatar`
                                    },
                                    `is the earthbound incarnation of a deity. Some avatars are speculated to have been historical figures whose exploits predate written tradition.`
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
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 56,
                    lyric: [
                        {
                            anchor: `Indus-trail sewerce,`,
                            properNoun: true,
                            card: {
                                description: [
                                    `As we wind through "industrial sewers" pretending to be Mughal invaders, I explain the problem with the`,
                                    {
                                        anchor: `Aryan Invasion`,
                                        wiki: `Indo-Aryan_migration`
                                    },
                                    `theory. Proposed by 19th-century Western scholars, the theory holds that`,
                                    {
                                        anchor: `Indian`,
                                        wiki: `India`
                                    },
                                    `civilisation was brought by invaders from the north, who were the "Indus trail source."`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `questurns Indo Hairapins:`,
                            card: {
                                description: [
                                    `Our "quest turns into hairpins" as Howie and Tomer guide us through labyrinthine passageways. All the while, I blather on about "questions" surrounding the`,
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
                            card: {
                                description: [
                                    `In the`,
                                    {
                                        anchor: `Iranian`,
                                        wiki: `Iran`
                                    },
                                    `language of`,
                                    {
                                        anchor: `"Farsi,"`,
                                        wiki: `Persian_language`
                                    },
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `"ahura"`,
                                            wiki: `Ahura`
                                        }
                                    },
                                    `is the word for a deity. But in the`,
                                    {
                                        anchor: `Vedic`,
                                        wiki: `Vedas`
                                    },
                                    `texts of ancient India,`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `asura`,
                                            wiki: `Asura`
                                        }
                                    },
                                    `refers to a demon, suggesting that a rift occurred among the`,
                                    {
                                        anchor: `Indo-Iranians`,
                                        wiki: `Indo-Iranians`
                                    },
                                    `based on religious differences. And because the Vedas precede the Persian`,
                                    {
                                        anchor: `Avesta,`,
                                        wiki: `Avesta`
                                    },
                                    `it's likely that the apostates left the Indian subcontinent and migrated westward to the Iranian basin, rather than the other way around.`
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
                                    `in the Avesta refers to a demon. Thus, whether one "foresees a hero" or "senses great devastation" as the "deva's day shone" depends on which side of the schism one ended up on.`
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
                            card: {
                                description: [
                                    `In the Vedas,`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `soma`,
                                            wiki: `Soma_(drink)`
                                        }
                                    },
                                    `is a ritual drink prepared from an unknown botanical substance believed by scholars to have psychedelic properties. In the Avesta, it is referred to as`,
                                    {
                                        isItalic: true,
                                        lyric: `haoma.`
                                    }
                                ]
                            }
                        },
                        {
                            anchor: `our-youn' invedas`,
                            card: {
                                description: [
                                    `Although the`,
                                    {
                                        anchor: `"Aryans"`,
                                        wiki: `Aryan`
                                    },
                                    `mentioned "in the Vedas" were a noble class based on religious distinction, 19th-century Western scholars postulated they were a light-skinned race that had conquered and civilized the local populations. While this theory has been debunked, the origin of the Indo-European people is still a matter of wide debate. And so "to sum up," I must put this "unsolved query" to rest, before the others lose their minds.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `unsolft quarry rest…`,
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
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Sita introduced me to`,
                        {
                            anchor: `Bollywood`,
                            wiki: `Bollywood`
                        },
                        `movies, which are a gold mine of musical sounds and ideas. The chords for the refrain and verse in this song were shamelessly borrowed from the title track of one of our favorites,`,
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
                    time: 70,
                    lyric: [
                        {
                            anchor: `Ourevian battles spent,`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `Spent from the "Arabian battles" that ended with their`,
                                        {
                                            anchor: `conquest by the Arabs,`,
                                            wiki: `Muslim_conquest_of_Persia`
                                        },
                                        `the Persians were then`,
                                        {
                                            anchor: `subjugated by the Mongols,`,
                                            wiki: `Mongol_conquest_of_Khwarezmia`
                                        },
                                        `the next enemy at their doorstep.`
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
                            card: {
                                description: [
                                    `The Mongols would slaughter the men and seize the women of the lands they conquered. This fate was no doubt met by the`,
                                    {
                                        anchor: `Uighurs,`,
                                        wiki: `Uyghurs`
                                    },
                                    `a Turkic people the Mongols encountered in their early campaigns. And so through "a duct, we egress," or exit, the steam tunnels, but not before I feign to "abduct a Uighuress."`
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
                            card: {
                                description: `"Our melee tapers the discourse." Having scavenged materials to make swords and shields, we could only brandish them with playful menace within the narrow corridors of the steam tunnels. Now out in the open, we stop chattering and start battling as we make our way back to the car.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `the dusc-horse yet…?`,
                            card: {
                                description: [
                                    `"Are Malay tapirs the dusk horse yet?" Through conquest and migration, exotic new species were discovered. Native to the Malay peninsula, the`,
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
                                    `or "dawn horse." This "dusk horse," then, would be encountered at the end of history, the brink of which so many before us had believed to have been reached.`
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
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `"Angkor Wat,"`,
                                            wiki: `Angkor_Wat`
                                        },
                                        `or "Temple City," is a 12th-century Hindu temple built by the`,
                                        {
                                            anchor: `"Khmer" Empire`,
                                            wiki: `Khmer_Empire`
                                        },
                                        `in what is now present-day`,
                                        {
                                            anchor: `Cambodia.`,
                                            wiki: `Cambodia`
                                        }
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
                            card: {
                                description: [
                                    `Our next plan of attack is to visit the grave of Howie and Tomer's high school buddy Adam. And so, rested and energized, we renew our`,
                                    {
                                        anchor: `"scimitar`,
                                        wiki: `Scimitar`
                                    },
                                    `offense" with a plan to drive through the "cemetery fence."`
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
                formType: PRECHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 86,
                    lyric: [
                        {
                            anchor: `Pour sod, fourfeit tundr's`,
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
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `Americas`,
                                        wiki: `Americas`
                                    },
                                    `were first settled by northeast Asian populations who gladly "forfeited the tundra's`,
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
                            card: {
                                description: [
                                    `"Forced" to leave their Asian homelands due to scarcity of resources, these groups are now known in Canada as the`,
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
                                        `to his left.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: `Wishing to respect the dead, we've left "our auras" as history's "heroes" behind in the car.`,
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
                            card: {
                                description: `We sigh in relief to have quickly spotted "Adam's" grave from among a sea of identical headstones, just as the indigenous Americans, upon discovering a more bountiful land, perished their fears of an encroaching "autumn."`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
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
                        `I treated every one of my Robitussin trips as a time to explore metaphysical truths. But since I usually tripped solo, I would also occupy myself by playing video games on my`,
                        {
                            anchor: `Super Nintendo.`,
                            wiki: `Super_Nintendo_Entertainment_System`
                        },
                        `So for a while, every 16-bit arcade sound that I heard seemed to hide a profound spiritual message that my sober ears just couldn't suss out.`
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
                            card: {
                                description: [
                                    `As I stand before Adam's headstone under the predawn sky, a wave of clarity washes over me. With my sense of purpose renewed, I vow to finish`,
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
                formType: BRIDGE,
                subVerseType: RESPONSE
            },
            mainVerses: [
                {
                    time: 124,
                    lyric: [
                        `The`,
                        {
                            anchor: `mistodawn,`,
                            card: {
                                description: `The "mist of dawn" breaks, and we drive back to Howie's place. My newfound clarity proves short-lived as I lean back and shut my eyes to gaze at constellations.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `ha'nt'd by sober-trooth tiedgirl`,
                            card: {
                                description: [
                                    `Encountering the vision of a`,
                                    {
                                        anchor: `"mastodon"`,
                                        wiki: `Mastodon`
                                    },
                                    `being "hunted by a`,
                                    {
                                        anchor: `saber-toothed tiger,"`,
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
            ],
            subVerse: [
                {
                    time: 128,
                    lyric: {
                        isItalic: true,
                        lyric: {
                            anchor: `sunk in tarpid lies!`,
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
                                    description: `My mastodon lies sunk in a "tar pit," just as I've sunk too far in all my "torpid lies" to Sita explaining why I can't spend more nights with her.`,
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
            ]
        },
        {
            unitMap: {
                formType: BRIDGE,
                subVerseType: RESPONSE,
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
                                    description: [
                                        `As Robitussin is a`,
                                        {
                                            anchor: `dissociative drug,`,
                                            wiki: `Dissociative`
                                        },
                                        `I start to detach from myself. In doing so, I catch a glimpse of how superficial my aspirations are, and how "hollow" the local "scene" is in which I desire recognition.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `broughtour ancister`,
                            card: {
                                description: [
                                    `In the epic vision playing out in my mind, our little group is now an Inuit tribe, and the mastodon has become a spirit animal. We have "brought our ancestral`,
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
                            card: {
                                description: `Having now achieved a full out-of-body experience, I gaze down upon my drugged-out self. Set against the familiar backdrop of Los Angeles, this degrading sight reminds me that in having scuttled off to the Bay Area, I am shirking my obligation to care for my autistic brother. My sister, on the other hand, lives nearby. Guilt-ridden, I sarcastically note that "brother and sister taught him right."`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                }
            ],
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
                                card: {
                                    description: [
                                        `Recoiling from the sight of myself in a "low-key and fried" state, I see a constellation of my brother dressed as`,
                                        {
                                            anchor: `"Loki,"`,
                                            wiki: `Loki`
                                        },
                                        `the Norse trickster god, next to my sister as`,
                                        {
                                            anchor: `"Freyja,"`,
                                            wiki: `Freyja`
                                        },
                                        `the most renowned Norse goddess.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            }
                        ]
                    }
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
                            anchor: `Noworse and Nunavutter`,
                            properNoun: true,
                            card: {
                                description: [
                                    `Our Inuit tribe has now ventured all the way to`,
                                    {
                                        anchor: `Nunavut,`,
                                        wiki: `Nunavut`
                                    },
                                    `the northernmost territory of Canada. Yet with the reappearance of the Norse in my thoughts, I realize that our bounds are not so limitless, as even our imaginations must eventually repeat. There is no new ground left to cover, both in our fantasy epics and in our everyday lives. And so, just as the "Norse" are about to encounter the "Nunavutters," we end the night as we had begun it, "no worse and none the better."`
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
                                            `who established Norse settlements in`,
                                            {
                                                anchor: `Greenland.`,
                                                wiki: `Greenland`
                                            }
                                        ]
                                    },
                                    {
                                        description: [
                                            `The arrival of`,
                                            {
                                                anchor: `Europeans into the Americas,`,
                                                wiki: `European_colonization_of_the_Americas`
                                            },
                                            `which precipitated their rise to global power, also brought disease and ruin to the indigenous populations. Similarly, while the day begins for many, it is over for us, and we "leave as the red sun" arrives.`
                                        ],
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
                                    description: `With my eyes still closed, my thoughts grow further disjointed. Injecting myself into world history, I see all of time collapsing into a singularity, such that everyone who has ever lived is at once dead and not dead, including me. Or is this just an endless series of silent acts that we've all agreed to perform in? "Mummeries," if you will?`,
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
                            card: {
                                description: `At the peak of my dissociation, I mine through "memories," unable to separate the collective memories of the world from those that are mine alone.`,
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
                    time: 154,
                    lyric: [
                        {
                            anchor: `Pullar switch,`,
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
                                    description: `Back at Howie's place, I'm crashed on a couch in his attic. There is an old black-and-white television in front of me, and I "pull the switch" to turn it on.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `in-som'umiak`,
                            card: {
                                description: [
                                    `Sensing disaster afoot, our brave tribe flees to safety "in some`,
                                    {
                                        anchor: `umiak,"`,
                                        wiki: `Umiak`
                                    },
                                    `an Inuit boat made from whalebone and sealskin, as we skim through icy channels wreaked by a "snowy blitz."`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `skims through`,
                        {
                            anchor: `channels snow blitz'd…`,
                            card: {
                                description: `Being an "insomniac," I skim through channels that are "snow-blitzed" due to the television's poor reception.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
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
                        `For a song about recreational drug use, I naturally sought counsel from the Beatles during their`,
                        {
                            anchor: `psychedelic`,
                            wiki: `Psychedelic_rock`
                        },
                        `period.`,
                        {
                            anchor: `"Tomorrow Never Knows"`,
                            wiki: `Tomorrow_Never_Knows`
                        },
                        `makes use of a tape loop that imitates a`,
                        {
                            anchor: `seagull's`,
                            wiki: `Gull`
                        },
                        `cry, which I tried to recreate by pinching off the airstream blown through the window of a recorder. The result wasn't what I had hoped for, but kept in the background, it contributes nicely to the overall atmosphere.`
                    ],
                    dotKeys: {
                        [SONGWRITING]: true
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
                    time: 161,
                    lyric: [
                        `Then pounds`,
                        {
                            anchor: `arrhythmetic heart,`,
                            card: {
                                description: [
                                    {
                                        anchor: `Arrhythmia,`,
                                        wiki: `Cardiac_arrhythmia`
                                    },
                                    `or an irregular heartbeat, is one downside of taking Robitussin. As its psychedelic effects wear off, I grow paranoid and perform "arithmetic" in my head, hoping that my pulse becomes more stable with each passing minute.`
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
                            cards: [
                                {
                                    description: [
                                        `In the historical narrative still playing in my head, the`,
                                        {
                                            anchor: `"English"`,
                                            wiki: `English_people`
                                        },
                                        `have now arrived to despoil the New World. The white`,
                                        {
                                            anchor: `ruffs`,
                                            wiki: `Ruff_(clothing)`
                                        },
                                        `around their necks resemble the neck fringes seen on`,
                                        {
                                            anchor: `vultures,`,
                                            wiki: `Vulture`
                                        },
                                        `or "buzzards," as they are colloquially known. Meanwhile, Howie is downstairs in "anguish" over still being "buzzed," as he guzzles cup after cup of water to quench his parched innards.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: `Howie had opted for the large bottle of Robitussin, thinking the small one I had recommended wouldn't be enough.`,
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                }
                            ]
                        },
                        `come unsated, find`,
                        {
                            anchor: `Rumspring`,
                            properNoun: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Rumspringa`,
                                        wiki: `Rumspringa`
                                    },
                                    `is a period of adolescence during which`,
                                    {
                                        anchor: `Amish`,
                                        wiki: `Amish`
                                    },
                                    `teenagers are permitted to explore the outside world, such that their decision to remain in the Amish community is not rooted in ignorance. Though it means "running around" in`,
                                    {
                                        anchor: `Pennsylvania Dutch,`,
                                        wiki: `Pennsylvania_Dutch`
                                    },
                                    `I liked the image of a natural spring of rum. In any case, the spring of our youth, in both the literal and metaphorical sense, is running dry.`
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
                            card: {
                                description: [
                                    {
                                        anchor: `Deseret`,
                                        wiki: `Deseret_alphabet`
                                    },
                                    `is an alphabet developed by the early`,
                                    {
                                        anchor: `Mormons.`,
                                        wiki: `Mormons`
                                    },
                                    `As it had once filled their mouths, a "desert" now fills ours.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `black Letter-Day`,
                            cards: [
                                {
                                    description: [
                                        `Holidays on a calendar are traditionally`,
                                        {
                                            anchor: `marked in red.`,
                                            wiki: `Red_letter_day`
                                        },
                                        `By contrast, the "black-letter day sensed ahead" will be just another ordinary day.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `Sensed ahead…`,
                            cards: [
                                {
                                    description: [
                                        `"Black Latter-Day Saints to head." The Mormon Church, also known as the`,
                                        {
                                            anchor: `Latter-Day Saints,`,
                                            wiki: `The_Church_of_Jesus_Christ_of_Latter-day_Saints`
                                        },
                                        `originally did not allow its`,
                                        {
                                            anchor: `black members`,
                                            wiki: `Black_people_and_Mormonism`
                                        },
                                        `to attain priesthood. This policy was reversed in 1978.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `"Rejoyce!" bellow the`,
                            cards: [
                                {
                                    description: [
                                        `"'Rejoice!' bellow the reverends." Stuck with nothing else to watch but early-morning`,
                                        {
                                            anchor: `televangelists,`,
                                            wiki: `Televangelism`
                                        },
                                        `I observe that every religion's early spirit eventually degrades into orthodoxy and routine, as does every person's youthful spirit in later years. But in the meantime, we're just halfway through summer, and more nights of Robitussin await…`
                                    ],
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
                                        [PUN]: true,
                                        [SONGWRITING]: true
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
