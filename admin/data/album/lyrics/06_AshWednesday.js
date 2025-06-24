import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    SONGCRAFT,
} from '../../../../src/constants/dots'
import {
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    IS_UNIT_DOT,
    FORESHADOW_OF_WORMHOLE_PREFIX,
} from '../../../../src/constants/lyrics'
import { REVIEW } from '../../../containers/Annotations/constants/todos'

export default {
    title: 'Ash Wednesday',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `Darbuka in anacrusis`,
    playerStartTime: 967.569,
    mixStartTime: `0:01:03.51`,
    overview: `My first girlfriend in college was Catherine, a nice Catholic girl and high school valedictorian. Partly due to my lack of reading habit, we were very different people, and eventually she broke up with me— the night before Ash Wednesday. So the next morning I ashed my own forehead and tried to bump into her, hoping that if she could picture me as a good Catholic boy, then I might get another chance. It didn't work, but I did grow into a lifelong reader, and I have Catherine to thank for that.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        {
                            anchor: `Ash Wednesday`,
                            wiki: `Ash_Wednesday`,
                        },
                        `is the first day of`,
                        {
                            anchor: `Lent`,
                            wiki: `Lent`,
                        },
                        `, a period of fasting observed by Christians to memorialize the forty days that Jesus spent fasting in the desert.`,
                    ],
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
                    lyric: [
                        {
                            anchor: `O Catherine! My Catherine!`,
                            properNoun: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Walt Whitman`,
                                        wiki: `Walt_Whitman`,
                                    },
                                    `wrote his elegy "`,
                                    {
                                        anchor: `O Captain! My Captain!`,
                                        wiki: `O_Captain!_My_Captain!`,
                                    },
                                    `" upon hearing of Abraham Lincoln's assassination. I'm not sure why I chose this reference. I might've spent a long while after the breakup whimpering, "Oh Catherine…"`,
                                ],
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `Our`,
                        {
                            anchor: `futile trip`,
                            card: {
                                description: [
                                    `I moved to the San Francisco Bay Area to attend college at`,
                                    {
                                        anchor: `UC Berkeley`,
                                        wiki: `University_of_California,_Berkeley`,
                                    },
                                    `. There I met Catherine, a fellow freshman, in a class on European folklore.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `is done`,
                    ],
                },
                {
                    mixTime: `0:07:04.36`,
                    lyric: [
                        {
                            anchor: `where it commenced`,
                            card: {
                                description: `The relationship with Catherine began like my friendship with Sasha had a decade earlier: I latched onto the first cute person to show me kindness in a new setting, and then I tried to make myself indispensable in small ways.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `: in my`,
                        {
                            anchor: `bookless room`,
                            card: {
                                description: [
                                    `When Catherine visited my apartment for the first time, she glanced around and remarked that she didn't see any books. "I don't read," I joked— though it was partly in truth. As children, my sister was the voracious bookworm and aspiring writer, so I preferred hobbies that`,
                                    {
                                        isItalic: true,
                                        lyric: `didn't`,
                                    },
                                    `involve words, like music and illustration.`,
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
                    mixTime: `0:10:14.39`,
                    lyric: [
                        {
                            // NOTE: I changed from Ulysses'.
                            anchor: `Ulysses's tomb`,
                            properNoun: true,
                            card: {
                                description: [
                                    `A reference to the classic "Who's buried in`,
                                    {
                                        anchor: `Grant's tomb`,
                                        wiki: `Grant's_Tomb`,
                                    },
                                    `?" riddle, of course, but also to the James Joyce novel`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Ulysses`,
                                            wiki: `Ulysses_(novel)`,
                                        },
                                    },
                                    `, which Catherine was reading at the time. Our relationship was likely doomed once I made this remark, since having an illiterate boyfriend would surely be the death of her.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, surely buried she'd be!`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `For a song about two people who couldn't be any more different, I juxtaposed`,
                        {
                            anchor: `Arabic maqam`,
                            wiki: `Arabic_maqam`,
                        },
                        `in the verses against`,
                        {
                            anchor: `Renaissance polyphony`,
                            wiki: `Polyphony`,
                        },
                        `in the lone chorus at the end.`,
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
                    mixTime: `0:16:05.86`,
                    lyric: [
                        `First we`,
                        {
                            anchor: `laid Tourette's`,
                            cards: [
                                {
                                    description: [
                                        `Like those with`,
                                        {
                                            anchor: `Tourette syndrome`,
                                            wiki: `Tourette_syndrome`,
                                        },
                                        `, who suffer from involuntary tics, Catherine and I might've said some unpleasant things on impulse during the breakup.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Jesus was laid "to rest" on the day of his crucifixion.`,
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                                {
                                    wormhole: `laid_tourettes`,
                                },
                            ],
                        },
                        `, next regrets,`,
                    ],
                },
                {
                    mixTime: `0:19:15.93`,
                    lyric: [
                        `the`,
                        {
                            anchor: `last day she rose`,
                            card: {
                                description: `He then rose on the third day.`,
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `up and left, hers the`,
                        {
                            anchor: `sole assent`,
                            card: {
                                description: `It was Catherine who wanted the breakup, not me. But she was also leaving me behind in another sense, as her "soul" was the only one awaiting "ascent."`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `…`,
                    ],
                },
                {
                    mixTime: `0:24:08.82`,
                    lyric: `But saving herself strictly for marriage, or really from me?`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: REVIEW,
                card: {
                    description: [
                        `The shrieking`,
                        {
                            anchor: `recorders`,
                            wiki: `Recorder_(musical_instrument)`,
                        },
                        `mimic the sound of`,
                        {
                            anchor: `BART`,
                            wiki: `Bay_Area_Rapid_Transit`,
                        },
                        `trains braking in a subway tunnel, which can be heard from above through the sidewalk grates. I made the tracks by overblowing individual pitches and then splicing them together to form descending`,
                        {
                            anchor: `arpeggios`,
                            wiki: `Arpeggio`,
                        },
                        `: triplets on the soprano recorder, and quadruplets on the tenor.`,
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `0:30:14.55`,
                    // Note: I'm spelling out Saint, from St.
                    lyric: `Oh and for Catherine, Saint Catherine of God,`,
                },
                {
                    mixTime: `0:35:21.79`,
                    lyric: [
                        `I purge, with a`,
                        {
                            anchor: `dirge she'd deride`,
                            cards: [
                                {
                                    description: `Up until then, I'd thought of songwriting as just a matter of combining chords and melodies. But Catherine valued music for its lyrics— and because mine at the time were of the nonsensical variety, she was never impressed by any song of mine that I played for her.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `A`,
                                        {
                                            anchor: `dirge`,
                                            wiki: `Dirge`,
                                        },
                                        `is a song of lament.`,
                                    ],
                                },
                            ],
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:39:01.79`,
                    lyric: `with sadness, sad for what I am not:`,
                },
                {
                    mixTime: `0:43:10.44`,
                    lyric: `a soul to share in her eternal life.`,
                },
            ],
        },
        {
            unitMap: {
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `0:47:19.03`,
                    lyric: [
                        `Oh Catherine,`,
                        {
                            anchor: `pressed for an opinion`,
                            card: {
                                description: `Feeling sheepish that Catherine thought so little of my songs, I longed to write one someday that could tug at her heartstrings. So in this scenario, I imagine myself asking for a critique of the very lyrics you're reading now.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `, sighed,`,
                    ],
                },
                {
                    mixTime: `0:50:29.04`,
                    lyric: [
                        `"My,`,
                        {
                            anchor: `what wit, man`,
                            card: {
                                description: `I picture Catherine responding in her droll manner, with a pun that salutes my effort to channel "Walt Whitman."`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `,"`,
                        {
                            anchor: `putting down her Joyce`,
                            todo: REVIEW,
                            card: {
                                description: [
                                    `But her compliment is less than sincere, since referencing a poet studied by middle schoolers is hardly an impressive feat. And so, annoyed at being made to put down the Joyce novel she's reading, Catherine amuses herself by putting`,
                                    {
                                        isItalic: true,
                                        lyric: `me`,
                                    },
                                    `down— for thinking I could be the James Joyce of rock.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:54:23.40`,
                    lyric: [
                        `with`,
                        {
                            anchor: `"Joyce" oblivious`,
                            card: {
                                description: `Of course, not knowing that I couldn't be the next Joyce is why I dared to try. And so I began to dream that I could do for rock music what Joyce had done for modern literature.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `to the trump she just played.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Maqam is distinguished by its`,
                        {
                            anchor: `quarter tones`,
                            wiki: `Quarter_tone`,
                        },
                        `, which are absent in the Western`,
                        {
                            anchor: `chromatic scale`,
                            wiki: `Chromatic_scale`,
                        },
                        /**
                         * NOTE: Counter-melody is mentioned later in Garryowen,
                         * and is a wiki later in Uncanny Valley.
                         */
                        `. For each maqam counter-melody, I scored two separate parts, with the instrument in the second one detuned a quarter step. I then combined the recorded takes into a single track.`,
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
                    mixTime: `1:02:26.32`,
                    lyric: `Couldn't heaven, her heaven,`,
                },
                {
                    mixTime: `1:05:07.80`,
                    lyric: `brimming over with smart boys, fit just one art boy`,
                },
                {
                    mixTime: `1:10:00.66`,
                    lyric: [
                        `who tried but failed to win her heart`,
                        {
                            anchor: `poised with brains`,
                            card: {
                                description: `Catherine undervalued the artistic strengths I'd always counted on to cover up my many weaknesses. This meant if I were ever to be worth keeping someday, then I simply couldn't have any weaknesses.`,
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
                        `While a major third gets divided into two whole steps in Western music, a minor third can only be divided between a whole and a half. But quarter tones allow a minor third to be traversed in two equal steps, creating the sensation of a squished major third. I liked how this confused my ears, so I went overboard with these rapid-fire minor-third runs on the`,
                        {
                            anchor: `Dobro`,
                            wiki: `Dobro`,
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
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `1:16:06.46`,
                    lyric: [
                        `And as I pace, stranded here`,
                        {
                            anchor: `outside her Shelta`,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `Irish Travellers`,
                                        wiki: `Irish_Travellers`,
                                    },
                                    `, a largely Catholic ethnic group, speak a secret language known as`,
                                    {
                                        anchor: `Shelta`,
                                        wiki: `Shelta`,
                                    },
                                    `that was historically meant to exclude outsiders. Catherine wasn't a Traveller, but I was stuck outside her "shelter" all the same.`,
                                ],
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
                    mixTime: `1:20:29.36`,
                    lyric: [
                        `in`,
                        {
                            anchor: `famous raincoat`,
                            card: {
                                description: [
                                    `Catherine was the one who introduced me to the works of Leonard Cohen. It was her impassioned reading of his song "`,
                                    {
                                        anchor: `Famous Blue Raincoat`,
                                        wiki: `Famous_Blue_Raincoat`,
                                    },
                                    `" that helped me understand the heights that great lyrics can reach.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        {
                            anchor: `unknown to roam`,
                            todo: REVIEW,
                            cards: [
                                {
                                    description: `"Raincoat" is slang for a condom, of which the benefit is unknown to "Rome," given the Catholic Church's stance against birth control. Since Catherine had vowed not to engage in premarital sex, we never needed to use one.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Of course, if Catherine`,
                                        {
                                            isItalic: true,
                                            lyric: `were`,
                                        },
                                        `a Traveller, we'd be even`,
                                        {
                                            isItalic: true,
                                            lyric: `less`,
                                        },
                                        `compatible: After all, there's no room for a homebody like me in any wandering community.`,
                                    ],
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
                    mixTime: `1:24:23.65`,
                    lyric: [
                        `my`,
                        {
                            anchor: `girl in glasses`,
                            card: {
                                description: [
                                    `The critic`,
                                    {
                                        anchor: `Dorothy Parker`,
                                        wiki: `Dorothy_Parker`,
                                    },
                                    `, whose wit Catherine admired, famously quipped that "men seldom make passes at girls who wear glasses."`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        {
                            anchor: `went clear`,
                            card: {
                                description: [
                                    `After Catherine cleared me from her life, my hope was to win her back by reading books. Since she loved Leonard Cohen, I started with`,
                                    {
                                        isItalic: true,
                                        lyric: `Beautiful Losers`,
                                    },
                                    `, which turned out to share the same theme of purification through betrayal found in "Famous Blue Raincoat." I thought this explained the line, "Did you ever go clear?" But I later found out that`,
                                    {
                                        anchor: `going clear`,
                                        wiki: `Clear_(Scientology)`,
                                    },
                                    `is a`,
                                    {
                                        anchor: `Scientology`,
                                        wiki: `Scientology`,
                                    },
                                    `thing.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `—`,
                        {
                            anchor: `my Tekakwitha`,
                            card: {
                                description: [
                                    {
                                        anchor: `Kateri Tekakwitha`,
                                        wiki: `Kateri_Tekakwitha`,
                                    },
                                    `, baptized as Saint Catherine, was the Catholic Church's first Native American saint. Her story figures prominently in`,
                                    {
                                        isItalic: true,
                                        lyric: `Beautiful Losers`,
                                    },
                                    `, so I assumed that going clear was also a reference to the legend that her`,
                                    {
                                        anchor: `smallpox`,
                                        wiki: `Smallpox`,
                                    },
                                    `scars vanished miraculously upon her death.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `—`,
                    ],
                },
                {
                    mixTime: `1:29:02.31`,
                    lyric: [
                        `for I lack the wit to spare a`,
                        {
                            anchor: `safe Algonquin abode`,
                            card: {
                                description: [
                                    `Kateri Tekakwitha was born to a`,
                                    {
                                        anchor: `Mohawk`,
                                        wiki: `Mohawk_people`,
                                    },
                                    `chief and an`,
                                    {
                                        anchor: `Algonquin`,
                                        wiki: `Algonquin_people`,
                                    },
                                    `woman who was taken from her own people; while Dorothy Parker was a member of the`,
                                    {
                                        anchor: `Algonquin Round Table`,
                                        wiki: `Algonquin_Round_Table`,
                                    },
                                    `, a social circle famous for their intellectual wit. And so the reason Catherine broke up with me— I presume in jest— is that I was taking her away from her smart circle of friends, being too dimwitted as I was to ever be allowed to meet them.`,
                                ],
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
                formType: BRIDGE,
            },
            mainVerses: [
                {
                    mixTime: `1:36:06.66`,
                    lyric: [
                        `Well yes, I`,
                        {
                            anchor: `faked this X`,
                            cards: [
                                {
                                    description: `Since Catherine insisted on going no further than heavy petting, I had to fake "the sex" for myself by masturbating afterward.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: `On Ash Wednesday, the priest smears ash in the shape of a cross on each parishioner's forehead. But I'd ashed myself without the benefit of a mirror, so mine was slanted like the letter X.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                            ],
                        },
                        `, I should confess,`,
                    ],
                },
                {
                    mixTime: `1:40:15.23`,
                    lyric: `using some old used cigarette.`,
                },
                {
                    mixTime: `1:43:25.27`,
                    lyric: `"So you'd cheat your way into heaven," she might protest.`,
                },
                {
                    mixTime: `1:51:13.93`,
                    lyric: [
                        `Well no, I know it's wrong, but I did`,
                        {
                            anchor: `burn my palms`,
                            card: {
                                description: [
                                    `The ash used on Ash Wednesday comes from burning the palm branches that were blessed on the previous year's`,
                                    {
                                        anchor: `Palm Sunday`,
                                        wiki: `Palm_Sunday`,
                                    },
                                    `. But my ash came from a discarded cigarette that was still lit, so I ended up burning the literal palms of my hands.`,
                                ],
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
                    mixTime: `1:55:22.54`,
                    lyric: `I guess that butt was still fresh.`,
                },
                {
                    mixTime: `1:59:02.56`,
                    lyric: [
                        {
                            isItalic: true,
                            lyric: [
                                `Et`,
                                {
                                    anchor: `Catherine vaut bien une messe`,
                                    properNoun: true,
                                    todo: REVIEW,
                                    problem: `"Earthly ambitions," "preceded," and "spiritual loyalties" still seems like too many big words in a row. Maybe this part can be said first, and the quote second.`,
                                    card: {
                                        description: [
                                            {
                                                anchor: `Henry IV of France`,
                                                wiki: `Henry_IV_of_France`,
                                            },
                                            `was born a Protestant, but converted to Catholicism to gain the royal crown. He's reputed to have said, "`,
                                            {
                                                isItalic: true,
                                                lyric: `Paris vaut bien une messe`,
                                            },
                                            `"— or, "Paris is well worth a Mass"— implying that his earthly ambitions came before any spiritual loyalties. Similarly, I'd have gladly converted if that could get Catherine to stay.`,
                                        ],
                                        dotKeys: {
                                            [OBSERVATION]: true,
                                        },
                                    },
                                },
                                `…`,
                            ],
                        },
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `The rainstick, rustling papers, and tambourine mimic the sound of a wet and windy`,
                        {
                            anchor: `Oakland`,
                            wiki: `Oakland,_California`,
                        },
                        `street.`,
                    ],
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
                    mixTime: `2:03:25.48`,
                    lyric: `On this sad day to mourn`,
                },
                {
                    mixTime: `2:05:22.63`,
                    lyric: [
                        `us wretched souls`,
                        {
                            anchor: `cursed to be born`,
                            cards: [
                                {
                                    description: `I never understood why the Catholic Church extends its pro-life stance to the unborn of other faiths. After all, this just trades away the certainty of an aborted fetus going to heaven, for a living child's likelihood of going to hell.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `born_cursed`,
                                        wormholePrefix: FORESHADOW_OF_WORMHOLE_PREFIX,
                                    },
                                },
                            ],
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `2:08:18.38`,
                    lyric: [
                        `a`,
                        {
                            anchor: `spark zips through my head`,
                            card: {
                                wormhole: `spark_zips`,
                            },
                        },
                        `to be`,
                    ],
                },
                {
                    mixTime: `2:11:14.11`,
                    lyric: `mistaken for Catholic with some smeared ash;`,
                },
                {
                    mixTime: `2:16:07.02`,
                    lyric: [
                        `to wear it like a`,
                        {
                            anchor: `tragic mask`,
                            card: {
                                description: `In time I came to see comedy and tragedy as two sides of the same coin. After all, every tragic situation can be made into a song; writing a song calls for taking the broader view; and anything viewed broadly will reveal its comic underbelly. So I always preferred a negative outcome to none at all— but then this made my whole life feel like a stage act.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
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
                    // NOTE: Counterpoint is a wiki later in Garryowen.
                    description: [
                        `I hadn't formally studied composition up to this point, so when I scored this three-part counterpoint in the vocal`,
                        {
                            anchor: `register`,
                            wiki: `Register_(music)`,
                        },
                        `, I didn't realize that the instruments would drown out my voice. To avoid redoing the tracks, I`,
                        {
                            anchor: `pitch shifted`,
                            wiki: `Pitch_shift`,
                        },
                        `them up an octave. This then gave them a ghostly sheen, which enhances the mood of a rain-soaked evening.`,
                    ],
                    dotKeys: {
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
                    mixTime: `2:19:02.73`,
                    lyric: `On this Ash Wednesday morn,`,
                },
                {
                    mixTime: `2:20:29.93`,
                    lyric: [
                        `in`,
                        {
                            anchor: `spreading mole`,
                            card: {
                                description: [
                                    `My ash was smudged by day's end, resembling the kind of large, amorphous mole that can develop into`,
                                    {
                                        anchor: `melanoma`,
                                        wiki: `Melanoma`,
                                    },
                                    `. Which is fitting, since it was probably sick of me to fake being Catholic.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `my sickness borne`,
                    ],
                },
                {
                    mixTime: `2:23:25.65`,
                    lyric: `upon this head for all to see.`,
                },
                {
                    mixTime: `2:26:21.42`,
                    lyric: `And maybe if Catherine sees, she'll ask,`,
                },
                {
                    mixTime: `2:31:14.31`,
                    lyric: `"So where'd you attend Mass?"`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `While fleshing out the lyrics in this chorus, I noticed that a handful of words in the first stanza are`,
                        {
                            anchor: `homophones`,
                            wiki: `Homophone`,
                        },
                        `of their counterparts in the second, like "mourn" with "morn," and "born" with "borne." So I tried to make the two stanzas match phonetically wherever possible, which then gave me the idea for doublespeaker rhyme later on.`,
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
    ],
}
