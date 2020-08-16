import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGWRITING
} from '../../../../app/constants/dots'

import {
    REFRAIN,
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    CODA,
    OUTRO,
    IS_UNIT_DOT
} from '../../../../app/constants/lyrics'

export default {
    title: 'Grasshoppers Lie Heavy',
    duration: 272,
    overview: `I worked my way through college as a dishwasher in a cafeteria, which is how I met Sita. After I scared her off, we didn't speak for several months, but she eventually reached out again, and we became friends. As I continued to suck at dating, and through my rough start in performing live shows, Sita lent her moral support, though a part of me always wanted more. At some point, she started to like me back. I'm still not sure how.`,
    isDoublespeaker: true,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                cards: [
                    {
                        description: [
                            `During this time, I was reading a lot of`,
                            {
                                anchor: `Philip K. Dick`,
                                wiki: `Philip_K._Dick`
                            },
                            `novels such as`,
                            {
                                isItalic: true,
                                lyric: {
                                    anchor: `The Man in the High Castle,`,
                                    wiki: `The_Man_in_the_High_Castle`
                                }
                            },
                            `which tells of an alternate history in which the Axis powers had won World War II. Curiously, the characters in this book are engrossed in their own alternate history novel called`,
                            {
                                isItalic: true,
                                lyric: `The Grasshopper Lies Heavy,`
                            },
                            `in which the Allies had won.`
                        ],
                        dotKeys: {
                            [BACKSTORY]: true
                        }
                    },
                    {
                        description: `I liked the image of two grasshoppers hidden in the tall grass, each sending hesitant signals to the other, with neither wishing to be the first to reveal itself.`,
                        dotKeys: {
                            [OBSERVATION]: true
                        }
                    }
                ]
            }
        },
        {
            unitMap: {
                formType: REFRAIN
            },
            mainVerses: [
                {
                    time: 0,
                    lyric: {
                        isItalic: true,
                        lyric: [
                            `L.A. to the Bay,`,
                            {
                                anchor: `pompous autumn waits.`,
                                todo: true,
                                cards: [
                                    {
                                        description: `In high school, I soldiered on with the same gutless reputation to which I had tied myself in middle school. It just didn't seem possible to remake myself into a whole new person while surrounded by all the same classmates. But in my head, I was busy crafting a future persona as an artist of superior ability and judgment, which was raring to go the minute I could hightail it out of Los Angeles.`,
                                        dotKeys: {
                                            [NARRATIVE]: true,
                                            [OBSERVATION]: true
                                        }
                                    },
                                    {
                                        wormhole: `pampas`
                                    }
                                ]
                            }
                        ]
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Just as`,
                        {
                            isItalic: true,
                            lyric: `The Grasshopper Lies Heavy`
                        },
                        `offers its fictional readers a reality that differs vastly from the one they know, this song is a self-contained narrative that offers a vastly different ending from the album as a whole. Like Dick, I wanted to explore the`,
                        {
                            anchor: `meta-referential`,
                            wiki: `Meta-reference`
                        },
                        `possibilities of a story within a story. And so this song contains subtle lyrical references to all the other songs on the album. I call these wormholes.`
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
                    time: 10,
                    lyric: `Uprooted, then en route,`
                },
                {
                    time: 12,
                    lyric: `eighteen threw off the brutes`
                },
                {
                    time: 14,
                    lyric: [
                        `and their`,
                        {
                            anchor: `molls perched on pedestals,`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Gun molls`,
                                        wiki: `Gun_moll`
                                    },
                                    `were the female companions of American gangsters in the early 1900s. In the same way that society viewed their exploits, I both desired and feared the girls who went out with the boys who bullied me. Their contempt was certainly harder to stomach.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 17,
                    lyric: [
                        `noses in`,
                        {
                            anchor: `penny dreadfuls.`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `In 19th-century England, a market emerged for cheap, sensational novellas, which the highbrow derided as`,
                                        {
                                            anchor: `penny dreadfuls.`,
                                            wiki: `Penny_dreadful`
                                        }
                                    ]
                                },
                                {
                                    description: `But I could even the score by showing the same disdain for the tacky books, films, and music that they consumed.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
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
                    description: [
                        {
                            anchor: `Simon & Garfunkel`,
                            wiki: `Simon_&_Garfunkel`
                        },
                        `always manage to sound sentimental without being sappy, so I thought their style would be a good fit here.`
                    ],
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
                    time: 19,
                    lyric: `For a cafeteria's wage,`
                },
                {
                    time: 22,
                    lyric: [
                        `death of`,
                        {
                            anchor: `dull dishroom days`,
                            todo: true,
                            card: {
                                description: `I got a job washing dishes at a dorm cafeteria. While the work was uneventful and offered no social interaction, that was actually its appeal. Between meals, I could sit and read while the dishes piled up, then clean them all at once. When it got really busy, I would switch to writing song lyrics in my head.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 24,
                    lyric: [
                        `stalled by`,
                        {
                            anchor: `keys left on dumbwaiter trays.`,
                            todo: true,
                            card: {
                                description: `The students would bus their trays, which were then transported by conveyor belt to the dishroom. Every so often, someone would leave a personal item on the tray by accident. The crew always got a kick when that happened, as it broke up the monotony.`,
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
                    time: 29,
                    lyric: [
                        {
                            anchor: `Down the steps`,
                            todo: true,
                            cards: [
                                {
                                    description: `The dishroom was on the floor below the dining area.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `down_the_steppes`
                                }
                            ]
                        },
                        `to`,
                        {
                            anchor: `fetch her lancet pen,`,
                            todo: true,
                            card: {
                                description: [
                                    `As a`,
                                    {
                                        anchor: `diabetic,`,
                                        wiki: `Diabetes`
                                    },
                                    `Sita regularly checked her blood sugar level before meals by pricking her finger with a`,
                                    {
                                        anchor: `lancing device.`,
                                        wiki: `Blood_lancet`
                                    },
                                    `That day, she forgot to take it with her after bussing her tray, and came down to the dishroom to retrieve it.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 34,
                    lyric: [
                        `and stunned, by`,
                        {
                            anchor: `reflex you asked.`,
                            todo: true,
                            card: {
                                description: `Blown away by her beauty, I handed Sita back her lancing device and immediately tried to make small talk. By then, I was mostly on autopilot when it came to hitting on random women in random situations.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 38,
                    lyric: [
                        `At first she hedged, but then`,
                        {
                            anchor: `laying qualms to rest:`,
                            todo: true,
                            cards: [
                                {
                                    description: `It was well known to the students that the cafeteria hired most of its workers through a rehabilitation program. For this reason, along with feeling unfairly ambushed, Sita was hesitant to say yes to a date. But as we chatted, my taste in literature and familiarity with underground culture ultimately won her over.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `laid_tourettes`
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 43,
                    lyric: [
                        {
                            anchor: `Schwa stickers`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Schwa`,
                                            wiki: `Schwa_(art)`
                                        },
                                        `is the underground artwork of William Barker. In the late 90s, his oblong alien heads popped up on print media everywhere. A friend who worked in a record store gave me a few stickers, though at the time I had no idea what they were.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    wormhole: `swastikas`
                                }
                            ]
                        },
                        `attached to your`,
                        {
                            anchor: `sci-fi paperback.`,
                            todo: true,
                            cards: [
                                {
                                    description: `At the time, I was obsessed with Philip K. Dick's stories of altered states and dystopian worlds, and never left home without one of his novels under my arm. Sita would soon hear all about it on our first date.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `safeway_paper_bag`
                                }
                            ]
                        }
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
                    time: 48,
                    lyric: [
                        `First date`,
                        {
                            anchor: `nosebleed`,
                            todo: true,
                            cards: [
                                {
                                    description: `After I picked Sita up, my nose started to bleed, which prompted me to recount past fights in middle school that ended with me suffering a bloody nose.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `know_is_bleat`
                                }
                            ]
                        },
                        `spurs tales of`,
                        {
                            anchor: `bare-knuckle defeats…`,
                            todo: true,
                            cards: [
                                {
                                    description: `Sita seemed intrigued by my rough-and-tumble past, despite my honest admission that these were literal beatdowns in which I never threw a single punch.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `barnacle`
                                }
                            ]
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
                    time: 58,
                    lyric: `Snowflakes in time come to see off the year.`
                },
                {
                    time: 63,
                    lyric: `You cried for one to sit; it kissed your ear.`
                },
                {
                    time: 67,
                    lyric: [
                        `Her`,
                        {
                            anchor: `show played in mimes,`,
                            todo: true,
                            card: {
                                description: `The world of dating was awash in hidden cues and gestures that, as far as I knew, no one could be expected to recognise or understand. So I desperately wanted everything to be plainly spelled out, and it baffled me that I was alone in feeling this way.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `but you pleaded to hear.`
                    ]
                },
                {
                    time: 72,
                    lyric: [
                        `Then just like the drift,`,
                        {
                            anchor: `she disappeared…`,
                            todo: true,
                            card: {
                                description: `Shortly after our third date, I called Sita to tell her I was in love with her. She admitted that she didn't feel the same way, yet wished to remain friends. We hung up with the understanding that I would continue to invite her out for casual excursions. But in truth, I was so dejected and embarrassed that I had no desire to see her again.`,
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
                formType: REFRAIN
            },
            mainVerses: [
                {
                    time: 77,
                    lyricLeft: [
                        `Alone his first gig,`,
                        {
                            anchor: `stagefright ignites.`,
                            todo: true,
                            card: {
                                description: `Shortly after Sita and I stopped talking, I began to play open mic nights. The first few times were a disaster, but I eventually learned to conquer my stagefright with just the right amount of alcohol.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ],
                    lyricRight: `With no sister ship slain by his side,`
                },
                {
                    time: 87,
                    lyricLeft: [
                        `But`,
                        {
                            anchor: `no convert's missed,`,
                            todo: true,
                            card: {
                                description: `In asking for the largest payments upfront, the mail-order cult correctly guessed that I would grow disillusioned sooner rather than later. Sita's abrupt departure from my life, after she had so profoundly made an impact, seemed like evidence that I was once again the sucker in a similarly perfected scam.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `once assured his tithe.`
                    ],
                    lyricRight: [
                        `and so off her list,`,
                        {
                            anchor: `sunken Tirpitz lies.`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `The Bismarck and the Tirpitz were`,
                                        {
                                            anchor: `sister battleships`,
                                            wiki: `Bismarck-class_battleship`
                                        },
                                        `of the German navy in World War II. The Axis, after all, were history's heroes in`,
                                        {
                                            isItalic: true,
                                            lyric: `The Man in the High Castle.`
                                        }
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    wormhole: `sunken_tirpitz`
                                }
                            ]
                        }
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `Since the lyrics in this song are a microcosm of the whole album, I threw in some doublespeaker rhyme here.`,
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
                    time: 96,
                    lyric: `Homeward, mop-sopped to your knees.`
                },
                {
                    time: 98,
                    lyric: [
                        `Tonight, just`,
                        {
                            anchor: `sour grapes, bitter sweets`,
                            todo: true,
                            card: {
                                description: `At the end of each shift, I would head to the dining area to scavenge enough leftovers for my next meal. Busy days were doubly cruel because after staying late and working myself to exhaustion, I would be left with only the dried-out scraps that no one else wanted.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 101,
                    lyric: `left to brave February's brutal gust;`
                },
                {
                    time: 104,
                    lyric: [
                        {
                            anchor: `chimneys weep`,
                            card: {
                                wormhole: `chimney_sweep`
                            }
                        },
                        {
                            anchor: `sooty dust.`,
                            card: {
                                wormhole: `suttee_dust`
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
                    time: 106,
                    lyric: [
                        {
                            anchor: `Phantom limbs`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `A`,
                                        {
                                            anchor: `phantom limb`,
                                            wiki: `Phantom_limb`
                                        },
                                        `is the sensation that a missing limb is still attached and responsive.`
                                    ]
                                },
                                {
                                    description: `After several weeks of giddy hope, the thought of spending my weekends alone again, with no other prospects on the horizon, feels like an amputation.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true
                                    }
                                }
                            ]
                        },
                        `trip left and right`
                    ]
                },
                {
                    time: 108,
                    lyric: [
                        `them`,
                        {
                            anchor: `tripped on runner's high.`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `A`,
                                        {
                                            anchor: `runner's high`,
                                            wiki: `Neurobiological_effects_of_physical_exercise`
                                        },
                                        `is a feeling of euphoria experienced through exercise.`
                                    ]
                                },
                                {
                                    description: `After a gruelling shift, I would need a few beers in me for the long slog back home, so it was hard to feel gracious towards anyone with enough energy to burn for an evening jog.`,
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 110,
                    lyric: [
                        `Below the`,
                        {
                            anchor: `window of your Walkman`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `Walkman`,
                                            wiki: `Walkman`
                                        },
                                        `was a portable cassette player.`
                                    ]
                                },
                                {
                                    description: `I would listen to mixtapes on the walk home, seemingly absorbed in my music as I wished pratfalls upon others, much as a child might duck beneath a window after pulling a prank.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true
                                    }
                                }
                            ]
                        },
                        `you hide.`
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
                    time: 115,
                    lyric: [
                        `Your gate code punched, when a`,
                        {
                            anchor: `looming shadow nears,`,
                            todo: true,
                            card: {
                                description: `I lived along the path between the campus and Sita's boarding house. By chance, Sita has been walking half a block behind me this evening, debating whether to flag me down. After I turn to open the gate and notice her presence, a few seconds awkwardly pass as neither of us is sure what to do next.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 120,
                    lyric: [
                        `as your`,
                        {
                            anchor: `heartbeats,`,
                            card: {
                                wormhole: `harpies`
                            }
                        },
                        `her steps, race to first.`
                    ]
                },
                {
                    time: 125,
                    lyric: `And she deftly thrusts through the shield of your sneer:`
                },
                {
                    time: 130,
                    lyric: [
                        `"Hey, you know`,
                        {
                            anchor: `you're my password?"`,
                            todo: true,
                            card: {
                                description: `Watching as I enter the passcode to unlock my front gate, Sita breaks the ice by mentioning that a topic we had once discussed is now part of a password that she recently created.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 132,
                    lyric: `I am? "Well, you're backward…"`
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
                    time: 135,
                    lyric: [
                        `She`,
                        {
                            anchor: `locks your arm.`,
                            todo: true,
                            card: {
                                description: `Shivering from the winter chill, Sita tucks her hand underneath my arm as I invite her into my apartment.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        {
                            anchor: `Key turned,`,
                            todo: true,
                            cards: [
                                {
                                    description: `As we catch up on recent happenings, I unlock the door to my apartment.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `key_turned`
                                }
                            ]
                        },
                        {
                            anchor: `returned to your guard…`,
                            cards: [
                                {
                                    description: `And just like that, I am once again on guard, second-guessing everything I say and do.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    description: [
                                        `It's like I'm an escaped convict who has just been locked in handcuffs and sent back to jail, where a jail guard now directs me into a holding cell.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
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
                    time: 144,
                    lyric: [
                        `In her`,
                        {
                            anchor: `gingerbread prison,`,
                            todo: true,
                            card: {
                                description: `But even if not totally fulfilling, the prison to which I'm returning is at least sweet to taste. It's also readily escapable, and ultimately of my own making.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `here now you submit.`
                    ]
                },
                {
                    time: 149,
                    lyric: [
                        `Though`,
                        {
                            anchor: `never full, you're fed;`,
                            todo: true,
                            card: {
                                description: `Like a tired fugitive relieved to come back to a warm bed and regular meals, I concede that platonic friendship is better than the cold, bleak alternative.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `so you`,
                        {
                            anchor: `hit the switch.`,
                            todo: true,
                            cards: [
                                {
                                    description: `As all these thoughts swirl in my head, I turn on the light switch in my apartment.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `hit_the_switch`
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 153,
                    lyric: [
                        `On your bed's rumpled linens, a`,
                        {
                            anchor: `lidless Vaseline sits.`,
                            todo: true,
                            cards: [
                                {
                                    description: `Sitting on my bed is an open jar of Vaseline, which I clearly used recently to masturbate.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `lidless_vaseline_sits`
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 158,
                    lyric: [
                        `"Shall I leave you," she says,`,
                        {
                            anchor: `"here to Philip Dick?"`,
                            card: {
                                description: `Or else, "Shall I leave you here to feel up dick?" Sita lightens the awkwardness by gently taking a jab at the bookish exterior I've carefully crafted.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                        `For me, the highlight of`,
                        {
                            anchor: `Nirvana's`,
                            wiki: `Nirvana_(band)`
                        },
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Nevermind`,
                                wiki: `Nevermind`
                            }
                        },
                        `is when`,
                        {
                            anchor: `Kurt Cobain`,
                            wiki: `Kurt_Cobain`
                        },
                        `kicks the last third of "Lounge Act" into high gear by singing the same melody an octave higher. I'd always wanted to recreate this effect but could never do so, because the melodies I write tend to span my whole vocal range. So when I realised the chorus melody for this song stays within a single register throughout, I made it work.`
                    ],
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: BRIDGE
            },
            mainVerses: [
                {
                    time: 164,
                    lyric: [
                        `Thoughts sift in the`,
                        {
                            anchor: `waiting room:`,
                            cards: [
                                {
                                    description: [
                                        `One night, Sita had a`,
                                        {
                                            anchor: `hypoglycemic`,
                                            wiki: `Hypoglycemia`
                                        },
                                        `episode. I drove her to the hospital and sat in the waiting room while she was being examined.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: `Traditionally, the groom's entrance into the "wedding" room begins the ceremony. He then stands and waits for the bride to close the procession.`,
                                    dotKeys: {
                                        [PUN]: true,
                                        [REFERENCE]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 166,
                    lyric: [
                        `Why does she play`,
                        {
                            anchor: `bright to your gloom`,
                            cards: [
                                {
                                    description: `When we first met, what I stood to gain from Sita was obvious. Less so was what she gained from me, given my moody temperament. But as our friendship grew, I came to see that her cheery outlook actually masked a lingering depression, which gave me an opening to win her over with simple, kind gestures.`,
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    description: `Or else, "bride to your groom."`,
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 169,
                    lyric: `past a year on a stalled friendship's sails?`
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `To faithfully represent in miniature the lyrics of the album as a whole, this song also couldn't have gone without an entire section of groan-inducing puns.`,
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: BRIDGE,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 174,
                    lyric: [
                        `On a malady your thoughts are stuck,`
                    ]
                },
                {
                    time: 176,
                    lyric: [
                        `and the`,
                        {
                            anchor: `organ on which it struck,`,
                            cards: [
                                {
                                    description: `As the minutes tick away, I become worried that Sita's diagnosis might be as severe as organ failure.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    description: `A wedding procession is typically accompanied by music, the "melody" of which might be performed on a chapel organ.`,
                                    dotKeys: {
                                        [PUN]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 178,
                    lyric: [
                        `in the`,
                        {
                            anchor: `ever-present scent`,
                            card: {
                                wormhole: 'present_sent'
                            }
                        },
                        `of her trail.`
                    ]
                }

            ]
        },
        {
            unitMap: {
                formType: BRIDGE,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 183,
                    lyric: [
                        `Then you`,
                        {
                            anchor: `wake by a bell`,
                            card: {
                                wormhole: `belle`
                            }
                        },
                        {
                            anchor: `with a ring.`,
                            cards: [
                                {
                                    description: `Having dozed off, I am roused by the ringing of a bell to indicate that a patient has been released from care and is returning to the waiting room.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    description: `The momentous occasion of a wedding may leave the groom in a daze, to be roused only by the exchange of vows and a "belle with a ring."`,
                                    dotKeys: {
                                        [PUN]: true,
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    wormhole: `withering`
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 185,
                    lyric: [
                        `In her`,
                        {
                            anchor: `white gown,`,
                            card: {
                                description: `White gowns are common attire in both wedding ceremonies and hospitals.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `crept up she beams;`
                    ]
                },
                {
                    time: 187,
                    lyric: [
                        `and you marvel, glimmer of her`,
                        {
                            anchor: `cheek unveiled.`,
                            cards: [
                                {
                                    description: `Glancing up, I'm startled to find Sita hovering over me with a cheeky smile. Having quietly unclasped her purse from my grip, she returns to the emergency room, but not before inadvertently flashing some "cheek" from beneath her revealing hospital gown.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    description: `In a traditional wedding, the father of the bride lifts her veil to kiss her on the cheek.`,
                                    dotKeys: {
                                        [PUN]: true,
                                        [REFERENCE]: true
                                    }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: CODA
            },
            mainVerses: [
                {
                    time: 193,
                    lyric: {
                        anchor: `She loves you…`,
                        todo: true,
                        card: {
                            description: `It took a long, long while for Sita and I to become fully comfortable around each other. During the first year or so of our friendship, we mainly just studied together. Then at some point, those study sessions progressed into long walks, followed by cuddling. It all happened so fast towards the end that I was still processing what exactly had triggered it.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    }
                },
                {
                    time: 196,
                    lyric: `…and now you're left with no defences.`
                },
                {
                    time: 201,
                    lyric: `Well, who'd have guessed this?`
                },
                {
                    time: 204,
                    lyric: [
                        `You`,
                        {
                            anchor: `stand unsure.`,
                            todo: true,
                            cards: [
                                {
                                    description: `The night that we decided to have sex, I was suddenly overcome with a weary unease that I couldn't explain. As Sita lay naked under the covers, I stood forlornly by the bedside for what seemed like several minutes.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `stand_onshore`
                                }
                            ]
                        },
                        `She lures with a tease,`
                    ]
                },
                {
                    time: 207,
                    lyric: `"Oh sweetie, you're right:`
                },
                {
                    time: 209,
                    lyric: [
                        `you wear your`,
                        {
                            anchor: `hard-on in a sleeve."`,
                            card: {
                                description: `Pointing to the condom on my erection, Sita lightens the mood by feigning to agree with a past self-assessment of mine that I wear my "heart on" my sleeve.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 212,
                    lyric: [
                        `So`,
                        {
                            anchor: `how's that compromise?`,
                            todo: true,
                            card: {
                                description: `I had spent so long constructing a facade behind which to tuck away my emotions, that I am now hesitant to compromise the safety of this position. I just don't want to be vulnerable again, and I have so little faith that my desires won't be used against me, were I to reveal them to Sita as I had once before.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                    description: `The ascending chord progression initially signifies a blossoming relationship. Towards the end, it symbolizes sexual climax.`,
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: CODA,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 216,
                    lyric: `And dude, you love her…`
                },
                {
                    time: 218,
                    lyric: `…when your paws were thrashed sparring with the tide,`
                },
                {
                    time: 221,
                    lyric: [
                        `from your`,
                        {
                            anchor: `Grace Darling's beacon`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Grace Darling`,
                                            wiki: `Grace_Darling`
                                        },
                                        `was a lighthouse keeper's daughter who rescued the survivors of a shipwreck by paddling out to sea in a rowboat. This brave feat won her renown in the Victoria era, but the consequent public exposure led to her early death by`,
                                        {
                                            anchor: `tuberculosis.`,
                                            wiki: `Tuberculosis`
                                        }
                                    ]
                                },
                                {
                                    description: [
                                        `I'm reminded that Sita is my "grace darling," having rescued me from a sea of loneliness.`
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true
                                    }
                                },
                                {
                                    wormhole: `gray_starling`
                                }
                            ]
                        },
                        `light`,
                        {
                            anchor: `fell an oar.`,
                            card: {
                                description: [
                                    `Or else, "fell Lenore."`,
                                    {
                                        anchor: `Edgar Allan Poe's`,
                                        wiki: `Edgar_Allan_Poe`
                                    },
                                    `wife also died from tuberculosis at a young age. Her prolonged illness likely inspired his poem`,
                                    {
                                        anchor: `"The Raven,"`,
                                        wiki: `The_Raven`
                                    },
                                    `in which the narrator laments the loss of his beloved Lenore.`
                                ],
                                dotKeys: {
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 225,
                    lyric: [
                        `Let`,
                        {
                            anchor: `pure lose to pure…`,
                            todo: true,
                            card: {
                                description: `Sita and I were both virgins, which ultimately made it easier to lower my defences, as it was a reminder that neither of us really knew what we were doing.`,
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
                formType: CODA,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 229,
                    lyric: [
                        `You`,
                        {
                            anchor: `stroke her temples.`,
                            card: {
                                description: [
                                    `Referring to her literal`,
                                    {
                                        anchor: `temples.`,
                                        wiki: `Temple_(anatomy)`
                                    },
                                    `But possibly her figurative ones as well.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            }
                        },
                        `She gushes as she guides,`
                    ]
                },
                {
                    time: 233,
                    lyric: `and pulls you up inside her thighs.`
                }
            ]
        },
        {
            unitMap: {
                formType: OUTRO
            },
            mainVerses: [
                {
                    time: 245,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Odin's theme)`
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `The French expression`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `la petite mort,`,
                                wiki: `La_petite_mort`
                            }
                        },
                        `which translates to "the little death," refers to a feeling of melancholic transcendence after orgasm. As such, even as the chords continue to rise, the lead guitar plays a falling riff, before everything cuts away to Odin's theme, a reminder of the house cat who died in my youth.`
                    ],
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        }
    ]
}
