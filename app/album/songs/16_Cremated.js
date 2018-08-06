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
    BRIDGE,
    INTRO,
    REFRAIN,
    IS_DOT_CARD
} from 'constants/lyrics'

module.exports = {
    totalTime: 164,
    overview: `While I can't deny that dating white women helped silence the nagging feeling I had of being genetically inferior, I really didn't seek them out. A case in point is Miriam, who approached me at a party right after my band performed. She was the storybook ending my ego had been waiting for: cute, hip, and drawn to me with no effort on my part. We lasted a few months. In the end, I had to wonder if she was slumming it, and whether I was just one more checkbox to mark off.`,
    title: {
        anchor: `Cremated`,
        annotation: {
            description: `A childhood playmate once asked me if I knew what cremation was. I didn't, and assumed it must be fun and tasty. That contrast between expectation and reality neatly sums up the seemingly innocent day trip that ended with Miriam breaking up with me.`,
            dotKeys: {
                [BACKSTORY]: true,
                [OBSERVATION]: true
            }
        }
    },
    lyricUnits: [
        [
            {
                time: 0,
                centre: {
                    anchor: `Or another…`,
                    annotation: {
                        description: `Even if I couldn't be with Mara, I could still be with someone like her. Namely, Miriam.`,
                        dotKeys: {
                            [OBSERVATION]: true
                        }
                    }
                }
            },
            {
                isUnitMap: true,
                dotCard: {
                    anchor: IS_DOT_CARD,
                    annotation: {
                        description: [
                            `It made more sense for the line "or another…" to open this song rather than to close the previous one, which gave me the idea to chain them together as a medley, à la`,
                            {
                                italic: {
                                    anchor: `Abbey Road`,
                                    wiki: `Abbey_Road`
                                }
                            },
                            `by the Beatles. The resulting sense of urgency provides a nice push towards the album's finish.`
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
                time: 4,
                centre: {
                    italic: `(Miriam's theme)`
                }
            },
            {
                isUnitMap: true,
                dotCard: {
                    anchor: IS_DOT_CARD,
                    annotation: {
                        description: [
                            `A`,
                            {
                                anchor: `Shepard tone`,
                                wiki: `Shepard_tone`
                            },
                            `is an auditory illusion in which a single tone continuously descends in pitch yet remains fixed within the same register. It seemed an apt metaphor for my utterly deflated state after the breakup with Miriam, so I included two in this song. One is a bass tone that moves downward in discrete half steps, while the other is a treble tone that does so in a perpetual glissando. Both were made by splicing together pure tones produced on an analogue synthesiser.`
                        ],
                        dotKeys: {
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 24,
                left: [
                    {
                        anchor: `At a vista,`,
                        annotation: {
                            description: `Driving in her car, Miriam and I arrive at a secluded spot on a cliff overlooking the San Francisco Bay.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    {
                        // NOTE: There are actually two 'key turned's in this song?
                        anchor: `key turned`,
                        annotation: {
                            wormhole: `key_turned`
                        }
                    }
                ],
                right: [
                    {
                        anchor: `Atavist`,
                        annotation: [
                            {
                                description: [
                                    {
                                        anchor: `Atavism`,
                                        wiki: `Atavism`
                                    },
                                    `occurs when genetic traits in a species reappear after having disappeared generations ago.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            },
                            {
                                description: `Given my brother's autism and my father's likely Asperger syndrome, my mother always advised me not to have children, as the genes I carried for autism would pass onto them. As a result, I had to wonder if those I dated ever thought the same when judging my viability as a marriageable partner.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        ]
                    },
                    `stuck`,
                    {
                        anchor: `feet first,`,
                        annotation: {
                            description: [
                                `My brother was a`,
                                {
                                    anchor: `breech baby,`,
                                    wiki: `Breech_birth`
                                },
                                `having exited the womb bottom first rather than head first, which complicated the delivery. My mother once hypothesised this to be the cause of his autism.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 27,
                left: [
                    `to`,
                    {
                        anchor: `first switch`,
                        annotation: {
                            description: `After parking the car, Miriam turns the stereo on by flipping the ignition switch to the accessory position.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `in her low two-seater,`
                ],
                right: [
                    `subversive`,
                    {
                        // NOTE: I added a hyphen in the lyrics as well.
                        anchor: `inner lotus-eater,`,
                        annotation: {
                            description: [
                                `In Greek mythology, the`,
                                {
                                    anchor: `lotus-eaters`,
                                    wiki: `Lotus-eaters`
                                },
                                `were islanders observed by Odysseus to while away their days eating the narcotic fruit of the lotus. Similarly, Miriam would comment on how much I drank, but made no judgments. In hindsight, it was because she, like Odysseus, was keeping her distance.`
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
                time: 30,
                left: `and deaf from blasting frontal speakers,`,
                right: [
                    `an everlasting`,
                    {
                        anchor: `doublespeaker,`,
                        annotation: {
                            description: `The first month with Miriam was one of the happiest of my life, as all my efforts to improve myself during my first five-year plan finally came to fruition. Everything I did or could do seemed to amaze her, and the icing on top was doublespeaker rhyme, which I came up with while we were together. So Miriam became my sounding board for all the ways I planned to use it, such as to juxtapose my sober and drunken thoughts.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 34,
                left: [
                    `this`,
                    {
                        anchor: `phoenix risen limp`,
                        annotation: {
                            description: [
                                `In Greek mythology, the`,
                                {
                                    anchor: `phoenix`,
                                    wiki: `Phoenix_(mythology)`
                                },
                                `is a bird that is reborn from its own ashes. Having broken up with Sita to date Miriam, I also await my triumphant rebirth. But as Miriam climbs on top of me to make out, I am overcome with self-doubt, and my "penis" rises limply, unable to reach a full erection.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `beneath her`
                ],
                right: [
                    `his`,
                    {
                        anchor: `beaten wit and id`,
                        annotation: {
                            description: [
                                `In Freudian psychology, the`,
                                {
                                    anchor: `id`,
                                    wiki: `Id,_ego_and_super-ego`
                                },
                                `represents the primal impulses of the psyche. Wishing to play up both sides of my character, I told Miriam that allowing my drunken id to triumph over sober reasoning was the key to both my creative decisions and life choices.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `she's deemed her`
                ]
            },
            {
                time: 37,
                left: [
                    {
                        anchor: `pinkish slip,`,
                        annotation: {
                            description: `Miriam is wearing a silky pink undergarment under her skirt. Of course, a pink slip is also a notice given to inform an employee that they've been fired…`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true,
                                [REFERENCE]: true
                            }
                        }
                    },
                    `making scroonched her pantyhose.`
                ],
                right: [
                    `sinking ship, maybe`,
                    {
                        anchor: `good for anecdotes.`,
                        annotation: {
                            description: `Though Miriam was entertained by my character, it wasn't in the way one should hope, which blew apart my theory that being interesting at all costs is the key to dating. I was to be the oddball ex-boyfriend providing grist for a lifetime of amusing tales, not the life companion with whom she would one day share them.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                isUnitMap: true,
                dotCard: {
                    anchor: IS_DOT_CARD,
                    annotation: {
                        description: `This song uses doublespeaker rhyme because my original plan was to contrast Miriam's inner thoughts with mine. I gave up after I kept getting the two voices mixed up, which made me realise that no such contrast existed. We were both of the same mind in thinking the relationship was doomed to fail. It was only a question of when.`,
                        dotKeys: {
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
                time: 39,
                left: [
                    {
                        anchor: `His god humming "Freebird,"`,
                        annotation: {
                            description: [
                                `Affixed to the dashboard is an ornament of a native Hawaiian man in a grass skirt. As the stereo blares Lynyrd Skynyrd's`,
                                {
                                    anchor: `"Freebird,"`,
                                    wiki: `Free_Bird`
                                },
                                `he strums his ukulele in rhythm to his mountain god, whose rumblings retell the legend of an all-American phoenix.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `the`,
                    {
                        anchor: `hula guy`,
                        annotation: {
                            description: `Some may protest that these dashboard ornaments objectify certain ethnic groups. And rightfully so. But I wasn't thinking in those terms at the time. I was just so happy to be wanted.`,
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    }
                ],
                right: `As comedy teams work, a hoot the times`
            },
            {
                time: 42,
                left: [
                    `nods as`,
                    {
                        anchor: `she drums her toes.`,
                        annotation: {
                            description: [
                                `Of course, he actually sways because Miriam, who happens to be`,
                                {
                                    emphasis: `my`,
                                },
                                `all-American god, is humming along and tapping the underside of the dashboard with her feet.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ],
                right: [
                    `not`,
                    {
                        anchor: `at each other's throats.`,
                        annotation: {
                            description: [
                                `Some comedy duos famously did not get along, which enlivened their dynamic when the tapes were rolling. Like`,
                                {
                                    anchor: `Abbott and Costello`,
                                    wiki: `Abbott_and_Costello`
                                },
                                `or`,
                                {
                                    anchor: `Martin and Lewis,`,
                                    wiki: `Martin_and_Lewis`
                                },
                                `my two personalities would befuddle each other, much to Miriam's delight. But even so, she recognised the underlying mental dysfunction that surely fueled this spectacle, and wanted no lasting part in it.`
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
                isUnitMap: true,
                stanzaType: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 46,
                left: `Though, she ponders the children`,
                right: [
                    {
                        anchor: `Trophy bronzed from a Trojan`,
                        annotation: [
                            {
                                description: `Having climaxed first, Miriam wraps up our little tryst by giving me a blowjob. As she yanks the condom off, I'm reminded of the first time I had sex with a woman other than Sita. I was so amazed that I left the used condom on the nightstand for days, much like proud parents might bronze their baby's first pair of shoes.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            },
                            {
                                wormhole: `trophy_bronze`
                            }
                        ]
                    }
                ]
            },
            {
                time: 49,
                left: [
                    `born from a`,
                    {
                        anchor: `forced conversion`,
                        annotation: {
                            description: [
                                `Historically, conquered peoples were`,
                                {
                                    anchor: `forced to adopt`,
                                    wiki: `Forced_conversion`
                                },
                                `the religious beliefs of their conquerors. More often than not, however, they simply repurposed old customs and deities to fit their new faith. Here, Miriam sees through my own attempts at assimilation and recognises them to be no less disingenuous. She thus fears that corrupt traces of my old ways will always remain.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ],
                right: [
                    `for some`,
                    {
                        anchor: `unforeskinned virgin`,
                        annotation: {
                            description: `During these years, I avoided having strong personal convictions, as it seemed absurd that something so trivial should limit the size of my dating pool. The ideal was to present myself as the blankest of blank slates for each new woman. So if her faith required me to undergo ritual circumcision, then my foreskin was still intact. And if her moral beliefs required me to be sexually inexperienced, then I was still a virgin.`,
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 52,
                left: [
                    `on a`,
                    {
                        anchor: `self-servicing cleric surgeon`,
                        annotation: {
                            description: `Of course, I was ultimately the one forcing myself. It's as if I had presided over my own conversion ritual, then surgically removed my own foreskin.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ],
                right: `on the shelf, serves his declared assertion:`
            },
            {
                time: 56,
                left: `duly may inherit his burdens.`,
                right: [
                    `to remain`,
                    {
                        anchor: `inherently perfect,`,
                        annotation: {
                            description: `I never told Miriam that my real purpose in having a drunken personality was to remain above reproach myself, while blaming it for all the selfish things I desired but was too cowardly to own up to. Which makes sense, since the latest thing that I selfishly desired was her.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 59,
                left: [
                    `This swarm pumped and`,
                    {
                        anchor: `kissed off, she purges up.`,
                        annotation: {
                            description: `Bringing me to orgasm, Miriam sucks up the ejaculate, then leans over the car door to spit it out. I imagine this to be her symbolic rejection of the sperm that carries my defective genes, which must never be allowed to mingle with hers.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ],
                right: [
                    `as`,
                    {
                        anchor: `worn puppet`,
                        annotation: {
                            description: `Imagining the discarded condom to be a lifeless puppet, I realise that having a drunken personality is like being a ventriloquist. My dummy can then be used to say and do all the crude and questionable things needed to get what I want, while I just sit by as an innocent onlooker.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `his`,
                    {
                        anchor: `offscreen person dubs.`,
                        annotation: {
                            description: `Of course, during the frequent and lengthy periods when I was drunk, it sure didn't seem obvious that my drunken self was the dummy whose words and actions were being dictated by the sober me, rather than the other way around.`,
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                isUnitMap: true,
                stanzaType: VERSES
            }
        ],
        [
            {
                time: 61,
                left: `Despite once promising forever,`,
                right: `His silent dramedy works better;`
            },
            {
                time: 64,
                left: [
                    `which she swore when scarcely`,
                    {
                        anchor: `twenty-one.`,
                        annotation: {
                            description: `Miriam was several years younger than me, and thus eager to live it up just as I was ready to settle down.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ],
                right: [
                    {
                        anchor: `twitching sword`,
                        annotation: {
                            description: [
                                `While dubbing may refer to the replacement of an actor's voice in post-production, it also refers to the ritual of`,
                                {
                                    anchor: `conferring knighthood.`,
                                    wiki: `Accolade`
                                },
                                `I imagine my drunken personality, confused by the orders he was given, erratically tapping a perilously sharp sword on my sober self's shoulder.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `in care, he's anyone.`
                ]
            },
            {
                isUnitMap: true,
                stanzaType: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 70,
                centre: {
                    italic: `(Miriam's theme)`
                }
            },
            {
                isUnitMap: true,
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 90,
                centre: [
                    {
                        anchor: `Needle done`,
                        annotation: [
                            {
                                description: `Having gone all the way with Miriam, I am at peace with our inevitable breakup. As I bask in my post-coital glow, then, an exaggerated scenario plays out in my mind of how things will end. I picture myself as a terminally ill patient being put to sleep, as my favourite record finishes playing in the background.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            },
                            {
                                wormhole: 'needle_done'
                            }
                        ]
                    },
                    {
                        anchor: `will not retract,`,
                        annotation: {
                            description: `Some record players lack an auto-return function, so the needle will coast along in the lead-out groove until lifted. Also, during euthanasia, the needle is left in the vein as the barbiturate is slowly injected.`,
                            dotKeys: {
                                [REFERENCE]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 94,
                centre: [
                    `it`,
                    {
                        anchor: `hums a typo`,
                        annotation: {
                            description: [
                                `Like a typo, Miriam's involvement with me was a simple mistake that she could easily correct. And like a`,
                                {
                                    anchor: `"Type O,"`,
                                    wiki: `Blood_type`
                                },
                                `the universal blood donor, I was ever eager to give more of myself to her, while she could do nothing to save me in return.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    },
                    {
                        anchor: `fragile ex`,
                        annotation: {
                            description: [
                                `Knowing the kind of fragile ex-boyfriend I was sure to be, Miriam must have dreaded the breakup. Of course, she had no choice, since who knows what horrors lurk in my genetic makeup? I might very well be a carrier of`,
                                {
                                    anchor: `"Fragile X,"`,
                                    wiki: `Fragile_X_syndrome`
                                },
                                `a mutated X chromosome that results in mental disability.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `passed through ash…`
                ]
            },
            {
                time: 98,
                centre: [
                    `With his`,
                    {
                        anchor: `vinyl, exit`,
                        annotation: {
                            description: [
                                `After Miriam helps me to my "final exit," a euphemism used by proponents of`,
                                {
                                    anchor: `assisted suicide,`,
                                    wiki: `Assisted_suicide`
                                },
                                `she helps herself to my record collection, which she'll trade for cash at a music store.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `Miriam to cash his stash.`
                ]
            },
            {
                time: 102,
                centre: [
                    `Undeluded, she'll bask in`,
                    {
                        anchor: `selfish cut-off jeans,`,
                        annotation: {
                            description: [
                                `In`,
                                {
                                    italic: {
                                        anchor: `The Selfish Gene,`,
                                        wiki: `The_Selfish_Gene`
                                    }
                                },
                                `Richard Dawkins explains natural selection from the vantage point of genes themselves, rather than the individuals who carry them. So as Miriam blocks me from getting under her cutoffs ever again, I imagine that it's because her genes, wishing to remain "undiluted," have conspired to "cut off" any chance of mixing with mine.`
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
                time: 106,
                centre: [
                    `and`,
                    {
                        anchor: `in her pool,`,
                        annotation: {
                            description: `Lying sedated on my deathbed, I see Miriam lounging by a pool, eternally radiant in her youth. I exhaust my last breath to wish her well, but she plunges back into the deep end and doesn't hear me. In every which way, she has already moved on.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `hears not a`,
                    {
                        anchor: `worrisome`,
                        annotation: {
                            description: `I genuinely wished Miriam the best and continued to care about her well-being after our breakup. This surprised me, given the contrast of how selfishly I behaved every time I broke up with Sita. But despite how much I gave of myself and how little Miriam gave in return, I still came away knowing that someone like her could want me, even if just for a while. As far as I was concerned, then, I got the best end of that deal.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    {
                        anchor: `"Bless her,`,
                        annotation: {
                            description: [
                                `The title of Mark Medoff's play`,
                                {
                                    italic: {
                                        anchor: `Children of a Lesser God,`,
                                        wiki: `Children_of_a_Lesser_God_(play)`
                                    }
                                },
                                `which centres on a deaf woman, suggests that being disabled is like living in a world created by an inferior deity. But I interpreted it differently as a child. Given the autism that ran in my family's genes, combined with our foreign manner of worship, I assumed that the disabled`,
                                {
                                    emphasis: `themselves`
                                },
                                `must be the lesser creations.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    },
                    {
                        anchor: `Godspeed…"`,
                        properNoun: true,
                        annotation: [
                            {
                                description: [
                                    `My imagined scenario ends with Miriam feeling relieved to know that in her gene pool, "here's not where some lesser god has peed."`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            },
                            {
                                description: [
                                    `The insecurities I felt about my family's Buddhism were compounded by its obvious correlation with our having a different complexion from everyone else in Sasha's world. My inferiority complex thus failed to distinguish between having faulty genes, following a faulty faith, and being of a faulty race. They all seemed to derive from a single congenital defect at the core of my being.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        ]
                    }
                ]
            },
            {
                isUnitMap: true,
                dotCard: {
                    anchor: IS_DOT_CARD,
                    annotation: {
                        // NOTE: Change in recording? Connect to Uncanny Valley?
                        description: `The bouncing ping pong ball here evokes the ticking of a wall clock by my deathbed. As I fade away in my infirm state, the echoes reverberate like the sound of a ball being volleyed back and forth, and I picture Miriam in a leisurely tennis match with her new beau.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: BRIDGE
            }
        ],
        [
            {
                time: 112,
                left: [
                    `The`,
                    {
                        anchor: `seat hurt`,
                        annotation: {
                            description: `I somehow threw out my back while reclining the seat with Miriam on top of me. The pain has now worsened, and I facetiously reason that it's because I'm getting on in my years.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `when he lowered it,`
                ],
                right: `The key turned and she floors it,`
            },
            {
                time: 115,
                left: [
                    `though no worse but for`,
                    {
                        anchor: `his soreness,`,
                        annotation: {
                            description: `Miriam wanted sex far more than Sita did, which ran me ragged as I was always still recovering from the last time. But here once again, I suppose that it's old age doing me in.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    }
                ],
                right: [
                    `so`,
                    {
                        anchor: `homeward the sport's escorted,`,
                        annotation: {
                            description: `Having plied me with sex to ensure that I'll be a "good sport," Miriam now prepares to drive me home.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 118,
                left: [
                    `this geezer's`,
                    {
                        anchor: `life support's abortive.`,
                        annotation: {
                            description: `Based on the perceived motives of younger women who date much older men, I assume that Miriam would jump at the first excuse to remove me from life support.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ],
                right: [
                    `the`,
                    {
                        anchor: `cleaved horizon`,
                        annotation: {
                            description: `As we make our way downhill, I picture the horizon as a cleaver splitting the sky open. The road we drive on then becomes cement spilling down on me from the rupture.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `pours the mortar in.`
                ]
            },
            {
                time: 121,
                left: [
                    `He's`,
                    {
                        anchor: `vegging with his boner shortened;`,
                        annotation: [
                            {
                                description: `Zoned out in my flaccid state, I'm about to be blindsided by Miriam's true intention for today's outing.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                },
                            },
                            {
                                wormhole: `veggie_wishbone`
                            }
                        ]
                    }
                ],
                right: [
                    {
                        anchor: `Redressed,`,
                        annotation: {
                            description: `As I get "redressed" by putting my clothes back on, I'm about to learn that the sex followed by a blowjob was meant to serve as redress for the bad news that is forthcoming.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `he gets his notice, short an`
                ]
            },
            {
                time: 124,
                left: [
                    `a pop, and she`,
                    {
                        anchor: `pulls the plug.`,
                        annotation: {
                            description: `Upon hearing the cigarette lighter pop out, Miriam pulls it from the socket to light her cigarette. Having satisfied me with an orgasmic "pop," she now feels less troubled to "pull the plug" on our relationship.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
                            }
                        }
                    }
                ],
                right: `apology, bold and blunt.`
            },
            {
                isUnitMap: true,
                stanzaType: VERSES
            }
        ],
        [
            {
                time: 127,
                left: `Lights one up then draws a daring`,
                right: [
                    `Life's a dumb`,
                    {
                        anchor: `ex-dromedary,`,
                        annotation: {
                            description: [
                                `The`,
                                {
                                    anchor: `dromedary,`,
                                    wiki: `Dromedary`
                                },
                                `or Arabian camel, has a single hump on its back. The Bactrian camel has two.`
                            ]
                        }
                    }
                ]
            },
            {
                time: 130,
                left: [
                    `puff,`,
                    {
                        anchor: `preparing the scoop,`,
                        annotation: {
                            description: `Miriam searches for a way to deliver the bad news in the least messy way possible, like a homeowner ready to swoop in with "scoop" in hand as her dog takes its "dump" on her freshly manicured lawn.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    },
                    `he's getting dumped.`
                ],
                right: [
                    `hungry carrying this groovy`,
                    {
                        anchor: `second hump.`,
                        annotation: {
                            description: `A camel stores fat in its hump, allowing it to travel for days without eating. And in trading away Sita's love for the ego boost I gained from "humping" other women, I was like a starving camel who sacrificed his only meal just to wear a flashy new adornment on his back.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [PUN]: true,
                                [REFERENCE]: true
                            }
                        }
                    }
                ]
            },
            {
                isUnitMap: true,
                stanzaType: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 135,
                centre: {
                    italic: `(Miriam's theme)`
                }
            },
            {
                isUnitMap: true,
                stanzaType: REFRAIN
            }
        ]
    ],
    tasks: [
        {
            taskName: `tenses and categorisation`,
            workedHours: 13,
            neededHours: 14
        },
        {
            taskName: `annotations`,
            workedHours: 47,
            neededHours: 47
        },
        {
            taskName: `restructure lyrics`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `include wiki urls`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `separate annotations into dot categories`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `rough illustration synopses`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `music annotations`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `review synopses and rough illustrations`,
            workedHours: 2,
            neededHours: 2
        }
    ]
}
