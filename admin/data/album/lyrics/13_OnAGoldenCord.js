import {
    BACKSTORY,
    NARRATIVE,
    OBSERVATION,
    PUN,
    SONGCRAFT,
} from '../../../../src/constants/dots'

import {
    VERSES,
    CHORUS,
    BRIDGE,
    BACKING,
    INTRO,
    OUTRO,
    IS_UNIT_DOT,
} from '../../../../src/constants/lyrics'

export default {
    title: 'On a Golden Cord',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     *
     * mST - mRT + pRT = pST
     * 3.370 - 6.487 + 2298.378 => 2295.261
     */
    referenceDescription: `Dobro in measure 1`,
    mixReferenceTime: `0:06:14.61`,
    mixStartTime: `0:03:11.10`,
    playerReferenceTime: 2298.378,
    playerStartTime: 2295.261,
    overview: `After a night out with friends, I might shuffle on to Sita's place, slip into bed with her, and quickly doze off. But one night, Sita was waiting to confront me, having discovered my plans to break up with her. In tears, she returned the gold bracelet I'd given her at the start of our relationship, and then she kicked me out. With nowhere to go, I wandered the streets until sunrise. And so began the first of our many breakups…`,
    isDoublespeaker: true,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `All through that night, I ran Sita's bracelet through my fingers as I turned over the thoughts in my head. So in writing these lyrics, I drew inspiration from famous poems that ruminate on a still-life object, like`,
                        {
                            anchor: `John Keats`,
                            wiki: `John_Keats`,
                        },
                        `'s "`,
                        {
                            anchor: `Ode on a Grecian Urn`,
                            wiki: `Ode_on_a_Grecian_Urn`,
                        },
                        `." This also gave me an obvious working title for the song, which I ended up keeping for lack of anything better.`,
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
                        lyric: `(white-throated sparrow)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: `With the breakup, I was free to rebuild my life from scratch. I could revert to the state of childlike innocence that I'd known before the relationship, before the bullying and the mail-order cult. And so here we hear the song of the white-throated sparrow, which harkens back to the happier days of my youth.`,
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
                    mixTime: `0:06:25.70`,
                    lyricCentre: `On a golden cord,`,
                },
                {
                    mixTime: `0:10:08.56`,
                    lyricCentre: `once worn, now shorn,`,
                },
                {
                    mixTime: `0:13:00.84`,
                    lyricCentre: [
                        `safely kept with`,
                        {
                            anchor: `bread and pocket lint`,
                            card: {
                                description: `
                                Before leaving the cafeteria that evening, I stashed some bread rolls in the front pockets of my jacket for munching on the go. Now clutching the bracelet, I tuck in my hands as well to keep warm.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:15:02.56`,
                    lyricCentre: `Not of its own accord,`,
                },
                {
                    mixTime: `0:18:05.14`,
                    lyricCentre: [
                        `but`,
                        {
                            anchor: `broken`,
                            card: {
                                description: `When I walked into Sita's living room that night to find her seated on the couch, the bracelet lay in a mangled heap on her coffee table. I wondered if she'd damaged it on purpose. I later realized that its dozens of intricate links locked into place only once the bracelet was snug around her wrist.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `for what its promise meant.`,
                    ],
                },
                {
                    mixTime: `0:21:28.28`,
                    lyricCentre: `And so she said, "Now it's yours again…`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `This song evokes the country style of my childhood hero`,
                        {
                            anchor: `Johnny Horton`,
                            wiki: `Johnny_Horton`,
                        },
                        `. His records were the first I ever owned, as they were handed down to me by my mother who adored him in her teenybopper years. None of my classmates had ever heard of him, until one day, I met another kid whose Taiwanese mother had the same obsession. So I guess Horton was big in Taiwan. But he probably never knew this, having died in a car accident at the peak of his fame.`,
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
                    mixTime: `0:28:03.42`,
                    lyricCentre: `And how you look tonight!`,
                },
                {
                    mixTime: `0:31:16.28`,
                    lyricCentre: [
                        `So`,
                        {
                            anchor: `polite, yet resigned`,
                            card: {
                                description: `Having braced for that night's confrontation, Sita deftly lobbed one accusation after another. Meanwhile, I was drunk and still trying to process the situation. So I could only respond curtly, which just added to her fluster.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:34:08.56`,
                    lyricCentre: `with wounds dressed and feelings put away.`,
                },
                {
                    mixTime: `0:36:10.28`,
                    lyricCentre: `Full of patient replies…`,
                },
                {
                    mixTime: `0:39:12.84`,
                    lyricCentre: `But how can I trust a word you say?`,
                },
                {
                    mixTime: `0:43:06.00`,
                    lyricCentre: `So spill away… and please, dear, you have no more secrets saved.`,
                },
                {
                    mixTime: `0:50:22.28`,
                    lyricCentre: [
                        `I'm sorry, but I`,
                        {
                            anchor: `went through your mail`,
                            card: {
                                description: `Confused about why I'd grown distant, Sita snooped around on my desktop computer that day and stumbled upon some emails to friends. In the emails, I spoke of a recent crush and solicited advice on breaking up gently.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `today…"`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `I figured out an`,
                        {
                            anchor: `alternative tuning`,
                            wiki: `Guitar_tunings`,
                        },
                        `on the lead acoustic guitar that would allow every note of its melody to be plucked as a`,
                        {
                            anchor: `natural harmonic`,
                            wiki: `Guitar_harmonics`,
                        },
                        `. I didn't account for the need to quickly move my fingers from one end of the fretboard to the other, however, so I had to record each part in multiple short takes.`,
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
            },
            mainVerses: [
                {
                    mixTime: `0:57:18.00`,
                    lyricLeft: [
                        {
                            anchor: `Immerse the molted form`,
                            card: {
                                description: `With the plot to end his relationship having succeeded, the "sober" voice of the doublespeaker pair returns to resurrect the ghost of his drunken half, whom he'd meant to sacrifice all along as an unwitting accomplice.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `in holy foggy night,`,
                    ],
                    lyricRight: [
                        `Returned a golden cord, this`,
                        {
                            anchor: `sole belonging signed`,
                            card: {
                                description: `Plopped onto moonlit streets from whereabouts unknown, the "drunken" voice of the doublespeaker pair can only recollect his past crimes. As such, he believes himself to be newly released from prison, perhaps having just retrieved from storage the gold bracelet now in his hand.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `1:00:20.56`,
                    lyricLeft: [
                        `emerged beside a`,
                        {
                            // NOTE: I changed "pauper's" to "paupers'."
                            anchor: `paupers' grave`,
                            card: {
                                description: [
                                    `Though the breakup was successful, it happened sooner than expected, forcing my sober self to scrap his plans for a clean getaway. He's now arrived at the`,
                                    {
                                        anchor: `paupers' grave`,
                                        wiki: `Potter's_field`,
                                    },
                                    `where the unclaimed remains of his drunken half have been buried.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `from dreams.`,
                    ],
                    lyricRight: `Leave early, time's up, cross your date released.`,
                },
                {
                    mixTime: `1:04:03.42`,
                    lyricLeft: `The wraith surveys the widow on his pyre;`,
                    lyricRight: `The jailer waves a bit, though uninspired,`,
                },
                {
                    mixTime: `1:07:16.28`,
                    lyricLeft: [
                        `torched the`,
                        {
                            anchor: `bellyaches on suttee`,
                            card: {
                                description: [
                                    {
                                        anchor: `Suttee`,
                                        wiki: `Sati_(practice)`,
                                    },
                                    `is an outdated Hindu custom in which a widow commits suicide by throwing herself onto her husband's funeral pyre. Likewise, sober me knew he could be rid of Sita if he just killed off the one she loved, pushing her to venture further into the darkness to chase after the nothingness that remained.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                    lyricRight: [
                        `for the`,
                        {
                            anchor: `well-behaved on the wing`,
                            card: {
                                description: `Harboring no grudges, drunken me can only surmise that after serving out his sentence without complaint, he's been granted early release for good behavior.`,
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
                card: {
                    description: [
                        `In`,
                        {
                            anchor: `George Orwell`,
                            wiki: `George_Orwell`,
                        },
                        `'s`,
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Nineteen Eighty-Four`,
                                wiki: `Nineteen_Eighty-Four`,
                            },
                        },
                        `, the citizens are forced to engage in`,
                        {
                            anchor: `doublethink`,
                            wiki: `Doublethink`,
                        },
                        `to accept the propaganda of`,
                        {
                            anchor: `Newspeak`,
                            wiki: `Newspeak`,
                        },
                        `. And all through that night, I needed to make sense of the breakup by reconciling the contradictions in my head. So this song uses doublespeaker rhyme— which I'd named partly for its Orwellian undertone— to depict the inner conflict between my sober self and his drunken alter ego.`,
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
                    mixTime: `1:08:27.42`,
                    lyricLeft: `Had I grown dispirited in all this act,`,
                    lyricRight: [
                        `As I soak in spirits amidst`,
                        {
                            anchor: `wanted ads`,
                            card: {
                                description: [
                                    `As drunken me wanders the Oakland streets, he stops to read flyers on telephone poles posted by bands seeking new members, like a vigilante of the`,
                                    {
                                        anchor: `Old West`,
                                        wiki: `American_frontier`,
                                    },
                                    `scanning a town's`,
                                    {
                                        anchor: `wanted posters`,
                                        wiki: `Wanted_poster`,
                                    },
                                    `.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `—`,
                    ],
                },
                {
                    mixTime: `1:11:19.70`,
                    lyricLeft: `by disparate elements, like kindling gathered up?`,
                    lyricRight: `my desperate ailments tied in this shambler's dusk—`,
                },
                {
                    mixTime: `1:15:02.56`,
                    lyricLeft: [
                        {
                            anchor: `Guilt pardons`,
                            card: {
                                description: `As my sober self observes his drunken accomplice's lack of remorse, he can only feel pity, knowing the trauma that must linger in anyone who performed this heinous act. After all, avoiding such trauma was the reason he chose not to carry out the hit himself.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `the specter taunting twin streetlamps;`,
                    ],
                    lyricRight: [
                        `still hardened against her`,
                        {
                            anchor: `fawning, misty glance`,
                            card: {
                                description: `With bitterness suddenly rumbling in his heart, drunken me lashes out in defiance at the boulevard's twin street lights. Their glowing lamps have revived the memory of Sita's fearful gaze at the moment he committed his crime.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `1:18:15.42`,
                    lyricLeft: [
                        {
                            anchor: `hatchet man`,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `hatchet man`,
                                        wiki: `Hatchet_man_(idiom)`,
                                    },
                                    `is an underling who carries out the most disagreeable tasks of a nefarious operation.`,
                                ],
                            },
                        },
                        `who's burnt enough.`,
                    ],
                    lyricRight: [
                        `past this`,
                        {
                            anchor: `avenue Möbius`,
                            cards: [
                                {
                                    description: [
                                        `A`,
                                        {
                                            anchor: `Möbius strip`,
                                            wiki: `Möbius_strip`,
                                        },
                                        `is a surface with only one side. It can be created by joining the ends of a half-twisted paper strip.`,
                                    ],
                                },
                                {
                                    description: `As drunken me ambles along twisting sidewalks, revisiting the half-truths that once supported his defense, it occurs to him that perhaps there really aren't two sides to this story. Or two sides to his mind…`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
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
                formType: CHORUS,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `1:19:26.56`,
                    lyricLeft: `But a precious gift as a shedded chain,`,
                    lyricRight: `But the present slips past a debt unpaid,`,
                },
                {
                    mixTime: `1:22:18.84`,
                    lyricLeft: `has lain to rust, one more cruel memento.`,
                    lyricRight: `that slays you once before you'll let it go.`,
                },
                {
                    mixTime: `1:26:12.00`,
                    lyricLeft: [
                        `Then if`,
                        {
                            anchor: `life were real`,
                            card: {
                                description: `Sita's friends weren't wrong to label me fake and pretentious. My emotions didn't feel legitimate even to myself, and so I reacted to them like an actor responding to a cue. At the time, I blamed the lingering effects of Robitussin.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, not just drunken play…`,
                    ],
                    lyricRight: [
                        `And if`,
                        {
                            anchor: `night were peeled`,
                            card: {
                                description: [
                                    `Every now and then, I would have a Robitussin`,
                                    {
                                        anchor: `flashback`,
                                        wiki: `Flashback_(psychology)`,
                                    },
                                    `where I would trail off and stare into the distance. When a friend asked what it was like, I said it was like`,
                                    {
                                        anchor: `Colorforms`,
                                        wiki: `Colorforms`,
                                    },
                                    `being peeled off my eyeballs to present the illusion of a scene unfolding in time.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `off the front of day…`,
                    ],
                },
                {
                    mixTime: `1:29:04.28`,
                    lyricCentre: `But what do I know?`,
                },
            ],
        },
        {
            unitMap: {
                formType: BRIDGE,
                sideCardType: BACKING,
            },
            mainVerses: [
                {
                    mixTime: `1:30:15.42`,
                    lyricCentre: [
                        `Just that those playful`,
                        {
                            anchor: `pups with their hateful fangs`,
                            card: {
                                description: [
                                    `Young`,
                                    {
                                        anchor: `carnivores`,
                                        wiki: `Carnivore`,
                                    },
                                    `have an instinct to tear flesh with their jaws, so they reflexively soften their bites during rough play. And knowing now what it truly means to inflict harm, I realized the bullies held back their blows the same way, believing their cruelty to be in good fun.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:33:07.70`,
                    lyricCentre: `knew the restraint of those born as hunters,`,
                },
                {
                    mixTime: `1:36:00.00`,
                    lyricCentre: [
                        `while this supposed`,
                        {
                            anchor: `dove chafing in his cage`,
                            card: {
                                description: [
                                    `Meanwhile, a stressed`,
                                    {
                                        anchor: `dove`,
                                        wiki: `Columbidae`,
                                    },
                                    `will peck a cagemate to death, oblivious to the deadly nature of its beak. And similarly, in seeing myself as the victim and tending only to my needs, I ended up causing Sita far more trauma than I myself had ever received at the hands of the bullies.`,
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
                    mixTime: `1:38:22.28`,
                    lyricCentre: `just learned he's pecked to death his precious other.`,
                },
            ],
            sideCard: [
                {
                    lyric: {
                        isItalic: true,
                        lyric: [
                            {
                                anchor: `Odelay`,
                                card: {
                                    description: [
                                        `Sometime around twilight, a strange euphoria came over me that was likely caused by dehydration. Hence the bad`,
                                        {
                                            anchor: `yodeling`,
                                            wiki: `Yodeling`,
                                        },
                                        `heard here.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [SONGCRAFT]: true,
                                    },
                                },
                            },
                            `!`,
                        ],
                    },
                },
            ],
        },
        {
            unitMap: {
                isBottomSideCard: true,
                formType: BRIDGE,
                sideCardType: BACKING,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `1:41:24.84`,
                    lyricCentre: `But should it matter since you loved her once,`,
                },
                {
                    mixTime: `1:44:17.14`,
                    lyricCentre: [
                        `when you really thought the`,
                        {
                            anchor: `world that simple`,
                            card: {
                                description: `I'd given the bracelet to Sita during the first few weeks of our relationship. I was just too inexperienced at the time to show my love in any more meaningful way. Of course, she was too inexperienced to know of any other way to validate it.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `?`,
                    ],
                },
                {
                    mixTime: `1:46:29.14`,
                    lyricCentre: `And who's to judge how much you cared because`,
                },
                {
                    mixTime: `1:50:01.70`,
                    lyricCentre: [
                        `the`,
                        {
                            anchor: `gesture then`,
                            card: {
                                description: `I'd bought the bracelet from a jewelry store in the local mall. It cost a lot relative to my hourly wage at the time. But that was all it took for Sita to recognize my earnest intentions.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `was just a little more worth working for?…`,
                    ],
                },
                {
                    mixTime: `1:56:17.14`,
                    lyricCentre: [
                        `Now the`,
                        {
                            anchor: `jester teeters`,
                            card: {
                                description: `I was stopped by a pair of police officers that night. They judged me to be harmless and sent me on my way. I've since learned that this likely wouldn't have been the experience of my Black friends, of course.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `towards…`,
                    ],
                },
            ],
            sideCard: [
                {
                    lyric: {
                        isItalic: true,
                        lyric: [
                            {
                                anchor: `Mush`,
                                card: {
                                    description: [
                                        `Marching onward without sleep, I continue to strip away the intervening years, hoping to return to the last time I'd known untroubled bliss. And so I arrive at the first song I loved as a child, Johnny Horton's "`,
                                        {
                                            anchor: `North to Alaska`,
                                            wiki: `North_to_Alaska_(song)`,
                                        },
                                        `," in which backup singers call out to their sled dogs, and wooden bowls evoke the clip-clopping of a horse's gait.`,
                                    ],
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                        [SONGCRAFT]: true,
                                    },
                                },
                            },
                            `! Mush!`,
                        ],
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
                    mixTime: `1:58:18.84`,
                    lyricCentre: [
                        `the taunting,`,
                        {
                            // NOTE: I added a hyphen..
                            anchor: `street-swept dawn`,
                            card: {
                                description: [
                                    `As daylight breaks, the mechanical`,
                                    {
                                        anchor: `street sweepers`,
                                        wiki: `Street_sweeper`,
                                    },
                                    `come out in full force, beeping obnoxiously as they go.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `2:02:01.70`,
                    lyricCentre: `Thoughts spawned then dropped,`,
                },
                {
                    mixTime: `2:04:13.70`,
                    lyricCentre: [
                        `of gathering up the`,
                        {
                            anchor: `suttee dust`,
                            cards: [
                                {
                                    description: `I imagine Sita by now to be fully immolated on the burnt rubble of our ruined relationship.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                                {
                                    wormhole: `suttee_dust`,
                                },
                            ],
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `2:06:25.70`,
                    lyricCentre: `Some things just come to loss:`,
                },
                {
                    mixTime: `2:09:28.28`,
                    lyricCentre: `this bracelet, its luster; me, my lust.`,
                },
                {
                    mixTime: `2:13:21.42`,
                    lyricCentre: `Or was I once something not what I've become?`,
                },
                {
                    mixTime: `2:21:07.70`,
                    lyricCentre: [
                        `Have I just`,
                        {
                            anchor: `killed the thing I love`,
                            card: {
                                description: [
                                    `While in prison for homosexuality,`,
                                    {
                                        anchor: `Oscar Wilde`,
                                        wiki: `Oscar_Wilde`,
                                    },
                                    `witnessed the execution of a man convicted of murdering his wife. Sympathizing with the man's plight, Wilde wrote his poem "`,
                                    {
                                        anchor: `The Ballad of Reading Gaol`,
                                        wiki: `The_Ballad_of_Reading_Gaol`,
                                    },
                                    `," which finds a common thread tying the man's crime to his own— and to all of humanity's— with its refrain, "For each man kills the thing he loves."`,
                                ],
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
            },
            mainVerses: [
                {
                    mixTime: `2:27:12.84`,
                    lyricLeft: `Of fateful thoughts hung on a gilded clasp,`,
                    lyricRight: `Once navels locked upon the wilted grass,`,
                },
                {
                    mixTime: `2:30:15.42`,
                    lyricLeft: [
                        `which this`,
                        {
                            anchor: {
                                isItalic: true,
                                lyric: `Übermensch`,
                            },
                            properNoun: true,
                            card: {
                                description: [
                                    `The German philosopher`,
                                    {
                                        anchor: `Friedrich Nietzsche`,
                                        wiki: `Friedrich_Nietzsche`,
                                    },
                                    `spoke of the`,
                                    {
                                        isItalic: true,
                                        lyric: {
                                            anchor: `Übermensch`,
                                            wiki: `Übermensch`,
                                        },
                                    },
                                    `, or "overhuman," as an ideal of perfection toward which humanity might strive. I equated this to my goal of becoming a great artist. But since my underlying motive for this goal was to be loved by scores of women, it then followed that the ideal version of myself could only be realized by having a cheating heart.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `reavowed he'd come to snip.`,
                    ],
                    lyricRight: [
                        {
                            anchor: `digging through her innie`,
                            card: {
                                description: [
                                    `Some`,
                                    {
                                        anchor: `belly buttons`,
                                        wiki: `Navel`,
                                    },
                                    `go in, while others stick out. During sex, Sita and I would engage in baby talk and refer to our respective parts as her "innie" and my "outie."`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `the outie snug-to-fit.`,
                    ],
                },
                {
                    mixTime: `2:33:28.28`,
                    lyricLeft: `And a smarting head throbs once his brain's warring halves,`,
                    lyricRight: [
                        `Then the`,
                        {
                            anchor: `guardian knot`,
                            card: {
                                description: [
                                    `The`,
                                    {
                                        anchor: `umbilical cord`,
                                        wiki: `Umbilical_cord`,
                                    },
                                    `passes sustenance from a mother to the fetus inside her womb. But after birth, it shrivels and falls off to reveal the child's navel. So in sustaining each other through locked navels, Sita became my guardian, and I hers.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `of this`,
                        {
                            anchor: `frayed cord detached`,
                            card: {
                                description: [
                                    `In antiquity, legend held that whosoever could unravel the tightly entangled "`,
                                    {
                                        anchor: `Gordian Knot`,
                                        wiki: `Gordian_Knot`,
                                    },
                                    `" would rule all of Asia.`,
                                    {
                                        anchor: `Alexander the Great`,
                                        wiki: `Alexander_the_Great`,
                                    },
                                    `simply chopped it in half with his sword, after which he then went on to fulfill the prophecy. And in my own bid for greatness, I applied the same brute force to sever the cord binding me to Sita.`,
                                ],
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
                    mixTime: `2:37:11.14`,
                    lyricLeft: [
                        `each`,
                        {
                            anchor: `attack with the proper fist`,
                            card: {
                                description: [
                                    `Out of frustration over conflicting desires, I start punching myself in the head. Since the left hemisphere`,
                                    {
                                        anchor: `controls the body's right side`,
                                        wiki: `Contralateral_brain`,
                                    },
                                    `, and the right hemisphere, the left, it's as if each half of my brain attacks the other using the one fist under its command.`,
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
                        {
                            anchor: `leaked the bandage`,
                            card: {
                                description: `With our emotional bond now severed, Sita bled both metaphorically and literally. She'd started to experiment with cutting to ease her depression.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `upon her wrist.`,
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
                    mixTime: `2:38:22.28`,
                    lyricLeft: `A sober plea finds the present you,`,
                    lyricRight: `The former me might have left a clue`,
                },
                {
                    mixTime: `2:41:14.56`,
                    lyricLeft: [
                        `my`,
                        {
                            anchor: `alias drunk, in panic`,
                            cards: [
                                {
                                    description: `Once drunk, I always stayed drunk until I crashed. So while I was quite used to transforming into Garry, Garry was wholly unfamiliar with turning back into me.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `As I sober up, panicked doubt creeps in. I question if dating woman after woman will actually fulfill me, and whether my newfound ability to attract them isn't a fluke.`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            ],
                        },
                        `and starved for leads.`,
                    ],
                    lyricRight: [
                        `by`,
                        {
                            anchor: `trail of crumbs`,
                            card: {
                                description: `Fearing upheaval ahead, I wonder if it's too late to walk back the damage done. But I couldn't find my way back if I wanted to. All night I've been nibbling on the rolls in my pocket instead of dropping a breadcrumb trail. I've traded away long-term security to satisfy my short-term hunger.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, which vanished as bartered feed.`,
                    ],
                },
                {
                    mixTime: `2:44:27.42`,
                    lyricLeft: `And will she label lies oaths we vowed we could,`,
                    lyricRight: `Until we strangle cries knowing how we stood,`,
                },
                {
                    mixTime: `2:48:00.00`,
                    lyricLeft: [
                        `with`,
                        {
                            anchor: `Garry's sole witness`,
                            properNoun: true,
                            card: {
                                description: `Though I desperately wish to plead my case, I realize the breakup will be over with sooner if I just accept my role as the villain. And so the sober me, called up to testify for his drunken half, stays silent.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `relieved?`,
                    ],
                    lyricRight: `when buried whole with the deceased.`,
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
                    mixTime: `2:49:21.42`,
                    lyricLeft: `So a plan devised divides a slave once wed;`,
                    lyricRight: [
                        `Though, the`,
                        {
                            anchor: `master mind`,
                            card: {
                                description: [
                                    `In college, my wishful thinking was that I could shunt the burden of writing`,
                                    {
                                        anchor: `term papers`,
                                        wiki: `Term_paper`,
                                    },
                                    `onto my drunken self. Once drunk, however, I felt like a slave taking orders from a master, and I would do the work poorly or not at all. Somehow this became my strategy for dealing with the burden of breaking up with Sita.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `reminds us, straight ahead`,
                    ],
                },
                {
                    mixTime: `2:52:03.42`,
                    lyricLeft: [
                        `a bid for greatness' sake, he's sold on as`,
                        {
                            anchor: `holy war`,
                            card: {
                                description: [
                                    `Most of the`,
                                    {
                                        anchor: `9/11 hijackers`,
                                        wiki: `September_11_attacks`,
                                    },
                                    `were unaware that it was a suicide mission, having prepared instead to speak publicly on their religious motives. Similarly, my drunken half was sold on all the benefits of breaking up with Sita, unaware that the one being sacrificed in this mission would be him.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                    lyricRight: `a bigger plate awaiting nulls one half full before.`,
                },
                {
                    mixTime: `2:55:26.56`,
                    lyricLeft: `When longed by nothing you then fight the best,`,
                    lyricRight: `And fond sighs of reunion I must rest;`,
                },
                {
                    mixTime: `2:58:29.14`,
                    lyricLeft: [
                        `for`,
                        {
                            anchor: `kohl-eyed`,
                            card: {
                                description: [
                                    {
                                        anchor: `Kohl`,
                                        wiki: `Kohl_(cosmetics)`,
                                    },
                                    `is a Middle Eastern cosmetic used since antiquity to darken the eyelids.`,
                                ],
                            },
                        },
                        {
                            anchor: `houris`,
                            card: {
                                description: [
                                    `In the`,
                                    {
                                        anchor: `Quran`,
                                        wiki: `Quran`,
                                    },
                                    `, the`,
                                    {
                                        anchor: `houris`,
                                        wiki: `Houri`,
                                    },
                                    `are maidens who await the faithful in paradise. This concept gained notoriety in the West when it was reported that Muslim suicide bombers were being recruited with the promise of seventy-two virgins in heaven. But given my own luckless beginnings, as well as my desire to date multiple women at great cost to myself and others, perhaps it was only my nation of birth that separated my fate from theirs.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `as reward.`,
                    ],
                    lyricRight: [
                        {
                            anchor: `forgo like jewelry`,
                            card: {
                                description: `As these things go, Sita and I had a turbulent on-again, off-again relationship for a good while longer. During one stretch when things were looking rosier than ever, she asked for the bracelet back to wear again, which I happily obliged. Somehow I'd dented it in my pocket that night, however, creating a lasting reminder that some damages can be amended but never undone.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `that she wore.`,
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
                    mixTime: `3:01:00.84`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(choir)`,
                    },
                },
            ],
        },
    ],
}
