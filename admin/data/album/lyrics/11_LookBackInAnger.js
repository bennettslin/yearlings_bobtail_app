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
    PRECHORUS,
    CHORUS,
    BRIDGE,
    INTRO,
    OUTRO,
    FORESHADOW_OF_WORMHOLE_PREFIX,
    IS_UNIT_DOT
} from '../../../../app/constants/lyrics'

export default {
    title: 'Look Back in Anger',
    duration: 175,
    overview: `With the Yearlings becoming a fixture in the local scene, I started to command more attention than I'd ever known, particularly from women. And yet, my misery didn't abate, but instead simmered into a hard-boiled resentment. I also began to regret my relationship with Sita, which now felt like a decision I'd been coerced to make, under deprived conditions from which I was now freed.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        {
                            anchor: `John Osborne's`,
                            wiki: `John_Osborne`
                        },
                        `play`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Look Back in Anger`,
                                wiki: `Look_Back_in_Anger`
                            }
                        },
                        `centers on a young working-class man in postwar England whose disgruntled rage manifests in abusive tirades hurled at his long-suffering wife. It hit unnervingly close to home when I read it.`
                    ],
                    dotKeys: {
                        [BACKSTORY]: true
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
                        isItalic: true,
                        lyric: `(intro)`
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `A fellow dishroom worker named Owen had a`,
                        {
                            anchor: `four-track cassette recorder,`,
                            wiki: `Portastudio`
                        },
                        `and some nights we would go back to his place to twiddle with it. Owen would tap out these intricate yet impromptu rhythms on plateware he swiped from the cafeteria. I did my best to conjure his spirit here, minus the impromptu part, of course.`
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
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 10,
                    lyric: [
                        `Scrambled past this hell, where`,
                        {
                            anchor: `flagboy last fell,`,
                            todo: true,
                            card: {
                                description: [
                                    `During the Civil War, a`,
                                    {
                                        anchor: `colorbearer`,
                                        wiki: `Standard-bearer`
                                    },
                                    `carried the flag of his respective side onto the battlefield. Charging headlong into a volley of musket fire while twirling a piece of cloth is an apt metaphor for my high school experience.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 13,
                    lyric: [
                        {
                            anchor: `dragging aglets held`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `An`,
                                        {
                                            anchor: `aglet`,
                                            wiki: `Aglet`
                                        },
                                        `is the plastic tip at the end of a shoelace. Since I never learned to tie my shoelaces properly, they were always coming undone. Anyone bent on seeing me trip and fall thus readily had the means to make it happen.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `shoelaces`,
                                        wormholePrefix: FORESHADOW_OF_WORMHOLE_PREFIX
                                    }
                                }
                            ]
                        },
                        `by the bastard's boot,`
                    ]
                },
                {
                    time: 16,
                    lyric: [
                        `as the`,
                        {
                            anchor: `Van Nuys belles`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `I went to high school in`,
                                        {
                                            anchor: `Van Nuys,`,
                                            wiki: `Van_Nuys`
                                        },
                                        `a neighborhood smack-dab in the middle of the San Fernando Valley.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    wormhole: `belle`
                                }
                            ]
                        },
                        {
                            anchor: `lunched soundless`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `In the`,
                                    {
                                        anchor: `First Battle of Bull Run,`,
                                        wiki: `First_Battle_of_Bull_Run`
                                    },
                                    `spectators picnicked on the hillside to witness what they assumed would be a quick victory. Similarly, my battles with bullies were fought and lost in full view of a lunchtime crowd.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `through the noon.`
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `So as not to wake his neighbors while recording late at night, Owen would sing in muffled tones and then double track his vocals to thicken them. I wanted to recreate this effect, so I took notes from`,
                        {
                            anchor: `Elliott Smith,`,
                            wiki: `Elliott_Smith`
                        },
                        `who did the same on his first few albums.`
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
                    time: 22,
                    lyric: [
                        `Now your`,
                        {
                            anchor: `sapling cut`,
                            todo: true,
                            card: {
                                description: `A sapling that survives its first winter will have earned its first tree ring, as plainly revealed beneath each cut it has endured along the way.`,
                                dotKeys: {
                                    [REFERENCE]: true
                                }
                            }
                        },
                        `says you've`,
                        {
                            anchor: `past ring one,`,
                            todo: true,
                            card: {
                                description: `A ring also symbolizes long-term commitment in a relationship. And of course, after years of constant struggle to win someone over, I am now in my first serious relationship.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 25,
                    lyric: [
                        `yet— if adding up— then`,
                        {
                            anchor: `for more you'd vie.`,
                            todo: true,
                            card: {
                                description: `But even if it was a struggle, I made it through, which means I can do it again. And why wouldn't I want to try? After all, each new relationship is like another tree ring, a testament to one's resilience and continued growth.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 28,
                    lyric: [
                        `From the`,
                        {
                            anchor: `Valley of death`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `Like the six hundred who rode into the valley of death in Alfred Tennyson's poem`,
                                    {
                                        anchor: `"The Charge of the Light Brigade,"`,
                                        wiki: `Charge_of_the_Light_Brigade`
                                    },
                                    `I had quietly accepted that mine was "not to reason why" but simply "to do and die" during my own wartime years in the Valley.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `you rode, so on`,
                        {
                            anchor: `spite you thrive.`,
                            todo: true,
                            card: {
                                description: `In turn, this casual view of hardship enabled me to justify the pain that I knew my ambitions would eventually bring upon Sita.`,
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
                    description: [
                        `When I asked Owen to recommend some great lyricists, he pointed me to`,
                        {
                            anchor: `Nas.`,
                            wiki: `Nas`
                        },
                        `I hadn't given serious thought to`,
                        {
                            anchor: `hip hop`,
                            wiki: `Hip_hop`
                        },
                        `at the time, believing it to be too far removed from my own method of songwriting to offer much wisdom. I've since corrected this oversight, but back when it was my lone point of reference for hip hop, Nas's debut album`,
                        {
                            anchor: `Illmatic`,
                            wiki: `Illmatic`
                        },
                        `offered great pointers on the flexibility of`,
                        {
                            anchor: `internal rhyme,`,
                            wiki: `Internal_rhyme`
                        },
                        `which I used in these verses.`
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
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 33,
                    lyric: [
                        {
                            anchor: `Feeble feeder fish`,
                            todo: true,
                            card: {
                                description: `The feeder fish sold in pet stores are raised to be fed as live prey. As such, the pecking order within their own tank is deceptive, since it is actually the least fit who will live longest. High school seemed to work the same way, as the artistic skills I had slowly cultivated through my pet projects, which left me with no time to defend myself within the social hierarchy, were now the thing keeping me from being eaten alive in the real world.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                    [REFERENCE]: true
                                }
                            }
                        },
                        `allowed to grow;`
                    ]
                },
                {
                    time: 36,
                    lyric: `these spluttered fits found fit for show.`
                },
                {
                    time: 39,
                    lyric: [
                        `You wished a`,
                        {
                            anchor: `cancer nibbled off,`,
                            todo: true,
                            card: {
                                description: `It was therapeutic enough to examine myself and write songs about my own disappointments and dysfunctions. It seemed crazy that on top of that, others would credit me with giving voice to theirs as well. But I happily took it and ran with it.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 42,
                    lyric: `and laid down on the public trough.`
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
                    time: 45,
                    lyric: [
                        `She braves the crowd`,
                        {
                            anchor: `filled first from sides.`,
                            todo: true,
                            cards: [
                                {
                                    description: `At small venues with minimal seating, the first audience members to arrive typically congregate alongside the walls.`,
                                    dotKeys: {
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    description: `A few songs into my band's set, I watch from onstage as an attractive latecomer and her friends make their way through an unusually packed room.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 48,
                    lyric: [
                        `She might complete your`,
                        {
                            anchor: `jigsawed life.`,
                            todo: true,
                            card: {
                                description: `You typically work on a jigsaw puzzle by first connecting the edge pieces, then building inwards. And as this latecomer squeezes her way to the center of the crowd, I wonder if she is the long-awaited final piece to the overwrought puzzle that is my life.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 51,
                    lyric: [
                        `With hair of`,
                        {
                            anchor: `maraschino red,`,
                            card: {
                                description: [
                                    `Having sworn to be alert and ready when the next Mara shows up in my life, I notice the latecomer's hair color matches "Mara's sheen of red," which is the brightness of`,
                                    {
                                        anchor: `maraschino cherries.`,
                                        wiki: `Maraschino_cherry`
                                    }
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
                    time: 54,
                    lyric: [
                        {
                            anchor: `"Great show,"`,
                            todo: true,
                            card: {
                                description: `The best time to hit on someone is always right after your set, since they've just spent the last half hour of their life making you the center of their universe. And so, as expected, I find the red-haired woman to be warm and flirtatious when we finally chat.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `she later said.`
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
                    time: 56,
                    lyric: `Well there are ways to make a treat of life,`
                },
                {
                    time: 63,
                    lyric: [
                        `and you were`,
                        {
                            anchor: `fine when you had none.`,
                            todo: true,
                            card: {
                                description: `Things were finally looking up, so it baffled me to be as angry as ever. I suspect that I felt indignant for my younger self, who had been kept in the dark for so long about how much better life could be.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 69,
                    lyric: `But knowing now what you'd missed out on, you find,`
                },
                {
                    time: 75,
                    lyric: `you look back in anger that it's done.`
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `I recorded drum cymbals here at an extremely low tape speed, which turned them into`,
                        {
                            anchor: `pitched percussion`,
                            wiki: `Pitched_percussion_instrument`
                        },
                        `upon normal playback.`
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
                    time: 81,
                    lyric: [
                        `When`,
                        {
                            anchor: `religious kids mocked,`,
                            todo: true,
                            card: {
                                description: `The kids who bullied me were typically religious, which then served to discredit their religions in my view.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `each hypocrite's taunts`
                    ]
                },
                {
                    time: 84,
                    lyric: `would just acquit God of further need;`
                },
                {
                    time: 87,
                    lyric: [
                        `reading`,
                        {
                            anchor: `His obit not a bang,`,
                            todo: true,
                            card: {
                                description: `But this appraisal was based on reason, not malice. After all, it made no sense for the one true God to entrust the dissemination of his message to the very tormentors of those he hoped to reach.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `just a murmuring.`
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
                    time: 91,
                    lyric: `Now each new concession sees this`
                },
                {
                    time: 94,
                    lyric: [
                        {
                            anchor: `peasant discontented`,
                            todo: true,
                            card: {
                                description: [
                                    `The better life got, the more unsatisfied I became. I was like the peasants during the`,
                                    {
                                        anchor: `French Revolution,`,
                                        wiki: `French_Revolution`
                                    },
                                    `who were so downtrodden that every attempt made by the ruling elite to appease them only backfired horribly. Not only did they grumble at such paltry improvements to their lives, but they were then emboldened to make further demands.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `all the more,`
                    ]
                },
                {
                    time: 97,
                    lyric: `with his ignorance lessened of his plight before…`
                }
            ]
        },
        {
            unitMap: {
                formType: PRECHORUS
            },
            mainVerses: [
                {
                    time: 103,
                    lyric: `Beyonders prevail, the letters preached,`
                },
                {
                    time: 106,
                    lyric: [
                        `and thus secure,`,
                        {
                            anchor: `must turn the cheek.`,
                            todo: true,
                            card: {
                                description: `The letters from RI Research instructed me not to confront the bullies. Instead, I was to turn the other cheek, as Jesus had done, and quietly take their abuse in stride, as my exalted place in the universe necessarily asked of me to always be the bigger person.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 109,
                    lyric: `You waved your pledge to this godly good,`
                },
                {
                    time: 112,
                    lyric: [
                        {
                            anchor: `only to crack,`,
                            todo: true,
                            card: {
                                description: `Yet if reason discredited the beliefs of my tormentors, then it also had to discredit mine. After all, in a world abounding with rival claims to the truth, who would stay loyal to a belief that promises zero community and only endless grief?`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        {
                            anchor: `sprawled where they stood…`,
                            todo: true,
                            card: {
                                description: `And while I could foresee only a lifetime of humiliating letdowns for myself, the bullies would continue to enjoy greater happiness and social standing. I had no belief left to counter the harsh reality that nature favors its bullies. I just had to accept it.`,
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
                formType: BRIDGE
            },
            mainVerses: [
                {
                    time: 115,
                    lyric: `Though, if you're right to want what's yours,`
                },
                {
                    time: 118,
                    lyric: [
                        `weren't they`,
                        {
                            anchor: `right to take what's theirs?`,
                            todo: true,
                            card: {
                                description: `As opportunities for social advancement opened up for me, I began to understand why the bullies grabbed onto those that had been handed to them, and I could even sympathise. After all, in a world that simply roots for the strong, it makes no sense to question whatever means you've been afforded to avoid being weak.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 121,
                    lyric: [
                        `So if you're weeping for`,
                        {
                            anchor: `poor squirrels,`,
                            card: {
                                description: [
                                    `In the final scene of `,
                                    {
                                        isItalic: true,
                                        lyric: `Look Back in Anger,`
                                    },
                                    `the main character pictures his wife as a squirrel and sighs, "Poor squirrels," acknowledging that his emotionally abusive tirades keep her in a submissive state.`
                                ],
                                dotKeys: {
                                    [REFERENCE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 124,
                    lyric: [
                        `also weep for`,
                        {
                            anchor: `poor, poor bears.`,
                            card: {
                                description: `His wife then sighs in response, "Poor, poor bears," recognizing that he, a bear in their mutual fantasy, is also a victim, complying helplessly within a power dynamic over which neither possesses control.`,
                                dotKeys: {
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
                formType: BRIDGE,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 127,
                    lyric: [
                        {
                            anchor: `Red and friends,`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: `The red-haired woman and her friends stick around as my bandmates and I load our gear into the van. During our chat between sets, I had left open the possibility that all of us might hang out after the show.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `lagging by the back door,`
                    ]
                },
                {
                    time: 130,
                    lyric: `lift you on angel stares.`
                },
                {
                    time: 133,
                    lyric: [
                        `Drunk, you'd`,
                        {
                            anchor: `claim you've never loved,`,
                            todo: true,
                            card: {
                                description: `My songs projected the image of an inexperienced kid forever unlucky in love. It's how I first learned to draw attention, and so I had refined it to perfection over the years. But as the gap widened between my past mishaps and present fortunes, I needed greater quantities of alcohol to carry on with the lie that my circumstances hadn't substantially changed.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 136,
                    lyric: [
                        `but it's too late to`,
                        {
                            anchor: `unscrew a Bud…`,
                            card: {
                                description: [
                                    `I relinquish my chance to get to know the red-haired woman. Not just because another`,
                                    {
                                        anchor: `Budweiser`,
                                        wiki: `Budweiser`
                                    },
                                    `would be needed to bring me to the required level of affability, and it's past`,
                                    {
                                        anchor: `last call.`,
                                        wiki: `Last_call_(bar_term)`
                                    },
                                    `It's also much too late for me to present myself as someone who isn't in a sexual relationship with his best friend. I can't just "unscrew a bud" at will.`
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
                    time: 139,
                    lyric: `Yes, you were wrong to make demands on life,`
                },
                {
                    time: 145,
                    lyric: [
                        `'cause when you`,
                        {
                            anchor: `beg it never comes.`,
                            todo: true,
                            card: {
                                description: [
                                    `There's no excuse for not looking out for yourself. I knew this now. So while I was justifiably angry`,
                                    {
                                        isEmphasis: true,
                                        lyric: `for`
                                    },
                                    `the younger me, there was also no one more worthy to be angry`,
                                    {
                                        isEmphasis: true,
                                        lyric: `at.`
                                    },
                                    `I could only blame myself for being late to the game. But this just made me angrier…`
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
                    time: 151,
                    lyric: `And we all find this out on our own time…`
                },
                {
                    time: 157,
                    lyric: `Look back in anger to have won.`
                }
            ]
        },
        {
            unitMap: {
                formType: OUTRO
            },
            mainVerses: [
                {
                    time: 161,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(outro)`
                    }
                }
            ]
        }
    ]
}
