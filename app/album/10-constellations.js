/**
 * TODO: References, decide on where to put quotations marks. Balance between
 * not being clear and being too obvious.
 */

 import { OVERLAP,
          VERSES,
          PRECHORUS,
          CHORUS,
          BRIDGE,
          RESPONSE,
          BACKSTORY,
          INSTRUMENTAL,
          NARRATIVE,
          OBSERVATION,
          PUN,
          REFERENCE,
          SONGWRITING,
          DOT_STANZA_CONSTANT } from '../helpers/constants'

module.exports = {
    scenes: [
        {
            verseIndex: 0,
            description: `The gang is at Walgreens, picking out cough syrup.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'side, holding body and gesturing its smallness'
                },
                ana: {
                    todo: true,
                    description: 'side angle, reading bottle intently'
                },
                howie: {
                    todo: true,
                    description: 'side angle, holding large bottle'
                },
                tomer: {
                    todo: true,
                    description: 'side angle, feigning superiority'
                }
            }
        },
        {
            verseIndex: 9,
            description: `The gang is wandering through the steam tunnels. Bennett is blathering, Howie is half paying attention. Tomer and Ana are play fighting.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'side, blathering'
                },
                ana: {
                    todo: true,
                    description: 'side angle, play fighting'
                },
                howie: {
                    todo: true,
                    description: 'side angle, zoned out'
                },
                tomer: {
                    todo: true,
                    description: 'side angle, play fighting'
                }
            }
        },
        {
            verseIndex: 19,
            description: `The gang is at the cemetery, standing over Adam's grave. Tomer is kneeling and pouring a bottle of water over the gravestone. Bennett is. Howie and Ana `,
            actors: {
                bennett: {
                    todo: true,
                    description: 'front, looking upwards, inspired'
                },
                ana: {
                    todo: true,
                    description: 'side angle, shivering, feeling comforted'
                },
                howie: {
                    todo: true,
                    description: 'side angle, arm around Ana'
                },
                tomer: {
                    todo: true,
                    description: 'side angle, squatting, pouring water on grave'
                }
            }
        },
        {
            verseIndex: 26,
            description: `The gang is driving in a car. Bennett is sitting in the back with his eyes closed. He pictures himself and Sita as a mastodon and a sabre-tooth tiger, and his brother and sister as Loki and Freyja.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'side angle, sleeping in car'
                },
                ana: {
                    todo: true,
                    description: 'side, sleeping in car'
                },
                howie: {
                    todo: true,
                    description: 'driving car, alert, wigging out'
                },
                tomer: {
                    todo: true,
                    description: 'back angle, sleeping in car'
                }
            }
        },
        {
            verseIndex: 34,
            description: `Bennett is in the attic, huddled under a blanket on a couch, lit up by an old television facing away from the audience. Howie is downstairs, in anguish, clutching at his head.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'lying on couch, watching TV, alert'
                },
                howie: {
                    todo: true,
                    description: 'downstairs, in agony'
                }
            }
        }
    ],
    tip: {
        description: 'placeholder tip'
    },
    totalTime: 180,
    overview: `One night, I went with my bassist Ana and her friends to explore the steam tunnels under UCLA while high on Robitussin. I got us to pretend we were Mongols and Vikings and other waves of human migration throughout history, though in hindsight, they were probably just humouring me. I wound up doing a lot of Robitussin that summer. It took me a while to regain my grip on reality.`,
    title: {
        anchor: `Constellations!`,
        keepEndCharacter: true,
        annotation: {
            description: [
                `The best part about Robitussin is the`,
                {
                    anchor: `closed-eye hallucinations,`,
                    wiki: `Closed-eye_hallucination`
                },
                `which are vivid images that seem to be projected onto the backdrop of one's eyelids. If they ever get intense enough to become frightening, one simply opens one's eyes, and they instantly go away. At the time, I called them "constellations."`
            ],
            dotKeys: {
                [OBSERVATION]: true
            }
        }
    },
    lyrics: [
        [
            {
                time: 0,
                centre: {
                    italic: `(refrain)`
                }
            },
            {
                unitMap: true,
                stanzaType: INSTRUMENTAL
            }
        ],
        [
            {
                time: 4,
                lyric: [
                    {
                        anchor: `reverends, paused`,
                        annotation: [
                            {
                                description: [
                                    {
                                        italic: {
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
                                    `I was the experienced Robitussin user of the group, having read of its narcotic effects in Jim Carroll's`,
                                    {
                                        italic: {
                                            anchor: `The Basketball Diaries`,
                                            wiki: `The_Basketball_Diaries`
                                        }
                                    },
                                    `earlier that summer. So the others follow my lead in treating it as a mystical journey, and we tread with "reverence" through the UCLA campus.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        ]
                    },
                    {
                        anchor: `stiff in tandem.`,
                        annotation: {
                            description: `Robitussin in its early stages will make your limbs feel stiff and mechanical. Having taken it an hour prior, we enjoy these effects and deliberately exaggerate them.`,
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
                time: 7,
                lyric: [
                    {
                        anchor: `Heavin' some, Ana`,
                        annotation: {
                            description: `"Heaving some, Ana whispers a low sigh." When you first down a whole bottle of Robitussin, you may feel like retching. Within a moment, though, it feels like your lungs have shrivelled away, and you're peacefully breathing through gills underwater.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    },
                    {
                        anchor: `whispures a low sigh, bein'…`,
                        annotation: {
                            description: [
                                `"Heaven's manna was pure psilocybin." At the time, I was intrigued by the role played by psychedelic drugs that history textbooks understandably failed to mention. One theory is that`,
                                {
                                    anchor: `manna`,
                                    wiki: `Manna`
                                },
                                `from heaven, based on its description in the Bible, was a`,
                                {
                                    anchor: `psilocybin mushroom.`,
                                    wiki: `Psilocybin_mushroom`
                                }
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
                        annotation: {
                            description: [
                                `The Israelites, "being of the exempt," were spared the`,
                                {
                                    anchor: `plagues`,
                                    wiki: `Plagues_of_Egypt`
                                },
                                `that God visited upon Egypt, just as we are now immune to flu symptoms. "DXM" is the standard abbreviation for`,
                                {
                                    anchor: `dextromethorphan,`,
                                    wiki: `Dextromethorphan`
                                },
                                `the cough suppressant found in Robitussin.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    {
                        anchor: `exit us`,
                        annotation: {
                            description: [
                                `The Book of`,
                                {
                                    anchor: `"Exodus"`,
                                    wiki: `Book_of_Exodus`
                                },
                                `recounts how the Israelites discovered manna during their trek out of Egypt.`
                            ],
                            dotKeys: {
                                [PUN]: true
                            }
                        }
                    },
                    `the`,
                    {
                        anchor: `Viking den…`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `Vikings`,
                                    wiki: `Vikings`
                                },
                                `were Norse seafarers who expanded outward from Scandinavia beginning in the 8th century. Also, Ana's friends Howie and Tomer, being seasoned drug users but never having taken Robitussin before, assume its effects are weaker than those of prescribed painkillers such as`,
                                {
                                    anchor: `"Vicodin."`,
                                    wiki: `Hydrocodone/paracetamol`
                                },
                                `The night will prove them wrong.`
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
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: [
                            `Though I never got past the first fifty pages of`,
                            {
                                italic: {
                                    anchor: `Finnegans Wake,`,
                                    wiki: `Finnegans_Wake`
                                }
                            },
                            `I was impressed by Joyce's use of literary puns to create multiple layers of meaning within a dreamlike setting. It seemed like the perfect device for conveying a Robitussin trip, in which time seems to stand still, and everything feels at once epic and unreal.`
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: VERSES
            }
        ],
        [
            {
                time: 19,
                lyric: [
                    {
                        anchor: `Walkyriens:`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `Backtrack to earlier that night. We buy the Robitussin from a`,
                                {
                                    anchor: `Walgreens`,
                                    wiki: `Walgreens`
                                },
                                `pharmacy. Also, the`,
                                {
                                    anchor: `Valkyries`,
                                    wiki: `Valkyrie`
                                },
                                `in Norse mythology were noble maidens who escorted fallen warriors from the battlefield.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `to`,
                    {
                        // NOTE: I changed from 'Walhall.'
                        anchor: `Wal-hall o'`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `The Valkyries would bring the dead heroes to`,
                                {
                                    anchor: `Valhalla,`,
                                    wiki: `Valhalla`
                                },
                                `a majestic hall ruled by the god Odin. Also, the Walgreens aisles are "Wal-halls," as they are stocked with generic versions of brand-name drugs, each with the prefix "Wal" in its name: Wal-Dryl, Wal-Phed… and so forth.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    {
                        anchor: `mead-Tussin!`,
                        annotation: {
                            description: [
                                {
                                    anchor: `Mead`,
                                    wiki: `Mead`
                                },
                                `was the drink of the Norse gods, and we look for Wal-Tussin as our "medicine" of choice.`
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
                        annotation: {
                            description: `Not all bottles of Robitussin will get you high. The ones to avoid are those that only contain guaifenesin, which reduces congestion. So we "upraise" our "quaffs" to "appraise" them for the medicinal property that keeps "coughs suppressed."`,
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
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `Kalevala`,
                                    wiki: `Kalevala`
                                },
                                `is the national epic poem of Finland. Also, the San Fernando Valley, which I hated as a teenager, is`,
                                {
                                    emphasis: `the`
                                },
                                `"Cali valley." The days before I could leave were painfully endless. On this summer break back home, however, my newfound independence, combined with the magic of Robitussin, renders escape instantaneous.`
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
                time: 26,
                lyric: [
                    `We ride as`,
                    {
                        anchor: `Finnugreec tongue`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `The Finnish language belongs in the`,
                                {
                                    anchor: `"Finno-Ugric"`,
                                    wiki: `Finno-Ugric_languages`
                                },
                                `family. Also, the licorice taste of Robitussin, which lingers on our tongues, is reminiscent of the spice`,
                                {
                                    anchor: `"fenugreek."`,
                                    wiki: `Fenugreek`
                                }
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    },
                    {
                        anchor: `Lapps are highmen.`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `Lapps`,
                                    wiki: `Sami_people`
                                },
                                `are a Finno-Ugric people indigenous to the northern regions of Scandinavia. And of course, we are literally "high men," as the Robitussin "laps our hymen," since the others are doing it for the first time.`
                            ],
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
                unitMap: true,
                stanzaType: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 34,
                lyric: [
                    {
                        anchor: `Makeyars mygrate,`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `Cut back to the present scene. "Make yours my grate." Howie and Tomer are sharing their knowledge of the hidden grate that leads down to the steam tunnels. Also, the`,
                                {
                                    anchor: `"Magyars"`,
                                    wiki: `Hungarians`
                                },
                                `are a Finno-Ugric people who "migrated" from the Ural Mountains and established the state of Hungary.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `from`,
                    {
                        anchor: `among ol'`,
                        annotation: {
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
                        annotation: {
                            description: [
                                `Back in the day, the Robitussin we took contained`,
                                {
                                    anchor: `"pseudoephedrine,"`,
                                    wiki: `Pseudoephedrine`
                                },
                                `a decongestant. Because of its use in the illicit manufacture of methamphetamine, however, this is no longer the case. Also, the entrance to the steam tunnels is hidden "among old, sealed-off drains."`
                            ],
                            dotKeys: {
                                [PUN]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: [
                            `The Police's`,
                            {
                                italic: {
                                    anchor: `Ghost in the Machine`,
                                    wiki: `Ghost_in_the_Machine_(album)`
                                }
                            },
                            `was my soundtrack of choice for a Robitussin trip, so I tried to recreate its ambience. The drums here are my amateurish imitation of Stewart Copeland's performance in "Secret Journey," in particular the silent kick on the downbeat. Such a simple idea, but it does wonders for letting the music breathe before being submerged again in the chorus.`
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: PRECHORUS
            }
        ],
        [
            {
                time: 41,
                lyric: [
                    `Then`,
                    {
                        anchor: `down the steppes`,
                        annotation: {
                            description: [
                                `As we rush down the earthen steps leading into the steam tunnels, I imagine us as 13th-century Mongol horsemen sweeping down from the Asian`,
                                {
                                    anchor: `steppes`,
                                    wiki: `Steppe`
                                },
                                `to begin their conquests.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            },
                            portal: `down_the_steppes`
                        }
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
                        annotation: {
                            description: [
                                {
                                    anchor: `"Genghis Khan,"`,
                                    wiki: `Genghis_Khan`
                                },
                                `who was born "Temujin," founded the Mongol Empire.`
                            ],
                            dotKeys: {
                                [PUN]: true
                            }
                        }
                    },
                    `has`,
                    {
                        anchor: `slain the teeto-Tatars!`,
                        annotation: {
                            description: [
                                `Genghis Khan was able to unite the Mongols by defeating the`,
                                {
                                    anchor: `"Tatars,"`,
                                    wiki: `Tatars`
                                },
                                `a rival tribe. Like a "teeter-totter," I was wavering back and forth on whether to take Robitussin that night, since I'd just taken it a few days prior, and Robitussin really destroys you both mentally and physically. But once the "drink is gone" and I've had "too much in," the familiar sensation kicks in and kills off any lingering protests from my inner "teetotaler."`
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
                time: 49,
                lyric: [
                    {
                        anchor: `Tomer-layin' the seed,`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `"Tamerlane the seed."`,
                                {
                                    anchor: `Tamerlane,`,
                                    wiki: `Timur`
                                },
                                `a descendant of Genghis Khan, continued the Turko-Mongol expansion into Central Asia. Also, as Tomer jokingly drops crumbs as if to leave a trail, I observe that it's like he's planting seeds that will sprout into nations.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    {
                        anchor: `Howie led the feat of avatars…`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `Howie is walking as if his feet are made of lead. Also, "how he led the feat of avatars." The`,
                                {
                                    anchor: `Mughals,`,
                                    wiki: `Mughal_Empire`
                                },
                                `Muslim descendants of Tamerlane, conquered the Hindu populations of the Indian subcontinent. In Hinduism, an`,
                                {
                                    anchor: `avatar`,
                                    wiki: `Avatar`
                                },
                                `is a deity's earthbound incarnation, and some avatars are speculated to be historical figures whose exploits predate written tradition.`
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
                unitMap: true,
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 52,
                centre: {
                    italic: `(refrain)`
                }
            },
            {
                unitMap: true,
                stanzaType: INSTRUMENTAL
            }
        ],
        [
            {
                time: 56,
                lyric: [
                    {
                        anchor: `Indus-trail sewerce,`,
                        properNoun: true,
                        annotation: {
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
                        annotation: {
                            description: [
                                `Our "quest turns into hairpins." As Howie and Tomer guide us through twisted, narrow corridors, I blather on about "questions" surrounding the`,
                                {
                                    anchor: `"Indo-Harappan" Civilisation,`,
                                    wiki: `Indus_Valley_Civilisation`
                                },
                                `named after the excavations in Harappa that led to its modern discovery, that may be answered by examining the evolution of the`,
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
                        annotation: {
                            description: [
                                `In the Iranian language of Farsi,`,
                                {
                                    italic: {
                                        anchor: `ahura`,
                                        wiki: `Ahura`
                                    }
                                },
                                `is the word for an Avestan deity. But in the Vedic texts of ancient India,`,
                                {
                                    italic: {
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
                                `it's likely that the apostates left the Indian subcontinent and moved westward to the Iranian basin, rather than the reverse.`
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
                        annotation: {
                            description: [
                                `Moreover, in Sanskrit, the ancient Indian language,`,
                                {
                                    italic: {
                                        anchor: `deva`,
                                        wiki: `Deva_(Hinduism)`
                                    }
                                },
                                `is the word for a Vedic deity, while`,
                                {
                                    italic: {
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
                        annotation: {
                            description: [
                                `In the Vedas,`,
                                {
                                    italic: {
                                        anchor: `soma`,
                                        wiki: `Botanical_identity_of_soma%E2%80%93haoma`
                                    }
                                },
                                `is a ritual drink prepared from an unidentified botanical substance believed by scholars to have held psychedelic properties. In the Avesta, it is referred to as`,
                                {
                                    italic: `haoma.`
                                }
                            ],
                            dotKeys: {
                                [PUN]: true
                            }
                        }
                    },
                    {
                        anchor: `our-youn' invedas`,
                        annotation: {
                            description: [
                                `Although the`,
                                {
                                    anchor: `"Aryans"`,
                                    wiki: `Aryan`
                                },
                                `spoken of "in the Vedas" and the Avesta were a noble class based on religious distinction, some 19th-century Western scholars postulated that they were a blonde, light-skinned race who had conquered and civilised the local population. While this theory has been debunked, the origin of the Indo-European people is still a matter of wide debate. And so "to sum up," I must put this "unsolved query" to rest, before the others lose their minds.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    {
                        anchor: `unsolft quarry rest…`,
                        annotation: {
                            description: `"Our young invaders on soft quarry rest." We come to a clearing where dirt from the ground has been pushed against the walls and shaped into makeshift benches.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: [
                            `Sita introduced me to`,
                            {
                                anchor: `Bollywood`,
                                wiki: `Bollywood`
                            },
                            `movies, which are a another gold mine of musical sounds and ideas. The chords here were shamelessly borrowed from the title track of our favourite,`,
                            {
                                italic: {
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
                stanzaType: VERSES
            }
        ],
        [
            {
                time: 70,
                lyric: [
                    {
                        anchor: `Ourevian battles spent,`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `"Arabian battles." Centuries after the`,
                                {
                                    anchor: `Arabs`,
                                    wiki: `Arabs`
                                },
                                `rapidly conquered Persia and the Middle East, the Mongols were the new enemy at the doorstep. Also, Robitussin requires you to stay constantly hydrated, and "our`,
                                {
                                    anchor: `Evian`,
                                    wiki: `Evian`
                                },
                                `bottles" that we brought with us into the steam tunnels are now empty.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    {
                        anchor: `a'duct Uighuress.`,
                        annotation: {
                            description: [
                                `"Abduct Uighuress." The Mongols would slaughter the men and seize the women of the populations they conquered. This fate was no doubt met by the`,
                                {
                                    anchor: `Uighurs,`,
                                    wiki: `Uyghurs`
                                },
                                `a Turkic people, whom the Mongols encountered in their early campaigns. Also, through "a duct, we egress," or exit, the steam tunnels.`
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
                        annotation: {
                            description: [
                                `"Are Malay tapirs the dusk horse yet?" Through conquests and migrations, exotic new species were discovered. Native to the Malay peninsula, the`,
                                {
                                    anchor: `Malayan tapir`,
                                    wiki: `Malayan_tapir`
                                },
                                `is distantly related to the horse and bears a similarity to the horse's prehistoric ancestor`,
                                {
                                    italic: {
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
                    },
                    {
                        anchor: `the dusc-horse yet…?`,
                        annotation: {
                            description: `"Our melee tapers the discourse." Wielding scavenged materials as if they are swords and shields, the open air allows us to stop chattering and start play-fighting as we make our way back to the car.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                ]
            },
            {
                time: 79,
                lyric: [
                    `From the`,
                    {
                        anchor: `Khlmair city Ingcar Wet,`,
                        properNoun: true,
                        annotation: {
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
                                `in what is now present-day Cambodia. Also, taking in the "calm air," we are "sitting in car wet," as we guzzle the remaining Evian bottles that Howie's dad had bought in bulk.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `to war:`,
                    {
                        anchor: `scimitary of'fence!`,
                        annotation: {
                            description: [
                                `The next plan of attack is to visit the grave of Howie and Tomer's high school buddy Adam. And so, rested and energised, we renew our`,
                                {
                                    anchor: `"scimitar`,
                                    wiki: `Scimitar`
                                },
                                `offence" and drive through the "cemetery fence."`
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
                unitMap: true,
                stanzaType: PRECHORUS
            }
        ],
        [
            {
                time: 86,
                lyric: [
                    {
                        anchor: `Pour sod, fourfeit tundr's`,
                        annotation: {
                            description: `We bemoan the "poor sod" who had sod poured on him from "four feet under."`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    {
                        anchor: `Siburial plains…`,
                        properNoun: true,
                        annotation: {
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
                        annotation: {
                            description: `We park the car and head up "a ridge of lawn."`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `trod on by`,
                    {
                        anchor: `forc'd nations sank…`,
                        annotation: {
                            description: [
                                `"A bridge of land trod on by First Nations sank." Indigenous Americans, known in Canada as the`,
                                {
                                    anchor: `"First Nations,"`,
                                    wiki: `First_Nations`
                                },
                                `were "forced" to leave their Asian homelands due to growing scarcity of resources. According to the`,
                                {
                                    anchor: `Beringia theory,`,
                                    wiki: `Beringia`
                                },
                                `they did so by crossing a frozen land bridge connecting the two continents. In time, of course, this bridge melted away.`
                            ],
                            dotKeys: {
                                [PUN]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 101,
                lyric: [
                    `But`,
                    {
                        anchor: `past a cross Bearing Straight,`,
                        annotation: {
                            description: [
                                `We "passed a cross, bearing straight," just as those before us had "passed across the`,
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
                        annotation: {
                            description: [
                                `Other indigenous populations, such as the`,
                                {
                                    anchor: `Inuits`,
                                    wiki: `Inuit`
                                },
                                `of the Arctic regions, may have undertaken their migrations by boat. Such a seafaring ancestor, of course, would have "rowed" with the "auroras," or`,
                                {
                                    anchor: `aurora borealis,`,
                                    wiki: `Aurora`
                                },
                                `to his "left." Also, wishing to be respectful, we've "left" our "hero's auras" behind in the car.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `to`,
                    {
                        anchor: `Audamn's grave.`,
                        properNoun: true,
                        annotation: {
                            description: `We reach "Adam's" grave, just as the indigenous Americans, having discovered more bountiful lands, perished their fears of an encroaching "autumn."`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true,
                                [REFERENCE]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: [
                            `While I treated every past Robitussin trip as a mystical experience, I would also while away the hours by playing video games on my`,
                            {
                                anchor: `NES console.`,
                                wiki: `Nintendo_Entertainment_System`
                            },
                            `8-bit sounds thus took on a spiritual significance for me that others might find in, let's say, a Tibetan`,
                            {
                                anchor: `singing bowl.`,
                                wiki: `Singing_bowl`
                            }
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: PRECHORUS,
                subsequent: true
            }
        ],
        [
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
                        annotation: {
                            description: [
                                `Standing next to Adam's headstone under the predawn sky, I'm overcome with a profound sense of clarity and purpose, and I renew my determination to finish`,
                                {
                                    italic: `Bobtail`
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
            },
            {
                unitMap: true,
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 120,
                centre: {
                    italic: `(refrain)`
                }
            },
            {
                unitMap: true,
                stanzaType: INSTRUMENTAL
            }
        ],
        [
            {
                time: 124,
                lyric: [
                    `The`,
                    {
                        anchor: `mistodawn,`,
                        annotation: {
                            description: `The "mist of dawn" breaks, and we head back to the car. On our way now to Howie's place, my newfound clarity proves short-lived, as I lean back and settle in for some closed-eye hallucinations.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    {
                        anchor: `ha'nt'd by sobre-trooth tiedgirl`,
                        annotation: {
                            description: [
                                `As I indulge in visions of a`,
                                {
                                    anchor: `"mastodon`,
                                    wiki: `Mastodon`
                                },
                                `hunted by`,
                                {
                                    anchor: `sabre-toothed tigers,"`,
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
            },
            {
                unitMap: true,
                subStanza: [
                    {
                        time: 128,
                        lyric: {
                            italic: {
                                anchor: `sunk in tarpid lies!`,
                                annotation: [
                                    {
                                        description: [
                                            {
                                                anchor: `Tar pits`,
                                                wiki: `Tar_pit`
                                            },
                                            `occur when natural asphalt leaks to the surface from underground. Preserving wood and bone, they are rich sources of paleontological discovery. And now, "sunk in tar pit" is where my mastodon "lies," just as I have "sunk in torpid lies."`
                                        ],
                                        dotKeys: {
                                            [NARRATIVE]: true,
                                            [PUN]: true
                                        }
                                    },
                                    {
                                        portal: `sunken_tirpitz`
                                    }
                                ]
                            }
                        }
                    }
                ],
                stanzaType: BRIDGE,
                substanzaType: RESPONSE
            }
        ],
        [
            {
                time: 131,
                lyric: [
                    `In`,
                    {
                        anchor: `Hollowscene`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `Holocene`,
                                    wiki: `Holocene`
                                },
                                `is the current geological epoch that began with the first human settlements. Also, as Robitussin is a dissociative drug, I gradually start to detach from myself. In doing so, I catch a glimpse of how superficial my aspirations are, and how "hollow" the local "scene" is in which I desire recognition.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    {
                        anchor: `broughtour ancister toughtim rite…`,
                        annotation: {
                            description: [
                                `In the epic narrative playing out in my mind, the mastodon becomes a spirit animal, as we have "brought our ancestral`,
                                {
                                    anchor: `totems`,
                                    wiki: `Totem`
                                },
                                `and rites" to our new homelands. Having now achieved a full out-of-body experience, the degraded reality of my drugged-out self comes into view. Guilt-ridden by the high expectations placed on me and my sister to care for our autistic brother, I sarcastically note that "brother and sister taught him right."`
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
                unitMap: true,
                unitClassName: OVERLAP,
                subStanza: [
                    {
                        time: 135,
                        lyric: {
                            italic: [
                                `he sees`,
                                {
                                    anchor: `Lowkey and Freyed!`,
                                    properNoun: true,
                                    annotation: {
                                        description: [
                                            `"He sees low-key and fried," but also, in my brother and sister, I see`,
                                            {
                                                anchor: `"Loki`,
                                                wiki: `Loki`
                                            },
                                            `and`,
                                            {
                                                anchor: `Freyja."`,
                                                wiki: `Freyja`
                                            },
                                            `The former is a Norse trickster god, while the latter is a Norse goddess on equal footing with Odin.`
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
                stanzaType: BRIDGE,
                substanzaType: RESPONSE
            }
        ],
        [
            {
                time: 139,
                lyric: [
                    {
                        // NOTE: I changed from "Nunavutter."
                        anchor: `Noworse and Nunavetter`,
                        properNoun: true,
                        annotation: {
                            description: [
                                `"Norse and Nunavutter collide." We have now travelled as far as`,
                                {
                                    anchor: `Nunavut,`,
                                    wiki: `Nunavut`
                                },
                                `the northernmost territory of Canada inhabited primarily by the Inuit. And yet, with the reappearance of the Norse, we realise that our bounds are not so limitless, as even our imaginations have started to repeat themselves. There is no new ground left to uncover, both in our fantasy epics and in our everyday lives. And so we end the night as we had begun it, "no worse and none the better."`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `collide…`,
                ]
            },
            {
                time: 142,
                lyric: {
                    italic: [
                        {
                            anchor: `Leif as the Red's son`,
                            properNoun: true,
                            annotation: {
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
                                    `who established Norse settlements in Greenland. The arrival of Europeans into the Americas, which precipitated their rise to global power, also brought disease and ruin to the indigenous populations. Similarly, while the day begins for many, it is over for us, and we "leave as the red sun arrives."`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
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
                        annotation: {
                            description: [
                                `A`,
                                {
                                    anchor: `mummer`,
                                    wiki: `Mummers_play`
                                },
                                `is a masked mime, while a`,
                                {
                                    anchor: `mummy`,
                                    wiki: `Mummy`
                                },
                                `is a preserved corpse. All of time has collapsed into a singularity, as my memories blur into those of the world history that I keenly dig through. Everyone is at once dead and not dead, as am I. Or is this all a staged performance that I've chosen to act in?`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `I have left to mine?`
                ]
            },
            {
                unitMap: true,
                unitClassName: OVERLAP,
                stanzaType: BRIDGE
            }
        ],
        [
            {
                time: 154,
                lyric: [
                    {
                        anchor: `Pullar switch,`,
                        annotation: {
                            description: [
                                {
                                    anchor: `Geomagnetic reversal`,
                                    wiki: `Geomagnetic_reversal`
                                },
                                `occurs when the Earth's magnetic poles are interchanged. Such "polar switches" may cause large-scale geological disturbances, according to some hypotheses. Also, crashed on a couch in Howie's attic, I turn on an old black-and-white television by "pulling the switch."`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    {
                        anchor: `in-som'umiak skims through channels`,
                        annotation: {
                            description: [
                                `An`,
                                {
                                    anchor: `umiak`,
                                    wiki: `Umiak`
                                },
                                `is an Inuit boat traditionally made from whalebone and sealskin. Sensing disaster afoot, our brave tribe flees to safety "in some umiak," skimming through icy channels wreaked by a "snowy blitz." Meanwhile, being an`,
                                {
                                    anchor: `"insomniac,"`,
                                    wiki: `Insomnia`
                                },
                                `I "skim through channels" that are "snow-blitzed" due to the television's poor reception.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `snow blitz'd…`
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: [
                            `For a song about recreational drug use, I naturally sought counsel from the Beatles, whose`,
                            {
                                italic: {
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
                stanzaType: PRECHORUS
            }
        ],
        [
            {
                time: 161,
                lyric: [
                    `Then pounds`,
                    {
                        anchor: `arrhythmetic heart,`,
                        annotation: {
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
                        annotation: {
                            description: [
                                `Howie had opted for the large bottle of Robitussin, thinking that the small one I had recommended wouldn't be enough. I now hear him downstairs, in "anguish" over still being "buzzed," as he keeps going back to the kitchen to get more water. Meanwhile, the`,
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
                    `come unsated find`,
                    {
                        anchor: `Rumspring`,
                        properNoun: true,
                        annotation: {
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
                                `are allowed to openly rebel, such that their decision to remain in the community is not rooted in ignorance of the outside world. It means "running around" in Pennsylvania Dutch, but I like the image of an actual spring of rum. In any case, the spring of our youth, in both the literal and metaphorical sense, is running dry.`
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
                        annotation: {
                            description: [
                                `My mouth is dry like a "desert." Also,`,
                                {
                                    anchor: `Deseret`,
                                    wiki: `Deseret_alphabet`
                                },
                                `is an alphabet developed by the early`,
                                {
                                    anchor: `Mormons,`,
                                    wiki: `Mormons`
                                },
                                `also known as Latter-Day Saints.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    {
                        anchor: `black Letter-Day Sensed ahead…`,
                        annotation: {
                            description: `Holidays on a calendar are marked in red, so by contrast, the "black-letter day" I sense ahead is just an ordinary day. Also, "black Latter-Day Saints to head." While the Mormons originally did not allow their black members to attain priesthood, they reversed this policy in 1978.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [REFERENCE]: true
                            }
                        }
                    },
                    {
                        anchor: `"Rejoyce!" bellow the`,
                        annotation: {
                            description: [
                                `Or rather, "'Rejoice!' bellow the reverends." Joyce wrote the last line of`,
                                {
                                    italic: `Finnegans Wake`
                                },
                                `to wrap back onto the first, so I indulged in the same conceit. As I'm stuck watching early-morning televangelists, I observe that every religion's early spirit eventually degrades into orthodoxy and routine, much as it does for us as individuals. But in the meantime, we're just halfway through summer, and more nights of Robitussin await…`
                            ],
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
                unitMap: true,
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 172,
                centre: {
                    italic: `(refrain)`
                }
            },
            {
                unitMap: true,
                stanzaType: INSTRUMENTAL
            }
        ]
    ],
    tasks: [
        {
            taskName: `afterword annotations`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `sort out past and present tense`,
            workedHours: 0,
            neededHours: 3
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
            taskName: `separate annotations into dot categories`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `rough illustration synopses`,
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
