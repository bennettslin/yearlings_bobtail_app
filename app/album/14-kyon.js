// Be more specific that this began an on again off again relationship
import { VERSES, PRECHORUS, CHORUS, BRIDGE, CODA, REFRAIN, INSTRUMENTAL, SONGWRITING, BACKSTORY, OBSERVATION, NARRATIVE, PUN, REFERENCE } from 'helpers/constants'

// TODO: Mention Sita's depression, and contrast it with mine.
module.exports = {
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
    scenes: [
        {
            verseIndex: 0,
            description: `Sita is sitting on the couch in her living room, petting a cat.`,
            characters: {
                sita: 1
            }
        },
        {
            verseIndex: 9,
            description: `Sita is imagining how she met Bennett in three thought bubbles. In the first, she is breaking up with her ex. In the second, in tears over the incident, she busses her tray, leaving her lancing device behind. In the third, Bennett is hitting on her in the cafeteria, while she looks uncertain.`,
            characters: {
                sita: 1,
                thoughtBubbles: 3
            }
        },
        {
            verseIndex: 17,
            description: `Sita is still thinking. In the first, she is talking to her friend. Bennett is clearly jealous, but Sita is holding him close. In the second, Bennett is talking to a a fan. Sita is clearly jealous and trying to pull him away, but he ignores her. Sita's friend has opened the door.`,
            characters: {
                sita: 1,
                sitaFriend: 1,
                thoughtBubbles: 2
            }
        },
        {
            verseIndex: 22,
            description: `Sita is talking to her friend. In his speech bubbles, he sees Bennett leaving her, and Sita heartbroken. In her speech bubbles, she sees Bennett coming back penitent, and then being very affectionate.`,
            characters: {
                sita: 1,
                sitaFriend: 1,
                thoughtBubbles: 4
            }
        },
        {
            verseIndex: 29,
            description: `Sita is explaining to her friend Bennett's new ambition to record Bobtail. In her speech bubble, she is affectionately hugging him as he records his instrument. In her thought bubble, she is closing the door on him, as he is recording his guitar, eyes closed.`,
            characters: {
                sita: 1,
                sitaFriend: 1,
                thoughtBubbles: 2
            }
        }
    ],
    tip: {
        description: 'placeholder tip'
    },
    totalTime: 225,
    overview: `The on-again, off-again years gave me enough distance from my misdeeds to see how emotionally abusive I had become. But even as I sifted through my guilt, I was baffled by why Sita so willingly endured my cruelty. I tried hard to understand her psyche, and eventually came to see how thoroughly she had tied her sense of worth to our relationship. I was fighting for myself. She was fighting for us.`,
    lyrics: [
        [
            {
                time: 0,
                centre: {
                    italic: `(refrain)`
                }
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
                    annotation: {
                        description: `Sita and I had settled into an unhealthy power dynamic early on, then failed to grow as individuals. I can see now that she was desperately waiting for me to grow up, because she couldn't do it without me. So the humming here evokes her silent waiting, born of desperation.`,
                        dotKeys: {
                            [BACKSTORY]: true,
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                sectionClass: REFRAIN
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
                                [OBSERVATION]: true,
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
                            portal: `present_sent`
                        }
                    },
                    `to her of a newborn…`
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
                    annotation: {
                        description: [
                            `I tried to write this song from Sita's perspective. In retrospect, my portrayal is rather one-dimensional, and unfairly characterises her as a helpless woman. Truth be told, she was far more resilient than I've let on here. But I was self-absorbed in my guilt when I wrote this, and my primary purpose was to beat myself up over what my stupidity had cost me.`
                        ],
                        dotKeys: {
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                sectionClass: VERSES
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
                            description: `It scared me, far more than I let on, to gamble away the familiar warmth of Sita's love on some new and uncertain romantic venture, and that fear seemed to manifest in a hormonal desire to be nurtured more than pleasured. I was always struck by how motherly every woman's naked body initially seemed to me.`,
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
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
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
                sectionClass: VERSES,
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
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
                    annotation: {
                        description: [
                            `Every time we got back together, Sita would reassert our status as a couple by insisting that I bring her along to see my friends, despite the humiliation of having to face the very gang that had emboldened me to leave her. And so the circus`,
                            {
                                anchor: `calliope`,
                                wiki: `Calliope_(music)`
                            },
                            `heard here, which I created from a tape-saturated melodica track, captures the feeling of parading around like a sad clown once more.`
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                sectionClass: BRIDGE
            }
        ],
        [
            {
                time: 58,
                lyric: [
                    {
                        anchor: `all the points`,
                        annotation: {
                            description: `After Sita rejected me, we spent a year getting to know each other as friends, during which time I still tried to impress her without appearing to do so. One day I solved her friend's Rubik's Cube, a skill I had picked up during my first five-year plan. While her friend raved, I humbly shrugged, as Sita just sat there and smiled. I had become a puzzle for her to figure out.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
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
                            description: `The pain of rejection was aggravated by the later revelation of Sita's sexual past, and all the more so because it was precisely the painful lessons learnt from these past encounters that had made her wary of my earlier advances. Of course, I missed the irony in being the one who would surely end up providing the most painful lesson by far.`,
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
                unitMap: true,
                sectionClass: BRIDGE,
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
                                `A "keeper," in the sense of both being the one who tends to the herd, as well as being the only one to keep from`,
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
                        annotation: {
                            description: [
                                `In`,
                                {
                                    anchor: `time-lapse photography,`,
                                    wiki: `Time-lapse_photography`
                                },
                                `the frame rate at which images are captured is lower than upon playback, causing time to speed up. Sita anticipated that my years of infidelity would whiz by in a flash, as the pursuit of other women grew repetitive, imprinting few standout memories.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `to`,
                    {
                        anchor: `spring forward on a fallback…`,
                        annotation: {
                            description: [
                                `Sita hoped that the endless disappointments I was sure to face as an aging playboy would compel me to return to her, my fallback option, with relief rather than reluctance. The passage of time is invoked by the classic mnemonic for`,
                                {
                                    anchor: `daylight saving time,`,
                                    wiki: `Daylight_saving_time`
                                },
                                `"spring forward, fall back," which teaches us to set our clocks one hour forward in the spring, and backward in the fall.`
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
                unitMap: true,
                sectionClass: PRECHORUS
            }
        ],
        [
            {
                time: 85,
                // TODO: annotation
                lyric: `my ticklish piglet, you'll bounce back to me, giggly, having fully gorged yourself.`
            },
            {
                time: 93,
                lyric: [
                    `Bursting belly told by`,
                    {
                        anchor: `extra holes`,
                        annotation: {
                            description: `More holes in one's belt might be needed to support the wider girth that comes from being overfed. As notches, they can also tally one's sexual conquests.`,
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `punched in your belt.`
                ]
            },
            {
                unitMap: true,
                sectionClass: CHORUS
            }
        ],
        [
            {
                time: 104,
                lyric: [
                    `A`,
                    {
                        anchor: `shank's dustless silhouette`,
                        annotation: {
                            description: `A shank is a prison inmate's makeshift blade, also called a shiv. During our on-and-off years, I would habitually return to Sita promising to mend my ways. Things would be peachy again for a few months, after which I would run off once more with another woman. I was like a reformed convict who leaves his shank to collect dust on the windowsill, then relapses without warning, taking it with him.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true,
                                [REFERENCE]: true
                            }
                        }
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
                                `The`,
                                {
                                    anchor: `honeybee`,
                                    wiki: `Honey_bee`
                                },
                                `has a barbed stinger that stays lodged in a person's skin. At the time, I failed to appreciate what it meant to Sita to have given her virginity to me. She had to make things work, because a part of me was now permanently lodged inside of her.`
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
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
                    annotation: {
                        description: `The meter switches to common time here, even as the underlying chords remain unchanged, to represent the normalisation of our dysfunctional relationship. The tuplet strands are also more in sync, as one plays two notes for every three played by the other.`,
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
                            description: `Much like a vagina only bleeds the first time when the hymen is ruptured, every subsequent breakup felt more like an irritant on an already open wound.`,
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
                            description: `A honeybee will die after stinging someone, as its stinger is connected to vital organs. Having given my virginity to Sita in return, I realised too late that there was something inside me that could never be recovered apart from her as well.`,
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
                            description: `I hated the idea of getting older and often joked that I would kill myself at thirty-three, the age at which Jesus was crucified, since clearly that was all the time one needed to change the world. So when I suggested to Sita that I would come back for her at thirty-three, in accordance with our little pact, the subtext was understood.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true,
                                [REFERENCE]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 150,
                centre: {
                    italic: `(refrain)`
                }
            },
            {
                unitMap: true,
                sectionClass: REFRAIN
            }
        ],
        [
            {
                // TODO: Peacocks sound like they're saying Kyon?
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
                            description: `As a child, I found the thought of living forever to be no less frightening than having to die. After we began sleeping together, Sita grew accustomed to my night terrors and would soothe me when I woke up screaming from visions of my mortality. Or immortality. I could never really tell which.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `your`,
                    {
                        anchor: `fear of never dying,`,
                        annotation: {
                            description: [
                                `Sympathising with my hunger for spiritual wisdom, Sita often invited me to attend Hindu services with her, which I eagerly obliged. On the question of an afterlife, I found Hinduism's notion of`,
                                {
                                    italic: {
                                        anchor: `moksha,`,
                                        wiki: `Moksha`
                                    }
                                },
                                `or transcendent release from the cycle of rebirth, to be a comforting answer.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `and sadness for what it was.`
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
                                `my night terrors grew less frequent, and my depression subsided. Recognising this great boon for what it was, I became ever more determined to subsume myself in my ambitions, which made me even more indifferent to Sita's needs.`
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
                            description: `But Sita happily encouraged my artistic pretensions, believing them to reflect positively on her as well. Though she was largely uninterested in the local scene, she still enjoyed being seen with me after the show.`,
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
                            description: `Even in anguish, Sita never lost her sardonic sense of humour. When I expressed concern after she began cutting herself, Sita sweetly assured me that it was only for practise.`,
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
                sectionClass: CODA
            }
        ],
        [
            {
                time: 197,
                centre: {
                    italic: `(outro)`
                }
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
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
                sectionClass: INSTRUMENTAL
            }
        ],
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
            taskName: `review synopses and rough illustrations`,
            workedHours: 0,
            neededHours: 3,
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
        }
    ]
}
