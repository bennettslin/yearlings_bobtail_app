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
    POSTCHORUS,
    IS_UNIT_DOT,
} from '../../../../app/constants/lyrics'

export default {
    path: 'good-night-sita',
    title: 'Good Night, Sita',
    duration: 131.7,
    overview: `Sometime after dating Catherine and a while before meeting Mara, I tried to hit on a university student named Sita. Nothing came of the few dates that followed, however, and I quickly scurried away in disappointment.`,
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
                    time: 0,
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
                            lyric: `Ulysses,`,
                        },
                        `the character Molly Bloom daydreams in an uninterrupted`,
                        {
                            anchor: `stream of consciousness.`,
                            wiki: `Stream_of_consciousness`,
                        },
                        `I borrowed this literary technique to capture the torrent of unspoken thoughts that rushes through my head as Sita extends her good wishes before I depart.`,
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
                    time: 3,
                    lyric: [
                        `or`,
                        {
                            anchor: `should I should you`,
                            todo: true,
                            card: {
                                description: `At this point, I'm too flustered to form complete thoughts, let alone complete sentences.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `refuse`,
                    ],
                },
                {
                    time: 5,
                    lyric: `by a gutter gurgling then we'll choose`,
                },
                {
                    time: 7,
                    lyric: `either never live yet live on or to`,
                },
                {
                    time: 9,
                    lyric: [
                        `love first`,
                        {
                            anchor: `without once knowing love`,
                            todo: true,
                            card: {
                                description: `The women I tried to date always preferred someone with past relationship experience, which seemed like a bizarre provision to me. If everyone thought this way, then no one could ever be in a relationship, just like no one could ever get a job if they always needed previous work experience.`,
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
                        `rhythm played by the drums.`,
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
                    time: 11,
                    lyric: `when cesspit dead ends for further speech`,
                },
                {
                    time: 12,
                    lyric: `are these stuttered sentences we speak`,
                },
                {
                    time: 14,
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
                                    `is a toy purchased through the mail that allows children to decipher encrypted messages. It would have been handy to wear one on a date, since I was constantly teasing out hidden meanings in the most basic exchanges.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 16,
                    lyric: [
                        {
                            anchor: `Dutch courage`,
                            properNoun: true,
                            todo: true,
                            cards: [
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
                                        `refers to misplaced confidence gained from alcohol.`,
                                    ],
                                },
                                {
                                    description: `I had an older coworker who faithfully plied me with cheap twelve-packs. Before every date, I would down a couple of cans.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                            ],
                        },
                        `wimped out to`,
                        {
                            anchor: `going Dutch`,
                            todo: true,
                            cards: [
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
                                {
                                    description: `Sita would insist on separate checks, despite my repeated efforts to pay for the entire date. This made me feel inadequate, and no better than a "sponge" based on my understanding of dating etiquette.`,
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
                        `I once had a supervisor who would blast`,
                        {
                            anchor: `Michael Jackson's`,
                            wiki: `Michael_Jackson`,
                        },
                        {
                            anchor: `"Don't Stop 'Til You Get Enough"`,
                            wiki: `Don't_Stop_'Til_You_Get_Enough`,
                        },
                        `in the home stretch of every dishroom shift. Ever since, I've associated this song with the idea of psyching myself up to have fun when I'm not really having fun, so I borrowed its sound to convey where my head was at during those first few dates with Sita. Hence the dual palm-muted electric guitars, occasional rubbery bass trills, and ample cowbell.`,
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
                    time: 18,
                    lyric: `but even no sponge`,
                },
                {
                    time: 20,
                    lyric: [
                        {
                            anchor: `nor a barnacle`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `"Nora Barnacle"`,
                                            wiki: `Nora_Barnacle`,
                                        },
                                        `was the wife of James Joyce and his inspiration for the Molly Bloom character, whose interior monologue in`,
                                        {
                                            isItalic: true,
                                            lyric: `Ulysses`,
                                        },
                                        `in turn served as my inspiration for this song.`,
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
                    time: 22,
                    lyric: {
                        anchor: `swept in unchartable tides`,
                        todo: true,
                        card: {
                            description: [
                                `The constant peril of being steered in directions for which I'm ill-prepared has kept me on edge throughout this date. But nearby is a`,
                                {
                                    anchor: `storm drain`,
                                    wiki: `Storm_drain`,
                                },
                                `that drains to the ocean, and I'm reminded of all the`,
                                {
                                    anchor: `sponges,`,
                                    wiki: `Sponge`,
                                },
                                {
                                    anchor: `barnacles,`,
                                    wiki: `Barnacle`,
                                },
                                `and other sea creatures that live to be carried by the current to unknown places. And they don't sweat it.`,
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true,
                            },
                        },
                    },
                },
                {
                    time: 24,
                    lyric: [
                        `they just`,
                        {
                            anchor: `always know to pry`,
                            todo: true,
                            card: {
                                description: `And no one else seems to sweat the risk of coming on too strong either. They just keep the conversation flowing by pressing their date for more and more details, the way a starfish will pry open an oyster resting on the seafloor.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 26,
                    lyric: [
                        `for the`,
                        {
                            anchor: `innermost matryoshka's`,
                            todo: true,
                            card: {
                                description: [
                                    `On our first date, I took Sita to a natural history museum with some ethnological exhibits. We spent some time gawking at the wooden dolls from Russia known as`,
                                    {
                                        anchor: `matryoshkas,`,
                                        wiki: `Matryoshka_doll`,
                                    },
                                    `which nest one inside another.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 28,
                    lyric: {
                        anchor: `heart of gold inside`,
                        todo: true,
                        card: {
                            description: `Mistakes made with one woman still offered lessons that could be applied toward the next. So each date felt like prying open one nesting doll to get to another, with the ultimate goal of reaching the last one whose promise proved not to be hollow.`,
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
                    time: 29,
                    lyric: [
                        `till then`,
                        {
                            anchor: `crack up another doll`,
                            todo: true,
                            card: {
                                description: `Someone had told me that if I can keep a woman cracking up at my jokes all night, then I'll always be good for another date. Not being very funny, I tried my best with clever quips and goofy mannerisms.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 32,
                    lyric: [
                        `to find the`,
                        {
                            anchor: `chrysalis unchristened`,

                            todo: true,
                            cards: [
                                {
                                    description: `As we pass a display on the butterfly lifecycle, it occurs to me that what I seek is a chrysalis. That is, a rare specimen of female so new to this world that my own lack of worldly ways is rendered moot. Of course, every other low-status male out there has the same idea.`,
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
                    time: 36,
                    lyric: [
                        `who'd buy this`,
                        {
                            anchor: `aping jaw`,
                            todo: true,
                            card: {
                                description: [
                                    `We pause for a minute to learn about`,
                                    {
                                        anchor: `Piltdown Man,`,
                                        wiki: `Piltdown_Man`,
                                    },
                                    `a paleontological hoax in which the oversized jaw of an`,
                                    {
                                        anchor: `orangutan`,
                                        wiki: `Orangutan`,
                                    },
                                    `was attached to the cranium of a modern human. But I'm a comparable fraud, as the things that come out of my mouth inflate the perceived volume of wisdom in my head.`,
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
                    time: 40,
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
                    time: 45,
                    lyric: `but totems so revered`,
                },
                {
                    time: 47,
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
                                        `was the food of the Greek gods, just as beer temporarily made me feel omnipotent.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: [
                                        {
                                            anchor: `"Ambrose Bierce"`,
                                            wiki: `Ambrose_Bierce`,
                                        },
                                        `wrote a collection of cynical definitions called`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `The Devil's Dictionary.`,
                                                wiki: `The_Devil's_Dictionary`,
                                            },
                                        },
                                        `In hindsight, it probably wasn't the wisest idea to base my sense of humor on the work of a 19th-century American satirist.`,
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
                    time: 48,
                    lyric: [
                        `in time are seen with`,
                        {
                            anchor: `a focus grown clear`,
                            todo: true,
                            card: {
                                description: [
                                    `After my buzz wore off a few hours into a date, I would realize that I'd just constructed an elaborate backstory that could only topple under scrutiny, like a`,
                                    {
                                        anchor: `totem pole`,
                                        wiki: `Totem_pole`,
                                    },
                                    `carved from a stack of stumps rather than a single trunk.`,
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
                    time: 50,
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
                    time: 52,
                    lyric: [
                        {
                            anchor: `pidgin palaver`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Stopping to rest our feet in a gallery devoted to Native American history, we learn about the development of`,
                                        {
                                            anchor: `pidgins,`,
                                            wiki: `Pidgin`,
                                        },
                                        `or impromptu languages that arose to facilitate trade between colonists and natives. Their exchanges were peppered with expressions of goodwill to make up for inevitable miscommunication, which aptly describes my first conversations with Sita.`,
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
                    time: 54,
                    lyric: `can only transfer good faith`,
                },
                {
                    time: 56,
                    lyric: [
                        `hyped up like some`,
                        {
                            anchor: `disastrous play`,
                            todo: true,
                            card: {
                                description: `On our second date, Sita invited me to see her friend perform in a play, which I wound up hating. In all fairness, it probably wasn't bad. My impression of the night was just colored by my insecurities, given the warm rapport between Sita and her friend backstage, in contrast to my own inability to get a word in edgewise.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 58,
                    lyric: [
                        `that starts with a`,
                        {
                            anchor: `lone ringing phone`,
                            todo: true,
                            card: {
                                description: `The play begins with the theatre going pitch black. As the audience falls to a hush, a rotary telephone onstage starts to ring.`,
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
                    time: 60,
                    lyric: `but even so`,
                },
                {
                    time: 62,
                    lyric: `just that it ever rang at all`,
                },
                {
                    time: 64,
                    lyric: [
                        `for if the`,
                        {
                            anchor: `tactic is to stall`,
                            todo: true,
                            card: {
                                description: `I was often advised to wait three days before calling a woman back. Yet it was always agony when she invariably did the same with me.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 66,
                    lyric: `you're just ecstatic she called`,
                },
                {
                    time: 68,
                    lyric: [
                        `what this`,
                        {
                            anchor: `understudy sought`,
                            todo: true,
                            card: {
                                description: [
                                    `Dating as a low-status male is like being an`,
                                    {
                                        anchor: `understudy,`,
                                        wiki: `Understudy`,
                                    },
                                    `a performer in theatre who serves as a replacement on short notice. You undertake all the same preparation while likely seeing none of the action. And so I finally accepted that I had to be proactive and branch out, like a freelancer without a steady gig advertising on a cork board.`,
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
                    time: 70,
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
                    time: 71,
                    lyric: `we whine when first we got shunned`,
                },
                {
                    time: 73,
                    lyric: [
                        `then wise up and`,
                        {
                            anchor: `learn to shotgun`,
                            todo: true,
                            card: {
                                description: `In time I came to adopt the shotgun approach to dating, which involves hitting on anyone at any moment. It works simply because math works. Even if the success rate remains dismal, you're increasing the sample size, which improves your chances overall.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 75,
                    lyric: `last show's set still propped up`,
                },
                {
                    time: 77,
                    lyric: [
                        `so we'll`,
                        {
                            anchor: `breeze through our parts`,
                            todo: true,
                            card: {
                                description: `Any time I made a witty remark that got a good response, I would be sure to use it again on future dates, like an actor reprising a role. This also lessened the sting of rejection, since the less I prepared, the less I felt invested.`,
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
                        `To continue with the 70s feel, I gathered ideas from the band`,
                        {
                            anchor: `Television,`,
                            wiki: `Television_(band)`,
                        },
                        `who are well known for the complex interplay between their two lead guitars. The lick of tumbling triplets heard here was stolen note for note from the song "Friction" off of their album`,
                        {
                            anchor: `Marquee Moon.`,
                            wiki: `Marquee_Moon`,
                        },
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
                    time: 79,
                    lyric: [
                        `though each`,
                        {
                            anchor: `kind new ultimatum`,
                            todo: true,
                            card: {
                                description: `Like the deals that natives were forced to make with settlers at gunpoint, Sita's proposition for us to see her friend's play offered only an illusion of choice. She was going either way. I could either tag along or stay home.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 81,
                    lyric: `to his tribe left old and jaded`,
                },
                {
                    time: 83,
                    lyric: `the boy brave who cultivated`,
                },
                {
                    time: 84,
                    lyric: [
                        `brave`,
                        {
                            anchor: `rejection into art`,
                            todo: true,
                            card: {
                                description: [
                                    `I learned to accept and even welcome each latest bout of rejection by turning it into subject matter for new songs. So at some point, I naturally came to see a life of getting rejected as`,
                                    {
                                        isItalic: true,
                                        lyric: `itself`,
                                    },
                                    `a work of art.`,
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
                    time: 86,
                    lyric: [
                        `but`,
                        {
                            anchor: `died unfinished`,
                            todo: true,
                            card: {
                                description: `Of course, there's no guarantee that such a work can ever be completed in the artist's lifetime, since the guarantee of a satisfactory ending isn't really within their control.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `alas`,
                    ],
                },
                {
                    time: 88,
                    lyric: `hotlines get busy just as`,
                },
                {
                    time: 90,
                    lyric: `thoughts slide to slitting wrists that`,
                },
                {
                    time: 92,
                    lyric: [
                        `hint of`,
                        {
                            anchor: `sampler cologne`,
                            todo: true,
                            card: {
                                description: `Whenever I spotted a men's magazine lying in a recycling bin, I would tear out the scent strips from its cologne advertisements and add them to my pile. Then right before a date, I would rub a few strips onto my wrists.`,
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
                    time: 94,
                    lyric: `and a lass sniffing out these rote charms`,
                },
                {
                    time: 96,
                    lyric: [
                        `always rides in`,
                        {
                            anchor: `single go-karts`,
                            todo: true,
                            card: {
                                description: [
                                    `On our third date, we visited a`,
                                    {
                                        anchor: `go-kart raceway.`,
                                        wiki: `Kart_racing`,
                                    },
                                    `There was a twin go-kart available that presumably seated a parent and child side by side. In jest, I gestured as if inviting Sita to hop in. She laughed and declined.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 98,
                    lyric: [
                        `as we wind an`,
                        {
                            anchor: `endless flowchart`,
                            todo: true,
                            card: {
                                description: [
                                    `I often wondered at the time if it was possible to prepare a mental`,
                                    {
                                        anchor: `flowchart`,
                                        wiki: `Flowchart`,
                                    },
                                    `of all the myriad ways a date might unfold. I could then take one optimal action after another to nudge the events of the evening toward my desired outcome.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 99,
                    lyric: [
                        `with every given`,
                        {
                            anchor: `answer a no`,
                            todo: true,
                            card: {
                                description: [
                                    `Of course, if I were never given an opening to take further action, then each date would end with me going right back to the beginning of the flowchart. And I would be doomed to spend my life cycling through an`,
                                    {
                                        anchor: `infinite loop`,
                                        wiki: `Infinite_loop`,
                                    },
                                    `of polite rejection.`,
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
                    time: 101,
                    lyric: [
                        `and her`,
                        {
                            anchor: `veggie wishbone's short end`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `We started the date at a`,
                                        {
                                            anchor: `vegetarian`,
                                            wiki: `Vegetarianism`,
                                        },
                                        `restaurant, where I ordered a dish that resembled a breast of chicken. When we cracked the sesame-stick`,
                                        {
                                            anchor: `wishbone`,
                                            wiki: `Furcula`,
                                        },
                                        `that was inside, Sita got the longer end. Needless to say, my wish wasn't granted.`,
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
                    time: 103,
                    lyric: `in these clutching fingers of steel`,
                },
                {
                    time: 105,
                    lyric: `too untrusting to ever unpeel`,
                },
                {
                    time: 107,
                    lyric: [
                        `from a`,
                        {
                            anchor: `dummy steering wheel`,
                            todo: true,
                            card: {
                                description: `A child seated in a twin go-kart might turn the passenger steering wheel this way and that, but they are driving only in their imagination. Similarly, any semblance of control I felt on a date was an illusion. But even so, I had to cling on tightly. There was just too much at stake for me to let go and embrace spontaneity.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 109,
                    lyric: `settled for hugging only curbs`,
                },
                {
                    time: 111,
                    lyric: `and having only tires squeal`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        {
                            anchor: `Children's songs`,
                            wiki: `Children's_music`,
                        },
                        `from the 70s are a treasure trove of musical wisdom. They were composed by professionals, but then arranged for the popular styles of that time. A great example is the soundtrack for`,
                        {
                            anchor: `The New Mickey Mouse Club,`,
                            wiki: `The_Mickey_Mouse_Club`,
                        },
                        `a disco-inflected 70s revival of the original 50s show. In particular, the song "Let's Go Day" gave me the idea to play portamento quarter notes on an`,
                        {
                            anchor: `analog synthesizer.`,
                            wiki: `Analog_synthesizer`,
                        },
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
                    time: 113,
                    lyric: `when boys who mope`,
                },
                {
                    time: 114,
                    lyric: `know the beauty of simply limping away blind`,
                },
                {
                    time: 116,
                    lyric: [
                        `as the`,
                        {
                            anchor: `chirping crosswalks`,
                            todo: true,
                            card: {
                                description: [
                                    `Sita and I are still standing on the sidewalk outside her boarding house. In the distance, a mechanical cuckoo call informs the`,
                                    {
                                        anchor: `visually impaired`,
                                        wiki: `Visual_impairment`,
                                    },
                                    `that the street is now safe to cross.`,
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
                    time: 118,
                    lyric: `where willows softly conspire`,
                },
                {
                    time: 120,
                    lyric: `when boys who cope`,
                },
                {
                    time: 121,
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
                    time: 123,
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
                        `Ambrose Bierce also wrote the short story`,
                        {
                            anchor: `"An Occurrence at Owl Creek Bridge,"`,
                            wiki: `An_Occurrence_at_Owl_Creek_Bridge`,
                        },
                        `in which a seemingly long span of time is revealed to have passed in an instant. Similarly, the near entirety of this song, during which I have recollected every date with Sita thus far, turns out to have been sandwiched between the briefest exchange of farewells.`,
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
