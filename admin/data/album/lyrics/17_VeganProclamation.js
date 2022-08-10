import {
    AFTERWORD,
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
    REFRAIN,
    SOLO,
    OUTRO,
    FORESHADOW_OF_WORMHOLE_PREFIX,
    IS_UNIT_DOT,
} from '../../../../src/constants/lyrics'

export default {
    title: 'Vegan Proclamation',
    /**
     * This is for recalibrating the mix start time after redoing the mix. This
     * song is unusual, in that the player start time is used to determine the
     * mix start time, rather than the other way around.
     *
     * pST - pRT + mRT = mST
     * 3091.413 - 3094.348 + 12.074 => 9.139 => 0:09:04.17
     */
    referenceDescription: `Dobro high C in measure 2`,
    mixReferenceTime: `0:12:02.23`,
    mixStartTime: `0:09:04.17`,
    playerReferenceTime: 3094.348,
    playerStartTime: 3091.413,
    todo: true,
    overview: `Having committed to writing and recording all the songs on my next album, I'd been burning bridges with my bandmates for some time. Since we'd stopped playing shows as a result, I had no new opportunities to meet women after Miriam left me. Most devastating of all, Sita had fallen in love with someone else. I wasn't to win her back, ever again. All I had now was myself, and I really didn't like myself much. I desperately wanted to be a good person again, but I had no idea how.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `While Sita was a lifelong vegetarian due to her Hindu upbringing, she also held strong convictions about animal rights that led her to go`,
                        {
                            anchor: `vegan`,
                            wiki: `Veganism`,
                        },
                        `during our relationship. I supported her decision by helping her to avoid animal products. After we stopped speaking to each other, I became vegan as well, which was the first step toward liking myself again.`,
                    ],
                    dotKeys: {
                        [BACKSTORY]: true,
                        [OBSERVATION]: true,
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
                    lyric: [
                        {
                            isItalic: true,
                            lyric: [
                                `"If you're just starting out, you need to decide right now: Either you stick with quality vinyl, or you buy only the bargain bin LPs. You`,
                                {
                                    anchor: `can't have both`,
                                    todo: true,
                                    card: {
                                        description: `A friend offered me this advice when I bought a turntable. And as it turns out, what's true for vinyl records holds just as well for life decisions. I couldn't have two selves— one to earn praise for kindness, the other to take the blame for my selfish desires. A single hurtful deed taints everything else. It isn't possible to be both kinds of people at once.`,
                                        dotKeys: {
                                            [BACKSTORY]: true,
                                            [OBSERVATION]: true,
                                        },
                                    },
                                },
                                `. Because a scratched record will chip a good needle… and a chipped needle will scratch a good record…"`,
                            ],
                        },
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `The previous song offered a brief glimpse of me as an infirm patient, fading away while listening to old records. The crackle of a needle on vinyl now introduces the third and final song of the medley.`,
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
                    mixTime: `0:23:28.35`,
                    lyric: [
                        `So shall we,`,
                        {
                            anchor: `Odin`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: `As a child I didn't pay much attention to Odin. He just seemed to come with the house. So when Sita and I adopted a cat together, I was surprised by how naturally the instinct to nurture a pet came to me. Years later after my failure to nurture the relationship led to our final breakup, I thought of Odin often.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, lightly tread`,
                    ],
                },
                {
                    mixTime: `0:28:11.91`,
                    lyric: [
                        `past the`,
                        {
                            anchor: `rape racks`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Dairy cows`,
                                        wiki: `Dairy_cattle`,
                                    },
                                    `are impregnated every year to keep them at peak lactation. This is done by forcibly inseminating them on an apparatus once known in the dairy industry as a "rape rack."`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `where our`,
                        {
                            anchor: `furor`,
                            todo: true,
                            card: {
                                description: [
                                    `Or else, our "`,
                                    {
                                        anchor: `Führer`,
                                        wiki: `Führer`,
                                    },
                                    `," a German title of leadership strongly associated with`,
                                    {
                                        anchor: `Adolf Hitler`,
                                        wiki: `Adolf_Hitler`,
                                    },
                                    `. For animal rights proponents, the parallels between`,
                                    {
                                        anchor: `factory farming`,
                                        wiki: `Intensive_animal_farming`,
                                    },
                                    `and the`,
                                    {
                                        anchor: `Holocaust`,
                                        wiki: `The_Holocaust`,
                                    },
                                    `are obvious, however impolitic the comparison might be.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `led,`,
                    ],
                },
                {
                    mixTime: `0:32:10.63`,
                    lyric: [
                        `to a soiled girl fouled on the`,
                        {
                            anchor: `false rib`,
                            todo: true,
                            card: {
                                description: [
                                    `The lower five`,
                                    {
                                        anchor: `rib pairs`,
                                        wiki: `Rib_cage`,
                                    },
                                    `are known as false ribs, as they don't attach directly to the sternum.`,
                                ],
                            },
                        },
                        {
                            anchor: `from our chest`,
                            todo: true,
                            card: {
                                description: [
                                    `In the Book of Genesis, God gave life to`,
                                    {
                                        anchor: `Eve`,
                                        wiki: `Eve`,
                                    },
                                    `by taking one of Adam's ribs. By contrast, my own promise to sacrifice for Sita proved to be a false rib. So she could never be truly alive with me, even as she felt unworthy to begin life anew with someone else.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `?`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `As a child, I sat with my mother as we watched an old`,
                        {
                            anchor: `World War I`,
                            wiki: `World_War_I`,
                        },
                        `movie. After the battle, the camera panned across a motionless scene of bombed houses and dead bodies while a lone`,
                        {
                            anchor: `gramophone`,
                            wiki: `Phonograph`,
                        },
                        `, preserved amid the wreckage, played a sappy Italian`,
                        {
                            anchor: `parlor song`,
                            wiki: `Parlour_music`,
                        },
                        `. The ironic contrast stuck with me, and I thought it would work well for this song.`,
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
                    mixTime: `0:39:23.21`,
                    lyric: `We balked at our lives born unfair,`,
                },
                {
                    mixTime: `0:44:06.76`,
                    lyric: [
                        `set to rock this pout from`,
                        {
                            anchor: `horse to chair`,
                            card: {
                                description: `In other words, from rocking horse to rocking chair.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:48:05.47`,
                    lyric: `as a tempered hammer cooled by striking the smoldering air…`,
                },
            ],
        },
        {
            unitMap: {
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `0:55:18.07`,
                    lyric: [
                        `Well,`,
                        {
                            anchor: `first pets`,
                            todo: true,
                            card: {
                                description: `It blew my mind that I could hurt Sita for so long and still live with myself. In hindsight, I just never questioned the facade of sanity she'd constructed as a means to cope. I'd allowed myself to believe that our periodic moments of intimacy, which she clung to and cherished, were all that was needed to heal the wounds and wipe the slate clean.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `always bear the worst,`,
                    ],
                },
                {
                    mixTime: `1:00:01.63`,
                    lyric: `mere primers on how not to hurt,`,
                },
                {
                    mixTime: `1:04:00.34`,
                    lyric: [
                        `and now I know why the`,
                        {
                            anchor: `battered kitten purrs`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Sita had her own story to tell about mistreating a first pet. Upon receiving a kitten as a child, she hugged it so hard it began to purr. Taking this as a sign of its contentment, she hugged it even harder. Years later, she learned that cats also`,
                                        {
                                            anchor: `purr to cope`,
                                            wiki: `Purr`,
                                        },
                                        `with distress, and looking back, she realized her kitten had thought it was being crushed to death. She lived in guilt ever since.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Also, a reference to the`,
                                        {
                                            anchor: `Maya Angelou`,
                                            wiki: `Maya_Angelou`,
                                        },
                                        `book`,
                                        {
                                            isItalic: true,
                                            lyric: {
                                                anchor: `I Know Why the Caged Bird Sings`,
                                                wiki: `I_Know_Why_the_Caged_Bird_Sings`,
                                            },
                                        },
                                        `.`,
                                    ],
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
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: `1:08:13.89`,
                    lyric: [
                        {
                            isItalic: true,
                            lyric: [
                                `"No, I'll smile because I believe in the`,
                                {
                                    anchor: `Big Crunch`,
                                    properNoun: true,
                                    todo: true,
                                    card: {
                                        description: [
                                            `The`,
                                            {
                                                anchor: `Big Crunch`,
                                                wiki: `Big_Crunch`,
                                            },
                                            `is a theory that the universe will reverse its expansion and eventually collapse upon itself, possibly to ignite another`,
                                            {
                                                anchor: `Big Bang`,
                                                wiki: `Big_Bang`,
                                            },
                                            `. I found the thought comforting as it jibes with the Hindu belief that the universe is a living force like us, helplessly bound to an eternal cycle of death and rebirth.`,
                                        ],
                                        dotKeys: {
                                            [OBSERVATION]: true,
                                        },
                                    },
                                },
                                `. And meanwhile, the universe is a`,
                                {
                                    anchor: `cyanided box`,
                                    todo: true,
                                    card: {
                                        description: [
                                            `In`,
                                            {
                                                anchor: `quantum theory`,
                                                wiki: `Quantum_mechanics`,
                                            },
                                            `, a particle exists as a combination of its possible states. To explain the problem of applying this concept to larger objects,`,
                                            {
                                                anchor: `Erwin Schrödinger`,
                                                wiki: `Erwin_Schrödinger`,
                                            },
                                            `proposed a famous thought experiment known as`,
                                            {
                                                anchor: `Schrödinger's cat`,
                                                wiki: `Schrödinger's_cat`,
                                            },
                                            `. We imagine a cat sealed inside a steel chamber, where it stands an equal chance of surviving or being killed by cyanide. Since we can't observe the outcome, we must regard the cat as being simultaneously dead and alive.`,
                                        ],
                                    },
                                },
                                `. Because if we can't ever be`,
                                {
                                    anchor: `known to be dead`,
                                    todo: true,
                                    card: {
                                        description: `I liked the idea that if something greater than ourselves is unable to observe us, then like Schrödinger's abused cat, some part of us must always live on.`,
                                        dotKeys: {
                                            [OBSERVATION]: true,
                                        },
                                    },
                                },
                                `, we just might always be alive… to God…"`,
                            ],
                        },
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `Sasha recited these lines for me over the phone. We tried several takes because she found it hard to portray them as snippets of actual conversation. I had to admit to her that I didn't write them with that concern in mind.`,
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
                    mixTime: `1:23:09.07`,
                    lyric: [
                        `Torn straps`,
                        {
                            anchor: `unsalvaged sows`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `On factory farms, breeding sows are strapped inside`,
                                        {
                                            anchor: `metal cages`,
                                            wiki: `Gestation_crate`,
                                        },
                                        `too small for them to move around. Stressed by their living conditions, they engage in self-destructive behavior like chewing on the cage bars. The sole purpose of their suffering is to produce piglets for slaughter. Then once they grow too weak, they too are slaughtered.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    wormhole: `unsalvaged_sows`,
                                },
                            ],
                        },
                        `have chewed,`,
                    ],
                },
                {
                    mixTime: `1:27:22.63`,
                    lyric: [
                        `form a trail which leads to a`,
                        {
                            anchor: `bloody broom`,
                            todo: true,
                            card: {
                                description: `Understandably, factory farm workers become inured to the daily violence, which would otherwise cast a pall over even mundane tasks like sweeping the floor.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [REFERENCE]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `1:31:21.33`,
                    lyric: `its bristles scrape discharge encrusted on leather boots.`,
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
                    mixTime: `1:39:03.92`,
                    lyric: [
                        `Through an alley strewn with`,
                        {
                            anchor: `burger shrouds`,
                            todo: true,
                            card: {
                                description: `As a vegan, I became hypersensitive to anything that was a byproduct of the meat industry. Even something as commonplace as a crumpled fast food wrapper would remind me of how much our society has commoditized animal suffering.`,
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
                    mixTime: `1:43:02.64`,
                    lyric: [
                        `a`,
                        {
                            anchor: `lone rallied youth`,
                            todo: true,
                            card: {
                                description: [
                                    `Having played shows for many years, I've seen how an audience gets whipped into a single-minded frenzy. But with that world now drifting away, I puzzle over what drew me to those crowds and why I longed to be adored by them. I question everything I've valued up to this point, like a reformed`,
                                    {
                                        anchor: `Hitler Youth`,
                                        wiki: `Hitler_Youth`,
                                    },
                                    `who's suddenly aghast at all the things he cheered for at the`,
                                    {
                                        anchor: `Nuremberg Rallies`,
                                        wiki: `Nuremberg_Rally`,
                                    },
                                    `.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        {
                            anchor: `strikes himself from his cloud`,
                            todo: true,
                            card: {
                                description: [
                                    `The insignia of the`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Schutzstaffel`,
                                            wiki: `Schutzstaffel`,
                                        },
                                    },
                                    `, the paramilitary group responsible for carrying out the Holocaust, consisted of two thunderbolts side by side. And so, wishing no more to strike anyone down with my thunder, I strike myself down instead, leaving my complacence and ego behind.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `1:47:16.19`,
                    lyric: [
                        {
                            anchor: `reversing his stomach`,
                            todo: true,
                            card: {
                                description: `It seemed so vulgar that anything should have to suffer and die just to satisfy my hunger. And once I came to that conclusion, I literally couldn't stomach the taste of meat.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `and his`,
                        {
                            anchor: `swastikas`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `swastika`,
                                            wiki: `Swastika`,
                                        },
                                        `is an ancient Indian symbol of peace and continuity that was later co-opted by the Nazis. To avoid any association with violence or hatred, today's Hindus and Buddhists often present their swastikas facing left, in reverse of the Nazi symbol, which faces right.`,
                                    ],
                                },
                                {
                                    wormhole: `swastikas`,
                                },
                            ],
                        },
                        `inside out…`,
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
                    mixTime: `1:54:28.78`,
                    lyric: `Well, if first cuts are the worst ones bled…`,
                },
                {
                    mixTime: `1:59:12.32`,
                    lyric: [
                        `then`,
                        {
                            anchor: `none by us now`,
                            todo: true,
                            card: {
                                description: `And so, vowing never again to be the cause of hurt to anyone or anything, I decide to become a vegan.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `, to any flesh!`,
                    ],
                },
                {
                    mixTime: `2:03:11.04`,
                    lyric: `This shipwrecked world is large enough for us to make amends…`,
                },
                {
                    mixTime: `2:10:05.97`,
                    lyric: [
                        `and to be`,
                        {
                            anchor: `good again`,
                            todo: true,
                            card: {
                                description: [
                                    `Upon becoming a vegan, I joined`,
                                    {
                                        anchor: `People for the Ethical Treatment of Animals`,
                                        wiki: `People_for_the_Ethical_Treatment_of_Animals`,
                                    },
                                    `, an animal rights organization. For several years, I volunteered my time and took part in PETA demonstrations.`,
                                ],
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
                formType: SOLO,
            },
            mainVerses: [
                {
                    mixTime: `2:12:08.65`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(dobro and pitch-shifted choir)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `When Sita and I first met, she asked to hear my music. I'd just bought a multi-effects processor and had played around with it, so I gave her a copy of those recordings. She particularly liked one in which I'd pitch-shifted my vocals an octave up, so I made it the basis for the second half of this song.`,
                    dotKeys: {
                        [BACKSTORY]: true,
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
                    mixTime: `2:27:03.78`,
                    lyric: [
                        `"So all your`,
                        {
                            anchor: `leads have left`,
                            todo: true,
                            card: {
                                description: `For several years, my modus operandi was to stay with Sita right up until I had another option to pursue. Each time I left, Sita would languish for a few months before summoning the courage to contact me. Upon learning that things hadn't worked out with the other woman, which they never did, she would then cajole me back. But now our situations were reversed. I had no more options coming down the pike, while Sita had met someone with whom she intended to stay.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `and now you're sad, too?`,
                    ],
                },
                {
                    mixTime: `2:35:01.20`,
                    lyric: [
                        `Someday you'll breathe again; for one,`,
                        {
                            anchor: `you have to`,
                            todo: true,
                            card: {
                                description: `Overcome with jealousy and heartbreak, I had no excuse to complain. I'd caused Sita this exact torment countless times. So in our last phone conversation, I just meekly asked how she'd managed it. She replied that she didn't know. There were days when she just didn't want to live. And yet, each day would pass all the same, pushing into the next. Slowly, days would add up to weeks, then weeks would turn into months, until the excruciating pain dulled into an aching sadness.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `…`,
                    ],
                },
                {
                    mixTime: `2:42:28.64`,
                    lyric: `I don't know how where once I cowered I now could fly.`,
                },
                {
                    mixTime: `2:50:26.06`,
                    lyric: [
                        `I still`,
                        {
                            anchor: `love you for the airholes`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `In Nirvana's "`,
                                        {
                                            anchor: `Sappy`,
                                            wiki: `Sappy`,
                                        },
                                        `," Kurt Cobain compares the victim of an abusive relationship to a small creature kept in a jar with breathing holes punched in the lid. I liked this imagery, so I took it.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                        [SONGCRAFT]: true,
                                    },
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `bottled_insect`,
                                        wormholePrefix: FORESHADOW_OF_WORMHOLE_PREFIX,
                                    },
                                },
                            ],
                        },
                        `, dear; and now, good night."`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: SOLO,
            },
            mainVerses: [
                {
                    mixTime: `2:59:23.17`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(piano and dobro)`,
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `3:14:18.34`,
                    lyric: [
                        `The stardust marks us, Odin,`,
                        {
                            anchor: `sparks zip through our heads`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Traveling with Odin beyond the galaxy, I observe that the universe is almost entirely empty space, just like the distance between`,
                                        {
                                            anchor: `subatomic particles`,
                                            wiki: `Subatomic_particle`,
                                        },
                                        `that make up our bodies. With this thought wandering through my head, I then wonder if we ourselves are nothing more than the wandering thoughts of the universe.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `spark_zips`,
                                },
                            ],
                        },
                        `…`,
                    ],
                },
                {
                    mixTime: `3:22:15.78`,
                    lyric: `And can we start as children? Would we want to then?`,
                },
                {
                    mixTime: `3:30:13.20`,
                    lyric: [
                        `The`,
                        {
                            anchor: `diapered white dwarf`,
                            todo: true,
                            card: {
                                description: [
                                    `As we come upon a`,
                                    {
                                        anchor: `white dwarf`,
                                        wiki: `White_dwarf`,
                                    },
                                    `, the superdense remnant of an aged star, I'm reminded of`,
                                    {
                                        anchor: `Apasmara`,
                                        wiki: `Apasmara`,
                                    },
                                    `, the ageless dwarf demon of ignorance in Hindu mythology. And so I pause to mull over the hurt caused by my own ignorance.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `,`,
                        [
                            {
                                anchor: `gurgling, curls up`,
                                todo: true,
                                cards: [
                                    {
                                        description: `With ignorance being as old as time itself, I'm comforted to know that we've always corrected our past mistakes. And yet, it's just as dispiriting to know that those coming after us have yet to make theirs. The universe never truly learns, and I'm partly to blame. I had this same thought as a child, when I wondered if I was the reason that my brother never got better. It made me realize that all I could do was love him and then do better for him.`,
                                        dotKeys: {
                                            [NARRATIVE]: true,
                                            [OBSERVATION]: true,
                                        },
                                    },
                                    {
                                        wormhole: {
                                            wormholeKey: `learn_him_good`,
                                            wormholePrefix: FORESHADOW_OF_WORMHOLE_PREFIX,
                                        },
                                    },
                                ],
                            },
                            `for his sleep…`,
                        ],
                    ],
                },
                {
                    mixTime: `3:38:10.63`,
                    lyric: [
                        `Our ashed heads bow from`,
                        {
                            // NOTE: I added an "h" to Shiva.
                            anchor: `chivalry to our Shiva's feet`,
                            properNoun: true,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Nataraja`,
                                            wiki: `Nataraja`,
                                        },
                                        `, or "lord of the dance" in Sanskrit, is a depiction of the Hindu god`,
                                        {
                                            anchor: `Shiva`,
                                            wiki: `Shiva`,
                                        },
                                        `as he dances to destroy and rebuild the universe in an endless cycle. Crushed beneath his foot lies Apasmara, symbolizing Shiva's victory over ignorance. And having caused my share of ignorant destruction in this universe, I now commit to rebuild it.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    wormhole: `chivalry`,
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
                formType: OUTRO,
            },
            mainVerses: [
                {
                    mixTime: `3:47:07.73`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(dobro)`,
                    },
                },
            ],
        },
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `I stayed vegan for five years. I quit after moving to New York City because Sasha ate meat. I guess it's the nature of who I am that my personal identity will always be the first thing I jettison whenever a chance for romance is at stake. Still, these days I'm mostly vegetarian. It's both easier and healthier.`,
                    dotKeys: {
                        [AFTERWORD]: true,
                    },
                },
            },
        },
    ],
}
