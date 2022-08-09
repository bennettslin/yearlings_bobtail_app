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
    todo: true,
    overview: `Sometime after dating Catherine and a while before meeting Mara, I hit on a university student named Sita. Nothing came of the few dates that followed, however, and I scurried away in disappointment.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `Sita and I have just walked back to her boarding house after a date. We stand in front of her gate, facing each other awkwardly. It's early in the evening, with the sky beginning to clear from a midday shower.`,
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
                todo: true,
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
                        `. I borrowed this literary technique to capture the torrent of unspoken thoughts rushing through my head as Sita extends her good wishes before I depart.`,
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
                            todo: true,
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
                            todo: true,
                            card: {
                                description: `The women I wanted to date always preferred men with past relationship experience, which seemed bizarre to me. If everyone thought this way, then no one could ever be in a relationship. Just like no one would ever have a job if previous work experience were always needed.`,
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
                    description: [
                        `My inability to process my thoughts into coherent speech is reflected in the herky-jerky,`,
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
                            todo: true,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `secret decoder ring`,
                                        wiki: `Secret_decoder_ring`,
                                    },
                                    `is a toy purchased through the mail that allows children to decipher encrypted messages. It would've been handy to wear one on a date, since I was constantly teasing out hidden meanings in the most basic exchanges.`,
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
                            todo: true,
                            cards: [
                                {
                                    description: `I had an older coworker who faithfully supplied me with cheap twelve-packs. Before every date, I would down a few cans.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Due to trade rivalries between the`,
                                        {
                                            anchor: `British`,
                                            wiki: `United_Kingdom`,
                                        },
                                        `and`,
                                        {
                                            anchor: `Dutch`,
                                            wiki: `Netherlands`,
                                        },
                                        `in the 17th century, several idioms in the English language employ the term "Dutch" as a pejorative.`,
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
                            todo: true,
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
                                        `means to split the cost of a meal. After all, stinginess was another intrinsic failing ascribed to the Dutch.`,
                                    ],
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
                        `I once had a supervisor who would blast`,
                        {
                            anchor: `Michael Jackson`,
                            wiki: `Michael_Jackson`,
                        },
                        `'s "`,
                        {
                            anchor: `Don't Stop 'Til You Get Enough`,
                            wiki: `Don't_Stop_'Til_You_Get_Enough`,
                        },
                        `" in the home stretch of every dishroom shift. Ever since, I've associated this song with the idea of psyching myself up to have fun when I'm not really having fun. So I borrowed its sound to convey where my head was at during those first few dates with Sita. Hence the palm-muted electric guitars, rubbery`,
                        {
                            anchor: `bass`,
                            wiki: `Bass_guitar`,
                        },
                        `trills, and ample`,
                        {
                            anchor: `cowbell`,
                            wiki: `Cowbell_(instrument)`,
                        },
                        `.`,
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
                            todo: true,
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
                        todo: true,
                        card: {
                            description: [
                                `The perils of being steered in unknown directions have kept me on edge throughout this date. But nearby is a`,
                                {
                                    anchor: `storm drain`,
                                    wiki: `Storm_drain`,
                                },
                                `that flows into the ocean, and I'm reminded of the many sea creatures that simply go where the current takes them. Surely I can be as unflappable as a`,
                                {
                                    anchor: `barnacle`,
                                    wiki: `Barnacle`,
                                },
                                `or a`,
                                {
                                    anchor: `sponge`,
                                    wiki: `Sponge`,
                                },
                                `?`,
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
                        `they just`,
                        {
                            anchor: `always know to pry`,
                            todo: true,
                            card: {
                                description: `And no one else seems to sweat the risk of coming on too strong on a date either. They just keep the conversation flowing by pressing for more details, the way a starfish pries open an oyster resting on the seafloor.`,
                                dotKeys: {
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
                            todo: true,
                            card: {
                                description: [
                                    `On our first date, I took Sita to a natural history museum. We spent some time gawking at the Russian wooden dolls known as`,
                                    {
                                        anchor: `matryoshkas`,
                                        wiki: `Matryoshka_doll`,
                                    },
                                    `that nest one inside another.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                        todo: true,
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
                            card: {
                                description: `A friend once told me that if I can keep a woman cracking up at my jokes all night, then I'll always be good for another date. Not being very funny, I tried my best with clever quips and goofy mannerisms.`,
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
                            todo: true,
                            cards: [
                                {
                                    description: `As we pass a display on the butterfly lifecycle, it occurs to me that what I seek in a partner is a chrysalis. That is, a rare specimen so new to this world that my own lack of worldliness can be considered moot.`,
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
                            todo: true,
                            card: {
                                description: [
                                    `We stop by a replica of`,
                                    {
                                        anchor: `Piltdown Man`,
                                        wiki: `Piltdown_Man`,
                                    },
                                    `, a paleontological hoax in which the oversized jaw of an`,
                                    {
                                        anchor: `orangutan`,
                                        wiki: `Orangutan`,
                                    },
                                    `was attached to the cranium of a modern human. Meanwhile, in my efforts to convince Sita that I might be her missing link, I'm hoping the words escaping my mouth don't betray the undersized volume of my head.`,
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
                            todo: true,
                            cards: [
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
                                {
                                    description: [
                                        `"`,
                                        {
                                            anchor: `Ambrose Bierce`,
                                            wiki: `Ambrose_Bierce`,
                                        },
                                        `" wrote a collection of cynical definitions called`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `The Devil's Dictionary`,
                                                wiki: `The_Devil's_Dictionary`,
                                            },
                                        },
                                        `. In hindsight, it probably wasn't the best idea to base my sense of humor on the work of a 19th-century American satirist.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true,
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
                            todo: true,
                            card: {
                                description: [
                                    `My buzz would wear off a few hours into a date, and then I would realize I'd just constructed an elaborate backstory that could only topple under scrutiny, like a`,
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
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Stopping to rest our feet in a gallery devoted to Native American history, we learn about the development of`,
                                        {
                                            anchor: `pidgins`,
                                            wiki: `Pidgin`,
                                        },
                                        `, or impromptu languages that arose to facilitate trade between colonists and natives. Their exchanges were peppered with expressions of goodwill to make up for inevitable miscommunication, which aptly describes my first conversations with Sita.`,
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
                            todo: true,
                            card: {
                                description: `On our second date, Sita took me to see her friend act in a play, after which we met up with him backstage. In contrast to the rapport they shared, I couldn't get a word in edgewise, and I felt insecure the rest of the evening.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
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
                            todo: true,
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
                            todo: true,
                            card: {
                                description: `I was advised to wait three days before calling a woman back. Yet it was always agony when she invariably did the same to me.`,
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
                            card: {
                                description: [
                                    `Dating while low status is like being an`,
                                    {
                                        anchor: `understudy`,
                                        wiki: `Understudy`,
                                    },
                                    `, a performer in theater who serves as a replacement on short notice. You undertake all the same preparation yet see little of the same action. So I decided to be proactive and branch out, like a freelancer without a steady gig advertising on a`,
                                    {
                                        anchor: `cork board`,
                                        wiki: `Bulletin_board`,
                                    },
                                    `.`,
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
                            todo: true,
                            card: {
                                description: `In time I came to adopt the shotgun approach to dating, which involves hitting on anyone at any moment. It works because the math is on your side. Even if your success rate remains dismal, you're increasing the sample size, which gives you a better chance of getting at least one positive result. And one person saying yes is really all you were hoping for.`,
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
                            todo: true,
                            card: {
                                description: `Any time I said something witty that got a good response, I'd be sure to use it again on future attempts at hitting on someone, like an actor reprising a role. This also lessened the sting of rejection, since the less I had to prepare, the less invested I needed to feel.`,
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
                    description: [
                        `To continue with the 70s feel for this song, I gathered ideas from the band`,
                        {
                            anchor: `Television`,
                            wiki: `Television_(band)`,
                        },
                        `, who are well known for the complex interplay between their two lead guitars. The lick of tumbling triplets heard here was stolen note for note from the song "Friction" off their album`,
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
                            todo: true,
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
                            todo: true,
                            card: {
                                description: [
                                    `I learned to welcome rejection since I could always use it as subject matter for new songs. Which meant that a lifetime of getting rejected could`,
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
                            todo: true,
                            card: {
                                description: `Of course, there was no guarantee that such a work would ever be completed, since a satisfying ending wasn't really under my control.`,
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
                            todo: true,
                            card: {
                                description: `Whenever I spotted a lifestyle magazine that had been thrown out, I would tear out the scent strips from its cologne advertisements and add them to my pile. Then right before a date, I would rub a few strips on my neck and wrists.`,
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
                            todo: true,
                            card: {
                                description: [
                                    `On our third date, Sita and I visited a`,
                                    {
                                        anchor: `go-kart raceway`,
                                        wiki: `Kart_racing`,
                                    },
                                    `. There was a twin go-kart available, presumably to seat a parent and child side by side. In jest, I gestured for Sita to hop in. She laughed and declined.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                            todo: true,
                            card: {
                                description: [
                                    `At the time, I wondered if it were possible to prepare a mental`,
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
                            todo: true,
                            card: {
                                description: [
                                    `Of course, if I were never given an opening to make any decisions at all, then each date would end with me going right back to the beginning of the flowchart. And I'd be doomed to spend my life cycling through an`,
                                    {
                                        anchor: `infinite loop`,
                                        wiki: `Infinite_loop`,
                                    },
                                    `of polite rejections.`,
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
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `The date started at a`,
                                        {
                                            anchor: `vegetarian`,
                                            wiki: `Vegetarianism`,
                                        },
                                        `restaurant, where Sita ordered a dish that resembled a chicken breast. When we cracked its sesame-stick`,
                                        {
                                            anchor: `wishbone`,
                                            wiki: `Furcula`,
                                        },
                                        `, Sita got the longer end. Needless to say, my wish wasn't granted.`,
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
                            todo: true,
                            card: {
                                description: `Any semblance of control that I felt on a date was an illusion. But still I would cling tightly, like a child clutching the passenger steering wheel in a twin go-kart. Too much was at stake for me to let go and embrace spontaneity.`,
                                dotKeys: {
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
                todo: true,
                card: {
                    description: [
                        `Children's songs from the 70s are a treasure trove of musical wisdom. They were composed by professionals, but then arranged for the popular styles of that time. A great example is the soundtrack for`,
                        {
                            anchor: `The New Mickey Mouse Club`,
                            wiki: `The_Mickey_Mouse_Club`,
                        },
                        `, a`,
                        {
                            anchor: `disco-inflected`,
                            wiki: `Disco`,
                        },
                        `70s revival of the original 50s show. In particular, the song "Let's Go Day" gave me the idea to play portamento quarter notes on an`,
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
                            todo: true,
                            card: {
                                description: [
                                    `Sita and I are still standing on the sidewalk outside her boarding house. In the distance, an electronic bird call informs the`,
                                    {
                                        anchor: `visually impaired`,
                                        wiki: `Visual_impairment`,
                                    },
                                    `that the street is safe to cross.`,
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
                        todo: true,
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
                todo: true,
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
