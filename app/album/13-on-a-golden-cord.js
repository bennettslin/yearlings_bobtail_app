import { BOTTOM_ONLY_SIDE_STANZA } from 'helpers/constants'

module.exports = {
    title: `On a Golden Cord`,
    overviews: {
        narrative: `After a long night out with friends, I might shuffle on to Sita's place, slip into bed with her, and quickly doze off. But one night, Sita was waiting to confront me, having discovered my plans to break up with her. In tears, she returned the gold bracelet I had given her at the start of our relationship, then kicked me out. With nowhere to go, I wandered the streets until sunrise.`,
        // TODO: Mention that while I was always yielding to Garryowen, it was unusual for Garryowen to yield to me.
        music: [
            `To make sense of the breakup, I had to reconcile contradictory thoughts in my head, much like the citizens of George Orwell's`,
            {
                italic: `Nineteen Eighty-Four.`
            },
            `So I used doublespeaker rhyme— which I named partly for its Orwellian undertone— to depict the internal conflict between my sober self and my drunken alter ego. Since the breakup allowed me to regress in emotional age, I evoked the musical style of my childhood hero Johnny Horton, a country star who sang about the Klondike Gold Rush.`
        ]
    },
    lyrics: [
        [
            {
                // TODO: Mention white throated sparrow.
                time: 5,
                centreLyric: [
                    'On a',
                    {
                        anchor: `golden cord,`,
                        annotation: {
                            description: `Early in our relationship, I had bought Sita a gold bracelet from a jewelry store at our local mall. It was quite expensive relative to my wage at the time.`
                        }
                    }
                ]
            },
            {
                time: 7,
                centreLyric: `once worn, now shorn,`
            },
            {
                time: 9,
                centreLyric: [
                    `safely kept with`,
                    {
                        anchor: `bread and pocket lint.`,
                        annotation: {
                            description: `After Sita returned the bracelet, I put it in the front pocket of my jacket, which is where I often stashed bread rolls from the cafeteria to munch on later. With my hands tucked in as well to keep warm, I stroked the bracelet over and over that night, just as I turned over the thoughts in my head.`
                        }
                    }
                ]
            },
            {
                time: 12,
                centreLyric: `Not of its own accord,`
            },
            {
                time: 15,
                centreLyric: [
                    `but`,
                    {
                        anchor: `broken`,
                        annotation: {
                            description: `When I walked into the living room to find Sita seated on the couch, the bracelet lay in a mangled heap on the coffee table. I wondered if she had damaged it on purpose, but it turns out that I had only ever seen it snugly wrapped around her wrist, where its dozens of tiny links were kept intricately locked in place.`
                        }
                    },
                    `for what its promise meant.`,
                ]
            },
            {
                time: 18,
                centreLyric: `And so she said, "Now it's yours again…`
            }
        ],
        [
            {
                time: 26,
                centreLyric: `And how you look tonight!`
            },
            {
                time: 28,
                centreLyric: [
                    `So`,
                    {
                        anchor: `polite, yet resigned,`,
                        annotation: {
                            description: `Sita had spent the day bottling up her emotions, braced for that night's confrontation. Meanwhile, I had wandered in just minutes prior, ready to pass out. So while she was now exploding in hysterics, I was still struggling to process the situation in my drunken state. As such, all my responses were calm but curt, which only added to her fluster.`
                        }
                    }
                ]
            },
            {
                time: 31,
                centreLyric: `with wounds dressed and feelings put away.`
            },
            {
                time: 33,
                centreLyric: `Full of patient replies…`
            },
            {
                time: 36,
                centreLyric: `But how can I trust a word you say?`
            },
            {
                time: 40,
                centreLyric: `So spill away… and please, dear, you have no more secrets saved.`
            },
            {
                time: 47,
                centreLyric: [
                    `I'm sorry, but I`,
                        {
                            anchor: `went through your mail`,
                            annotation: {
                                description: `Confused about why I had grown unusually distant, Sita finally caved in that day and decided to snoop around on my computer, which I kept at her place because it was a desktop. She thus discovered that I was flirting online with a woman I had met at one of my shows, to whom I was giving assurances that I would soon be single again.`
                            }
                        },
                        `today…"`
                ]
            }
        ],
        [
            {
                time: 54,
                leftLyric: [
                    {
                        anchor: `Immerse the moulted form`,
                        annotation: {
                            description: `With the breakup now irreversible, the "sober" voice in the doublespeaker set quietly resurrects the ghost of his drunken half, whom he had planned to sacrifice all along as the unwitting accomplice in a plot to end his relationship.`
                        }
                    },
                    `in holy foggy night,`
                ],
                rightLyric: [
                    `Returned a golden cord, this`,
                    {
                        anchor: `sole belonging signed.`,
                        annotation: {
                            description: `Plopped onto moonlit streets from whereabouts unknown, the "drunken" voice in the doublespeaker set can only recollect his past crimes. As such, he believes himself to be newly released from prison, having just now retrieved from property storage the gold bracelet in his hand.`
                        }
                    }
                ]
            },
            {
                time: 57,
                leftLyric: [
                    `emerged beside a`,
                    {
                        anchor: `pauper's grave`,
                        annotation: {
                            description: `I had spent weeks rehearsing the breakup, which I assumed could be scheduled at my convenience and would follow a tight script. Instead, it proved to be unexpected and horribly messy. Similarly, the body of my drunken self was disposed of in careless haste, much like those who cannot afford a proper burial.`
                        }
                    },
                    `from dreams.`
                ],
                rightLyric: `Leave early, time's up, cross your date released.`
            },
            {
                time: 61,
                leftLyric: `The wraith surveys the widow on his pyre;`,
                rightLyric: `The jailer waves a bit, though uninspired,`
            },
            {
                time: 64,
                leftLyric: [
                    `torched the`,
                    {
                        anchor: `bellyaches on suttee.`,
                        annotation: {
                            description: `Suttee is an outlawed Hindu custom in which a widow must commit suicide by throwing herself on her husband's funeral pyre. Similarly, sober me knew he could be rid of Sita forever if he just killed off bit by bit the one she loved, until no trace remained of whom she once knew.`
                        }
                    }
                ],
                rightLyric: [
                    `for the`,
                    {
                        anchor: `well-behaved on the wing.`,
                        annotation: {
                            description: `Feeling no malice, drunken me can only surmise that he served out his sentence without complaint, and was granted an early release for good behaviour.`
                        }
                    }
                ]
            }
        ],
        [
            {
                time: 65,
                leftLyric: `Had I grown dispirited in all this act,`,
                rightLyric: [
                    `As I soak in spirits amidst`,
                    {
                        anchor: `wanted ads—`,
                        annotation: {
                            description: `As drunken me wanders the Oakland streets, he pauses to read flyers seeking bandmates that are posted on utility poles, much like a vigilante of the Old West might take interest in a wanted poster.`
                        }
                    }
                ]
            },
            {
                time: 68,
                leftLyric: `by disparate elements, like kindling gathered up?`,
                rightLyric: `my desperate ailments tied in this shambler's dusk—`
            },
            {
                time: 72,
                leftLyric: [
                    `Guilt pardons the`,
                    {
                        anchor: `spectre taunting twin streetlamps;`,
                        annotation: {
                            description: `Sober me observes as his drunken half lashes out in defiance at twin streetlamps, whose misty glow has revived the vision of Sita's fearful gaze moments before he committed the act.`
                        }
                    }
                ],
                rightLyric: [
                    `still hardened against her`,
                    {
                        // TODO: Link to streetlamps?
                        anchor: `fawning, misty glance,`,
                        annotation: {
                            description: `Sensing that Sita gazes downward upon him from the night sky, drunken me realises that remnants of his past bitterness still remain deep within.`
                        }
                    }
                ]
            },
            {
                time: 75,
                leftLyric: [
                    {
                        anchor: `hatchet man`,
                        annotation: {
                            description: `A hatchet man is an underling who carries out the most disagreeable tasks of an operation. Sober me recognises the trauma that must certainly linger, and so forgives his drunken half's lack of sympathy for his victim.`
                        }
                    },
                    `who's burnt enough.`
                ],
                rightLyric: [
                    `past this`,
                    {
                        anchor: `avenue Möbius.`,
                        annotation: {
                            description: `A Möbius strip is a surface with only one side, and can be created by joining the ends of a half-twisted paper strip. As drunken me ambles down twisting sidewalks, mentally digging through the dense layers of half-truths that helped justify his act, it occurs to him that perhaps there really aren't two sides to this story. Or two sides to this mind…`
                        }
                    }
                ]
            }
        ],
        [
            {
                time: 76,
                leftLyric: `But a precious gift as a shedded chain,`,
                rightLyric: `But the present slips past a debt unpaid,`
            },
            {
                time: 79,
                leftLyric: `has lain to rust, one more cruel memento.`,
                rightLyric: `that slays you once before you'll let it go.`
            },
            {
                time: 83,
                leftLyric: [
                    `Then if`,
                    {
                        anchor: `life were real,`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `not just drunken play…`
                ],
                rightLyric: [
                    `And if`,
                    {
                        anchor: `night were peeled`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `off the front of day…`
                ]
            },
            {
                time: 86,
                centreLyric: `But what do I know?`
            }
        ],
        [
            {
                time: 87,
                centreLyric: [
                    `Just that those playful`,
                    {
                        anchor: `pups with their hateful fangs`,
                        annotation: {
                            description: `Given how much more vicious the bullies could have been, I realised that they actively held back their blows, believing their cruelty to be in good fun. Similarly, baby predators instinctively understand their claws and fangs to be weapons, and will thus contain themselves during rough play.`
                        }
                    }
                ]
            },
            {
                time: 90,
                centreLyric: `knew the restraint of those born as hunters,`
            },
            {
                time: 93,
                centreLyric: [
                    `while this supposed`,
                    {
                        anchor: `dove chafing in his cage,`,
                        annotation: {
                            description: `A dove, on the other hand, can peck its cagemate to death, unaware of the deadly nature of its beak. Similarly, seeing myself as the perennial victim, I had caused Sita far greater emotional trauma than I had ever received at the hands of the bullies.`
                        }
                    }
                ]
            },
            {
                time: 96,
                centreLyric: `just learned he's pecked to death his precious other.`
            },
            [
                {
                    lyric: {
                        italic: {
                            anchor: `Odelay!`,
                            annotation: {
                                description: `With another hour or two left till sunrise, I began to feel the mild euphoria of dehydration, and decided to practise my yodelling.`
                            }
                        }
                    }
                },
            ]
        ],
        [
            {
                time: 98,
                centreLyric: `But should it matter since you loved her once,`
            },
            {
                time: 101,
                centreLyric: [
                    `when you really thought the`,
                    {
                        anchor: `world that simple?`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ]
            },
            {
                time: 104,
                centreLyric: `And who's to judge how much you cared because`
            },
            {
                time: 107,
                centreLyric: `the gesture then was just a little more worth working for?…`
            },
            {
                time: 113,
                centreLyric: `Now the jester teeters towards…`
            },
            [
                {
                    side: BOTTOM_ONLY_SIDE_STANZA,
                    lyric: {
                        italic: {
                            anchor: `Mush! Mush!`,
                            annotation: {
                                description: `Trudging onward through the chilly night, I was reminded of happier days as a child, when I would sing Johnny Horton's "North to Alaska," and my sister would back me up by heaving "Mush! Mush!"`
                            }
                        }
                    }
                }
            ]
        ],
        [
            {
                time: 116,
                centreLyric: [
                    `the taunting,`,
                    {
                        anchor: `streetswept dawn.`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ]
            },
            {
                time: 118,
                centreLyric: `Thoughts spawned then dropped,`
            },
            {
                // Sooty dust.
                time: 121,
                centreLyric: [
                    `of gathering up the`,
                    {
                        anchor: `suttee dust.`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ]
            },
            {
                time: 123,
                centreLyric: `Some things just come to loss:`
            },
            {
                time: 126,
                centreLyric: `this bracelet, its lustre; me, my lust.`
            },
            {
                time: 130,
                centreLyric: `Or was I once, something not what I've become?`
            },
            {
                time: 137,
                centreLyric: [
                    `Have I just`,
                    {
                        anchor: `killed the thing I love?`,
                        annotation: {
                            description: `While in prison for homosexuality, Oscar Wilde witnessed the execution of a man convicted of murdering his wife. Sympathising with the man's plight, Wilde wrote his poem "The Ballad of Reading Gaol," which finds a common thread tying the man's crime to his own— and to all of humanity's— with its refrain, "For each man kills the thing he loves."`
                        }
                    }
                ]
            }
        ],
        [
            {
                time: 144,
                leftLyric: `Of fateful thoughts hung on a gilded clasp,`,
                rightLyric: `Once navels locked upon the wilted grass,`
            },
            {
                time: 147,
                leftLyric: [
                    `which this`,
                    {
                        anchor: {
                            italic: `Übermensch`
                        },
                        properNoun: true,
                        annotation: {
                            description: [
                                `In`,
                                {
                                    italic: `Thus Spoke Zarathustra,`
                                },
                                `Friedrich Nietzsche proposed the`,
                                {
                                    italic: `Übermensch,`
                                },
                                `or "overhuman", as an ideal of perfection towards which each person may strive, which I understood to be a precondition for creating great works. But since the underlying motive for bettering myself had always been a desire to attract women, my lifelong ambition to be a great artist meant that I would always have a cheating heart.`
                            ]
                        }
                    },
                    `reavowed he'd come to snip.`
                ],
                rightLyric: [
                    {
                        anchor: `digging through her innie,`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `the outie snug-to-fit.`
                ]
            },
            {
                time: 150,
                leftLyric: `And a smarting head throbs once his brain's warring halves,`,
                rightLyric: [
                    `Then the`,
                    {
                        anchor: `guardian knot`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `of this frayed cord detached,`
                ]
            },
            {
                time: 154,
                leftLyric: [
                    `each`,
                    {
                        anchor: `attack with the proper fist.`,
                        annotation: {
                            description: `Each hemisphere of the brain controls the opposite side of the body. So when I punched myself in the head, as I was wont to do when trying to clear my thoughts, it was as if my right brain were attacking my left brain with the one fist under its command.`
                        }
                    }
                ],
                rightLyric: [
                    {
                        anchor: `leaked the bandage`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `upon her wrist.`
                ]
            }
        ],
        [
            {
                time: 155,
                leftLyric: `A sober plea finds the present you,`,
                rightLyric: `The former me might have left a clue`
            },
            {
                time: 158,
                leftLyric: [
                    `my`,
                    {
                        anchor: `alias drunk, in panic`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `and starved for leads.`
                ],
                rightLyric: [
                    `by`,
                    {
                        anchor: `trail of crumbs,`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `which vanished as bartered feed.`
                ]
            },
            {
                time: 161,
                leftLyric: `And will she label lies oaths we vowed we could,`,
                rightLyric: `Until we strangle cries knowing how we stood,`
            },
            {
                time: 164,
                leftLyric: [
                        `with`,
                        {
                            anchor: `Garry's sole witness`,
                            annotation: {
                                description: ``
                            },
                            todo: true
                        },
                        `relieved?`
                ],
                rightLyric: [
                    `when`,
                    {
                        anchor: `buried whole`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `with the deceased.`
                ]
            }
        ],
        [
            {
                time: 166,
                leftLyric: `So a plan devised divides a slave once wed;`,
                rightLyric: [
                    `Though, the`,
                    {
                        anchor: `master mind`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `reminds us, straight ahead,`
                ]
            },
            {
                time: 169,
                leftLyric: [
                    `a bid for greatness' sake, he's sold on as`,
                    {
                        anchor: `holy war.`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    }
                ],
                rightLyric: `a bigger plate awaiting nulls one half full before.`
            },
            {
                time: 172,
                leftLyric: `When longed by nothing you then fight the best,`,
                rightLyric: [
                    `And`,
                    {
                        anchor: `fond sighs of reunion`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `I must rest;`
                ]
            },
            {
                time: 176,
                leftLyric: [
                    `for`,
                    {
                        anchor: `kohl-eyed houris`,
                        annotation: {
                            description: ``
                        },
                        todo: true
                    },
                    `as reward.`
                ],
                rightLyric: `forego like jewelry that she wore.`
            }
        ]
    ],
    tasks: [
        {
            taskName: `restructure lyrics`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `annotations`,
            workedHours: 48,
            neededHours: 65,
            subtasks: [
                {
                    taskName: `split into dots`,
                    workedHours: 0,
                    neededHours: 3
                }
            ]
        },
        {
            // Drunken me holds gold bracelet over kid's head in the morning.
            taskName: `illustrations`,
            workedHours: 0,
            neededHours: 0,
            subtasks: [

            ]
        }
    ]
}
