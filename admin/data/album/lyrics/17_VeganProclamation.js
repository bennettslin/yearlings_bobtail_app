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
    overview: `Having doubled down on writing and recording all the songs myself, I'd been burning bridges with my bandmates for some time. Since we stopped playing shows as a result, I had no new opportunities to meet women after Miriam left. Most devastating of all, Sita had fallen in love with someone else. I wasn't to win her back, ever again. All I had now was myself, and I really didn't like myself. And I had no idea how to become a good person again.`,
    lyricUnits: [
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `While Sita was a lifelong vegetarian due to her Hindu upbringing, she also held strong convictions about animal rights that led her to go`,
                            {
                                anchor: `vegan.`,
                                wiki: `Veganism`
                            },
                            `I supported her during this transition by preparing vegan meals and avoiding animal products in her presence. After we stopped speaking to each other, I became vegan as well. This was my first small step towards liking myself again.`
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                            [OBSERVATION]: true
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
                        description: `As the previous song ends with me fading away while listening to my favourite records, the crackle of a needle on vinyl introduces the third and final song of the medley.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
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
                                    todo: true,
                                    card: {
                                        description: `A friend offered this advice when he gave me his turntable, and as it turns out, what can be said for vinyl records holds just as well for life decisions. I learned this the hard way when I saw that my most thoughtful deeds would always be negated by my most hurtful ones. I couldn't keep two separate selves, with one being praised for my kindness, and the other taking the blame for my selfish desires. I couldn't be both kinds of people.`,
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
            ]
        },
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: `As a child, I sat with my mother as she watched a movie set in WWII. After the final battle, the camera panned across a motionless scene of dead bodies and devastated houses, as a lone gramophone, preserved amidst the wreckage, played a sappy Italian parlour song. The ironic contrast stuck with me, and I thought it would work well here.`,
                        dotKeys: {
                            [BACKSTORY]: true,
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
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
                            todo: true,
                            card: {
                                description: `As a child, I never gave much thought to our house cat Odin. He just seemed like part of the scenery. So after Sita and I adopted a cat who became our pride and joy, I would marvel at why my nurturing instinct, which came so effortlessly now, was so hard to come by then. Years later, as my failure to nurture my relationship with Sita led to its deterioration, I thought of Odin often.`,
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
                            todo: true,
                            card: {
                                description: `Dairy cows are impregnated every year to keep them at peak lactation. This is done by restraining them in an apparatus commonly referred to as a "rape rack," where they are then forcibly inseminated.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [REFERENCE]: true
                                }
                            }
                        },
                        `where our`,
                        {
                            anchor: `furor`,
                            todo: true,
                            card: {
                                description: [
                                    `Or else,`,
                                    {
                                        anchor: `"führer,"`,
                                        wiki: `Führer`
                                    },
                                    `a German title of leadership mainly associated with Adolf Hitler. Amongst animal rights proponents, comparisons between factory farming and the Holocaust are obvious, however impolitic.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
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
                            todo: true,
                            card: {
                                description: [
                                    `The lower five rib pairs are known as false ribs, as they do not attach directly to the sternum.`
                                ],
                                dotKeys: {
                                    [REFERENCE]: true
                                }
                            }
                        },
                        {
                            anchor: `from our chest?`,
                            todo: true,
                            card: {
                                description: [
                                    `In Genesis, God gave life to`,
                                    {
                                        anchor: `Eve`,
                                        wiki: `Eve`
                                    },
                                    `by taking one of Adam's ribs. By contrast, my own promise to make sacrifices for Sita proved to be a "false rib," trapping her in a helpless state where she could never feel truly alive with me, even as she felt unworthy to begin life anew with anyone else.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
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
                formType: VERSES,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 30,
                    lyric: `We baulked at our lives born unfair,`
                },
                {
                    time: 35,
                    lyric: [
                        `set to rock this pout from`,
                        {
                            anchor: `horse to chair,`,
                            todo: true,
                            card: {
                                description: `That is to say, from rocking horse to rocking chair.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 39,
                    lyric: `as a tempered hammer cooled by striking the smouldering air…`
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
                            todo: true,
                            card: {
                                description: `Sita had her own story to tell about mistreating her first pet. Upon receiving a kitten as a child, she hugged it so hard that it began to purr. Taking this as a sign of its contentment, she hugged it even harder. Years later, she learned that cats also purr to cope with distress, and looking back, realised that her kitten believed it was dying. She lived with the guilt ever afterwards.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [REFERENCE]: true
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
                            todo: true,
                            cards: [
                                {
                                    description: `Of course, Sita, in turn, was my first pet. It blew my mind how I was able to live with myself while hurting her for as long as I did. But in hindsight, it's because I accepted at face value the facade of sanity she had constructed as a way to cope. I had allowed myself to believe that our fleeting moments of intimacy, which she clung to and cherished as if that's how it always was, were truly how it always was for her.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    description: [
                                        `Also a reference to the Maya Angelou book,`,
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
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: `Sasha recited these quotes for me over the phone. We recorded multiple takes because she found it hard to portray them as snippets of actual conversation. I had to admit to her that I didn't think to write them with that concern in mind. I was so pretentious at the time, I forgot that normal people don't pepper their conversations with pseudo-intellectual drivel.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
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
                                    todo: true,
                                    card: {
                                        description: [
                                            `The`,
                                            {
                                                anchor: `Big Crunch`,
                                                wiki: `Big_Crunch`
                                            },
                                            `is a theory that the universe will reverse its expansion and eventually collapse upon itself, possibly igniting another Big Bang. I found the thought comforting as it jibes with the Hindu belief that the universe is a living force, helplessly bound like us to an eternal cycle of death and rebirth.`
                                        ],
                                        dotKeys: {
                                            [OBSERVATION]: true
                                        }
                                    }
                                },
                                `And meanwhile, the universe is a`,
                                {
                                    anchor: `cyanided box.`,
                                    todo: true,
                                    card: {
                                        description: [
                                            `In quantum theory, a particle exists as a combination of its possible states. To explain the problem of applying this concept to larger objects, Erwin Schrödinger proposed a famous thought experiment known as`,
                                            {
                                                anchor: `Schrödinger's cat.`,
                                                wiki: `Schrödinger%27s_cat`
                                            },
                                            `We imagine a cat sealed inside a steel chamber, where it stands an equal chance of being killed by cyanide or surviving. Since we cannot observe the outcome, we must regard the cat as being simultaneously dead and alive.`
                                        ]
                                    }
                                },
                                ` Because if we can't ever be`,
                                {
                                    anchor: `known to be dead,`,
                                    todo: true,
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
            ]
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
                            todo: true,
                            cards: [
                                {
                                    description: `On factory farms, breeding sows are strapped inside metal cages so small that they cannot move. In response to their stressful surroundings, they develop repetitive, self-destructive movements such as chewing on cage bars. The sole purpose of their suffering is to produce piglets for slaughter, and once they grow too sickly or weak, they too are slaughtered.`,
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
                },
                {
                    time: 78,
                    lyric: [
                        `form a trail which leads to a`,
                        {
                            anchor: `bloody broom,`,
                            todo: true,
                            card: {
                                description: `Understandably, factory farm workers become inured to the daily violence, which casts a pall over even mundane tasks like sweeping the floor.`,
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
                            todo: true,
                            card: {
                                description: `As a vegan, I became sensitive to anything even remotely suggestive of meat or animal byproducts, such as a discarded fast food wrapper. I realised that I too had been inured, living in a society built on the commoditisation of animal suffering.`,
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
                            todo: true,
                            card: {
                                description: [
                                    `Having spent the past several years both playing and attending shows, I saw firsthand how easily an audience can get whipped up while being of one mind. And now, as that world drifted away and I was all alone, I wondered what exactly drew me to those crowds, and why I had so longed to be adored by them. I questioned everything I valued up to that day, like a reformed`,
                                    {
                                        anchor: `Hitler Youth`,
                                        wiki: `Hitler_Youth`
                                    },
                                    `aghast at all the things he cheered for at the Nuremberg Rallies.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        {
                            anchor: `strikes himself from his cloud,`,
                            todo: true,
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
                                    `the paramilitary group responsible for carrying out the Holocaust, consists of two thunderbolts side by side. Wishing no more to strike down anyone with my thunderbolts, I struck myself down, leaving behind my former convictions in the process.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                            todo: true,
                            card: {
                                description: `It seemed so vulgar that anything should have to suffer and die just to satisfy my hunger. And once I came to that conclusion, I literally could no longer stomach the taste of meat.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `and his`,
                        {
                            anchor: `swastikas`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `swastika`,
                                            wiki: `Swastika`
                                        },
                                        `is an ancient Indian symbol of peace and continuity that was later co-opted by the Nazis. To avoid association with violence and hatred, today's Hindus and Buddhists often present their swastikas facing left, in reverse of the Nazi symbol, which faces right.`
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
                            todo: true,
                            card: {
                                description: `And so, wishing no more to be the cause of hurt to anyone or anything, I decided to become a vegan.`,
                                dotKeys: {
                                    [BACKSTORY]: true
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
                            todo: true,
                            card: {
                                description: [
                                    `Upon becoming a vegan, I joined`,
                                    {
                                        anchor: `People for the Ethical Treatment of Animals.`,
                                        wiki: `People_for_the_Ethical_Treatment_of_Animals`
                                    },
                                    `For several years, I took part as a volunteer in their demonstrations for animal rights.`
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
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: `When Sita and I first met, she asked to hear some of my music. I had just bought a new multi-effects processor and played around with it, so I gave her a few excerpts from those experiments. She particularly liked one in which I had pitch-shifted my vocals an octave up, so I made it the basis for the second half of this song.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
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
            ]
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
                                description: `For the past several years, my modus operandi was simple. I would stay with Sita up until I had another option to pursue. Then, when that prospect failed, as it always did, I would come crawling back, because Sita always let me. But our circumstances were now reversed. There were no more options coming down the pike for me, while Sita had met someone with whom she fully intended to stay.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true
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
                                description: `Overcome with jealousy and heartbreak, I had no excuse to complain, as I had caused Sita this exact same torment countless times. So in our last phone conversation, I just asked her meekly how she had managed it. She replied that she didn't know. There were days when she just didn't want to live. And yet, each day would pass just the same, pushing her into the next, as days added up to weeks, and weeks turned into months, until the excruciating pain quietly dulled into an aching sadness.`,
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
                            todo: true,
                            card: {
                                description: [
                                    `In Nirvana's`,
                                    {
                                        anchor: `"Sappy,"`,
                                        wiki: `Sappy`
                                    },
                                    `Kurt Cobain compares the victim of an emotionally abusive relationship to a small creature kept in a jar with breathing holes punched in its lid. I liked the imagery, so I borrowed it shamelessly here.`
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
                            todo: true,
                            cards: [
                                {
                                    description: `Travelling with Odin beyond the galaxy, I observe that the universe is almost entirely empty space, just like the distance between subatomic particles that make up our bodies. With this thought wandering through my head, I then wonder if we ourselves are nothing more than the wandering thoughts of the universe.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                        [REFERENCE]: true
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
                                description: [
                                    `Hoagy Carmichael's`,
                                    {
                                        anchor: `"Stardust"`,
                                        wiki: `Stardust_(song)`
                                    },
                                    `was my favourite song, so "stardust" became my go-to word to use for placeholder lyrics whenever we performed a song live before it was fully written. Owen misheard one of these lines as "Can we start as children?" and deeply connected with it. He seemed greatly disappointed to find out that the actual words were gibberish.`
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
                            todo: true,
                            card: {
                                description: [
                                    `As we come upon a`,
                                    {
                                        anchor: `white dwarf,`,
                                        wiki: `White_dwarf`
                                    },
                                    `the dense remnant of an aged star, I am reminded of`,
                                    {
                                        anchor: `Apasmara,`,
                                        wiki: `Apasmara`
                                    },
                                    `the dwarf demon of ignorance in Hindu mythology. And so I pause here to mull over the hurt that my own ignorance has caused.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        [
                            {
                                anchor: `gurgling, curls up`,
                                todo: true,
                                cards: [
                                    {
                                        description: `With ignorance being as old as time itself, I'm comforted to know that we'll always correct our past mistakes. And yet, it feels just as dispiriting to know that those coming after us have yet to make theirs. The universe never truly learns, and I was partly to blame. I had this same thought as a child, when I wondered if I was the reason why my brother would never get better. It made me realise that all I could do was love him for who he was, and then do better for him.`,
                                        dotKeys: {
                                            [BACKSTORY]: true,
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
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Nataraja,`,
                                            wiki: `Nataraja`
                                        },
                                        `or "lord of dance," is a revered depiction of the Hindu god`,
                                        {
                                            anchor: `Siva`,
                                            wiki: `Shiva`
                                        },
                                        `as a cosmic dancer, who dances to tear down the universe and build it up again in an endless cycle. Beneath his feet lies the dwarf demon Apasmara, thus symbolising Siva's victory over ignorance. And having done my part to help destroy the universe, I now commit to rebuilding it.`
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
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
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
        }
    ]
}
