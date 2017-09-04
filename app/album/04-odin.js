import { AFTERWORD,
         BACKSTORY,
         NARRATIVE,
         OBSERVATION,
         PUN,
         REFERENCE,
         SONGWRITING } from '../constants/dots'
import { LEFT,
         RIGHT,
         OVERLAP,
         VERSES,
         PRECHORUS,
         CHORUS,
         BRIDGE,
         INTRO,
         SOLO,
         OUTRO,
         FLASHBACK_TO_PORTAL_PREFIX,
         IS_DOT_STANZA } from '../constants/lyrics'

module.exports = {
    scenes: [
        {
            unitIndex: 1,
            description: `Bennett is lying on a mat on the floor. In the distance, he sees himself creeping out of the house in pitch darkness. Papers are strewn where he walked.`,
            actors: {
                preteenBennett: {
                    todo: true,
                    workedHours: 1,
                    description: 'side, lying on floor, propped up'
                }
            }
        },
        {
            unitIndex: 4,
            description: 'From top of stairs, Bennett sees himself opening the gate and peering out.',
            actors: {
                preteenBennett: {
                    todo: true,
                    workedHours: 1,
                    description: 'side angle, looking down stairs'
                }
            }
        },
        {
            unitIndex: 6,
            description: `Bennett is stepping through the front gate. He sees himself in a rickshaw, driving away. The rickshaw leaves a trail.`,
            actors: {
                preteenBennett: {
                    todo: true,
                    workedHours: 1,
                    description: 'side angle, peeking out from gate'
                }
            }
        },
        {
            unitIndex: 9,
            description: ``,
            actors: {
                preteenBennett: {
                    todo: true,
                    description: 'getting off rickshaw bike'
                }
            }
        },
        {
            unitIndex: 11,
            description: `Bennett is standing on the shore. He sees himself in the water, on a buoy. Footprints lead into the water.`,
            actors: {
                preteenBennett: {
                    todo: true,
                    workedHours: 1,
                    description: 'side back, looking out to ocean'
                }
            }
        },
        {
            unitIndex: 14,
            description: `Sea serpents are surrounding Bennett in the ocean.`,
            actors: {
                preteenBennett: {
                    todo: true,
                    description: 'peering down from buoy'
                }
            }
        },
        {
            unitIndex: 20,
            description: `Sasha is a mermaid, rescuing Bennett. She points down to Bennett on the ocean floor.`,
            actors: {
                preteenBennett: {
                    todo: true,
                    description: 'hugging self'
                },
                sasha: {
                    todo: true,
                    description: 'mermaid'
                }
            }
        },
        {
            unitIndex: 18,
            description: `Bennett sits on the shore gazing at the ocean. Further ahead, another Bennett is making his bed on the beach. Footprints lead up to him.`,
            actors: {
                preteenBennett: {
                    todo: true,
                    workedHours: 1,
                    description: 'side angle, crouched in sand, looking back'
                }
            }
        }
    ],
    tip: {
        description: 'placeholder tip'
    },
    totalTime: 200,
    overview: `Taiwan showed me how differently I would have turned out had my parents not immigrated to America. And yet, I was still worlds away from what Sasha needed me to be. Life seemed as infinitely fluid as it was immovably fixed, and I wasn't sure which terrified me more. Our house cat Odin died of old age later that summer, just as I was working out my spiritual beliefs. And yet, the eternal life promised by faith seemed no less dreadful to me than the finality of death.`,
    title: {
        anchor: 'Odin',
        annotation: {
            description: [
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
    },
    lyrics: [
        [
            {
                time: 0,
                centre: `Mr. Odin died today.`
            },
            {
                unitMap: true,
                stanzaType: INTRO
            }
        ],
        [
            {
                time: 8,
                left: `Lights off, from your`,
                right: [
                    {
                        anchor: `By lot,`,
                        annotation: [
                            {
                                description: `Lots are drawn by chance to decide an outcome, and it was my lot to be born a non-Jew.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            },
                            {
                                description: [
                                    `In the Book of Genesis, "Lot" fled with his family from the wicked city of Sodom. When`,
                                    {
                                        anchor: `his wife`,
                                        wiki: `Lot%27s_wife`
                                    },
                                    ` looked back, she was turned into a pillar of salt. This is understood by some to suggest that the fallen shall not cohabit with the faithful.`
                                ],
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        ]
                    },
                    `once more`,
                ]
            },
            {
                time: 10,
                left: [
                    {
                        anchor: `hiding place of retreat`,
                        annotation: {
                            description: `The "asleep" voice in the doublespeaker set narrates a dream that confusedly melds the familiar setting of Los Angeles with the foreign sights of Taiwan. The dream begins abruptly, as I come out from the dusty crawl space beneath my bed to which I often snuck away as a child.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        },
                    },
                    `emerged.`
                ],
                right: [
                    `trifling`,
                    {
                        anchor: `tref must reseed the earth.`,
                        annotation: {
                            description: [
                                {
                                    italic: `Tref`
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
                left: [
                    `This`,
                    {
                        anchor: `fridge's gallery in web's wake`,
                        annotation: {
                            description: `The cobwebs trailing from my clothes happen to snag some drawings of mine that my mother has attached to the refigerator, scattering them on the floor.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `was strewn,`
                ],
                right: [
                    {
                        anchor: `Indifferent galaxies`,
                        annotation: {
                            description: `The Buddhism of my upbringing didn't make much sense to me, partly because it clashed with the various faiths of my classmates. At the same time, it didn't make any more sense for them to be right and my parents wrong. So with all beliefs equally suspect, I could only conceive of the universe as an endless stretch of cold, empty space in which we live and die to no concern. But this to me was the most disturbing prospect of all.`,
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
                left: `silent poll of colours overused.`,
                right: `sigh and pull the covers over you.`
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: `I wanted to convey the despair in making binary choices whose differences are illusory, as well as the disorienting cycle between days amongst the foreign and dreams of the familiar. So I invented a literary technique called doublespeaker rhyme, in which two sets of lyrics that rhyme syllable for syllable are sung in harmony, one in each audio speaker. It's the musical version of a cinematic split screen.`,
                        dotKeys: {
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
                time: 20,
                left: `This latest piece`,
                right: `In safest sleep,`
            },
            {
                time: 23,
                left: [
                    `you drew with`,
                    {
                        anchor: `crayons least whittled…`,
                        annotation: [
                            {
                                description: [
                                    `When we landed in Taiwan, my aunt gave me a set of crayons as a gift. They were`,
                                    {
                                        anchor: `soft pastels`,
                                        wiki: `Pastel`
                                    },
                                    `and thus more powdery than waxy, which meant that they ran out quickly. By the end of our trip, I was left with the least used colours.`
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
                right: [
                    `you`,
                    {
                        anchor: `ruminate on these riddles…`,
                        annotation: {
                            description: `The "awake" voice in the doublespeaker set echoes my thoughts as I lie on the floor mat, unable to sleep. However terrifying, the vastness of the universe does suggest unlimited possibilities. Yet somehow, being with Sasha is not one of them.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
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
                time: 26,
                left: [
                    `The`,
                    {
                        anchor: `house settled in sheets,`,
                        annotation: {
                            description: `The rest of the house is asleep, snug under their blankets. Of course, sheets are also pulled over the deceased.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    }
                ],
                right: `But how dreadful indeed,`
            },
            {
                time: 28,
                left: `you swing the iron screen.`,
                right: [
                    `do`,
                    {
                        anchor: `sweet dream's ichors`,
                        annotation: [
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
                                description: `I dreaded sleep as a child. The nightly ordeal of swapping out my reasoned thoughts for irrational dreams felt as burdensome and frightening as a blood transfusion, even when its restorative effects always proved to be glorious.`,
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
                left: [
                    `By the`,
                    {
                        anchor: `alabaster balustrade,`,
                        annotation: {
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
                right: [
                    `Like a`,
                    {
                        anchor: `salamander`,
                        annotation: {
                            description: [
                                `Since writing doublespeaker rhyme could get daunting, I would challenge myself with fun exercises. One of them was to mention each of the four elementals of`,
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
                left: [
                    `baby steps inch towards`,
                    {
                        anchor: `crevice rays.`,
                        annotation: {
                            description: `I especially dreaded bedtime in Taiwan because the lack of ambient light kept my grandmother's house pitch black all through the night. Whenever I woke to use the bathroom, I had to tiptoe towards the door, guided only by a sliver of moonlight peeking in from underneath.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ],
                right: [
                    {
                        anchor: `trading breath's bliss`,
                        annotation: {
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
            },
            {
                unitMap: true,
                stanzaType: VERSES
            }
        ],
        [
            {
                time: 38,
                left: [
                    `Then down`,
                    {
                        anchor: `stygian stairs,`,
                        annotation: {
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
                right: `And how stingy and scarce`
            },
            {
                time: 40,
                left: [
                    `through`,
                    {
                        anchor: `sickle-lit`,
                        annotation: {
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
                        annotation: {
                            description: [
                                `The word`,
                                {
                                    anchor: `"Oriental"`,
                                    wiki: `Orient`
                                },
                                `wasn't a pejorative until determined to be such by academics. It's even printed on my birth certificate, after all. I learned of its incorrectness during the time when "queer" was being reclaimed by the gay community. The latter tactic made more sense to me.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `streets.`
                ],
                right: [
                    `proves`,
                    {
                        anchor: `shibboleth`,
                        annotation: {
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
                        annotation: {
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
                left: `Raccoons rummage round some rubbish bags,`,
                right: [
                    `As you plummet down from`,
                    {
                        anchor: `couplets past;`,
                        annotation: {
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
                left: [
                    `till a`,
                    {
                        anchor: `rickshaw hiccoughs`,
                        annotation: [
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
                right: [
                    `still, but`,
                    {
                        anchor: `missed bat mitzvahs`,
                        annotation: {
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
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: `While the two voices seem to proceed independently, each plants subtle ideas along the path of the other, much as our conscious thoughts affect our dreams, and vice versa. In this stanza, for example, the mention of a staircase by the "asleep" voice precedes the plummeting spoken of by the "awake" voice.`,
                        dotKeys: {
                            [OBSERVATION]: true,
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
                time: 50,
                left: [
                    `You seek the`,
                    {
                        anchor: `dunes once deemed a haven`,
                        annotation: {
                            description: [
                                `The narrator Ishmael in Herman Melville's`,
                                {
                                    italic: {
                                        anchor: `Moby-Dick`,
                                        wiki: `Moby-Dick`
                                    }
                                },
                                `is an outcast like his namesake, the first son of Abraham. While one was banished to the desert, the other wanders the wilderness of the ocean. It is to these metaphorical dunes of the ocean that I now flee as well.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        },
                    }
                ],
                right: [
                    `To`,
                    {
                        anchor: `dreams of whom`,
                        annotation: {
                            portal: {
                                portalKey: `dreams_of_whom`,
                                portalPrefix: FLASHBACK_TO_PORTAL_PREFIX
                            }
                        }
                    },
                    `does each one cave in`
                ]
            },
            {
                time: 53,
                left: [
                    `that was`,
                    {
                        anchor: `safe for a heathen…`,
                        annotation: {
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
                right: `as a slave for the seasons?`
            },
            {
                unitMap: true,
                stanzaType: PRECHORUS
            }
        ],
        [
            {
                time: 59,
                left: `And if flutters with the fairest`,
                right: [
                    `And if`,
                    {
                        anchor: `summer trips to Paris`,
                        annotation: [
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
                left: `were just sins simply dreamt,`,
                right: `weren't just myths between friends,`
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: `The drums were the one instrument for which I had to score parts that were far more advanced than my own abilities. So when it came time to record, I tried many workarounds. On this song, I recorded the kick, snare, and toms separately from the cymbals.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 67,
                // CONSIDER: Portal: Reference to insect in jar in Vegan Proclamation?
                left: `could some bottled butterfly`,
                right: [
                    `would the`,
                    {
                        anchor: `rondel of her eye`,
                        annotation: {
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
                left: {
                        anchor: `dream your whims instead?`,
                        annotation: {
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
                right: [
                    `be`,
                    {
                        anchor: `stored in this neck?`,
                        annotation: {
                            description: [
                                `Due to another mistranslation, "man's swelling" in Biblical Hebrew entered the English lexicon as`,
                                {
                                    anchor: `"Adam's apple."`,
                                    wiki: `Adam%27s_apple`
                                },
                                `An apocryphal tale thus took shape that because`,
                                {
                                    anchor: `Adam`,
                                    wiki: `Adam`
                                },
                                `ate the forbidden fruit of knowledge, the piece that lodged in his throat now marks his descendants as a permanent reminder of their sin. Similarly, my newly gained knowledge of where I stood with Sasha left me with a permanent lump in my throat.`
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
                stanzaType: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 73,
                left: `What's more, if all you live for`,
                right: [
                    `But`,
                    {
                        anchor: `cored gifts fall to discord`,
                        annotation: {
                            description: [
                                {
                                    anchor: `Eris`,
                                    wiki: `Eris_(mythology)`
                                },
                                `was the Greek goddess of discord. As revenge for being denied invitation to a feast attended by the other gods, she tossed a golden apple labelled "for the fairest" into their midst. When Paris was asked to judge its rightful owner, he chose Aphrodite, who rewarded him with the hand of Helen.`
                            ]
                        }
                    }
                ]
            },
            {
                time: 76,
                left: `still die at the end—`,
                right: `till lives acquiesce,`
            },
            {
                unitMap: true,
                stanzaType: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 79,
                left: [
                    `like Odin's ashes back from`,
                    {
                        anchor: `the Society,`,
                        annotation: {
                            description: [
                                `In my dream, I am making sense of the news that day that a family friend had taken Odin's remains to the`,
                                {
                                    anchor: `Humane Society,`,
                                    wiki: `The_Humane_Society_of_the_United_States`
                                },
                                `which offers pet cremation services.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    }
                ],
                right: [
                    `by`,
                    {
                        anchor: `opened latches`,
                        annotation: {
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
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `undine`,
                                    wiki: `Undine`
                                },
                                `is a female nymph and the elemental of water. The term was coined by Paracelsus and is derived from the Latin word`,
                                {
                                    italic: `unda,`
                                },
                                `meaning "wave."`
                            ]
                        }
                    }
                ]
            },
            {
                time: 84,
                left: `which filled a chasm dug up underneath—`,
                right: `which spilled a basket among other things—`
            },
            {
                time: 87,
                left: `can that which kills a cat`,
                right: `a casket tilted back`
            },
            {
                time: 90,
                left: `spare his home if spread?`,
                right: [
                    `where its`,
                    {
                        // CONSIDER: portal: Hope chest in M?
                        anchor: `hopeless rests.`,
                        annotation: {
                            description: `Hope was all that remained in the box opened by Pandora. By contrast, upon having all the hard truths of the world revealed to me by Sasha, all I had left was my own hopeless state.`,
                            dotKeys: {
                                [REFERENCE]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                stanzaType: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 93,
                left: `You researched a gleam`,
                right: [
                    `Your`,
                    {
                        anchor: `seizures of spleen,`,
                        annotation: [
                            {
                                description: [
                                    `In`,
                                    {
                                        anchor: `Hippocratic medicine,`,
                                        wiki: `Humorism`
                                    },
                                    `black bile is the humour secreted by the spleen to induce melancholy.`
                                ]
                            },
                            {
                                description: `After the bullying began, my temperament changed. I became more cynical and sullen, and would confide to Sasha my vindictive thoughts.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        ]
                    }
                ]
            },
            {
                time: 95,
                left: [
                    `to be a`,
                    {
                        anchor: `guard's whistle`,
                        annotation: {
                            description: `Standing on the ocean beach, I notice a steel whistle buried in the sand. Once blown by a lifeguard to give warning, it is now forever lost. Some dangers come with no warning, after all.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `at your feet,`
                ],
                right: [
                    `you see the`,
                    {
                        anchor: `jarred sibyl`,
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `Cumaean Sibyl`,
                                    wiki: `Cumaean_Sibyl`
                                },
                                `was a Greek prophetess who was granted immortality but not eternal youth. T.S. Eliot's poem`,
                                {
                                    italic: {
                                        anchor: `The Waste Land`,
                                        wiki: `The_Waste_Land`
                                    }
                                },
                                `begins with an epigraph in which the Sibyl, hanging in a jar, is asked what she wants most. She replies that she wants most to die.`
                            ]
                        }
                    },
                    `had foreseen`
                ]
            },
            {
                time: 99,
                left: [
                    `and brought your raft behind the`,
                    {
                        anchor: `yellow-taped grills`,
                        annotation: {
                            description: `Barricade tape has been tied across the barbecue grills to prevent beachgoers from swimming in the shark-infested waters.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    }
                ],
                right: [
                    `as not for wrapping by a`,
                    {
                        anchor: `cellophane sylph,`,
                        annotation: {
                            description: [
                                `In the works of Paracelsus, the`,
                                {
                                    anchor: `sylph`,
                                    wiki: `Sylph`
                                },
                                `is the elemental of air, and is depicted as a fairy with wings of gauze.`
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
                left: [
                    `to`,
                    {
                        anchor: `stand onshore`,
                        annotation: {
                            portal: `stand_onshore`
                        }
                    },
                    `keen to drift`
                ],
                right: `who cannot warm he who didn't`
            },
            {
                time: 102,
                left: [
                    `if shark swarms withheld.`
                ],
                right: [
                    {
                        anchor: `impart warmth`,
                        // CONSIDER: Portal Foreshadow M?
                        annotation: {
                            description: `Cellophane is thin and see-through like gauze, but has the additional property of sealing in heat where heat is present. In hindsight, Sasha's thoughts towards me were no less transparent. While she empathised with my need to lash out, her tenderest feelings were strictly reserved for those who could show tenderness in return.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true,
                                [REFERENCE]: true
                            }
                        }
                    },
                    `himself.`
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: [
                            `Recording vocals in doublespeaker rhyme turned out to be trickier than I had assumed. The lines rarely lined up naturally, because even when speaking in rhythm, we tend to shorten or lengthen our syllables based on the relative strength of consonants, the spaces between words, and so on. I ended up improvising a system of`,
                            {
                                anchor: `ligature`,
                                wiki: `Ligature_(music)`
                            },
                            `to keep syllabic durations and offsets in sync.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: VERSES
            }
        ],
        [
            {
                time: 105,
                left: [
                    {
                        anchor: `Buoy bobs`,
                        annotation: {
                            description: `As buoys bob in the ocean, who's to say that this "boy" isn't also bobbing through life, oblivious to dangers lurking everywhere?`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `through sea serpents,`
                ],
                right: [
                    {
                        anchor: `Coin toss`,
                        annotation: {
                            description: `It was purely by chance that I suffered the misfortune of not being born Jewish.`,
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `to be hers from`
                ]
            },
            {
                time: 107,
                left: {
                    anchor: `shivering for shivs unsheathed.`,
                    annotation: [
                        {
                            // CONSIDER: Portal Kyon for shank?
                            description: [
                                `A`,
                                {
                                    anchor: `shiv`,
                                    wiki: `Shiv_(weapon)`
                                },
                                `is a stabbing weapon improvised by prison inmates. To wander a prison yard is to be in constant danger of getting shivved, and the schoolyard often felt like a training ground for a lifetime of vigilance.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        },
                        {
                            portal: `chivalry`
                        }
                    ]
                },
                right: {
                    anchor: `shivaree towards shivah seat`,
                    annotation: [
                        {
                            description: [
                                {
                                    anchor: `Shivaree`,
                                    wiki: `Charivari`
                                },
                                `is a folk custom in which a crowd loudly serenades a newlywed couple outside their home, while sitting`,
                                {
                                    anchor: `shivah`,
                                    wiki: `Shiva_(Judaism)`
                                },
                                `is a period of mourning in Judaism after a family member passes away. In other words, not being born Jewish has lost me any hope of a lifetime with Sasha in marriage until death.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        },
                        {
                            portal: `chivalry`
                        }
                    ]
                }
            },
            {
                time: 111,
                left: `As roller coasters of waves comfort sighs,`,
                right: [
                    `has`,
                    {
                        anchor: `pulled your floater away`,
                        annotation: {
                            description: `An off-centre floater on the surface of one's eye is impossible to stare at directly, and any attempt to do so will only end in frustrated tears. Pining after Sasha felt similarly futile, as she would always remain a fixed distance apart from me, regardless of my frantic efforts.`,
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
                left: [
                    `you frame`,
                    {
                        anchor: `silhouettes of torn rides`,
                        annotation: {
                            description: `Watching the ocean waves rise and fall, I am reminded of roller coasters that shaped the skyline in my youth, which were erected and dismantled with a similar transience.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ],
                right: `You chase till dew sheds from your eyes`
            },
            {
                unitMap: true,
                stanzaType: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 117,
                left: `in your dim, lingering gaze,`,
                right: `with your beleaguered remains,`
            },
            {
                time: 120,
                left: `a victim of erosion.`,
                right: `amidst dustbunnies frozen.`
            },
            {
                unitMap: true,
                stanzaType: PRECHORUS
            }
        ],
        [
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
                        annotation: {
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
                    `has come?`,
                ]
            },
            {
                unitMap: true,
                unitClassName: LEFT,
                stanzaType: BRIDGE
            },
        ],
        [
            {
                time: 135,
                lyric: [
                    `Can a`,
                    {
                        anchor: `holed up hostage`,
                        annotation: {
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
                        annotation: {
                            description: `It seemed bizarre to me that if a true spiritual path did indeed exist, then it wouldn't offer a reward so obviously desirable, for which I could mindlessly strive without being troubled by existential questions on the nature of souls.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        },
                    },
                    `and just play dumb?`
                ]
            },
            {
                unitMap: true,
                unitClassName: `${RIGHT} ${OVERLAP}`,
                stanzaType: BRIDGE,
                subsequent: true
            }
        ],
        [
            {
                time: 141,
                lyric: `But in time, wouldn't you find`
            },
            {
                time: 144,
                lyric: `life is simply much too long?`
            },
            {
                unitMap: true,
                unitClassName: `${LEFT} ${OVERLAP}`,
                stanzaType: BRIDGE,
                subsequent: true
            }
        ],
        [
            {
                time: 147,
                left: [
                    `But for a`,
                    {
                        // CONSIDER: Portal to Ash Wednesday?
                        anchor: `foetus force-fed,`,
                        annotation: {
                            description: `Most maddening of all was that one has no say in being brought into this world, given how distressing the knowledge of one's mortality must always be.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `born preaborted,`
                ],
                right: [
                    `Yet your`,
                    {
                        anchor: `defeat of tortoise,`,
                        annotation: {
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
                left: `your ouija board said, "Son, just hum along."`,
                right: `sworn feat aforesaid, doesn't come anon.`
            },
            {
                unitMap: true,
                unitClassName: OVERLAP,
                stanzaType: BRIDGE,
                subsequent: true
            }
        ],
        [
            {
                time: 153,
                centre: {
                    italic: `(electric mandolin)`
                }
            },
            {
                unitMap: true,
                stanzaType: SOLO
            }
        ],
        [
            {
                time: 166,
                left: [
                    `Though`,
                    {
                        anchor: `no slave parts these seas,`,
                        annotation: {
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
                right: [
                    `Though, no`,
                    {
                        anchor: `grey starling's beak`,
                        annotation: {
                            portal: `grey_starling`
                        }
                    }
                ]
            },
            {
                time: 168,
                left: [
                    `then returns them as a`,
                    {
                        anchor: `buffer zone…`,
                        annotation: {
                            description: `God then brought the waters together behind Moses and the Israelites, drowning the Egyptian army in pursuit. Unfortunately, the certainty of death following me at every turn would not be overcome so easily.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [REFERENCE]: true
                            }
                        }
                    }
                ],
                // CONSIDER: Portal: Nora Barnacle in Good Night, Sita?
                right: `can reach urchins smashed from undertows…`
            },
            {
                unitMap: true,
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 173,
                left: [
                    `The sudsy ocean shapes its`,
                    {
                        anchor: `padded bed,`,
                        annotation: {
                            description: `As I slowly make peace with the inevitable, the ocean begins to feel more calm and inviting. But my dream is also ending, and I will soon awake in the comfort of a bed.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    }
                ],
                right: `But suddenly Odin's day is at its end;`
            },
            {
                time: 177,
                left: `which hitherto snubbed and spurned a wreck,`,
                right: [
                    {
                        anchor: `his litter`,
                        annotation: {
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
                left: [
                    `while`,
                    {
                        anchor: `mermaids smile`,
                        annotation: {
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
                right: [
                    `while`,
                    {
                        anchor: `Thursday's child`,
                        properNoun: true,
                        annotation: {
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
                left: [
                    `past a`,
                    {
                        anchor: `guileless garden gnome…`,
                        annotation: [
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
                right: [
                    `has a`,
                    {
                        anchor: `mile less far to go…`,
                        annotation: {
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
            },
            {
                unitMap: true,
                stanzaType: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 186,
                centre: {
                    italic: `(Odin's theme)`
                }
            },
            {
                unitMap: true,
                stanzaType: OUTRO
            }
        ],
        [
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
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
    ],
    tasks: [
        {
            taskName: `review tense and categorisation`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `tenses and categorisation`,
            workedHours: 12,
            neededHours: 12
        },
        {
            taskName: `annotations`,
            workedHours: 55,
            neededHours: 55
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
            taskName: `afterword annotations`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `music annotations`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `rough illustration synopses`,
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
