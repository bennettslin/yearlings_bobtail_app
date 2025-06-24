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
import { REST, REVIEW, REVISE } from '../../../containers/Annotations/constants/todos'

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
    overview: `After a night out with friends, I'd often shuffle on to Sita's place, slip into bed beside her, and quickly doze off. But one night Sita was awake and waiting to confront me, having discovered my plans to break up with her. In tears, she returned the gold bracelet I'd given her at the start of our relationship— and then kicked me out. With nowhere to go, I wandered the streets until sunrise. And so began the first of our many breakups…`,
    isDoublespeaker: true,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `All through that night, I ran Sita's bracelet through my fingers as I turned over the thoughts in my head. To write these lyrics, then, I drew inspiration from famous poems that dwell on a still-life object, like "`,
                        {
                            anchor: `Ode on a Grecian Urn`,
                            wiki: `Ode_on_a_Grecian_Urn`,
                        },
                        `" by`,
                        {
                            anchor: `John Keats`,
                            wiki: `John_Keats`,
                        },
                        `. This also gave me a working title for the song, which I later kept for lack of anything better.`,
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
                    description: `With the breakup, I could revert to the state of innocence that I'd known as a child— not just before the relationship, but before the bullying and the mail-order cult as well. So here we hear the white-throated sparrow, which harkens back to the happiest days of my childhood.`,
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
                                description: `In those days, the less I spent on food, the more I could spend on beer. So before leaving the cafeteria, I'd swipe a bread roll or two, which were always plentiful, and stash them in the front pockets of my jacket.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                                description: `When I walked into Sita's living room that night to find her seated on the couch, the bracelet lay in a mangled heap on the coffee table, leading me to wonder if she'd damaged it on purpose. I later realized that I'd only ever seen it worn on her wrist, where its dozens of intricate links stayed locked in place.`,
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
                        `. His records were the first I ever owned, as they were handed down to me by my mother, who adored him in her teenybopper years. None of my classmates had ever heard of him, until one day I met another kid whose Taiwanese mother had the same obsession. So I guess Horton was big in Taiwan— but he probably never knew this, having died in a car accident at the peak of his fame.`,
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
                                description: `Having braced for that night's confrontation, Sita lobbed one accusation after another. Meanwhile, I was drunk and still struggling to make sense of the situation. So I could only respond curtly, which added to her fluster.`,
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
                                description: `Confused over why I'd grown distant, Sita snooped around on my desktop computer earlier that day. In doing so, she stumbled upon some emails to friends— one in which I spoke of a recent crush on another woman, and another soliciting advice on how to break up gently.`,
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
                                description: `With the plot to end his relationship having succeeded, the sober voice of my doublespeaker pair comes back to resurrect the ghost of his drunken half, whom he'd meant to sacrifice all along as an unwitting accomplice.`,
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
                                description: `Plopped onto moonlit streets from whereabouts unknown, my drunken self can only recollect his past crimes. And so he believes himself to be newly released from prison— perhaps having just retrieved from storage the bracelet now in his hand.`,
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
                                    `Though the plot was successful, it was carried out sooner than expected, forcing my sober self to scrap his plan for a clean getaway. He now arrives at the`,
                                    {
                                        anchor: `paupers' grave`,
                                        wiki: `Potter's_field`,
                                    },
                                    `where his drunken half's unclaimed remains have been buried.`,
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
                                description: `Harboring no grudges, drunken me can only surmise that he served out his sentence without complaint, and has now been granted early release for good behavior.`,
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
                        `, the citizens must practice doublethink in order to accept the contradictory propaganda of Newspeak. Similarly, to justify the breakup, I had to reconcile the contradictions in my head. So this song uses doublespeaker rhyme— which I named partly for its Orwellian undertone— to depict the inner conflict between my sober self and my drunken alter ego.`,
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
                                    `As drunken me wanders the Oakland streets, he stops to read flyers posted on telephone poles by those seeking bandmates, like a vigilante of the Old West scanning a town's`,
                                    {
                                        anchor: `wanted posters`,
                                        wiki: `Wanted_poster`,
                                    },
                                    `.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
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
                                description: `My sober self observes his drunken accomplice's lack of remorse and can only feel pity, knowing the trauma that must surely dwell in one who committed such a heinous act. After all, avoiding such trauma is the reason he chose not to carry out the hit himself.`,
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
                                    `is an underling who carries out the least agreeable tasks in a shady operation.`,
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
                                    description: `As drunken me ambles along twisting sidewalks, revisiting the half-truths that once supported his defense, it occurs to him that perhaps there really aren't two sides to this story. Or two sides to his mind…`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
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
                                description: `Sita's friends weren't wrong to call me fake. My emotions didn't feel legitimate even to myself; I reacted to them the way an actor responds to a cue. At the time, I blamed it on the lingering effects of Robitussin.`,
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
                                    `Every now and then, a Robitussin flashback would cause me to trail off and stare into the distance. When a friend asked what was happening, I said it felt like`,
                                    {
                                        anchor: `Colorforms`,
                                        wiki: `Colorforms`,
                                    },
                                    `were being peeled off my eyeballs in quick succession, presenting the illusion of a scene unfolding in time.`,
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
                                    `Since wolves tear flesh with their jaws, they learn early on to`,
                                    {
                                        anchor: `soften their bites`,
                                        wiki: `Bite_inhibition`,
                                    },
                                    `during rough play. And now, knowing what it truly means to harm someone, I realized that the bullies had held back their blows as well, believing it was all in good fun.`,
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
                                description: `Meanwhile, a stressed dove will peck a cagemate to death, oblivious to the deadly nature of its beak. And similarly, in seeing myself as the victim and tending only to my needs, I ended up causing Sita far more trauma than I myself had ever received at the hands of the bullies.`,
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
                                description: `I was stopped by a pair of police officers that night, who judged me to be harmless and sent me on my way. That's one privilege of having pituitary dwarfism, I guess.`,
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
                                        `Marching onward without sleep, I try to recall the last time I'd known untroubled bliss. And so the music here evokes the first song I loved as a child: Johnny Horton's "`,
                                        {
                                            anchor: `North to Alaska`,
                                            wiki: `North_to_Alaska_(song)`,
                                        },
                                        `," in which backup singers call out to their sled dogs, and wooden bowls imitate the clip-clopping of a horse's gait.`,
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
                                    description: `By now, I imagine that Sita has been fully incinerated on the ashes of our failed relationship.`,
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
                                    `witnessed the execution of a man convicted of murdering his wife. Sympathetic to the man's plight, Wilde wrote "`,
                                    {
                                        anchor: `The Ballad of Reading Gaol`,
                                        wiki: `The_Ballad_of_Reading_Gaol`,
                                    },
                                    `," which finds a common thread tying the man's crime to Wilde's own— and to all of humanity's— with its refrain, "For each man kills the thing he loves."`,
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
                            todo: REVISE,
                            problem: `Does this even make sense?`,
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
                                    `, or "overhuman," as an ideal of perfection toward which humanity might strive. I equated this to my goal of becoming a great artist. But since my underlying motive was to date scores of women, it then followed that the ideal version of myself could only be realized by having a cheating heart.`,
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
                                description: `Some belly buttons go in, while others stick out. During sex, Sita and I would engage in baby talk and refer to our respective parts as her "innie" and my "outie."`,
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
                                    `passes sustenance from a mother to her fetus inside the womb. But after birth, it shrivels and falls off to reveal the child's navel. So in sustaining each other through locked navels, Sita became my guardian, and I hers.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `of this`,
                        {
                            anchor: `frayed cord detached`,
                            todo: REVIEW,
                            card: {
                                description: [
                                    `In antiquity, legend held that whoever could unravel the "`,
                                    {
                                        anchor: `Gordian Knot`,
                                        wiki: `Gordian_Knot`,
                                    },
                                    `" would rule all of Asia. After chopping it in half with his sword,`,
                                    {
                                        anchor: `Alexander the Great`,
                                        wiki: `Alexander_the_Great`,
                                    },
                                    `then went on to fulfill the prophecy. And thus, in hoping to achieve such greatness myself, I applied the same brute force to sever the cord that tied me to Sita.`,
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
                                description: `Out of frustration over conflicting desires, I start punching myself in the head. Since the left hemisphere of the brain controls the body's right side— and the right hemisphere, the left— it's as if each attacks the other using the one fist under its command.`,
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
                                description: `With our emotional bond now severed, Sita bled both metaphorically and literally: She'd begun to experiment with cutting to ease her depression.`,
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
                    // NOTE: I decided to contract from "might have."
                    lyricRight: `The former me might've left a clue`,
                },
                {
                    mixTime: `2:41:14.56`,
                    lyricLeft: [
                        `my`,
                        {
                            anchor: `alias drunk, in panic`,
                            cards: [
                                {
                                    description: `Once drunk, I always stayed drunk until I crashed. So while I was quite used to transforming into Garry, he was wholly unfamiliar with turning back into me.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `Fearing upheaval ahead, I begin to question if dating one woman after another will actually fulfill me, and whether my newfound ability to attract them isn't some fluke.`,
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
                            todo: REVIEW,
                            card: {
                                description: `But it's too late to walk back the damage done: Instead of leaving a breadcrumb trail, I've been munching all night on the rolls in my pockets. And now, having satisfied my hunger, I'm stranded and can't find my way back.`,
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
                                description: `Of course, I wish to plead my case— yet if I just accept my role as the villain, then this can all be over with sooner. And so the sober me, called up to testify for his drunken half, stays silent.`,
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
                            todo: REST,
                            problem: `I'd prefer to say "my term paper," but that's too many "my"s in a row. Also, the point about the slave and master needs to be made, since this is the whole point of the annotation, but it all sounds fine without it, and trying to insert it somewhere just makes it all sound awkward. This is the best I can do so far, but maybe it would be good to revisit.`,
                            card: {
                                description: `In college, my wishful thinking was that I could simply force my drunken self to write a term paper for me. But then once drunk, I would resent taking orders from my sober half, and either do the work poorly or not at all— like a slave rebelling against his master. Somehow this became my go-to strategy for breaking up with Sita.`,
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
                                    `In the immediate`,
                                    {
                                        anchor: `wake of 9/11`,
                                        wiki: `September_11_attacks`,
                                    },
                                    `, it was believed that most of the hijackers hadn't been told it was a suicide mission. Likewise, drunken me was sold on all the perks of doing away with Sita, unaware that the one being sacrificed in this exchange would be him.`,
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
                                    `In the Quran, the`,
                                    {
                                        anchor: `houris`,
                                        wiki: `Houri`,
                                    },
                                    `are maidens who tend to the faithful in paradise. This concept gained notoriety in the West, when it was reported that young Muslim men were being recruited for suicide missions with the promise of seventy-two virgins in heaven. But given my own luckless beginnings, as well as my desire to date multiple women at great cost to myself and others, perhaps it was only my nation of birth that separated my fate from theirs.`,
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
                                description: `Sita and I had a turbulent on-again, off-again relationship for a good while longer. During one stretch when things were rosier than ever, she asked for the bracelet back to wear again, and I happily obliged. Although, somehow I'd dented it in my pocket that night— a lasting reminder that some damages can only be mended, never undone.`,
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
