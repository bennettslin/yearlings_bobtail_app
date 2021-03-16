import {
    AFTERWORD,
    BACKSTORY,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGCRAFT,
} from '../../../../app/constants/dots'

import {
    REFRAIN,
    VERSES,
    CHORUS,
    BRIDGE,
    INTRO,
    SOLO,
    OUTRO,
    IS_UNIT_DOT,
} from '../../../../app/constants/lyrics'

export default {
    path: 'garryowen',
    title: 'Garryowen',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `Banjo in anacrusis`,
    playerStartTime: 2107.996,
    mixStartTime: `0:01:01.40`,
    overview: `My mood changed for the worse when I drank, leading friends to joke that I had a sinister alter ego. It wasn't far from the truth. I was souring on my relationship with Sita by this point, and being drunk provided both an escape and an excuse to act out. But I really didn't like myself during such moments. I missed being the hapless kid that I still was in my head, and knowing now how to get it right, I longed for a do-over, without the mess this time. And without Sita.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `In`,
                        {
                            isItalic: true,
                            lyric: `Ulysses,`,
                        },
                        `Garryowen is a menacing dog owned by a vulgar Irish nationalist. It seemed like a fitting eponym for my drunken self at the time.`,
                    ],
                    dotKeys: {
                        [OBSERVATION]: true,
                        [REFERENCE]: true,
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
                        lyric: `(Garry's theme)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `Since I took the name of my drunken personality from James Joyce's`,
                        {
                            isItalic: true,
                            lyric: `Ulysses,`,
                        },
                        `I went for the feel of an`,
                        {
                            anchor: `Irish reel`,
                            wiki: `Reel_(dance)`,
                        },
                        `here.`,
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
                    mixTime: `0:17:13.26`,
                    lyric: [
                        {
                            anchor: `Brushed her off`,
                            todo: true,
                            card: {
                                description: `As I began to withdraw from the relationship, Sita would reach out by groveling. And stung by my conscience, I would rush to comfort her. But as my patience wore thin over time, I would lash out in passive-aggressive ways, whereupon she would grovel even further. It became all we knew of how to speak for ourselves.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `tonight, to swipe meats and wine`,
                    ],
                },
                {
                    mixTime: `0:20:17.44`,
                    lyric: [
                        `with your`,
                        {
                            anchor: `crew of chefs and thieves.`,
                            todo: true,
                            cards: [
                                {
                                    description: `During this time, I was staying with some crust punks who were friends of Ana's. Every so often, half of us would go out to shoplift groceries, which the other half would then cook into a meal for all to share. I was always in the thieving group.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: `crooked_thieves`,
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `0:23:00.69`,
                    lyric: [
                        `Tonight the`,
                        {
                            anchor: `rubber off,`,
                            todo: true,
                            card: {
                                description: `As our relationship went south, sex became the last bargaining chip that Sita held in the power struggle between us. Since I preferred sex without a condom, she would suggest going without it as a way to coax any small kindness out of me.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `she offered as a thought,`,
                    ],
                },
                {
                    mixTime: `0:25:24.41`,
                    lyric: [
                        `if you would`,
                        {
                            anchor: `opt for bed not street.`,
                            todo: true,
                            card: {
                                description: `To save money after my lease ended, I put my things in storage and alternated between sleeping with Sita and crashing in the basement of the punk house. This gave me the regular comfort of Sita's bed, while ensuring that she never held too much leverage over me.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: `0:28:07.67`,
                    lyric: [
                        `Well`,
                        {
                            anchor: `you're not me,`,
                            todo: true,
                            card: {
                                description: `An inside joke among my friends was to address me as Garry when I was drunk, since my uneven rambling and oafish stunts made me an altogether different person.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `Garryowen. Oh no, and`,
                    ],
                },
                {
                    mixTime: `0:34:26.51`,
                    lyric: [
                        {
                            anchor: `I can't speak`,
                            todo: true,
                            card: {
                                description: `But having an alter ego also absolved me of personal responsibility for my actions, which became problematic as my drunken behavior spilled further into random acts of aggression and misdemeanors.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `for this life you've chosen.`,
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
                    mixTime: `0:39:02.09`,
                    lyric: [
                        `Drunk pissed punks tryst,`,
                        {
                            anchor: `bustin' cars with fists,`,
                            todo: true,
                            card: {
                                description: `There was this kid named Tristan in our little group who was particularly hotheaded. One night after we got kicked out of a party for a fight he incited, Tristan challenged us to see who could punch a car window and break the glass first. I didn't win.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `0:42:16.73`,
                    lyric: [
                        `the`,
                        {
                            anchor: `littlest fuss will incite`,
                            todo: true,
                            cards: [
                                {
                                    description: `After lashing out all night in a spastic fury, Tristan would be perfectly collected the next morning. I came to see that his chaotic behavior was in fact meticulously controlled, giving him a strange inner peace. So I sought to indulge my drunken temper in the same manner.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [OBSERVATION]: true,
                                    },
                                },
                                {
                                    wormhole: `lidless_vaseline_sits`,
                                },
                            ],
                        },
                        `your rage.`,
                    ],
                },
                {
                    mixTime: `0:45:10.46`,
                    lyric: [
                        `In you come, piss drunk, smug in`,
                        {
                            anchor: `smegma crust,`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        {
                                            anchor: `Smegma`,
                                            wiki: `Smegma`,
                                        },
                                        `is the smelly gunk that builds up on unwashed genitals.`,
                                    ],
                                },
                                {
                                    description: `My personal hygiene would be put on hold for days while I crashed at the punk house. But even once back at Sita's place, I would dawdle a bit before showering, since she was powerless to entice me with sex until I did.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                            ],
                        },
                    ],
                },
                {
                    mixTime: `0:48:04.18`,
                    lyric: [
                        `since`,
                        {
                            anchor: `hummers aren't love,`,
                            todo: true,
                            card: {
                                description: [
                                    `Once when Sita protested that we couldn't have sex until after I washed up, I snidely remarked that she could still give me a hummer, or`,
                                    {
                                        anchor: `blowjob,`,
                                        wiki: `Fellatio`,
                                    },
                                    `since this didn't count as sex in her view.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `or so`,
                        {
                            anchor: `she's claimed…`,
                            todo: true,
                            card: {
                                description: `Throughout our budding friendship, Sita had neglected to mention the extent of her sexual intimacy with past partners, even if always shy of intercourse. She tried to console me by pointing out that she never went all the way precisely because she didn't love them. She loved me, and so I had won. But it still stung like crazy to find out so late, and only added to my deepening resentment at the time.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: `0:51:08.36`,
                    lyric: `Well see, Garryowen, now no one,`,
                },
                {
                    mixTime: `0:57:06.28`,
                    lyric: [
                        {
                            anchor: `buys your grief`,
                            todo: true,
                            card: {
                                description: `My worlds collided one night when I smashed a random bike in a fit of drunken rage. As it turned out, the bike belonged to the friend of a neighborhood kid who liked my music from my earliest days of playing out. He had related so strongly to my songs about unfulfilled hopes. I was kind of disgusted with myself for disappointing him.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `as the boy unchosen.`,
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
                    mixTime: `1:01:11.85`,
                    lyric: [
                        `So the`,
                        {
                            anchor: `celibate you'll play,`,
                            todo: true,
                            card: {
                                description: `I gladly drank to excess since it made me impotent and thus impervious to Sita's advances. But not having sex was also purifying in its own right, as it lent the familiar comfort of being my old self again.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `self-medicated,`,
                    ],
                },
                {
                    mixTime: `1:05:17.43`,
                    lyric: `stewing in hatred for the world.`,
                },
                {
                    mixTime: `1:08:00.70`,
                    lyric: [
                        {
                            anchor: `Slammed in the well,`,
                            todo: true,
                            card: {
                                description: `Of course, using alcohol as a spiritual cleanser isn't really sustainable, especially when it requires you to vomit into a toilet and see your reflection in the water staring back at you on a regular basis.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `you'll glimpse yourself`,
                    ],
                },
                {
                    mixTime: `1:10:13.95`,
                    lyric: [
                        `with`,
                        {
                            anchor: `choler turned up,`,
                            todo: true,
                            cards: [
                                {
                                    description: `In Hippocratic medicine, choler, or yellow bile, is the humor that induces aggression.`,
                                    dotKeys: {
                                        [REFERENCE]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Much like I wouldn't have recognized myself with an`,
                                        {
                                            anchor: `"upturned collar,"`,
                                            wiki: `Upturned_collar`,
                                        },
                                        `the angry drunk returning my gaze didn't mesh with my self-image as a wide-eyed kid who meant well. At some point, I vowed to make a clean break and start over.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `cringing in shame.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `In traditional`,
                        {
                            anchor: `counterpoint,`,
                            wiki: `Counterpoint`,
                        },
                        `melodies are laid one atop another, and the chord progression is simply the byproduct of the harmonies they form in sequence. But since the chord progression for this song was already written, I took the reverse approach of taking individual notes from each harmony and distributing them among the instrumental parts to create coherent but unassuming melodic lines.`,
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
                    mixTime: `1:13:07.67`,
                    lyric: [
                        `As`,
                        {
                            anchor: `claws you built from scratches,`,
                            todo: true,
                            card: {
                                description: `Cats scratch to sharpen their claws, just like I had learned to keep my emotional defenses sharp after a lifetime of getting scratched and clawed as a victim of bullying.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `with your bilious malice,`,
                    ],
                },
                {
                    mixTime: `1:16:11.85`,
                    lyric: [
                        `fill up a package strapped to your`,
                        {
                            anchor: `scapegirl,`,
                            todo: true,
                            card: {
                                description: [
                                    `In Biblical times, a community would seek absolution by symbolically placing its`,
                                    {
                                        anchor: `sins on a goat`,
                                        wiki: `Scapegoat`,
                                    },
                                    `that was then cast into the desert. Banishing Sita from my life served a similar purpose. Without her around to cast judgment, there was no need to absolve myself of any hypocrisy.`,
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
                    mixTime: `1:19:05.57`,
                    lyric: `You'll slap her down, and push her out,`,
                },
                {
                    mixTime: `1:21:18.83`,
                    lyric: `a crumpled castaway!`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `Though I'd taken violin lessons as a child, my skills were pretty rusty by the time I made this album. But rather than get up to speed through intense practice, I just recorded the fiddle by splicing together fragments of several notes at a time. To justify my cop-out, I threw in a complicated`,
                        {
                            anchor: `glissando`,
                            wiki: `Glissando`,
                        },
                        `wherever the score permitted.`,
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
                    mixTime: `1:25:03.48`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Garry's theme)`,
                    },
                },
            ],
        },
        {
            unitMap: {
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: `1:34:05.58`,
                    lyric: `Your rabid wit unleashed, Garryowen, to no end,`,
                },
                {
                    mixTime: `1:41:15.34`,
                    lyric: [
                        `you'd`,
                        {
                            anchor: `make her strip bare`,
                            todo: true,
                            card: {
                                description: `Sita learned early on that she could always whisk me away for some lovemaking by hovering naked beside me and shivering dramatically from the cold. But as our relationship soured, I grew tired of this brazen appeal to my primal and protective instincts, and drew some cruel pleasure in letting her shiver for just a bit longer.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `just to watch her freeze.`,
                    ],
                },
            ],
        },
        {
            unitMap: {
                formType: BRIDGE,
            },
            mainVerses: [
                {
                    mixTime: `1:47:13.25`,
                    lyric: [
                        `You won't always`,
                        {
                            anchor: `have her for your pet.`,
                            todo: true,
                            card: {
                                description: `Sita's manner of prostrating herself, which forced me to wield an absolute power that I never asked for, was in no small way infuriating. But it was also heartbreakingly endearing, and thus it was guaranteed to make me love her, in the way one necessarily loves a pet. So I never doubted that the impending breakup would be equally wrenching for both of us.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `1:53:00.69`,
                    lyric: [
                        `Someday`,
                        {
                            anchor: `she won't be there;`,
                            todo: true,
                            card: {
                                description: `But this codependency wasn't just the foundational basis of my love for Sita. It was really all I knew of how to love, period. I would never be asked to love in this way again, certainly not by any of the carefree scenesters I ogled at every show. And so it wasn't just cowardice that prevented me from cutting the cord. I genuinely feared whether I could ever truly love anyone else.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `someday yet!`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: [
                        `The`,
                        {
                            anchor: `bagpipes`,
                            wiki: `Bagpipes`,
                        },
                        `here evoke a funeral procession to mark the death of my relationship with Sita. Since I didn't own any bagpipes, let alone Irish ones, I mimicked the sound by overdubbing multiple takes of a two-part harmony on the melodica, with one part acting as the chanter, and the other as the drone.`,
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
                    mixTime: `1:57:16.73`,
                    lyric: [
                        {
                            anchor: `Final trip on a tanker,`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `A`,
                                        {
                                            anchor: `tanker`,
                                            wiki: `Tanker_(ship)`,
                                        },
                                        `is a marine vessel that transports crude oil. It can also be slang for a drinking spree.`,
                                    ],
                                    dotKeys: {
                                        [PUN]: true,
                                    },
                                },
                                {
                                    description: `As part of my plan to start afresh with someone new, I wanted to stay sober for a while, but that was unlikely to happen unless my drinking brought me to the point of sickness. I also needed plenty of alcohol to muster the courage to break up with Sita. And so I drank to oblivion each night, hoping to provide the necessary conditions for both purposes.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                            ],
                        },
                        `you'll`,
                        {
                            anchor: `drop your anchor`,
                            todo: true,
                            card: {
                                description: `I had ascribed every last one of my grievances to Sita for so long that all I could feel after the breakup was an eerie serenity. I could finally drop my "anger," and that was tantamount to feeling happy.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                    ],
                },
                {
                    mixTime: `2:01:01.39`,
                    lyric: `to which you've chained her; she'll sink into`,
                },
                {
                    mixTime: `2:03:25.11`,
                    lyric: `the briny end. Now that you're cleansed,`,
                },
                {
                    mixTime: `2:06:18.83`,
                    lyric: [
                        `aren't you the`,
                        {
                            anchor: `faltering dear?`,
                            todo: true,
                            card: {
                                description: `With my slate now wiped clean, I took pains to affect an endearingly awkward persona. As phony as it was, I'd been switching social identities for so long that being phony was how I felt genuine.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                    mixTime: `2:09:02.09`,
                    lyric: [
                        `They told her, "Never help a`,
                        {
                            anchor: `self-abuser`,
                            todo: true,
                            cards: [
                                {
                                    description: [
                                        `I had an intermittent habit of`,
                                        {
                                            anchor: `cutting myself`,
                                            wiki: `Self-harm`,
                                        },
                                        `to deal with distress. Early in our friendship, Sita took interest in my scars, which I interpreted as a morbid fascination with my troubled past. In time, I came to see that she was just sympathizing with a fellow depressive, one whose coping mechanisms were curiously different from her own.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                /**
                                 * NOTE: This obscures the greater point of
                                 * self-harm, so I'm leaving it out for now.
                                 */
                                /**
                                {
                                    description: [
                                        `While the term "self-abuse" can refer to literal`,
                                        {
                                            anchor: `self-harm,`,
                                            wiki: `Self-harm`
                                        },
                                        `it's also used in religious circles to describe masturbation. Toward the end, I masturbated frequently to lower my sex drive, hoping that this would strengthen my resolve to break up with Sita.`
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true
                                    }
                                }
                                **/
                            ],
                        },
                    ],
                },
                {
                    mixTime: `2:12:16.75`,
                    lyric: [
                        [
                            `see himself`,
                            {
                                anchor: `as well in you."`,
                                todo: true,
                                card: {
                                    description: `But if I was capable of injuring myself, then I was unlikely to have any compunction about hurting anyone close to me, who now knew the worst side of me as only I once did.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            },
                        ],
                    ],
                },
                {
                    mixTime: `2:15:00.00`,
                    lyric: `You'd smite your kitten good, galled that smitten`,
                },
                {
                    mixTime: `2:17:13.26`,
                    lyric: `she would opt just not to hear!`,
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                todo: true,
                card: {
                    description: `After some trial and error, I decided the counterpoint sounds best when the melodies occupy the same register, allowing them to blend together as a single harmonic layer. At the same time, the ear can still tease the instruments apart due to their different timbres, as is the case with the banjo, fiddle, and tin whistle heard here.`,
                    dotKeys: {
                        [SONGCRAFT]: true,
                    },
                },
            },
        },
        {
            unitMap: {
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: `2:19:26.51`,
                    lyric: [
                        {
                            anchor: `Toora-loora-li,`,
                            todo: true,
                            card: {
                                description: `Related to the English "toodle-oo," the Irish "tooraloo" carries the same meaning of "goodbye." Nonsensical variants of it are prevalent in Irish drinking songs and lullabies.`,
                                dotKeys: {
                                    [REFERENCE]: true,
                                },
                            },
                        },
                        `Garryowen, who owes no one,`,
                    ],
                },
                {
                    mixTime: `2:26:15.34`,
                    lyric: [
                        `becomes someone's`,
                        {
                            anchor: `last-ditch alibi.`,
                            todo: true,
                            card: {
                                description: `While my friends and I were clearly joking to say that it was Garry, not me, who had committed this or that act of vandalism, I kind of accepted it as the truth. And now it also wasn't me who had sapped Sita of her confidence over the years, finally to leave her a crumbled wreck. It must have been Garry. I wasn't there.`,
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
                formType: REFRAIN,
                subsequent: true,
            },
            mainVerses: [
                {
                    mixTime: `2:30:20.93`,
                    lyric: `You're a purer lie…`,
                },
            ],
        },
        {
            unitMap: {
                formType: OUTRO,
            },
            mainVerses: [
                {
                    mixTime: `2:43:07.67`,
                    lyricCentre: {
                        isItalic: true,
                        lyric: `(Garry's theme)`,
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
                        `After`,
                        {
                            isItalic: true,
                            lyric: `Yearling's Bobtail`,
                        },
                        `was rejected by the last record label that had been vetting us, I got so depressed that I went on a monthlong bender. I eventually kept a box of wine by my bed to calm my nerves in the middle of the night. One day upon skipping my morning beers, I could sense my bedroom walls conspiring to attack me. I found out this was the first stage of`,
                        {
                            anchor: `delirium tremens`,
                            wiki: `Delirium_tremens`,
                        },
                        `and began attending`,
                        {
                            anchor: `Alcoholics Anonymous`,
                            wiki: `Alcoholics_Anonymous`,
                        },
                        `meetings. I haven't had a drink since.`,
                    ],
                    dotKeys: {
                        [AFTERWORD]: true,
                    },
                },
            },
        },
    ],
}
