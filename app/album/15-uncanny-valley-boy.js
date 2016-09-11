import { RIGHT, OVERLAP, VERSES, PRECHORUS, CHORUS, BRIDGE, OUTRO, RHYME, RESPONSE, BACKING } from 'helpers/constants'

module.exports = {
    title: {
        anchor: `Uncanny Valley Boy`,
        annotation: {
            description: `The uncanny valley is a theory that human replicas feel more repulsive the further they grow lifelike while remaining less than convincingly so. And as I grew older while remaining less than convincing as a grownup, I had to wonder if this one-time Valley boy from the San Fernando Valley elicited a similar revulsion.`
        }
    },
    doubleColumns: true,
    totalTime: 204,
    overviews: {
        narrative: `Upon learning of my brother's autism, my parents were too harried to notice that I was being bullied at school. In guilt, they later indulged every whim I had to find myself in my own way. But as I got older, they grew concerned that I wasn't maturing as well. On top of this, they were devastated when I left Sita, whom they adored. Naturally, I felt crushed by the weight of having disappointed them. Still, I wasn't about to change my ways.`,
        music: [
            `I originally began writing this song to describe a nightmare I had, but abandoned it when I forgot what made the nightmare scary. I revived it here, thinking its gloomy chords and disjointed tempo changes would be perfect for conveying a lecture delivered by a nightmarish version of my parents. This also begins a three-song medley à la`,
            {
                italic: `Abbey Road`
            },
            `by the Beatles, which provides a nice push towards the album's finish.`
        ]
    },
    lyrics: [
        [
            {
                time: 14,
                lyric: [
                    {
                        anchor: `Beta,`,
                        annotation: {
                            description: [
                                `In Hindi,`,
                                {
                                    // बेटा
                                    italic: `beta`
                                },
                                `means "son." My parents had taken Sita's side so unequivocally that I now imagine them addressing me as an Indian parent would.`
                            ]
                        }
                    },
                    `come`,
                    {
                        anchor: `wax prophetic`,
                        annotation: {
                            description: `The common expression is to "wax poetic," of course. Here, like ghosts of days yet to come, my parents invite me on a night journey to witness all that my naked ambitions will soon have wrought.`
                        }
                    },
                    `with me.`
                ]
            },
            {
                time: 17,
                lyric: [
                    `Rest your rump, boy, by your old`,
                    {
                        anchor: `giving tree.`,
                        annotation: {
                            description: [
                                `Shel Silverstein's`,
                                {
                                    italic: `The Giving Tree`
                                },
                                `is a children's book about a tree's nurturing love for a boy, and the increasingly self-sacrificing nature of her gifts as the boy grows into a man. Many read it as an allegory for unhealthy parent-child relationships.`
                            ]
                        }
                    }
                ]
            },
            {
                time: 21,
                lyric: [
                    {
                        anchor: `Stumped,`,
                        annotation: {
                            description: `The tree finally sacrifices herself, allowing the boy to chop down her trunk to build a boat. When the boy returns as an old man, the tree is now just a stump and can only offer a place to sit and rest. But in their claim to be stumped, my parents are also feigning to be oblivious to the disgraceful outcome of my story.`
                        }
                    },
                    `I ponder the`,
                    {
                        anchor: `forespoken monster`,
                        annotation: {
                            description: [
                                {
                                    italic: `The Monster at the End of This Book`
                                },
                                `is a Sesame Street children's book in which Grover tries to prevent the reader from reaching the last page of the book, fearful of the monster lying in wait. As it turns out, the only monster present at the end is Grover himself, much to his embarrassment.`
                            ]
                        }
                    },
                    `at the end of this`,
                    {
                        anchor: `book of yours…`,
                        annotation: {
                            description: [
                                `Like Grover, I was also a character trapped within a self-referential work, hoping to shape the outcome towards which I was being relentlessly propelled. Unlike Grover, however, I had a funny inkling of who the monster at the end of`,
                                {
                                    italic: `Bobtail`
                                },
                                `might prove to be.`
                            ]
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 27,
                lyric: [
                    `And you, for a future,`,
                    {
                        anchor: `sold your whole fortune`,
                        annotation: {
                            description: `Or else, a future "soldier of fortune." My parents lament that the opportunism born from my ego has led me to squander everything I had that was good with Sita, in favour of less savoury pursuits.`
                        }
                    }
                ]
            },
            {
                time: 31,
                lyric: [
                    `to live neutered, blissfully`,
                    {
                        anchor: `and orphaned.`,
                        annotation: {
                            description: `Or else, blissfully "endorphined." Being perpetually inebriated allowed me to ignore the reality of having parents whose high expectations I had failed to meet.`
                        }
                    }
                ]
            },
            {
                time: 35,
                lyric: [
                    {
                        anchor: `Upon purchase of a queen's ship,`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    {
                        anchor: `earth right now your tourist store…`,
                        annotation: {
                            description: ``
                        },
                        todo: true
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
                time: 40,
                lyric: `But distracted by your brother's tantrums,`
            },
            {
                time: 44,
                lyric: `we couldn't imagine your mail-order cult,`
            },
            {
                time: 47,
                lyric: `till they called, suspecting you of huffing,`
            },
            {
                time: 50,
                lyric: `then we caught you stuffing twenties in an envelope…`
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS
            }
        ],
        [
            {
                time: 54,
                lyric: [
                    `So do you believe`,
                    {
                        anchor: `your "hamartia"`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `now?`
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
                time: 61,
                lyric: `Mowed down by the tides,`
            },
            {
                time: '?',
                lyric: `and inundated under in unfair fights,`
            },
            {
                time: 67,
                lyric: `you made a bunker that shuts airtight`
            },
            {
                unitMap: true,
                topSideStanza: [
                    {
                        lyric: `Oh, bastard ingrate!`
                    },
                    {
                        lyric: `Some nights you wake,`
                    },
                    {
                        lyric: `climb and survey`
                    },
                    {
                        lyric: `the houses you've betrayed.`
                    }
                ],
                subStanza: [
                    {
                        time: '?',
                        lyric: {
                            italic: `to seal out their floods.`
                        }
                    }
                ],
                sectionClass: CHORUS,
                subsectionClass: RHYME,
                sideSectionClass: BACKING
            }
        ],
        [
            {
                time: 74,
                lyric: `But then, my little prince,`
            },
            {
                time: '?',
                lyric: `safe on your tiny planet where none else fit,`
            },
            {
                time: 80,
                lyric: `you finally granted their nutshells are rigged,`
            },
            {
                unitMap: true,
                topSideStanza: [
                    {
                        lyric: `Scattered your beans`
                    },
                    {
                        lyric: `over suburbia…`
                    }
                ],
                subStanza: [
                    {
                        time: '?',
                        lyric: {
                            italic: `and healed round your grudge…`
                        }
                    }
                ],
                sectionClass: CHORUS,
                subsectionClass: RHYME,
                sideSectionClass: BACKING
            }
        ],
        [
            {
                time: 86,
                lyric: `Now suddenly dressed to play, you drowned your stutter,`
            },
            {
                time: 89,
                lyric: `smugly prepped to haze the new latecomers.`
            },
            {
                time: 94,
                lyric: `This scheming crackpot vowed to clean the jackpot out this time around…`
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 100,
                lyric: `But have you heard, my beloved Rama king, the testifiers' lore?`
            },
            {
                time: 106,
                lyric: `A nation paused to watch you fail your Sita on repeat for evermore!`
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS
            }
        ],
        [
            {
                time: 111,
                lyric: `Did you find a rival in the goddess you once sought as prize—`
            },
            {
                time: 119,
                lyric: `your idol who riled you when you saw that you two were tied?`
            },
            {
                unitMap: true,
                sectionClass: PRECHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 127,
                lyric: `With bride you bridled in this perfect duel match,`
            },
            {
                time: 132,
                lyric: `and so one night you chalked the sidewalks slurring Valmiki's chant.`
            },
            {
                time: 138,
                lyric: `When wakened from the siren, you found spelled out in dead ants: ____…`
            },
            {
                unitMap: true,
                sectionClass: BRIDGE
            }
        ],
        [
            {
                time: 145,
                lyric: [
                    `No well worn sari could sway you from a`,
                    {
                        anchor: `fairer marathon!`,
                        annotation: {
                            description: `To add insult to injury, the women I left Sita for were usually white, which bothered her greatly.`
                        },
                        todo: true
                    }
                ]
            },
            {
                unitMap: true,
                subStanza: [
                    {
                        // TODO: Figure out times for these.
                        time: '?',
                        lyric: {
                            italic: `Your dulling gold now gone…`
                        }
                    }
                ],
                sectionClass: PRECHORUS,
                subsectionClass: RESPONSE
            }
        ],
        [
            {
                time: 152,
                lyric: `Stubborn harpies can't draw this contest to be one!`
            },
            {
                unitMap: true,
                subStanza: [
                    {
                        time: '?',
                        // TODO: Move Cremated overview part about Sita here?
                        lyric: {
                            italic: `…traded in for the trophy blondes.`
                        }
                    }
                ],
                sectionClass: PRECHORUS,
                subsectionClass: RESPONSE
            }
        ],
        [
            {
                time: 160,
                lyric: `Oh child of mine,`
            },
            {
                time: '?',
                lyric: `what's left of what these faces you flip override,`
            },
            {
                time: 165,
                lyric: `and all these pages you've ripped from your spine`
            },
            {
                unitMap: true,
                topSideStanza: [
                    {
                        lyric: `Through tatters of sky,`
                    },
                    {
                        lyric: `their sun tinkles light`
                    },
                    {
                        lyric: `in needling chimes`
                    },
                    {
                        lyric: `that weave through the vines,`
                    }
                ],
                subStanza: [
                    {
                        time: '?',
                        lyric: {
                            italic: `to find a cleared path`
                        }
                    }
                ],
                sectionClass: CHORUS,
                subsectionClass: RHYME,
                sideSectionClass: BACKING
            }
        ],
        [
            {
                time: 172,
                lyric: `in life's unbearable maze?`
            },
            {
                time: '?',
                lyric: `Then once for all to render it all fail-safe,`
            },
            {
                time: 178,
                lyric: [
                    `your thoughts surrendered for`,
                    {
                        italic: `Bobtail`
                    },
                    `'s sake,`
                ]
            },
            {
                unitMap: true,
                topSideStanza: [
                    {
                        lyric: `cast on your peons,`
                    },
                    {
                        lyric: `old and subservient.`
                    }
                ],
                subStanza: [
                    {
                        time: '?',
                        lyric: {
                            italic: `to five-year plans.`
                        }
                    }
                ],
                sectionClass: CHORUS,
                subsectionClass: RHYME,
                sideSectionClass: BACKING
            }
        ],
        [
            {
                time: 184,
                lyric: [
                    `Now son, before you embark on your`,
                    {
                        anchor: `great bildungsroman,`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ]
            },
            {
                time: 191,
                // TODO: Didi portal.
                lyric: [
                    `shouldn't you first be sure you've`,
                    {
                        anchor: `finally become someone?`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ]
            },
            {
                unitMap: true,
                topSideStanza: [
                    {
                        lyric: {
                            anchor: `Rama, Rama…`,
                            properNoun: true,
                            annotation: {
                                description: ``
                            },
                            todo: true
                        }
                    },
                    {
                        stanzaMap: true,
                        subStanza: [
                            {
                                lyric: {
                                    anchor: `…Maranatha!`,
                                    annotation: {
                                        description: ``
                                    },
                                    todo: true
                                }
                            }
                        ]
                    }
                ],
                sectionClass: OUTRO,
                sideSectionClass: BACKING,
                sideSubsectionClass: RESPONSE
            }
        ]
    ],
    tasks: [
        {
            taskName: `allow sub stanzas`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `annotations`,
            workedHours: 14,
            neededHours: 45,
            subtasks: [
                {
                    taskName: `split into dots`,
                    workedHours: 0,
                    neededHours: 3
                }
            ]
        },
        {
            taskName: `illustrations`,
            workedHours: 0,
            neededHours: 0,
            subtasks: [

            ]
        },
        {
            taskName: `restructure lyrics`,
            workedHours: 1,
            neededHours: 1
        }
    ]
}
