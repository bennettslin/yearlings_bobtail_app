import { REFRAIN, VERSES, PRECHORUS, CHORUS, INSTRUMENTAL, BACKSTORY, NARRATIVE, OBSERVATION, PUN, REFERENCE, SONGWRITING, DOT_STANZA_CONSTANT } from 'helpers/constants'

module.exports = {
    title: {
        anchor: `Vegan Proclamation`,
        annotation: {
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
    },
    scenes: [
        {
            verseIndex: 0,
            description: `Bennett is walking with the ghost of Odin in a park. He passes Sita, who is holding hands with her friend. Bennett looks down, her friend looks up, while Sita looks concerned.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'side, slumped over, despondent'
                },
                sita: {
                    todo: true,
                    description: 'side angle, looking back, concerned'
                },
                khari: {
                    todo: true,
                    description: 'side, protective, judgmental'
                }
            }
        },
        {
            verseIndex: 11,
            description: `Bennett is by himself with Odin at a show, looking agitated and bored. Miriam is on the other side of the crowd, being introduced by Tristan to her future boyfriend.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'back, looking to side, annoyed'
                },
                miriam: {
                    todo: true,
                    description: 'side, flirting'
                },
                tristan: {
                    todo: true,
                    description: 'front, introducing miriam'
                },
                eduardo: {
                    todo: true,
                    description: 'side, eager'
                }
            }
        },
        {
            verseIndex: 22,
            description: `Bennett is in his apartment, in tears on the phone with Sita, who is in bed snuggling with her friend.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'side, on phone, hunched over, sobbing'
                },
                sita: {
                    todo: true,
                    description: 'sitting up in bed, on phone, concerned'
                },
                khari: {
                    todo: true,
                    description: 'lying in bed, caressing Sita'
                }
            }
        },
        {
            verseIndex: 27,
            description: `Bennett is with Odin, and happens upon a Peta demonstration. One of the demonstrators is petting Odin.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'side, desperately hopeful'
                },
                amy: {
                    demonstrator: {
                        todo: true,
                        description: 'side, kind'
                    }
                },
                stephanie: {
                    demonstrator: {
                        todo: true,
                        description: 'standing, demonstrating'
                    }
                },
                wade: {
                    demonstrator: {
                        todo: true,
                        description: 'standing, demonstrating'
                    }
                }
            }
        }
    ],
    tip: {
        description: 'placeholder tip'
    },
    totalTime: 241,
    overview: `Having doubled down on writing and recording all the songs myself, I'd been burning bridges with my bandmates for some time. Since we stopped playing shows as a result, I had no new opportunities to meet women after Miriam left. Most devastating of all, Sita had fallen in love with someone else. I wasn't to win her back, ever again. All I had was myself now, and I hated myself. But slowly, I began the long, arduous process of remaking myself into a good person.`,
    forceSingleColumn: true,
    lyrics: [
        [
            {
                time: 0,
                lyric: [
                    {
                        italic: [
                            `"If you're just starting out, you need to decide right now: Either you stick with quality vinyl, or you buy only the bargain bin LPs. You`,
                            {
                                anchor: `can't have both.`,
                                annotation: {
                                    description: `A friend offered this advice when he gave me his turntable, and as it turns out, what can be said for vinyl records holds just as well for life decisions. I learned this the hard way when I saw that my most thoughtful deeds would always be tainted by my most hurtful ones. I couldn't keep two separate selves, with one being praised for my kindness, and the other taking the blame for my selfish desires. I couldn't be both kinds of people.`,
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
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `As the previous song ends with me fading away while listening to my favourite records, the crackle of a needle on vinyl introduces the third and final song of the medley.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 15,
                lyric: [
                    `So shall we,`,
                    {
                        anchor: `Odin,`,
                        properNoun: true,
                        annotation: {
                            description: `As a child, I never gave much thought to our house cat Odin. He just seemed like another household furnishing. So after Sita and I adopted a cat who became our pride and joy, I would marvel at why my nurturing instinct, which came so effortlessly now, was so hard to come by then. Years later, as my failure to nurture my relationship with Sita led to its deterioration, I thought of Odin often.`,
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
                        annotation: {
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
                        annotation: {
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
                        annotation: {
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
                        annotation: {
                            description: [
                                `In Genesis, God gave life to`,
                                {
                                    anchor: `Eve`,
                                    wiki: `Eve`
                                },
                                `by taking one of Adam's ribs. By contrast, my own promise to sacrifice a part of myself for Sita proved to be a "false rib," trapping her in a helpless state where she could never feel truly alive with me, even as she felt unworthy to begin life anew with anyone else.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true,
                                [PUN]: true
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
                        description: `As a child, I sat with my mother as she watched a movie set in WWII. After the final battle, the camera panned across a motionless scene of dead bodies and devastated houses, as a lone gramophone, preserved amidst the wreckage, played a sappy Italian parlour song. I thought this ironic contrast would work just as well here.`,
                        dotKeys: {
                            [BACKSTORY]: true,
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: VERSES
            }
        ],
        [
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
                        annotation: {
                            description: `That is to say, from rocking horse to rocking chair.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 39,
                lyric: `as a tempered hammer cooled by striking the smouldering air…`
            },
            {
                unitMap: true,
                stanzaType: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 46,
                lyric: [
                    `Well,`,
                    {
                        anchor: `first pets`,
                        annotation: {
                            description: `Sita had her own story to tell about mistreating her first pet. Upon receiving a kitten as a child, she hugged it so hard that it began to purr. Taking this as a sign of contentment, she hugged it even harder. Years later, she learned that cats also purr to cope with distress, and looking back, realised that her kitten thought it was dying. She lived with that guilt ever afterwards.`,
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
                        annotation: {
                            description: `Of course, Sita, in turn, was my first pet. In hindsight, the reason I could live with myself while hurting her for as long as I did, was because I accepted at face value the facade of sanity that she constructed as a coping mechanism. I allowed myself to believe that our fleeting moments of intimacy, which she clung to and cherished as if that's how it always was, were truly how it always was for her.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                stanzaType: PRECHORUS
            }
        ],
        [
            {
                time: 60,
                lyric: [
                    {
                        italic: [
                            `"No, I'll smile because I believe in the`,
                            {
                                anchor: `Big Crunch.`,
                                properNoun: true,
                                annotation: {
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
                                annotation: {
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
                                annotation: {
                                    description: [
                                        {
                                            anchor: `Deism`,
                                            wiki: `Deism`
                                        },
                                        `is the belief that God, having created the universe, no longer intervenes in its progress. I liked the idea that if something greater than ourselves cannot observe us, then much like Schrödinger's battered cat, some part of us may always live on.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                }
                            },
                            `we just might always be alive… to God…"`
                        ]
                    }
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `Sasha recited these quotes for me over the phone. We recorded multiple takes because she found it hard to portray them as snippets of actual conversation. I had to admit to her that I didn't think to write them with that concern in mind. I was so pretentious at the time, I forgot that normal people don't pepper their conversations with pseudo-intellectual drivel.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 74,
                lyric: [
                    `Torn straps`,
                    {
                        anchor: `unsalvaged sows have chewed,`,
                        annotation: {
                            description: `On factory farms, breeding sows are strapped inside metal cages so small that they cannot move. In response to high stress, they develop repetitive, self-destructive movements such as chewing on cage bars. The sole purpose of their suffering is to produce piglets for slaughter, and once they grow too sickly or weak, they too are slaughtered.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [REFERENCE]: true
                            },
                            portal: `unsalvaged_sows`
                        }
                    }
                ]
            },
            {
                time: 78,
                lyric: [
                    `form a trail which leads to a`,
                    {
                        anchor: `bloody broom,`,
                        annotation: {
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
            },
            {
                unitMap: true,
                stanzaType: VERSES
            }
        ],
        [
            {
                time: 90,
                lyric: [
                    `Through an alley strewn with`,
                    {
                        anchor: `burger shrouds,`,
                        annotation: {
                            description: `As a vegan, I became sensitive to anything even remotely suggestive of meat or animal byproducts, such as a hamburger wrapper, and realised that I too had been inured, living in a society built on the commoditisation of animal suffering.`,
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
                        annotation: {
                            description: [
                                `Having spent the past several years both playing and attending shows, I saw firsthand how easily an audience can get whipped up while being of one mind. And now, as that world drifted away and I was all alone, I wondered what exactly drew me to those crowds, and why I so longed to be adored by them. I questioned everything I valued up to that day, like a reformed`,
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
                        annotation: {
                            description: [
                                `The insignia of the`,
                                {
                                    italic: {
                                        anchor: `Schutzstaffel,`,
                                        wiki: `Schutzstaffel`
                                    }
                                },
                                `the paramilitary group that carried out the Holocaust, consists of two thunderbolts side by side. Wishing no more to strike down anyone with my thunderbolts, I struck myself down, leaving behind my former convictions in the process.`
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
                        annotation: {
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
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `swastika`,
                                    wiki: `Swastika`
                                },
                                `is an ancient Indian symbol of peace and continuity that was later co-opted by the Nazis. To avoid association with violence and hatred, today's Hindus and Buddhists often present their swastikas facing left, in reverse of the Nazi symbol, which faces right.`
                            ],
                            portal: `swastikas`
                        }
                    },
                    `inside out…`
                ]
            },
            {
                unitMap: true,
                stanzaType: VERSES,
                subsequent: true
            }
        ],
        [
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
                        annotation: {
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
                        annotation: {
                            description: [
                                `Upon going vegan, I became a volunteer at`,
                                {
                                    anchor: `People for the Ethical Treatment of Animals,`,
                                    wiki: `People_for_the_Ethical_Treatment_of_Animals`
                                },
                                `and for several years, I took part in their demonstrations for animal rights.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                stanzaType: PRECHORUS
            }
        ],
        [
            {
                time: 123,
                centre: {
                    italic: `(solo)`
                }
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `When Sita and I first met, she asked to hear some of my songs. I had just bought a new multi-effects processor and played around with it, so I gave her a few excerpts from those experiments. She particularly liked one in which I had pitch-shifted my vocals an octave up, so I made it the basis for the second half of this song.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: INSTRUMENTAL
            }
        ],
        [
            {
                time: 138,
                lyric: [
                    `"So all your`,
                    {
                        anchor: `leads have left`,
                        annotation: {
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
                        annotation: {
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
                        annotation: {
                            description: [
                                `In Nirvana's "Sappy,"`,
                                {
                                    anchor: `Kurt Cobain`,
                                    wiki: `Kurt_Cobain`
                                },
                                `compares the victim of an emotionally abusive relationship to a small creature kept in a jar with breathing holes punched in its lid. I liked the imagery, so I borrowed it shamelessly here.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true,
                                [SONGWRITING]: true
                            }
                        }
                    },
                    `dear; and now, good night."`
                ]
            },
            {
                unitMap: true,
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 170,
                centre: {
                    italic: `(solo)`
                }
            },
            {
                unitMap: true,
                stanzaType: INSTRUMENTAL
            }
        ],
        [
            {
                time: 186,
                lyric: [
                    `The stardust marks us, Odin,`,
                    {
                        anchor: `sparks zip through our heads…`,
                        annotation: {
                            portal: `spark_zips`
                        }
                    }
                ]
            },
            {
                time: 194,
                lyric: `And can we start as children? Would we want to then?`
            },
            {
                time: 201,
                lyric: [
                    `The`,
                    {
                        anchor: `diapered white dwarf,`,
                        annotation: {
                            description: [
                                {
                                    anchor: `Apasmara`,
                                    wiki: `Apasmara`
                                },
                                `is a dwarf demon of ignorance in Hindu mythology. A`,
                                {
                                    anchor: `white dwarf`,
                                    wiki: `White_dwarf`
                                },
                                `is the dense remnant of an aged star. As I began to take an unflinching look at all the hurt I'd caused, I was comforted to know that those who came before me had learned from their mistakes. And yet, it felt just as dispiriting to know that those coming after had yet to make theirs. The universe never truly learns, and I was part of the reason why. I had this same thought about my brother many years ago, which made me realise that all I could do was love him for who he was.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `gurgling, curls up for his sleep…`
                ]
            },
            {
                time: 209,
                lyric: [
                    `Our ashed heads bow from`,
                    {
                        anchor: `chivalry to our Siva's feet…`,
                        properNoun: true,
                        annotation: {
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
                                `as a cosmic dancer, who dances to tear down the universe and then build it up again, in an endless cycle. Beneath his feet lies the dwarf demon Apasmara, thus symbolising Siva's victory over ignorance. And having done my part to help destroy the universe, I now commit to rebuilding it.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            },
                            portal: `chivalry`
                        }
                    }
                ]
            },
            {
                unitMap: true,
                stanzaType: CHORUS
            }
            // Afterword: These days, I'd say I'm vegan maybe 90% of the time, the naysaying judgment of hardcore vegans notwithstanding.
        ]
    ],
    tasks: [
        {
            taskName: `afterword annotations`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `sort out past and present tense`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `annotations`,
            workedHours: 34,
            neededHours: 34,
            subtasks: [
                {
                    taskName: `make less wordy`,
                    workedHours: 0,
                    neededHours: 1
                }
            ]
        },
        {
            taskName: `include wiki urls`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `separate annotations into dot categories`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `rough illustration synopses`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `review synopses and rough illustrations`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `music annotations`,
            workedHours: 4,
            neededHours: 4
        }
    ]
}
