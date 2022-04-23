import {
    BACKSTORY,
    NARRATIVE,
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
    INTRO,
    OUTRO,
    FORESHADOW_OF_WORMHOLE_PREFIX,
    IS_UNIT_DOT,
} from '../../../../src/constants/lyrics'

export default {
    title: 'Look Back in Anger',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `Acoustic guitars in measure 1`,
    mixStartTime: `0:02:23.33`,
    playerStartTime: 1932.102,
    // This is a magic number adjusted by ear. In the mix, it's actually 41.66.
    mixSamplingFrequency: 41.64,
    overview: `With the Yearlings becoming a fixture in the local scene, I started to command more attention than I'd ever known, particularly from women. And yet, my misery didn't abate but instead simmered into a hard-boiled resentment. I also began to regret my relationship with Sita, which now felt like a decision I'd been coerced to make under deprived conditions from which I was now freed.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        {
                            anchor: `John Osborne`,
                            wiki: `John_Osborne`,
                        },
                        `'s`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Look Back in Anger`,
                                wiki: `Look_Back_in_Anger`,
                            },
                        },
                        `is a theatrical play, set in postwar England, about a disgruntled young man of the working class who hurls rage at his long-suffering wife. It hit unnervingly close to home when I read it.`,
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
                        lyric: `(soprano recorder)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `A fellow dishroom worker named Owen had a`,
                        {
                            anchor: `four-track cassette recorder`,
                            wiki: `Portastudio`,
                        },
                        `, and some nights we would go back to his place to twiddle with it. Owen would tap out these intricate yet impromptu rhythms on plateware he'd swiped from the cafeteria. I did my best to conjure his spirit here, minus the impromptu part, of course.`,
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
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `0:12:21.18`,
                    lyric: [
                        `Scrambled past this hell, where`,
                        {
                            anchor: `flagboy last fell`,
                            card: {
                                description: [
                                    `During the`,
                                    {
                                        anchor: `Civil War`,
                                        wiki: `American_Civil_War`,
                                    },
                                    `, a`,
                                    {
                                        anchor: `color bearer`,
                                        wiki: `Standard-bearer`,
                                    },
                                    `carried the flag of his respective side onto the battlefield. Charging headlong into a volley of musket fire while twirling a piece of cloth seemed like an apt metaphor for my high school years.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:15:15.90`,
                    lyric: [
                        {
                            anchor: `dragging aglets held`,
                            cards: [
                                {
                                    description: [
                                        `An`,
                                        {
                                            anchor: `aglet`,
                                            wiki: `Aglet`,
                                        },
                                        `is the plastic tip at the end of a shoelace. Since I never learned to tie my shoelaces properly, they were always coming undone. So anyone bent on seeing me trip and fall had the ready means to make it happen.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `shoelaces`,
                                        wormholePrefix: FORESHADOW_OF_WORMHOLE_PREFIX,
                                    },
                                },
                            ],
                        },
                        `by the bastard's boot,`,
                    ],
                },
                {
                    mixTime: `0:18:10.59`,
                    lyric: [
                        `as the`,
                        {
                            anchor: `Van Nuys belles`,
                            properNoun: true,
                            cards: [
                                {
                                    description: [
                                        `I attended high school in`,
                                        {
                                            anchor: `Van Nuys`,
                                            wiki: `Van_Nuys`,
                                        },
                                        `, a neighborhood in the center of the San Fernando Valley.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: `belle`,
                                },
                            ],
                        },
                        {
                            anchor: `lunched soundless`,
                            properNoun: true,
                            card: {
                                description: [
                                    `In the`,
                                    {
                                        anchor: `First Battle of Bull Run`,
                                        wiki: `First_Battle_of_Bull_Run`,
                                    },
                                    `, spectators picnicked on the hillside to witness what they assumed would be a quick victory. Similarly, my battles with bullies were fought and lost in full view of a lunchtime crowd.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `through the noon.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `So as not to wake his neighbors while recording late at night, Owen would sing in muffled tones and then double track his vocals to thicken them. I wanted to recreate this effect here, so I took notes from`,
                        {
                            anchor: `Elliott Smith`,
                            wiki: `Elliott_Smith`,
                        },
                        `, who did the same on his first few albums.`,
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
                formType: VERSES,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `0:24:00.02`,
                    lyric: [
                        `Now your`,
                        {
                            anchor: `sapling cut`,
                            card: {
                                description: [
                                    `A sapling that survives the winter will be rewarded with its first`,
                                    {
                                        anchor: `tree ring`,
                                        wiki: `Dendrochronology`,
                                    },
                                    `, which will be visible through any gaping wounds it suffered along the way.`,
                                ],
                            },
                        },
                        `says you've`,
                        {
                            anchor: `past ring one`,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `promise ring`,
                                        wiki: `Pre-engagement_ring`,
                                    },
                                    `signifies long-term commitment to another person. And of course, after years of struggle, I'm finally in my first committed relationship.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:26:24.71`,
                    lyric: [
                        `yet— if adding up— then`,
                        {
                            anchor: `for more you'd vie`,
                            card: {
                                description: `But though it was a struggle, I did make it. Which means I can easily do it again. So why wouldn't I try? After all, each new relationship is like another tree ring, a testament to one's resilience and continued growth.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:29:19.43`,
                    lyric: [
                        `From the`,
                        {
                            anchor: `Valley of death`,
                            properNoun: true,
                            card: {
                                description: [
                                    `Like the six hundred who rode into the valley of death in`,
                                    {
                                        anchor: `Alfred Tennyson`,
                                        wiki: `Alfred,_Lord_Tennyson`,
                                    },
                                    `'s poem "`,
                                    {
                                        anchor: `The Charge of the Light Brigade`,
                                        wiki: `The_Charge_of_the_Light_Brigade_(poem)`,
                                    },
                                    `," I'd quietly accepted that mine was "not to reason why" but simply "to do and die" during my own wartime years in the San Fernando Valley.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `you rode, so on`,
                        {
                            anchor: `spite you thrive`,
                            card: {
                                description: `But this casual view of hardship is what later enabled me to justify the pain I caused Sita.`,
                                dotKeys: {
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
                    description: [
                        `When I asked Owen to recommend some good lyricists, he pointed me to`,
                        {
                            anchor: `Nas`,
                            wiki: `Nas`,
                        },
                        `. I hadn't paid much attention to`,
                        {
                            anchor: `hip hop`,
                            wiki: `Hip_hop`,
                        },
                        `at the time, believing it to be too far removed from my own songwriting approach to offer much wisdom. I've since corrected this oversight, but back when it was my lone point of reference for rap music, Nas's album`,
                        {
                            anchor: `Illmatic`,
                            wiki: `Illmatic`,
                        },
                        `offered great pointers on the flexibility of`,
                        {
                            anchor: `internal rhyme`,
                            wiki: `Internal_rhyme`,
                        },
                        `, which I used in these verses.`,
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
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `0:33:26.50`,
                    lyric: [
                        {
                            anchor: `Feeble feeder fish`,
                            card: {
                                description: [
                                    `The pecking order in a tank of`,
                                    {
                                        anchor: `feeder fish`,
                                        wiki: `Feeder_fish`,
                                    },
                                    `is deceptive, since the ones least fit to be sold as prey end up living the longest. In retrospect, high school worked the same way. All the time I spent focusing on pet projects left me unfit to defend my place in the social hierarchy, but the artistic skills I developed as a result were what kept me from being eaten alive later in the real world.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `allowed to grow;`,
                    ],
                },
                {
                    mixTime: `0:37:01.79`,
                    lyric: `these spluttered fits found fit for show.`,
                },
                {
                    mixTime: `0:39:26.50`,
                    lyric: [
                        `You wished a`,
                        {
                            anchor: `cancer nibbled off`,
                            card: {
                                description: `It was therapeutic enough to write songs about my own disappointments and dysfunctions. It felt crazy that others would credit me with giving voice to theirs as well, and that I should be granted a higher status because of it.`,
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
                    mixTime: `0:42:21.20`,
                    lyric: `and laid down on the public trough.`,
                },
            ],
        },
        {
            unitMap: {
                formType: PRECHORUS,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `0:45:15.91`,
                    lyric: [
                        `She braves the crowd`,
                        {
                            anchor: `filled first from sides`,
                            cards: [
                                {
                                    description: `A few songs into my band's set, I watch from onstage as an attractive woman and her friends make their way through a packed room.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: `At small venues with minimal seating, the first audience members to arrive usually congregate alongside the walls.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:48:10.61`,
                    lyric: [
                        `She might complete your`,
                        {
                            anchor: `jigsawed life`,
                            card: {
                                description: [
                                    `You typically work on a`,
                                    {
                                        anchor: `jigsaw puzzle`,
                                        wiki: `Jigsaw_puzzle`,
                                    },
                                    `by first connecting the edge pieces, then building inward. So as the latecomer squeezes her way into the center of the crowd, I wonder if she's the long-awaited final piece to the sprawling puzzle of my life.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:51:05.31`,
                    lyric: [
                        `With hair of`,
                        {
                            anchor: `maraschino red`,
                            card: {
                                description: [
                                    `Having sworn to be alert and ready when the next Mara shows up in my life, I notice the latecomer's hair color matches "Mara's sheen of" red, with the brightness of a`,
                                    {
                                        anchor: `maraschino cherry`,
                                        wiki: `Maraschino_cherry`,
                                    },
                                    `.`,
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
                    mixTime: `0:54:00.03`,
                    lyric: [
                        `"`,
                        {
                            anchor: `Great show`,
                            card: {
                                description: `The best time to hit on someone is right after you've played a set, since they've just spent the last half hour making you the center of their universe. So as expected, the redheaded woman is quite flirtatious when we chat.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `," she later said.`,
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
                    mixTime: `0:56:14.14`,
                    lyric: `Well there are ways to make a treat of life,`,
                },
                {
                    mixTime: `1:02:03.55`,
                    lyric: [
                        `and you were`,
                        {
                            anchor: `fine when you had none`,
                            card: {
                                description: `Things were finally looking up, so it baffled me that I should be as bitter as ever. I suspect it's because I felt indignant for my younger self, who'd been kept in the dark for so long about how much better life could be.`,
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
                    mixTime: `1:07:22.97`,
                    // NOTE: I removed comma at the end.
                    lyric: `But knowing now what you'd missed out on, you find`,
                },
                {
                    mixTime: `1:13:12.38`,
                    lyric: `you look back in anger that it's done.`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `I recorded the drum cymbals here at an extremely low tape speed, which turned them into`,
                        {
                            anchor: `pitched percussion`,
                            wiki: `Pitched_percussion_instrument`,
                        },
                        `upon normal playback.`,
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
                    mixTime: `1:19:01.80`,
                    lyric: [
                        `When`,
                        {
                            anchor: `religious kids mocked`,
                            card: {
                                description: `Some of the bullies were regular churchgoers, which had the predictable effect of discrediting their faiths in my view.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `, each hypocrite's taunts`,
                    ],
                },
                {
                    mixTime: `1:21:26.52`,
                    lyric: `would just acquit God of further need;`,
                },
                {
                    mixTime: `1:24:21.21`,
                    lyric: [
                        `reading`,
                        {
                            anchor: `His obit not a bang`,
                            card: {
                                description: `But my appraisal was based on reason, not malice. If there was one true God, it made no sense why he would entrust the dissemination of his message to the very tormentors of those he hoped to reach.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, just a murmuring.`,
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
                    mixTime: `1:28:28.29`,
                    lyric: `Now each new concession sees this`,
                },
                {
                    mixTime: `1:31:23.01`,
                    lyric: [
                        {
                            anchor: `peasant discontented`,
                            card: {
                                description: [
                                    `The better my life got, the more unsatisfied I became. I was like the peasants of the`,
                                    {
                                        anchor: `French Revolution`,
                                        wiki: `French_Revolution`,
                                    },
                                    `, who grew further agitated after each attempt by the ruling elite to appease them. Not only did they grumble at such paltry improvements to their lives, they were then emboldened to make new demands. This phenomenon is known as the`,
                                    {
                                        anchor: `Tocqueville paradox`,
                                        wiki: `Tocqueville_effect`,
                                    },
                                    `.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `all the more,`,
                    ],
                },
                {
                    mixTime: `1:34:17.70`,
                    lyric: `with his ignorance lessened of his plight before…`,
                },
            ],
        },
        {
            unitMap: {
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `1:40:07.11`,
                    lyric: `Beyonders prevail, the letters preached,`,
                },
                {
                    mixTime: `1:43:12.41`,
                    lyric: [
                        `and thus secure,`,
                        {
                            anchor: `must turn the cheek`,
                            card: {
                                description: `The letters from RI Research instructed me not to confront the bullies. Instead, I was to turn the other cheek, as Jesus had done, and quietly take their abuse in stride. My exalted place in the universe necessarily asked of me to be the bigger person.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `1:46:07.11`,
                    lyric: `You waved your pledge to this godly good,`,
                },
                {
                    mixTime: `1:49:01.82`,
                    lyric: [
                        {
                            anchor: `only to crack`,
                            card: {
                                description: `Yet even as reason disproved the faiths of my tormentors, it also discredited my own as a Beyonder. In a world abounding with rival claims to the truth, what sane person would stay loyal to a belief that promises zero community and only endless grief?`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `,`,
                        {
                            anchor: `sprawled where they stood`,
                            card: {
                                description: `And while every beatdown I suffered was a serious blow to my mental state, the bullies continued to enjoy greater happiness and social standing. My belief as a Beyonder couldn't survive the harsh realization that nature favors its bullies.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
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
            },
            mainVerses: [
                {
                    mixTime: `1:51:26.53`,
                    lyric: `Though, if you're right to want what's yours,`,
                },
                {
                    mixTime: `1:54:21.23`,
                    lyric: [
                        `weren't they`,
                        {
                            anchor: `right to take what's theirs`,
                            card: {
                                description: `As opportunities for social advancement later opened up for me, I could look back and even sympathize with the bullies by putting myself in their shoes. In a world that roots for the strong, who wouldn't readily take all the means available to avoid being weak?`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `?`,
                    ],
                },
                {
                    mixTime: `1:57:15.94`,
                    lyric: [
                        `So if you're weeping for`,
                        {
                            anchor: `poor squirrels`,
                            card: {
                                description: [
                                    `In the final scene of `,
                                    {
                                        isItalic: true,
                                        lyric: `Look Back in Anger`,
                                    },
                                    `, the protagonist Jimmy pictures his wife as a squirrel and sighs, "Poor squirrels," recognizing that his abusive tirades keep her in a neurotic and submissive state.`,
                                ],
                                dotKeys: {
                                    [REFERENCE]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `2:00:10.65`,
                    lyric: [
                        `also weep for`,
                        {
                            anchor: `poor, poor bears`,
                            card: {
                                description: `His wife Alison then sighs in response, "Poor, poor bears," to acknowledge that he, a bear in their mutual fantasy, is just as much a victim complying with a power dynamic over which neither possesses much control.`,
                                dotKeys: {
                                    [REFERENCE]: true,
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
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `2:03:05.35`,
                    lyric: [
                        {
                            anchor: `Red and friends`,
                            properNoun: true,
                            card: {
                                description: `The redheaded woman and her friends stick around as my bandmates and I load our gear into the van. During my chat with her between sets, I left open the possibility that we might all hang out after the show.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `, lagging by the back door,`,
                    ],
                },
                {
                    mixTime: `2:06:00.06`,
                    lyric: `lift you on angel stares.`,
                },
                {
                    mixTime: `2:08:14.17`,
                    lyric: [
                        `Drunk, you'd`,
                        {
                            anchor: `claim you've never loved`,
                            todo: true,
                            // TODO: This has gotten away from being unloved.
                            card: {
                                description: `My first complete songs were about being unlucky in love. So as my life substantially improved, I needed to drink greater amounts of alcohol to carry on with the lie that I was still the same inexperienced kid who'd written them.`,
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
                    mixTime: `2:10:17.70`,
                    lyric: [
                        `but it's too late to`,
                        {
                            anchor: `unscrew a Bud`,
                            card: {
                                description: [
                                    `I end up relinquishing my chance to know the redhead. It's after`,
                                    {
                                        anchor: `last call`,
                                        wiki: `Last_call_(bar_term)`,
                                    },
                                    `, and I would need a few`,
                                    {
                                        anchor: `Budweisers`,
                                        wiki: `Budweiser`,
                                    },
                                    `in me to reach the desired level of affability. But it's also too late to present myself as someone who isn't sexually involved with his best friend. I can't just unscrew a "bud" at will.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
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
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `2:14:03.58`,
                    lyric: `Yes, you were wrong to make demands on life,`,
                },
                {
                    mixTime: `2:19:23.01`,
                    lyric: [
                        `'cause when you`,
                        {
                            anchor: `beg it never comes`,
                            card: {
                                description: [
                                    `There's no excuse for not looking out for yourself. I knew this now. So while I was justifiably angry`,
                                    {
                                        isEmphasis: true,
                                        lyric: `for`,
                                    },
                                    `the younger me, there was also no one more worthy to be angry`,
                                    {
                                        isEmphasis: true,
                                        lyric: `at.`,
                                    },
                                    `I could only blame myself for being late to the game. But this only made me angrier…`,
                                ],
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
                    mixTime: `2:25:12.42`,
                    lyric: `And we all find this out on our own time…`,
                },
                {
                    mixTime: `2:31:01.82`,
                    lyric: `Look back in anger to have won.`,
                },
            ],
        },
        {
            unitMap: {
                formType: OUTRO,
            },
            mainVerses: [
                {
                    mixTime: `2:35:08.90`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(soprano recorder)`,
                    },
                },
            ],
        },
    ],
}
