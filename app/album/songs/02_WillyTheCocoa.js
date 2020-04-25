import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGWRITING
} from '../../constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    RHYME,
    POSTCHORUS,
    INTRO,
    SOLO,
    FLASHBACK_TO_WORMHOLE_PREFIX,
    IS_UNIT_DOT
} from '../../constants/lyrics'

export default {
    title: 'Willy the Cocoa',
    totalTime: 207,
    overview: `Willy the Cocoa was a mentally disabled man who wandered the streets collecting recyclables for a living. One day, some delinquents decided to pick a fight and smashed his head open with a bottle, killing him instantly. My younger brother was diagnosed with severe autism at around this time, and in light of Willy's murder, I would lie awake in fear of what lay in my brother's future.`,
    lyricUnits: [
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: `The kids in the neighborhood knew Willy as "The Cocoa," referring both to the Coke bottles he collected and to his seeming a bit cuckoo. There wasn't an official way to spell it.`,
                        dotKeys: {
                            [BACKSTORY]: true
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
                            `In the past, mentally disabled children were sometimes thought to be trolls in disguise known as`,
                            {
                                anchor: `changelings,`,
                                wiki: `Changeling`
                            },
                            `who had been left in place of a stolen human child. So I wanted the music for this song to sound like a band of woodland trolls in secluded revelry after having just pulled off such a heist. I figured their style would be akin to the swamp rock of`,
                            {
                                anchor: `Creedence Clearwater Revival,`,
                                wiki: `Creedence_Clearwater_Revival`
                            },
                            `with melodicas to evoke Cajun accordions.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: INTRO
            },
            mainVerses: [
                {
                    time: 0,
                    isCentre: true,
                    lyric: {
                        isItalic: true,
                        lyric: `(Willy's theme)`
                    }
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
                            `The root progression here traces a zigzag in which every minor-third drop is followed by a whole-step rise. At the cadence of each line, melodicas hurriedly catch up by condensing a warped version of this descending pattern into a single measure.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: VERSES
            },
            mainVerses: [
                {
                    time: 11,
                    lyric: `Hilltops gnashing dig out potholes,`
                },
                {
                    time: 14,
                    lyric: [
                        `the`,
                        {
                            anchor: `valley somersaults`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `I grew up in the`,
                                        {
                                            anchor: `San Fernando Valley`,
                                            wiki: `San_Fernando_Valley`
                                        },
                                        `of Los Angeles, where wide boulevards stretch endlessly along a grid plan, and mountains block the horizon on all sides.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: `In the mirages created by the summer heat, the reflections of the surrounding mountains naturally point downwards, suggesting that their jagged peaks had caused the cracks in the asphalt.`,
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                }
                            ]
                        },
                        `in tarred pavement mirage.`
                    ]
                },
                {
                    time: 17,
                    lyric: [
                        {
                            anchor: `Hydrants burst`,
                            todo: true,
                            card: {
                                description: `To keep us kids cool during the summer, neighbors would sometimes crack open a fire hydrant. The water often failed to drain and eventually formed stagnant pools, to the dismay of city officials.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `as early worms work this`,
                        {
                            anchor: `dying coyote's jaw.`,
                            todo: true,
                            cards: [
                                {
                                    description: `Every so often, a coyote would wander down from the hillsides and get hit by traffic. Its body might then lay decomposing for days before being found.`,
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: `If the surrounding mountains of the Valley are like the lower jaw of a dying coyote, then the bustle of its morning commuters are like tiny scavengers ready to go to town on the carcass.`,
                                    dotKeys: {
                                        [OBSERVATION]: true
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
                stanzaType: VERSES,
                subCardType: RHYME,
                subsequent: true,
                subVerse: [
                    {
                        time: 30,
                        lyric: {
                            isItalic: true,
                            lyric: [
                                {
                                    anchor: `Chilled cola's free`,
                                    todo: true,
                                    card: {
                                        description: `Willy eagerly awaits the cold soft drink that comes along with his reimbursement at the recycling center.`,
                                        dotKeys: {
                                            [NARRATIVE]: true
                                        }
                                    }
                                },
                                `with salvage sold…`
                            ]
                        }
                    }
                ]
            },
            mainVerses: [
                {
                    time: 23,
                    lyric: [
                        `Swill pop poured from`,
                        {
                            anchor: `wayside bottle,`,
                            todo: true,
                            card: {
                                description: `Willy begins his daily rounds by filling his shopping cart with discarded bottles and cans found littered along the byways.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 26,
                    lyric: [
                        `his`,
                        {
                            anchor: `pinhead in its shadow`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Willy had`,
                                        {
                                            anchor: `microcephaly,`,
                                            wiki: `Microcephaly`
                                        },
                                        `a medical condition in which the brain fails to develop properly. And so his head was abnormally small in size, like the "pinheads" of carnival sideshows from bygone days.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: `Willy peers through an empty soda bottle, the top of which is tapered like the outline of his skull.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                }
                            ]
                        },
                        `eclipsed in full.`
                    ]
                }
            ]
        },
        {
            unitMap: {
                stanzaType: VERSES,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 32,
                    lyric: [
                        `licking lips`,
                        {
                            anchor: `he ends his stroll.`,
                            todo: true,
                            card: {
                                description: `In most legends, the changeling left in place of a stolen human child is a witting participant in the deceit. As such, it takes pains to hide its true form in the company of its human family and neighbors. And so before Willy goes off to cash in his recyclables, he "ends as troll" by putting on his human guise.`,
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
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `In some legends, a changeling hints at its true identity by using some tool in a peculiar manner. I figured trolls would have just as peculiar a way of playing instruments, and so I experimented with unconventional techniques, like pairing`,
                            {
                                anchor: `palm mutes`,
                                wiki: `Palm_mute`
                            },
                            `with legato slides on the lead guitar and mandolin here.`
                        ],
                        dotKeys: {
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 35,
                    lyric: `Oh, has Willy the Cocoa come`
                },
                {
                    time: 38,
                    lyric: [
                        `for`,
                        {
                            anchor: `our tins and our jars`,
                            todo: true,
                            card: {
                                description: `Like many other households in the neighborhood, my family would leave our recyclables out on the porch for Willy to come by and collect.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `this week?`
                    ]
                },
                {
                    time: 41,
                    lyric: [
                        `Saluting Mummy doing some`,
                        {
                            anchor: `haircutting to the sun`,
                            todo: true,
                            card: {
                                description: `Or else, to the "son." My mother is cutting my brother's hair on the front porch, where the cleanup afterward will be easier.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 45,
                    lyric: [
                        `when`,
                        {
                            anchor: `suddenly baby shrieks…`,
                            todo: true,
                            card: {
                                description: `My brother, the baby of our family, was typically calm and quiet in demeanor. However, when made to do things he didn't enjoy or understand, like sitting through a haircut, he could erupt without warning in a frenzied outburst.`,
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
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: `I first learned of autism after overhearing my parents discuss my brother's condition in their Taiwanese accents. I then spent the next few days telling everyone that my brother was "artistic." And so I wanted the lyrics for this song to explore such ways in which mishearings of adult conversation might lead to roundabout understanding for a child.`,
                        dotKeys: {
                            [BACKSTORY]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS
            },
            mainVerses: [
                {
                    time: 47,
                    lyric: [
                        `As`,
                        {
                            anchor: `gap-toothed coma`,
                            todo: true,
                            cards: [
                                {
                                    description: `With mouth partially open, my brother wears a blank expression. At least, right up until he gets ruffled by my mother's "gap-toothed comb."`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `parts his forehead,`
                    ]
                },
                {
                    time: 50,
                    lyric: [
                        `launching`,
                        {
                            anchor: `pair of seizures`,
                            todo: true,
                            card: {
                                description: `My brother's outburst also knocks the "scissors" from my mother's hand and sends it flying into the lawn.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `to the patch.`
                    ]
                },
                {
                    time: 53,
                    lyric: `Willy ducks behind the porch steps and laughs.`
                },
                {
                    time: 59,
                    lyric: [
                        `Oh ma'am, I`,
                        {
                            anchor: `see your kid with whiskers,`,
                            todo: true,
                            cards: [
                                {
                                    description: `Observing my brother's distaste for haircuts, Willy jokingly predicts that my brother will choose to sport an unshaven look as an adult.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    description: `In many legends, the changeling is not a child at all but a fully grown troll, one who is perhaps even centuries old. And so Willy's phrasing leaves open the possibility that my brother, being a changeling, in fact already wears a beard.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [REFERENCE]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 62,
                    lyric: [
                        `he croaks, stroking`,
                        {
                            anchor: `creepers on his cheek,`,
                            todo: true,
                            card: {
                                description: `Whatever magic spell disguises my brother's true form, it should be no surprise that Willy does not fall under its enchantment. After all, Willy is a changeling himself, as evinced by his own unkempt facial hair.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 65,
                    lyric: [
                        `And three years howling is the`,
                        {
                            anchor: `longest cowlick`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `A`,
                                        {
                                            anchor: `cowlick`,
                                            wiki: `Cowlick`
                                        },
                                        `is a section of hair that sticks out on a person's head. Being acquainted with my family through the years, Willy understands that my brother's tantrums are the reason my mother allows his hair to reach unruly lengths.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    description: [
                                        `Willy might in fact be observing that my brother has yet to outgrow his`,
                                        {
                                            anchor: `"colic,"`,
                                            wiki: `Baby_colic`
                                        },
                                        `a period of excessive crying in infants. In the past, an inability to explain such lack of development is what gave rise to a belief in changelings.`
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                        [REFERENCE]: true
                                    }
                                }
                            ]
                        },
                        `yet I've seen!`
                    ]
                }
            ]
        },
        {
            unitMap: {
                stanzaType: POSTCHORUS
            },
            mainVerses: [
                {
                    time: 71,
                    lyric: [
                        `Prying`,
                        {
                            anchor: `X-ray spec'd,`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `In those days, the back pages of comic books were filled with ads for novelty items such as`,
                                    {
                                        anchor: `X-Ray Specs,`,
                                        wiki: `X-Ray_Specs_(novelty)`
                                    },
                                    `which purportedly allowed its wearer to see through objects. Having sent away weeks ago for a pair of these novelty glasses, I have just received them in the mail and am now trying them on.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `enraged at`,
                        {
                            anchor: `pages clawed,`,
                            todo: true,
                            card: {
                                description: `My brother enjoyed cutting shapes of alphabet letters out of scrap paper. Since this was a creative activity that kept him occupied, my parents happily encouraged it and kept a pile of old magazines freshly stocked for this purpose. Unfortunately, the comic book that I had been reading on the floor just a moment ago has somehow made its way into this scrap pile.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 74,
                    lyric: [
                        `a`,
                        {
                            anchor: `kick slams`,
                            todo: true,
                            card: {
                                description: `Upon catching my brother in the act of cutting up my comic book, I explode and lay down some serious hurt.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `the`,
                        {
                            anchor: `bearded baby`,
                            todo: true,
                            card: {
                                description: `It frustrated me to no end that my brother's behavior didn't make any sense. I longed to believe that he was simply displaying wisdom meant for a different world. So upon reading about changeling legends many years later, I could sympathize with those villagers in times past who told tales of grown-up trolls disguised as human children.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `to the ground`
                    ]
                },
                {
                    time: 77,
                    lyric: [
                        `with his tummy clenched, muffling`,
                        {
                            anchor: `baffled sobs.`,
                            todo: true,
                            card: {
                                description: `The hardest part about hurting my brother was knowing that he had no way to understand the cause of my anger. The times when I turned on him and caused him physical pain would always remain without explanation. I suppose that for him, it was just another part of what life was.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 80,
                    lyric: `Papa storms in roaring, Boy, are you proud?`
                },
                {
                    time: 83,
                    lyric: [
                        `You'd learn him good, when`,
                        {
                            anchor: `smarts he could've took`,
                            todo: true,
                            cards: [
                                {
                                    description: `I grew up puzzling over why my brother had been born with autism and I had not, when our circumstances were no different. It wasn't far-fetched to suppose that every mother's womb begins with a fixed supply of reasoning skills to dole out to each child, and that I had selfishly taken my brother's share.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `learn_him_good`,
                                        wormholePrefix: FLASHBACK_TO_WORMHOLE_PREFIX
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 86,
                    lyric: `all went instead to this clever head of yours.`
                },
                {
                    time: 89,
                    lyric: `So to baby— to your brother— you'll say sorry for the world!`
                }
            ]
        },
        {
            unitMap: {
                stanzaType: SOLO
            },
            mainVerses: [
                {
                    time: 96,
                    isCentre: true,
                    lyric: {
                        isItalic: true,
                        lyric: `(Willy's theme)`
                    }
                }
            ]
        },
        {
            unitMap: {
                stanzaType: VERSES
            },
            mainVerses: [
                {
                    time: 106,
                    lyric: [
                        {
                            anchor: `Killcrop`,
                            todo: true,
                            card: {
                                description: [
                                    `In English folklore, a killcrop is an infant suspected of being a changeling due to its voracious appetite. The etymology is straightforward— one who "kills crops"— and reflects a concern of past times, when children unable to earn their keep could lead to a peasant family's ruin.`
                                ],
                                dotKeys: {
                                    [REFERENCE]: true
                                }
                            }
                        },
                        `dashing kicks up puddle,`
                    ]
                },
                {
                    time: 110,
                    lyric: [
                        {
                            anchor: `soused loafers`,
                            todo: true,
                            cards: [
                                {
                                    description: `In his zeal to reach a discarded beer bottle, Willy steps into a puddle and splashes standing water onto a pair of gangsters idling nearby.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    description: `"Soused loafers" can refer to drunken layabouts, as well as to their drenched shoes.`,
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `shouting 'tard payment is due.`
                    ]
                },
                {
                    time: 113,
                    lyric: [
                        {
                            anchor: `Hit this witch`,
                            todo: true,
                            cards: [
                                {
                                    description: `In some legends, beating a changeling badly enough will provoke it to tire of its charade and return the stolen child. These legends reflected a historical reality in which sickly children were often abused to death, if not killed outright. So if Willy is a changeling, then it seems predestined that he should meet a violent end.`,
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    wormhole: `hit_the_switch`
                                }
                            ]
                        },
                        {
                            anchor: `with switch,`,
                            todo: true,
                            card: {
                                description: `A switch is a flexible rod used for punishment.`,
                                dotKeys: {
                                    [REFERENCE]: true
                                }
                            }
                        },
                        `whispers wind, to fix his switcheroo…`
                    ]
                }
            ]
        },
        {
            unitMap: {
                stanzaType: VERSES,
                subCardType: RHYME,
                subsequent: true,
                subVerse: [
                    {
                        time: 126,
                        lyric: {
                            isItalic: true,
                            lyric: [
                                `Shelled skull has freed`,
                                {
                                    anchor: `unsalvaged soul…`,
                                    todo: true,
                                    cards: [
                                        {
                                            description: `To justify the abuse of sickly children, religious doctrine in the past would often claim that such children were devoid of souls.`,
                                            dotKeys: {
                                                [OBSERVATION]: true,
                                                [REFERENCE]: true
                                            }
                                        },
                                        {
                                            wormhole: `unsalvaged_sows`
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                ]
            },
            mainVerses: [
                {
                    time: 119,
                    lyric: `Milksop cornered into scuffle,`
                },
                {
                    time: 122,
                    lyric: [
                        `a`,
                        {
                            anchor: `sack-spilled glass`,
                            todo: true,
                            card: {
                                description: `Eager for a fight, the gangsters start to push Willy around. His shopping cart gets overturned in the commotion, causing empty bottles and cans to spill onto the ground.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `swung sounds the`,
                        {
                            anchor: `past-noon toll.`,
                            todo: true,
                            card: {
                                description: `One of the gangsters grabs a bottle and smashes it against Willy's face. The sound reverberates throughout the neighborhood like the peal of a town bell striking once at one o'clock.`,
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
                stanzaType: VERSES,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 128,
                    lyric: [
                        `dripping`,
                        {
                            anchor: `Willy's stalkless bulb.`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `Willy's brain is severed from his spine, like a bulb snapped off from its stalk. But a`,
                                    {
                                        anchor: `flower bulb`,
                                        wiki: `Ornamental_bulbous_plant`
                                    },
                                    `planted in the earth can grow a new stem and bloom again.`
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
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `To play the electric guitar riff here, I used both a glass slide and the whammy bar. Since each of these offers the capability to bend pitch, it doesn't make sense to combine them. But perhaps this is just the kind of nonsensical thing that a troll musician would happily do.`
                        ],
                        dotKeys: {
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 131,
                    lyric: [
                        `Oh, and August was the`,
                        {
                            anchor: `sawdust month`,
                            todo: true,
                            card: {
                                description: `Later in this "saddest" month of Willy's murder, I helped my mother spread wood shavings from my father's carpentry onto our flower beds.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 134,
                    lyric: [
                        `that saw this`,
                        {
                            anchor: `mulch soften asphodel.`,
                            todo: true,
                            card: {
                                description: [
                                    `We were planting`,
                                    {
                                        anchor: `asphodels,`,
                                        wiki: `Asphodelus`
                                    },
                                    `a popular garden plant named after the immortal flower of the underworld in Greek mythology. By softening the soil, the mulch gave new life to our flower beds. And perhaps Willy's body did the same for our neighborhood by softening the "asphalt" beneath which it had lain.`
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
                    time: 137,
                    lyric: [
                        {
                            anchor: `Baby bluebonnets`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Bluebonnets`,
                                        wiki: 'Bluebonnet_(plant)'
                                    },
                                    `were another popular flower in our garden, and a blue bonnet is what my mother had tucked my brother's head in to protect him from the sun. But after Willy's murder, I had to wonder how protected my brother was against other things.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }

                        },
                        `bloomed as new comics soon`
                    ]
                },
                {
                    time: 140,
                    lyric: [
                        `lay`,
                        {
                            anchor: `forgotten amongst the mail.`,
                            todo: true,
                            card: {
                                description: `Having recently assaulted my brother in anger over a shredded comic book, I was now indifferent to the latest issue from my monthly subscription.`,
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
                stanzaType: CHORUS
            },
            mainVerses: [
                {
                    time: 143,
                    lyric: [
                        `But`,
                        {
                            anchor: `how marbleless,`,
                            todo: true,
                            card: {
                                description: `Occasionally, someone would make a clumsy attempt to ease my parents' worries by claiming to envy my brother. This person might remark on how "marvelous" it must be to live without one's "marbles," for example. I always had to wonder how gladly they would embrace the greater likelihood of being murdered as well.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `some reckoned,`
                    ]
                },
                {
                    time: 146,
                    lyric: [
                        `being ever stuck in`,
                        {
                            anchor: `imp-runt age of mind!`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `After my brother was diagnosed with autism, my mother went back to school to learn child development. At the dinner table, she would explain to us such concepts as`,
                                        {
                                            anchor: `"imprinting,"`,
                                            wiki: `Imprinting_(psychology)`
                                        },
                                        `the phase during which a child learns emotional attachment. She would then voice her regret that she began these studies too late to be a better parent to my brother.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: [
                                        `Since an imp`,
                                        {
                                            anchor: `runt`,
                                            wiki: `Runt`
                                        },
                                        `is literally the weakest member in a litter of troll infants, it is surely the one that its parents would most likely replace with a stolen human child.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 149,
                    lyric: [
                        `Are you sick?`,
                        {
                            anchor: `I am seven,`,
                            todo: true,
                            card: {
                                description: `My brother learned to answer the question of how old he is when he was six. But even after turning seven, he still insisted on answering "six." Though we finally got him to accept that "seven" was the new correct answer, the cost in sweat and tears was so high that when he turned eight, none of us had the energy to relive the ordeal. He's been answering "seven" ever since. And so here, I imagine him as a grownup testily correcting a stranger who has the nerve to ask if he is "six."`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `he'd reply…`
                    ]
                },
                {
                    time: 155,
                    lyric: `And do we speak in winded whimpers`
                },
                {
                    time: 158,
                    lyric: `or squelch shreds of a summer gone,`
                },
                {
                    time: 161,
                    lyric: `ever conscious of days past forever wrong?`
                }
            ]
        },
        {
            unitMap: {
                stanzaType: POSTCHORUS
            },
            mainVerses: [
                {
                    time: 167,
                    lyric: [
                        `Such`,
                        {
                            anchor: `heavy fears,`,
                            todo: true,
                            card: {
                                description: `Back to the night of Willy's murder. After I wake up screaming in fear of my mortality, my mother rushes to my bedside to comfort me.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `Mummy laughs,`
                    ]
                },
                {
                    time: 171,
                    lyric: [
                        `for a cub`,
                        {
                            anchor: `cub not yet Webelos!`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `In the`,
                                        {
                                            anchor: `Cub Scouts,`,
                                            wiki: `Cub_Scouting_(Boy_Scouts_of_America)`
                                        },
                                        `the eldest rank of Webelos is earned by boys in the fourth or fifth grade. It stands for "We'll Be Loyal Scouts."`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: `My mother, who was the den mother of my Cub Scout pack, might also be assuring me that I am not yet "way below."`,
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 173,
                    lyric: [
                        `Son,`,
                        {
                            anchor: `seventy years`,
                            todo: true,
                            card: {
                                description: `In keeping with her Buddhist faith, my mother told me not to worry, since I wasn't going to die for a long while. She then assured me that when my time finally did come, perhaps in another seventy years or so, I would have long made peace with death somehow.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `and you'll be glad`
                    ]
                },
                {
                    time: 177,
                    lyric: `to finally rest those creaking bones!`
                },
                {
                    time: 179,
                    lyric: `Life's like this quilt: patchy, then it fills…`
                },
                {
                    time: 183,
                    lyric: [
                        `In time, with`,
                        {
                            anchor: `needle done,`,
                            todo: true,
                            cards: [
                                {
                                    description: `My mother suggests that my life will be a patchwork onto which I continually sew new experiences. In turn, the insights gained from these experiences may then inform and enrich my art.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `needle_done`
                                }
                            ]
                        },
                        `you'll write this`,
                        {
                            anchor: `book of yours.`,
                            todo: true,
                            card: {
                                description: [
                                    `I wore an eyepatch as a child to correct my`,
                                    {
                                        anchor: `lazy eye,`,
                                        wiki: `Amblyopia`
                                    },
                                    `which naturally led to an interest in drawing. Since I lacked depth perception,  it was just less of a struggle for me to render the things I saw onto paper. Impressed by my ability, my mother insisted that I was destined to become a great artist. So I always had it in my head that I would one day create a masterpiece, something like the`,
                                    {
                                        anchor: `Tintin comic books`,
                                        wiki: `The_Adventures_of_Tintin`
                                    },
                                    `I adored at the time.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 185,
                    lyric: `Then to Willy, in the cover could say sorry for the world!`
                }
            ]
        },
        {
            unitMap: {
                stanzaType: POSTCHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 191,
                    lyric: [
                        {
                            anchor: [
                                {
                                    isItalic: true,
                                    lyric: `Bobtail`
                                },
                                `'s cover`
                            ],
                            todo: true,
                            card: {
                                description: [
                                    `My favorite word as a child was "bobtail." I was just so proud of myself the day I realised that the line "bells on bobtail ring," from the song`,
                                    {
                                        anchor: `"Jingle Bells,"`,
                                        wiki: `Jingle_Bells`
                                    },
                                    `isn't actually a nonsensical phrase. In any case,`,
                                    {
                                        isItalic: true,
                                        lyric: `Bobtail`
                                    },
                                    `became my catchall title for the great artistic work I would one day create.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `could say sorry for the world!`
                    ]
                },
                {
                    time: 197,
                    lyric: [
                        `Oh,`,
                        {
                            isItalic: true,
                            lyric: `Bobtail`
                        },
                        `'s cover could say sorry…!`
                    ]
                }
            ]
        }
    ]
}
