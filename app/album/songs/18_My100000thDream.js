import {
    AFTERWORD,
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    SONGWRITING
} from 'constants/dots'

import {
    VERSES,
    CHORUS,
    INTRO,
    SOLO,
    OUTRO,
    FORESHADOW_OF_WORMHOLE_PREFIX,
    IS_DOT_UNIT
} from 'constants/lyrics'

export default {
    title: 'My 100,000th Dream',
    totalTime: 244,
    overview: `Every night I dreamt of reuniting with Sita, only to wake up in a panicked sweat as the reality came roaring back that I had lost her forever. I would slog through the day under a crushing blanket of despair, then crawl back into bed with dread, awaiting the cruel tricks soon to be played by my subconscious mind. I had no idea when this torment would end. The answer, I feared, was never.`,
    lyricUnits: [
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `I once read that we typically dream four times per night. Over a lifetime, that's about 100,000 dreams. This song, then, is about the very last dream I'll ever dream.`,
                        dotKeys: {
                            [OBSERVATION]: true
                        }
                    }
                }
            }
        },
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `This song is another Yearlings carryover, and was the favourite amongst my friends. I suppose it's telling that when Sita and I were still together, the one song I wrote for her was about the regret I would feel as an old man at having lost her. During the years when I was trying hard to be good again, I kept digging further back into my past to figure out where things went wrong. And so this last song of the album revisits the sonic textures of all the others in reverse, starting here with the piano from "Vegan Proclamation."`,
                        dotKeys: {
                            [BACKSTORY]: true,
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: INTRO
            },
            lyricUnit: [
                {
                    time: 0,
                    isCentre: true,
                    lyric: {
                        isItalic: true,
                        lyric: `(recorders)`
                    }
                }
            ]
        },
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `Next come the arpeggiated chords from "Cremated," followed by the slide guitar and natural harmonics from "On a Golden Cord."`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: VERSES
            },
            lyricUnit: [
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
                                    `a Mexican chain restaurant. I would often pick her up when her shift was over, as I seem to be doing now in my dream.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true
                                }
                            }
                        }
                    ]
                },
                {
                    time: 34,
                    lyric: `I said never again we'll slave our whole lives away!`
                }
            ]
        },
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `The pulsating organ and slide mandolin from "Kyon?" make a reappearance here, along with the tremolo banjo and rubato recorders from "Uncanny Valley Boy."`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS
            },
            lyricUnit: [
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
                                description: `As dreams often go, I have no memory or even awareness of having lived any other life in the intervening years. As far as I know, Sita and I have always been together. Of course, according to the Hindu faith, I might also have lived another life quite literally, in a past incarnation.`,
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
            ]
        },
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `Here, we hear the plucked mandolin and tin whistle from "Garryowen," and the high-pitched synths and recorder from "Look Back in Anger."`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: VERSES
            },
            lyricUnit: [
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
                                        `the grassy lowlands spanning the southeastern end of South America.`
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
                                    `are cow herdesses who are devotees of the god Krishna. I watched a lot of Bollywood movies with Sita, and now my dream is slowly turning into one, as the gopis sing and dance in the background.`
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true
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
            ]
        },
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `The second chorus brings back the electric sitar and 8-bit synth from "Constellations," along with the carillon and wah-wah pedal from "Good Night, Sita."`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS
            },
            lyricUnit: [
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
            ]
        },
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `The chord progression here, which I call Sita's theme, first appeared during the bridge in "Grasshoppers Lie Heavy." Musical texture is provided by the arpeggiated Spanish guitar from "M," followed by the melodicas evoking brass fanfare heard in "Pchelka's Starry Journey."`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: SOLO
            },
            lyricUnit: [
                {
                    time: 135,
                    isCentre: true,
                    lyric: {
                        isItalic: true,
                        lyric: `(Sita's theme)`
                    }
                }
            ]
        },
        {
            unitMap: {
                stanzaType: SOLO,
                subsequent: true
            },
            lyricUnit: [
                {
                    time: 149,
                    isCentre: true,
                    lyric: {
                        isItalic: true,
                        lyric: `(Sita's theme)`
                    }
                }
            ]
        },
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `The third verse revisits the bowed guitars ending on scratch tones first heard in "Dear Saskia," along with the four-note motif that I call Sasha's theme. These are then followed by the shrieking whistles and pitch-shifted instruments from "Ash Wednesday."`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: VERSES
            },
            lyricUnit: [
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
                                    `has a sprawling hillside area with hiking trails, secluded groves, and a great view of the San Francisco Bay. In our happier days, it was one of Sita's habitual choices for a weekend outing.`
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
                                description: `As Sita's ominous tone suddenly wrenches me from my bliss, I realise that I'm in a dream, and moreover, that it may be my last.`,
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
            ]
        },
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `The electric mandolin and saturated tape effect from "Odin" return in the third and final chorus, as well as the legato slides on muted instruments from "Willy the Cocoa."`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: CHORUS
            },
            lyricUnit: [
                {
                    time: 192,
                    lyric: [
                        `She'll always`,
                        {
                            anchor: `come to take me,`,
                            cards: [
                                {
                                    description: `I now understand that Sita, being my most cherished memory, was always going to be the one chosen by my subconscious to help ease my fears as I exit from this world.`,
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
                                description: `If this is only a dream, then the person I'm holding onto is not really Sita, but only a memory of her. And if all I have left is a memory, then somewhere along the way I must have lost the real Sita. As I exit this world, then, I hold onto the possibility that I may find her again in the next.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `And so the final song of the album ends, with the same autoharp and glockenspiel that opened "Didi."`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: OUTRO
            },
            lyricUnit: [
                {
                    time: 223,
                    isCentre: true,
                    lyric: {
                        isItalic: true,
                        lyric: `(Bennett's theme)`
                    }
                }
            ]
        },
        {
            unitMap: {
                dotUnit: {
                    anchor: IS_DOT_UNIT,
                    card: {
                        description: `After the album failed in every possible way, I moved to New York City to start a new life. There I met Liz, my next girlfriend, with whom things ended no less painfully. So I was faced with a dilemma when making this website. I wanted to be faithful to how fresh these wounds were for me at the time, while being honest that I'd since moved on and was now devastated over a different breakup. My solution was to depict the events here as a stage play, and then to draw the Sita character as an Indian version of Liz. The result looks like neither, which hopefully comes as a relief to both.`,
                        dotKeys: {
                            [AFTERWORD]: true
                        }
                    }
                }
            }
        }
    ]
}
