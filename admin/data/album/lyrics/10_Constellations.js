/**
 * TODO: References, decide on where to put quotations marks. Balance between
 * not being clear and being too obvious.
 */
import {
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
    path: 'constellations',
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
    overview: `One night I went with my bassist Ana and her friends to get high on Robitussin and explore the steam tunnels under UCLA. I got us all to pretend we were Vikings, Mongols, and other waves of human migration throughout world history. In hindsight, they were probably just humoring me. I wound up doing a lot of Robitussin that summer. It took a while for me to regain my grip on reality.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
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
                        `. It quickly became my drug of choice, since I didn't need to know any dealers. The best thing about a Robitussin trip is the`,
                        {
                            anchor: `closed-eye hallucinations`,
                            wiki: `Closed-eye_hallucination`,
                        },
                        `, which are vivid images projected onto the backdrop of your eyelids. When they get too intense, you simply open your eyes, and they vanish. At the time, I called them "constellations."`,
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
                                    description: `We tread with "reverence" through the UCLA campus. Since I'm the experienced Robitussin user of the group, the others follow my lead in treating it as a mystical journey.`,
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
                                    `"Heaven's manna was pure psilocybin." During this time, I was intrigued by the role played by`,
                                    {
                                        anchor: `psychedelic drugs`,
                                        wiki: `Psychedelic_drug`,
                                    },
                                    `throughout history. Though textbooks naturally failed to provide this information, it was readily available in the alternative bookstores around Berkeley. One theory is that`,
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
                                        `The Israelites, being of "the" exempt, were spared the`,
                                        {
                                            anchor: `plagues`,
                                            wiki: `Plagues_of_Egypt`,
                                        },
                                        `that God visited upon Egypt. And with our stomachs full of Robitussin, we are spared any chance of having flu symptoms.`,
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
                                        `, the cough suppressant found in Robitussin, is often abbreviated as "DXM."`,
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
                                description: `As the Book of "Exodus" recounts how the Israelites found manna during their trek out of Egypt, so too do we leave the drudgery of our homes seeking spiritual sustenance.`,
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
                                        `Ana's friends Howie and Tomer were seasoned drug users but had never taken Robitussin before. Given that it's sold`,
                                        {
                                            anchor: `over the counter`,
                                            wiki: `Over-the-counter_drug`,
                                        },
                                        `, they'd assumed its effects would be weaker than those of prescribed painkillers like "`,
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
                                        `were Norse seafarers who expanded outward from`,
                                        {
                                            anchor: `Scandinavia`,
                                            wiki: `Scandinavia`,
                                        },
                                        `beginning in the 8th century. Like them, we've left the comfort of our dens to explore new vistas.`,
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
                        `To be honest, I never got past the first fifty pages of`,
                        {
                            isItalic: true,
                            lyric: `Finnegans Wake`,
                        },
                        `. Still, I took note of how Joyce used literary puns to create multiple layers of meaning within a dreamlike setting. It seemed like the perfect device to convey a Robitussin trip, during which worlds of meaning build up and fade within the briefest of moments, and everything feels at once epic and unreal.`,
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
                                        `" pharmacy to procure our Robitussin.`,
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
                                        `" in`,
                                        {
                                            anchor: `Norse mythology`,
                                            wiki: `Norse_mythology`,
                                        },
                                        `were noble maidens who escorted fallen warriors from the battlefield.`,
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
                            todo: true,
                            // TODO: I'm just not getting the phrasing right.
                            cards: [
                                {
                                    description: `The San Fernando Valley is the quintessential "Cali valley." In my youth, the days until I could leave that sprawling wasteland felt endless. But on this summer break back home, the magic of Robitussin renders escape instantaneous.`,
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
                                        `" is the national epic poem of`,
                                        {
                                            anchor: `Finland`,
                                            wiki: `Finland`,
                                        },
                                        `.`,
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
                                        {
                                            anchor: `Finnish`,
                                            wiki: `Finnish_language`,
                                        },
                                        `belongs to the "`,
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
                                        `We are literally "high men," and since the others are trying Robitussin for the`,
                                        {
                                            anchor: `first time`,
                                            wiki: `Virginity`,
                                        },
                                        `, it also "laps our hymen."`,
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
                                    description: `Cut back to the present scene. Howie and Tomer promise to "make yours my grate," as they share their knowledge of the hidden grates that lead down to the UCLA steam tunnels.`,
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
                                        `" are a Finno-Ugric people who "migrated" from the`,
                                        {
                                            anchor: `Ural Mountains`,
                                            wiki: `Ural_Mountains`,
                                        },
                                        `and established the nation of`,
                                        {
                                            anchor: `Hungary`,
                                            wiki: `Hungary`,
                                        },
                                        `.`,
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
                                        `," a nasal decongestant. Because this is the main ingredient used to make`,
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
                            cards: [
                                {
                                    description: `I'd just taken Robitussin a day or two ago, and each trip really destroys you for a good while. So earlier tonight, I was hesitant to take it again so soon. But now the "drink is gone," and with "too much in," I've forgotten my concerns.`,
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
                                    description: `Tomer jokingly drops crumbs of dirt as if laying a trail of seeds, while I observe that we're laying the seed that will sprout into nations of our descendants in the lands we conquer.`,
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
                                        `" continued the Turko-Mongol expansion into`,
                                        {
                                            anchor: `Central Asia`,
                                            wiki: `Central_Asia`,
                                        },
                                        `. Though not born from the seed of Genghis Khan directly, he laid out the case for his legitimacy by tracing lineage to a common ancestor.`,
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
                                        `,`,
                                        {
                                            anchor: `Muslim`,
                                            wiki: `Islam`,
                                        },
                                        `descendants of Tamerlane, must have regaled themselves with tales of "how he" led the feat that precipitated their`,
                                        {
                                            anchor: `conquest of South Asia`,
                                            wiki: `Muslim_conquests_in_the_Indian_subcontinent`,
                                        },
                                        `and its`,
                                        {
                                            anchor: `Hindu`,
                                            wiki: `Hinduism`,
                                        },
                                        `populations.`,
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
                            card: {
                                description: [
                                    `As we wind through "industrial sewers" pretending to be Mughal invaders, I explain the problem with the`,
                                    {
                                        anchor: `Aryan Invasion`,
                                        wiki: `Indo-Aryan_migration`,
                                    },
                                    `theory. Proposed by 19th-century Western scholars, the theory holds that`,
                                    {
                                        anchor: `Indian`,
                                        wiki: `India`,
                                    },
                                    `civilization was brought by invaders from the north, who were the "Indus trail source."`,
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
                            card: {
                                description: [
                                    `Our "quest turns into hairpins" as we wind our way down labyrinthine passageways. All the while, I blather on about "questions" surrounding the "`,
                                    {
                                        anchor: `Indo-Harappan`,
                                        wiki: `Indus_Valley_Civilisation`,
                                    },
                                    `" civilization that may be answered by studying the evolution of the "`,
                                    {
                                        anchor: `Indo-European`,
                                        wiki: `Indo-European_languages`,
                                    },
                                    `" language family.`,
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
                            card: {
                                description: [
                                    `In the`,
                                    {
                                        anchor: `Iranian`,
                                        wiki: `Iran`,
                                    },
                                    `language of "`,
                                    {
                                        anchor: `Farsi`,
                                        wiki: `Persian_language`,
                                    },
                                    `," the word for a deity is "`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `ahura`,
                                            wiki: `Ahura`,
                                        },
                                    },
                                    `." But in the`,
                                    {
                                        anchor: `Vedic`,
                                        wiki: `Vedas`,
                                    },
                                    `texts of ancient India,`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `asura`,
                                            wiki: `Asura`,
                                        },
                                    },
                                    `refers to a demon, suggesting that a rift occurred among the`,
                                    {
                                        anchor: `Indo-Iranians`,
                                        wiki: `Indo-Iranians`,
                                    },
                                    `based on religious differences. And because the Vedas precede the Persian`,
                                    {
                                        anchor: `Avesta`,
                                        wiki: `Avesta`,
                                    },
                                    `, it's likely that the apostates left the Indian subcontinent and migrated westward to the Iranian basin, rather than the other way around.`,
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
                                    `refers to a demon. Thus, whether one "foresees a hero" or "senses great devastation" depends on which side of the schism one ended up on.`,
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
                            card: {
                                description: [
                                    `In the Vedas,`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `soma`,
                                            wiki: `Soma_(drink)`,
                                        },
                                    },
                                    `is a ritual drink prepared from an unknown botanical substance believed by scholars to have psychedelic properties. The Avesta refers to it as`,
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
                            card: {
                                description: [
                                    `Although the "`,
                                    {
                                        anchor: `Aryans`,
                                        wiki: `Aryan`,
                                    },
                                    `" mentioned "in the Vedas" were a noble class based on religious distinction, 19th-century Western scholars postulated they were a light-skinned race that had conquered and civilized the local populations. While this theory has been debunked, the origin of the Indo-European people is still a matter of wide debate. And so "to sum up," I must put this "unsolved query" to rest, before the others lose their minds.`,
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
                                description: `"Our young invaders" arrive at a clearing where dirt from the ground has been shaped into makeshift benches. Pausing for a breather, on this "soft quarry" we rest.`,
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
                                        `Spent from the "Arabian" battles that ended with their`,
                                        {
                                            anchor: `conquest by the Arabs`,
                                            wiki: `Muslim_conquest_of_Persia`,
                                        },
                                        `, the Persians were then`,
                                        {
                                            anchor: `subjugated by the Mongols`,
                                            wiki: `Mongol_conquest_of_Khwarezmia`,
                                        },
                                        `, the next enemy at their doorstep.`,
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
                            // Last sentence is particularly weird.
                            todo: true,
                            card: {
                                description: [
                                    `"Are Malay tapirs the dusk horse yet?" Through conquest and migration, exotic new species were discovered. Native to the Malay peninsula, the`,
                                    {
                                        anchor: `Malayan tapir`,
                                        wiki: `Malayan_tapir`,
                                    },
                                    `is distantly related to the horse and bears a physical resemblance to the horse's prehistoric ancestor`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Eohippus`,
                                            wiki: `Eohippus`,
                                        },
                                    },
                                    `, or "dawn horse." This "dusk horse," then, would be encountered at the end of history, the brink of which so many before us had believed to have been reached.`,
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
                                    description: `Taking in the "calm air," we are "sitting in car wet," as we guzzle the remaining Evian bottles that Howie's dad had bought in bulk and left in the trunk.`,
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
                                        `" nation of what is now present-day`,
                                        {
                                            anchor: `Cambodia`,
                                            wiki: `Cambodia`,
                                        },
                                        `.`,
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
                                    `The`,
                                    {
                                        anchor: `Americas`,
                                        wiki: `Americas`,
                                    },
                                    `were first settled by northeast Asian populations who gladly "forfeited the tundra's`,
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
                            cards: [
                                {
                                    description: `Wishing to respect the dead, we've left "our auras" as history's "heroes" behind in the car.`,
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
                                        `of the Arctic regions, may have migrated to the Americas by boat. An Inuit storyteller would narrate the journey of one such seafaring ancestor by describing how "he rows" with the "auroras," or`,
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
                card: {
                    description: [
                        `On my solo Robitussin trips, I would explore metaphysical truths in my head while playing video games on my`,
                        {
                            anchor: `Super Nintendo`,
                            wiki: `Super_Nintendo_Entertainment_System`,
                        },
                        `. For a good while afterward, every vintage arcade sound seemed to hide a profound spiritual message that my sober ears just couldn't suss out. I doubt other people are affected the same way, so the arcade synth here was probably just for my own amusement.`,
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
                        {
                            anchor: `I'll sail this sea`,
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
                        `, there is only me and my northern star!`,
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
                            // Just needs to be worded right.
                            todo: true,
                            card: {
                                description: [
                                    `Encountering the vision of a "`,
                                    {
                                        anchor: `mastodon`,
                                        wiki: `Mastodon`,
                                    },
                                    `" being "hunted by a`,
                                    {
                                        anchor: `saber-toothed tiger`,
                                        wiki: `Smilodon`,
                                    },
                                    `," I'm subconsciously "haunted by the sober truth" that I continue to keep Sita captive in a codependent relationship of which I'm beginning to tire.`,
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
                                // Just needs time to think through.
                                todo: true,
                                cards: [
                                    {
                                        description: `My mastodon lies sunk in a "tar pit," just as I've sunk too far in all my "torpid" lies to Sita explaining why I can't spend more nights with her.`,
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
                                            `occur when natural asphalt leaks to the surface from underground. Preserving wood and bone, they are rich sources of paleontological discovery.`,
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
                                            anchor: `dissociative drug`,
                                            wiki: `Dissociative`,
                                        },
                                        `, I start to detach from myself. In doing so, I catch a glimpse of how superficial my aspirations are, and how "hollow" the local "scene" is in which I desire recognition.`,
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
                            todo: true,
                            card: {
                                description: `Having now achieved a full out-of-body experience, I gaze down upon my drugged-out self. Set against the familiar backdrop of Los Angeles, this degrading sight reminds me that in having scuttled off to the Bay Area, I'm shirking my obligation to care for my autistic brother. My sister, on the other hand, still lives nearby. Guilt-ridden, I sarcastically note that "brother and sister taught him right."`,
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
                            // Just confirm. This may be the best it will be.
                            todo: true,
                            card: {
                                description: [
                                    `Our Inuit tribe has now ventured all the way to`,
                                    {
                                        anchor: `Nunavut`,
                                        wiki: `Nunavut`,
                                    },
                                    `, the northernmost territory of Canada. Yet with the reappearance of the Norse in my thoughts, I realize our bounds are not limitless, as even imaginations must repeat. There's no new ground left to cover, in both our fantasy epics and our everyday lives. And so, just as the "Norse" encounter the "Nunavutters," we end the night as we'd begun it, "no worse and none the better."`,
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
                                            `The arrival of`,
                                            {
                                                anchor: `Europeans into the Americas`,
                                                wiki: `European_colonization_of_the_Americas`,
                                            },
                                            `precipitated their rise to global power, just as it brought disease and ruin to the native populations. Similarly, while the day begins for many, it's now over for us, and we "leave as the red sun" arrives.`,
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
                                            `, who established Norse settlements in`,
                                            {
                                                anchor: `Greenland`,
                                                wiki: `Greenland`,
                                            },
                                            `.`,
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
                                    `Meanwhile, sensing disaster afoot, our brave tribe flees to safety "in some`,
                                    {
                                        anchor: `umiak`,
                                        wiki: `Umiak`,
                                    },
                                    `," an Inuit boat made of whalebone and sealskin, as we skim through icy channels wreaked by a "snowy blitz."`,
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
                        `For a song about recreational drug use, I naturally turned to the Beatles during their`,
                        {
                            anchor: `psychedelic`,
                            wiki: `Psychedelic_rock`,
                        },
                        `period for ideas. "`,
                        {
                            anchor: `Tomorrow Never Knows`,
                            wiki: `Tomorrow_Never_Knows`,
                        },
                        `" uses a`,
                        {
                            anchor: `tape loop`,
                            wiki: `Tape_loop`,
                        },
                        `to imitate a`,
                        {
                            anchor: `seagull`,
                            wiki: `Gull`,
                        },
                        `'s cry, which I tried to recreate by pinching off the airstream blown through the window of a recorder. The result wasn't what I'd hoped for, but here as background texture, it contributes nicely to the overall atmosphere.`,
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
                                    `around their necks resemble the neck fringes seen on`,
                                    {
                                        anchor: `vultures`,
                                        wiki: `Vulture`,
                                    },
                                    `, or "buzzards," as they are colloquially known.`,
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
                            card: {
                                description: `Howie is downstairs in "anguish" over still being "buzzed," as he downs cup after cup of water to quench his parched innards. Earlier that night, he'd opted for the large bottle of Robitussin, thinking the small one I recommended wouldn't be enough.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `find`,
                        {
                            anchor: `Rumspring`,
                            properNoun: true,
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
                                    `teenagers are encouraged to explore the secular world of the "English," as the non-Amish are called, in the hope that this will strengthen their faith. Though it means "running around" in`,
                                    {
                                        anchor: `Pennsylvania Dutch`,
                                        wiki: `Pennsylvania_German_language`,
                                    },
                                    `, I liked the mental picture of us dipping into a literal "rum spring." In any case, the spring of our youth, in both the literal and metaphorical sense, is running dry.`,
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
                                    `" is an alphabet developed by the early`,
                                    {
                                        anchor: `Mormons`,
                                        wiki: `Mormons`,
                                    },
                                    `. As it had once filled their mouths, a "desert" now fills ours.`,
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
                                        `"Black Latter-Day Saints to head." The Mormon Church, also known as the`,
                                        {
                                            anchor: `Latter-Day Saints`,
                                            wiki: `The_Church_of_Jesus_Christ_of_Latter-day_Saints`,
                                        },
                                        `, originally did not allow its`,
                                        {
                                            anchor: `Black members`,
                                            wiki: `Black_people_and_Mormonism`,
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
                            cards: [
                                {
                                    description: [
                                        `"'Rejoice!' bellow the reverends." Stuck with nothing to watch but early-morning`,
                                        {
                                            anchor: `televangelists`,
                                            wiki: `Televangelism`,
                                        },
                                        `, it occurs to me that every religion's early spirit eventually degrades into orthodoxy and routine, as does every person's youthful spirit in their later years. But in the meantime, we're just halfway through summer, and more nights of Robitussin await…`,
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
    ],
}
