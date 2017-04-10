import { LEFT, RIGHT, OVERLAP, REFRAIN, VERSES, PRECHORUS, CHORUS, BRIDGE, INSTRUMENTAL, AFTERWORD, SONGWRITING, BACKSTORY, NARRATIVE, OBSERVATION, PUN, REFERENCE, DOT_STANZA_CONSTANT } from '../helpers/constants'

module.exports = {
    scenes: [
        {
            verseIndex: 0,
            description: `Bennett is lying on a mat on the floor. In the distance, he sees himself creeping out of the house in pitch darkness. Papers are strewn where he walked.`,
            actors: {
                preteenBennett: {
                    todo: true,
                    description: 'side, lying on floor, propped up'
                }
            }
        },
        {
            verseIndex: 13,
            description: `Bennett is stepping through the front gate. He sees himself in a rickshaw, driving away. The rickshaw leaves a trail.`,
            actors: {
                preteenBennett: {
                    todo: true,
                    description: 'side angle, peeking out from gate'
                }
            }
        },
        {
            verseIndex: 22,
            description: `Bennett is standing on the shore. He sees himself in the water, on a buoy. Footprints lead into the water.`,
            actors: {
                preteenBennett: {
                    todo: true,
                    description: 'side back, looking out to ocean'
                }
            }
        },
        {
            verseIndex: 38,
            description: `Bennett sits on the shore gazing at the Odin. Further ahead, another Bennett is making his bed on the beach. Footprints lead up to him.`,
            actors: {
                preteenBennett: {
                    todo: true,
                    description: 'side angle, crouched in sand, looking back'
                }
            }
        }
    ],
    tip: {
        description: 'placeholder tip'
    },
    doubleColumns: true,
    totalTime: 200,
    overview: `Taiwan showed me how differently I would have turned out had my parents not immigrated to America. And yet, I was still worlds away from what Sasha needed me to be. Life seemed as infinitely fluid as it was immovably fixed, and I wasn't sure which terrified me more. Our house cat Odin died of old age later that summer, just as I was exploring the idea of having faith. And yet, the eternal life promised by faith seemed no less terrifying to me than the finality of death.`,
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
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 8,
                left: `Lights off, from your`,
                right: [
                    {
                        anchor: `By lot,`,
                        annotation: {
                            description: [
                                `In the Book of Genesis,`,
                                {
                                    anchor: `Lot's wife`,
                                    wiki: `Lot%27s_wife`
                                },
                                `was turned into a pillar of salt when she looked back upon the city of Sodom. This is typically understood to suggest that the faithful cannot cohabit with the fallen. Also, lots are drawn by chance to decide an outcome, and it was my lot to be born a non-Jew.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
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
                            description: `The "asleep" voice in the doublespeaker set narrates a dream that confusedly melds the familiar setting of Los Angeles with the foreign sights of Taiwan. The dream begins abruptly, as I come out from the dusty crawl space beneath my bed to which I regularly snuck away as a child.`,
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
                                    anchor: `Tref`,
                                    wiki: `Treif`
                                },
                                `is the Yiddish word for food that is not kosher. Since it cannot be eaten, its only purpose is to break down into the soil. Similarly, as I was not a Jew, I could only ever be subsumed into the endless churn of surrounding peoples.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true
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
                            description: `My mother used to attach my drawings to our refrigerator. Here, they get snagged in the cobwebs trailing from my clothes, and scatter to the floor.`,
                            dotKeys: {
                                [BACKSTORY]: true,
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
                            description: `While my mother tried to raise us Buddhist, its core tenets never made much sense to me, partly because it clashed with the beliefs of my classmates. At the same time, it didn't make any more sense for them to be right and my mother wrong. So I was left with my conception of the universe as just light years of empty space.`,
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `instead`,
                    {
                        anchor: `stay unmoved;`,
                        annotation: {
                            description: `While the possibilities suggested by this vast expanse of the universe were countless, being with Sasha was not one of them.`
                        },
                        todo: true
                    }
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
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `I wanted to convey the despair in making binary choices whose differences are illusory, as well as the disorienting cycle between days amongst the foreign and dreams of the familiar. And so I invented a literary technique called doublespeaker rhyme, in which two sets of lyrics that rhyme syllable for syllable are sung in harmony, one in each audio speaker. It's essentially the musical version of a cinematic split screen.`,
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
                time: 20,
                left: [
                    `This latest piece you drew with`,
                    {
                        anchor: `crayons least whittled…`,
                        annotation: {
                            description: [
                                `When I first arrived in Taiwan, my aunt gave me a set of crayons as a gift. They were`,
                                {
                                    anchor: `soft pastels`,
                                    wiki: `Pastel`
                                },
                                `and thus more powdery than waxy, which was the standard for children's crayons there. This meant that they ran out quickly, so by the end of our trip, I was left with the least used colours. Similarly, coming to Taiwan forced me to depend on previously neglected skills, like speaking Taiwanese.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ],
                right: [
                    `In safest sleep, you`,
                    {
                        anchor: `ruminate on these riddles…`,
                        annotation: {
                            description: `The "awake" voice in the doublespeaker set echoes my thoughts as I lie on the floor mat, brooding over my ruined chance with Sasha, disheartened by the endless array of paths left to choose, and fearful over the certainty of forever, whether that forever is to be spent in life or in death.`,
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
                            description: `The rest of the house is asleep, snug under blankets. Of course, sheets are also pulled over bodies of the deceased.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
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
                        annotation: {
                            description: [
                                `In Greek mythology,`,
                                {
                                    anchor: `ichor`,
                                    wiki: `Ichor`
                                },
                                `is the golden blood of the gods. Going to sleep is like a nightly transfusion, insofar as the process of swapping out old blood for new always feels irksome, even when its restoring effect afterwards is guaranteed.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
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
                                `Buildings in Taiwan at the time made heavy use of iron grates and stone slabs, such that even ordinary living quarters had the feel of a mausoleum adorned with`,
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
                                `Exploring alchemy in the 16th century, `,
                                {
                                    anchor: `Paracelsus`,
                                    wiki: `Paracelsus`
                                },
                                `believed that nature is made up of four elements, each personified by a mythical creature. Since writing lyrics in doublespeaker rhyme was often daunting, I would keep myself going with fun little challenges. One of these was to mention each of the four elementals of Paracelsus. The`,
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
                            description: `I dreaded bedtime in Taiwan because the lack of ambient light kept my grandmother's house pitch black all through the night. Whenever I woke up to use the bathroom, I had to slowly tiptoe towards the door, guided only by a tiny sliver of moonlight peeking out from underneath.`,
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
                                {
                                    anchor: `Salamanders`,
                                    wiki: `Salamander`
                                },
                                `are amphibians that begin life living underwater, before exchanging gills for lungs through metamorphosis. So the same conditions needed for them to survive as larvae suddenly become deadly in the adult stage, and vice versa.`
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
                                `separates the realm of the living from the underworld. At night in my grandmother's house, the stairs leading down to the kitchen area felt similarly foreboding.`
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
                                `The crescent moon has a shape similar to the blade of the scythe wielded by the`,
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
                                    anchor: `"oriental"`,
                                    wiki: `Orient`
                                },
                                `was made into a pejorative by academic circles, not through common usage. I learned of its incorrectness at around the same time that the gay community was reclaiming the word "queer." The latter tactic made more sense to me.`
                            ],
                            dotKeys: {
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
                    // TODO: Descending stairs.
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
                        annotation: {
                            description: [
                                `A`,
                                {
                                    anchor: `rickshaw`,
                                    wiki: `Rickshaw`
                                },
                                `is a pedal-driven passenger vehicle. They were no longer in service by the time I arrived in Taiwan, but their recent prevalence could be inferred from photographs and traffic signs. Here, the uneven surface of the road causes one to jounce abruptly.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `from grating cracks.`
                ],
                right: [
                    `still, but`,
                    {
                        anchor: `missed bat mitzvahs`,
                        annotation: {
                            description: [
                                `A`,
                                {
                                    anchor: `bat mitzvah`,
                                    wiki: `Bar_and_Bat_Mitzvah`
                                },
                                `is a coming-of-age ritual undertaken by Jewish girls when they reach the age of twelve. Since I was in Taiwan at the time, I was unable to attend Sasha's bat mitzvah.`
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
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `While the two voices seem to proceed independently, each plants subtle ideas along the path of the other, much as our conscious thoughts affect our dreams, and vice versa. Here, for example, the mention of a staircase in the left voice precipitates the feeling of plummeting mentioned by the right voice.`,
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
                time: 50,
                left: [
                    `You seek the`,
                    {
                        anchor: `dunes once deemed a haven`,
                        annotation: {
                            description: [
                                `In the Book of Genesis,`,
                                {
                                    anchor: `Ishmael`,
                                    wiki: `Ishmael`
                                },
                                `was Abraham's first son. Though he would not inherit Abraham's house and was instead banished to the desert, God promised to make him a great nation. The narrator Ishmael in Herman Melville's`,
                                {
                                    italic: `Moby Dick`
                                },
                                `is an outcast like his namesake, although the wilderness he wanders is the ocean. It is to these metaphorical dunes of the ocean that I flee as well.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        },
                    }
                ],
                // TODO: portal: Future reference to Sita?
                right: `To dreams of whom does each one cave in`
            },
            {
                time: 53,
                left: `that was safe for a heathen…`,
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
                        annotation: {
                            description: [
                                `In middle school, students who completed two years of French class were eligible to attend a summer program in France. This excited Sasha, and so it excited me as well. In Greek mythology,`,
                                {
                                    anchor: `Paris`,
                                    wiki: `Paris_(mythology)`
                                },
                                `was also the prince of Troy, whose elopement with Helen of Sparta caused the Trojan War.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
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
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `The drums were the one instrument for which I had scored parts that were far more advanced than my actual abilities. So when it came time to record, I had to try many workarounds. On this song, I recorded the kick, snare, and toms separately from the cymbals.`,
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
                // TODO: Portal: Reference to insect in jar in Vegan Proclamation?
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
                                `is a verse form that originated in French poetry. It can also refer to anything round, like a ball. The "apple of one's eye" is an Old English misreading of a Biblical Hebrew idiom that more accurately translates to "ball of one's eye." My belief that I could be the object of Sasha's affection was based on a similar misreading.`
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
                                {
                                    anchor: `Zhuangzi`,
                                    wiki: `Zhuang_Zhou`
                                },
                                `was a 4th-century BCE Chinese philosopher. In his most famous musing, he recounts a dream in which he was a butterfly. When he awoke, however, he could not be sure whether he was then a man who dreamt he was a butterfly, or now a butterfly dreaming he is a man.`
                            ]
                        }
                    },
                right: [
                    `be`,
                    {
                        anchor: `stored in this neck?`,
                        annotation: {
                            description: [
                                `Due to a mistranslation, "man's swelling" in Hebrew entered the English lexicon as`,
                                {
                                    anchor: `"Adam's apple."`,
                                    wiki: `Adam%27s_apple`
                                },
                                `An apocryphal tale thus took shape that when`,
                                {
                                    anchor: `Adam`,
                                    wiki: `Adam`
                                },
                                `ate the forbidden fruit to gain knowledge of good and evil, a piece had lodged in his throat, which now marks his descendants as a permanent reminder of their sin. Similarly, my newly gained knowledge of where I stood with Sasha left me with a permanent lump in my throat.`
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
                                `was the Greek goddess of discord. As revenge for being denied invitation to a feast, she tossed a golden apple labelled "for the fairest" in their midst. When Paris was asked to judge its rightful owner, he chose Aphrodite, who rewarded him with the hand of Helen.`
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
                                `The`,
                                {
                                    anchor: `Humane Society`,
                                    wiki: `The_Humane_Society_of_the_United_States`
                                },
                                `offers pet cremation services.`
                            ]
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
                left: `can that which kills a cat spare his home if spread?`,
                right: [
                    `a casket tilted back where its`,
                    {
                        // TODO: portal: Hope chest in M?
                        anchor: `hopeless rests.`,
                        annotation: {
                            description: `Hope was all that remained in the box opened by Pandora. By contrast, upon having all the hard truths of the world revealed to me by Sasha, all I had left was my own hopeless state.`
                        },
                        dotKeys: {
                            [REFERENCE]: true,
                            [OBSERVATION]: true
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
                        annotation: {
                            description: [
                                `In`,
                                {
                                    anchor: `Hippocratic medicine,`,
                                    wiki: `Humorism`
                                },
                                `black bile is the humour secreted by the spleen to induce melancholy.`
                            ]
                        }
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
                            description: `That is, a steel whistle blown by a lifeguard as a warning, dropped by accident and now lost in the sand. Some dangers come with no warning, after all.`,
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
                                `is the elemental of air, and is typically described as a fairy with wings of gauze. Cellophane, of course, is thin and see-through like gauze, and is used to seal in heat.`
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
                // TODO: portal: Reference to passage in M?
                right: `impart warmth himself.`
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: [
                            `Recording vocals in doublespeaker rhyme turned out to be trickier than I had assumed. The lines rarely lined up naturally because even when speaking in rhythm, we tend to shorten or lengthen our syllables based on the relative strength of consonants, the spaces between words, and so on. I ended up improvising a system of`,
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
                            description: `But who's to say that this "boy" isn't also bobbing through life, oblivious to dangers lurking everywhere?`,
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `through sea serpents,`
                ],
                right: [
                    {
                        anchor: `Coin toss`,
                        annotation: {
                            description: `Again, it was purely by chance that I suffered the misfortune of not being born Jewish.`,
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
                    // REFERENCE: Shanks in Kyon?
                    annotation: {
                        description: [
                            `A`,
                            {
                                anchor: `shiv`,
                                wiki: `Shiv_(weapon)`
                            },
                            `is a stabbing weapon improvised by prison inmates. To wander a prison yard is to be in constant danger of getting shivved.`
                        ],
                        dotKeys: {
                            [OBSERVATION]: true
                        },
                        portal: `chivalry`
                    }
                },
                right: {
                    anchor: `shivaree towards shivah seat`,
                    annotation: {
                        description: [
                            {
                                anchor: `Shivaree`,
                                wiki: `Charivari`
                            },
                            `is a French folk custom in which a crowd loudly performs a mock serenade outside the home of newlyweds. Sitting`,
                            {
                                anchor: `shivah`,
                                wiki: `Shiva_(Judaism)`
                            },
                            `is a week-long mourning period in Judaism after a close relative has passed away. In other words, not being born Jewish has lost me any hope of spending a lifetime with Sasha in marriage until death.`
                        ],
                        dotKeys: {
                            [OBSERVATION]: true
                        },
                        portal: `chivalry`
                    }
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
                            description: `An off-centre floater on the surface of one's eye is impossible to look at directly, and any attempt will only end in frustrated tears. Pining after Sasha felt similarly futile, as she would always remain a fixed distance from me, regardless of all my frantic efforts.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [REFERENCE]: true
                            }
                        }
                    },
                    `from your sight.`
                ]
            },
            {
                time: 114,
                left: [
                    `you frame silhouettes of`,
                    {
                        anchor: `torn rides`,
                        annotation: {
                            description: `Roller coasters are raised up and torn down like ocean waves along the horizon, even if the process takes years, rather than seconds.`,
                            dotKeys: {
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
                lyric: `when your day to die has come?`
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
                lyric: `Can a holed up hostage`
            },
            {
                time: 137,
                lyric: [
                    `pray for`,
                    {
                        anchor: `soulless solace`,
                        annotation: {
                            description: `I found the notion cruel that I wasn't allowed to profess ignorance on the nature of my soul, and that my fate for all eternity should rest on beliefs formed under duress.`,
                            dotKeys: {
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
                // TODO: Portal Reference to abortion in Ash Wednesday?
                left: [
                    `But for a`,
                    {
                        anchor: `foetus force-fed,`,
                        annotation: {
                            description: `I found it weird that one is allowed no say in being brought into this world, given how quickly the exit will come, and how necessarily painful it must be.`,
                            dotKeys: {
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
                                `While the tortoise defeats the hare in`,
                                {
                                    anchor: `Aesop's fable,`,
                                    wiki: `The_Tortoise_and_the_Hare`
                                },
                                `the decisive advantage still lies with the hare, who only needs to stay awake next time to clinch the victory. Similarly, while tortoises are known to live well over a century, any one of us can beat them soundly in the race for longevity. All one needs to do is awaken to the call of faith, and not lie there like a "frozen dustbunny."`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true,
                                [REFERENCE]: true
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
                    italic: `(solo)`
                }
            },
            {
                unitMap: true,
                stanzaType: INSTRUMENTAL
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
                                `In the Book of Exodus, Moses leads the Israelites out of bondage in Egypt. Under God's command, Moses`,
                                {
                                    anchor: `parts the Red Sea,`,
                                    wiki: `Crossing_the_Red_Sea`
                                },
                                `allowing them to safely cross. God then returns the water, drowning the Egyptian army in pursuit behind them.`
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
                left: `then returns them as a buffer zone…`,
                // TODO: Portal: Nora Barnacle in Good Night, Sita?
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
                            description: `As I make peace with the inevitable, the ocean begins to feel more calm and inviting. But my dream is also ending, and I will soon awake in the comfort of a bed.`,
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
                // TODO: Portal: Grace Darling in Grasshoppers?
                left: `which hitherto snubbed and spurned a wreck,`,
                right: [
                    {
                        anchor: `his litter`,
                        annotation: {
                            description: `Referring to the disposal of Odin's cat litter, of course, but also to his lack of progeny, given that he was neutered. At the time, my own odds of leaving behind a litter seemed better by just a sliver.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `to`,
                    {
                        anchor: `dust and earth`,
                        annotation: {
                            description: `As I fall asleep, my thoughts turn to the ground from which I will soon emerge in my dream.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `was swept,`
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
                                `examines themes of stunted growth and missed opportunities. The poem ends with the narrator bemoaning that while the mermaids may sing, they do not sing for him. Similarly, while my resignation has turned the sea serpents into smiling mermaids, they do not smile for me.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `past a`,
                    {
                        anchor: `guileless garden gnome…`,
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `gnome,`,
                                    wiki: `Gnome`
                                },
                                `a small humanoid who lives underground, is the elemental of earth in Paracelsus's writings. Garden gnomes are lawn ornaments, some of which stand motionless before the yawning infinite, like me, staring blankly with a nervous grin.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true
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
                            description: [
                                {
                                    anchor: `"Monday's Child"`,
                                    wiki: `Monday%27s_Child`
                                },
                                `is a nursery rhyme that predicts a child's fortune based on day of birth. Wednesday is literally "Odin's day" in Old English, and I was born on a Thursday. The rhyme promises that "Thursday's child has far to go," and indeed, the distance I had left to cover felt dispiritingly vast. Still, I was now one day closer than when the day began…`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `has a mile less far to go…`
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
                    italic: `(outro)`
                }
            },
            {
                unitMap: true,
                stanzaType: INSTRUMENTAL
            }
        ],
        [
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: [
                            `I stayed in touch with Sasha over the years. After the album's release went nowhere, I moved to New York City to regain my bearings, and reconnected with her there. As it became clear that we were dating, I undertook a yearlong course of study required for conversion to Judaism. We didn't last long enough for me to stand before the`,
                            {
                                anchor: `beit din,`,
                                wiki: `Beth_din`
                            },
                            `or rabbinical court, however, which is the final step. So, I'm still not Jewish.`
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
            taskName: `sort out past and present tense`,
            workedHours: 0,
            neededHours: 3
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
