import { BACKSTORY,
         NARRATIVE,
         OBSERVATION,
         PUN,
         REFERENCE,
         SONGWRITING } from '../constants/dots'
import { LEFT,
         OVERLAP,
         VERSES,
         PRECHORUS,
         CHORUS,
         RHYME,
         POSTCHORUS,
         INTRO,
         SOLO,
         FLASHBACK_TO_PORTAL_PREFIX,
         IS_DOT_STANZA } from '../constants/lyrics'

module.exports = {
    scenes: [
        {
            unitIndex: 1,
            description: ``
        },
        {
            unitIndex: 2,
            description: `Willy stands beside a shopping cart filled with recyclables. He holds a soda bottle up high as he pours its remaining content onto the ground.`,
            actors: {
                willy: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'side angle, holding up a bottle, squinting'
                }
            },
            backdrops: {
                foreground: 'front description',
                background: 'back description 1',
                floor: 'floor description 1'
            },
            stageProps: {
                couch: 1
            }
        },
        {
            unitIndex: 5,
            description: `Outside next to the porch, Bennett's mother had been cutting Christopher's hair a moment ago. Christopher has just leapt out of his chair in panic. The cloth that had been draped around him has been tossed in the air. Looking exasperated, Bennett tries to catch him. Having just arrived, Willy is ducked behind the porch, a kind chuckle on his face.`,
            actors: {
                willy: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'side, ducking behind post, chuckling'
                },
                mother: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'squatting, righting chair, exasperated, concerned'
                },
                christopher: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'off balance, having a tantrum'
                },
                preteenBennett: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'stepping off porch, cautious, trying to calm Christopher'
                }
            }
        },
        {
            unitIndex: 7,
            description: `Inside the house, holding his X-ray specs, Bennett is kicking Christopher, who rolls on the ground, in tears and clenching his stomach. Tattered comics and cut-out letters are on the ground. Bennett's father is rushing in, angry and determined to stop the fight.`,
            actors: {
                father: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'side, running, angry'
                },
                christopher: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'lying on side, in pain, clenching stomach'
                },
                preteenBennett: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'side angle, aggressive stance, angry'
                }
            }
        },
        {
            unitIndex: 9,
            description: `Willy is in a fight with two gangbangers. One is angry about his drenched pants, while the other is smashing Willy's head with a soda bottle.`,
            actors: {
                willy: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'side angle, defending himself, fearful'
                },
                howie: {
                    gangbanger: {
                        todo: true,
                        workedHours: 1.25,
                        description: 'side angle, pointing at shoe, pushing Willy'
                    }
                },
                tomer: {
                    gangbanger: {
                        todo: true,
                        workedHours: 1.25,
                        description: 'pulling bottle from cart, about to strike, threatening'
                    }
                }
            }
        },
        {
            unitIndex: 12,
            description: `Inside the house, Bennett is in bed, with his mother beside him giving comfort. Outside, the window shows a scene with police hovering over a dead body. Mother is getting up to close the window.`,
            actors: {
                mother: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'getting up to close curtain, trying to be reassuring'
                },
                preteenBennett: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'sitting up in bed, worried, scared'
                }
            }
        },
        {
            unitIndex: 14,
            description: `Bennett is now dreaming. It's night, and he and Willy are holding Christopher's hand, one on each side. Christopher gazes up at Bennett with a knowing, comforting smile. Willy's and Christopher's shadows both reveal them to be trolls. Together, they are leading Bennett to a circle of trolls.`,
            actors: {
                willy: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'side angle, merrily greeting trolls'
                },
                christopher: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'side angle, looking up at Bennett, reassuring'
                },
                preteenBennett: {
                    todo: true,
                    workedHours: 1.25,
                    description: 'side angle, wide-eyed, needing reassurance'
                }
            }
        }
    ],
    totalTime: 207,
    overview: `Willy the Cocoa was a mentally disabled man who wandered our neighbourhood collecting recyclables for a living. One day, some gangbangers decided to pick a fight and smashed his head open with a bottle, killing him instantly. My younger brother was diagnosed with severe autism at around this time, and in light of Willy's murder, I would lie awake in fear of what lay in my brother's future.`,
    title: {
        anchor: 'Willy the Cocoa',
        annotation: {
            description: `Kids in the neighbourhood knew Willy as "The Cocoa," referring both to his Coke bottles and to his seeming a bit "cuckoo." I don't think there was an official way to spell it.`,
            dotKeys: {
                [BACKSTORY]: true
            }
        }
    },
    lyrics: [
        [
            {
                time: 0,
                centre: {
                    italic: `(Willy's theme)`
                }
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
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
            }
        ],
        [
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
                        annotation: {
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
                    `in tarred pavement mirage.`,
                ]
            },
            {
                time: 17,
                lyric: [
                    {
                        anchor: `Hydrants burst`,
                        annotation: {
                            description: `To keep cool during the summer, kids would sometimes crack open a fire hydrant, to the dismay of city officials. The water often failed to drain, forming stagnant pools and posing a health hazard.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `as early worms work this`,
                    {
                        anchor: `dying coyote's jaw.`,
                        annotation: [
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
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: [
                            `The chord progression here zigzags between a minor third down, followed by a whole step up. In mimicry, the melodicas play a sped-up and warped version of this descending pattern at the cadence of each line.`
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
                time: 23,
                lyric: [
                    `Swill pop poured from`,
                    {
                        anchor: `wayside bottle,`,
                        annotation: {
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
                        annotation: [
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
            },
            {
                unitMap: true,
                stanzaType: VERSES,
                substanzaType: RHYME,
                subsequent: true,
                subStanza: [
                    {
                        time: 30,
                        lyric: {
                            italic: [
                                {
                                    anchor: `Chilled cola's free`,
                                    annotation: {
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
                ],
            }
        ],
        [
            {
                time: 32,
                lyric: [
                    `licking lips`,
                    {
                        anchor: `he ends his stroll.`,
                        annotation: {
                            description: `In most legends, changelings wittingly participate in the deceit and take pains to hide their true form. And so, preparing to drop off his recyclables where he'll rejoin the company of others, Willy "ends as troll."`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true,
                                [REFERENCE]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                unitClassName: `${LEFT} ${OVERLAP}`,
                stanzaType: VERSES,
                subsequent: true
            },
        ],
        [
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
                        annotation: {
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
                        annotation: {
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
                        annotation: {
                            description: `My brother, the baby of our family, was typically calm and quiet in demeanour. However, when made to do things he didn't enjoy or understand, such as sitting through a haircut, he could erupt in a frenzied outburst.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: `In some legends, trolls inadvertently reveal their true identity by using some tool in a wrong manner, so I figured they would also have a peculiar way of playing instruments. As such, I muted the lead guitar and mandolin while throwing in a slew of legato slides.`,
                        dotKeys: {
                            [OBSERVATION]: true,
                            [REFERENCE]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: PRECHORUS
            }
        ],
        [
            {
                time: 47,
                lyric: [
                    `As`,
                    {
                        anchor: `gap-toothed coma`,
                        annotation: [
                            {
                                description: `My brother's facial expression is blank, right up until the moment he is ruffled by my mother's "gap-toothed comb."`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        ],
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
                        annotation: {
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
                        annotation: [
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
                        annotation: {
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
                        annotation: [
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
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
                        description: `Lyrically, I tried to recreate my mishearings of adult conversation when my parents were first learning about autism. I spent a week telling everyone that my brother was "artistic," for example.`,
                        dotKeys: {
                            [BACKSTORY]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 71,
                lyric: [
                    `Prying`,
                    {
                        anchor: `X-ray spec'd,`,
                        properNoun: true,
                        annotation: {
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
                        annotation: {
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
                        annotation: {
                            description: `There were times I was so angry at my brother that I laid down some serious hurt. He never fought back.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `the`,
                    {
                        anchor: `bearded baby`,
                        annotation: {
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
                        annotation: {
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
                        annotation: [
                            {
                                description: `I spent a long time wondering why my brother was autistic and I was not, when our circumstances weren't any different. It didn't seem far-fetched to suppose that cognitive skills are a fixed supply in a mother's womb, and that I had selfishly taken my brother's share.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            },
                            {
                                portal: {
                                    portalKey: `learn_him_good`,
                                    portalPrefix: FLASHBACK_TO_PORTAL_PREFIX
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
            },
            {
                unitMap: true,
                stanzaType: POSTCHORUS
            }
        ],
        [
            {
                time: 96,
                centre: {
                    italic: `(Willy's theme)`
                }
            },
            {
                unitMap: true,
                stanzaType: SOLO
            }
        ],
        [
            {
                time: 106,
                lyric: [
                    {
                        anchor: `Killcrop`,
                        annotation: {
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
                        annotation: {
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
                        annotation: [
                            {
                                description: `A switch is a flexible rod used for punishment. It was believed that beating a changeling would provoke it to reveal its true nature and return the stolen child, and past cases of such abuse leading to death have been recorded. So if Willy is a changeling, then it seems predestined for him to meet a violent end.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [REFERENCE]: true
                                }
                            },
                            {
                                portal: `hit_the_switch`
                            }
                        ]
                    },
                    `with switch, whispers wind, to fix his switcheroo…`
                ]
            },
            {
                unitMap: true,
                stanzaType: VERSES
            }
        ],
        [
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
                        annotation: {
                            description: `Eager for a fight, the gangbangers start pushing Willy around. Amidst the commotion, his shopping cart is upturned, spilling empty beer bottles onto the ground.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `swung sounds the`,
                    {
                        anchor: `past-noon toll.`,
                        annotation: {
                            description: `One gangbanger grabs a bottle and smashes it against Willy's face. The sound reverberates throughout the neighbourhood, like the ring of a town bell.`,
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
                stanzaType: VERSES,
                substanzaType: RHYME,
                subsequent: true,
                subStanza: [
                    {
                        time: 126,
                        lyric: {
                            italic: [
                                `Shelled skull has freed`,
                                {
                                    anchor: `unsalvaged soul…`,
                                    annotation: [
                                        {
                                            description: `Religious doctrine in the past often sanctioned the abuse of disabled children by giving assurance that they were devoid of souls. But I came to a different conclusion. If my brother and I could be so alike in physical makeup yet so different in mental presence, then it made more sense to believe that no one has a soul.`,
                                            dotKeys: {
                                                [OBSERVATION]: true,
                                                [REFERENCE]: true
                                            }
                                        },
                                        {
                                            portal: `unsalvaged_sows`
                                        }
                                    ],
                                }
                            ]
                        }
                    }
                ],
            }
        ],
        [
            {
                time: 128,
                lyric: [
                    `dripping`,
                    {
                        anchor: `Willy's stalkless bulb.`,
                        properNoun: true,
                        annotation: {
                            description: `The "stalkless bulb" here refers to Willy's brain, which has just been severed from its spine, as well as to a dormant plant ready to be set in the ground.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                unitClassName: `${LEFT} ${OVERLAP}`,
                stanzaType: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 131,
                lyric: [
                    `Oh, and August was the`,
                    {
                        anchor: `sawdust month`,
                        annotation: {
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
                        annotation: {
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
                        annotation: {
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
                        annotation: {
                            description: `Having recently assaulted my brother in anger over a shredded comic book, I am now indifferent to the latest release from my monthly subscription.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: IS_DOT_STANZA,
                    annotation: {
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
            }
        ],
        [
            {
                time: 143,
                lyric: [
                    `But`,
                    {
                        anchor: `how marbleless,`,
                        annotation: {
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
                        annotation: [
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
                        annotation: {
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
            },
            {
                unitMap: true,
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 167,
                lyric: [
                    `Such`,
                    {
                        anchor: `heavy fears,`,
                        annotation: {
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
                        annotation: [
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
                            },
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
                        annotation: {
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
                        annotation: [
                            {
                                description: `My mother suggests that my life will be a patchwork onto which I continually sew new experiences. In turn, the insights gained from these experiences may then inform and enrich my art.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            },
                            {
                                portal: `needle_done`
                            }
                        ]
                    },
                    `you'll write this`,
                    {
                        anchor: `book of yours.`,
                        annotation: {
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
            },
            {
                unitMap: true,
                stanzaType: POSTCHORUS
            }
        ],
        [
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
                        annotation: {
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
            },
            {
                unitMap: true,
                stanzaType: POSTCHORUS,
                subsequent: true
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
            workedHours: 3,
            neededHours: 3
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
            taskName: `review synopses and rough illustrations`,
            workedHours: 3,
            neededHours: 3,
        },
        {
            taskName: `tenses and categorisation`,
            workedHours: 4,
            neededHours: 4
        },
        {
            taskName: `annotations`,
            workedHours: 40,
            neededHours: 40
        }
    ]
}
