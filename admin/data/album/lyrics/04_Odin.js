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
    overview: `Taiwan showed me how different life would have been had my parents not immigrated to America. Yet I was still worlds away from what Sasha needed me to be. Life seemed as infinitely fluid as it was immovably fixed, and I wasn't sure which extreme terrified me more. Our house cat Odin died of old age later that summer, just as I was seeking spiritual answers for my mortality. And yet, the eternal life promised by faith seemed no less terrifying than the finality of death.`,
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
                    lyricCentre: {
                        isItalic: true,
                        lyric: `Mr. Odin died today.`,
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
                    mixTime: `0:10:24.00`,
                    lyricLeft: `Lights off, from your`,
                    lyricRight: [
                        {
                            anchor: `By lot`,
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
                                            anchor: `Book of Genesis`,
                                            wiki: `Book_of_Genesis`,
                                        },
                                        `, "`,
                                        {
                                            anchor: `Lot`,
                                            wiki: `Lot_(biblical_person)`,
                                        },
                                        `" fled with his family from the wicked city of`,
                                        {
                                            anchor: `Sodom`,
                                            wiki: `Sodom_and_Gomorrah`,
                                        },
                                        `. When`,
                                        {
                                            anchor: `his wife`,
                                            wiki: `Lot's_wife`,
                                        },
                                        `looked back, she was turned into a pillar of salt. This story can be interpreted as a cautionary tale warning the faithful not to cohabit with the fallen.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `, once more`,
                    ],
                },
                {
                    mixTime: `0:12:20.60`,
                    lyricLeft: [
                        {
                            anchor: `hiding place of retreat`,
                            card: {
                                description: `The "asleep" voice in the doublespeaker set narrates a dream that confusedly melds the familiar setting of Los Angeles with the foreign sights of Taiwan. The dream begins with me crawling out from the dusty space beneath my bed at home. Having been absorbed in my drawings, I'd stayed down there well into nighttime.`,
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
                            anchor: `tref must reseed the earth`,
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
                                        anchor: `kosher`,
                                        wiki: `Kashrut`,
                                    },
                                    `. In Sasha's world, certain everyday foods weren't meant to be eaten. It could then be inferred that certain boys in her everyday life also weren't meant to be dated.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:16:02.50`,
                    lyricLeft: [
                        `This`,
                        {
                            anchor: `fridge's gallery in web's wake`,
                            card: {
                                description: `The cobwebs trailing from my clothes happen to snag some drawings of mine that were attached to the refrigerator, scattering them onto the floor.`,
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
                card: {
                    description: [
                        `For this song, I wanted to capture the disorienting cycle between days spent living among the foreign and nights spent dreaming of the familiar. So I used a literary technique I invented called doublespeaker rhyme, in which two sets of lyrics that rhyme syllable for syllable are panned hard to separate speakers in the recording. It's the audio version of a cinematic`,
                        {
                            anchor: `split screen`,
                            wiki: `Split_screen_(video_production)`,
                        },
                        `.`,
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
                            anchor: `crayons least whittled`,
                            card: {
                                description: [
                                    `When we landed in Taiwan, my aunt gave me a set of`,
                                    {
                                        anchor: `pastels`,
                                        wiki: `Pastel`,
                                    },
                                    `as a gift. They were more powdery than crayons and thus ran out quickly. By the end of our trip, I had to make do with the least used colors. Similarly, being in Taiwan kept me in a perpetual state of discomfort, as I was forced to rely on underused skills like speaking Taiwanese.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `…`,
                    ],
                    lyricRight: [
                        `you`,
                        {
                            anchor: `ruminate on these riddles`,
                            todo: true,
                            card: {
                                description: `The "awake" voice in the doublespeaker set echoes my thoughts as I lie on the floor mat, unable to sleep. The terrifying vastness of the universe suggests unlimited possibilities. And yet somehow, being with Sasha is not one of them.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `0:28:27.40`,
                    lyricLeft: [
                        `The`,
                        {
                            anchor: `house settled in sheets`,
                            card: {
                                description: `Everyone else in the house is asleep, snug under their blankets. Of course, sheets are also used to cover the deceased.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `,`,
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
                            cards: [
                                {
                                    description: `As a child, I dreaded sleep. The nightly ordeal of swapping out my reasoned thoughts for irrational dreams felt as burdensome and frightening as a blood transfusion. And yet, things always seemed better in the morning because of it.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
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
                            anchor: `alabaster balustrade`,
                            card: {
                                description: [
                                    `Taiwanese buildings at the time made heavy use of iron bars and stone slabs, as far as my impression goes. Even ordinary living quarters had the feel of a mausoleum adorned with`,
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
                        `,`,
                    ],
                    lyricRight: [
                        `Like a`,
                        {
                            anchor: `salamander`,
                            card: {
                                description: [
                                    `Writing doublespeaker rhyme was pretty daunting, so I would come up with random challenges for myself. One challenge for this song was to mention each of the four elementals of`,
                                    {
                                        anchor: `Paracelsus`,
                                        wiki: `Paracelsus`,
                                    },
                                    `, the 16th-century alchemist who believed that nature is made up of four elements, each personified by a mythical creature. The`,
                                    {
                                        anchor: `salamander`,
                                        wiki: `Salamanders_in_folklore`,
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
                            anchor: `crevice rays`,
                            card: {
                                description: `My grandmother's house at night was pitch black. When I woke to use the bathroom, I had to tiptoe to the door with only a sliver of moonlight peeking in from underneath to guide me.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                    lyricRight: [
                        {
                            // TODO: Metamorphosis wormhole?
                            anchor: `trading breath's bliss`,
                            card: {
                                description: [
                                    `Like most`,
                                    {
                                        anchor: `amphibians`,
                                        wiki: `Amphibian`,
                                    },
                                    `,`,
                                    {
                                        anchor: `salamanders`,
                                        wiki: `Salamander`,
                                    },
                                    `begin life underwater, then lose their gills and develop lungs to live on land. I always wondered if this process of`,
                                    {
                                        anchor: `metamorphosis`,
                                        wiki: `Metamorphosis`,
                                    },
                                    `feels as harrowing as it sounds, when breathing becomes the new drowning with no explanation or warning. Because that's what falling asleep always seemed like to me.`,
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
                            anchor: `stygian stairs`,
                            card: {
                                description: [
                                    `In Greek mythology, the river`,
                                    {
                                        anchor: `Styx`,
                                        wiki: `Styx`,
                                    },
                                    `separates the realm of the living from the underworld. In my grandmother's house at night, the stairs leading down to the first floor were similarly foreboding.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                    lyricRight: `And how stingy and scarce`,
                },
                {
                    mixTime: `0:42:14.94`,
                    lyricLeft: [
                        `through`,
                        {
                            anchor: `sickle-lit`,
                            card: {
                                description: [
                                    `The crescent moon is shaped like the blade of the scythe wielded by the`,
                                    {
                                        anchor: `Grim Reaper`,
                                        wiki: `Death_(personification)`,
                                    },
                                    `.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        {
                            anchor: `oriental`,
                            card: {
                                description: [
                                    `The word "`,
                                    {
                                        anchor: `Oriental`,
                                        wiki: `Orient`,
                                    },
                                    `" wasn't a pejorative when I was growing up. It's even printed on my birth certificate. It became`,
                                    {
                                        anchor: `politically incorrect`,
                                        wiki: `Political_correctness`,
                                    },
                                    `at around the same time that "`,
                                    {
                                        anchor: `queer`,
                                        wiki: `Queer`,
                                    },
                                    `" was being reclaimed by the`,
                                    {
                                        anchor: `gay community`,
                                        wiki: `LGBT_community`,
                                    },
                                    `. The latter tactic always made more sense to me.`,
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
                                        `is any signifier that distinguishes an ingroup. The`,
                                        {
                                            anchor: `Book of Judges`,
                                            wiki: `Book_of_Judges`,
                                        },
                                        `tells of a battle in which`,
                                        {
                                            anchor: `Israelite`,
                                            wiki: `Israelites`,
                                        },
                                        `warriors scoured the plains after their victory, asking stragglers to pronounce the`,
                                        {
                                            anchor: `Hebrew`,
                                            wiki: `Hebrew_language`,
                                        },
                                        `word for a stream. Because the enemy tribe lacked the "sh" sound in their dialect, they would out themselves by pronouncing the word as "sibboleth," just as I do here in the recording.`,
                                    ],
                                ],
                                dotKeys: {
                                    [SONGCRAFT]: true,
                                },
                            },
                        },
                        `for these`,
                        {
                            anchor: `gentle means`,
                            card: {
                                description: [
                                    `Referring to myself here as a "`,
                                    {
                                        anchor: `Gentile`,
                                        wiki: `Gentile`,
                                    },
                                    `," or non-Jew.`,
                                ],
                                dotKeys: {
                                    [PUN]: true,
                                },
                            },
                        },
                        `!`,
                    ],
                },
                {
                    mixTime: `0:46:08.15`,
                    lyricLeft: `Raccoons rummage round some rubbish bags,`,
                    lyricRight: [
                        `As you plummet down from`,
                        {
                            anchor: `couplets past`,
                            card: {
                                description: [
                                    `In poetry, a`,
                                    {
                                        anchor: `couplet`,
                                        wiki: `Couplet`,
                                    },
                                    `is a pair of lines that share the same meter and typically rhyme. Sasha and I were never a couple, of course. But perhaps we were a couplet?`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `;`,
                    ],
                },
                {
                    mixTime: `0:49:08.71`,
                    lyricLeft: [
                        `till a`,
                        {
                            anchor: `rickshaw hiccoughs`,
                            card: {
                                description: [
                                    `As I wander outside in my dream, the uneven surface of the road causes a passing`,
                                    {
                                        anchor: `rickshaw`,
                                        wiki: `Rickshaw`,
                                    },
                                    `to jounce abruptly.`,
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
                            cards: [
                                {
                                    description: [
                                        `Being in Taiwan at the time, I was unable to attend Sasha's bat mitzvah party.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `bat mitzvah`,
                                            wiki: `Bar_and_Bat_Mitzvah`,
                                        },
                                        `is a coming-of-age ritual for Jewish girls who've reached twelve years of age.`,
                                    ],
                                },
                            ],
                        },
                        `come racing back.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    // TODO: Or bottled butterfly and jarred sibyl.
                    description: `While the two doublespeaker voices proceed independently, they plant subtle ideas along each other's path, much as our conscious thoughts affect our dreams and vice versa. In this stanza, for example, the mention of a staircase by the "asleep" voice precedes the plummeting spoken of by the "awake" voice.`,
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
                            card: {
                                description: [
                                    `The narrator in`,
                                    {
                                        anchor: `Herman Melville`,
                                        wiki: `Herman_Melville`,
                                    },
                                    `'s`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Moby-Dick`,
                                            wiki: `Moby-Dick`,
                                        },
                                    },
                                    `is an outcast like his namesake`,
                                    {
                                        anchor: `Ishmael`,
                                        wiki: `Ishmael`,
                                    },
                                    `. While the latter was banished to the desert, the former wanders the wilderness of the ocean. It is to these metaphorical dunes of the ocean that I now flee as well.`,
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
                            anchor: `safe for a heathen`,
                            card: {
                                description: [
                                    `Being an illegitimate son, Ishmael was not to inherit the house of`,
                                    {
                                        anchor: `Abraham`,
                                        wiki: `Abraham`,
                                    },
                                    `, but God promised to make him into a great nation. Coming from less favored lineage myself, I could only hope for similar recompense, as I was not to marry into Sasha's house.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `…`,
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
                                            anchor: `Paris`,
                                            wiki: `Paris`,
                                        },
                                        `. This excited Sasha, and so it excited me as well.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `In Greek mythology, the`,
                                        {
                                            anchor: `Trojan War`,
                                            wiki: `Trojan_War`,
                                        },
                                        `began when`,
                                        {
                                            anchor: `Paris`,
                                            wiki: `Paris_(mythology)`,
                                        },
                                        `, the prince of Troy,`,
                                        `eloped with`,
                                        {
                                            anchor: `Helen of Sparta`,
                                            wiki: `Helen_of_Troy`,
                                        },
                                        `.`,
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
                card: {
                    description: [
                        `Since the`,
                        {
                            anchor: `drum`,
                            wiki: `Drum_kit`,
                        },
                        `parts I scored for this song were far more advanced than what I could play, I had to try several workarounds. I ended up recording the kick, snare, and toms in separate takes from the cymbals.`,
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
                    mixTime: `1:08:27.40`,
                    lyricLeft: [
                        `could some`,
                        {
                            anchor: `bottled butterfly`,
                            card: {
                                wormhole: {
                                    wormholeKey: `bottled_insect`,
                                    wormholePrefix: FLASHBACK_TO_WORMHOLE_PREFIX,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `would the`,
                        {
                            anchor: `rondel of her eye`,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `rondel`,
                                        wiki: `Rondel_(poem)`,
                                    },
                                    `is a verse form that originated in French poetry, but it can also refer to any round object, like a ball. "`,
                                    {
                                        anchor: `The apple of one's eye`,
                                        wiki: `Apple_of_my_eye`,
                                    },
                                    `" is an`,
                                    {
                                        anchor: `Old English`,
                                        wiki: `Old_English`,
                                    },
                                    `misreading of a`,
                                    {
                                        anchor: `Biblical Hebrew`,
                                        wiki: `Biblical_Hebrew`,
                                    },
                                    `idiom that more accurately translates to "the ball of one's eye." My hope that I could be the object of Sasha's affection was based on a similar misreading.`,
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
                    lyricLeft: [
                        {
                            anchor: `dream your whims instead`,
                            card: {
                                description: [
                                    `Uncertain of whether I'm asleep or awake, I recall the`,
                                    {
                                        anchor: `Taoist`,
                                        wiki: `Taoism`,
                                    },
                                    `philosopher`,
                                    {
                                        anchor: `Zhuangzi`,
                                        wiki: `Zhuang_Zhou`,
                                    },
                                    `, who couldn't be sure upon waking from a dream if he was then a man dreaming he was a butterfly, or now a butterfly dreaming he is a man.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `?`,
                    ],
                    lyricRight: [
                        `be`,
                        {
                            anchor: `stored in this neck`,
                            card: {
                                description: [
                                    `Due to another misreading, the phrase "man's swelling" in Biblical Hebrew entered the Western lexicon as "`,
                                    {
                                        anchor: `Adam's apple`,
                                        wiki: `Adam's_apple`,
                                    },
                                    `." And so an apocryphal tale began that when`,
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
                                        anchor: `original sin`,
                                        wiki: `Original_sin`,
                                    },
                                    `. Similarly, my knowledge of where I stood with Sasha left me to feel a permanent lump in my throat.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
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
                            card: {
                                description: [
                                    {
                                        anchor: `Eris`,
                                        wiki: `Eris_(mythology)`,
                                    },
                                    `was the Greek goddess of discord. As revenge for being denied invitation to a feast attended by the other gods, she tossed a golden apple labeled "for the fairest" into their midst. When Paris was asked to judge its rightful owner, he chose`,
                                    {
                                        anchor: `Aphrodite`,
                                        wiki: `Aphrodite`,
                                    },
                                    `, who rewarded him with the hand of Helen.`,
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
                            anchor: `the Society`,
                            card: {
                                description: [
                                    `Odin's remains were taken to the`,
                                    {
                                        anchor: `Humane Society`,
                                        wiki: `The_Humane_Society_of_the_United_States`,
                                    },
                                    `, which offers pet`,
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
                        `,`,
                    ],
                    lyricRight: [
                        `by`,
                        {
                            anchor: `opened latches`,
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
                            anchor: `undine`,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `undine`,
                                        wiki: `Undine`,
                                    },
                                    `is a female nymph and the Paracelsian elemental of water. The term is derived from the Latin word`,
                                    {
                                        isItalic: true,
                                        lyric: `unda`,
                                    },
                                    `, meaning "wave."`,
                                ],
                            },
                        },
                        `—`,
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
                            anchor: `hopeless rests`,
                            todo: true,
                            cards: [
                                {
                                    description: `Hope was all that remained in Pandora's box. But upon having the hard truths of the world revealed to me by Sasha, I'm just left to feel as hopeless as ever.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [REFERENCE]: true,
                                    },
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `hope_chest`,
                                        wormholePrefix: FLASHBACK_TO_WORMHOLE_PREFIX,
                                    },
                                },
                            ],
                        },
                        `.`,
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
                            anchor: `seizures of spleen`,
                            todo: true,
                            card: {
                                description: [
                                    `In`,
                                    {
                                        anchor: `Hippocratic medicine`,
                                        wiki: `Humorism`,
                                    },
                                    `, the spleen was thought to secrete black bile, the humor that induces melancholy. In modern parlance, however, the spleen is associated with a foul temper. The expressions of resentment toward the bullies that I confided to Sasha were both sad and bitter in nature.`,
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
                    mixTime: `1:36:25.14`,
                    lyricLeft: [
                        `to be a`,
                        {
                            anchor: `guard's whistle`,
                            todo: true,
                            card: {
                                description: [
                                    `Wandering the beach, I notice a steel whistle half buried in the sand, possibly dropped by a`,
                                    {
                                        anchor: `lifeguard`,
                                        wiki: `Lifeguard`,
                                    },
                                    `earlier in the day. Its shrill cry once warned of danger, but now it lies forever silent. Even in dreams, some dangers must come without warning.`,
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
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `Cumaean Sibyl`,
                                        wiki: `Cumaean_Sibyl`,
                                    },
                                    `was a Greek prophetess who was granted immortality but not eternal youth.`,
                                    {
                                        anchor: `T.S. Eliot`,
                                        wiki: `T._S._Eliot`,
                                    },
                                    `'s poem`,
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
                            card: {
                                description: [
                                    `To prevent beachgoers from wading in the shark-infested waters,`,
                                    {
                                        anchor: `barricade tape`,
                                        wiki: `Barricade_tape`,
                                    },
                                    `has been tied along the`,
                                    {
                                        anchor: `barbecue grills`,
                                        wiki: `Barbecue_grill`,
                                    },
                                    `that line the shore.`,
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
                            anchor: `cellophane sylph`,
                            cards: [
                                {
                                    description: `Like cellophane, Sasha's intentions were transparent. I could always count on her to sympathize during my bouts of frustration.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: [
                                        `In the writings of Paracelsus, the`,
                                        {
                                            anchor: `sylph`,
                                            wiki: `Sylph`,
                                        },
                                        `is the elemental of air, often depicted as a fairy with wings of gauze.`,
                                    ],
                                },
                            ],
                        },
                        `,`,
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
                            todo: true,
                            card: {
                                description: `But also like cellophane, Sasha couldn't reflect warmth where none was present. If I couldn't be the better person in dealing with the bullies, then there came a point where she needed to keep her distance from me as well.`,
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
                card: {
                    description: [
                        `Recording vocals in doublespeaker rhyme proved to be trickier than expected. When singing, we tend to delay or shorten syllables to adjust for phrasing and consonant clusters. So even when each voice in a doublespeaker set sounded fine on its own, the disjointed syllables would meld into a jumbled mush once heard together. To keep them in perfect sync, I ended up devising a system of notation that looked like medieval`,
                        {
                            anchor: `ligature`,
                            wiki: `Ligature_(music)`,
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
                formType: VERSES,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `1:47:23.44`,
                    lyricLeft: [
                        {
                            anchor: `Buoy bobs`,
                            card: {
                                description: `As buoys bob in an ocean filled with sea serpents, who's to say that this "boy" isn't also bobbing through life, oblivious to dangers lurking everywhere?`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                    lyricLeft: [
                        {
                            anchor: `shivering for shivs unsheathed`,
                            todo: true,
                            cards: [
                                {
                                    // CONSIDER: Wormhole Kyon for shank? Needs to allow for multiple wormhole keys first.
                                    description: [
                                        `Those who wander a prison yard must be on constant guard against getting`,
                                        {
                                            anchor: 'shivved',
                                            wiki: `Shiv_(weapon)`,
                                        },
                                        `, or stabbed by a makeshift weapon. Lucky for me, the schoolyard was already preparing me for a lifetime of such vigilance.`,
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
                        `.`,
                    ],
                    lyricRight: {
                        anchor: `shivaree towards shivah seat`,
                        cards: [
                            {
                                description: [
                                    {
                                        anchor: `Shivaree`,
                                        wiki: `Charivari`,
                                    },
                                    `is a European folk custom in which a raucous crowd serenades a newlywed couple. And sitting`,
                                    {
                                        anchor: `shivah`,
                                        wiki: `Shiva_(Judaism)`,
                                    },
                                    `refers to a period of mourning in Judaism after a family member passes away. My bad luck not to be born Jewish, in other words, has cost me any hope of spending a lifetime with Sasha from marriage until death.`,
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
                            card: {
                                description: [
                                    `Watching the waves of the ocean rise and fall, I recall the`,
                                    {
                                        anchor: `traveling carnivals`,
                                        wiki: `Traveling_carnival`,
                                    },
                                    `that came to town in my youth. Every summer, their amusement rides would rise up to reshape the skyline. And yet, they are now being dissembled in my memories with the transience of ocean waves.`,
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
                                    `As a child, I suffered from`,
                                    {
                                        anchor: `night terrors`,
                                        wiki: `Night_terror`,
                                    },
                                    `related to my fear of death. My mother would try to comfort me with the promise of`,
                                    {
                                        anchor: `reincarnation`,
                                        wiki: `Reincarnation`,
                                    },
                                    `. But this just scared me further, since the end goal of Buddhism is to`,
                                    {
                                        isEmphasis: true,
                                        lyric: `escape`,
                                    },
                                    `the cycle of rebirth. Being reborn again and again, but only up until my last life, was just aging and dying on a grander scale.`,
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
                            card: {
                                description: `And yet the thought of being stuck with a soul forever, an inescapable fate promised by the faiths of my classmates, seemed no less dreadful.`,
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
                                description: `I knew that humans need to fear death to ensure their survival. But what I didn't understand is why it has to be done consciously. Why couldn't we just fear death the same way that oil is said to fear water?`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `and`,
                        {
                            anchor: `just play dumb`,
                            todo: true,
                            card: {
                                description: [
                                    `Neither heaven nor`,
                                    {
                                        anchor: `nirvana`,
                                        wiki: `Nirvana`,
                                    },
                                    `sounded all that pleasant, and yet they were the best offers available. It just seemed to me that if we were meant to know which afterlife to strive for, then its appeal would be self-evident. Why wouldn't the correct spiritual path be obvious to even the most thickheaded child?`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
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
                            anchor: `fetus force-fed`,
                            todo: true,
                            cards: [
                                {
                                    description: `Most maddening of all was that one has no say in being brought into this world. Given how distressing the certainty of death must always be, it seemed like there should be an option to opt out to begin with.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `born_cursed`,
                                        wormholePrefix: FLASHBACK_TO_WORMHOLE_PREFIX,
                                    },
                                },
                            ],
                        },
                        `, born preaborted,`,
                    ],
                    lyricRight: [
                        `Yet your`,
                        {
                            anchor: `defeat of tortoise`,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `tortoise defeats the hare`,
                                        wiki: `The_Tortoise_and_the_Hare`,
                                    },
                                    `in`,
                                    {
                                        anchor: `Aesop's fable`,
                                        wiki: `Aesop's_Fables`,
                                    },
                                    `, but only because the hare falls asleep. Similarly, while tortoises are known to live for over a century, I had them beat in longevity if I could just will myself to believe it.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, forced lead unthwarted,`,
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
                            anchor: `slave parts these seas`,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `Book of Exodus`,
                                        wiki: `Book_of_Exodus`,
                                    },
                                    `tells of how`,
                                    {
                                        anchor: `Moses`,
                                        wiki: `Moses`,
                                    },
                                    `led the Israelites out of slavery. By`,
                                    {
                                        anchor: `parting the Red Sea`,
                                        wiki: `Crossing_the_Red_Sea`,
                                    },
                                    `, he allowed them to safely cross and escape Egypt.`,
                                ],
                            },
                        },
                        `,`,
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
                            anchor: `buffer zone`,
                            card: {
                                description: `The sea closed behind Moses and the Israelites, drowning the Egyptian army in pursuit. Unfortunately, the certainty of death following me at every turn can't be overcome so easily.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true,
                                },
                            },
                        },
                        `…`,
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
                            anchor: `padded bed`,
                            card: {
                                description: `As I make peace with the inevitable, the ocean begins to feel calm and inviting. But my dream is also ending, and I expect to wake soon in the comfort of my bed.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `,`,
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
                                    `that was swept aside. Gone is any chance for him to sire a`,
                                    {
                                        anchor: `litter`,
                                        wiki: `Litter_(zoology)`,
                                    },
                                    `of his own, in a world that remembers only those who were made into a great nation.`,
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
                                    `T.S. Eliot's "`,
                                    {
                                        anchor: `The Love Song of J. Alfred Prufrock`,
                                        wiki: `The_Love_Song_of_J._Alfred_Prufrock`,
                                    },
                                    `" examines themes of stunted growth and missed opportunities. The poem ends with the narrator bemoaning that while the mermaids may sing, they won't sing for him. And while my resignation has turned the fearsome sea serpents into smiling mermaids, they still don't smile for me.`,
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
                            card: {
                                description: [
                                    {
                                        anchor: `Wednesday`,
                                        wiki: `Wednesday`,
                                    },
                                    `means "Odin's day" in Old English, and I was born on a`,
                                    {
                                        anchor: `Thursday`,
                                        wiki: `Thursday`,
                                    },
                                    `. So my day literally begins where Odin's day ends.`,
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
                            anchor: `guileless garden gnome`,
                            cards: [
                                {
                                    description: [
                                        `The`,
                                        {
                                            anchor: `gnome`,
                                            wiki: `Gnome`,
                                        },
                                        `, a small humanoid who lives underground, is the Paracelsian elemental of earth.`,
                                    ],
                                },
                                {
                                    description: [
                                        `Powerless to change my condition, I can only confront all that remains unknown. Like a`,
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
                        `…`,
                    ],
                    lyricRight: [
                        `has a`,
                        {
                            anchor: `mile less far to go`,
                            card: {
                                description: [
                                    `"`,
                                    {
                                        anchor: `Monday's Child`,
                                        wiki: `Monday's_Child`,
                                    },
                                    `" is a nursery rhyme that predicts a child's fortune based on their weekday of birth. As Thursday's child, I'm promised to have "far to go," and indeed, the distance I have left to cover feels depressingly vast. Still, I'm now one day closer than when the day began…`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                card: {
                    description: [
                        `As it became clear that`,
                        {
                            isItalic: true,
                            lyric: `Yearling's Bobtail`,
                        },
                        `wouldn't get any attention from the indie press, I moved to`,
                        {
                            anchor: `New York City`,
                            wiki: `New_York_City`,
                        },
                        `to regain my bearings. There, I reconnected with Sasha, and we started dating. She put me on the conversion path, while I volunteered to study Hebrew. It was exactly the all-consuming self-reinvention I was hoping for. But we didn't last. Though I really wanted to mend my old ways, my behavior lagged behind my intentions.`,
                    ],
                    dotKeys: {
                        [AFTERWORD]: true,
                    },
                },
            },
        },
    ],
}
