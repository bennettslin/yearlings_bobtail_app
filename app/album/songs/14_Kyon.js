import {
    BACKSTORY,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGWRITING
} from '../../constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    CODA,
    REFRAIN,
    OUTRO,
    IS_DOT_CARD
} from '../../constants/lyrics'

module.exports = {
    totalTime: 225,
    overview: `The on-again, off-again years gave me enough distance from my misdeeds to see how emotionally abusive I had become. But sifting through my remorse, I was baffled by why Sita so willingly endured my cruelty. I tried hard to understand her psyche, and eventually came to see just how thoroughly she had tied her sense of worth to our relationship. I was fighting for me. She was fighting for us.`,
    title: {
        anchor: `Kyon? (क्यों?)`,
        annotation: {
            description: [
                {
                    italic: `Kyon`
                },
                `is the Hindi word for "why." After Sita and I started dating, I studied Hindi for several years, which allowed me to converse with her family in their native language.`
            ],
            dotKeys: {
                [BACKSTORY]: true,
                [REFERENCE]: true
            }
        }
    },
    lyricUnits: [
        [
            {
                time: 0,
                centre: {
                    italic: `(hums)`
                }
            },
            {
                isUnitMap: true,
                dotCard: {
                    anchor: IS_DOT_CARD,
                    annotation: {
                        description: `Sita and I had settled into an unhealthy power dynamic early on, then failed to grow as individuals. I can see now that she was desperately waiting for me to grow up, because she couldn't do it without me. So the humming here evokes her silent waiting, born of desperation.`,
                        dotKeys: {
                            [BACKSTORY]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 12,
                lyric: [
                    `So you fled to her`,
                    {
                        anchor: `nest on this stork,`,
                        annotation: {
                            description: `In European folklore, the stork delivers babies to expecting parents. Each time I broke up with Sita to date another woman, I always reverted to the same naive, wide-eyed persona. I longed to relive the giddiness of puppy love, like an infant experiencing the world for the first time.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [REFERENCE]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 17,
                lyric: [
                    `history shed, having`,
                    {
                        anchor: `never grown your horns.`,
                        annotation: {
                            description: `Of course, my desire to leave Sita was also driven by shame. Any kindness I showed her now could only be viewed as atonement for past crimes. My role in this relationship was to be forever penitent, whereas I could just start over with someone new, untainted by sin.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 22,
                lyric: [
                    `A`,
                    {
                        anchor: `present sent`,
                        annotation: {
                            wormhole: `present_sent`
                        }
                    },
                    `to her of a newborn…`
                ]
            },
            {
                isUnitMap: true,
                dotCard: {
                    anchor: IS_DOT_CARD,
                    annotation: {
                        description: [
                            `I tried to write this song from Sita's perspective. In retrospect, my portrayal is rather one-dimensional, and unfairly characterises her as a helpless woman. Truth be told, she was far more resilient than I've let on here. But I was self-absorbed in my guilt when I wrote this, and my primary purpose was to beat myself up over what my stupidity had cost me.`
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: VERSES
            }
        ],
        [
            {
                time: 26,
                lyric: [
                    `So baby, tell me then, when you`,
                    {
                        anchor: `take in her breasts,`,
                        annotation: {
                            description: `It scared me, far more than I let on, to gamble away the familiar warmth of Sita's love on some new and uncertain romantic venture. That fear would then manifest in a hormonal desire for nurture over pleasure, I suspect, because I was always struck by how motherly every woman's naked body initially seemed to me.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 31,
                lyric: `are you suckling to be fed?`
            },
            {
                time: 36,
                lyric: [
                    `Is it just her`,
                    {
                        anchor: `womb you bed?`,
                        annotation: {
                            description: `Of course, Sita was under no illusion that what I wanted was anything more than to sleep with other women, to compensate for the inadequacy I felt in being the less sexually experienced one in our relationship.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 40,
                lyric: `Well, have some more…`
            },
            {
                isUnitMap: true,
                dotCard: {
                    anchor: IS_DOT_CARD,
                    annotation: {
                        description: [
                            `Our relationship was like a ship swaying perilously in tumultuous waters, a notion captured by the compound meter alternating back and forth between unrelated chords separated by a`,
                            {
                                anchor: `tritone.`,
                                wiki: `Tritone`
                            },
                            `The meandering tuplets, which I created by splicing single notes played on a mandolin, represent our inability to find common ground, as one carries eight notes per beat, the other nine.`
                        ],
                        dotKeys: {
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 47,
                lyric: `And how you always burned, for the slight;`
            },
            {
                time: 50,
                lyric: [
                    {
                        anchor: `spurned at first,`,
                        annotation: {
                            description: `Given the seeming ease by which I could now attract other women, I grew increasingly indignant over Sita's initial rejection of me, along with the endless hoops I was made to jump through to finally win her over.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `you couldn't let it die!`
                ]
            },
            {
                time: 53,
                lyric: `You'd nurse your bruises: why, the nerve of me to lie`
            },
            {
                time: 56,
                lyric: `in reserve, while I had to learn to find`
            },
            {
                isUnitMap: true,
                dotCard: {
                    anchor: IS_DOT_CARD,
                    annotation: {
                        description: [
                            `Every time we got back together, Sita would reassert our status as a couple by insisting that I bring her along to see my friends, despite the humiliation of facing the very gang that had emboldened me to leave her. The circus`,
                            {
                                anchor: `calliope`,
                                wiki: `Calliope_(music)`
                            },
                            `heard here, which is actually a tape-saturated melodica track, thus captures the feeling of having to parade around like a sad clown once more.`
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: BRIDGE
            }
        ],
        [
            {
                time: 58,
                lyric: [
                    {
                        anchor: `all the points`,
                        annotation: {
                            description: `After Sita rejected me, we spent a year getting to know each other as friends, during which time I still tried to impress her without appearing to do so. One day, for example, I solved her friend's Rubik's Cube, a skill I had picked up during my first five-year plan. While her friend raved, I humbly shrugged, as Sita just sat there and smiled. I had become a puzzle for her to figure out.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `you had! Then you'd resent`
                ]
            },
            {
                time: 61,
                lyric: [
                    {
                        anchor: `plunders past`,
                        annotation: {
                            description: `The pain of initial rejection was aggravated by the later revelation of Sita's sexual past, and all the more so because it was precisely the painful lessons learnt from these past encounters that had made her wary of my earlier advances. Of course, I missed the irony in being the one who would surely end up providing the most painful lesson by far.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `that forced my defence…`
                ]
            },
            {
                time: 63,
                lyric: [
                    `But dear,`,
                    {
                        anchor: `let's make a pact:`,
                        annotation: {
                            description: `Sita knew it was only a matter of time before I wanted the mature, slow-burning love that she wanted. And so after each breakup, she would seek my assurance that I would consider rekindling what we once had, whenever that time should come.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `if you're single then,`
                ]
            },
            {
                time: 66,
                lyric: `I get you back? And…`
            },
            {
                isUnitMap: true,
                stanzaType: BRIDGE,
                subsequent: true
            }
        ],
        [
            {
                time: 68,
                lyric: [
                    {
                        anchor: `I'll be stronger—`,
                        annotation: {
                            description: `Sita was always promising to "get better." It was a weird trick I had unconsciously played on her, as if all the blame didn't lie squarely with me.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `not a bother, more modest, I promise—`
                ]
            },
            {
                time: 73,
                lyric: [
                    `to parent my`,
                    {
                        anchor: `knight-errant`,
                        annotation: {
                            description: [
                                `In medieval romance, a`,
                                {
                                    anchor: `knight-errant`,
                                    wiki: `Knight-errant`
                                },
                                `wanders in search of adventures, proving his chivalry in the name of courtly love.`
                            ]
                        }
                    },
                    `as the sole`,
                    {
                        anchor: `keeper of his sheep herd.`,
                        annotation: {
                            description: [
                                `A "keeper," in both the sense of being the one who tends to the herd, as well as being the only one to keep from`,
                                {
                                    emphasis: `amongst`
                                },
                                `the herd. Sita was now resigned to my infidelity, and only held out the hope that her permissiveness might earn her a privileged place amidst all the other women I desired.`
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
                time: 78,
                lyric: [
                    `And when sobered by the`,
                    {
                        anchor: `time-lapse`,
                        annotation: [
                            {
                                description: [
                                    `In`,
                                    {
                                        anchor: `time-lapse photography,`,
                                        wiki: `Time-lapse_photography`
                                    },
                                    `the frame rate at which images are captured is lower than upon playback, causing time to speed up.`
                                ]
                            },
                            {
                                description: `Sita anticipated that my years of infidelity would whiz by in a flash as the pursuit of other women grew repetitive, imprinting few standout memories.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        ]
                    },
                    `to`,
                    {
                        anchor: `spring forward on a fallback…`,
                        annotation: [
                            {
                                description: [
                                    `The passage of time is invoked by the classic mnemonic for`,
                                    {
                                        anchor: `daylight saving time,`,
                                        wiki: `Daylight_saving_time`
                                    },
                                    `"spring forward, fall back," which teaches us to set our clocks one hour forward in the spring, and backward in the fall.`
                                ],
                                dotKeys: {
                                    [PUN]: true
                                }
                            },
                            {
                                description: `Sita also hoped that the endless disappointments I was sure to face as an aging playboy would compel me to return to her, my fallback option, with relief rather than reluctance.`,
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
                stanzaType: PRECHORUS
            }
        ],
        [
            {
                time: 85,
                lyric: [
                    `My`,
                    {
                        // NOTE: I made "My" capitalised.
                        anchor: `ticklish piglet,`,
                        annotation: {
                            description: `Perversely, Sita and I were always at our best during the months immediately after getting back together. She got to bask in the knowledge of being the better woman, while I still enjoyed the afterglow of my latest romantic escapade.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `you'll bounce back to me, giggly, having fully gorged yourself.`
                ]
            },
            {
                time: 93,
                lyric: [
                    `Bursting belly told by`,
                    {
                        anchor: `extra holes`,
                        annotation: {
                            description: `More holes in one's belt might be needed to support the wider girth that comes from being overfed. As notches, they can also tally sexual conquests.`,
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `punched in your belt.`
                ]
            },
            {
                isUnitMap: true,
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 104,
                lyric: [
                    `A`,
                    {
                        anchor: `shank's dustless silhouette`,
                        annotation: [
                            {
                                description: `A shank is a prison inmate's makeshift blade, also called a shiv.`,
                                dotKeys: {
                                    [REFERENCE]: true
                                }
                            },
                            {
                                description: `During our on-and-off years, I would habitually return to Sita promising to mend my ways. Things would be peachy again for a while, after which I would run off once more with another woman. I was like a reformed convict who leaves his shank to collect dust on the windowsill, then relapses without warning, taking it with him.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        ]
                    },
                    `bares the sill's sheen,`
                ]
            },
            {
                time: 109,
                lyric: [
                    `your`,
                    {
                        anchor: `severed stinger`,
                        annotation: {
                            description: [
                                `At the time, I failed to appreciate what it meant for Sita to have given her virginity to me. She had to make things work, because a part of me was now permanently lodged inside of her, like the barbed stinger of a`,
                                {
                                    anchor: `honeybee.`,
                                    wiki: `Honey_bee`
                                }
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `left in me never lost its sting.`
                ]
            },
            {
                time: 116,
                lyric: [
                    `But other nights you'd`,
                    {
                        anchor: `lap my wound clean`,
                        annotation: {
                            description: `After ejaculating, I would go down on Sita until she reached orgasm. She once listed this as an example of my thoughtfulness when I asked her what she saw in me that was worth holding onto, because I couldn't think of anything myself.`,
                            dotKeys: {
                                [BACKSTORY]: true
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
                        description: `The meter switches to common time here, even as the underlying chords remain unchanged, to represent the normalisation of our dysfunctional relationship. The tuplet strands are also more in sync, as one plays two notes for every three played by the other.`,
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
                time: 121,
                lyric: `to leave me as before, with only instinct to adore.`
            },
            {
                time: 127,
                lyric: [
                    `Besides, a`,
                    {
                        anchor: `you-shaped pussing sore`,
                        annotation: {
                            description: `Or else, "U-shaped." Yet another comparison of vaginal penetration to an inflicted lesion. I think I was feeling both guilty and horny when I wrote these lyrics.`,
                            dotKeys: {
                                [PUN]: true,
                                [SONGWRITING]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 132,
                lyric: [
                    {
                        anchor: `bleeds just once,`,
                        annotation: {
                            description: `Much like a vagina only bleeds the first time when the hymen is ruptured, every subsequent breakup felt less like a stabbing and more like an irritant on an open wound.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [REFERENCE]: true
                            }
                        }
                    },
                    `then never more…`
                ]
            },
            {
                time: 138,
                lyric: [
                    `So are we agreed,`,
                    {
                        anchor: `honeybee?`,
                        annotation: {
                            description: `A honeybee will die after stinging someone, as its stinger is connected to vital organs. Similarly, having given my virginity to Sita in return, I realised too late that there was a vital part of me that could never be recovered apart from her as well.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true,
                                [REFERENCE]: true
                            }
                        }
                    },
                    `Come for me? At`,
                    {
                        anchor: `thirty-three?`,
                        annotation: {
                            description: `I hated the idea of getting older and joked that I would kill myself at thirty-three, the age at which Jesus was crucified, since clearly that is all the time one needs to change the world. So when I suggested to Sita that I would come back for her at thirty-three, in accordance with our little pact, the subtext was understood.`,
                            dotKeys: {
                                [BACKSTORY]: true,
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
                time: 150,
                centre: {
                    italic: `(hums)`
                }
            },
            {
                isUnitMap: true,
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 174,
                lyric: `You say you woke one crystal morning, to find all those thoughts had gone away:`
            },
            {
                time: 180,
                lyric: [
                    `your`,
                    {
                        anchor: `fear of death,`,
                        annotation: {
                            description: `The night terrors that I experienced as a child continued into adulthood. After we began sleeping together, Sita would soothe me whenever I woke up screaming from visions of my mortality. Or immortality, whichever the case may have been.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `your`,
                    {
                        anchor: `fear of never dying,`,
                        annotation: {
                            description: [
                                `Recognising my spiritual malaise, Sita would invite me to attend Hindu services with her, which I eagerly obliged. While Hinduism is no different from Buddhism in its end goal of transcendent release from the cycle of rebirth, which I found problematic as a child, I was attracted to its sprawling pantheon of deities and avatars. It just seemed like the more details there are, the more room you have to explore the divine. Anyway, I never self-identified as a Hindu during those years, but I definitely felt like one.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `and`,
                    {
                        anchor: `sadness for what it was.`,
                        annotation: {
                            description: `As friends, Sita and I got along well because we were both very sad people. But in hindsight, my sadness was mostly a product of circumstance, whether from bullying in my youth, or from loneliness as I got older. Sita, on the other hand, suffered from clinical depression. And as it dawned on me that I could be proactive in dealing with it, I grew impatient with her that she was incapable of doing the same.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 186,
                lyric: [
                    `You just knew`,
                    {
                        anchor: [
                            {
                                italic: `Bobtail`
                            },
                            `'s your priority,`
                        ],
                        properNoun: true,
                        annotation: {
                            description: [
                                `As I began to work resolutely on`,
                                {
                                    italic: `Bobtail,`
                                },
                                `my night terrors grew less frequent, and my misery subsided. Recognising this boon for what it was, I became ever more determined to subsume myself in my ambitions, which made me even more indifferent to Sita's needs.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `so for`,
                    {
                        italic: `Bobtail`
                    },
                    {
                        anchor: `I'll gladly wait.`,
                        annotation: {
                            description: `But Sita happily encouraged my artistic pretensions, believing them to reflect positively on her as well. Though she was largely uninterested in the local scene, she still enjoyed being seen as the one going home with me after a show.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 192,
                lyric: [
                    `And darling, don't you worry, these were only`,
                    {
                        anchor: `practise cuts…`,
                        annotation: {
                            description: `Even in anguish, Sita never lost her sardonic sense of humour. When I expressed concern about her cutting herself, she sweetly assured me that it was only for practise.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                isUnitMap: true,
                stanzaType: CODA
            }
        ],
        [
            {
                time: 197,
                centre: {
                    italic: `(peafowl)`
                }
            },
            {
                isUnitMap: true,
                dotCard: {
                    anchor: IS_DOT_CARD,
                    annotation: {
                        description: [
                            `The cry of a peafowl always sounded to me like they're pleading`,
                            {
                                italic: `"kyon?"`
                            },
                            `So I included a sample here, kindly provided to me by`,
                            {
                                anchor: 'Vijay Cavale.',
                                wiki: `http://www.indiabirds.com/`
                            }
                        ],
                        dotKeys: {
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: OUTRO
            }
        ],
    ],
    tasks: [
        {
            taskName: `tenses and categorisation`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `annotations`,
            workedHours: 30,
            neededHours: 30
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
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `music annotations`,
            workedHours: 3,
            neededHours: 3
        },
        {
            taskName: `review synopses and rough illustrations`,
            workedHours: 3,
            neededHours: 3
        }
    ]
}
