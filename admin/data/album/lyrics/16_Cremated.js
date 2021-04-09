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
    BRIDGE,
    INTRO,
    SOLO,
    OUTRO,
    IS_UNIT_DOT,
} from '../../../../app/constants/lyrics'

export default {
    path: 'cremated',
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
    overview: `While I can't deny that dating white women helped silence the nagging feeling I had of being genetically inferior, I honestly didn't seek them out. A case in point is Miriam, whom I met at a Yearlings show. She was the storybook ending my ego had been waiting for: cute, hip, and drawn to me through no effort on my part. We lasted a few months. In the end, I did wonder if she was just slumming it with me.`,
    isDoublespeaker: true,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `A childhood playmate once asked me if I knew what cremation was. I didn't but assumed it must be fun and tasty. Of course, the horrifying truth was revealed to me a moment later. I thought this was a perfect metaphor for a song about the seemingly innocent day trip that ended with Miriam breaking up with me.`,
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
                        anchor: `Or another…`,
                        card: {
                            description: `Even if I can't be with Mara, I can still be with someone like her. Namely, Miriam.`,
                            dotKeys: {
                                [NARRATIVE]: true,
                                [OBSERVATION]: true,
                            },
                        },
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `The first line of this song was originally the last line of the previous one, before I got the idea to chain them together as a`,
                        {
                            anchor: `medley,`,
                            wiki: `Medley_(music)`,
                        },
                        `à la`,
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
                        `is an auditory illusion in which a tone moves steadily up or down in pitch yet remains fixed within the same register. A steady move downward seemed an apt metaphor for my breakup with Miriam, so I included two Shepard tones here. One is a low bass that descends in discrete half steps, while the other is a high treble that does so in a perpetual glissando. Since I didn't know how to code at the time, both were made by splicing together`,
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
                            anchor: `At a vista,`,
                            card: {
                                description: [
                                    `Driving in Miriam's car, we arrive at a secluded spot on a cliff overlooking the`,
                                    {
                                        anchor: `San Francisco Bay.`,
                                        wiki: `San_Francisco_Bay`,
                                    },
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
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
                            card: {
                                description: [
                                    `My mother once advised me not to have children, given my brother's autism and my father's`,
                                    {
                                        anchor: `Asperger syndrome.`,
                                        wiki: `Asperger_syndrome`,
                                    },
                                    `After all, even if I didn't display similar traits myself, they might reappear generations later, like an`,
                                    {
                                        anchor: `atavism.`,
                                        wiki: `Atavism`,
                                    },
                                    `I often wondered if the women I dated had this same thought when judging my desirability as a long-term partner.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `stuck`,
                        {
                            anchor: `feet first,`,
                            card: {
                                description: [
                                    `My brother was a`,
                                    {
                                        anchor: `breech baby,`,
                                        wiki: `Breech_birth`,
                                    },
                                    `having exited the womb bottom first rather than head first. This complicated the delivery, which my mother once hypothesized to be the cause of his autism.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
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
                            anchor: `inner lotus-eater,`,
                            card: {
                                description: [
                                    `In the`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Odyssey,`,
                                            wiki: `Odyssey`,
                                        },
                                    },
                                    `the`,
                                    {
                                        anchor: `lotus-eaters`,
                                        wiki: `Lotus-eaters`,
                                    },
                                    `were islanders who whiled away their days eating the narcotic fruit of the lotus. Odysseus could only look upon them with curious pity. Similarly, while Miriam would comment on how much I drank, she never made judgments. In hindsight, it's because she, like Odysseus, was keeping her distance.`,
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
                    mixTime: `0:30:21.83`,
                    lyricLeft: `and deaf from blasting frontal speakers,`,
                    lyricRight: [
                        `an everlasting`,
                        {
                            anchor: `doublespeaker,`,
                            awkwardTodo: true,
                            card: {
                                description: `That first month with Miriam was one of the happiest of my life, as all my efforts to improve myself during my first five-year plan finally came to fruition. Everything I did seemed to impress her, including doublespeaker rhyme, which I came up with while we were together. So Miriam became my sounding board for how I would use it in a song to juxtapose my sober and drunken thoughts.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:33:27.43`,
                    lyricLeft: [
                        `this`,
                        {
                            anchor: `phoenix risen limp`,
                            // Just can't get that third sentence right.
                            awkwardTodo: true,
                            card: {
                                description: [
                                    `In Greek mythology, the`,
                                    {
                                        anchor: `phoenix`,
                                        wiki: `Phoenix_(mythology)`,
                                    },
                                    `is a bird reborn from its own ashes. And having broken up with Sita to date Miriam, I also await my triumphant rebirth. But now with Miriam seated on my lap as we make out, I'm suddenly overcome with self-doubt, and my "penis" rises limply, unable to reach a full erection.`,
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
                            awkwardTodo: true,
                            cards: [
                                {
                                    description: `The rational schemes of my sober self didn't always win out, of course. Sometimes the best decisions came from indulging the whims of my drunken self.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        `In`,
                                        {
                                            anchor: `Freudian psychology,`,
                                            wiki: `Freud's_psychoanalytic_theories`,
                                        },
                                        `the`,
                                        {
                                            anchor: `id`,
                                            wiki: `Id,_ego_and_super-ego`,
                                        },
                                        `represents the primal impulses of the psyche.`,
                                    ],
                                },
                            ],
                        },
                        `she's deemed her`,
                    ],
                },
                {
                    mixTime: `0:36:19.38`,
                    lyricLeft: [
                        {
                            anchor: `pinkish slip,`,
                            card: {
                                description: [
                                    `Miriam is wearing a silky pink undergarment under her skirt. Of course, a`,
                                    {
                                        anchor: `pink slip`,
                                        wiki: `Termination_of_employment`,
                                    },
                                    `is also a notice to an employee that they're getting fired…`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `making scrunched her pantyhose.`,
                    ],
                    lyricRight: [
                        `sinking ship, maybe`,
                        {
                            anchor: `good for anecdotes.`,
                            awkwardTodo: true,
                            card: {
                                description: `Though Miriam was entertained by my character, it wasn't in any way that one should hope for, which blew apart my theory that being interesting is the key to dating. I was to be the oddball ex-boyfriend providing her with a lifetime of amusing tales to share, not the future companion who would someday hear them.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                awkwardTodo: true,
                card: {
                    description: `My original plan for this song was to use doublespeaker rhyme to contrast Miriam's inner thoughts with mine. I gave up after I kept forgetting which column of lyrics corresponded with which person, making me realize that no such distinction existed. We were both of the same mind in thinking the relationship was doomed to fail. One of us just had a better idea of when.`,
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
                                        anchor: `Lynyrd Skynyrd's`,
                                        wiki: `Lynyrd_Skynyrd`,
                                    },
                                    {
                                        anchor: `"Freebird,"`,
                                        wiki: `Free_Bird`,
                                    },
                                    `he strums his ukulele in rhythm to the mountain god, whose rumblings tell the legend of an all-American phoenix.`,
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
                            anchor: `she drums her toes.`,
                            card: {
                                description: `Of course, he actually sways because Miriam, who happens to be my all-American goddess, is humming along and tapping the underside of the dashboard with her feet.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `not`,
                        {
                            anchor: `at each other's throats.`,
                            awkwardTodo: true,
                            card: {
                                description: [
                                    `Some`,
                                    {
                                        anchor: `comedy duos`,
                                        wiki: `Double_act`,
                                    },
                                    `like`,
                                    {
                                        anchor: `Abbott and Costello`,
                                        wiki: `Abbott_and_Costello`,
                                    },
                                    `famously did not get along. This enlivened the dynamic between them onstage, but it also made for tense moments when the tape stopped rolling. Similarly, while Miriam was delighted to hear my two personalities befuddle and vex each other in doublespeaker rhyme, she surely wanted no lasting part of the emotional turmoil underlying this spectacle.`,
                                ],
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
                formType: VERSES,
            },
            mainVerses: [
                {
                    mixTime: `0:46:06.17`,
                    lyricLeft: `Though, she ponders the children`,
                    lyricRight: [
                        {
                            anchor: `Trophy bronzed`,
                            // Mention something come out of me.
                            pointTodo: true,
                            cards: [
                                {
                                    description: `The first time I had sex with a woman other than Sita, I left the used condom on my nightstand for days. I was so amazed by what came out of me that I needed, like a proud parent might bronze their baby's first pair of shoes.`,
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
                                description: `Having climaxed first, Miriam wraps up our little tryst by peeling off the condom and giving me a blowjob.`,
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
                            awkwardTodo: true,
                            card: {
                                description: `I learned a long time ago not to have personal convictions or identity markers that would only limit the size of my dating pool. It's why I've never gotten a tattoo, for example. I needed to be a blank slab for each new woman to shape me into whatever she liked. And so I imagine that before dating Miriam, I'd reset myself to a default state of being sexually inexperienced and having an intact foreskin.`,
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
                            awkwardTodo: true,
                            card: {
                                description: [
                                    `Of course, while my drunken self is forced to adopt the faith of his sober half, this internal conflict remains hidden from bystanders. All they can see is me presiding over my own conversion ritual and surgically`,
                                    {
                                        anchor: `removing my own foreskin.`,
                                        wiki: `Circumcision`,
                                    },
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
                            anchor: `inherently perfect,`,
                            awkwardTodo: true,
                            card: {
                                description: `Of course, the real purpose for my drunken personality was to blame it for all the things I selfishly desired, while remaining above reproach myself. I didn't tell Miriam this, which makes sense, since the most recent thing I selfishly desired was her.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:58:14.68`,
                    lyricLeft: [
                        `This swarm pumped and`,
                        {
                            anchor: `kissed off, she purges up.`,
                            awkwardTodo: true,
                            card: {
                                description: `Upon bringing me to orgasm, Miriam sucks up the ejaculate and leans over the car door to spit it out. But this innocent act seems to carry a hidden message, that the genes in my defective sperm must never be allowed to mingle with hers.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `as`,
                        {
                            anchor: `worn puppet`,
                            // General point is there, just needs major rewording.
                            iffyTodo: true,
                            card: {
                                description: [
                                    `Picturing the discarded condom as a lifeless puppet, I realize I'm like a`,
                                    {
                                        anchor: `ventriloquist.`,
                                        wiki: `Ventriloquism`,
                                    },
                                    `The dummy of my drunken self can be made to say and do all the questionable things needed to get what I want, while I, an innocent onlooker, just sit there looking appalled.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `his`,
                        {
                            anchor: `offscreen person dubs.`,
                            card: {
                                description: `Of course, it wasn't always obvious that my drunken self was the dummy whose words and actions were dictated by his sober half, rather than the other way around.`,
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
                            anchor: `twenty-one.`,
                            card: {
                                description: `Miriam was several years younger than me. So she was still eager to live it up, just as I was thinking it would be nice to settle down.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        {
                            anchor: `twitching sword`,
                            card: {
                                description: [
                                    {
                                        anchor: `Dubbing`,
                                        wiki: `Dubbing_(filmmaking)`,
                                    },
                                    `is the replacement of an actor's voice in film, but it can also refer to the ritual of`,
                                    {
                                        anchor: `conferring knighthood.`,
                                        wiki: `Accolade`,
                                    },
                                    `And so I imagine my drunken self, confused by the orders he's been given to speak for his sober half's crimes, instead erratically patting his sober half on the shoulder with a sharp sword.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `in care, he's anyone.`,
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
                                    description: `Having gone all the way with Miriam, I'm at peace with our inevitable breakup. As I bask in my post-coital glow, a scenario plays out in my mind of how things will end. I picture myself as a terminally ill patient being put to sleep while an old record finishes playing in the background.`,
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
                            anchor: `will not retract,`,
                            card: {
                                description: [
                                    `Some record players lack an auto-return function, so the needle will coast in the lead-out groove until it's manually lifted. Also, during euthanasia, the needle is left in the vein as the`,
                                    {
                                        anchor: `barbiturate`,
                                        wiki: `Barbiturate`,
                                    },
                                    `is slowly injected.`,
                                ],
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:33:29.30`,
                    lyricCentre: [
                        `it hums`,
                        {
                            anchor: `a typo`,
                            // Specify that universal donor cannot receive.
                            pointTodo: true,
                            card: {
                                description: [
                                    `Like a typo, Miriam's involvement with me was a simple mistake that she could easily correct. And like a`,
                                    {
                                        anchor: `"Type O,"`,
                                        wiki: `Blood_type`,
                                    },
                                    `the universal blood donor, I was eager to give of myself to her, even as she could do nothing to save me in return.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        {
                            anchor: `fragile ex`,
                            // General point is all there, just needs major rewording.
                            iffyTodo: true,
                            card: {
                                description: [
                                    `Knowing the kind of fragile ex-boyfriend I was sure to be, Miriam must have dreaded the breakup. But of course she had no choice, since who knew what horrors lurk in my genetic makeup? Perhaps I'm a carrier of`,
                                    {
                                        anchor: `"Fragile X,"`,
                                        wiki: `Fragile_X_syndrome`,
                                    },
                                    `a mutated X chromosome that results in mental disability.`,
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
                                        anchor: `assisted suicide,`,
                                        wiki: `Assisted_suicide`,
                                    },
                                    `I imagine her helping herself to my record collection, which she'll trade for cash at a record store.`,
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
                            anchor: `selfish cut-off jeans,`,
                            card: {
                                description: [
                                    `In`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `The Selfish Gene,`,
                                            wiki: `The_Selfish_Gene`,
                                        },
                                    },
                                    {
                                        anchor: `Richard Dawkins`,
                                        wiki: `Richard_Dawkins`,
                                    },
                                    `explains natural selection from the vantage point of genes themselves, rather than the individuals who carry them. So as Miriam blocks me from getting under her cutoffs ever again, I imagine it's because her "genes," wishing to remain "undiluted," have conspired to "cut off" any chance of mixing with mine.`,
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
                    mixTime: `1:45:24.19`,
                    lyricCentre: [
                        `and`,
                        {
                            anchor: `in her pool,`,
                            card: {
                                description: `Lying sedated on my deathbed, I see Miriam lounging by a swimming pool, eternally radiant in her youth. I exhaust my last breath to wish her well, but she doesn't hear me and plunges into the deep end.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `hears not a`,
                        {
                            anchor: `worrisome`,
                            // I really just don't like this point to begin with.
                            hardTodo: true,
                            card: {
                                description: `After the breakup with Miriam, I continued to care about her well-being and would ask mutual friends about her. This surprised me, given how selfishly I behaved every time I broke up with Sita. But I still came away knowing that someone like Miriam could want me, even if just for a while. As far as I was concerned, then, I got a pretty good deal.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        {
                            anchor: `"Bless her,`,
                            card: {
                                description: [
                                    `The title of the play`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Children of a Lesser God,`,
                                            wiki: `Children_of_a_Lesser_God_(play)`,
                                        },
                                    },
                                    `which centers on a deaf woman, suggests that being disabled is like living in a world created by an inferior deity. But I interpreted it differently as a child. Given the autism that ran in my family, which correlated in my mind with our foreign way of worship, I assumed it meant the disabled`,
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
                        {
                            anchor: `Godspeed…"`,
                            properNoun: true,
                            cards: [
                                {
                                    description: `To further compound my insecurities in being raised Buddhist, my complexion was also different from that of everyone else in Sasha's world. And so my inferiority complex failed to distinguish between carrying faulty genes, following a faulty faith, and being of a faulty race. They all seemed to derive from a single congenital defect at the core of my being.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    description: `My imagined scenario ends with Miriam feeling mightily relieved to know that in her gene pool, "here's not where some lesser god has peed."`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                // Does this actually connect?
                pointTodo: true,
                card: {
                    // NOTE: Change in recording? Connect to Uncanny Valley?
                    description: `The bouncing ping pong ball here evokes the ticking of a wall clock by my deathbed. As I fade away in my infirm state, the echoes reverberate like the sound of a tennis ball being volleyed back and forth, and I picture Miriam in a leisurely match with her new beau.`,
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
                            // Include my feelings of being infirm.
                            pointTodo: true,
                            card: {
                                description: `I somehow threw out my back while my seat was reclined with Miriam on top of me. I fancy that it's because I'm getting on in my years.`,
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
                            anchor: `his soreness,`,
                            // Make it about old age.
                            pointTodo: true,
                            card: {
                                description: `Miriam's vigorous lovemaking today has left me chafed in certain areas.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `so`,
                        {
                            anchor: `homeward the sport's escorted,`,
                            card: {
                                description: `Having plied me with sex to ensure I'll be a good sport, Miriam now prepares to drive me home.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:58:02.65`,
                    lyricLeft: [
                        `this geezer's`,
                        {
                            anchor: `life support's abortive.`,
                            card: {
                                description: [
                                    `Based on the perceived motives of younger women who date older men, I imagine that Miriam would jump at the first chance to remove me from`,
                                    {
                                        anchor: `life support.`,
                                        wiki: `Life_support`,
                                    },
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `the`,
                        {
                            anchor: `cleaved horizon`,
                            card: {
                                description: `As we make our way downhill, the horizon appears like a cleaver splitting the sky open, as the road spills down on us like wet cement pouring out from the rupture.`,
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
                            anchor: `vegging with his boner shortened;`,
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
                    ],
                    lyricRight: [
                        {
                            anchor: `Redressed,`,
                            awkwardTodo: true,
                            card: {
                                description: `As I redress by pulling my pants back up, I'm about to learn that this latest sexual escapade was really meant as redress for the bad news that Miriam has forthcoming.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `he gets his notice, short an`,
                    ],
                },
                {
                    mixTime: `2:04:00.06`,
                    lyricLeft: [
                        `a pop, and she`,
                        {
                            anchor: `pulls the plug.`,
                            card: {
                                description: `The cigarette lighter plug pops out, and Miriam pulls it from the dashboard socket to light her cigarette. Having satisfied me with an orgasmic "pop," she's now less troubled to pull the plug on our relationship.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [PUN]: true,
                                },
                            },
                        },
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
                            anchor: `ex-dromedary,`,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `dromedary,`,
                                        wiki: `Dromedary`,
                                    },
                                    `or Arabian camel, has a single hump on its back, while the`,
                                    {
                                        anchor: `Bactrian camel`,
                                        wiki: `Bactrian_camel`,
                                    },
                                    `has two.`,
                                ],
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:09:13.85`,
                    lyricLeft: [
                        `puff,`,
                        {
                            anchor: `preparing the scoop,`,
                            // Just needs much better phrasing.
                            iffyTodo: true,
                            card: {
                                description: `Miriam searches for a way to deliver the bad news in the least messy way possible. It's as if she stands ready with scoop in hand, in case her pet loses control and takes a dump on her freshly manicured lawn.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `he's getting dumped.`,
                    ],
                    lyricRight: [
                        `hungry carrying this groovy`,
                        {
                            anchor: `second hump.`,
                            // Also just needs much better phrasing.
                            iffyTodo: true,
                            card: {
                                description: `A camel stores fat in its hump, allowing it to travel for days without eating. So in trading away Sita's love for the ego boost I gained from humping other women, I was like a senseless camel who forwent a lifetime of satisfying meals just to wear a flashy new adornment on his back.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
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
