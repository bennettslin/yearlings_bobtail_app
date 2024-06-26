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
import { REVIEW, REVISE } from '../../../containers/Annotations/constants/todos'

export default {
    title: 'क्यों? (Kyon?)',
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
    todo: REVISE,
    problem: `Revert to making original point.`,
    overview: `Though it shames me to say so, even then I could see that my behavior was slowly degenerating into cruelty. What puzzled me was how this had happened. In hindsight, I can see why. Hoping for an easy breakup, I would act up in small ways— but Sita was just as determined to work it out, and she'd endure. So then I'd behave even more obnoxiously the next time… and on and on. In time I came to see how thoroughly her sense of worth was tied to our relationship. I was fighting for me. She was fighting for us.`,
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
                        `is the Hindi word for "why." After Sita and I started dating, I studied Hindi for several years, which allowed me to converse with her family in their native language. I also got course credit for it as a`,
                        {
                            anchor: `religious studies`,
                            wiki: `Religious_studies`,
                        },
                        `major.`,
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
                todo: REVISE,
                problem: `Probably as she waits is better phrasing.`,
                card: {
                    description: `Having settled into an unhealthy power dynamic early on, Sita and I failed to grow as individuals. But I can see now that she was waiting for me to grow up— because as long as we were together, she couldn't do it on her own. And so the humming heard here is the sound of her waiting in quiet resignation.`,
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
                                description: `Of course, my desire to leave Sita was also driven by shame. Having left her before, any kindness I showed now would only be seen as penitence— whereas I could just start over with someone new, untainted by my past sins.`,
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
                todo: REVIEW,
                card: {
                    description: `I wanted this song to speak from Sita's perspective, but my portrayal is a bit one-dimensional. I was self-absorbed in my guilt when I wrote it, and my primary purpose was to beat myself up over what my stupidity had cost me.`,
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
                            todo: REVIEW,
                            card: {
                                description: `It scared me, far more than I let on, to gamble away the warmth of Sita's love just for a chance to date some other woman. I had to wonder if this fear would then affect my hormones, because upon seeing this woman's naked body for the first time, I would always be struck by a desire to be mothered more than anything else.`,
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
                                description: `Of course, Sita herself had no such illusions about my innocence. She knew I chafed at being the less sexually experienced one in our relationship, and that this was the reason for my desire to sleep with other women.`,
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
                        `My relationship with Sita was like a ship swaying in perilous waters. This notion is captured in the music by both the`,
                        {
                            anchor: `compound meter`,
                            wiki: `Metre_(music)`,
                        },
                        `and the vacillation between unrelated chords, whose roots are separated by a`,
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
                                description: `Given the seeming ease with which I could now attract women, I grew further indignant about all the hoops I'd been made to jump through when first trying to win Sita over.`,
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
                todo: REVIEW,
                card: {
                    description: [
                        `Every time we got back together, Sita would reassert our status as a couple by insisting that I bring her along to see my friends— the very same ones who'd emboldened me to leave her. And so the circus`,
                        {
                            anchor: `calliope`,
                            wiki: `Calliope_(music)`,
                        },
                        `heard here captures the humiliation of parading around like a sad clown once more. I created it by applying a tape-saturation effect on a melodica track.`,
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
                                description: [
                                    `During that year when Sita and I got to know each other as friends, I still tried to impress her without appearing to do such. One time, I solved her friend's`,
                                    {
                                        anchor: `Rubik's Cube`,
                                        wiki: `Rubik's_Cube`,
                                    },
                                    `— a skill I'd picked up during my first five-year plan. As her friend raved, I casually shrugged— and all the while, Sita sat and smiled. I'd become a puzzle for her to solve.`,
                                ],
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
                                description: `The sting I felt in having once been rejected by Sita was aggravated by the later revelation of her sexual past. And all the more so, since it was precisely the painful lessons she drew from those past encounters that made her wary of my initial advances. Of course, the irony was lost on me that I'd end up providing the most painful lesson by far…`,
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
                                description: `Sita knew I'd come to want the same slow-burning love that she did. So every time we broke up, she would make me promise to rekindle what we once had, whenever I should pine for it once more.`,
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
                                    `In medieval romance, a`,
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
                                    `A keeper in the sense of being the one who tends`,
                                    {
                                        isEmphasis: true,
                                        lyric: `to`,
                                    },
                                    `the herd, as well as the only one worth keeping from`,
                                    {
                                        isEmphasis: true,
                                        lyric: `among`,
                                    },
                                    `the herd. Resigned to my disloyalty, Sita could only hope that her permissiveness might set her apart from all the other women I desired.`,
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
                            todo: REVISE,
                            problem: `Needs to be clear that this is about remembrance. Maybe change the phrasing order.`,
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
                                    description: `Then once my later years as a womanizer proved to be unfulfilling, surely I'd return to her— my fallback option— with relief rather than reluctance.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `The steady passage of time is suggested here by a classic mnemonic for`,
                                        {
                                            anchor: `daylight saving`,
                                            wiki: `Daylight_saving_time`,
                                        },
                                        `: "Spring forward, fall back" reminds us to set our clocks forward each spring, and back each fall.`,
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
                                description: `Perversely, Sita and I were always at our best during the month or so after getting back together. She could enjoy the knowledge of being the better woman, while I got to bask in the afterglow of my latest sexual exploit.`,
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
                            todo: REVIEW,
                            card: {
                                description: `Notches can be carved in one's belt to support a belly grown large by overfeeding. They might also tally sexual conquests.`,
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
                                    description: `During those on-and-off years, I would habitually return to Sita with a promise to mend my ways. Things would be peachy for a while— after which I would run off with yet another woman. I was like a reformed convict who might relapse at any time, taking with him the shank that he'd left on the windowsill to collect dust.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: `A shank, like a shiv, is a stabbing weapon improvised by prison inmates.`,
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
                                description: `Sita was unable to climax through vaginal sex, so I would go down on her afterward. She mentioned this once as an example of my thoughtfulness, when I asked her what she saw in me that was worth holding onto. It seemed like proof that I didn't have any actual redeeming qualities.`,
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
                todo: REVIEW,
                card: {
                    description: [
                        `To symbolize how Sita and I normalized our dysfunction, the meter switches to`,
                        {
                            anchor: `common time`,
                            wiki: `Time_signature`,
                        },
                        `in the song's second half, even as the chord progression remains unchanged. The two strands of tuplets are also more in sync, as one plays two notes for every three played by the other.`,
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
                            todo: REVISE,
                            problem: `Should second sentence be complete?`,
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
                                    `is ruptured, each subsequent breakup felt less like a piercing stab and more like an irritant on an already festering wound.`,
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
                                    `will die after stinging someone, as its stinger is connected to vital organs. Similarly, in having given my virginity to Sita in return, I realized too late that a part of me could never be recovered apart from her as well.`,
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
                                description: `I often joked about killing myself at thirty-three— the age at which Jesus was crucified. I hated the idea of getting older, and clearly this is all the time you need to make an impact on the world. So when Sita asked me to specify the age at which I'd come back for her in accordance with our pact, I answered thirty-three. The subtext was understood.`,
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
                            card: {
                                description: `I also hadn't settled the issue of whether an afterlife was actually preferable. Though Sita had no ready answers, she taught me her Hindu beliefs, which reinforced what I was learning in my religious studies courses. I found comfort in Hinduism's sprawling pantheon of avatars and deities. It just seemed like the more details there are to learn, the more ways there are to get lost in the divine.`,
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
                                description: `Back when Sita and I were just friends, we got along well because we were both sad people. But in hindsight, my sadness was simply rooted in circumstance— whether from being bullied as a child, or out of loneliness later on. Sita, on the other hand, suffered from clinical depression. So over time, I got better at dealing with my spells— but then I grew impatient with her for not doing the same.`,
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
                                    `, my night terrors grew infrequent, and my misery subsided. Seeing this for the boon it was, I became further subsumed in my ambitions, which made me even less attentive to Sita's needs.`,
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
                            todo: REVIEW,
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
                                description: `The first time Sita asked about the scars on my forearm, I wryly assured her that they were just for practice. Years later when I expressed concern after she'd tried cutting for herself, she gave me the same line. The message was clear that I was the cause in more ways than one.`,
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
                        `has always sounded to me like it's pleading "`,
                        {
                            isItalic: true,
                            lyric: `kyon`,
                        },
                        `" in Hindi. For this reason, my heart still breaks somewhat to hear it.`,
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
