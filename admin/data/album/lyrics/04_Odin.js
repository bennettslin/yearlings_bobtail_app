import {
    AFTERWORD,
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
    SOLO,
    OUTRO,
    FLASHBACK_TO_WORMHOLE_PREFIX,
    IS_UNIT_DOT,
    RESPONSE,
} from '../../../../app/constants/lyrics'

export default {
    path: 'odin',
    title: 'Odin',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     *
     * mST - mRT + pRT = pST
     * 2.2 - 6.361 + 559.438 => 555.277
     */
    referenceDescription: `Second middle A in measure 3`,
    mixReferenceTime: `0:06:10.84`,
    mixStartTime: `0:02:06.00`,
    playerReferenceTime: 559.438,
    playerStartTime: 555.277,
    todo: true,
    overview: `Taiwan showed me how differently I would have turned out had my parents not immigrated to America. Yet I was still worlds away from what Sasha needed me to be. Life seemed as infinitely fluid as it was immovably fixed, and I wasn't sure which extreme terrified me more. Our house cat Odin died of old age later that summer, just as I was working out my spiritual beliefs. And yet, the eternal life promised by faith seemed no less dreadful to me than the finality of death.`,
    isDoublespeaker: true,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `Odin, who was around before I was born, originally had a Taiwanese name. My sister and I anglicized it into the name of the`,
                        {
                            anchor: `Norse god`,
                            wiki: `Odin`,
                        },
                        `when we were older.`,
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
                    lyricCentre: `Mr. Odin died today.`,
                },
            ],
        },
        {
            unitMap: {
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `0:10:24.00`,
                    lyricLeft: `Lights off, from your`,
                    lyricRight: [
                        {
                            anchor: `By lot,`,
                            todo: true,
                            cards: [
                                {
                                    description: `Lots are drawn by chance to decide an outcome, and it was my lot not to be born a Jew.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: [
                                        `In the`,
                                        {
                                            anchor: `Book of Genesis,`,
                                            wiki: `Book_of_Genesis`,
                                        },
                                        {
                                            anchor: `"Lot"`,
                                            wiki: `Lot_(biblical_person)`,
                                        },
                                        `fled with his family from the wicked city of`,
                                        {
                                            anchor: `Sodom.`,
                                            wiki: `Sodom_and_Gomorrah`,
                                        },
                                        `When`,
                                        {
                                            anchor: `his wife`,
                                            wiki: `Lot's_wife`,
                                        },
                                        `looked back, she was turned into a pillar of salt. This story is understood by some to suggest that the faithful shall not cohabit with the fallen.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `once more`,
                    ],
                },
                {
                    mixTime: `0:12:20.60`,
                    lyricLeft: [
                        {
                            anchor: `hiding place of retreat`,
                            todo: true,
                            card: {
                                description: `The "asleep" voice in the doublespeaker set narrates a dream that confusedly melds the familiar settings of Los Angeles with the foreign sights of Taiwan. It begins with me coming out from the dusty crawl space beneath my bed at home. Having been absorbed in my drawings, I didn't realize I'd stayed down there well into nighttime.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `emerged.`,
                    ],
                    lyricRight: [
                        `trifling`,
                        {
                            anchor: `tref must reseed the earth.`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        isItalic: true,
                                        lyric: `Tref`,
                                    },
                                    `is`,
                                    {
                                        anchor: `Yiddish`,
                                        wiki: `Yiddish`,
                                    },
                                    `for anything that isn't`,
                                    {
                                        anchor: `kosher.`,
                                        wiki: `Kashrut`,
                                    },
                                    `There were certain everyday foods that Sasha wasn't meant to eat due to her faith, so it could be inferred that certain boys in her everyday life also weren't meant to be dated.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:16:02.50`,
                    lyricLeft: [
                        `This`,
                        {
                            anchor: `fridge's gallery in web's wake`,
                            todo: true,
                            card: {
                                description: `The cobwebs trailing from my clothes happen to snag some of my drawings that are attached to the refigerator, scattering them onto the floor.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `was strewn,`,
                    ],
                    lyricRight: [
                        {
                            anchor: `Indifferent galaxies`,
                            todo: true,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `Buddhism`,
                                        wiki: `Buddhism`,
                                    },
                                    `of my upbringing didn't make much sense to me, partly because it clashed with the various faiths of my classmates. At the same time, it didn't make any more sense for them to be right and my parents wrong. So with all beliefs equally suspect, I could only conceive of the universe as a limitless stretch of cold, empty space, in which we live and die to no greater concern.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `instead stay unmoved;`,
                    ],
                },
                {
                    mixTime: `0:19:03.06`,
                    lyricLeft: `silent poll of colors overused.`,
                    lyricRight: `sigh and pull the covers over you.`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `I wanted this song to capture the disorienting cycle between days among the foreign and dreams of the familiar. So I used a literary technique I invented called doublespeaker rhyme, in which two sets of lyrics that rhyme syllable for syllable are sung in harmony, one in each audio speaker. It's the musical version of a cinematic`,
                        {
                            anchor: `split screen.`,
                            wiki: `Split_screen_(video_production)`,
                        },
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
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `0:22:14.94`,
                    lyricLeft: `This latest piece`,
                    lyricRight: `In safest sleep,`,
                },
                {
                    mixTime: `0:24:22.86`,
                    lyricLeft: [
                        `you drew with`,
                        {
                            anchor: `crayons least whittled…`,
                            todo: true,
                            card: {
                                description: [
                                    `When we landed in Taiwan, my aunt gave me a set of`,
                                    {
                                        anchor: `pastels`,
                                        wiki: `Pastel`,
                                    },
                                    `as a gift. They were more powdery than crayons, which meant they ran out quickly. By the end of our trip, I was left with the least used colors. Similarly, being in Taiwan forced me to rely on my underused skills, like speaking Taiwanese.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `you`,
                        {
                            anchor: `ruminate on these riddles…`,
                            todo: true,
                            card: {
                                description: `The "awake" voice in the doublespeaker set echoes my thoughts as I lie on the floor mat, unable to sleep. While terrifying, the vastness of the universe also suggests unlimited possibilities. Yet somehow, being with Sasha is not among them.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `0:28:27.40`,
                    lyricLeft: [
                        `The`,
                        {
                            anchor: `house settled in sheets,`,
                            todo: true,
                            card: {
                                description: `The rest of the house is asleep, snug under their blankets. Of course, sheets are also pulled over the deceased.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: `But how dreadful indeed,`,
                },
                {
                    mixTime: `0:30:24.00`,
                    lyricLeft: `you swing the iron screen.`,
                    lyricRight: [
                        `do`,
                        {
                            anchor: `sweet dream's ichors`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `In Greek mythology,`,
                                        {
                                            anchor: `ichor`,
                                            wiki: `Ichor`,
                                        },
                                        `is the golden blood of the gods.`,
                                    ],
                                },
                                {
                                    description: `I dreaded sleep as a child. The nightly ordeal of swapping out my reasoned thoughts for irrational dreams felt as burdensome and frightening as a blood transfusion. And yet, things always seemed better in the morning because of it.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                        `seem!`,
                    ],
                },
                {
                    mixTime: `0:34:05.89`,
                    lyricLeft: [
                        `By the`,
                        {
                            anchor: `alabaster balustrade,`,
                            todo: true,
                            card: {
                                description: [
                                    `My impression of Taiwanese buildings at the time is that they made heavy use of iron grates and stone slabs. Even ordinary living quarters had the feel of a mausoleum adorned with`,
                                    {
                                        anchor: `alabaster`,
                                        wiki: `Alabaster`,
                                    },
                                    `carvings.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `Like a`,
                        {
                            anchor: `salamander`,
                            todo: true,
                            card: {
                                description: [
                                    `Writing doublespeaker rhyme was rather daunting, so I would challenge myself with fun exercises. One of these was to mention each of the four elementals of`,
                                    {
                                        anchor: `Paracelsus,`,
                                        wiki: `Paracelsus`,
                                    },
                                    `the 16th-century alchemist who believed that nature is made up of four elements, each personified by a mythical creature. The`,
                                    {
                                        anchor: `salamander`,
                                        wiki: `Salamanders_in_folklore_and_legend`,
                                    },
                                    `is the elemental of fire.`,
                                ],
                                dotKeys: {
                                    [SONGCRAFT]: true,
                                },
                            },
                        },
                        `shall await`,
                    ],
                },
                {
                    mixTime: `0:37:29.09`,
                    lyricLeft: [
                        `baby steps inch towards`,
                        {
                            anchor: `crevice rays.`,
                            todo: true,
                            card: {
                                description: `I especially dreaded bedtime in Taiwan because the lack of ambient light kept my grandmother's house pitch black all through the night. If I woke to use the bathroom, I had to tiptoe toward the door with only a sliver of moonlight peeking in from underneath to guide me.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        {
                            anchor: `trading breath's bliss`,
                            todo: true,
                            card: {
                                description: [
                                    `Like most`,
                                    {
                                        anchor: `amphibians,`,
                                        wiki: `Amphibian`,
                                    },
                                    {
                                        anchor: `salamanders`,
                                        wiki: `Salamander`,
                                    },
                                    `begin life underwater, then lose their gills and develop lungs to live on land. I always wondered if this process of`,
                                    {
                                        anchor: `metamorphosis`,
                                        wiki: `Metamorphosis`,
                                    },
                                    `feels as harrowing as it sounds, given how breathing becomes the new drowning and vice versa, with no explanation or warning. Because that's how falling asleep always came across to me.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `for present bane.`,
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
                    mixTime: `0:40:29.66`,
                    lyricLeft: [
                        `Then down`,
                        {
                            anchor: `stygian stairs,`,
                            todo: true,
                            card: {
                                description: [
                                    `In Greek mythology, the river`,
                                    {
                                        anchor: `Styx`,
                                        wiki: `Styx`,
                                    },
                                    `separates the realm of the living from the underworld. In my grandmother's house at night, the stairs leading down to the kitchen felt similarly foreboding.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: `And how stingy and scarce`,
                },
                {
                    mixTime: `0:42:14.94`,
                    lyricLeft: [
                        `through`,
                        {
                            anchor: `sickle-lit`,
                            todo: true,
                            card: {
                                description: [
                                    `The crescent moon is shaped like the blade of the scythe wielded by the`,
                                    {
                                        anchor: `Grim Reaper.`,
                                        wiki: `Death_(personification)`,
                                    },
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        {
                            anchor: `oriental`,
                            todo: true,
                            card: {
                                description: [
                                    `The word`,
                                    {
                                        anchor: `"Oriental"`,
                                        wiki: `Orient`,
                                    },
                                    `wasn't considered a pejorative when I was growing up. It's even printed on my birth certificate. I learned of its`,
                                    {
                                        anchor: `political incorrectness`,
                                        wiki: `Political_correctness`,
                                    },
                                    `during the same time when`,
                                    {
                                        anchor: `"queer"`,
                                        wiki: `Queer`,
                                    },
                                    `was being reclaimed by the`,
                                    {
                                        anchor: `gay community.`,
                                        wiki: `LGBT_community`,
                                    },
                                    `The latter approach always made more sense to me.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `streets.`,
                    ],
                    lyricRight: [
                        `proves`,
                        {
                            anchor: `shibboleth`,
                            todo: true,
                            card: {
                                description: [
                                    [
                                        `A`,
                                        {
                                            anchor: `shibboleth`,
                                            wiki: `Shibboleth`,
                                        },
                                        `is any signifier used to differentiate members of an ingroup from outsiders. The`,
                                        {
                                            anchor: `Book of Judges,`,
                                            wiki: `Book_of_Judges`,
                                        },
                                        `tells of a battle in which the warriors of an`,
                                        {
                                            anchor: `Israelite`,
                                            wiki: `Israelites`,
                                        },
                                        `tribe asked stragglers to pronounce the Hebrew word for a stream. Because the enemy tribe lacked the "sh" sound in their dialect, they outed themselves by pronouncing the word as "sibboleth," just as I do in the recording.`,
                                    ],
                                ],
                                dotKeys: {
                                    [SONGCRAFT]: true,
                                },
                            },
                        },
                        `for these`,
                        {
                            anchor: `gentle means!`,
                            todo: true,
                            card: {
                                description: [
                                    `Referring to myself here as a`,
                                    {
                                        anchor: `"Gentile,"`,
                                        wiki: `Gentile`,
                                    },
                                    `or non-Jew.`,
                                ],
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:46:08.15`,
                    lyricLeft: `Raccoons rummage round some rubbish bags,`,
                    lyricRight: [
                        `As you plummet down from`,
                        {
                            anchor: `couplets past;`,
                            todo: true,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `couplet`,
                                        wiki: `Couplet`,
                                    },
                                    `is a pair of lines in a poem that typically rhyme and share the same meter. Sasha and I were never a couple, of course. But perhaps we were a couplet?`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:49:08.71`,
                    lyricLeft: [
                        `till a`,
                        {
                            anchor: `rickshaw hiccoughs`,
                            todo: true,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `rickshaw`,
                                        wiki: `Rickshaw`,
                                    },
                                    `is a pedal-driven passenger vehicle. Here, the uneven surface of the road causes one to jounce abruptly.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `from grating cracks.`,
                    ],
                    lyricRight: [
                        `still, but`,
                        {
                            anchor: `missed bat mitzvahs`,
                            todo: true,
                            card: {
                                description: [
                                    `Being in Taiwan at the time, I was unable to attend Sasha's`,
                                    {
                                        anchor: `bat mitzvah,`,
                                        wiki: `Bar_and_Bat_Mitzvah`,
                                    },
                                    `a coming-of-age ritual undertaken by Jewish girls upon reaching twelve years of age.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `come racing back.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `While the two doublespeaker voices seem to proceed independently, each plants subtle ideas along the path of the other, much as our conscious thoughts affect our dreams and vice versa. In this stanza, for example, the mention of a staircase by the "asleep" voice precedes the plummeting spoken of by the "awake" voice.`,
                    dotKeys: {
                        [OBSERVATION]: true,
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
                    mixTime: `0:52:20.60`,
                    lyricLeft: [
                        `You seek the`,
                        {
                            anchor: `dunes once deemed a haven`,
                            todo: true,
                            card: {
                                description: [
                                    `The narrator in`,
                                    {
                                        anchor: `Herman Melville's`,
                                        wiki: `Herman_Melville`,
                                    },
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Moby-Dick`,
                                            wiki: `Moby-Dick`,
                                        },
                                    },
                                    `is an outcast like his namesake`,
                                    {
                                        anchor: `Ishmael,`,
                                        wiki: `Ishmael`,
                                    },
                                    `the first son of`,
                                    {
                                        anchor: `Abraham.`,
                                        wiki: `Abraham`,
                                    },
                                    `While the latter was banished to the desert, the former wanders the wilderness of the ocean. It is to these metaphorical dunes of the ocean that I now flee as well.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `To`,
                        {
                            anchor: `dreams of whom`,
                            card: {
                                wormhole: {
                                    wormholeKey: `dreams_of_whom`,
                                    wormholePrefix: FLASHBACK_TO_WORMHOLE_PREFIX,
                                },
                            },
                        },
                        `does each one cave in`,
                    ],
                },
                {
                    mixTime: `0:55:21.17`,
                    lyricLeft: [
                        `that was`,
                        {
                            anchor: `safe for a heathen…`,
                            todo: true,
                            card: {
                                description: `Being an illegitimate son, Ishmael could not inherit Abraham's house, but God promised to make him into a great nation. Coming from less favored lineage myself, I could only hope for similar recompense, as I was not to marry into Sasha's house.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [REFERENCE]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: `as a slave for the seasons?`,
                },
            ],
        },
        {
            unitMap: {
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `1:00:18.34`,
                    lyricLeft: `And if flutters with the fairest`,
                    lyricRight: [
                        `And if`,
                        {
                            anchor: `summer trips to Paris`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `At our middle school, students who completed two years of`,
                                        {
                                            anchor: `French`,
                                            wiki: `French_language`,
                                        },
                                        `were eligible to attend a summer program in the city of`,
                                        {
                                            anchor: `Paris.`,
                                            wiki: `Paris`,
                                        },
                                        `This excited Sasha, and so it excited me as well.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `In Greek mythology,`,
                                        {
                                            anchor: `Paris`,
                                            wiki: `Paris_(mythology)`,
                                        },
                                        `was the prince of`,
                                        {
                                            anchor: `Troy,`,
                                            wiki: `Troy`,
                                        },
                                        `whose elopement with`,
                                        {
                                            anchor: `Helen of Sparta`,
                                            wiki: `Helen_of_Troy`,
                                        },
                                        `began the`,
                                        {
                                            anchor: `Trojan War.`,
                                            wiki: `Trojan_War`,
                                        },
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `1:05:15.51`,
                    lyricLeft: `were just sins simply dreamt,`,
                    lyricRight: `weren't just myths between friends,`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `The drums were the one instrument for which I scored parts that were far more advanced than my own playing ability. So for this song, I had to try several workarounds. I ended up recording the kick, snare, and toms in separate takes from the cymbals.`,
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
                    mixTime: `1:08:27.40`,
                    // CONSIDER: Wormhole: Reference to insect in jar in Vegan Proclamation?
                    lyricLeft: `could some bottled butterfly`,
                    lyricRight: [
                        `would the`,
                        {
                            anchor: `rondel of her eye`,
                            todo: true,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `rondel`,
                                        wiki: `Rondel_(poem)`,
                                    },
                                    `is a verse form that originated in French poetry, but it can also refer to anything round, like a ball. The`,
                                    {
                                        anchor: `"apple of one's eye"`,
                                        wiki: `Apple_of_my_eye`,
                                    },
                                    `is an`,
                                    {
                                        anchor: `Old English`,
                                        wiki: `Old_English`,
                                    },
                                    `misreading of a`,
                                    {
                                        anchor: `Biblical Hebrew`,
                                        wiki: `Biblical_Hebrew`,
                                    },
                                    `idiom that more accurately translates to "ball of one's eye." My hope that I could be the object of Sasha's affection was based on a similar misreading.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:12:09.29`,
                    lyricLeft: {
                        anchor: `dream your whims instead?`,
                        todo: true,
                        card: {
                            description: [
                                `Uncertain of whether I am asleep or awake, I channel the ancient`,
                                {
                                    anchor: `Taoist`,
                                    wiki: `Taoism`,
                                },
                                `philosopher`,
                                {
                                    anchor: `Zhuangzi,`,
                                    wiki: `Zhuang_Zhou`,
                                },
                                `who mused that he couldn't be sure if he was a man who dreamt he was a butterfly, or a butterfly dreaming he is a man.`,
                            ],
                            dotKeys: {
                                [NARRATIVE]: true,
                            },
                        },
                    },
                    lyricRight: [
                        `be`,
                        {
                            anchor: `stored in this neck?`,
                            todo: true,
                            card: {
                                description: [
                                    `Due to another mistranslation, the phrase "man's swelling" in Biblical Hebrew entered the Western lexicon as`,
                                    {
                                        anchor: `"Adam's apple."`,
                                        wiki: `Adam's_apple`,
                                    },
                                    `And so an apocryphal tale was born that when`,
                                    {
                                        anchor: `Adam`,
                                        wiki: `Adam`,
                                    },
                                    `ate the`,
                                    {
                                        anchor: `forbidden fruit`,
                                        wiki: `Forbidden_fruit`,
                                    },
                                    `of knowledge, a piece lodged in his throat to mark all his descendants with a reminder of their`,
                                    {
                                        anchor: `original sin.`,
                                        wiki: `Original_sin`,
                                    },
                                    `Similarly, my knowledge of where I stood with Sasha left me to feel a permanent lump in my throat.`,
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
                formType: CHORUS,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `1:14:28.54`,
                    lyricLeft: `What's more, if all you live for`,
                    lyricRight: [
                        `But`,
                        {
                            anchor: `cored gifts fall to discord`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Eris`,
                                        wiki: `Eris_(mythology)`,
                                    },
                                    `was the Greek goddess of discord. As revenge for being denied invitation to a feast attended by the other gods, she tossed a golden apple labeled "for the fairest" into their midst. When Paris was asked to judge its rightful owner, he chose`,
                                    {
                                        anchor: `Aphrodite,`,
                                        wiki: `Aphrodite`,
                                    },
                                    `who rewarded him with the hand of Helen.`,
                                ],
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:18:10.41`,
                    lyricLeft: `still die at the end—`,
                    lyricRight: `till lives acquiesce,`,
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
                    mixTime: `1:21:22.30`,
                    lyricLeft: [
                        `like Odin's ashes back from`,
                        {
                            anchor: `the Society,`,
                            todo: true,
                            card: {
                                description: [
                                    `Odin's remains had been taken to the`,
                                    {
                                        anchor: `Humane Society,`,
                                        wiki: `The_Humane_Society_of_the_United_States`,
                                    },
                                    `which offers pet`,
                                    {
                                        anchor: `cremation`,
                                        wiki: `Cremation`,
                                    },
                                    `services.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `by`,
                        {
                            anchor: `opened latches`,
                            todo: true,
                            card: {
                                description: [
                                    `In Greek mythology,`,
                                    {
                                        anchor: `Pandora`,
                                        wiki: `Pandora`,
                                    },
                                    `was the first human woman. Upon opening a box given to her by`,
                                    {
                                        anchor: `Zeus`,
                                        wiki: `Zeus`,
                                    },
                                    `as a wedding gift, she unwittingly released all the evils that now plague humanity.`,
                                ],
                            },
                        },
                        `that come undone by`,
                        {
                            anchor: `undine—`,
                            todo: true,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `undine`,
                                        wiki: `Undine`,
                                    },
                                    `is a female nymph and the elemental of water. The term was coined by Paracelsus and is derived from the Latin word`,
                                    {
                                        isItalic: true,
                                        lyric: `unda,`,
                                    },
                                    `meaning "wave."`,
                                ],
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:25:26.83`,
                    lyricLeft: `which filled a chasm dug up underneath—`,
                    lyricRight: `which spilled a basket among other things—`,
                },
                {
                    mixTime: `1:28:27.40`,
                    lyricLeft: `can that which kills a cat`,
                    lyricRight: `a casket tilted back`,
                },
                {
                    mixTime: `1:30:24.00`,
                    lyricLeft: `spare his home if spread?`,
                    lyricRight: [
                        `where its`,
                        {
                            // CONSIDER: wormhole: Hope chest in M?
                            anchor: `hopeless rests.`,
                            todo: true,
                            card: {
                                description: `Hope was all that remained in Pandora's box. But upon having the hard truths of the world revealed to me by Sasha, I was left feeling as hopeless as ever.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `1:35:09.85`,
                    lyricLeft: `You researched a gleam`,
                    lyricRight: [
                        `Your`,
                        {
                            anchor: `seizures of spleen,`,
                            todo: true,
                            card: {
                                description: [
                                    `In`,
                                    {
                                        anchor: `Hippocratic medicine,`,
                                        wiki: `Humorism`,
                                    },
                                    `the spleen was thought to secrete black bile, the humor that induces melancholy. In modern parlance, however, the spleen is associated with a foul temper. My expressions of resentment toward the bullies, which I confided to Sasha, contained a bit of both.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:36:25.14`,
                    lyricLeft: [
                        `to be a`,
                        {
                            anchor: `guard's whistle`,
                            todo: true,
                            card: {
                                description: [
                                    `Standing on the ocean beach, I notice a steel whistle half buried in the sand, perhaps dropped by a`,
                                    {
                                        anchor: `lifeguard`,
                                        wiki: `Lifeguard`,
                                    },
                                    `earlier in the day. Its shrill cry once warned of danger, but now it lies forever silent. Which may be just as well, since some dangers come with no warning.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `at your feet,`,
                    ],
                    lyricRight: [
                        `you see the`,
                        {
                            anchor: `jarred sibyl`,
                            todo: true,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `Cumaean Sibyl`,
                                        wiki: `Cumaean_Sibyl`,
                                    },
                                    `was a Greek prophetess who was granted immortality but not eternal youth.`,
                                    {
                                        anchor: `T.S. Eliot's`,
                                        wiki: `T._S._Eliot`,
                                    },
                                    `poem`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `The Waste Land`,
                                            wiki: `The_Waste_Land`,
                                        },
                                    },
                                    `begins with an epigraph in which the Sibyl, hanging in a jar, is asked what she wants most. She replies that what she wants most is to die.`,
                                ],
                            },
                        },
                        `had foreseen`,
                    ],
                },
                {
                    mixTime: `1:40:18.34`,
                    lyricLeft: [
                        `and brought your raft behind the`,
                        {
                            anchor: `yellow-taped grills`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Barricade tape`,
                                        wiki: `Barricade_tape`,
                                    },
                                    `has been tied along the`,
                                    {
                                        anchor: `barbecue grills`,
                                        wiki: `Barbecue_grill`,
                                    },
                                    `that line the shore, in an effort to prevent beachgoers from wading into the shark-infested waters.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `as not for wrapping by a`,
                        {
                            anchor: `cellophane sylph,`,
                            todo: true,
                            cards: [
                                {
                                    description: `Like cellophane, Sasha's intentions were transparent. I could always count on her to sympathize during my bouts of frustration.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: [
                                        `In the works of Paracelsus, the`,
                                        {
                                            anchor: `sylph`,
                                            wiki: `Sylph`,
                                        },
                                        `is the elemental of air, often depicted as a fairy with wings of gauze.`,
                                    ],
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `1:44:00.23`,
                    lyricLeft: [
                        `to`,
                        {
                            anchor: `stand onshore`,
                            card: {
                                wormhole: `stand_onshore`,
                            },
                        },
                        `keen to drift`,
                    ],
                    lyricRight: `who cannot warm he who`,
                },
                {
                    mixTime: `1:46:08.15`,
                    lyricLeft: [
                        `if shark swarms withheld.`,
                    ],
                    lyricRight: [
                        {
                            anchor: `didn't impart warmth`,
                            // CONSIDER: Wormhole Foreshadow M?
                            todo: true,
                            card: {
                                description: `But also like cellophane, Sasha couldn't return warmth where none was present. As long as I couldn't be the better person in dealing with the bullies, there was a point where she needed to keep her distance from me as well.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `himself.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `Recording vocals in doublespeaker rhyme proved to be trickier than expected. When singing, we tend to delay or shorten syllables to adjust for phrasing and consonant clusters. So even when each voice in a doublespeaker set sounded fine on its own, the disjointed syllables would meld into a jumbled mush once heard together. To keep them in perfect sync, I ended up devising a system of notation that kind of looked like medieval`,
                        {
                            anchor: `ligature.`,
                            wiki: `Ligature_(music)`,
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
                formType: VERSES,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `1:47:23.44`,
                    lyricLeft: [
                        {
                            anchor: `Buoy bobs`,
                            todo: true,
                            card: {
                                description: `As buoys bob in an ocean filled with sea serpents, who's to say that this "boy" isn't also bobbing through life, oblivious to dangers lurking everywhere?`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `through sea serpents,`,
                    ],
                    lyricRight: `Coin toss to be hers from`,
                },
                {
                    mixTime: `1:49:20.04`,
                    lyricLeft: {
                        anchor: `shivering for shivs unsheathed.`,
                        todo: true,
                        cards: [
                            {
                                // CONSIDER: Wormhole Kyon for shank?
                                description: [
                                    `To wander a prison yard is to heed the constant danger of getting`,
                                    {
                                        anchor: 'shivved,',
                                        wiki: `Shiv_(weapon)`,
                                    },
                                    `or stabbed by a makeshift weapon. But I had to wonder how much this applied as a general rule, given that the schoolyard seemed to be preparing me for a lifetime of such vigilance.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                            {
                                wormhole: `chivalry`,
                            },
                        ],
                    },
                    lyricRight: {
                        anchor: `shivaree towards shivah seat`,
                        todo: true,
                        cards: [
                            {
                                description: [
                                    {
                                        anchor: `Shivaree`,
                                        wiki: `Charivari`,
                                    },
                                    `is a European folk custom in which a raucous crowd serenades a newlywed couple. Meanwhile, sitting`,
                                    {
                                        anchor: `shivah`,
                                        wiki: `Shiva_(Judaism)`,
                                    },
                                    `refers to a period of mourning in Judaism after a family member passes away. In other words, my bad luck not to be born Jewish has cost me any hope of spending a lifetime with Sasha from marriage until death.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                            {
                                wormhole: `chivalry`,
                            },
                        ],
                    },
                },
                {
                    mixTime: `1:52:20.60`,
                    lyricLeft: `As roller coasters of waves comfort sighs,`,
                    lyricRight: [
                        `has`,
                        {
                            anchor: `pulled your floater away`,
                            todo: true,
                            card: {
                                description: [
                                    `Pining after Sasha was like trying to stare at an off-center`,
                                    {
                                        anchor: `floater`,
                                        wiki: `Floater`,
                                    },
                                    `on the surface of my eye. Despite my frantic efforts to bring us closer, her inner world always remained a fixed distance apart from me.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `from your sight.`,
                    ],
                },
                {
                    mixTime: `1:55:21.17`,
                    lyricLeft: [
                        `you frame`,
                        {
                            anchor: `silhouettes of torn rides`,
                            todo: true,
                            card: {
                                description: [
                                    `Watching the waves of the ocean rise and fall, I recall the`,
                                    {
                                        anchor: `traveling carnivals`,
                                        wiki: `Traveling_carnival`,
                                    },
                                    `that came to town in my youth. Every summer, their amusement rides would rise up to reshape the skyline. And yet, they are now being dissembled in my memories with the same transience of ocean waves.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: `You chase till dew sheds from your eyes`,
                },
            ],
        },
        {
            unitMap: {
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `1:58:21.73`,
                    lyricLeft: `in your dim, lingering gaze,`,
                    lyricRight: `with your beleaguered remains,`,
                },
                {
                    mixTime: `2:01:22.30`,
                    lyricLeft: `a victim of erosion.`,
                    lyricRight: `amidst dustbunnies frozen.`,
                },
            ],
        },
        {
            unitMap: {
                formType: SOLO,
            },
            mainVerses: [
                {
                    mixTime: `2:05:15.51`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(slide electric guitar)`,
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: BRIDGE,
                subVerseType: RESPONSE,
            },
            mainVerses: [
                {
                    mixTime: `2:10:24.00`,
                    lyric: `Should you hide, or could you fight,`,
                },
                {
                    mixTime: `2:13:24.56`,
                    lyric: [
                        `when your`,
                        {
                            anchor: `day to die`,
                            todo: true,
                            card: {
                                description: [
                                    `As a child, I experienced`,
                                    {
                                        anchor: `night terrors`,
                                        wiki: `Night_terror`,
                                    },
                                    `related to my fear of death. Whenever I woke up screaming, my mother would comfort me with the promise of`,
                                    {
                                        anchor: `reincarnation.`,
                                        wiki: `Reincarnation`,
                                    },
                                    `But this confused me, since the end goal of Buddhism is`,
                                    {
                                        anchor: `nirvana,`,
                                        wiki: `Nirvana_(Buddhism)`,
                                    },
                                    `when the soul is annihilated and released from its cycle of rebirth. So being reborn again and again, but only up until my last life, just seemed like aging and dying on a grander scale.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `has come?`,
                    ],
                },
            ],
            subVerse: [
                {
                    mixTime: `2:16:25.14`,
                    lyric: [
                        `Can a`,
                        {
                            anchor: `holed up hostage`,
                            todo: true,
                            card: {
                                description: `And yet the thought of being stuck with a soul forever, an inescapable fate promised by the faiths of my classmates, seemed every bit as dreadful.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:18:21.73`,
                    lyric: [
                        `pray for`,
                        {
                            anchor: `soulless solace`,
                            // From Willy the Cocoa ("unsalvaged souls")
                            // But as a child, I came to a slightly different conclusion. If my brother and I could be so alike in physical makeup yet so different in mental presence, then it made more sense to believe that no one has a soul.
                            todo: true,
                            card: {
                                description: `I didn't understand why this business of consciousness was even necessary. Why couldn't living creatures simply fear death in the same way that oil is said to fear water?`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `and`,
                        {
                            anchor: `just play dumb?`,
                            todo: true,
                            card: {
                                description: `Neither heaven nor nirvana sounded all that pleasant, and yet they were the best that centuries of humanity could dream up. It seemed to me that if a true spiritual reward existed out there, its allure should be so self-evident that wanting to strive for it would be a no-brainer.`,
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
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `2:22:26.27`,
                    lyric: `But in time, wouldn't you find`,
                },
                {
                    mixTime: `2:25:26.83`,
                    lyric: `life is simply much too long?`,
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
                    mixTime: `2:28:27.40`,
                    lyricLeft: [
                        `But for a`,
                        {
                            // CONSIDER: Wormhole to Ash Wednesday?
                            anchor: `fetus force-fed,`,
                            todo: true,
                            card: {
                                description: `Most maddening of all was that one has no say in being brought into this world. Given how distressing the certainty of death must always be, it seemed like there should be an option to opt out of life to begin with.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `born preaborted,`,
                    ],
                    lyricRight: [
                        `Yet your`,
                        {
                            anchor: `defeat of tortoise,`,
                            todo: true,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `tortoise defeats the hare`,
                                        wiki: `The_Tortoise_and_the_Hare`,
                                    },
                                    `in`,
                                    {
                                        anchor: `Aesop's fable,`,
                                        wiki: `Aesop's_Fables`,
                                    },
                                    `but only because the hare falls asleep. Similarly, while tortoises are known to live over a century, I had them beat in longevity if I could just will myself to believe it.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `forced lead unthwarted,`,
                    ],
                },
                {
                    mixTime: `2:32:09.29`,
                    lyricLeft: `your ouija board said, "Son, just hum along."`,
                    lyricRight: `sworn feat aforesaid, doesn't come anon.`,
                },
            ],
        },
        {
            unitMap: {
                formType: SOLO,
            },
            mainVerses: [
                {
                    mixTime: `2:35:21.17`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(electric mandolin)`,
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
                    mixTime: `2:48:16.08`,
                    lyricLeft: [
                        `Though no`,
                        {
                            anchor: `slave parts these seas,`,
                            todo: true,
                            card: {
                                description: [
                                    `In the`,
                                    {
                                        anchor: `Book of Exodus,`,
                                        wiki: `Book_of_Exodus`,
                                    },
                                    {
                                        anchor: `Moses`,
                                        wiki: `Moses`,
                                    },
                                    `led the Israelites out of slavery in Egypt by`,
                                    {
                                        anchor: `parting the Red Sea,`,
                                        wiki: `Crossing_the_Red_Sea`,
                                    },
                                    `which allowed them to safely cross.`,
                                ],
                            },
                        },
                    ],
                    lyricRight: [
                        `Though, no`,
                        {
                            anchor: `gray starling's beak`,
                            card: {
                                wormhole: `gray_starling`,
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:51:05.32`,
                    lyricLeft: [
                        `then returns them as a`,
                        {
                            anchor: `buffer zone…`,
                            todo: true,
                            card: {
                                description: `The sea then closed behind Moses and the Israelites, drowning the Egyptian army in pursuit. Unfortunately, the certainty of death following me at every turn will not be overcome so easily.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true,
                                },
                            },
                        },
                    ],
                    // CONSIDER: Wormhole: Nora Barnacle in Good Night, Sita?
                    lyricRight: `can reach urchins smashed from undertows…`,
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
                    mixTime: `2:55:09.85`,
                    lyricLeft: [
                        `The sudsy ocean shapes its`,
                        {
                            anchor: `padded bed,`,
                            todo: true,
                            card: {
                                description: `As I make peace with the inevitable, the ocean begins to feel calm and inviting. But my dream is also ending, and I expect to wake soon in the comfort of my bed.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: `But suddenly Odin's day is at its end;`,
                },
                {
                    mixTime: `2:59:14.39`,
                    lyricLeft: `which hitherto snubbed and spurned a wreck,`,
                    lyricRight: [
                        {
                            anchor: `his litter`,
                            todo: true,
                            card: {
                                description: [
                                    `It isn't just Odin's unused`,
                                    {
                                        anchor: `cat litter`,
                                        wiki: `Litter_box`,
                                    },
                                    `that was swept aside; gone is any chance for him to sire a`,
                                    {
                                        anchor: `litter`,
                                        wiki: `Litter_(zoology)`,
                                    },
                                    `of his own. And so that makes two of us, given how unlikely I am to be made into a great nation any time soon.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `to dust and earth was swept,`,
                    ],
                },
                {
                    mixTime: `3:02:14.94`,
                    lyricLeft: [
                        `while`,
                        {
                            anchor: `mermaids smile`,
                            todo: true,
                            card: {
                                description: [
                                    `T.S. Eliot's`,
                                    {
                                        anchor: `"The Love Song of J. Alfred Prufrock"`,
                                        wiki: `The_Love_Song_of_J._Alfred_Prufrock`,
                                    },
                                    `examines themes of stunted growth and missed opportunities. The poem ends with the narrator bemoaning that while the mermaids may sing, they won't sing for him. Similarly, while my resignation has turned the fearsome sea serpents into smiling mermaids, they don't smile for me.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `while`,
                        {
                            anchor: `Thursday's child`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Wednesday`,
                                        wiki: `Wednesday`,
                                    },
                                    `means "Odin's day" in Old English, and I was born on a`,
                                    {
                                        anchor: `Thursday.`,
                                        wiki: `Thursday`,
                                    },
                                    `So my day literally begins where Odin's day ends.`,
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
                    mixTime: `3:04:00.23`,
                    lyricLeft: [
                        `past a`,
                        {
                            anchor: `guileless garden gnome…`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `gnome,`,
                                            wiki: `Gnome`,
                                        },
                                        `a small humanoid who lives underground, is the elemental of earth in Paracelsus's writings.`,
                                    ],
                                },
                                {
                                    description: [
                                        `Powerless to change my condition, I can only confront all that remains unknown. So like a`,
                                        {
                                            anchor: `garden gnome`,
                                            wiki: `Garden_gnome`,
                                        },
                                        `with feet firmly planted in the lawn grass, I stand motionless and grin faintly in hope for the future.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                    ],
                    lyricRight: [
                        `has a`,
                        {
                            anchor: `mile less far to go…`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `"Monday's Child"`,
                                        wiki: `Monday's_Child`,
                                    },
                                    `is a nursery rhyme that predicts a child's fortune based on their weekday of birth. Thursday's child is promised to have "far to go," and indeed, the distance I have left to cover feels depressingly vast. Still, I'm now one day closer than when the day began…`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                formType: OUTRO,
            },
            mainVerses: [
                {
                    mixTime: `3:08:27.40`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(fade out, Odin's theme)`,
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
                    description: [
                        `As it became clear that`,
                        {
                            isItalic: true,
                            lyric: `Yearling's Bobtail`,
                        },
                        `wouldn't get any attention from the indie press, I moved to New York City to regain my bearings. There, I reconnected with Sasha, and we started dating. She put me on the conversion path; I volunteered to study Hebrew. It was exactly the kind of self-reinvention I was hoping for, and for a while things were great. But we didn't last. Though I really wanted to mend my old ways, I guess my behavior lagged behind my intentions.`,
                    ],
                    dotKeys: {
                        [AFTERWORD]: true,
                    },
                },
            },
        },
    ],
}
