import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGCRAFT,
} from '../../../../app/constants/dots'

import {
    REFRAIN,
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    CODA,
    OUTRO,
    SOLO,
    IS_UNIT_DOT,
} from '../../../../app/constants/lyrics'

export default {
    path: 'grasshoppers-lie-heavy',
    title: 'Grasshoppers Lie Heavy',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `"L." in anacrusis`,
    mixStartTime: `0:01:29.52`,
    playerStartTime: 1478.233,
    overview: `I worked my way through college as a dishwasher in a cafeteria, which is how I met Sita. After I scared her off, we didn't speak for several months, but she eventually reached out again, and we became friends. Throughout my continued struggles with dating, as well as my rough start in playing live shows, Sita lent her moral support, though I always wanted something more. At some point, she started to like me back. I'm still not sure how.`,
    isDoublespeaker: true,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                cards: [
                    {
                        description: [
                            `During this time, I was reading a lot of`,
                            {
                                anchor: `Philip K. Dick`,
                                wiki: `Philip_K._Dick`,
                            },
                            `novels such as`,
                            {
                                isItalic: true,
                                lyric: {
                                    anchor: `The Man in the High Castle,`,
                                    wiki: `The_Man_in_the_High_Castle`,
                                },
                            },
                            `which tells of an alternate history in which the`,
                            {
                                anchor: `Axis powers`,
                                wiki: `Axis_powers`,
                            },
                            `had won`,
                            {
                                anchor: `World War II.`,
                                wiki: `World_War_II`,
                            },
                            `Curiously, the characters in this book are engrossed in their own alternate history novel called`,
                            {
                                isItalic: true,
                                lyric: `The Grasshopper Lies Heavy,`,
                            },
                            `in which the`,
                            {
                                anchor: `Allies`,
                                wiki: `Allies_of_World_War_II`,
                            },
                            `had won.`,
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                        },
                    },
                    {
                        description: `I liked the image of two grasshoppers hidden in the tall grass, each sending hesitant signals to the other, with neither wishing to be the first to reveal itself.`,
                        dotKeys: {
                            [OBSERVATION]: true,
                        },
                    },
                ],
            },
        },
        {
            unitMap: {
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: null,
                    lyric: {
                        isItalic: true,
                        lyric: [
                            `L.A. to the Bay,`,
                            {
                                anchor: `pompous autumn waits.`,
                                todo: true,
                                cards: [
                                    {
                                        description: `In high school, I continued on as the same unwelcome nobody I had been in middle school. It just didn't seem possible to remake myself into a whole new person while surrounded by all the same classmates. But in my head, I was busy crafting a future persona as an artist of superior ability and judgment, which was raring to go the minute I could hightail it out of Los Angeles.`,
                                        dotKeys: {
                                            [BACKSTORY]: true,
                                            [OBSERVATION]: true,
                                        },
                                    },
                                    {
                                        wormhole: `pampas`,
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `Just as`,
                        {
                            isItalic: true,
                            lyric: `The Grasshopper Lies Heavy`,
                        },
                        `offers its fictional readers a reality that differs vastly from the one they know, this song is a self-contained narrative that offers a vastly different ending from the album as a whole. Like Dick, I wanted to explore the`,
                        {
                            anchor: `meta-referential`,
                            wiki: `Meta-reference`,
                        },
                        `possibilities of a story within a story. And so this song contains subtle lyrical references to all the other songs on the album. I call these wormholes.`,
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
                    mixTime: `0:10:24.00`,
                    lyric: `Uprooted, then en route,`,
                },
                {
                    mixTime: `0:13:18.00`,
                    lyric: `eighteen threw off the brutes`,
                },
                {
                    mixTime: `0:16:00.00`,
                    lyric: [
                        `and their`,
                        {
                            anchor: `molls perched on pedestals,`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Gun molls,`,
                                        wiki: `Gun_moll`,
                                    },
                                    `the female companions of famous mobsters, were both romanticized and feared for their exploits. Likewise, I desired the girls who hung out with the boys who bullied me, but this also made their contempt for me harder to stomach.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:19:06.00`,
                    lyric: [
                        `noses in`,
                        {
                            anchor: `penny dreadfuls.`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `In 19th-century England, a market emerged for cheap, sensational novellas, which the highbrow derided as`,
                                        {
                                            anchor: `penny dreadfuls.`,
                                            wiki: `Penny_dreadful`,
                                        },
                                    ],
                                },
                                {
                                    description: `But I could even the score by showing the same disdain for the tacky books and songs they consumed.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        {
                            anchor: `Simon & Garfunkel`,
                            wiki: `Simon_&_Garfunkel`,
                        },
                        `always manage to sound sentimental without being sappy, so I thought their style would be a good fit here.`,
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
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `0:21:06.00`,
                    lyric: `For a cafeteria's wage,`,
                },
                {
                    mixTime: `0:23:06.00`,
                    lyric: [
                        `death of`,
                        {
                            anchor: `dull dishroom days`,
                            todo: true,
                            card: {
                                description: `I got a job washing dishes at a dormitory cafeteria. The work was uneventful and offered no social interaction, but that was its appeal to me. I could sit and read while the dishes piled up, then in a mad rush I would clean them all at once. During the busiest times, I would switch to writing song lyrics in my head.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:25:18.00`,
                    lyric: [
                        `stalled by`,
                        {
                            anchor: `keys left on dumbwaiter trays.`,
                            todo: true,
                            card: {
                                description: `The students would bus their trays, which were then transported by conveyor belt to the dishroom. Every so often, someone would accidentally leave a personal item on their tray and come down to retrieve it. I always got a kick when that happened. They were always grateful, and sometimes they were cute.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
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
                    mixTime: `0:31:06.00`,
                    lyric: [
                        {
                            anchor: `Down the steps`,
                            todo: true,
                            card: {
                                wormhole: `down_the_steppes`,
                            },
                        },
                        `to`,
                        {
                            anchor: `fetch her lancet pen,`,
                            todo: true,
                            card: {
                                description: [
                                    `As a`,
                                    {
                                        anchor: `diabetic,`,
                                        wiki: `Diabetes`,
                                    },
                                    `Sita regularly checked her blood sugar level before meals by pricking her finger with a`,
                                    {
                                        anchor: `lancing device.`,
                                        wiki: `Blood_glucose_monitoring`,
                                    },
                                    `That day, she forgot to take it with her after bussing her tray.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:35:06.00`,
                    lyric: [
                        `and stunned, by`,
                        {
                            anchor: `reflex you asked.`,
                            todo: true,
                            cards: [
                                {
                                    description: `By then, I was mostly on autopilot when it came to hitting on random women in random situations.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Taken aback by her beauty, I hand Sita the lancet pen and begin to engage her in conversation.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `0:39:18.00`,
                    lyric: [
                        `At first she hedged, but then`,
                        {
                            anchor: `laying qualms to rest:`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `It was well known to the students that the cafeteria hired most of its workers through a`,
                                        {
                                            anchor: `vocational rehabilitation`,
                                            wiki: `Vocational_rehabilitation`,
                                        },
                                        `program. For this reason, along with feeling unfairly ambushed, Sita was hesitant to say yes to a date. But as we chatted, my taste in literature and knowledge of the alternative culture ultimately won her over.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: `laid_tourettes`,
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `0:45:18.00`,
                    lyric: [
                        {
                            anchor: `Schwa stickers`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Schwa`,
                                            wiki: `Schwa_(art)`,
                                        },
                                        `is the underground artwork of William Barker. In the late 90s, his oblong alien heads popped up on print media everywhere. A friend who worked in a record store gave me a few stickers, though at the time I had no idea what they were.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: `swastikas`,
                                },
                            ],
                        },
                        `attached to your`,
                        {
                            anchor: `sci-fi paperback.`,
                            todo: true,
                            cards: [
                                {
                                    description: `At the time, I was obsessed with Philip K. Dick's stories of altered states and dystopian worlds, and I never left home without one of his novels under my arm.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: `safeway_paper_bag`,
                                },
                            ],
                        },
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
                    mixTime: `0:50:12.00`,
                    lyric: [
                        `First date`,
                        {
                            anchor: `nosebleed`,
                            todo: true,
                            cards: [
                                {
                                    description: `As I was picking Sita up on our first date, my nose started to bleed. This prompted me to recount some fights in middle school that ended with me suffering a bloody nose.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: `know_is_bleat`,
                                },
                            ],
                        },
                        `spurs tales of`,
                        {
                            anchor: `bare-knuckle defeats…`,
                            todo: true,
                            cards: [
                                {
                                    description: `Sita seemed intrigued by my rough-and-tumble past, despite my honest admission that these were literal beatdowns in which I never threw a single punch.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: `barnacle`,
                                },
                            ],
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
                    mixTime: `1:00:00.00`,
                    lyric: `Snowflakes in time come to see off the year.`,
                },
                {
                    mixTime: `1:04:00.00`,
                    lyric: `You cried for one to sit; it kissed your ear.`,
                },
                {
                    mixTime: `1:09:06.00`,
                    lyric: [
                        `Her`,
                        {
                            anchor: `show played in mimes,`,
                            todo: true,
                            card: {
                                description: `The world of dating was awash in silent cues that, as far as I knew, no one could be expected to deduce or understand. So I desperately wanted everything to be plainly spelled out, and it baffled me that I was alone in feeling this way.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `but you pleaded to hear.`,
                    ],
                },
                {
                    mixTime: `1:13:18.00`,
                    lyric: [
                        `Then just like the drift,`,
                        {
                            anchor: `she disappeared…`,
                            todo: true,
                            card: {
                                description: `Shortly after our third date, I called Sita to tell her I was in love with her. She admitted that she didn't feel the same way, yet wanted to remain friends. We hung up with the understanding that I would continue to invite her out for casual excursions. But I felt so dejected and embarrassed that I gave up altogether on seeing her again.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
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
                    mixTime: `1:18:09.43`,
                    lyricLeft: [
                        `Alone his first gig,`,
                        {
                            anchor: `stagefright ignites.`,
                            todo: true,
                            card: {
                                description: [
                                    `During this time, I began to perform at local`,
                                    {
                                        anchor: `coffee shops`,
                                        wiki: `Coffeehouse`,
                                    },
                                    `hosting`,
                                    {
                                        anchor: `singer-songwriter`,
                                        wiki: `Singer-songwriter`,
                                    },
                                    `nights. My first few attempts were a disaster, but I eventually learned to conquer my stagefright with just the right amount of alcohol.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `With no`,
                        {
                            anchor: `sister ship`,
                            todo: true,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Bismarck`,
                                            wiki: `German_battleship_Bismarck`,
                                        },
                                    },
                                    `and the`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Tirpitz`,
                                            wiki: `German_battleship_Tirpitz`,
                                        },
                                    },
                                    `were sister battleships of the`,
                                    {
                                        anchor: `German navy`,
                                        wiki: `Kriegsmarine`,
                                    },
                                    `in World War II. Sita and I are fighting for the Axis in this analogy, since they were history's heroes in`,
                                    {
                                        isItalic: true,
                                        lyric: `The Man in the High Castle,`,
                                    },
                                    `after all.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `slain by his side,`,
                    ],
                },
                {
                    mixTime: `1:27:27.44`,
                    lyricLeft: [
                        `But`,
                        {
                            anchor: `no convert's missed,`,
                            todo: true,
                            card: {
                                description: `In asking for the largest payments upfront, the mail-order cult correctly guessed that I would grow disillusioned sooner rather than later. Sita's abrupt departure from my life, after she had profoundly made an impact, seemed like evidence that I was once again a sucker for the perfect scam.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `once assured his tithe.`,
                    ],
                    lyricRight: [
                        `and so off her list,`,
                        {
                            anchor: [
                                `sunken`,
                                {
                                    isItalic: true,
                                    lyric: `Tirpitz`,
                                },
                                `lies.`,
                            ],
                            todo: true,
                            card: {
                                wormhole: `sunken_tirpitz`,
                            },
                        },
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `Since the lyrics in this song are a microcosm of the whole album, I threw in some doublespeaker rhyme here.`,
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
                    mixTime: `1:37:15.44`,
                    lyric: `Homeward, mop-sopped to your knees.`,
                },
                {
                    mixTime: `1:40:09.44`,
                    lyric: [
                        `Tonight, just`,
                        {
                            anchor: `sour grapes, bitter sweets`,
                            todo: true,
                            card: {
                                description: `At the end of each shift, I would head to the dining area to scavenge enough leftovers for my next meal. Busy days were doubly cruel because after staying late and working myself to exhaustion, I could only pick from the dried-out scraps that no one else wanted.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:41:21.44`,
                    lyric: `left to brave February's brutal gust;`,
                },
                {
                    mixTime: `1:45:27.44`,
                    lyric: [
                        {
                            anchor: `chimneys weep`,
                            todo: true,
                            card: {
                                wormhole: `chimney_sweep`,
                            },
                        },
                        {
                            anchor: `sooty dust.`,
                            todo: true,
                            card: {
                                wormhole: `suttee_dust`,
                            },
                        },
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
                    mixTime: `1:47:27.44`,
                    lyric: [
                        {
                            anchor: `Phantom limbs`,
                            todo: true,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `phantom limb`,
                                        wiki: `Phantom_limb`,
                                    },
                                    `is the sensation that a missing limb is still attached and responsive. And an amputation is what it feels like to spend my weekends alone, with no prospects on the horizon, after several weeks of giddy hope.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `trip left and right`,
                    ],
                },
                {
                    mixTime: `1:49:27.44`,
                    lyric: [
                        `them`,
                        {
                            anchor: `tripped on runner's high.`,
                            todo: true,
                            card: {
                                description: [
                                    `After a grueling shift, all I could look forward to was the long slog back home. So it would have been hard to feel gracious toward any nighttime jogger passing me by and feeling the euphoria of a`,
                                    {
                                        anchor: `runner's high.`,
                                        wiki: `Neurobiological_effects_of_physical_exercise`,
                                    },
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
                    mixTime: `1:52:09.44`,
                    lyric: [
                        `Below the`,
                        {
                            anchor: `window of your Walkman`,
                            todo: true,
                            card: {
                                description: [
                                    `In those days, I was almost never without my`,
                                    {
                                        anchor: `Walkman,`,
                                        wiki: `Walkman`,
                                    },
                                    `a portable cassette player. So if I ever wished pratfalls upon others, I could just pretend to be absorbed in my music, much like a child ducking beneath a window after pulling a prank.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `you hide.`,
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
                    mixTime: `1:56:21.44`,
                    lyric: [
                        `Your gate code punched, when a`,
                        {
                            anchor: `looming shadow nears,`,
                            todo: true,
                            card: {
                                description: `My apartment lies along the path between the campus and Sita's boarding house. As it so happens, Sita has also been heading home at this time. Having spotted me from a short distance behind, she debates whether to flag me down. As I turn to unlock the apartment gate, I notice her presence. A few seconds awkwardly pass, as neither of us is sure what to say next.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:01:27.44`,
                    lyric: [
                        `as your`,
                        {
                            anchor: `heartbeats,`,
                            todo: true,
                            card: {
                                wormhole: `harpies`,
                            },
                        },
                        `her steps, race to first.`,
                    ],
                },
                {
                    mixTime: `2:06:09.44`,
                    lyric: `And she deftly thrusts through the shield of your sneer:`,
                },
                {
                    mixTime: `2:11:15.44`,
                    lyric: [
                        `"Hey, you know`,
                        {
                            anchor: `you're my password?"`,
                            todo: true,
                            card: {
                                description: `Watching as I enter the passcode for the gate, Sita breaks the ice by mentioning that a topic we once discussed became the basis of a password she recently created.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:14:09.44`,
                    lyric: `I am? "Well, you're backward…"`,
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
                    mixTime: `2:17:03.44`,
                    lyric: [
                        `She`,
                        {
                            anchor: `locks your arm.`,
                            todo: true,
                            card: {
                                description: `Upon my invitation to warm up inside my apartment, Sita shivers and gladly tucks her hand underneath my arm. Of course, it doesn't mean what I so badly want it to mean. And so I feel like an escaped convict who has just been captured and locked in handcuffs.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        {
                            anchor: `Key turned,`,
                            todo: true,
                            cards: [
                                {
                                    description: `As we catch up on recent happenings, I unlock the door to my apartment. But with Sita clinging tightly to my arm, it feels more like I'm being directed into a holding cell.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `key_turned`,
                                },
                            ],
                        },
                        {
                            anchor: `returned to your guard…`,
                            todo: true,
                            card: {
                                description: `And just like that, I am once again on guard. I have to second-guess everything I say and do around Sita, like a prisoner conversing with a jail guard.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
            },
            mainVerses: [
                {
                    mixTime: `2:25:27.44`,
                    lyric: [
                        `In her`,
                        {
                            anchor: `gingerbread prison,`,
                            todo: true,
                            card: {
                                description: `While being stuck in a platonic friendship with Sita will never fulfill me, it might still be sweet to nibble on.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `here now you submit.`,
                    ],
                },
                {
                    mixTime: `2:30:21.44`,
                    lyric: [
                        `Though`,
                        {
                            anchor: `never full, you're fed;`,
                            todo: true,
                            card: {
                                description: `Like a tired fugitive relieved to come back to a warm bed and regular meals, I have to concede that being just friends with Sita is still better than the cold, bleak alternative.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `so you`,
                        {
                            anchor: `hit the switch.`,
                            todo: true,
                            cards: [
                                {
                                    description: `As these thoughts swirl in my head, I turn on the light switch in my apartment.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `hit_the_switch`,
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `2:35:15.44`,
                    lyric: [
                        `On your bed's rumpled linens, a`,
                        {
                            anchor: `lidless Vaseline sits.`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `On my bed is an open jar of`,
                                        {
                                            anchor: `Vaseline,`,
                                            wiki: `Vaseline`,
                                        },
                                        `which I clearly used recently to masturbate.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `lidless_vaseline_sits`,
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `2:40:09.44`,
                    lyric: [
                        `"Shall I leave you," she says,`,
                        {
                            anchor: `"here to Philip Dick?"`,
                            todo: true,
                            card: {
                                description: `Or else, to "feel up dick." Sita lightens the awkwardness by joking that I might prefer to continue masturbating alone. At the same time, she takes a gentle jab at the bookish exterior I've carefully crafted.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
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
                    description: [
                        `For me, the highlight of`,
                        {
                            anchor: `Nirvana's`,
                            wiki: `Nirvana_(band)`,
                        },
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Nevermind`,
                                wiki: `Nevermind`,
                            },
                        },
                        `is when`,
                        {
                            anchor: `Kurt Cobain`,
                            wiki: `Kurt_Cobain`,
                        },
                        `kicks the last third of "Lounge Act" into high gear by singing the same melody an octave higher. I'd always wanted to recreate this effect but could never do so, because the melodies I write tend to span my whole vocal range. So when I realized the chorus melody for this song stays within a single register throughout, I made it work.`,
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: BRIDGE,
            },
            mainVerses: [
                {
                    mixTime: `2:46:14.08`,
                    lyric: [
                        `Thoughts sift in the`,
                        {
                            anchor: `waiting room:`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `One night, Sita had a`,
                                        {
                                            anchor: `hypoglycemic`,
                                            wiki: `Hypoglycemia`,
                                        },
                                        `episode. I drove her to the hospital and sat in the waiting area while she was being examined.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Traditionally, the groom's entrance into the "wedding" room begins the ceremony. He then stands and waits for the bride to close the procession.`,
                                    dotKeys: {
                                        [PUN]: true,
                                        [REFERENCE]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `2:48:14.08`,
                    lyric: [
                        `Why does she play`,
                        {
                            anchor: `bright to your gloom`,
                            todo: true,
                            cards: [
                                {
                                    description: `When we first met, what I stood to gain from Sita was obvious. Less so was what she gained from me, given my moody temperament. But as our friendship grew, I came to see that her cheery nature actually masked a lingering depression, which gave me an opening to win her over with simple, kind gestures.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Or else, "bride to your groom."`,
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `2:50:26.08`,
                    lyric: `past a year on a stalled friendship's sails?`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `To faithfully represent in miniature the lyrics of the album as a whole, this song also couldn't have gone without an entire section of groan-inducing puns.`,
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: BRIDGE,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `2:54:26.08`,
                    lyric: [
                        `On a malady your thoughts are stuck,`,
                    ],
                },
                {
                    mixTime: `2:58:02.08`,
                    lyric: [
                        `and the`,
                        {
                            anchor: `organ on which it struck,`,
                            todo: true,
                            cards: [
                                {
                                    description: `As the minutes tick away, I become worried that Sita's diagnosis might be as severe as organ failure.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: `A wedding procession is typically accompanied by music, the "melody" of which might be performed on a chapel organ.`,
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `3:00:14.08`,
                    lyric: [
                        `in the`,
                        {
                            anchor: `ever-present scent`,
                            todo: true,
                            card: {
                                wormhole: 'present_sent',
                            },
                        },
                        `of her trail.`,
                    ],
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
                    mixTime: `3:04:14.08`,
                    lyric: [
                        `Then you`,
                        {
                            anchor: `wake by a bell`,
                            todo: true,
                            card: {
                                wormhole: `belle`,
                            },
                        },
                        {
                            anchor: `with a ring.`,
                            todo: true,
                            cards: [
                                {
                                    description: `Having dozed off, I am roused by the ringing of a bell to indicate that a patient has been released from care and is returning to the waiting area.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: `The momentous occasion of a wedding may leave the groom in a daze, to be roused only by the exchange of vows and a "belle" with a ring.`,
                                    dotKeys: {
                                        [PUN]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    wormhole: `withering`,
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `3:07:20.08`,
                    lyric: [
                        `In her`,
                        {
                            anchor: `white gown,`,
                            todo: true,
                            card: {
                                description: `White gowns are common attire in both wedding ceremonies and hospitals.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `crept up she beams;`,
                    ],
                },
                {
                    mixTime: `3:10:02.08`,
                    lyric: [
                        `and you marvel, glimmer of her`,
                        {
                            anchor: `cheek unveiled.`,
                            todo: true,
                            cards: [
                                {
                                    description: `Glancing up, I'm startled to find Sita hovering over me with a cheeky smile. Having quietly unclasped her purse from my grip, she returns to the treatment area, but not before inadvertently flashing some "cheek" from beneath her revealing hospital gown.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: `In a traditional wedding, the father of the bride lifts her veil to kiss her on the cheek.`,
                                    dotKeys: {
                                        [PUN]: true,
                                        [REFERENCE]: true,
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
                formType: CODA,
            },
            mainVerses: [
                {
                    mixTime: `3:15:03.58`,
                    lyric: {
                        anchor: `She loves you…`,
                        todo: true,
                        card: {
                            description: `It took a long, long while for Sita and I to become fully comfortable with each other. At the start of our yearlong friendship, we mostly just studied together at the library. Then slowly, short treks through campus progressed into long strolls around the neighborhood, which soon led up to leaning in closer on the couch. It all happened so fast toward the end that I was still processing what exactly had triggered it.`,
                            dotKeys: {
                                [BACKSTORY]: true,
                            },
                        },
                    },
                },
                {
                    mixTime: `3:18:26.08`,
                    lyric: `…and now you're left with no defenses.`,
                },
                {
                    mixTime: `3:23:11.08`,
                    lyric: `Well, who'd have guessed this?`,
                },
                {
                    mixTime: `3:26:11.08`,
                    lyric: [
                        `You`,
                        {
                            anchor: `stand unsure.`,
                            todo: true,
                            cards: [
                                {
                                    description: `The night we decided to have sex, I was overcome with a weary unease that I couldn't explain. As Sita lay naked while comforting me with her gaze, I stood forlornly by the bedside for what seemed like several minutes.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: `stand_onshore`,
                                },
                            ],
                        },
                        `She lures with a tease,`,
                    ],
                },
                {
                    mixTime: `3:29:11.09`,
                    lyric: `"Oh sweetie, you're right:`,
                },
                {
                    mixTime: `3:31:07.34`,
                    lyric: [
                        `you wear your`,
                        {
                            anchor: `hard-on in a sleeve."`,
                            todo: true,
                            card: {
                                description: `Pointing to the condom on my erection, Sita lightens the mood by feigning to agree with a past self-assessment of mine that I wear my "heart on" my sleeve.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `3:34:18.58`,
                    lyric: [
                        `So`,
                        {
                            anchor: `how's that compromise?`,
                            todo: true,
                            card: {
                                description: `Having taken such pains to tuck away my emotions for so long, I was suddenly hesitant to compromise the safety of this position. I just didn't want to be vulnerable again, and I had so little faith that my desires wouldn't backfire on me as they had the first time I revealed them.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                    description: `The ascending chord progression initially signifies a blossoming relationship. Toward the end, it symbolizes sexual climax.`,
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: CODA,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `3:38:11.08`,
                    lyric: `And dude, you love her…`,
                },
                {
                    mixTime: `3:40:18.58`,
                    lyric: `…when your paws were thrashed sparring with the tide,`,
                },
                {
                    mixTime: `3:43:07.34`,
                    lyric: [
                        `from your`,
                        {
                            anchor: `Grace Darling's beacon`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Grace Darling`,
                                            wiki: `Grace_Darling`,
                                        },
                                        `was a lighthouse keeper's daughter who rescued the survivors of a shipwreck by paddling out to sea in a rowboat. This brave feat won her renown in the Victoria era, but the consequent public exposure led to her early death by`,
                                        {
                                            anchor: `tuberculosis.`,
                                            wiki: `Tuberculosis`,
                                        },
                                    ],
                                },
                                {
                                    description: `I'm reminded that Sita is my "grace darling," having rescued me from a sea of loneliness.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    wormhole: `gray_starling`,
                                },
                            ],
                        },
                        `light`,
                        {
                            anchor: `fell an oar.`,
                            todo: true,
                            card: {
                                description: [
                                    `Or else, fell "Lenore."`,
                                    {
                                        anchor: `Edgar Allan Poe's`,
                                        wiki: `Edgar_Allan_Poe`,
                                    },
                                    `wife also died from tuberculosis at a young age. Her prolonged illness likely inspired his poem`,
                                    {
                                        anchor: `"The Raven,"`,
                                        wiki: `The_Raven`,
                                    },
                                    `in which the narrator laments the loss of his beloved Lenore.`,
                                ],
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `3:47:11.08`,
                    lyric: [
                        `Let`,
                        {
                            anchor: `pure lose to pure…`,
                            todo: true,
                            card: {
                                description: `Sita and I were both virgins, which ultimately made it easier to lower my defenses. I had to remind myself that neither of us really knew what we were doing.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                formType: CODA,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `3:50:11.08`,
                    lyric: [
                        `You`,
                        {
                            anchor: `stroke her temples.`,
                            todo: true,
                            card: {
                                description: [
                                    `Referring to her literal`,
                                    {
                                        anchor: `temples.`,
                                        wiki: `Temple_(anatomy)`,
                                    },
                                    `But possibly her figurative ones as well.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `She gushes as she guides,`,
                    ],
                },
                {
                    mixTime: `3:55:07.34`,
                    lyric: `and pulls you up inside her thighs.`,
                },
            ],
        },
        {
            unitMap: {
                formType: SOLO,
            },
            mainVerses: [
                {
                    mixTime: `3:57:26.09`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(electric guitar)`,
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: OUTRO,
            },
            mainVerses: [
                {
                    mixTime: `4:06:26.08`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Odin's theme)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `The French expression`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `la petite mort,`,
                                wiki: `La_petite_mort`,
                            },
                        },
                        `which translates to "the little death," refers to a feeling of melancholic transcendence after orgasm. As such, even as the chords continue to rise, the lead guitar plays a falling riff, before everything cuts away to Odin's theme, a reminder of the house cat who died in my youth.`,
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
    ],
}
