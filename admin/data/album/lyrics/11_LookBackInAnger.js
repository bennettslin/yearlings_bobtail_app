import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGCRAFT,
} from '../../../../app/constants/dots'

import {
    VERSES,
    PRECHORUS,
    CHORUS,
    BRIDGE,
    INTRO,
    OUTRO,
    FORESHADOW_OF_WORMHOLE_PREFIX,
    IS_UNIT_DOT,
} from '../../../../app/constants/lyrics'

export default {
    path: 'look-back-in-anger',
    title: 'Look Back in Anger',
    playerStartTime: 1932.099,
    mixStartTime: `0:02:23.33`,
    mixSamplingFrequency: 41.66,
    overview: `With the Yearlings becoming a fixture in the local scene, I started to command more attention than I'd ever known, particularly from women. And yet, my misery didn't abate, but instead simmered into a hard-boiled resentment. I also began to regret my relationship with Sita, which now felt like a decision I'd been coerced to make, under deprived conditions from which I was now freed.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        {
                            anchor: `John Osborne's`,
                            wiki: `John_Osborne`,
                        },
                        `play`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Look Back in Anger`,
                                wiki: `Look_Back_in_Anger`,
                            },
                        },
                        `centers on a young working-class man in postwar England whose disgruntled rage manifests in abusive tirades hurled at his long-suffering wife. It hit unnervingly close to home when I read it.`,
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
                    time: 0,
                    mixTime: `0:02:23.35`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(intro)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `A fellow dishroom worker named Owen had a`,
                        {
                            anchor: `four-track cassette recorder,`,
                            wiki: `Portastudio`,
                        },
                        `and some nights we would go back to his place to twiddle with it. Owen would tap out these intricate yet impromptu rhythms on plateware he swiped from the cafeteria. I did my best to conjure his spirit here, minus the impromptu part, of course.`,
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
                    time: 10,
                    mixTime: `0:12:21.18`,
                    lyric: [
                        `Scrambled past this hell, where`,
                        {
                            anchor: `flagboy last fell,`,
                            todo: true,
                            card: {
                                description: [
                                    `During the`,
                                    {
                                        anchor: `Civil War,`,
                                        wiki: `American_Civil_War`,
                                    },
                                    `a`,
                                    {
                                        anchor: `color bearer`,
                                        wiki: `Standard-bearer`,
                                    },
                                    `carried the flag of his respective side onto the battlefield. Charging headlong into a volley of musket fire while twirling a piece of cloth was an apt metaphor for my high school experience.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 13,
                    mixTime: `0:15:15.90`,
                    lyric: [
                        {
                            anchor: `dragging aglets held`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `An`,
                                        {
                                            anchor: `aglet`,
                                            wiki: `Aglet`,
                                        },
                                        `is the plastic tip at the end of a shoelace. Since I never learned to tie my shoelaces properly, they were always coming undone. So if anyone was bent on seeing me trip and fall, they readily had the means to make it happen.`,
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
                    time: 16,
                    mixTime: `0:18:10.59`,
                    lyric: [
                        `as the`,
                        {
                            anchor: `Van Nuys belles`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `I went to high school in`,
                                        {
                                            anchor: `Van Nuys,`,
                                            wiki: `Van_Nuys`,
                                        },
                                        `a neighborhood smack dab in the center of the San Fernando Valley.`,
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
                            todo: true,
                            card: {
                                description: [
                                    `In the`,
                                    {
                                        anchor: `First Battle of Bull Run,`,
                                        wiki: `First_Battle_of_Bull_Run`,
                                    },
                                    `spectators picnicked on the hillside to witness what they assumed would be a quick victory. Similarly, my battles with the bullies were fought and lost in full view of a lunchtime crowd.`,
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
                todo: true,
                card: {
                    description: [
                        `So as not to wake his neighbors while recording late at night, Owen would sing in muffled tones and then double track his vocals to thicken them. I wanted to recreate this effect, so I took notes from`,
                        {
                            anchor: `Elliott Smith,`,
                            wiki: `Elliott_Smith`,
                        },
                        `who did the same on his first few albums.`,
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
                    time: 22,
                    mixTime: `0:24:00.02`,
                    lyric: [
                        `Now your`,
                        {
                            anchor: `sapling cut`,
                            todo: true,
                            card: {
                                description: [
                                    `A sapling that survives its first winter will have earned its first`,
                                    {
                                        anchor: `tree ring.`,
                                        wiki: `Dendrochronology`,
                                    },
                                    `While normally hidden from view, this ring would be plainly revealed by any deep, gaping cuts the sapling has endured along the way.`,
                                ],
                            },
                        },
                        `says you've`,
                        {
                            anchor: `past ring one,`,
                            todo: true,
                            card: {
                                description: `A ring also symbolizes long-term commitment to another person. And of course, after years of endless struggle, I'm finally in my first committed relationship.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 25,
                    mixTime: `0:26:24.71`,
                    lyric: [
                        `yet— if adding up— then`,
                        {
                            anchor: `for more you'd vie.`,
                            todo: true,
                            card: {
                                description: `But even if it was a struggle, I made it, didn't I? Which means I can easily do it again. And why wouldn't I want to try? After all, each new relationship is like another tree ring, a testament to one's resilience and continued growth.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 28,
                    mixTime: `0:29:19.43`,
                    lyric: [
                        `From the`,
                        {
                            anchor: `Valley of death`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `Like the six hundred who rode into the valley of death in`,
                                    {
                                        anchor: `Alfred Tennyson's`,
                                        wiki: `Alfred,_Lord_Tennyson`,
                                    },
                                    `poem`,
                                    {
                                        anchor: `"The Charge of the Light Brigade,"`,
                                        wiki: `Charge_of_the_Light_Brigade`,
                                    },
                                    `I had quietly accepted that mine was "not to reason why" but simply "to do and die" during my own wartime years in the Valley.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `you rode, so on`,
                        {
                            anchor: `spite you thrive.`,
                            todo: true,
                            card: {
                                description: `It was this casual view of hardship that later enabled me to justify the pain my ambitions brought upon Sita.`,
                                dotKeys: {
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
                        `When I asked Owen to recommend some great lyricists, he pointed me to`,
                        {
                            anchor: `Nas.`,
                            wiki: `Nas`,
                        },
                        `I hadn't given serious thought to`,
                        {
                            anchor: `hip hop`,
                            wiki: `Hip_hop`,
                        },
                        `at the time, believing it to be too far removed from my own method of songwriting to offer much wisdom. I've since corrected this oversight, but back when it was my lone point of reference for hip hop, Nas's debut album`,
                        {
                            anchor: `Illmatic`,
                            wiki: `Illmatic`,
                        },
                        `offered great pointers on the flexibility of`,
                        {
                            anchor: `internal rhyme,`,
                            wiki: `Internal_rhyme`,
                        },
                        `which I used in these verses.`,
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
                    time: 33,
                    mixTime: `0:33:26.50`,
                    lyric: [
                        {
                            anchor: `Feeble feeder fish`,
                            todo: true,
                            card: {
                                description: [
                                    `The pecking order inside a tank of`,
                                    {
                                        anchor: `feeder fish`,
                                        wiki: `Feeder_fish`,
                                    },
                                    `is deceptive, since it is those least fit to be sold as live prey that last the longest. High school seemed to work the same way. All my time spent working on pet projects had left me unfit to defend myself within the social hierarchy, but the artistic skills I had developed as a result were what later kept me from being eaten alive in the real world.`,
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
                    time: 36,
                    mixTime: `0:37:01.79`,
                    lyric: `these spluttered fits found fit for show.`,
                },
                {
                    time: 39,
                    mixTime: `0:39:26.50`,
                    lyric: [
                        `You wished a`,
                        {
                            anchor: `cancer nibbled off,`,
                            todo: true,
                            card: {
                                description: `It was therapeutic enough to write songs about my own disappointments and dysfunctions. It seemed crazy that others would credit me with giving voice to theirs as well, and that I should be granted a higher status because of it.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 42,
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
                    time: 45,
                    mixTime: `0:45:15.91`,
                    lyric: [
                        `She braves the crowd`,
                        {
                            anchor: `filled first from sides.`,
                            todo: true,
                            cards: [
                                {
                                    description: `At small venues with minimal seating, the first audience members to arrive typically congregate alongside the walls.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: `A few songs into my band's set, I watch from onstage as an attractive latecomer and her friends make their way through an unusually packed room.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    time: 48,
                    mixTime: `0:48:10.61`,
                    lyric: [
                        `She might complete your`,
                        {
                            anchor: `jigsawed life.`,
                            todo: true,
                            card: {
                                description: [
                                    `You typically work on a`,
                                    {
                                        anchor: `jigsaw puzzle`,
                                        wiki: `Jigsaw_puzzle`,
                                    },
                                    `by first connecting the edge pieces, then building inward. So as this latecomer squeezes her way into the center of the crowd, I wonder if she is the long-awaited final piece to the sprawling puzzle of my life.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 51,
                    mixTime: `0:51:05.31`,
                    lyric: [
                        `With hair of`,
                        {
                            anchor: `maraschino red,`,
                            todo: true,
                            card: {
                                description: [
                                    `Having sworn to be alert and ready when the next Mara shows up in my life, I notice the latecomer's hair color matches "Mara's sheen of" red, which is the brightness of`,
                                    {
                                        anchor: `maraschino cherries.`,
                                        wiki: `Maraschino_cherry`,
                                    },
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
                    time: 54,
                    mixTime: `0:54:00.03`,
                    lyric: [
                        {
                            anchor: `"Great show,"`,
                            todo: true,
                            card: {
                                description: `The best time to hit on someone at a show is always right after your set, since they've just spent the last half hour of their life making you the center of their universe. So as expected, I find the red-haired woman to be warm and flirtatious when we finally chat.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `she later said.`,
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
                    time: 56,
                    mixTime: `0:56:14.14`,
                    lyric: `Well there are ways to make a treat of life,`,
                },
                {
                    time: 63,
                    mixTime: `1:02:03.55`,
                    lyric: [
                        `and you were`,
                        {
                            anchor: `fine when you had none.`,
                            todo: true,
                            card: {
                                description: `Things were finally looking up for me, so it baffled me to be as angry as ever. I suspect that I felt indignant for my younger self, who had been kept in the dark for so long about how much better life could be.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 69,
                    mixTime: `1:07:22.97`,
                    lyric: `But knowing now what you'd missed out on, you find,`,
                },
                {
                    time: 75,
                    mixTime: `1:13:12.38`,
                    lyric: `you look back in anger that it's done.`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `I recorded drum cymbals here at an extremely low tape speed, which turned them into`,
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
                    time: 81,
                    mixTime: `1:19:01.80`,
                    lyric: [
                        `When`,
                        {
                            anchor: `religious kids mocked,`,
                            todo: true,
                            card: {
                                description: `The kids who bullied me were typically religious. This had the predictable effect of discrediting their faiths in my view.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `each hypocrite's taunts`,
                    ],
                },
                {
                    time: 84,
                    mixTime: `1:21:26.52`,
                    lyric: `would just acquit God of further need;`,
                },
                {
                    time: 87,
                    mixTime: `1:24:21.21`,
                    lyric: [
                        `reading`,
                        {
                            anchor: `His obit not a bang,`,
                            todo: true,
                            card: {
                                description: `But my appraisal was based on reason, not malice. It just made no sense that the one true God would entrust the dissemination of his message to the very tormentors of those he hoped to reach.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `just a murmuring.`,
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
                    time: 91,
                    mixTime: `1:28:28.29`,
                    lyric: `Now each new concession sees this`,
                },
                {
                    time: 94,
                    mixTime: `1:31:23.01`,
                    lyric: [
                        {
                            anchor: `peasant discontented`,
                            todo: true,
                            card: {
                                description: [
                                    `The better life got, the more unsatisfied I became. I was like the peasants during the`,
                                    {
                                        anchor: `French Revolution,`,
                                        wiki: `French_Revolution`,
                                    },
                                    `who were so downtrodden that every attempt made by the ruling elite to appease them only backfired. Not only did the peasants grumble at such paltry improvements to their lives, but they were then emboldened to make further demands.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `all the more,`,
                    ],
                },
                {
                    time: 97,
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
                    time: 103,
                    mixTime: `1:40:07.11`,
                    lyric: `Beyonders prevail, the letters preached,`,
                },
                {
                    time: 106,
                    mixTime: `1:43:12.41`,
                    lyric: [
                        `and thus secure,`,
                        {
                            anchor: `must turn the cheek.`,
                            todo: true,
                            card: {
                                description: `The letters from RI Research instructed me not to confront the bullies. I was instead to turn the other cheek, as Jesus had done, and quietly take their abuse in stride. After all, my exalted place in the universe necessarily asked of me to be the bigger person.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 109,
                    mixTime: `1:46:07.11`,
                    lyric: `You waved your pledge to this godly good,`,
                },
                {
                    time: 112,
                    mixTime: `1:49:01.82`,
                    lyric: [
                        {
                            anchor: `only to crack,`,
                            todo: true,
                            card: {
                                description: `Yet, even as reason discredited the faith of my tormentors, it also disproved mine. After all, in a world abounding with rival claims to the truth, what sane person would stay loyal to a belief that promises zero community and only endless grief?`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        {
                            anchor: `sprawled where they stood…`,
                            todo: true,
                            card: {
                                description: `And while the natural course for me was a lifetime of setbacks and letdowns, the bullies would continue to enjoy greater happiness and social standing. I had no belief left to counter the harsh reality that nature favors its bullies. I just had to accept it.`,
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
                formType: BRIDGE,
            },
            mainVerses: [
                {
                    time: 115,
                    mixTime: `1:51:26.53`,
                    lyric: `Though, if you're right to want what's yours,`,
                },
                {
                    time: 118,
                    mixTime: `1:54:21.23`,
                    lyric: [
                        `weren't they`,
                        {
                            anchor: `right to take what's theirs?`,
                            todo: true,
                            card: {
                                description: `As opportunities for social advancement opened up for me, I began to understand why the bullies grabbed onto those handed to them, and I could even sympathize. After all, in a world that roots for the strong, it makes no sense for anyone to question whatever means they've been afforded to avoid being weak.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 121,
                    mixTime: `1:57:15.94`,
                    lyric: [
                        `So if you're weeping for`,
                        {
                            anchor: `poor squirrels,`,
                            todo: true,
                            card: {
                                description: [
                                    `In the final scene of `,
                                    {
                                        isItalic: true,
                                        lyric: `Look Back in Anger,`,
                                    },
                                    `the main character pictures his wife as a squirrel and sighs, "Poor squirrels," acknowledging that his emotionally abusive tirades keep her in a submissive state.`,
                                ],
                                dotKeys: {
                                    [REFERENCE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 124,
                    mixTime: `2:00:10.65`,
                    lyric: [
                        `also weep for`,
                        {
                            anchor: `poor, poor bears.`,
                            todo: true,
                            card: {
                                description: `His wife then sighs in response, "Poor, poor bears," recognizing that he, a bear in their mutual fantasy, is also a victim, complying helplessly within a power dynamic over which neither possesses control.`,
                                dotKeys: {
                                    [REFERENCE]: true,
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
                subsequent: true,
            },
            mainVerses: [
                {
                    time: 127,
                    mixTime: `2:03:05.35`,
                    lyric: [
                        {
                            anchor: `Red and friends,`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: `The red-haired woman and her friends stick around as my bandmates and I load our gear into the van. During my chat with her between sets, I left open the possibility that we might all hang out after the show.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `lagging by the back door,`,
                    ],
                },
                {
                    time: 130,
                    mixTime: `2:06:00.06`,
                    lyric: `lift you on angel stares.`,
                },
                {
                    time: 133,
                    mixTime: `2:08:14.17`,
                    lyric: [
                        `Drunk, you'd`,
                        {
                            anchor: `claim you've never loved,`,
                            todo: true,
                            card: {
                                description: `My songs projected the image of an inexperienced kid forever unlucky in love. It's how I first learned to attract attention, so I had refined it to perfection over the years. But as past misfortunes receded further into the distance, I needed greater quantities of alcohol to carry on with the lie that my life hadn't substantially improved.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 136,
                    mixTime: `2:10:17.70`,
                    lyric: [
                        `but it's too late to`,
                        {
                            anchor: `unscrew a Bud…`,
                            todo: true,
                            card: {
                                description: [
                                    `I relinquish my chance to get to know the red-haired woman. Not just because another`,
                                    {
                                        anchor: `Budweiser`,
                                        wiki: `Budweiser`,
                                    },
                                    `would be needed to bring me to the required level of affability, and it's past`,
                                    {
                                        anchor: `last call.`,
                                        wiki: `Last_call_(bar_term)`,
                                    },
                                    `It's also much too late for me to present myself as someone who isn't in a sexual relationship with his best friend. I can't just unscrew a "bud" at will.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
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
                    time: 139,
                    mixTime: `2:14:03.58`,
                    lyric: `Yes, you were wrong to make demands on life,`,
                },
                {
                    time: 145,
                    mixTime: `2:19:23.01`,
                    lyric: [
                        `'cause when you`,
                        {
                            anchor: `beg it never comes.`,
                            todo: true,
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
                    ],
                },
                {
                    time: 151,
                    mixTime: `2:25:12.42`,
                    lyric: `And we all find this out on our own time…`,
                },
                {
                    time: 157,
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
                    time: 161,
                    mixTime: `2:35:08.90`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(outro)`,
                    },
                },
            ],
        },
    ],
}
