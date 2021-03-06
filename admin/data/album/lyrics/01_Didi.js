import {
    AFTERWORD,
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    REFERENCE,
    SONGCRAFT,
} from '../../../../app/constants/dots'

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
} from '../../../../app/constants/lyrics'

export default {
    path: 'didi',
    title: 'Didi (弟弟)',
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
    overview: `As a child, I depended on my older sister to do most everything for me, like zipping up my jacket. One day when she wasn't around to help, I pooped in my pants and had to be sent home from school.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `In the`,
                        {
                            anchor: `Chinese language,`,
                            wiki: `Chinese_language`,
                        },
                        {
                            isItalic: true,
                            lyric: `didi`,
                        },
                        `means "little brother." My parents immigrated to the United States from`,
                        {
                            anchor: `Taiwan,`,
                            wiki: `Taiwan`,
                        },
                        `an island that was taken over by the`,
                        {
                            anchor: `Chinese`,
                            wiki: `China`,
                        },
                        `in 1949. The`,
                        {
                            anchor: `Taiwanese`,
                            wiki: `Taiwanese_Hokkien`,
                        },
                        `we spoke at home thus included a healthy sprinkle of Chinese words.`,
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
                        lyric: `(Bennett's theme)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `Toy instruments abound in this song sung from the perspective of my sister as a child. Here, autoharp and glockenspiel lead into an intro that recalls the first few measures of`,
                        {
                            anchor: `"Wouldn't It Be Nice,"`,
                            wiki: `Wouldn't_It_Be_Nice`,
                        },
                        `the opening song of the 1966`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Beach Boys`,
                                wiki: `The_Beach_Boys`,
                            },
                        },
                        `album`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Pet Sounds.`,
                                wiki: `Pet_Sounds`,
                            },
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
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: `0:12:28.81`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(whistles)`,
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
                            anchor: `tie his shoes?`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `In preschool, we were taught to tie our shoes by making the`,
                                        {
                                            anchor: `bunny criss-cross the tree.`,
                                            wiki: `Shoelace_knot`,
                                        },
                                        `Being left-handed, however, I was never clear on which hand should hold the bunny. My shoelaces always came undone as a result.`,
                                    ],
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
                todo: true,
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
                                anchor: `A Portrait of the Artist as a Young Man,`,
                                wiki: `A_Portrait_of_the_Artist_as_a_Young_Man`,
                            },
                        },
                        `begins in the simple prose of a child, I decided to do the same with this opening song.`,
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
                            anchor: `didn't want you here.`,
                            todo: true,
                            card: {
                                description: `I often tagged along with my sister, who was fiercely protective of me. But there were times when she and her friends would go off to do girl stuff by themselves. This always left me in a panic, since I had few playmates of my own.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
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
                        `Cause I get sick of hearing,`,
                        {
                            anchor: `"Zeizei,`,
                            todo: true,
                            card: {
                                description: [
                                    `In Chinese,`,
                                    {
                                        isItalic: true,
                                        lyric: `zeizei`,
                                    },
                                    `means "big sister." When speaking for me, my mother would address my sister as I would have.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [REFERENCE]: true,
                                },
                            },
                        },
                        `let Didi play with you…"`,
                    ],
                },
                {
                    mixTime: `0:58:03.10`,
                    lyric: `And I tire of saying, "My Didi wants to come too."`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `I wanted the music here to evoke the flurry of activity and transience of emotion that a child experiences from one day to the next. And so the rhythm lurches to and from a`,
                        {
                            anchor: `half-time beat,`,
                            wiki: `Half-time_(music)`,
                        },
                        `while the harmonic progression tirelessly modulates between the`,
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
                            todo: true,
                            card: {
                                description: `After I poop my pants while quietly seated at my desk, a classmate politely informs the teacher.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                            anchor: `Safeway paper bag,`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `After helping me undress, the nurse places my soiled pants in a grocery bag for me to take home. The bag is from`,
                                        {
                                            anchor: `Safeway,`,
                                            wiki: `Safeway_Inc.`,
                                        },
                                        `the neighborhood supermarket.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `safeway_paper_bag`,
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `1:19:29.75`,
                    lyric: [
                        {
                            anchor: `decked in overalls`,
                            todo: true,
                            card: {
                                description: [
                                    `Since I'm the smallest child in my grade, the only item of clothing that fits me is an abandoned pair of girls'`,
                                    {
                                        anchor: `overalls.`,
                                        wiki: `Overalls`,
                                    },
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                            todo: true,
                            card: {
                                description: `My mother came to pick me up and dropped me off at home with my grandparents. I remember taking a long while to bathe myself.`,
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
                            todo: true,
                            card: {
                                description: ``,
                                wormhole: `crooked_thieves`,
                            },
                        },
                        `with your`,
                        {
                            anchor: `sheriff's badge and gun…`,
                            todo: true,
                            card: {
                                description: `Though my mother and other Taiwanese teenagers of her generation prized all things American, they had no way to know what that entailed. Their only exposure to American culture was through a native bootleg industry that mostly recycled the relics of America's past. And so my sister and I grew up listening to my mother's old country records and sharing her fondness for old Westerns.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                    description: `"Wouldn't It Be Nice" is once again evoked here, this time by modulating down a minor third to segue into the bridge.`,
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
                    mixTime: `1:53:05.40`,
                    lyric: `Didi, one day you will be a picture`,
                },
                {
                    mixTime: `1:56:21.32`,
                    lyric: [
                        `taped to all the`,
                        {
                            anchor: `girls' mirrors.`,
                            todo: true,
                            card: {
                                description: `My sister used to cut out pictures of pop stars from teenybopper magazines and tape them to our bathroom mirror.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:58:14.30`,
                    lyric: `They'll say, who now could have ever figured`,
                },
                {
                    mixTime: `2:01:09.04`,
                    lyric: [
                        `you'd`,
                        {
                            anchor: `finally become someone?`,
                            todo: true,
                            card: {
                                wormhole: `finally_become_someone`,
                            },
                        },
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `To mimic the subdued twangs of music boxes and thumb pianos that characterize children's music, I dampened the lead guitar strings by wrapping strips of tissue around them near the bridge.`,
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
                        lyric: `(whistles)`,
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
                        lyric: `(fade out)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `A, C, and E\u2011flat, the three distantly related major keys heard thus far, also comprise three of the four triads of an`,
                        {
                            anchor: `octatonic collection.`,
                            wiki: `Octatonic_scale`,
                        },
                        `The song now ends on G\u2011flat, the fourth and final triad of the collection, to suggest the excitement of undiscovered vistas that await a young child.`,
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
                todo: true,
                card: {
                    description: [
                        `As home studios became more affordable in the early 2000s, I sensed that a wave of artists would soon take the field of`,
                        {
                            anchor: `music recording`,
                            wiki: `Sound_recording_and_reproduction`,
                        },
                        `to new heights, as`,
                        {
                            anchor: `Brian Wilson`,
                            wiki: `Brian_Wilson`,
                        },
                        `had done when he created`,
                        {
                            isItalic: true,
                            lyric: `Pet Sounds.`,
                        },
                        `And, like Wilson, these artists would succeed by holding off concerns about how their sound might be recreated onstage. But the indie labels stuck to their guns, insisting that the true measure of an artist is a career built on playing live shows. And so upon its release,`,
                        {
                            isItalic: true,
                            lyric: `Yearling's Bobtail`,
                        },
                        `was dismissed as the work of a hobbyist and quickly fell by the wayside.`,
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
