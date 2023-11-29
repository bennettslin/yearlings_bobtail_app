import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    SONGCRAFT,
} from '../../../../src/constants/dots'

import {
    VERSES,
    CHORUS,
    POSTCHORUS,
    IS_UNIT_DOT,
} from '../../../../src/constants/lyrics'

export default {
    title: 'Good Night, Sita',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `"Good" in anacrusis`,
    playerStartTime: 1346.412,
    mixStartTime: `0:01:11.89`,
    overview: `Sometime after dating Catherine and a while before meeting Mara, I hit on a fellow college student named Sita. Nothing came of the few dates that followed, however, and I scurried away in disappointment.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `It's early in the evening, with the sky beginning to clear from a midday shower. Sita and I have just walked back to her boarding house after a date. We stand in front of her gate, facing each other awkwardly.`,
                    dotKeys: {
                        [NARRATIVE]: true,
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
                    mixTime: null,
                    lyric: `"Good night," she says`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                review: true,
                card: {
                    description: [
                        `In the final chapter of`,
                        {
                            isItalic: true,
                            lyric: `Ulysses`,
                        },
                        `, the character Molly Bloom daydreams in an uninterrupted`,
                        {
                            anchor: `stream of consciousness`,
                            wiki: `Stream_of_consciousness`,
                        },
                        `. I borrowed this literary technique to capture the torrent of thoughts rushing through my head as Sita wishes me well before I depart.`,
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
                    mixTime: `0:04:21.72`,
                    lyric: [
                        `or`,
                        {
                            anchor: `should I should you`,
                            card: {
                                description: `At this point, I'm too flustered to form complete thoughts, let alone speak in complete sentences.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `refuse`,
                    ],
                },
                {
                    mixTime: `0:06:18.42`,
                    lyric: `by a gutter gurgling then we'll choose`,
                },
                {
                    mixTime: `0:08:15.10`,
                    lyric: `either never live yet live on or to`,
                },
                {
                    mixTime: `0:10:11.80`,
                    lyric: [
                        `love first`,
                        {
                            anchor: `without once knowing love`,
                            card: {
                                description: `The women I liked always preferred to date men who'd been in a relationship before, which seemed bizarre to me. If everyone thought this way, then no one could ever be in a relationship— just like no one would ever have a job if previous work experience were always needed.`,
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
                card: {
                    description: [
                        `My inability to process thoughts into coherent speech is reflected in the herky-jerky,`,
                        {
                            anchor: `syncopated`,
                            wiki: `Syncopation`,
                        },
                        `rhythm played on the drums here.`,
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
                    mixTime: `0:12:08.51`,
                    lyric: `when cesspit dead ends for further speech`,
                },
                {
                    mixTime: `0:14:05.19`,
                    lyric: `are these stuttered sentences we speak`,
                },
                {
                    mixTime: `0:16:01.89`,
                    lyric: [
                        `for this kid wearing no`,
                        {
                            anchor: `decoder ring`,
                            review: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Secret decoder rings`,
                                        wiki: `Secret_decoder_ring`,
                                    },
                                    `were promotional toys in the 60s that allowed children to decipher a television program's encrypted messages. Oftentimes, what they revealed was a preview of the next episode. Similarly, I would have liked to have every date end with a preview of the next one.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:17:28.58`,
                    lyric: [
                        {
                            anchor: `Dutch courage`,
                            properNoun: true,
                            review: true,
                            cards: [
                                {
                                    description: `During my college years, I would ask older coworkers to buy me twelve-packs of cheap beer, which I then lugged back to my apartment. So I always had some on hand, and before every date, I would down a few cans.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Due to trade rivalries between the British and Dutch in the 17th century, several idioms in the English language employ the term "Dutch" as a pejorative.`,
                                        {
                                            anchor: `Dutch courage`,
                                            wiki: `Dutch_courage`,
                                        },
                                        `refers to misplaced confidence gained from drinking alcohol.`,
                                    ],
                                },
                            ],
                        },
                        `wimped out to`,
                        {
                            anchor: `going Dutch`,
                            cards: [
                                {
                                    description: `Sita would insist on getting separate checks, despite my repeated efforts to pay for the entire date. This made me feel inadequate and no better than a sponge, based on my understanding of dating etiquette.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `To`,
                                        {
                                            anchor: `go Dutch`,
                                            wiki: `Going_Dutch`,
                                        },
                                        `means to split the cost of a meal. After all, stinginess was another character defect ascribed to the Dutch.`,
                                    ],
                                },
                            ],
                        },
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                review: true,
                card: {
                    description: [
                        `Back when I worked as a dishwasher, my supervisor would blast`,
                        {
                            anchor: `Michael Jackson`,
                            wiki: `Michael_Jackson`,
                        },
                        `'s "`,
                        {
                            anchor: `Don't Stop 'Til You Get Enough`,
                            wiki: `Don't_Stop_'Til_You_Get_Enough`,
                        },
                        `" in the home stretch of every shift. Ever since, I've associated this song with the idea of psyching myself up to have fun when I'm not really having fun. So I borrowed its sound to convey where my head was at during those first few dates with Sita— hence the palm-muted electric guitars, rubbery bass trills, and ample cowbell.`,
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
                    mixTime: `0:19:25.27`,
                    lyric: `but even no sponge`,
                },
                {
                    mixTime: `0:21:21.96`,
                    lyric: [
                        {
                            anchor: `nor a barnacle`,
                            cards: [
                                {
                                    description: [
                                        `"`,
                                        {
                                            anchor: `Nora Barnacle`,
                                            wiki: `Nora_Barnacle`,
                                        },
                                        `" was the wife of James Joyce and his inspiration for the Molly Bloom character, whose interior monologue in turn served as an inspiration for this song.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                                {
                                    wormhole: `barnacle`,
                                },
                            ],
                        },
                        `minds`,
                    ],
                },
                {
                    mixTime: `0:23:18.66`,
                    lyric: {
                        anchor: `swept in unchartable tides`,
                        review: true,
                        card: {
                            description: [
                                `The fear of being steered in unknown directions has kept me on edge throughout this date. But nearby is a storm drain that flows into the ocean, and I'm reminded of all the`,
                                {
                                    anchor: `barnacles`,
                                    wiki: `Barnacle`,
                                },
                                `,`,
                                {
                                    anchor: `sponges`,
                                    wiki: `Sponge`,
                                },
                                `, and other creatures who calmly go where the current takes them.`,
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true,
                            },
                        },
                    },
                },
                {
                    mixTime: `0:25:29.53`,
                    lyric: [
                        `they just always`,
                        {
                            anchor: `know to pry`,
                            review: true,
                            card: {
                                description: `And none of my friends treat dating as a nerve-racking ordeal either. They just keep the conversation going by pressing for more details, the way a starfish pries open an oyster resting on the ocean floor.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:27:26.21`,
                    lyric: [
                        `for the`,
                        {
                            anchor: `innermost matryoshka`,
                            review: true,
                            card: {
                                description: [
                                    `Flashback to our first date, when Sita and I have arrived at a natural history museum. We begin by strolling past a display of Russian nesting dolls, known as`,
                                    {
                                        anchor: `matryoshkas`,
                                        wiki: `Matryoshka_doll`,
                                    },
                                    `.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `'s`,
                    ],
                },
                {
                    mixTime: `0:30:07.08`,
                    lyric: {
                        anchor: `heart of gold inside`,
                        card: {
                            description: `Mistakes I made on one date still offered lessons I could apply toward the next. So each date felt like prying open one nesting doll to get to another, with the ultimate goal of reaching the last one whose promise proved not to be hollow.`,
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
                formType: POSTCHORUS,
            },
            mainVerses: [
                {
                    mixTime: `0:31:05.42`,
                    lyric: [
                        `till then`,
                        {
                            anchor: `crack up another doll`,
                            todo: true,
                            problem: `Review one more time.`,
                            card: {
                                description: `A friend once told me that if I can keep a woman cracking up at my jokes, then I'll always be good for another date. Unfortunately, my humor at the time was shaped around Catherine's fondness for clever puns— which tend to draw groans from everyone else.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:34:00.46`,
                    lyric: [
                        `to find the`,
                        {
                            anchor: `chrysalis unchristened`,
                            review: true,
                            cards: [
                                {
                                    description: `As we pass a display on the butterfly lifecycle, it occurs to me that what I'm hoping to find is a chrysalis— in other words, someone so new to this world that my own lack of worldliness wouldn't need to be an issue.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                        `to all`,
                    ],
                },
                {
                    mixTime: `0:37:23.85`,
                    lyric: [
                        `who'd buy this`,
                        {
                            anchor: `aping jaw`,
                            review: true,
                            card: {
                                description: [
                                    `We stop by a replica of`,
                                    {
                                        anchor: `Piltdown Man`,
                                        wiki: `Piltdown_Man`,
                                    },
                                    `, a paleontological hoax in which the oversized jaw of an orangutan was attached to a human skull. Meanwhile, in my attempts to impress Sita, I have to hope that the words coming from my mouth don't betray the undersized volume of my head.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `fixed to his skull`,
                    ],
                },
                {
                    mixTime: `0:41:17.23`,
                    lyric: `swaggering down these barren exhibit halls`,
                },
            ],
        },
        {
            unitMap: {
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `0:46:08.97`,
                    lyric: `but totems so revered`,
                },
                {
                    mixTime: `0:48:05.66`,
                    lyric: [
                        `when`,
                        {
                            anchor: `defined by ambrosia beers`,
                            review: true,
                            cards: [
                                {
                                    description: [
                                        `"`,
                                        {
                                            anchor: `Ambrose Bierce`,
                                            wiki: `Ambrose_Bierce`,
                                        },
                                        `" wrote a collection of satirical definitions called`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `The Devil's Dictionary`,
                                                wiki: `The_Devil's_Dictionary`,
                                            },
                                        },
                                        `. I was always on the lookout for literary humor of this sort, in the hope that absorbing enough of it would allow me to match Catherine in wit.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        {
                                            anchor: `Ambrosia`,
                                            wiki: `Ambrosia`,
                                        },
                                        `was the food of the Greek gods, just as beer made me feel omnipotent.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `0:50:02.35`,
                    lyric: [
                        `in time are seen with`,
                        {
                            anchor: `a focus grown clear`,
                            review: true,
                            card: {
                                description: [
                                    `My buzz would wear off a few hours into a date, forcing me to realize that everything I'd just been saying might topple under scrutiny, like a`,
                                    {
                                        anchor: `totem pole`,
                                        wiki: `Totem_pole`,
                                    },
                                    `carved from a stack of stumps.`,
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
                    mixTime: `0:51:29.05`,
                    lyric: `and slowly the story erodes`,
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
                    mixTime: `0:53:25.73`,
                    lyric: [
                        {
                            anchor: `pidgin palaver`,
                            review: true,
                            cards: [
                                {
                                    description: [
                                        `Stopping to rest in a gallery devoted to Native American history, we learn about`,
                                        {
                                            anchor: `pidgins`,
                                            wiki: `Pidgin`,
                                        },
                                        `, or impromptu languages that historically arose between colonists and natives. Their exchanges required words of goodwill to make up for any misunderstandings, much like my conversations with Sita on this date.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                        `exchanged`,
                    ],
                },
                {
                    mixTime: `0:55:22.44`,
                    lyric: `can only transfer good faith`,
                },
                {
                    mixTime: `0:57:19.14`,
                    lyric: [
                        `hyped up like some`,
                        {
                            anchor: `disastrous play`,
                            review: true,
                            card: {
                                description: `On our second date, Sita and I go to see her friend act in a play. Before taking our seats, we chat with him backstage. I struggle to get a word in edgewise, however, which leaves me feeling insecure afterward.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:59:15.82`,
                    lyric: [
                        `that starts with a`,
                        {
                            anchor: `lone ringing phone`,
                            card: {
                                description: `The theater goes pitch black to signal that the play has begun. As the audience falls to a hush, a rotary telephone rings onstage.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                    mixTime: `1:01:12.52`,
                    lyric: `but even so`,
                },
                {
                    mixTime: `1:03:09.21`,
                    lyric: `just that it ever rang at all`,
                },
                {
                    mixTime: `1:05:05.90`,
                    lyric: [
                        `for if the`,
                        {
                            anchor: `tactic is to stall`,
                            review: true,
                            card: {
                                description: `My friends would advise me to wait three days before calling a woman back. And yet, it was always agony when she invariably did the same to me.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:07:02.59`,
                    lyric: `you're just ecstatic she called`,
                },
                {
                    mixTime: `1:09:13.46`,
                    lyric: [
                        `what this`,
                        {
                            anchor: `understudy sought`,
                            todo: true,
                            problem: `Review one more time.`,
                            card: {
                                description: [
                                    `As an`,
                                    {
                                        anchor: `understudy`,
                                        wiki: `Understudy`,
                                    },
                                    `in theater, you undertake all the same preparation, only to see little of the same action— and this is what dating while low status is like as well. So I needed to create my own opportunities, like a freelancer posting on a cork board in search of new gigs.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `from his number`,
                    ],
                },
                {
                    mixTime: `1:11:24.33`,
                    lyric: `strutting on the wall`,
                },
            ],
        },
        {
            unitMap: {
                formType: POSTCHORUS,
            },
            mainVerses: [
                {
                    mixTime: `1:12:22.67`,
                    lyric: `we whine when first we got shunned`,
                },
                {
                    mixTime: `1:15:03.54`,
                    lyric: [
                        `then wise up and`,
                        {
                            anchor: `learn to shotgun`,
                            review: true,
                            card: {
                                description: `In time I came to adopt the shotgun approach to dating, which involves hitting on anyone at any moment. It works because the math is on your side. Even if your success rate remains dismal, you're increasing the sample size, which gives you a better chance of having at least one person say yes to a date. And, of course, one yes is all you need.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:17:00.22`,
                    lyric: `last show's set still propped up`,
                },
                {
                    mixTime: `1:18:26.92`,
                    lyric: [
                        `so we'll`,
                        {
                            anchor: `breeze through our parts`,
                            review: true,
                            card: {
                                description: `Any time I said something witty that got a good response, I'd be sure to say it again on a future date with a different woman, like an actor reprising a role. This then eased the sting of rejection, since the less I had to prepare, the less I needed to feel was at stake.`,
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
                card: {
                    description: [
                        `To continue with the 70s feel for this song, I gathered ideas from the band`,
                        {
                            anchor: `Television`,
                            wiki: `Television_(band)`,
                        },
                        `, who are well known for the complex interplay between their two lead guitars. The lick of tumbling triplets heard here was inspired by the song "Friction" off their album`,
                        {
                            anchor: `Marquee Moon`,
                            wiki: `Marquee_Moon`,
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
                formType: POSTCHORUS,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `1:20:09.45`,
                    lyric: [
                        `though each`,
                        {
                            anchor: `kind new ultimatum`,
                            card: {
                                description: `Like the deals that natives were forced at gunpoint to make with settlers, Sita's proposition for us to see her friend's play offered only the illusion of choice. She was going either way. I could either tag along or stay home.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:22:20.31`,
                    lyric: `to his tribe left old and jaded`,
                },
                {
                    mixTime: `1:24:17.01`,
                    lyric: `the boy brave who cultivated`,
                },
                {
                    mixTime: `1:26:13.70`,
                    lyric: [
                        `brave`,
                        {
                            anchor: `rejection into art`,
                            card: {
                                description: [
                                    `I learned to welcome rejection since I could always use it as subject matter for new songs. Which meant that a lifetime of getting rejected can`,
                                    {
                                        isItalic: true,
                                        lyric: `itself`,
                                    },
                                    `be a work of art.`,
                                ],
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
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `1:27:26.21`,
                    lyric: [
                        `but`,
                        {
                            anchor: `died unfinished`,
                            card: {
                                description: `Of course, there's no guarantee that such a work will ever be completed, since a satisfying ending isn't really under the artist's control.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `alas`,
                    ],
                },
                {
                    mixTime: `1:29:22.91`,
                    lyric: `hotlines get busy just as`,
                },
                {
                    mixTime: `1:31:19.60`,
                    lyric: `thoughts slide to slitting wrists that`,
                },
                {
                    mixTime: `1:33:16.29`,
                    lyric: [
                        `hint of`,
                        {
                            anchor: `sampler cologne`,
                            review: true,
                            card: {
                                description: `Whenever I spotted a men's lifestyle magazine that someone had thrown away, I would tear out the scent strips from its cologne advertisements and add them to my pile. Then right before a date, I would rub a few onto my neck and wrists.`,
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
                formType: VERSES,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `1:35:12.98`,
                    lyric: `and a lass sniffing out these rote charms`,
                },
                {
                    mixTime: `1:37:09.68`,
                    lyric: [
                        `always rides in`,
                        {
                            anchor: `single go-karts`,
                            review: true,
                            card: {
                                description: [
                                    `On our third date, Sita and I visit a`,
                                    {
                                        anchor: `go-kart`,
                                        wiki: `Kart_racing`,
                                    },
                                    `raceway. There's a twin go-kart available, presumably to seat a parent and child side by side. In jest, I gesture for Sita to hop in with me. She laughs and declines.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:39:06.38`,
                    lyric: [
                        `as we wind an`,
                        {
                            anchor: `endless flowchart`,
                            card: {
                                description: [
                                    `At the time, I often fantasized about preparing a mental`,
                                    {
                                        anchor: `flowchart`,
                                        wiki: `Flowchart`,
                                    },
                                    `of the myriad ways a date might unfold. I could then make one optimal decision after another to nudge the events of the evening toward my desired outcome.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:41:03.07`,
                    lyric: [
                        `with every given`,
                        {
                            anchor: `answer a no`,
                            card: {
                                description: [
                                    `Of course, if I were never given an opening to make any decisions at all, then each date would end with me going right back to the beginning of the flowchart. And I'd be doomed to spend my life cycling through an infinite loop of polite rejections.`,
                                ],
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
                    mixTime: `1:42:29.77`,
                    lyric: [
                        `and her`,
                        {
                            anchor: `veggie wishbone's short end`,
                            review: true,
                            cards: [
                                {
                                    description: [
                                        `On one date, Sita took me to a vegetarian restaurant, where I ordered a dish that resembled a chicken breast. When we cracked its sesame-stick wishbone, she got the longer end. Needless to say, my wish wasn't granted.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: `veggie_wishbone`,
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `1:44:26.45`,
                    lyric: `in these clutching fingers of steel`,
                },
                {
                    mixTime: `1:46:23.15`,
                    lyric: `too untrusting to ever unpeel`,
                },
                {
                    mixTime: `1:49:04.02`,
                    lyric: [
                        `from a`,
                        {
                            anchor: `dummy steering wheel`,
                            review: true,
                            card: {
                                description: `Like a child clutching the passenger steering wheel in a twin go-kart, I naively hold onto the hope that my words and actions can steer this date in a direction I'd like.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:51:00.70`,
                    lyric: `settled for hugging only curbs`,
                },
                {
                    mixTime: `1:52:13.22`,
                    lyric: `and having only tires squeal`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Children's songs from the 70s are a treasure trove of musical wisdom. They were composed by professionals, but then arranged for the popular styles of their time. A great example is the soundtrack for`,
                        {
                            anchor: `The New Mickey Mouse Club`,
                            wiki: `The_Mickey_Mouse_Club`,
                        },
                        `, a disco 70s revival of the original 50s show. In particular, the song "Let's Go Day" gave me the idea to play portamento quarter notes on an`,
                        {
                            anchor: `analog synthesizer`,
                            wiki: `Analog_synthesizer`,
                        },
                        `.`,
                    ],
                    dotKeys: {
                        [OBSERVATION]: true,
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
                    mixTime: `1:54:09.92`,
                    lyric: `when boys who mope`,
                },
                {
                    mixTime: `1:55:22.44`,
                    lyric: `know the beauty of simply limping away blind`,
                },
                {
                    mixTime: `1:58:03.30`,
                    lyric: [
                        `as the`,
                        {
                            anchor: `chirping crosswalks`,
                            card: {
                                description: [
                                    `Sita and I are still standing on the sidewalk outside her boarding house. In the distance, an electronic bird call informs the visually impaired that the street is safe to cross.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `guide`,
                    ],
                },
                {
                    mixTime: `2:00:00.00`,
                    lyric: `where willows softly conspire`,
                },
                {
                    mixTime: `2:01:26.69`,
                    lyric: `when boys who cope`,
                },
                {
                    mixTime: `2:02:25.03`,
                    lyric: `only risk invites denied`,
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
                    mixTime: `2:04:21.72`,
                    lyric: {
                        anchor: `I sigh, "Good night."`,
                        cards: [
                            {
                                description: `I walked home that night determined not to let another opportunity pass without confessing my feelings to Sita. I did exactly that in a phone call a few days later. It went horribly, and I didn't hear from her again for months.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                            {
                                description: `Flustered panic takes over, and once again all my feelings go unmentioned.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        ],
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Ambrose Bierce also wrote the short story "`,
                        {
                            anchor: `An Occurrence at Owl Creek Bridge`,
                            wiki: `An_Occurrence_at_Owl_Creek_Bridge`,
                        },
                        `," in which a seemingly long span of time is revealed to have passed in an instant. Likewise, the near entirety of this song, during which I recollected every date with Sita thus far, turns out to have been sandwiched between the briefest exchange of farewells.`,
                    ],
                    dotKeys: {
                        [NARRATIVE]: true,
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
    ],
}
