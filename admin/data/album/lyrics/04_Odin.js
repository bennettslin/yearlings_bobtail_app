import {
    AFTERWORD,
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
    INTRO,
    SOLO,
    OUTRO,
    FLASHBACK_TO_WORMHOLE_PREFIX,
    IS_UNIT_DOT,
    RESPONSE
} from '../../../../app/constants/lyrics'

export default {
    title: 'Odin',
    duration: 200,
    // SCRAPS: despair of a binary choice whose differences are illusory, as well as
    overview: `Taiwan showed me how differently I would have turned out had my parents not immigrated to America. And yet, I was still worlds away from what Sasha needed me to be. Life seemed as infinitely fluid as it was immovably fixed, and I wasn't sure which terrified me more. Our house cat Odin died of old age later that summer, just as I was working out my spiritual beliefs. And yet, the eternal life promised by faith seemed no less dreadful to me than the finality of death.`,
    isDoublespeaker: true,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        // TODO: Have separate Norse and Odin wikis.
                        `It's likely that Odin's original name meant something in Chinese, which my sister and I later anglicised into the name of the`,
                        {
                            anchor: `Norse god`,
                            wiki: `Odin`
                        },
                        `once we were older.`
                    ],
                    dotKeys: {
                        [BACKSTORY]: true
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
                    lyricCentre: `Mr. Odin died today.`
                }
            ]
        },
        {
            unitMap: {
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 8,
                    lyricLeft: `Lights off, from your`,
                    lyricRight: [
                        {
                            anchor: `By lot,`,
                            todo: true,
                            cards: [
                                {
                                    description: `Lots are drawn by chance to decide an outcome, and it was my lot not to be born a Jew.`,
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    description: [
                                        `In Genesis, "Lot" fled with his family from the wicked city of Sodom. When`,
                                        {
                                            anchor: `his wife`,
                                            wiki: `Lot%27s_wife`
                                        },
                                        `looked back, she was turned into a pillar of salt. This is understood by some to suggest that the fallen shall not cohabit with the faithful.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `once more`
                    ]
                },
                {
                    time: 10,
                    lyricLeft: [
                        {
                            anchor: `hiding place of retreat`,
                            todo: true,
                            card: {
                                description: `The "asleep" voice in the doublespeaker set narrates a dream that confusedly melds the familiar setting of Los Angeles with the foreign sights of Taiwan. The dream begins abruptly, as I come out from the dusty crawl space beneath my bed to which I often snuck away as a child.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `emerged.`
                    ],
                    lyricRight: [
                        `trifling`,
                        {
                            anchor: `tref must reseed the earth.`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        isItalic: true,
                                        lyric: `Tref`
                                    },
                                    `is Yiddish for food that is not kosher. Since it cannot be eaten, its sole purpose is to fertilise other crops that can. Similarly, as I was not a Jew, I could only ever be subsumed into the endless churn of surrounding peoples.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [REFERENCE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 14,
                    lyricLeft: [
                        `This`,
                        {
                            anchor: `fridge's gallery in web's wake`,
                            todo: true,
                            card: {
                                description: `The cobwebs trailing from my clothes happen to snag some drawings of mine that my mother has attached to the refigerator, scattering them on the floor.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `was strewn,`
                    ],
                    lyricRight: [
                        {
                            anchor: `Indifferent galaxies`,
                            todo: true,
                            card: {
                                description: `The Buddhism of my upbringing didn't make much sense to me, partly because it clashed with the various faiths of my classmates. At the same time, it didn't make any more sense for them to be right and my parents wrong. So with all beliefs equally suspect, I could only conceive of the universe as an endless stretch of cold, empty space in which we live and die to no greater concern.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `instead stay unmoved;`
                    ]
                },
                {
                    time: 17,
                    lyricLeft: `silent poll of colors overused.`,
                    lyricRight: `sigh and pull the covers over you.`
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `I wanted this song to capture the disorienting cycle between days amongst the foreign and dreams of the familiar. So I used a literary technique I invented called doublespeaker rhyme, in which two sets of lyrics that rhyme syllable for syllable are sung in harmony, one in each audio speaker. It's the musical version of a cinematic`,
                        {
                            anchor: `split screen.`,
                            wiki: `Split_screen_(video_production)`
                        }
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
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 20,
                    lyricLeft: `This latest piece`,
                    lyricRight: `In safest sleep,`
                },
                {
                    time: 23,
                    lyricLeft: [
                        `you drew with`,
                        {
                            anchor: `crayons least whittled…`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `When we landed in Taiwan, my aunt gave me a set of crayons as a gift. They were`,
                                        {
                                            anchor: `soft pastels`,
                                            wiki: `Pastel`
                                        },
                                        `and thus more powdery than waxy, which meant that they ran out quickly. By the end of our trip, I was left with the least used colors.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: `My sister and I spoke English at home. Being in Taiwan forced us to depend on our underused Taiwanese, much like being left with the last remaining crayons in a set.`,
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                }
                            ]
                        }
                    ],
                    lyricRight: [
                        `you`,
                        {
                            anchor: `ruminate on these riddles…`,
                            todo: true,
                            card: {
                                description: `The "awake" voice in the doublespeaker set echoes my thoughts as I lie on the floor mat, unable to sleep. However terrifying, the vastness of the universe does suggest unlimited possibilities. Yet somehow, being with Sasha is not one of them.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 26,
                    lyricLeft: [
                        `The`,
                        {
                            anchor: `house settled in sheets,`,
                            todo: true,
                            card: {
                                description: `The rest of the house is asleep, snug under their blankets. Of course, sheets are also pulled over the deceased.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ],
                    lyricRight: `But how dreadful indeed,`
                },
                {
                    time: 28,
                    lyricLeft: `you swing the iron screen.`,
                    lyricRight: [
                        `do`,
                        {
                            anchor: `sweet dream's ichors`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `In Greek mythology,`,
                                        {
                                            anchor: `ichor`,
                                            wiki: `Ichor`
                                        },
                                        `is the golden blood of the gods.`
                                    ]
                                },
                                {
                                    description: `I dreaded sleep as a child. The nightly ordeal of swapping out my reasoned thoughts for irrational dreams felt as burdensome and frightening as a blood transfusion. And yet, things always seemed better in the morning because of it.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true
                                    }
                                }
                            ]
                        },
                        `seem!`
                    ]
                },
                {
                    time: 32,
                    lyricLeft: [
                        `By the`,
                        {
                            anchor: `alabaster balustrade,`,
                            todo: true,
                            card: {
                                description: [
                                    `At the time, buildings in Taiwan made heavy use of iron grates and stone slabs, such that even ordinary living quarters had the feel of a mausoleum adorned with`,
                                    {
                                        anchor: `alabaster`,
                                        wiki: `Alabaster`
                                    },
                                    `carvings.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ],
                    lyricRight: [
                        `Like a`,
                        {
                            anchor: `salamander`,
                            card: {
                                description: [
                                    `Writing doublespeaker rhyme was rather daunting, so I would challenge myself with fun exercises. One of these was to mention each of the four elementals of`,
                                    {
                                        anchor: `Paracelsus,`,
                                        wiki: `Paracelsus`
                                    },
                                    `the 16th-century alchemist who believed that nature is made up of four elements, each personified by a mythical creature. The`,
                                    {
                                        anchor: `salamander`,
                                        wiki: `Salamanders_in_folklore_and_legend`
                                    },
                                    `is the elemental of fire.`
                                ],
                                dotKeys: {
                                    [SONGWRITING]: true
                                }
                            }
                        },
                        `shall await`
                    ]
                },
                {
                    time: 35,
                    lyricLeft: [
                        `baby steps inch towards`,
                        {
                            anchor: `crevice rays.`,
                            todo: true,
                            card: {
                                description: `I especially dreaded bedtime in Taiwan because the lack of ambient light kept my grandmother's house pitch black all through the night. Whenever I woke to use the bathroom, I had to tiptoe towards the door, guided only by a sliver of moonlight peeking in from underneath.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ],
                    lyricRight: [
                        {
                            anchor: `trading breath's bliss`,
                            todo: true,
                            card: {
                                description: [
                                    `Like all amphibians,`,
                                    {
                                        anchor: `salamanders`,
                                        wiki: `Salamander`
                                    },
                                    `begin life underwater, then lose their gills through metamorphosis. So the same conditions needed for them to survive as larvae suddenly become deadly in the adult stage, and vice versa.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `for present bane.`
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
                    time: 38,
                    lyricLeft: [
                        `Then down`,
                        {
                            anchor: `stygian stairs,`,
                            todo: true,
                            card: {
                                description: [
                                    `In Greek mythology, the river`,
                                    {
                                        anchor: `Styx`,
                                        wiki: `Styx`
                                    },
                                    `separates the realm of the living from the underworld. In my grandmother's house at night, the stairs leading down to the kitchen felt similarly foreboding.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ],
                    lyricRight: `And how stingy and scarce`
                },
                {
                    time: 40,
                    lyricLeft: [
                        `through`,
                        {
                            anchor: `sickle-lit`,
                            todo: true,
                            card: {
                                description: [
                                    `The crescent moon is shaped like the blade of the scythe wielded by the`,
                                    {
                                        anchor: `Grim Reaper.`,
                                        wiki: `Death_(personification)`
                                    }
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        {
                            anchor: `oriental`,
                            todo: true,
                            card: {
                                description: [
                                    `The word`,
                                    {
                                        anchor: `"Oriental"`,
                                        wiki: `Orient`
                                    },
                                    `wasn't a pejorative when I was growing up. It's even printed on my birth certificate, after all. I learned of its incorrectness during the time when "queer" was being reclaimed by the gay community. The latter tactic always made more sense to me.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `streets.`
                    ],
                    lyricRight: [
                        `proves`,
                        {
                            anchor: `shibboleth`,
                            todo: true,
                            card: {
                                description: [
                                    [
                                        `A`,
                                        {
                                            anchor: `shibboleth`,
                                            wiki: `Shibboleth`
                                        },
                                        `is any signifier used to differentiate members of an ingroup from outsiders. In the Book of Judges, the Gileadites asked suspected Ephraimites to pronounce the Hebrew word for a freshwater stream. Because the Ephraimites lacked the "sh" sound in their dialect, they pronounced the word as "sibboleth," thus outing themselves as enemy tribespeople.`
                                    ]
                                ]
                            }
                        },
                        `for these`,
                        {
                            anchor: `gentle means!`,
                            todo: true,
                            card: {
                                description: [
                                    `Or else`,
                                    {
                                        anchor: `"Gentile,"`,
                                        wiki: `Gentile`
                                    },
                                    `referring to any non-Jew.`
                                ],
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 44,
                    lyricLeft: `Raccoons rummage round some rubbish bags,`,
                    lyricRight: [
                        `As you plummet down from`,
                        {
                            anchor: `couplets past;`,
                            todo: true,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `couplet`,
                                        wiki: `Couplet`
                                    },
                                    `is a pair of lines in a poem that typically rhyme and share the same metre. Sasha and I were never a couple, of course. But perhaps we were a couplet?`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 47,
                    lyricLeft: [
                        `till a`,
                        {
                            anchor: `rickshaw hiccoughs`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `A`,
                                        {
                                            anchor: `rickshaw`,
                                            wiki: `Rickshaw`
                                        },
                                        `is a pedal-driven passenger vehicle. Here, the uneven surface of the road causes one to jounce abruptly.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    description: `While rickshaws were no longer in service by the time of our Taiwan trip, their recent prevalence could be inferred from photographs and traffic signs.`,
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                }
                            ]
                        },
                        `from grating cracks.`
                    ],
                    lyricRight: [
                        `still, but`,
                        {
                            anchor: `missed bat mitzvahs`,
                            todo: true,
                            card: {
                                description: [
                                    `Being in Taiwan at the time, I was unable to attend Sasha's`,
                                    {
                                        anchor: `bat mitzvah,`,
                                        wiki: `Bar_and_Bat_Mitzvah`
                                    },
                                    `a coming-of-age ritual undertaken by Jewish girls upon reaching twelve years of age.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `come racing back.`
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `While the two doublespeaker voices seem to proceed independently, each plants subtle ideas along the path of the other, much as our conscious thoughts affect our dreams and vice versa. In this stanza, for example, the mention of a staircase by the "asleep" voice precedes the plummeting spoken of by the "awake" voice.`,
                    dotKeys: {
                        [OBSERVATION]: true,
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
                    time: 50,
                    lyricLeft: [
                        `You seek the`,
                        {
                            anchor: `dunes once deemed a haven`,
                            todo: true,
                            card: {
                                description: [
                                    `The narrator Ishmael in Herman Melville's`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Moby-Dick`,
                                            wiki: `Moby-Dick`
                                        }
                                    },
                                    `is an outcast like his namesake, the first son of Abraham. While one was banished to the desert, the other wanders the wilderness of the ocean. It is to these metaphorical dunes of the ocean that I now flee as well.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ],
                    lyricRight: [
                        `To`,
                        {
                            anchor: `dreams of whom`,
                            card: {
                                wormhole: {
                                    wormholeKey: `dreams_of_whom`,
                                    wormholePrefix: FLASHBACK_TO_WORMHOLE_PREFIX
                                }
                            }
                        },
                        `does each one cave in`
                    ]
                },
                {
                    time: 53,
                    lyricLeft: [
                        `that was`,
                        {
                            anchor: `safe for a heathen…`,
                            todo: true,
                            card: {
                                description: [
                                    `In the Book of Genesis, God promised to make`,
                                    {
                                        anchor: `Ishmael`,
                                        wiki: `Ishmael`
                                    },
                                    `a great nation, though he would not inherit Abraham's house. Coming through less favoured lineage myself, I could only hope for similar recompense, as I was not to marry into Sasha's house.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ],
                    lyricRight: `as a slave for the seasons?`
                }
            ]
        },
        {
            unitMap: {
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 59,
                    lyricLeft: `And if flutters with the fairest`,
                    lyricRight: [
                        `And if`,
                        {
                            anchor: `summer trips to Paris`,
                            todo: true,
                            cards: [
                                {
                                    description: `In middle school, students who completed two years of French class were eligible to attend a summer program in France. This excited Sasha, and so it excited me as well.`,
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: [
                                        `In Greek mythology,`,
                                        {
                                            anchor: `Paris`,
                                            wiki: `Paris_(mythology)`
                                        },
                                        `was the prince of Troy, whose elopement with Helen of Sparta caused the Trojan War.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 63,
                    lyricLeft: `were just sins simply dreamt,`,
                    lyricRight: `weren't just myths between friends,`
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `The drums were the one instrument for which I scored parts that were far more advanced than my own playing ability. So for this song, I had to try several workarounds. I ended up recording the kick, snare, and toms in separate takes from the cymbals.`,
                    dotKeys: {
                        [SONGWRITING]: true
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
                    time: 67,
                    // CONSIDER: Wormhole: Reference to insect in jar in Vegan Proclamation?
                    lyricLeft: `could some bottled butterfly`,
                    lyricRight: [
                        `would the`,
                        {
                            anchor: `rondel of her eye`,
                            todo: true,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `rondel`,
                                        wiki: `Rondel_(poem)`
                                    },
                                    `is a verse form that originated in French poetry. It can also refer to anything round, like a ball. The "apple of one's eye" is an Old English misreading of a Biblical Hebrew idiom that more accurately translates to "ball of one's eye." My hope that I could be the object of Sasha's affection was based on a similar misreading.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 70,
                    lyricLeft: {
                        anchor: `dream your whims instead?`,
                        todo: true,
                        card: {
                            description: [
                                `Uncertain of whether I am asleep or awake, I recall the ancient Chinese philosopher`,
                                {
                                    anchor: `Zhuangzi,`,
                                    wiki: `Zhuang_Zhou`
                                },
                                `who famously mused that he could not be sure if he was then a man dreaming he was a butterfly, or now a butterfly dreaming he is a man.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    lyricRight: [
                        `be`,
                        {
                            anchor: `stored in this neck?`,
                            todo: true,
                            card: {
                                description: [
                                    `Due to another mistranslation, the phrase "man's swelling" in Biblical Hebrew entered the Western lexicon as`,
                                    {
                                        anchor: `"Adam's apple."`,
                                        wiki: `Adam%27s_apple`
                                    },
                                    `And so an apocryphal tale was born that when`,
                                    {
                                        anchor: `Adam`,
                                        wiki: `Adam`
                                    },
                                    `ate the forbidden fruit of knowledge, a piece lodged in his throat to mark all his descendants with a reminder of their original sin. Similarly, my knowledge of where I stood with Sasha left me to feel a permanent lump in my throat.`
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
                formType: CHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 73,
                    lyricLeft: `What's more, if all you live for`,
                    lyricRight: [
                        `But`,
                        {
                            anchor: `cored gifts fall to discord`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Eris`,
                                        wiki: `Eris_(mythology)`
                                    },
                                    `is the Greek goddess of discord. As revenge for being denied invitation to a feast attended by the other gods, she tossed a golden apple labeled "for the fairest" into their midst. When Paris was asked to judge its rightful owner, he chose Aphrodite, who rewarded him with the hand of Helen.`
                                ]
                            }
                        }
                    ]
                },
                {
                    time: 76,
                    lyricLeft: `still die at the end—`,
                    lyricRight: `till lives acquiesce,`
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
                    time: 79,
                    lyricLeft: [
                        `like Odin's ashes back from`,
                        {
                            anchor: `the Society,`,
                            todo: true,
                            card: {
                                description: [
                                    `Odin's remains had been taken to the`,
                                    {
                                        anchor: `Humane Society,`,
                                        wiki: `The_Humane_Society_of_the_United_States`
                                    },
                                    `which offers pet cremation services.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ],
                    lyricRight: [
                        `by`,
                        {
                            anchor: `opened latches`,
                            todo: true,
                            card: {
                                description: [
                                    `In Greek mythology,`,
                                    {
                                        anchor: `Pandora`,
                                        wiki: `Pandora`
                                    },
                                    `was the first human woman. Upon opening a box given to her by Zeus as a wedding gift, she unwittingly released all the evils that plague humanity.`
                                ]
                            }
                        },
                        `that come undone by`,
                        {
                            anchor: `undine—`,
                            todo: true,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `undine`,
                                        wiki: `Undine`
                                    },
                                    `is a female nymph and the elemental of water. The term was coined by Paracelsus and is derived from the Latin word`,
                                    {
                                        isItalic: true,
                                        lyric: `unda,`
                                    },
                                    `meaning "wave."`
                                ]
                            }
                        }
                    ]
                },
                {
                    time: 84,
                    lyricLeft: `which filled a chasm dug up underneath—`,
                    lyricRight: `which spilled a basket among other things—`
                },
                {
                    time: 87,
                    lyricLeft: `can that which kills a cat`,
                    lyricRight: `a casket tilted back`
                },
                {
                    time: 90,
                    lyricLeft: `spare his home if spread?`,
                    lyricRight: [
                        `where its`,
                        {
                            // CONSIDER: wormhole: Hope chest in M?
                            anchor: `hopeless rests.`,
                            todo: true,
                            card: {
                                description: `Hope was all that remained in Pandora's box. By contrast, upon having the hard truths of the world revealed to me by Sasha, I was left only with my own hopeless state.`,
                                dotKeys: {
                                    [REFERENCE]: true,
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
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 93,
                    lyricLeft: `You researched a gleam`,
                    lyricRight: [
                        `Your`,
                        {
                            anchor: `seizures of spleen,`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `In`,
                                        {
                                            anchor: `Hippocratic medicine,`,
                                            wiki: `Humorism`
                                        },
                                        `the spleen was thought to secrete black bile, the humor that induces melancholy. In modern parlance, however, the spleen is associated with a foul temper. My expressions of resentment towards the bullies, which I confided to Sasha, were characteristic of both senses.`
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 95,
                    lyricLeft: [
                        `to be a`,
                        {
                            anchor: `guard's whistle`,
                            todo: true,
                            card: {
                                description: `Standing on the ocean beach, I notice a steel whistle buried in the sand. Having once been blown by a lifeguard to warn of danger, it is now forever lost. Some dangers come with no warning, after all.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `at your feet,`
                    ],
                    lyricRight: [
                        `you see the`,
                        {
                            anchor: `jarred sibyl`,
                            todo: true,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `Cumaean Sibyl`,
                                        wiki: `Cumaean_Sibyl`
                                    },
                                    `was a Greek prophetess who was granted immortality but not eternal youth. T.S. Eliot's poem`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `The Waste Land`,
                                            wiki: `The_Waste_Land`
                                        }
                                    },
                                    `begins with an epigraph in which the Sibyl, hanging in a jar, is asked what she wants most. She replies that what she wants most is to die.`
                                ]
                            }
                        },
                        `had foreseen`
                    ]
                },
                {
                    time: 99,
                    lyricLeft: [
                        `and brought your raft behind the`,
                        {
                            anchor: `yellow-taped grills`,
                            todo: true,
                            card: {
                                description: `Barricade tape has been tied along the barbecue grills that line the shore, in an effort to prevent beachgoers from wading into the shark-infested waters.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ],
                    lyricRight: [
                        `as not for wrapping by a`,
                        {
                            anchor: `cellophane sylph,`,
                            todo: true,
                            card: {
                                description: [
                                    `In the works of Paracelsus, the`,
                                    {
                                        anchor: `sylph`,
                                        wiki: `Sylph`
                                    },
                                    `is the elemental of air, and is depicted as a fairy with wings of gauze. Now, if the wings were made from cellophane, they would hold the additional properties of being transparent and sealing in heat.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 102,
                    lyricLeft: [
                        `to`,
                        {
                            anchor: `stand onshore`,
                            card: {
                                wormhole: `stand_onshore`
                            }
                        },
                        `keen to drift`
                    ],
                    lyricRight: `who cannot warm he who`
                },
                {
                    time: 103,
                    lyricLeft: [
                        `if shark swarms withheld.`
                    ],
                    lyricRight: [
                        {
                            anchor: `didn't impart warmth`,
                            // CONSIDER: Wormhole Foreshadow M?
                            todo: true,
                            card: {
                                description: `Like cellophane, Sasha's intentions were fully transparent. I could always count on her as my friend to sympathize during my bouts of frustration. But also like cellophane, she couldn't truly return warmth where none was offered. Once I became more open about my petty and vindictive thoughts towards the bullies, I could feel her keeping her distance. And then I knew that any chance for us to be more than friends was gone forever.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `himself.`
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Recording vocals in doublespeaker rhyme proved to be trickier than expected. When singing, we tend to delay or shorten syllables to adjust for phrasing and consonant clusters. So even when each voice in a doublespeaker set sounded fine on its own, the disjointed syllables would meld into a jumbled mush once heard together. To keep them in perfect sync, I ended up devising a system of notation that kind of looked like medieval`,
                        {
                            anchor: `ligature.`,
                            wiki: `Ligature_(music)`
                        }
                    ],
                    dotKeys: {
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
                    time: 105,
                    lyricLeft: [
                        {
                            anchor: `Buoy bobs`,
                            todo: true,
                            card: {
                                description: `As buoys bob in the ocean, who's to say that this "boy" isn't also bobbing through life, oblivious to dangers lurking everywhere?`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `through sea serpents,`
                    ],
                    lyricRight: `Coin toss to be hers from`
                },
                {
                    time: 107,
                    lyricLeft: {
                        anchor: `shivering for shivs unsheathed.`,
                        todo: true,
                        cards: [
                            {
                                // CONSIDER: Wormhole Kyon for shank?
                                description: [
                                    `A`,
                                    {
                                        anchor: `shiv`,
                                        wiki: `Shiv_(weapon)`
                                    },
                                    `is a stabbing weapon improvised by prison inmates. To wander a prison yard is to be in constant danger of getting shivved, and the schoolyard felt like a training ground for a lifetime of such vigilance.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            },
                            {
                                wormhole: `chivalry`
                            }
                        ]
                    },
                    lyricRight: {
                        anchor: `shivaree towards shivah seat`,
                        todo: true,
                        cards: [
                            {
                                description: [
                                    {
                                        anchor: `Shivaree`,
                                        wiki: `Charivari`
                                    },
                                    `is a European folk custom in which a raucous crowd serenades a newlywed couple. Meanwhile, sitting`,
                                    {
                                        anchor: `shivah`,
                                        wiki: `Shiva_(Judaism)`
                                    },
                                    `refers to a period of mourning in Judaism after a family member passes away. In other words, my bad luck to not be born Jewish has cost me any hope of spending a lifetime with Sasha, from marriage until death.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            },
                            {
                                wormhole: `chivalry`
                            }
                        ]
                    }
                },
                {
                    time: 111,
                    lyricLeft: `As roller coasters of waves comfort sighs,`,
                    lyricRight: [
                        `has`,
                        {
                            anchor: `pulled your floater away`,
                            todo: true,
                            card: {
                                description: `Pining after Sasha was like trying to stare at an off-center floater on the surface of one's eyeball. Despite my frantic efforts to bring myself closer, her inner world always remained a fixed distance apart from me.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `from your sight.`
                    ]
                },
                {
                    time: 114,
                    lyricLeft: [
                        `you frame`,
                        {
                            anchor: `silhouettes of torn rides`,
                            todo: true,
                            card: {
                                description: `Watching the ocean waves rise and fall in my dream, I am reminded of roller coasters that shaped the skyline of my youth, which were erected and dismantled with a similar transience.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ],
                    lyricRight: `You chase till dew sheds from your eyes`
                }
            ]
        },
        {
            unitMap: {
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 117,
                    lyricLeft: `in your dim, lingering gaze,`,
                    lyricRight: `with your beleaguered remains,`
                },
                {
                    time: 120,
                    lyricLeft: `a victim of erosion.`,
                    lyricRight: `amidst dustbunnies frozen.`
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
                    time: 123,
                    lyric: `Should you hide, or could you fight,`
                },
                {
                    time: 132,
                    lyric: [
                        `when your`,
                        {
                            anchor: `day to die`,
                            todo: true,
                            card: {
                                description: [
                                    `As a child, I experienced night terrors related to my constant fear of death. Whenever I woke up screaming, my mother would console me with the promise of reincarnation. But this only confused me, since the end goal of Buddhism is`,
                                    {
                                        anchor: `nirvana,`,
                                        wiki: `Nirvana_(Buddhism)`
                                    },
                                    `a release from the cycle of rebirth through annihilation of the soul. Awaiting my next life, then, knowing that it might be my last, just seemed like getting old and dying on a grander scale.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `has come?`
                    ]
                }
            ],
            subVerse: [
                {
                    time: 135,
                    lyric: [
                        `Can a`,
                        {
                            anchor: `holed up hostage`,
                            todo: true,
                            card: {
                                description: `And yet, the thought of being stuck with a soul forever, a fate promised by the faiths of my classmates, seemed every bit as dreadful.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 137,
                    lyric: [
                        `pray for`,
                        {
                            anchor: `soulless solace`,
                            // From Willy the Cocoa ("unsalvaged souls")
                            // But as a child, I came to a slightly different conclusion. If my brother and I could be so alike in physical makeup yet so different in mental presence, then it made more sense to believe that no one has a soul.
                            todo: true,
                            card: {
                                description: `It seemed bizarre to me that if a true spiritual path did indeed exist, then it wouldn't offer a reward so obviously desirable, for which I could mindlessly strive without being troubled by existential questions on the nature of souls.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `and just play dumb?`
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
                    time: 141,
                    lyric: `But in time, wouldn't you find`
                },
                {
                    time: 144,
                    lyric: `life is simply much too long?`
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
                    time: 147,
                    lyricLeft: [
                        `But for a`,
                        {
                            // CONSIDER: Wormhole to Ash Wednesday?
                            anchor: `fetus force-fed,`,
                            todo: true,
                            card: {
                                description: `Most maddening of all was that one has no say in being brought into this world, given how distressing the knowledge of one's mortality must always be.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `born preaborted,`
                    ],
                    lyricRight: [
                        `Yet your`,
                        {
                            anchor: `defeat of tortoise,`,
                            todo: true,
                            card: {
                                description: [
                                    `The tortoise defeats the hare in`,
                                    {
                                        anchor: `Aesop's fable`,
                                        wiki: `The_Tortoise_and_the_Hare`
                                    },
                                    `only because the hare falls asleep. Similarly, while tortoises are known to live over a century, I had them beat in longevity if I could just awaken to the virtues of faith. Given the bleak alternative, that was certainly my wish.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `forced lead unthwarted,`
                    ]
                },
                {
                    time: 150,
                    lyricLeft: `your ouija board said, "Son, just hum along."`,
                    lyricRight: `sworn feat aforesaid, doesn't come anon.`
                }
            ]
        },
        {
            unitMap: {
                formType: SOLO
            },
            mainVerses: [
                {
                    time: 153,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(electric mandolin)`
                    }
                }
            ]
        },
        {
            unitMap: {
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 166,
                    lyricLeft: [
                        `Though`,
                        {
                            anchor: `no slave parts these seas,`,
                            todo: true,
                            card: {
                                description: [
                                    `In the Book of Exodus, Moses led the Israelites out of slavery in Egypt by`,
                                    {
                                        anchor: `parting the Red Sea,`,
                                        wiki: `Crossing_the_Red_Sea`
                                    },
                                    `allowing them to safely cross.`
                                ]
                            }
                        }
                    ],
                    lyricRight: [
                        `Though, no`,
                        {
                            anchor: `gray starling's beak`,
                            card: {
                                wormhole: `gray_starling`
                            }
                        }
                    ]
                },
                {
                    time: 168,
                    lyricLeft: [
                        `then returns them as a`,
                        {
                            anchor: `buffer zone…`,
                            todo: true,
                            card: {
                                description: `God then brought the waters together behind Moses and the Israelites, drowning the Egyptian army in pursuit. Unfortunately, the certainty of death following me at every turn would not be overcome so easily.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [REFERENCE]: true
                                }
                            }
                        }
                    ],
                    // CONSIDER: Wormhole: Nora Barnacle in Good Night, Sita?
                    lyricRight: `can reach urchins smashed from undertows…`
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
                    time: 173,
                    lyricLeft: [
                        `The sudsy ocean shapes its`,
                        {
                            anchor: `padded bed,`,
                            todo: true,
                            card: {
                                description: `As I slowly make peace with the inevitable, the ocean begins to feel more calm and inviting. But my dream is also ending, and I will soon awake in the comfort of a bed.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ],
                    lyricRight: `But suddenly Odin's day is at its end;`
                },
                {
                    time: 177,
                    lyricLeft: `which hitherto snubbed and spurned a wreck,`,
                    lyricRight: [
                        {
                            anchor: `his litter`,
                            todo: true,
                            card: {
                                description: `Referring to the disposal of Odin's cat litter, of course, but also to his lack of progeny. At this time, my own odds of leaving behind a litter don't seem any better.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `to dust and earth was swept,`
                    ]
                },
                {
                    time: 180,
                    lyricLeft: [
                        `while`,
                        {
                            anchor: `mermaids smile`,
                            todo: true,
                            card: {
                                description: [
                                    `T.S. Eliot's`,
                                    {
                                        anchor: `"The Love Song of J. Alfred Prufrock"`,
                                        wiki: `The_Love_Song_of_J._Alfred_Prufrock`
                                    },
                                    `examines themes of stunted growth and missed opportunities. The poem ends with the narrator bemoaning that while the mermaids may sing, they do not sing for him. Similarly, while my resignation has turned the sea serpents into smiling mermaids, they still do not smile for me.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ],
                    lyricRight: [
                        `while`,
                        {
                            anchor: `Thursday's child`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: `Wednesday is "Odin's day" in Old English, and I was born on a Thursday. So my day literally begins as Odin's day ends.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 183,
                    lyricLeft: [
                        `past a`,
                        {
                            anchor: `guileless garden gnome…`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `gnome,`,
                                            wiki: `Gnome`
                                        },
                                        `a small humanoid who lives underground, is the elemental of earth in Paracelsus's writings.`
                                    ]
                                },
                                {
                                    description: `Powerless to change my condition, I stand motionless like a lawn ornament before all that remains unknown, filled with faint hope for the future.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true
                                    }
                                }
                            ]
                        }
                    ],
                    lyricRight: [
                        `has a`,
                        {
                            anchor: `mile less far to go…`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `"Monday's Child"`,
                                        wiki: `Monday%27s_Child`
                                    },
                                    `is a nursery rhyme that predicts a child's fortune based on weekday of birth. Thursday's child is promised to have "far to go," and indeed, the distance I have left to cover feels dispiritingly vast. Still, I am now one day closer than when the day began…`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                formType: OUTRO
            },
            mainVerses: [
                {
                    time: 186,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Odin's theme)`
                    }
                }
            ]
        },
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `I stayed in touch with Sasha over the years. After the album's release went nowhere, I moved to New York City to regain my bearings, and reconnected with her there. As it became clear that we were dating, I studied Hebrew and undertook a yearlong course required for conversion to Judaism. We didn't last long enough for me to stand before the rabbinical court, however, which would have been the final step. So, I'm still not Jewish.`
                    ],
                    dotKeys: {
                        [AFTERWORD]: true
                    }
                }
            }
        }
    ]
}
