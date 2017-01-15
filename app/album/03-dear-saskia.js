import { VERSES, PRECHORUS, CHORUS, AFTERWORD, BACKSTORY, NARRATIVE, OBSERVATION, PUN, REFERENCE, SONGWRITING } from 'helpers/constants'

// TODO: Music annotations: Beatles, passive-aggressiveness, instruments
module.exports = {
    title: {
        anchor: `Dear Saskia`,
        annotation: {
            description: `Sasha's given name was actually Saskia, but because this was difficult for children to pronounce, she had gone by the nickname of Sasha her entire life.`
        }
    },
    scenes: [
        {
            verseIndex: 0,
            description: `Puppets of Bennett and family are crossing a rope bridge that spans several mountains in Taiwan.`,
            characters: {
                puppetFamily: 5
            }
        },
        {
            verseIndex: 5,
            description: `In Bennett's thought bubble, there is a drawing of him and Sasha on his sketchpad, together exploring the mountains of Taiwan.`,
            characters: {
                puppetFamily: 5,
                preteenBennettDrawing: 1,
                sashaDrawing: 1
            }
        },
        {
            verseIndex: 12,
            description: `In Bennett's thought bubble, he recollects sitting one bus seat behind Sasha on the bus. She is chatting flirtatiously with a boy seated across from her who is wearing a yarmulke.`,
            characters: {
                puppetFamily: 5,
                preteenBennett: 1,
                Sasha: 1,
                jewishBoy: 1
            }
        },
        {
            verseIndex: 20,
            description: `In Bennett's thought bubble, he is being bullied by an older boy. Sasha is lecturing the bully, telling him to leave Bennett alone.`,
            characters: {
                puppetFamily: 5,
                Sasha: 1,
                preteenBennett: 1,
                bully: 1
            }
        },
        {
            verseIndex: 30,
            description: `In Bennett's thought bubble, there is a drawing of Bennett by himself on one continent, and Sasha and a Jewish boy on another, with an ocean separating them.`,
            characters: {
                puppetFamily: 5,
                preteenBennettDrawing: 1,
                sashaDrawing: 1,
                jewishBoyDrawing: 1
            }
        }
    ],
    tip: {
        description: 'placeholder tip'
    },
    totalTime: 171,
    overview: `Sasha was a childhood friend, as well as my first crush. The strength she drew from her Jewish identity fascinated me, as I felt no cultural or religious pull of my own. But this clued me in on a cruel paradox. Namely, that nothing comes from longing to share in someone's faith and roots, which stay strong precisely by not being shared. Sasha moved away in middle school, just as I began dealing with bullies. That summer, I wrote her a letter on a family trip to Taiwan.`,
    lyrics: [
        [
            {
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
                    annotation: {
                        description: [
                            `As a kid, I marvelled at`,
                            {
                                anchor: `The Beatles`,
                                wiki: `The_Beatles`
                            },
                            `for weaving melodies and chords so seamlessly. This song began life as an overzealous attempt to match their form and style. In the end, it suffered from overthinking, and I put it away in disgust. Years later, I realised that its overwrought nature was exactly what my letter to Sasha called for, and trotted it back out. The passive-aggressive lyrics are matched in texture by screeching woodwinds and scratch tones on violins.`
                        ],
                        dotKeys: {
                            music: true
                        }
                    }
                }
            }
        ],
        [
            {
                time: 0,
                centre: `Dearest Sasha,`
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 7,
                lyric: [
                    `It's nearing autumn here with`,
                    {
                        anchor: `record highs.`,
                        annotation: {
                            description: `It's hard to begin writing a letter. But one can always talk about the weather.`,
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 10,
                lyric: `Is it searing in Boston? Hope this letter finds`
            },
            {
                time: 13,
                lyric: [
                    `your`,
                    {
                        anchor: `first semester`,
                        annotation: {
                            description: `My family spent the entire summer in Taiwan. By the time we were to get back to the States, Sasha would have already moved to Boston and begun the new school year.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `fine while I'm out of town…`
                ]
            },
            {
                unitMap: true,
                sectionClass: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 18,
                lyric: [
                    {
                        anchor: `You'd love Taiwan,`,
                        annotation: {
                            description: `As we toured the countryside with our Taiwanese cousins, I would add to my mental list of all the things I could share with Sasha one day. I think this might get at why I've never felt strongly about being Taiwanese. Until one's culture can be shared with someone else, there doesn't seem to be any real point.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `surrounded by walls of mountains,`
                ]
            },
            {
                time: 22,
                lyric: `their peaks sealed and shielded by foggy clouds.`
            },
            {
                time: 26,
                lyric: `Beneath this ceiling yields the scene a reeling feel`
            },
            {
                time: 30,
                lyric: [
                    `of some`,
                    {
                        anchor: `giant's house.`,
                        annotation: {
                            description: `My most vivid memory is of standing in the middle of a lush valley. The ground was completely level, the surrounding mountains were almost vertical, and a translucent blanket of clouds covered the sky, dipping below the mountain peaks. I felt like a tiny guest in a giant's house.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 33,
                lyric: `So… before I left, you said`
            },
            {
                time: 37,
                lyric: [
                    `I should`,
                    {
                        anchor: `keep your kid name,`,
                        annotation: {
                            description: `Sasha decided that, once in Boston, she would start to go by her given name of Saskia. I asked her if I should start calling her Saskia as well. She said no, that it would be nice to always be reminded of which friends knew her first.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `with everything it meant.`
                ]
            },
            {
                time: 41,
                lyric: [
                    `But then in your embrace, I felt you`,
                    {
                        anchor: `prepped to shed…`,
                        annotation: {
                            description: `Of course, it's no comfort to be cherished as an old friend by someone so visibly eager to dive into the new. Hugging Sasha for the last time felt like clinging onto the outer shell of someone ready to moult and fly away. She was also literally "prepped," in that she was to begin enrollment at a preparatory school in Boston.`,
                            dotKeys: {
                                [BACKSTORY]: true,
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
                sectionClass: PRECHORUS
            }
        ],
        [
            {
                time: 48,
                lyric: [
                    `And I'd reflect inside`,
                    {
                        anchor: `withering`,
                        annotation: {
                            portal: `withering`
                        }
                    },
                    {
                        anchor: `amber eyes—`,
                        annotation: {
                            description: [
                                `Sasha's eyes were of an amber colour. Also,`,
                                {
                                    anchor: `amber`,
                                    wiki: `Amber`
                                },
                                `is fossilised tree resin that sometimes preserves the remains of trapped insects from epochs past.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 52,
                lyric: [
                    {
                        anchor: `your pupil's pupal fly,`,
                        annotation: {
                            description: `While I reflect on my feelings for Sasha, petrified at the thought of losing her, I was also literally reflected in her eyes, seeing myself as a petrified larva that never had a chance to moult.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `a pet petrified—`
                ]
            },
            {
                time: 56,
                lyric: [
                    `with you raving over how`,
                    {
                        anchor: `he's getting you`,
                        annotation: {
                            description: `Everyone I had known Sasha to crush on was Jewish, and these crushes in turn motivated her to be a better Jew. I was frustrated that anyone who could be part of this positive feedback loop instantly had the winning advantage in "getting her."`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 64,
                lyric: [
                    `staying kosher. Though, you know,`,
                    {
                        anchor: `I would have too…`,
                        annotation: {
                            description: `But it seemed obvious to me that if Sasha were to want me, then I would certainly convert to Judaism.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: CHORUS
            }
        ],
        [
            {
                time: 73,
                lyric: [
                    `And I sniffled daily when you`,
                    {
                        anchor: `skipped a grade.`,
                        annotation: {
                            description: `I panicked when Sasha was allowed to skip the third grade, as this opened new vistas for her that necessarily excluded me. With middle school now underway, I was reminded of this panic as Sasha navigated with seeming ease the same social landscape that I found so treacherous.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 77,
                lyric: `One bus seat up you moved, letting rippled braids`
            },
            {
                time: 80,
                lyric: [
                    `caress, sun-streaked and loose, a`,
                    {
                        anchor: `wet-cheeked papoose`,
                        annotation: {
                            description: [
                                `Over time, Sasha and I sat together less frequently on the schoolbus. One afternoon, as her hair blew in my face from the seat ahead of mine, I realised that we were no longer peers, roughly equal in maturity. I felt like a`,
                                {
                                    anchor: `papoose,`,
                                    wiki: `Papoose`
                                },
                                `or a Native American child, strapped to a basket on his mother's back, in anguish over having to start walking on his own.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 84,
                lyric: `sadly weaned from you…`
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 88,
                lyric: `Whom I knew I'd lose the day,`
            },
            {
                time: 92,
                lyric: `you flew enraged and shooed them from their game;`
            },
            {
                time: 95,
                lyric: [
                    `untied this`,
                    {
                        anchor: `"tetherboy,"`,
                        annotation: {
                            description: `In one incident, a bully intentionally punched the "tetherball" while I hadn't yet cleared the court, getting me tangled in its rope and knocking my head against the pole. It's also assumed by some that children kept on a tether by overprotective parents will later fail to fend for themselves.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true,
                                [PUN]: true,
                                [REFERENCE]: true
                            }
                        }
                    },
                    `soothing in your lecture voice.`
                ]
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS
            }
        ],
        [
            {
                time: 103,
                lyric: [
                    `Oh but Sasha, if`,
                    {
                        anchor: `anarchy reigns,`,
                        annotation: {
                            description: `It was weird to be taught in history class that anarchy devolves into tyranny, and then to walk onto the quad and witness this very principle in action.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 107,
                lyric: [
                    `then no one lives when`,
                    {
                        anchor: `narcing to the aides,`,
                        annotation: {
                            description: [
                                `To narc is to be a snitch, much like the narcotics officers who gather intelligence on drug dealers by going undercover as high school students.`
                            ],
                            dotKeys: {
                                [REFERENCE]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 110,
                lyric: [
                    `who shrug when thus annoyed, yawning,`,
                    {
                        anchor: `"Boys will beat boys…"`,
                        annotation: {
                            description: `No less than boys will "be" boys. It caught me off guard that the school aides typically declined to intervene on behalf of the victims of bullying, as if such predation was natural to the middle school ecosystem.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [PUN]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 118,
                lyric: `Well Sasha… okay, you saw the cuts.`
            },
            {
                time: 122,
                lyric: [
                    `But though my`,
                    {
                        anchor: `jaw was stuck,`,
                        annotation: {
                            description: `In another incident, a bully snuck up from behind and put me in a chokehold while I was waiting for the schoolbus. This left me with a dislocated jaw that still troubles me from time to time.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `so now I`,
                    {
                        anchor: `talk Canuck,`,
                        annotation: {
                            description: [
                                `The slang term`,
                                {
                                    anchor: `Canuck`,
                                    wiki: `Canuck`
                                },
                                `refers to a Canadian. After the chokehold incident, I would clench my jaw to prevent it from locking whenever I spoke. This developed into a peculiar habit of pronunciation that some to this day mistake for a`,
                                {
                                    anchor: `Canadian accent.`,
                                    wiki: `Canadian_raising`
                                }
                            ],
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 126,
                lyric: `there's been plenty days I've really been through worse.`
            },
            {
                time: 134,
                lyric: [
                    `Anyway, I'm feeling healed. Still,`,
                    {
                        anchor: `hugging hurts…`,
                        annotation: {
                            description: `While the incident certainly caused a few bruises, hugging Sasha hurt in more than just a literal sense.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: CHORUS
            }
        ],
        [
            {
                time: 143,
                lyric: `And Sasha, I know you'll have them all,`
            },
            {
                time: 147,
                lyric: [
                    `while if I last the fall`,
                    {
                        anchor: `playing possum`,
                        annotation: {
                            description: [
                                `To avoid confrontation, an opossum will faint and remain comatose in order to create the impression of being dead, which is known as`,
                                {
                                    anchor: `"playing possum."`,
                                    wiki: `Apparent_death`
                                },
                                `Similarly, I didn't see any way out of the next few years except to periodically exit my body at will and hope for the best.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 151,
                lyric: [
                    `is a toss-up. But where some`,
                    {
                        anchor: `haemophile`,
                        annotation: {
                            description: [
                                {
                                    anchor: `Haemophilia`,
                                    wiki: `Haemophilia`
                                },
                                `is a disease in which blood cannot clot properly, leading to continuous bleeding.`
                            ]
                        }
                    }
                ]
            },
            {
                time: 154,
                lyric: `might bleed the Nile to nausea,`
            },
            {
                time: 158,
                lyric: `I can wash up, and hope the bastards croak,`
            },
            {
                time: 162,
                lyric: [
                    `on`,
                    {
                        anchor: `rat turds choked.`,
                        annotation: {
                            description: `I wasn't sure how to end a song about a painful stage of my life that seems comical in retrospect. I decided I was happier to err on the side of humour.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [SONGWRITING]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
                    annotation: {
                        description: `I never lost touch with Sasha. After I finished this album and moved to New York, we reconnected and dated for a while.`,
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
            taskName: `music annotations`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `sort out past and present tense`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `illustrations`,
            workedHours: 0,
            neededHours: 0,
            subtasks: [

            ]
        },
        {
            taskName: `annotations`,
            workedHours: 24,
            neededHours: 24
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
            taskName: `afterword annotations`,
            workedHours: 1,
            neededHours: 1
        }
    ]
}
