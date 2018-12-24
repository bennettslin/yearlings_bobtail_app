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
    RHYME,
    POSTCHORUS,
    INTRO,
    SOLO,
    FLASHBACK_TO_WORMHOLE_PREFIX,
    IS_DOT_UNIT
} from 'constants/lyrics'

export default {
    title: 'Willy the Cocoa',
    totalTime: 207,
    overview: `Willy the Cocoa was a mentally disabled man who wandered our neighbourhood collecting recyclables for a living. One day, some gangbangers decided to pick a fight and smashed his head open with a bottle, killing him instantly. My younger brother was diagnosed with severe autism at around this time, and in light of Willy's murder, I would lie awake in fear of what lay in my brother's future.`,
    lyricUnits: [
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `Kids in the neighbourhood knew Willy as "The Cocoa," referring both to the Coke bottles he collected and to his seeming a bit "cuckoo." I don't think there was an official way to spell it.`,
                        dotKeys: {
                            [BACKSTORY]: true
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
                        description: [
                            `In the past, the developmentally disabled were often thought to be`,
                            {
                                anchor: `changelings,`,
                                wiki: `Changeling`
                            },
                            `or disguised trolls left in place of stolen human children. So I wanted to capture the sound of woodland trolls in secluded revelry after such a heist, and figured it was akin to the swamp rock of`,
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
            lyricUnit: [
                {
                    time: 0,
                    centre: {
                        italic: `(Willy's theme)`
                    }
                }
            ]
        },
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: [
                            `The chord progression here zigzags between a minor third down, followed by a whole step up. In mimicry, the melodicas play a sped-up and warped version of this descending pattern at the cadence of each line.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: VERSES
            },
            lyricUnit: [
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
                            card: {
                                description: [
                                    `I grew up in the`,
                                    {
                                        anchor: `San Fernando Valley`,
                                        wiki: `San_Fernando_Valley`
                                    },
                                    `area of Los Angeles, where wide boulevards stretch endlessly along a grid plan, and mountains block the horizon on all sides. In the mirages created by the summer heat, reflections of these mountains naturally point inwards, as if their jagged peaks had caused the cracks in the asphalt.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `in tarred pavement mirage.`
                    ]
                },
                {
                    time: 17,
                    lyric: [
                        {
                            anchor: `Hydrants burst`,
                            card: {
                                description: `To keep cool during the summer, kids would sometimes crack open a fire hydrant, to the dismay of city officials. The water often failed to drain, forming stagnant pools and posing a health hazard.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `as early worms work this`,
                        {
                            anchor: `dying coyote's jaw.`,
                            cards: [
                                {
                                    description: `Occasionally, a coyote would wander down from the surrounding hillsides and get hit by traffic.`,
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: `The Valley is like one big lower jaw of a carcass, and all its residents like decomposers furthering its decay.`,
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
                subCard: [
                    {
                        time: 30,
                        lyric: {
                            italic: [
                                {
                                    anchor: `Chilled cola's free`,
                                    card: {
                                        description: `Willy eagerly awaits the complimentary soft drink that is part of his reimbursement at the recycling center.`,
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
            lyricUnit: [
                {
                    time: 23,
                    lyric: [
                        `Swill pop poured from`,
                        {
                            anchor: `wayside bottle,`,
                            card: {
                                description: `Willy begins his daily rounds by filling his shopping cart with recyclables found littered along the sidewalks.`,
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
                            cards: [
                                {
                                    description: [
                                        `Willy had`,
                                        {
                                            anchor: `microcephaly,`,
                                            wiki: `Microcephaly`
                                        },
                                        `a medical condition in which the brain fails to develop properly, resulting in a head that is abnormally small in size.`
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
            lyricUnit: [
                {
                    time: 32,
                    lyric: [
                        `licking lips`,
                        {
                            anchor: `he ends his stroll.`,
                            card: {
                                description: `In most legends, changelings wittingly participate in the deceit and take pains to hide their true form. And so, preparing to drop off his recyclables where he'll rejoin the company of others, Willy "ends as troll."`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                    [REFERENCE]: true
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
                        description: `In some legends, trolls inadvertently reveal their true identity by using some tool in a wrong manner, so I figured they would also have a peculiar way of playing instruments. As such, I muted the lead guitar and mandolin while throwing in a slew of legato slides.`,
                        dotKeys: {
                            [OBSERVATION]: true,
                            [REFERENCE]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: PRECHORUS
            },
            lyricUnit: [
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
                            card: {
                                description: `Some households would help Willy by leaving out their discarded recyclables for him to collect.`,
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
                            card: {
                                description: `Or else, to the "son." My mother is cutting my brother's hair on the front lawn, since the cleanup afterwards will be easier.`,
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
                            card: {
                                description: `My brother, the baby of our family, was typically calm and quiet in demeanour. However, when made to do things he didn't enjoy or understand, such as sitting through a haircut, he could erupt in a frenzied outburst.`,
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
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `Lyrically, I tried to recreate my mishearings of adult conversation when my parents were first learning about autism. I spent a week telling everyone that my brother was "artistic," for example.`,
                        dotKeys: {
                            [BACKSTORY]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS
            },
            lyricUnit: [
                {
                    time: 47,
                    lyric: [
                        `As`,
                        {
                            anchor: `gap-toothed coma`,
                            cards: [
                                {
                                    description: `My brother's facial expression is blank, right up until the moment he is ruffled by my mother's "gap-toothed comb."`,
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
                            card: {
                                description: `My mother also wields a pair of "scissors."`,
                                dotKeys: {
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
                            cards: [
                                {
                                    description: `Given my brother's distaste for haircuts, Willy jokingly predicts that he will sport an unshaven look as an adult.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    description: `Willy might be hinting that he literally sees my brother wearing a beard, here and now. After all, in many legends the changeling is not a child at all, but rather a fully grown troll who is perhaps centuries old.`,
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
                            card: {
                                description: `But it should come as no surprise if Willy is immune to whatever enchantment disguises my brother's true form, since Willy is possibly a changeling himself, as evinced by his own unkempt facial hair.`,
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
                            cards: [
                                {
                                    description: `Being acquainted with my family over the years, Willy understands that my brother's tantrums are the reason my mother allows his hair to reach unruly lengths.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    description: `Willy observes that my brother has yet to outgrow his "colic," a period of excessive crying in infants. In the past, such inexplicable lack of development gave rise to a belief in changelings.`,
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
            lyricUnit: [
                {
                    time: 71,
                    lyric: [
                        `Prying`,
                        {
                            anchor: `X-ray spec'd,`,
                            properNoun: true,
                            card: {
                                description: [
                                    `Back then, the back pages of comic books were filled with ads for novelty items such as`,
                                    {
                                        anchor: `X-Ray Specs,`,
                                        wiki: `X-Ray_Specs_(novelty)`
                                    },
                                    `special glasses that purportedly allow one to see through objects. Having sent away for a pair some time ago, I am now trying them on.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `enraged at`,
                        {
                            anchor: `pages clawed,`,
                            card: {
                                description: `My brother enjoyed cutting shapes of alphabet letters out of paper, an activity encouraged by my parents since it was creative and kept him occupied. Unfortunately, if I left a comic book lying on the floor, he might easily mistake it for an old magazine from his scrap pile.`,
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
                            card: {
                                description: `There were times I was so angry at my brother that I laid down some serious hurt. He never fought back.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `the`,
                        {
                            anchor: `bearded baby`,
                            card: {
                                description: `It would have been the height of irony if my brother were actually centuries old, as it frustrated me that I always had to engage with him at a level far below his actual age.`,
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
                            card: {
                                description: `The hardest thing about having hurt my brother is that I could never really apologise, since he could never truly comprehend that I was sorry. I suppose that for him, it was just another part of what life was.`,
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
                            cards: [
                                {
                                    description: `I spent a long time wondering why my brother was autistic and I was not, when our circumstances weren't any different. It didn't seem far-fetched to suppose that cognitive skills are a fixed supply in a mother's womb, and that I had selfishly taken my brother's share.`,
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
            lyricUnit: [
                {
                    time: 96,
                    centre: {
                        italic: `(Willy's theme)`
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
                    time: 106,
                    lyric: [
                        {
                            anchor: `Killcrop`,
                            card: {
                                description: [
                                    `In Germanic folklore, a killcrop is an infant suspected of being a changeling due to its voracious appetite. The etymology is straightforward— one who "kills crops"— and reflects a primary concern of past times, when children unable to work for their keep could lead to a farmer's ruin.`
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
                            card: {
                                description: `In his zeal to reach a discarded beer bottle, Willy steps into a puddle and splashes standing water onto a pair of gangbangers idling nearby. "Soused loafers" here refers to these drunken layabouts, as well as to their drenched shoes.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `shouting 'tard payment is due.`
                    ]
                },
                {
                    time: 113,
                    lyric: [
                        {
                            anchor: `Hit this witch`,
                            cards: [
                                {
                                    description: `A switch is a flexible rod used for punishment. It was believed that beating a changeling would provoke it to reveal its true nature and return the stolen child, and past cases of such abuse leading to death have been recorded. So if Willy is a changeling, then it seems predestined for him to meet a violent end.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [REFERENCE]: true
                                    }
                                },
                                {
                                    wormhole: `hit_the_switch`
                                }
                            ]
                        },
                        `with switch, whispers wind, to fix his switcheroo…`
                    ]
                }
            ]
        },
        {
            unitMap: {
                stanzaType: VERSES,
                subCardType: RHYME,
                subsequent: true,
                subCard: [
                    {
                        time: 126,
                        lyric: {
                            italic: [
                                `Shelled skull has freed`,
                                {
                                    anchor: `unsalvaged soul…`,
                                    cards: [
                                        {
                                            description: `Religious doctrine in the past often sanctioned the abuse of disabled children by giving assurance that they were devoid of souls. But I came to a different conclusion. If my brother and I could be so alike in physical makeup yet so different in mental presence, then it made more sense to believe that no one has a soul.`,
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
            lyricUnit: [
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
                            card: {
                                description: `Eager for a fight, the gangbangers start pushing Willy around. Amidst the commotion, his shopping cart is upturned, spilling empty beer bottles onto the ground.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `swung sounds the`,
                        {
                            anchor: `past-noon toll.`,
                            card: {
                                description: `One gangbanger grabs a bottle and smashes it against Willy's face. The sound reverberates throughout the neighbourhood, like the ring of a town bell.`,
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
            lyricUnit: [
                {
                    time: 128,
                    lyric: [
                        `dripping`,
                        {
                            anchor: `Willy's stalkless bulb.`,
                            properNoun: true,
                            card: {
                                description: `The "stalkless bulb" here refers to Willy's brain, which has just been severed from its spine, as well as to a dormant plant ready to be set in the ground.`,
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
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: [
                            `I played the electric guitar riff here with both a slide and the whammy bar, which is another nonsensical thing that I could picture trolls doing.`
                        ],
                        dotKeys: {
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: PRECHORUS
            },
            lyricUnit: [
                {
                    time: 131,
                    lyric: [
                        `Oh, and August was the`,
                        {
                            anchor: `sawdust month`,
                            card: {
                                description: `Later in this "saddest" month when Willy was killed, I am helping my mother in our backyard garden as we spread the leftover sawdust from my father's carpentry.`,
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
                            card: {
                                description: [
                                    `We are planting`,
                                    {
                                        anchor: `asphodels,`,
                                        wiki: `Asphodelus`
                                    },
                                    `a popular garden plant as well as the immortal flower of the underworld in Greek mythology. As we spread mulch to soften the soil, I remark that Willy's body must have also softened the "asphalt" beneath which it lay.`
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
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `bluebonnet`,
                                        wiki: 'Bluebonnet_(plant)'
                                    },
                                    `is another garden flower, and a bonnet is what my mother has tucked my brother's head in to protect him from the sun. But in light of Willy's murder, I wonder how protected his head is against other things.`
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
                            card: {
                                description: `Having recently assaulted my brother in anger over a shredded comic book, I am now indifferent to the latest release from my monthly subscription.`,
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
            lyricUnit: [
                {
                    time: 143,
                    lyric: [
                        `But`,
                        {
                            anchor: `how marbleless,`,
                            card: {
                                description: `Or, "how marvellous." Sometimes friends of my parents, in a poor attempt to empathise with my brother's autism, would remark on how blissful it must be to go through life without all of one's "marbles," so to speak.`,
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
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `"Imprinting"`,
                                            wiki: `Imprinting_(psychology)`
                                        },
                                        `is a period during which a child acquires certain behaviour, such as emotional attachment. Each time my mother learned a new concept related to child development, she would blame herself for not having known it soon enough to help my brother.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: `An "imp-runt" literally refers to the weakest in a litter of goblins, and thus a prime choice for them to replace with a human.`,
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
                            card: {
                                description: `My brother learned to answer the question of how old he was when he was six. But even after turning seven, he still insisted on answering "six." We finally got him to accept that "seven" was the new correct answer, but the cost in sweat and tears was so high that when he turned eight, none of us had the energy to relive the ordeal. He's been answering "seven" ever since. And so here, I imagine him as a grownup testily correcting a stranger who has the nerve to ask if he is "six."`,
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
            lyricUnit: [
                {
                    time: 167,
                    lyric: [
                        `Such`,
                        {
                            anchor: `heavy fears,`,
                            card: {
                                description: `On the night of Willy's murder, I wake up screaming in fear of my mortality. My mother rushes to my bedside to comfort me.`,
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
                            anchor: `not yet Webelos!`,
                            cards: [
                                {
                                    description: [
                                        `My mother was a`,
                                        {
                                            anchor: `Cub Scouts`,
                                            wiki: `Cub_Scouting_(Boy_Scouts_of_America)`
                                        },
                                        `den mother. The oldest scouts in the pack, those in the fourth or fifth grade, belong to the Webelos rank, which stands for "We'll Be Loyal Scouts."`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: `My mother might also be saying that I am not yet "way below."`,
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
                            card: {
                                description: `In keeping with her Buddhist faith, my mother tells me not to worry, since I'm not going to die for a long while. She then assures me that when my time finally does come in another seventy years or so, I will have long made peace with death.`,
                                dotKeys: {
                                    [NARRATIVE]: true
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
                            card: {
                                description: [
                                    `I wore an eyepatch as a child to correct my`,
                                    {
                                        anchor: `lazy eye,`,
                                        wiki: `Amblyopia`
                                    },
                                    `which caused a lack of depth perception that led me to figure out perspective early on. Impressed by my drawings, my mother insisted that I was destined to become a great artist, and encouraged every impulse I had to explore new mediums. I thus had it in my head that I would someday create an epic masterpiece, which we assumed at the time would be a comic book.`
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
            lyricUnit: [
                {
                    time: 191,
                    lyric: [
                        {
                            anchor: [
                                {
                                    italic: `Bobtail`
                                },
                                `'s cover`
                            ],
                            card: {
                                description: [
                                    `My favourite word as a child was "bobtail." I think I was just so proud of myself when I realised that the line "bells on bobtail ring" from the song`,
                                    {
                                        anchor: `"Jingle Bells"`,
                                        wiki: `Jingle_Bells`
                                    },
                                    `isn't actually a nonsensical phrase. In any case,`,
                                    {
                                        italic: `Bobtail`
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
                            italic: `Bobtail`
                        },
                        `'s cover could say sorry…!`
                    ]
                }
            ]
        }
    ]
}
