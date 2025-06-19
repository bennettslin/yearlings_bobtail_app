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
import { REDO, REST, REVIEW, REVISE } from '../../../containers/Annotations/constants/todos'

export default {
    title: 'M',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `Spanish guitar in measure 1`,
    playerStartTime: 1131.214,
    mixStartTime: `0:02:12.00`,
    overview: `After Catherine broke up with me, I vowed to spend the next five years shaping myself into the ideal romantic prospect. As part of this plan, I got involved in the local scene and eventually put together my own band, the Yearlings; by the fifth year, we were playing house parties and small clubs. I soon grew infatuated with a scenester named Mara, whom I noticed from afar. But Mara ended up going out with my drummer Joi, which made band practice awkward.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `To avoid mentioning Mara by name, I came up with the song title "M," which I planned to explain by packing the lyrics with words that start with the letter M. I probably wasn't fooling anyone, though.`,
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
                                        `, or "victory over Mara" in Sanskrit, is the seated posture of the Buddha as he fends off temptation from the demon`,
                                        {
                                            anchor: `Mara`,
                                            wiki: `Mara_(demon)`,
                                        },
                                        `, who personifies death. Like the Buddha, I had to summon otherworldly reserves of self-denial to get through band practice after Joi and Mara started dating.`,
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
                    description: `This song is one of two on the album that was originally performed by the Yearlings. At the time, I kept its meaning a secret by disguising Mara's name in various puns. But in this recording, my enunciations are exaggerated to make the puns obvious.`,
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
                            card: {
                                description: `It's not that I'd done anything wrong to make Catherine break up with me; I just didn't have much to offer. For this reason, it seemed illogical to pursue my next relationship in the same manner. To secure all future chances, I needed to take time off and build up a surplus of attractive traits. So I started with the ones that Catherine valued most.`,
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
                            card: {
                                description: `Luckily, this was familiar terrain for me. After all, I'd spent my childhood channeling misery into various art projects. And remaking yourself into a desirable person is really just the ultimate art project.`,
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
                            todo: REVIEW,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `five-year plans`,
                                        wiki: `Five-year_plans_for_the_national_economy_of_the_Soviet_Union`,
                                    },
                                    `of the Soviet Union were centralized mandates for rapid economic growth. Five years thus seemed like a good time frame to carry out my plan for rapid character growth.`,
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
                            card: {
                                description: `Unlike me, my older sister was popular in high school. So she always had the latest gossip to tell me, like anytime a girl crushed on me from afar— which wasn't often, but it did happen. And thus I knew there was some mystique to my image as an artsy loner; my mission now was simply to ensure that something of actual substance lay beneath.`,
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
                                    `Though my goal was to be well versed in all important subject matters, I got the most satisfaction from showing off a random skill with seeming nonchalance. So I made sure to set aside time for purely fanciful pursuits, like memorizing the`,
                                    {
                                        anchor: `periodic table`,
                                        wiki: `Periodic_table`,
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
                                description: `I always detected a whiff of disdain from the record store clerks who rang up my purchases. But with my quest for self-betterment, I got over my intimidation and began to approach them for recommended listening.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `with`,
                        {
                            anchor: `mindful manners`,
                            card: {
                                description: `I also decided to give up swearing. I figured this would be a definite win with the next Catherine, while everyone else would find its quaintness charming.`,
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
                                description: `Or, once I "met a Mara, for" certain I'd be to impress her— after completing my metamorphosis.`,
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
                    description: `I abandoned my plan to pack this song with M words after deciding that it wouldn't sound too good. But I'd already written this stanza by that point, and since it said exactly what I wanted to say, I kept it.`,
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
                            card: {
                                description: `The Soviet Union's first five-year plan was also its most brutal, as the forced industrialization of its agrarian societies led to widespread famine and death. Similarly, given how far behind I was starting out, it was naive to think that my own five-year plan for accelerated growth could be free of unintended consequences.`,
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
                            card: {
                                description: [
                                    `Toward the end of my five-year plan, the Yearlings began to play local shows. I was thrilled the day Mara showed up in the audience— but it was Joi who caught her eye. I felt like the`,
                                    {
                                        anchor: `bottled genie`,
                                        wiki: `Jinn`,
                                    },
                                    `of Arabian folklore, with good fortunes to bestow upon others but only freedom from isolation to grant myself.`,
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
                            card: {
                                description: `So Joi got together with Mara without any effort, while romance for me felt as elusive as ever. I thus had to admit that my five-year plan was a washout.`,
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
                        `Back when I was learning to play the banjo, I'd strum the motions of`,
                        {
                            anchor: `Earl Scruggs`,
                            wiki: `Earl_Scruggs`,
                        },
                        `'s three-finger roll on my thigh wherever I went. From there, it crossed over to my guitar fingerpicking technique, as can be heard on the Spanish guitar here.`,
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
                                description: `Back when we still treated emails like personal letters, I'd close with "Love Bennett," absent a comma out of laziness. Catherine once joked that this sounded like a command spoken in desperation.`,
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
                        `band, the Yearlings would perform this song at breakneck speed— but I moderated the tempo in this recording to make the lyrics intelligible. Even so, my drumming skills weren't up to par. So I recorded the drum tracks at a lower tape speed, which brought them to the proper tempo upon normal playback.`,
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
                                description: `Or, I'd be a "Mara fiend"— a slightly different kind of addict.`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `, I'll probably`,
                        {
                            anchor: `die pushing forty`,
                            card: {
                                description: `Like the Soviets, I needed to take in stride the failures of my first five-year plan. Having banked on rapid character growth, I couldn't cut my losses now; I had nothing to my name other than what the next five-year plan might gain for me. Or failing that, the next one after… Yet five years is a serious chunk of lifetime to parcel out all at once, and I only had so many decades remaining. The occasion, then, was ripe to reflect on my mortality…`,
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
                            card: {
                                description: `Beyond the immediate failures of my first five-year plan, I'd clearly missed out on some personal development that others had naturally come by. And there was no guarantee that another five-year plan wouldn't blindside me in the same manner. I saw my future as a stunted man-child, forever chasing ambitions both infantile and futile— like building castles out of sand.`,
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
                                description: `Or else, I'd die as a "Mara-nursed" child.`,
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
                                    `, is known for its aggressive proselytism, as well as its mass weddings in which thousands of congregants are paired off with perfect strangers. Whenever a Moonie accosted me on campus, the thought would amuse me that I could simply accept their invitation, and my struggle to find a romantic partner would be over in an instant.`,
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
                                description: `To promote cross-cultural harmony, the pairings in these mass weddings are often international by design. So my Moonie bride might very well be a foreigner who joined the church just to ensure her children will be American by birth. In which case, I'd be a fool to think my "maiden Mara co-signs" the marriage license in good faith.`,
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
                            todo: REDO,
                            problem: `Make it more about not having any sympathetic ears today, so hoping for a sympathetic future audience tomorrow.`,
                            card: {
                                description: [
                                    `With no one able to relate to my unusual predicament, and thus less able to sympathize, I could only envision my next five-year plan as a`,
                                    {
                                        anchor: `time capsule`,
                                        wiki: `Time_capsule`,
                                    },
                                    `— one that would allow me to articulate my frustrations to a sympathetic future audience.`,
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
                            todo: REVISE,
                            problem: `Last sentence is still weird.`,
                            cards: [
                                {
                                    description: [
                                        `There was comfort in having all my priorities settled in advance by a five-year plan: Since I always knew with certainty the right course of action, I could undertake it with conviction— like a`,
                                        {
                                            anchor: `marionette`,
                                            wiki: `Marionette`,
                                        },
                                        `being guided by the hidden hand of my younger self. Of course, it was only in the belief that a "Mara I'll net" by doing so, which now proved to be a lie.`,
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
                                description: `So with little to show after five years of diligent effort, I was now paralyzed by doubt— and I knew of no other path to take. The puppet of my future self lay motionless before me, already ensnared by the very "net" that was meant to snag me a romantic partner.`,
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
                            card: {
                                description: `After Mara started going out with Joi, she continued to interact with me in the same flirtatious manner, which made me realize that I'd misread her intentions all along. The ways of a social scene were just so new to me…`,
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
                            cards: [
                                {
                                    description: [
                                        `Traditionally, a`,
                                        {
                                            anchor: `hope chest`,
                                            wiki: `Hope_chest`,
                                        },
                                        `stored the assorted dishware and linens that a teenage girl would gather in preparation for married life. By keeping my despair close to one chest, then, I was giving up all hope of unpacking another.`,
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
                            todo: REVIEW,
                            cards: [
                                {
                                    description: [
                                        `British tradition holds that a kiss from a`,
                                        {
                                            anchor: `chimney sweep`,
                                            wiki: `Chimney_sweep`,
                                        },
                                        `will bring good luck to a bride. But in the Victorian era, the children who cleared soot from chimneys were neglected orphans; whatever fortunes they imparted to others, only a lifetime of ill health awaited them in turn. Likewise, I'd helped introduce Mara to Joi— and now it was on me to get on with my wretched life.`,
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
                            todo: REST,
                            problem: `Is the connection between being unable to speak and being "dumbed" obvious?`,
                            card: {
                                description: [
                                    `Chimney sweeps were typically apprenticed as`,
                                    {
                                        anchor: `indentured servants`,
                                        wiki: `Indentured_servant`,
                                    },
                                    `at a young age. But in my case, I'd remain in servitude to my five-year plans until I was an old man. By then, I'd be "in dentures"— and thus unable to speak for myself.`,
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
                            todo: REVISE,
                            problem: `Tense is weird. Now there's two uses of "them" pronouns.`,
                            card: {
                                description: `Joi was my friend, and I was happy they'd found Mara. Still, I wasn't eager to stick around. So after imagining the two of them exchange vows of "I do," I silently offered a vow of my own to bid them "two farewell."`,
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
                            todo: REVIEW,
                            card: {
                                description: `But at some point, I realized that a social scene isn't any different from the world at large, in that little is hidden from view. Which means any situation can be understood by reading everyone else's intentions and observing their actions— much like a holistic picture of the world emerges after reading books on all the important subject matters.`,
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
                            cards: [
                                {

                                    description: `In short, everyone does what you'd expect them to do, given what you can expect them to want— and a social scene is just the sum total of all that. No one gets in your way to spite you— which means you can only react with good humor when your best-laid plans fall apart.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {

                                    description: `Or, to have a "Mara, you'll" laugh.`,
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
                            todo: REDO,
                            problem: `Last sentence runs on.`,
                            card: {
                                description: `The world is as unwitting as a newborn infant. So if a woman's list of ideal traits in a man includes what kind of father he'll be to her child, then she's likely to judge him by how he treats the world at large.`,
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
                            todo: REDO,
                            problem: `Make sure this is really saying what I want it to say.`,
                            card: {
                                description: `It was no mystery why the situation with Mara happened as it did; it was no mystery why anything happened. I found this thought empowering, because it meant the Maras of the world weren't entirely out of reach. It was just on me to better understand what they wanted— and then I could build myself up to be exactly that.`,
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
                            todo: REDO,
                            problem: `I don't think I like what this is saying. Make sure it flows from the previous one.`,
                            card: {
                                description: `But I couldn't count on my friends to tell me the entire truth. As dear as we were to each other, each of us was still looking out for ourselves.`,
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
                card: {
                    description: [
                        `My original plan was to take the puns one step further by recording this song in a "`,
                        {
                            anchor: `Mara-iachi`,
                            wiki: `Mariachi`,
                        },
                        `" style. But it didn't fit the song's natural tempo, so I scrapped it. Still, it gave me an idea to model the outro after the`,
                        {
                            anchor: `Los Lobos`,
                            wiki: `Los_Lobos`,
                        },
                        `version of "`,
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
