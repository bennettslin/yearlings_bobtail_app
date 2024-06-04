import {
    AFTERWORD,
    BACKSTORY,
    OBSERVATION,
    PUN,
    REFERENCE,
    SONGCRAFT,
} from '../../../../src/constants/dots'
import {
    REFRAIN,
    VERSES,
    CHORUS,
    BRIDGE,
    INTRO,
    SOLO,
    OUTRO,
    IS_UNIT_DOT,
} from '../../../../src/constants/lyrics'
import { REVIEW, REVISE } from '../../../containers/Annotations/constants/todos'

export default {
    title: 'Garryowen',
    /**
     * This is for recalibrating the player start time after redoing the mix.
     * For this song, the reference and start times are the same.
     */
    referenceDescription: `Banjo in anacrusis`,
    playerStartTime: 2107.996,
    mixStartTime: `0:01:01.40`,
    review: true,
    overview: `My mood would change for the worse when I drank, leading friends to joke that I had a sinister alter ego. Yet it wasn't far from the truth. I was souring on my relationship with Sita by this point, and being drunk provided both an escape and an excuse to act out. But I really didn't like myself when this happened; I missed being the hapless kid I was before. And knowing now how to get it right, I longed for a do-over— only this time without the mess. In other words… without Sita.`,
    lyricUnits: [
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `In`,
                        {
                            isItalic: true,
                            lyric: `Ulysses`,
                        },
                        `, Garryowen is a menacing dog owned by a vulgar Irish nationalist. It seemed like a fitting eponym for my drunken self at the time.`,
                    ],
                    dotKeys: {
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
                        lyric: `(fiddle and banjo)`,
                    },
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `Since I took the name of my drunken personality from James Joyce's`,
                        {
                            isItalic: true,
                            lyric: `Ulysses`,
                        },
                        `, I went with the feel of an`,
                        {
                            anchor: `Irish reel`,
                            wiki: `Reel_(dance)`,
                        },
                        `for this song.`,
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
                            todo: REVISE,
                            problem: `I just don't like this as it is. It's too complicated. I grew distant, she groveled. That's really it.`,
                            card: {
                                description: `Anytime I began to grow distant, Sita would reach out by groveling. I would then rush back to comfort her, stung by my conscience. But as my patience wore thin, I would lace this comfort with passive-aggressive swipes— whereupon she would grovel even further. It became all we knew of how to speak for ourselves.`,
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
                            anchor: `crew of chefs and thieves`,
                            cards: [
                                {
                                    description: [
                                        `During this time, I was staying with some`,
                                        {
                                            anchor: `crust punks`,
                                            wiki: `Gutter_punk`,
                                        },
                                        `who were friends of Ana's. Every so often, half of us would go out to pilfer groceries, while the other half would cook whatever was brought back into a meal for all to share. I was always in the thieving group.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    wormhole: `crooked_thieves`,
                                },
                            ],
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `0:23:00.69`,
                    lyric: [
                        // NOTE: I added a comma here.
                        `Tonight, the`,
                        {
                            anchor: `rubber off`,
                            card: {
                                description: `As our relationship went south, sex became the last bargaining chip that Sita held in the power struggle between us. Since I didn't like the feeling of wearing a condom, she would offer to go without one just to coax any small kindness out of me.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `, she offered as a thought,`,
                    ],
                },
                {
                    mixTime: `0:25:24.41`,
                    lyric: [
                        `if you would`,
                        {
                            anchor: `opt for bed not street`,
                            card: {
                                description: [
                                    `I was tired of working extra shifts just to pay the rent. So after my lease ended, I alternated between spending some nights with Sita, and others crashing in the`,
                                    {
                                        anchor: `punk house`,
                                        wiki: `Punk_house`,
                                    },
                                    `basement. This gave me the regular comfort of Sita's bed, while ensuring that she never held too much leverage over me.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                formType: REFRAIN,
            },
            mainVerses: [
                {
                    mixTime: `0:28:07.67`,
                    lyric: [
                        `Well`,
                        {
                            anchor: `you're not me`,
                            card: {
                                description: `An inside joke among my friends was to address me as Garry when I was drunk, since my uneven rambling and oafish stunts made me an altogether different person.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `, Garryowen. Oh no, and`,
                    ],
                },
                {
                    mixTime: `0:34:26.51`,
                    lyric: [
                        {
                            anchor: `I can't speak`,
                            card: {
                                description: `But having an alter ego also absolved me of personal responsibility for my actions, which became a problem as my drunken behavior spilled into random aggression and misdemeanors.`,
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
                        `Drunk pissed`,
                        {
                            anchor: `punks tryst,`,
                            todo: REVIEW,
                            card: {
                                description: [
                                    `I wore`,
                                    {
                                        anchor: `baseball tees`,
                                        wiki: `Raglan_sleeve`,
                                    },
                                    `back then, thinking that by alienating the fewest subcultures, I could appeal to the most women. I was also baby-faced enough to be mistaken for a middle schooler. Tristan, one of the punks in the thieving group, liked our ragtag look and referred to us as the`,
                                    {
                                        anchor: `Young Ones`,
                                        wiki: `The_Young_Ones_(TV_series)`,
                                    },
                                    `. He was clearly our Vyvyan. I'm not sure which of the other characters he saw me as.`,
                                ],
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        {
                            anchor: `bustin' cars with fists`,
                            card: {
                                description: `Tristan was particularly hotheaded when drunk. One night after getting us kicked out of a party for a fight he started, he challenged us to see who could punch a car window and break the glass first. I didn't win.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:42:16.73`,
                    lyric: [
                        `the`,
                        {
                            anchor: `littlest fuss will incite`,
                            cards: [
                                {
                                    description: `After lashing out all night in a spastic fury, Tristan would be perfectly collected the next morning. I came to see that his chaotic behavior was in fact meticulously controlled, giving him a strange inner peace. So I sought to steer my drunken temper in the same direction.`,
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
                            anchor: `smegma crust`,
                            cards: [
                                {
                                    description: `My personal hygiene would be put on hold for days while I stayed at the punk house. But even once back at Sita's place, I would dawdle a bit before showering, since she was powerless to entice me with sex until I did.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
                                {
                                    description: [
                                        {
                                            anchor: `Smegma`,
                                            wiki: `Smegma`,
                                        },
                                        `is the smelly gunk that builds up on unwashed genitals.`,
                                    ],
                                },
                            ],
                        },
                        `,`,
                    ],
                },
                {
                    mixTime: `0:48:04.18`,
                    lyric: [
                        `since`,
                        {
                            anchor: `hummers`,
                            review: true,
                            card: {
                                description: `A hummer is a blowjob in which the giver stimulates the penis further by humming to create vibrations. Of course, this technique can be used to arouse the vulva as well.`,
                                dotKeys: {
                                    [REFERENCE]: true,
                                },
                            },
                        },
                        {
                            anchor: `aren't love`,
                            review: true,
                            card: {
                                description: `Throughout our budding friendship, Sita had neglected to mention her sexual intimacy with past partners, even if it was always shy of intercourse. When I found out, she tried to console me by pointing out that she never went all the way with them because she didn't love them. She loved me, which meant I'd won. But it still stung like crazy to find out so late, and this deepened my resentment.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `, or so she's claimed…`,
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
                            review: true,
                            card: {
                                description: `My worlds collided when I smashed a random bike one night in a drunken fit. As it turns out, the bike belonged to a scene kid who'd liked the Yearlings since our early days. He'd related so much to my songs about unfulfilled hopes. I was disgusted with myself for having disappointed him.`,
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
                            anchor: `celibate you'll play`,
                            card: {
                                description: `Drinking made me impotent and thus impervious to Sita's advances, so I gladly drank to excess. And not having sex was also purifying in its own right, since this lent the familiar comfort of being my lovelorn self again.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, self-medicated,`,
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
                            anchor: `Slammed in the well`,
                            todo: REVIEW,
                            card: {
                                description: `But vomiting into a toilet, and then seeing your miserable reflection in the water staring back at you, only works as a wake-up call the first time. After that, it's a cliche.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                    [OBSERVATION]: true,
                                },
                            },
                        },
                        `, you'll glimpse yourself`,
                    ],
                },
                {
                    mixTime: `1:10:13.95`,
                    lyric: [
                        `with`,
                        {
                            anchor: `choler turned up`,
                            cards: [
                                {
                                    description: `In Hippocratic medicine, choler is the humor that induces aggression.`,
                                    dotKeys: {
                                        [REFERENCE]: true,
                                    },
                                },
                                {
                                    description: [
                                        `Much like I wouldn't have recognized myself wearing an "upturned collar," the angry drunk I saw in my reflection didn't mesh with my self-image as a wide-eyed kid who meant well. At some point, I vowed to make a clean break and start over.`,
                                    ],
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                        [PUN]: true,
                                    },
                                },
                            ],
                        },
                        `, cringing in shame.`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    // NOTE: Counterpoint is mentioned earlier in Ash Wednesday.
                    description: [
                        `In traditional`,
                        {
                            anchor: `counterpoint`,
                            wiki: `Counterpoint`,
                        },
                        `, melodies are laid atop one another, and the chord progression is a byproduct of the harmonies they form in sequence. But since the chords for this song were established first, the reverse approach was called for. I assigned each note in a chord to a different part. Then for each part, I shaped its sequence of assigned notes into an unassuming counter-melody.`,
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
                            anchor: `claws you built from scratches`,
                            card: {
                                description: `Cats scratch to sharpen their claws, just like I'd learned to keep my emotional defenses sharp after a lifetime of getting scratched and clawed by bullies.`,
                                dotKeys: {
                                    [OBSERVATION]: true,
                                    [PUN]: true,
                                },
                            },
                        },
                        `, with your bilious malice,`,
                    ],
                },
                {
                    mixTime: `1:16:11.85`,
                    lyric: [
                        `fill up a package strapped to your`,
                        {
                            anchor: `scapegirl`,
                            review: true,
                            card: {
                                description: [
                                    `In Biblical times, a community would absolve its sins by ritually placing them`,
                                    {
                                        anchor: `on a goat`,
                                        wiki: `Scapegoat`,
                                    },
                                    `that was then cast into the desert. Banishing Sita from my life was meant to serve the same purpose: Without her around to cast judgment, there would be no need to atone for my hypocrisy.`,
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
                card: {
                    description: [
                        `Though I'd played violin for ten years as a child, my skills were rusty by the time I made this album. Rather than get up to speed through intense practice, I created the fiddle parts by recording a fragment at a time, and then splicing those takes together. To make up for my cop-out, I threw in a complicated`,
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
                        lyric: `(tin whistle, fiddle, and mandolin)`,
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
                            card: {
                                description: `Sita learned early on that she could always whisk me away for some lovemaking by hovering naked beside me while shivering dramatically from the cold. But as our relationship soured, this brazen appeal to both my primal and protective instincts grew tiresome, and I drew some cruel pleasure in letting her shiver for just a bit longer.`,
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
                            anchor: `have her for your pet`,
                            review: true,
                            card: {
                                description: `Sita's manner of prostrating herself exasperated me to no end, as it forced me to wield power that I never asked for. But its endearing nature was also guaranteed to make me love her, and I did. So I never doubted that the impending breakup would be wrenching for both of us.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `.`,
                    ],
                },
                {
                    mixTime: `1:53:00.69`,
                    lyric: [
                        `Someday`,
                        {
                            anchor: `she won't be there`,
                            card: {
                                description: `But this codependency wasn't just the foundational basis of my love for Sita. It was really all I knew of how to love, period. I would never be asked to love in this way again— certainly not by any of the carefree scenesters whom I ogled at every show. And so it wasn't just cowardice that prevented me from cutting the cord. I genuinely feared whether I could ever truly love anyone else.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
                                },
                            },
                        },
                        `; someday yet!`,
                    ],
                },
            ],
            unitDot: {
                anchor: IS_UNIT_DOT,
                card: {
                    description: [
                        `The`,
                        {
                            anchor: `bagpipes`,
                            wiki: `Bagpipes`,
                        },
                        `heard here evoke a funeral procession to mark the death of the relationship. I mimicked the sound by overdubbing multiple takes of a two-part harmony on the melodica, with one part acting as the chanter and the other as the drone.`,
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
                            anchor: `Final trip on a tanker`,
                            review: true,
                            cards: [
                                {
                                    description: `I knew I had to stay relatively sober to start afresh with someone new. Yet short of being drunk, I could never muster the courage to break up with Sita. So I drank myself into a stupor each night, hoping to wake one morning and discover that, by some miracle, I was both newly single and repulsed by the taste of alcohol.`,
                                    dotKeys: {
                                        [BACKSTORY]: true,
                                    },
                                },
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
                            ],
                        },
                        `, you'll`,
                        {
                            anchor: `drop your anchor`,
                            card: {
                                description: `More than anything else, I was tired of endlessly lurching from one emotional extreme to the next. Breaking up meant that I could finally drop my "anger" and keep my mood anchored in place.`,
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
                            anchor: `faltering dear`,
                            card: {
                                description: `And with my slate wiped clean, I could take pains to affect an endearingly awkward persona.`,
                                dotKeys: {
                                    [BACKSTORY]: true,
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
                    mixTime: `2:09:02.09`,
                    lyric: [
                        `They told her, "Never help a`,
                        {
                            anchor: `self-abuser`,
                            review: true,
                            cards: [
                                {
                                    description: [
                                        `I had an intermittent habit of`,
                                        {
                                            anchor: `cutting myself`,
                                            wiki: `Self-harm`,
                                        },
                                        `to deal with depression. Early in our friendship, Sita took interest in my scars, which I interpreted to be a morbid fascination with my troubled past. But I later came to see that she was just sympathizing with a fellow depressive, one whose coping mechanisms were curiously different from her own.`,
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
                                    description: `While the term "self-abuse" can refer to literal self-harm, it's also used in religious circles to describe masturbation. Toward the end, I masturbated frequently to lower my sex drive, hoping that this would strengthen my resolve to break up with Sita.`,
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
                                anchor: `as well in you`,
                                review: true,
                                card: {
                                    description: `But if I was capable of hurting myself, then I also wouldn't have any qualms about hurting those close to me— who now knew the worst side of me as only I once did.`,
                                    dotKeys: {
                                        [OBSERVATION]: true,
                                    },
                                },
                            },
                            `."`,
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
                card: {
                    description: [
                        `After some trial and error, I decided the counterpoint sounds best with each part occupying the same register, as this allows them to blend into a single harmonic layer. At the same time, the ear can tease apart the different timbres of each instrument, as with the banjo, fiddle, and`,
                        {
                            anchor: `tin whistle`,
                            wiki: `Tin_whistle`,
                        },
                        `heard here.`,
                    ],
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
                            anchor: `Toora-loora-li`,
                            card: {
                                description: [
                                    `Related to the English "toodle-oo," the Irish "tooraloo" carries the same meaning of "goodbye." Nonsensical variants are prevalent in drinking songs and`,
                                    {
                                        anchor: `lullabies`,
                                        wiki: `Too_Ra_Loo_Ra_Loo_Ral`,
                                    },
                                    `.`,
                                ],
                            },
                        },
                        `, Garryowen, who owes no one,`,
                    ],
                },
                {
                    mixTime: `2:26:15.34`,
                    lyric: [
                        `becomes someone's`,
                        {
                            anchor: `last-ditch alibi`,
                            card: {
                                description: `Though my friends were only joking to say it was Garry and not me who'd committed this or that act of vandalism, on some level I accepted it as the truth. And now it also wasn't me who'd drained Sita of her confidence through the years, leaving her a crumbled wreck. It must have been Garry. I wasn't there.`,
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
                        lyric: `(fiddle and dobro)`,
                    },
                },
            ],
        },
        {
            unitMap: {},
            unitDot: {
                anchor: IS_UNIT_DOT,
                review: true,
                card: {
                    description: [
                        `After`,
                        {
                            isItalic: true,
                            lyric: `Yearling's Bobtail`,
                        },
                        `was rejected by every last indie label, I got so depressed that I went on a months-long bender. Before long, I needed a box of wine by my bedside to calm my nerves at night. One day upon skipping my morning beers, I sensed my bedroom walls conspiring to attack me— a warning sign of`,
                        {
                            anchor: `delirium tremens`,
                            wiki: `Delirium_tremens`,
                        },
                        `, I was told. I attended my first`,
                        {
                            anchor: `Alcoholics Anonymous`,
                            wiki: `Alcoholics_Anonymous`,
                        },
                        `meeting that evening. The paranoia lasted a week. I haven't drank since.`,
                    ],
                    dotKeys: {
                        [AFTERWORD]: true,
                    },
                },
            },
        },
    ],
}
