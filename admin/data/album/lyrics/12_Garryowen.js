import {
    AFTERWORD,
    BACKSTORY,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGWRITING
} from '../../../../app/constants/dots'

import {
    REFRAIN,
    VERSES,
    CHORUS,
    BRIDGE,
    INTRO,
    SOLO,
    OUTRO,
    IS_UNIT_DOT
} from '../../../../app/constants/lyrics'

export default {
    title: 'Garryowen',
    duration: 187,
    overview: `My mood changed when I drank, leading friends to joke that I had a sinister alter ego. It wasn't far from the truth. I was souring on my relationship with Sita by this point, and being drunk provided both an escape and an excuse to act out. But I didn't like myself during such moments. I missed the hapless kid that I still was in my head, and knowing now how to get it right, I longed for a do-over, without the mess this time. And without Sita.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `In`,
                        {
                            isItalic: true,
                            lyric: `Ulysses,`
                        },
                        `Garryowen is the name of a menacing dog owned by a vulgar Irish nationalist. It seemed like a fitting eponym for my drunken self at the time.`
                    ],
                    dotKeys: {
                        [OBSERVATION]: true,
                        [REFERENCE]: true
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
                        lyric: `(Garry's theme)`
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `Since I took the name of my drunken personality from James Joyce's`,
                        {
                            isItalic: true,
                            lyric: `Ulysses,`
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
            }
        },
        {
            unitMap: {
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 17,
                    lyric: [
                        {
                            anchor: `Brushed her off`,
                            todo: true,
                            card: {
                                description: `Whenever Sita could sense that I was withdrawing from our relationship, she would reach out by groveling. And stung by my conscience, I would reach back to comfort her. But as my patience grew thinner over time, I would lash out in passive-aggressive ways, whereupon she would grovel even further. It became all we knew of how to speak for ourselves.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `tonight, to swipe meats and wine`
                    ]
                },
                {
                    time: 20,
                    lyric: [
                        `with your`,
                        {
                            anchor: `crew of cooks and thieves.`,
                            todo: true,
                            cards: [
                                {
                                    description: `During this time, I was staying with some crust punks who were friends of Ana's. Every so often, half of us would go out to shoplift groceries, while the other half would then prepare whatever was brought back for all to share. I was always in the thieving half.`,
                                    dotKeys: {
                                        [BACKSTORY]: true
                                    }
                                },
                                {
                                    wormhole: `crooked_thieves`
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
                            todo: true,
                            card: {
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
                            todo: true,
                            card: {
                                description: `To save money after my lease ended, I put my stuff in storage and alternated between sleeping with Sita and crashing in the basement of the punk house. This gave me the regular comfort of Sita's bed while ensuring that she never held too much leverage over me.`,
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
                    time: 28,
                    lyric: [
                        `Well`,
                        {
                            anchor: `you're not me, Garryowen.`,
                            todo: true,
                            card: {
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
                            todo: true,
                            card: {
                                description: `But this also absolved me of personal responsibility, which became problematic as my actions over time spilled into drunken aggression and misdemeanours.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        },
                        `for this life you've chosen.`
                    ]
                }
            ]
        },
        {
            unitMap: {
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 39,
                    lyric: [
                        `Drunk pissed punks tryst,`,
                        {
                            anchor: `bustin' cars with fists,`,
                            todo: true,
                            card: {
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
                            todo: true,
                            cards: [
                                {
                                    description: `Tristan would lash out in a spastic fury while blacking out, yet be perfectly collected by next morning. I came to see that his chaotic outbursts were in fact meticulously controlled, giving him a strange inner peace, and so I sought to indulge my drunken temper in the same manner.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    wormhole: `lidless_vaseline_sits`
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
                            todo: true,
                            cards: [
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
                            todo: true,
                            cards: [
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
                            todo: true,
                            card: {
                                description: `Throughout our budding friendship, Sita neglected to mention the extent of her sexual intimacy with past partners, even if always shy of intercourse. She tried to console me by pointing out that she never went all the way precisely because she didn't love them. She loved me, and so I had won. But it still stung like crazy to find out so late, and only added to my deepening resentment at the time.`,
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
                    time: 50,
                    lyric: `Well see, Garryowen, now no one,`
                },
                {
                    time: 56,
                    lyric: [
                        {
                            anchor: `buys your grief`,
                            todo: true,
                            card: {
                                description: `My worlds collided when a neighborhood kid who liked my band found out that I had vandalised his friend's bike in a fit of drunken rage. He had related so strongly to my songs about unfulfilled hopes. I was disgusted with myself for disappointing him.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `as the boy unchosen.`
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
                    time: 61,
                    lyric: [
                        `So the`,
                        {
                            anchor: `celibate you'll play,`,
                            todo: true,
                            card: {
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
                            todo: true,
                            card: {
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
                            todo: true,
                            cards: [
                                {
                                    description: `In Hippocratic medicine, choler, or yellow bile, is the humor that induces aggression.`,
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
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `In traditional`,
                        {
                            anchor: `counterpoint,`,
                            wiki: `Counterpoint`
                        },
                        `the harmonic progression is simply a natural byproduct of chords built in sequence from a single melodic line. But since the chords for this song were already in place, I took the reverse approach of taking individual notes from the harmonic progression and linking them to create interweaving melodies.`
                    ],
                    dotKeys: {
                        [REFERENCE]: true,
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: CHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 73,
                    lyric: [
                        `As`,
                        {
                            anchor: `claws you built from scratches,`,
                            todo: true,
                            card: {
                                description: `Cats scratch to keep their claws sharp, just like I had learned to sharpen my emotional defenses after a lifetime of getting scratched and clawed.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true
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
                            todo: true,
                            card: {
                                description: [
                                    `In Biblical times, a community would absolve itself by symbolically placing its`,
                                    {
                                        anchor: `sins on a goat`,
                                        wiki: `Scapegoat`
                                    },
                                    `that was then cast into the desert. For me, banishing Sita from my life served a similar purpose. Without her around to cast judgment, I would never need to own up to my hypocrisy.`
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
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `Though I'd taken violin lessons as a child, my skills were pretty rusty by the time I made this album. Rather than get up to speed through intensified practice, I just recorded the fiddle track here by playing fragments of two or three notes at a time, then splicing them into a single take. To justify my cop-out, I threw in a complicated glissando whenever the score permitted.`,
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: SOLO
            },
            mainVerses: [
                {
                    time: 84,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(bagpipes)`
                    }
                }
            ]
        },
        {
            unitMap: {
                formType: REFRAIN
            },
            mainVerses: [
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
                            todo: true,
                            card: {
                                description: `Sita learned early on that she could always whisk me away for some lovemaking by hovering naked beside me and shivering dramatically from the cold. But as our relationship soured, I grew tired of this brazen appeal to my primal and protective instincts, and drew some cruel pleasure in letting her shiver for ever just a bit longer.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `just to watch her freeze.`
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
                    time: 106,
                    lyric: [
                        `You won't always`,
                        {
                            anchor: `have her for your pet.`,
                            todo: true,
                            card: {
                                description: `Sita's manner of prostrating herself, which forced me to wield an absolute power that I never asked for, was in no small way infuriating. But it was also heartbreakingly endearing, and thus it was guaranteed to make me love her, in the way that one necessarily loves a pet. And love her, I did. So I never doubted that the impending breakup would be equally wrenching for both of us.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 111,
                    lyric: [
                        `Someday`,
                        {
                            anchor: `she won't be there;`,
                            todo: true,
                            card: {
                                description: `But this codependency wasn't just the foundational basis of my love for Sita. It was really all I knew of how to love, period. I would never be asked to love in this way again, certainly not by any of the carefree scenesters whom I pined for after every show. And so it wasn't just cowardice that prevented me from cutting the cord. I genuinely feared whether I could ever truly love anyone else.`,
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        },
                        `someday yet!`
                    ]
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `The bagpipes here evoke a funeral procession. Since I don't own any bagpipes, let alone`,
                        {
                            anchor: `Irish ones,`,
                            wiki: `Uilleann_pipes`
                        },
                        `I mimicked the sound by overdubbing multiple takes of a two-part harmony on the melodica, with one part acting as the chanter, and the other as the drone.`
                    ],
                    dotKeys: {
                        [SONGWRITING]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: CHORUS
            },
            mainVerses: [
                {
                    time: 116,
                    lyric: [
                        {
                            anchor: `Final trip on a tanker,`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `A`,
                                        {
                                            anchor: `tanker`,
                                            wiki: `Tanker_(ship)`
                                        },
                                        `is a marine vessel that transports crude oil. It can also be slang for a drinking spree.`
                                    ]
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
                            todo: true,
                            card: {
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
                            todo: true,
                            card: {
                                description: `With my slate wiped clean, I took pains to affect an endearingly awkward persona, right down to the posture and stammer. I'd been switching social identities for so long that I knew the initial feeling of being a phony would be fleeting. There was an extra layer of hypocrisy this time around, however, which did bother me.`,
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
                formType: CHORUS,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 128,
                    lyric: [
                        `They told her, "Never help a`,
                        {
                            anchor: `self-abuser`,
                            todo: true,
                            cards: [
                                {
                                    description: `I had an intermittent habit of cutting myself to deal with emotional distress. Early in our friendship, Sita took a keen interest in my scars, which I interpreted as morbid fascination with my troubled past. In time, I came to see that she was just sympathizing with a fellow depressive, one whose coping mechanisms were curiously different from her own.`,
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
                                todo: true,
                                card: {
                                    description: `But my capacity to injure myself also meant that I would have few compunctions about harming anyone close to me. And harm Sita, I did.`,
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
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `After some trial and error, I decided that the counterpoint sounds best when the melodies occupy the same register, allowing them to blend together as a single harmonic layer. At the same time, the ear can still tease them apart due to their different timbres, as is the case with the banjo, fiddle, and tin whistle heard here.`,
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
                    time: 139,
                    lyric: [
                        {
                            anchor: `Toora-loora-li.`,
                            todo: true,
                            card: {
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
                            todo: true,
                            card: {
                                description: `Even as my friends and I were clearly joking to say that it was Garry, and not me, who had committed this or that act of vandalism, on some level I accepted it as the truth. And now, it also wasn't me who had slowly sapped Sita's confidence over the years, leaving her a crumbled wreck. It must have been Garry. I wasn't there.`,
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
                formType: REFRAIN,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 150,
                    lyric: `You're a purer lie…`
                }
            ]
        },
        {
            unitMap: {
                formType: OUTRO
            },
            mainVerses: [
                {
                    time: 162,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Garry's theme)`
                    }
                }
            ]
        },
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `After getting rejected by the last record label that had been vetting us, I was so depressed that I went on the bender to end all benders. I eventually kept a box of wine by my bed to calm my nerves throughout the night. One day, upon skipping my morning beers, I felt like the walls were conspiring to attack me. I soon learned that this was the early stage of`,
                        {
                            anchor: `delirium tremens,`,
                            wiki: `Delirium_tremens`
                        },
                        `and began to attend`,
                        {
                            anchor: `Alcoholics Anonymous`,
                            wiki: `Alcoholics_Anonymous`
                        },
                        `meetings. I haven't had a drink since.`
                    ],
                    dotKeys: {
                        [AFTERWORD]: true
                    }
                }
            }
        }
    ]
}
