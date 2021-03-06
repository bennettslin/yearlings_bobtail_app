import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    SONGCRAFT,
} from '../../../../app/constants/dots'

import {
    VERSES,
    CHORUS,
    INTRO,
    RESPONSE,
    OUTRO,
    IS_UNIT_DOT,
} from '../../../../app/constants/lyrics'

export default {
    path: 'm',
    title: 'M',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `Spanish guitar in measure 1`,
    playerStartTime: 1131.214,
    mixStartTime: `0:02:12.00`,
    overview: `After the breakup with Catherine, I vowed to spend the next five years shaping myself into the ideal romantic prospect. I started attending local shows, and by year five, I had cobbled together my own band, the Yearlings. I kept running into a fellow scenester named Mara, and I soon grew infatuated. But Mara ended up going out with my drummer Jacob, which made band practice awkward.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `To avoid mentioning Mara by name, I entitled this song "M," which I planned to explain by packing the lyrics with words that start with the letter M. Deep down, I probably knew I wasn't fooling anyone.`,
                    dotKeys: {
                        [BACKSTORY]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: INTRO,
                subVerseType: RESPONSE,
            },
            mainVerses: [
                {
                    mixTime: null,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Mara's theme)`,
                    },
                },
            ],
            subVerse: [
                {
                    mixTime: `0:35:03.13`,
                    lyricCentre: {
                        anchor: `Maravijaya…`,
                        properNoun: true,
                        todo: true,
                        card: {
                            description: [
                                {
                                    isItalic: true,
                                    lyric: {
                                        anchor: `Maravijaya,`,
                                        wiki: `Maravijaya_attitude`,
                                    },
                                },
                                `or "victory over Mara" in`,
                                {
                                    anchor: `Sanskrit,`,
                                    wiki: `Sanskrit`,
                                },
                                `is the seated posture of the`,
                                {
                                    anchor: `Buddha`,
                                    wiki: `Gautama_Buddha`,
                                },
                                `as he fended off temptation from the demon`,
                                {
                                    anchor: `Mara,`,
                                    wiki: `Mara_(demon)`,
                                },
                                `who personifies fear and death. Like the Buddha, I had to summon otherworldly reserves of self-denial to get through band practice after Jacob and Mara started dating.`,
                            ],
                            dotKeys: {
                                [OBSERVATION]: true,
                            },
                        },
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `This song is one of two on this album that was originally performed by the Yearlings. At the time, I kept its meaning a secret by disguising Mara's name in various puns. In this recording, of course, I exaggerated my enunciations to make the puns obvious.`,
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
                    mixTime: `0:37:22.81`,
                    lyric: [
                        `I was a lad bent on`,
                        {
                            anchor: `learning the talents`,
                            todo: true,
                            card: {
                                description: `It's not that I'd done anything wrong to cause the breakup with Catherine. I just didn't have all that much to offer. So it seemed illogical to keep trying the same approach, as if one day I should see a dramatically different result. To secure my future chances with women, what I needed was to take time off and build up a surplus of attractive traits. So I started with the ones that Catherine valued most.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:42:11.28`,
                    lyric: `that all clever girls need to see.`,
                },
                {
                    mixTime: `0:46:11.28`,
                    lyric: [
                        `Bit my`,
                        {
                            anchor: `sadness with patience,`,
                            todo: true,
                            card: {
                                description: `I'd spent my formative years as a child channeling my misery into various art projects, so this was all familiar terrain for me. Building yourself up into a desirable person, after all, is really just the ultimate art project.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:49:22.81`,
                    lyric: `with practice each day, then`,
                },
                {
                    mixTime: `0:52:06.66`,
                    lyric: [
                        `in`,
                        {
                            anchor: `five years`,
                            todo: true,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `five-year plans`,
                                        wiki: `Five-year_plans_for_the_national_economy_of_the_Soviet_Union`,
                                    },
                                    `of the Soviet Union were centrally organized mandates for rapid economic development. Five years thus seemed like the optimal time frame for my own plan for rapid character growth.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `I'd be one to keep.`,
                    ],
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
                    mixTime: `0:56:25.13`,
                    lyric: `This moron marooned, a method mapped in my cocoon`,
                },
                {
                    mixTime: `1:01:22.81`,
                    lyric: [
                        `to mold me into a`,
                        {
                            anchor: `mystery mensch.`,
                            todo: true,
                            card: {
                                description: `There was an obvious lesson to draw from the smattering of women I had somehow managed to attract up to this point in my life. All of them had been taken in by my appearance as an artsy loner, only to be turned off after finding that nothing of greater substance lay beneath. So my mission was to take this mistaken assumption that already existed and simply turn it into a correct one.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:06:02.05`,
                    lyric: {
                        anchor: `No minutiae left unmastered,`,
                        todo: true,
                        card: {
                            description: [
                                `Though the main goal was to be well versed in all the important subjects, I derived the most satisfaction from being able to display some random skill with seeming nonchalance. So I made sure to set aside time for purely fanciful pursuits, like learning to solve the`,
                                {
                                    anchor: `Rubik's Cube.`,
                                    wiki: `Rubik's_Cube`,
                                },
                            ],
                            dotKeys: {
                                [BACKSTORY]: true,
                            },
                        },
                    },
                },
                {
                    mixTime: `1:09:13.58`,
                    lyric: [
                        {
                            anchor: `music cred`,
                            todo: true,
                            card: {
                                description: `I'd always detected a whiff of disdain from the Berkeley record store clerks who rang up my purchases. With my quest for self-betterment, I overcame my feelings of intimidation and began to ask them for recommended listening.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `with`,
                        {
                            anchor: `mindful manners`,
                            todo: true,
                            card: {
                                description: `I also decided to stop using swear words. I figured it would be a definite win with any woman who didn't curse, while all others would find its quaintness charming.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `merge.`,
                    ],
                },
                {
                    mixTime: `1:11:27.43`,
                    lyric: [
                        {
                            anchor: `Once I metamorphose,`,
                            todo: true,
                            card: {
                                description: `In other words, upon completion of my metamorphosis, it would then be the case that once I "met a Mara, for" certain I was to impress her.`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `certain I'd impress.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `I quickly abandoned my original plan to pack the lyrics with M words after this stanza proved how unfeasible an entire song written in this manner would be.`,
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
                    mixTime: `1:17:04.35`,
                    lyric: [
                        {
                            anchor: `Year five,`,
                            todo: true,
                            card: {
                                description: [
                                    `The Soviet Union's`,
                                    {
                                        anchor: `first five-year plan`,
                                        wiki: `First_five-year_plan`,
                                    },
                                    `was also its most brutal, as the disruptive shock of forcibly industrializing an agrarian society led to widespread famine and death. Similarly, given how far behind I was starting out and how much ground I needed to cover, it was naive to think that my own five-year plan for accelerated growth could be free of unintended effects.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `and now the one who dug me up`,
                    ],
                },
                {
                    mixTime: `1:19:18.20`,
                    lyric: [
                        `spent her`,
                        {
                            anchor: `wishes on a friend,`,
                            todo: true,
                            card: {
                                description: [
                                    `Toward the end of my five-year plan, the Yearlings were regularly playing local shows. I was thrilled when I first spotted Mara in the audience, thinking that all my hard work putting this band together was about to pay off. But it was Jacob who caught her eye. I felt like the`,
                                    {
                                        anchor: `bottled genie`,
                                        wiki: `Jinn`,
                                    },
                                    `of Arabian folklore, with good fortunes to bestow upon others but only freedom from self-imposed isolation to grant myself.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:22:02.05`,
                    lyric: [
                        `while forever I'll`,
                        {
                            anchor: `hold in peace`,
                            todo: true,
                            card: {
                                description: `So Jacob got together with Mara without any effort, while romance for me felt no less elusive than ever. I had to come to terms with the reality that my five-year plan was a total washout.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:23:27.43`,
                    lyric: `these words unsaid.`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `Back when I first started to play the banjo, I would strum the motions of Earl Scruggs's`,
                        {
                            anchor: `three-finger roll`,
                            wiki: `Scruggs_style`,
                        },
                        `on my kneecap day and night. From there, it naturally crossed over to my guitar fingerpicking technique, as can be heard on the Spanish guitar here.`,
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
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `1:26:29.75`,
                    lyric: [
                        `Hopes wrapped in`,
                        {
                            anchor: `marinaded confections,`,
                            todo: true,
                            card: {
                                description: `Or they were wrapped in my "Mara-needed confessions."`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `but`,
                    ],
                },
                {
                    mixTime: `1:29:13.58`,
                    lyric: [
                        `before`,
                        {
                            anchor: `tomorrow never sent.`,
                            todo: true,
                            card: {
                                description: `Or else, these hopes were never before sent "to Mara."`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:31:27.43`,
                    lyric: [
                        {
                            anchor: `Signed off "love me"`,
                            todo: true,
                            card: {
                                description: `Back when emails were still treated like personal letters, I would sign off with "love Bennett," absent a comma after the valediction out of laziness. Catherine once joked that it sounded like a command spoken in desperation.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `is how`,
                    ],
                },
                {
                    mixTime: `1:34:02.05`,
                    lyric: `my life and letters end.`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `As the Yearlings, we would perform this song at breakneck speed, but in this recording I moderated the tempo to make the lyrics intelligible. Even so, my drumming skills were still not up to par, so I recorded the drum tracks at a lower tape speed, which brought them to the proper tempo upon normal playback.`,
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
                    mixTime: `1:36:06.66`,
                    lyric: [
                        {
                            anchor: `Morphined,`,
                            todo: true,
                            card: {
                                description: `Or I would be a "Mara fiend," which is a slightly different kind of addict.`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `I'll probably`,
                        {
                            anchor: `die pushing forty,`,
                            todo: true,
                            card: {
                                description: `Like the Soviets, I needed to take in stride the failures of my first five-year plan. Having banked on rapid character growth, I couldn't cut my losses now. I had nothing to my name other than what the next five-year plan might gain for me. Or failing that, the next one after. Yet five years is a huge chunk of lifetime to mete out all at once, and I only had so many decades remaining. The occasion became ripe to reflect on my mortality.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `exiled`,
                    ],
                },
                {
                    mixTime: `1:41:04.35`,
                    lyric: [
                        `to a`,
                        {
                            anchor: `sand castle built by low tide.`,
                            todo: true,
                            card: {
                                description: `To compound the failures of my first five-year plan, it was clear that in the interim I had missed out on some crucial personal development that Jacob and others had naturally come by. And there was no guarantee another five-year plan wouldn't blindside me in the same manner. I feared a future as a stunted man-child, forever chasing ambitions at once both infantile and futile, like building castles out of sand.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    /**
                     * 33 perfect age.
                     */
                    mixTime: `1:45:13.58`,
                    lyric: `Far too old to be martyred,`,
                },
                {
                    mixTime: `1:48:25.13`,
                    lyric: `too young to grow smarter,`,
                },
                {
                    /**
                     * Mara nursed child. Job, tie
                     */
                    mixTime: `1:51:08.97`,
                    lyric: [
                        `a`,
                        {
                            anchor: `mariner's child`,
                            todo: true,
                            card: {
                                description: `Or else, I would die as a "Mara-nursed" child.`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `who hanged from this tie.`,
                    ],
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
                    mixTime: `1:56:15.89`,
                    lyric: [
                        `Panoramic prints pending my soon-to-be`,
                        {
                            anchor: `Moonie wedding,`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `Unification Church`,
                                        wiki: `Unification_Church`,
                                    },
                                    `founded by`,
                                    {
                                        anchor: `Sun Myung Moon`,
                                        wiki: `Sun_Myung_Moon`,
                                    },
                                    `is widely seen as a cult due to its aggressive`,
                                    {
                                        anchor: `proselytism.`,
                                        wiki: `Proselytism`,
                                    },
                                    `It is perhaps best known for its`,
                                    {
                                        anchor: `mass weddings`,
                                        wiki: `Blessing_ceremony_of_the_Unification_Church`,
                                    },
                                    `in which thousands of congregants, informally known as Moonies, are paired off with perfect strangers. I found the thought humorously enticing that I could simply accept a campus Moonie's pamphlet, and my long, hard struggle to find a romantic partner would be over in an instant.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:01:04.35`,
                    lyric: [
                        `fools once expecting their`,
                        {
                            anchor: `"Made in America" signs.`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: `To promote cross-cultural harmony, the pairings in these mass weddings are often international by design. So my Moonie bride might possibly be a foreigner, one who was foolish enough to choose this venture solely for the chance to raise a family of native-born American children. Of course, I would be just as foolish to believe that my "maiden Mara co-signs" the marriage license in good faith.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:5:04.35`,
                    lyric: [
                        `In a`,
                        {
                            anchor: `time capsule`,
                            todo: true,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `time capsule`,
                                        wiki: `Time_capsule`,
                                    },
                                    `is a vessel of contemporary objects that will be seen as historical artifacts once rediscovered by a later era. In a way, it allows past generations to speak to future ones. Similarly, in my dejected state, I could only envision my next five-year plan as a forum to air my grievances to a captive future audience.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `sealed`,
                    ],
                },
                {
                    mixTime: `2:08:06.66`,
                    lyric: `with pages of defeated spiels`,
                },
                {
                    mixTime: `2:10:20.52`,
                    lyric: [
                        {
                            anchor: `lies that marionette`,
                            todo: true,
                            card: {
                                description: [
                                    `There was a comfort in having all my priorities settled in advance by the five-year plan. Since I always knew with certainty the right course of action, I could undertake it with conviction. I was like a`,
                                    {
                                        anchor: `marionette`,
                                        wiki: `Marionette`,
                                    },
                                    `being made to posture by the hidden hand of my naive younger self. Of course, I eagerly donned these strings only because I believed my younger self's lies, namely that "Mara you'll net" by doing so.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `in this`,
                        {
                            anchor: `heap of twisted twine.`,
                            todo: true,
                            card: {
                                description: `With no results to show after five years of diligent effort, I was paralyzed by doubt. There were no more actions I could confidently prescribe to better my circumstances. And so the puppet of my future self could only lie there motionless.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
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
                    mixTime: `2:16:06.66`,
                    lyric: `All I know is that whoever finds me`,
                },
                {
                    mixTime: `2:18:20.52`,
                    lyric: [
                        `keeps me`,
                        {
                            anchor: `solely for a pet.`,
                            todo: true,
                            card: {
                                description: `After Mara started dating Jacob, she continued to interact with me in the same flirtatious manner, which made me realize that I had misread her intentions all along.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:21:04.35`,
                    lyric: [
                        `With her "I do,"`,
                        {
                            anchor: `my life in marriage`,
                            todo: true,
                            card: {
                                description: `Or else, my life in "Mara." I thought I had chosen to leave out this particular pun, but the exaggerated pronunciation is distinctly there in the recording…`,
                                dotKeys: {
                                    [SONGCRAFT]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:22:20.52`,
                    lyric: [
                        `is choked down my`,
                        {
                            anchor: `no-hope chest.`,
                            todo: true,
                            card: {
                                description: [
                                    `Traditionally, a`,
                                    {
                                        anchor: `hope chest`,
                                        wiki: `Hope_chest`,
                                    },
                                    `was a piece of furniture for storing the assorted dishware and linens gathered by a young woman in preparation for married life. By keeping my feelings of hopelessness close to my literal chest, I was also sealing this figurative chest of mine.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
                subsequent: true,
            },
            mainVerses: [
                {
                    /**
                     * TODO: link to urchin in Odin?
                     */
                    mixTime: `2:26:02.05`,
                    lyric: [
                        `Her lispy kiss unlucky for this`,
                        {
                            anchor: `chimney sweep,`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `British tradition holds that a kiss from a`,
                                        {
                                            anchor: `chimney sweep`,
                                            wiki: `Chimney_sweep`,
                                        },
                                        `will bring good luck to a bride. But in the`,
                                        {
                                            anchor: `Victorian era,`,
                                            wiki: `Victorian_era`,
                                        },
                                        `the children who cleared soot from chimneys were neglected orphans. Whatever fortunes they imparted to others, only a lifetime of ill health awaited for themselves. Likewise, having introduced Mara to Jacob, it was now on me to get on with my lonely life.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    wormhole: `chimney_sweep`,
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `2:28:15.89`,
                    lyric: [
                        {
                            anchor: `indentures dumbed`,
                            todo: true,
                            card: {
                                description: [
                                    `Chimney sweep apprentices were typically employed as`,
                                    {
                                        anchor: `indentured servants`,
                                        wiki: `Indentured_servant`,
                                    },
                                    `at a young age. But given that I might have to spend countless years in servitude to my five-year plans before I could be my own person again, I was effectively "in dentures" already, and thus unable to speak.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `as a boy.`,
                    ],
                },
                {
                    mixTime: `2:30:29.75`,
                    lyric: [
                        `Whispered`,
                        {
                            isItalic: true,
                            lyric: `"adieu,"`,
                        },
                        `I bade them`,
                        {
                            anchor: `to fare well,`,
                            todo: true,
                            card: {
                                description: `Jacob was my friend, of course, and I was happy that he had found Mara. But I also wasn't eager to stick around. So as I imagined them exchanging their vows of "I do," I silently offered a vow of my own to bid them "two farewell."`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:32:25.13`,
                    lyric: `then turned to hug the void.`,
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `2:35:27.43`,
                    lyric: [
                        `But then I saw the`,
                        {
                            anchor: `world's a naked baby,`,
                            todo: true,
                            card: {
                                description: `At some point, I realized that the world does what it does simply because it is what it is. Nothing is hidden from view, and any situation can be understood by reading it closely, no differently than learning from a textbook.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:38:11.28`,
                    lyric: `cradled safely in my lap.`,
                },
                {
                    mixTime: `2:40:25.13`,
                    lyric: `It dropped a poop, but somehow I knew`,
                },
                {
                    mixTime: `2:42:20.52`,
                    lyric: {
                        anchor: `to have a merry ol' laugh.`,
                        todo: true,
                        card: {
                            description: `Or to have a "Mara, you'll" laugh. After all, if the world is as guileless as a newborn, then it makes no sense to get upset when it unwittingly makes a mess of things.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                                [PUN]: true,
                            },
                        },
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `2:45:22.81`,
                    lyric: `And now I wonder if the answer might be`,
                },
                {
                    mixTime: `2:48:06.66`,
                    lyric: `to know: the rule for a girl`,
                },
                {
                    mixTime: `2:50:20.52`,
                    lyric: [
                        `is that the`,
                        {
                            anchor: `boy who's to love her baby`,
                            todo: true,
                            card: {
                                description: `And if a woman's list of ideal traits in a man includes what kind of father he'll be to her child, then she's likely to judge him by how he interacts with the world at large.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:52:25.13`,
                    lyric: `should first love the world.`,
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `2:55:18.20`,
                    lyric: [
                        {
                            anchor: `Moral is`,
                            todo: true,
                            card: {
                                description: `Or else, while I'm "Mara-less."`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `it's up to me to`,
                        {
                            anchor: `be alert;`,
                            todo: true,
                            card: {
                                description: `In short, it was no mystery why the situation with Mara had transpired the way it had. I found this thought to be empowering, because it meant that the Maras of the world might still be attainable. It was just on me to figure out what they wanted. And once I knew, I could build myself up to be exactly that.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:58:02.05`,
                    lyric: `nothing comes a pure surprise.`,
                },
                {
                    mixTime: `3:00:15.89`,
                    lyric: `Sometimes if it's all to work`,
                },
                {
                    mixTime: `3:02:11.28`,
                    lyric: {
                        anchor: `friends have to lie.`,
                        todo: true,
                        card: {
                            description: `But I couldn't rely on my friends for the truth. As dear as they all were to me, they each had their own agenda.`,
                            dotKeys: {
                                [OBSERVATION]: true,
                            },
                        },
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `3:05:13.58`,
                    lyric: `And sometimes situations seem the worst,`,
                },
                {
                    mixTime: `3:07:27.43`,
                    lyric: `but in a year, they're never bad.`,
                },
                {
                    mixTime: `3:10:11.28`,
                    lyric: [
                        `Five more, she'll dig up`,
                        {
                            anchor: [
                                {
                                    isItalic: true,
                                    lyric: `Bobtail`,
                                },
                                `'s words—`,
                            ],
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `Recognizing that what I wanted was Mara or someone like Mara, and taking stock of where I needed to be to fulfill this wish, I decided to return to what I do best. I would hole up in emotional seclusion, this time to work on an ambitious magnum opus. My next five-year plan would have me score all the parts and play all the instruments on`,
                                    {
                                        isItalic: true,
                                        lyric: `Bobtail,`,
                                    },
                                    `now conceived as the`,
                                    {
                                        isItalic: true,
                                        lyric: `Ulysses`,
                                    },
                                    `of rock albums.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `3:12:15.89`,
                    lyric: `I'm not sad!`,
                },
            ],
        },
        {
            unitMap: {
                formType: OUTRO,
            },
            mainVerses: [
                {
                    mixTime: `3:15:08.97`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(glockenspiel)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `My original plan was to take the puns one level further by recording this song in a`,
                        {
                            anchor: `"Mara-iachi"`,
                            wiki: `Mariachi`,
                        },
                        `style. But I decided it wouldn't fit the song's tempo and quickly scrapped it. Still, it gave me an idea to model the outro after the`,
                        {
                            anchor: `Los Lobos`,
                            wiki: `Los_Lobos`,
                        },
                        `cover version of`,
                        {
                            anchor: `"La Bamba,"`,
                            wiki: `La_Bamba_(song)`,
                        },
                        `which ends with an uptempo rendition played on Mexican folk instruments.`,
                    ],
                    dotKeys: {
                        [PUN]: true,
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
    ],
}
