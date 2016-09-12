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
        narrative: `Upon learning of my brother's autism, my parents were too harried to notice that I was being bullied at school. In guilt, they later indulged every whim I had to find myself in my own way. But as I got older, they grew concerned that I wasn't maturing as well. On top of this, they were devastated when I left Sita, whom they adored. Naturally, I felt crushed by the weight of having disappointed them. Still, I had a master plan to follow, and wasn't about to change my ways.`,
        music: [
            `I originally began writing this song to describe a nightmare I had, but abandoned it after I forgot what made the nightmare scary. I revived it here, thinking its gloomy chords and disjointed tempo changes would be perfect for conveying a lecture delivered by a nightmarish version of my parents. This also begins a three-song medley à la`,
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
                            description: `The tree finally sacrifices herself, allowing the boy to chop down her trunk to build a boat. When the boy returns as an old man, the tree is now just a stump and can only offer a place to sit and rest. But in their claim to be stumped, my parents are also feigning to be oblivious to the outcome of my story.`
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
                                `Like Grover, I was also a character trapped within a self-referential work, hoping to shape the outcome towards which I was being relentlessly thrust. Unlike Grover, however, I had a funny inkling of who the monster at the end of`,
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
                            description: `Also, a future "soldier of fortune." My parents lament that the opportunism born from my ego has led me to squander all I had that was good with Sita, in favour of more unsavoury and foolhardy pursuits.`
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
                            description: `Or else, blissfully "endorphined." Being perpetually inebriated allowed me to ignore my reality of having parents whose high expectations I failed to meet.`
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
                            description: `Though the bullies ruled over me, the mail-order cult promised that all would be made right once a spaceship was built. Patiently waiting for corrective justice thus became my strategy in life. Also, "a pawn perches over queenship." In the game of chess, the lowly pawn can become a mighty queen by steadily clambering towards the other side of the board.`
                        }
                    },
                    {
                        anchor: `earth right now your tourist store…`,
                        annotation: {
                            description: `The mail-order cult warned me not to grow attached to earthly concerns, for I was just a visitor. Or else, "birthright now you're to restore." Having had my head filled with visions of great accomplishments as a child, I assumed that my rightful place was to be recognised for them, so I was committed to fulfilling my end of that bargain.`
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
                time: 40,
                lyric: `But distracted by your brother's tantrums,`
            },
            {
                time: 44,
                lyric: `we couldn't imagine your mail-order cult,`
            },
            {
                time: 47,
                lyric: [
                    `till they called,`,
                    {
                        anchor: `suspecting you of huffing,`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ]
            },
            {
                time: 50,
                lyric: [
                    `then we caught you`,
                    {
                        anchor: `stuffing twenties`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `in an envelope…`
                ]
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
                        anchor: `your hamartia`,
                        annotation: {
                            description: `In Greek tragedy, hamartia is the character flaw that leads to a protagonist's downfall. (I've since learned that the accent is on the third syllable. However, my English teacher pronounced it as I have, so I plead miseducation.) A famous example is Oedipus, whose arrogance leads him to believe that prophecy can be escaped. Here, my parents ask whether I've learned the lesson of Oedipus, while slyly mocking my past belief of being born from the stars, or in their words, "a Martian."`
                        }
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
                lyric: [
                    `you made a`,
                    {
                        anchor: `bunker that shuts airtight`,
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
                        // TODO: In music commentary, say that counter melody was originally lead melody.
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
                lyric: [
                    `But then, my`,
                    {
                        anchor: `little prince,`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ]
            },
            {
                time: '?',
                lyric: [
                    `safe on your`,
                    {
                        anchor: `tiny planet`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `where none else fit,`
                ]
            },
            {
                time: 80,
                lyric: [
                    `you finally granted their`,
                    {
                        anchor: `nutshells are rigged,`,
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
                            anchor: `Scattered your beans`,
                            annotation: {
                                description: ``
                            },
                            todo: true
                        }
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
                lyric: [
                    `Now suddenly dressed to play, you`,
                    {
                        anchor: `drowned your stutter,`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ]
            },
            {
                time: 89,
                lyric: [
                    `smugly prepped to`,
                    {
                        anchor: `haze the new latecomers.`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ]
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
                lyric: [
                    `But have you heard, my beloved`,
                    {
                        anchor: `Rama king,`,
                        properNoun: true,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `the`,
                    {
                        anchor: `testifiers' lore?`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ]
            },
            {
                time: 106,
                lyric: [
                    `A`,
                    {
                        anchor: `nation paused`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `to watch you fail your Sita on repeat for evermore!`
                ]
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
                lyric: [
                    `your idol who riled you when you saw that you`,
                    {
                        anchor: `two were tied?`,
                        annotation: {
                            description: ``
                        },
                        todo: true
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
                time: 127,
                lyric: [
                    `With bride you bridled in this perfect`,
                    {
                        anchor: `duel match,`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ]
            },
            {
                time: 132,
                lyric: [
                    `and so one night you`,
                    {
                        anchor: `chalked the sidewalks`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `slurring`,
                    {
                        anchor: `Valmiki's chant.`,
                        properNoun: true,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ]
            },
            {
                time: 138,
                lyric: [
                    `When`,
                    {
                        anchor: `wakened from the siren,`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `you found spelled out in`,
                    {
                        anchor: `dead ants:`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `____…`
                ]
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
                    `No`,
                    {
                        anchor: `well worn sari`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `could sway you from a`,
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
                            italic: [
                                `Your`,
                                {
                                    anchor: `dulling gold`,
                                    annotation: {
                                        description: ``
                                    },
                                    todo: true
                                },
                                `now gone…`
                            ]
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
                lyric: [
                    `Stubborn harpies can't draw this contest`,
                    {
                        anchor: `to be one!`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ]
            },
            {
                unitMap: true,
                subStanza: [
                    {
                        time: '?',
                        // TODO: Move Cremated overview part about Sita here?
                        lyric: {
                            italic: [
                                `…traded in for the`,
                                {
                                    anchor: `trophy blondes.`,
                                    annotation: {
                                        description: ``
                                    },
                                    todo: true
                                }
                            ]
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
                lyric: [
                    `what's left of what these`,
                    {
                        anchor: `faces you flip override,`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ]
            },
            {
                time: 165,
                lyric: [
                    `and all these`,
                    {
                        anchor: `pages you've ripped`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `from your spine`
                ]
            },
            {
                unitMap: true,
                topSideStanza: [
                    {
                        lyric: `Through tatters of sky,`
                    },
                    {
                        lyric: [
                            `their`,
                            {
                                anchor: `sun tinkles light`,
                                annotation: {
                                    description: ``
                                },
                                todo: true
                            }
                        ]
                    },
                    {
                        lyric: `in needling chimes`
                    },
                    {
                        lyric: [
                            `that`,
                            {
                                anchor: `weave through the vines,`,
                                annotation: {
                                    description: ``
                                },
                                todo: true
                            }
                        ]
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
                    `your thoughts`,
                    {
                        anchor: [
                            `surrendered for`,
                            {
                                italic: `Bobtail`
                            },
                            `'s sake,`
                        ],
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
                            anchor: `cast on your peons,`,
                            annotation: {
                                description: ``
                            },
                            todo: true
                        }
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
            workedHours: 21,
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
