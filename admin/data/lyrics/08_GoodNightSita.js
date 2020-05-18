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
    CHORUS,
    POSTCHORUS,
    IS_UNIT_DOT
} from '../../../app/constants/lyrics'

export default {
    title: 'Good Night, Sita',
    duration: 131,
    overview: `Sometime after dating Catherine and a while before meeting Mara, I tried to hit on a university student named Sita. Nothing came of the few dates that followed, however, and I quickly scurried away in disappointment.`,
    lyricUnits: [
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: `Having just walked Sita back to her boarding house after a date, I face her awkwardly as we stand before the front gate. It's early in the evening, with the sky beginning to clear from a midday shower.`,
                        dotKeys: {
                            [NARRATIVE]: true
                        }
                    }
                }
            }
        },
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `In the final chapter of James Joyce's`,
                            {
                                isItalic: true,
                                lyric: `Ulysses,`
                            },
                            `the narrator daydreams in an uninterrupted stream of consciousness. I borrowed this technique to capture the torrent of unspoken thoughts rushing through my head as Sita extends her good wishes before I depart.`
                        ],
                        dotKeys: {
                            [REFERENCE]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 0,
                    lyric: `"Good night," she says`
                }
            ]
        },
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: `The restless thumping of a Motown groove insistently prods me to pour forth everything that I long to express.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: VERSES,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 3,
                    lyric: [
                        `or`,
                        {
                            anchor: `should I should you`,
                            todo: true,
                            card: {
                                description: `At this point, I'm too flustered to form complete thoughts, let alone complete sentences.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `refuse`
                    ]
                },
                {
                    time: 5,
                    lyric: `by a gutter gurgling then we'll choose`
                },
                {
                    time: 7,
                    lyric: `either never live yet live on or to`
                },
                {
                    time: 9,
                    lyric: [
                        `love first`,
                        {
                            anchor: `without once knowing love`,
                            todo: true,
                            card: {
                                description: `The women I tried to date always preferred someone with past relationship experience, which seemed like a bizarre provision to me. If everyone thought this way, then no one could ever be in a relationship, just like no one would ever find a job if every hiring manager insisted on seeing previous work experience.`,
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
                formType: VERSES,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 11,
                    lyric: `when cesspit dead ends for further speech`
                },
                {
                    time: 12,
                    lyric: `are these stuttered sentences we speak`
                },
                {
                    time: 14,
                    lyric: [
                        `for this kid wearing no`,
                        {
                            anchor: `decoder ring`,
                            todo: true,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `secret decoder ring`,
                                        wiki: `Secret_decoder_ring`
                                    },
                                    `was a toy purchased through mail that allowed children to decipher encrypted messages. It would have been handy to have on a date, since I was constantly trying to tease out hidden meanings in the most basic exchanges.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 16,
                    lyric: [
                        {
                            anchor: `Dutch courage`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Due to trade rivalries between the British and Dutch in the 17th century, several idioms in the English language employ the term "Dutch" as a pejorative.`,
                                        {
                                            anchor: `Dutch courage`,
                                            wiki: `Dutch_courage`
                                        },
                                        `refers to misplaced confidence gained from alcohol.`
                                    ]
                                },
                                {
                                    description: `Having an older friend who faithfully plied me with cheap twelve-packs, I had earlier downed a couple of cans, as I was wont to do before every date.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                }
                            ]
                        },
                        `wimped out to`,
                        {
                            anchor: `going Dutch`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `To`,
                                        {
                                            anchor: `go Dutch`,
                                            wiki: `Going_Dutch`
                                        },
                                        `means to split the cost of a meal, since stinginess was another intrinsic failing ascribed to the Dutch.`
                                    ]
                                },
                                {
                                    description: `Sita would insist on separate checks, despite my repeated efforts to pay for the entire date. This made me feel inadequate, and no better than a "sponge" based on my understanding of dating etiquette.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
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
                    time: 18,
                    lyric: `but even no sponge`
                },
                {
                    time: 20,
                    lyric: [
                        {
                            anchor: `nor a barnacle`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `"Nora Barnacle"`,
                                            wiki: `Nora_Barnacle`
                                        },
                                        `was the wife of James Joyce and the inspiration for his character Molly Bloom, whose interior monologue in`,
                                        {
                                            isItalic: true,
                                            lyric: `Ulysses`
                                        },
                                        `in turn served as my inspiration for this song.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                },
                                {
                                    wormhole: `barnacle`
                                }
                            ]
                        },
                        `minds`
                    ]
                },
                {
                    time: 22,
                    lyric: {
                        anchor: `swept in unchartable tides`,
                        todo: true,
                        cards: [
                            {
                                description: `Stencilled above many storm drains in the Bay Area is a sign that reads, "No Dumping, Drains to Ocean."`,
                                dotKeys: {
                                    [REFERENCE]: true
                                }
                            },
                            {
                                description: `The constant peril of being steered in directions for which I'm ill-prepared has kept me on edge throughout this date, as usual. But a nearby storm drain reminds me that many things, including sponge and barnacle larvae, are regularly carried by the current to unknown regions, and they don't sweat it.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        ]
                    }
                },
                {
                    time: 24,
                    lyric: [
                        `they just`,
                        {
                            anchor: `always know to pry`,
                            todo: true,
                            card: {
                                description: `After all, none of my friends sweat the risk of being seen as a "sponge" either. Confident that they're just as much there to be won over, they show curiosity by pressing their date for details, the way a starfish will pry open an oyster resting on the seafloor.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 26,
                    lyric: [
                        `for the`,
                        {
                            anchor: `innermost matryoshka's`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `On our first date, I took Sita to a natural history museum with many ethnological exhibits. We spent some time gawking at the wooden dolls from Russia known as`,
                                        {
                                            anchor: `matryoshkas,`,
                                            wiki: `Matryoshka_doll`
                                        },
                                        `which nest one inside another.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    description: `Mistakes made with one woman still offered lessons to apply towards the next, so each date felt like prying open one nesting doll to get to another, with the ultimate hope of reaching the last one that doesn't turn out hollow.`,
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 28,
                    lyric: `heart of gold inside`
                }
            ]
        },
        {
            unitMap: {
                formType: POSTCHORUS
            },
            mainVerses: [
                {
                    time: 29,
                    lyric: [
                        `till then`,
                        {
                            anchor: `crack up another doll`,
                            todo: true,
                            card: {
                                description: `A friend once advised me that if I can keep a woman "cracking up" at my jokes all night, then I'll always be golden. Not being very funny, I settled on some weird combination of clever quips and goofy postures.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 32,
                    lyric: [
                        `to find the`,
                        {
                            anchor: `chrysalis unchristened`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `As we glided past a display on the lifecycle of butterflies, it occurred to me that what I sought was a`,
                                        {
                                            anchor: `chrysalis.`,
                                            wiki: `Pupa`
                                        },
                                        `That is, a rare specimen of woman unworldly enough not to be turned off by my own lack of experience. Unfortunately, every other low-status male had the same idea.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true
                                    }
                                }
                            ]
                        },
                        `to all`
                    ]
                },
                {
                    time: 36,
                    lyric: [
                        `who'd buy this`,
                        {
                            anchor: `aping jaw`,
                            todo: true,
                            card: {
                                description: [
                                    `We paused for a minute to learn about`,
                                    {
                                        anchor: `Piltdown Man,`,
                                        wiki: `Piltdown_Man`
                                    },
                                    `a paleontological hoax in which the oversized jaw of an orangutan was attached to the cranium of a modern human. I was a comparable fraud, as the things that came out of my mouth were meant to inflate the perceived volume of my head.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `fixed to his skull`
                    ]
                },
                {
                    time: 40,
                    lyric: `swaggering down these barren exhibit halls`
                }
            ]
        },
        {
            unitMap: {
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 45,
                    lyric: `but totems so revered`
                },
                {
                    time: 47,
                    lyric: [
                        `when`,
                        {
                            anchor: `defined by ambrosia beers`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Ambrosia`,
                                            wiki: `Ambrosia`
                                        },
                                        `was the food of the Greek gods, just as beer made me feel omnipotent.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    description: [
                                        `American author`,
                                        {
                                            anchor: `"Ambrose Bierce"`,
                                            wiki: `Ambrose_Bierce`
                                        },
                                        `wrote a collection of satirical definitions called`,
                                        {
                                            isItalic: true,
                                            lyric: `The Devil's Dictionary.`
                                        },
                                        `My sense of humor at the time was a naive approximation of this brand of cynical wit.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 48,
                    lyric: [
                        `in time are seen with`,
                        {
                            anchor: `a focus grown clear`,
                            todo: true,
                            card: {
                                description: `A few hours into a date, my buzz would wear off, and I would realise that I'd just constructed an elaborate backstory that could only topple under scrutiny, like a totem pole carved from a stack of stumps rather than a single trunk.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 50,
                    lyric: `and slowly the story erodes`
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
                    time: 52,
                    lyric: [
                        {
                            anchor: `pidgin palaver`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Stopping to rest our feet in a gallery devoted to Native American history, we learned about the development of`,
                                        {
                                            anchor: `pidgins,`,
                                            wiki: `Pidgin`
                                        },
                                        `or impromptu languages intended solely to facilitate trade between colonists and natives. Such exchanges were necessarily peppered with overt expressions of goodwill to make up for inevitable miscommunication, which also aptly describes my first date conversations with Sita.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true
                                    }
                                }
                            ]
                        },
                        `exchanged`
                    ]
                },
                {
                    time: 54,
                    lyric: `can only transfer good faith`
                },
                {
                    time: 56,
                    lyric: [
                        `hyped up like some`,
                        {
                            anchor: `disastrous play`,
                            todo: true,
                            card: {
                                description: `On our second date, Sita invited me to see her friend perform in a play, which I ended up hating. In retrospect, it probably wasn't bad. My impression of the night was just colored by my insecurities, given the warm rapport between Sita and her friend backstage, in contrast to my own inability to get a word in edgewise.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 58,
                    lyric: [
                        `that starts with a`,
                        {
                            anchor: `lone ringing phone`,
                            todo: true,
                            card: {
                                description: `The play began with the theatre going pitch black. As the audience fell to a hush, a phone started ringing, and it wasn't immediately clear that the sound came from the stage.`,
                                dotKeys: {
                                    [NARRATIVE]: true
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
                    time: 60,
                    lyric: `but even so`
                },
                {
                    time: 62,
                    lyric: `just that it ever rang at all`
                },
                {
                    time: 64,
                    lyric: [
                        `for if the`,
                        {
                            anchor: `tactic is to stall`,
                            todo: true,
                            card: {
                                description: `I was advised by friends to wait three days before calling a woman back. Yet it was always agony when she invariably did the same.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 66,
                    lyric: `you're just ecstatic she called`
                },
                {
                    time: 68,
                    lyric: [
                        `what this`,
                        {
                            anchor: `understudy sought`,
                            todo: true,
                            card: {
                                description: [
                                    `Dating as a low-status male is like being an`,
                                    {
                                        anchor: `understudy,`,
                                        wiki: `Understudy`
                                    },
                                    `a performer in theatre who serves as a replacement on short notice. You undertake the exact same preparation, yet was rewarded with almost none of the action. I finally accepted that I had to be proactive and branch out, like a freelancer without steady gigs advertising on a cork board.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `from his number`
                    ]
                },
                {
                    time: 70,
                    lyric: `strutting on the wall`
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
                            `The band Television are well known for the complex interplay between their two lead guitars, and since I was going for a 70s sound, I listened to`,
                            {
                                anchor: `Marquee Moon`,
                                wiki: `Marquee_Moon`
                            },
                            `on repeat to gather ideas. The lick of tumbling triplets here was stolen note for note from the song "Friction."`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: POSTCHORUS
            },
            mainVerses: [
                {
                    time: 71,
                    lyric: `we whine when first we got shunned`
                },
                {
                    time: 73,
                    lyric: [
                        `then wise up and`,
                        {
                            anchor: `learn to shotgun`,
                            todo: true,
                            card: {
                                description: `I had come to adopt the shotgun approach to dating, which involves hitting on anyone at any moment, and works because math works. Though the failure rate remains dismal, the sample size increases dramatically, thus improving one's chances overall.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 75,
                    lyric: `last show's set still propped up`
                },
                {
                    time: 77,
                    lyric: [
                        `so we'll`,
                        {
                            anchor: `breeze through our parts`,
                            todo: true,
                            card: {
                                description: `With every witty remark I made that got a good response, I would be sure to use it again on the next woman I dated, much like an actor reprising a role. In turn, the notion that this was all just an act helped lessen the sting of rejection.`,
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
                formType: POSTCHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 79,
                    lyric: [
                        `though each`,
                        {
                            anchor: `kind new ultimatum`,
                            todo: true,
                            card: {
                                description: `Like the deals that natives were forced to make with settlers at gunpoint, Sita's proposition for us to see her friend's play offered only an illusion of choice. She was going either way. I could either tag along or stay home alone.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 81,
                    lyric: `to his tribe left old and jaded`
                },
                {
                    time: 83,
                    lyric: `the boy brave who cultivated`
                },
                {
                    time: 84,
                    lyric: [
                        `brave`,
                        {
                            anchor: `rejection into art`,
                            todo: true,
                            card: {
                                description: [
                                    `I learned to accept rejection by treating it as subject matter for new songs. But it then logically follows that a life filled with rejection can`,
                                    {
                                        isEmphasis: true,
                                        lyric: `itself`
                                    },
                                    `be a work of art.`
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
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 86,
                    lyric: [
                        `but`,
                        {
                            anchor: `died unfinished`,
                            todo: true,
                            card: {
                                description: `Of course, there is no guarantee that such a work can ever be seen to completion, since the ready procurement of its raw materials lies beyond the artist's control.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `alas`
                    ]
                },
                {
                    time: 88,
                    lyric: `hotlines get busy just as`
                },
                {
                    time: 90,
                    lyric: `thoughts slide to slitting wrists that`
                },
                {
                    time: 92,
                    lyric: [
                        `hint of`,
                        {
                            anchor: `sampler cologne`,
                            todo: true,
                            card: {
                                description: `I kept a pile of scented strips torn from cologne advertisements in old magazines, and would rub several on my wrists right before a date.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
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
                    time: 94,
                    lyric: `and a lass sniffing out these rote charms`
                },
                {
                    time: 96,
                    lyric: [
                        `always rides in`,
                        {
                            anchor: `single go-karts`,
                            todo: true,
                            card: {
                                description: `On this most recent date with Sita, we visited a go-kart raceway. They had twin go-karts available that were intended to seat a parent and child side by side. I asked Sita if she wanted to ride one together. She politely declined.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 98,
                    lyric: [
                        `as we wind an`,
                        {
                            anchor: `endless flowchart`,
                            todo: true,
                            card: {
                                description: `I often wondered at the time if it was possible to prepare a mental flowchart of all the myriad ways a date might unfold. I could then take one optimal action after another to nudge the events of the evening towards my desired outcome.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 99,
                    lyric: [
                        `with every given`,
                        {
                            anchor: `answer a no`,
                            todo: true,
                            card: {
                                description: `But if I was never given any openings to take action, then each date would end with me going right back to the beginning of the flowchart. And I would be doomed to spend my life cycling through an infinite loop of polite rejection.`,
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
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `Children's albums from the 70s are a treasure trove of musical wisdom, including the soundtrack for`,
                            {
                                anchor: `The New Mickey Mouse Club,`,
                                wiki: `The_Mickey_Mouse_Club`
                            },
                            `a disco-inflected revival of the original 50s show. The Yearlings covered the song "Let's Go Day," from which I stole the idea of a synth playing portamento quarter notes.`
                        ],
                        dotKeys: {
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 101,
                    lyric: [
                        `and her`,
                        {
                            anchor: `veggie wishbone's short end`,
                            todo: true,
                            cards: [
                                {
                                    description: `Afterwards, Sita took me to a vegetarian restaurant, where I ordered a dish that resembled a portion of chicken, down to its sesame-stick wishbone. When we cracked the wishbone, Sita got the longer end. Needless to say, my wish was not granted.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `veggie_wishbone`
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 103,
                    lyric: `in these clutching fingers of steel`
                },
                {
                    time: 105,
                    lyric: `too untrusting to ever unpeel`
                },
                {
                    time: 107,
                    lyric: [
                        `from a`,
                        {
                            anchor: `dummy steering wheel`,
                            todo: true,
                            card: {
                                description: `The twin go-karts had a second steering wheel on the passenger side, which served no purpose other than a child's imagination. Similarly, while I knew that whatever feeling of control I had on a date was an illusion, there was too much at stake for me to let go and embrace spontaneity.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 109,
                    lyric: `settled for hugging only curbs`
                },
                {
                    time: 111,
                    lyric: `and having only tires squeal`
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
                    time: 113,
                    lyric: `when boys who mope`
                },
                {
                    time: 114,
                    lyric: `know the beauty of simply limping away blind`
                },
                {
                    time: 116,
                    lyric: [
                        `as the`,
                        {
                            anchor: `chirping crosswalks`,
                            todo: true,
                            card: {
                                description: `As we stand on the sidewalk outside Sita's house, a mechanical cuckoo sound is heard in the distance, informing the visually impaired that the street is now safe to cross.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `guide`
                    ]
                },
                {
                    time: 118,
                    lyric: `where willows softly conspire`
                },
                {
                    time: 120,
                    lyric: `when boys who cope`
                },
                {
                    time: 121,
                    lyric: `only risk invites denied`
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
                            `Ambrose Bierce also wrote the short story`,
                            {
                                anchor: `"An Occurrence at Owl Creek Bridge,"`,
                                wiki: `An_Occurrence_at_Owl_Creek_Bridge`
                            },
                            `in which a seemingly long span of time is revealed to have passed in an instant. Similarly, the near entirety of this song, during which I recollected every date with Sita thus far, turns out to have been sandwiched between the briefest exchange of farewells.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: CHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 123,
                    lyric: {
                        anchor: `I sigh, "Good night."`,
                        todo: true,
                        cards: [
                            {
                                description: `Flustered panic takes over, and once again all my feelings go unmentioned.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            },
                            {
                                description: `I walked home that night determined not to let another opportunity pass without confessing my feelings to Sita. I did exactly that in a phone call a few days later. It went horribly, and I didn't hear from her again for months.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        ]
                    }
                }
            ]
        }
    ]
}
