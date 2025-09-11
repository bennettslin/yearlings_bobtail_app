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
import { REST } from '../../../containers/Annotations/constants/todos'

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
                    description: `It's early in the evening, with the sky beginning to clear after a midday shower. Sita and I have just walked back to her boarding house after a date. We now face each other awkwardly in front of her gate.`,
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
                        `My inability to translate thoughts into coherent speech is reflected in the herky-jerky,`,
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
                            card: {
                                description: [
                                    {
                                        anchor: `Secret decoder rings`,
                                        wiki: `Secret_decoder_ring`,
                                    },
                                    `were promotional toys in the '60s that allowed children to decipher a television program's encrypted messages— which were often previews of the next episode. So it would've been nice to wear one on a date, and have it spell out whether there'd be a next.`,
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
                            cards: [
                                {
                                    description: `During my college years, I'd ask older coworkers to buy twelve-packs of cheap beer for me; as a result, I always had a ready supply in my apartment. Before each date, then, I'd down a few cans.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `The 17th-century`,
                                        {
                                            anchor: `Anglo-Dutch Wars`,
                                            wiki: `Anglo-Dutch_Wars`,
                                        },
                                        ` gave the English language several idioms that disparage the Dutch. For example,`,
                                        {
                                            anchor: `Dutch courage`,
                                            wiki: `Dutch_courage`,
                                        },
                                        `is false confidence gained from drinking alcohol.`,
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
                                        `" was James Joyce's wife, who also served as his inspiration for the character of Molly Bloom.`,
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
                        card: {
                            description: [
                                `The fear of being steered in unknown directions has kept me on edge throughout this date. But nearby is a storm drain leading into the ocean, and I'm reminded of all the`,
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
                            card: {
                                description: [
                                    `Flashback to our first date, when Sita and I have arrived at a natural history museum: We set forth by strolling past a display of Russian nesting dolls, known as`,
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
                            description: `Mistakes made on one date still offered lessons that could be applied to the next— like prying open one nesting doll to get to another, in the hope of reaching one that's solid at last.`,
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
                            card: {
                                description: `A friend once told me that if I can keep a woman cracking up at my jokes, then I'll always be good for another date. Unfortunately, my humor by that point was built around Catherine's fondness for bad puns.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
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
                            card: {
                                description: `As we pass a display on the butterfly lifecycle, it occurs to me that what I'm hoping to find is a chrysalis— in other words, someone so new to this world that my own lack of worldliness won't be an issue.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
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
                            card: {
                                description: [
                                    `A few hours into a date, my buzz would wear off, causing me to realize that everything I'd been saying might now topple under scrutiny— like a`,
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
                            todo: REST,
                            problem: `Split first sentence into two. Make clear that their first priority was to have shared words of goodwill.`,
                            card: {
                                description: [
                                    `In a gallery dedicated to Native American history, we stop to learn about`,
                                    {
                                        anchor: `pidgins`,
                                        wiki: `Pidgin`,
                                    },
                                    `, or impromptu languages that arose between natives and settlers— whose exchanges would be peppered with words of goodwill, as a way to offset any misunderstandings. Coincidentally, this also describes how Sita and I have been communicating on our date.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
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
                            card: {
                                description: `On our second date, Sita and I go to see her friend act in a play. Before taking our seats, we chat with him backstage. I struggle to get a word in edgewise, though, which leaves me feeling insecure afterward.`,
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
                            cards: [
                                {
                                    description: `The theater goes pitch black to indicate that the play has begun. As the audience falls to a hush, a rotary telephone rings onstage.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: `I once read that you should never write a play that starts with a phone call, since this is seen as a lazy way to give exposition.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
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
                            card: {
                                description: `My friends used to advise me to wait three days before calling a woman— yet it was always agony when she'd take just as long to call me back.`,
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
                            card: {
                                description: [
                                    `As an`,
                                    {
                                        anchor: `understudy`,
                                        wiki: `Understudy`,
                                    },
                                    `in theater, you undertake all the same preparation, only to see little of the same action— which is also what dating feels like when you're young and low paid. So I had to be proactive and seek out opportunities, like a freelancer posting on a cork board.`,
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
                            card: {
                                description: `In time I adopted the shotgun approach to dating, which involves hitting on any and every cute person you see. It comes down to simple math: Even if your success rate remains low, you're increasing the sample size— which then improves your chances of someone saying yes to a date. And, of course, one yes is all you really need.`,
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
                            card: {
                                description: `Anytime I said something witty that got a good response, I'd keep it in mind to use on future dates— in case things didn't work out with the present one. This then helped me to relax, since the less I needed to prepare for each new date, the less there was at stake. Like a stage actor, I could recite the same lines night after night.`,
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
                        `To continue with the '70s feel of this song, I mimicked the complex interplay between`,
                        {
                            anchor: `Television`,
                            wiki: `Television_(band)`,
                        },
                        `'s two lead guitarists. The song "Friction," off their album`,
                        {
                            anchor: `Marquee Moon`,
                            wiki: `Marquee_Moon`,
                        },
                        `, is what inspired the tumbling triplets heard here.`,
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
                                description: `Like the deals that natives were forced at gunpoint to make with settlers, Sita's suggestion for us to see her friend's play offered only the illusion of choice. She was going either way; I could either tag along or stay home.`,
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
                                    `In time I learned to welcome rejection, since I could use it as inspiration to write new songs. But this, in turn, meant a lifetime of getting rejected can`,
                                    {
                                        isEmphasis: true,
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
                            card: {
                                description: `Whenever I spotted a men's lifestyle magazine in some neighbor's recycling bin, I'd tear out the scent strips from its cologne ads and add them to my pile. Then, before a date, I'd rub a few onto my neck and wrists.`,
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
                            card: {
                                description: [
                                    `On our third date, Sita and I visit a`,
                                    {
                                        anchor: `go-kart`,
                                        wiki: `Kart_racing`,
                                    },
                                    `raceway. They have a twin go-kart available, presumably to seat a parent and child side by side. In jest, I gesture for Sita to hop in with me. She laughs and declines.`,
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
                                    `I sometimes fantasized about mapping a mental`,
                                    {
                                        anchor: `flowchart`,
                                        wiki: `Flowchart`,
                                    },
                                    `of the myriad ways a date might unfold. I could then make one optimal decision after another, nudging the events of the evening toward my desired outcome.`,
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
                                description: `Of course, if I were never given an opening to make any decisions at all, then each date would end with me going right back to the beginning of the flowchart. And I'd be doomed to spend my life cycling through an infinite loop of polite rejections.`,
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
                            cards: [
                                {
                                    description: `On one date, Sita took me to a vegetarian restaurant, where I ordered a dish that resembled a chicken breast. When we cracked its sesame-stick wishbone, she got the longer end. Needless to say, my wish wasn't granted.`,
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
                            card: {
                                description: `Like a child clutching the passenger steering wheel in a twin go-kart, I naively cling to the hope of steering this date in my preferred direction.`,
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
                        `Children's songs from the '70s are a wellspring of musical wisdom: They were composed by those trained in older styles, but arranged to fit the newer styles of those times. One example is the soundtrack for`,
                        {
                            anchor: `The New Mickey Mouse Club`,
                            wiki: `The_Mickey_Mouse_Club`,
                        },
                        `, a disco-inflected revival of the original '50s show. In particular, the song "Let's Go Day" gave me the idea to play portamento quarter notes on an`,
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
                                description: `Sita and I are still standing on the sidewalk outside her boarding house. In the distance, an electronic bird call informs the visually impaired that the street is safe to cross.`,
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
                                description: `I walked home that evening determined to confess my feelings to Sita. A few days later, I did just that in a phone call. It went horribly, and I didn't speak to her again for a good while.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                            {
                                description: `Flustered panic takes over, and once again all my feelings go undeclared.`,
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
                        `Bierce also wrote "`,
                        {
                            anchor: `An Occurrence at Owl Creek Bridge`,
                            wiki: `An_Occurrence_at_Owl_Creek_Bridge`,
                        },
                        `," a short story whose twist ending is that a seemingly long span of time actually passed in an instant. And now the entirety of this song— in which I've recalled every date with Sita so far— turns out to have taken place within a brief exchange of farewells.`,
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
