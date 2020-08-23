import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGWRITING
} from '../../../../app/constants/dots'

import {
    VERSES,
    BRIDGE,
    INTRO,
    REFRAIN,
    IS_UNIT_DOT
} from '../../../../app/constants/lyrics'

export default {
    title: 'Cremated',
    duration: 164,
    overview: `While I can't deny that dating white women helped silence the nagging feeling I had of being genetically inferior, I honestly didn't seek them out. A case in point is Miriam, whom I met at a Yearlings show. She was the storybook ending my ego had been waiting for: cute, hip, and drawn to me through no effort on my part. We lasted a few months. In the end, I had to wonder if she was slumming it, and whether I was just one more checkbox to mark off.`,
    isDoublespeaker: true,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `A childhood playmate once asked me if I knew what cremation was. I didn't, and assumed it must be fun and tasty. That contrast between expectation and reality neatly sums up the seemingly innocent day trip that ended with Miriam breaking up with me.`,
                    dotKeys: {
                        [BACKSTORY]: true,
                        [OBSERVATION]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: INTRO
            },
            mainVerses: [
                {
                    time: 0,
                    lyricCentre: {
                        anchor: `Or another…`,
                        todo: true,
                        card: {
                            description: `Even if I couldn't be with Mara, I could still be with someone like her. Namely, Miriam.`,
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `The first line of this song is obviously a response to the last line of the previous one, which gave me the idea to chain them together as a`,
                        {
                            anchor: `medley,`,
                            wiki: `Medley_(music)`
                        },
                        `à la`,
                        {
                            isItalic: true,
                            lyric: {
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
            }
        },
        {
            unitMap: {
                formType: REFRAIN
            },
            mainVerses: [
                {
                    time: 4,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Miriam's theme)`
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `A`,
                        {
                            anchor: `Shepard tone`,
                            wiki: `Shepard_tone`
                        },
                        `is an auditory illusion in which a tone moves steadily up or down in pitch yet remains fixed within the same register. A steady move downward seemed an apt metaphor for my breakup with Miriam, so I included two Shepard tones here. One is a low bass that descends in discrete half steps, while the other is a high treble that does so in a perpetual glissando. Since I didn't know how to code at the time, both were made by splicing together pure tones produced on a synthesizer.`
                    ],
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
                    time: 24,
                    lyricLeft: [
                        {
                            anchor: `At a vista,`,
                            todo: true,
                            card: {
                                description: `Driving in her car, Miriam and I arrive at a secluded spot on a cliff overlooking the San Francisco Bay.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        {
                            // NOTE: There are actually two 'key turned's in this song?
                            anchor: `key turned`,
                            todo: true,
                            card: {
                                wormhole: `key_turned`
                            }
                        }
                    ],
                    lyricRight: [
                        {
                            anchor: `Atavist`,
                            todo: true,
                            cards: [
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
                            todo: true,
                            card: {
                                description: [
                                    `My brother was a`,
                                    {
                                        anchor: `breech baby,`,
                                        wiki: `Breech_birth`
                                    },
                                    `having exited the womb bottom first rather than head first, which complicated the delivery. My mother once hypothesized this to be the cause of his autism.`
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
                    lyricLeft: [
                        `to`,
                        {
                            anchor: `first switch`,
                            todo: true,
                            card: {
                                description: `After parking the car, Miriam turns the stereo on by flipping the ignition switch to the accessory position.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `in her low two-seater,`
                    ],
                    lyricRight: [
                        `subversive`,
                        {
                            // NOTE: I added a hyphen in the lyrics as well.
                            anchor: `inner lotus-eater,`,
                            todo: true,
                            card: {
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
                    lyricLeft: `and deaf from blasting frontal speakers,`,
                    lyricRight: [
                        `an everlasting`,
                        {
                            anchor: `doublespeaker,`,
                            todo: true,
                            card: {
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
                    lyricLeft: [
                        `this`,
                        {
                            anchor: `phoenix risen limp`,
                            card: {
                                description: [
                                    `In Greek mythology, the`,
                                    {
                                        anchor: `phoenix`,
                                        wiki: `Phoenix_(mythology)`
                                    },
                                    `is a bird that is reborn from its own ashes. Having broken up with Sita to date Miriam, I also await my triumphant rebirth. But with Miriam seated on my lap as we make out, I am suddenly overcome with self-doubt, and my "penis" rises limply, unable to reach a full erection.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `beneath her`
                    ],
                    lyricRight: [
                        `his`,
                        {
                            anchor: `beaten wit and id`,
                            todo: true,
                            card: {
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
                    lyricLeft: [
                        {
                            anchor: `pinkish slip,`,
                            card: {
                                description: [
                                    `Miriam is wearing a silky pink undergarment under her skirt. Of course, a`,
                                    {
                                        anchor: `pink slip`,
                                        wiki: `Termination_of_employment`
                                    },
                                    `is also a notice to inform an employee that they're getting fired…`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `making scroonched her pantyhose.`
                    ],
                    lyricRight: [
                        `sinking ship, maybe`,
                        {
                            anchor: `good for anecdotes.`,
                            todo: true,
                            card: {
                                description: `Though Miriam was entertained by my character, it wasn't in the way one should hope, which blew apart my theory that being interesting at all costs is the key to dating. I was to be the oddball ex-boyfriend providing grist for a lifetime of amusing tales, not the life companion with whom she would one day share them.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `This song uses doublespeaker rhyme because my original plan was to contrast Miriam's inner thoughts with mine. I gave up after I kept forgetting which column of lyrics corresponded with which person, making me realize that no such contrast existed. We were both of the same mind in thinking the relationship was doomed to fail. One of us just had a better idea of when.`,
                    dotKeys: {
                        [OBSERVATION]: true,
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
                    time: 39,
                    lyricLeft: [
                        {
                            anchor: `His god humming "Freebird,"`,
                            todo: true,
                            card: {
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
                            todo: true,
                            card: {
                                description: `Some may protest that these dashboard ornaments objectify certain ethnic groups. And rightfully so. But I wasn't thinking in those terms at the time. I was just so happy to be wanted.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ],
                    lyricRight: `As comedy teams work, a hoot the times`
                },
                {
                    time: 42,
                    lyricLeft: [
                        `nods as`,
                        {
                            anchor: `she drums her toes.`,
                            todo: true,
                            card: {
                                description: [
                                    `Of course, he actually sways because Miriam, who happens to be`,
                                    {
                                        isEmphasis: true,
                                        lyric: `my`
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
                    lyricRight: [
                        `not`,
                        {
                            anchor: `at each other's throats.`,
                            todo: true,
                            card: {
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
                                    `my two personalities would befuddle each other, much to Miriam's delight. But even so, she recognized the underlying mental dysfunction that surely fueled this spectacle, and wanted no lasting part in it.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                    time: 46,
                    lyricLeft: `Though, she ponders the children`,
                    lyricRight: [
                        {
                            anchor: `Trophy bronzed from a Trojan`,
                            todo: true,
                            cards: [
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
                    lyricLeft: [
                        `born from a`,
                        {
                            anchor: `forced conversion`,
                            todo: true,
                            card: {
                                description: [
                                    `Historically, conquered peoples were`,
                                    {
                                        anchor: `forced to adopt`,
                                        wiki: `Forced_conversion`
                                    },
                                    `the religious beliefs of their conquerors. More often than not, however, they simply repurposed old customs and deities to fit their new faith. Here, Miriam sees through my own attempts at assimilation and recognizes them to be no less disingenuous. She thus fears that corrupt traces of my old ways will always remain.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ],
                    lyricRight: [
                        `for some`,
                        {
                            anchor: `unforeskinned virgin`,
                            todo: true,
                            card: {
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
                    lyricLeft: [
                        `on a`,
                        {
                            anchor: `self-servicing cleric surgeon`,
                            todo: true,
                            card: {
                                description: `Of course, I was ultimately the one forcing myself. It's as if I had presided over my own conversion ritual, then surgically removed my own foreskin.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ],
                    lyricRight: `on the shelf, serves his declared assertion:`
                },
                {
                    time: 56,
                    lyricLeft: `duly may inherit his burdens.`,
                    lyricRight: [
                        `to remain`,
                        {
                            anchor: `inherently perfect,`,
                            todo: true,
                            card: {
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
                    lyricLeft: [
                        `This swarm pumped and`,
                        {
                            anchor: `kissed off, she purges up.`,
                            todo: true,
                            card: {
                                description: `Bringing me to orgasm, Miriam sucks up the ejaculate, then leans over the car door to spit it out. I imagine this to be her symbolic rejection of the sperm that carries my defective genes, which must never be allowed to mingle with hers.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ],
                    lyricRight: [
                        `as`,
                        {
                            anchor: `worn puppet`,
                            todo: true,
                            card: {
                                description: `Imagining the discarded condom to be a lifeless puppet, I realize that having a drunken personality is like being a ventriloquist. My dummy can then be used to say and do all the crude and questionable things needed to get what I want, while I just sit by as an innocent onlooker.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `his`,
                        {
                            anchor: `offscreen person dubs.`,
                            todo: true,
                            card: {
                                description: `Of course, during the frequent and lengthy periods when I was drunk, it sure didn't seem obvious that my drunken self was the dummy whose words and actions were being dictated by the sober me, rather than the other way around.`,
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
                formType: VERSES,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 61,
                    lyricLeft: `Despite once promising forever,`,
                    lyricRight: `His silent dramedy works better;`
                },
                {
                    time: 64,
                    lyricLeft: [
                        `which she swore when scarcely`,
                        {
                            anchor: `twenty-one.`,
                            todo: true,
                            card: {
                                description: `Miriam was several years younger than me, and thus eager to live it up just as I was ready to settle down.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ],
                    lyricRight: [
                        {
                            anchor: `twitching sword`,
                            card: {
                                description: [
                                    `While`,
                                    {
                                        anchor: `dubbing`,
                                        wiki: `Dubbing_(filmmaking)`
                                    },
                                    `may refer to the replacement of an actor's voice in post-production, it also refers to the ritual of`,
                                    {
                                        anchor: `conferring knighthood.`,
                                        wiki: `Accolade`
                                    },
                                    `And so I imagine my drunken self, confused by the orders he has been given to confess to the crimes of my sober self, instead erratically patting him on the shoulder with a sharp sword.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `in care, he's anyone.`
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
                    time: 70,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Miriam's theme)`
                    }
                }
            ]
        },
        {
            unitMap: {
                formType: BRIDGE
            },
            mainVerses: [
                {
                    time: 90,
                    lyricCentre: [
                        {
                            anchor: `Needle done`,
                            todo: true,
                            cards: [
                                {
                                    description: `Having gone all the way with Miriam, I am at peace with our inevitable breakup. As I bask in my post-coital glow, then, an exaggerated scenario plays out in my mind of how things will end. I picture myself as a terminally ill patient being put to sleep, as my favorite record finishes playing in the background.`,
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
                            todo: true,
                            card: {
                                description: [
                                    `Some record players lack an auto-return function, so the needle will coast without end in the lead-out groove until lifted. Also, during euthanasia, the needle is left in the vein as the`,
                                    {
                                        anchor: `barbiturate`,
                                        wiki: `Barbiturate`
                                    },
                                    `is slowly injected.`
                                ]
                            }
                        }
                    ]
                },
                {
                    time: 94,
                    lyricCentre: [
                        `it`,
                        {
                            anchor: `hums a typo`,
                            card: {
                                description: [
                                    `Like a typo, Miriam's involvement with me was a simple mistake that she could easily correct. And like a`,
                                    {
                                        anchor: `"Type O,"`,
                                        wiki: `Blood_type`
                                    },
                                    `the universal blood donor, I was ever eager to give of myself to her, even as she could do nothing to save me in return.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        {
                            anchor: `fragile ex`,
                            card: {
                                description: [
                                    `Knowing the kind of fragile ex-boyfriend I was sure to be, Miriam must have dreaded the breakup. But of course she had no choice, since who knew what horrors lurked in my genetic makeup? Perhaps I was a carrier of`,
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
                    lyricCentre: [
                        `With his`,
                        {
                            anchor: `vinyl, exit`,
                            card: {
                                description: [
                                    `After Miriam helps me to my "final exit," a euphemism used by proponents of`,
                                    {
                                        anchor: `assisted suicide,`,
                                        wiki: `Assisted_suicide`
                                    },
                                    `I imagine her helping herself to my record collection, which she'll trade for cash at a record store.`
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
                    lyricCentre: [
                        `Undeluded, she'll bask in`,
                        {
                            anchor: `selfish cut-off jeans,`,
                            card: {
                                description: [
                                    `In`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `The Selfish Gene,`,
                                            wiki: `The_Selfish_Gene`
                                        }
                                    },
                                    {
                                        anchor: `Richard Dawkins`,
                                        wiki: `Richard_Dawkins`
                                    },
                                    `explains natural selection from the vantage point of genes themselves, rather than the individual beings who carry them. So as Miriam blocks me from getting under her cutoffs ever again, I imagine it's because her genes, wishing to remain "undiluted," have conspired to "cut off" any chance of mixing with mine.`
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
                    lyricCentre: [
                        `and`,
                        {
                            anchor: `in her pool,`,
                            todo: true,
                            card: {
                                description: `Lying sedated on my deathbed, I see Miriam lounging by a pool, eternally radiant in her youth. I exhaust my last breath to wish her well, but she plunges back into the deep end and doesn't hear me. In every which way, she has already moved on.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `hears not a`,
                        {
                            anchor: `worrisome`,
                            todo: true,
                            card: {
                                description: `I genuinely wished Miriam the best and continued to care about her well-being after our breakup. This surprised me, given the contrast of how selfishly I behaved every time I broke up with Sita. But despite how much I gave of myself and how little Miriam gave in return, I still came away knowing that someone like her could want me, even if just for a while. As far as I was concerned, then, I got the best end of that deal.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        {
                            anchor: `"Bless her,`,
                            todo: true,
                            card: {
                                description: [
                                    `The title of the play`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Children of a Lesser God,`,
                                            wiki: `Children_of_a_Lesser_God_(play)`
                                        }
                                    },
                                    `which centers on a deaf woman, suggests that being disabled is like living in a world created by an inferior deity. But I interpreted it differently as a child. Given the autism that ran in my family's genes, combined with our foreign manner of worship, I assumed that the disabled`,
                                    {
                                        isEmphasis: true,
                                        lyric: `themselves`
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
                            cards: [
                                {
                                    description: [
                                        `My imagined scenario ends with Miriam feeling mightily relieved, knowing that in her gene pool, "here's not where some lesser god has peed."`
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
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    // NOTE: Change in recording? Connect to Uncanny Valley?
                    description: `The bouncing ping pong ball here evokes the ticking of a wall clock by my deathbed. As I fade away in my infirm state, the echoes reverberate like the sound of a ball being volleyed back and forth, and I picture Miriam in a leisurely tennis match with her new beau.`,
                    dotKeys: {
                        [NARRATIVE]: true,
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
                    time: 112,
                    lyricLeft: [
                        `The`,
                        {
                            anchor: `seat hurt`,
                            todo: true,
                            card: {
                                description: `I somehow threw out my back while reclining the seat with Miriam on top of me. The pain has now worsened, and I facetiously reason that it's because I'm getting on in my years.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `when he lowered it,`
                    ],
                    lyricRight: `The key turned and she floors it,`
                },
                {
                    time: 115,
                    lyricLeft: [
                        `though no worse but for`,
                        {
                            anchor: `his soreness,`,
                            todo: true,
                            card: {
                                description: `Miriam wanted sex far more than Sita did, which ran me ragged as I was always still recovering from the last time. But here once again, I suppose that it's old age doing me in.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ],
                    lyricRight: [
                        `so`,
                        {
                            anchor: `homeward the sport's escorted,`,
                            todo: true,
                            card: {
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
                    lyricLeft: [
                        `this geezer's`,
                        {
                            anchor: `life support's abortive.`,
                            todo: true,
                            card: {
                                description: `Based on the perceived motives of younger women who date much older men, I assume that Miriam would jump at the first excuse to remove me from life support.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ],
                    lyricRight: [
                        `the`,
                        {
                            anchor: `cleaved horizon`,
                            todo: true,
                            card: {
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
                    lyricLeft: [
                        `He's`,
                        {
                            anchor: `vegging with his boner shortened;`,
                            todo: true,
                            cards: [
                                {
                                    description: `Zoned out in my flaccid state, I'm about to be blindsided by Miriam's true intention for today's outing.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `veggie_wishbone`
                                }
                            ]
                        }
                    ],
                    lyricRight: [
                        {
                            anchor: `Redressed,`,
                            card: {
                                description: `As I get "redressed" by putting my clothes back on, I'm about to learn what Miriam had planned all along. Our latest sexual escapade was only meant to serve as redress for the bad news that she has forthcoming.`,
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
                    lyricLeft: [
                        `a pop, and she`,
                        {
                            anchor: `pulls the plug.`,
                            card: {
                                description: `The cigarette lighter plug pops out, and Miriam pulls it from the dashboard socket to light her cigarette. Having satisfied me with an orgasmic "pop," she is now less troubled to "pull the plug" on our relationship.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ],
                    lyricRight: `apology, bold and blunt.`
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
                    time: 127,
                    lyricLeft: `Lights one up then draws a daring`,
                    lyricRight: [
                        `Life's a dumb`,
                        {
                            anchor: `ex-dromedary,`,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `dromedary,`,
                                        wiki: `Dromedary`
                                    },
                                    `or Arabian camel, has a single hump on its back, while the`,
                                    {
                                        anchor: `Bactrian camel`,
                                        wiki: `Bactrian_camel`
                                    },
                                    `has two.`
                                ]
                            }
                        }
                    ]
                },
                {
                    time: 130,
                    lyricLeft: [
                        `puff,`,
                        {
                            anchor: `preparing the scoop,`,
                            card: {
                                description: `Miriam searches for a way to deliver the bad news in the least messy way possible. It's as if she stands ready with "scoop" in hand, in case her pet loses control and takes a "dump" on her freshly manicured lawn.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `he's getting dumped.`
                    ],
                    lyricRight: [
                        `hungry carrying this groovy`,
                        {
                            anchor: `second hump.`,
                            card: {
                                description: `A camel stores fat in its hump, allowing it to travel for days without eating. So in trading away Sita's love for the ego boost I gained from "humping" other women, I was like a senseless camel who forwent a lifetime of satisfying meals just to wear a flashy new adornment on his back.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
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
                formType: REFRAIN
            },
            mainVerses: [
                {
                    time: 135,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Miriam's theme)`
                    }
                }
            ]
        }
    ]
}
