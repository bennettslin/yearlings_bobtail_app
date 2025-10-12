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
    BRIDGE,
    INTRO,
    SOLO,
    OUTRO,
    FLASHBACK_TO_WORMHOLE_PREFIX,
    IS_UNIT_DOT,
    RESPONSE,
} from '../../../../src/constants/lyrics'
import { REVIEW } from '../../../containers/Annotations/constants/todos'

export default {
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
    overview: `Taiwan showed me how differently I might've turned out had my parents not come to America… even as I was still worlds away from what Sasha needed me to be. Life seemed both infinitely fluid and immovably fixed, and I wasn't sure which extreme frightened me more. Later that summer, when our house cat Odin died of old age, I sought spiritual explanations for my mortality. The finality of death was terrifying, after all— and yet, the eternal life promised by faith didn't feel any less so.`,
    isDoublespeaker: true,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Odin, who was around before I was born, originally had a Taiwanese name. My sister and I anglicized it to the name of the`,
                        {
                            anchor: `Norse god`,
                            wiki: `Odin`,
                        },
                        `once we were older.`,
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
                                        `. When his wife looked back, she was turned into a pillar of salt— a cautionary tale, some might say, warning the faithful never to cohabit with the fallen.`,
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
                                description: `The "asleep" voice of this doublespeaker pair narrates a dream that takes the familiar setting of Los Angeles, and melds it with the foreign sights of Taiwan: It begins with me coming out from the hiding place underneath my bed at home, having been absorbed in my drawings well into nighttime.`,
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
                            card: {
                                description: [
                                    {
                                        isItalic: true,
                                        lyric: `Tref`,
                                    },
                                    `is Yiddish for anything that isn't`,
                                    {
                                        anchor: `kosher`,
                                        wiki: `Kashrut`,
                                    },
                                    `. In Sasha's world, certain everyday foods weren't meant to be eaten. One could then infer that certain boys in her everyday life weren't whom she was meant to date…`,
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
                                description: `Attached to the refrigerator are some recent drawings of mine. As I pass by, they cling to the cobwebs trailing from my clothes, scattering onto the floor.`,
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
                                description: `The Buddhism of my upbringing didn't make much sense to me, partly because it clashed with the various faiths of my classmates. At the same time, it didn't make any more sense for them to be right, and my parents wrong. With all beliefs equally suspect, then, I could only conceive of the universe as a limitless expanse of cold, empty space— in which we live and die to no greater concern.`,
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
                        `Being in Taiwan was a blurry cycle between days among the foreign, and nights spent dreaming of the familiar. To capture this dichotomy, I invented doublespeaker rhyme— a literary technique in which two columns of lyrics, made to rhyme syllable for syllable, are sung in harmony. Each voice is then isolated to its own speaker in the stereo mix, creating the audio version of a cinematic`,
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
                                    `When we landed in Taiwan, my aunt presented me with a box of`,
                                    {
                                        anchor: `pastels`,
                                        wiki: `Pastel`,
                                    },
                                    `. They crumbled more easily than crayons, and thus ran out more quickly; eventually I had to make do with the least used colors. I thought this was a fitting metaphor for my state of discomfort there, since I had to rely on all my least used skills, like speaking Taiwanese.`,
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
                            todo: REVIEW,
                            card: {
                                description: `As I lie on the floor mat unable to sleep, the "awake" voice echoes my thoughts as they vacillate between hope and despair: While the vastness of the universe is terrifying, sure… doesn't this also suggest unlimited possibilities? But then, if so… why isn't being with Sasha one of them?`,
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
                                description: `Everyone else in the house is asleep, snug under their blankets. Of course, sheets are also used to cover the deceased…`,
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
                                    description: `I hated sleep as a child, since it forced me to swap out my reasoned thoughts for illogical dreams— a nightly ordeal that felt as burdensome and frightening as a whole-body blood transfusion. Still… things always seemed better in the morning because of it.`,
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
                                    `As I recall, Taiwanese buildings at the time made heavy use of iron bars and stone slabs. My grandmother's house felt like a mausoleum adorned with`,
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
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Paracelsus`,
                                            wiki: `Paracelsus`,
                                        },
                                        `was a 16th-century alchemist who believed that nature is made up of four elements, each personified by a mythical creature— with the`,
                                        {
                                            anchor: `salamander`,
                                            wiki: `Salamanders_in_folklore`,
                                        },
                                        `being the elemental of fire.`,
                                    ],
                                },
                                {
                                    description: `Writing doublespeaker rhyme can be… a bit daunting. So to motivate myself, I'd come up with silly challenges, like being sure to mention every Paracelsian elemental.`,
                                    dotKeys: {
                                        [SONGCRAFT]: true,
                                    },
                                },
                            ],
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
                                description: `My grandmother's house at night was pitch black. So whenever I woke to use the bathroom, I had to tiptoe to the bedroom door, guided only by a sliver of moonlight peeking in from beneath.`,
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
                                    `As an amphibian, salamanders undergo`,
                                    {
                                        anchor: `metamorphosis`,
                                        wiki: `Metamorphosis`,
                                    },
                                    `: They begin life underwater, but then lose their gills and develop lungs to live on land. So breathing becomes the new drowning, and vice versa— which is what falling asleep has always felt like to me.`,
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
                                    `separates the living from the underworld. And at night in my grandmother's house, the stairs leading down to the first floor seemed just as foreboding.`,
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
                                    `When I was growing up in the '80s, no one thought twice to say "Oriental"; it's even printed on my birth certificate. The word was made offensive at around the same time that "queer" was being reclaimed by the gay community. The latter tactic always made more sense to me: Isn't it better for there to be`,
                                    {
                                        isEmphasis: true,
                                        lyric: `fewer`,
                                    },
                                    `slurs against your kind?`,
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
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `Book of Judges`,
                                        wiki: `Book_of_Judges`,
                                    },
                                    `tells of a battle that arose between two Israelite tribes, after which the victors demanded of any straggler to say "`,
                                    {
                                        anchor: `shibboleth`,
                                        wiki: `Shibboleth`,
                                    },
                                    `"— the Hebrew word for a river. Since the enemy tribe had a different pronunciation for the letter`,
                                    {
                                        isItalic: true,
                                        lyric: `shin`,
                                    },
                                    `, they'd give themselves away by saying "sibboleth"— as I do here in the recording.`,
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
                                    `is a pair of lines that share the same meter and end in rhyme. As children, Sasha and I were never a couple, of course. But perhaps we were a couplet?`,
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
                            // NOTE: Add a bike bell sound in re-recording.
                            anchor: `rickshaw hiccoughs`,
                            card: {
                                description: [
                                    `As I wander outside in my dream, a passing`,
                                    {
                                        anchor: `rickshaw`,
                                        wiki: `Rickshaw`,
                                    },
                                    `jounces abruptly on the road's uneven surface.`,
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
                                    description: `Being in Taiwan at the time, I wasn't around to attend Sasha's bat mitzvah party.`,
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
                card: {
                    // TODO: Or bottled butterfly and jarred sibyl.
                    description: `Though the two doublespeaker voices seem to operate independently, they plant subtle ideas along each other's paths— just as our conscious thoughts affect our dreams, and vice versa. In this stanza, for example, the mention of a staircase by the "asleep" voice precedes the plummeting spoken of by the "awake" voice.`,
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
                                    `Like the Biblical`,
                                    {
                                        anchor: `Ishmael`,
                                        wiki: `Ishmael`,
                                    },
                                    ` whom he was named after, the narrator in`,
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
                                    `is an outcast. While the former was banished to the desert, the latter roamed the figurative dunes of the ocean— as I do now.`,
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
                                    `As an illegitimate son, Ishmael wasn't to inherit the house of`,
                                    {
                                        anchor: `Abraham`,
                                        wiki: `Abraham`,
                                    },
                                    `; still, God promised to make him into a great nation. And since I wasn't to marry into Sasha's house— given my own disfavored lineage— I could only hope for similar amends.`,
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
                                    description: `At our middle school, students who completed two years of French were eligible to attend a summer program in the city of Paris. This excited Sasha, and so it excited me as well.`,
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
                    description: `Since the drum parts that I'd scored for this song were more advanced than what I could actually play, I had to try several workarounds. I ended up recording the kick, snare, and toms in separate takes from the cymbals.`,
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
                                    `is a verse form that originated in French poetry, but it can refer to any round object, like a ball. Meanwhile, "`,
                                    {
                                        anchor: `apple of one's eye`,
                                        wiki: `Apple_of_my_eye`,
                                    },
                                    `," from Old English, is a misreading of a Biblical Hebrew idiom that translates to "ball of one's eye." Similarly, it was only by misreading Sasha's intentions— or else, by substituting my own— that I could hope to be the object of her affection.`,
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
                                    ` who, upon waking, couldn't be sure if he was then a man dreaming he was a butterfly, or now a butterfly dreaming he is a man.`,
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
                                    `." And so arose an apocryphal tale that when Adam ate the forbidden fruit of knowledge, a piece lodged in his throat to mark all his descendants with a reminder of their original sin. Similarly, my knowledge of where I stood with Sasha left me to feel a permanent lump in my throat.`,
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
                                    `was the Greek goddess of discord. As revenge for not being invited to a feast attended by the other gods, she tossed a golden apple labeled "for the fairest" into their midst. When Paris was asked to judge its rightful owner, he chose`,
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
                                    `, which offers pet cremation services.`,
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
                                    `was the first human woman. Upon opening a box given to her by Zeus as a wedding gift, she unwittingly released all the evils that now plague humanity.`,
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
                                    `, a female nymph, is the Paracelsian elemental of water. The word derives from the Latin`,
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
                            cards: [
                                {
                                    description: `Hope was all that remained in Pandora's box. But upon having the hard truths of the world revealed to me by Sasha, I'm left to feel as hopeless as ever.`,
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
                            card: {
                                description: [
                                    `In`,
                                    {
                                        anchor: `Hippocratic medicine`,
                                        wiki: `Humorism`,
                                    },
                                    `, the spleen was thought to induce melancholy; but in modern speech, it's a symbol of malice. I suppose my resentment toward the bullies carried a bit of both.`,
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
                            card: {
                                description: `Wandering the beach in my dream, I notice a steel whistle in the sand that was likely dropped by a lifeguard. Its shrill cry to warn of danger is now forever silenced— an omen, perhaps, that some dangers come without warning.`,
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
                                    `was an ancient Greek prophetess who was granted immortality, but not eternal youth.`,
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
                                    `begins with an epigraph in which the aged Sibyl, hanging in a jar, is asked what she wants. Her reply… is that she wishes to die.`,
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
                                description: `To keep beachgoers from wading into the shark-infested waters, barricade tape has been tied onto the barbecue grills that line the shore.`,
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
                                    description: `Like cellophane, Sasha's intentions were transparent. I could always count on her to sympathize with my anger toward the bullies.`,
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
                            card: {
                                description: `But also like cellophane, Sasha couldn't reflect warmth where none was present. In other words, if I wasn't able to deal gracefully with the bullies, then there'd come a time when she'd need to keep her distance from me as well.`,
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
                        `As it turns out, recording vocals in doublespeaker rhyme was trickier than expected. When we sing, we don't break up our phrases evenly; instead, we shorten syllables or delay their onset to account for consonant clusters and such. So each voice in a doublespeaker pair might sound fine on its own— but disjointed when heard together. To perform them in sync, then, I came up with a system of notation that resembled medieval`,
                        {
                            anchor: `ligature`,
                            wiki: `Ligature_(music)`,
                        },
                        `from afar.`,
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
                                description: [
                                    `In my dream, I see myself adrift on a buoy as it bobs in an ocean filled with sea serpents. Yet… aren't I, too, a "boy" who's bobbing through life, oblivious to dangers lurking everywhere?`,
                                ],
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
                            cards: [
                                {
                                    // CONSIDER: Wormhole Kyon for shank? Needs to allow for multiple wormhole keys first.
                                    description: [
                                        `Those who wander a prison yard must always be on guard against getting`,
                                        {
                                            anchor: 'shivved',
                                            wiki: `Shiv_(weapon)`,
                                        },
                                        `. Luckily, the schoolyard had long been preparing me for a lifetime of such vigilance.`,
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
                                    `is a European folk custom in which a raucous crowd serenades a newlywed couple; and`,
                                    {
                                        anchor: `sitting shivah`,
                                        wiki: `Shiva_(Judaism)`,
                                    },
                                    `refers to a period of mourning in Judaism after a family member dies. In other words, my bad luck not to be born Jewish has cost me any hope of spending a lifetime with Sasha, from marriage until death.`,
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
                                    `on the surface of my eye. Despite my frantic efforts to bring us closer, her world would always remain a fixed distance apart from mine.`,
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
                                    `Looking out into the ocean, I recall the`,
                                    {
                                        anchor: `traveling carnival`,
                                        wiki: `Traveling_carnival`,
                                    },
                                    `that once came into town every summer. Its amusement rides would suddenly tower above the skyline, only to be disassembled just as quickly— much like the rise and fall of ocean waves.`,
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
                            card: {
                                description: `As a child, I suffered from night terrors related to my fear of death. My mother tried to comfort me with the promise of reincarnation— but this only deepened my dread. After all, it wasn't just death itself that frightened me; it was a lifetime of hurtling toward it. And all that reincarnation offered was more rounds of the same.`,
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
                                description: `Yet the thought of being stuck with a soul forever— a fate promised by the faiths of my classmates— seemed no less disturbing.`,
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
                            card: {
                                description: [
                                    `The end goal of Buddhism is`,
                                    {
                                        anchor: `nirvana`,
                                        wiki: `Nirvana`,
                                    },
                                    `— or, release from the cycle of rebirth. But this is just death on a grander scale, which confirmed my intuition that no one should want to live in the first place. So… why do we?`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `and`,
                        {
                            anchor: `just play dumb`,
                            card: {
                                description: `Neither heaven nor nirvana sounded all that pleasant, yet these were the best offers available— which confused me. Shouldn't their appeal be self-evident even to the most thickheaded child?`,
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
                            cards: [
                                {
                                    description: `Most maddening of all, one has no say in being brought into this world to begin with. It just seemed like there should be a way to opt out of this whole mess, given how distressing the certainty of death must always be.`,
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
                                    `The tortoise defeats the hare in`,
                                    {
                                        anchor: `Aesop's fable`,
                                        wiki: `The_Tortoise_and_the_Hare`,
                                    },
                                    `, but only because the hare falls asleep. Similarly, while tortoises live for over a century, I had them beat in longevity— so long as I chose the right faith.`,
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
                                    `In the`,
                                    {
                                        anchor: `Book of Exodus`,
                                        wiki: `Book_of_Exodus`,
                                    },
                                    `, Moses leads the Israelites out of slavery by parting the Red Sea, allowing them to escape Egypt on foot.`,
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
                                description: `The sea then closes behind the Israelites, drowning the Egyptian army in pursuit. Sadly, the certainty of death following me at every turn can't be held back so easily.`,
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
                                description: `As I make peace with the inevitable, the ocean begins to feel calm and inviting. But my dream is also ending, and soon I expect to wake in the comfort of my bed.`,
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
                            card: {
                                description: `It isn't just Odin's unused cat litter that was swept aside. Gone is any chance for him to sire a litter of his own.`,
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
                            card: {
                                description: [
                                    `In Eliot's "`,
                                    {
                                        anchor: `The Love Song of J. Alfred Prufrock`,
                                        wiki: `The_Love_Song_of_J._Alfred_Prufrock`,
                                    },
                                    `"— a poem exploring themes of stunted growth and missed chances— the narrator bemoans that, while the mermaids may sing, they don't sing for him. Likewise, while my resignation has turned the fearsome sea serpents into smiling mermaids, they still don't smile for me.`,
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
                                description: `Wednesday means "Odin's day" in Old English, and I was born on a Thursday. Thus my day literally begins where Odin's day ends.`,
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
                                        `Unable to challenge my existence, I can only accept all that's still unknown. And so, like a`,
                                        {
                                            anchor: `garden gnome`,
                                            wiki: `Garden_gnome`,
                                        },
                                        `planted on the lawn, I stand motionless and grin faintly in hope for the future.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
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
                                    `" is a nursery rhyme that predicts a child's fortune based on the day of the week they were born. As one of Thursday's children, then, I'm promised to have "far to go"— and indeed, the distance left for me to cover feels vast. Still, I'm now one day closer than when I began…`,
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
                        `Once it became clear that`,
                        {
                            isItalic: true,
                            lyric: `Yearling's Bobtail`,
                        },
                        `wouldn't get any attention from the indie press, I moved to New York City to regain my bearings. There, Sasha and I reconnected, and we started dating. She put me on the conversion path, while I volunteered to learn Hebrew. But… we didn't last. Though I tried hard to reinvent myself once more, it was no longer possible to do so while still drinking heavily. Life had changed.`,
                    ],
                    dotKeys: {
                        [AFTERWORD]: true,
                    },
                },
            },
        },
    ],
}
