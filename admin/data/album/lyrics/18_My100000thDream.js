import {
    AFTERWORD,
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    SONGCRAFT,
} from '../../../../app/constants/dots'

import {
    VERSES,
    CHORUS,
    INTRO,
    SOLO,
    OUTRO,
    FORESHADOW_OF_WORMHOLE_PREFIX,
    IS_UNIT_DOT,
} from '../../../../app/constants/lyrics'

export default {
    path: 'my-100000th-dream',
    title: 'My 100,000th Dream',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `Piano in measure 1`,
    mixStartTime: `0:01:22.94`,
    playerStartTime: 3332.826,
    overview: `Every night I dreamt of reuniting with Sita, only to wake up in a panicked sweat as the reality came roaring back that I'd lost her forever. I would slog through the day under a crushing blanket of despair, then crawl back into bed with dread, awaiting the cruel tricks soon to be played by my subconscious mind. I had no idea when this torment would end. The answer, I feared, was never.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `I read once that we typically have four dreams per night. Over a lifetime, that's about a hundred thousand dreams. This song, then, is about the very last dream I'll ever dream.`,
                    dotKeys: {
                        [OBSERVATION]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: INTRO,
            },
            mainVerses: [
                {
                    mixTime: null,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(tin whistle and piano)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `This is the second song on this album that was an original Yearlings staple. It might be telling that when Sita and I were still together, the one song I wrote for her was about the regret I'd feel as an old man at having lost her. As with "M," I changed the orchestration but kept the original lyrics.`,
                    dotKeys: {
                        [BACKSTORY]: true,
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `0:16:00.00`,
                    lyric: `My hundred thousandth dream, I bumped into my Sita.`,
                },
                {
                    mixTime: `0:22:06.66`,
                    lyric: `Silent for a while, we searched our eyes,`,
                },
                {
                    mixTime: `0:26:20.00`,
                    lyric: `then we smiled and like old times,`,
                },
                {
                    mixTime: `0:30:06.66`,
                    lyric: [
                        `I took her shoulder as we drove from`,
                        {
                            anchor: `El Torito.`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `Sita worked as a hostess at`,
                                    {
                                        anchor: `El Torito,`,
                                        wiki: `El_Torito`,
                                    },
                                    `a Mexican chain restaurant. I would sometimes pick her up when her shift was over.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:36:13.32`,
                    lyric: `I said never again we'll slave our whole lives away!`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `During the years I was trying hard to be good again, I kept digging further into my past to figure out where things went wrong. And so while the Yearlings performed this song as a`,
                        {
                            anchor: `power trio,`,
                            wiki: `Power_trio`,
                        },
                        `I decided that for this recording, it should revisit the sonic textures of all the other songs on the album in reverse. We start with the piano from "Vegan Proclamation," which segues into the arpeggiated chords from "Cremated," followed by the slide guitar and natural harmonics from "On a Golden Cord."`,
                    ],
                    dotKeys: {
                        [BACKSTORY]: true,
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `0:44:13.32`,
                    lyric: `As pretty as the rainbow, Sita! Sita!`,
                },
                {
                    mixTime: `0:51:16.66`,
                    lyric: [
                        `Did I`,
                        {
                            anchor: `ever live another life?`,
                            todo: true,
                            card: {
                                description: `As dreams often go, I have no memory or even awareness of having lived any other life in the intervening years. It's obvious we haven't stayed together, yet I don't recall any time spent apart. Of course, according to the Buddhist and Hindu faiths, I've lived many other lives quite literally, in past incarnations.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:58:20.00`,
                    lyric: `As precious as a summer, Sita! Sita!`,
                },
                {
                    mixTime: `1:05:23.32`,
                    lyric: `Did I ever live another life?`,
                },
                {
                    mixTime: `1:12:26.66`,
                    lyric: `And were you mine?`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `The pulsating organ and slide mandolin from "Kyon?" make a reappearance here, along with the tremolo banjo and rubato recorders from "Uncanny Valley Boy."`,
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `1:16:13.32`,
                    lyric: `My hundred thousandth dream, I kissed my señorita,`,
                },
                {
                    mixTime: `1:22:20.00`,
                    lyric: [
                        `on the`,
                        {
                            anchor: `Pampas`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Still wearing the traditional Mexican dress of her hostess uniform, Sita brings me to the`,
                                        {
                                            anchor: `Pampas,`,
                                            wiki: `Pampas`,
                                        },
                                        `the grassy lowlands spanning the southeastern end of`,
                                        {
                                            anchor: `South America.`,
                                            wiki: `South_America`,
                                        },
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `pampas`,
                                },
                            ],
                        },
                        `where the`,
                        {
                            anchor: `gopis`,
                            todo: true,
                            card: {
                                description: [
                                    `In Hindu mythology, the`,
                                    {
                                        anchor: `gopis`,
                                        wiki: `Gopi`,
                                    },
                                    `are cow herdesses who are devotees of the god`,
                                    {
                                        anchor: `Krishna.`,
                                        wiki: `Krishna`,
                                    },
                                    `I don't have an explanation for why they're in`,
                                    {
                                        anchor: `Argentina.`,
                                        wiki: `Argentina`,
                                    },
                                    `When I wrote these lyrics, I didn't think I'd need one.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [SONGCRAFT]: true,
                                },
                            },
                        },
                        `played,`,
                    ],
                },
                {
                    mixTime: `1:27:03.32`,
                    lyric: `and the seasons glide away.`,
                },
                {
                    mixTime: `1:30:20.00`,
                    lyric: `I can't remember how or when my heart was Sita's.`,
                },
                {
                    mixTime: `1:36:26.66`,
                    lyric: `We were young, so sure of life, never knowing time unkind!`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `We now hear the plucked mandolin and tin whistle from "Garryowen," followed by the high-pitched synth and recorder from "Look Back in Anger."`,
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `1:44:26.66`,
                    lyric: `I spent a lifetime waiting, Sita! Sita!`,
                },
                {
                    mixTime: `1:52:00.00`,
                    lyric: `Did I ever live another life?`,
                },
                {
                    mixTime: `1:59:03.32`,
                    lyric: `We blow the wind in whistles, Sita! Sita!`,
                },
                {
                    mixTime: `2:06:06.66`,
                    lyric: `Did I ever live another life?`,
                },
                {
                    mixTime: `2:13:10.00`,
                    lyric: `When you were mine?`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `For the second chorus, we bring back the electric sitar and 8-bit sound from "Constellations," along with the carillon and wah-wah pedal from "Good Night, Sita."`,
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: SOLO,
            },
            mainVerses: [
                {
                    mixTime: `2:16:26.66`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(voice synthesizer, Sita's theme)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `The chord progression here, which I call Sita's theme, first appeared during the bridge in "Grasshoppers Lie Heavy." Musical texture is provided by the arpeggiated Spanish guitar from "M," followed by the melodicas evoking brass fanfare heard in "Pchelka's Starry Journey."`,
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: SOLO,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `2:31:03.32`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(choir, Sita's theme)`,
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `2:45:10.00`,
                    lyric: [
                        `My hundred thousandth dream, on the`,
                        {
                            anchor: `cliffs of El Cerrito,`,
                            todo: true,
                            card: {
                                description: [
                                    `The city of`,
                                    {
                                        anchor: `El Cerrito`,
                                        wiki: `El_Cerrito,_California`,
                                    },
                                    `has a sprawling hillside area with hiking trails, secluded groves, and a great view of the San Francisco Bay. In my happier days with Sita, it was one of our prime choices for a weekend outing.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:51:16.66`,
                    lyric: `she says now it's dark and getting late,`,
                },
                {
                    mixTime: `2:56:00.00`,
                    lyric: `but we'll always have today.`,
                },
                {
                    mixTime: `2:59:16.66`,
                    lyric: [
                        `Why does my`,
                        {
                            anchor: `last thought`,
                            todo: true,
                            card: {
                                description: `As Sita's ominous tone wrenches me from my bliss, I realize I'm in a dream. And moreover, it may be my last.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `in this world belong to Sita?`,
                    ],
                },
                {
                    mixTime: `3:05:23.32`,
                    lyric: `Now the light spills warm and bright… gently fills these eyes…`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `The third verse revisits the bowed guitars ending on scratch tones first heard in "Dear Saskia," along with the four-note motif of its refrain. These are then followed by the shrieking whistles and pitch-shifted instruments from "Ash Wednesday."`,
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `3:13:23.32`,
                    lyric: [
                        `She'll always`,
                        {
                            anchor: `come to take me,`,
                            todo: true,
                            cards: [
                                {
                                    description: `I now understand that Sita is my most cherished memory. And as such, she was always going to be the one chosen by my subconscious to ease my fears as I part from this world.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `dreams_of_whom`,
                                        wormholePrefix: FORESHADOW_OF_WORMHOLE_PREFIX,
                                    },
                                },
                            ],
                        },
                        `Sita! Sita!`,
                    ],
                },
                {
                    mixTime: `3:20:26.66`,
                    lyric: `Will I ever live another life?`,
                },
                {
                    mixTime: `3:28:00.00`,
                    lyric: `Real or imaginary, Sita! Sita!`,
                },
                {
                    mixTime: `3:35:03.32`,
                    lyric: `Will I ever live another life?`,
                },
                {
                    mixTime: `3:42:06.66`,
                    lyric: [
                        {
                            anchor: `When you'll be mine?`,
                            todo: true,
                            card: {
                                description: `If this is only a dream, then what I'm holding onto is not really Sita, but only a memory of her. And if all I have left is a memory, then somewhere along the way I must have lost the real Sita. As I exit this world, then, I hold onto the possibility that I may find her again in the next.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `The electric mandolin and saturated tape effect from "Odin" return in the third and final chorus, as well as the legato slides on muted instruments from "Willy the Cocoa."`,
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: OUTRO,
            },
            mainVerses: [
                {
                    mixTime: `3:45:23.32`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(glockenspiel and acoustic guitar, Bennett's theme)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `And so this final song of the album ends, with the same autoharp and glockenspiel that opened "Didi."`,
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `In New York City I met Liz, with whom things ended no less painfully. So in making this audio webcomic, I was faced with a dilemma. I wanted to stay genuine to the album, given how fresh my wounds were when I made it, while being honest that I'd since moved on and was now devastated over a different breakup. My solution was to depict the events as a stage play, with the role of Sita played by an Indian version of Liz. The resulting character looks like neither, which should come as a relief to both.`,
                    dotKeys: {
                        [AFTERWORD]: true,
                    },
                },
            },
        },
    ],
}
