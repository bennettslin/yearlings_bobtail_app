import {
    AFTERWORD,
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGCRAFT,
} from '../../../../src/constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    RESPONSE,
    REFRAIN,
    OUTRO,
    IS_UNIT_DOT,
} from '../../../../src/constants/lyrics'

export default {
    title: 'Constellations!',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     *
     * mST - mRT + pRT = pST
     * 1.620 - 1.876 + 1751.447 => 0
     */
    referenceDescription: `Cymbal in measure 1`,
    mixReferenceTime: `0:01:26.28`,
    mixStartTime: `0:01:18.60`,
    playerReferenceTime: 1751.447,
    playerStartTime: 1751.191,
    todo: true,
    problem: `Review one more time.`,
    overview: `One night I went with my bassist Ana and some of our friends to get high on Robitussin while exploring the steam tunnels under UCLA. I got us all to pretend that we were Vikings, Mongols, and various waves of human migration throughout world history. In hindsight, the others were probably just humoring me. I did so much Robitussin that summer, it took me a long while to regain my grip on reality.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                problem: `Review.`,
                card: {
                    description: [
                        `I first tried Robitussin earlier that summer after reading of its narcotic effects in`,
                        {
                            anchor: `Jim Carroll`,
                            wiki: `Jim_Carroll`,
                        },
                        `'s`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `The Basketball Diaries`,
                                wiki: `The_Basketball_Diaries_(book)`,
                            },
                        },
                        `. It quickly became my drug of choice, since I didn't need to know any dealers. The best part of a Robitussin trip is the`,
                        {
                            anchor: `closed-eye hallucinations`,
                            wiki: `Closed-eye_hallucination`,
                        },
                        `that get projected onto the back of your eyelids. If they get too intense, you simply open your eyes. At the time, I called them "constellations."`,
                    ],
                    dotKeys: {
                        [BACKSTORY]: true,
                        [OBSERVATION]: true,
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
                        lyric: `(string synth)`,
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
                    mixTime: `0:05:18.75`,
                    lyric: [
                        {
                            anchor: `reverends, paused`,
                            cards: [
                                {
                                    description: [
                                        `We tread with "reverence" through the`,
                                        {
                                            anchor: `UCLA`,
                                            wiki: `University_of_California,_Los_Angeles`,
                                        },
                                        `campus. Since I'm the experienced Robitussin user of the group, the others follow my lead in treating it as a mystical journey.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `Finnegans Wake`,
                                                wiki: `Finnegans_Wake`,
                                            },
                                        },
                                        `, James Joyce's ambitious final novel, opens with the line, "riverrun, past Eve and Adam's." So I figured this song could start there as well.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                        [SONGCRAFT]: true,
                                    },
                                },
                            ],
                        },
                        {
                            anchor: `stiff in tandem`,
                            card: {
                                description: `Robitussin in its early stages will make your limbs feel stiff and mechanical. Having taken it an hour prior, we enjoy these effects and deliberately exaggerate them.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:09:11.25`,
                    lyric: [
                        {
                            anchor: `Heavin' some, Ana`,
                            card: {
                                description: `"Heaving some, Ana whispers a low sigh." The others have just learned that when you first down a whole bottle of Robitussin, you'll likely want to retch. Within a moment, though, you'll feel your lungs shrivel away, and it's like you're peacefully breathing through gills underwater.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        {
                            anchor: `whispures a low sigh, bein'`,
                            card: {
                                description: [
                                    `"Heaven's manna was pure psilocybin." During this time, I was intrigued by the role played by psychedelic drugs throughout history. Though textbooks naturally failed to provide this information, it was readily available in the alternative bookstores around Berkeley. One theory is that`,
                                    {
                                        anchor: `manna`,
                                        wiki: `Manna`,
                                    },
                                    `from heaven was a`,
                                    {
                                        anchor: `psilocybin mushroom`,
                                        wiki: `Psilocybin_mushroom`,
                                    },
                                    `, based on its description in the Bible.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `…`,
                    ],
                },
                {
                    mixTime: `0:13:03.75`,
                    lyric: [
                        `of`,
                        {
                            anchor: `de exempt`,
                            cards: [
                                {
                                    description: [
                                        `The Israelites, being of "the" exempt, were spared the plagues that God visited upon Egypt. And with our stomachs full of Robitussin, we're spared any chance of having flu symptoms.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        {
                                            anchor: `Dextromethorphan`,
                                            wiki: `Dextromethorphan`,
                                        },
                                        `, a cough suppressant, is the ingredient responsible for Robitussin's hallucinogenic properties. It's sometimes abbreviated as "DXM."`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `,`,
                        {
                            anchor: `exit us`,
                            card: {
                                description: `As the Book of "Exodus" recounts how the Israelites found manna during their trek out of Egypt, so too do we leave the drudgery of our homes to seek spiritual sustenance.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `the`,
                        {
                            anchor: `Viking den`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `Ana's friends Howie and Tomer were seasoned drug users but hadn't taken Robitussin before. Given that it's sold over the counter, they'd assumed its effects would be weaker than those of prescribed painkillers like "`,
                                        {
                                            anchor: `Vicodin`,
                                            wiki: `Hydrocodone/paracetamol`,
                                        },
                                        `." That night proved them very wrong.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `Vikings`,
                                            wiki: `Vikings`,
                                        },
                                        `were Norse seafarers who expanded outward from Scandinavia beginning in the 8th century. Like them, we've left the comfort of our dens to explore new vistas.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            ],
                        },
                        `…`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Full disclosure: I never got past the first fifty pages of`,
                        {
                            isItalic: true,
                            lyric: `Finnegans Wake`,
                        },
                        `. Still, I liked how Joyce used literary puns to create multiple layers of meaning within a dreamlike setting. It seemed like the perfect device to convey a Robitussin trip, during which worlds of meaning build up and fade within the briefest of moments, and everything feels at once epic and unreal.`,
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
                formType: VERSES,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `0:20:18.75`,
                    lyric: [
                        {
                            anchor: `Walkyriens`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `Flashback to earlier that night, when we've arrived at a "`,
                                        {
                                            anchor: `Walgreens`,
                                            wiki: `Walgreens`,
                                        },
                                        `" drugstore to procure our Robitussin.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `The "`,
                                        {
                                            anchor: `Valkyries`,
                                            wiki: `Valkyrie`,
                                        },
                                        `" in Norse mythology were noble maidens who escorted fallen warriors from the battlefield.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `: to`,
                        {
                            // NOTE: I changed from 'Walhall.'
                            anchor: `Wal-hall o'`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `The Valkyries would bring their dead heroes to "`,
                                        {
                                            anchor: `Valhalla`,
                                            wiki: `Valhalla`,
                                        },
                                        `," a majestic hall ruled by the god Odin.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: `The Walgreens aisles might be referred to as "Wal-halls," as they're stocked with generic versions of brand-name drugs, each with the prefix "Wal" in its name: Wal-Dryl, Wal-Phed… and so forth.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                        {
                            anchor: `mead-Tussin`,
                            card: {
                                description: [
                                    {
                                        anchor: `Mead`,
                                        wiki: `Mead`,
                                    },
                                    `was the drink of the Norse gods, just as we look for Wal-Tussin as our "medicine" of choice.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `!`,
                    ],
                },
                {
                    mixTime: `0:24:11.25`,
                    lyric: [
                        {
                            anchor: `Quouffs uppraissed`,
                            card: {
                                description: [
                                    `Not all bottles of Robitussin will get you high. The ones to avoid are those containing`,
                                    {
                                        anchor: `guaifenesin`,
                                        wiki: `Guaifenesin`,
                                    },
                                    `, which is an expectorant. So we "upraise" our "quaffs" to "appraise" them, looking specifically for the medicinal property that keeps "coughs suppressed."`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `, this`,
                        {
                            anchor: `boundless Kalevalley ends`,
                            cards: [
                                {
                                    description: `The San Fernando Valley is the quintessential "Cali valley." In my youth, the days until I could leave this sprawling wasteland felt endless. But on this summer break back home, escape is now instantaneous with the power of Robitussin.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `The "`,
                                        {
                                            anchor: `Kalevala`,
                                            wiki: `Kalevala`,
                                        },
                                        `" is the national epic poem of Finland.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:28:03.75`,
                    lyric: [
                        `We ride as`,
                        {
                            // NOTE: I changed from "Finnugreec tongue."
                            anchor: `Finnugreec-tongue`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `The licorice taste of Robitussin, which lingers on our tongues, is reminiscent of the spice "`,
                                        {
                                            anchor: `fenugreek`,
                                            wiki: `Fenugreek`,
                                        },
                                        `."`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Finnish belongs to the "`,
                                        {
                                            anchor: `Finno-Ugric`,
                                            wiki: `Finno-Ugric_languages`,
                                        },
                                        `" language family.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        {
                            anchor: `Lapps are highmen`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `We're literally "high men," and since the others are trying Robitussin for the first time, it also "laps our`,
                                        {
                                            anchor: `hymen`,
                                            wiki: `Hymen`,
                                        },
                                        `."`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `Lapps`,
                                            wiki: `Sami_people`,
                                        },
                                        `are a Finno-Ugric people indigenous to the northern regions of Scandinavia.`,
                                    ],
                                },
                            ],
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
                    mixTime: `0:35:18.75`,
                    lyric: [
                        {
                            anchor: `Makeyars mygrate`,
                            properNoun: true,
                            cards: [
                                {
                                    description: `Cut back to the present scene. Tomer promises to "make yours my grate," as he shares his knowledge of the hidden grates that lead down to the UCLA steam tunnels.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `The "`,
                                        {
                                            anchor: `Magyars`,
                                            wiki: `Hungarians`,
                                        },
                                        `" are a Finno-Ugric people who "migrated" from the East and established the nation of Hungary.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `, from`,
                        {
                            anchor: `among ol'`,
                            card: {
                                description: [
                                    `The Magyars share genetic ancestry with the "`,
                                    {
                                        anchor: `Mongols`,
                                        wiki: `Mongols`,
                                    },
                                    `," an East Asian nomadic people.`,
                                ],
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        {
                            anchor: `psealed off drains`,
                            cards: [
                                {
                                    description: `The entrance to the steam tunnels is hidden "among old, sealed-off drains."`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Back in the day, the Robitussin we took also contained "`,
                                        {
                                            anchor: `pseudoephedrine`,
                                            wiki: `Pseudoephedrine`,
                                        },
                                        `," a nasal decongestant. Because it's the main ingredient used to make`,
                                        {
                                            anchor: `crystal meth`,
                                            wiki: `Methamphetamine`,
                                        },
                                        `, however, pseudoephedrine is no longer available over the counter.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        {
                            anchor: `The Police`,
                            wiki: `The_Police`,
                        },
                        `'s`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Ghost in the Machine`,
                                wiki: `Ghost_in_the_Machine_(album)`,
                            },
                        },
                        `was my soundtrack of choice for a Robitussin trip, so I tried to recreate its ambience. Taking a cue from the song "`,
                        {
                            anchor: `Secret Journey`,
                            wiki: `Secret_Journey_(song)`,
                        },
                        `," I left the kick drum off the downbeat in the prechorus, which does wonders for letting the other instruments breathe before they're submerged again in the chorus.`,
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
                    mixTime: `0:43:03.75`,
                    lyric: [
                        `Then`,
                        {
                            anchor: `down the steppes`,
                            cards: [
                                {
                                    description: [
                                        `As we go down the earthen "steps" leading into the steam tunnels, I imagine us as 13th-century Mongol horsemen sweeping down from the Eurasian`,
                                        {
                                            anchor: `steppes`,
                                            wiki: `Steppe`,
                                        },
                                        `to begin our conquests.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    wormhole: `down_the_steppes`,
                                },
                            ],
                        },
                        `we charged,`,
                    ],
                },
                {
                    mixTime: `0:46:12.19`,
                    lyric: [
                        {
                            anchor: `Drinkhis Khan, once Toomujin`,
                            properNoun: true,
                            review: true,
                            cards: [
                                {
                                    description: `Earlier tonight, I was hesitant to do Robitussin with the others, since I'd already done it the night before, and each trip destroys you for a good while. But now the "drink is gone," and with "too much in," I've forgotten my concerns.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `"`,
                                        {
                                            anchor: `Genghis Khan`,
                                            wiki: `Genghis_Khan`,
                                        },
                                        `," whose birth name was "Temujin," was the founder of the Mongol Empire.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `, has`,
                        {
                            anchor: `slain the teeto-Tatars`,
                            cards: [
                                {
                                    description: [
                                        `With the familiar sensation of Robitussin having kicked in, I'm no longer wavering like a playground "`,
                                        {
                                            anchor: `teeter-totter`,
                                            wiki: `Seesaw`,
                                        },
                                        `," and any lingering protest from my inner "`,
                                        {
                                            anchor: `teetotaler`,
                                            wiki: `Teetotalism`,
                                        },
                                        `" has been killed off.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Genghis Khan was able to unite the Mongols by defeating the`,
                                        {
                                            anchor: `Tatars`,
                                            wiki: `Tatars`,
                                        },
                                        `, a rival tribe.`,
                                    ],
                                },
                            ],
                        },
                        `!`,
                    ],
                },
                {
                    mixTime: `0:50:04.69`,
                    lyric: [
                        {
                            anchor: `Tomer-layin' the seed`,
                            properNoun: true,
                            cards: [
                                {
                                    description: `Tomer jokingly drops crumbs of dirt as if laying a trail of seeds. I observe that these seeds will sprout into the nations of our descendants in the lands we conquer.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `"`,
                                        {
                                            anchor: `Tamerlane`,
                                            wiki: `Timur`,
                                        },
                                        `" continued the Turko-Mongol expansion into Central Asia. Though not born from the seed of Genghis Khan directly, he laid out the case for his legitimacy by tracing lineage to a common ancestor.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `,`,
                        {
                            anchor: `Howie led the feat`,
                            properNoun: true,
                            cards: [
                                {
                                    description: `Meanwhile, Howie walks as if he has "lead feet," oblivious to the lingering stiffness of his limbs.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `Mughals`,
                                            wiki: `Mughal_Empire`,
                                        },
                                        `, Muslim descendants of Tamerlane, must have regaled themselves with tales of "how he" led the feat that precipitated their conquest of South Asia and its Hindu populations.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `of`,
                        {
                            anchor: `avatars`,
                            card: {
                                description: [
                                    `In Hinduism, an`,
                                    {
                                        anchor: `avatar`,
                                        wiki: `Avatar`,
                                    },
                                    `is the earthbound incarnation of a deity. Some avatars are speculated to have been historical figures whose exploits predate written tradition.`,
                                ],
                            },
                        },
                        `…`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: `0:54:11.25`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(string synth)`,
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
                    mixTime: `0:58:03.75`,
                    lyric: [
                        {
                            anchor: `Indus-trail sewerce`,
                            properNoun: true,
                            review: true,
                            card: {
                                description: [
                                    `As we make our way down "industrial sewers," I explain the`,
                                    {
                                        anchor: `Aryan Invasion`,
                                        wiki: `Indo-Aryan_migration`,
                                    },
                                    `theory, which I examined in a recent term paper. Proposed by 19th-century Western scholars, it posits that Indian civilization was brought by invaders from the north, who carved a trail leading to the "source" of the`,
                                    {
                                        anchor: `Indus`,
                                        wiki: `Indus_River`,
                                    },
                                    `river.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `,`,
                        {
                            anchor: `questurns Indo Hairapins`,
                            review: true,
                            card: {
                                description: [
                                    `Our "quest turns into hairpins" as we wind through narrow pathways. All the while, I blather on about the "questions" brought up by later scholars, who rejected the colonialism of past scholarship. Instead, they pointed to the evolution of the "`,
                                    {
                                        anchor: `Indo-European`,
                                        wiki: `Indo-European_languages`,
                                    },
                                    `" language family to argue for the "`,
                                    {
                                        anchor: `Indo-Harappan`,
                                        wiki: `Indus_Valley_Civilisation`,
                                    },
                                    `" civilization's homegrown origins.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `:`,
                    ],
                },
                {
                    mixTime: `1:01:26.25`,
                    lyric: [
                        {
                            anchor: `Forsi ahuro`,
                            properNoun: true,
                            todo: true,
                            problem: `Review one more time.`,
                            card: {
                                description: [
                                    `In Persian, or "Farsi," the "`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `ahura`,
                                            wiki: `Ahura`,
                                        },
                                    },
                                    `" is a deity. But in the`,
                                    {
                                        anchor: `Vedic`,
                                        wiki: `Vedas`,
                                    },
                                    `texts of ancient India, an`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `asura`,
                                            wiki: `Asura`,
                                        },
                                    },
                                    `is a demon— suggesting that a religious rift occurred among the`,
                                    {
                                        anchor: `Indo-Iranians`,
                                        wiki: `Indo-Iranians`,
                                    },
                                    `. And because the Vedas precede the Persian`,
                                    {
                                        anchor: `Avesta`,
                                        wiki: `Avesta`,
                                    },
                                    `, these later scholars posited that the migrants must have left the Indian subcontinent and settled in the Iranian basin, rather than the other way around.`,
                                ],
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `or`,
                        {
                            anchor: `Sensegreat deva's day shone`,
                            properNoun: true,
                            review: true,
                            card: {
                                description: [
                                    `Moreover, in "Sanskrit," the word for a Vedic deity is "`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `deva`,
                                            wiki: `Deva_(Hinduism)`,
                                        },
                                    },
                                    `," while the Avestan`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `daeva`,
                                            wiki: `Daeva`,
                                        },
                                    },
                                    `is a demon. Thus, whether one "foresees a hero" or "senses great devastation" depends on which side of the schism one ended up on.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `?`,
                    ],
                },
                {
                    mixTime: `1:05:18.75`,
                    lyric: [
                        {
                            anchor: `To soma up`,
                            review: true,
                            card: {
                                description: [
                                    `The Vedas mention a drink called`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `soma`,
                                            wiki: `Soma_(drink)`,
                                        },
                                    },
                                    `that was prepared from an unknown plant believed by some scholars to have psychedelic properties. In the Avesta, it's known as`,
                                    {
                                        isItalic: true,
                                        lyric: `haoma`,
                                    },
                                    `.`,
                                ],
                            },
                        },
                        `,`,
                        {
                            anchor: `our-youn' invedas`,
                            review: true,
                            card: {
                                description: [
                                    `Some recent scholarship has returned to the theory that the "`,
                                    {
                                        anchor: `Aryans`,
                                        wiki: `Aryan`,
                                    },
                                    `" mentioned "in the Vedas" came from the north. However, it discredits the colonialist notion that they were "invaders," as no evidence of wars has been found. And so "to sum up," I put this "unsolved query" to rest, before the others lose their minds.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        {
                            anchor: `unsolft quarry rest`,
                            card: {
                                description: `"Our young invaders" arrive at a clearing where dirt from the ground has been shaped into makeshift benches. Pausing for a breather, we rest on this "soft quarry."`,
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
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Sita introduced me to`,
                        {
                            anchor: `Bollywood`,
                            wiki: `Bollywood`,
                        },
                        `movies, which are a gold mine of musical sounds and ideas. The chords for the refrain and verse in this song were shamelessly borrowed from the title track of one of our favorites,`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Hum Aapke Hain Koun…!`,
                                wiki: `Hum_Aapke_Hain_Koun..!`,
                            },
                        },
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
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `1:12:05.61`,
                    lyric: [
                        {
                            anchor: `Ourevian battles spent`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `Robitussin requires you to stay constantly hydrated, and "our`,
                                        {
                                            anchor: `Evian`,
                                            wiki: `Evian`,
                                        },
                                        `bottles" that we brought into the steam tunnels are now empty.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Spent from the "Arabian" battles that ended with their defeat to the Muslims, the Persians were then subjugated by the Mongols, the next enemy at their doorstep.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `,`,
                        {
                            anchor: `a'duct Uighuress`,
                            card: {
                                description: [
                                    `The Mongols would slaughter the men and seize the women of the lands they conquered. This fate was no doubt met by the`,
                                    {
                                        anchor: `Uighurs`,
                                        wiki: `Uyghurs`,
                                    },
                                    `, a Turkic people encountered by the Mongols in their early campaigns. And so through "a duct, we egress," or exit, the steam tunnels, but not before I feign to "abduct a Uighuress."`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `1:16:12.18`,
                    lyric: [
                        {
                            anchor: `Are Melee tapirs`,
                            card: {
                                description: `"Our melee tapers the discourse." Having scavenged materials to make swords and shields, we could only brandish them with playful menace inside the narrow steam tunnels. Now out in the open, we stop chattering and start battling as we make our way back to the car.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        {
                            anchor: `the dusc-horse yet`,
                            card: {
                                description: [
                                    `"Are Malay tapirs the dusk horse yet?" Native to the Malay peninsula, the`,
                                    {
                                        anchor: `Malayan tapir`,
                                        wiki: `Malayan_tapir`,
                                    },
                                    `bears a resemblance to the horse's prehistoric ancestor`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Eohippus`,
                                            wiki: `Eohippus`,
                                        },
                                    },
                                    `, or "dawn horse." As our little group discovers exotic new species in the lands we conquer, we search for this mythical "dusk horse" that will tell us we've reached the end of history.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `…?`,
                    ],
                },
                {
                    mixTime: `1:20:18.75`,
                    lyric: [
                        `From the`,
                        {
                            anchor: `Khlmair city Ingcar Wet`,
                            properNoun: true,
                            cards: [
                                {
                                    description: `Taking in the "calm air," we're now "sitting in car wet," as we guzzle down the remaining Evian bottles that Howie's parents had bought in bulk and left in the trunk.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `"`,
                                        {
                                            anchor: `Angkor Wat`,
                                            wiki: `Angkor_Wat`,
                                        },
                                        `," or "Temple City," is a 12th-century Hindu temple built by the "`,
                                        {
                                            anchor: `Khmer`,
                                            wiki: `Khmer_people`,
                                        },
                                        `" nation of what is now present-day Cambodia.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `, to war:`,
                        {
                            anchor: `scimitary of'fence`,
                            card: {
                                description: [
                                    `Rested and energized, we renew our "`,
                                    {
                                        anchor: `scimitar`,
                                        wiki: `Scimitar`,
                                    },
                                    `offense." The next plan of attack is to visit the grave of Howie and Tomer's high school buddy Adam by driving through the "cemetery fence."`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `!`,
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
                    mixTime: `1:28:03.75`,
                    lyric: [
                        {
                            anchor: `Pour sod, fourfeit tundr`,
                            card: {
                                description: `In the car, Howie and Tomer swap tales from their high school days, bemoaning the "poor sod" who had sod poured on him from "four feet under."`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `'s`,
                        {
                            anchor: `Siburial plains`,
                            properNoun: true,
                            card: {
                                description: [
                                    `The Americas were first settled by northeast Asian populations who gladly "forfeited the tundra's`,
                                    {
                                        anchor: `Siberian`,
                                        wiki: `Siberia`,
                                    },
                                    `plains," which would have otherwise served as their "burial" grounds.`,
                                ],
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `…`,
                    ],
                },
                {
                    mixTime: `1:35:18.75`,
                    lyric: [
                        {
                            anchor: `Upridge o' lawn`,
                            cards: [
                                {
                                    description: `We park the car and head up "a ridge of lawn."`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `According to the`,
                                        {
                                            anchor: `Beringia theory`,
                                            wiki: `Beringia`,
                                        },
                                        `, the Americas were settled by populations from north Asia who crossed "a bridge of land" connecting the two continents. When the glaciers later melted, the sea level rose, effectively causing the bridge to sink.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `trod on by`,
                        {
                            anchor: `forc'd nations`,
                            card: {
                                description: [
                                    `"Forced" to leave their Asian homelands due to scarce resources, these groups are now known in Canada as the "`,
                                    {
                                        anchor: `First Nations`,
                                        wiki: `First_Nations`,
                                    },
                                    `."`,
                                ],
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `sank…`,
                    ],
                },
                {
                    mixTime: `1:43:03.75`,
                    lyric: [
                        `But`,
                        {
                            anchor: `past a cross Bearing Straight`,
                            card: {
                                description: [
                                    `We navigate by "bearing straight" past a cross-shaped headstone, just as those before us had "passed across the`,
                                    {
                                        anchor: `Bering Strait`,
                                        wiki: `Bering_Strait`,
                                    },
                                    `."`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `1:44:15.93`,
                    lyric: [
                        {
                            anchor: `herows— ourauras left`,
                            review: true,
                            cards: [
                                {
                                    description: `Wishing to respect the dead, we've left behind "our auras" as history's "heroes."`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Other indigenous peoples, such as the`,
                                        {
                                            anchor: `Inuits`,
                                            wiki: `Inuit`,
                                        },
                                        `of the Arctic regions, migrated to the Americas by boat. So in telling the story of a seafaring ancestor, they might describe how "he rows" with the "auroras," or`,
                                        {
                                            anchor: `aurora borealis`,
                                            wiki: `Aurora`,
                                        },
                                        `, to his left.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `— to`,
                        {
                            anchor: `Audamn's grave`,
                            properNoun: true,
                            card: {
                                description: `We sigh in relief to have spotted "Adam's" grave from among a sea of identical headstones, just as the first Americans, upon discovering a more bountiful land, perished their fears of an encroaching "autumn."`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                problem: `Review.`,
                card: {
                    description: [
                        `On solo trips, I would play on my`,
                        {
                            anchor: `NES`,
                            wiki: `Nintendo_Entertainment_System`,
                        },
                        `while waiting for the Robitussin to kick in. And sometimes I would just keep playing, even as my mind began to wander in search of metaphysical truths. So for years afterward, any vintage arcade sound might trigger a flashback, and I'd prepare to embark on a mystical journey.`,
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
                    mixTime: `1:50:18.75`,
                    lyric: `And now without a chart,`,
                },
                {
                    mixTime: `1:53:27.19`,
                    lyric: `just the winds and the constellations known by heart,`,
                },
                {
                    mixTime: `1:57:19.69`,
                    lyric: [
                        `I'll sail this sea,`,
                        {
                            anchor: `there is only me`,
                            card: {
                                description: [
                                    `As I stand before Adam's headstone under the predawn sky, a wave of clarity washes over me. With my sense of purpose renewed, I vow to finish`,
                                    {
                                        isItalic: true,
                                        lyric: `Bobtail`,
                                    },
                                    `guided solely by my artistic instincts.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `and my northern star!`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `If the lyrics for this second chorus seem out of place given the noticeable lack of literary puns, it's because they're a carryover from a previous incarnation of this song. I liked them enough to keep them, and they perfectly capture my moment of clarity at the cemetery.`,
                    dotKeys: {
                        [BACKSTORY]: true,
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
                    mixTime: `2:01:26.25`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(electric guitar)`,
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: BRIDGE,
                subVerseType: RESPONSE,
            },
            mainVerses: [
                {
                    mixTime: `2:05:18.75`,
                    lyric: [
                        `The`,
                        {
                            anchor: `mistodawn`,
                            card: {
                                description: `The "mist of dawn" breaks, and we drive back to Howie's place. My newfound clarity proves short-lived as I lean back and shut my eyes to gaze at constellations.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `,`,
                        {
                            // NOTE: I changed from ha'nt.
                            anchor: `hant'd by sober-trooth tiedgirl`,
                            todo: true,
                            problem: `Review one more time.`,
                            card: {
                                description: [
                                    `As I envision a "`,
                                    {
                                        anchor: `mastodon`,
                                        wiki: `Mastodon`,
                                    },
                                    `" "hunted" by a "`,
                                    {
                                        anchor: `saber-toothed tiger`,
                                        wiki: `Smilodon`,
                                    },
                                    `," I'm "haunted by the sober truth" that my relationship with Sita is devolving into an unhealthy codependency.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `cries…`,
                    ],
                },
            ],
            subVerse: [
                {
                    mixTime: `2:09:11.25`,
                    lyric: {
                        isItalic: true,
                        lyric: [
                            {
                                anchor: `sunk in tarpid lies`,
                                review: true,
                                cards: [
                                    {
                                        description: `My mastodon lies sunk in a "tar pit," just as I'm sinking in all my "torpid" lies explaining to Sita why I don't spend more nights with her.`,
                                        dotKeys: {
                                            [NARRATIVE]: true,
                                            [PUN]: true,
                                        },
                                    },
                                    {
                                        description: [
                                            {
                                                anchor: `Tar pits`,
                                                wiki: `Tar_pit`,
                                            },
                                            `occur when natural asphalt leaks to the surface from underground. Preserving wood and bone, they're rich sources of paleontological discovery.`,
                                        ],
                                    },
                                    {
                                        wormhole: `sunken_tirpitz`,
                                    },
                                ],
                            },
                            `!`,
                        ],
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: BRIDGE,
                subVerseType: RESPONSE,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `2:13:03.75`,
                    lyric: [
                        `In`,
                        {
                            anchor: `Hollowscene`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `As Robitussin is a`,
                                        {
                                            anchor: `dissociative`,
                                            wiki: `Dissociative`,
                                        },
                                        `drug , I start to detach from myself. In doing so, I catch a glimpse of how superficial my aspirations are, and how "hollow" the local "scene" is in which I desire recognition.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `The "`,
                                        {
                                            anchor: `Holocene`,
                                            wiki: `Holocene`,
                                        },
                                        `" is the current geological epoch, which began with the first human settlements.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        {
                            anchor: `broughtour ancister`,
                            card: {
                                description: [
                                    `In the epic vision playing out in my mind, our little group is now an Inuit tribe, and the mastodon has become our spirit animal. We've "brought our ancestral`,
                                    {
                                        anchor: `totems`,
                                        wiki: `Totem`,
                                    },
                                    `and rites" to our new homeland.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        {
                            anchor: `toughtim rite`,
                            card: {
                                description: `Having now achieved a full out-of-body experience, I gaze down upon my drugged-out self. Set against the familiar backdrop of Los Angeles, this degrading sight reminds me that in having scuttled off to the Bay Area, I'm shirking my duty to care for my autistic brother. My sister, on the other hand, lives nearby. Guilt-ridden, I sarcastically note that "brother and sister taught him right."`,
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
            subVerse: [
                {
                    mixTime: `2:16:26.25`,
                    lyric: {
                        isItalic: true,
                        lyric: [
                            `he sees`,
                            {
                                anchor: `Lowkey and Freyed`,
                                properNoun: true,
                                card: {
                                    description: [
                                        `Recoiling from the sight of myself in a "low-key and fried" state, I see a constellation of my brother dressed as "`,
                                        {
                                            anchor: `Loki`,
                                            wiki: `Loki`,
                                        },
                                        `," the Norse trickster god, next to my sister as "`,
                                        {
                                            anchor: `Freyja`,
                                            wiki: `Freyja`,
                                        },
                                        `," the renowned Norse goddess.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                            },
                            `!`,
                        ],
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: BRIDGE,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `2:20:18.75`,
                    lyric: [
                        {
                            // NOTE: Changing from Nunavutter.
                            anchor: `Noworse and Nunavetter`,
                            properNoun: true,
                            review: true,
                            card: {
                                description: [
                                    `Our Inuit tribe has now ventured all the way to`,
                                    {
                                        anchor: `Nunavut`,
                                        wiki: `Nunavut`,
                                    },
                                    `, the northernmost territory of Canada. Yet with the Norse making a reappearance in my thoughts, I realize that even our fantasies must circle back and cover old ground, just like our humdrum lives from which we try to escape. So as the "Norse" encounter the "Nunavutters," we end the night as we'd begun it, "no worse and none the better."`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `collide…`,
                    ],
                },
                {
                    mixTime: `2:24:11.25`,
                    lyric: {
                        isItalic: true,
                        lyric: [
                            {
                                anchor: `Leif as the Red's son`,
                                properNoun: true,
                                cards: [
                                    {
                                        description: [
                                            `The arrival of Europeans into the Americas precipitated their rise to global power, just as it brought disease and ruin to the native populations. Similarly, while the day begins for many, it's now ending for us, and we "leave as the red sun" arrives.`,
                                        ],
                                        dotKeys: {
                                            [NARRATIVE]: true,
                                            [PUN]: true,
                                        },
                                    },
                                    {
                                        description: [
                                            `The Norse explorer`,
                                            {
                                                anchor: `Leif Erikson`,
                                                wiki: `Leif_Erikson`,
                                            },
                                            `was the son of`,
                                            {
                                                anchor: `Erik the Red`,
                                                wiki: `Erik_the_Red`,
                                            },
                                            `, who established Norse settlements in Greenland.`,
                                        ],
                                    },
                                ],
                            },
                            `arrives!`,
                        ],
                    },
                },
                {
                    mixTime: `2:28:03.75`,
                    lyric: [
                        `How old are`,
                        {
                            anchor: `these mummeries`,
                            cards: [
                                {
                                    description: `With my eyes still closed, my thoughts grow further disjointed. Injecting myself into world history, I see all of time collapsing into a singularity, such that everyone who's ever lived is at once dead and not dead, including me. Or is this just an endless series of silent acts we've all agreed to perform in? "Mummeries," if you will?`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `A`,
                                        {
                                            anchor: `mummy`,
                                            wiki: `Mummy`,
                                        },
                                        `is a preserved corpse, while a`,
                                        {
                                            anchor: `mummer`,
                                            wiki: `Mummers_play`,
                                        },
                                        `is a masked mime.`,
                                    ],
                                },
                            ],
                        },
                        `I have`,
                        {
                            anchor: `left to mine`,
                            card: {
                                description: `At the peak of my dissociation, I mine through "memories," unable to separate the collective memories of the world from those that are mine alone.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `?`,
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
                    mixTime: `2:35:18.75`,
                    lyric: [
                        {
                            anchor: `Pullar switch`,
                            cards: [
                                {
                                    description: `Back at Howie's place, I'm crashing on a couch in his attic. There's an old black-and-white television in front of me, and I "pull the" switch to turn it on.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        {
                                            anchor: `Geomagnetic reversal`,
                                            wiki: `Geomagnetic_reversal`,
                                        },
                                        `occurs when the Earth's magnetic poles are interchanged. According to some hypotheses, such "polar" switches may cause large-scale geological disturbances.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `,`,
                        {
                            anchor: `in-som'umiak`,
                            card: {
                                description: [
                                    `Meanwhile, sensing disaster afoot, our brave Inuit tribe flees to safety "in some`,
                                    {
                                        anchor: `umiak`,
                                        wiki: `Umiak`,
                                    },
                                    `," a boat made of whalebone and sealskin, as we skim through icy channels wreaked by a "snowy blitz."`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `skims through`,
                        {
                            anchor: `channels snow blitz'd`,
                            card: {
                                description: `Being an "insomniac," I skim through channels that are "snow-blitzed" due to the television's poor reception.`,
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
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `For a song about recreational drug use, I naturally turned to the Beatles during their psychedelic period for ideas. "`,
                        {
                            anchor: `Tomorrow Never Knows`,
                            wiki: `Tomorrow_Never_Knows`,
                        },
                        `" uses a`,
                        {
                            anchor: `tape loop`,
                            wiki: `Tape_loop`,
                        },
                        `to imitate a seagull's cry, which I tried to recreate by pinching off the airstream blown through the window of a recorder. The result wasn't what I'd hoped for, but as background texture, it contributes nicely to the overall atmosphere.`,
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
                    mixTime: `2:43:03.75`,
                    lyric: [
                        `Then pounds`,
                        {
                            anchor: `arrhythmetic heart`,
                            card: {
                                description: [
                                    `"`,
                                    {
                                        anchor: `Arrhythmia`,
                                        wiki: `Cardiac_arrhythmia`,
                                    },
                                    `," or an irregular heartbeat, is one downside of taking Robitussin. As the psychedelic effects wear off, I grow paranoid and perform "arithmetic" in my head, hoping my pulse becomes more stable with each passing minute.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `2:46:12.19`,
                    lyric: [
                        {
                            anchor: `Enguished buzzereds`,
                            properNoun: true,
                            card: {
                                description: [
                                    `In the historical narrative still playing in my head, the "`,
                                    {
                                        anchor: `English`,
                                        wiki: `English_people`,
                                    },
                                    `" have now arrived to despoil the New World. The white`,
                                    {
                                        anchor: `ruffs`,
                                        wiki: `Ruff_(clothing)`,
                                    },
                                    `around their necks resemble the neck fringes seen on vultures, or "buzzards," as they're colloquially known.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        {
                            anchor: `come unsated`,
                            properNoun: true,
                            review: true,
                            cards: [
                                {
                                    description: `That night at the drugstore, I advised everyone to get the small bottle of Robitussin. We then lined up at separate checkouts to avoid attracting suspicion. When Howie finally rejoined us, we saw that he'd gone back for the large bottle, thinking the small one wouldn't be enough.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Howie is downstairs in "anguish" over still being "buzzed," as he quenches his innards by downing cups of water.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `find`,
                        {
                            anchor: `Rumspring`,
                            properNoun: true,
                            review: true,
                            card: {
                                description: [
                                    `"`,
                                    {
                                        anchor: `Rumspringa`,
                                        wiki: `Rumspringa`,
                                    },
                                    `" is a rite of passage during which`,
                                    {
                                        anchor: `Amish`,
                                        wiki: `Amish`,
                                    },
                                    `teenagers are encouraged to explore the secular world of the "English," as the non-Amish are called, in order to test their faith. Though it means "running around" in the Amish tongue, I like the image of us dipping into a literal "rum spring." In any case, the spring of our youth, in both the literal and metaphorical sense, is running dry.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `is parched.`,
                    ],
                },
                {
                    mixTime: `2:50:04.69`,
                    lyric: [
                        {
                            // NOTE: I made this lowercase.
                            anchor: `In mouth deseret`,
                            card: {
                                description: [
                                    `"`,
                                    {
                                        anchor: `Deseret`,
                                        wiki: `Deseret_alphabet`,
                                    },
                                    `" is an alphabet developed by the early Mormons. As it had once filled their mouths, a "desert" now fills ours.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `,`,
                        {
                            // NOTE: I capitalised Black.
                            anchor: `Black Letter-Day`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `Holidays on a calendar are traditionally`,
                                        {
                                            anchor: `marked in red`,
                                            wiki: `Red_letter_day`,
                                        },
                                        `ink. By contrast, the "black-letter day sensed" ahead will be just another ordinary day.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        {
                            anchor: `Sensed ahead`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `"Black Latter-Day Saints to head." The Mormon Church, also known as the Latter-Day Saints, originally didn't allow its`,
                                        {
                                            anchor: `Black members`,
                                            wiki: `Black_Mormons`,
                                        },
                                        `to attain priesthood. This policy was reversed in 1978.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `…`,
                        {
                            anchor: `"Rejoyce!" bellow the`,
                            review: true,
                            cards: [
                                {
                                    description: [
                                        `"'Rejoice!' bellow the reverends." Stuck with nothing to watch but`,
                                        {
                                            anchor: `public-access`,
                                            wiki: `Public-access_television`,
                                        },
                                        {
                                            anchor: `televangelists`,
                                            wiki: `Televangelism`,
                                        },
                                        `, I observe that every religion's pioneering spirit eventually degrades into convention and routine— as does every person's youthful outlook. But in the meantime, we're just halfway through summer, and more nights of Robitussin await…`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Joyce wrote the last line of`,
                                        {
                                            isItalic: true,
                                            lyric: `Finnegans Wake`,
                                        },
                                        `to wrap back onto the first, so I "re-Joyced" by indulging in the same conceit.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                        [SONGCRAFT]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: OUTRO,
            },
            mainVerses: [
                {
                    mixTime: `2:56:07.50`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(arcade synth)`,
                    },
                },
            ],
        },
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                review: true,
                card: {
                    description: `Ana now runs a dog collar business called Paco Collars that's doing quite well. I ran into Howie and Tomer at a party recently, and they both remember that night fondly.`,
                    dotKeys: {
                        [AFTERWORD]: true,
                    },
                },
            },
        },
    ],
}
