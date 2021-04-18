import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    SONGCRAFT,
} from '../../../../app/constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    IS_UNIT_DOT,
    FORESHADOW_OF_WORMHOLE_PREFIX,
} from '../../../../app/constants/lyrics'

export default {
    path: 'ash-wednesday',
    title: 'Ash Wednesday',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `Darbuka in anacrusis`,
    playerStartTime: 967.569,
    mixStartTime: `0:01:03.51`,
    overview: `In college, I met my first girlfriend. Catherine was a nice Catholic girl and former valedictorian, who didn't take kindly to my lack of reading habit and broke up with me right before Ash Wednesday. So I ashed my own forehead and tried to bump into her that day, hoping that if she could picture me as a good Catholic boy, then I might get another chance. It didn't work, but I did grow into a faithful reader, and I have Catherine to thank for that.`,
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
                            anchor: `Lent,`,
                            wiki: `Lent`,
                        },
                        `a period of fasting observed by Christians to memorialize the forty days that`,
                        {
                            anchor: `Jesus`,
                            wiki: `Jesus`,
                        },
                        `spent fasting in the desert.`,
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
                                    `wrote his elegy`,
                                    {
                                        anchor: `"O Captain! My Captain!"`,
                                        wiki: `O_Captain!_My_Captain!`,
                                    },
                                    `upon hearing of`,
                                    {
                                        anchor: `Abraham Lincoln's`,
                                        wiki: `Abraham_Lincoln`,
                                    },
                                    `assassination.`,
                                ],
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `our`,
                        {
                            anchor: `futile trip`,
                            card: {
                                description: [
                                    `I moved to the`,
                                    {
                                        anchor: `San Francisco Bay Area`,
                                        wiki: `San_Francisco_Bay_Area`,
                                    },
                                    `to attend college. There I met Catherine, a fellow freshman, in a class on European folklore.`,
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
                            anchor: `where it commenced:`,
                            // Just confirm first sentence.
                            awkwardTodo: true,
                            card: {
                                description: `My relationship with Catherine began much like my friendship with Sasha had years earlier. I latched onto the first person to show me kindness in a new environment, and then I tried to make myself indispensable in small ways.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `in my`,
                        {
                            anchor: `bookless room,`,
                            card: {
                                description: `Glancing around my room one night, Catherine remarked that she didn't see any books. "I don't read," I explained, only partly in jest.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:10:14.39`,
                    lyric: [
                        {
                            anchor: `Ulysses' tomb,`,
                            properNoun: true,
                            awkwardTodo: true,
                            card: {
                                description: [
                                    `A reference to the classic`,
                                    {
                                        anchor: `"Who's buried in Grant's tomb?"`,
                                        wiki: `Grant's_Tomb`,
                                    },
                                    `riddle, of course, but also to James Joyce's masterpiece novel`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Ulysses,`,
                                            wiki: `Ulysses_(novel)`,
                                        },
                                    },
                                    `which Catherine was reading at the time. That night was probably the beginning of the end, as Catherine figured that a boyfriend who didn't read for pleasure would be the death of her.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `surely buried she'd be!`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `For this song about two people who couldn't be more different, I placed`,
                        {
                            anchor: `Arabic maqam`,
                            wiki: `Arabic_maqam`,
                        },
                        `in the verses against`,
                        {
                            anchor: `Renaissance polyphony`,
                            wiki: `Polyphony`,
                        },
                        `in the final chorus.`,
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
                            anchor: `laid Tourette's,`,
                            awkwardTodo: true,
                            cards: [
                                {
                                    description: [
                                        `Like those with`,
                                        {
                                            anchor: `Tourette syndrome`,
                                            wiki: `Tourette_syndrome`,
                                        },
                                        `who suffer from involuntary tics, Catherine and I might have impulsively said unpleasant things to each other during the breakup.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Jesus was laid "to rest" on the day of`,
                                        {
                                            anchor: `his crucifixion.`,
                                            wiki: `Crucifixion_of_Jesus`,
                                        },
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                                {
                                    wormhole: `laid_tourettes`,
                                },
                            ],
                        },
                        `next regrets,`,
                    ],
                },
                {
                    mixTime: `0:19:15.93`,
                    lyric: [
                        `the`,
                        {
                            anchor: `last day she rose`,
                            card: {
                                description: [
                                    {
                                        anchor: `Jesus rose`,
                                        wiki: `Resurrection_of_Jesus`,
                                    },
                                    `as well on the third day.`,
                                ],
                            },
                        },
                        `up and left, hers the`,
                        {
                            anchor: `sole assent…`,
                            card: {
                                description: `It was Catherine who wanted the breakup, not me. But she was also leaving me behind in another sense, since her "soul" was the only one awaiting "ascent."`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:24:08.82`,
                    lyric: `But saving herself strictly for marriage, or really from me?`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
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
                        `trains braking in a subway tunnel beneath the sidewalk. I made the tracks by overblowing individual pitches and then splicing those together to form descending`,
                        {
                            anchor: `arpeggios—`,
                            wiki: `Arpeggio`,
                        },
                        `triplets for the soprano recorder, quadruplets for the tenor.`,
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
                            anchor: `dirge she'd deride,`,
                            cards: [
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
                                {
                                    description: `Up to that point, songwriting for me was just a matter of coming up with melodies and chords. But Catherine appreciated music for its lyrics, and because my lyrics were mostly nonsensical, she wasn't impressed by any of the songs I played for her.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                            ],
                        },
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
                            anchor: `pressed for an opinion,`,
                            cards: [
                                {
                                    description: `I would sometimes ask Catherine for honest feedback on my lyrics, hoping that one day I could write a song to tug on her heartstrings.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `In this scenario, I imagine myself asking Catherine for a critique of the very lyrics I'm writing for this song.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            ],
                        },
                        `sighed,`,
                    ],
                },
                {
                    mixTime: `0:50:29.04`,
                    lyric: [
                        {
                            anchor: `"My, what wit, man,"`,
                            card: {
                                description: `I picture Catherine responding in her usual droll manner, with a pun that salutes my effort to channel "Walt Whitman."`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        {
                            anchor: `putting down her Joyce,`,
                            card: {
                                description: [
                                    `Her compliment is less than sincere, however, since referencing a poet studied by middle schoolers is hardly an impressive feat. And so, having being made to put down the Joyce novel she was reading, Catherine amuses herself by figuratively putting`,
                                    {
                                        isItalic: true,
                                        lyric: `me`,
                                    },
                                    `down, for naively thinking that I can be the James Joyce of lyricists.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:54:23.40`,
                    lyric: [
                        `with`,
                        {
                            anchor: `"Joyce" oblivious`,
                            card: {
                                description: [
                                    `Of course, not knowing I couldn't be the next Joyce is precisely why I dared to try. And so the idea began to congeal in my head that I could do for rock music what`,
                                    {
                                        isItalic: true,
                                        lyric: `Ulysses`,
                                    },
                                    `had once done for English literature.`,
                                ],
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
                        `Maqam is distinguished by its use of`,
                        {
                            anchor: `quarter tones,`,
                            wiki: `Quarter_tone`,
                        },
                        `which are absent in the Western`,
                        {
                            anchor: `chromatic scale.`,
                            wiki: `Chromatic_scale`,
                        },
                        `For each quarter-tone melody, I scored parts for two separate takes, the second one with the instrument detuned by a quarter step. I then recorded each take and`,
                        {
                            anchor: `overdubbed`,
                            wiki: `Overdubbing`,
                        },
                        `them into a single track.`,
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
                            anchor: `poised with brains?`,
                            card: {
                                description: `Catherine didn't value the artistic strengths I'd always counted on to cover up my many weaknesses. Which made me realize that if I were ever to be worth keeping one day, then I simply couldn't have any weaknesses.`,
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
                        `While a major third can be divided into equal whole steps in Western music, a minor third can only be divided unequally, between whole and half. But quarter tones allow a minor third to be traversed in two equal steps, creating the sensation of a squished major third. I liked how this confused my ears so much, I went overboard with these rapid-fire minor-third runs on the`,
                        {
                            anchor: `Dobro.`,
                            wiki: `Dobro`,
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
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `1:16:06.46`,
                    lyric: [
                        `And as I pace, stranded here`,
                        {
                            anchor: `outside her Shelta,`,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `Irish Travellers`,
                                        wiki: `Irish_Travellers`,
                                    },
                                    `are a predominantly`,
                                    {
                                        anchor: `Catholic`,
                                        wiki: `Catholic_Church`,
                                    },
                                    `ethnic group. They speak`,
                                    {
                                        anchor: `Shelta,`,
                                        wiki: `Shelta`,
                                    },
                                    `a cryptic language intended to exclude outsiders from comprehension. Catherine was part`,
                                    {
                                        anchor: `Irish,`,
                                        wiki: `Ireland`,
                                    },
                                    `though not a Traveller. Either way, I was stuck outside her "shelter."`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
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
                                    `Catherine was the one who introduced me to the music of Leonard Cohen. It was her impassioned reading of his song`,
                                    {
                                        anchor: `"Famous Blue Raincoat"`,
                                        wiki: `Famous_Blue_Raincoat`,
                                    },
                                    `that helped me understand the heights that great lyrics can reach.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        {
                            anchor: `unknown to roam,`,
                            cards: [
                                {
                                    description: `If Catherine is a figurative Traveller, then I am unwelcome to follow her itinerant community that is well-known to roam.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: [
                                        `"Raincoat" is a slang term for`,
                                        {
                                            anchor: `condoms,`,
                                            wiki: `Condom`,
                                        },
                                        `which might be unknown to`,
                                        {
                                            anchor: `"Rome"`,
                                            wiki: `Rome`,
                                        },
                                        `given the Catholic Church's stance against`,
                                        {
                                            anchor: `birth control.`,
                                            wiki: `Birth_control`,
                                        },
                                        `We never needed them since Catherine had vowed not to engage in`,
                                        {
                                            anchor: `premarital sex,`,
                                            wiki: `Premarital_sex`,
                                        },
                                        `though I always held out the hope.`,
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
                    mixTime: `1:24:23.65`,
                    lyric: [
                        `my`,
                        {
                            anchor: `girl in glasses`,
                            card: {
                                description: [
                                    `The critic`,
                                    {
                                        anchor: `Dorothy Parker,`,
                                        wiki: `Dorothy_Parker`,
                                    },
                                    `whose wit Catherine admired, famously quipped that "men seldom make passes at girls who wear glasses."`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        {
                            anchor: `went clear—`,
                            // Reconcile that part of clearing me from her life.
                            awkwardTodo: true,
                            card: {
                                description: [
                                    `After Catherine cleared her life of me, I tried to win her back by reading lots of books, beginning with the ones we'd discussed. Catherine had mentioned that "Famous Blue Raincoat" echoes a similar theme of purification through betrayal found in Cohen's novel`,
                                    {
                                        isItalic: true,
                                        lyric: `Beautiful Losers,`,
                                    },
                                    `particularly in its line, "Did you ever go clear?" (I later found out that`,
                                    {
                                        anchor: `"going clear"`,
                                        wiki: `Clear_(Scientology)`,
                                    },
                                    `is a`,
                                    {
                                        anchor: `Scientology`,
                                        wiki: `Scientology`,
                                    },
                                    `thing.)`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        {
                            anchor: `my Tekakwitha—`,
                            card: {
                                description: [
                                    {
                                        anchor: `Kateri Tekakwitha,`,
                                        wiki: `Kateri_Tekakwitha`,
                                    },
                                    `baptized as Saint Catherine, was the Catholic Church's first`,
                                    {
                                        anchor: `Native American`,
                                        wiki: `Native_Americans_in_the_United_States`,
                                    },
                                    `saint. Her story figures prominently in`,
                                    {
                                        isItalic: true,
                                        lyric: `Beautiful Losers,`,
                                    },
                                    `so I always assumed that "going clear" was a reference to the legend that her`,
                                    {
                                        anchor: `smallpox`,
                                        wiki: `Smallpox`,
                                    },
                                    `scars miraculously vanished upon her death.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },

                    ],
                },
                {
                    mixTime: `1:29:02.31`,
                    lyric: [
                        `for I lack the wit to spare a`,
                        {
                            anchor: `safe Algonquin abode.`,
                            card: {
                                description: [
                                    `Kateri Tekakwitha was born to a`,
                                    {
                                        anchor: `Mohawk`,
                                        wiki: `Mohawk_people`,
                                    },
                                    `chief and a captured`,
                                    {
                                        anchor: `Algonquin`,
                                        wiki: `Algonquin_people`,
                                    },
                                    `woman whose village he raided. Dorothy Parker was a member of the`,
                                    {
                                        anchor: `Algonquin Round Table,`,
                                        wiki: `Algonquin_Round_Table`,
                                    },
                                    `a social circle of New York City writers known for their clever wit and wordplay. And so here I joke that Catherine must have feared I would take her away from her friends, being too dimwitted as I was to ever be allowed to meet them.`,
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
                formType: BRIDGE,
            },
            mainVerses: [
                {
                    mixTime: `1:36:06.66`,
                    lyric: [
                        `Well yes, I`,
                        {
                            anchor: `faked this X,`,
                            cards: [
                                {
                                    description: [
                                        `On Ash Wednesday, the priest smears ash in the shape of a`,
                                        {
                                            anchor: `cross`,
                                            wiki: `Cross`,
                                        },
                                        `on each parishioner's forehead. But since I'd ashed myself without the benefit of a mirror, mine was slanted like the letter X.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Catherine insisted on going no further than heavy petting, so I would fake "the sex" for myself by masturbating afterward.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `I should confess,`,
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
                            anchor: `burn my palms,`,
                            card: {
                                description: [
                                    `The ash used on Ash Wednesday comes from burning the palm branches that were blessed on the previous year's`,
                                    {
                                        anchor: `Palm Sunday.`,
                                        wiki: `Palm_Sunday`,
                                    },
                                    `But my ash came from a discarded cigarette that was still lit, so the palms I burned were the literal palms of my hands.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
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
                                    anchor: `Catherine vaut bien une messe…`,
                                    properNoun: true,
                                    awkwardTodo: true,
                                    card: {
                                        description: [
                                            {
                                                anchor: `Henry IV of France`,
                                                wiki: `Henry_IV_of_France`,
                                            },
                                            `was born a`,
                                            {
                                                anchor: `Protestant`,
                                                wiki: `Protestantism`,
                                            },
                                            `but converted to Catholicism to gain the French royal crown. He is reputed to have said,`,
                                            {
                                                isItalic: true,
                                                lyric: `"Paris vaut bien une messe,"`,
                                            },
                                            `or "Paris is well worth a Mass," implying that spiritual allegiances are preceded by earthly ambitions. Similarly, I would have happily turned Catholic if it meant getting to stay with Catherine.`,
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
                            anchor: `cursed to be born,`,
                            cards: [
                                {
                                    description: [
                                        `It always confused me why the Catholic Church should extend its`,
                                        {
                                            anchor: `pro-life stance`,
                                            wiki: `Catholic_Church_and_abortion`,
                                        },
                                        `to the unborn of other faiths. After all, this just ends up trading the certainty of an`,
                                        {
                                            anchor: `aborted fetus`,
                                            wiki: `Abortion`,
                                        },
                                        `going to heaven for the likelihood of a living child going to hell.`,
                                    ],
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
                            anchor: `tragic mask.`,
                            awkwardTodo: true,
                            card: {
                                description: [
                                    `At some point, I learned to see`,
                                    {
                                        anchor: `comedy`,
                                        wiki: `Comedy`,
                                    },
                                    `and`,
                                    {
                                        anchor: `tragedy`,
                                        wiki: `Tragedy`,
                                    },
                                    `as two sides of the same coin. After all, any misfortune can be made into song, writing a song calls for taking the broader view, and looking broadly enough will expose the comic underbelly of every misfortune. So I always preferred a negative outcome to none at all, making everything I did feel like a stage act.`,
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
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Originally, this three-part counterpoint for mandolins and`,
                        {
                            anchor: `banjo`,
                            wiki: `Banjo`,
                        },
                        `kept drowning out the vocals because they shared the same register. I solved the problem by`,
                        {
                            anchor: `pitch shifting`,
                            wiki: `Pitch_shift`,
                        },
                        `the instruments up an octave. This also gave the sound a metallic sheen, which suits the ambience of a rain-soaked evening.`,
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
                                        anchor: `melanoma.`,
                                        wiki: `Melanoma`,
                                    },
                                    `Which is fitting, since it was probably sick of me to fake being Catholic.`,
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
                        `of their counterparts in the second. Like "mourn" with "morn," and "born" with "borne." So I challenged myself to make the two stanzas match phonetically when possible, which later gave me the idea for doublespeaker rhyme.`,
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
    ],
}
