import {
    AFTERWORD,
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGWRITING
} from '../../../../app/constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    REFRAIN,
    SOLO,
    FORESHADOW_OF_WORMHOLE_PREFIX,
    IS_UNIT_DOT
} from '../../../../app/constants/lyrics'

export default {
    title: 'Vegan Proclamation',
    duration: 241,
    overview: `Having doubled down on writing and recording all the songs for my next album, I'd been burning bridges with my bandmates for some time. Since we stopped playing shows as a result, I had no new opportunities to meet women after Miriam left me. Most devastating of all, Sita had fallen in love with someone else. I wasn't to win her back, ever again. All I had now was myself, but I really didn't like myself. And I had no idea how to become a good person again.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `While Sita was a lifelong vegetarian due to her Hindu upbringing, she also held strong convictions about animal rights that led her to go`,
                        {
                            anchor: `vegan.`,
                            wiki: `Veganism`
                        },
                        `I supported her decision by helping her research how to avoid animal products. After we stopped speaking to each other, I became vegan as well, which was my first step toward liking myself again.`
                    ],
                    dotKeys: {
                        [BACKSTORY]: true,
                        [OBSERVATION]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: REFRAIN
            },
            mainVerses: [
                {
                    time: 0,
                    lyric: [
                        {
                            isItalic: true,
                            lyric: [
                                `"If you're just starting out, you need to decide right now: Either you stick with quality vinyl, or you buy only the bargain bin LPs. You`,
                                {
                                    anchor: `can't have both.`,
                                    card: {
                                        description: `This advice was offered by a friend when I bought a used turntable. And as it turns out, what he had to say about vinyl records holds just as well for life decisions. I learned this the hard way when I saw that my thoughtful deeds were always being negated by my hurtful ones. I couldn't keep two separate selves, where one gets praised for my kindness and the other takes the blame for all my selfish desires. I couldn't be both kinds of people.`,
                                        dotKeys: {
                                            [BACKSTORY]: true,
                                            [OBSERVATION]: true
                                        }
                                    }
                                },
                                `Because a scratched record will chip a good needle… and a chipped needle will scratch a good record…"`
                            ]
                        }
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `With the previous song having provided a glimpse of me fading away while listening to old records, the crackle of a needle on vinyl now introduces the third and final song of the medley.`,
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 15,
                    lyric: [
                        `So shall we,`,
                        {
                            anchor: `Odin,`,
                            properNoun: true,
                            card: {
                                description: `As a child, I never paid much thought to our pet cat Odin. It was like he came with the house. So after Sita and I adopted a cat together, I marveled at how this instinct to nurture a pet just seemed to turn on inside me at the flick of a switch. Years later when my failure to nurture the relationship with Sita led to our final breakup, I thought of Odin often.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `lightly tread`
                    ]
                },
                {
                    time: 19,
                    lyric: [
                        `past the`,
                        {
                            anchor: `rape racks`,
                            card: {
                                description: [
                                    {
                                        anchor: `Dairy cows`,
                                        wiki: `Dairy_cattle`
                                    },
                                    `are impregnated every year to keep them at peak lactation. This is done by restraining them in an apparatus commonly referred to as the "rape rack," where they are then forcibly inseminated.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `where our`,
                        {
                            anchor: `furor`,
                            card: {
                                description: [
                                    `Or else, our`,
                                    {
                                        anchor: `"führer,"`,
                                        wiki: `Führer`
                                    },
                                    `a German title of leadership strongly associated with`,
                                    {
                                        anchor: `Adolf Hitler.`,
                                        wiki: `Adolf_Hitler`
                                    },
                                    `For animal rights proponents, the parallels between`,
                                    {
                                        anchor: `factory farming`,
                                        wiki: `Intensive_animal_farming`
                                    },
                                    `and the`,
                                    {
                                        anchor: `Holocaust`,
                                        wiki: `The_Holocaust`
                                    },
                                    `are obvious, however impolitic the comparison might be.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `led,`
                    ]
                },
                {
                    time: 23,
                    lyric: [
                        `to a soiled girl fouled on the`,
                        {
                            anchor: `false rib`,
                            card: {
                                description: [
                                    `The lower five`,
                                    {
                                        anchor: `rib pairs`,
                                        wiki: `Rib_cage`
                                    },
                                    `are known as false ribs, as they do not attach directly to the sternum.`
                                ]
                            }
                        },
                        {
                            anchor: `from our chest?`,
                            card: {
                                description: [
                                    `In the Book of Genesis, God gave life to`,
                                    {
                                        anchor: `Eve`,
                                        wiki: `Eve`
                                    },
                                    `by taking one of Adam's ribs. By contrast, my own promise to make sacrifices for Sita proved to be a "false rib." And so she could never be truly alive with me, even as she felt unworthy to begin life anew with anyone else.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `As a child, I sat with my mother as she watched an old movie set in`,
                        {
                            anchor: `World War I.`,
                            wiki: `World_War_I`
                        },
                        `After the battle, the camera panned across a motionless scene of dead bodies and devastated houses while a lone`,
                        {
                            anchor: `gramophone,`,
                            wiki: `Phonograph`
                        },
                        `preserved amid the wreckage, played a sappy Italian`,
                        {
                            anchor: `parlor song.`,
                            wiki: `Parlour_music`
                        },
                        `Though perhaps a cliché in hindsight, the ironic contrast stuck with me, and I thought it would work well here.`
                    ],
                    dotKeys: {
                        [BACKSTORY]: true,
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: VERSES,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 30,
                    lyric: `We balked at our lives born unfair,`
                },
                {
                    time: 35,
                    lyric: [
                        `set to rock this pout from`,
                        {
                            anchor: `horse to chair,`,
                            card: {
                                description: `That is to say, I was ready to brim with resentment for the entire span of my life, from rocking horse to rocking chair.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 39,
                    lyric: `as a tempered hammer cooled by striking the smoldering air…`
                }
            ]
        },
        {
            unitMap: {
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 46,
                    lyric: [
                        `Well,`,
                        {
                            anchor: `first pets`,
                            card: {
                                description: `It blew my mind that I could hurt Sita for as long as I did and still live with myself. But in hindsight, it's because I accepted at face value the facade of sanity she had constructed as a means to cope. I allowed myself to believe that our fleeting moments of intimacy, which she clung to and cherished as if that's how it always was, were truly all she ever needed.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `always bear the worst,`
                    ]
                },
                {
                    time: 50,
                    lyric: `mere primers on how not to hurt,`
                },
                {
                    time: 55,
                    lyric: [
                        `and now I know why the`,
                        {
                            anchor: `battered kitten purrs…`,
                            cards: [
                                {
                                    description: `Sita had her own story to tell about mistreating her first pet. Upon receiving a kitten as a child, she hugged it so hard that it began to purr. Taking this as a sign of its contentment, she hugged it even harder. Years later, she learned that cats also purr to cope with distress, and looking back, she realized that her kitten had believed it was being crushed to death. She lived in guilt over this ever since.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [REFERENCE]: true
                                    }
                                },
                                {
                                    description: [
                                        `Also a reference to the`,
                                        {
                                            anchor: `Maya Angelou`,
                                            wiki: `Maya_Angelou`
                                        },
                                        `book`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `I Know Why the Caged Bird Sings.`,
                                                wiki: `I_Know_Why_the_Caged_Bird_Sings`
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: REFRAIN
            },
            mainVerses: [
                {
                    time: 60,
                    lyric: [
                        {
                            isItalic: true,
                            lyric: [
                                `"No, I'll smile because I believe in the`,
                                {
                                    anchor: `Big Crunch.`,
                                    properNoun: true,
                                    card: {
                                        description: [
                                            `The`,
                                            {
                                                anchor: `Big Crunch`,
                                                wiki: `Big_Crunch`
                                            },
                                            `is a theory that the universe will reverse its expansion and eventually collapse upon itself, possibly igniting another`,
                                            {
                                                anchor: `Big Bang.`,
                                                wiki: `Big_Bang`
                                            },
                                            `I found the thought comforting as it jibes with the Hindu belief that the universe is a living force, helplessly bound like us to an eternal cycle of death and rebirth.`
                                        ],
                                        dotKeys: {
                                            [OBSERVATION]: true
                                        }
                                    }
                                },
                                `And meanwhile, the universe is a`,
                                {
                                    anchor: `cyanided box.`,
                                    card: {
                                        description: [
                                            `In`,
                                            {
                                                anchor: `quantum theory,`,
                                                wiki: `Quantum_mechanics`
                                            },
                                            `a particle exists as a combination of its possible states. To explain the problem of applying this concept to larger objects,`,
                                            {
                                                anchor: `Erwin Schrödinger`,
                                                wiki: `Erwin_Schrödinger`
                                            },
                                            `proposed a famous thought experiment known as`,
                                            {
                                                anchor: `Schrödinger's cat.`,
                                                wiki: `Schrödinger's_cat`
                                            },
                                            `We imagine a cat sealed inside a steel chamber, where it stands an equal chance of surviving or getting killed by cyanide. Since we cannot observe the outcome, we must regard the cat as being simultaneously dead and alive.`
                                        ]
                                    }
                                },
                                ` Because if we can't ever be`,
                                {
                                    anchor: `known to be dead,`,
                                    card: {
                                        description: `I liked the idea that if something greater than ourselves cannot observe us, then much like Schrödinger's battered cat, some part of us must always live on.`,
                                        dotKeys: {
                                            [OBSERVATION]: true
                                        }
                                    }
                                },
                                `we just might always be alive… to God…"`
                            ]
                        }
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `Sasha recited these lines for me over the phone. We recorded multiple takes because she found it hard to portray them as snippets of actual conversation. I had to admit to her that I didn't write them with that concern in mind.`,
                    dotKeys: {
                        [BACKSTORY]: true,
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 74,
                    lyric: [
                        `Torn straps`,
                        {
                            anchor: `unsalvaged sows have chewed,`,
                            cards: [
                                {
                                    description: [
                                        `On factory farms, breeding sows are strapped inside`,
                                        {
                                            anchor: `metal cages`,
                                            wiki: `Gestation_crate`
                                        },
                                        `too small for them to move. In response to their stressful surroundings, they repeatedly engage in self-destructive movements such as chewing on the cage bars. The sole purpose of their suffering is to produce piglets for slaughter, and once they grow too sickly or weak, they too are slaughtered.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    wormhole: `unsalvaged_sows`
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 78,
                    lyric: [
                        `form a trail which leads to a`,
                        {
                            anchor: `bloody broom,`,
                            card: {
                                description: `Understandably, factory farm workers become inured to the daily violence, which would otherwise cast a pall over even mundane tasks like sweeping the floor.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [REFERENCE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 82,
                    lyric: `its bristles scrape discharge encrusted on leather boots.`
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
                    time: 90,
                    lyric: [
                        `Through an alley strewn with`,
                        {
                            anchor: `burger shrouds,`,
                            card: {
                                description: `As a vegan, I became hypersensitive to seeing anything that was remotely a byproduct of the meat industry. Even something as commonplace as a crumpled fast food wrapper would serve to remind me of how much our society has commoditized animal suffering.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 94,
                    lyric: [
                        `a`,
                        {
                            anchor: `lone rallied youth`,
                            card: {
                                description: [
                                    `Having spent years playing shows, I saw firsthand how an audience can be whipped into a single-minded frenzy. But as that world now drifts away, I puzzle over what drew me to those crowds, and why I so longed to be adored by them. I question everything I've valued up to this point, like a reformed`,
                                    {
                                        anchor: `Hitler Youth`,
                                        wiki: `Hitler_Youth`
                                    },
                                    `aghast at all the things he cheered for at the`,
                                    {
                                        anchor: `Nuremberg Rallies.`,
                                        wiki: `Nuremberg_Rally`
                                    }
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        {
                            anchor: `strikes himself from his cloud,`,
                            card: {
                                description: [
                                    `The insignia of the`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Schutzstaffel,`,
                                            wiki: `Schutzstaffel`
                                        }
                                    },
                                    `the paramilitary group responsible for carrying out the Holocaust, consisted of two thunderbolts side by side. And so, wishing no more to strike anyone down with my thunder, I strike myself down instead, leaving my complacence and ego behind.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 98,
                    lyric: [
                        {
                            anchor: `reversing his stomach`,
                            card: {
                                description: `It seemed so vulgar that anything should have to suffer and die just to satisfy my hunger. And once I came to that conclusion, I literally couldn't stomach the taste of meat.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `and his`,
                        {
                            anchor: `swastikas`,
                            cards: [
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `swastika`,
                                            wiki: `Swastika`
                                        },
                                        `is an ancient Indian symbol of peace and continuity that was later co-opted by the Nazis. To avoid any association with violence and hatred, today's Hindus and Buddhists often present their swastikas facing left, in reverse of the Nazi symbol, which faces right.`
                                    ]
                                },
                                {
                                    wormhole: `swastikas`
                                }
                            ]
                        },
                        `inside out…`
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 106,
                    lyric: `Well, if first cuts are the worst ones bled…`
                },
                {
                    time: 110,
                    lyric: [
                        `then`,
                        {
                            anchor: `none by us now,`,
                            card: {
                                description: `And so, vowing never again to be the cause of hurt to anyone or anything, I decide to become a vegan.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `to any flesh!`
                    ]
                },
                {
                    time: 114,
                    lyric: `This shipwrecked world is large enough for us to make amends…`
                },
                {
                    time: 120,
                    lyric: [
                        `and to be`,
                        {
                            anchor: `good again…`,
                            card: {
                                description: [
                                    `Upon becoming a vegan, I joined`,
                                    {
                                        anchor: `People for the Ethical Treatment of Animals,`,
                                        wiki: `People_for_the_Ethical_Treatment_of_Animals`
                                    },
                                    `an animal rights organization. For several years, I volunteered my time and took part in their demonstrations.`
                                ],
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
                formType: SOLO
            },
            mainVerses: [
                {
                    time: 123,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(solo)`
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `When Sita and I first met, she asked to hear some of my music. I had just bought a multi-effects processor and was playing around with it, so I gave her a few excerpts from those experiments. She particularly liked one in which I had pitch-shifted my vocals an octave up, so I made it the basis for the second half of this song.`,
                    dotKeys: {
                        [BACKSTORY]: true,
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 138,
                    lyric: [
                        `"So all your`,
                        {
                            anchor: `leads have left`,
                            todo: true,
                            card: {
                                description: `For several years, my modus operandi was simple. I would stay with Sita up until I had another option to pursue. When that prospect failed, I would then come crawling back, because Sita always let me. But now our circumstances were reversed. I had no more options coming down the pike, while Sita had met someone with whom she fully intended to stay.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `and now you're sad, too?`
                    ]
                },
                {
                    time: 146,
                    lyric: [
                        `Someday you'll breathe again; for one,`,
                        {
                            anchor: `you have to…`,
                            todo: true,
                            card: {
                                description: `Overcome with jealousy and heartbreak, I had no excuse to complain, as I had caused Sita this exact same torment countless times. So in our last phone conversation, I just asked her meekly how she had managed it. She replied that she didn't know. There were days when she just didn't want to live. And yet, each day would pass just the same, pushing her into the next. Slowly, days would add up to weeks, and weeks would turn into months, until the excruciating pain quietly dulled into an aching sadness.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 154,
                    lyric: `I don't know how where once I cowered I now could fly.`
                },
                {
                    time: 161,
                    lyric: [
                        `I still love you for the`,
                        {
                            anchor: `airholes,`,
                            card: {
                                description: [
                                    `In Nirvana's`,
                                    {
                                        anchor: `"Sappy,"`,
                                        wiki: `Sappy`
                                    },
                                    `Kurt Cobain compares the victim of an emotionally abusive relationship to a small creature kept in a jar with breathing holes punched in the lid. I liked this imagery, so I took it.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [SONGWRITING]: true
                                }
                            }
                        },
                        `dear; and now, good night."`
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: REFRAIN
            },
            mainVerses: [
                {
                    time: 170,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(refrain)`
                    }
                }
            ]
        },
        {
            unitMap: {
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 186,
                    lyric: [
                        `The stardust marks us, Odin,`,
                        {
                            anchor: `sparks zip through our heads…`,
                            cards: [
                                {
                                    description: [
                                        `Travelling with Odin beyond the galaxy, I observe that the universe is almost entirely empty space, just like the distance between`,
                                        {
                                            anchor: `subatomic particles`,
                                            wiki: `Subatomic_particle`
                                        },
                                        `that make up our bodies. With this thought wandering through my head, I then wonder if we ourselves are nothing more than the wandering thoughts of the universe.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `spark_zips`
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 194,
                    lyric: [
                        `And can we`,
                        {
                            anchor: `start as children?`,
                            todo: true,
                            card: {
                                // TODO: Make just one of many.
                                description: [
                                    `Hoagy Carmichael's`,
                                    {
                                        anchor: `"Stardust"`,
                                        wiki: `Stardust_(song)`
                                    },
                                    `was my favorite song, so "stardust" became my go-to word to use for placeholder lyrics whenever we performed a song live before it was fully written. Owen misheard one of these lines as "Can we start as children" and deeply connected with it. He seemed greatly disappointed to find out that the actual words were gibberish.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `Would we want to then?`
                    ]
                },
                {
                    time: 201,
                    lyric: [
                        `The`,
                        {
                            anchor: `diapered white dwarf,`,
                            card: {
                                description: [
                                    `As we come upon a`,
                                    {
                                        anchor: `white dwarf,`,
                                        wiki: `White_dwarf`
                                    },
                                    `the superdense remnant of an aged star, I am reminded of`,
                                    {
                                        anchor: `Apasmara,`,
                                        wiki: `Apasmara`
                                    },
                                    `the dwarf demon of ignorance in Hindu mythology. And so I pause here to mull over the hurt that my own ignorance has caused.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        [
                            {
                                anchor: `gurgling, curls up`,
                                cards: [
                                    {
                                        description: `With ignorance being as old as time itself, I'm comforted to know we always correct our past mistakes. And yet, it's just as dispiriting that those coming after us have yet to make theirs. The universe never truly learns, and I was partly to blame. I had this same thought as a child, when I wondered if I was the reason my brother would never get better. It made me realize that all I could do was love him and then do better for him.`,
                                        dotKeys: {
                                            [NARRATIVE]: true,
                                            [OBSERVATION]: true
                                        }
                                    },
                                    {
                                        wormhole: {
                                            wormholeKey: `learn_him_good`,
                                            wormholePrefix: FORESHADOW_OF_WORMHOLE_PREFIX
                                        }
                                    }
                                ]
                            },
                            `for his sleep…`
                        ]
                    ]
                },
                {
                    time: 209,
                    lyric: [
                        `Our ashed heads bow from`,
                        {
                            anchor: `chivalry to our Siva's feet…`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Nataraja,`,
                                            wiki: `Nataraja`
                                        },
                                        `or "lord of the dance," is a depiction of the Hindu god`,
                                        {
                                            anchor: `Siva`,
                                            wiki: `Shiva`
                                        },
                                        `as a cosmic dancer, who dances to tear down the universe and build it up again in an endless cycle. Beneath his feet lies the dwarf demon Apasmara, thus symbolizing Siva's victory over ignorance. And having caused my share of ignorant destruction to the universe, I now commit to help rebuild it.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    wormhole: `chivalry`
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: REFRAIN
            },
            mainVerses: [
                {
                    time: 218,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(refrain)`
                    }
                }
            ]
        },
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    // TODO: Make this about Sasha.
                    description: [
                        `I was a vegan for the five years that I spent working on`,
                        {
                            isItalic: true,
                            lyric: `Yearling's Bobtail.`
                        },
                        `But as it became clear that the album's release would be all but ignored by the indie press, I had to question everything I thought I knew about how the world works. So I jettisoned all my beliefs, including veganism, to try out the conservative values espoused by indie rock. They weren't a good fit for me, and I've since returned to the left, albeit as a realist. So I'm a`,
                        {
                            anchor: `flexitarian`,
                            wiki: `Semi-vegetarianism`
                        },
                        `now, in that I'm always happy to avoid eating meat, but I no longer do so completely.`
                    ],
                    dotKeys: {
                        [AFTERWORD]: true
                    }
                }
            }
        }
    ]
}
