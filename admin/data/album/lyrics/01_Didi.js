import {
    AFTERWORD,
    BACKSTORY,
    OBSERVATION,
    REFERENCE,
    SONGCRAFT,
} from '../../../../src/constants/dots'
import {
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    RESPONSE,
    INTRO,
    OUTRO,
    REFRAIN,
    FLASHBACK_TO_WORMHOLE_PREFIX,
    IS_UNIT_DOT,
} from '../../../../src/constants/lyrics'
import { REST, REVIEW } from '../../../containers/Annotations/constants/todos'

export default {
    title: '弟弟 (Didi)',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     *
     * mST - mRT + pRT = pST
     * 1.399 - 1.654 + 0.282 => 0.027
     */
    referenceDescription: `Glockenspiel in measure 1`,
    mixReferenceTime: `0:01:19.61`,
    mixStartTime: `0:01:11.97`,
    playerReferenceTime: 0.282,
    playerStartTime: 0.027,
    overview: `As a young child, I depended on my older sister to do most everything for me, like zipping up my jacket. One day when she wasn't around to help, I pooped my pants and had to be sent home from school.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `My parents come from`,
                        {
                            anchor: `Taiwan`,
                            wiki: `Taiwan`,
                        },
                        `, an island off the coast of China. When the`,
                        {
                            anchor: `Nationalists`,
                            wiki: `Kuomintang`,
                        },
                        `took over after World War II, they made Mandarin Chinese the primary language. So the Taiwanese that my family spoke at home included a few Chinese words, such as`,
                        {
                            isItalic: true,
                            lyric: `didi`,
                        },
                        `, which means "little brother."`,
                    ],
                    dotKeys: {
                        [BACKSTORY]: true,
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
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(glockenspiel and banjo, Bennett's theme)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Since this song is sung from the perspective of my sister as a child, I wanted to recreate the feeling of childlike innocence heard in the opening measures of "`,
                        {
                            anchor: `Wouldn't It Be Nice`,
                            wiki: `Wouldn't_It_Be_Nice`,
                        },
                        `," the first song from the`,
                        {
                            anchor: `Beach Boys`,
                            wiki: `The_Beach_Boys`,
                        },
                        `album`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Pet Sounds`,
                                wiki: `Pet_Sounds`,
                            },
                        },
                        `. And so the introduction begins with an`,
                        {
                            anchor: `autoharp`,
                            wiki: `Autoharp`,
                        },
                        `leading into a`,
                        {
                            anchor: `glockenspiel`,
                            wiki: `Glockenspiel`,
                        },
                        `melody.`,
                    ],
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
                    mixTime: `0:12:28.81`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(whistling)`,
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
                    mixTime: `0:18:18.30`,
                    lyric: `Didi left the house this morning`,
                },
                {
                    mixTime: `0:24:07.70`,
                    lyric: [
                        `wondering to himself, who would`,
                        {
                            anchor: `tie his shoes`,
                            cards: [
                                {
                                    description: `In preschool, we were taught to tie our shoes by making the bunny crisscross the tree. But being left-handed, I was never clear on which hand should hold the bunny. My shoelaces always came undone as a result.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `shoelaces`,
                                        wormholePrefix: FLASHBACK_TO_WORMHOLE_PREFIX,
                                    },
                                },
                            ],
                        },
                        `?`,
                    ],
                },
                {
                    mixTime: `0:29:27.13`,
                    lyric: `And he left alone because he`,
                },
                {
                    mixTime: `0:34:04.19`,
                    lyric: `had to finish up all his orange juice.`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `My ambition for this album was to do for rock music what`,
                        {
                            anchor: `James Joyce`,
                            wiki: `James_Joyce`,
                        },
                        `had done for modern literature. Since his semi-autobiographical first novel,`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `A Portrait of the Artist as a Young Man`,
                                wiki: `A_Portrait_of_the_Artist_as_a_Young_Man`,
                            },
                        },
                        `, begins in the simple prose of a child, I decided to do the same for this opening song.`,
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
                    mixTime: `0:41:06.20`,
                    lyric: [
                        `Didi, you've been following, I`,
                        {
                            anchor: `didn't want you here`,
                            card: {
                                description: `I often tagged along with my sister, who was fiercely protective of me. But there were times when she and her friends would insist on doing girl stuff by themselves. This always left me in a panic, since I had few playmates of my own.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:47:06.32`,
                    lyric: `Didi, couldn't you find another sister to be near?`,
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `0:53:04.78`,
                    lyric: [
                        `Cause I get sick of hearing, "`,
                        {
                            anchor: `Zeizei`,
                            card: {
                                description: [
                                    `In Chinese,`,
                                    {
                                        isItalic: true,
                                        lyric: `zeizei`,
                                    },
                                    `means "big sister." When speaking for me, my mother would address my sister as I would.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [REFERENCE]: true,
                                },
                            },
                        },
                        `, let Didi play with you…"`,
                    ],
                },
                {
                    mixTime: `0:58:03.10`,
                    lyric: `And I tire of saying, "My Didi wants to come too."`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `I wanted this song to capture the flurry of activity and transience of emotion that a child experiences in a single day. So as the rhythm jumps in and out of a`,
                        {
                            anchor: `half-time`,
                            wiki: `Half-time_(music)`,
                        },
                        `beat, the chord progression endlessly modulates between the`,
                        {
                            anchor: `distantly related keys`,
                            wiki: `Closely_related_key`,
                        },
                        `of A, C, and E\u2011flat major.`,
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
                    mixTime: `1:04:13.80`,
                    lyric: [
                        `Didi`,
                        {
                            anchor: `made an "accident"`,
                            card: {
                                description: `After pooping my pants, I continued to sit quietly at my desk. A classmate noticed the smell and informed the teacher.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `in class,`,
                    ],
                },
                {
                    mixTime: `1:10:03.25`,
                    lyric: `so the nurse sent him home, snickered the recess crowd.`,
                },
                {
                    mixTime: `1:15:22.67`,
                    lyric: [
                        `They saw him crying beside a`,
                        {
                            anchor: `Safeway paper bag`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `The nurse placed my soiled pants in a shopping bag for me to take home. The bag may or may not have been from`,
                                        {
                                            anchor: `Safeway`,
                                            wiki: `Safeway_Inc.`,
                                        },
                                        `, a local supermarket chain.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: `safeway_paper_bag`,
                                },
                            ],
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `1:19:29.75`,
                    lyric: [
                        {
                            anchor: `decked in overalls`,
                            todo: REST,
                            problem: `Not sure "all that fit me" is perfectly clear, but I wanted to avoid saying "thing" twice.`,
                            card: {
                                description: [
                                    `Due to what I now know to be`,
                                    {
                                        anchor: `growth hormone deficiency`,
                                        wiki: `Growth_hormone_deficiency`,
                                    },
                                    `, I was the smallest child in my grade. So when the nurse searched the lost-and-found closet for something I could wear home, all that fit me was a pair of girls' overalls.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `from the lost and found.`,
                    ],
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
                    mixTime: `1:27:01.64`,
                    lyric: [
                        `Didi, you've`,
                        {
                            anchor: `been in the bath`,
                            card: {
                                description: `My mother picked me up from school and took me home. I remember taking a long while to bathe myself.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `all this time.`,
                    ],
                },
                {
                    mixTime: `1:33:01.64`,
                    lyric: `Didi, come out, you can't soak there all night.`,
                },
            ],
            subVerse: [
                {
                    mixTime: `1:38:08.86`,
                    lyric: {
                        isItalic: true,
                        lyric: `Don't little raisin fingers need to dry?`,
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: BRIDGE,
            },
            mainVerses: [
                {
                    mixTime: `1:41:26.57`,
                    lyric: `Didi, someday you will be a hero`,
                },
                {
                    mixTime: `1:45:12.45`,
                    lyric: `in the movies, fighting those`,
                },
                {
                    mixTime: `1:47:15.98`,
                    lyric: [
                        {
                            anchor: `crooked thieves`,
                            card: {
                                wormhole: `crooked_thieves`,
                            },
                        },
                        `with your`,
                        {
                            anchor: `sheriff's badge and gun`,
                            card: {
                                description: `Like many other Taiwanese teenagers of her generation, my mother prized all things labeled American, despite not knowing exactly what that label entailed. Back then, their only source for imports was a local bootleg industry that combed through the relics of America's past. And so my sister and I grew up listening to my mother's old country records and sharing her fondness for classic Western films.`,
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
                formType: BRIDGE,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `1:53:05.40`,
                    lyric: `Didi, one day you will be a picture`,
                },
                {
                    mixTime: `1:56:21.32`,
                    lyric: [
                        `taped to all the`,
                        {
                            anchor: `girls' mirrors`,
                            card: {
                                description: `My sister used to cut out pictures of pop stars from teenybopper magazines and tape them to her mirror.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `1:58:14.30`,
                    // NOTE: I decided to contract from "could have."
                    lyric: `They'll say, who now could've ever figured`,
                },
                {
                    mixTime: `2:01:09.04`,
                    lyric: [
                        `you'd`,
                        {
                            anchor: `finally become someone`,
                            card: {
                                wormhole: `finally_become_someone`,
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
                        `To mimic the subdued twangs of`,
                        {
                            anchor: `music boxes`,
                            wiki: `Music_box`,
                        },
                        `and`,
                        {
                            anchor: `thumb pianos`,
                            wiki: `Mbira`,
                        },
                        `that characterize children's music, I dampened the lead guitar strings by wrapping strips of tissue around them near the bridge.`,
                    ],
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
                    mixTime: `2:04:14.40`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(whistling)`,
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `2:10:03.91`,
                    lyric: `Didi dear, I'm sorry that I yelled at you that way.`,
                },
                {
                    mixTime: `2:16:03.92`,
                    lyric: `Didi dear, I know today just wasn't your day.`,
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `2:21:10.63`,
                    lyric: `And now I think all I want is my Didi well by tomorrow,`,
                },
                {
                    mixTime: `2:27:11.25`,
                    lyric: `and there are things I hope my Didi will never know.`,
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
                    mixTime: `2:31:28.97`,
                    lyric: `Yes, and now I think all I want is my Didi well by tomorrow,`,
                },
                {
                    mixTime: `2:38:20.27`,
                    lyric: `and there are things I hope Didi will never have to know.`,
                },
            ],
        },
        {
            unitMap: {
                formType: OUTRO,
            },
            mainVerses: [
                {
                    mixTime: `2:44:20.26`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(dampened acoustic guitars)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `A, C, and E\u2011flat, the three keys heard thus far, also comprise three of the four major triads of an`,
                        {
                            anchor: `octatonic collection`,
                            wiki: `Octatonic_scale`,
                        },
                        `. The song now ends on G\u2011flat, the fourth and remaining major triad, to suggest the excitement of undiscovered vistas awaiting a young child.`,
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: REST,
                problem: `It says what I want it to say. I'm just not completely satisfied with it.`,
                card: {
                    description: [
                        `As home studios became affordable in the early '00s, I sensed that a wave of artists would soon take the art of music recording to new heights, just as`,
                        {
                            anchor: `Brian Wilson`,
                            wiki: `Brian_Wilson`,
                        },
                        `had done with`,
                        {
                            isItalic: true,
                            lyric: `Pet Sounds`,
                        },
                        `. And like Wilson, these artists would do so by holding off any concerns about recreating their sound onstage. But the indie labels stood firm, insisting that serious artists build their careers on live shows. So upon completion,`,
                        {
                            isItalic: true,
                            lyric: `Yearling's Bobtail`,
                        },
                        `was dismissed as the work of a hobbyist and fell by the wayside.`,
                    ],
                    dotKeys: {
                        [AFTERWORD]: true,
                        [OBSERVATION]: true,
                    },
                },
            },
        },
    ],
}
