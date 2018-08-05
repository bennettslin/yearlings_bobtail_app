import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGWRITING
} from '../../constants/dots'

import {
    REFRAIN,
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    CODA,
    OUTRO,
    IS_DOT_CARD
} from '../../constants/lyrics'

import {
    DISHROOM_KEY,
    BENNETT_APARTMENT_BED_KEY,
    WAITING_ROOM_KEY,
    SITA_APARTMENT_BED_KEY,
    SITA_APARTMENT_GATE_1_KEY,
    SITA_APARTMENT_GATE_2_KEY,
    BENNETT_APARTMENT_GATE_KEY
} from '../../constants/cubesKeys'

import {
    TIME_ANYTIME,
    SEASON_AUTUMN,
    SEASON_WINTER
} from '../../constants/sky'

import {
    BENNETT,
    LIZ,
    NESTOR,
    BENNETT_REFLECTION,
    LIZ_REFLECTION
} from '../../constants/actorKeys'

module.exports = {
    /**
     * All of these scenes repeat twice.
     */
    scenes: [
        {
            unitIndex: 1,
            description: `Bennett is in a cafeteria dishroom, reading a novel while dishes gradually pile up. He eyes a lancing device on a tray.`,
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back, reading book, pulling tray from belt.'
                }
            },
            cubes: DISHROOM_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_AUTUMN
            }
        },
        {
            unitIndex: 4,
            description: `Same scene. Sita is asking for the lancing device. Bennett hands it to her, but simultaneously is asking her out on a date.`,
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, handing lancet pen, exuberant'
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, taken aback, politely friendly'
                    }
                }
            },
            cubes: DISHROOM_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_AUTUMN
            }
        },
        {
            unitIndex: 6,
            description: 'Grasshoppers scene 1',
            cubes: SITA_APARTMENT_GATE_1_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_AUTUMN
            }
        },
        {
            unitIndex: 7,
            description: 'Grasshoppers scene 5',
            cubes: SITA_APARTMENT_GATE_2_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_AUTUMN
            }
        },
        {
            unitIndex: 8,
            description: `Bennett is walking home from work, looking dejected. In his thought bubble, he is remembering the night that he walked home from the date with Sita. A jogger passes by.`,
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, walking, mopey'
                },
                [NESTOR]: {
                    jogger: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, jogging, spry'
                    }
                }
            },
            cubes: BENNETT_APARTMENT_GATE_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_WINTER
            }
        },
        {
            unitIndex: 10,
            description: `Same scene. As he begins to enter the front gate, he notices that Sita is standing several feet behind him.`,
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'back, punching code, surprised'
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, hesitantly greeting'
                    }
                }
            },
            cubes: BENNETT_APARTMENT_GATE_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_WINTER
            }
        },
        {
            unitIndex: 11,
            description: `Bennett's apartment is dark inside. Through a window, we see him opening the gate for Sita to pass through. She takes his arm.`,
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, opening gate, silent, attentive'
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'front, chatting, more comfortable'
                    }
                }
            },
            cubes: BENNETT_APARTMENT_BED_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_WINTER
            }
        },
        {
            unitIndex: 12,
            description: `Same scene. Bennett and Sita have now entered the apartment. Bennett has turned on a light switch. On his bed is a jar of Vaseline, along with sketches to which he has clearly been masturbating.`,
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'front, turning on light, smiling'
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, surprised, embarrassed smile'
                    }
                }
            },
            cubes: BENNETT_APARTMENT_BED_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_WINTER
            }
        },
        {
            unitIndex: 13,
            description: `In an emergency room, Bennett is sitting in an armchair with his arm around Sita's purse. In his thought bubbles, he imagines the scenes of his burgeoning friendship with Sita.`,
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, eyes closed, falling asleep'
                }
            },
            cubes: WAITING_ROOM_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_WINTER
            }
        },
        {
            unitIndex: 15,
            description: `Same scene. Sita has come to get her purse, and is waking Bennett up.`,
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'sitting, abruptly woken'
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, reaching for purse, cheeky'
                    }
                }
            },
            cubes: WAITING_ROOM_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_WINTER
            }
        },
        {
            unitIndex: 16,
            description: `Bennett and Sita are both naked in bed. Sita is lying down, while Bennett hovers over her, a look of uncertainty on his face.`,
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, standing beside bed, unsure'
                },
                [BENNETT_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection'
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'front, sitting on bed, irreverently reassuring'
                    }
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection'
                    }
                },
            },
            cubes: SITA_APARTMENT_BED_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_WINTER
            }
        },
        {
            unitIndex: 17,
            description: `Same scene. `,
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'side, about to stick it in'
                },
                [BENNETT_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection'
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'side, spread open'
                    }
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection'
                    }
                },
            },
            cubes: SITA_APARTMENT_BED_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_WINTER
            }
        },
        {
            unitIndex: 19,
            description: `Same scene. Bennett and Sita are together in bed, having just had sex, a look that is a mixture of serenity and uncertainty on both their faces.`,
            actors: {
                [BENNETT]: {
                    todo: true,
                    workedHours: 3,
                    description: 'lying down, warm, content, slightly worried'
                },
                [BENNETT_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection'
                    }
                },
                [LIZ]: {
                    sita: {
                        todo: true,
                        workedHours: 3,
                        description: 'lying down, warm, content, slightly worried'
                    }
                },
                [LIZ_REFLECTION]: {
                    reflection: {
                        todo: true,
                        workedHours: 3,
                        description: 'reflection'
                    }
                }
            },
            cubes: SITA_APARTMENT_BED_KEY,
            sky: {
                time: TIME_ANYTIME,
                season: SEASON_WINTER
            }
        }
    ],
    totalTime: 272,
    overview: `I worked my way through college as a dishwasher in a cafeteria, which is how I met Sita. After I scared her off, we didn't speak for several months, but she eventually reached out again, and we became friends. As I continued to suck at dating, and through my rough start in performing live shows, Sita lent her moral support, though a part of me always wanted more. At some point, she started to like me back. I'm still not sure how.`,
    title: {
        anchor: `Grasshoppers Lie Heavy`,
        annotation: [
            {
                description: [
                    `During this time, I was reading a lot of Philip K. Dick novels such as`,
                    {
                        italic: {
                            anchor: `The Man in the High Castle,`,
                            wiki: `The_Man_in_the_High_Castle`
                        }
                    },
                    `which tells of an alternate history in which the Axis powers had won World War II. Curiously, the characters in this book are engrossed in their own alternate history novel called`,
                    {
                        italic: `The Grasshopper Lies Heavy,`
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
    },
    lyricUnits: [
        [
            {
                time: 0,
                lyric: {
                    italic: [
                        `L.A. to the Bay,`,
                        {
                            anchor: `pompous autumn waits.`,
                            annotation: [
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
            },
            {
                isUnitMap: true,
                dotCard: {
                    anchor: IS_DOT_CARD,
                    annotation: {
                        description: [
                            `Just as`,
                            {
                                italic: `The Grasshopper Lies Heavy`
                            },
                            `offers its fictional readers a reality that's vastly different from the one they know, this song is a self-contained narrative that offers a vastly different ending from the album as a whole. Like Dick, I wanted to explore`,
                            {
                                anchor: `meta-referential`,
                                wiki: `Meta-reference`
                            },
                            `possibilities for a story within a story, and did so by dropping lyrical references to all the other songs on the album, which I call wormholes.`
                        ],
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
                        annotation: {
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
                        annotation: [
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
            },
            {
                isUnitMap: true,
                dotCard: {
                    anchor: IS_DOT_CARD,
                    annotation: {
                        description: [
                            `I wanted the music to sound sentimental with a few rough edges, so channelling`,
                            {
                                anchor: `Simon and Garfunkel`,
                                wiki: `Simon_%26_Garfunkel`
                            },
                            `throughout seemed like a good choice.`
                        ],
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
                time: 19,
                lyric: `For a cafeteria's wage,`
            },
            {
                time: 22,
                lyric: [
                    `death of`,
                    {
                        anchor: `dull dishroom days`,
                        annotation: {
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
                        annotation: {
                            description: `The students would bus their trays, which were then transported by conveyor belt to the dishroom. Every so often, someone would leave a personal item on the tray by accident. The crew always got a kick when that happened, as it broke up the monotony.`,
                            dotKeys: {
                                [NARRATIVE]: true
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
                time: 29,
                lyric: [
                    {
                        anchor: `Down the steps`,
                        annotation: [
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
                        annotation: {
                            description: [
                                `As a diabetic, Sita regularly checked her blood sugar level before meals by pricking her finger with a`,
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
                        annotation: {
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
                        annotation: [
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
                        annotation: [
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
                        annotation: [
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
            },
            {
                isUnitMap: true,
                stanzaType: PRECHORUS
            }
        ],
        [
            {
                time: 48,
                lyric: [
                    `First date`,
                    {
                        anchor: `nosebleed`,
                        annotation: [
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
                        annotation: [
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
            },
            {
                isUnitMap: true,
                stanzaType: PRECHORUS,
                subsequent: true
            }
        ],
        [
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
                        annotation: {
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
                        annotation: {
                            description: `Shortly after our third date, I called Sita to tell her I was in love with her. She admitted that she didn't feel the same way, yet wished to remain friends. We hung up with the understanding that I would continue to invite her out for casual excursions. But in truth, I was so dejected and embarrassed that I had no desire to see her again.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                isUnitMap: true,
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 77,
                left: [
                    `Alone his first gig,`,
                    {
                        anchor: `stagefright ignites.`,
                        annotation: {
                            description: `Shortly after Sita and I stopped talking, I began to play open mic nights. The first few times were a disaster, but I eventually learned to conquer my stagefright with just the right amount of alcohol.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    }
                ],
                right: `With no sister ship slain by his side,`
            },
            {
                time: 87,
                left: [
                    `But`,
                    {
                        anchor: `no convert's missed,`,
                        annotation: {
                            description: `In asking for the largest payments upfront, the mail-order cult correctly guessed that I would grow disillusioned sooner rather than later. Sita's abrupt departure from my life, after she had so profoundly made an impact, seemed like evidence that I was once again the sucker in a similarly perfected scam.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `once assured his tithe.`
                ],
                right: [
                    `and so off her list,`,
                    {
                        anchor: `sunken Tirpitz lies.`,
                        annotation: [
                            {
                                description: [
                                    `The Bismarck and the Tirpitz were`,
                                    {
                                        anchor: `sister battleships`,
                                        wiki: `Bismarck-class_battleship`
                                    },
                                    `of the German navy in World War II. The Axis, after all, were history's heroes in`,
                                    {
                                        italic: `The Man in the High Castle.`
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
            },
            {
                isUnitMap: true,
                stanzaType: REFRAIN
            }
        ],
        [
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
                        annotation: {
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
                        annotation: {
                            wormhole: `chimney_sweep`
                        }
                    },
                    {
                        anchor: `sooty dust.`,
                        annotation: {
                            wormhole: `suttee_dust`
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
                time: 106,
                lyric: [
                    {
                        anchor: `Phantom limbs`,
                        annotation: [
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
                        annotation: [
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
                        annotation: [
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
            },
            {
                isUnitMap: true,
                stanzaType: VERSES,
                subsequent: true
            }
        ],
        [
            {
                time: 115,
                lyric: [
                    `Your gate code punched, when a`,
                    {
                        anchor: `looming shadow nears,`,
                        annotation: {
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
                        annotation: {
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
                        annotation: {
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
            },
            {
                isUnitMap: true,
                stanzaType: PRECHORUS
            }
        ],
        [
            {
                time: 135,
                lyric: [
                    `She`,
                    {
                        anchor: `locks your arm.`,
                        annotation: {
                            description: `Shivering from the winter chill, Sita tucks her hand underneath my arm as I invite her into my apartment.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    {
                        anchor: `Key turned,`,
                        annotation: [
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
                        annotation: [
                            {
                                description: `And just like that, I am once again on guard, second-guessing everything I say and do.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            },
                            {
                                description: `It's as if I'm an escaped convict who has just been locked in handcuffs and sent back to the penitentiary, where a prison guard now directs me into a holding cell.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        ]
                    }
                ]
            },
            {
                isUnitMap: true,
                stanzaType: PRECHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 144,
                lyric: [
                    `In her`,
                    {
                        anchor: `gingerbread prison,`,
                        annotation: {
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
                        annotation: {
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
                        annotation: [
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
                        annotation: [
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
                        annotation: {
                            description: `Or else, "Shall I leave you here to feel up dick?" Sita lightens the awkwardness by taking a gentle jab at the bookish exterior that I've carefully crafted.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [PUN]: true
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
                        description: [
                            `The highlight of Nirvana's`,
                            {
                                italic: {
                                    anchor: `Nevermind`,
                                    wiki: `Nevermind`
                                }
                            },
                            `for me is when Kurt Cobain jumps up an octave for the third verse of "Lounge Act." My urge to recreate this effect was always at odds with my tendency to write melodies that span my whole vocal range. So when I realised that the chorus melody for this song stays within a single register, I transposed the song accordingly to make it work.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 164,
                lyric: [
                    `Thoughts sift in the`,
                    {
                        anchor: `waiting room:`,
                        annotation: [
                            {
                                description: `One night, Sita has a severe hypoglycemic episode. I drive her to the hospital and sit in the waiting room while she is being examined.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            },
                            {
                                description: `Traditionally, the groom's entrance into the "wedding room" begins the ceremony. He then stands and waits for the bride to close the procession.`,
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
                        annotation: [
                            {
                                description: `When we first met, what I stood to gain from Sita was obvious. Less so was what she gained from me, given my moody temperament and cynical outlook. But as our friendship grew, I came to learn that her cheery exterior masked a severe depression, which gave me an opening to win her over with simple, kind gestures.`,
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
            },
            {
                isUnitMap: true,
                stanzaType: BRIDGE
            }
        ],
        [
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
                        annotation: [
                            {
                                description: `As the minutes tick away, I am more than a little worried, having heard in passing that organ failure is one of the dangers of hypoglycemia.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            },
                            {
                                description: `A wedding procession is typically accompanied by music, the "melody" of which might be performed on a chapel "organ."`,
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
                time: 178,
                lyric: [
                    `in the`,
                    {
                        anchor: `ever-present scent`,
                        annotation: {
                            wormhole: 'present_sent'
                        }
                    },
                    `of her trail.`
                ]
            },
            {
                isUnitMap: true,
                stanzaType: BRIDGE,
                subsequent: true
            }
        ],
        [
            {
                time: 183,
                lyric: [
                    `Then you`,
                    {
                        anchor: `wake by a bell`,
                        annotation: {
                            wormhole: `belle`
                        }
                    },
                    {
                        anchor: `with a ring.`,
                        annotation: [
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
                        annotation: {
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
                        annotation: [
                            {
                                description: `Glancing up, I'm startled to find Sita flashing a "cheeky" smile as she hovers over me. Having quietly unclasped her purse from my grip, she returns to the emergency room, only to inadvertently flash some "cheek" from beneath her revealing hospital gown.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            },
                            {
                                description: `In a traditional wedding, the father of the bride lifts her "veil" to kiss her on the cheek.`,
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
                isUnitMap: true,
                stanzaType: BRIDGE,
                subsequent: true
            }
        ],
        [
            {
                time: 193,
                lyric: {
                    anchor: `She loves you…`,
                    annotation: {
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
                        annotation: [
                            {
                                description: `The night that we decide to have sex, I am suddenly overcome with a weary unease. As Sita lies naked under the covers, I stand forlornly by the bedside for what seems like several minutes.`,
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
                        annotation: {
                            // TODO: Not technically my quote.
                            description: `Pointing to the condom on my erection, Sita lightens the mood by feigning to agree with a past self-assessment of mine. I had once judged myself to be too upfront about my feelings, or as I had put it, to wear my "heart on my sleeve."`,
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
                        annotation: {
                            description: `I had spent so long constructing a facade behind which to tuck away my emotions, that I am now hesitant to compromise the safety of this position. I just don't want to be vulnerable again, and I have so little faith that my desires won't be used against me, were I to reveal them to Sita as I had once before.`,
                            dotKeys: {
                                [NARRATIVE]: true,
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
                        description: `The ascending chord progression here symbolises falling in love, and eventually, sexual climax. Simple enough.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CODA
            }
        ],
        [
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
                        annotation: [
                            {
                                description: [
                                    {
                                        anchor: `Grace Darling`,
                                        wiki: `Grace_Darling`
                                    },
                                    `was a lighthouse keeper's daughter who rescued the survivors of a shipwreck by paddling out to sea in a rowboat. Though this brave feat won her instant renown in the Victoria era, the consequent public exposure led to her death by tuberculosis at age 26.`
                                ]
                            },
                            {
                                description: [
                                    `But then I'm reminded that Sita is my "grace darling," having rescued me from a sea of loneliness.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true
                                }
                            },
                            {
                                wormhole: `grey_starling`
                            }
                        ]
                    },
                    `light`,
                    {
                        anchor: `fell an oar.`,
                        annotation: {
                            description: [
                                `Or "fell Lenore." Edgar Allan Poe's wife also died from tuberculosis, at age 24. Her prolonged illness likely inspired his poem`,
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
                        annotation: {
                            description: `Sita and I were both virgins, which ultimately made it easier to lower my defences, as it was a reminder that neither of us really knew what we were doing.`,
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
                stanzaType: CODA,
                subsequent: true
            }
        ],
        [
            {
                time: 229,
                lyric: [
                    `You`,
                    {
                        anchor: `stroke her temples.`,
                        annotation: {
                            description: `Referring to her literal temples. And possibly to her figurative ones as well.`,
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
            },
            {
                isUnitMap: true,
                stanzaType: CODA,
                subsequent: true
            }
        ],
        [
            {
                time: 245,
                centre: {
                    italic: `(Odin's theme)`
                }
            },
            {
                isUnitMap: true,
                dotCard: {
                    anchor: IS_DOT_CARD,
                    annotation: {
                        description: [
                            `The French expression`,
                            {
                                italic: {
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
                },
                stanzaType: OUTRO
            }
        ]
    ],
    tasks: [
        {
            taskName: `Look Back wormhole`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `tenses and categorisation`,
            workedHours: 6,
            neededHours: 6
        },
        {
            taskName: `annotations`,
            workedHours: 41,
            neededHours: 41
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
            neededHours: 3,
        }
    ]
}
