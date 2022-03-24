import {
    BACKSTORY,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGCRAFT,
} from '../../../../src/constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    CODA,
    REFRAIN,
    OUTRO,
    IS_UNIT_DOT,
} from '../../../../src/constants/lyrics'

export default {
    path: 'kyon',
    title: 'Kyon? (क्यों?)',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     *
     * mST - mRT + pRT = pST
     * 0.009 - 2.123 + 2498.410 => 0
     */
    referenceDescription: `Hum in anacrusis`,
    mixReferenceTime: `0:02:03.69`,
    mixStartTime: `0:00:00.27`,
    playerReferenceTime: 2498.410,
    playerStartTime: 2496.296,
    todo: true,
    overview: [
        `I was self-aware enough to recognize the`,
        {
            isEmphasis: true,
            lyric: `mechanism`,
        },
        `by which I'd become emotionally abusive so quickly. I would harden my attacks fully expecting Sita to lash out right back. But instead she quietly endured my cruelty, and`,
        {
            isEmphasis: true,
            lyric: `that's`,
        },
        `what baffled me. The on-again, off-again years finally gave me the distance needed to understand just how thoroughly she'd tied her sense of worth to our relationship. I was fighting for me. She was fighting for us.`,
    ],
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        {
                            isItalic: true,
                            lyric: `Kyon`,
                        },
                        `is the`,
                        {
                            anchor: `Hindi`,
                            wiki: `Hindi`,
                        },
                        `word for "why." After Sita and I started dating, I studied Hindi for several years, which allowed me to converse with her family in their native language. I also got course credit for it as a religious studies major, so it was an easy decision to make.`,
                    ],
                    dotKeys: {
                        [BACKSTORY]: true,
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
                    mixTime: null,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(humming and slide mandolins)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `Having settled into an unhealthy power dynamic early on, Sita and I failed to grow as individuals. I can see now that she was waiting for me to grow up, because she couldn't do it without me. So the humming here evokes her quiet waiting, born of resignation.`,
                    dotKeys: {
                        [BACKSTORY]: true,
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
                    mixTime: `0:12:25.71`,
                    lyric: [
                        `So you fled to her`,
                        {
                            anchor: `nest on this stork`,
                            cards: [
                                {
                                    description: `Every time I broke up with Sita to date another woman, I would revert to the same naive, wide-eyed persona. I just longed to relive the giddiness of puppy love, like an infant experiencing the world for the first time.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `In European folklore, the`,
                                        {
                                            anchor: `stork`,
                                            wiki: `White_stork`,
                                        },
                                        `brings babies to expecting parents.`,
                                    ],
                                },
                            ],
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:17:14.56`,
                    lyric: [
                        `history shed, having`,
                        {
                            anchor: `never grown your horns`,
                            card: {
                                description: `Of course, my continual desire to leave Sita was also driven by shame. Having left her before, any kindness I showed her now could only be viewed as atonement for past crimes. My role in this relationship was to be forever penitent, whereas I could just start over with someone new, untainted by sin.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:22:20.57`,
                    lyric: [
                        `A`,
                        {
                            anchor: `present sent`,
                            card: {
                                wormhole: `present_sent`,
                            },
                        },
                        `to her of a newborn…`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `I wanted this song to speak from Sita's perspective, but in retrospect, my portrayal might be a bit one-dimensional. I was just self-absorbed in my guilt when I wrote it, and my primary purpose was to beat myself up over what my stupidity had cost me.`,
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
                    mixTime: `0:26:20.57`,
                    lyric: [
                        `So baby, tell me then, when you`,
                        {
                            anchor: `take in her breasts`,
                            card: {
                                description: `It scared me, far more than I let on, to gamble away the familiar warmth of Sita's love for a mere chance at romance with some new woman. I often wondered if this fear then manifested in a hormonal craving for nurture over pleasure, because I was always struck by how motherly these women's naked bodies initially felt to me.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:31:26.56`,
                    lyric: `are you suckling to be fed?`,
                },
                {
                    mixTime: `0:36:20.56`,
                    lyric: [
                        `Is it just her`,
                        {
                            anchor: `womb you bed`,
                            card: {
                                description: `Of course, Sita herself was under no such illusion about my innocence. She knew full well that what I wanted was to sleep with more women, to compensate for being the less sexually experienced one in our relationship.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `?`,
                    ],
                },
                {
                    mixTime: `0:41:04.86`,
                    lyric: `Well, have some more…`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `My relationship with Sita was like a ship swaying in perilous waters. This notion is captured in the music by the`,
                        {
                            anchor: `compound meter`,
                            wiki: `Metre_(music)`,
                        },
                        `, as well as by the back-and-forth between unrelated chords separated by a`,
                        {
                            anchor: `tritone`,
                            wiki: `Tritone`,
                        },
                        `. The two strands of meandering`,
                        {
                            anchor: `tuplets`,
                            wiki: `Tuplet`,
                        },
                        `symbolize our inability to find common ground, with one carrying eight notes per beat, the other nine. I created the tracks by splicing together single notes plucked on a mandolin.`,
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
                formType: BRIDGE,
            },
            mainVerses: [
                {
                    mixTime: `0:48:08.67`,
                    lyric: `And how you always burned, for the slight;`,
                },
                {
                    mixTime: `0:51:11.31`,
                    lyric: [
                        {
                            anchor: `spurned at first`,
                            card: {
                                description: `Given the seeming ease with which I could now attract other women, I grew further indignant about the endless hoops I'd been made to jump through to win Sita over.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `, you couldn't let it die!`,
                    ],
                },
                {
                    mixTime: `0:53:17.48`,
                    lyric: `You'd nurse your bruises: why, the nerve of me to lie`,
                },
                {
                    mixTime: `0:56:20.14`,
                    lyric: `in reserve, while I had to learn to find`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Every time we got back together, Sita would reassert our status as a couple by insisting I bring her along to see my friends, despite the humiliation of facing the very gang that had emboldened me to leave her. The circus`,
                        {
                            anchor: `calliope`,
                            wiki: `Calliope_(music)`,
                        },
                        `heard here thus captures the feeling of parading around like a sad clown once more. I created it by applying a tape-saturation effect on a melodica track.`,
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
                formType: BRIDGE,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `0:59:09.55`,
                    lyric: [
                        {
                            anchor: `all the points`,
                            card: {
                                description: `After Sita's initial rejection of me, we spent a year getting to know each other as friends, during which time I still tried to impress her without appearing as such. One day I solved her friend's Rubik's Cube, a skill I'd picked up during my first five-year plan. While her friend raved, I meekly shrugged, as Sita sat and smiled. I'd become a puzzle for her to solve.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `you had! Then you'd resent`,
                    ],
                },
                {
                    mixTime: `1:01:28.96`,
                    lyric: [
                        {
                            anchor: `plunders past`,
                            card: {
                                description: `The sting I felt in having been initially rejected by Sita was aggravated by the later revelation of her sexual past. And all the more so since it was precisely the painful lessons she took away from these past encounters that made her wary of my initial advances. Of course, I missed the irony of being the one who would surely end up providing the most painful lesson by far.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `that forced my defense…`,
                    ],
                },
                {
                    mixTime: `1:04:05.14`,
                    lyric: [
                        `But dear,`,
                        {
                            anchor: `let's make a pact`,
                            card: {
                                description: `Sita knew it was just a matter of time before I wanted the same mature, slow-burning love that she did. So after each breakup, she would make me promise to consider rekindling what we once had, whenever I should long for it again.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `: if you're single then,`,
                    ],
                },
                {
                    mixTime: `1:07:07.79`,
                    lyric: `I get you back? And…`,
                },
            ],
        },
        {
            unitMap: {
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `1:09:00.72`,
                    lyric: [
                        {
                            anchor: `I'll be stronger`,
                            card: {
                                description: `Sita was always promising to "get better," in her words. It was a weird trick I'd unconsciously played on her, as if all the blame didn't lie squarely with me.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `— not a bother, more modest, I promise—`,
                    ],
                },
                {
                    mixTime: `1:14:09.55`,
                    lyric: [
                        `to parent my`,
                        {
                            anchor: `knight-errant`,
                            card: {
                                description: [
                                    `In`,
                                    {
                                        anchor: `medieval romance`,
                                        wiki: `Chivalric_romance`,
                                    },
                                    `, a`,
                                    {
                                        anchor: `knight-errant`,
                                        wiki: `Knight-errant`,
                                    },
                                    `wanders in search of adventures, proving his chivalry in the name of courtly love.`,
                                ],
                            },
                        },
                        `as the sole`,
                        {
                            anchor: `keeper of his sheep herd`,
                            card: {
                                description: [
                                    `A keeper, in the sense of being both the one who tends to the herd, as well as the only one to keep from`,
                                    {
                                        isEmphasis: true,
                                        lyric: `among`,
                                    },
                                    `the herd. Resigned to my infidelity, Sita could only hope that her permissiveness would earn her a privileged position amid all the other women I desired.`,
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
                {
                    mixTime: `1:19:18.38`,
                    lyric: [
                        `And when sobered by the`,
                        {
                            anchor: `time lapse`,
                            cards: [
                                {
                                    description: `Sita anticipated that my philandering years would whiz by in a flash as the pursuit of other women grew repetitive, imprinting few standout memories.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `In`,
                                        {
                                            anchor: `time-lapse photography`,
                                            wiki: `Time-lapse_photography`,
                                        },
                                        `, images are captured at a lower frame rate, causing time to speed up on normal playback.`,
                                    ],
                                },
                            ],
                        },
                        `to`,
                        {
                            anchor: `spring forward on a fallback`,
                            cards: [
                                {
                                    description: `Then once my later years as a womanizer proved unkind, I would surely return to Sita, my fallback option, with relief rather than reluctance.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `The passage of time is suggested here by a classic mnemonic for`,
                                        {
                                            anchor: `daylight saving`,
                                            wiki: `Daylight_saving_time`,
                                        },
                                        `. "Spring forward, fall back" reminds us to set our clocks forward every spring, and back every fall.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `…`,
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
                    mixTime: `1:25:10.44`,
                    lyric: [
                        // NOTE: I made "My" capitalised.
                        `My`,
                        {
                            anchor: `ticklish piglet`,
                            card: {
                                description: `Perversely, Sita and I were at our best during the months right after getting back together. She could enjoy the knowledge of being the better woman, while I got to bask in the afterglow of my latest sexual exploit.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `, you'll bounce back to me, giggly, having fully gorged yourself.`,
                    ],
                },
                {
                    mixTime: `1:33:02.27`,
                    lyric: [
                        `Bursting belly told by`,
                        {
                            anchor: `extra holes`,
                            card: {
                                description: `Notches can be carved in one's belt to support a girth distended from overfeeding. They might also tally sexual conquests.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `punched in your belt.`,
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
                    mixTime: `1:43:27.63`,
                    lyric: [
                        `A`,
                        {
                            anchor: `shank's dustless silhouette`,
                            cards: [
                                {
                                    description: `During our on-and-off years, I would habitually return to Sita, promising to mend my ways. Things would be peachy for a while, after which I would run off yet again with another woman. I was like a reformed convict who might any day relapse without warning, taking with him the shank he'd left on the windowsill to collect dust.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: `A shank is a stabbing weapon improvised by prison inmates.`,
                                    dotKeys: {
                                        [REFERENCE]: true,
                                    },
                                },
                            ],
                        },
                        `bares the sill's sheen,`,
                    ],
                },
                {
                    mixTime: `1:49:25.35`,
                    lyric: [
                        `your`,
                        {
                            anchor: `severed stinger`,
                            card: {
                                description: `At the time, I failed to appreciate what it meant for Sita to have given her virginity to me. She had to make things work because a part of me was forever lodged inside her, like a barbed stinger left under the skin after a bee sting.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `left in me never lost its sting.`,
                    ],
                },
                {
                    mixTime: `1:56:29.65`,
                    lyric: [
                        `But other nights you'd`,
                        {
                            anchor: `lap my wound clean`,
                            card: {
                                description: `After ejaculating through vaginal sex, I would go down on Sita until she reached orgasm. When I asked her once what she saw in me that was worth holding onto, she listed this as an example of my thoughtfulness. I couldn't think of anything myself.`,
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
                card: {
                    description: [
                        `In the second half of the song, the meter switches to`,
                        {
                            anchor: `common time`,
                            wiki: `Time_signature`,
                        },
                        `even as the underlying chords remain unchanged, to represent the normalization of our dysfunctional relationship. The two strands of tuplets are also more in sync, as one plays two notes for every three played by the other.`,
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
                    mixTime: `2:01:08.21`,
                    lyric: `to leave me as before, with only instinct to adore.`,
                },
                {
                    mixTime: `2:07:21.07`,
                    lyric: [
                        `Besides, a`,
                        {
                            anchor: `you-shaped pussing sore`,
                            card: {
                                description: `Or else, "U-shaped." Yet more imagery comparing vaginal penetration to an inflicted lesion. I think I was feeling both guilty and horny when I wrote these lyrics.`,
                                dotKeys: {
                                    [PUN]: true,
                                    [SONGCRAFT]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:13:12.51`,
                    lyric: [
                        {
                            anchor: `bleeds just once`,
                            card: {
                                description: [
                                    `Much like a vagina only bleeds the first time when the`,
                                    {
                                        anchor: `hymen`,
                                        wiki: `Hymen`,
                                    },
                                    `is ruptured, every subsequent breakup felt less like a piercing stab and more like an irritant on an already festering wound.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, then never more…`,
                    ],
                },
                {
                    mixTime: `2:18:16.47`,
                    lyric: [
                        `So are we agreed,`,
                        {
                            anchor: `honeybee`,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `honeybee`,
                                        wiki: `Honey_bee`,
                                    },
                                    `will die after stinging someone, as its stinger is connected to vital organs. Similarly, in having given my virginity to Sita in return, I realized too late there was a vital part of me that could never be recovered apart from her as well.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `? Come for me? At`,
                        {
                            anchor: `thirty-three`,
                            card: {
                                description: [
                                    `I often joked about killing myself at`,
                                    {
                                        anchor: `thirty-three`,
                                        wiki: `Chronology_of_Jesus`,
                                    },
                                    `, the age at which Jesus was crucified. I hated the idea of getting older, and clearly this is all the time one needs to make an impact on the world. So when Sita asked me to declare the age at which I would come back for her in accordance with our little pact, I answered thirty-three. The subtext was understood.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `?`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: `2:30:23.15`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(humming and slide mandolins)`,
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: CODA,
            },
            mainVerses: [
                {
                    mixTime: `2:55:01.71`,
                    lyric: `You say you woke one crystal morning, to find all those thoughts had gone away:`,
                },
                {
                    mixTime: `3:01:03.86`,
                    lyric: [
                        `your`,
                        {
                            anchor: `fear of death`,
                            card: {
                                description: `The night terrors I experienced as a child continued into adulthood. Sita would soothe me whenever I woke up screaming from visions of my impending death.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `, your`,
                        {
                            anchor: `fear of never dying`,
                            // This might be all I want to say. Just phrase better?
                            todo: true,
                            card: {
                                description: `Sita could relate to my fear of immortality. Growing up Hindu in America, she'd compared nirvana with heaven herself and found both lacking. Though she had no ready answers, she invited me to attend Hindu services with her. I found Hinduism's sprawling pantheon of deities and avatars to be strangely comforting. It just seemed like the more details there are to learn, the more room there is to get lost in the divine.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, and`,
                        {
                            anchor: `sadness for what it was`,
                            card: {
                                description: `As friends, Sita and I got along well because we were both sad people. But in hindsight, my sadness was a product of circumstance, whether from bullying in my youth, or from loneliness as I got older. Sita, on the other hand, suffered from clinical depression. And as I learned to be proactive in dealing with my moods, I grew impatient with her for being incapable of the same.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `3:06:25.29`,
                    lyric: [
                        `You just knew`,
                        {
                            anchor: [
                                {
                                    isItalic: true,
                                    lyric: `Bobtail`,
                                },
                                `'s your priority`,
                            ],
                            properNoun: true,
                            card: {
                                description: [
                                    `As I continued to work on`,
                                    {
                                        isItalic: true,
                                        lyric: `Bobtail`,
                                    },
                                    `, my night terrors grew less frequent, and my misery subsided. Recognizing this boon for what it was, I became further subsumed in my ambitions, which made me even more inattentive to Sita's needs.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, so for`,
                        {
                            isItalic: true,
                            lyric: `Bobtail`,
                        },
                        {
                            anchor: `I'll gladly wait`,
                            card: {
                                description: `But Sita encouraged my artistic pretensions, believing them to reflect positively on her as well. Though she was uninterested in the local scene, she still enjoyed being seen as the one going home with me after a show.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `3:12:27.43`,
                    lyric: [
                        `And darling, don't you worry, these were only`,
                        {
                            anchor: `practice cuts`,
                            card: {
                                description: `When Sita asked about the scars on my forearm, I replied dryly that they were just for practice. Years later, when I expressed concern after she'd tried cutting for herself, she replied with the same assurance. The message was clear that I was the cause in more ways than one.`,
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
                formType: OUTRO,
            },
            mainVerses: [
                {
                    mixTime: `3:17:27.43`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(peafowl, acoustic guitar, and piano)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `The cry of a`,
                        {
                            anchor: `peacock`,
                            wiki: `Peafowl`,
                        },
                        `has always sounded to me like it's pleading in Hindi, "`,
                        {
                            isItalic: true,
                            lyric: `kyon`,
                        },
                        `?" For this reason, my heart still breaks somewhat to hear it.`,
                    ],
                    dotKeys: {
                        [OBSERVATION]: true,
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
    ],
}
