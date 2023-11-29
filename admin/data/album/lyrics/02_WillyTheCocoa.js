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
    RHYME,
    POSTCHORUS,
    INTRO,
    SOLO,
    FLASHBACK_TO_WORMHOLE_PREFIX,
    IS_UNIT_DOT,
} from '../../../../src/constants/lyrics'

export default {
    title: 'Willy the Cocoa',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `Keyboards in anacrusis`,
    playerStartTime: 177.396,
    mixStartTime: `0:01:03.00`,
    overview: `When my younger brother was diagnosed with autism, a neighbor told us about Willy the Cocoa, a mentally disabled man who'd once wandered the neighborhood collecting recyclables. Tragically, Willy was killed in a fight with some gangsters, who smashed his head open with a bottle. Hearing this story affected me greatly, and I would recall it whenever I pondered my brother's likely fate.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Willy was known as "the Cocoa," referring both to the Coke bottles he collected and to his seeming a bit cuckoo and`,
                        {
                            isItalic: true,
                            lyric: `loco`,
                        },
                        `, or "crazy" in Spanish. I'm sure there wasn't an official spelling, so I took the liberty of choosing one. Of course, I also took the liberty of having his story take place many years later, when my family lived in the neighborhood.`,
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
                review: true,
                card: {
                    description: [
                        `In the past, a disabled child was thought to be a troll in disguise known as a`,
                        {
                            anchor: `changeling`,
                            wiki: `Changeling`,
                        },
                        `, who'd been left in place of a stolen human infant. So I wanted this song to sound like a band of trolls celebrating after having pulled off such a heist. I figured their style would be like the swamp rock of`,
                        {
                            anchor: `Creedence Clearwater Revival`,
                            wiki: `Creedence_Clearwater_Revival`,
                        },
                        `, so I used`,
                        {
                            anchor: `melodicas`,
                            wiki: `Melodica`,
                        },
                        `to evoke the sound of`,
                        {
                            anchor: `Cajun accordions`,
                            wiki: `Cajun_accordion`,
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
                            card: {
                                description: [
                                    `I grew up in the`,
                                    {
                                        anchor: `San Fernando Valley`,
                                        wiki: `San_Fernando_Valley`,
                                    },
                                    `of Los Angeles, where wide boulevards stretch endlessly along a grid plan, and mountains block the horizon on all sides.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `in`,
                        {
                            anchor: `tarred pavement mirage`,
                            review: true,
                            card: {
                                description: `In the mirages created by the summer heat, the reflections of the Valley's surrounding mountains point downward. So one could playfully suggest that their jagged peaks are like fangs biting down on the asphalt.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:18:11.25`,
                    lyric: [
                        {
                            anchor: `Hydrants burst`,
                            card: {
                                description: `To keep us kids cool during the summer, neighbors would sometimes crack open a fire hydrant. The water that failed to drain would then form stagnant pools, to the dismay of city officials.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `as early worms work this`,
                        {
                            anchor: `dying coyote's jaw`,
                            cards: [
                                {
                                    description: `Every so often, a coyote would wander from the hillside and get hit by traffic. Its body might then lie decomposing for days.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `If the surrounding mountains of the Valley are like the lower jaw of a dead coyote, then its morning commuters are like tiny scavengers going to town on the carcass.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                        `.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                review: true,
                card: {
                    description: [
                        `The`,
                        {
                            anchor: `root`,
                            wiki: `Root_(chord)`,
                        },
                        `of the chord progression here traces a zigzag in which a minor-third drop from one measure is followed by a whole-step rise to the next. At the cadence of each line, the melodicas catch up by squeezing a warped version of this descending pattern into a single measure.`,
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
                subVerseType: RHYME,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `0:24:00.00`,
                    lyric: [
                        `Swill pop poured from`,
                        {
                            anchor: `wayside bottle`,
                            card: {
                                description: `Willy begins his daily rounds by filling his shopping cart with discarded bottles and cans found littered along the sidewalks.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:27:11.25`,
                    lyric: [
                        `his`,
                        {
                            anchor: `pinhead in its shadow`,
                            review: true,
                            cards: [
                                {
                                    description: `Willy peers through an empty beer bottle, the top of which is tapered like the outline of his skull.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    description: [
                                        `I imagine Willy to have`,
                                        {
                                            anchor: `microcephaly`,
                                            wiki: `Microcephaly`,
                                        },
                                        `, a medical condition in which the brain stops growing after birth. And so his head is unusually small, like the sideshow "pinheads" of bygone days.`,
                                    ],
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
                                card: {
                                    description: `Willy eagerly awaits the complimentary soft drink that comes with his reimbursement at the recycling center.`,
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
                            anchor: `he ends his stroll`,
                            card: {
                                description: `In most legends, the changeling is a witting participant in the deceitful replacement of a human child. As such, it takes pains to hide its true form while in the company of other humans. And so before Willy goes off to cash in his recyclables, he ends "as troll" by donning his human guise.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
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
                            card: {
                                description: `Some households in the neighborhood would leave out their recyclables for Willy to collect.`,
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
                        // NOTE: Any re-recording should say "Mama."
                        `Saluting Mummy doing some`,
                        {
                            anchor: `haircutting to the sun`,
                            card: {
                                description: `Or else, to the "son." My mother is cutting my brother's hair on the front porch, where the cleanup afterward will be easier.`,
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
                            anchor: `suddenly baby shrieks`,
                            card: {
                                description: `My brother, the baby of our family, was typically calm and quiet in demeanor. However, when made to do things he didn't enjoy or understand, like sitting through a haircut, he could erupt without warning in a frenzied outburst.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `…`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `In some legends, a changeling hints at its true identity by handling common tools in a peculiar way. I figured their manner of playing instruments would be no less peculiar, so I experimented with unconventional techniques like pairing`,
                        {
                            anchor: `palm mutes`,
                            wiki: `Palm_mute`,
                        },
                        `with legato slides on the lead guitar and`,
                        {
                            anchor: `mandolin`,
                            wiki: `Mandolin`,
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
                formType: CHORUS,
            },
            mainVerses: [
                {
                    mixTime: `0:48:11.25`,
                    lyric: [
                        `As`,
                        {
                            anchor: `gap-toothed coma`,
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
                            card: {
                                description: `My brother's sudden outburst knocks the "scissors" from my mother's hand and sends them flying across the lawn.`,
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
                            anchor: `see your kid with whiskers`,
                            card: {
                                description: [
                                    `Noting my brother's distaste for haircuts, Willy jokingly predicts that my brother will sport an unshaven look as an adult. But in many legends, the changeling is a full-grown troll who is perhaps centuries old. So Willy's phrasing invites the possibility that my brother, being a changeling, in fact`,
                                    {
                                        isEmphasis: true,
                                        lyric: `already`,
                                    },
                                    `wears a beard.`,
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
                    mixTime: `1:03:22.50`,
                    lyric: [
                        `he croaks, stroking`,
                        {
                            anchor: `creepers on his cheek`,
                            review: true,
                            card: {
                                description: `Of course, it's no surprise if Willy isn't fooled by my brother's disguise. After all, Willy may be a changeling himself, as evinced by his own unkempt facial hair.`,
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
                    mixTime: `1:06:11.25`,
                    lyric: [
                        `And three years howling is the`,
                        {
                            anchor: `longest cowlick`,
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
                                        `Willy observes that my brother has yet to outgrow his "`,
                                        {
                                            anchor: `colic`,
                                            wiki: `Baby_colic`,
                                        },
                                        `," a period of excessive crying in infants. In the past, such inexplicable delays in early development helped give rise to a belief in changelings.`,
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
                card: {
                    description: [
                        `I first learned of`,
                        {
                            anchor: `autism`,
                            wiki: `Autism`,
                        },
                        `when I overheard my parents talk about my brother's condition in their Taiwanese accents. The next day, I explained to classmates that my brother was "artistic." So I wanted the lyrics for this song to explore how a child's mishearing of adult conversation might lead to roundabout understanding.`,
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
                            anchor: `X-ray spec'd`,
                            properNoun: true,
                            card: {
                                description: [
                                    `In those days, the back pages of comic books were filled with ads for novelty items. Having sent away weeks ago for a pair of`,
                                    {
                                        anchor: `X-Ray Specs`,
                                        wiki: `X-Ray_Specs_(novelty)`,
                                    },
                                    `— which purportedly allow the wearer to see through objects— I'm now trying them on.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `, enraged at`,
                        {
                            anchor: `pages clawed`,
                            cards: [
                                {
                                    description: `My brother enjoyed cutting shapes of alphabet letters out of scrap paper. Since this was a creative activity that kept him occupied, my parents kept a pile of old magazines freshly stocked for him.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Unfortunately, the comic book I was reading on the floor just a moment ago has somehow made its way into my brother's scrap pile.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            ],
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `1:15:11.25`,
                    lyric: [
                        `a`,
                        {
                            anchor: `kick slams`,
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
                            card: {
                                description: `My brother's odd behavior frustrated me to no end, and I longed to believe he was simply displaying wisdom meant for a different world. So upon reading about changeling legends many years later, I could sympathize with those villagers in times past who told tales of grownup trolls disguised as human children.`,
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
                            anchor: `baffled sobs`,
                            card: {
                                description: `The hardest thing about hurting my brother was knowing he had no way to understand the cause of my anger. The times when I turned on him and inflicted physical pain would always remain without explanation. For him, it was just another part of what life was.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `.`,
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
                            cards: [
                                {
                                    description: `I grew up puzzling over why my brother was born with autism and I wasn't, when our circumstances were no different. It wasn't far-fetched to suppose that every mother's womb starts out with a fixed supply of mental capacity to dole out to each child, and I'd selfishly taken my brother's share.`,
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
                            cards: [
                                {
                                    description: `In some legends, beating a changeling badly enough will cause it to tire of its charade and return the stolen child. This reflects the historical reality that sickly children were often abused to death, if not killed outright. So if Willy is a changeling, then it seems predestined that he should meet a violent end.`,
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
                            anchor: `with switch`,
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
                        `, whispers wind, to fix his switcheroo…`,
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
                            card: {
                                description: `Eager for a fight, the gangsters push Willy around. His shopping cart gets overturned in the commotion, causing empty bottles and cans to spill onto the ground.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `swung sounds the`,
                        {
                            anchor: `past-noon toll`,
                            card: {
                                description: `One of the gangsters grabs a wine bottle and smashes it against Willy's face. The sound reverberates throughout the neighborhood, like the peal of a town bell striking at one o'clock.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `.`,
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
                                anchor: `unsalvaged soul`,
                                cards: [
                                    {
                                        description: `To justify the abuse of sickly children, religious doctrine in the past often claimed that such children were devoid of souls.`,
                                        dotKeys: {
                                            [REFERENCE]: true,
                                        },
                                    },
                                    {
                                        wormhole: `unsalvaged_sows`,
                                    },
                                ],
                            },
                            `…`,
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
                            anchor: `Willy's stalkless bulb`,
                            properNoun: true,
                            card: {
                                description: [
                                    `The impact of the wine bottle severs Willy's brain from his spine, like a`,
                                    {
                                        anchor: `flower bulb`,
                                        wiki: `Ornamental_bulbous_plant`,
                                    },
                                    `plucked from its stalk. But once planted in the earth, bulbs can grow new stems and bloom again.`,
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
                        // NOTE: I've decided that this past tense usage really doesn't need to be explained and therefore doesn't need its own annotation.
                        `Oh, and August was the`,
                        {
                            anchor: `sawdust month`,
                            card: {
                                description: `In this "saddest" month of Willy's murder, I help my mother collect wood shavings left over from my father's carpentry. We then spread them onto our flower beds.`,
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
                            anchor: `mulch soften asphodel`,
                            review: true,
                            card: {
                                description: [
                                    `We plant`,
                                    {
                                        anchor: `asphodels`,
                                        wiki: `Asphodelus`,
                                    },
                                    `, a popular garden plant named after the immortal flower that populates the`,
                                    {
                                        anchor: `underworld`,
                                        wiki: `Greek_underworld`,
                                    },
                                    `in Greek mythology. By softening the soil, the mulch gives new life to our flower beds. And perhaps Willy will do the same for our neighborhood, by softening the "asphalt" beneath which his body once lay.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `2:18:22.50`,
                    lyric: [
                        {
                            anchor: `Baby bluebonnets`,
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
                            anchor: `forgotten amongst the mail`,
                            card: {
                                description: `Having recently assaulted my brother in anger over a shredded comic book, I'm now indifferent to the latest issue from my monthly subscription.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                review: true,
                card: {
                    description: [
                        `To play the electric guitar riff heard here, I used both a`,
                        {
                            anchor: `glass slide`,
                            wiki: `Slide_guitar`,
                        },
                        `and the`,
                        {
                            anchor: `whammy bar`,
                            wiki: `Vibrato_systems_for_guitar`,
                        },
                        `at the same time. Since either of these can bend the pitch on its own, it makes no sense to combine them— which is exactly why a troll guitarist would do so.`,
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
                    mixTime: `2:24:22.50`,
                    lyric: [
                        `But`,
                        {
                            anchor: `how marbleless`,
                            card: {
                                description: `Occasionally, someone would make a clumsy attempt to ease my parents' worries by claiming to envy my brother. This person might remark on how "marvelous" it must be to live without one's "marbles," for example. I had to wonder how gladly they would embrace the greater likelihood of being a victim of violent crime as well.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `, some reckoned,`,
                    ],
                },
                {
                    mixTime: `2:27:22.50`,
                    lyric: [
                        `being ever stuck in`,
                        {
                            anchor: `imp-runt age of mind`,
                            cards: [
                                {
                                    description: [
                                        `After my brother was diagnosed with autism, my mother went back to school to learn child development. At the dinner table, she would explain to us concepts such as "`,
                                        {
                                            anchor: `imprinting`,
                                            wiki: `Imprinting_(psychology)`,
                                        },
                                        `," the phase during which a child learns emotional attachment. She would then voice regret that she began her studies too late to help my brother.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Since an "imp runt" is literally the weakest member in a litter of troll infants, it's surely the one that a troll parent would try to replace with a stolen human child.`,
                                    ],
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            ],
                        },
                        `!`,
                    ],
                },
                {
                    mixTime: `2:30:22.50`,
                    lyric: [
                        `Are you sick?`,
                        {
                            anchor: `I am seven`,
                            card: {
                                description: `My brother learned to answer the question of how old he was at age six. But even after turning seven, he still insisted on answering "six." Though we finally got him to accept that "seven" was the new correct answer, the cost in sweat and tears was so high that when he turned eight, none of us had the energy to relive the ordeal. He's been answering "seven" ever since. And so here, I imagine him as a grownup testily correcting a stranger who has the nerve to ask if he's "six."`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `, he'd reply…`,
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
                            anchor: `heavy fears`,
                            card: {
                                description: `One night I woke up screaming in fear of my mortality. My mother sat by my bedside to comfort me.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        // NOTE: Any re-recording should say "Mama."
                        `, Mummy laughs,`,
                    ],
                },
                {
                    mixTime: `2:51:22.50`,
                    lyric: [
                        `for a`,
                        {
                            anchor: `cub not yet Webelos`,
                            cards: [
                                {
                                    description: `My mother might also be assuring me that I'm not yet "way below."`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: [
                                        `In the`,
                                        {
                                            anchor: `Cub Scouts`,
                                            wiki: `Cub_Scouting_(Boy_Scouts_of_America)`,
                                        },
                                        `, Webelos is the eldest rank, earned by boys in the fourth or fifth grade. It stands for "We'll Be Loyal Scouts."`,
                                    ],
                                },
                            ],
                        },
                        `!`,
                    ],
                },
                {
                    mixTime: `2:54:11.25`,
                    lyric: [
                        `Son,`,
                        {
                            anchor: `seventy years`,
                            todo: true,
                            problem: `Review one more time.`,
                            cards: [
                                {
                                    description: `My mother told me not to worry, since I wasn't going to die for a long while. She then assured me that when my time is finally up— perhaps once I reach seventy— I'll have long made peace with death somehow.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `seventy_years`,
                                        wormholePrefix: FLASHBACK_TO_WORMHOLE_PREFIX,
                                    },
                                },
                            ],
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
                            anchor: `needle done`,
                            cards: [
                                {
                                    description: `My mother tells me that my life is a patchwork onto which I'll continue to sew new experiences. In turn, the insights gained from these experiences will inform and enrich my art.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `needle_done`,
                                },
                            ],
                        },
                        `, you'll write this`,
                        {
                            anchor: `book of yours`,
                            review: true,
                            card: {
                                description: [
                                    `I wore an eyepatch as a child to correct my`,
                                    {
                                        anchor: `lazy eye`,
                                        wiki: `Amblyopia`,
                                    },
                                    `. Since I lacked depth perception, it wasn't a struggle for me to recreate on paper what I saw in real life. Impressed by my drawing skills, my mother insisted that I was destined to be a great artist. So I always figured that one day I would create a masterpiece— perhaps something like the`,
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
                        `.`,
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
                            properNoun: true,
                            card: {
                                description: [
                                    `My favorite word as a child was "bobtail." I was just so proud of myself the day I realized that the line, "Bells on bobtail ring," from the song "`,
                                    {
                                        anchor: `Jingle Bells`,
                                        wiki: `Jingle_Bells`,
                                    },
                                    `," isn't a jumble of random words. In any case,`,
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
