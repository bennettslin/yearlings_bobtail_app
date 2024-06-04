import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGCRAFT,
} from '../../../../src/constants/dots'
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
} from '../../../../src/constants/lyrics'

export default {
    title: 'Grasshoppers Lie Heavy',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `"L." in anacrusis`,
    mixStartTime: `0:01:29.52`,
    playerStartTime: 1478.233,
    overview: `I worked my way through college as a dishwasher in a dorm cafeteria, which is how I met Sita. After I scared her off, we didn't speak for months. But she eventually reached out again, and we became friends. As I got off to a rocky start with playing live shows, and as I continued to struggle with dating women, Sita lent her moral support, though a part of me always wanted something more. At some point, she started to like me back. I'm still not sure how.`,
    isDoublespeaker: true,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                review: true,
                cards: [
                    {
                        description: [
                            {
                                isItalic: true,
                                lyric: {
                                    anchor: `The Man in the High Castle`,
                                    wiki: `The_Man_in_the_High_Castle`,
                                },
                            },
                            `is an alternate history novel by`,
                            {
                                anchor: `Philip K. Dick`,
                                wiki: `Philip_K._Dick`,
                            },
                            `that imagines if World War II had ended with an Axis victory. Curiously, the characters in this story are engrossed in their own alternate history novel called`,
                            {
                                isItalic: true,
                                lyric: `The Grasshopper Lies Heavy`,
                            },
                            `, in which the Allies had won.`,
                        ],
                        dotKeys: {
                            [BACKSTORY]: true,
                        },
                    },
                    {
                        description: `I chose this song title because I liked the image of two grasshoppers hidden in the tall grass, each hesitantly signaling to the other, with neither wishing to be the first to reveal itself.`,
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
                                anchor: `pompous autumn waits`,
                                review: true,
                                cards: [
                                    {
                                        description: `In high school, I carried on as the same wretched nobody that I was in middle school. It just didn't seem possible to remake myself into someone new while surrounded by all the same classmates. But all the while, I was crafting my future identity as a self-assured artist, and it was raring to go as soon as I could leave Los Angeles.`,
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
                            `.`,
                        ],
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
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
                        `possibilities of a story within a story. And so hidden in this song's lyrics are references to every other song on the album. On this website, the links connecting two songs through such a reference are called wormholes.`,
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
                            anchor: `molls perched on pedestals`,
                            review: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Gun molls`,
                                        wiki: `Gun_moll`,
                                    },
                                    `, the female companions of famous mobsters, were both romanticized by society and feared for their exploits. Likewise, I desired the girls who hung out with the boys who bullied me, even if their contempt for me was harder to stomach.`,
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
                    mixTime: `0:19:06.00`,
                    lyric: [
                        `noses in`,
                        {
                            anchor: `penny dreadfuls`,
                            cards: [
                                {
                                    description: `Still, I could even the score by showing disdain for the popular books and music they consumed.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `In 19th-century England, a market emerged for cheap and sensational novellas, which the highbrow derided as`,
                                        {
                                            anchor: `penny dreadfuls`,
                                            wiki: `Penny_dreadful`,
                                        },
                                        `.`,
                                    ],
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
                            anchor: `Simon & Garfunkel`,
                            wiki: `Simon_&_Garfunkel`,
                        },
                        `always manage to sound sentimental without being sappy, so I thought their style would be a good fit for this song.`,
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
                            review: true,
                            card: {
                                description: `My job washing dishes was uneventful and offered no social interaction, but it had its upsides. At the start of the shift, I could read a book while the dishes piled up, then clean them all at once in a mad rush. When it got busy, I would switch to writing lyrics in my head.`,
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
                            anchor: `keys left on dumbwaiter trays`,
                            review: true,
                            card: {
                                description: `The students would bus their trays on carriages attached to a conveyor that led into the dishroom. Every so often, one of them would accidentally leave a personal item on their tray and come downstairs to retrieve it. I got a kick whenever this happened. They were always grateful, and sometimes they were cute.`,
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
                    mixTime: `0:31:06.00`,
                    lyric: [
                        {
                            anchor: `Down the steps`,
                            card: {
                                wormhole: `down_the_steppes`,
                            },
                        },
                        `to`,
                        {
                            anchor: `fetch her lancet pen`,
                            review: true,
                            cards: [
                                {
                                    description: [
                                        `As a`,
                                        {
                                            anchor: `diabetic`,
                                            wiki: `Diabetes`,
                                        },
                                        `, Sita had to monitor her blood sugar level. So before meals, she would draw blood from her finger by pricking it with a`,
                                        {
                                            anchor: `lancing device`,
                                            wiki: `Blood_lancet`,
                                        },
                                        `.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Lost in thought, Sita forgets to take her lancing device with her after busing her tray.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            ],
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:35:06.00`,
                    lyric: [
                        `and stunned, by`,
                        {
                            anchor: `reflex you asked`,
                            review: true,
                            cards: [
                                {
                                    description: `By then, I was mostly on autopilot when it came to hitting on random women in random places.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `In awe of Sita's beauty, I'm determined not to screw this one up. So after handing back her lancing device, I engage in small talk before asking her on a date.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            ],
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:39:18.00`,
                    lyric: [
                        `At first she hedged, but then`,
                        {
                            anchor: `laying qualms to rest`,
                            review: true,
                            cards: [
                                {
                                    description: [
                                        `While the cafeteria never announced its partnership with a`,
                                        {
                                            anchor: `vocational rehabilitation`,
                                            wiki: `Vocational_rehabilitation`,
                                        },
                                        `program, this was easy enough to infer. A handful of workers were past members of Asian gangs, and I must admit, the thought entertained me to be mistaken as one of them.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Unsure of my background and still feeling ambushed, Sita hesitates. But as we chat, I win her over with my passion for reading and knowledge of literature.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `laid_tourettes`,
                                },
                            ],
                        },
                        `:`,
                    ],
                },
                {
                    mixTime: `0:45:18.00`,
                    lyric: [
                        {
                            anchor: `Schwa stickers`,
                            properNoun: true,
                            review: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Schwa`,
                                            wiki: `Schwa_(art)`,
                                        },
                                        `is the underground artwork of Bill Barker. In the '90s, stickers of his oblong alien heads began to show up on newspaper racks and street signs. Truth be told, it was all a mystery to me. In those days, the Web didn't explain most things, and I wasn't in the habit of checking if it did.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Affixed to my belongings are stickers of underground art, which reassure Sita further that I'm not a former gangster.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `swastikas`,
                                },
                            ],
                        },
                        `attached to your`,
                        {
                            anchor: `sci-fi paperback`,
                            cards: [
                                {
                                    description: `At the time, I was obsessed with Dick's stories of altered states and dystopian worlds. I always tried to be seen with one of his novels nestled under my arm.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: `safeway_paper_bag`,
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
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `0:50:12.00`,
                    lyric: [
                        `First date`,
                        {
                            anchor: `nosebleed`,
                            cards: [
                                {
                                    description: `On my first date with Sita, I get a nosebleed. This prompts me to recount some fights in middle school that ended with me suffering a bloody nose.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `know_is_bleat`,
                                },
                            ],
                        },
                        `spurs tales of`,
                        {
                            anchor: `bare-knuckle defeats`,
                            cards: [
                                {
                                    description: `Sita was intrigued by my rough-and-tumble past, despite my honest admission that these were literal beatdowns in which I never threw a single punch.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: `barnacle`,
                                },
                            ],
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
                            anchor: `show played in mimes`,
                            card: {
                                description: `The world of dating was awash in silent cues that, as far as I knew, no one could be expected to understand or deduce. I desperately wanted everything to be spelled out, and it baffled me that I was alone in feeling this way.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, but you pleaded to hear.`,
                    ],
                },
                {
                    mixTime: `1:13:18.00`,
                    lyric: [
                        `Then just like the drift,`,
                        {
                            anchor: `she disappeared`,
                            review: true,
                            card: {
                                description: `Shortly after our first few dates, I called Sita to tell her I was in love with her. She admitted that she didn't feel the same way, yet wanted to remain friends. We hung up with the understanding that we would continue to hang out casually. But I felt so dejected that I decided never to see her again.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: `1:18:09.43`,
                    lyricLeft: [
                        `Alone his first gig,`,
                        {
                            anchor: `stagefright ignites`,
                            card: {
                                description: [
                                    `During this time, I began performing at singer-songwriter nights hosted by local coffee shops. My first few attempts were a disaster, but I learned to conquer my stagefright with just the right amount of alcohol.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                    lyricRight: [
                        `With no`,
                        {
                            anchor: `sister ship`,
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
                                    `were sister battleships of the German navy in World War II. In this allegory, Sita and I fight for the Axis, since they were the heroes of history in`,
                                    {
                                        isItalic: true,
                                        lyric: `The Man in the High Castle`,
                                    },
                                    `.`,
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
                            anchor: `no convert's missed`,
                            card: {
                                description: `RI Research guessed that I would grow disillusioned sooner rather than later, which is why they asked for the largest payments upfront. The last few letters were so sloppily written, it even felt like they were shooing me away by that point. And now Sita's abrupt departure from my life seemed like evidence that I was once again a sucker for the perfect scam.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `, once assured his tithe.`,
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
                                `lies`,
                            ],
                            card: {
                                wormhole: `sunken_tirpitz`,
                            },
                        },
                        `.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
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
                            card: {
                                description: `At the end of each shift, I would head to the dining area to scavenge enough leftovers for my next meal. Busy days were doubly cruel because after staying late and working myself to exhaustion, there would be nothing left to pick through but the withered scraps that no one else wanted.`,
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
                            card: {
                                wormhole: `chimney_sweep`,
                            },
                        },
                        {
                            anchor: `sooty dust`,
                            card: {
                                wormhole: `suttee_dust`,
                            },
                        },
                        `.`,
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
                            review: true,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `phantom limb`,
                                        wiki: `Phantom_limb`,
                                    },
                                    `is the sensation that a missing limb is still responsive. And after I've spent these last weeks of summer in giddy hope, an amputation is what it feels like to face the coming weekend alone.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                            anchor: `tripped on runner's high`,
                            review: true,
                            card: {
                                description: [
                                    `Having completed a grueling shift, I'm feeling dead tired in all my limbs as I make my way back home. So when a nighttime jogger calls out with`,
                                    {
                                        anchor: `euphoric cheer`,
                                        wiki: `Neurobiological_effects_of_physical_exercise`,
                                    },
                                    `that he's about to pass from behind, I find it hard to be gracious.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `1:52:09.44`,
                    lyric: [
                        `Below the`,
                        {
                            anchor: `window of your Walkman`,
                            review: true,
                            cards: [
                                {
                                    description: [
                                        `In those days, I often carried a`,
                                        {
                                            anchor: `Walkman`,
                                            wiki: `Walkman`,
                                        },
                                        `wherever I went.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Imagining the jogger to take a pratfall, I pretend to be absorbed in my music, like a child ducking beneath a window after pulling a prank.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            ],
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
                            anchor: `looming shadow nears`,
                            cards: [
                                {
                                    description: `There was a common path to the campus between my apartment and Sita's boarding house.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `As it happens, Sita has also been heading home at this time. Having spotted me from a distance behind, she debates whether to flag me down. As I turn to face the apartment gate, I notice her presence. A few seconds awkwardly pass, with neither of us sure what to say next.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            ],
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `2:01:27.44`,
                    lyric: [
                        `as your`,
                        {
                            anchor: `heartbeats`,
                            card: {
                                wormhole: `harpies`,
                            },
                        },
                        `, her steps, race to first.`,
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
                            anchor: `you're my password`,
                            review: true,
                            card: {
                                description: `As I enter the passcode for the gate, Sita breaks the ice by mentioning that something she remembered about me was the basis for a password she recently created.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `?"`,
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
                            anchor: `locks your arm`,
                            card: {
                                description: `Seeing Sita shiver from the cold, I invite her to warm up inside my apartment, whereupon she gladly tucks her hand under my arm. Of course, this doesn't mean what I want it to mean. And so I feel like an escaped convict who's just been recaptured and put in handcuffs.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `.`,
                        {
                            anchor: `Key turned`,
                            cards: [
                                {
                                    description: `As we catch up on recent happenings, I unlock the door to my apartment. But with Sita clinging tightly to my arm, it feels like I'm being directed into a holding cell.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `key_turned`,
                                },
                            ],
                        },
                        `,`,
                        {
                            anchor: `returned to your guard`,
                            card: {
                                description: `And just like that, I'm once again on guard, much like I was on our first few dates. I'm second-guessing everything I say, like a prisoner conversing with a jail guard.`,
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
                    mixTime: `2:25:27.44`,
                    lyric: [
                        `In her`,
                        {
                            anchor: `gingerbread prison`,
                            card: {
                                description: `Since a platonic friendship with Sita can never fulfill me, I find the thought depressing. And yet… it's also kind of sweet to nibble on.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, here now you submit.`,
                    ],
                },
                {
                    mixTime: `2:30:21.44`,
                    lyric: [
                        `Though`,
                        {
                            anchor: `never full, you're fed`,
                            card: {
                                description: `Like a tired fugitive relieved to come back to a warm bed and regular meals, I finally concede that mere friendship is still better than the cold, bleak alternative.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `; so you`,
                        {
                            anchor: `hit the switch`,
                            cards: [
                                {
                                    description: `With these thoughts swirling in my head, I flip on the light switch in my apartment.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `hit_the_switch`,
                                },
                            ],
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `2:35:15.44`,
                    lyric: [
                        `On your bed's rumpled linens, a`,
                        {
                            anchor: `lidless Vaseline sits`,
                            cards: [
                                {
                                    description: [
                                        `On my bed lies an open jar of`,
                                        {
                                            anchor: `Vaseline`,
                                            wiki: `Vaseline`,
                                        },
                                        `, which I clearly used recently to masturbate with.`,
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
                        `.`,
                    ],
                },
                {
                    mixTime: `2:40:09.44`,
                    lyric: [
                        `"Shall I leave you," she says, "`,
                        {
                            anchor: `here to Philip Dick`,
                            card: {
                                description: `Or else, to "feel up dick." Sita lightens the awkwardness by joking that I might prefer to continue masturbating alone. At the same time, she takes a gentle jab at the bookish exterior I've crafted.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `?"`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                review: true,
                card: {
                    description: [
                        `The highlight of`,
                        {
                            anchor: `Nirvana`,
                            wiki: `Nirvana_(band)`,
                        },
                        `'s`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Nevermind`,
                                wiki: `Nevermind`,
                            },
                        },
                        `for me is when`,
                        {
                            anchor: `Kurt Cobain`,
                            wiki: `Kurt_Cobain`,
                        },
                        `kicks the last third of "`,
                        {
                            anchor: `Lounge Act`,
                            wiki: `Lounge_Act`,
                        },
                        `" into high gear by singing the same melody an octave higher. I'd always wanted to recreate this effect but could never do so, since the melodies I write tend to span my whole vocal range. So when I noticed that the melody for this chorus stays within a single octave throughout, I made it work.`,
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
                            anchor: `waiting room`,
                            cards: [
                                {
                                    description: [
                                        `One night Sita has a`,
                                        {
                                            anchor: `hyperglycemic`,
                                            wiki: `Hyperglycemia`,
                                        },
                                        `episode. I drive her to the emergency room and sit in the waiting area as she's being examined.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: `Traditionally, the groom's entrance into the "wedding" room begins the ceremony. He then stands and waits for the bride to close the procession.`,
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `:`,
                    ],
                },
                {
                    mixTime: `2:48:14.08`,
                    lyric: [
                        `Why does she play`,
                        {
                            anchor: `bright to your gloom`,
                            cards: [
                                {
                                    description: `As we became friends, what I stood to gain from Sita was obvious. Less so was what she gained from me, given my moody temperament. But in time I came to see that her pleasant nature masked a lingering depression, which gave me an opening to win her over with kind gestures.`,
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
                card: {
                    description: `To faithfully represent in miniature the lyrics of the album as a whole, this song couldn't have gone without a section of groan-inducing puns.`,
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
                            anchor: `organ on which it struck`,
                            cards: [
                                {
                                    description: `As the minutes tick away, I worry that Sita's diagnosis might be as severe as organ failure.`,
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
                        `,`,
                    ],
                },
                {
                    mixTime: `3:00:14.08`,
                    lyric: [
                        `in the`,
                        {
                            anchor: `ever-present scent`,
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
                            card: {
                                wormhole: `belle`,
                            },
                        },
                        {
                            anchor: `with a ring`,
                            review: true,
                            cards: [
                                {
                                    description: `Having dozed off, I'm roused by the ringing of a bell to indicate that a patient has been released from care and is returning to the waiting area.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: `The momentous occasion of a wedding may leave the groom in a daze, to be roused only by exchanging wedding rings with a "belle."`,
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
                        `.`,
                    ],
                },
                {
                    mixTime: `3:07:20.08`,
                    lyric: [
                        `In her`,
                        {
                            anchor: `white gown`,
                            card: {
                                description: `White gowns are commonly worn in both hospitals and wedding ceremonies.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, crept up she beams;`,
                    ],
                },
                {
                    mixTime: `3:10:02.08`,
                    lyric: [
                        `and you marvel, glimmer of her`,
                        {
                            anchor: `cheek unveiled`,
                            cards: [
                                {
                                    description: `Glancing up, I'm startled to find Sita hovering over me with a cheeky smile. Having quietly unclasped her purse from my grip, she returns to the treatment area, but not before inadvertently flashing some "cheek" from beneath her hospital gown.`,
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
                        `.`,
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
                    lyric: [
                        {
                            anchor: `She loves you`,
                            review: true,
                            cards: [
                                {
                                    description: `It took a long while for Sita and I to be fully comfortable with each other. At the start of our yearlong friendship, we mostly just studied together at the library. Then slowly, short treks through campus progressed into long strolls around the neighborhood, which soon led up to leaning in closer on the couch. It all happened so fast toward the end that I was still processing what triggered it.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `A reference to perhaps my`,
                                        {
                                            anchor: `favorite Beatles song`,
                                            wiki: `She_Loves_You`,
                                        },
                                        `. During my troubled years with Sita, I always felt like`,
                                        {
                                            anchor: `John Lennon`,
                                            wiki: `John_Lennon`,
                                        },
                                        `and`,
                                        {
                                            anchor: `Paul McCartney`,
                                            wiki: `Paul_McCartney`,
                                        },
                                        `were grabbing me by the collar, trying to smack sense into me.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                        `…`,
                    ],
                },
                {
                    mixTime: `3:18:26.08`,
                    lyric: `… and now you're left with no defenses.`,
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
                            anchor: `stand unsure`,
                            review: true,
                            cards: [
                                {
                                    description: `The night we decided to have sex, I was overcome with a wary unease that I couldn't explain.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `As Sita lies naked on the bed and comforts me with her gaze, I stand forlornly by the bedside.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `stand_onshore`,
                                },
                            ],
                        },
                        `. She lures with a tease,`,
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
                            anchor: `hard-on in a sleeve`,
                            card: {
                                description: `Pointing to the condom on my erection, Sita lightens the mood by feigning to agree with a past assessment of mine that I wear my "heart on" my sleeve.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `."`,
                    ],
                },
                {
                    mixTime: `3:34:18.58`,
                    lyric: [
                        `So`,
                        {
                            anchor: `how's that compromise`,
                            card: {
                                description: `Having taken such pains to tuck away my emotions for so long, I was now hesitant to compromise the safety of my current position. I just didn't want to feel vulnerable again, and I had so little faith that my desires wouldn't backfire on me as they had the first time I revealed them.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                        `The ascending chord progression of this coda initially suggests a blossoming relationship. Toward the end, it symbolizes sexual climax.`,
                    ],
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
                    lyric: `… when your paws were thrashed sparring with the tide,`,
                },
                {
                    mixTime: `3:43:07.34`,
                    lyric: [
                        `from your`,
                        {
                            anchor: `Grace Darling's beacon`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Grace Darling`,
                                            wiki: `Grace_Darling`,
                                        },
                                        `was a lighthouse keeper's daughter who rescued the survivors of a shipwreck by paddling out to sea in a rowboat. This brave feat won her renown in the Victorian era, but the consequent public exposure led to her early death by`,
                                        {
                                            anchor: `tuberculosis`,
                                            wiki: `Tuberculosis`,
                                        },
                                        `. And as Sita comforts me, I'm reminded that she's my "grace darling," who rescued me from a sea of loneliness.`,
                                    ],
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
                            anchor: `fell an oar`,
                            card: {
                                description: [
                                    `Or else, fell "Lenore."`,
                                    {
                                        anchor: `Edgar Allan Poe`,
                                        wiki: `Edgar_Allan_Poe`,
                                    },
                                    `'s wife also died from tuberculosis at a young age. Her prolonged illness likely inspired his poem "`,
                                    {
                                        anchor: `The Raven`,
                                        wiki: `The_Raven`,
                                    },
                                    `," in which the narrator laments the loss of his beloved Lenore.`,
                                ],
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `3:47:11.08`,
                    lyric: [
                        `Let`,
                        {
                            anchor: `pure lose to pure`,
                            card: {
                                description: `Sita and I were both virgins, which made it easier for me to lower my defenses. I had to remind myself that neither of us knew what we were doing.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
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
                formType: CODA,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `3:50:11.08`,
                    lyric: [
                        `You`,
                        {
                            anchor: `stroke her temples`,
                            card: {
                                description: [
                                    `Referring to her literal`,
                                    {
                                        anchor: `temples`,
                                        wiki: `Temple_(anatomy)`,
                                    },
                                    `. But possibly to her figurative ones as well.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `. She gushes as she guides,`,
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
                        lyric: `(acoustic guitar, Odin's theme)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                review: true,
                card: {
                    description: [
                        `The French expression`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `la petite mort`,
                                wiki: `La_petite_mort`,
                            },
                        },
                        `, or "the little death," refers to a feeling of melancholic transcendence after orgasm. So as the chords continue to rise, the lead guitar plays a falling riff, and then everything cuts away to Odin's theme, a reminder of the house cat who passed away in my youth.`,
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
    ],
}
