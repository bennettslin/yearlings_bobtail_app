import { LEFT, RIGHT, OVERLAP, VERSES, PRECHORUS, CHORUS, BRIDGE, RHYME } from 'helpers/constants'

module.exports = {
    title: {
        anchor: 'Willy the Cocoa',
        annotation: {
            description: `Kids in the neighbourhood called Willy "The Cocoa," referring both to his Coke bottles and to his seeming a bit "cuckoo." `
        }
    },
    totalTime: 207,
    overview: `Willy was an autistic man who wandered our neighbourhood collecting recyclables for a living. One day, some gangbangers decided to pick a fight and smashed his head open with a bottle, killing him instantly. My younger brother was diagnosed with severe autism at around this time, and in light of Willy's murder, I would lie awake in fear of what lay in my brother's future.`,
    lyrics: [
        [
            {
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
                    annotation: {
                        description: [
                            `In folklore of the past,`,
                            {
                                anchor: `changelings`,
                                wiki: `Changeling`
                            },
                            `were trolls left in place of stolen human children, and served to explain the developmentally disabled. Sonically, I wanted to mimic a band of woodland trolls in secluded revelry after such a heist, and figured it was akin to the swamp rock of`,
                            {
                                anchor: `Creedence Clearwater Revival,`,
                                wiki: `Creedence_Clearwater_Revival`
                            },
                            `with muted mandolins and Cajun accordions thrown in. Lyrically, I tried to recreate my mishearings of adult conversation when my parents were first learning about autism. I spent a week telling everyone that my brother was "artistic," for example.`
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
                                `of Southern California, where wide boulevards stretch endlessly along a grid plan, and jagged mountains block the horizon on all sides. In the mirages caused by the year-round sweltering heat, the reflections of these mountains naturally point inwards.`
                            ]
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
                            description: `The sight of kids splashing around a burst fire hydrant wasn't really a Los Angeles thing, but it happened once or twice in my neighbourhood.`
                        }
                    },
                    `as early worms work this`,
                    {
                        anchor: `dying coyote's jaw.`,
                        annotation: {
                            description: `Occasionally, a coyote would wander down from the surrounding hillsides and get hit by traffic. Of course, the Valley is also like one big lower jaw, with all its inhabitants helping it to decompose.`
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
                time: 23,
                lyric: [
                    `Swill pop poured from`,
                    {
                        anchor: `wayside bottle,`,
                        annotation: {
                            description: `Willy begins his daily rounds by filling up a shopping cart with recyclables found in garbage bins and littered along the sidewalks.`
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
                        annotation: {
                            description: [
                                `Willy has`,
                                {
                                    anchor: `microcephaly,`,
                                    wiki: `Microcephaly`
                                },
                                `a medical condition in which the brain fails to develop properly, resulting in a head that is abnormally small in size. He peers through an empty soda bottle, the top of which is tapered like the outline of his skull.`
                            ]
                        }
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
                                            description: `At the recycling center where Willy drops off his recyclables, a complimentary soft drink is part of his reimbursement.`
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
                            description: `Or else, "he ends as troll." In most legends, changelings wittingly participate in the deceit, and take pains to hide their true form when around others.`
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
                            description: `Some families help Willy by leaving out their discarded recyclables for him to gather in bulk.`
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
                            description: `My mother is cutting my brother's hair on the front lawn, since the cleanup afterwards will be easier.`
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
                            description: `As a child, my younger brother was typically calm and quiet in demeanour. However, when made to do things he didn't enjoy or didn't understand, such as sitting through a haircut, he was prone to frenzied outbursts, which were sometimes scary given how likely he was to injure himself.`
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
                time: 47,
                lyric: [
                    `As`,
                    {
                        anchor: `gap-toothed coma`,
                        annotation: {
                            description: `Also, "gap-toothed comb."`
                        }
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
                            description: `Also, "pair of scissors."`
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
                            description: `Willy jokingly remarks that given my brother's distaste for haircuts, he will likely sport an unshaven look as an adult. But in many legends, the changeling is not a child of any sort, but in fact a fully grown troll who is perhaps centuries old. So Willy might also be implying that he is immune to the enchantment that disguises my brother's true form in a childlike appearance.`
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
                            description: `After all, Willy is quite possibly a changeling himself, as evinced by his own unkempt facial hair.`
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
                            description: `Being acquainted with my family over the years, Willy understands why my mother allows my brother's hair to reach unruly lengths. However, Willy is also observing that my brother has yet to outgrow his "colic," a period of excessive crying in infants. In the past, such inexplicable lack of development in older children gave rise to a belief in changelings.`
                        }
                    },
                    `yet I've seen!`
                ]
            },
            {
                unitMap: true,
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
                                `Back then, the back pages of a comic book were usually filled with ads for novelty items. As a kid, I once sent away for a pair of`,
                                {
                                    anchor: `X-Ray Specs,`,
                                    wiki: `X-Ray_Specs_(novelty)`
                                },
                                `glasses that purportedly allow one to see through objects. They didn't work.`
                            ]
                        }
                    },
                    `enraged at`,
                    {
                        anchor: `pages clawed,`,
                        annotation: {
                            description: `My brother used to cut letters of the alphabet out of paper, an activity that my parents encouraged since it was creative and kept him occupied. Unfortunately, my comic books sometimes made their way by accident into his scrap pile of old magazines.`
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
                            description: `There were times I was so angry at my brother that I laid down some serious hurt. He never fought back.`
                        }
                    },
                    `the`,
                    {
                        anchor: `bearded baby`,
                        annotation: {
                            description: `A changeling out of disguise might literally have a beard. Of course, I was also frustrated with always having to engage my brother at a level far below his actual age.`
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
                            description: `The hardest thing about having hurt my brother is that I could never really apologise, since he could never truly comprehend that I was sorry. I suppose that for him, it just became another part of what life was.`
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
                            description: `I spent a long time wondering why my brother was born with autism and I was not, when our circumstances weren't much different. It didn't seem far-fetched to suppose that cognitive abilities are a fixed supply in the womb, and that I had selfishly taken my brother's share.`
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
                time: 106,
                lyric: [
                    {
                        anchor: `Killcrop`,
                        annotation: {
                            // WIKI: Non-wiki killcrop?
                            description: [
                                `In Germanic folklore, a killcrop is an infant suspected of being a changeling due to its voracious appetite. The etymology is plain and simple— one who "kills crops"— and reflects the primary concerns of past times, when children unable to work for their keep could lead to a family's ruin.`
                            ]
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
                            description: `In his zeal to grab at a littered beer bottle, Willy steps into a puddle and splashes sewage water onto a pair of gangbangers standing nearby. "Soused loafers" can refer to drenched shoes, as well as to drunken delinquents.`
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
                            description: `It was widely believed that tricking a changeling into revealing its true nature would force it to return the stolen child. The methods for doing so included hitting it with a switch, a flexible rod designed to inflict punishment.`,
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
                            description: `Eager for a fight, the gangbangers start pushing Willy around. Amidst the commotion, his shopping cart gets turned over, spilling a garbage bag full of empty glass bottles onto the ground. One of the gangbangers grabs a bottle and smashes it against Willy's face.`
                        }
                    },
                    `sounds the`,
                    {
                        anchor: `past-noon toll.`,
                        annotation: {
                            description: `Immediately past noon, the ring of a town bell is heard exactly once.`
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
                                            description: `Given that abuse of an underdeveloped child often led to its death, religious doctrine in the past typically gave assurance that such children were devoid of souls. But I came to a different conclusion. If my brother and I were so alike in physical makeup, despite being so different in mental presence, then it made more sense to believe that no one has a soul.`
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
                            description: `This incident happened to Willy, of course, but the lyrics haven't mentioned his name until now, since it easily could have been my brother. A "stalkless bulb" can refer to a brain severed from its spine, as well as to a dormant plant ready to be set in the ground.`
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
                            description: `My father liked to build furniture in the garage, and I would help my mother spread the leftover sawdust in our backyard garden. Also, it was the "saddest month" when Willy was killed.`
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
                            ]
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
                            ]
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
                            description: `Having recently kicked my brother in anger over a shredded comic book, I'm now indifferent to the latest release from my monthly subscription.`
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
                time: 143,
                lyric: [
                    `But`,
                    {
                        anchor: `how marbleless,`,
                        annotation: {
                            description: `Or, "how marvellous." Sometimes friends of my parents, in a poor attempt to empathise, would marvel at how blissful it must be for my brother to go through life with a permanent lack of understanding.`
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
                            ]
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
                            description: `My brother learned to answer the question "how old are you?" when he was six. But even after turning seven, he still insisted on answering "six." We finally got him to accept that "seven" was the new correct answer, but the cost in sweat and tears was so high that when he turned eight, none of us had the energy to relive the ordeal. Here, I imagine him as a grownup, testily correcting a stranger who has the nerve to ask if he is "six."`
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
                            description: `One night when I woke up screaming in fear of my mortality, my mother rushed to my bedside to comfort me.`
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
                            ]
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
                            description: `My mother told me not to worry, since I wasn't going to die for quite a while. She then assured me that when my time does come, I will have long made sense of death, and be at peace with it.`
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
                            ]
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
        ]
    ],
    tasks: [
        {
            taskName: `afterword annotations`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `music annotations`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `include wiki urls`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `sort out past and present tense`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `separate annotations into dot categories`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `annotations`,
            workedHours: 40,
            neededHours: 40
        },
        {
            taskName: `illustrations`,
            workedHours: 0,
            neededHours: 0,
            subtasks: [

            ]
        }
    ]
}
