import {
    AFTERWORD,
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    SONGCRAFT,
} from '../../../../src/constants/dots'

import {
    VERSES,
    CHORUS,
    INTRO,
    SOLO,
    OUTRO,
    FORESHADOW_OF_WORMHOLE_PREFIX,
    IS_UNIT_DOT,
} from '../../../../src/constants/lyrics'

export default {
    title: 'My 100,000th Dream',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `Piano in measure 1`,
    mixStartTime: `0:01:22.94`,
    playerStartTime: 3332.826,
    todo: true,
    problem: `Review one more time.`,
    overview: `After slogging through the day under a cloud of despair, I'd crawl into bed and lie awake until exhaustion overtook me. I'd then dream of reuniting with Sita, only to wake in a panicked sweat as the reality came roaring back that I'd lost her forever. I lived in dread of this cruel trick played by my unconscious mind, and I had no idea when the torment would end. The answer, I feared, was never.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                problem: `Last sentence is awkward.`,
                card: {
                    description: `This is the other song on the album that was an original Yearlings staple. As with "M," I changed the arrangement but kept the lyrics. I suppose it's telling of my relationship with Sita that I only ever wrote one romantic song for her, and it happens to be about my dreams as an old man haunted by regret for having lost her.`,
                    dotKeys: {
                        [BACKSTORY]: true,
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
                card: {
                    description: `During the years afterward when I was trying to be good again, I kept digging further into my past to figure out where things went wrong. So for this song, I decided to revisit the sonic textures of all the other songs on the album in reverse, starting with the piano from "Vegan Proclamation."`,
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
                    lyric: [
                        `My`,
                        {
                            anchor: `hundred thousandth dream`,
                            cards: [
                                {
                                    description: `I read once that we typically have four dreams per night. Over a lifetime of seventy years, that's about a hundred thousand dreams. So here I am, dreaming the very last dream I'll ever dream.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `seventy_years`,
                                        wormholePrefix: FORESHADOW_OF_WORMHOLE_PREFIX,
                                    },
                                },
                            ],
                        },
                        `, I bumped into my Sita.`,
                    ],
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
                            anchor: `El Torito`,
                            properNoun: true,
                            card: {
                                description: [
                                    `Sita worked as a hostess at`,
                                    {
                                        anchor: `El Torito`,
                                        wiki: `El_Torito`,
                                    },
                                    `, a Mexican chain restaurant. I would sometimes pick her up after her shift.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:36:13.32`,
                    lyric: `I said never again we'll slave our whole lives away!`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `We segue into this first verse with the arpeggiated chords from "Cremated," followed by the slide guitar and natural harmonics heard in "On a Golden Cord."`,
                    ],
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
                    mixTime: `0:44:13.32`,
                    lyric: `As pretty as the rainbow, Sita! Sita!`,
                },
                {
                    mixTime: `0:51:16.66`,
                    lyric: [
                        `Did I`,
                        {
                            anchor: `ever live another life`,
                            card: {
                                description: `As dreams often go, I have no memory or even awareness of having lived another life in the intervening years. It's clear that Sita and I haven't stayed together, yet I can't recall any time spent apart. Of course, according to the Buddhist and Hindu faiths, I've lived many other lives quite literally, in past incarnations.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `?`,
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
                card: {
                    description: [
                        `The pulsating`,
                        {
                            anchor: `organ`,
                            wiki: `Electric_organ`,
                        },
                        `and slide mandolin from "Kyon?" make a reappearance in this first chorus, along with the tremolo banjo and`,
                        {
                            anchor: `rubato`,
                            wiki: `Tempo_rubato`,
                        },
                        `recorders from "Uncanny Valley Boy."`,
                    ],
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
                            cards: [
                                {
                                    description: [
                                        `Still wearing the traditional Mexican dress of her hostess uniform, Sita brings me to the`,
                                        {
                                            anchor: `Pampas`,
                                            wiki: `Pampas`,
                                        },
                                        `, the grassy lowlands that span the southern end of South America.`,
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
                            card: {
                                description: [
                                    `In Hindu mythology, the`,
                                    {
                                        anchor: `gopis`,
                                        wiki: `Gopi`,
                                    },
                                    `are cow herdesses who worship the god`,
                                    {
                                        anchor: `Krishna`,
                                        wiki: `Krishna`,
                                    },
                                    `. I don't have a good explanation for what they're doing in Argentina. When I wrote these lyrics, I didn't think I'd need one.`,
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
                card: {
                    description: `Up next in this second verse are the mandolin and tin whistle from "Garryowen," followed by the high-pitched synthesizer and recorder from "Look Back in Anger."`,
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
                card: {
                    description: [
                        `In this second chorus, the`,
                        {
                            anchor: `electric sitar`,
                            wiki: `Electric_sitar`,
                        },
                        `and vintage arcade sound from "Constellations!" reappear, along with the`,
                        {
                            anchor: `carillon`,
                            wiki: `Carillon`,
                        },
                        `and`,
                        {
                            anchor: `wah-wah pedal`,
                            wiki: `Wah-wah_pedal`,
                        },
                        `from "Good Night, Sita."`,
                    ],
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
                        lyric: `(voice synth, Sita's theme)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `The chord progression heard in this bridge, which I call Sita's theme, comes from the bridge in "Grasshoppers Lie Heavy." Musical texture is provided by the arpeggiated Spanish guitar from "M," followed by the melodicas evoking brass fanfare heard in "Pchelka's Starry Journey."`,
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
                            anchor: `cliffs of El Cerrito`,
                            card: {
                                description: [
                                    `The city of`,
                                    {
                                        anchor: `El Cerrito`,
                                        wiki: `El_Cerrito,_California`,
                                    },
                                    `has a sprawling hillside with hiking trails, secluded groves, and a view of the San Francisco Bay. When Sita and I were together, it was our prime choice for a weekend outing.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `,`,
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
                            card: {
                                description: `As these ominous words from Sita wrench me from my bliss, I realize now that this is only a dream. And moreover, it may be my last.`,
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
                card: {
                    description: `This third verse revisits the bowed guitars ending on scratch tones first heard in "Dear Saskia," along with the four-note motif of its refrain. These are then followed by the shrieking whistles and pitch-shifted instruments from "Ash Wednesday."`,
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
                            anchor: `come to take me`,
                            cards: [
                                {
                                    description: `I now understand that Sita is my most cherished memory. And as such, she was always going to be the one chosen by my unconscious mind to ease my fears as I part from this world.`,
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
                        `, Sita! Sita!`,
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
                            anchor: `When you'll be mine`,
                            card: {
                                description: `If this is only a dream, then what I'm holding onto isn't really Sita, but only a memory of her. And if all I have left is a memory, then somewhere along the way I must have lost the real Sita. So as I now exit this world, I hold onto the possibility that I may find her again in the next.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `?`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `The`,
                        {
                            anchor: `electric mandolin`,
                            wiki: `Electric_mandolin`,
                        },
                        `and saturated tape effect from "Odin" return in this third and final chorus, as well as the legato slides on palm-muted instruments from "Willy the Cocoa."`,
                    ],
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
                card: {
                    description: `In New York City I met Liz, with whom things ended no less painfully. So in making this audio webcomic, I was faced with a dilemma. I wanted to stay genuine to the album, given how fresh my wounds were when I'd made it, while being honest that I'd since moved on and was now devastated over a different breakup. My solution was to depict the events as a stage play, with the role of Sita played by an Indian version of Liz. The resulting character looks like neither, which should come as a relief to both.`,
                    dotKeys: {
                        [AFTERWORD]: true,
                    },
                },
            },
        },
    ],
}
