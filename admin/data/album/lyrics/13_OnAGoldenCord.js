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
    CHORUS,
    BRIDGE,
    BACKING,
    INTRO,
    OUTRO,
    IS_UNIT_DOT
} from '../../../../app/constants/lyrics'

export default {
    title: 'On a Golden Cord',
    duration: 201,
    overview: `After a long night out with friends, I might shuffle on to Sita's place, slip into bed with her, and quickly doze off. But one night, Sita was waiting to confront me, having discovered my plans to break up with her. In tears, she returned the gold bracelet I had given her at the start of our relationship, then kicked me out. With nowhere to go, I wandered the streets until sunrise. And so began the first of our many breakups…`,
    isDoublespeaker: true,
    lyricUnits: [
        {
            unitMap: {
                unitDot: {
                    anchor: IS_UNIT_DOT,
                    todo: true,
                    card: {
                        description: [
                            `I was trying to follow in the footsteps of other poetic ruminations on still-life objects, like John Keats's`,
                            {
                                anchor: `"Ode on a Grecian Urn."`,
                                wiki: `Ode_on_a_Grecian_Urn`
                            },
                            `I was pretentious like that.`
                        ],
                        dotKeys: {
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
                        description: `The song of the white-throated sparrow here harks back to my childhood, as the breakup causes me to regress in emotional age.`,
                        dotKeys: {
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: INTRO
            },
            mainVerses: [
                {
                    time: 0,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(white-throated sparrow)`
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
                            `This song evokes the country style of my childhood hero`,
                            {
                                anchor: `Johnny Horton.`,
                                wiki: `Johnny_Horton`
                            },
                            `His albums were the first ones I owned, as they were handed down to me by my mother who adored him in her teenybopper years. None of my friends had ever heard of him, until one day, I met another Taiwanese-American kid whose mother had the same obsession. So I guess Horton was big in Taiwan, though he probably never knew that, having died in a car accident at the peak of his fame.`
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 4,
                    lyricCentre: `On a golden cord,`
                },
                {
                    time: 7,
                    lyricCentre: `once worn, now shorn,`
                },
                {
                    time: 9,
                    lyricCentre: [
                        `safely kept with`,
                        {
                            anchor: `bread and pocket lint.`,
                            todo: true,
                            card: {
                                description: `After Sita returned the bracelet earlier tonight, I put it in the front pocket of my jacket, which is where I've stashed bread rolls from the cafeteria to munch on later. With my hands tucked in as well to keep warm, I keep stroking the bracelet over and over, just as I turn over the thoughts in my head.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 12,
                    lyricCentre: `Not of its own accord,`
                },
                {
                    time: 15,
                    lyricCentre: [
                        `but`,
                        {
                            anchor: `broken`,
                            todo: true,
                            card: {
                                description: `When I walked into Sita's living room to find her seated on the couch, the bracelet lay in a mangled heap on the coffee table. I wondered if she had damaged it on purpose, but it turns out that I had only ever seen it snugly wrapped around her wrist, where its dozens of tiny links were kept intricately locked in place.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `for what its promise meant.`
                    ]
                },
                {
                    time: 18,
                    lyricCentre: `And so she said, "Now it's yours again…`
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
                            `I tuned the lead guitar in a way that allowed each note to be plucked as a`,
                            {
                                anchor: `natural harmonic.`,
                                wiki: `Guitar_harmonics`
                            },
                            `I hadn't accounted for the need to move quickly enough from one to the next, however, so I still ended up splicing multiple takes.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: VERSES,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 26,
                    lyricCentre: `And how you look tonight!`
                },
                {
                    time: 28,
                    lyricCentre: [
                        `So`,
                        {
                            anchor: `polite, yet resigned,`,
                            todo: true,
                            card: {
                                description: `Sita had spent the day bottling up her emotions, braced for tonight's confrontation. Meanwhile, I had wandered in just minutes prior, ready to pass out. So even as she exploded in hysterics, I was still struggling to process the situation in my drunken state. As such, all my responses were calm but curt, which only added to her fluster.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 31,
                    lyricCentre: `with wounds dressed and feelings put away.`
                },
                {
                    time: 33,
                    lyricCentre: `Full of patient replies…`
                },
                {
                    time: 36,
                    lyricCentre: `But how can I trust a word you say?`
                },
                {
                    time: 40,
                    lyricCentre: `So spill away… and please, dear, you have no more secrets saved.`
                },
                {
                    time: 47,
                    lyricCentre: [
                        `I'm sorry, but I`,
                        {
                            anchor: `went through your mail`,
                            todo: true,
                            card: {
                                description: `Confused about why I had grown unusually distant, Sita finally caved in that day and snooped around on my computer, which I kept at her place because it was a desktop. She thus discovered that I was flirting online with a woman I had met at one of my shows, to whom I was giving assurances that I would soon be single again.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `today…"`
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
                        description: [
                            `To make sense of the breakup, I had to reconcile contradictory thoughts in my head, much like the citizens of George Orwell's`,
                            {
                                isItalic: true,
                                lyric: {
                                    anchor: `Nineteen Eighty-Four.`,
                                    wiki: `Nineteen_Eighty-Four`
                                }
                            },
                            `So I used doublespeaker rhyme— which I named partly for its`,
                            {
                                anchor: `Orwellian undertone—`,
                                wiki: `Doublethink`
                            },
                            `to depict the internal conflict between my sober self and my drunken alter ego.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 54,
                    lyricLeft: [
                        {
                            anchor: `Immerse the moulted form`,
                            todo: true,
                            card: {
                                description: `With our relationship now in irreversible decline, the "sober" voice in the doublespeaker set quietly resurrects the ghost of his drunken half, whom he had planned to sacrifice all along as the unwitting accomplice in a scheme to end his relationship.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `in holy foggy night,`
                    ],
                    lyricRight: [
                        `Returned a golden cord, this`,
                        {
                            anchor: `sole belonging signed.`,
                            todo: true,
                            card: {
                                description: `Plopped onto moonlit streets from whereabouts unknown, the "drunken" voice in the doublespeaker set can only recollect his past crimes. As such, he believes himself to be newly released from prison, having just now retrieved from property storage the gold bracelet in his hand.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 57,
                    lyricLeft: [
                        `emerged beside a`,
                        {
                            anchor: `paupers' grave`,
                            todo: true,
                            card: {
                                // NOTE: I changed "pauper's" to "paupers'."
                                description: [
                                    `I had spent weeks rehearsing the breakup, which I assumed could be scheduled at my convenience and follow a tight script. Instead, it proved to be unexpected and horribly messy. Similarly, the body of my drunken self was disposed of in careless haste, much like those who cannot afford a proper burial and are tossed into a`,
                                    {
                                        anchor: `paupers' grave.`,
                                        wiki: `Potter%27s_field`
                                    }
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `from dreams.`
                    ],
                    lyricRight: `Leave early, time's up, cross your date released.`
                },
                {
                    time: 61,
                    lyricLeft: `The wraith surveys the widow on his pyre;`,
                    lyricRight: `The jailer waves a bit, though uninspired,`
                },
                {
                    time: 64,
                    lyricLeft: [
                        `torched the`,
                        {
                            anchor: `bellyaches on suttee.`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Suttee`,
                                        wiki: `Sati_(practice)`
                                    },
                                    `is an outlawed Hindu custom in which a widow commits suicide by throwing herself on her husband's funeral pyre. Similarly, sober me knew he could be rid of Sita forever if he just killed off bit by bit the one she loved, until no trace remained of whom she once knew.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ],
                    lyricRight: [
                        `for the`,
                        {
                            anchor: `well-behaved on the wing.`,
                            todo: true,
                            card: {
                                description: `Feeling no malice, drunken me can only surmise that he served out his sentence without complaint, and was granted an early release for good behaviour.`,
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
                formType: CHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 65,
                    lyricLeft: `Had I grown dispirited in all this act,`,
                    lyricRight: [
                        `As I soak in spirits amidst`,
                        {
                            anchor: `wanted ads—`,
                            todo: true,
                            card: {
                                description: `As drunken me wanders the Oakland streets, he pauses to read flyers seeking bandmates that are posted on utility poles, much like a vigilante of the Old West might take interest in a "wanted" poster.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 68,
                    lyricLeft: `by disparate elements, like kindling gathered up?`,
                    lyricRight: `my desperate ailments tied in this shambler's dusk—`
                },
                {
                    time: 72,
                    lyricLeft: [
                        `Guilt pardons the`,
                        {
                            anchor: `spectre taunting twin streetlamps;`,
                            todo: true,
                            card: {
                                description: `Sober me observes as his drunken half lashes out in defiance at twin streetlamps, whose misty glow has revived the vision of Sita's fearful gaze moments before he committed his crime.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ],
                    lyricRight: [
                        `still hardened against her`,
                        {
                            anchor: `fawning, misty glance,`,
                            todo: true,
                            card: {
                                description: `Sensing that Sita gazes downward upon him from the night sky, drunken me still refuses to flinch, as remnants of his past bitterness rumble deep within.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 75,
                    lyricLeft: [
                        {
                            anchor: `hatchet man`,
                            todo: true,
                            cards: [
                                {
                                    description: `A hatchet man is an underling who carries out the most disagreeable tasks of an operation.`,
                                    dotKeys: {
                                        [REFERENCE]: true
                                    }
                                },
                                {
                                    description: `Recognising the trauma that must certainly linger, sober me forgives his drunken accomplice's lack of sympathy for the victim.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                }
                            ]
                        },
                        `who's burnt enough.`
                    ],
                    lyricRight: [
                        `past this`,
                        {
                            anchor: `avenue Möbius.`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `A`,
                                        {
                                            anchor: `Möbius strip`,
                                            wiki: `Möbius_strip`
                                        },
                                        `is a surface with only one side, and can be created by joining the ends of a half-twisted paper strip.`
                                    ]
                                },
                                {
                                    description: `As drunken me ambles down twisting sidewalks, mentally digging through the dense layers of half-truths that helped justify his act, it occurs to him that perhaps there really aren't two sides to this story. Or two sides to this mind…`,
                                    dotKeys: {
                                        [NARRATIVE]: true
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
                formType: CHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 76,
                    lyricLeft: `But a precious gift as a shedded chain,`,
                    lyricRight: `But the present slips past a debt unpaid,`
                },
                {
                    time: 79,
                    lyricLeft: `has lain to rust, one more cruel memento.`,
                    lyricRight: `that slays you once before you'll let it go.`
                },
                {
                    time: 83,
                    lyricLeft: [
                        `Then if`,
                        {
                            anchor: `life were real,`,
                            todo: true,
                            card: {
                                description: `Sita's friends weren't wrong when they described me as fake and pretentious. My emotions just didn't feel legitimate, and so I acted upon them the way an actor takes cues to ad lib an improv scene. At the time, I blamed the lingering effect of Robitussin.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `not just drunken play…`
                    ],
                    lyricRight: [
                        `And if`,
                        {
                            anchor: `night were peeled`,
                            todo: true,
                            card: {
                                description: [
                                    `When a friend asked what life after Robitussin felt like, I described each passing moment as a layer of`,
                                    {
                                        anchor: `Colorforms`,
                                        wiki: `Colorforms`
                                    },
                                    `being peeled away to reveal the next.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `off the front of day…`
                    ]
                },
                {
                    time: 86,
                    lyricCentre: `But what do I know?`
                }
            ]
        },
        {
            unitMap: {
                sideCard: [
                    {
                        lyric: {
                            isItalic: true,
                            lyric: {
                                anchor: `Odelay!`,
                                todo: true,
                                card: {
                                    description: `The yodelling here reflects the mild euphoria of dehydration that I begin to feel just before daybreak.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [SONGWRITING]: true
                                    }
                                }
                            }
                        }
                    }
                ],
                formType: BRIDGE,
                sideCardType: BACKING
            },
            mainVerses: [
                {
                    time: 87,
                    lyricCentre: [
                        `Just that those playful`,
                        {
                            anchor: `pups with their hateful fangs`,
                            todo: true,
                            card: {
                                description: `Baby predators instinctively understand their claws and fangs to be weapons, and will thus hold them back during rough play. And given how much more vicious the bullies could have been, I realised that they held back their blows in the same way, believing their cruelty to be in good fun.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 90,
                    lyricCentre: `knew the restraint of those born as hunters,`
                },
                {
                    time: 93,
                    lyricCentre: [
                        `while this supposed`,
                        {
                            anchor: `dove chafing in his cage,`,
                            todo: true,
                            card: {
                                description: `A stressed dove, on the other hand, will peck its cagemate to death, oblivious to the deadly nature of its beak. And similarly, seeing myself only as the perennial victim, I inflicted upon Sita far greater emotional trauma than I myself had ever received at the hands of the bullies.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 96,
                    lyricCentre: `just learned he's pecked to death his precious other.`
                }
            ]
        },
        {
            unitMap: {
                sideCard: [
                    {
                        lyric: {
                            isItalic: true,
                            lyric: {
                                anchor: `Mush! Mush!`,
                                properNoun: true,
                                todo: true,
                                card: {
                                    description: [
                                        `Marching onward through the brisk twilight, I think back to simpler days as a child, when I would sing Johnny Horton's`,
                                        {
                                            anchor: `"North to Alaska,"`,
                                            wiki: `North_to_Alaska_(song)`
                                        },
                                        `and my sister would back me up by heaving "Mush! Mush!"`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [NARRATIVE]: true
                                    }
                                }
                            }
                        }
                    }
                ],
                isBottomSideCard: true,
                formType: BRIDGE,
                sideCardType: BACKING,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 98,
                    lyricCentre: `But should it matter since you loved her once,`
                },
                {
                    time: 101,
                    lyricCentre: `when you really thought the world that simple?`
                },
                {
                    time: 104,
                    lyricCentre: `And who's to judge how much you cared because`
                },
                {
                    time: 107,
                    lyricCentre: [
                        `the`,
                        {
                            anchor: `gesture then`,
                            todo: true,
                            card: {
                                description: `I had bought Sita the gold bracelet from a jewelry store at the local mall. It was quite expensive relative to my hourly wage at the time, which made its underlying meaning seem all the more potent.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `was just a little more worth working for?…`
                    ]
                },
                {
                    time: 113,
                    lyricCentre: `Now the jester teeters towards…`
                }
            ]
        },
        {
            unitMap: {
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 116,
                    lyricCentre: [
                        `the taunting,`,
                        {
                            anchor: `streetswept dawn.`,
                            todo: true,
                            card: {
                                description: [
                                    `As daylight breaks, the mechanical`,
                                    {
                                        anchor: `street sweepers`,
                                        wiki: `Street_sweeper`
                                    },
                                    `come out in full force, beeping and purring as they go.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 118,
                    lyricCentre: `Thoughts spawned then dropped,`
                },
                {
                    time: 121,
                    lyricCentre: [
                        `of gathering up the`,
                        {
                            anchor: `suttee dust.`,
                            todo: true,
                            cards: [
                                {
                                    description: `I imagine Sita by now to be fully immolated on the burnt rubble of our ruined relationship.`,
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `suttee_dust`
                                }
                            ]
                        }
                    ]
                },
                {
                    time: 123,
                    lyricCentre: `Some things just come to loss:`
                },
                {
                    time: 126,
                    lyricCentre: `this bracelet, its lustre; me, my lust.`
                },
                {
                    time: 130,
                    lyricCentre: `Or was I once, something not what I've become?`
                },
                {
                    time: 137,
                    lyricCentre: [
                        `Have I just`,
                        {
                            anchor: `killed the thing I love?`,
                            todo: true,
                            card: {
                                description: [
                                    `While in prison for homosexuality,`,
                                    {
                                        anchor: `Oscar Wilde`,
                                        wiki: `Oscar_Wilde`
                                    },
                                    `witnessed the execution of a man convicted of murdering his wife. Sympathising with the man's plight, Wilde wrote his poem`,
                                    {
                                        anchor: `"The Ballad of Reading Gaol,"`,
                                        wiki: `The_Ballad_of_Reading_Gaol`
                                    },
                                    `which finds a common thread tying the man's crime to his own— and to all of humanity's— with its refrain, "For each man kills the thing he loves."`
                                ]
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
                    time: 144,
                    lyricLeft: `Of fateful thoughts hung on a gilded clasp,`,
                    lyricRight: `Once navels locked upon the wilted grass,`
                },
                {
                    time: 147,
                    lyricLeft: [
                        `which this`,
                        {
                            anchor: {
                                isItalic: true,
                                lyric: `Übermensch`
                            },
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `German philosopher`,
                                    {
                                        anchor: `Friedrich Nietzsche`,
                                        wiki: `Friedrich_Nietzsche`
                                    },
                                    `spoke of the`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Übermensch,`,
                                            wiki: `Übermensch`
                                        }
                                    },
                                    `or "overhuman", as an ideal of perfection towards which each of us may strive, which I understood to be a precondition for creating great works. But since the underlying motive for bettering myself had always been a desire to attract women, my lifelong ambition to be a great artist meant that I would always have a cheating heart.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `reavowed he'd come to snip.`
                    ],
                    lyricRight: [
                        {
                            anchor: `digging through her innie`,
                            todo: true,
                            card: {
                                description: `Some babies have belly buttons that go in, others have ones that stick out. During sex, Sita and I would engage in baby talk and refer to our respective parts as her "innie" and my "outie."`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [REFERENCE]: true
                                }
                            }
                        },
                        `the outie snug-to-fit.`
                    ]
                },
                {
                    time: 150,
                    lyricLeft: `And a smarting head throbs once his brain's warring halves,`,
                    lyricRight: [
                        `Then the`,
                        {
                            anchor: `guardian knot`,
                            todo: true,
                            cards: [
                                {
                                    description: `While the umbilical cord passes sustenance to the fetus, outside the mother's womb it shrivels to a navel. So Sita became my guardian, and I hers, as we sustained each other through locked navels.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [REFERENCE]: true
                                    }
                                },
                                {
                                    description: [
                                        `In antiquity, the`,
                                        {
                                            anchor: `"Gordian Knot"`,
                                            wiki: `Gordian_Knot`
                                        },
                                        `was a rope so tightly entangled that whosoever could unravel it would rule all of Asia.`,
                                        {
                                            anchor: `Alexander the Great`,
                                            wiki: `Alexander_the_Great`
                                        },
                                        `simply cut it in half with his sword. Like Alexander, I severed my own guardian knot, in a bid for artistic greatness.`
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true
                                    }
                                }
                            ]
                        },
                        `of this frayed cord detached,`
                    ]
                },
                {
                    time: 154,
                    lyricLeft: [
                        `each`,
                        {
                            anchor: `attack with the proper fist.`,
                            todo: true,
                            card: {
                                description: `The right hemisphere of the brain controls the left side of the body, and the left hemisphere, the right. So when I start punching myself in the head, in frustration over conflicting desires, it's as if each hemisphere is attacking the other using the one fist under its command.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [REFERENCE]: true
                                }
                            }
                        }
                    ],
                    lyricRight: [
                        {
                            anchor: `leaked the bandage`,
                            todo: true,
                            card: {
                                description: `With our emotional bond now severed, Sita bleeds both metaphorically and literally, as she has begun to experiment with cutting to ease her depression.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `upon her wrist.`
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: CHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 155,
                    lyricLeft: `A sober plea finds the present you,`,
                    lyricRight: `The former me might have left a clue`
                },
                {
                    time: 158,
                    lyricLeft: [
                        `my`,
                        {
                            anchor: `alias drunk, in panic`,
                            todo: true,
                            card: {
                                description: `Once drunk, I always stay drunk until I crash. As such, while sober me is adept at morphing into his drunken half, the reverse is not true. So as I get progressively more sober, panicked doubt creeps up beside the brashness that usually governs my drunken thought. I question if dating woman after woman will really fulfill me, and whether my newfound ability to attract them isn't a fluke.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `and starved for leads.`
                    ],
                    lyricRight: [
                        `by`,
                        {
                            anchor: `trail of crumbs,`,
                            todo: true,
                            card: {
                                description: `Suddenly fearing the emotional upheaval ahead, I wonder aloud whether it's too late to walk back the damage I've done. But even if I wanted to, I couldn't find my way back. All night I've been nibbling on the bread in my pocket rather than pinching off crumbs for a trail, trading long-term security to satisfy my short-term hunger.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `which vanished as bartered feed.`
                    ]
                },
                {
                    time: 161,
                    lyricLeft: `And will she label lies oaths we vowed we could,`,
                    lyricRight: `Until we strangle cries knowing how we stood,`
                },
                {
                    time: 164,
                    lyricLeft: [
                        `with`,
                        {
                            anchor: `Garry's sole witness`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: `All my promises to Sita have proven to be lies, but of course I didn't intend them to be. Circumstances just forced my hand. Still, while I strongly wish to argue my case, I realise that the breakup would be done with sooner if I just accept my role as the villain. And so the sober me, called up to testify for his drunken half, stays silent.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `relieved?`
                    ],
                    lyricRight: `when buried whole with the deceased.`
                }
            ]
        },
        {
            unitMap: {
                formType: CHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 166,
                    lyricLeft: `So a plan devised divides a slave once wed;`,
                    lyricRight: [
                        `Though, the`,
                        {
                            anchor: `master mind`,
                            todo: true,
                            card: {
                                description: `In college, I learned that being drunk made it easy to single-mindedly perform unpleasant tasks such as writing papers, and humored myself by comparing my drunken half to a slave taking orders from his master, my sober half. I am now pursuing this very same strategy to break up with Sita.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `reminds us, straight ahead`
                    ]
                },
                {
                    time: 169,
                    lyricLeft: [
                        `a bid for greatness' sake, he's sold on as`,
                        {
                            anchor: `holy war.`,
                            todo: true,
                            card: {
                                description: [
                                    `Most of the`,
                                    {
                                        anchor: `9/11 hijackers`,
                                        wiki: `September_11_attacks`
                                    },
                                    `were unaware that it was a suicide mission, having prepared instead to make public statements on their religious motivations. Similarly, in orchestrating my plot to be rid of Sita, I had sold my drunken half on the artistic benefits of breaking up, while neglecting to mention the huge emotional sacrifice it would entail.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true
                                }
                            }
                        }
                    ],
                    lyricRight: `a bigger plate awaiting nulls one half full before.`
                },
                {
                    time: 172,
                    lyricLeft: `When longed by nothing you then fight the best,`,
                    lyricRight: `And fond sighs of reunion I must rest;`
                },
                {
                    time: 176,
                    lyricLeft: [
                        `for`,
                        {
                            anchor: `kohl-eyed`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Kohl`,
                                        wiki: `Kohl_(cosmetics)`
                                    },
                                    `is a Middle Eastern cosmetic that has been used since antiquity to darken the eyelids.`
                                ]
                            }
                        },
                        {
                            anchor: `houris`,
                            todo: true,
                            card: {
                                description: [
                                    `In the Quran, the`,
                                    {
                                        anchor: `houris`,
                                        wiki: `Houri`
                                    },
                                    `are maidens who await the faithful in paradise. This concept gained notoriety in the West when it was reported that suicide bombers were being lured with the promise of 72 virgins in heaven. But given my quest to date more women, at great cost to myself and greater suffering to others, perhaps all that distinguished me from these disaffected young men was my nation of birth.`
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `as reward.`
                    ],
                    lyricRight: [
                        {
                            anchor: `forego like jewelry`,
                            todo: true,
                            card: {
                                description: `As these things go, Sita and I had a turbulent on-again, off-again relationship for a while longer. During one stretch when things were looking rosier than ever, she asked to have the bracelet back to wear again, which I happily obliged. Somehow I had dented it in my pocket that night, however, creating a permanent reminder that certain things can never be undone, only amended.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `that she wore.`
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: OUTRO
            },
            mainVerses: [
                {
                    time: 177,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(chorale)`
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
                        description: `What surprised me most upon the album's release was that no one who reviewed it was willing to venture an opinion on doublespeaker rhyme. The consensus seemed to be that all new inventions will prove their mettle within the existing paradigm of live performance. But it's not just that doublespeaker rhyme flailed under this constraint— by necessity, openness to invention means allowing it to operate within its own paradigm. And so I came to see that indie rock, despite its reputation, is really a conservative movement at heart.`,
                        dotKeys: {
                            [AFTERWORD]: true
                        }
                    }
                }
            }
        }
    ]
}