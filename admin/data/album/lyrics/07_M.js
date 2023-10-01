import {
    BACKSTORY,
    OBSERVATION,
    PUN,
    SONGCRAFT,
} from '../../../../src/constants/dots'

import {
    VERSES,
    CHORUS,
    INTRO,
    RESPONSE,
    OUTRO,
    IS_UNIT_DOT,
    FLASHBACK_TO_WORMHOLE_PREFIX,
    FORESHADOW_OF_WORMHOLE_PREFIX,
} from '../../../../src/constants/lyrics'

export default {
    title: 'M',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `Spanish guitar in measure 1`,
    playerStartTime: 1131.214,
    mixStartTime: `0:02:12.00`,
    todo: true,
    problem: `Too many sentences of the same length?`,
    overview: `After the breakup with Catherine, I vowed to spend the next five years shaping myself into the ideal romantic prospect. I began to attend local shows during this time, and by the fifth year, I'd cobbled together my own band, the Yearlings. There was a fellow scenester named Mara whom I noticed from afar, and I soon grew infatuated. But Mara ended up going out with my drummer Jacob, which made band practice awkward.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `To avoid mentioning Mara by name, I came up with the song title "M," which I planned to explain by packing the lyrics with words that start with the letter M. I probably wasn't fooling anyone.`,
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
                        lyric: `(electric guitar, Mara's theme)`,
                    },
                },
            ],
            subVerse: [
                {
                    mixTime: `0:35:03.13`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: [
                            {
                                anchor: `Maravijaya`,
                                properNoun: true,
                                card: {
                                    description: [
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `Maravijaya`,
                                                wiki: `Maravijaya_attitude`,
                                            },
                                        },
                                        `, or "victory over`,
                                        {
                                            anchor: `Mara`,
                                            wiki: `Mara_(demon)`,
                                        },
                                        `" in`,
                                        {
                                            anchor: `Sanskrit`,
                                            wiki: `Sanskrit`,
                                        },
                                        `, is the seated posture of the`,
                                        {
                                            anchor: `Buddha`,
                                            wiki: `Gautama_Buddha`,
                                        },
                                        `as he fends off temptation from the demon Mara, who personifies death. Like the Buddha, I had to summon otherworldly reserves of self-denial to get through band practice after Jacob and Mara started dating.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            },
                            `…`,
                        ],
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `This song is one of two on this album that was originally performed by the Yearlings. At the time, I kept its meaning a secret by disguising Mara's name in various puns. But in this recording, my enunciations are exaggerated to make the puns obvious.`,
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
                            review: true,
                            card: {
                                description: `It's not that I'd done anything wrong to make Catherine break up with me; I just didn't have much to offer. As such, it seemed illogical to pursue the next relationship in the same manner. To secure my future chances, I needed to take time off and build up a surplus of attractive traits. So I started with the ones that Catherine valued most.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                            anchor: `sadness with patience`,
                            todo: true,
                            problem: `Review one more time.`,
                            card: {
                                description: `Luckily, this was familiar terrain for me, since I'd already spent my childhood learning to channel misery into various art projects. Remaking yourself into a desirable person, after all, is really just the ultimate art project.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `,`,
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
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `five-year plans`,
                                        wiki: `Five-year_plans_for_the_national_economy_of_the_Soviet_Union`,
                                    },
                                    `of the`,
                                    {
                                        anchor: `Soviet Union`,
                                        wiki: `Soviet_Union`,
                                    },
                                    `were centrally organized mandates for rapid economic development. Five years thus seemed like the optimal time frame to carry out my own plan for rapid character growth.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                            anchor: `mystery mensch`,
                            todo: true,
                            problem: `The benefit of having a popular older sister in high school is that I knew…`,
                            card: {
                                description: `I'd managed to attract a smattering of women up to this point in my life, which allowed me to see a pattern: All of them had been taken in by my appearance as an artsy loner, only to be turned off after finding that nothing of greater substance lay beneath. So my mission was to turn this mistaken assumption into a correct one.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `1:06:02.05`,
                    lyric: [
                        {
                            // NOTE: I changed this from minutiae.
                            anchor: `No minutia left unmastered`,
                            card: {
                                description: [
                                    `Though my goal was to be well versed in every important subject matter, I got the most satisfaction from showing off a random skill with seeming nonchalance. So I made sure to set aside time for purely fanciful pursuits, like learning to solve a`,
                                    {
                                        anchor: `Rubik's Cube`,
                                        wiki: `Rubik's_Cube`,
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
                    mixTime: `1:09:13.58`,
                    lyric: [
                        {
                            anchor: `music cred`,
                            card: {
                                description: [
                                    `I always detected a whiff of disdain from the`,
                                    {
                                        anchor: `Berkeley`,
                                        wiki: `Berkeley,_California`,
                                    },
                                    `record store clerks who rang up my purchases. With my quest for self-betterment, I overcame my intimidation and began to ask them for recommended listening.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `with`,
                        {
                            anchor: `mindful manners`,
                            todo: true,
                            problem: `Review one more time.`,
                            card: {
                                description: `Catherine didn't like to hear swear words, so I decided to stop swearing as well. I figured this would be a definite win with others like her, while the rest would find its quaintness charming.`,
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
                            anchor: `Once I metamorphose`,
                            card: {
                                description: `Upon completion of my metamorphosis, once I "met a Mara, for" certain I was to impress her.`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `, certain I'd impress.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `I abandoned my plan to pack the lyrics with M words after this stanza proved how unfeasible it would be to write an entire song in this manner.`,
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
                            anchor: `Year five`,
                            review: true,
                            card: {
                                description: [
                                    `The Soviet Union's`,
                                    {
                                        anchor: `first five-year plan`,
                                        wiki: `First_five-year_plan`,
                                    },
                                    `was also its most brutal, as the forced industrialization of agrarian societies led to widespread famine and death. Similarly, given how far behind I was starting out, it was naive to think that my own five-year plan for accelerated growth could be free of unintended consequences.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, and now the one who dug me up`,
                    ],
                },
                {
                    mixTime: `1:19:18.20`,
                    lyric: [
                        `spent her`,
                        {
                            anchor: `wishes on a friend`,
                            todo: true,
                            problem: `Needs to make it more clear that when Mara was finally in the audience, I was thrilled.`,
                            card: {
                                description: [
                                    `Toward the end of my five-year plan, the Yearlings were regularly playing local shows. I was thrilled to spot Mara in the audience. But it was Jacob who caught her eye. I felt like the`,
                                    {
                                        anchor: `bottled genie`,
                                        wiki: `Jinn`,
                                    },
                                    `of Arabian folklore, with good fortunes to bestow upon others but only freedom from isolation to hope for myself.`,
                                ],
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
                    mixTime: `1:22:02.05`,
                    lyric: [
                        `while forever I'll`,
                        {
                            anchor: `hold in peace`,
                            todo: true,
                            problem: `Review one more time.`,
                            card: {
                                description: `So Jacob got together with Mara without any effort, while romance for me felt no less elusive than ever. I thus came to realize that my five-year plan was a washout.`,
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
                card: {
                    description: [
                        `Back when I was learning to play the banjo, I would strum the motions of`,
                        {
                            anchor: `Earl Scruggs`,
                            wiki: `Earl_Scruggs`,
                        },
                        `'s`,
                        {
                            anchor: `three-finger roll`,
                            wiki: `Scruggs_style`,
                        },
                        `on my thigh wherever I went. From there, it crossed over to my guitar fingerpicking technique, as can be heard on the`,
                        {
                            anchor: `Spanish guitar`,
                            wiki: `Classical_guitar`,
                        },
                        `here.`,
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
                            anchor: `marinaded confections`,
                            card: {
                                description: `Or, they were wrapped in my "Mara-needed confessions."`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `, but`,
                    ],
                },
                {
                    mixTime: `1:29:13.58`,
                    lyric: [
                        `before`,
                        {
                            anchor: `tomorrow never sent`,
                            card: {
                                description: `Or else, these hopes were never before sent "to Mara."`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `1:31:27.43`,
                    lyric: [
                        {
                            // NOTE: I capitalised my name.
                            anchor: `Signed off "Love me"`,
                            card: {
                                description: `Back when we all treated emails like personal letters, I would close with "Love Bennett," absent a comma out of laziness. Catherine once joked that this sounded like a command spoken in desperation.`,
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
                card: {
                    description: [
                        `Being a`,
                        {
                            anchor: `cowpunk`,
                            wiki: `Cowpunk`,
                        },
                        `band, the Yearlings would perform this song at breakneck speed. But I moderated the tempo in this recording to make the lyrics intelligible. Even so, my drumming skills weren't up to par. So I recorded the drum tracks at a lower tape speed, which brought them to the proper tempo upon normal playback.`,
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
                    mixTime: `1:36:06.66`,
                    lyric: [
                        {
                            anchor: `Morphined`,
                            card: {
                                description: `Or, I would be a "Mara fiend"— a slightly different kind of addict.`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `, I'll probably`,
                        {
                            anchor: `die pushing forty`,
                            card: {
                                description: `Like the Soviets, I needed to take in stride the failures of my first five-year plan. Having banked on rapid character growth, I couldn't cut my losses now. I had nothing to my name other than what the next five-year plan might gain for me. Or failing that, the next one after. Yet five years is a huge chunk of lifetime to mete out all at once, and I only had so many decades remaining. The occasion became ripe to reflect on my mortality.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `, exiled`,
                    ],
                },
                {
                    mixTime: `1:41:04.35`,
                    lyric: [
                        `to a`,
                        {
                            anchor: `sand castle built by low tide`,
                            todo: true,
                            problem: `Last sentence still needs work.`,
                            card: {
                                description: `Beyond the immediate failures of my first five-year plan, I'd clearly missed out on some personal development that others had naturally come by. And there was no guarantee that another five-year plan wouldn't blindside me in the same manner. I saw my future self as a stunted man-child, forever chasing ambitions both infantile and futile, like building castles out of sand.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `.`,
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
                            anchor: `Moonie wedding`,
                            properNoun: true,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `Unification Church`,
                                        wiki: `Unification_Church`,
                                    },
                                    `, founded by`,
                                    {
                                        anchor: `Sun Myung Moon`,
                                        wiki: `Sun_Myung_Moon`,
                                    },
                                    `, is known for its aggressive`,
                                    {
                                        anchor: `proselytism`,
                                        wiki: `Proselytism`,
                                    },
                                    `, as well as its`,
                                    {
                                        anchor: `mass weddings`,
                                        wiki: `Blessing_ceremony_of_the_Unification_Church`,
                                    },
                                    `in which thousands of congregants are paired off with perfect strangers. Whenever a Moonie accosted me on campus, the thought would amuse me that I could just accept their invitation, and my struggle to find a romantic partner would be over in an instant.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `2:01:04.35`,
                    lyric: [
                        `fools once expecting their`,
                        {
                            anchor: `"Made in America" signs`,
                            properNoun: true,
                            card: {
                                description: `To promote cross-cultural harmony, the pairings in these mass weddings are often international by design. Which means my Moonie bride might be a foreigner who cleverly joined the church just to start a family in America. And if so, I would be a fool to believe my "maiden Mara co-signs" the marriage license in good faith.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `2:5:04.35`,
                    lyric: [
                        `In a`,
                        {
                            anchor: `time capsule`,
                            todo: true,
                            problem: `Revised, but still not written well.`,
                            card: {
                                description: [
                                    `In my dejection, I could only envision the next five-year plan as a`,
                                    {
                                        anchor: `time capsule`,
                                        wiki: `Time_capsule`,
                                    },
                                    `of sorts. This would allow me to express my frustrations to a sympathetic future audience.`,
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
                            cards: [
                                {
                                    description: [
                                        `There was comfort in having all my priorities settled in advance by a five-year plan. Since I always knew with certainty the right course of action, I could undertake it with conviction. I was like a`,
                                        {
                                            anchor: `marionette`,
                                            wiki: `Marionette`,
                                        },
                                        `being made to posture by the hidden hand of my younger self. Of course, I eagerly donned these strings only because I believed my younger self's lies, that a "Mara you'll net" by doing so.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `puppet`,
                                        wormholePrefix: FLASHBACK_TO_WORMHOLE_PREFIX,
                                    },
                                },
                            ],
                        },
                        `in this`,
                        {
                            anchor: `heap of twisted twine`,
                            card: {
                                description: `But with nothing to show after five years of diligent effort, I was now paralyzed by doubt. I knew of no other actions to take that might better my circumstances. And so the puppet of my future self lay motionless before me.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
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
                            anchor: `solely for a pet`,
                            todo: true,
                            problem: `Make this more about the ways of cool kids in a social scene being foreign to me, and this is a mixed blessing because it meant I was part of a social scene.`,
                            card: {
                                description: `After Mara started dating Jacob, she continued to interact with me in the same manner, which made me realize that I'd misread her intentions all along. In retrospect, I was so unused to being treated with genial regard that it felt like being flirted with.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `2:21:04.35`,
                    lyric: [
                        `With her "I do,"`,
                        {
                            anchor: `my life in marriage`,
                            card: {
                                description: `Or else, my life in "Mara." I thought I'd chosen to leave out this particular pun, but the exaggerated pronunciation is definitely there in the recording…`,
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
                            anchor: `no-hope chest`,
                            todo: true,
                            problem: `Review one more time.`,
                            cards: [
                                {
                                    description: [
                                        `Traditionally, a`,
                                        {
                                            anchor: `hope chest`,
                                            wiki: `Hope_chest`,
                                        },
                                        `stored the assorted dishware and linens gathered by a young woman in preparation for married life. By keeping my feelings of hopelessness close to my literal chest, I was also sealing off this figurative chest of mine.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `hope_chest`,
                                        wormholePrefix: FORESHADOW_OF_WORMHOLE_PREFIX,
                                    },
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
                            anchor: `chimney sweep`,
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
                                            anchor: `Victorian era`,
                                            wiki: `Victorian_era`,
                                        },
                                        `, the children who cleared soot from chimneys were neglected orphans. Whatever fortunes they imparted to others, only a lifetime of ill health awaited themselves. Likewise, I'd helped introduce Mara to Jacob, and now it was on me to get on with my wretched life.`,
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
                        `,`,
                    ],
                },
                {
                    mixTime: `2:28:15.89`,
                    lyric: [
                        {
                            anchor: `indentures dumbed`,
                            card: {
                                description: [
                                    `Chimney sweeps were typically apprenticed as`,
                                    {
                                        anchor: `indentured servants`,
                                        wiki: `Indentured_servant`,
                                    },
                                    `at a young age. But in my case, I was to remain in servitude to my five-year plans until I was an old man. By then, I'd be "in dentures" and thus unable to speak for myself.`,
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
                        `Whispered "`,
                        {
                            isItalic: true,
                            lyric: `adieu`,
                        },
                        `," I bade them`,
                        {
                            anchor: `to fare well`,
                            card: {
                                description: `Jacob was my friend, and I was happy that he'd found Mara. Still, I wasn't eager to stick around. So after imagining them to exchange vows of "I do," I silently offered a vow of my own to bid them "two farewell."`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `,`,
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
                            anchor: `world's a naked baby`,
                            card: {
                                description: `But at some point, I realized that a social scene isn't any different from the world at large. Nothing is hidden from view, and any situation can be understood by observing its various interactions, no less than a holistic picture of the world can be pieced together by reading books on various subject matters.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `,`,
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
                    lyric: [
                        {
                            anchor: `to have a merry ol' laugh`,
                            todo: true,
                            problem: `Review one more time.`,
                            card: {

                                description: `Or, to have a "Mara, you'll" laugh. In other words, everyone just does what they do, and the world is no more than the sum total of that. There's no hidden agenda; no one has it in for me. And so I can only react with good humor if the world gets in the way of my best laid plans.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
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
                    // NOTE: I removed the colon.
                    lyric: `to know the rule for a girl`,
                },
                {
                    mixTime: `2:50:20.52`,
                    lyric: [
                        `is that the`,
                        {
                            anchor: `boy who's to love her baby`,
                            todo: true,
                            problem: `Last sentence runs on.`,
                            card: {
                                description: `In short, the world is as guileless and unwitting as a newborn infant. Which means if a woman's list of ideal traits in a man includes what kind of father he'll be to her child, then she's likely to judge him by how he treats the world at large.`,
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
                            card: {
                                description: `Or else, while I'm "Mara-less."`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `it's up to me to`,
                        {
                            anchor: `be alert`,
                            todo: true,
                            problem: `Make sure this is really saying what I want it to say.`,
                            card: {
                                description: `It was no mystery why the situation with Mara transpired as it had. I'd simply misread it, and that was my fault. I found this thought empowering, because it meant that the Maras of the world were still attainable. It was just on me to understand what they wanted. And then I could build myself up to offer exactly that.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `;`,
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
                    lyric: [
                        {
                            anchor: `friends have to lie`,
                            todo: true,
                            problem: `I don't think I like what this is saying. I don't really like the neck phrase. Make sure it flows from the previous one.`,
                            card: {
                                description: `But I couldn't rely on my friends to be truthful about what I had to offer. As dear as we were to each other, they each had their own neck to protect.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
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
                                `'s words`,
                            ],
                            properNoun: true,
                            review: true,
                            card: {
                                description: [
                                    `Recognizing my wish to be with someone like Mara, and taking stock of what was needed to fulfill it, I decided to return to what I do best, and hole up in seclusion— this time to work on a magnum opus. My next five-year plan would see me write all the lyrics, score all the parts, and perform all the tracks on`,
                                    {
                                        isItalic: true,
                                        lyric: `Bobtail`,
                                    },
                                    `— now conceived as the "`,
                                    {
                                        isItalic: true,
                                        lyric: `Ulysses`,
                                    },
                                    `of rock albums."`,
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
                        lyric: `(glockenspiel and acoustic guitar)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                review: true,
                card: {
                    description: [
                        `My original plan was to take the puns one step further by recording this song in a "`,
                        {
                            anchor: `Mara-iachi`,
                            wiki: `Mariachi`,
                        },
                        `" style. But I decided it wouldn't fit the song's natural tempo and scrapped it. Still, it gave me an idea to model the outro after the`,
                        {
                            anchor: `Los Lobos`,
                            wiki: `Los_Lobos`,
                        },
                        `cover version of "`,
                        {
                            anchor: `La Bamba`,
                            wiki: `La_Bamba_(song)`,
                        },
                        `," which ends with an uptempo rendition played on Mexican folk instruments.`,
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
