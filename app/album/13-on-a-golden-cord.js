// FIXME: Change pronouns from I and me to drunken me and sober me.
import { VERSES, CHORUS, BRIDGE, BACKING, INSTRUMENTAL, BACKSTORY, NARRATIVE, OBSERVATION, PUN, REFERENCE, SONGWRITING } from 'helpers/constants'

module.exports = {
    title: {
        anchor: `On a Golden Cord`,
        annotation: {
            description: [
                `I was trying to follow in the footsteps of other poetic ruminations on still-life objects, like John Keats's`,
                {
                    anchor: `"Ode on a Grecian Urn."`,
                    wiki: `Ode_on_a_Grecian_Urn`
                },
                `I'm pretentious like that.`
            ],
            dotKeys: {
                [OBSERVATION]: true
            }
        }
    },
    scenes: [
        {
            verseIndex: 0,
            description: `Bennett and Sita are at her apartment, breaking up. Sita is a wreck, turning away from Bennett as she returns the gold bracelet to him. He is trying to console her, but in a mechanical way.`,
            characters: {
                bennett: 1,
                sita: 1
            }
        },
        {
            verseIndex: 14,
            description: `Bennett and Garry are walking along down the street. Garry is shaking his fist at the twin streetlights. Bennett turns around to face the audience, a look of uncertainty on his face. He is caressing the gold bracelet in his hand.`,
            characters: {
                bennett: 1,
                garryowen: 1
            }
        },
        {
            verseIndex: 26,
            description: `Bennett and Garry are yucking it up, in a panicked and delirious kind of way. Bennett is yodelling, Garry is playing the banjo, saluting a female cop on a horse. The cop waves back.`,
            characters: {
                bennett: 1,
                garryowen: 1,
                cop: 1
            }
        },
        {
            verseIndex: 42,
            description: `Garry is now facing the audience, his hand over his face, crying, and holding the gold bracelet over a group of kids crossing the street with a crossing guard. Bennett is trying to console him, as he faces forward.`,
            characters: {
                bennett: 1,
                garryowen: 1,
                kids: 4,
                crossingGuard: 1
            }
        }
    ],
    tip: {
        description: 'placeholder tip'
    },
    doubleColumns: true,
    totalTime: 201,
    overview: `After a long night out with friends, I might shuffle on to Sita's place, slip into bed with her, and quickly doze off. But one night, Sita was waiting to confront me, having discovered my plans to break up with her. In tears, she returned the gold bracelet I had given her at the start of our relationship, then kicked me out. With nowhere to go, I wandered the streets until sunrise. And so began the first of our many breakups…`,
    lyrics: [
        [
            {
                // TODO: Mention white throated sparrow.
                time: 0,
                centre: `On a golden cord,`
            },
            {
                time: 7,
                centre: `once worn, now shorn,`
            },
            {
                time: 9,
                centre: [
                    `safely kept with`,
                    {
                        anchor: `bread and pocket lint.`,
                        annotation: {
                            description: `After Sita returned the bracelet, I put it in the front pocket of my jacket, which is where I often stashed bread rolls from the cafeteria to munch on later. With my hands tucked in as well to keep warm, I stroked the bracelet over and over that night, just as I turned over the thoughts in my head.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 12,
                centre: `Not of its own accord,`
            },
            {
                time: 15,
                centre: [
                    `but`,
                    {
                        anchor: `broken`,
                        annotation: {
                            description: `When I walked into the living room to find Sita seated on the couch, the bracelet lay in a mangled heap on the coffee table. I wondered if she had damaged it on purpose, but it turns out that I had only ever seen it snugly wrapped around her wrist, where its dozens of tiny links were kept intricately locked in place.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `for what its promise meant.`,
                ]
            },
            {
                time: 18,
                centre: `And so she said, "Now it's yours again…`
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: `***CHANGE_ME***`,
                    annotation: {
                        description: [
                            `To make sense of the breakup, I had to reconcile contradictory thoughts in my head, much like the citizens of George Orwell's`,
                            {
                                italic: {
                                    anchor: `Nineteen Eighty-Four.`,
                                    wiki: `Nineteen_Eighty-Four`
                                }
                            },
                            `So I used doublespeaker rhyme— which I named partly for its`,
                            {
                                anchor: `Orwellian undertone—`,
                                wiki: `Doublethink`
                            },
                            `to depict the internal conflict between my sober self and my drunken alter ego. Since the breakup allowed me to regress in emotional age, I evoked the musical style of my childhood hero`,
                            {
                                anchor: `Johnny Horton,`,
                                wiki: `Johnny_Horton`
                            },
                            `a country star who sang about the`,
                            {
                                anchor: `Klondike Gold Rush.`,
                                wiki: `Klondike_Gold_Rush`
                            }
                        ],
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
                time: 26,
                centre: `And how you look tonight!`
            },
            {
                time: 28,
                centre: [
                    `So`,
                    {
                        anchor: `polite, yet resigned,`,
                        annotation: {
                            description: `Sita had spent the day bottling up her emotions, braced for that night's confrontation. Meanwhile, I had wandered in just minutes prior, ready to pass out. So while she was now exploding in hysterics, I was still struggling to process the situation in my drunken state. As such, all my responses were calm but curt, which only added to her fluster.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 31,
                centre: `with wounds dressed and feelings put away.`
            },
            {
                time: 33,
                centre: `Full of patient replies…`
            },
            {
                time: 36,
                centre: `But how can I trust a word you say?`
            },
            {
                time: 40,
                centre: `So spill away… and please, dear, you have no more secrets saved.`
            },
            {
                time: 47,
                centre: [
                    `I'm sorry, but I`,
                        {
                            anchor: `went through your mail`,
                            annotation: {
                                description: `Confused about why I had grown unusually distant, Sita finally caved in that day and decided to snoop around on my computer, which I kept at her place because it was a desktop. She thus discovered that I was flirting online with a woman I had met at one of my shows, to whom I was giving assurances that I would soon be single again.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `today…"`
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
                time: 54,
                left: [
                    {
                        anchor: `Immerse the moulted form`,
                        annotation: {
                            description: `With our relationship now in irreversible decline, the "sober" voice in the doublespeaker set quietly resurrects the ghost of his drunken half, whom he had planned to sacrifice all along as the unwitting accomplice in a scheme to end his relationship.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `in holy foggy night,`
                ],
                right: [
                    `Returned a golden cord, this`,
                    {
                        anchor: `sole belonging signed.`,
                        annotation: {
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
                left: [
                    `emerged beside a`,
                    {
                        anchor: `paupers' grave`,
                        annotation: {
                            // NOTE: I changed "pauper's" to "paupers'."
                            description: [
                                `I had spent weeks rehearsing the breakup, which I assumed could be scheduled at my convenience and would follow a tight script. Instead, it proved to be unexpected and horribly messy. Similarly, the body of my drunken self was disposed of in careless haste, much like those who cannot afford a proper burial and are tossed into a`,
                                {
                                    anchor: `paupers' grave.`,
                                    wiki: `Potter%27s_field`
                                }
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true
                            }
                        }
                    },
                    `from dreams.`
                ],
                right: `Leave early, time's up, cross your date released.`
            },
            {
                time: 61,
                left: `The wraith surveys the widow on his pyre;`,
                right: `The jailer waves a bit, though uninspired,`
            },
            {
                time: 64,
                left: [
                    `torched the`,
                    {
                        anchor: `bellyaches on suttee.`,
                        annotation: {
                            description: [
                                {
                                    anchor: `Suttee`,
                                    wiki: `Sati_(practice)`
                                },
                                `is an outlawed Hindu custom in which a widow must commit suicide by throwing herself on her husband's funeral pyre. Similarly, sober me knew he could be rid of Sita forever if he just killed off bit by bit the one she loved, until no trace remained of whom she once knew.`
                            ],
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    }
                ],
                right: [
                    `for the`,
                    {
                        anchor: `well-behaved on the wing.`,
                        annotation: {
                            description: `Feeling no malice, drunken me can only surmise that he served out his sentence without complaint, and was granted an early release for good behaviour.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                sectionClass: CHORUS
            }
        ],
        [
            {
                time: 65,
                left: `Had I grown dispirited in all this act,`,
                right: [
                    `As I soak in spirits amidst`,
                    {
                        anchor: `wanted ads—`,
                        annotation: {
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
                left: `by disparate elements, like kindling gathered up?`,
                right: `my desperate ailments tied in this shambler's dusk—`
            },
            {
                time: 72,
                left: [
                    `Guilt pardons the`,
                    {
                        anchor: `spectre taunting twin streetlamps;`,
                        annotation: {
                            description: `Sober me observes as his drunken half lashes out in defiance at twin streetlamps, whose misty glow has revived the vision of Sita's fearful gaze moments before he committed his crime.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    }
                ],
                right: [
                    `still hardened against her`,
                    {
                        // TODO: Portal: Link to streetlamps in left column?
                        anchor: `fawning, misty glance,`,
                        annotation: {
                            description: `Sensing that Sita gazes downward upon him from the night sky, drunken me realises that remnants of his past bitterness still remain deep within.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 75,
                left: [
                    {
                        anchor: `hatchet man`,
                        annotation: {
                            description: `A hatchet man is an underling who carries out the most disagreeable tasks of an operation. Sober me recognises the trauma that must certainly linger, and so forgives his drunken half's lack of sympathy for his victim.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [REFERENCE]: true
                            }
                        }
                    },
                    `who's burnt enough.`
                ],
                right: [
                    `past this`,
                    {
                        anchor: `avenue Möbius.`,
                        annotation: {
                            description: [
                                `A`,
                                {
                                    anchor: `Möbius strip`,
                                    wiki: `Möbius_strip`
                                },
                                `is a surface with only one side, and can be created by joining the ends of a half-twisted paper strip. As drunken me ambles down twisting sidewalks, mentally digging through the dense layers of half-truths that helped justify his act, it occurs to him that perhaps there really aren't two sides to this story. Or two sides to this mind…`
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
                unitMap: true,
                sectionClass: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 76,
                left: `But a precious gift as a shedded chain,`,
                right: `But the present slips past a debt unpaid,`
            },
            {
                time: 79,
                left: `has lain to rust, one more cruel memento.`,
                right: `that slays you once before you'll let it go.`
            },
            {
                time: 83,
                left: [
                    `Then if`,
                    {
                        anchor: `life were real,`,
                        annotation: {
                            description: `Sita's friends weren't wrong when they described me as fake and pretentious. My emotions just didn't feel legitimate, and so I acted upon them the way an actor takes cues to ad lib an improv scene. At the time, I blamed the lingering effect of Robitussin.`,
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `not just drunken play…`
                ],
                right: [
                    `And if`,
                    {
                        anchor: `night were peeled`,
                        annotation: {
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
                centre: `But what do I know?`
            },
            {
                unitMap: true,
                sectionClass: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 87,
                centre: [
                    `Just that those playful`,
                    {
                        anchor: `pups with their hateful fangs`,
                        annotation: {
                            description: `Given how much more vicious the bullies could have been, I realised that they actively held back their blows, believing their cruelty to be in good fun. Similarly, baby predators instinctively understand their claws and fangs to be weapons, and will thus contain themselves during rough play.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [REFERENCE]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 90,
                centre: `knew the restraint of those born as hunters,`
            },
            {
                time: 93,
                centre: [
                    `while this supposed`,
                    {
                        anchor: `dove chafing in his cage,`,
                        annotation: {
                            description: `A dove, on the other hand, can peck its cagemate to death, unaware of the deadly nature of its beak. Similarly, seeing myself only as the perennial victim, I had caused Sita far greater emotional trauma than I myself had ever received at the hands of the bullies.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [REFERENCE]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 96,
                centre: `just learned he's pecked to death his precious other.`
            },
            {
                unitMap: true,
                topSideStanza: [
                    {
                        lyric: {
                            italic: {
                                anchor: `Odelay!`,
                                annotation: {
                                    description: `With an hour or two left before daybreak, I began to feel the mild euphoria of dehydration, and decided to practise my yodelling.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [NARRATIVE]: true
                                    }
                                }
                            }
                        }
                    }
                ],
                sectionClass: BRIDGE,
                sideSectionClass: BACKING
            }
        ],
        [
            {
                time: 98,
                centre: `But should it matter since you loved her once,`
            },
            {
                time: 101,
                centre: `when you really thought the world that simple?`
            },
            {
                time: 104,
                centre: `And who's to judge how much you cared because`
            },
            {
                time: 107,
                centre: [
                    `the`,
                    {
                        anchor: `gesture then`,
                        annotation: {
                            description: `I had bought Sita the gold bracelet from a jewelry store at the local mall. It was quite expensive relative to my wage at the time, which made its underlying meaning seem all the more potent.`,
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
                centre: `Now the jester teeters towards…`
            },
            {
                unitMap: true,
                bottomSideStanza: [
                    {
                        lyric: {
                            italic: {
                                anchor: `Mush! Mush!`,
                                properNoun: true,
                                annotation: {
                                    description: [
                                        `Marching onward through the brisk twilight, I was reminded of simpler days as a child, when I would sing Johnny Horton's`,
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
                sectionClass: BRIDGE,
                sideSectionClass: BACKING,
                subsequent: true
            }
        ],
        [
            {
                time: 116,
                centre: [
                    `the taunting,`,
                    {
                        anchor: `streetswept dawn.`,
                        annotation: {
                            description: [
                                `As daylight broke, the mechanical`,
                                {
                                    anchor: `street sweepers`,
                                    wiki: `Street_sweeper`
                                },
                                `came out in full force, beeping and purring as they went.`
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
                centre: `Thoughts spawned then dropped,`
            },
            {
                time: 121,
                centre: [
                    `of gathering up the`,
                    {
                        anchor: `suttee dust.`,
                        annotation: {
                            description: `I imagined Sita by now to be fully immolated on the burnt rubble of our ruined relationship.`,
                            dotKeys: {
                                [NARRATIVE]: true
                            },
                            portal: `suttee_dust`
                        }
                    }
                ]
            },
            {
                time: 123,
                centre: `Some things just come to loss:`
            },
            {
                time: 126,
                centre: `this bracelet, its lustre; me, my lust.`
            },
            {
                time: 130,
                centre: `Or was I once, something not what I've become?`
            },
            {
                time: 137,
                centre: [
                    `Have I just`,
                    {
                        anchor: `killed the thing I love?`,
                        annotation: {
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
            },
            {
                unitMap: true,
                sectionClass: VERSES
            }
        ],
        [
            {
                time: 144,
                left: `Of fateful thoughts hung on a gilded clasp,`,
                right: `Once navels locked upon the wilted grass,`
            },
            {
                time: 147,
                left: [
                    `which this`,
                    {
                        anchor: {
                            italic: `Übermensch`
                        },
                        properNoun: true,
                        annotation: {
                            description: [
                                `German philosopher`,
                                {
                                    anchor: `Friedrich Nietzsche`,
                                    wiki: `Friedrich_Nietzsche`
                                },
                                `spoke of the`,
                                {
                                    italic: {
                                        anchor: `Übermensch,`,
                                        wiki: `Übermensch`
                                    }
                                },
                                `or "overhuman", as an ideal of perfection towards which each person may strive, which I understood to be a precondition for creating great works. But since the underlying motive for bettering myself had always been a desire to attract women, my lifelong ambition to be a great artist meant that I would always have a cheating heart.`
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `reavowed he'd come to snip.`
                ],
                right: [
                    {
                        anchor: `digging through her innie`,
                        annotation: {
                            description: `Some babies have belly buttons that go in, others have ones that stick out. During sex, Sita and I would sometimes engage in baby talk and refer to our respective parts as her "innie" and my "outie."`,
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
                left: `And a smarting head throbs once his brain's warring halves,`,
                right: [
                    `Then the`,
                    {
                        anchor: `guardian knot`,
                        annotation: [
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
                                    `simply cut it in half with his sword. Like Alexander, I severed this guardian knot, in my bid for artistic greatness.`
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
                left: [
                    `each`,
                    {
                        anchor: `attack with the proper fist.`,
                        annotation: {
                            description: `The right hemisphere of the brain controls the left side of the body, and the left hemisphere, the right. So when I started punching myself in the head, in frustration over conflicting desires, it was as if each hemisphere was attacking the other using the one fist under its command.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [REFERENCE]: true
                            }
                        }
                    }
                ],
                right: [
                    {
                        anchor: `leaked the bandage`,
                        annotation: {
                            description: `With our emotional bond now severed, Sita was bleeding both metaphorically and literally, as she began to experiment with cutting to ease her depression.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `upon her wrist.`
                ]
            },
            {
                unitMap: true,
                sectionClass: CHORUS
            }
        ],
        [
            {
                time: 155,
                left: `A sober plea finds the present you,`,
                right: `The former me might have left a clue`
            },
            {
                time: 158,
                left: [
                    `my`,
                    {
                        anchor: `alias drunk, in panic`,
                        annotation: {
                            description: `Once drunk, I always stayed drunk until I crashed. As such, while the sober me was adept at morphing into his drunken half, the reverse was not true. So as I got progressively more sober that night, panicked doubt crept up beside the brashness that usually governed my drunken thought. I questioned if dating more women would fulfill me, and whether my newfound ability to attract them wasn't a fluke.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `and starved for leads.`
                ],
                right: [
                    `by`,
                    {
                        anchor: `trail of crumbs,`,
                        annotation: {
                            description: `Suddenly fearing the emotional upheaval ahead, I wondered aloud whether it was too late to walk back the damage I had done. But even if I wanted to, I couldn't find my way back. All night I had been nibbling on the bread in my pocket rather than pinching off crumbs for a trail, trading long-term security to satisfy my short-term hunger.`,
                            dotKeys: {
                                [BACKSTORY]: true,
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
                left: `And will she label lies oaths we vowed we could,`,
                right: `Until we strangle cries knowing how we stood,`
            },
            {
                time: 164,
                left: [
                        `with`,
                        {
                            anchor: `Garry's sole witness`,
                            properNoun: true,
                            annotation: {
                                description: `All my promises to Sita had proven to be lies, but of course I didn't intend them to be. Circumstances just forced my hand. Still, while I strongly wished to argue my case, I realised that the breakup would be done with sooner if I just accepted my role as the villain. And so the sober me, called up to testify for his drunken half, stays silent.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `relieved?`
                ],
                right: `when buried whole with the deceased.`
            },
            {
                unitMap: true,
                sectionClass: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 166,
                left: `So a plan devised divides a slave once wed;`,
                right: [
                    `Though, the`,
                    {
                        anchor: `master mind`,
                        annotation: {
                            description: `In college, I learned that being drunk made it easy to single-mindedly perform unpleasant tasks such as writing papers, and humoured myself by comparing my drunken half to a slave taking orders from his master, my sober half. I was now pursuing this very strategy to break up with Sita.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `reminds us, straight ahead`
                ]
            },
            {
                time: 169,
                left: [
                    `a bid for greatness' sake, he's sold on as`,
                    {
                        anchor: `holy war.`,
                        annotation: {
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
                                [OBSERVATION]: true,
                                [REFERENCE]: true
                            }
                        }
                    }
                ],
                right: `a bigger plate awaiting nulls one half full before.`
            },
            {
                time: 172,
                left: `When longed by nothing you then fight the best,`,
                right: `And fond sighs of reunion I must rest;`
            },
            {
                time: 176,
                left: [
                    `for`,
                    {
                        anchor: `kohl-eyed`,
                        annotation: {
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
                        annotation: {
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
                right: [
                    {
                        anchor: `forego like jewelry`,
                        annotation: {
                            description: `As these things go, Sita and I had a turbulent on-again, off-again relationship for a while longer. During one stretch when things were looking rosier than ever, she asked to have the bracelet back to wear again, which I happily obliged. Somehow I had dented it in my pocket that night, however, creating a permanent reminder that certain things can never be undone, only amended.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `that she wore.`
                ]
            },
            {
                unitMap: true,
                sectionClass: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 177,
                centre: {
                    italic: `(outro)`
                }
            },
            {
                unitMap: true,
                sectionClass: INSTRUMENTAL
            }
        ]
    ],
    tasks: [
        {
            taskName: `afterword annotations`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `music annotations`,
            workedHours: 0,
            neededHours: 3
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
            workedHours: 68,
            neededHours: 68
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
            taskName: `restructure lyrics`,
            workedHours: 1,
            neededHours: 1
        },
        {
            taskName: `rough illustration synopses`,
            workedHours: 1,
            neededHours: 1
        }
    ]
}
