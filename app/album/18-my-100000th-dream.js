import { INSTRUMENTAL, VERSES, CHORUS, SONGWRITING, NARRATIVE, BACKSTORY, OBSERVATION, DOT_STANZA_CONSTANT } from 'helpers/constants'

module.exports = {
    title: {
        anchor: `My 100,000th Dream`,
        annotation: {
            description: `I once read that we typically dream four times per night. Over a lifetime, that's about 100,000 dreams. This song, then, is about the very last dream I'll ever dream.`,
            dotKeys: {
                [OBSERVATION]: true
            }
        }
    },
    scenes: [
        {
            verseIndex: 0,
            description: `Bennett runs into Sita, who happens to be walking out of an El Torito restaurant, having finished her shift.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'todo'
                },
                sita: {
                    todo: true,
                    description: 'todo'
                }
            }
        },
        {
            verseIndex: 7,
            description: `Bennett and Sita are dancing on the pampas with some gopis.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'todo'
                },
                sita: {
                    todo: true,
                    description: 'todo'
                },
                catherine: {
                    gopi: {
                        todo: true,
                        description: 'todo'
                    }
                },
                mara: {
                    gopi: {
                        todo: true,
                        description: 'todo'
                    }
                },
                miriam: {
                    gopi: {
                        todo: true,
                        description: 'todo'
                    }
                },
            }
        },
        {
            verseIndex: 17,
            description: `In the background is an Indian wedding. Bennett is confused, because the bride appears to be Sita. But his Sita keeps dragging him forward, insistently.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'todo'
                },
                sita: {
                    todo: true,
                    description: 'todo'
                }
            }
        },
        {
            verseIndex: 23,
            description: `Sita and Bennett are at the edge of a cliff. Bennett is frightened. Sita is gesturing towards the edge.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'todo'
                },
                sita: {
                    todo: true,
                    description: 'todo'
                }
            }
        },
        {
            verseIndex: 28,
            description: `The whole thing turns out to have been a dream. Bennett is in bed, old and decrepit. A thought bubble shows the previous scene, with Bennett now accepting his fate, and Sita comforting him.`,
            actors: {
                bennett: {
                    todo: true,
                    description: 'todo'
                }
            }
        }
    ],
    tip: {
        description: 'placeholder tip'
    },
    totalTime: 244,
    overview: `Every night I dreamt of reuniting with Sita, only to wake up in a panicked sweat as the reality came roaring back that I had lost her forever. I would slog through the day under a crushing blanket of despair, then crawl back into bed with dread, awaiting the cruel tricks soon to be played by my subconscious mind. I had no idea when this torment would end. The answer, I feared, was never.`,
    lyrics: [
        [
            {
                time: 0,
                centre: {
                    italic: `(intro)`
                }
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `This song is another Yearlings carryover, and was the favourite amongst my friends. I suppose it's telling that when Sita and I were still together, the one song I wrote for her was about the regret I would feel as an old man at having lost her. During the years when I was trying hard to be good again, I kept digging further back into my past to figure out where things went wrong. And so this last song of the album revisits the sonic textures of all the others in reverse, starting here with the piano from "Vegan Proclamation."`,
                        dotKeys: {
                            [BACKSTORY]: true,
                            [OBSERVATION]: true,
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: INSTRUMENTAL
            }
        ],
        [
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
                        annotation: {
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
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `Next comes the arpeggiated chords from "Cremated," followed by the slide guitar and natural harmonics from "On a Golden Cord."`,
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
                time: 43,
                lyric: `As pretty as the rainbow, Sita! Sita!`
            },
            {
                time: 49,
                lyric: [
                    `Did I`,
                    {
                        anchor: `ever live another life?`,
                        annotation: {
                            description: `As dreams often go, I have no memory or even awareness of having lived any other life in the intervening years. As far as I know, Sita and I have always been together. Of course, according to Sita's Hindu faith, I might also have lived another life quite literally, in a past incarnation.`,
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
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `The pulsating organ and slide mandolin from "Kyon?" make a reappearance here, along with the tremolo banjo and rubato recorders from "Uncanny Valley Boy."`,
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
                        annotation: {
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
                            },
                            portal: `pampas`
                        }
                    },
                    `where the`,
                    {
                        anchor: `gopis`,
                        annotation: {
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
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `Here, we hear the plucked mandolin and tin whistle from "Garryowen," and the high-pitched synths and recorder from "Look Back in Anger."`,
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
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `The second chorus brings back the electric sitar and 8-bit synth from "Constellations," along with the carillon and wah-wah pedal from "Good Night, Sita."`,
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
                time: 135,
                centre: {
                    italic: `(solo)`
                }
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `The chord progression here, which I call Sita's theme, first appeared during the bridge in "Grasshoppers Lie Heavy." Musical texture is provided by the arpeggiated Spanish guitar from "M," followed by the melodicas evoking brass fanfare heard in "Pchelka's Starry Journey."`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: INSTRUMENTAL
            }
        ],
        [
            {
                time: 163,
                lyric: [
                    `My hundred thousandth dream, on the`,
                    {
                        anchor: `cliffs of El Cerrito,`,
                        annotation: {
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
                        annotation: {
                            description: `As Sita's ominous tone wrenches me from my bliss, I suddenly realise that I'm in a dream, and moreover, that it may be my last.`,
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
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `The third verse revisits the bowed guitars ending on scratch tones first heard in "Dear Saskia," along with the four-note motif that I call Sasha's theme. These are then followed by the shrieking whistles and pitch-shifted instruments from "Ash Wednesday."`,
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
                time: 192,
                lyric: [
                    `She'll always`,
                    {
                        anchor: `come to take me,`,
                        annotation: {
                            description: `I now understand that Sita, being my most cherished memory, was always going to be the one to ease my fears and accompany me as I exited from this world.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true
                            }
                        }
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
                        annotation: {
                            description: `If this is only a dream, then the person I'm holding onto is not really Sita, but only a memory of her. And if all I have left is a memory, then somewhere along the way I must have lost the real Sita. As I exit this world, then, I hold onto the possibility that I may find her again in the next.`,
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
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `The electric mandolin and saturated tape effect from "Odin" return in the third and final chorus, as well as the legato slides on muted instruments from "Willy the Cocoa."`,
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
                time: 223,
                centre: {
                    italic: `(outro)`
                }
            },
            {
                unitMap: true,
                dotStanza: {
                    anchor: DOT_STANZA_CONSTANT,
                    annotation: {
                        description: `And so the final song of the album ends, with the same autoharp and glockenspiel that opened "Didi."`,
                        dotKeys: {
                            [SONGWRITING]: true
                        }
                    }
                },
                stanzaType: INSTRUMENTAL
            }
        ],
    ],
    tasks: [
        {
            taskName: `afterword annotations`,
            workedHours: 0,
            neededHours: 1
        },
        {
            taskName: `sort out past and present tense`,
            workedHours: 0,
            neededHours: 3
        },
        {
            taskName: `annotations`,
            workedHours: 12,
            neededHours: 12
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
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `review synopses and rough illustrations`,
            workedHours: 2,
            neededHours: 2
        },
        {
            taskName: `music annotations`,
            workedHours: 3,
            neededHours: 3
        }
    ]
}
