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
    CHORUS,
    BRIDGE,
    BACKING,
    INTRO,
    OUTRO,
    IS_UNIT_DOT,
} from '../../../../app/constants/lyrics'

export default {
    path: 'on-a-golden-cord',
    title: 'On a Golden Cord',
    duration: 201.5,
    overview: `After a long night out with friends, I might shuffle on to Sita's place, slip into bed with her, and quickly doze off. But one night, Sita was waiting to confront me, having discovered my plans to break up with her. In tears, she returned the gold bracelet I had given her at the start of our relationship, and then she kicked me out. With nowhere to go, I wandered the streets until sunrise. And so began the first of our many breakups…`,
    isDoublespeaker: true,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `I ran Sita's bracelet through my fingers over and over that night, turning over the thoughts in my head. So in writing these lyrics, I tried to draw inspiration from famous poems that ruminate on a still-life object, like`,
                        {
                            anchor: `John Keats's`,
                            wiki: `John_Keats`,
                        },
                        {
                            anchor: `"Ode on a Grecian Urn."`,
                            wiki: `Ode_on_a_Grecian_Urn`,
                        },
                        `This also gave me an obvious working title for the song, which I ended up keeping for lack of anything better.`,
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
                    time: 0,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(white-throated sparrow)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `With the breakup, I was now free to rebuild my life from scratch. I could reclaim not just my time spent with Sita, but the years and years of discontent that had taken their toll long before. And so here we hear the song of the white-throated sparrow, as I harken back to the happier days of my youth.`,
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
                    time: 4,
                    lyricCentre: `On a golden cord,`,
                },
                {
                    time: 7,
                    lyricCentre: `once worn, now shorn,`,
                },
                {
                    time: 9,
                    lyricCentre: [
                        `safely kept with`,
                        {
                            anchor: `bread and pocket lint.`,
                            todo: true,
                            card: {
                                description: `Stashed in the front pockets of my jacket are bread rolls from the cafeteria, to be munched on while I'm on the go. With my hands now tucked in to keep warm, I stroke the bracelet again and again.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 12,
                    lyricCentre: `Not of its own accord,`,
                },
                {
                    time: 15,
                    lyricCentre: [
                        `but`,
                        {
                            anchor: `broken`,
                            todo: true,
                            card: {
                                description: `When I walked into Sita's living room that night to find her seated on the couch, the bracelet lay in a mangled heap on the coffee table. I wondered if she had damaged it on purpose. Only later did I realize that being snugly wrapped around her wrist is what kept its dozens of tiny links intricately locked in place.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `for what its promise meant.`,
                    ],
                },
                {
                    time: 18,
                    lyricCentre: `And so she said, "Now it's yours again…`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `This song evokes the country style of my childhood hero`,
                        {
                            anchor: `Johnny Horton.`,
                            wiki: `Johnny_Horton`,
                        },
                        `His records were the first I ever owned, as they were handed down to me by my mother who adored him in her teenybopper years. None of my classmates had ever heard of him, until one day, I met another Taiwanese-American kid whose mother had the same obsession. So I guess Horton was big in Taiwan, though he probably never knew that, having died in a car accident at the peak of his fame.`,
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
                    time: 26,
                    lyricCentre: `And how you look tonight!`,
                },
                {
                    time: 28,
                    lyricCentre: [
                        `So`,
                        {
                            anchor: `polite, yet resigned,`,
                            todo: true,
                            card: {
                                description: `Sita spent the day bottling up her emotions, braced for tonight's confrontation. Meanwhile, I just wandered in minutes before, drunk and eager to pass out. So even as she explodes in hysterics, I'm still struggling to process the situation. As such, all my responses are calm but curt, which only add to her fluster.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 31,
                    lyricCentre: `with wounds dressed and feelings put away.`,
                },
                {
                    time: 33,
                    lyricCentre: `Full of patient replies…`,
                },
                {
                    time: 36,
                    lyricCentre: `But how can I trust a word you say?`,
                },
                {
                    time: 40,
                    lyricCentre: `So spill away… and please, dear, you have no more secrets saved.`,
                },
                {
                    time: 47,
                    lyricCentre: [
                        `I'm sorry, but I`,
                        {
                            anchor: `went through your mail`,
                            todo: true,
                            card: {
                                description: `Confused about why I had grown so distant, Sita finally caved in that day and snooped around on my computer, which was a desktop that I kept at her place. In so doing, she stumbled upon some emails in which I was soliciting advice from my friends on how to break up with her.`,
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
                todo: true,
                card: {
                    description: [
                        `I figured out an`,
                        {
                            anchor: `alternative tuning`,
                            wiki: `Guitar_tunings`,
                        },
                        `on the lead acoustic guitar that would allow every note of its melody to be plucked as a`,
                        {
                            anchor: `natural harmonic.`,
                            wiki: `Guitar_harmonics`,
                        },
                        `I hadn't accounted for the need to move my fingers quickly from one harmonic to the next, however, and it proved impossible to play. I ended up having to splice together multiple takes.`,
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
                    time: 54,
                    lyricLeft: [
                        {
                            anchor: `Immerse the molted form`,
                            todo: true,
                            card: {
                                description: `Having succeeded in his plot to end the relationship, the "sober" voice in the doublespeaker set quietly resurrects the ghost of his drunken half, whom he had intended to sacrifice as an unwitting accomplice all along.`,
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
                            anchor: `sole belonging signed.`,
                            todo: true,
                            card: {
                                description: `Plopped onto moonlit streets from whereabouts unknown, the "drunken" voice in the doublespeaker set can only recollect his past crimes. As such, he believes himself to be newly released from prison, having just now retrieved from property storage the gold bracelet in his hand.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 57,
                    lyricLeft: [
                        `emerged beside a`,
                        {
                            anchor: `paupers' grave`,
                            todo: true,
                            card: {
                                // NOTE: I changed "pauper's" to "paupers'."
                                description: [
                                    `While the breakup was successful, its arrival was also unexpected, forcing my sober self to scrap his plans for a clean getaway. And so he now finds himself beside the`,
                                    {
                                        anchor: `paupers' grave`,
                                        wiki: `Potter's_field`,
                                    },
                                    `where his drunken half's body was earlier tossed in haste, among all the other deceased who died unknown or couldn't afford a proper burial.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `from dreams.`,
                    ],
                    lyricRight: `Leave early, time's up, cross your date released.`,
                },
                {
                    time: 61,
                    lyricLeft: `The wraith surveys the widow on his pyre;`,
                    lyricRight: `The jailer waves a bit, though uninspired,`,
                },
                {
                    time: 64,
                    lyricLeft: [
                        `torched the`,
                        {
                            anchor: `bellyaches on suttee.`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Suttee`,
                                        wiki: `Sati_(practice)`,
                                    },
                                    `is an outlawed Hindu custom in which a widow commits suicide by throwing herself on her husband's funeral pyre. Likewise, sober me knew he could be rid of Sita forever if he just killed off bit by bit the one she loved, pushing her to venture further and further into the darkness to chase after the less and less that remained.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `for the`,
                        {
                            anchor: `well-behaved on the wing.`,
                            todo: true,
                            card: {
                                description: `Feeling no malice, drunken me can only surmise that he served out his sentence without complaint, and was granted early release for good behavior.`,
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
                    description: [
                        `Just as the citizens of`,
                        {
                            anchor: `George Orwell's`,
                            wiki: `George_Orwell`,
                        },
                        {
                            isItalic: true,
                            lyric: {
                                anchor: `Nineteen Eighty-Four`,
                                wiki: `Nineteen_Eighty-Four`,
                            },
                        },
                        `are required to engage in`,
                        {
                            anchor: `doublethink`,
                            wiki: `Doublethink`,
                        },
                        `to accept the propaganda of`,
                        {
                            anchor: `Newspeak,`,
                            wiki: `Newspeak`,
                        },
                        `I could only make sense of the breakup by reconciling the contradictions in my head. So I used doublespeaker rhyme— which I had named partly for its Orwellian undertone— to depict the internal conflict between my sober self and his drunken alter ego.`,
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
                    time: 65,
                    lyricLeft: `Had I grown dispirited in all this act,`,
                    lyricRight: [
                        `As I soak in spirits amidst`,
                        {
                            anchor: `wanted ads—`,
                            todo: true,
                            card: {
                                description: [
                                    `As drunken me wanders the Oakland streets, he pauses to read flyers posted on utility poles by those seeking bandmates, much like a vigilante of the`,
                                    {
                                        anchor: `Old West`,
                                        wiki: `American_frontier`,
                                    },
                                    `might take interest in a`,
                                    {
                                        anchor: `wanted poster.`,
                                        wiki: `Wanted_poster`,
                                    },
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 68,
                    lyricLeft: `by disparate elements, like kindling gathered up?`,
                    lyricRight: `my desperate ailments tied in this shambler's dusk—`,
                },
                {
                    time: 72,
                    lyricLeft: [
                        {
                            anchor: `Guilt pardons`,
                            todo: true,
                            card: {
                                description: `Recognizing the trauma that must linger after being made to perform such a vicious act, sober me forgives his drunken accomplice's lack of sympathy for the victim.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                        `the`,
                        {
                            anchor: `specter taunting twin streetlamps;`,
                            todo: true,
                            card: {
                                description: `My sober self observes as his drunken half defiantly lashes out at twin streetlamps, whose misty glow has revived the vision of Sita's fearful gaze moments before he committed his crime.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        `still hardened against her`,
                        {
                            anchor: `fawning, misty glance,`,
                            todo: true,
                            card: {
                                description: `Sensing that Sita gazes downward upon him from the night sky, drunken me still refuses to flinch, as remnants of his past bitterness rumble deep within.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 75,
                    lyricLeft: [
                        {
                            anchor: `hatchet man`,
                            todo: true,
                            card: {
                                description: [
                                    `A`,
                                    {
                                        anchor: `hatchet man`,
                                        wiki: `Hatchet_man_(idiom)`,
                                    },
                                    `is an underling who carries out the most disagreeable tasks of an operation.`,
                                ],
                            },
                        },
                        `who's burnt enough.`,
                    ],
                    lyricRight: [
                        `past this`,
                        {
                            anchor: `avenue Möbius.`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `A`,
                                        {
                                            anchor: `Möbius strip`,
                                            wiki: `Möbius_strip`,
                                        },
                                        `is a surface with only one side, and can be created by joining the ends of a half-twisted paper strip.`,
                                    ],
                                },
                                {
                                    description: `As drunken me ambles down twisting sidewalks, mentally digging through the dense layers of half-truths that justified his act, it occurs to him that perhaps there aren't really two sides to this story. Or two sides to his mind…`,
                                    dotKeys: {
                                        [NARRATIVE]: true,
                                    },
                                },
                            ],
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
                    time: 76,
                    lyricLeft: `But a precious gift as a shedded chain,`,
                    lyricRight: `But the present slips past a debt unpaid,`,
                },
                {
                    time: 79,
                    lyricLeft: `has lain to rust, one more cruel memento.`,
                    lyricRight: `that slays you once before you'll let it go.`,
                },
                {
                    time: 83,
                    lyricLeft: [
                        `Then if`,
                        {
                            anchor: `life were real,`,
                            todo: true,
                            card: {
                                description: `Sita's friends weren't wrong to describe me as fake and pretentious. My emotions didn't feel legitimate even to myself, and so I acted upon them like an actor taking a cue to ad lib an improv scene. At the time, I blamed the lingering effect of Robitussin.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `not just drunken play…`,
                    ],
                    lyricRight: [
                        `And if`,
                        {
                            anchor: `night were peeled`,
                            todo: true,
                            card: {
                                description: [
                                    `Every now and then, I would have a mild Robitussin`,
                                    {
                                        anchor: `flashback,`,
                                        wiki: `Flashback_(psychology)`,
                                    },
                                    `compelling me to trail off and stare into the distance. When asked to describe the experience, I said it was like`,
                                    {
                                        anchor: `Colorforms`,
                                        wiki: `Colorforms`,
                                    },
                                    `were being stuck on and peeled off my eyeballs to present the illusion of a scene unfolding.`,
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
                    time: 86,
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
                    time: 87,
                    lyricCentre: [
                        `Just that those playful`,
                        {
                            anchor: `pups with their hateful fangs`,
                            todo: true,
                            card: {
                                description: `Baby predators instinctively understand their claws and fangs to be weapons, and will thus hold them back during rough play. And given how much more vicious the bullies could have been, I realized that they held back their blows in the same way, believing their cruelty to be in good fun.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 90,
                    lyricCentre: `knew the restraint of those born as hunters,`,
                },
                {
                    time: 93,
                    lyricCentre: [
                        `while this supposed`,
                        {
                            anchor: `dove chafing in his cage,`,
                            todo: true,
                            card: {
                                description: `A stressed dove, on the other hand, will peck its cagemate to death, oblivious to the deadly potential of its beak. And similarly, seeing myself as the perennial victim, I inflicted far greater emotional trauma upon Sita than I myself had ever received at the hands of the bullies.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [REFERENCE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 96,
                    lyricCentre: `just learned he's pecked to death his precious other.`,
                },
            ],
            sideCard: [
                {
                    lyric: {
                        isItalic: true,
                        lyric: {
                            anchor: `Odelay!`,
                            todo: true,
                            card: {
                                description: `The attempts at yodeling here reflect the euphoria caused by dehydration that I begin to feel just before daybreak.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [SONGCRAFT]: true,
                                },
                            },
                        },
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
                    time: 98,
                    lyricCentre: `But should it matter since you loved her once,`,
                },
                {
                    time: 101,
                    lyricCentre: `when you really thought the world that simple?`,
                },
                {
                    time: 104,
                    lyricCentre: `And who's to judge how much you cared because`,
                },
                {
                    time: 107,
                    lyricCentre: [
                        `the`,
                        {
                            anchor: `gesture then`,
                            todo: true,
                            card: {
                                description: `I had bought the bracelet from a jewelry store at the local mall. It was rather expensive relative to my hourly wage at the time, which made its underlying meaning all the more potent to Sita at the time.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `was just a little more worth working for?…`,
                    ],
                },
                {
                    time: 113,
                    lyricCentre: `Now the jester teeters towards…`,
                },
            ],
            sideCard: [
                {
                    lyric: {
                        isItalic: true,
                        lyric: {
                            anchor: `Mush! Mush!`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: [
                                    `As I march onward through twilight without sleep, I keep shoveling away at my past, hoping to reveal the last time I'd ever known untroubled bliss. And so I arrive at the first song I loved as a child, Johnny Horton's`,
                                    {
                                        anchor: `"North to Alaska,"`,
                                        wiki: `North_to_Alaska_(song)`,
                                    },
                                    `in which the backup singers mush on their sled dogs, and wooden bowls evoke the clip-clopping of a horse's gait.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [SONGCRAFT]: true,
                                },
                            },
                        },
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
                    time: 116,
                    lyricCentre: [
                        `the taunting,`,
                        {
                            anchor: `streetswept dawn.`,
                            todo: true,
                            card: {
                                description: [
                                    `As daylight breaks, the mechanical`,
                                    {
                                        anchor: `street sweepers`,
                                        wiki: `Street_sweeper`,
                                    },
                                    `come out in full force, beeping and purring as they go.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 118,
                    lyricCentre: `Thoughts spawned then dropped,`,
                },
                {
                    time: 121,
                    lyricCentre: [
                        `of gathering up the`,
                        {
                            anchor: `suttee dust.`,
                            todo: true,
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
                    ],
                },
                {
                    time: 123,
                    lyricCentre: `Some things just come to loss:`,
                },
                {
                    time: 126,
                    lyricCentre: `this bracelet, its luster; me, my lust.`,
                },
                {
                    time: 130,
                    lyricCentre: `Or was I once, something not what I've become?`,
                },
                {
                    time: 137,
                    lyricCentre: [
                        `Have I just`,
                        {
                            anchor: `killed the thing I love?`,
                            todo: true,
                            card: {
                                description: [
                                    `While in prison for homosexuality,`,
                                    {
                                        anchor: `Oscar Wilde`,
                                        wiki: `Oscar_Wilde`,
                                    },
                                    `witnessed the execution of a man convicted of murdering his wife. Sympathizing with the man's plight, Wilde wrote his poem`,
                                    {
                                        anchor: `"The Ballad of Reading Gaol,"`,
                                        wiki: `The_Ballad_of_Reading_Gaol`,
                                    },
                                    `which finds a common thread tying the man's crime to his own— and to all of humanity's— with its refrain, "For each man kills the thing he loves."`,
                                ],
                            },
                        },
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
                    time: 144,
                    lyricLeft: `Of fateful thoughts hung on a gilded clasp,`,
                    lyricRight: `Once navels locked upon the wilted grass,`,
                },
                {
                    time: 147,
                    lyricLeft: [
                        `which this`,
                        {
                            anchor: {
                                isItalic: true,
                                lyric: `Übermensch`,
                            },
                            properNoun: true,
                            todo: true,
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
                                            anchor: `Übermensch,`,
                                            wiki: `Übermensch`,
                                        },
                                    },
                                    `or "overhuman," as an ideal of perfection toward which each of us might strive, which I understood to be a precondition for creating great works. But since my underlying motive for being a great artist was to attract women, it then followed that the best version of myself could only be realized by having a cheating heart.`,
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
                            todo: true,
                            card: {
                                description: [
                                    `Some babies have`,
                                    {
                                        anchor: `belly buttons`,
                                        wiki: `Navel`,
                                    },
                                    `that go in, while those of others stick out. During sex, Sita and I would engage in baby talk and refer to our respective parts as her "innie" and my "outie."`,
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
                    time: 150,
                    lyricLeft: `And a smarting head throbs once his brain's warring halves,`,
                    lyricRight: [
                        `Then the`,
                        {
                            anchor: `guardian knot`,
                            todo: true,
                            card: {
                                description: [
                                    `Outside the womb, the`,
                                    {
                                        anchor: `umbilical cord`,
                                        wiki: `Umbilical_cord`,
                                    },
                                    `that once passed sustenance will shrivel to a navel. So in sustaining each other through locked navels, Sita became my guardian, and I hers.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `of this`,
                        {
                            anchor: `frayed cord detached,`,
                            todo: true,
                            card: {
                                description: [
                                    `In antiquity, legend held that whosoever could unravel the tightly entangled`,
                                    {
                                        anchor: `"Gordian Knot"`,
                                        wiki: `Gordian_Knot`,
                                    },
                                    `would rule all of Asia.`,
                                    {
                                        anchor: `Alexander the Great,`,
                                        wiki: `Alexander_the_Great`,
                                    },
                                    `however, simply chopped it in half with his sword. And in my own bid for greatness, I severed the cord binding me to Sita with similar brute force.`,
                                ],
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    time: 154,
                    lyricLeft: [
                        `each`,
                        {
                            anchor: `attack with the proper fist.`,
                            todo: true,
                            card: {
                                description: [
                                    `The right hemisphere of the brain`,
                                    {
                                        anchor: `controls the left side`,
                                        wiki: `Contralateral_brain`,
                                    },
                                    `of the body, and the left hemisphere, the right. So when I start punching myself in the head out of frustration over conflicting desires, it's as if each hemisphere is attacking the other using the one fist under its command.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: [
                        {
                            anchor: `leaked the bandage`,
                            todo: true,
                            card: {
                                description: `With our emotional bond now severed, Sita bled both metaphorically and literally. She had started to experiment with cutting to ease her depression.`,
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
                    time: 155,
                    lyricLeft: `A sober plea finds the present you,`,
                    lyricRight: `The former me might have left a clue`,
                },
                {
                    time: 158,
                    lyricLeft: [
                        `my`,
                        {
                            anchor: `alias drunk, in panic`,
                            todo: true,
                            cards: [
                                {
                                    description: `Once drunk, I always stayed drunk until I crashed. As such, I was quite used to transforming into Garry, but Garry was wholly unfamiliar with returning back to me.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: `As I sober up, panicked doubt creeps in. I begin to question if dating woman after woman will really fulfill me, and whether my newfound ability to attract them isn't a fluke.`,
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
                            anchor: `trail of crumbs,`,
                            todo: true,
                            card: {
                                description: `Suddenly fearing the emotional upheaval ahead, I wonder whether it's too late to walk back the damage I've done. But even if I wanted to, I couldn't find my way back. All night I've been nibbling on the bread in my pocket rather than pinching off and dropping crumbs for a trail, trading away long-term security to satisfy my short-term hunger.`,
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `which vanished as bartered feed.`,
                    ],
                },
                {
                    time: 161,
                    lyricLeft: `And will she label lies oaths we vowed we could,`,
                    lyricRight: `Until we strangle cries knowing how we stood,`,
                },
                {
                    time: 164,
                    lyricLeft: [
                        `with`,
                        {
                            anchor: `Garry's sole witness`,
                            properNoun: true,
                            todo: true,
                            card: {
                                description: `All my promises to Sita have proven to be lies, but of course I didn't intend them to be. Still, while I really wish to argue my case, I realize the breakup will be done with sooner if I just accept my role as the villain. And so the sober me, called up to testify for his drunken half, stays silent.`,
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
                    time: 166,
                    lyricLeft: `So a plan devised divides a slave once wed;`,
                    lyricRight: [
                        `Though, the`,
                        {
                            anchor: `master mind`,
                            todo: true,
                            card: {
                                description: [
                                    `In college, I discovered that being drunk made it easy to single-mindedly perform arduous tasks such as writing`,
                                    {
                                        anchor: `term papers,`,
                                        wiki: `Term_paper`,
                                    },
                                    `mainly by allowing me not to care about the results. I would humorously compare my drunken self to a slave taking orders from his sober master. It was this same strategy that I would later use to break up with Sita.`,
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
                    time: 169,
                    lyricLeft: [
                        `a bid for greatness' sake, he's sold on as`,
                        {
                            anchor: `holy war.`,
                            todo: true,
                            card: {
                                description: [
                                    `Most of the`,
                                    {
                                        anchor: `9/11 hijackers`,
                                        wiki: `September_11_attacks`,
                                    },
                                    `were unaware that they were on a suicide mission, having prepared instead to make public statements on their religious motivations. Similarly, in orchestrating my scheme to be rid of Sita, I had sold my drunken half on all the benefits of breaking up, while neglecting to mention the tremendous sacrifice it would entail.`,
                                ],
                                dotKeys: {
                                    [NARRATIVE]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                    ],
                    lyricRight: `a bigger plate awaiting nulls one half full before.`,
                },
                {
                    time: 172,
                    lyricLeft: `When longed by nothing you then fight the best,`,
                    lyricRight: `And fond sighs of reunion I must rest;`,
                },
                {
                    time: 176,
                    lyricLeft: [
                        `for`,
                        {
                            anchor: `kohl-eyed`,
                            todo: true,
                            card: {
                                description: [
                                    {
                                        anchor: `Kohl`,
                                        wiki: `Kohl_(cosmetics)`,
                                    },
                                    `is a Middle Eastern cosmetic that has been used since antiquity to darken the eyelids.`,
                                ],
                            },
                        },
                        {
                            anchor: `houris`,
                            todo: true,
                            card: {
                                description: [
                                    `In the`,
                                    {
                                        anchor: `Quran,`,
                                        wiki: `Quran`,
                                    },
                                    `the`,
                                    {
                                        anchor: `houris`,
                                        wiki: `Houri`,
                                    },
                                    `are maidens who await the faithful in paradise. This concept gained notoriety in the West when it was reported that suicide bombers were being recruited with the promise of seventy-two virgins in heaven. But given my own disaffected beginning, as well as my quest to date more women at great cost to myself and others, perhaps it was only my nation of birth that separated my fate from theirs.`,
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
                            todo: true,
                            card: {
                                description: `As these things go, Sita and I had a turbulent on-again, off-again relationship for a good while after. During one stretch when things were looking rosier than ever, she asked to have the bracelet back to wear again, which I happily obliged. Somehow it had dented in my pocket, however, creating a lasting reminder that certain things can never be undone, only amended.`,
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
                    time: 177,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(chorale)`,
                    },
                },
            ],
        },
    ],
}
