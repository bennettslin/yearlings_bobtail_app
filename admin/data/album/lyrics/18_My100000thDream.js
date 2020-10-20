import {
    AFTERWORD,
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    SONGCRAFT
} from '../../../../app/constants/dots'

import {
    VERSES,
    CHORUS,
    INTRO,
    SOLO,
    OUTRO,
    FORESHADOW_OF_WORMHOLE_PREFIX,
    IS_UNIT_DOT
} from '../../../../app/constants/lyrics'

export default {
    title: 'My 100,000th Dream',
    duration: 244,
    overview: `Every night I dreamt of reuniting with Sita, only to wake up in a panicked sweat as the reality came roaring back that I'd lost her forever. I would slog through the day under a crushing blanket of despair, then crawl back into bed with dread, awaiting the cruel tricks soon to be played by my subconscious mind. I had no idea when this torment would end. The answer, I feared, was never.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `I read once that we typically have four dreams per night. Over a lifetime, that's about a hundred thousand dreams. This song, then, is about the very last dream I'll ever dream.`,
                    dotKeys: {
                        [OBSERVATION]: true
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
                        lyric: `(recorders)`
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `This is the second song on this album that was an original Yearlings staple. It might be telling that when Sita and I were still together, the one song I wrote for her was about the regret I'd feel as an old man at having lost her. As with "M," I changed the orchestration but kept the original lyrics.`,
                    dotKeys: {
                        [BACKSTORY]: true,
                        [SONGCRAFT]: true
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
                    time: 13,
                    lyric: `My hundred thousandth dream, I bumped into my Sita.`
                },
                {
                    time: 19,
                    lyric: `Silent for a while, we searched our eyes,`
                },
                {
                    time: 23,
                    lyric: `then we smiled and like old times,`
                },
                {
                    time: 27,
                    lyric: [
                        `I took her shoulder as we drove from`,
                        {
                            anchor: `El Torito.`,
                            properNoun: true,
                            card: {
                                description: [
                                    `Sita worked as a hostess at`,
                                    {
                                        anchor: `El Torito,`,
                                        wiki: `El_Torito`
                                    },
                                    `a Mexican chain restaurant. I would sometimes pick her up when her shift was over.`
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
                    lyric: `I said never again we'll slave our whole lives away!`
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `During the years I was trying hard to be good again, I kept digging further into my past to figure out where things went wrong. And so while the Yearlings performed this song as a`,
                        {
                            anchor: `power trio,`,
                            wiki: `Power_trio`
                        },
                        `I decided that for this recording, it should revisit the sonic textures of all the other songs on the album in reverse. We start with the piano from "Vegan Proclamation," which segues into the arpeggiated chords from "Cremated," followed by the slide guitar and natural harmonics from "On a Golden Cord."`
                    ],
                    dotKeys: {
                        [BACKSTORY]: true,
                        [SONGCRAFT]: true
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
                    time: 43,
                    lyric: `As pretty as the rainbow, Sita! Sita!`
                },
                {
                    time: 49,
                    lyric: [
                        `Did I`,
                        {
                            anchor: `ever live another life?`,
                            card: {
                                description: `As dreams often go, I have no memory or even awareness of having lived any other life in the intervening years. It's obvious we haven't stayed together, yet I don't recall any time spent apart. Of course, according to the Buddhist and Hindu faiths, I've lived many other lives quite literally, in past incarnations.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 56,
                    lyric: `As precious as a summer, Sita! Sita!`
                },
                {
                    time: 63,
                    lyric: `Did I ever live another life?`
                },
                {
                    time: 70,
                    lyric: `And were you mine?`
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `The pulsating organ and slide mandolin from "Kyon?" make a reappearance here, along with the tremolo banjo and rubato recorders from "Uncanny Valley Boy."`,
                    dotKeys: {
                        [SONGCRAFT]: true
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
                    time: 74,
                    lyric: `My hundred thousandth dream, I kissed my señorita,`
                },
                {
                    time: 80,
                    lyric: [
                        `on the`,
                        {
                            anchor: `Pampas`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `Still wearing the traditional Mexican dress of her hostess uniform, Sita brings me to the`,
                                        {
                                            anchor: `Pampas,`,
                                            wiki: `Pampas`
                                        },
                                        `the grassy lowlands spanning the southeastern end of`,
                                        {
                                            anchor: `South America.`,
                                            wiki: `South_America`
                                        }
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true
                                    }
                                },
                                {
                                    wormhole: `pampas`
                                }
                            ]
                        },
                        `where the`,
                        {
                            anchor: `gopis`,
                            card: {
                                description: [
                                    `In Hindu mythology, the`,
                                    {
                                        anchor: `gopis`,
                                        wiki: `Gopi`
                                    },
                                    `are cow herdesses who are devotees of the god`,
                                    {
                                        anchor: `Krishna.`,
                                        wiki: `Krishna`
                                    },
                                    `I don't have an explanation for why they're in`,
                                    {
                                        anchor: `Argentina.`,
                                        wiki: `Argentina`
                                    },
                                    `When I wrote these lyrics, I didn't think I'd need one.`
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [SONGCRAFT]: true
                                }
                            }
                        },
                        `played,`
                    ]
                },
                {
                    time: 84,
                    lyric: `and the seasons glide away.`
                },
                {
                    time: 89,
                    lyric: `I can't remember how or when my heart was Sita's.`
                },
                {
                    time: 94,
                    lyric: `We were young, so sure of life, never knowing time unkind!`
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `We now hear the plucked mandolin and tin whistle from "Garryowen," followed by the high-pitched synth and recorder from "Look Back in Anger."`,
                    dotKeys: {
                        [SONGCRAFT]: true
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
                    time: 103,
                    lyric: `I spent a lifetime waiting, Sita! Sita!`
                },
                {
                    time: 110,
                    lyric: `Did I ever live another life?`
                },
                {
                    time: 117,
                    lyric: `We blow the wind in whistles, Sita! Sita!`
                },
                {
                    time: 124,
                    lyric: `Did I ever live another life?`
                },
                {
                    time: 131,
                    lyric: `When you were mine?`
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `For the second chorus, we bring back the electric sitar and 8-bit sound from "Constellations," along with the carillon and wah-wah pedal from "Good Night, Sita."`,
                    dotKeys: {
                        [SONGCRAFT]: true
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
                    time: 135,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Sita's theme)`
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `The chord progression here, which I call Sita's theme, first appeared during the bridge in "Grasshoppers Lie Heavy." Musical texture is provided by the arpeggiated Spanish guitar from "M," followed by the melodicas evoking brass fanfare heard in "Pchelka's Starry Journey."`,
                    dotKeys: {
                        [SONGCRAFT]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: SOLO,
                subsequent: true
            },
            mainVerses: [
                {
                    time: 149,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Sita's theme)`
                    }
                }
            ]
        },
        {
            unitMap: {
                formType: VERSES
            },
            mainVerses: [
                {
                    time: 163,
                    lyric: [
                        `My hundred thousandth dream, on the`,
                        {
                            anchor: `cliffs of El Cerrito,`,
                            card: {
                                description: [
                                    `The city of`,
                                    {
                                        anchor: `El Cerrito`,
                                        wiki: `El_Cerrito,_California`
                                    },
                                    `has a sprawling hillside area with hiking trails, secluded groves, and a great view of the San Francisco Bay. In my happier days with Sita, it was one of our prime choices for a weekend outing.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 169,
                    lyric: `she says now it's dark and getting late,`
                },
                {
                    time: 174,
                    lyric: `but we'll always have today.`
                },
                {
                    time: 178,
                    lyric: [
                        `Why does my`,
                        {
                            anchor: `last thought`,
                            card: {
                                description: `As Sita's ominous tone wrenches me from my bliss, I realize I'm in a dream. And moreover, it may be my last.`,
                                dotKeys: {
                                    [NARRATIVE]: true
                                }
                            }
                        },
                        `in this world belong to Sita?`
                    ]
                },
                {
                    time: 183,
                    lyric: `Now the light spills warm and bright… gently fills these eyes…`
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `The third verse revisits the bowed guitars ending on scratch tones first heard in "Dear Saskia," along with the four-note motif that I call Sasha's theme. These are then followed by the shrieking whistles and pitch-shifted instruments from "Ash Wednesday."`,
                    dotKeys: {
                        [SONGCRAFT]: true
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
                    time: 192,
                    lyric: [
                        `She'll always`,
                        {
                            anchor: `come to take me,`,
                            cards: [
                                {
                                    description: `I now understand that Sita is my most cherished memory. And as such, she was always going to be the one chosen by my subconscious to ease my fears as I part from this world.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true
                                    }
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `dreams_of_whom`,
                                        wormholePrefix: FORESHADOW_OF_WORMHOLE_PREFIX
                                    }
                                }
                            ]
                        },
                        `Sita! Sita!`
                    ]
                },
                {
                    time: 199,
                    lyric: `Will I ever live another life?`
                },
                {
                    time: 206,
                    lyric: `Real or imaginary, Sita! Sita!`
                },
                {
                    time: 213,
                    lyric: `Will I ever live another life?`
                },
                {
                    time: 220,
                    lyric: [
                        {
                            anchor: `When you'll be mine?`,
                            card: {
                                description: `If this is only a dream, then what I'm holding onto is not really Sita, but only a memory of her. And if all I have left is a memory, then somewhere along the way I must have lost the real Sita. As I exit this world, then, I hold onto the possibility that I may find her again in the next.`,
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
                    description: `The electric mandolin and saturated tape effect from "Odin" return in the third and final chorus, as well as the legato slides on muted instruments from "Willy the Cocoa."`,
                    dotKeys: {
                        [SONGCRAFT]: true
                    }
                }
            }
        },
        {
            unitMap: {
                formType: OUTRO
            },
            mainVerses: [
                {
                    time: 223,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Bennett's theme)`
                    }
                }
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `And so this final song of the album ends, with the same autoharp and glockenspiel that opened "Didi."`,
                    dotKeys: {
                        [SONGCRAFT]: true
                    }
                }
            }
        },
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `In New York City I met Liz, with whom things ended no less painfully. So in making this audio webcomic, I was faced with a dilemma. I wanted to stay genuine to the album, given how fresh my wounds were when I made it, while being honest that I'd since moved on and was now devastated over a different breakup. My solution was to depict the events as a stage play, with the role of Sita played by an Indian version of Liz. The resulting character looks like neither, which should come as a relief to both.`,
                    dotKeys: {
                        [AFTERWORD]: true
                    }
                }
            }
        }
    ]
}
