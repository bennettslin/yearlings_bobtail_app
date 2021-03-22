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
    RHYME,
    POSTCHORUS,
    INTRO,
    SOLO,
    FLASHBACK_TO_WORMHOLE_PREFIX,
    IS_UNIT_DOT,
} from '../../../../app/constants/lyrics'

export default {
    path: 'willy-the-cocoa',
    title: 'Willy the Cocoa',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `Keyboards in anacrusis`,
    playerStartTime: 177.396,
    mixStartTime: `0:01:03.00`,
    todo: true,
    overview: `Willy the Cocoa was a mentally disabled man who wandered the streets collecting recyclables for a living. One day, some gangsters decided to pick a fight and smashed his head open with a bottle, killing him instantly. My younger brother was diagnosed with severe autism at around this time, and in light of Willy's murder, I would lie awake in fear of what lay in my brother's future.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `The kids in the neighborhood knew Willy as "the Cocoa," referring both to the`,
                        {
                            anchor: `Coke`,
                            wiki: `Coca-Cola`,
                        },
                        `bottles he collected and to his seeming a bit cuckoo, or possibly`,
                        {
                            isItalic: true,
                            lyric: `loco,`,
                        },
                        `which is`,
                        {
                            anchor: `Spanish`,
                            wiki: `Spanish_language`,
                        },
                        `for "crazy." There wasn't an official way to spell it.`,
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
                        lyric: `(acoustic guitar, Willy's theme)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `In the past, a mentally disabled child was sometimes thought to be a troll in disguise known as a`,
                        {
                            anchor: `changeling,`,
                            wiki: `Changeling`,
                        },
                        `who had been left in place of a stolen human child. So I wanted the music for this song to sound like a band of woodland trolls in secluded revelry after having pulled off such a heist. I figured their style would be akin to the swamp rock of`,
                        {
                            anchor: `Creedence Clearwater Revival,`,
                            wiki: `Creedence_Clearwater_Revival`,
                        },
                        `with`,
                        {
                            anchor: `melodicas`,
                            wiki: `Melodica`,
                        },
                        `to evoke`,
                        {
                            anchor: `Cajun accordions.`,
                            wiki: `Cajun_accordion`,
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
            },
            mainVerses: [
                {
                    mixTime: `0:12:00.00`,
                    lyric: `Hilltops gnashing dig out potholes,`,
                },
                {
                    mixTime: `0:15:11.25`,
                    lyric: [
                        `the`,
                        {
                            anchor: `valley somersaults`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `I grew up in the`,
                                        {
                                            anchor: `San Fernando Valley`,
                                            wiki: `San_Fernando_Valley`,
                                        },
                                        `of`,
                                        {
                                            anchor: `Los Angeles,`,
                                            wiki: `Los_Angeles`,
                                        },
                                        `where wide boulevards stretch endlessly along a`,
                                        {
                                            anchor: `grid plan,`,
                                            wiki: `Grid_plan`,
                                        },
                                        `and mountains block the horizon on all sides.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `In the mirages created by the summer heat, the reflections of the surrounding mountains naturally point downwards, suggesting that their jagged peaks had caused the cracks in the asphalt.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                        `in tarred pavement mirage.`,
                    ],
                },
                {
                    mixTime: `0:18:11.25`,
                    lyric: [
                        {
                            anchor: `Hydrants burst`,
                            todo: true,
                            card: {
                                description: `To keep us kids cool during the summer, neighbors would sometimes crack open a fire hydrant. The water would fail to drain and eventually form stagnant pools, to the dismay of city officials.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `as early worms work this`,
                        {
                            anchor: `dying coyote's jaw.`,
                            todo: true,
                            cards: [
                                {
                                    description: `Every so often, a coyote would wander down from the hillsides and get hit by traffic. Its body might then lie decomposing for days before being found.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `If the surrounding mountains of the Valley are like the lower jaw of a dying coyote, then the bustle of its morning commuters are like tiny scavengers ready to go to town on the carcass.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `The root progression here traces a zigzag in which a minor-third drop from one measure is followed by a whole-step rise to the next. At the cadence of each line, melodicas hurriedly catch up by compressing a warped version of this descending pattern into a single measure.`,
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: VERSES,
                subVerseType: RHYME,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `0:24:00.00`,
                    lyric: [
                        `Swill pop poured from`,
                        {
                            anchor: `wayside bottle,`,
                            todo: true,
                            card: {
                                description: `Willy begins his daily rounds by filling his shopping cart with discarded bottles and cans found littered along the byways.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:27:11.25`,
                    lyric: [
                        `his`,
                        {
                            anchor: `pinhead in its shadow`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `Willy had`,
                                        {
                                            anchor: `microcephaly,`,
                                            wiki: `Microcephaly`,
                                        },
                                        `a medical condition in which the brain fails to develop properly. And so his head was abnormally small in size, like the "pinheads" of`,
                                        {
                                            anchor: `carnival sideshows`,
                                            wiki: `Sideshow`,
                                        },
                                        `from bygone days.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Willy peers through an empty soda bottle, the top of which is tapered like the outline of his skull.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            ],
                        },
                        `eclipsed in full.`,
                    ],
                },
            ],
            subVerse: [
                {
                    mixTime: `0:31:03.75`,
                    lyric: {
                        isItalic: true,
                        lyric: [
                            {
                                anchor: `Chilled cola's free`,
                                todo: true,
                                card: {
                                    description: `Willy eagerly awaits the complementary soft drink that will come with his reimbursement at the recycling center.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            },
                            `with salvage sold…`,
                        ],
                    },
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
                    mixTime: `0:33:22.50`,
                    lyric: [
                        `licking lips`,
                        {
                            anchor: `he ends his stroll.`,
                            todo: true,
                            card: {
                                description: `In most legends, the changeling is a witting participant in the deceitful replacement of a human child. As such, it takes pains to hide its true form while in the company of other humans. And so before Willy goes off to cash in his recyclables, he ends "as troll" by donning his human guise.`,
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
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `0:36:00.00`,
                    lyric: `Oh, has Willy the Cocoa come`,
                },
                {
                    mixTime: `0:40:03.75`,
                    lyric: [
                        `for`,
                        {
                            anchor: `our tins and our jars`,
                            todo: true,
                            card: {
                                description: `Like some other households in the neighborhood, my family would leave our recyclables out on the porch for Willy to come by and collect.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `this week?`,
                    ],
                },
                {
                    mixTime: `0:42:11.25`,
                    lyric: [
                        `Saluting Mummy doing some`,
                        {
                            anchor: `haircutting to the sun`,
                            todo: true,
                            card: {
                                description: `Or else, to the "son." My mother is cutting my brother's hair outside on the front porch, where the cleanup afterward will be easier.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:46:03.75`,
                    lyric: [
                        `when`,
                        {
                            anchor: `suddenly baby shrieks…`,
                            todo: true,
                            card: {
                                description: `My brother, the baby of our family, was typically calm and quiet in demeanor. However, when made to do things he didn't enjoy or understand, like sitting through a haircut, he could erupt without warning in a frenzied outburst.`,
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
                    description: [
                        `In some legends, a changeling hints at its true identity by handling common tools in a peculiar way. I figured trolls would be no less peculiar in their manner of playing instruments, and so I experimented with unconventional techniques, like pairing`,
                        {
                            anchor: `palm mutes`,
                            wiki: `Palm_mute`,
                        },
                        `with legato slides on the lead guitar and mandolin here.`,
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
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `0:48:11.25`,
                    lyric: [
                        `As`,
                        {
                            anchor: `gap-toothed coma`,
                            todo: true,
                            cards: [
                                {
                                    description: `With mouth partially open, my brother wears a blank expression, right up until he feels the sensation of my mother's gap-toothed "comb" on his scalp.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `parts his forehead,`,
                    ],
                },
                {
                    mixTime: `0:51:22.50`,
                    lyric: [
                        `launching`,
                        {
                            anchor: `pair of seizures`,
                            todo: true,
                            card: {
                                description: `My brother's sudden outburst knocks the "scissors" from my mother's hand and sends them flying into the lawn.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `to the patch.`,
                    ],
                },
                {
                    mixTime: `0:54:22.50`,
                    lyric: `Willy ducks behind the porch steps and laughs.`,
                },
                {
                    mixTime: `1:00:00.00`,
                    lyric: [
                        `Oh ma'am, I`,
                        {
                            anchor: `see your kid with whiskers,`,
                            todo: true,
                            card: {
                                description: `Noting my brother's distaste for haircuts, Willy jokingly predicts that my brother will choose to sport an unshaven look as an adult. But in many legends, the changeling is a fully grown troll who is perhaps centuries old. So Willy's phrasing leaves open the possibility that my brother, being a changeling, in fact already wears a beard.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:03:22.50`,
                    lyric: [
                        `he croaks, stroking`,
                        {
                            anchor: `creepers on his cheek,`,
                            todo: true,
                            card: {
                                description: `Of course, it's no surprise that Willy is immune to the enchantment that disguises my brother's true form. After all, Willy is a changeling himself, as evinced by his own unkempt facial hair.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:06:11.25`,
                    lyric: [
                        `And three years howling is the`,
                        {
                            anchor: `longest cowlick`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `A`,
                                        {
                                            anchor: `cowlick`,
                                            wiki: `Cowlick`,
                                        },
                                        `is a section of hair that sticks straight up on a person's head. Being acquainted with my family through the years, Willy understands that my brother's tantrums are the reason my mother allows his hair to reach unruly lengths.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Willy might in fact be observing that my brother has yet to outgrow his`,
                                        {
                                            anchor: `"colic,"`,
                                            wiki: `Baby_colic`,
                                        },
                                        `a period of excessive crying in infants. In the past, such inexplicable delays in child development are what gave rise to a belief in changelings.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `yet I've seen!`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `I first learned of`,
                        {
                            anchor: `autism`,
                            wiki: `Autism`,
                        },
                        `when I overheard my parents talk about my brother's condition in their thick Taiwanese accents. The next day, I explained to classmates that my brother was "artistic." So I wanted the lyrics for this song to explore the ways in which a child's mishearings of adult conversations might lead to roundabout understanding.`,
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
                formType: POSTCHORUS,
            },
            mainVerses: [
                {
                    mixTime: `1:12:00.00`,
                    lyric: [
                        `Prying`,
                        {
                            anchor: `X-ray spec'd,`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `In those days, the back pages of comic books were filled with ads for novelty items. Having sent away weeks ago for a pair of`,
                                    {
                                        anchor: `X-Ray Specs,`,
                                        wiki: `X-Ray_Specs_(novelty)`,
                                    },
                                    `which purportedly allows the wearer to see through objects, I've just received them in the mail and am now trying them on.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `enraged at`,
                        {
                            anchor: `pages clawed,`,
                            todo: true,
                            cards: [
                                {
                                    description: `My brother enjoyed cutting shapes of alphabet letters out of scrap paper. Since this was a creative activity that kept him occupied, my parents encouraged it and kept a pile of old magazines freshly stocked for him.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Unfortunately, the comic book I'd been reading on the floor just a minute ago has somehow made its way into my brother's scrap pile.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `1:15:11.25`,
                    lyric: [
                        `a`,
                        {
                            anchor: `kick slams`,
                            todo: true,
                            card: {
                                description: `Upon catching my brother in the act of cutting up my comic book, I explode with anger and lay down some serious hurt.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `the`,
                        {
                            anchor: `bearded baby`,
                            todo: true,
                            card: {
                                description: `My brother's odd behavior frustrated me to no end, and I longed to believe he was simply displaying wisdom meant for a different world. So upon reading about changeling legends many years later, I could sympathize with those villagers in times past who told tales of grown-up trolls disguised as human children.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `to the ground`,
                    ],
                },
                {
                    mixTime: `1:18:11.25`,
                    lyric: [
                        `with his tummy clenched, muffling`,
                        {
                            anchor: `baffled sobs.`,
                            todo: true,
                            card: {
                                description: `The hardest part about hurting my brother was knowing he had no way to understand the cause of my anger. The times when I turned on him and caused him physical pain would always remain without explanation. For him, it was just another part of what life was.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:21:22.50`,
                    lyric: `Papa storms in roaring, Boy, are you proud?`,
                },
                {
                    mixTime: `1:24:11.25`,
                    lyric: [
                        `You'd learn him good, when`,
                        {
                            anchor: `smarts he could've took`,
                            todo: true,
                            cards: [
                                {
                                    description: `I grew up puzzling over why my brother was born with autism and I wasn't, when our circumstances were no different. It wasn't far-fetched to suppose that every mother's womb starts out with a fixed supply of mental capacity to dole out to each child, and I had selfishly taken my brother's share.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `learn_him_good`,
                                        wormholePrefix: FLASHBACK_TO_WORMHOLE_PREFIX,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `1:27:11.25`,
                    lyric: `all went instead to this clever head of yours.`,
                },
                {
                    mixTime: `1:30:11.25`,
                    lyric: `So to baby— to your brother— you'll say sorry for the world!`,
                },
            ],
        },
        {
            unitMap: {
                formType: SOLO,
            },
            mainVerses: [
                {
                    mixTime: `1:37:15.00`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(mandolin, Willy's theme)`,
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
                    mixTime: `1:48:00.00`,
                    lyric: [
                        {
                            anchor: `Killcrop`,
                            todo: true,
                            card: {
                                description: `In English folklore, a killcrop is an infant suspected of being a changeling due to its voracious appetite. The etymology is straightforward— one who "kills crops"— and reflects a concern of past times, when children unable to earn their keep could lead to a peasant family's ruin.`,
                                dotKeys: {
                                    [REFERENCE]: true,
                                },
                            },
                        },
                        `dashing kicks up puddle,`,
                    ],
                },
                {
                    mixTime: `1:51:22.50`,
                    lyric: [
                        {
                            anchor: `soused loafers`,
                            todo: true,
                            cards: [
                                {
                                    description: `In his zeal to reach a discarded beer bottle, Willy steps into a puddle and splashes standing water onto a pair of gangsters idling nearby.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: `"Soused loafers" can refer to drunken deadbeats, as well as to their drenched shoes.`,
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `shouting 'tard payment is due.`,
                    ],
                },
                {
                    mixTime: `1:54:22.50`,
                    lyric: [
                        {
                            anchor: `Hit this witch`,
                            todo: true,
                            cards: [
                                {
                                    description: `In some legends, beating a changeling badly enough will cause it to tire of its charade and return the stolen child. These legends reflect the historical reality in which sickly children were often abused to death, if not killed outright. So if Willy is a changeling, then it seems predestined that he should meet a violent end.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    wormhole: `hit_the_switch`,
                                },
                            ],
                        },
                        {
                            anchor: `with switch,`,
                            todo: true,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `switch`,
                                        wiki: `Switch_(corporal_punishment)`,
                                    },
                                    `is a bundle of rods used to inflict punishment.`,
                                ],
                            },
                        },
                        `whispers wind, to fix his switcheroo…`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: VERSES,
                subVerseType: RHYME,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `2:00:00.00`,
                    lyric: `Milksop cornered into scuffle,`,
                },
                {
                    mixTime: `2:03:11.25`,
                    lyric: [
                        `a`,
                        {
                            anchor: `sack-spilled glass`,
                            todo: true,
                            card: {
                                description: `Eager for a fight, the gangsters start pushing Willy around. His shopping cart gets overturned in the commotion, causing empty bottles and cans to spill onto the ground.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `swung sounds the`,
                        {
                            anchor: `past-noon toll.`,
                            todo: true,
                            card: {
                                description: `One of the gangsters grabs a wine bottle and smashes it against Willy's face. The sound reverberates throughout the neighborhood like the peal of a town bell striking once at one o'clock.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
            ],
            subVerse: [
                {
                    mixTime: `2:07:03.75`,
                    lyric: {
                        isItalic: true,
                        lyric: [
                            `Shelled skull has freed`,
                            {
                                anchor: `unsalvaged soul…`,
                                todo: true,
                                cards: [
                                    {
                                        description: `To justify the abuse of sickly children, religious doctrine in the past would often claim that such children were devoid of souls.`,
                                        dotKeys: {
                                            [REFERENCE]: true,
                                        },
                                    },
                                    {
                                        wormhole: `unsalvaged_sows`,
                                    },
                                ],
                            },
                        ],
                    },
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
                    mixTime: `2:09:22.50`,
                    lyric: [
                        `dripping`,
                        {
                            anchor: `Willy's stalkless bulb.`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `The impact of the wine bottle severs Willy's brain from his spine, like a`,
                                    {
                                        anchor: `flower bulb`,
                                        wiki: `Ornamental_bulbous_plant`,
                                    },
                                    `plucked from its stalk. But once planted in the earth, the bulb can grow a new stem and bloom again.`,
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
                formType: PRECHORUS,
            },
            mainVerses: [
                {
                    mixTime: `2:12:00.00`,
                    lyric: [
                        `Oh, and`,
                        {
                            anchor: `August was`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: `Understanding the gravity of the present moment, I try to make sense of it as if I were already looking back on the past.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `the`,
                        {
                            anchor: `sawdust month`,
                            todo: true,
                            card: {
                                description: `In this "saddest" month of Willy's murder, I help my mother collect wood shavings left over from my father's amateur carpentry. We then spread them onto our flower beds.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:15:22.50`,
                    lyric: [
                        `that saw this`,
                        {
                            anchor: `mulch soften asphodel.`,
                            todo: true,
                            card: {
                                description: [
                                    `We plant`,
                                    {
                                        anchor: `asphodels,`,
                                        wiki: `Asphodelus`,
                                    },
                                    `a popular garden plant named after the immortal flower that populates a`,
                                    {
                                        anchor: `section of the underworld`,
                                        wiki: `Asphodel_Meadows`,
                                    },
                                    `in`,
                                    {
                                        anchor: `Greek mythology.`,
                                        wiki: `Greek_mythology`,
                                    },
                                    `By softening the soil, the mulch gives new life to our flower beds. And perhaps Willy will do the same for our neighborhood, by softening the "asphalt" beneath which his body had lain.`,
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
                    mixTime: `2:18:22.50`,
                    lyric: [
                        {
                            anchor: `Baby bluebonnets`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Bluebonnets`,
                                        wiki: 'Bluebonnet_(plant)',
                                    },
                                    `are another popular flower in our garden, and a "blue bonnet" is what my mother has tucked my brother's head in to protect him from the sun. But after Willy's murder, I have to wonder how protected my brother is against other things.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },

                        },
                        `bloomed as new comics soon`,
                    ],
                },
                {
                    mixTime: `2:21:22.50`,
                    lyric: [
                        `lay`,
                        {
                            anchor: `forgotten amongst the mail.`,
                            todo: true,
                            card: {
                                description: `Having recently assaulted my brother in anger over a shredded comic book, I'm now indifferent to the latest issue from my monthly subscription.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                    description: `To play the electric guitar riff here, I used both a glass slide and the whammy bar. Since each of these tools can bend pitch on its own, it makes little sense to combine them, which is exactly why a troll musician would do so.`,
                    dotKeys: {
                        [OBSERVATION]: true,
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
                    mixTime: `2:24:22.50`,
                    lyric: [
                        `But`,
                        {
                            anchor: `how marbleless,`,
                            todo: true,
                            card: {
                                description: `Occasionally, someone would make a clumsy attempt to ease my parents' worries by claiming to envy my brother. This person might remark on how "marvelous" it must be to live without one's "marbles," for example. I always had to wonder how gladly they would embrace the greater likelihood of being a victim of violent crime as well.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `some reckoned,`,
                    ],
                },
                {
                    mixTime: `2:27:22.50`,
                    lyric: [
                        `being ever stuck in`,
                        {
                            anchor: `imp-runt age of mind!`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `After my brother was diagnosed with autism, my mother went back to school to learn child development. At the dinner table, she would explain to us such concepts as`,
                                        {
                                            anchor: `"imprinting,"`,
                                            wiki: `Imprinting_(psychology)`,
                                        },
                                        `the phase during which a child learns emotional attachment. She would then voice regret that she began her studies too late to be a better parent to my brother.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Since an`,
                                        {
                                            anchor: `imp`,
                                            wiki: `Imp`,
                                        },
                                        {
                                            anchor: `runt`,
                                            wiki: `Runt`,
                                        },
                                        `is literally the weakest member in a litter of troll infants, it is surely the one that its troll parents would try to replace with a stolen human child.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `2:30:22.50`,
                    lyric: [
                        `Are you sick?`,
                        {
                            anchor: `I am seven,`,
                            todo: true,
                            card: {
                                description: `My brother learned to answer the question of how old he is when he was six. But even after turning seven, he still insisted on answering "six." Though we finally got him to accept that "seven" was the new correct answer, the cost in sweat and tears was so high that when he turned eight, none of us had the energy to relive the ordeal. He's been answering "seven" ever since. And so here, I imagine him as a grownup testily correcting a stranger who has the nerve to ask if he is "six."`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `he'd reply…`,
                    ],
                },
                {
                    mixTime: `2:36:00.00`,
                    lyric: `And do we speak in winded whimpers`,
                },
                {
                    mixTime: `2:39:22.50`,
                    lyric: `or squelch shreds of a summer gone,`,
                },
                {
                    mixTime: `2:42:22.50`,
                    lyric: `ever conscious of days past forever wrong?`,
                },
            ],
        },
        {
            unitMap: {
                formType: POSTCHORUS,
            },
            mainVerses: [
                {
                    mixTime: `2:48:00.00`,
                    lyric: [
                        `Such`,
                        {
                            anchor: `heavy fears,`,
                            todo: true,
                            card: {
                                description: `One night soon after Willy's murder, I wake up screaming in fear of my mortality. My mother sits by my bedside to comfort me.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `Mummy laughs,`,
                    ],
                },
                {
                    mixTime: `2:51:22.50`,
                    lyric: [
                        `for a cub`,
                        {
                            anchor: `cub not yet Webelos!`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `In the`,
                                        {
                                            anchor: `Cub Scouts,`,
                                            wiki: `Cub_Scouting_(Boy_Scouts_of_America)`,
                                        },
                                        `Webelos is the eldest rank, and is earned by boys in the fourth or fifth grade. It stands for "We'll Be Loyal Scouts."`,
                                    ],
                                },
                                {
                                    description: `My mother, who was the den mother of my Cub Scout pack, might also be assuring me that I'm not yet "way below."`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `2:54:11.25`,
                    lyric: [
                        `Son,`,
                        {
                            anchor: `seventy years`,
                            todo: true,
                            card: {
                                description: `My mother tells me not to worry, since I'm not going to die for a long while. She then assures me that when my time finally does come, perhaps in another seventy years or so, I will have long made peace with death somehow.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `and you'll be glad`,
                    ],
                },
                {
                    mixTime: `2:57:22.50`,
                    lyric: `to finally rest those creaking bones!`,
                },
                {
                    mixTime: `3:00:11.25`,
                    lyric: `Life's like this quilt: patchy, then it fills…`,
                },
                {
                    mixTime: `3:03:11.25`,
                    lyric: [
                        `In time, with`,
                        {
                            anchor: `needle done,`,
                            todo: true,
                            cards: [
                                {
                                    description: `My mother suggests that my life will be a patchwork onto which I continually sew new experiences. In turn, the insights gained from these experiences will then inform and enrich my art.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `needle_done`,
                                },
                            ],
                        },
                        `you'll write this`,
                        {
                            anchor: `book of yours.`,
                            todo: true,
                            card: {
                                description: [
                                    `I wore an eyepatch as a child to correct my`,
                                    {
                                        anchor: `lazy eye,`,
                                        wiki: `Amblyopia`,
                                    },
                                    `which naturally led to an interest in drawing. Since I lacked depth perception,  it was just less of a struggle for me to render anything I saw onto paper. Impressed by my ability, my mother insisted I was destined to become a great artist. So I always had it in my head that I would one day create a masterpiece, perhaps something like the`,
                                    {
                                        anchor: `Tintin`,
                                        wiki: `The_Adventures_of_Tintin`,
                                    },
                                    `comic books I adored at the time.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `3:06:11.25`,
                    lyric: `Then to Willy, in the cover could say sorry for the world!`,
                },
            ],
        },
        {
            unitMap: {
                formType: POSTCHORUS,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `3:12:00.00`,
                    lyric: [
                        {
                            anchor: [
                                {
                                    isItalic: true,
                                    lyric: `Bobtail`,
                                },
                                `'s cover`,
                            ],
                            todo: true,
                            card: {
                                description: [
                                    `My favorite word as a child was "bobtail." I was just so proud of myself the day I realized that the line "bells on bobtail ring," from the song`,
                                    {
                                        anchor: `"Jingle Bells,"`,
                                        wiki: `Jingle_Bells`,
                                    },
                                    `isn't actually a nonsensical phrase. In any case,`,
                                    {
                                        isItalic: true,
                                        lyric: `Bobtail`,
                                    },
                                    `became my catchall title for the great artistic work I would one day create.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `could say sorry for the world!`,
                    ],
                },
                {
                    mixTime: `3:18:00.00`,
                    lyric: [
                        `Oh,`,
                        {
                            isItalic: true,
                            lyric: `Bobtail`,
                        },
                        `'s cover could say sorry…!`,
                    ],
                },
            ],
        },
    ],
}
