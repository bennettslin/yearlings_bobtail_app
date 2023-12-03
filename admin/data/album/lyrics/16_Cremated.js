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
    BRIDGE,
    INTRO,
    SOLO,
    OUTRO,
    IS_UNIT_DOT,
    FORESHADOW_OF_WORMHOLE_PREFIX,
} from '../../../../src/constants/lyrics'

export default {
    title: 'Cremated',
    /**
     * This is for recalibrating the mix start time after redoing the mix. This
     * song is unusual, in that the player start time is used to determine the
     * mix start time, rather than the other way around.
     *
     * pST - pRT + mRT = mST
     * 2926.829 - 2951.729 + 24.804 => -0.096 => -0:00:02.88
     */
    referenceDescription: `"Atavist" in measure 12`,
    mixReferenceTime: `0:24:24.13`,
    mixStartTime: `-0:00:02.88`,
    playerReferenceTime: 2951.729,
    playerStartTime: 2926.829,
    overview: `While I can't deny that dating White women helped silence the nagging feeling I had of being genetically inferior, I honestly didn't seek them out. A case in point is Miriam, whom I met at a Yearlings show. She was the storybook ending that my ego had been waiting for: cute, hip, and drawn to me through no effort on my part. We lasted a few months. I always did wonder if she was just slumming it with me.`,
    isDoublespeaker: true,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                review: true,
                card: {
                    description: `Once when I was a child, a playmate asked if I knew what cremation was. I didn't, but I assumed it must be fun and tasty. Of course, the horrifying truth was revealed to me a moment later. I thought this was the perfect metaphor for a song about the seemingly innocent day trip that Miriam had planned out to end with our breakup.`,
                    dotKeys: {
                        [BACKSTORY]: true,
                        [OBSERVATION]: true,
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
                        lyric: [
                            {
                                anchor: `Or another`,
                                card: {
                                    description: `Even if I can't be with Mara, I can still be with someone like her. Namely, Miriam.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                            },
                            `…`,
                        ],
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `The first line of this song was originally the last line of the previous one, before I got the idea to chain them together as a`,
                        {
                            anchor: `medley`,
                            wiki: `Medley_(music)`,
                        },
                        `, à la`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Abbey Road`,
                                wiki: `Abbey_Road`,
                            },
                        },
                        `by the Beatles. The resulting sense of urgency provides a nice push toward the album's finish.`,
                    ],
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: SOLO,
            },
            mainVerses: [
                {
                    mixTime: `0:04:10.13`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(electric guitar and acoustic guitar)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `A`,
                        {
                            anchor: `Shepard tone`,
                            wiki: `Shepard_tone`,
                        },
                        `is an auditory illusion in which a tone moves steadily up or down in pitch yet remains fixed within the same register. A steady decline seemed like an apt metaphor for my breakup with Miriam, so I included two Shepard tones here. One is a low bass that descends in discrete half steps, while the other is a high treble that descends in a perpetual glissando. Since I didn't know how to code at the time, both were made by splicing together`,
                        {
                            anchor: `pure tones`,
                            wiki: `Pure_tone`,
                        },
                        `produced on a synthesizer.`,
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
                    mixTime: `0:24:10.63`,
                    lyricLeft: [
                        {
                            anchor: `At a vista`,
                            card: {
                                description: [
                                    `Driving in Miriam's car, we arrive at a secluded spot on a cliff overlooking the`,
                                    {
                                        anchor: `San Francisco Bay`,
                                        wiki: `San_Francisco_Bay`,
                                    },
                                    `.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `,`,
                        {
                            // NOTE: There are actually two 'key turned's in this song?
                            anchor: `key turned`,
                            card: {
                                wormhole: `key_turned`,
                            },
                        },
                    ],
                    lyricRight: [
                        {
                            anchor: `Atavist`,
                            review: true,
                            card: {
                                description: [
                                    `An`,
                                    {
                                        anchor: `atavism`,
                                        wiki: `Atavism`,
                                    },
                                    `is a genetic trait that resurfaces after several generations. Though I didn't have autism myself, it still lurked in my genes, ready to spring upon my children. Or else, upon my grandchildren. Or upon their children…`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `stuck`,
                        {
                            anchor: `feet first`,
                            card: {
                                description: [
                                    `My brother was a`,
                                    {
                                        anchor: `breech baby`,
                                        wiki: `Breech_birth`,
                                    },
                                    `, having exited the womb bottom first rather than head first. This complicated the delivery, which my mother once hypothesized to be the cause of his autism.`,
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
                    mixTime: `0:27:02.57`,
                    lyricLeft: [
                        `to`,
                        {
                            anchor: `first switch`,
                            card: {
                                description: `After parking the car, Miriam flips the ignition switch to the accessory position and turns on the stereo.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `in her low two-seater,`,
                    ],
                    lyricRight: [
                        `subversive`,
                        {
                            // NOTE: I added a hyphen in the lyrics as well.
                            anchor: `inner lotus-eater`,
                            review: true,
                            card: {
                                description: [
                                    `In the`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Odyssey`,
                                            wiki: `Odyssey`,
                                        },
                                    },
                                    `, the`,
                                    {
                                        anchor: `lotus-eaters`,
                                        wiki: `Lotus-eaters`,
                                    },
                                    `were islanders who whiled away their days eating the narcotic fruit of the lotus. Odysseus could only look upon them with curious pity. Similarly, though Miriam would comment on how much I drank, she never judged me for it. In hindsight, it's because she, like Odysseus, was keeping her distance.`,
                                ],
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
                    mixTime: `0:30:21.83`,
                    lyricLeft: `and deaf from blasting frontal speakers,`,
                    lyricRight: [
                        `an everlasting`,
                        {
                            anchor: `doublespeaker`,
                            review: true,
                            card: {
                                description: `Though I tried to adopt an innocent persona, Miriam must have known about the drunken incidents. My reputation preceded me by that point, and we had friends in common. Still, I never offered an explanation for the discrepancy, and she never asked for one. I think she just accepted it as part of the adventure.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:33:27.43`,
                    lyricLeft: [
                        `this`,
                        {
                            anchor: `phoenix risen limp`,
                            card: {
                                description: [
                                    `In Greek mythology, the`,
                                    {
                                        anchor: `phoenix`,
                                        wiki: `Phoenix_(mythology)`,
                                    },
                                    `is a bird reborn from its own ashes. And having broken up with Sita, I also await my triumphant rebirth. But with Miriam seated on my lap as we make out, I'm suddenly overcome with self-doubt, and my "penis" rises limply, unable to reach a full erection.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `beneath her`,
                    ],
                    lyricRight: [
                        `his`,
                        {
                            anchor: `beaten wit and id`,
                            card: {
                                description: [
                                    `Like the id in`,
                                    {
                                        anchor: `Freudian psychology`,
                                        wiki: `Freud's_psychoanalytic_theories`,
                                    },
                                    `, the primal urges of my drunken self regularly undermined the rational schemes of his sober half.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `she's deemed her`,
                    ],
                },
                {
                    mixTime: `0:36:19.38`,
                    lyricLeft: [
                        {
                            anchor: `pinkish slip`,
                            card: {
                                description: [
                                    `Miriam is wearing a silky pink undergarment under her skirt. Of course, a pink slip is also a notice to an employee that they're getting laid off…`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `, making scrunched her pantyhose.`,
                    ],
                    lyricRight: [
                        `sinking ship, maybe`,
                        {
                            anchor: `good for anecdotes`,
                            card: {
                                description: `Though Miriam was entertained by my character, it wasn't in a way that one should hope for. I was to be the oddball ex-boyfriend in a tale of her misspent youth, not the life companion who would one day hear all about it.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                review: true,
                card: {
                    description: `I chose to use doublespeaker rhyme for this song because my original plan was to contrast Miriam's inner thoughts with mine. But I kept forgetting which column of lyrics was whose, which made me realize there was no real contrast to show. We both knew the relationship would fail; one of us just had a better idea of when.`,
                    dotKeys: {
                        [OBSERVATION]: true,
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
                    mixTime: `0:39:11.31`,
                    lyricLeft: [
                        {
                            anchor: `His god humming "Freebird,"`,
                            card: {
                                description: [
                                    `Affixed to the dashboard is an ornament of a native Hawaiian man in a grass skirt. As the stereo blares`,
                                    {
                                        anchor: `Lynyrd Skynyrd`,
                                        wiki: `Lynyrd_Skynyrd`,
                                    },
                                    `'s "`,
                                    {
                                        anchor: `Freebird`,
                                        wiki: `Free_Bird`,
                                    },
                                    `," he strums his ukulele in rhythm to the mountain god, whose rumblings tell the legend of an all-American phoenix.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `the hula guy`,
                    ],
                    lyricRight: `As comedy teams work, a hoot the times`,
                },
                {
                    mixTime: `0:42:16.91`,
                    lyricLeft: [
                        `nods as`,
                        {
                            anchor: `she drums her toes`,
                            card: {
                                description: `Of course, he actually sways because Miriam, who happens to be my all-American goddess, is humming along and tapping the underside of the dashboard with her feet.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                    lyricRight: [
                        `not`,
                        {
                            anchor: `at each other's throats`,
                            card: {
                                description: [
                                    `Some comedy duos like`,
                                    {
                                        anchor: `Abbott and Costello`,
                                        wiki: `Abbott_and_Costello`,
                                    },
                                    `famously didn't get along. This enlivened the dynamic between them onstage, but it made for tense moments when the tape stopped rolling. So while Miriam might have enjoyed watching my two halves outwit each other, she surely wanted no part of the underlying drama that animated this spectacle.`,
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
            ],
        },
        {
            unitMap: {
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `0:46:06.17`,
                    lyricLeft: [
                        `Though, she`,
                        {
                            anchor: `ponders the children`,
                            todo: true,
                            problem: `Review one more time.`,
                            card: {
                                description: `My mother once advised me not to have children, given the autism that runs in our genes, and her difficulties in raising my brother. I often wondered if the women I dated, in weighing my desirability as a lifelong partner, first pictured themselves giving this talk to their own child.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        {
                            anchor: `Trophy bronzed`,
                            review: true,
                            cards: [
                                {
                                    description: [
                                        `The first time I had sex with a woman other than Sita, I left the used condom on my nightstand for days. Like a proud parent who`,
                                        {
                                            anchor: `bronzes`,
                                            wiki: `Bronzing`,
                                        },
                                        `their baby's shoes, I was just awestruck that this tiny thing I'd squirted out could grow into something bigger.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    wormhole: `trophy_bronze`,
                                },
                            ],
                        },
                        {
                            anchor: `from a Trojan`,
                            card: {
                                description: `Having climaxed first, Miriam wraps up our little tryst by removing the condom and giving me a blowjob.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:48:28.09`,
                    lyricLeft: [
                        `born from a`,
                        {
                            anchor: `forced conversion`,
                            card: {
                                description: [
                                    `Historically, conquered peoples were`,
                                    {
                                        anchor: `forced to adopt`,
                                        wiki: `Forced_conversion`,
                                    },
                                    `the religious beliefs of their conquerors. More often than not, however, they simply repurposed old customs and deities to fit their new faith. And so I imagine Miriam skeptically eyeing my attempts to assimilate into her world, as traces of my corrupt ways must surely remain.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `for some`,
                        {
                            anchor: `unforeskinned virgin`,
                            card: {
                                description: `I learned a long time ago not to wear identity markers or hold personal convictions that would limit the size of my dating pool. I think this is why I've never gotten a tattoo. I needed to be a blank slab for each new woman to shape into whatever she liked. So here I imagine that before dating Miriam, I'd reset myself to a default state of being sexually inexperienced and having an intact foreskin.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:52:17.27`,
                    lyricLeft: [
                        `on a`,
                        {
                            anchor: `self-servicing cleric surgeon`,
                            card: {
                                description: [
                                    `But while my drunken self is being forcibly converted to the faith of his sober half, this internal conflict remains unseen by others, who can only watch in bewilderment as I perform`,
                                    {
                                        anchor: `circumcision`,
                                        wiki: `Circumcision`,
                                    },
                                    `on myself.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: `on the shelf, serves his declared assertion:`,
                },
                {
                    mixTime: `0:56:06.44`,
                    lyricLeft: `duly may inherit his burdens.`,
                    lyricRight: [
                        `to remain`,
                        {
                            anchor: `inherently perfect`,
                            card: {
                                description: `The real purpose of having a drunken alter ego was to blame it for all my selfish desires while remaining above reproach myself. I didn't tell Miriam this, of course, since the latest thing I selfishly desired was her.`,
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
                    mixTime: `0:58:14.68`,
                    lyricLeft: [
                        `This swarm pumped and`,
                        {
                            anchor: `kissed off, she purges up`,
                            card: {
                                description: `After bringing me to orgasm, Miriam leans over the car door to spit out my semen. But in this innocent act, I can't help but read a hidden message. Namely, that the genes in my defective sperm are forbidden to mingle with hers.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                    lyricRight: [
                        `as`,
                        {
                            anchor: `worn puppet`,
                            cards: [
                                {
                                    description: `The condom sits motionless on the car seat, like a puppet so full of life just moments before. But having taken me to a place I otherwise couldn't have gone, it has no other use and can now be discarded.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: {
                                        wormholeKey: `puppet`,
                                        wormholePrefix: FORESHADOW_OF_WORMHOLE_PREFIX,
                                    },
                                },
                            ],
                        },
                        `his`,
                        {
                            anchor: `offscreen person dubs`,
                            card: {
                                description: [
                                    `Of course, this wouldn't be the first time I've tossed aside a puppet after it served my purpose. Like a`,
                                    {
                                        anchor: `ventriloquist`,
                                        wiki: `Ventriloquism`,
                                    },
                                    `with a dummy on his lap, I made my drunken half say all the questionable things needed to fulfill my desires, while I just sat there looking appalled.`,
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
                formType: VERSES,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `1:01:06.55`,
                    lyricLeft: `Despite once promising forever,`,
                    lyricRight: `His silent dramedy works better;`,
                },
                {
                    mixTime: `1:03:28.43`,
                    lyricLeft: [
                        `which she swore when scarcely`,
                        {
                            anchor: `twenty-one`,
                            card: {
                                description: `Miriam was several years younger than me. So she was still eager to live it up, just as I was thinking it would be nice to settle down.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                    lyricRight: [
                        {
                            anchor: `twitching sword`,
                            card: {
                                description: [
                                    `Dubbing refers to the`,
                                    {
                                        anchor: `replacement of an actor's voice`,
                                        wiki: `Dubbing_(filmmaking)`,
                                    },
                                    `in film, but also to the ritual of`,
                                    {
                                        anchor: `conferring knighthood`,
                                        wiki: `Accolade`,
                                    },
                                    `. So now we find my drunken half, confused by the order he's been given to speak for my crimes, instead patting me erratically on the shoulder with a sharp sword.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `in care,`,
                        {
                            anchor: `he's anyone`,
                            card: {
                                description: `After all, it's not at all obvious to my drunken self that he's the dummy whose words and actions are being dictated by his sober half, rather than the other way around.`,
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
                formType: SOLO,
            },
            mainVerses: [
                {
                    mixTime: `1:09:25.83`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(organ and acoustic guitar)`,
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: BRIDGE,
            },
            mainVerses: [
                {
                    mixTime: `1:29:26.39`,
                    lyricCentre: [
                        {
                            anchor: `Needle done`,
                            cards: [
                                {
                                    description: `Having gone all the way with Miriam, I'm at peace with our inevitable breakup. As I bask in my post-coital glow, a scenario plays out in my mind of how things will end. I see myself as a terminally ill patient being put to sleep while an old record finishes playing in the background.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: 'needle_done',
                                },
                            ],
                        },
                        {
                            anchor: `will not retract`,
                            card: {
                                // NOTE: Euthanasia is mentioned in Pchelka.
                                description: [
                                    `Some record players lack an auto-return function, so the needle will coast in the lead-out groove until it's manually lifted. Also, during`,
                                    {
                                        anchor: `euthanasia`,
                                        wiki: `Euthanasia`,
                                    },
                                    `, the needle is left in the vein as the sedative is slowly injected.`,
                                ],
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `1:33:29.30`,
                    lyricCentre: [
                        `it`,
                        {
                            anchor: `hums a typo`,
                            review: true,
                            card: {
                                description: [
                                    `Like a typo, Miriam's involvement with me was a mistake she could easily correct. And like a "`,
                                    {
                                        anchor: `Type O`,
                                        wiki: `Blood_type`,
                                    },
                                    `," the universal blood donor, I was eager to give of myself to all other women, but only one was willing to give as much back.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        {
                            anchor: `fragile ex`,
                            review: true,
                            card: {
                                description: [
                                    `Miriam was delicate in breaking up with me, knowing the kind of fragile ex-boyfriend I was sure to be. But still it had to be done, because who knew what horrors lurked in my genetic makeup? Perhaps I was a carrier of "`,
                                    {
                                        anchor: `Fragile X`,
                                        wiki: `Fragile_X_syndrome`,
                                    },
                                    `," a mutated X chromosome that causes mental disability.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `passed through ash…`,
                    ],
                },
                {
                    mixTime: `1:38:02.19`,
                    lyricCentre: [
                        `With his`,
                        {
                            anchor: `vinyl, exit`,
                            card: {
                                description: [
                                    `After Miriam helps me to my "final exit," a euphemism used by proponents of`,
                                    {
                                        anchor: `assisted suicide`,
                                        wiki: `Assisted_suicide`,
                                    },
                                    `, I imagine her helping herself to my record collection, which she'll trade for cash at a record store.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `Miriam to cash his stash.`,
                    ],
                },
                {
                    mixTime: `1:41:21.36`,
                    lyricCentre: [
                        `Undeluded, she'll bask in`,
                        {
                            anchor: `selfish cut-off jeans`,
                            card: {
                                description: [
                                    `In`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `The Selfish Gene`,
                                            wiki: `The_Selfish_Gene`,
                                        },
                                    },
                                    `,`,
                                    {
                                        anchor: `Richard Dawkins`,
                                        wiki: `Richard_Dawkins`,
                                    },
                                    `explains natural selection from the vantage point of genes themselves, rather than the organisms that carry them. So as Miriam blocks me from getting under her cut-offs ever again, perhaps it's really her "genes," wishing to stay "undiluted," that have selfishly conspired to "cut off" any chance of mixing with mine.`,
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
                    mixTime: `1:45:24.19`,
                    lyricCentre: [
                        `and`,
                        {
                            anchor: `in her pool`,
                            card: {
                                description: `Lying sedated on my deathbed, I see Miriam lounging by a swimming pool, radiant in her youth. I exhaust my last breath to wish her well, but she doesn't hear me and plunges into the deep end.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `, hears not a`,
                        {
                            anchor: `worrisome`,
                            card: {
                                description: `After the breakup with Miriam, I only had good wishes for her, which surprised me given how competitive and selfish I was around Sita. But I came away knowing that a woman like Miriam could want me, even if just for a while. I didn't have that before, so it felt like an amazing bargain.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `"`,
                        {
                            anchor: `Bless her`,
                            todo: true,
                            problem: `Revise. This one and the next are together trying to convey an idea that I still don't think is quite there. Like, the idea of Buddhism seems to come out of nowhere? How is it related, exactly? If articulated correctly, this could be one of my best points, so really think it through. Should be about White women.`,
                            card: {
                                description: [
                                    `The title of the play`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Children of a Lesser God`,
                                            wiki: `Children_of_a_Lesser_God_(play)`,
                                        },
                                    },
                                    `, which centers on a deaf woman, suggests that being disabled is like living in a world created by an inferior deity. But I interpreted it differently as a child. Given the autism that ran in my family, which correlated in my mind with our foreign way of worship, I assumed it meant that the disabled`,
                                    {
                                        isEmphasis: true,
                                        lyric: `themselves`,
                                    },
                                    `are the inferior creations.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `,`,
                        {
                            anchor: `Godspeed`,
                            properNoun: true,
                            todo: true,
                            problem: `Revise. See above.`,
                            cards: [
                                {
                                    description: `To compound my insecurities as a child about being raised Buddhist, my complexion was different from that of everyone else in Sasha's world. And so my inferiority complex failed to distinguish between carrying faulty genes, following a faulty faith, and being of a faulty race. They all seemed to derive from a single congenital defect at the core of my being.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: `My imagined scenario ends with Miriam feeling relieved to know that in her gene pool, "here's not where some lesser god has peed."`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `…"`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    // NOTE: Change in recording? Connect to Uncanny Valley?
                    description: `The bouncing ping pong ball heard here mimics an alarm clock at my bedside as I fade away in my infirmity. Its ticks reverberate like the echoes of a tennis ball being volleyed back and forth, and I picture Miriam in a leisurely match with her new beau.`,
                    dotKeys: {
                        [NARRATIVE]: true,
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
                    mixTime: `1:51:21.59`,
                    lyricLeft: [
                        `The`,
                        {
                            anchor: `seat hurt`,
                            card: {
                                description: `Somehow I threw out my back while reclining the seat with Miriam on top of me. Perhaps it's a sign that I'm getting on in years.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `when he lowered it,`,
                    ],
                    lyricRight: `The key turned and she floors it,`,
                },
                {
                    mixTime: `1:54:13.48`,
                    lyricLeft: [
                        `though no worse but for`,
                        {
                            anchor: `his soreness`,
                            card: {
                                description: `Miriam knew how sore I'd be about the breakup, and so she gratified me with her most vigorous lovemaking yet. But with no cause to explain why my penis is now sore, I can only suppose that it's hard to keep up in my old age.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                    lyricRight: [
                        `so`,
                        {
                            anchor: `homeward the sport's escorted`,
                            card: {
                                description: `Having plied me with sex to ensure I'll be a good sport, Miriam now prepares to drive me home.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `1:58:02.65`,
                    lyricLeft: [
                        `this geezer's`,
                        {
                            anchor: `life support's abortive`,
                            card: {
                                description: [
                                    `Based on the perceived motives of younger women who date older men, I imagine that Miriam would jump at the first chance to remove me from`,
                                    {
                                        anchor: `life support`,
                                        wiki: `Life_support`,
                                    },
                                    `.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                    lyricRight: [
                        `the`,
                        {
                            anchor: `cleaved horizon`,
                            card: {
                                description: `As we make our way downhill, the horizon appears like a cleaver splitting the sky open, with the road spilling down on us like wet cement pouring out from the rupture.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `pours the mortar in.`,
                    ],
                },
                {
                    mixTime: `2:01:08.17`,
                    lyricLeft: [
                        `He's`,
                        {
                            anchor: `vegging with his boner shortened`,
                            cards: [
                                {
                                    description: `Zoned out and flaccid, I'm about to be blindsided by Miriam's true intention for today's outing.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `veggie_wishbone`,
                                },
                            ],
                        },
                        `;`,
                    ],
                    lyricRight: [
                        {
                            anchor: `Redressed`,
                            card: {
                                description: `As I redress by pulling my pants back up, I'm about to learn that this latest sexual escapade was meant to be redress for the bad news that Miriam has forthcoming.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `, he gets his notice, short an`,
                    ],
                },
                {
                    mixTime: `2:04:00.06`,
                    lyricLeft: [
                        `a pop, and she`,
                        {
                            anchor: `pulls the plug`,
                            card: {
                                description: `The cigarette lighter plug pops out, and Miriam pulls it from the dashboard socket to light her cigarette. Having satisfied me with an orgasmic "pop," she's now less troubled to pull the plug on our relationship.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                    lyricRight: `apology, bold and blunt.`,
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
                    mixTime: `2:07:05.58`,
                    lyricLeft: `Lights one up then draws a daring`,
                    lyricRight: [
                        `Life's a dumb`,
                        {
                            anchor: `ex-dromedary`,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `dromedary`,
                                        wiki: `Dromedary`,
                                    },
                                    `, or Arabian camel, has a single hump on its back, while the`,
                                    {
                                        anchor: `Bactrian camel`,
                                        wiki: `Bactrian_camel`,
                                    },
                                    `has two.`,
                                ],
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `2:09:13.85`,
                    lyricLeft: [
                        `puff,`,
                        {
                            anchor: `preparing the scoop`,
                            card: {
                                description: [
                                    `Miriam searches for a way to deliver the bad news in the least messy way possible, like a pet owner readying the`,
                                    {
                                        anchor: `pooper scooper`,
                                        wiki: `Pooper-scooper`,
                                    },
                                    `for the moment her pet takes a dump on her lawn.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `, he's getting dumped.`,
                    ],
                    lyricRight: [
                        `hungry carrying this groovy`,
                        {
                            anchor: `second hump`,
                            card: {
                                description: `A camel can travel for months without eating by living off the fat in its hump. And in my own wanderings, the ego boost I gained from humping other women allowed me to live without the nourishment of Sita's love.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
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
                formType: OUTRO,
            },
            mainVerses: [
                {
                    mixTime: `2:15:11.39`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(electric piano and electric guitar)`,
                    },
                },
            ],
        },
    ],
}
