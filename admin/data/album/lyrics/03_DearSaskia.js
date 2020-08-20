import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    AFTERWORD,
    SONGWRITING
} from '../../../../app/constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    REFRAIN,
    IS_UNIT_DOT
} from '../../../../app/constants/lyrics'

export default {
    title: 'Dear Saskia',
    duration: 171,
    overview: `Sasha was a childhood friend, as well as my first crush. The strength she drew from her Jewish identity fascinated me, as I felt no cultural or religious pull of my own. But this clued me in on a cruel paradox. Namely, that nothing comes from longing to share in someone's faith and roots, which stay strong precisely by not being shared. Sasha moved away in middle school, just as I began to deal with bullies. That summer, I wrote her a letter on a family trip to Taiwan.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `Sasha's given name was actually Saskia. But because this was difficult for her earliest playmates to pronounce, she had gone by the nickname of Sasha her entire life.`,
                    dotKeys: {
                        [BACKSTORY]: true
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
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Sasha's theme)`
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    // TODO: Make this one more about cloying bits and pieces from studying the Beatles. treacly
                    description: [
                        `In my teenage years, I tried to figure out how the`,
                        {
                            anchor: `Beatles`,
                            wiki: `The_Beatles`
                        },
                        `weaved melodies into chord progressions so seamlessly. The music for this song began as a zealous attempt to match their form and style. In the end, it suffered from overthinking, and I put it away in disgust. Years later, I realised that its overwrought nature was exactly what this letter to Sasha called for, and trotted it back out.`
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
                    time: 5,
                    lyricCentre: `Dearest Sasha,`
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
                    time: 7,
                    lyric: [
                        `It's nearing autumn here with`,
                        {
                            anchor: `record highs.`,
                            todo: true,
                            card: {
                                description: `It's hard to begin writing a letter. But one can always talk about the weather.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 10,
                    lyric: `Is it searing in Boston? Hope this letter finds`
                },
                {
                    time: 13,
                    lyric: [
                        `your`,
                        {
                            anchor: `first semester`,
                            todo: true,
                            card: {
                                description: `My family is spending the summer in Taiwan. By the time we're to get back to the States, Sasha will have already moved to Boston and begun the new school year.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `fine while I'm out of town…`
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `I wanted the vocals to sound sickly here, and so I held off on recording them until I came down with an awful cold, which was guaranteed to happen at some point during the five years that I worked on this album.`,
                    dotKeys: {
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
                    time: 18,
                    lyric: [
                        {
                            anchor: `You'd love Taiwan,`,
                            todo: true,
                            card: {
                                description: `As we toured the countryside with our Taiwanese cousins, I would add to my mental list of all the things I could share with Sasha one day. I think this might get at why I've never felt strongly about being Taiwanese. Until one's heritage can be shared with someone else, there doesn't seem to be any real point.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `surrounded by walls of mountains,`
                    ]
                },
                {
                    time: 22,
                    lyric: `their peaks sealed and shielded by foggy clouds.`
                },
                {
                    time: 26,
                    lyric: `Beneath this ceiling yields the scene a reeling feel`
                },
                {
                    time: 30,
                    lyric: [
                        `of some`,
                        {
                            anchor: `giant's house.`,
                            todo: true,
                            card: {
                                description: `Here I describe to Sasha my most vivid memory of Taiwan thus far, in which I'm standing in the middle of a lush valley. The ground is completely level, the surrounding mountains are almost vertical, and a translucent blanket of clouds covers the sky, dipping below the mountain peaks. I feel like a tiny guest in a giant's house.`,
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
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 33,
                    lyric: `So… before I left, you said`
                },
                {
                    time: 37,
                    lyric: [
                        `I should`,
                        {
                            anchor: `keep your kid name,`,
                            todo: true,
                            card: {
                                description: `Sasha decided that, once in Boston, she would start to go by her given name of Saskia. I asked her if I should now call her Saskia as well. She said no, that it would be nice to always be reminded of which friends knew her first.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `with everything it meant.`
                    ]
                },
                {
                    time: 41,
                    lyric: [
                        `But then in`,
                        {
                            anchor: `your embrace,`,
                            todo: true,
                            card: {
                                description: `Of course, it's no comfort to be cherished as an old friend by someone so visibly eager to dive into the new. As we hugged on the last day of school, Sasha fidgeted like a creature ready to slough off her old skin and fly away.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `I felt you`,
                        {
                            anchor: `prepped to shed…`,
                            card: {
                                description: [
                                    `Sasha is literally "prepped," in that she is preparing to begin enrollment at a`,
                                    {
                                        anchor: `preparatory school`,
                                        wiki: `College-preparatory_school`
                                    },
                                    `in Boston.`
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
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 48,
                    lyric: [
                        `And I'd reflect inside`,
                        {
                            anchor: `withering`,
                            card: {
                                wormhole: `withering`
                            }
                        },
                        {
                            anchor: `amber eyes—`,
                            todo: true,
                            card: {
                                description: [
                                    `Sasha's eyes were of an amber color. Also,`,
                                    {
                                        anchor: `amber`,
                                        wiki: `Amber`
                                    },
                                    `is fossilized tree resin that sometimes preserves the remains of trapped insects from epochs past.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 52,
                    lyric: [
                        {
                            anchor: `your pupil's pupal fly,`,
                            card: {
                                description: [
                                    `While I reflect on my feelings for Sasha, I recall our last day together, when I caught my reflection in the`,
                                    {
                                        anchor: `pupil`,
                                        wiki: `Pupil`
                                    },
                                    `of her eye. As she looked at me the way a teacher looks upon a pupil, I could see we were no longer on the same footing, if we ever were.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `a`,
                        {
                            anchor: `pet petrified—`,
                            card: {
                                description: [
                                    `Petrified by the thought of losing Sasha, I felt like a petrified`,
                                    {
                                        anchor: `pupa`,
                                        wiki: `Pupa`
                                    },
                                    `that has no chance to molt.`
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
                    time: 56,
                    lyric: [
                        `with you raving over how`,
                        {
                            anchor: `he's getting you`,
                            card: {
                                description: [
                                    `Every boy that Sasha ever crushed on was`,
                                    {
                                        anchor: `Jewish,`,
                                        wiki: `Jews`
                                    },
                                    `which in turn motivated her to be a better Jew. It frustrated me that anyone who could be part of this positive feedback loop instantly had the winning advantage in "getting her."`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 64,
                    lyric: [
                        `staying kosher. Though, you know,`,
                        {
                            anchor: `I would have too…`,
                            todo: true,
                            card: {
                                description: [
                                    `It seemed obvious to me that if Sasha were to want me, then I would certainly convert to`,
                                    {
                                        anchor: `Judaism.`,
                                        wiki: `Judaism`
                                    }
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `I matched the passive-aggressiveness of the lyrics with woodwind screeches and scratch tones on bowed guitars.`,
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
                    time: 70,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Sasha's theme)`
                    }
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
                        `And I sniffled daily when you`,
                        {
                            anchor: `skipped a grade.`,
                            todo: true,
                            card: {
                                description: `I panicked when Sasha was allowed to skip the fifth grade, as this opened new vistas for her that necessarily excluded me. With middle school now underway, I am reminded of this panic as Sasha navigates with seeming ease the same social landscape that I find so treacherous.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 77,
                    lyric: [
                        `One`,
                        {
                            anchor: `bus seat`,
                            todo: true,
                            card: {
                                description: [
                                    `My family lived in the largely nonwhite neighborhood of`,
                                    {
                                        anchor: `North Hollywood.`,
                                        wiki: `North_Hollywood,_Los_Angeles`
                                    },
                                    `Halfway through elementary school, however, my mother devised a ruse that allowed my sister and I to bus into`,
                                    {
                                        anchor: `Sherman Oaks,`,
                                        wiki: `Sherman_Oaks,_Los_Angeles`
                                    },
                                    `a wealthy district with few minorities. I remember feeling out of my element, although at the time I didn't know exactly why.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `up you moved, letting rippled braids`
                    ]
                },
                {
                    time: 80,
                    lyric: [
                        `caress, sun-streaked and loose, a`,
                        {
                            anchor: `wet-cheeked papoose`,
                            todo: true,
                            card: {
                                description: [
                                    `Here, I recall one afternoon, when Sasha's hair blew in my face from the seat ahead of mine, and I realised that she had matured to the next peer group. I felt like a`,
                                    {
                                        anchor: `papoose,`,
                                        wiki: `Papoose`
                                    },
                                    `or Native American child, strapped to his mother's back, in anguish over having to start walking on his own.`
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
                    time: 84,
                    lyric: `sadly weaned from you…`
                }
            ]
        },
        {
            unitMap: {
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 88,
                    lyric: `Whom I knew I'd lose the day`
                },
                {
                    time: 92,
                    lyric: `you flew enraged and shooed them from their game;`
                },
                {
                    time: 95,
                    lyric: [
                        `untied this`,
                        {
                            anchor: `"tetherboy,"`,
                            cards: [
                                {
                                    description: [
                                        `Here, I recall an incident in which Sasha came to my rescue after some bullies had tied me to a`,
                                        {
                                            anchor: `"tetherball"`,
                                            wiki: `Tetherball`
                                        },
                                        `pole using the rope attached to the ball.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: [
                                        `Some overprotective parents tether their toddlers to a`,
                                        {
                                            anchor: `child harness`,
                                            wiki: `Child_harness`
                                        },
                                        `to keep them close by. As such, older children who are unable to fend for themselves might be mocked by their peers as having been kept on a tether their whole lives.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                }
                            ]
                        },
                        `soothing in your lecture voice.`
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: PRECHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 103,
                    lyric: [
                        `Oh but Sasha, if`,
                        {
                            anchor: `anarchy reigns,`,
                            todo: true,
                            card: {
                                description: `It was weird to be taught in history class that anarchy devolves into tyranny, and then to walk onto the quad and witness history being repeated.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 107,
                    lyric: [
                        `then no one lives when`,
                        {
                            anchor: `narcing to the aides,`,
                            todo: true,
                            card: {
                                description: [
                                    `To narc is to snitch, much like the narcotics officers who bust drug dealers by posing as high school students.`
                                ],
                                dotKeys: {
                                    [REFERENCE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 110,
                    lyric: [
                        `who shrug when thus annoyed, yawning,`,
                        {
                            anchor: `"Boys will beat boys…"`,
                            card: {
                                description: [
                                    `It's more common to say that boys will`,
                                    {
                                        isItalic: true,
                                        lyric: `be`
                                    },
                                    `boys, of course, but the one naturally follows the other. It always caught me by surprise when school aides would decline to intervene on behalf of the victims of bullying, as if such predation was natural to the middle school ecosystem.`
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
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 118,
                    lyric: `Well Sasha… okay, you saw the cuts.`
                },
                {
                    time: 122,
                    lyric: [
                        `But though my`,
                        {
                            anchor: `jaw was stuck,`,
                            todo: true,
                            card: {
                                description: `Here, I recall another incident in which a bully had snuck up from behind and put me in a chokehold while I was waiting for the school bus.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `so now I`,
                        {
                            anchor: `talk Canuck,`,
                            todo: true,
                            card: {
                                description: [
                                    `The chokehold incident left me with a dislocated jaw that required me to keep it clenched whenever I spoke. This led to a peculiar manner of pronunciation that some people to this day mistake for a`,
                                    {
                                        anchor: `Canadian accent.`,
                                        wiki: `Canadian_raising`
                                    },
                                    `Canadians, of course, are affectionately known as`,
                                    {
                                        anchor: `Canucks.`,
                                        wiki: `Canuck`
                                    }
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 126,
                    lyric: `there's been plenty days I've really been through worse.`
                },
                {
                    time: 134,
                    lyric: [
                        `Anyway, I'm feeling healed. Still,`,
                        {
                            anchor: `hugging hurts…`,
                            todo: true,
                            card: {
                                description: `To avoid the humiliation of getting beaten up, I would typically downplay my injuries. But here, in explaining to Sasha why I had to wince as we hugged that last day, I'm more eager to downplay how much it hurt in the metaphorical sense.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `Back in the day, every other band I knew would write their songs by figuring out all the chords up front, then layering a decent melody on top. But my theory was that the Beatles wrote the melody and chords all together, and so I aimed to do the same. I was always happiest with results like the chorus here, where the music meanders for a long stretch rather than repeating every four bars. Such songs are never fan favorites, yet they're the hardest to write, which I find oddly satisfying.`,
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
                    time: 138,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Sasha's theme)`
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
                    time: 143,
                    lyric: `And Sasha, I know you'll have them all,`
                },
                {
                    time: 147,
                    lyric: [
                        `while if I last the fall`,
                        {
                            anchor: `playing possum`,
                            todo: true,
                            card: {
                                description: [
                                    `To avoid confrontation, an opossum will faint and remain comatose in order to create the impression of being dead, which is known as`,
                                    {
                                        anchor: `playing possum.`,
                                        wiki: `Apparent_death`
                                    },
                                    `Similarly, I lament to Sasha here that my only recourse for the next few years is to periodically exit my body and hope for the best.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 151,
                    lyric: [
                        `is a toss-up. But where some`,
                        {
                            anchor: `hemophile`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Haemophilia`,
                                        wiki: `Haemophilia`
                                    },
                                    `is a disease in which blood cannot clot properly, leading to continuous bleeding.`
                                ]
                            }
                        }
                    ]
                },
                {
                    time: 154,
                    lyric: `might bleed the Nile to nausea,`
                },
                {
                    time: 158,
                    lyric: `I can wash up, and hope the bastards croak,`
                },
                {
                    time: 162,
                    lyric: [
                        `on`,
                        {
                            anchor: `rat turds choked.`,
                            card: {
                                description: `I wasn't sure how to end a song about a painful stage of my life that now seems comical in retrospect. I decided I was happiest to err on the side of humor.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [SONGWRITING]: true
                                }
                            }
                        }
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `While the first chorus of this song is grounded in the key of C, the second chorus collapses under the weight of my despondence and settles into the key of B\u2011flat, a whole step lower. But with my renewed commitment to power through the coming semester, this third and final chorus now soldiers its way to the key of D\u2011flat, a half step above.`,
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `Confused by the lack of interest in the album's release, I distilled my approach to writing songs into a lesson plan called`,
                        {
                            isItalic: true,
                            lyric: `Bobtail Method.`
                        },
                        `Unfortunately, this generated even less interest and probably only cemented my status as a hobbyist, rather than the kind of serious, career-oriented musician sought after by the indie labels.`
                    ],
                    dotKeys: {
                        [AFTERWORD]: true,
                        [OBSERVATION]: true
                    }
                }
            }
        }
    ]
}
