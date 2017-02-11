import { LEFT, OVERLAP, INSTRUMENTAL, VERSES, PRECHORUS, CHORUS, BRIDGE, RHYME, AFTERWORD, SONGWRITING, BACKSTORY, NARRATIVE, PUN, REFERENCE, OBSERVATION, DOT_STANZA_CONSTANT } from 'helpers/constants'

// TODO: Say that gardening was later that summer, while nighttime scare moment was closer to Willy's death.
module.exports = {
    title: {
        anchor: 'Willy the Cocoa',
        annotation: {
            description: `Kids in the neighbourhood called Willy "The Cocoa," referring both to his Coke bottles and to his seeming a bit "cuckoo." `,
            dotKeys: {
                [BACKSTORY]: true
            }
        }
    },
    scenes: [
        {
            verseIndex: 0,
            description: `Willy stands beside a shopping cart filled with recyclables. He holds a soda bottle up high as he pours its remaining content onto the ground.`,
            characters: {
                willy: 1
            }
        },
        {
            verseIndex: 9,
            description: `Outside next to the porch, Bennett's mother had been cutting Christopher's hair a moment ago. Christopher has just leapt out of his chair in panic. The cloth that had been draped around him has been tossed in the air. Looking exasperated, Bennett tries to catch him. Having just arrived, Willy is ducked behind the porch, a kind chuckle on his face.`,
            characters: {
                willy: 1,
                mother: 1,
                christopher: 1,
                preteenBennett: 1
            }
        },
        {
            verseIndex: 19,
            description: `Inside the house, holding his X-ray specs, Bennett is kicking Christopher, who rolls on the ground, in tears and clenching his stomach. Tattered comics and cut-out letters are on the ground. Bennett's father is rushing in, angry and determined to stop the fight.`,
            characters: {
                father: 1,
                christopher: 1,
                preteenBennett: 1
            }
        },
        {
            verseIndex: 27,
            description: `Willy is in a fight with two gangbangers. One is angry about his drenched pants, while the other is smashing Willy's head with a soda bottle.`,
            characters: {
                willy: 1,
                gangbangers: 2
            }
        },
        {
            verseIndex: 34,
            description: `Inside the house, Bennett is in bed, with his mother beside him giving comfort. Outside, the window shows a scene with police hovering over a dead body. Mother is getting up to close the window.`,
            characters: {
                mother: 1,
                preteenBennett: 1
            }
        },
        {
            verseIndex: 44,
            description: `Bennett is now dreaming. It's night, and he and Willy are holding Christopher's hand, one on each side. Christopher gazes up at Bennett with a knowing, comforting smile. Willy's and Christopher's shadows both reveal them to be trolls. Together, they are leading Bennett to a circle of trolls.`,
            characters: {
                willy: 1,
                christopher: 1,
                preteenBennett: 1,
                trolls: 3
            }
        }
    ],
    tip: {
        description: 'placeholder tip'
    },
    totalTime: 207,
    overview: `Willy was a mentally disabled man who wandered our Los Angeles neighbourhood collecting recyclables for a living. One day, some gangbangers decided to pick a fight and smashed his head open with a bottle, killing him instantly. My younger brother was diagnosed with severe autism at around this time, and in light of Willy's murder, I would lie awake in fear of what lay in my brother's future.`,
    lyrics: [
        [
            {
                time: 0,
                centre: {
                    italic: `(intro)`
                }
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: [
                            `In folklore of the past,`,
                            {
                                anchor: `changelings`,
                                wiki: `Changeling`
                            },
                            `were trolls left in place of stolen human children, and served to explain the developmentally disabled. So I wanted this song to sound like a band of woodland trolls in secluded revelry after such a heist, and figured it was akin to the swamp rock of`,
                            {
                                anchor: `Creedence Clearwater Revival,`,
                                wiki: `Creedence_Clearwater_Revival`
                            },
                            `with melodicas thrown in to evoke the sound of Cajun accordions.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                sectionClass: INSTRUMENTAL
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
                                `of Southern California, where wide boulevards stretch endlessly along a grid plan, and mountains block the horizon on all sides. In the mirages created by the summer heat, the reflections of these mountains naturally point inwards, as if their jagged peaks had caused the cracks in the asphalt.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true
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
                            description: `The sight of kids splashing around a burst fire hydrant wasn't really a Los Angeles thing, but it happened once or twice in my neighbourhood.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `as early worms work this`,
                    {
                        anchor: `dying coyote's jaw.`,
                        annotation: {
                            description: `Occasionally, a coyote would wander down from the surrounding hillsides and get hit by traffic. Of course, the Valley is also like one big lower jaw, with all its inhabitants helping it to decompose.`,
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
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: [
                            `The chord progression here zigzags between a minor third down, followed by a whole step up. In mimicry, the melodicas play a sped-up and warped version of this descending pattern at the cadence of each line.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                sectionClass: VERSES
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
                            description: `Willy begins his daily rounds by filling up a shopping cart with recyclables found in garbage bins and littered along the sidewalks.`,
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
                                    `a medical condition in which the brain fails to develop properly, resulting in a head that was abnormally small in size.`
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
                sectionClass: VERSES,
                subsectionClass: RHYME,
                subsequent: true,
                subStanza: [
                    {
                        time: 30,
                        lyric: [
                            {
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
                        ]
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
                unitClass: `${LEFT} ${OVERLAP}`,
                sectionClass: VERSES
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
                            description: `Some families help Willy by leaving out their discarded recyclables for him to gather in bulk.`,
                            dotKeys: {
                                [NARRATIVE]: true
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
                            description: `Or else, to the "son." My mother is cutting my younger brother's hair on the front lawn, since the cleanup afterwards will be easier.`,
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
                            description: `My brother was typically calm and quiet in demeanour as a child. However, when made to do things he didn't enjoy or understand, such as sitting through the haircut currently taking place, he was prone to frenzied outbursts.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `I figured that trolls would have all the same instruments but play them in some weird way, so I muted the lead guitar and mandolin and threw in a whole lot of legato slides.`,
                        dotKeys: {
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                sectionClass: PRECHORUS
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
                                description: `While my brother often wore a blank expression on his face, it would instantly disappear once he felt provoked.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                }
                            },
                            {
                                description: `My mother is using a "gap-toothed comb."`,
                                dotKeys: {
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
                            description: `My mother is also wielding a pair of "scissors."`,
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
                        annotation: {
                            description: `Willy jokingly predicts that my brother will sport an unshaven look as an adult, given his present distaste for haircuts. But Willy might also be hinting that he literally sees my brother with a beard, here and now. After all, in many legends the changeling is not a child at all, but rather a fully grown troll who is perhaps centuries old.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [REFERENCE]: true
                            }
                        }
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
                            description: `Of course, it should not be surprising if Willy is immune to the enchantment that disguises my brother's true form, since Willy is quite possibly a changeling himself, as evinced by his own unkempt facial hair.`,
                            dotKeys: {
                                [NARRATIVE]: true
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
                        annotation: {
                            description: `Being acquainted with my family over the years, Willy understands that my brother's outbursts are the reason my mother allows his hair to reach unruly lengths. However, Willy is also observing that my brother has yet to outgrow his "colic," a period of excessive crying in infants. In the past, such inexplicable lack of development in older children gave rise to a belief in changelings.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true,
                                [REFERENCE]: true
                            }
                        }
                    },
                    `yet I've seen!`
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `Lyrically, I tried to recreate my mishearings of adult conversation when my parents were first learning about autism. I spent a week telling everyone that my brother was "artistic," for example.`,
                        dotKeys: {
                            [BACKSTORY]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                sectionClass: CHORUS
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
                                `Back then, the back pages of a comic book were filled with ads for novelty items such as`,
                                {
                                    anchor: `X-Ray Specs,`,
                                    wiki: `X-Ray_Specs_(novelty)`
                                },
                                `a pair of special glasses that purportedly allow one to see through objects. Having sent away for them a while ago, I'm now trying them on. (They didn't actually work.)`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `enraged at`,
                    {
                        anchor: `pages clawed,`,
                        annotation: {
                            description: `My brother used to cut letters of the alphabet out of paper, an activity that my parents encouraged since it was creative and kept him occupied. Unfortunately, my comic book seems to have accidentally made its way into his scrap pile of old magazines.`,
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
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
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
                        annotation: {
                            description: `I spent a long time wondering why my brother was autistic and I was not, when our circumstances weren't really any different. It didn't seem far-fetched to suppose that cognitive abilities are a fixed supply in a mother's womb, and I had selfishly taken my brother's share.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
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
                sectionClass: BRIDGE
            }
        ],
        [
            {
                time: 96,
                centre: {
                    italic: `(solo)`
                }
            },
            {
                unitMap: true,
                sectionClass: INSTRUMENTAL
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
                                `In Germanic folklore, a killcrop is an infant suspected of being a changeling due to its voracious appetite. The etymology is straightforward— one who "kills crops"— and reflects the primary concerns of past times, when children unable to work for their keep could lead to a family's ruin.`
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
                            description: `In his zeal to reach a discarded beer bottle on the ground, Willy steps into a puddle and splashes sewage water onto a pair of gangbangers standing nearby. "Soused loafers" can refer to drenched shoes, as well as to drunken delinquents.`,
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
                        anchor: `Hit this witch with switch,`,
                        annotation: {
                            // TODO: Mention that gangbanger is hitting him.
                            description: `It was widely believed that tricking a changeling into revealing its true nature would force it to return the stolen child. The methods for doing so included hitting it with a switch, a flexible rod designed to inflict punishment.`,
                            dotKeys: {
                                [REFERENCE]: true
                            },
                            portal: `hit_the_switch`
                        }
                    },
                    `whispers wind, to fix his switcheroo…`
                ]
            },
            {
                unitMap: true,
                sectionClass: VERSES
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
                        anchor: `sack-spilled glass swung`,
                        annotation: {
                            description: `Eager for a fight, the gangbangers start pushing Willy around. Amidst the commotion, his shopping cart gets turned over, spilling a garbage bag full of empty glass bottles onto the ground. One of the gangbangers grabs a bottle and smashes it against Willy's face.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `sounds the`,
                    {
                        anchor: `past-noon toll.`,
                        annotation: {
                            // TODO: Mention sound of glass cracking Willy's head.
                            description: `Immediately past noon, the ring of a town bell is heard exactly once.`,
                            dotKeys: {
                                [REFERENCE]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: VERSES,
                subsectionClass: RHYME,
                subsequent: true,
                subStanza: [
                    {
                        time: 126,
                        lyric: [
                            {
                                italic: [
                                    `Shelled skull has freed`,
                                    {
                                        anchor: `unsalvaged soul…`,
                                        annotation: {
                                            description: `Given that abuse of an underdeveloped child often led to its death, religious doctrine in the past typically gave assurance that such children were devoid of souls. But I came to a different conclusion. If my brother and I were so alike in physical makeup, despite being so different in mental presence, then it made more sense to believe that no one has a soul.`,
                                            dotKeys: {
                                                [BACKSTORY]: true,
                                                [REFERENCE]: true
                                            },
                                            portal: `unsalvaged_sows`
                                        }
                                    }
                                ]
                            }
                        ]
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
                            description: `The "stalkless bulb" here is Willy's brain, which has just been severed from its spine. But it can also refer to a dormant plant ready to be set in the ground.`,
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
                unitClass: `${LEFT} ${OVERLAP}`,
                sectionClass: VERSES
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
                            description: `My father often built furniture in the garage. I'm now helping my mother spread the leftover sawdust in our backyard garden, during this "saddest" month that Willy was killed.`,
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
                time: 134,
                lyric: [
                    `that saw this`,
                    {
                        anchor: `mulch soften asphodel.`,
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `asphodel`,
                                    wiki: `Asphodelus`
                                },
                                `is a popular garden plant, as well as an immortal flower of the underworld in Greek mythology. Since we are made of the same physical matter as the mulch we use to soften the soil, I remark that Willy's body must have also "softened the asphalt" beneath which it lay.`
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
                                `is another garden flower, and a bonnet is what my mother tucks my brother's head in to protect him from the sun. But in light of Willy's murder, I wonder how well-protected his head is against other things.`
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
                            description: `Having recently kicked my brother in anger over a shredded comic book, I'm now indifferent to the latest release from my monthly subscription.`,
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
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: [
                            `I also pictured trolls doing bizarre things like playing a slide guitar with the whammy bar.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                sectionClass: PRECHORUS
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
                            description: `Or, "how marvellous." Sometimes friends of my parents, in a poor attempt to empathise, would marvel at how blissful it must be for my brother to go through life without all of his marbles, so to speak.`,
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
                        annotation: {
                            description: [
                                `Or "imprint."`,
                                {
                                    anchor: `Imprinting`,
                                    wiki: `Imprinting_(psychology)`
                                },
                                `is a period during which a child acquires certain behaviour, such as emotional attachment. Each time my mother learned a new concept related to child development, she would blame herself for not having known it soon enough to help my brother. An "imp-runt" is also literally the weakest child in a litter of goblins, and thus a prime choice to be replaced with a human.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                                [PUN]: true
                            }
                        }
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
                            description: `My brother learned to answer the question "how old are you?" when he was six. But even after turning seven, he still insisted on answering "six." We finally got him to accept that "seven" was the new correct answer, but the cost in sweat and tears was so high that when he turned eight, none of us had the energy to relive the ordeal. He's been saying "seven" ever since. Here, I imagine him as a grownup, testily correcting a stranger who has the nerve to ask if he is "six."`,
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
                sectionClass: CHORUS
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
                            description: `One night when I woke up screaming in fear of my mortality, my mother rushed to my bedside to comfort me.`,
                            dotKeys: {
                                [BACKSTORY]: true,
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
                        annotation: {
                            description: [
                                `The oldest`,
                                {
                                    anchor: `Cub Scouts`,
                                    wiki: `Cub_Scouting_(Boy_Scouts_of_America)`
                                },
                                `in a pack, those in the fourth or fifth grade, belong to the Webelos den. We were taught that it stands for "We'll Be Loyal Scouts," but it was originally "Wolf, Bear, Lion, Scout." My mother might also be saying that I am not yet "way below."`
                            ],
                            dotKeys: {
                                [PUN]: true
                            }
                        }
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
                            description: `My mother told me not to worry, since I wasn't going to die for quite a while. She then assured me that when my time finally did come in another seventy years or so, I would have long made sense of death, and be at peace with it.`,
                            dotKeys: {
                                [BACKSTORY]: true,
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
                    `In time with`,
                    {
                        // TODO: Specify needle for sewing.
                        anchor: `needle done,`,
                        annotation: {
                            portal: `needle_done`
                        }
                    },
                    `you'll write this`,
                    {
                        anchor: `book of yours.`,
                        annotation: {
                            description: [
                                `My mother always insisted that I was destined to make great artistic works, even as I bounced from one interest to the next as a kid.`,
                                {
                                    italic: `Bobtail`
                                },
                                `was the catch-all title for my epic masterpiece that I would one day create, whatever it was. At the time, we assumed it would be a comic book of sorts.`
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
                time: 185,
                lyric: `Then to Willy, in the cover could say sorry for the world!`
            },
            {
                unitMap: true,
                sectionClass: BRIDGE
            }
        ],
        [
            {
                time: 191,
                lyric: [
                    {
                        italic: `Bobtail`
                    },
                    `'s cover could say sorry for the world!`
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
                sectionClass: BRIDGE,
                subsequent: true
            }
        ],
        [
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `I recently asked my brother how old he was. He answered seventeen, which is only a decade behind. So I guess we're making progress.`,
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
            workedHours: 40,
            neededHours: 40
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
        }
    ]
}
