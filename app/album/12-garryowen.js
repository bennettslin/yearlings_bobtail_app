import { REFRAIN,
         VERSES,
         CHORUS,
         BRIDGE,

         INTRO,
         SOLO,
         OUTRO,

         BACKSTORY,
         OBSERVATION,
         PUN,
         REFERENCE,
         SONGWRITING,
         DOT_STANZA_CONSTANT } from '../helpers/constants'

module.exports = {
    scenes: [
        {
            verseIndex: 0,
            description: `Bennett is putting on his jacket to leave Sita's house. Sita is in her nightgown, begging him to stay.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'front, putting on jacket, cold, distant'
                },
                sita: {
                    todo: true,
                    description: 'side, shivering, pleading'
                }
            }
        },
        {
            verseIndex: 8,
            description: `Tristan and another crust punk are smashing a car window. Ana is laughing at them. Bennett is sorting through the meat packages in his jacket.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'front, tripping as meats fall out of pockets'
                },
                tristan: {
                    todo: true,
                    description: 'side angle, eagerly aggressive, about to punch car'
                },
                ana: {
                    todo: true,
                    description: 'side, holding paper bottle, laughing'
                },
                eduardo: {
                    todo: true,
                    description: 'front, clutching at fist, laughing through pain'
                }
            }
        },
        {
            verseIndex: 18,
            description: `Bennett and Sita are on the couch. Bennett is drunk, with a guitar in his lap, writing a song. Sita is naked and has taken his right hand and placed it on her breast, but he is unresponsive`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'on couch, ignoring Sita, drunk'
                },
                sita: {
                    todo: true,
                    description: 'side, naked, making Bennett touch her breast'
                }
            }
        },
        {
            verseIndex: 25,
            description: `Bennett has just finished playing a show. Tristan introduces his kid sister Miriam, who is dressed more preppie, while giving her a noogie. Ana is removing her bass, rolling her eyes, as Bennett is clearly smitten.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'side angle, sweaty, giddy'
                },
                miriam: {
                    todo: true,
                    description: 'side, greeting Bennett'
                },
                tristan: {
                    todo: true,
                    description: 'front, playfully giving Miriam a noogie'
                },
                ana: {
                    todo: true,
                    description: 'front, removing bass, rolling eyes'
                }
            }
        },
        {
            verseIndex: 35,
            description: `Bennett is leaving Sita. She is crumbled on the floor, desperately begging him to stay.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'standing, cold, looking away'
                },
                sita: {
                    todo: true,
                    description: 'crumbled on floor, begging, sobbing'
                }
            }
        }
    ],
    tip: {
        description: 'placeholder tip'
    },
    totalTime: 187,
    overview: `My mood changed when I drank, leading friends to joke that I had a sinister alter ego. It wasn't far from the truth. I had soured on my relationship with Sita by this point, and being drunk provided both an escape and an excuse to act out. But I didn't like myself during such moments. I missed the hapless kid that I still was in my head, and knowing now how to get it right, I longed for a do-over, without the mess this time. Without Sita.`,
    title: {
        anchor: `Garryowen`,
        annotation: {
            description: [
                `In`,
                {
                    italic: `Ulysses,`
                },
                `Garryowen is the name of a menacing dog owned by a vulgar Irish nationalist. It seemed like a fitting eponym for my drunken self at the time.`
            ],
            dotKeys: {
                [OBSERVATION]: true,
                [REFERENCE]: true
            }
        }
    },
    lyrics: [
        [
            {
                time: 0,
                centre: {
                    italic: `(Garry's theme)`
                }
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: [
                            `Since I took the name of my drunken personality from James Joyce's`,
                            {
                                italic: `Ulysses,`
                            },
                            `I went for an`,
                            {
                                anchor: `Irish reel`,
                                wiki: `Reel_(dance)`
                            },
                            `here. Of course, I departed from tradition by scoring contrapuntal melodies.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: INTRO
            }
        ],
        [
            {
                time: 17,
                lyric: `Brushed her off tonight, to swipe meats and wine`
            },
            {
                time: 20,
                lyric: [
                    `with your`,
                    {
                        anchor: `crew of chefs and thieves.`,
                        annotation: [
                            {
                                description: `During this time, I was staying with some crust punks who were friends of Ana's. Every so often, half of us would go out to shoplift groceries, while the other half would then prepare whatever was brought back into a meal for all to share. I was always in the thieving half.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            },
                            {
                                portal: `crooked_thieves`
                            }
                        ]
                    }
                ]
            },
            {
                time: 22,
                lyric: [
                    `Tonight the`,
                    {
                        anchor: `rubber off,`,
                        annotation: {
                            description: `As our relationship went south, sex became the last bargaining chip that Sita held in the power struggle between us. Since I preferred sex without a condom, she would suggest going without it as a way to coax any small kindness out of me.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `she offered as a thought,`
                ]
            },
            {
                time: 25,
                lyric: [
                    `if you would`,
                    {
                        anchor: `opt for bed not street.`,
                        annotation: {
                            description: `To save money after my lease ended, I put my stuff in storage and alternated between sleeping with Sita and crashing at the punk house. This gave me the regular comfort of Sita's bed while ensuring that she never held too much leverage over me.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                stanzaType: VERSES
            }
        ],
        [
            {
                time: 28,
                lyric: [
                    `Well`,
                    {
                        anchor: `you're not me, Garryowen.`,
                        annotation: {
                            description: `A running gag amongst my friends was to address me as Garry when I was drunk, since my disjointed rambling and oafish stunts made me an altogether different person.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `Oh no, and`
                ]
            },
            {
                time: 33,
                lyric: [
                    {
                        anchor: `I can't speak`,
                        annotation: {
                            description: `But this also absolved me of personal responsibility, which became problematic as my actions over time spilled into drunken aggression and misdemeanours.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `for this life you've chosen.`
                ]
            },
            {
                unitMap: true,
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 39,
                lyric: [
                    `Drunk pissed punks tryst,`,
                    {
                        anchor: `bustin' cars with fists,`,
                        annotation: {
                            description: `One kid named Tristan was particularly hotheaded. After we all got kicked out of a party one night for a fight that he incited, Tristan started punching car windows, then challenged us to see who could break the glass first. I didn't win.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 42,
                lyric: [
                    `the`,
                    {
                        anchor: `littlest fuss will incite`,
                        annotation: [
                            {
                                description: `Tristan would lash out in a spastic fury while blacking out, yet be perfectly collected by next morning. I came to see that his chaotic outbursts were in fact meticulously controlled, giving him a strange inner peace, and so I sought to indulge my drunken temper in the same manner.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            },
                            {
                                portal: `lidless_vaseline_sits`
                            }
                        ]
                    },
                    `your rage.`
                ]
            },
            {
                time: 44,
                lyric: [
                    `In you come, piss drunk, smug in`,
                    {
                        anchor: `smegma crust,`,
                        annotation: [
                            {
                                description: [
                                    {
                                        anchor: `Smegma`,
                                        wiki: `Smegma`
                                    },
                                    `is the smelly gunk that builds up on unwashed genitals.`
                                ]
                            },
                            {
                                description: `My personal hygiene would be put on hold for days while I crashed at the punk house. But once back at Sita's, I would still dawdle a bit before showering, since she was powerless to entice me with sex until I did.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        ]
                    }
                ]
            },
            {
                time: 47,
                lyric: [
                    `since`,
                    {
                        anchor: `hummers aren't love,`,
                        annotation: [
                            {
                                description: `A hummer is a blowjob.`,
                                dotKeys: {
                                    [REFERENCE]: true
                                }
                            },
                            {
                                description: `Once when Sita protested that we couldn't have sex until after I washed up, I snidely remarked that she could give me a blowjob, since blowjobs didn't count as real sex in her view.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        ]
                    },
                    `or so`,
                    {
                        anchor: `she's claimed…`,
                        annotation: {
                            description: `Throughout our budding friendship, Sita neglected to mention the extent of her past sexual intimacy with other men, even if always shy of intercourse. She tried to console me by pointing out that she never went all the way precisely because she didn't love them. She loved me, and so I had won. But it still stung like crazy to find out so late, and only added to my deepening resentment at the time.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                stanzaType: VERSES
            }
        ],
        [
            {
                time: 50,
                lyric: `Well see, Garryowen, now no one,`
            },
            {
                time: 56,
                lyric: [
                    {
                        anchor: `buys your grief`,
                        annotation: {
                            description: `My worlds collided when a local kid who liked my band found out that I had vandalised his friend's bike in a fit of drunken rage. He had related so strongly to my songs about unfulfilled hopes. I was disgusted with myself for disappointing him.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `as the boy unchosen.`
                ]
            },
            {
                unitMap: true,
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 61,
                lyric: [
                    `So the`,
                    {
                        anchor: `celibate you'll play,`,
                        annotation: {
                            description: `I gladly drank to excess, as it made me impotent and thus impervious to Sita's advances. But not having sex was also purifying in its own right, as it lent the familiar comfort of being my old self again. So, win-win all around.`,
                            dotKeys: {
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `self-medicated,`
                ]
            },
            {
                time: 64,
                lyric: `stewing in hatred for the world.`
            },
            {
                time: 67,
                lyric: [
                    {
                        anchor: `Slammed in the well,`,
                        annotation: {
                            description: `Of course, using alcohol as a spiritual cleanser isn't sustainable in the long term. Vomiting into a toilet and staring at my reflection in the water soon became a regular occurrence.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [OBSERVATION]: true
                            }
                        }
                    },
                    `you'll glimpse yourself`
                ]
            },
            {
                time: 70,
                lyric: [
                    `with`,
                    {
                        anchor: `choler turned up,`,
                        annotation: [
                            {
                                description: `In Hippocratic medicine, choler, or yellow bile, is the humour that induces aggression.`,
                                dotKeys: {
                                    [REFERENCE]: true
                                }
                            },
                            {
                                description: `Just like I wouldn't have recognised myself with an "upturned collar," the angry drunk returning my gaze didn't mesh with my self-image as a wide-eyed kid who meant well. At some point, I vowed to make a clean break and start over.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true
                                }
                            }
                        ]
                    },
                    `cringing in shame.`
                ]
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `In traditional counterpoint, the chords and harmonic rhythm are byproducts of the melodic contour. The chord progressions for this song were already set, however. So I was left to figure out on my own how counterpoint might be scored in this scenario, since I didn't know of any working examples.`,
                        dotKeys: {
                            [REFERENCE]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 73,
                lyric: [
                    `As`,
                    {
                        anchor: `claws you built from scratches,`,
                        annotation: {
                            description: `A cat scratches to keep its claws sharp, just like I had sharpened my emotional defences to guard against a lifetime of scratches.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [REFERENCE]: true
                            }
                        }
                    },
                    `with your bilious malice,`
                ]
            },
            {
                time: 75,
                lyric: [
                    `fill up a package strapped to your`,
                    {
                        anchor: `scapegirl,`,
                        annotation: {
                            description: [
                                `In Biblical times, a community would absolve itself of its sins by symbolically placing them on a`,
                                {
                                    anchor: `goat`,
                                    wiki: `Scapegoat`
                                },
                                `that was then banished into the desert. For me, banishing Sita from my life would serve a similar purpose. As long as she was around to cast judgment on my hypocrisy, I would have to own up to my mistakes, rather than run away from them.`
                            ],
                            dotKeys: {
                                [OBSERVATION]: true,
                                [PUN]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 78,
                lyric: `You'll slap her down, and push her out,`
            },
            {
                time: 81,
                lyric: `a crumpled castaway!`
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `To capture the liveliness of a fiddle, as well as to pull off all the glissandos I had scored, I held the violin at chest level. I'd never tried this before, so a bit of practise was needed. As well as a lot of spliced tracks.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 84,
                centre: {
                    italic: `(bagpipes)`
                }
            },
            {
                unitMap: true,
                stanzaType: SOLO
            }
        ],
        [
            {
                time: 93,
                lyric: `Your rabid wit unleashed, Garryowen, to no end,`
            },
            {
                time: 100,
                lyric: [
                    `you'd`,
                    {
                        anchor: `make her strip bare`,
                        annotation: {
                            description: `One time, Sita stripped naked only to start shivering from the cold, in a desperate appeal to both my predatory and protective instincts. But I just kept sipping my beer, quietly enjoying my cruelty.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    },
                    `just to watch her freeze.`
                ]
            },
            {
                unitMap: true,
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 106,
                lyric: [
                    `You won't always`,
                    {
                        anchor: `have her for your pet.`,
                        annotation: {
                            description: `Despite everything, I really did love Sita, and I never once doubted that the breakup would be wrenching for us both. This is precisely why I kept putting it off, even as putting it off just made things worse.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 111,
                lyric: `Someday she won't be there; someday yet!`
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: [
                            `The bagpipes here evoke a funeral procession. Since I don't own any bagpipes, let alone`,
                            {
                                anchor: `Irish ones,`,
                                wiki: `Uilleann_pipes`
                            },
                            `I mimicked the sound by overdubbing multiple melodica tracks, with one set acting as the chanter, and another as the drone.`
                        ],
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: BRIDGE
            }
        ],
        [
            {
                time: 116,
                lyric: [
                    {
                        anchor: `Final trip on a tanker,`,
                        annotation: [
                            {
                                description: `A tanker is a marine vessel that transports crude oil, but also a drinking spree.`,
                                dotKeys: {
                                    [REFERENCE]: true
                                }
                            },
                            {
                                description: `As part of my plan to start afresh, I made many attempts to stay sober. Since each time was to be my last, I would indulge myself and drink to oblivion, only to repeat the motions several nights later. But after finally mustering the courage to break up with Sita, I really did go for a long stretch without alcohol. My new reality was jarring enough by itself, after all.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true
                                }
                            }
                        ]
                    },
                    `you'll`,
                    {
                        anchor: `drop your anchor`,
                        annotation: {
                            description: `Having mentally attached Sita to every last one of my grievances for so long, all I could feel after the breakup was an eerie serenity, as I could finally drop my "anger." I was no longer resentful, and that was tantamount to feeling happy.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                                [PUN]: true
                            }
                        }
                    }
                ]
            },
            {
                time: 120,
                lyric: `to which you've chained her; she'll sink into`
            },
            {
                time: 123,
                lyric: `the briny end. Now that you're cleansed,`
            },
            {
                time: 126,
                lyric: [
                    `aren't you the`,
                    {
                        anchor: `faltering dear?`,
                        annotation: {
                            description: `With my slate wiped clean, I took pains to affect an endearingly awkward persona, right down to the posture and stammer. I'd been switching social identities for so long that I knew the initial feeling of being a phony would be fleeting. There was an extra layer of hypocrisy this time around, however, which did bother me.`,
                            dotKeys: {
                                [BACKSTORY]: true
                            }
                        }
                    }
                ]
            },
            {
                unitMap: true,
                stanzaType: CHORUS
            }
        ],
        [
            {
                time: 128,
                lyric: [
                    `They told her, "Never help a`,
                    {
                        anchor: `self-abuser`,
                        annotation: [
                            {
                                description: `I had an intermittent habit of cutting myself to deal with emotional distress. Early in our friendship, Sita took a keen interest in my scars, which I interpreted as morbid fascination with my troubled past. In time, I came to see that she was just empathising with a fellow depressive, whose coping mechanisms were curiously different from her own.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                            /**
                             * NOTE: This obscures the greater point of self-harm,
                             * so I'm leaving it out for now.
                             */
                            /**
                            {
                                description: [
                                    `While the term "self-abuse" can refer to literal`,
                                    {
                                        anchor: `self-harm,`,
                                        wiki: `Self-harm`
                                    },
                                    `it's also used in religious circles to describe masturbation. Towards the end, I masturbated frequently to lower my sex drive, hoping that this would strengthen my resolve to break up with Sita.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true
                                }
                            }
                            **/
                        ]
                    }
                ]
            },
            {
                time: 131,
                lyric: [
                    [
                        `see himself`,
                        {
                            anchor: `as well in you."`,
                            annotation: {
                                description: `But my capacity to injure myself also meant that I would have few compunctions about harming anyone close to me. And harm Sita I did.`,
                                dotKeys: {
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                ]
            },
            {
                time: 134,
                lyric: `You'd smite your kitten good, galled that smitten`
            },
            {
                time: 137,
                lyric: `she would opt just not to hear!`
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `After some trial and error, I decided that the counterpoint sounds best when the melodies occupy the same register, allowing them to blend together as a single harmonic layer. At the same time, the ear can still tease them apart due to their different timbres, as is the case with the banjo, fiddle, and tin whistle heard here.`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS,
                subsequent: true
            }
        ],
        [
            {
                time: 139,
                lyric: [
                    {
                        anchor: `Toora-loora-li.`,
                        annotation: {
                            description: `Related to the English "toodle-oo," the Irish "tooraloo" carries the same meaning of "goodbye." Nonsensical variations of it are prevalent in Irish drinking songs and lullabies.`,
                            dotKeys: {
                                [REFERENCE]: true
                            }
                        }
                    },
                    `Garryowen, who owes no one,`
                ]
            },
            {
                time: 145,
                lyric: [
                    `becomes someone's`,
                    {
                        anchor: `last-ditch alibi.`,
                        annotation: {
                            description: `Even as my friends and I were clearly joking to say that it was Garry, and not me, who had committed this or that act of vandalism, on some level I accepted it as the truth. And now, it also wasn't me who had slowly sapped Sita's confidence over the years, leaving her a crumbled wreck. It must have been Garry. I wasn't there.`,
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
                stanzaType: REFRAIN
            }
        ],
        [
            {
                time: 150,
                lyric: `You're a purer lie…`
            },
            {
                unitMap: true,
                stanzaType: REFRAIN,
                subsequent: true
            }
        ],
        [
            {
                time: 162,
                centre: {
                    italic: `(Garry's theme)`
                }
            },
            {
                unitMap: true,
                stanzaType: OUTRO
            }
        ]
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
            workedHours: 2,
            neededHours: 2,
        }
    ]
}
