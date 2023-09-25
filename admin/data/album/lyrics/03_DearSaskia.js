import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    AFTERWORD,
    SONGCRAFT,
} from '../../../../src/constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    REFRAIN,
    IS_UNIT_DOT,
} from '../../../../src/constants/lyrics'

export default {
    title: 'Dear Saskia',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     *
     * mST - mRT + pRT = pST
     * 0.1 - 5.762 + 389.901 => 384.329
     */
    referenceDescription: `"Dearest" in measure 3`,
    mixReferenceTime: `0:05:22.86`,
    mixStartTime: `0:00:03.00`,
    playerReferenceTime: 389.901,
    playerStartTime: 384.329,
    // This is a magic number adjusted by ear. In the mix, it's actually 44.96.
    mixSamplingFrequency: 45.39,
    overview: `Sasha was a childhood friend as well as my first crush. The strength she drew from her Jewish identity fascinated me, but it also clued me in on a cruel paradox. Namely, that no good comes from longing to share in someone's faith and roots, which stay strong precisely by not being shared. Sasha moved away during middle school at the peak of my struggles with bullies. That summer, I wrote her a letter on a family trip to Taiwan.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `Sasha's given name was actually Saskia. But because this was difficult for other children to pronounce, she'd gone by the nickname of Sasha her whole life.`,
                    dotKeys: {
                        [BACKSTORY]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: null,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(bowed dobro and piano, Sasha's theme)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                problem: `Reverse order of sounding labored and not knowing what to do with it.`,
                card: {
                    description: [
                        `As a teenager, I tried to figure out the songwriting secrets of the`,
                        {
                            anchor: `Beatles`,
                            wiki: `The_Beatles`,
                        },
                        `, which is how I came up with the music heard here. I wasn't sure what to do with it at the time; the chords and melodies sounded so labored, and all my fixes made it worse. But years later, I realized that the sound of being labored to death was exactly what a song about an overwrought letter to Sasha called for.`,
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
                    mixTime: `0:05:23.34`,
                    lyricCentre: `Dearest Sasha,`,
                },
            ],
        },
        {
            unitMap: {
                formType: VERSES,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `0:07:06.69`,
                    lyric: [
                        `It's nearing autumn here with`,
                        {
                            anchor: `record highs`,
                            card: {
                                description: `It's hard to write a letter. But one can always start by talking about the weather.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:11:02.26`,
                    lyric: `Is it searing in Boston? Hope this letter finds`,
                },
                {
                    mixTime: `0:14:13.39`,
                    lyric: [
                        `your`,
                        {
                            anchor: `first semester`,
                            card: {
                                description: `My family was spending the entire summer in Taiwan. We weren't to get back to the States until after Sasha began the new school year in Boston.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `fine while I'm out of town…`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `I wanted the vocals for this song to sound sickly, so I held off on recording them until I came down with a cold. Which was guaranteed to happen at some point during the five years I spent recording this album.`,
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: VERSES,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `0:19:07.84`,
                    lyric: [
                        {
                            anchor: `You'd love Taiwan`,
                            card: {
                                description: `During a tour of the Taiwanese countryside with my cousins, I mentally noted all the things I could point out to Sasha one day. I'm not sure it had to do with pride in my heritage. I just liked the idea of having something to share with someone else.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, surrounded by walls of mountains,`,
                    ],
                },
                {
                    mixTime: `0:24:16.76`,
                    lyric: `their peaks sealed and shielded by foggy clouds.`,
                },
                {
                    mixTime: `0:27:27.88`,
                    lyric: `Beneath this ceiling yields the scene a reeling feel`,
                },
                {
                    mixTime: `0:31:23.45`,
                    lyric: [
                        `of some`,
                        {
                            anchor: `giant's house`,
                            card: {
                                description: `In my most vivid memory from that trip, we stood in the middle of a lush valley. The ground around us was entirely level, the enclosing mountains rose nearly vertically, and their peaks disappeared into a translucent blanket of clouds stretched across the sky. I felt like a tiny guest in a giant house.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `0:34:20.13`,
                    lyric: `So… before I left, you said`,
                },
                {
                    mixTime: `0:39:00.25`,
                    lyric: [
                        `I should`,
                        {
                            anchor: `keep your kid name`,
                            card: {
                                description: `Sasha decided that in Boston, she would go by her given name. I asked if I should start calling her Saskia now as well. She said no, since it was nice to be reminded of which friends knew her first.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `, with everything it meant.`,
                    ],
                },
                {
                    mixTime: `0:42:25.85`,
                    lyric: [
                        `But then in`,
                        {
                            anchor: `your embrace`,
                            card: {
                                description: `But it's no comfort to be cherished as an old friend by someone so visibly eager to dive into the new. As we hugged on the last day of school, Sasha was just about ready to throw off her old skin and scamper away.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, I felt you`,
                        {
                            anchor: `prepped to shed`,
                            card: {
                                description: [
                                    `Sasha is prepped in more than one sense, since she's preparing to begin enrollment at a`,
                                    {
                                        anchor: `preparatory school`,
                                        wiki: `College-preparatory_school`,
                                    },
                                    `in Boston.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `…`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `0:50:02.54`,
                    lyric: [
                        `And I'd reflect inside`,
                        {
                            anchor: `withering`,
                            card: {
                                wormhole: `withering`,
                            },
                        },
                        {
                            anchor: `amber eyes`,
                            card: {
                                description: [
                                    `Sasha's eyes were of an amber color. But`,
                                    {
                                        anchor: `amber`,
                                        wiki: `Amber`,
                                    },
                                    `also refers to fossilized tree resin, which can preserve the remains of trapped insects from epochs past.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `—`,
                    ],
                },
                {
                    mixTime: `0:54:27.01`,
                    lyric: [
                        {
                            anchor: `your pupil's pupal fly`,
                            card: {
                                description: [
                                    `Reflecting on my feelings for Sasha, I recall our last day together, when I caught my reflection in the`,
                                    {
                                        anchor: `pupil`,
                                        wiki: `Pupil`,
                                    },
                                    `of her eye. She looked at me the way a teacher looks upon a pupil. I could see we were no longer on the same footing, if we'd ever been.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `, a`,
                        {
                            anchor: `pet petrified`,
                            card: {
                                description: [
                                    `Petrified by the thought of losing Sasha, I felt like a`,
                                    {
                                        anchor: `pupa`,
                                        wiki: `Pupa`,
                                    },
                                    `petrified into a fossil before it had a chance to molt.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `—`,
                    ],
                },
                {
                    mixTime: `0:58:22.58`,
                    lyric: [
                        `with you raving over how`,
                        {
                            anchor: `he's getting you`,
                            card: {
                                description: [
                                    `Every boy that Sasha crushed on was`,
                                    {
                                        anchor: `Jewish`,
                                        wiki: `Judaism`,
                                    },
                                    `, which then motivated her to be a better Jew. But I could never help strengthen her faith myself, so I would always be at a disadvantage in "getting" her.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:07:12.60`,
                    lyric: [
                        `staying kosher. Though, you know,`,
                        {
                            anchor: `I would have too`,
                            card: {
                                description: `Yet if Sasha were to want me, then of course I'd convert to Judaism. It made no sense to be loyal to my own cultural identity, which I'd had no hand in choosing.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `…`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `To match the passive-aggressive mood of the lyrics, the sentimental string harmonies in the chorus abruptly give way to`,
                        {
                            anchor: `scratch tones`,
                            wiki: `Bowed_string_instrument_extended_technique`,
                        },
                        `and`,
                        {
                            anchor: `woodwind screeches`,
                            wiki: `Overblowing`,
                        },
                        `.`,
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: `1:13:15.03`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(piano and violins, Sasha's theme)`,
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
                    mixTime: `1:16:11.71`,
                    lyric: [
                        `And I sniffled daily when you`,
                        {
                            anchor: `skipped a grade`,
                            card: {
                                description: [
                                    `I panicked when Sasha was allowed to`,
                                    {
                                        anchor: `skip a grade`,
                                        wiki: `Grade_skipping`,
                                    },
                                    `, as this opened new vistas for her that necessarily excluded me. I continued to be reminded of this in middle school, as Sasha effortlessly navigated the same social landscape that I found so treacherous.`,
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
                    mixTime: `1:20:07.28`,
                    lyric: [
                        `One`,
                        {
                            anchor: `bus seat`,
                            card: {
                                description: [
                                    `My family lived in`,
                                    {
                                        anchor: `North Hollywood`,
                                        wiki: `North_Hollywood,_Los_Angeles`,
                                    },
                                    `, a racially diverse and working-class neighborhood. Halfway through elementary school, my mother devised a ruse that allowed me and my sister to bus into`,
                                    {
                                        anchor: `Sherman Oaks`,
                                        wiki: `Sherman_Oaks,_Los_Angeles`,
                                    },
                                    `, a wealthy district with fewer minorities. I remember feeling out of my element at the time, though I didn't quite know why.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `up you moved, letting rippled braids`,
                    ],
                },
                {
                    mixTime: `1:24:02.85`,
                    lyric: [
                        `caress, sun-streaked and loose, a`,
                        {
                            anchor: `wet-cheeked papoose`,
                            card: {
                                description: [
                                    `Here, I recall an afternoon bus ride when Sasha sat in front of me. As her hair blew in my face, I felt like a`,
                                    {
                                        anchor: `papoose`,
                                        wiki: `Papoose`,
                                    },
                                    `strapped to his mother's back, in anguish over having to start walking on his own.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:27:28.42`,
                    lyric: `sadly weaned from you…`,
                },
            ],
        },
        {
            unitMap: {
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `1:30:25.09`,
                    lyric: `Whom I knew I'd lose the day`,
                },
                {
                    mixTime: `1:35:05.11`,
                    lyric: `you flew enraged and shooed them from their game;`,
                },
                {
                    mixTime: `1:39:00.69`,
                    lyric: [
                        `untied this "`,
                        {
                            anchor: `tetherboy`,
                            cards: [
                                {
                                    description: [
                                        `As I continue to write this letter, I recall an incident when Sasha came to my rescue after some bullies had tied me to a "`,
                                        {
                                            anchor: `tetherball`,
                                            wiki: `Tetherball`,
                                        },
                                        `" pole.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Some overprotective parents strap their toddlers into a`,
                                        {
                                            anchor: `harness`,
                                            wiki: `Child_harness`,
                                        },
                                        `for safety. As such, older children who can't fend for themselves might be mocked by their peers as having been kept on a tether their whole lives.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                        `," soothing in your lecture voice.`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: PRECHORUS,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `1:46:07.38`,
                    lyric: [
                        `Oh but Sasha, if`,
                        {
                            anchor: `anarchy reigns`,
                            card: {
                                description: `It was weird to be taught in history class that anarchy devolves into tyranny, only to then wander onto the quad and see this very phenomenon in action.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `1:50:17.41`,
                    lyric: [
                        `then no one lives when`,
                        {
                            anchor: `narcing to the aides`,
                            card: {
                                description: [
                                    `To narc is to snitch, as an`,
                                    {
                                        anchor: `informant`,
                                        wiki: `Informant`,
                                    },
                                    `does in a narcotics investigation.`,
                                ],
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `1:54:13.07`,
                    lyric: [
                        `who shrug when thus annoyed, yawning, "`,
                        {
                            anchor: `Boys will beat boys`,
                            card: {
                                description: [
                                    `Of course, it's more common to say that boys will "`,
                                    {
                                        isItalic: true,
                                        lyric: `be`,
                                    },
                                    `" boys, but the one naturally follows the other. It surprised me when school aides declined to intervene on behalf of the victims of bullying, as if such predation were vital to the middle school ecosystem.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `…"`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `2:02:18.69`,
                    lyric: `Well Sasha… okay, you saw the cuts.`,
                },
                {
                    mixTime: `2:06:14.27`,
                    lyric: [
                        `But though my`,
                        {
                            anchor: `jaw was stuck`,
                            card: {
                                description: `Here, I refer to another incident when a bully snuck up from behind and put me in a chokehold as I waited for the school bus.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `, so now I`,
                        {
                            anchor: `talk Canuck`,
                            card: {
                                description: [
                                    `The chokehold incident left me with a dislocated jaw. For a long time afterward, I had to keep my jaw clenched to avoid pain when speaking. This led to my odd manner of pronunciation, which to this day gets mistaken for a`,
                                    {
                                        anchor: `Canadian accent`,
                                        wiki: `Canadian_raising`,
                                    },
                                    `.`,
                                    {
                                        anchor: `Canadians`,
                                        wiki: `Canada`,
                                    },
                                    `, of course, are affectionately known as`,
                                    {
                                        anchor: `Canucks`,
                                        wiki: `Canuck`,
                                    },
                                    `.`,
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
                    mixTime: `2:10:09.83`,
                    lyric: `there's been plenty days I've really been through worse.`,
                },
                {
                    mixTime: `2:18:29.86`,
                    lyric: [
                        `Anyway, I'm feeling healed. Still,`,
                        {
                            anchor: `hugging hurts`,
                            card: {
                                description: `It's more typical to downplay one's injuries to avoid the humiliation of getting beaten up. But here I play them up to mask my emotional hurt, as I explain to Sasha why I winced when we hugged on that last day.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `…`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `It's easy to write songs by coming up with a four-chord loop, then layering a melody on top. But my theory was that the Beatles wrote the melody and chords together, one measure at a time, so I tried to do the same. I was always happiest with results like the chorus here, where the music meanders for a long stretch without repeating.`,
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: `2:25:02.29`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(alto melodica and soprano recorder, Sasha's theme)`,
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `2:27:28.96`,
                    lyric: `And Sasha, I know you'll have them all,`,
                },
                {
                    mixTime: `2:31:24.54`,
                    lyric: [
                        `while if I last the fall`,
                        {
                            anchor: `playing possum`,
                            card: {
                                description: [
                                    `To avoid confrontation, an`,
                                    {
                                        anchor: `opossum`,
                                        wiki: `Opossum`,
                                    },
                                    `will remain comatose to create the impression of being dead, an act known as`,
                                    {
                                        anchor: `playing possum`,
                                        wiki: `Apparent_death`,
                                    },
                                    `. Similarly, my only recourse in the coming years is to stay unresponsive to threats and hope for the best.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:35:20.10`,
                    lyric: [
                        `is a toss-up. But where some`,
                        {
                            anchor: `hemophile`,
                            card: {
                                description: [
                                    {
                                        anchor: `Hemophilia`,
                                        wiki: `Haemophilia`,
                                    },
                                    `is a disease in which blood fails to clot properly, leading to continuous bleeding.`,
                                ],
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:39:15.68`,
                    lyric: `might bleed the Nile to nausea,`,
                },
                {
                    mixTime: `2:43:11.25`,
                    lyric: `I can wash up, and hope the bastards croak,`,
                },
                {
                    mixTime: `2:47:21.26`,
                    lyric: [
                        `on`,
                        {
                            anchor: `rat turds choked`,
                            card: {
                                description: `I wasn't sure how to end a song about a painful stage in my life that now seems comical in retrospect. I decided to err on the side of humor.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [SONGCRAFT]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `While the first chorus of this song is grounded in the key of C, the second chorus collapses under the weight of my despondence and settles into the key of B\u2011flat, a whole step lower. But now I commit to powering through the coming semester, and so this third and final chorus rises up a half step to the key of D\u2011flat.`,
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
                    description: [
                        `After releasing`,
                        {
                            isItalic: true,
                            lyric: `Yearling's Bobtail`,
                        },
                        `, I was confused by the lack of interest from the indie labels and press. So I wrote a songwriting lesson book called`,
                        {
                            isItalic: true,
                            lyric: `Bobtail Method`,
                        },
                        `that distills all the wisdom I'd gathered over the years from studying the Beatles. My hope was that this would finally get me taken seriously. Unfortunately, the promo copies I sent out were met with the same radio silence. I'll still release`,
                        {
                            isItalic: true,
                            lyric: `Bobtail Method`,
                        },
                        `as an app one day.`,
                    ],
                    dotKeys: {
                        [AFTERWORD]: true,
                        [OBSERVATION]: true,
                    },
                },
            },
        },
    ],
}
