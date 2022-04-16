import {
    AFTERWORD,
    BACKSTORY,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGCRAFT,
    NARRATIVE,
} from '../../../../src/constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    POSTCHORUS,
    BRIDGE,
    RESPONSE,
    INTRO,
    REFRAIN,
    IS_UNIT_DOT,
} from '../../../../src/constants/lyrics'

/**
 * NOTE: Ash Wednesday and Pchelka`s Starry Journey have been switched from the
 * song list order on the album.
 */
export default {
    path: `pchelkas-starry-journey`,
    title: `Pchelka's Starry Journey`,
    /**
     * This is for recalibrating the player start time after redoing the mix.
     *
     * mST - mRT + pRT = pST
     * 1.901 - 2.399 + 756.159 => 0
     */
    referenceDescription: `Electric guitar in measure 1`,
    mixReferenceTime: `0:02:11.96`,
    mixStartTime: `0:01:27.02`,
    playerReferenceTime: 756.159,
    playerStartTime: 755.661,
    overview: `At the height of my years of getting bullied, a strange letter arrived with the promise of spiritual answers. After I sent the requested payments, it was revealed to me that I belonged to a race of interstellar beings, and my mission was to shut myself off from the world. I did so by adopting an unresponsive manner like my brother, which made me feel a psychic bond with him. But as my sanity chipped away, I gradually realized I was in a mail-order cult.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Pchelka and Mushka were dogs sent into orbit under the`,
                        {
                            anchor: `Soviet space program`,
                            wiki: `Soviet_space_dogs`,
                        },
                        `. In this allegorical retelling, I imagine myself as Pchelka and my brother as Mushka.`,
                    ],
                    dotKeys: {
                        [OBSERVATION]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: INTRO,
            },
            mainVerses: [
                {
                    mixTime: null,
                    lyric: {
                        isItalic: true,
                        lyric: [
                            `"But F., that man is the`,
                            {
                                anchor: `worst nuisance on the beach`,
                                todo: true,
                                card: {
                                    description: [
                                        `In a comical passage from`,
                                        {
                                            anchor: `Leonard Cohen`,
                                            wiki: `Leonard_Cohen`,
                                        },
                                        `'s otherwise tragic`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `Beautiful Losers`,
                                                wiki: `Beautiful_Losers`,
                                            },
                                        },
                                        `, the character F. tires of getting bullied at the beach. So he signs up for the Charles Axis bodybuilding course advertised in a comic book, only to find out that it's Charles Axis who bullies him. This absurd revelation sums up my mood whenever I reflect on where my own adventures in mail order ended up taking me.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                            },
                            `."`,
                        ],
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `I wanted a kid to recite this line, but no one I knew was having kids just yet. So I had my sister do it.`,
                    dotKeys: {
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
                    mixTime: `0:07:05.56`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(throatsinging, Christopher's theme)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `In keeping with the`,
                        {
                            anchor: `Russian`,
                            wiki: `Russia`,
                        },
                        `theme of dogs in space for this song, two frenetically plucked mandolins capture the essence of the`,
                        {
                            anchor: `balalaika`,
                            wiki: `Balalaika`,
                        },
                        `. Since`,
                        {
                            anchor: `Tuva`,
                            wiki: `Tuva`,
                        },
                        `is a federal state of Russia, I also added`,
                        {
                            anchor: `throat singing`,
                            wiki: `Tuvan_throat_singing`,
                        },
                        `, where overtones in a lone voice sound like accompaniment by a second voice. I liked the implication that my brother sings with me in spirit.`,
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
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `0:13:19.13`,
                    lyric: `Mother, woken from her nap,`,
                },
                {
                    mixTime: `0:15:28.25`,
                    lyric: `hears a piercing scream and thunders,`,
                },
                {
                    mixTime: `0:17:23.54`,
                    lyric: [
                        `"Why'd you`,
                        {
                            anchor: `hit your baby brother`,
                            card: {
                                description: `The times when I physically hurt my brother were actually rare. They just cast a long shadow in my memory. Since he could never understand or acknowledge my remorse, I could never truly feel forgiven.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:19:18.84`,
                    lyric: `when he so looks up to you!`,
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
                    mixTime: `0:21:00.31`,
                    lyric: `Don't you remember days past,`,
                },
                {
                    mixTime: `0:23:09.44`,
                    lyric: [
                        `when you wanted to`,
                        {
                            anchor: `buy a fortress`,
                            card: {
                                description: `Since my birthday is in November, I had the option to ask for a combined birthday and Christmas gift. I always liked to hole up somewhere and work on projects undisturbed, so one year I asked my parents for a life-size wooden fort. Unfortunately, some toys were too pricey to count for even two gifts.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:25:04.75`,
                    lyric: `but your daddy couldn't afford it,`,
                },
                {
                    mixTime: `0:27:00.04`,
                    lyric: `so you brought him into your room?`,
                },
            ],
        },
        {
            unitMap: {
                formType: PRECHORUS,
                subVerseType: RESPONSE,
            },
            mainVerses: [
                {
                    mixTime: `0:28:25.34`,
                    lyric: [
                        `You stowed away`,
                        {
                            anchor: `beneath your captain bed`,
                            card: {
                                description: `I slept in a captain bed that lay atop a dresser on one side. There was nothing beneath on the other side, which sat flush against the wall. By crawling through a cabinet and squeezing past the flimsy back panel, I could access the hidden space behind the dresser.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:32:15.93`,
                    lyric: [
                        `We`,
                        {
                            anchor: `didn't hear a peep`,
                            card: {
                                description: `My brother would sit beside me for hours while playing by himself, without once speaking or interacting. It was a strange closeness we shared.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `throughout the entire weekend!"`,
                    ],
                },
            ],
            subVerse: [
                {
                    mixTime: `0:36:20.36`,
                    lyric: {
                        isItalic: true,
                        lyric: [
                            {
                                anchor: `Poor Sam Peabody`,
                                card: {
                                    description: [
                                        `When my family visited Canada one late summer, the`,
                                        {
                                            anchor: `white-throated sparrow`,
                                            wiki: `White-throated_sparrow`,
                                        },
                                        `was in breeding season, and we heard its song everywhere. I found the sound haunting and longed to hear it again ever afterward. "Poor Sam Peabody" is a mnemonic used by`,
                                        {
                                            anchor: `birdwatchers`,
                                            wiki: `Birdwatching`,
                                        },
                                        `to mimic the song's cadence and pitch.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
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
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `0:40:08.16`,
                    lyric: [
                        `Oh brother, when all you`,
                        {
                            anchor: `know is bleat`,
                            cards: [
                                {
                                    description: `Unfortunately, shrill protests against being bullied are about as effective as the bleating of a calf being led to slaughter.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    wormhole: `know_is_bleat`,
                                },
                            ],
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:42:11.73`,
                    lyric: [
                        `they'll catch you by`,
                        {
                            anchor: `your cape`,
                            card: {
                                description: `I was well liked in elementary school despite being small in stature and absorbed in my art projects. Besides being harmless and unassuming, I readily drew cartoon figures for anyone who asked. But the traits that once made me a hero now marked me as easy prey in middle school, and I was ill-prepared.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `and beat you,`,
                    ],
                },
                {
                    mixTime: `0:44:20.86`,
                    lyric: `threatening never to release you`,
                },
                {
                    mixTime: `0:46:16.16`,
                    lyric: [
                        `till you`,
                        {
                            anchor: `learn to kick it back`,
                            card: {
                                description: `The most popular kids in middle school were the ones least concerned about being liked. This ran counter to my understanding that anything worth pursuing should be pursued wholeheartedly. And yet, trying things their way didn't make me any more likable either.`,
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
                formType: VERSES,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `0:47:27.64`,
                    lyric: [
                        {
                            anchor: `Feigning sick`,
                            card: {
                                description: `In earlier years, I was proud of my perfect attendance record. After the bullying began, I would skip school by faking illness. My mother noticed the change, but she trusted me enough not to press the issue.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `, I chanced to read`,
                    ],
                },
                {
                    mixTime: `0:49:22.93`,
                    lyric: `these words in a comic to me speaking:`,
                },
                {
                    mixTime: `0:52:02.06`,
                    lyric: [
                        `"Are you`,
                        {
                            anchor: `tired of being the weakling`,
                            card: {
                                description: [
                                    `In a well-known comic book advertisement at the time, a scrawny guy takes revenge on a bully after learning to build up his muscles, all thanks to`,
                                    {
                                        anchor: `Charles Atlas`,
                                        wiki: `Charles_Atlas`,
                                    },
                                    `'s free`,
                                    {
                                        anchor: `bodybuilding`,
                                        wiki: `Bodybuilding`,
                                    },
                                    `guide.`,
                                ],
                            },
                        },
                        `?"…`,
                    ],
                },
                {
                    mixTime: `0:53:27.36`,
                    lyric: `I clipped and mailed the ad.`,
                },
            ],
        },
        {
            unitMap: {
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `0:55:22.66`,
                    lyric: [
                        `Soon`,
                        {
                            anchor: `send-away offers`,
                            card: {
                                description: `Since I had few friends in middle school, I would amuse myself by sending away for free samples. As a result, I got flooded with junk mail, which exposed me to even more offers. Then one day, I received a letter from RI Research, Special Human Being Laboratory.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `were piling up high,`,
                    ],
                },
                {
                    mixTime: `0:59:13.26`,
                    lyric: `and then one day one came and made me cry and cry.`,
                },
                {
                    mixTime: `1:03:03.85`,
                    lyric: [
                        {
                            anchor: `Red pouches unspent`,
                            card: {
                                description: [
                                    `In East Asian cultures, relatives give money to children in`,
                                    {
                                        anchor: `red envelopes`,
                                        wiki: `Red_envelope`,
                                    },
                                    `. My parents always insisted that we save this money for college. But desperate for answers, I blew all my savings on my correspondence with RI Research.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `for years, at once counted and sent,`,
                    ],
                },
                {
                    mixTime: `1:06:24.45`,
                    lyric: `while all the weeks I waited, weighing those words in bold text:`,
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `1:10:28.89`,
                    lyric: [
                        `"`,
                        {
                            anchor: `Are you a Beyonder`,
                            card: {
                                description: `According to RI Research, Beyonders are an ancient race of beings born from the stars and scattered across the universe with no memory of their true origin. Those who made it to Earth adopted the likeness of human beings, yet they're beset by a nagging disquiet that they do not truly belong.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `sent down to be Earth-fostered?`,
                    ],
                },
                {
                    mixTime: `1:14:05.66`,
                    lyric: [
                        `Do you often feel like a`,
                        {
                            anchor: `wanderer lost`,
                            card: {
                                description: `The letter addressed my yearning for acceptance and spoke to my frustration that this desire should so elude me. Having hit all the right nerves, it then shared hopeful news: RI Research believed that I might be a Beyonder. And now, after searching for so long, they'd found me.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `?"`,
                    ],
                },
                {
                    mixTime: `1:17:26.26`,
                    lyric: [
                        `But`,
                        {
                            anchor: `waiting for Goddard`,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Robert Goddard`,
                                            wiki: `Robert_H._Goddard`,
                                        },
                                        `ushered in the`,
                                        {
                                            anchor: `Space Age`,
                                            wiki: `Space_Age`,
                                        },
                                        `by inventing the`,
                                        {
                                            anchor: `liquid-fueled rocket`,
                                            wiki: `Liquid-propellant_rocket`,
                                        },
                                        `. Unfortunately in my case, I couldn't wait for a more promising age to arrive on its own. Middle school was brutal and felt endless, and I needed answers right then.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Or else, for "Godot."`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `Waiting for Godot`,
                                                wiki: `Waiting_for_Godot`,
                                            },
                                        },
                                        `is a play by`,
                                        {
                                            anchor: `Samuel Beckett`,
                                            wiki: `Samuel_Beckett`,
                                        },
                                        `that explores existential themes.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `, our two impatient paupers,`,
                    ],
                },
                {
                    mixTime: `1:21:16.85`,
                    lyric: [
                        {
                            anchor: `Gogo and his Didi`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `In Chinese,`,
                                        {
                                            isItalic: true,
                                            lyric: `gogo`,
                                        },
                                        `means "big brother." And of course,`,
                                        {
                                            isItalic: true,
                                            lyric: `didi`,
                                        },
                                        `here now refers to`,
                                        {
                                            isEmphasis: true,
                                            lyric: `my`,
                                        },
                                        `little brother.`,
                                    ],
                                    dotKeys: {
                                        [REFERENCE]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Didi and Gogo are the respective pet names of`,
                                        {
                                            anchor: `Vladimir`,
                                            wiki: `Vladimir_(Waiting_for_Godot)`,
                                        },
                                        `and`,
                                        {
                                            anchor: `Estragon`,
                                            wiki: `Estragon`,
                                        },
                                        `, the two tramps who are still waiting for Godot at the end of Beckett's play.`,
                                    ],
                                },
                            ],
                        },
                        `, sauntered off…`,
                    ],
                },
                {
                    mixTime: `1:24:23.63`,
                    lyric: [
                        `Till`,
                        {
                            anchor: `in hunger they were led`,
                            card: {
                                description: [
                                    `Some of the dogs chosen for the Soviet space program were strays found on the streets of Moscow. This includes`,
                                    {
                                        anchor: `Laika`,
                                        wiki: `Laika`,
                                    },
                                    `, the first dog in orbit, whose death was intentional as her spacecraft wasn't designed to return. I could sympathize with Laika's plight of being helplessly thrust from one desperate circumstance to the next.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `into`,
                        {
                            anchor: `Huntsville`,
                            properNoun: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Huntsville, Alabama`,
                                        wiki: `Huntsville,_Alabama`,
                                    },
                                    `is where the`,
                                    {
                                        anchor: `largest NASA center`,
                                        wiki: `Marshall_Space_Flight_Center`,
                                    },
                                    `is located.`,
                                ],
                            },
                        },
                        `and fed,`,
                    ],
                },
                {
                    mixTime: `1:28:28.05`,
                    lyric: [
                        `dragged to sled by`,
                        {
                            anchor: `hunter's belt`,
                            cards: [
                                {
                                    description: `Sadly, a belt can be used to instill obedience in wayward animals.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: [
                                        `The constellations`,
                                        {
                                            anchor: `Canis Major`,
                                            wiki: `Canis_Major`,
                                        },
                                        `and`,
                                        {
                                            anchor: `Canis Minor`,
                                            wiki: `Canis_Minor`,
                                        },
                                        `, or "greater dog" and "lesser dog," are said to follow that of`,
                                        {
                                            anchor: `Orion`,
                                            wiki: `Orion_(constellation)`,
                                        },
                                        `, named after`,
                                        {
                                            anchor: `the hunter`,
                                            wiki: `Orion_(mythology)`,
                                        },
                                        `in Greek mythology. Orion can be identified in the sky by three stars in a row that represent the hunter's belt.`,
                                    ],
                                },
                            ],
                        },
                        `and launched!`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: POSTCHORUS,
            },
            mainVerses: [
                {
                    mixTime: `1:32:04.82`,
                    lyric: `"Far from home and shaped like common men,`,
                },
                {
                    mixTime: `1:35:25.43`,
                    lyric: [
                        `Beyonders bleed the most, their`,
                        {
                            anchor: `roots unknown to them`,
                            card: {
                                description: [
                                    `I didn't know this at the time, but the notion of`,
                                    {
                                        anchor: `star people`,
                                        wiki: `Star_people_(New_Age_belief)`,
                                    },
                                    `was a popular`,
                                    {
                                        anchor: `New Age`,
                                        wiki: `New_Age`,
                                    },
                                    `belief in the 70s. Like Beyonders, star people have no recollection of their stellar origins. The letters from RI Research undoubtedly drew their material from this body of thought.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `1:39:29.84`,
                    lyric: `We've received your fee, and per the tests,`,
                },
                {
                    mixTime: `1:43:06.63`,
                    lyric: `you are indeed a seed from that nebular nest.`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `The sound of rocket circuitry in the background was made by banging an electric guitar against a carpet floor while bending its whammy bar. It took countless tries, and I kept having to retune because the tuning would get messed up each time.`,
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
                    mixTime: `1:46:27.21`,
                    lyric: [
                        `Is this`,
                        {
                            anchor: `too much at once`,
                            card: {
                                description: `I sobbed when I finally got the letter confirming I was a Beyonder. While I was relieved to have an explanation for my torment, the last thing I wanted was the burden of being different from everyone else.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `? We're trusting mum's to be the word.`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: BRIDGE,
            },
            mainVerses: [
                {
                    mixTime: `1:54:08.42`,
                    lyric: `Beyonders pine for a love no mortals give,`,
                },
                {
                    mixTime: `1:57:29.02`,
                    lyric: [
                        `one they'll find only once we build the`,
                        {
                            anchor: `mothership`,
                            card: {
                                description: `To appear legitimate, the letters were peppered with pseudo-scientific terms, as they promised to keep me abreast of ongoing technological developments. This included spacecraft that would allow us to make contact with extraplanetary kin.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `2:01:19.63`,
                    lyric: `Your monthly tithe shall fund good tidings soon to come.`,
                },
                {
                    mixTime: `2:05:24.04`,
                    lyric: [
                        `But till then, here's`,
                        {
                            anchor: `how you're to live`,
                            card: {
                                description: `The letters cautioned me to keep myself separate from society. I realized my brother had been doing this all along, so I adopted a stoic composure based on his.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `…"`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `I decided to learn Tuvan throat singing after my first girlfriend Catherine took me to see a documentary called`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Genghis Blues`,
                                wiki: `Genghis_Blues`,
                            },
                        },
                        `. Within a week, I was able to sound out the main partials, which impressed her greatly. My life ever since has been all about recapturing that moment.`,
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
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: `2:09:28.46`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(melodicas, Christopher's theme)`,
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
                    mixTime: `2:16:12.02`,
                    lyric: [
                        `So thus we learned to`,
                        {
                            anchor: `act the dunce`,
                            card: {
                                description: `By failing to acknowledge or respond to fellow students, I came across as an imbecile.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:18:07.31`,
                    lyric: `as spies among the carnal fallen,`,
                },
                {
                    mixTime: `2:20:16.44`,
                    lyric: [
                        `twin friars`,
                        {
                            anchor: `cast here in pollens`,
                            card: {
                                description: [
                                    `In Greek mythology, "`,
                                    {
                                        anchor: `Castor and Pollux`,
                                        wiki: `Castor_and_Pollux`,
                                    },
                                    `" were twin brothers fathered by Zeus. Pollux was immortal; Castor was not. After Castor's death, Pollux pleaded with Zeus to let him share his immortality with his twin. And so they were transformed into the constellation`,
                                    {
                                        anchor: `Gemini`,
                                        wiki: `Gemini_(constellation)`,
                                    },
                                    `. Similarly, I felt as if my brother were sharing his autism with me, along with its spiritual answers.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:22:11.73`,
                    lyric: `from a star's placenta sac.`,
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
                    mixTime: `2:23:23.21`,
                    lyric: `Braced for an earth stay unloved,`,
                },
                {
                    mixTime: `2:25:18.52`,
                    lyric: [
                        `twits daily`,
                        {
                            anchor: `murdered for their virtue`,
                            card: {
                                description: `My ordeal was made more bearable if I could tie it to a greater purpose. But ironically, behaving like my suffering had meaning only invited further abuse.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `2:27:27.64`,
                    lyric: `Mirthful, the merciless would hurt you,`,
                },
                {
                    mixTime: `2:29:22.93`,
                    lyric: [
                        `as`,
                        {
                            anchor: `omerta`,
                            card: {
                                description: [
                                    {
                                        anchor: `Omerta`,
                                        wiki: `Omertà`,
                                    },
                                    `is the`,
                                    {
                                        anchor: `Mafia`,
                                        wiki: `American_Mafia`,
                                    },
                                    `'s code of silence that discourages cooperation with authorities. I'm sure I wasn't the first kid who noticed parallels between the unspoken rules of the schoolyard and those of the criminal world.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `turned their backs.`,
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
                    mixTime: `2:31:18.23`,
                    lyric: `Stung by venomous vipers, our muted youths lapsed.`,
                },
                {
                    mixTime: `2:35:08.83`,
                    lyric: [
                        `We knew the`,
                        {
                            anchor: `shortest ciphers`,
                            card: {
                                description: [
                                    `A shorter`,
                                    {
                                        anchor: `cryptogram`,
                                        wiki: `Cryptogram`,
                                    },
                                    `gives away fewer clues and is thus more difficult to solve. In the same vein, by not speaking or expressing emotion, I gave the bullies fewer openings to provoke a response from me, and the less they then bothered to try.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `are the toughest ones to crack.`,
                    ],
                },
                {
                    mixTime: `2:38:29.44`,
                    lyric: [
                        `But`,
                        {
                            anchor: `every hero has a heel`,
                            card: {
                                description: [
                                    `The Greek hero`,
                                    {
                                        anchor: `Achilles`,
                                        wiki: `Achilles`,
                                    },
                                    `was invulnerable everywhere on his body except for his heel. In the same way, I might have had the strength to remain stoic forever, if not for my one weakness of craving acceptance by others.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `, we'd realize, blind before the squad.`,
                    ],
                },
                {
                    mixTime: `2:42:06.21`,
                    lyric: [
                        `The only`,
                        {
                            anchor: `spies who get to feel love`,
                            card: {
                                description: [
                                    `Since a`,
                                    {
                                        anchor: `spy`,
                                        wiki: `Espionage`,
                                    },
                                    `'s success hinges upon staying hidden, their exploits will never be known until after they've been captured and then executed by`,
                                    {
                                        anchor: `firing squad`,
                                        wiki: `Execution_by_firing_squad`,
                                    },
                                    `. Similarly, my desire to be part of a friendly squad eventually led me to open up, thus sabotaging all my previous efforts to be unresponsive.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `first`,
                        {
                            anchor: `unearth their own plots`,
                            cards: [
                                {
                                    description: `But this only exposed me to greater scrutiny, as I was now forced to explain my past behavior.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Figuratively, to reveal one's secret plans. Literally, to dig one's own grave.`,
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `!`,
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
                    mixTime: `2:46:24.45`,
                    lyric: [
                        {
                            anchor: `Mushing onward`,
                            cards: [
                                {
                                    description: [
                                        `Here, I imagine Pchelka and Mushka as`,
                                        {
                                            anchor: `sled dogs`,
                                            wiki: `Sled_dog`,
                                        },
                                        `in the Russian`,
                                        {
                                            anchor: `tundra`,
                                            wiki: `Tundra`,
                                        },
                                        `.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Upon their arrival in the`,
                                        {
                                            anchor: `New World`,
                                            wiki: `New_World`,
                                        },
                                        `, the`,
                                        {
                                            anchor: `French`,
                                            wiki: `France`,
                                        },
                                        `learned the practice of dog sledding from the natives. They would command their dog teams to move by shouting "`,
                                        {
                                            isItalic: true,
                                            lyric: `marche`,
                                        },
                                        `," meaning "go," which continued in English as "`,
                                        {
                                            anchor: `mush`,
                                            wiki: `Mushing`,
                                        },
                                        `."`,
                                    ],
                                },
                            ],
                        },
                        `,`,
                        {
                            anchor: `Mushka`,
                            properNoun: true,
                            card: {
                                description: [
                                    `While Pchelka and Mushka successfully spent a day in orbit aboard`,
                                    {
                                        anchor: `Sputnik 6`,
                                        wiki: `Korabl-Sputnik_3`,
                                    },
                                    `, there was an error upon reentry. To prevent the spacecraft from landing in hostile territory, the Soviets made it self-destruct, killing all aboard. But in my retelling, I as Pchelka somehow manage to avoid the sad fate that my brother as Mushka could not.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `'s dragged by collar`,
                    ],
                },
                {
                    mixTime: `2:50:01.22`,
                    lyric: [
                        `to`,
                        {
                            anchor: `his slaughter`,
                            card: {
                                description: [
                                    `I wrote this song during the peak of my activism with the`,
                                    {
                                        anchor: `animal rights movement`,
                                        wiki: `Animal_rights_movement`,
                                    },
                                    `, which takes a dim view of`,
                                    {
                                        anchor: `sled dog racing`,
                                        wiki: `Sled_dog_racing`,
                                    },
                                    `. Not only are dogs routinely abandoned or killed when they outlive their usefulness, but the race itself is grueling enough to cause death by overexertion.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `under`,
                        {
                            anchor: `undying dawn`,
                            card: {
                                description: [
                                    `During summer in the`,
                                    {
                                        anchor: `Arctic`,
                                        wiki: `Arctic`,
                                    },
                                    `, the`,
                                    {
                                        anchor: `sun never sets`,
                                        wiki: `Midnight_sun`,
                                    },
                                    `. Instead, it remains visible just above the horizon.`,
                                ],
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `2:53:08.01`,
                    lyric: [
                        `Choked, he's soon a goner,`,
                        {
                            anchor: `no one heard his hollers`,
                            card: {
                                description: `I always wondered if my brother was screaming on the inside, as I certainly was during this time.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `2:57:12.43`,
                    lyric: [
                        `this pack honors only the`,
                        {
                            anchor: `idiot's rod`,
                            card: {
                                description: [
                                    `The "`,
                                    {
                                        anchor: `Iditarod`,
                                        wiki: `Iditarod_Trail_Sled_Dog_Race`,
                                    },
                                    `" is an annual sled dog race held in`,
                                    {
                                        anchor: `Alaska`,
                                        wiki: `Alaska`,
                                    },
                                    `. Some mushers use a whip to keep the pack disciplined.`,
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
                    mixTime: `3:00:19.20`,
                    lyric: [
                        `Next cabins come equipped with`,
                        {
                            anchor: `pentobarbitone syringe`,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `pentobarbital`,
                                        wiki: `Pentobarbital`,
                                    },
                                    `injection is the most humane means of`,
                                    {
                                        anchor: `euthanasia`,
                                        wiki: `Euthanasia`,
                                    },
                                    `. No such kindness was prepared for Laika, whose death by heat exhaustion had been expected all along.`,
                                ],
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `3:04:09.80`,
                    lyric: `nothing too rich for glorious cosmonauts!`,
                },
            ],
        },
        {
            unitMap: {
                formType: POSTCHORUS,
            },
            mainVerses: [
                {
                    mixTime: `3:08:00.41`,
                    lyric: [
                        `I'm`,
                        {
                            anchor: `sorry I bailed`,
                            card: {
                                description: `By wanting to rejoin the company of others, I felt like I was betraying my brother somehow. Unlike me, he wasn't a tourist in the land of autism. He wasn't free to come and go as he pleased.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `,`,
                        {
                            anchor: `Xiao Xiang`,
                            properNoun: true,
                            card: {
                                description: `Mushka means "little fly" in Russian, and by coincidence, my brother's Chinese name, Xiao Xiang, literally means "little fly." (Though in his case, the second word is a verb, not a noun.) Incidentally, Pchelka means "little bee," which maybe also makes sense, given that my name starts with the letter B?`,
                                dotKeys: {
                                    [REFERENCE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `, mush on…`,
                    ],
                },
                {
                    mixTime: `3:11:21.00`,
                    lyric: [
                        `I couldn't ditch my wails, I`,
                        {
                            anchor: `needed the pod`,
                            card: {
                                description: [
                                    `A group of`,
                                    {
                                        anchor: `whales`,
                                        wiki: `Whale`,
                                    },
                                    `is called a pod. Because I wanted to belong to a social group, I couldn't ditch my "whales," and so I sought out a metaphorical escape pod.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                card: {
                    description: [
                        {
                            anchor: `David Bowie`,
                            wiki: `David_Bowie`,
                        },
                        `'s "`,
                        {
                            anchor: `Space Oddity`,
                            wiki: `Space_Oddity`,
                        },
                        `" closes with a free-form instrumental outro that evokes the sound of failing radio transmissions. I aimed for a similar effect by scraping the strings of an electric guitar against the pickup, and by bouncing a metal rod on a single string near the bridge.`,
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
                    mixTime: `3:15:11.59`,
                    lyric: [
                        `"Kids say you're`,
                        {
                            anchor: `hopped on drugs`,
                            card: {
                                description: `Eventually a classmate suspected me of taking drugs, and I was sent to the principal's office. When my mother came to pick me up, she chewed out the principal for suspecting I could do such a thing. Since I was more responsive around authority figures, he agreed that the accusation didn't make sense and dropped it.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `, son, with Mum we'll need a word."`,
                    ],
                },
                {
                    mixTime: `3:22:22.80`,
                    lyric: [
                        `Mushka,`,
                        {
                            anchor: `per their bargain`,
                            card: {
                                description: `Though I faked autism for only a year or so, the social repercussions lasted much longer, since I was now and forever the kid who once did that really weird thing. It's not that I lacked the will to repair my standing. But I was as baffled as anyone else about the psychological forces that prompted such behavior in the first place, and there were no guide books to instruct me where to go from there.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, I`,
                        {
                            anchor: `can't ever return`,
                            card: {
                                description: [
                                    `I'd grown disillusioned with RI Research by this point anyway, as the letters inexplicably began to take on`,
                                    {
                                        anchor: `Christian`,
                                        wiki: `Christianity`,
                                    },
                                    `overtones. It's not that I held Christianity to be conclusively false. It was just incongruous with all the previous talk of extraterrestrial origins.`,
                                ],
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
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `My brother currently lives in his own apartment and gets round-the-clock care through a`,
                        {
                            anchor: `supported living`,
                            wiki: `Supported_living`,
                        },
                        `agency.`,
                    ],
                    dotKeys: {
                        [AFTERWORD]: true,
                    },
                },
            },
        },
    ],
}
