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
import { REST, REVIEW } from '../../../containers/Annotations/constants/todos'

/**
 * NOTE: Ash Wednesday and Pchelka`s Starry Journey have been switched from the
 * song list order on the album.
 */
export default {
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
    todo: REST,
    problem: `I don't like that there's an "it" in both the second and third sentences, which refer to different things. Also not sure if the em-dash would be better in the second sentence. But I've already spent so long on this one…`,
    overview: `As my years of getting bullied grew unbearable, a strange letter arrived with promises of spiritual answers. All it asked for was a small payment, which I quickly mailed off. It was then revealed to me that I belonged to a race of astral beings— and as such, I had a mission to shut myself off from the world. So I adopted an unresponsive manner like my brother, leading me to feel a psychic bond with him. But as my sanity chipped away, I came to realize that I was in a mail-order cult…`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        {
                            anchor: `Pchelka and Mushka`,
                            wiki: `Soviet_space_dogs`,
                        },
                        `were dogs sent into orbit under the Soviet space program. In this song's allegorical retelling, I imagine myself as Pchelka and my brother as Mushka.`,
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
                                todo: REVIEW,
                                card: {
                                    description: [
                                        `In`,
                                        {
                                            anchor: `Leonard Cohen`,
                                            wiki: `Leonard_Cohen`,
                                        },
                                        `'s novel`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `Beautiful Losers`,
                                                wiki: `Beautiful_Losers`,
                                            },
                                        },
                                        `, the character F. tires of getting bullied at the beach. So he signs up for the Charles Axis bodybuilding course advertised in a comic book— only to discover that Charles Axis is the one who bullies him. It's a humorous passage from an otherwise tragic story, and I'm reminded of it whenever I reflect on my own misadventures in mail order; in each case, I can't help but smile at the absurdity.`,
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
                    description: `I wanted a child to recite this line, but no one I knew at the time was having them just yet. So I asked my sister to do it in her best child's voice.`,
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
                        lyric: `(throat singing, Christopher's theme)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `In keeping with the theme of Russian dogs in space, two palm-muted mandolins capture the frenetic pulse of the`,
                        {
                            anchor: `balalaika`,
                            wiki: `Balalaika`,
                        },
                        `. Since Tuva is a republic of Russia, I also added`,
                        {
                            anchor: `throat singing`,
                            wiki: `Tuvan_throat_singing`,
                        },
                        `, where overtones in a lone voice sound like accompaniment by a second one. I liked the implication that my brother sings with me in spirit.`,
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
                                description: `The times when I physically hurt my brother were actually rare. They just cast a long shadow in my memory. Since he could never understand or even acknowledge my remorse, I could never feel forgiven.`,
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
                                description: `Since I liked to hole up and work on projects undisturbed, one year I asked my parents for a life-size wooden fort as a combined birthday and Christmas present. Unfortunately, some toys were too pricey to even count for two gifts.`,
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
                                description: [
                                    `I slept in a`,
                                    {
                                        anchor: `captain bed`,
                                        wiki: `Storage_bed`,
                                    },
                                    `that lay atop a dresser on one side, with the other side flush against the wall. The dresser was only a few feet deep, leaving ample space behind it for a hideaway. To get inside, I'd first crawl through the cabinet doorway, then squeeze past the flimsy back panel.`,
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
                    mixTime: `0:32:15.93`,
                    lyric: [
                        `We`,
                        {
                            anchor: `didn't hear a peep`,
                            card: {
                                description: `My brother would play by himself while sitting beside me for hours, never once speaking or interacting. It was a strange closeness we shared.`,
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
                                        `was in breeding season. I found its birdsong haunting and longed to hear it again ever afterward. "Poor Sam Peabody" is a mnemonic used by birdwatchers to mimic its cadence and pitch.`,
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
                                    description: `Unfortunately, shrill protests against getting bullied are as effective as the bleating of a calf being led to slaughter.`,
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
                                description: `In elementary school, I was well liked. Being small for my age, I was pampered even by other boys; and though I was absorbed in my sketchbooks, I was happy to draw anything for all those who asked. But the traits that once made me a lovable mascot now marked me as easy prey in middle school, and I was ill-prepared.`,
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
                            todo: REST,
                            problem: `I'm still not sure the connection is clearly being made here that being popular or liked is the thing worth caring about. But I've already spent so long on this.`,
                            card: {
                                description: `The most popular kids in middle school were also the least concerned about being liked, which ran counter to my intuition that whatever I wished to achieve should be pursued wholeheartedly. And yet, trying things their way didn't make me any more likable…`,
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
                                description: `In earlier years, I was proud of my near-perfect attendance record. Once the bullying began, however, I'd skip school by faking illness on a regular basis. My mother noticed the change, but trusted me enough not to press the issue.`,
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
                                    `In a well-known comic book ad at the time, a scrawny guy takes his revenge on a bully by bulking up— all thanks to`,
                                    {
                                        anchor: `Charles Atlas`,
                                        wiki: `Charles_Atlas`,
                                    },
                                    `'s free bodybuilding guide.`,
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
                                description: `Since I had no friends in middle school, I'd amuse myself by sending away for free samples advertised in the back pages of my comic books. As a result, I got flooded with junk mail— which exposed me to even more such offers. Then one day, I received a letter from RI Research, Special Human Being Laboratory…`,
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
                                    `In Asian cultures, children receive money in`,
                                    {
                                        anchor: `red envelopes`,
                                        wiki: `Red_envelope`,
                                    },
                                    `as a gift. My parents always insisted that we save it all for college. But desperate for answers, I blew my savings on my correspondence with RI Research.`,
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
                                description: `According to RI Research, Beyonders are an ancient race of astral beings who were scattered across the universe. The ones who came to Earth adopted the likeness of humans, after which they lost all memory of their stellar origins. Yet even so, they're beset by a silent discomfort that they don't truly belong.`,
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
                                description: `The letter acknowledged my yearning for acceptance, and spoke to my frustration that this basic human need should go unmet. Having hit the right nerves, it then shared good news: RI Research believed I might be a Beyonder— and now, after searching for so long, they'd found me.`,
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
                                        `ushered in the Space Age by inventing the liquid-fueled rocket. But in my case, I couldn't wait for a more promising age to arrive on its own. Middle school was brutal and felt endless; I needed answers right then.`,
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
                            card: {
                                description: [
                                    `In Chinese,`,
                                    {
                                        isItalic: true,
                                        lyric: `gogo`,
                                    },
                                    `means "big brother"; and of course,`,
                                    {
                                        isItalic: true,
                                        lyric: `didi`,
                                    },
                                    `here now refers to`,
                                    {
                                        isEmphasis: true,
                                        lyric: `my`,
                                    },
                                    `little brother. Coincidentally, Gogo and Didi are also the respective pet names of Estragon and Vladimir, the two tramps who still wait for Godot by the end of Beckett's play.`,
                                ],
                                dotKeys: {
                                    [REFERENCE]: true,
                                },
                            },
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
                                    `, the first dog in orbit, whose death was intentional as her spacecraft wasn't designed to return. As a child, I could sympathize with Laika's plight of being thrust from one desperate circumstance to the next.`,
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
                                    `is where the largest`,
                                    {
                                        anchor: `NASA`,
                                        wiki: `NASA`,
                                    },
                                    `center is located.`,
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
                                        `mean "greater dog" and "lesser dog," respectively. They're said to follow`,
                                        {
                                            anchor: `Orion`,
                                            wiki: `Orion_(mythology)`,
                                        },
                                        `, the hunter in Greek mythology, who can be identified in the night sky by the three stars in a row that make up his belt.`,
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
                                    `Though I had no way to know this as a child, RI Research likely drew their material from the notion of`,
                                    {
                                        anchor: `star people`,
                                        wiki: `Star_people_(New_Age_belief)`,
                                    },
                                    `, a New Age belief in the '70s. Like Beyonders, star people lost all memory of their stellar origins once they arrived on Earth.`,
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
                    description: `To make the sound of rocket circuitry heard here, I banged an electric guitar against a carpet floor while bending its whammy bar. It took countless tries, and I had to retune each time because the guitar kept going flat.`,
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
                                description: `I sobbed when the follow-up letter arrived to confirm I was a Beyonder. While it was a relief to finally have an explanation for my torment, the last thing I wanted was the burden of being different from everyone else.`,
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
                                description: `The letters promised to update me on new developments, including the construction of spacecraft that would allow Beyonders to make contact with their extraplanetary kin.`,
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
                                description: `The letters cautioned me to separate myself from society. Realizing that my brother had been doing this all along, I studied his unresponsive manner to fashion my own.`,
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
                        `. Within a week I was sounding out the main`,
                        {
                            anchor: `partials`,
                            wiki: `Harmonic_series_(music)`,
                        },
                        `, which impressed her greatly. I've been trying to recapture the glory of that moment ever since.`,
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
                                description: `By failing to acknowledge or respond to my classmates, I came across as an idiot.`,
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
                                    `" were twins with separate fathers: While Pollux was the son of Zeus, Castor was fathered by a mortal. So Zeus transformed them both into the constellation`,
                                    {
                                        anchor: `Gemini`,
                                        wiki: `Gemini_(constellation)`,
                                    },
                                    `, allowing Castor to share in his brother's immortality. Similarly, I felt as if my brother were sharing his autism with me, along with its spiritual answers.`,
                                ],
                                dotKeys: {
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
                                description: `My suffering was made more bearable if I could believe it was tied to a greater purpose. But ironically, behaving as such only invited further abuse…`,
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
                                    `is the Mafia's code of silence, which discourages cooperation with authorities. I'm sure I wasn't the first kid who noticed similarities between the unspoken rules of the schoolyard and those of the criminal underworld.`,
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
                                    `The shorter the`,
                                    {
                                        anchor: `cryptogram`,
                                        wiki: `Cryptogram`,
                                    },
                                    `, the fewer clues it gives away, and thus the more difficult it is to solve. In the same vein, the more unresponsive my manner, the fewer openings I gave the bullies to provoke a response from me— and the less they then bothered to try.`,
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
                                    `was invulnerable everywhere on his body except for his heel. In the same way, I might've had the strength to remain stoic forever, if not for my fatal weakness of craving the acceptance of others.`,
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
                            todo: REVIEW,
                            card: {
                                description: [
                                    `Since a spy's success hinges upon staying hidden, their exploits won't be known until they've been captured— at which point they'll face death by firing squad. And in my desire to join a friendly squad, I faced a similar dilemma: Yes, I`,
                                    {
                                        isItalic: true,
                                        lyric: `could`,
                                    },
                                    `open up to my classmates, and thus sabotage all my previous efforts to stay unresponsive… but now I'd have to explain why I turned so weird in the first place.`,
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
                            card: {
                                description: `Figuratively, to reveal one's secret plans; and literally, to dig one's own grave.`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
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
                                    description: `Here, I imagine Pchelka and Mushka as sled dogs in the Russian tundra.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Upon their arrival in the New World, the French learned the practice of dog sledding from the natives. They would command their dog teams to move by shouting "`,
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
                                description: `Though Pchelka and Mushka successfully went into orbit, there was a problem with their reentry. To prevent the spacecraft from landing in hostile territory, the Soviets had it self-destruct, killing all onboard. But in this song's retelling, I as Pchelka somehow manage to avoid the sad fate that my brother as Mushka couldn't.`,
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
                                description: `I wrote this song during the peak of my activism with the animal rights movement, which takes a dim view of sled dog racing. Not only are dogs routinely abandoned or killed when they outlive their usefulness, but the race itself is grueling enough to cause death by overexertion.`,
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
                                    `During summer in the Arctic, the`,
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
                                description: `I always wondered if my brother was actually screaming on the inside, as I certainly was during this time.`,
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
                                    `" is an annual sled dog race held in Alaska. Some mushers use a whip to keep the pack disciplined.`,
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
                                // NOTE: Euthanasia has a wiki in Cremated.
                                description: [
                                    `A`,
                                    {
                                        anchor: `pentobarbital`,
                                        wiki: `Pentobarbital`,
                                    },
                                    `injection is the most humane means of euthanasia. No such kindness was prepared for Laika, whose death by heat exhaustion had been expected all along.`,
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
                                description: `Mushka means "little fly" in Russian, and by coincidence, my brother's Chinese name, Xiao Xiang, literally means "little fly"— though in his case, the second word is a verb, not a noun. Incidentally, Pchelka means "little bee," which maybe also makes sense, given that my name starts with the letter B?`,
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
                                description: `A group of whales is known as a pod. Because I wanted to belong to a social group, I couldn't ditch my "whales"— and thus I sought a metaphorical escape pod.`,
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
                        `" closes with an instrumental outro that evokes the idea of failing radio transmissions. To get the same effect, I scraped the strings of an electric guitar against the pickup. I also added the sound of a metal rod bouncing on a single string near the bridge.`,
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
                                description: `Eventually a classmate accused me of taking drugs, and I got sent to the principal's office. When my mother came to pick me up, she chewed out the principal for suspecting that I could do such a thing. Since I was more responsive around authority figures, he agreed that the accusation didn't make sense, and dropped it.`,
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
                                description: `Though I faked autism for only a year or so, the social repercussions lasted much longer, since I was now and forever the kid who did that really weird thing once. It's not that I lacked the will to repair my standing. But I was just as confused as anyone else about what had possessed me, and there were no guide books instructing me where to go from there.`,
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
                                description: `Regardless, I'd grown disillusioned with RI Research by this point, as the letters had become overtly Christian in tone. It's not that I held Christianity to be conclusively false; it was just incongruous with all the previous talk of stellar origins.`,
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
                    description: `My brother currently lives in his own place and gets round-the-clock care through a supported living agency. When asked how old he is, he still answers "seven."`,
                    dotKeys: {
                        [AFTERWORD]: true,
                    },
                },
            },
        },
    ],
}
