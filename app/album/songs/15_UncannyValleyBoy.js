import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGWRITING
} from 'constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    CODA,
    INTRO,
    OUTRO,
    RHYME,
    RESPONSE,
    BACKING,
    IS_DOT_UNIT
} from 'constants/lyrics'

export default {
    title: 'Uncanny Valley Boy',
    totalTime: 204,
    overview: `Upon learning of my brother's autism, my parents were too harried to notice that I was being bullied at school. In guilt, they later indulged every whim I had to find myself in my own way. But as I got older, they grew concerned that I wasn't maturing as I went. On top of this, they were devastated when I left Sita, whom they adored. Naturally, I felt crushed by the weight of having disappointed them. Still, I had a master plan to follow, and wasn't about to change my ways.`,
    lyricUnits: [
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: [
                            `The`,
                            {
                                anchor: `uncanny valley`,
                                wiki: `Uncanny_valley`
                            },
                            `is a theory that human replicas become more repulsive to us as they grow further lifelike, insofar as they remain less than convincingly so. And as I grew older while remaining less than convincing as a grownup, I had to wonder if this San Fernando "Valley boy" now elicited a similar revulsion.`
                        ],
                        dotKeys: {
                            [OBSERVATION]: true,
                            [PUN]: true
                        }
                    }
                }
            }
        },
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `I originally began writing this song after waking from a horrid nightmare, but abandoned it after all my attempts to describe the nightmare to others only elicited laughter. I revived it here, thinking its gloomy chords and disjointed tempo changes would be perfect for conveying a lecture delivered by a nightmarish version of my parents.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: INTRO
            },
            lyricUnit: [
                {
                    time: 0,
                    centre: {
                        italic: `(intro)`
                    }
                }
            ]
        },
        {
            unitMap: {
                stanzaType: VERSES
            },
            lyricUnit: [
                {
                    time: 14,
                    lyric: [
                        {
                            anchor: `Beta,`,
                            card: {
                                description: [
                                    `In Hindi,`,
                                    {
                                        // बेटा
                                        italic: `beta`
                                    },
                                    `means "son." Having unequivocally taken Sita's side, my parents address me in my nightmare as an Indian parent would.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true
                                }
                            }
                        },
                        `come`,
                        {
                            anchor: `wax prophetic`,
                            cards: [
                                {
                                    description: `Of course, it's more common to "wax poetic," meaning to become eloquent in speech. Here, my parents use this highbrow expression ironically, as commentary on the artificial persona that I've created.`,
                                    dotKeys: {
                                        [REFERENCE]: true
                                    }
                                },
                                {
                                    description: [
                                        `Like the ghosts of Christmas in Charles Dickens's`,
                                        {
                                            anchor: `A Christmas Carol,`,
                                            wiki: `A_Christmas_Carol`
                                        },
                                        `my parents invite me on a night journey to witness all that has led up to where I am now, how these events have shaped my ambitions, and what those ambitions will soon have wrought.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [REFERENCE]: true
                                    }
                                }
                            ]
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
                            card: {
                                description: [
                                    `Shel Silverstein's`,
                                    {
                                        italic: {
                                            anchor: `The Giving Tree`,
                                            wiki: `The_Giving_Tree`
                                        }
                                    },
                                    `is a children's book about a tree's nurturing love for a boy. As the boy grows into a man, her gifts become increasingly self-sacrificing in nature. Many read it as an allegory for unhealthy codependency in children.`
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
                            cards: [
                                {
                                    description: `The tree finally sacrifices herself completely, allowing the boy to chop down her trunk to build a boat. When the boy returns as an old man, the tree is now just a stump, and can only offer a place to sit and rest.`,
                                    dotKeys: {
                                        [REFERENCE]: true
                                    }
                                },
                                {
                                    description: `In their claim to be "stumped," my parents feign to be oblivious to the outcome of my story.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `I ponder the`,
                        {
                            anchor: `forespoken monster`,
                            card: {
                                description: [
                                    `In`,
                                    {
                                        italic: {
                                            anchor: `The Monster at the End of This Book,`,
                                            wiki: `The_Monster_at_the_End_of_This_Book:_Starring_Lovable,_Furry_Old_Grover`
                                        }
                                    },
                                    `Sesame Street's Grover tries to prevent the child reader from turning to the last page of the book, fearful of the monster lying in wait. As it turns out, the only monster present at the end is Grover himself, much to his embarrassment.`
                                ]
                            }
                        },
                        `at the end of this`,
                        {
                            anchor: `book of yours…`,
                            card: {
                                description: [
                                    `Like Grover, I was trapped inside a self-referential work, hoping to shape the outcome towards which I was being relentlessly thrust. Unlike Grover, however, I already had an inkling of who the monster at the end of`,
                                    {
                                        italic: `Bobtail`
                                    },
                                    `might turn out to be.`
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
                stanzaType: VERSES,
                subsequent: true
            },
            lyricUnit: [
                {
                    time: 27,
                    lyric: [
                        `And you, for a future,`,
                        {
                            anchor: `sold your whole fortune`,
                            card: {
                                description: `My parents lament that the opportunism born from my ego is leading me to become a future "soldier of fortune," as I squander everything I have that is good with Sita in favour of unsavoury and foolhardy pursuits.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
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
                            card: {
                                description: `Being "endorphined" in my perpetually inebriated state allows me to live like an orphan, in denial of having parents whose high expectations I fail to meet.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 35,
                    lyric: [
                        {
                            anchor: `Upon purchase of a queen's ship,`,
                            card: {
                                description: `Though the bullies ruled over me, the mail-order cult promised that all would be made right once a spaceship could be acquired through my efforts. My strategy in life thus became to visualise the reward of corrective justice, then patiently work towards it. I was like "a pawn" that "perches over queenship" as it steadily clambers towards the other side of the chessboard.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                    [REFERENCE]: true
                                }
                            }
                        },
                        {
                            anchor: `earth right now your tourist store…`,
                            card: {
                                description: `While my mother filled my head with visions of being a great artist, the mail-order cult instilled a belief that I was merely a visitor to this planet. And so, unaffected by earthly concerns, I was always going to work tirelessly for my "birthright" of artistic renown, which I felt it my duty "to restore."`,
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                stanzaType: PRECHORUS
            },
            lyricUnit: [
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
                            card: {
                                description: [
                                    `Inhalant abuse, or`,
                                    {
                                        anchor: `"huffing,"`,
                                        wiki: `Inhalant`
                                    },
                                    `was the supposed youth trend du jour of my middle school years. And I suppose I fit the profile of someone who had just sniffed glue, which is why I got called into the principal's office.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 50,
                    lyric: [
                        `then we caught you`,
                        {
                            anchor: `stuffing twenties`,
                            card: {
                                description: `I had pen pals as a child, so my parents didn't think anything of the random envelopes I was mailing out. But after speaking to my principal, my mother became suspicious and opened one of them, to find a wad of paper money inside.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `in an envelope…`
                    ]
                }
            ]
        },
        {
            unitMap: {
                stanzaType: PRECHORUS,
                subsequent: true
            },
            lyricUnit: [
                {
                    time: 54,
                    lyric: [
                        `So do you believe`,
                        {
                            anchor: `your hamartia`,
                            cards: [
                                {
                                    description: [
                                        `In Greek tragedy,`,
                                        {
                                            anchor: `hamartia`,
                                            wiki: `Hamartia`
                                        },
                                        `is the character flaw that leads to a protagonist's downfall. Here, my parents are asking if I recognise the telltale signs pointing to mine. (I've since learned that the accent is on the third syllable. But my English teacher pronounced it as I have here, so I plead miseducation.)`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    description: [
                                        `My parents are also snidely alluding to my erstwhile belief that I was born from the stars. Or, in their words, "a Martian."`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `now?`
                    ]
                }
            ]
        },
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `As silly as the original lyrics for the chorus were, I liked them enough to keep them, so I just made the former lead melody the new counter melody. The former counter melody, which was written for guitar, then became the new lead melody.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                topSideCard: [
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
                subCard: [
                    {
                        time: 70,
                        lyric: {
                            italic: `to seal out their floods.`
                        }
                    }
                ],
                stanzaType: CHORUS,
                subCardType: RHYME,
                sideCardType: BACKING
            },
            lyricUnit: [
                {
                    time: 61,
                    lyric: `Mowed down by the tides,`
                },
                {
                    time: 63,
                    lyric: `and inundated under in unfair fights,`
                },
                {
                    time: 67,
                    lyric: [
                        `you made a`,
                        {
                            anchor: `bunker that shuts airtight`,
                            card: {
                                description: `I learned early on to deal with problems by locking myself away. Then, once safely sheltered, I had all the time in the world to calmly study my situation and plot out the best way forward.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            unitMap: {
                topSideCard: [
                    {
                        lyric: {
                            anchor: `Scattered your beans`,
                            card: {
                                description: [
                                    `As I recall, the nightmare began with me scattering magic beans all around my neighbourhood. It was clearly based on the English fairy tale`,
                                    {
                                        anchor: `"Jack and the Beanstalk,"`,
                                        wiki: `Jack_and_the_Beanstalk`
                                    },
                                    `though I'm not sure why.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    },
                    {
                        lyric: `over suburbia…`
                    }
                ],
                subCard: [
                    {
                        time: 82,
                        lyric: {
                            italic: `and healed round your grudge…`
                        }
                    }
                ],
                stanzaType: CHORUS,
                subCardType: RHYME,
                sideCardType: BACKING,
                subsequent: true
            },
            lyricUnit: [
                {
                    time: 74,
                    lyric: [
                        `But then, my`,
                        {
                            anchor: `little prince,`,
                            card: {
                                description: [
                                    `Antoine de Saint-Exupéry's`,
                                    {
                                        italic: {
                                            anchor: `The Little Prince`,
                                            wiki: `The_Little_Prince`
                                        }
                                    },
                                    `is about a young prince who arrives on Earth from a distant asteroid. During his stay, the prince keenly observes the absurdities of the adult world, and in turn learns a poignant lesson on love and loss.`
                                ]
                            }
                        }
                    ]
                },
                {
                    time: 76,
                    lyric: [
                        `safe on your`,
                        {
                            anchor: `tiny planet`,
                            card: {
                                description: `Like the prince, I was also a visitor from beyond the stars, seeing the world at large through guileless eyes.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
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
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `shell game`,
                                        wiki: `Shell_game`
                                    },
                                    `is a classic swindle in which a small ball is placed under three shells, which are then shuffled in plain view. Typically, sleight of hand is used to misplace the ball. Having recognised life to be a shell game, I will never be suckered again. And heck, now I can be the one to do some grifting myself.`
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
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: [
                            `I wanted to recreate the tremolo effect used by guitarist Jonny Greenwood on the song "Airbag" from Radiohead's`,
                            {
                                anchor: `OK Computer.`,
                                wiki: `OK_Computer`
                            },
                            `So I recorded several takes of steady eighth notes on the banjo, with each take offset just a little further, to create the impression of tremolo picking on a single instrument. Only in the last few measures do they separate in the balance, like a rope fraying at its end.`
                        ],
                        dotKeys: {
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: VERSES
            },
            lyricUnit: [
                {
                    time: 86,
                    lyric: [
                        `Now suddenly dressed to play, you`,
                        {
                            anchor: `drowned your stutter,`,
                            card: {
                                description: `Sometime in middle school, I developed a stammer. In college, I found that drinking made it disappear.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 89,
                    lyric: [
                        `smugly prepped to`,
                        {
                            anchor: `haze the new latecomers.`,
                            card: {
                                description: `Some secret societies are infamous for their abusive hazing rituals. Having once endured such abuse as my dues for joining society, I was now eager to dole it out to others.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [REFERENCE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 94,
                    lyric: `This scheming crackpot vowed to clean the jackpot out this time around…`
                }
            ]
        },
        {
            unitMap: {
                stanzaType: PRECHORUS
            },
            lyricUnit: [
                {
                    time: 100,
                    lyric: [
                        `But have you heard, my beloved`,
                        {
                            anchor: `Rama king,`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Rama`,
                                            wiki: `Rama`
                                        },
                                        `is an avatar of the Hindu god Vishnu and the hero of the`,
                                        {
                                            italic: {
                                                anchor: `Ramayana,`,
                                                wiki: `Ramayana`
                                            }
                                        },
                                        `an ancient Indian epic poem. The tale recounts Rama's marriage to Sita, daughter of Mother Earth, and his battle to rescue her after she was kidnapped by the demon king Ravana.`
                                    ]
                                },
                                {
                                    description: `My parents take a subtle dig by calling me a "drama king," given that everything I do is an act.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `the`,
                        {
                            anchor: `testifiers' lore?`,
                            card: {
                                description: `After defeating Ravana, Rama forced Sita to walk through sacrificial flames to prove that she had remained chaste throughout her abduction. Sita complied, and escaped from this "test of fire" unharmed.`,
                                dotKeys: {
                                    [PUN]: true,
                                    [REFERENCE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 106,
                    lyric: [
                        `A`,
                        {
                            anchor: `nation paused`,
                            card: {
                                description: [
                                    `In 1987, a television serial based on the`,
                                    {
                                        italic: `Ramayana`
                                    },
                                    `began broadcasting throughout India. Traffic and train stations would come to a standstill each week as the country sat glued to their television screens.`
                                ],
                                dotKeys: {
                                    [REFERENCE]: true
                                }
                            }
                        },
                        `to watch you`,
                        {
                            anchor: `fail your Sita`,
                            card: {
                                description: `Contemporary audiences may find it problematic that Rama's first action upon reuniting with Sita was to demand proof of her purity. The same self-serving chauvinism is what prompted my need to be the more sexually experienced partner, leading me to stray from Sita and shack up with other women.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [REFERENCE]: true
                                }
                            }
                        },
                        `on`,
                        {
                            anchor: `repeat forevermore!`,
                            card: {
                                description: [
                                    `As I was making this album, it occurred to me that I too was now doomed to endlessly forget and repeat my mistakes, as the story of how I betrayed my own Sita, much like the`,
                                    {
                                        italic: `Ramayana,`
                                    },
                                    `would forever be retold.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [SONGWRITING]: true
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            unitMap: {
                stanzaType: PRECHORUS,
                subsequent: true
            },
            lyricUnit: [
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
                            card: {
                                description: `While Sita hoped for us to be "tied" in a matrimonial sense, I chafed that we were "tied" in the competitive sense.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                stanzaType: BRIDGE
            },
            lyricUnit: [
                {
                    time: 127,
                    lyric: [
                        `With bride you bridled in this perfect`,
                        {
                            // NOTE: I changed "duel" to "dual" here.
                            anchor: `dual match,`,
                            card: {
                                description: `To onlookers, our relationship might have seemed like the ideal union between two people. But for me, it had become a zero-sum "duel match" that only one person could win.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 132,
                    lyric: [
                        `and so one night you`,
                        {
                            anchor: `chalked the sidewalks`,
                            card: {
                                description: `One night, my friends and I got drunk and decided to tag the streets with fluorescent sidewalk chalk. Since I didn't want anyone to crowd out my artwork, I ran ahead of the group.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `slurring`,
                        {
                            anchor: `Valmiki's chant.`,
                            properNoun: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Valmiki,`,
                                        wiki: `Valmiki`
                                    },
                                    `the renowned author of the epic`,
                                    {
                                        italic: `Ramayana,`
                                    },
                                    `began his early life as Ratnakar, a notorious highway robber. Desperate to repent, he sought counsel from a passing sage, who told him to recite the holy name of Rama. Ratnakar was so sinful, however, that he could only repeat the word`,
                                    {
                                        italic: `mara,`
                                    },
                                    `or "death." Still, the grace of Rama caused the syllables to slowly shift, until Ratnakar was finally chanting Rama's name.`
                                ]
                            }
                        }
                    ]
                },
                {
                    time: 138,
                    lyric: [
                        `When`,
                        {
                            anchor: `wakened from the siren,`,
                            cards: [
                                {
                                    description: `Having lost sight of the group, I ended up passing out behind a bush, until I was jolted awake by an ambulance siren.`,
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: [
                                        `In Greek mythology, the`,
                                        {
                                            anchor: `"Sirens"`,
                                            wiki: `Siren_(mythology)`
                                        },
                                        `were beautiful women whose enchanting songs would lull sailors to their deaths against the rocky shores. But like Odysseus, who resisted by having himself tied to the mast, I blocked out the siren call of Sita's love by tying myself to my artistic ambitions.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `you found spelled out in`,
                        {
                            anchor: `dead ants:`,
                            cards: [
                                {
                                    description: [
                                        `As Ratnakar chanted Rama's name, his concentration was so intense that an anthill formed over him and remained undisturbed for years. And so he came to be known as Valmiki, since`,
                                        {
                                            italic: `valmika`
                                        },
                                        `means "anthill" in Sanskrit.`
                                    ],
                                    dotKeys: {
                                        [REFERENCE]: true
                                    }
                                },
                                {
                                    description: `My sidewalk art had killed off some ants, whose dead bodies formed an outline around what I had drunkenly scrawled in chalk.`,
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                }
                            ]
                        },
                        {
                            anchor: `_____…`,
                            card: {
                                description: `And what I had scrawled in chalk was… Mara's name. No real cliffhanger here. "M" just set a precedent for me to be gun-shy about mentioning her anywhere in my lyrics.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                }
            ]
        },
        {
            unitMap: {
                subCard: [
                    {
                        time: 150,
                        lyric: {
                            italic: [
                                `Your`,
                                {
                                    anchor: `dulling gold`,
                                    card: {
                                        description: `My desire to date other women blinded me to both their flaws and Sita's strengths. In hindsight, they weren't better as partners or as people, and most were arguably worse. But rather than work to recover my once treasured bond with Sita, which had lost its lustre only by my neglect, I happily exchanged it for the shiny "bronze" trophies offered by other women.`,
                                        dotKeys: {
                                            [OBSERVATION]: true,
                                            [PUN]: true
                                        }
                                    }
                                },
                                `now gone…`
                            ]
                        }
                    }
                ],
                stanzaType: PRECHORUS,
                subCardType: RESPONSE
            },
            lyricUnit: [
                {
                    time: 145,
                    lyric: [
                        `No`,
                        {
                            anchor: `well worn sari`,
                            cards: [
                                {
                                    description: [
                                        `On special occasions and for family events, Sita would wear a`,
                                        {
                                            anchor: `sari.`,
                                            wiki: `Sari`
                                        },
                                        `They always looked really good on her.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: `Sita's "well-worn sorries" quickly grew tiresome, precisely because only one of us needed to spend forever begging for forgiveness, and we both knew it wasn't her.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `could sway you from a`,
                        {
                            anchor: `fairer marathon!`,
                            cards: [
                                {
                                    description: [
                                        `The constant one-upmanship wasn't just petty. It was exhausting to keep an inner tally of every time I felt slighted. I wanted life to be more like a marathon that rewards patience and resolve. Since I possessed those traits in spades, that seemed most fair to me.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    description: [
                                        `"Marathon" sounds like Mara's full name spoken with a lisp. After all this time, I was still chasing after someone like Mara.`
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
                subCard: [
                    {
                        time: 157,
                        lyric: {
                            italic: [
                                `…traded in for the`,
                                {
                                    anchor: `trophy blondes.`,
                                    cards: [
                                        {
                                            description: `To add insult to injury, the women I left Sita for were mostly white, which bothered her greatly. In my defence, it wasn't at all by design, but seeing her loss as my gain, I let her believe the worst.`,
                                            dotKeys: {
                                                [BACKSTORY]: true
                                            }
                                        },
                                        {
                                            wormhole: `trophy_bronze`
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ],
                stanzaType: PRECHORUS,
                subCardType: RESPONSE,
                subsequent: true
            },
            lyricUnit: [
                {
                    time: 152,
                    lyric: [
                        `Stubborn`,
                        {
                            anchor: `harpies`,
                            cards: [
                                {
                                    description: [
                                        `In Greek mythology, the`,
                                        {
                                            anchor: `harpies`,
                                            wiki: `Harpy`
                                        },
                                        `were female monsters with human heads and birdlike bodies. In common parlance, of course, a harpy is a nagging woman.`
                                    ]
                                },
                                {
                                    wormhole: `harpies`
                                }
                            ]
                        },
                        `can't draw this contest`,
                        {
                            anchor: `to be one!`,
                            card: {
                                description: `Or else, a contest to be "won."`,
                                dotKeys: {
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
                topSideCard: [
                    {
                        lyric: `Through tatters of sky,`
                    },
                    {
                        lyric: [
                            `their`,
                            {
                                anchor: `sun tinkles light`,
                                card: {
                                    description: `In the nightmare, I was now ruler of the neighbourhood, showering my subjects in my urine, their sole means of subsistence. In hindsight, my brain was probably telling me to get up and use the bathroom.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true
                                    }
                                }
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
                                card: {
                                    description: `The magic beans had sprouted into thick, twisted vines, blocking out the sky as far and wide as my helpless subjects could see.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                }
                            }
                        ]
                    }
                ],
                subCard: [
                    {
                        time: 168,
                        lyric: {
                            italic: `to find a cleared path`
                        }
                    }
                ],
                stanzaType: CHORUS,
                subCardType: RHYME,
                sideCardType: BACKING
            },
            lyricUnit: [
                {
                    time: 160,
                    lyric: `Oh child of mine,`
                },
                {
                    time: 162,
                    lyric: [
                        `what's left of what these`,
                        {
                            anchor: `faces you flip override,`,
                            card: {
                                description: `At some point, I noticed that I put on drastically different faces for different people and different situations. This wasn't the case when I was a child, which could only mean that there was once a true me, and now there wasn't.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 165,
                    lyric: [
                        `and all these`,
                        {
                            anchor: `pages you've ripped`,
                            card: {
                                description: `My parents lament my fervent readiness to devalue past sentiments for the sake of present ambitions, as if I were tearing out old pages from a scrapbook to free up space for new inserts.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `from your spine`
                    ]
                }
            ]
        },
        {
            unitMap: {
                topSideCard: [
                    {
                        lyric: `cast on your peons,`
                    },
                    {
                        lyric: {
                            anchor: `old and subservient.`,
                            cards: [
                                {
                                    description: `Amongst those I ruled over were my parents, now feeble and senile after a lifetime of following their "son's" bidding.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: `It wasn't until college that I was able to appreciate the enormous sacrifices that my parents made for me and my siblings to have a better life than they did. But that this realisation had to come through assigned reading on immigrant history, rather than my own lived experiences, only further added to my guilt.`,
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                }
                            ]
                        }
                    }
                ],
                subCard: [
                    {
                        time: 181,
                        lyric: {
                            italic: `to five-year plans.`
                        }
                    }
                ],
                stanzaType: CHORUS,
                subCardType: RHYME,
                sideCardType: BACKING,
                subsequent: true
            },
            lyricUnit: [
                {
                    time: 172,
                    lyric: `in life's unbearable maze?`
                },
                {
                    time: 174,
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
                            card: {
                                description: `My latest five-year plan, like the one before it, was meant to yield dramatic improvements in my life through a major overhaul of the underlying system. As such, it just wasn't possible to question it while the work remained in progress.`,
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
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `To record the gradual shift from "Rama" to "Mara," I made a click track whose tempo sums up to one fewer eighth note after seven measures. I then overlaid multiple tracks in which I quietly took a breath at different points.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                topSideCard: [
                    {
                        lyric: {
                            anchor: `Rama, Rama…`,
                            properNoun: true,
                            card: {
                                description: `Like Valmiki as he chanted Rama's name, I desperately wanted to be good again.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true
                                }
                            }
                        }
                    },
                    {
                        isSideUnitMap: true,
                        subCard: [
                            {
                                lyric: {
                                    anchor: `…Maranatha!`,
                                    card: {
                                        description: [
                                            `In my case, however, the syllables slowly shifted until I was chanting the holy name of Mara. And unlike Valmiki, who found Eastern spirituality, I embraced instead the promise of acceptance by Western society and its women, as represented by an expression of Western faith. In the New Testament,`,
                                            {
                                                italic: {
                                                    anchor: `maranatha`,
                                                    wiki: `Maranatha`
                                                }
                                            },
                                            `is Aramaic for "our Lord has come."`
                                        ],
                                        dotKeys: {
                                            [NARRATIVE]: true,
                                            [OBSERVATION]: true
                                        }
                                    }
                                }
                            }
                        ]
                    }
                ],
                stanzaType: CODA,
                sideCardType: BACKING,
                sideSubCardType: RESPONSE
            },
            lyricUnit: [
                {
                    time: 184,
                    lyric: [
                        `Now son, before you embark on your`,
                        {
                            anchor: [
                                `great`,
                                {
                                    italic: `Bildungsroman,`
                                }
                            ],
                            card: {
                                description: [
                                    `A`,
                                    {
                                        italic: {
                                            anchor: `Bildungsroman`,
                                            wiki: `Bildungsroman`
                                        }
                                    },
                                    `is a literary coming-of-age story, of which James Joyce's first novel,`,
                                    {
                                        italic: `A Portrait of the Artist as a Young Man,`
                                    },
                                    `is a well-known example. My conceit for`,
                                    {
                                        italic: `Bobtail`
                                    },
                                    `was to push the boundaries of this genre into the musical realm.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 191,
                    lyric: [
                        `shouldn't you first be sure you've`,
                        {
                            anchor: `finally become someone?`,
                            cards: [
                                {
                                    description: [
                                        `Of course, a key component of the`,
                                        {
                                            italic: `Bildungsroman`
                                        },
                                        `is the protagonist's moral and psychological growth from youth into adulthood. Without this crucial development in character, there is no story to be told, a point to which my parents slyly allude here.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    wormhole: `finally_become_someone`
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            unitMap: {
                stanzaType: OUTRO
            },
            lyricUnit: [
                {
                    time: 199,
                    centre: {
                        italic: `(Mara's theme)`
                    }
                }
            ]
        }
    ]
}
